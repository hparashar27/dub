"use client"
import Landing from "@/components/main/Landing";
import Faqs from "@/components/main/Faqs";
import Table from "@/components/main/Table";
import Testimonials from "@/components/main/Testimonials";

const page = () => {
  return (
    <body>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-red-500 rounded-lg shadow-lg bg-blur-100 filter saturate-150  opacity-20 blur-[100px]"></div></div>
      <div className="relative z-10">
        <div className="flex min-h-screen flex-col justify-between">
          <Landing/>
          <Testimonials/>
          <Table/>
          <Faqs/>
        </div>
      </div>
    </body>
  );
};

export default page;
