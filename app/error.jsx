"use client"

import Link from "next/link"

const Error = ({error}) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold">Something went wrong</h1>
      <p className="my-5">{error.message}</p>
      <Link href="/" className="p-2 rounded-md bg-blue-500 cursor-pointer hover:bg-blue-400">Go back home</Link>
    </div>
  );
};

export default Error;
