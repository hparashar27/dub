import React from 'react'
import { faqs } from '@/lib/constants'

const Faqs = () => {
  return (
    <div className="border-t border-gray-200 bg-white/10  backdrop-blur">
    <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 my-20">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="p-3">
          <h2 className="font-display text-4xl font-extrabold text-black [text-wrap:balance] sm:text-5xl sm:leading-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div
          className="col-span-2 px-3 sm:px-0"
          data-orientation="vertical"
        >
          {faqs &&
            faqs.map((text, index) => (
              <div
                key={index}
                data-state="closed"
                data-orientation="vertical"
                className="border-b border-b-slate-200 py-3 last:border-none"
              >
                <h3
                  data-orientation="vertical"
                  data-state="closed"
                  className="flex"
                >
                  <button
                    type="button"
                    className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg"
                  >
                    <h3 className="text-left md:text-lg">{text}</h3>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 w-5 flex-none transition-transform duration-300"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Faqs