"use client";

import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { spring } from "@/components/animation";
import { skills } from "@/data/skills";
import { DynamicIcon } from "@/components/icons";

export default function AboutContent() {
  const [tab, setTab] = useState(skills[0].category.toLowerCase());

  return (
    <div className="flex flex-col md:flex-row items-start flex-wrap w-[30rem] h-[22rem]">
      <div className="mx-auto md:mx-0">
        <ul className="flex md:flex-col space-y-5 items-baseline space-x-3">
          {skills.map((skill) => (
            <li
              className={`transition-colors duration-300 cursor-pointer p-1 ${
                tab === skill.category.toLowerCase() && "bg-accent rounded-md"
              }`}
              key={skill.category}
              onMouseOver={() => setTab(skill.category.toLowerCase())}
              onClick={() => setTab(skill.category.toLowerCase())}
            >
              <DynamicIcon name={skill.category} className="h-14 w-14" />
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto md:mx-4 mt-6 md:my-0">
        {skills.map((skill) => (
          <Fragment key={skill.category}>
            {tab === skill.category.toLowerCase() && (
              <motion.ul
                variants={spring}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-3 transform-gpu"
              >
                {skill.listSkills.map((listSkill, index) => (
                  <li
                    key={index}
                    className="hover:bg-accent/70 rounded-md transition-colors duration-200 flex items-center flex-col"
                  >
                    <DynamicIcon name={listSkill} className="h-20 w-20" />
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
