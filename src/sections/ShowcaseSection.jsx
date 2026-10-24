import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  
  
  
  
  useGSAP(() => {
      
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    gsap.fromTo(
        sectionRef.current, 
        { opacity:0}, 
        {opacity:1, duration:1.5, ease: "power2.inOut"}
    )

    projects.forEach((card,index) => {
        gsap.fromTo(
            card,
            { 
                y:50,
                opacity:0,
            },
            {
                y:0,
                opacity:1,
                duration:1,
                delay: (index+1) * 0.3,
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100"
                }
            }
        )
      })
  })

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}
                <div ref={project1Ref} className="first-project-wrapper">
                    <div className="image-wrapper">
                        <img src="/images/priya_mehra_heroImage.png" alt="Dr. Priya Mehra, an experienced gynecologist" />
                    </div>
                    <div className="text-content">
                        <h2>Expert Women's Healthcare, Just a Call Away</h2>
                    </div>
                    <p className="text-white-50 md:text-xl">
                        Connect with Dr. Priya Mehra, an experienced gynecologist, 
                        to book appointments or schedule a consultation before visiting the clinic. 
                        Get trusted guidance, convenient access to care, and peace of mind when you need it most.
                    </p>



                </div>

                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div ref={project2Ref} className="project">
                        <div className="image-wrapper bg-[#EDE9FE]">
                            <img src="/images/daily_tracker_dashboard.png" alt="Daily Activity & Productivity Tracker" />
                        </div>
                        <h2>Daily Activity & Productivity Tracker</h2>
                        <p className="text-white-50 md:text-xl">
                            Track daily tasks, monitor progress, build habits, and save memorable moments.
                        </p>
                    </div>

                    <div ref={project3Ref} className="project">
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/bolly_movie_guess.png" alt="YC Directory" />
                        </div>
                        <h2>Bollywood Movie Guess</h2>
                        <p className="text-white-50 md:text-xl">
                            An interactive Bollywood movie guessing game that challenges players to identify films using vowel and letter clues.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default ShowcaseSection