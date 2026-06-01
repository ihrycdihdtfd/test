Component({
  properties: {
    label: { type: String, value: '立即重开' }
  },
  methods: {
    handleTap() {
      this.triggerEvent('action')
    }
  }
})
