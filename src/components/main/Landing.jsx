
import React, { useState } from "react";
import Confettifunction from "./Confettifunction";
import { Switch } from "../ui/switch";
import Confetti from "react-confetti-boom";
import ConfettiExplosion from "react-confetti-explosion";

const Landing = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 mb-8 mt-16">
    <div className="mx-auto mb-6 text-center sm:max-w-lg">
      <h1 className="font-display text-4xl font-extrabold text-black [text-wrap:balance] sm:text-5xl sm:leading-tight font-sarif">
        <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Straightforward,
        </span>
        <br /> affordable pricing
      </h1>
      <p className="mt-5 text-gray-600 sm:text-lg">
        Find a plan that fits your needs. <br />
        Start for free, no credit card required.
      </p>
    </div>
    <div className="mx-auto mb-12 flex max-w-fit items-center space-x-2 text-center">
      <p className="w-14 font-medium text-gray-600">Monthly</p>
      <div className="position:relative"></div>
      <Switch checked={isSwitchOn}  onCheckedChange={setIsSwitchOn} />
      {isSwitchOn && ConfettiExplosion}
      <p className="w-14 font-medium text-gray-600">Yearly</p>
    </div>
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-4">
      <div className="relative rounded-2xl bg-white border border-gray-200 shadow-lg">
        <div className="p-8">
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-black"></div>
            <h3 className="font-display text-2xl font-bold text-black">
              Free
            </h3>
          </div>
          <p className="mt-2 text-gray-500">
            For hobby &amp;side projects
          </p>
          <div className="my-4 flex items-end space-x-2">
            <p className="font-display text-5xl font-semibold">$ 0</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">Free forever</p>
          </div>
        </div>
        <div className="flex items-center justify-center border-b border-t border-gray-200 bg-gray-50 px-8 py-5">
          <a
            className="block w-full rounded-full border py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent bg-black border-black hover:text-black"
            href="https://app.dub.co/register"
          >
            Start for free
          </a>
        </div>
        <h4 className="mt-7 px-8 font-medium text-gray-600">
          What &#x27;s included:
        </h4>
        <ul className="mb-10 mt-5 space-y-5 px-8">
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-black"
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
            <p className="text-gray-600">25 new links/mo</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-black"
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
            <p className="text-gray-600">1K tracked clicks/mo</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-black"
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
            <p className="text-gray-600">30-day analytics retention</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-black"
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
            <p className="text-gray-600">3 custom domains</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-black"
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
            <p className="text-gray-600">1 user</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-black"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              Community support
            </p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-black"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              API Access
            </p>
          </li>
        </ul>
      </div>
      <div className="relative rounded-2xl bg-white border-2 border-blue-600 shadow-blue-200 shadow-lg">
        <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-center text-sm font-medium text-white">
          Popular
        </div>
        <div className="p-8">
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-blue-500"></div>
            <h3 className="font-display text-2xl font-bold text-black">
              Pro
            </h3>
          </div>
          <p className="mt-2 text-gray-500">For small businesses</p>
          <div className="my-4 flex items-end space-x-2">
            <p className="font-display text-5xl font-semibold">
              {!isSwitchOn ? <>24</> : <>19</>}
            </p>
            <p className="text-gray-500">/ month</p>
          </div>
          <div className="flex items-center justify-between">
            {!isSwitchOn ? (
              <p className="text-gray-500">Billed monthly</p>
            ) : (
              <p className="text-gray-500">Billed yearly</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center border-b border-t border-gray-200 bg-gray-50 px-8 py-5">
          <a
            className="block w-full rounded-full border py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent bg-blue-500 border-blue-500 hover:text-blue-500"
            href="https://app.dub.co/register"
          >
            Get started with Pro
          </a>
        </div>
        <h4 className="mt-7 px-8 font-medium text-gray-600">
          Everything in Free, plus:
        </h4>
        <ul className="mb-10 mt-5 space-y-5 px-8">
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-blue-500"
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
            <p className="text-gray-600">1,000 new links/mo</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-blue-500"
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
            <p className="text-gray-600">50K tracked clicks/mo</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-blue-500"
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
            <p className="text-gray-600">1-year analytics retention</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-blue-500"
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
            <p className="text-gray-600">10 custom domains</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-blue-500"
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
            <p className="text-gray-600">5 users</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-blue-500"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              Basic support
            </p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-blue-500"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              Root domain redirect
            </p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-blue-500"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              Advanced link features
            </p>
          </li>
        </ul>
      </div>

      <div className="relative rounded-2xl bg-white border border-gray-200 shadow-lg">
        <div className="p-8">
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-sky-900"></div>
            <h3 className="font-display text-2xl font-bold text-black">
              Business
            </h3>
          </div>
          <p className="mt-2 text-gray-500">For larger teams</p>
          <div className="my-4 flex items-end space-x-2">
            <p className="font-display text-5xl font-semibold">
              {!isSwitchOn ? <>59</> : <>49</>}
            </p>
            <p className="text-gray-500">/ month</p>
          </div>
          <div className="flex items-center justify-between">
            {!isSwitchOn ? (
              <p className="text-gray-500">Billed monthly</p>
            ) : (
              <p className="text-gray-500">Billed yearly</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center border-b border-t border-gray-200 bg-gray-50 px-8 py-5">
          <a
            className="block w-full rounded-full border py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent bg-sky-900 border-sky-900 hover:text-sky-900"
            href="https://app.dub.co/register"
          >
            start with Business
          </a>
        </div>
        <h4 className="mt-7 px-8 font-medium text-gray-600">
          Everything in Pro, plus:
        </h4>
        <ul className="mb-10 mt-5 space-y-5 px-8">
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-sky-900"
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
            <p className="text-gray-600">5,000 new links/mo</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-sky-900"
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
            <p className="text-gray-600">150K tracked clicks/mo</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-sky-900"
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
            <p className="text-gray-600">2-year analytics retention</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-sky-900"
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
            <p className="text-gray-600">40 custom domains</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-sky-900"
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
            <p className="text-gray-600">15 users</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-sky-900"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              150 tags
            </p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-sky-900"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              Elevated support
            </p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-sky-900"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              Custom branding
            </p>
          </li>
        </ul>
      </div>

      <div className="relative rounded-2xl bg-white border border-gray-200 shadow-lg">
        <div className="p-8">
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-violet-600"></div>
            <h3 className="font-display text-2xl font-bold text-black">
              Enterprise
            </h3>
          </div>
          <p className="mt-2 text-gray-500">For larger agency</p>
          <div className="my-4 flex items-end space-x-2">
            <p className="font-display text-5xl font-semibold">
              {!isSwitchOn ? <>37</> : <>19</>}
            </p>
            <p className="text-gray-500">/ month</p>
          </div>
          <div className="flex items-center justify-between">
            {!isSwitchOn ? (
              <p className="text-gray-500">Billed monthly</p>
            ) : (
              <p className="text-gray-500">Billed yearly</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center border-b border-t border-gray-200 bg-gray-50 px-8 py-5">
          <a
            className="block w-full rounded-full border py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent bg-violet-600  bg-violet-600 border-violet-600 hover:text-sky-900"
            href="https://app.dub.co/register"
          >
            start with Agency
          </a>
        </div>
        <h4 className="mt-7 px-8 font-medium text-gray-600">
          Everything in Pro, plus:
        </h4>
        <ul className="mb-10 mt-5 space-y-5 px-8">
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-violet-600"
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
            <p className="text-gray-600">5,000 new links/mo</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-violet-600"
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
            <p className="text-gray-600">150K tracked clicks/mo</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-violet-600"
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
            <p className="text-gray-600">2-year analytics retention</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-violet-600"
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
            <p className="text-gray-600">40 custom domains</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-violet-600"
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
            <p className="text-gray-600">15 users</p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-violet-600"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              150 tags
            </p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-violet-600"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              Elevated support
            </p>
          </li>
          <li className="flex space-x-4">
            <svg
              className="h-6 w-6 flex-none text-violet-600"
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
            <p
              className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
              data-state="closed"
            >
              Custom branding
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Landing