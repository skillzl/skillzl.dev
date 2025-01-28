import React, { useState } from "react";
import Contact from "../components/Contact";
import Head from "next/head";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setResponseMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <Head>
        <title>skillzl // contact</title>
      </Head>
      <Contact handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
    </div>
  );
};

export default ContactPage;