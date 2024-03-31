import React from 'react'

const Table = () => {
  return (
    <div className="border-t border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
            <div className="mx-auto w-full max-w-screen-xl lg:px-20 my-16 px-0">
              <div className="mx-auto mb-12 text-center sm:max-w-lg">
                <h2 className="font-display text-4xl font-extrabold text-black [text-wrap:balance] sm:text-5xl sm:leading-tight">
                  Compare plans and features
                </h2>
                <p className="mt-5 text-gray-600 sm:text-lg">
                  Choose the plan that &#x27;s right for your business. <br />
                  With Dub.co, you can start for free and upgrade as you grow.
                </p>
              </div>
              <div className="overflow-x-scroll md:overflow-x-visible">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="divide-x divide-gray-200 border border-gray-200">
                      <th className="sticky left-0 z-20 w-40 bg-gray-50 p-6 md:top-14 md:w-1/4"></th>
                      <th className="sticky z-10 w-40 bg-gray-50 p-6 md:top-14 md:w-auto">
                        <div className="mb-4 flex items-center space-x-2">
                          <div className="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-black"></div>
                          <h3 className="font-display text-xl font-bold text-black md:text-2xl">
                            Free
                          </h3>
                        </div>
                        <a
                          className="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-black border-black hover:text-black"
                          href="https://app.dub.co/register"
                        >
                          Start for free
                        </a>
                      </th>
                      <th className="sticky z-10 w-40 bg-gray-50 p-6 md:top-14 md:w-auto">
                        <div className="mb-4 flex items-center space-x-2">
                          <div className="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-blue-500"></div>
                          <h3 className="font-display text-xl font-bold text-black md:text-2xl">
                            Pro
                          </h3>
                        </div>
                        <a
                          className="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-blue-500 border-blue-500 hover:text-blue-500"
                          href="https://app.dub.co/register"
                        >
                          Get started
                        </a>
                      </th>
                      <th className="sticky z-10 w-40 bg-gray-50 p-6 md:top-14 md:w-auto">
                        <div className="mb-4 flex items-center space-x-2">
                          <div className="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-sky-900"></div>
                          <h3 className="font-display text-xl font-bold text-black md:text-2xl">
                            Business
                          </h3>
                        </div>
                        <a
                          className="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-sky-900 border-sky-900 hover:text-sky-900"
                          href="https://app.dub.co/register"
                        >
                          Get started
                        </a>
                      </th>
                      <th className="sticky z-10 w-40 bg-gray-50 p-6 md:top-14 md:w-auto">
                        <div className="mb-4 flex items-center space-x-2">
                          <div className="h-3 w-3 flex-none rounded-full md:h-5 md:w-5 bg-violet-600"></div>
                          <h3 className="font-display text-xl font-bold text-black md:text-2xl">
                            Enterprise
                          </h3>
                        </div>
                        <a
                          className="block w-full rounded-full border py-1 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent md:py-1.5 md:text-base bg-violet-600 border-violet-600 hover:text-violet-600"
                          href="/enterprise"
                        >
                          Contact us
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border-y border-gray-200">
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">Short links</p>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">25/mo</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">1,000/mo</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">5,000/mo</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Custom</p>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">Link clicks</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Unlimited</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Unlimited</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Unlimited</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Unlimited</p>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Tracked clicks
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">1,000/mo</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">50,000/mo</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">150,000/mo</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Custom</p>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Analytics retention
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">30 days</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">1 year</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">2 years</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Unlimited</p>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Link redirects
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Unlimited</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Unlimited</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Unlimited</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Unlimited</p>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Bulk shortening
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">
                          1,000 links/csv
                        </p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">
                          5,000 links/csv
                        </p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Custom</p>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">UTM Builder</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-black"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">API Access</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-black"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">QR codes</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-black"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">Tags</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">5</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">25</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">150</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Custom</p>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">Teammates</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">1</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">5</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">15</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Custom</p>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Custom domains
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">3</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">10</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">40</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Custom</p>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            SSL certificates
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-black"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Root domain redirect
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Custom social media cards
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Password protection
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Link expiration
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Link cloaking
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Device targeting
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Geo targeting
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Custom branding
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-sky-900"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">SSO/SAML</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Role-based access controls
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">Support</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Email</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">Email, Chat</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">
                          Email, Chat, Slack
                        </p>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">Custom SLA</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">Audit logs</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 border-x border-gray-200">
                      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
                        <div className="flex items-center justify-between space-x-2 p-4">
                          <p className="font-medium text-black">
                            Dedicated success manager
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-help h-4 w-4 flex-none text-gray-600"
                            
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <p className="text-center text-gray-600">—</p>
                      </td>
                      <td className="p-4">
                        <svg
                          className="mx-auto h-6 w-6 text-violet-600"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  )
}

export default Table