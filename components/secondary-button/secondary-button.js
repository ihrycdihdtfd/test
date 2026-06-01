Component({
  properties: {
    label: { type: String, value: '查看今日命盘' }
  },
  methods: {
    handleTap() {
      this.triggerEvent('action')
    }
  }
})
