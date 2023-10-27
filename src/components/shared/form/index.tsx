import * as React from "react";
import styles from "./index.module.scss";

export interface IFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

const Form = React.forwardRef<HTMLFormElement, IFormProps>(
  ({ className, onSubmit, children }, ref) => {
    const classnames = [styles.form, className].join(" ");
    return (
      <form ref={ref} onSubmit={onSubmit} className={classnames}>
        {children}
      </form>
    );
  }
);

const Formbody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, onSubmit, children }, ref) => {
  const classnames = [styles["form-body"], className].join(" ");
  return (
    <div ref={ref} onSubmit={onSubmit} className={classnames}>
      {children}
    </div>
  );
});

const FormGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["form-group"], className].join(" ");
  return <div ref={ref} className={classnames} {...props} />;
});

const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["form-label"], className].join(" ");
  return <label ref={ref} className={classnames} {...props} />;
});

const FormAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["form-action"], className].join(" ");
  return (
    <div ref={ref} className={classnames} {...props}>
      {props.children}
    </div>
  );
});

export { Form, Formbody, FormGroup, FormLabel, FormAction };
