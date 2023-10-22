import { SpinnerIcon } from "@/utils/icon";
import styles from "./index.module.scss";

export default function SearchLoading({ className }: { className?: string }) {
  const classnames = [styles["search-loading"], className].join(" ");

  return <SpinnerIcon width={24} height={24} className={classnames} />;
}
