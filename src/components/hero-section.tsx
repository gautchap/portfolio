"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Barlow } from "next/font/google";
import { heroVariants, cardVariants } from "@/components/animation";

const barlow = Barlow({
    weight: ["900"],
    style: ["italic"],
    subsets: ["latin"],
});

const time = 1500;

type HeroSectionProps = {
    children: ReactNode;
    image: ReactNode;
};

export default function HeroSection({ children, image }: HeroSectionProps) {
    const reference = useRef(null);
    const isInView = useInView(reference, { once: false });
    return (
        <section id="gaut" className="flex h-[100dvh]" ref={reference}>
            <div className="container mt-4 grid md:mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-12">
                    <motion.div
                        variants={heroVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.5 }}
                        className="col-span-8 transform-gpu place-self-center justify-self-center text-center sm:justify-self-start sm:text-left"
                    >
                        <h1
                            className={`${barlow.className} m-auto min-h-[9rem] w-auto min-w-fit text-center text-4xl sm:text-5xl md:w-1/3 md:text-left lg:text-8xl`}
                        >
                            Hello, I&apos;m
                            <br />
                            <Typewriter
                                options={{ loop: true, deleteSpeed: 20 }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .changeDelay(30)
                                        .typeString(
                                            "<strong class='bg-gradient-react text-gradient'> Front End Developer</strong>"
                                        )
                                        .pauseFor(time)
                                        .deleteChars(20)
                                        .typeString(
                                            "<strong class='bg-gradient-node text-gradient'> Back End Developer</strong>"
                                        )
                                        .pauseFor(time)
                                        .deleteChars(21)
                                        .typeString(
                                            "<strong class='bg-gradient-js text-gradient'> Full Stack Developer</strong>"
                                        )
                                        .pauseFor(time)
                                        .deleteChars(21)
                                        .start();
                                }}
                            />
                        </h1>
                        <Button asChild className="mt-8 rounded-[1rem]">
                            <Link href="/contact">Let&apos;s Connect</Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={heroVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.5 }}
                        className="col-span-4 mt-4 transform-gpu place-self-center lg:mt-0"
                    >
                        {image}
                    </motion.div>
                </div>
                <div className="grid-cols-1 md:place-self-center md:px-16">
                    <motion.div
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.5 }}
                        className="transform-gpu"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
