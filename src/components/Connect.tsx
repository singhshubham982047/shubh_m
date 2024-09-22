"use client";
import React, { useRef, FormEvent } from "react";
import { Separator } from "./ui/separator";
import emailjs from "@emailjs/browser";
import Globe from "./magicui/globe";
import { toast } from "sonner";

const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY!;

const Connect: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );
        console.log(result);
        if (result.text) {
          toast.success("Thank you for contacting me!");
        }
        formRef.current.reset();
      } catch (error) {
        toast.error("Error sending email");
      }
    }
  };

  return (
    <section id="connect" className="py-10 container md:px-32 space-y-10 mt-12">
      <Separator orientation="horizontal" className="bg-gray-400/25" />
      <div className="text-2xl font-bold md:text-4xl">
        <p className="inline">
          <span> Ready to</span>{" "}
          <span className="block bg-gradient-to-r from-[#5c5b5c] to-[#e2dee2] text-transparent bg-clip-text whitespace-pre-wrap">
            {" "}
            Digitalize Your World
          </span>{" "}
          <span>and Embrace the Change.</span>
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row ">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col w-full space-y-5 p-6"
        >
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="p-3 border rounded border-gray-400"
          />
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="p-3 border rounded border-gray-400"
          />

          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="p-3 border rounded border-gray-400"
          />

          <input
            type="submit"
            className="cursor-pointer p-3 border rounded border-gray-400"
            value="Submit"
          />
        </form>
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg   px-40 pb-40 pt-8 md:pb-60 ">
          <Globe className="hidden sm:flex" />
        </div>
      </div>
    </section>
  );
};

export default Connect;
