import { useState } from 'react'

import BlockContent from '~/components/BlockContent'

export default function HeroSection({ data }: typeof heroSectionProps) {
  console.log('heroSection', data.heroSection)

  const [showHeroSection, setShowHeroSection] = useState(
    data.heroSection.showHeroSection,
  )

  console.log('showHeroSection', showHeroSection)

  return (
    <div>
      <span>{data.heroSection.eyebrow}</span>

      {/* <BlockContent blocks={heroSection.headline} />

      <BlockContent blocks={heroSection.subheadline} /> */}

      <div>{data.heroSection.content}</div>

      {/* {heroSection.backgroundColor.hex}
      {heroSection.textColor.hex} */}
    </div>
  )
}

const heroSectionProps = {
  eyebrow: String,
  showHeroSection: Boolean,
  headline: Array,
  subheadline: Array,
  content: Array,
  image: Object,
  backgroundColor: String,
  textColor: String,
}
