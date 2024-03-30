import React from 'react'
import { logoimages } from '@/lib/constants'

const Testimonials = () => {
  return (
    <div className="my-10">
            <p className="mx-auto max-w-sm text-center text-gray-600 sm:max-w-xl sm:text-lg">
              Trusted &amp;loved by modern teams at world-className companies
            </p>
            <a
              className="mx-auto mt-8 grid w-full max-w-screen-lg grid-cols-2 items-center px-5 md:grid-cols-6 md:px-0"
              href="/customers"
            >
              {logoimages &&
                logoimages.map((img, ind) => (
                  <img
                    key={ind}
                    alt={img.alt}
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    decoding="async"
                    className="grayscale"
                  />
                ))}
            </a>
          </div>

  )
}

export default Testimonials