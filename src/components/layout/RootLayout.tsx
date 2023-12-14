import * as React from "react";
import Header from "./header";
import PageContent from "./page-content";
import Sidebar from "./sidebar";
import {
  NavLink,
  Outlet,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
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
import BUILoading from "../shared/loading";
import { Box, Link, ListItem, Typography } from "@mui/material";
import IconSidebar from "../shared/icon-sidebar";

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
  // const { logOut } = useAuth();
  const navigation = useNavigation();

  React.useEffect(() => {
    slidebarItems.forEach((item) => {
      if (item.path === searchParams.toString()) {
        item.active = true;
      }
    });
  }, [searchParams]);

  return (
    <React.Fragment>
      {navigation.state === "loading" && <BUILoading />}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignContent={"flex-start"}
      >
        <Sidebar>
          {slidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              link={item.path}
            />
          ))}
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              mt: "80px",
            }}
          >
            <Link href={"/logout"} className={styles["sidebar-item"]}>
              <IconSidebar
                children={<SignOutIcon width={24} height={24} />}
                // className={styles["sidebar-icon"]}
              />
              <Typography component="span">Sign Out</Typography>
            </Link>
          </ListItem>
        </Sidebar>
        <Box
          component={"section"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          borderRadius={"30px"}
          flex={1}
          flexDirection={"column"}
        >
          <Header />
          <PageContent>
            <Outlet />
          </PageContent>
        </Box>
      </Box>
    </React.Fragment>
  );
}
