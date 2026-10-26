import React from "react";
import { techStackSkills } from "../constants";
import SkillMark from "../components/SkillMark";

const skillMarks = techStackSkills.flatMap((group) => group.items);

const LogoIcon = ({ skill }) => {
  return (
    <div className="flex-none flex-center marquee-item flex-col gap-2">
      <SkillMark
        name={skill.name}
        slug={skill.slug}
        color={skill.color}
        className="size-10 md:size-12"
      />
      <span className="text-xs text-white-50 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
};

const LogoMarquee = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-6 gap-3">
          {skillMarks.map((skill) => (
            <LogoIcon key={skill.name} skill={skill} />
          ))}

          {skillMarks.map((skill) => (
            <LogoIcon key={`${skill.name}-dup`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
