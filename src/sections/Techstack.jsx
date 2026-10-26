import React from "react";
import CategoryIcon from "../components/CategoryIcon";
import SkillMark from "../components/SkillMark";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { techStackSkills } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Techstack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-bento-card",
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".tech-bento",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Techstack"
          sub="🤝 The Skills I Bring to the Table"
        />

        <div className="tech-bento mt-16">
          {techStackSkills.map((group) => (
            <GlowCard
              key={group.title}
              className={`tech-bento-card rounded-2xl ${
                group.span === "wide"
                  ? "tech-bento-card-wide"
                  : group.span === "narrow"
                    ? "tech-bento-card-narrow"
                    : ""
              }`}
            >
              <div className="tech-bento-card-head">
                <div className="tech-bento-card-head-left">
                  <CategoryIcon
                    type={group.icon}
                    className="size-5 text-[#4ADE80]"
                  />
                  <h3 className="text-white text-lg">{group.title}</h3>
                </div>
                <span className="tech-bento-count">{group.items.length}</span>
              </div>

              <ul
                className={`tech-bento-items ${
                  group.span === "wide" ? "tech-bento-items-wide" : ""
                }`}
              >
                {group.items.map((item) => (
                  <li key={item.name} className="tech-bento-skill">
                    <SkillMark
                      name={item.name}
                      slug={item.slug}
                      color={item.color}
                      className="size-9 sm:size-10"
                    />
                    <span className="tech-bento-skill-name text-white-50 text-sm">{item.name}</span>
                    {item.core ? (
                      <span className="tech-bento-core">Core</span>
                    ) : (
                      <span className="tech-bento-core-spacer" aria-hidden />
                    )}
                  </li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>

        <a href="#contact" className="tech-bento-focus">
          <span className="tech-bento-focus-icon" aria-hidden>
            ✦
          </span>
          <span>
            Core focus:{" "}
            <strong>Full Stack Development + AI Integrations</strong>
          </span>
          <span className="tech-bento-focus-arrow" aria-hidden>
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default Techstack;
