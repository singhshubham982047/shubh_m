import React from "react";
import { Icons } from "./icons";

const Footer = () => {
  return (
    <section id="footer" className="py-10 container md:px-32 space-y-10 mt-12">
      <footer className="bg-white rounded-lg shadow dark:bg-black w-full m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
                Shubham Singh
              </span>
            </a>
            <ul className="flex  items-center gap-4 sm:gap-8 text-sm  text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://github.com/singhshubham982047/"
                  target="_blank"
                  className=" me-4 md:me-6"
                >
                  <Icons.github />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/shubhamsingh47/"
                  target="_blank"
                  className=" me-4 md:me-6"
                >
                  <Icons.linkedin />
                </a>
              </li>
              <li>
                <a href="#" className=" me-4 md:me-6">
                  <Icons.x />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 All Rights Reserved.
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
