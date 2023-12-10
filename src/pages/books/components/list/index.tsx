import { Card, CardContent } from "@/components/shared/card";
import { Book } from "@/types/book.model";
import { memo, useState } from "react";

import { useNavigate } from "react-router-dom";
import useBook from "@/hooks/useBook";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { EditIcon, TrashIcon } from "@/utils/icon";
import { Typography, useTheme } from "@mui/material";
import { showConfirmDeleteButton } from "@/library/sweet-alert";
import IconComponent from "@/components/shared/icon";

export interface IBookListProps {
  data: Book[];
}

interface Column {
  id: "code" | "title" | "author" | "price";
  label: string;
  width?: number;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
const columns: Column[] = [
  {
    id: "code",
    label: "Book Code",
    minWidth: 100,
    width: 150,
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "title",
    label: "Book Name",
    minWidth: 300,
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "author",
    label: "Author",
    minWidth: 100,
    width: 220,
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    width: 180,
    format: (value: number) => value.toFixed(2),
  },
];

function BookList({ data }: IBookListProps) {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigation = useNavigate();

  const handleEdit = (id: number) => {
    navigation("/book?mode=edit&id=" + id);
    window.scrollTo(0, 0);
  };

  const { deleteBook } = useBook();

  return (
    <Card>
      <Typography variant={"h4"}>Book list</Typography>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    top: 57,
                    minWidth: column.minWidth,
                    width: column.width,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                align={"center"}
                style={{ top: 57, minWidth: 50, width: 95 }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "title") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Typography variant={"h6"}>{value}</Typography>
                          </TableCell>
                        );
                      }

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format &&
                          column.id === "price" &&
                          typeof value === "number"
                            ? "$" + column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align={"center"}>
                      <IconComponent
                        onClick={() => handleEdit(row.id!)}
                        sx={{
                          backgroundColor: "transparent",
                          width: 30,
                          height: 30,
                          color: theme.palette.common.black,
                        }}
                        display={"inline-flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <EditIcon width={16} height={16} />
                      </IconComponent>
                      <IconComponent
                        onClick={() =>
                          showConfirmDeleteButton(
                            "Do you want to delete",
                            row.title + "?",
                            () => {
                              deleteBook(row.id!);
                            }
                          )
                        }
                        sx={{
                          backgroundColor: "transparent",
                          width: 30,
                          height: 30,
                          color: theme.palette.primary.main,
                        }}
                        display={"inline-flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <TrashIcon width={16} height={16} />
                      </IconComponent>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default memo(BookList);
