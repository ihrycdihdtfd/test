const features = [
  {
    icon: '盘',
    title: '抽命盘',
    subtitle: '开局就有仪式感',
    description: '命格、天赋与暗线在一瞬间铺开，像翻开一张只属于你的命运卡。'
  },
  {
    icon: '择',
    title: '走人生',
    subtitle: '选择改写结局',
    description: '每一次取舍都会留下回响，顺风或逆境，都将推进命运线。'
  },
  {
    icon: '终',
    title: '看结局',
    subtitle: '高光与遗憾都能收藏',
    description: '不只追求完美结局，也记录那些值得截图分享的遗憾瞬间。'
  }
]

const steps = [
  { title: '抽命盘', caption: '初始命格落定' },
  { title: '做选择', caption: '命运线开始分岔' },
  { title: '看结局', caption: '把一生收束成诗' }
]

const fateTags = [
  '早慧',
  '贵人',
  '晚成',
  '逆风翻盘',
  '命带波折',
  '先苦后甜',
  '天选之人',
  '波澜一生'
]

const dailyCards = [
  { label: '今日命盘', value: '星沉东方', tone: 'gold' },
  { label: '今日重开', value: '3 次仪式', tone: 'blue' },
  { label: '今日命运任务', value: '完成一次关键选择', tone: 'purple' }
]

module.exports = {
  features,
  steps,
  fateTags,
  dailyCards
}
