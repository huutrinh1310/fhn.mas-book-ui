import * as React from "react";
import styles from "./index.module.scss";

export interface ITableProps {
  children: React.ReactNode;
}
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["table"], className].join(" ");
  return <table ref={ref} className={classnames} {...props} />;
});

Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["table-header"], className].join(" ");
  return <thead ref={ref} className={classnames} {...props} />;
});

TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["table-body"], className].join(" ");
  return <tbody ref={ref} className={classnames} {...props} />;
});

TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["table-row"], className].join(" ");
  return <tr ref={ref} className={classnames} {...props} />;
});

TableRow.displayName = "TableRow";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["table-cell"], className].join(" ");
  return <td ref={ref} className={classnames} {...props} />;
});

TableCell.displayName = "TableCell";

const TableHeaderCell = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const classnames = [styles["table-header-cell"], className].join(" ");
  return <th ref={ref} className={classnames} {...props} />;
});

TableHeaderCell.displayName = "TableHeaderCell";

export { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell };
