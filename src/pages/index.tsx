import Head from "next/head";

import Editor from "@/components/Editor";
import { addYears, differenceInMonths, differenceInYears } from "date-fns";

const formatDifference = (
  from: Date | number,
  to: Date | number = Date.now()
) => {
  const years = differenceInYears(to, from);
  const months = differenceInMonths(to, addYears(from, years));

  return `${years} yrs ${months} mos`;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Vladislav Stroev - Full Stack Developer</title>
        <meta
          name="description"
          content="Full stack Web Developer since 2013 with expertise in TypeScript, JavaScript, Node.js, and React. Passionate about continuous learning and innovation in tech."
        />
      </Head>
      <main style={{ flexGrow: 1 }}>
        <Editor>
          <>About</>
          <></>
          <>
            I am an experienced{" "}
            <span className="hl_violet">Fullstack Web Developer</span> with over
            ten years in the IT industry, starting in 2013. I hold a Specialist
            Degree (equivalent to Master&apos;s Degree) in Information Systems
            and Technologies and have developed a broad range of skills in both
            frontend and backend development. My technical expertise centers
            around{" "}
            <span className="hl_blue">
              TypeScript, JavaScript, Node.js, and React
            </span>
            , with additional knowledge in{" "}
            <span className="hl_blue">C#, Python, Elixir</span>, and various
            databases and tools such as{" "}
            <span className="hl_blue">
              MongoDB, Redis, RabbitMQ, PostgreSQL, and Elasticsearch
            </span>
            .
          </>
          <></>
          <>
            My career began in a fast-paced company where I progressed from an
            intern and junior frontend developer to a full-stack role. I have
            been involved in several key projects, including developing an{" "}
            <span className="hl_cyan">e-commerce platform</span>, a{" "}
            <span className="hl_cyan">SaaS</span> product, and a comprehensive{" "}
            <span className="hl_cyan">CRM system</span> that integrated{" "}
            <span className="hl_winter">VoIP</span> and{" "}
            <span className="hl_winter">email services</span>. A notable
            achievement was creating a unique{" "}
            <span className="hl_winter">document commenting</span> feature
            similar to that in Google Docs, which distinguished our product in
            the competitive market.
          </>
          <></>
          <>
            In my transition to backend development, I focused more on{" "}
            <span className="hl_winter">architecture design</span> and
            microservice implementation, showcasing my skills in scaling and
            improving complex systems. My role also expanded to include{" "}
            <span className="hl_winter">DevOps</span> responsibilities, such as
            infrastructure design, containerization, and system administration.
          </>
          <></>
          <>
            More recently, I have maintained a balance between backend and
            frontend responsibilities, taking on leadership in{" "}
            <span className="hl_winter">team management</span> and{" "}
            <span className="hl_winter">technical interviewing</span>. I have
            also been instrumental in driving quality improvements and workflow
            optimizations. My career path demonstrates a strong commitment to
            continuous learning and adapting to new challenges, with interests
            in exploring areas like machine learning and game development.
          </>
          <></>
          <>
            In my personal time, I engage in{" "}
            <span className="hl_cream">hackathons</span>, coding contests, and
            platforms like <span className="hl_cream">CodinGame</span>. This
            engagement not only keeps my skills honed but also enhances my
            creativity and problem-solving abilities.
          </>
          <></>
          <>Experience</>
          <></>
          <>Full Stack Web Developer</>
          <div data-tab="1">Tenderplan · Full-time</div>
          <div data-tab="1">
            Sep 2015 - Present ·{" "}
            {formatDifference(new Date(2015, 8), Date.now())}
          </div>
          <div data-tab="1">Ulyanovsk Region, Russian Federation · Remote</div>
          <div data-tab />
          <div data-tab="1">
            * Transitioned to full stack development, balancing frontend and
            backend responsibilities. Involved in the full lifecycle of web
            application development of multiple{" "}
            <span className="hl_cyan">SaaS</span> products and{" "}
            <span className="hl_cyan">CRM</span> system.
          </div>
          <div data-tab="1">
            * Played a key role in application redesign, utilizing a modern tech
            stack including{" "}
            <span className="hl_blue">
              TypeScript, React, Redux, Node.js, and MongoDB
            </span>
            . This led to enhanced application performance and user experience,
            as noted by positive feedback from users.
          </div>
          <div data-tab="1">
            * Developed and integrated critical features like{" "}
            <span className="hl_winter">OAuth 2.0</span> endpoints and optimized
            backend services using Node.js and Elixir, resulting in improved
            security, data handling capabilities, and a more streamlined user
            experience.
          </div>
          <div data-tab="1">
            * Led a frontend team,{" "}
            <span className="hl_winter">
              managing recruitment, onboarding, and mentoring
            </span>
            . Successfully integrated 10+ new hires into the team, ensuring
            effective team integration.
          </div>
          <div data-tab="1">
            * Contributed to <span className="hl_winter">DevOps</span>{" "}
            initiatives, including infrastructure design and containerization of
            services. These efforts led to more streamlined deployment
            processes, reduced errors during releases, and improved overall
            system stability and scalability.
          </div>
          <></>
          <>Web Developer</>
          <div data-tab="1">LMX Solutions · Full-time</div>
          <div data-tab="1">Mar 2013 - Sep 2015 · 2 yrs 7 mos</div>
          <div data-tab="1">Ulyanovsk Region, Russian Federation · On-site</div>
          <div data-tab />
          <div data-tab="1">
            * Began career as an intern and junior frontend developer, working
            on an <span className="hl_cyan">e-commerce</span> platform.
          </div>
          <div data-tab="1">
            * Involved in building an online shop from scratch, utilizing{" "}
            <span className="hl_blue">ASP.NET and Backbone</span>, adaptable to
            legacy browsers like <span className="hl_winter">IE6</span>.
          </div>
          <div data-tab="1">
            * Contributed to the development of the compan&apos;s first internal{" "}
            <span className="hl_cyan">SaaS</span> product as a junior frontend
            developer using <span className="hl_blue">AngularJS</span>.
          </div>
          <div data-tab="1">
            * Participated in architecture design discussions and developed
            microservices and controllers for{" "}
            <span className="hl_blue">ASP.NET</span> applications.
          </div>
          <div data-tab="1">
            * Worked with technologies like{" "}
            <span className="hl_blue">Microsoft SQL, RabbitMQ, and Redis</span>,
            broadening technical expertise.
          </div>
          <></>
          <>Education</>
          <></>
          <>Specialist Degree in Information Systems and Technologies</>
          <div data-tab="1">Ulyanovsk State Technical University</div>
          <div data-tab="1">Sep 2010 - Jun 2015 · 5 yrs</div>
          <div data-tab="1">
            * Developed an Electronic Computer-Aided Design (ECAD) application
            using Qt framework, gaining proficiency in software design and user
            interface development.
          </div>
          <></>
          <>Projects</>
          <></>
          <>proxy-supervisor</>
          <div data-tab="1">
            * Developed a tool for robust proxy management, including
            monitoring, balancing, and replenishing proxies.
          </div>
          <div data-tab="1">
            * Implemented features for handling{" "}
            <span className="hl_winter">HTTP, HTTPS, and tunnel proxies</span>,
            focusing on high performance and test coverage.
          </div>
          <div data-tab="1">
            * Employed technologies such as Node.js and various network
            protocols, contributing to the project&apos;s versatility and
            efficiency.
          </div>
          <></>
          <>telechart</>
          <div data-tab="1">
            * Created a lightweight, dependency-free library for rendering
            interactive charts using{" "}
            <span className="hl_winter">HTML5 Canvas</span>.
          </div>
          <div data-tab="1">
            * Ensured responsiveness and cross-device compatibility, enhancing
            the library&apos;s usability for web development.
          </div>
          <></>
          <></>
          <></>
        </Editor>
      </main>
    </>
  );
}
