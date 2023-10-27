import { Card, CardContent, CardTitle } from "@/components/shared/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@/components/shared/table";
import { Book } from "@/types/book.model";
import { memo } from "react";

import styleTable from "@/components/shared/table/index.module.scss";
import IconComponent from "@/components/shared/icon";
import { EditIcon, TrashIcon } from "@/utils/icon";
import { showConfirmDeleteButton } from "@/library/sweet-alert";
import { useNavigate } from "react-router-dom";
import useBook from "@/hooks/useBook";
import { validatePrice } from "@/utils/validator";

export interface IBookListProps {
  data: Book[];
}

function BookList({ data }: IBookListProps) {
  const navigation = useNavigate();

  const handleEdit = (id: number) => {
    navigation("/book?mode=edit&id=" + id);
    window.scrollTo(0, 0);
  };

  const { deleteBook } = useBook();

  return (
    <Card>
      <CardTitle>Book List</CardTitle>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell className={styleTable["table-colspan-1"]}>
                Book Code
              </TableHeaderCell>
              <TableHeaderCell className={styleTable["table-colspan-3"]}>
                Book Name
              </TableHeaderCell>
              <TableHeaderCell className={styleTable["table-colspan-1"]}>
                Author
              </TableHeaderCell>
              <TableHeaderCell className={styleTable["table-colspan-1"]}>
                Price
              </TableHeaderCell>
              <TableHeaderCell className={styleTable["table-colspan-1"]}>
                Action
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data ? (
              data.map((book, index) => (
                <TableRow key={index}>
                  <TableCell className={styleTable["table-colspan-1"]}>
                    {book.code}
                  </TableCell>
                  <TableCell
                    className={`${styleTable["table-colspan-3"]} ${styleTable["table-cell-bold"]}`}
                  >
                    {book.title}
                  </TableCell>
                  <TableCell className={styleTable["table-colspan-1"]}>
                    {book.author}
                  </TableCell>
                  <TableCell className={styleTable["table-colspan-1"]}>
                    {"$" + validatePrice(book.price)}
                  </TableCell>
                  <TableCell
                    className={`${styleTable["table-colspan- 1"]} ${styleTable["table-action"]}`}
                  >
                    <IconComponent
                      children={
                        <EditIcon
                          width={16}
                          height={16}
                          className={`${styleTable["table-action__icon--edit"]}`}
                        />
                      }
                      onClick={() => {
                        handleEdit(book.id!);
                      }}
                      className={styleTable["table-action__icon"]}
                    />
                    <IconComponent
                      children={
                        <TrashIcon
                          width={16}
                          height={16}
                          className={`${styleTable["table-action__icon--trash"]}`}
                        />
                      }
                      onClick={() =>
                        showConfirmDeleteButton(
                          "Do you want to delete",
                          book.title + "?",
                          () => {
                            deleteBook(book.id!);
                          }
                        )
                      }
                      className={styleTable["table-action__icon"]}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>No data found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default memo(BookList);
