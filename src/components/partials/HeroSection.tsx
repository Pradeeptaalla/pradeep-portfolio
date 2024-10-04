import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin , FaGithub  } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';

const HeroSection = () => {

  const emailTo = 'pradeeptaalla@gmail.com';
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}`;


  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/avatar-2.png" width={180} height={180} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Taalla Pradeep</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a{' '}
          <Typed
            strings={['Fullstack Developer', 'Full Stack Java Developer', 'Full Stack Python Developer']}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://linkedin.com/in/taalla-pradeep">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FaLinkedin size={25} />
            </a>
          </Link>
          <Link href="https://github.com/Pradeeptaalla">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FaGithub  size={25} />
            </a>
          </Link>
          <Link href={gmailUrl}>
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <SiGmail  size={25} />
            </a>
          </Link>
        </div>
        <Button className="mt-5 px-8"><Link href="#contact">Contact Me</Link></Button>
      </div>
    </div>
  );
};

export default HeroSection;
