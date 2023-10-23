/* eslint-disable @next/next/no-img-element */
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaFacebookF, FaGithub, FaGithubAlt, FaGithubSquare, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

function HomeSection() {

    const [cursor, setCursor] = useState(true);

    const handleCursorChange = () => {
        setCursor(!cursor)
    }

  return (
    <section className="flex max-w-3xl md:max-w-screen-2xl min-h-unit-10 mt-32 snap-start" id="main">

        <div className="flex items-center mr-16 ">
            <img src='/assets/ciso_logo_circle.png' alt='ciso logo' className="w-unit-3xl h-unit-3xl lg:w-unit-5xl lg:5xl 2xl:w-unit-8xl 2xl:h-unit-8xl" />
        </div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7}}

          className="flex flex-col gap-y-2 mt-24 "
        >

            <img
              src="/assets/ciso_logo.png"
              alt="ciso text logo"
              className="w-96 h-20" />

                <TypeAnimation
                sequence={[
                    () => {
                        setCursor(!cursor)
                        console.log("One", cursor)
                    },
                    'Cyber Hackers', 
                    1000, // Waits 1s
                    'Cyber Intelligence', 
                    1000, // Waits 2s
                    'Cyber Intelligence and Security Organization',
                    () => {
                        setCursor(!cursor)
                        console.log("Two", cursor)
                    },
                    15000,
                ]}
                wrapper="span"
                cursor={cursor}
                repeat={1}
                style={{ fontSize: '2.5em', display: 'inline-block', width: '45rem', color: 'white', }}
                />
            <div className=" max-w-2xl ">
                <p className="text-md italic text-white">
                    The Cyber Intel & Security Organization at California State University, San Bernardino is devoted to the art and science of information security. We are a diverse, welcoming group of students passionate about breaking, hacking, and fixing things.
                </p>
            </div>
            <div className="flex gap-x-10 h-10 mt-5">
                <button className="rounded-md bg-gradient-to-tr from-blue-500 to-green-500 ">
                    <span className=" px-20">
                        Sign Up
                    </span>
                </button>
                <button className="rounded-md hover:text-cyan-600 border-1 border-black hover:border-cyan-600  ">
                    <span className=" px-20 ">
                        Sign In
                    </span>
                </button>
            </div>

            <div className="flex gap-x-4 mt-3">
                <Link href="https://github.com/CSUSB-CISO/" >
                    <FaGithub className="w-5 h-5 hover:text-cyan-600"/>
                </Link>
                <Link href="https://www.instagram.com/csusb.ciso/">
                    <FaInstagram className="w-5 h-5 hover:text-cyan-600"/>
                </Link>
                <Link href="https://www.facebook.com/csusb.ciso/">
                    <FaFacebookF className="w-5 h-5 hover:text-cyan-600"/>
                </Link>
                <Link href='https://www.linkedin.com/company/cyber-intelligence-and-security-organization'>
                    <FaLinkedinIn className="w-5 h-5 hover:text-cyan-600"/>
                </Link>
            </div>
            
        </motion.div>

    </section>
  )
}

export default HomeSection