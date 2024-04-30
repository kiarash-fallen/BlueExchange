"use client";
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        {props.children}
      </div>
    </section>
  )
}

export default EmblaCarousel
