"use client";

import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { spring } from "@/components/animation";
import { skills } from "@/data/skills";
import { DynamicIcon } from "@/components/icons";

export default function AboutContent() {
    const [tab, setTab] = useState(skills[0].category.toLowerCase());

    return (
        <div className="flex size-[30rem] flex-col flex-wrap items-start md:h-80 md:flex-row md:flex-nowrap">
            <div className="mx-auto md:mx-0">
                <ul className="flex items-baseline space-x-3 space-y-5 md:flex-col">
                    {skills.map((skill) => (
                        <li
                            className={`cursor-pointer p-1 transition-colors duration-300 ${
                                tab === skill.category.toLowerCase() && "rounded-md bg-accent"
                            }`}
                            key={skill.category}
                            onMouseOver={() => setTab(skill.category.toLowerCase())}
                            onClick={() => setTab(skill.category.toLowerCase())}
                        >
                            <DynamicIcon name={skill.category} className="size-14" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mx-auto mt-6 md:mx-4 md:my-0">
                {skills.map((skill) => (
                    <Fragment key={skill.category}>
                        {tab === skill.category.toLowerCase() && (
                            <motion.ul
                                variants={spring}
                                initial="initial"
                                animate="animate"
                                transition={{ duration: 0.5 }}
                                className="flex transform-gpu flex-wrap gap-3"
                            >
                                {skill.listSkills.map((listSkill, index) => (
                                    <li
                                        key={index}
                                        className="flex flex-col items-center rounded-md transition-colors duration-200 hover:bg-accent/70"
                                    >
                                        <DynamicIcon name={listSkill} className="size-20" />
                                        <p className="text-center">{listSkill}</p>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
