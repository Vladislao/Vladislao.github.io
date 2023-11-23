import React from "react";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import cl from "./Sidebar.module.scss";

export type SidebarProps = {
  isVisible: boolean;
};

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(function Sidebar(
  { isVisible }: SidebarProps,
  ref
) {
  const router = useRouter();

  return (
    <aside
      ref={ref}
      className={cn(cl.container, { [cl.container_visible]: isVisible })}
    >
      <h1 className={cl.headline}>Full Stack Developer</h1>
      <div className={cl.title}>
        <span className="icon icon_chevron-down"></span>Vladislav Stroev
      </div>
      <nav className={cl.navigation}>
        <Link
          className={cn({
            [cl.active]: router.pathname === "/",
          })}
          href="/"
        >
          <span className="icon icon_json"></span>about
        </Link>
        <Link
          className={cn({
            [cl.active]: router.pathname === "/contacts",
          })}
          href="/contacts"
        >
          <span className="icon icon_pdf"></span>contacts
        </Link>
      </nav>
      <div className={cl.title}>
        <span className="icon icon_chevron-down"></span>Opensource Projects
      </div>
      <nav className={cl.navigation}>
        <Link
          className={cn({
            [cl.active]: router.pathname === "/telechart",
          })}
          href="/telechart"
        >
          <span className="icon icon_html"></span>telechart
        </Link>
        <a
          title="proxy-supervisor"
          href="https://github.com/Vladislao/proxy-supervisor"
          target="_blank"
        >
          <span className="icon icon_ts"></span>proxy-supervisor
          <span className="icon icon_link"></span>
        </a>
        <a
          title="bitfun"
          href="https://github.com/Vladislao/bitfun"
          target="_blank"
        >
          <span className="icon icon_js"></span>bitfun
          <span className="icon icon_link"></span>
        </a>
        <a
          title="vladislao.github.io"
          href="https://github.com/Vladislao/vladislao.github.io"
          target="_blank"
        >
          <span className="icon icon_css"></span>vladislao.github.io
          <span className="icon icon_link"></span>
        </a>
      </nav>
    </aside>
  );
});

export default Sidebar;
