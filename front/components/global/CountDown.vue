<template>
  <div class="flex justify-center gap-5 text-center">
    <div v-if="days">
      <div class="font-bold text-4xl mb-1">
        {{ twoDigits(days) }}
      </div>
      <div class="inline-block uppercase mb-1">Jou</div>
    </div>
    <div>
      <div class="font-bold text-4xl mb-1">
        {{ twoDigits(hours) }}
      </div>
      <div class="inline-block uppercase mb-1">Heu</div>
    </div>
    <div>
      <div class="font-bold text-4xl mb-1">
        {{ twoDigits(minutes) }}
      </div>
      <div class="inline-block uppercase mb-1">Min</div>
    </div>
    <div>
      <div class="font-bold text-4xl mb-1">
        {{ twoDigits(seconds) }}
      </div>
      <div class="inline-block uppercase mb-1">Sec</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: null
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      event: this.date,
      finish: false
    }
  },
  mounted() {
    const _self = this
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true
        _self.$emit('onFinish')
      }
    }, 1000)
  },
  computed: {
    secondCount() {
      return this.calculatedDate - this.now
    },
    calculatedDate() {
      return Math.trunc(Date.parse(this.event) / 1000)
    },
    seconds() {
      if (this.secondCount < 0) return 0
      return this.secondCount % 60
    },
    minutes() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60) % 60
    },
    hours() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60) % 24
    },
    days() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    }
  },
  methods: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  }
}
</script>
