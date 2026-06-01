Component({
  methods: {
    handleRestart() {
      this.triggerEvent('restart')
    },
    handleDaily() {
      this.triggerEvent('daily')
    }
  }
})
