<template>
  <div class="dark:bg-light-black dark:text-white min-h-screen">
    <Header />
    <Breadcrumb :items="links" />
    <BgColorSection>
      <template v-slot:title>{{ title }}</template>
      <template v-slot:body>
        <H2Title class="relative">
          {{ title }}
          <HandDrownArrowComment :title="title" inverse />
        </H2Title>
        <br />
        <p class="relative">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam
          deserunt magni ipsa numquam quia culpa dolore odit incidunt quam
          ducimus aut provident quos assumenda illo, debitis porro reprehenderit
          voluptatibus.
          <HandDrownArrowComment :title="title" right="0" />
        </p>
      </template>
    </BgColorSection>
    <Footer />
    <FluxRSSLink />
    <IframSpotify episode="4ZEhKWVhTo6s8EeXF0zM1w" />
    <CardQR :title="title" />
    <CardQR :slug="slug" :title="title">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        cupiditate tempore voluptatem modi assumenda reiciendis. Accusantium,
        assumenda. Nisi, quae. Eius quidem minus delectus, obcaecati illo
        blanditiis soluta dicta repellendus id.
      </p>
    </CardQR>
    <CardQR :plateform="plateformQuestion" :href="href" :title="title" />
    <CardSearchResult :title="title" />
    <CardSearchResult :title="title" :author="author" />
    <CardSearchResult
      :href="href"
      :title="title"
      :image="image"
      :author="author"
      :plateform="plateformSearch"
    />
    <div class="flex flex-wrap">
      <TopicImg :src="src" class="h-40 w-40" />
      <TopicCard :cover="cover" :to="to" :title="title" class="h-40 w-40" />
      <CardMag />
      <CardMag :volume="1" />
      <CardBook :title="title" />
      <CardBook :title="title" :src="slug" :amazon="amazon" />
      <SectionDownloadDocumentsListItem
        loading="lazy"
        :author="authorEnum"
        :format="format"
        :href="href"
        :title="title"
      />
      <SectionDownloadDocumentsListItem
        loading="lazy"
        :author="authorEnum"
        :format="format"
        :thumbnail="image2"
        :href="href"
        :title="title"
      />
      <CardDocument
        loading="lazy"
        :author="author"
        :slug="slug"
        :title="title"
      />
      <ManuscriptCard
        :title="title"
        :sites="[...sites, ...sites, ...sites]"
        :image="slug"
      />
      <ManuscriptCard :title="title" :sites="sites" :image="slug" />
      <ManuscriptCard :title="title" :sites="[]" :image="slug" />
    </div>
    <div class="flex items-center">
      <ButtonYoutube
        class="mt-3 md:mt-4 hover:scale-110 duration-300"
        :href="href"
      >
        {{ title }}
      </ButtonYoutube>
      <SearchInput v-model="inputValue" :placeholder="placeholder" />
      <Tag class="ml-4" :active="inputValue === title">
        {{ title }}
      </Tag>
      <Tag class="ml-4" :active="true" @click="inputValue = ''">
        {{ inputValue }}
      </Tag>
    </div>
    <div class="p-4 flex gap-4">
      <IconAleteiaLogo class="h-5" />
      <IconAnchor class="h-5" />
      <IconAmazon class="h-5" />
      <IconBackspace class="h-5" />
    </div>
  </div>
  <PlaylistLinks
    :playlistYoutubeId="playlistYoutubeId"
    :playlistDailymotionId="playlistDailymotionId"
  />
  <ResponsiveImageGrid />
</template>

<script lang="ts">
import CardBook from '~~/components/book/CardBook.vue'
import CardDocument from '~~/components/document/CardDocument.vue'
import ManuscriptCard from '~~/components/document/ManuscriptCard.vue'
import SectionDownloadDocumentsListItem from '~~/components/document/SectionDownloadDocumentsListItem.vue'
import ButtonYoutube from '~~/components/forms/button/ButtonYoutube.vue'
import SearchInput from '~~/components/forms/SearchInput.vue'
import ResponsiveImageGrid from '~~/components/gallery/ResponsiveImageGrid.vue'
import IconAleteiaLogo from '~~/components/icons/IconAleteiaLogo.vue'
import IconAmazon from '~~/components/icons/IconAmazon.vue'
import IconAnchor from '~~/components/icons/IconAnchor.vue'
import IconBackspace from '~~/components/icons/IconBackspace.vue'
import CardMag from '~~/components/magazine/CardMag.vue'
import FluxRSSLink from '~~/components/podcast/FluxRSSLink.vue'
import IframSpotify from '~~/components/podcast/IframSpotify.vue'
import CardQR from '~~/components/qr/CardQR.vue'
import CardSearchResult from '~~/components/search/CardSearchResult.vue'
import TopicCard from '~~/components/topics/TopicCard.vue'
import TopicImg from '~~/components/topics/TopicImg.vue'
import PlaylistLinks from '~~/components/videos/PlaylistLinks.vue'
import {
  AuthorEnum,
  DebatPlateformEnum,
  FormatEnum,
  QuestionPlateformEnum,
  SearchPlateformEnum
} from '~~/types'

definePageMeta({
  layout: 'empty'
})

export default defineNuxtComponent({
  name: 'UiPage',

  components: {
    FluxRSSLink,
    IframSpotify,
    CardQR,
    CardSearchResult,
    TopicImg,
    TopicCard,
    CardBook,
    CardDocument,
    ManuscriptCard,
    SectionDownloadDocumentsListItem,
    SearchInput,
    ButtonYoutube,
    ResponsiveImageGrid,
    IconAleteiaLogo,
    IconAmazon,
    IconAnchor,
    IconBackspace,
    CardMag,
    PlaylistLinks
  },

  data() {
    const href = 'https://www.google.fr/'
    const to = '/ui'
    const title = 'Titre'
    return {
      playlistYoutubeId: 'id',
      playlistDailymotionId: 'id',
      plateformQuestion: QuestionPlateformEnum.GOT_QUESTIONS,
      plateformSearch: SearchPlateformEnum.UNKNOW,
      plateformDebat: DebatPlateformEnum.UNKNOW,
      slug: 'slug',
      href,
      title,
      image: 'https://via.placeholder.com/600x600',
      image2: 'https://via.placeholder.com/224x305',
      author: 'Auteur',
      authorEnum: AuthorEnum.UNKNOW,
      src: 'placeholder',
      cover: {
        color: '#000',
        src: 'placeholder'
      },
      to: '/ui/',
      amazon: 'amazon',
      sites: [
        {
          name: title,
          href
        },
        {
          name: title,
          href
        }
      ],
      links: [
        {
          name: title,
          to
        },
        {
          name: title,
          to
        }
      ],
      format: FormatEnum.UNKNOW,
      inputValue: '',
      placeholder: 'placeholder'
    }
  }
})
</script>