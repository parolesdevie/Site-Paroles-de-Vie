import { TopicService } from '~~/services'

export default function useTopicList() {
  const topics = ref(TopicService.getAll())

  const filter = ref('')

  const filteredTopics = computed(() => {
    return topics.value.filter(
      (topic) => slugify(topic.title).lastIndexOf(slugify(filter.value)) > -1
    )
  })

  function slugify(value: string): string {
    const a =
      'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b =
      'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return value
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

  return {
    topics,
    filter,
    filteredTopics
  }
}
