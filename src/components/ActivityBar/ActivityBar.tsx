import React from "react";
import cn from "classnames";

import Hamburger from "./static/hamburger.svg";
import FilesSVG from "./static/files.svg";
import GitHubSVG from "./static/github.svg";
import LinkedInSVG from "./static/linkedin.svg";
import TelegramSVG from "./static/telegram.svg";
import EmailSVG from "./static/email.svg";

import cl from "./ActivityBar.module.scss";

export type ActivityBarProps = {
  hamburgerActive: boolean;
  onHamburgerClick: () => void;
};

const ActivityBar = React.forwardRef<HTMLDivElement, ActivityBarProps>(
  function ActivityBar(
    { hamburgerActive, onHamburgerClick }: ActivityBarProps,
    ref
  ) {
    return (
      <aside className={cl.container}>
        <div
          ref={ref}
          className={cn(cl.link, cl.link_selected, {
            [cl.link_active]: hamburgerActive,
          })}
          onClick={onHamburgerClick}
        >
          <Hamburger />
        </div>
        <a
          className={cl.link}
          href="https://github.com/vladislao"
          target="_blank"
          aria-label="GitHub"
        >
          <GitHubSVG />
        </a>
        <a
          className={cl.link}
          href="https://www.linkedin.com/in/vladislav-stroev/?locale=en_US"
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedInSVG />
        </a>
        <a
          className={cl.link}
          href="https://t.me/vladislaosan"
          target="_blank"
          aria-label="Telegram"
        >
          <TelegramSVG />
        </a>
        <a
          className={cl.link}
          href="mailto:vladislaosan@gmail.com"
          aria-label="Email"
        >
          <EmailSVG />
        </a>
      </aside>
    );
  }
);

export default ActivityBar;
