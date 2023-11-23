import React from "react";
import Head from "next/head";

import Editor from "@/components/Editor";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Vladislav Stroev - Contacts</title>
        <meta
          name="description"
          content="Feel free to contact me using your preferred method"
        />
        <link rel="canonical" href="https://vladislao.github.io/contacts" />
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
          <>CV: https://vladislao.github.io/files/Vladislav%20Stroev%20CV.pdf</>
          <></>
          <></>
          <></>
        </Editor>
      </main>
    </>
  );
};

export default Contacts;
