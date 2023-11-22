import React from "react";
import cn from "classnames";
import { Roboto_Flex } from "next/font/google";

import cl from "./index.module.scss";
import Head from "next/head";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const resume = {
  name: "Vladislav Stroev",
  position: "Full Stack Web Developer",
  phone: "+79041808129",
  email: "vladislaosan@gmail.com",
  telegram: "@vladislaosan",
  summary:
    "Fullstack Web Developer since 2013 with expertise in TypeScript, JavaScript, Node.js, and React. Skilled in backend technologies and DevOps, passionate about continuous learning and innovation in tech.",
  employment: [
    {
      title: "Full Stack Web Developer",
      employer: "Tenderplan",
      from: "Sep, 2015",
      to: "Present",
      site: ["tenderplan.ru", "https://tenderplan.ru"],
      description: [
        "Transitioned to fullstack development, balancing frontend and backend responsibilities. Involved in the full lifecycle of web application development of multiple SaaS products and CRM system.",
        "Played a key role in application redesign, utilizing a modern tech stack including TypeScript, React, Redux, Node.js, and MongoDB. This led to enhanced application performance and user experience, as noted by positive feedback from users.",
        "Developed and integrated critical features like OAuth 2.0 endpoints and optimized backend services using Node.js and Elixir, resulting in improved security, data handling capabilities, and a more streamlined user experience.",
        "Led a frontend team, managing recruitment, onboarding, and mentoring. Successfully integrated 10+ new hires into the team, ensuring effective team integration.",
        "Contributed to DevOps initiatives, including infrastructure design and containerization of services. These efforts led to more streamlined deployment processes, reduced errors during releases, and improved overall system stability and scalability.",
      ],
      skills: [
        "JavaScript, TypeScript",
        "C#, Python, Elixir",
        "React, Redux",
        "React Native",
        "Node.js, ASP.NET",
        "Microservices, RabbitMQ, Redis",
        "MongoDB, Elasticsearch",
        "PostgreSQL, Microsoft SQL",
        "Containerization, Ansible",
        "Linux, Docker",
        "OAuth 2.0, Asterisk VoIP",
      ],
    },
    {
      title: "Web Developer",
      employer: "LMX Solutions",
      from: "Mar, 2013",
      to: "Sep, 2015",
      description: [
        "Began career as an intern and junior frontend developer, working on an e-commerce platform.",
        "Involved in building an online shop from scratch, utilizing ASP.NET and Backbone, adaptable to legacy browsers like IE6.",
        "Contributed to the development of the company's first internal SaaS product as a junior frontend developer using AngularJS.",
        "Participated in architecture design discussions and developed microservices and controllers for ASP.NET applications.",
        "Worked with technologies like Microsoft SQL, RabbitMQ, and Redis, broadening technical expertise.",
      ],
    },
  ],
  education: [
    {
      school: "Ulyanovsk State Technical University",
      degree: `Specialist Degree in Information Systems and Technologies (Equivalent to Master's Degree)`,
      from: "Sep, 2010",
      to: "Jun, 2015",
      site: ["ulstu.ru", "https://ulstu.ru/en/"],
      description: [
        `Developed an Electronic Computer-Aided Design (ECAD) application using Qt framework, gaining proficiency in software design and user interface development.`,
      ],
    },
  ],
  skills: [
    "JavaScript, TypeScript",
    "C#, Python, Elixir",
    "React, Redux",
    "React Native",
    "Node.js, ASP.NET",
    "Microservices, RabbitMQ, Redis",
    "MongoDB, Elasticsearch",
    "PostgreSQL, Microsoft SQL",
    "Containerization, Ansible",
    "Linux, Docker",
    "OAuth 2.0, Asterisk VoIP",
  ],
  languages: [
    ["English", "C1"],
    ["Russian", "Native speaker"],
  ],
  links: [
    ["Portfolio", "https://vladislao.github.io/"],
    ["GitHub", "https://github.com/vladislao"],
    ["LinkedIn", "https://www.linkedin.com/in/vladislav-stroev/?locale=en_US"],
  ],
  projects: [
    {
      title: "proxy-supervisor",
      site: ["sources", "https://github.com/vladislao/proxy-supervisor"],
      description: [
        "Developed a tool for robust proxy management, including monitoring, balancing, and replenishing proxies.",
        "Implemented features for handling HTTP, HTTPS, and tunnel proxies, focusing on high performance and test coverage.",
        "Employed technologies such as Node.js and various network protocols, contributing to the project's versatility and efficiency.",
      ],
    },
    {
      title: "telechart",
      site: ["sources", "https://github.com/vladislao/telechart"],
      description: [
        "Created a lightweight, dependency-free library for rendering interactive charts using HTML5 Canvas.",
        "Ensured responsiveness and cross-device compatibility, enhancing the library's usability for web development.",
      ],
    },
  ],
};

