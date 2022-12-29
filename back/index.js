const express = require('express')
const app = express()
const path = require('path')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000

const axios = require('axios').default
const FormData = require('form-data')
const cheerio = require('cheerio')

server.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'example.com')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
})

app.use(express.static(path.join(__dirname, 'public')))

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   next()
// })

const PROTOCOLE = 'https://'

app.get('/searchOnEmcitv/', async (req, res) => {
  const { search } = req.query
  let response
  try {
    response = await axios({
      method: 'get',
      url: `https://emcitv.com/search/?search=${search}`
    })
  } catch (err) {
    console.error(err)
  }
  const $ = cheerio.load(response.data)
  const results = $('.item-ct.clearfix').toArray()

  res.json(
    results.map((card) => {
      const author = $(card)
        .find('.author')
        .text()
        .replace(/\s\s+/g, '')
        .replace(/^(par|avec|présenté par)/gm, '')
      return {
        href: 'https://emcitv.com' + $(card).find('h4').children().attr('href'),
        title: $(card).find('h4').text(),
        image: $(card).find('img').attr('src'),
        author
      }
    })
  )
})

app.get('/searchOnFamilleChretienne/', async (req, res) => {
  const { search } = req.query
  let response
  try {
    response = await axios({
      method: 'get',
      url: `https://www.famillechretienne.fr/archives/recherche?sort=weight&word=${search}`
    })
  } catch (err) {
    console.error(err)
  }
  const $ = cheerio.load(response.data)
  const results = $('.article-inline.small.gr-article-payant').toArray()
  res.json(
    results.map((card) => {
      const image = $(card).find('img').attr('src')
      return {
        href:
          'https://www.famillechretienne.fr' + $(card).find('a').attr('href'),
        title: $(card)
          .find('h2')
          .text()
          .replaceAll(/  /g, ' ')
          .replaceAll(/\n/g, ''),
        image: image && 'https://www.famillechretienne.fr' + image
      }
    })
  )
})

app.get('/searchOnJcsr/', async (req, res) => {
  const { search } = req.query
  let response
  try {
    response = await axios({
      method: 'get',
      url: `https://jcsr.church/page/1/?s=${search}`
    })
  } catch (err) {
    console.error(err)
  }
  const $ = cheerio.load(response.data)
  const results = $('.cpt-listing.has-sidebar>article').toArray()
  res.json(
    results.map((card) => {
      return {
        href: $(card).find('h2.post-title>a').attr('href'),
        title: $(card).find('h2.post-title>a').text(),
        image: $(card).find('.cpt-thumb.col-md-5 img').attr('src')
      }
    })
  )
})

app.get('/searchOnGotQuestions/', async (req, res) => {
  var bodyFormData = new FormData()
  bodyFormData.append('searchTerm', req.query.search)

  let response
  try {
    response = await axios({
      method: 'post',
      url: 'https://www.gotquestions.net/admin/BackendOrg/PopulateDropdownSearch?lid=6',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  } catch (err) {
    console.error(err)
  }
  res.json(
    response.data.map(({ label, value }) => ({
      title: label,
      href: value.startsWith(PROTOCOLE) ? value : PROTOCOLE + value
    }))
  )
})

app.get('/searchOnAleteia/', async (req, res) => {
  const { search } = req.query
  let response
  try {
    response = await axios({
      method: 'post',
      url: 'https://5ijs6ge2a6-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.10.5)%3B%20Browser%20(lite)%3B%20JS%20Helper%20(3.5.4)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.12.0)&x-algolia-api-key=caff1729b7b2f5864737b2f4c593a84c&x-algolia-application-id=5IJS6GE2A6',
      data: `{\r\n    "requests": [\r\n        {\r\n            "indexName": "articles_fr",\r\n            "params": "highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&query=${search}&maxValuesPerFacet=10&page=0&facets=%5B%22categories%22%2C%22author%22%2C%22tags%22%5D&tagFilters="\r\n        }\r\n    ]\r\n}`
    })
  } catch (err) {
    console.error(err)
  }
  res.json(
    response.data.results[0].hits.map(({ title, url, image }) => ({
      href: url,
      title,
      image: image
    }))
  )
})

let numUsers = 0

io.on('connection', (socket) => {
  let addedUser = false

  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    })
  })

  // when the client emits 'add user', this listens and executes
  socket.on('add user', (username) => {
    if (addedUser) return

    // we store the username in the socket session for this client
    socket.username = username
    ++numUsers
    addedUser = true
    socket.emit('login', {
      numUsers: numUsers
    })
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    })
  })

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username
    })
  })

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    })
  })

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      })
    }
  })
})
