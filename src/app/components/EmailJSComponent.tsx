'use client';

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="user_name" />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="user_email" />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
