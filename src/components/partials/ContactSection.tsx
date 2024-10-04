import Image from 'next/image';
import React, { useState } from 'react'; // Import useState
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';

const ContactSection = () => {
  const [name, setName] = useState(''); // State for Name
  const [email, setEmail] = useState(''); // State for Email
  const [subject, setSubject] = useState(''); // State for Subject
  const [message, setMessage] = useState(''); // State for Message

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent the default form submission

    // Construct the Gmail URL
    const emailTo = 'pradeeptaalla@gmail.com'; // Replace with your email address
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`); // Prepare body content
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodeURIComponent(subject)}&body=${body}`;

    // Redirect to Gmail
    window.location.href = gmailUrl;
  };

  return (
    <>
      <p id="contact"></p>
      <SectionTitle>Get In Touch</SectionTitle>
      <form onSubmit={handleSubmit} className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="relative h-48">
          <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">Don't like forms? Send me an email. 👋</p>
        </div>
        <div className="col-span-2">
          <div className="grid gap-8 md:grid-cols-2">
            <Input 
              placeholder="Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <Input 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="mt-8">
            <Input 
              placeholder="Subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
            />
          </div>
          <div className="mt-8">
            <TextArea 
              placeholder="Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
          </div>
          <div className="mt-8">
            <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
              Send Message
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactSection;
