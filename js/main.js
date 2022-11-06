document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('home')) {
    const eInput = document.getElementById('search-input')
    const ePdfList = document.getElementById('pdf-list').children

    eInput.addEventListener('input', () => {
      const word = slugify(eInput.value)

      for (i = 0; i < ePdfList.length; i++) {
        const { slug } = ePdfList[i].dataset
        ePdfList[i].style.display = slug.indexOf(word) > -1 ? '' : 'none'
      }
    })

    const eTags = document.getElementById('tag-list').children
    const tagActifs = []

    for (let i = 0; i < eTags.length; i++) {
      const eTag = eTags[i]

      eTag.addEventListener('click', () => {
        const { value } = eTag.dataset
        const index = tagActifs.indexOf(value)

        if (index > -1) {
          tagActifs.splice(index, 1)
          eTag.classList.remove('tag-active')
        } else {
          tagActifs.push(value)
          eTag.classList.add('tag-active')
        }

        for (i = 0; i < ePdfList.length; i++) {
          const { tag } = ePdfList[i].dataset
          if (tagActifs.length) {
            ePdfList[i].style.display = tagActifs.includes(tag) ? '' : 'none'
          } else {
            ePdfList[i].style.display = ''
          }
        }
      })
    }
  }
})

function slugify(string) {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}
