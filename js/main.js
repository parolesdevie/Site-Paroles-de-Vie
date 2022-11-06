document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('home')) {
    const eInput = document.getElementById('search-input')

    eInput.addEventListener('input', () => {
      const word = slugify(eInput.value)
      const list = document.getElementById('pdf-list').children

      for (i = 0; i < list.length; i++) {
        const { slug } = list[i].dataset
        list[i].style.display = slug.indexOf(word) > -1 ? '' : 'none'
      }
    })
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
