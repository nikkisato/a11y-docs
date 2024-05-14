'use client'

import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image, { ImageProps } from 'next/image'

import { urlForImage } from '../../lib/sanity.client'

type Props = Omit<ImageProps, 'src'> & {
  src: SanityImageSource
}

export default function SanityImage({ src, alt, ...props }: Props) {
  const srcImage = urlForImage(src).url()
  return <Image src={srcImage} alt={alt} loader={() => srcImage} {...props} />
}
