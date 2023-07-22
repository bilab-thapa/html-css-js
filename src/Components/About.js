import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-section" id="about">
        <div className="about-text-all">
          <p class="about-text">About Me</p>
          <div className="about-text-long">
            Greetings! I'm Bilab Thapa, a multi-talented professional in the
            world of technology, specializing as a Developer and UI/UX Designer.
            Based in the vibrant city of Kathmandu, I've had an exhilarating
            journey in the realm of IT & E-Commerce ever since I completed my
            BSc in Computing from Softwarica College.
          </div>
        </div>
        <div class="about-all">
          <div class="row1">
            <div class="about-card">
              <span class="about-title">Passion for Technology</span>
              <p>
                My fascination with technology began at an early age and has
                grown into an unwavering passion over the years. The rapidly
                evolving landscape of the digital world has always inspired me
                to stay ahead of the curve and be at the forefront of
                innovation.
              </p>
            </div>

            <div class="about-card">
              <span class="about-title">Education and Expertise</span>
              <p>
                I pursued my formal education at Softwarica College of IT &
                E-Commerce, where I graduated with a BSc in Computing. This
                academic foundation equipped me with a solid understanding of
                the fundamental principles, but it was through practical
                experiences and hands-on projects that I truly flourished.
              </p>
            </div>
          </div>

          <div class="row2">
            <div class="about-card">
              <span class="about-title">Professional Journey</span>
              <p>
                My professional journey has been an exciting one, filled with
                diverse challenges and opportunities. I've had the pleasure of
                collaborating with talented teams on projects ranging from web
                and mobile applications to software development and
                user-centered design initiatives. This journey has not only
                expanded my skill set but also enriched my understanding of
                effective project management and teamwork.
              </p>
            </div>

            <div class="about-card">
              <span class="about-title">Personal Projects</span>
              <p>
                Beyond my professional work, I enjoy dedicating time to personal
                projects that allow me to experiment with ideas and nurture my
                creativity. These projects serve as a playground for innovation,
                enabling me to refine my skills and explore novel concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
