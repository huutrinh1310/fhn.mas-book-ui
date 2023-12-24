import { Card, CardContent } from "@/components/shared/card";
import { Book } from "@/types/book.model";
import { memo, useCallback, useEffect, useRef, useState } from "react";

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
import { useInfiniteQuery } from "@tanstack/react-query";

export interface IBookListProps {
  data: Book[];
  entry: IntersectionObserverEntry;
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

function BookList({ data, entry }: IBookListProps) {
  const theme = useTheme();

  const navigation = useNavigate();

  const handleEdit = (id: number) => {
    navigation("/book?mode=edit&id=" + id);
    window.scrollTo(0, 0);
  };

  const { deleteBook, getBooks } = useBook();

  const fetchBooks = useCallback(
    async (page: number) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await getBooks();
      return data.slice((page - 1) * 2, page * 2);
    },
    [data]
  );

  const {
    data: dataBook,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["query"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetchBooks(pageParam as number);
      return response;
    },
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
    initialPageParam: 1,
    initialData: {
      pages: [data.slice(0, 2)],
      pageParams: [1],
    },
  });

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry]);

  const _books = dataBook?.pages.flatMap((page) => page);

  return (
    <>
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
              {_books?.map((row, i) => {
                return (
                  <TableRow
                    key={row.id}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "title") {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                          >
                            <Typography variant={"h6"}>{value}</Typography>
                          </TableCell>
                        );
                      }

                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                        >
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
                        onClick={() => {
                          document.body.scrollTop = 0;
                          document.documentElement.scrollTop = 0;
                          handleEdit(row.id!);
                        }}
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
                        <EditIcon
                          width={16}
                          height={16}
                        />
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
                        <TrashIcon
                          width={16}
                          height={16}
                        />
                      </IconComponent>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : (dataBook?.pages.length ?? 0) < 3
          ? "Loadmore"
          : "Nothing more to load"}
      </button>
    </>
  );
}

export default memo(BookList);
