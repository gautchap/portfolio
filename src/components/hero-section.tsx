"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: ["900"],
  style: ["italic"],
  subsets: ["latin"],
});

const time = 1500;

const heroVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
};

const cardVariants = {
  initial: { opacity: 0, translateY: 15 },
  animate: { opacity: 1, translateY: 0 },
};

type HeroSectionProps = {
  children: ReactNode;
};

export default function HeroSection({ children }: HeroSectionProps) {
  const reference = useRef(null);
  const isInView = useInView(reference, { once: false });
  return (
    <section id="gaut" className="h-[100dvh] flex" ref={reference}>
      <div className="grid container mt-4 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            variants={heroVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-center sm:justify-self-start"
          >
            <h1
              className={`${barlow.className} text-4xl sm:text-5xl lg:text-8xl text-center md:text-left m-auto w-auto md:w-1/3 min-w-fit min-h-[9rem]`}
            >
              Hello, I&apos;m
              <br />
              <Typewriter
                options={{ loop: true, deleteSpeed: 20 }}
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(30)
                    .typeString(
                      "<strong class='bg-gradient-react text-gradient'> Front End Developer</strong>",
                    )
                    .pauseFor(time)
                    .deleteChars(20)
                    .typeString(
                      "<strong class='bg-gradient-node text-gradient'> Back End Developer</strong>",
                    )
                    .pauseFor(time)
                    .deleteChars(21)
                    .typeString(
                      "<strong class='bg-gradient-js text-gradient'> Full Stack Developer</strong>",
                    )
                    .pauseFor(time)
                    .deleteChars(21)
                    .start();
                }}
              />
            </h1>
            <Button asChild className="mt-8 rounded-[1rem]">
              <Link href="#contact">Let&apos;s Connect</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={heroVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            {children}
          </motion.div>
        </div>
        <div className="md:place-self-center md:px-16 grid-cols-1">
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>&gt;_ Let&apos;s Connect</CardTitle>
                <CardDescription>
                  I&apos;m currently looking for new opportunities, my inbox is
                  always open. Whether you have a question or just want to say
                  hi, I&apos;ll try my best to get back to you!
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
