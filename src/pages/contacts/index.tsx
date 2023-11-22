import React from "react";
import Head from "next/head";

import Editor from "@/components/Editor";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Vladislav Stroev</title>
        <meta
          name="description"
          content="Fullstack Developer with a Master's in Computer Science, expert in Typescript, Javascript, Node.js, React, and backend architecture."
        />
      </Head>
      <main style={{ flexGrow: 1 }}>
        <Editor>
          <>Phone: +79041808129</>
          <>Email: vladislaosan@gmail.com</>
          <>Telegram: @vladislaosan</>
          <></>
          <>Profile: https://vladislao.github.io/</>
          <>GitHub: https://github.com/vladislao/</>
          <>
            LinkedIn: https://www.linkedin.com/in/vladislav-stroev/?locale=en_US
          </>
          <></>
          <></>
        </Editor>
      </main>
    </>
  );
};

export default Contacts;
