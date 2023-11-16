import React from "react";
import Link from "next/link";

import cl from "./Sidebar.module.scss";

const Sidebar = () => (
  <aside className={cl.container}>
    <div className={cl.headline}>Fullstack Developer</div>
    <h1 className={`${cl.title} icon icon_chevron-down`}>Vladislav Stroev</h1>
    <ul className={cl.navigation}>
      <nav className="icon icon_json">
        <Link href="/">About</Link>
      </nav>
      <nav className="icon icon_css">
        <Link href="/telechart">Experience</Link>
      </nav>
      <nav className="icon icon_js">Skills</nav>
      <nav className="icon icon_font">Languages</nav>
      <nav className="icon icon_html">Education</nav>
      <nav className="icon icon_ts">Projects</nav>
      <nav className="icon icon_pdf">Licenses & certifications</nav>
    </ul>
  </aside>
);

export default Sidebar;
