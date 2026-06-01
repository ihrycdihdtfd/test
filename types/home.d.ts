export interface FeatureItem {
  icon: string
  title: string
  subtitle: string
  description: string
}

export interface StepItem {
  title: string
  caption: string
}

export interface DailyCardItem {
  label: string
  value: string
  tone: 'gold' | 'blue' | 'purple'
}
