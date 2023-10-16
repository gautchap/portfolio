"use client";

import { Barlow } from "next/font/google";
import Typewriter from "typewriter-effect";
import computer from "@/assets/computer.png";
import Image from "next/image";
import { Stars } from "@/components/stars";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const barlow = Barlow({
    weight: ["900"],
    style: ["italic"],
    subsets: ["latin"],
});

const time = 1500;

export default function Home() {
    return (
        <>
            <Stars className="absolute z-[-1] h-full w-full " />
            <main className="pb-16">
                <section id="gaut" className="h-[100dvh] flex">
                    <div className="container grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-center sm:justify-self-start">
                            <h1
                                className={`${barlow.className} text-4xl sm:text-5xl lg:text-8xl text-center md:text-left m-auto w-auto md:w-1/3 min-w-fit`}
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
                                <Link href="#contact">Let&apos;s Connect</Link>
                            </Button>
                        </div>

                        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                            <div className="rounded-full bg-secondary w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                                <Image
                                    priority={true}
                                    src={computer}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    draggable="false"
                                    alt="computer"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects" className="h-[100dvh] bg-primary">
                    Projects
                </section>
                <section id="about" className="h-[100dvh] bg-destructive">
                    About
                </section>
                <section
                    id="contact"
                    className="h-[100dvh] pt-12 md:pt-24 container flex gap-4 flex-wrap md:flex-nowrap justify-center items-baseline"
                >
                    <Card className="md:max-w-[20rem]">
                        <CardHeader>
                            <CardTitle>Let&apos;s Connect</CardTitle>
                            <CardDescription>
                                I&apos;m currently looking for new opportunities, my inbox is always open. Whether you
                                have a question or just want to say hi, I&apos;ll try my best to get back to you!
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="w-full md:max-w-[55rem] shadow-md">
                        <CardContent className="p-5">
                            <ContactForm />
                        </CardContent>
                    </Card>
                </section>
            </main>
        </>
    );
}
