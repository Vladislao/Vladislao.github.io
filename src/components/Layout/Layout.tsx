import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import ActivityBar from "@/components/ActivityBar";
import Sidebar from "@/components/Sidebar";
import useOnClickOutside from "@/hooks/useOnClickOutside";

import cl from "./Layout.module.scss";

export type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const hamburgerRef = useRef(null);
  const sidebarRef = useRef(null);

  useOnClickOutside(
    sidebarVisible,
    useMemo(() => [hamburgerRef, sidebarRef], []),
    useCallback(() => {
      setSidebarVisible(false);
    }, [])
  );

  return (
    <div className={cl.container}>
      <ActivityBar
        ref={hamburgerRef}
        hamburgerActive={sidebarVisible}
        onHamburgerClick={() => setSidebarVisible((state) => !state)}
      />
      <Sidebar ref={sidebarRef} isVisible={sidebarVisible} />
      {children}
    </div>
  );
};

export default Layout;