export default function CV() {
  return (
    <>
      <Head>
        <title>Vladislav Stroev</title>
        <meta
          name="description"
          content="Fullstack Developer with a Master's in Computer Science, expert in Typescript, Javascript, Node.js, React, and backend architecture."
        />
      </Head>
      <main className={cn(cl.container, roboto.className)}>
        <div>
          <h1 className={roboto.className}>{resume.name}</h1>
          <div className={cn(cl.position, roboto.className)}>
            {resume.position}
          </div>
        </div>
        <div className={cl.content}>
          <div>
            <div className={cl.section}>
              <h2 className={roboto.className}>Details</h2>
              <div>
                <h3>Phone</h3>
                <div>{resume.phone}</div>
              </div>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${resume.email}`} target="_blank">
                  {resume.email}
                </a>
              </div>
              <div>
                <h3>Telegram</h3>
                <a href={`https://t.me/vladislaosan`} target="_blank">
                  {resume.telegram}
                </a>
              </div>
            </div>
            <hr style={{ border: "none" }} />
            <div className={cl.section}>
              <h2 className={roboto.className}>Skills</h2>
              <div className={cl.skills}>
                {resume.skills.map((v, i) => (
                  <div key={i}>{v}</div>
                ))}
              </div>
            </div>
            <hr style={{ border: "none" }} />
            <div style={{ pageBreakBefore: "always" }} className={cl.section}>
              <h2 className={roboto.className}>Languages</h2>
              <div className={cl.skills}>
                {resume.languages.map((v, i) => (
                  <div key={i}>{v[0]}</div>
                ))}
              </div>
            </div>
            <hr style={{ border: "none" }} />
            <div className={cl.section}>
              <h2 className={roboto.className}>Links</h2>
              <div className={cl.skills}>
                {resume.links.map((v, i) => (
                  <a key={i} href={v[1]} target="_blank">
                    {v[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className={cl.section}>
              <h2 className={roboto.className}>Profile</h2>
              <div className={cl.text}>{resume.summary}</div>
            </div>
            <hr></hr>
            <div className={cl.section}>
              <h2 className={roboto.className}>Employment history</h2>
              {resume.employment.map((v, i) => (
                <div key={i} className={cl.employment}>
                  <h4 className={roboto.className}>
                    {v.title}, {v.employer}
                  </h4>
                  <div className={cl.employment__period}>
                    {v.from} - {v.to}
                    {v.site ? (
                      <a href={v.site[1]} target="_blank">
                        {v.site[0]}
                      </a>
                    ) : null}
                  </div>
                  <ul className={cl.text}>
                    {v.description.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <hr></hr>
            <div className={cl.section}>
              <h2>Education</h2>
              {resume.education.map((v, i) => (
                <div key={i} className={cl.employment}>
                  <h4 className={cn(roboto.className, cl.text)}>
                    <div>{v.degree},</div>
                    {v.school}
                  </h4>
                  <div className={cl.employment__period}>
                    {v.from} - {v.to}
                    {v.site ? (
                      <a href={v.site[1]} target="_blank">
                        {v.site[0]}
                      </a>
                    ) : null}
                  </div>
                  <ul className={cl.text}>
                    {v.description.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <hr></hr>
            <div className={cl.section}>
              <h2>Opensource projects</h2>
              {resume.projects.map((v, i) => (
                <div key={i} className={cl.employment}>
                  <h4 className={cn(roboto.className, cl.text)}>{v.title}</h4>
                  <div className={cl.employment__period}>
                    {v.site ? (
                      <a href={v.site[1]} target="_blank">
                        {v.site[0]}
                      </a>
                    ) : null}
                  </div>
                  <ul className={cl.text}>
                    {v.description.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
