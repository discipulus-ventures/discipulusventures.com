"use client";

import { Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import x from '/public/social/x.png'
import substack from '/public/social/substack.png'
import linkedin from '/public/social/linkedin.png'
import Image from "next/image";

const Footer = () => {
  return (
    <div id="join" className="flex flex-col items-center justify-center text-center border-t-[0.5px] border-white border-opacity-50 pt-12 bg-hh-gray">
      <div className="font-freight font-semibold text-4xl xl:text-5xl pt-2 lg:pt-8 w-9/12 md:w-full">Build the Future with Discipulus.</div>
      <div
        className="flex items-center pt-6 space-x-8"
      >
        <div className="flex flex-col gap-4 text-left">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCfpkIISj3Zr4LPuhXkm7NCI8XwMT7H5yuOQEpc_o0yp1QJQ/viewform?usp=sharing" className="hover:cursor-pointer duration-500 hover:opacity-90 flex justify-center items-center text-black bg-white px-4 py-2 rounded-[75px] font-semibold sm:text-sm">
            Join us
          </a>
          <a href="mailto:jakob.diepenbrock@discipulusventures.com" className="hover:cursor-pointer duration-500 hover:opacity-90 flex justify-center items-center text-white border-[0.5px] border-white px-4 py-2 rounded-[75px] font-semibold sm:text-sm">
            Contact us
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full 2xl:w-[1200px] mt-4 sm:mt-4">
        <div className="flex flex-col items-center">
          <Image
            src="/Discipulus - Logo.png"
            alt="logo"
            width={150}
            height={150}
            className="w-[150px] sm:w-[150px]"
          />
          <div className='flex gap-[1rem] flex-row mb-2 mt-2'>
            <a className='w-[30px] cursor-pointer' href='https://x.com/discipulusvent'> <Image src={x} alt='x' /> </a>
            <a className='w-[30px] cursor-pointer' href='https://www.linkedin.com/company/discipulus-ventures'> <Image src={linkedin} alt='linkedin' /> </a>
            <a className='w-[30px] cursor-pointer' href='http://discipulusventures.substack.com/'> <Image src={substack} alt='substack' /> </a>
          </div>
          <div className="pb-12 pt-2 text-sm font-light">
            © 2026 Discipulus Ventures <br />
            All Rights Reserved. <br />
            <Link href="/cookies" className="hover:underline opacity-60 hover:opacity-100 transition-opacity">
              Cookie Policy
            </Link>
            <div className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
