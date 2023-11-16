import Head from "next/head";

import Editor from "@/components/Editor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vladislav Stroev CV</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Editor>
          <>About</>
          <></>
          <>
            I am a <span className="hl_violet">fullstack web developer</span>{" "}
            with experience dating back to 2013. I hold a Master&apos;s degree
            in Computer Science and have a strong background in{" "}
            <span className="hl_blue">Typescript</span> and{" "}
            <span className="hl_blue">Javascript</span>. I am skilled in using{" "}
            <span className="hl_winter">Node.js</span> and{" "}
            <span className="hl_winter">React</span>, and have experience with a
            variety of databases, including{" "}
            <span className="hl_cyan">MongoDB</span>,{" "}
            <span className="hl_cyan">PostgreSQl</span>, and{" "}
            <span className="hl_cyan">Elasticsearch</span>.
          </>
          <></>
          <>
            In my current role, I have successfully led the development of
            several complex web applications and have received positive feedback
            for my ability to conduct technical interviews and manage small
            teams. I am familiar with <span className="hl_cream">Kanban</span>{" "}
            and <span className="hl_cream">Agile</span> methodologies and am
            always looking for opportunities to learn and grow as a developer.
          </>
          <></>
          <>Experience</>
          <></>
          <>Lead Web Developer</>
          <div data-tab="1">Tenderplan · Full-time</div>
          <div data-tab="1">Sep 2015 - Present · 8 yrs 3 mos</div>
          <div data-tab="1">Ulyanovsk Region, Russian Federation · Remote</div>
          <div data-tab />
          <div data-tab="1">
            As a senior full-stack developer, I have been responsible for the
            successful building and deployment of multiple web applications.
          </div>
          <div data-tab />
          <div data-tab="1">
            * Designed and implemented scalable, high-performance web
            applications;
          </div>
          <div data-tab="1">
            * Implemented back-end architecture using NodeJS and TypeScript with
            OAuth 2.0 endpoints;
          </div>
          <div data-tab="1">* Developed microservices and integrations;</div>
          <div data-tab="1">
            * Configured Continuous Deployment with Ansible and Docker;
          </div>
          <div data-tab="1">
            * Conducted technical interviews and mentored team members.
          </div>
          <div data-tab />
          <div data-tab="1">
            Skills: JavaScript · Node.js · React · Microservices · REST APIs
          </div>
          <></>
          <>Web Developer</>
          <div data-tab="1">LMX Solutions · Full-time</div>
          <div data-tab="1">Mar 2013 - Sep 2015 · 2 yrs 7 mos</div>
          <div data-tab="1">Ulyanovsk Region, Russian Federation · On-site</div>
          <div data-tab />
          <div data-tab="1">Implemented multiple projects.</div>
          <div data-tab />
          <div data-tab="1">
            * Developed frontend using AngularJS and Backbone.js;
          </div>
          <div data-tab="1">* Built microservices using C# and ASP.NET.</div>
          <div data-tab />
          <div data-tab="1">
            Skills: JavaScript · SQL · AngularJS · Backbone.js · C#
          </div>
          <></>
          <>Skills</>
          <>Skills</>
        </Editor>
      </main>
    </>
  );
}
