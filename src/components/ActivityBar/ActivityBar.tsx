import React from "react";
import Image from "next/image";

import cl from "./ActivityBar.module.scss";

const ActivityBar = () => (
  <aside className={cl.container}>
    <Image alt="React Logo" src="/img/react.svg" width={24} height={24} />
    <Image alt="JS Logo" src="/img/js.svg" width={24} height={24} />
    <Image alt="Elixir Logo" src="/img/elixir.svg" width={24} height={24} />
    <Image alt="DB Logo" src="/img/db.svg" width={24} height={24} />
    <Image alt="Docker Logo" src="/img/docker.svg" width={24} height={24} />
  </aside>
);

export default ActivityBar;
