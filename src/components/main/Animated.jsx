import React from 'react'
import './Animate.css'

const Animated = () => {
  return (
    <div className="mx-auto mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg xl:w-4/5">
    <div className="flex flex-col justify-between space-y-4 p-8 pb-0 sm:flex-row sm:items-center sm:space-y-0 sm:p-16 sm:pb-0">
    <div>
      <h3 className="font-display text-2xl font-bold sm:text-3xl">
        Dub
        <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
          Enterprise
        </span>
      </h3>
      <p className="mt-4 max-w-lg text-gray-500 [text-wrap:balance]">
        Custom tailored plans for large enterprises. Whether you
        &#x27;re running a SMS campaign with <i>millions</i>
        of short links or a large marketing campaign with{" "}
        <i>billions</i>
        of clicks, we &#x27;ve got you covered.
      </p>
    </div>
    <a
      className="group rounded-full border bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
      href="/enterprise"
    >
      Contact us
    </a>
    </div>

    <div className="relative mx-8 mt-4 overflow-hidden sm:mx-16">
    <div className="pointer-events-none absolute -top-1 z-10 h-40 w-full bg-gradient-to-b from-white to-transparent"></div>
    <div className="pointer-events-none absolute -bottom-1 z-10 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>
    <div className="pointer-events-none absolute -left-1 z-10 h-full w-40 bg-gradient-to-r from-white to-transparent"></div>
    <div className="pointer-events-none absolute -right-1 z-10 h-full w-40 bg-gradient-to-l from-white to-transparent"></div>
    <div
      className="element-tranform mx-auto grid h-[250px] w-[300px] grid-cols-1 gap-5 sm:w-[600px] sm:grid-cols-2 animate-running"
    >
      <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Custom usage limits</p>
      </div>
      <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Volume discounts</p>
      </div>
      <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">SSO/SAML</p>
      </div>
      <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Role-based access controls</p>
      </div>
      <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Custom contract &amp;SLA</p>
      </div>
      <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Whiteglove onboarding</p>
      </div>
      <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Dedicated success manager</p>
      </div>
      <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Priority support</p>
      </div>
      <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Dedicated Slack channel</p>
      </div>
      <div
        aria-hidden="true"
        className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
      >
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Custom usage limits</p>
      </div>
      <div
        aria-hidden="true"
        className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
      >
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Volume discounts</p>
      </div>
      <div
        aria-hidden="true"
        className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
      >
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">SSO/SAML</p>
      </div>
      <div
        aria-hidden="true"
        className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
      >
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Role-based access controls</p>
      </div>
      <div
        aria-hidden="true"
        className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
      >
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Custom contract &amp;SLA</p>
      </div>
      <div
        aria-hidden="true"
        className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
      >
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Whiteglove onboarding</p>
      </div>
      <div
        aria-hidden="true"
        className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
      >
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Dedicated success manager</p>
      </div>
      <div
        aria-hidden="true"
        className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
      >
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Priority support</p>
      </div>
      <div
        aria-hidden="true"
        className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
      >
        <svg
          className="h-6 w-6 flex-none text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            stroke="white"
          ></path>
        </svg>
        <p className="text-gray-600">Dedicated Slack channel</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Animated