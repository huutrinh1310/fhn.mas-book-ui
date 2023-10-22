import * as React from "react";
import styles from "./index.module.scss";

export interface IPageContentProps {
  children: React.ReactNode;
}

export default function PageContent(props: IPageContentProps) {
  return <main className={styles.content}>{props.children}</main>;
}
