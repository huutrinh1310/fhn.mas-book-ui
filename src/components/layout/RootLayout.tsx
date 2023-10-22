import * as React from "react";
import Header from "./header";
import PageContent from "./page-content";
import Sidebar from "./sidebar";
import { Outlet, useSearchParams } from "react-router-dom";
import styles from "./index.module.scss";
import {
  BookIcon,
  LifeRingIcon,
  MenuIcon,
  SignOutIcon,
  UserIcon,
  WrenchIcon,
} from "@/utils/icon";
import SidebarItem from "./sidebar/SidebarItem";
import Button from "../shared/button";
import SearchLoading from "../shared/loading/SearchLoading";

type SidebarItem = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  path: string;
};

const slidebarItems: SidebarItem[] = [
  {
    icon: MenuIcon(24, 24),
    label: "Home",
    path: "/",
  },
  {
    icon: BookIcon(24, 24),
    label: "Book",
    active: true,
    path: "/book",
  },
  {
    icon: UserIcon(24, 24),
    label: "User",
    path: "/user",
  },
  {
    icon: LifeRingIcon(24, 24),
    label: "Help",
    path: "/help",
  },
  {
    icon: WrenchIcon(24, 24),
    label: "Settings",
    path: "/settings",
  },
];

export default function RootLayout() {
  const searchParams = useSearchParams();

  React.useEffect(() => {
    slidebarItems.forEach((item) => {
      if (item.path === searchParams.toString()) {
        item.active = true;
      }
    });
  }, [searchParams]);

  return (
    <React.Fragment>
      <div className={styles.pageContent}>
        <Sidebar>
          {slidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              link={item.path}
            />
          ))}
          <Button className="">
            <SignOutIcon width={24} height={24} />
            <span>Sign Out</span>
          </Button>
        </Sidebar>
        <section className={styles.pageContentRight}>
          <Header />
          <PageContent>
            <Outlet />
          </PageContent>
        </section>
      </div>
    </React.Fragment>
  );
}
