"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const EmailJSComponent = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm("service_ks51k5y", "template_5t2f0mb", form.current, {
        publicKey: "TJqrvdUUaKQcBlm66",
      })
      .then(
        () => {
          toast.success("Message Successfully Sent!");
          form.current?.reset(); 
        },
        (error) => {
          toast.error("Unable To Send Message.", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col items-start mt-4 gap-2"
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
        className="p-2 mb-2 border border-[#4B2E2E] rounded min-w-120"
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        className="p-2 mb-2 border border-[#4B2E2E] rounded min-w-120"
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        className="p-2 mb-2 border border-[#4B2E2E] rounded min-w-120"
      />
      <input type="submit" value="Send" className="self-center bg-[#4B2E2E] text-[#D8CFC4] p-2 rounded cursor-pointer mt-3"/>
    </form>
  );
};
