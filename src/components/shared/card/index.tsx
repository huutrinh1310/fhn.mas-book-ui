import * as React from "react";
import styles from "./index.module.scss";
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles.card, className].join(" ");
  return <div ref={ref} className={classnames} {...props} />;
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["card-header"], className].join(" ");
  return <div ref={ref} className={classnames} {...props} />;
});
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["card-title"], className].join(" ");
  return <h3 ref={ref} className={classnames} {...props} />;
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["card-description"], className].join(" ");
  return <p ref={ref} className={classnames} {...props} />;
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["card-content"], className].join(" ");
  return <div ref={ref} className={classnames} {...props} />;
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["card-footer"], className].join(" ");
  return <div ref={ref} className={classnames} {...props} />;
});
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
