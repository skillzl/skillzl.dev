import React from 'react';
import { useForm } from '@formspree/react';

import ContactForm from 'components/Contact'
import Head from 'next/head'

export default function Contact() {
  const [state] = useForm("contactForm");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }
  return (
    
    <div className="flex items-center justify-center p-12">
      <Head>
        <title>skillzl // contact</title>
      </Head>
      <ContactForm />
    </div>
  )
}