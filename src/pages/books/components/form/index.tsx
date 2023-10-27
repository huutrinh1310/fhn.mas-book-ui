import * as React from "react";

import { Card, CardContent, CardTitle } from "@/components/shared/card";
import { useForm } from "react-hook-form";
import { bookSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FormAction,
  FormGroup,
  FormLabel,
  Formbody,
} from "@/components/shared/form";
import InputElement from "@/components/shared/input-element";

import styles from "./index.module.scss";
import stylesForm from "@/components/shared/form/index.module.scss";

import Button from "@/components/shared/button";
import { useSearchParams } from "react-router-dom";
import useBook from "@/hooks/useBook";

export interface IBookFormValues {
  code: string;
  title: string;
  author: string;
  price: number;
}

export default function BookForm() {
  const {
    formState: { errors },
    ...form
  } = useForm<IBookFormValues>({
    mode: "all",
    resolver: yupResolver(bookSchema),
    defaultValues: {
      code: "",
      title: "",
      author: "",
      price: 0,
    },
  });
  const [loading, setLoading] = React.useState(false);
  const { getBook, addBook, updateBook } = useBook();
  const [searchParams, setSearchParams] = useSearchParams("");
  const isEdit = searchParams.get("mode") === "edit";

  React.useEffect(() => {
    form.clearErrors();
    if (searchParams.get("mode") === null) {
      setSearchParams({ mode: "add" });
    }
    if (isEdit) {
      getBook(Number(searchParams.get("id"))).then((res) => {
        form.setValue("code", res.code);
        form.setValue("title", res.title);
        form.setValue("author", res.author);
        form.setValue("price", res.price);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSearchParams, searchParams]);

  const onSubmit = (data: IBookFormValues) => {
    setLoading(true);
    if (isEdit) {
      updateBook(data, Number(searchParams.get("id")))
        .then(() => {
          resetForm();
        })
        .catch(() => {});
    } else {
      addBook(data)
        .then(() => {
          resetForm();
        })
        .catch(() => {});
    }
    setLoading(false);
  };
  const resetForm = () => {
    form.reset();
    setSearchParams({ mode: "add" });
  };

  return (
    <Card>
      <CardTitle>Book Information</CardTitle>
      <CardContent>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <Formbody>
            <FormGroup
              className={
                errors.code?.message ? stylesForm["invalid-error"] : ""
              }
            >
              <FormLabel htmlFor="code">Book Code *</FormLabel>
              <InputElement
                type="text"
                id="code"
                itemRef="code"
                disabled={isEdit}
                {...form.register("code")}
                primary
                placeholder="Enter book code"
                className={`${styles["form-group__input"]} ${stylesForm["form-group__input"]}`}
              />
              <span className={styles["form-group__message"]}>
                {errors.code?.message}
              </span>
            </FormGroup>

            <FormGroup
              className={
                errors.title?.message ? stylesForm["invalid-error"] : ""
              }
            >
              <FormLabel htmlFor="title">Book Name *</FormLabel>
              <InputElement
                type="text"
                id="title"
                {...form.register("title")}
                primary
                placeholder="Enter book name"
                className={`${styles["form-group__input"]} ${stylesForm["form-group__input"]}`}
              />
              <span className={styles["form-group__message"]}>
                {errors.title?.message}
              </span>
            </FormGroup>

            <FormGroup
              className={
                errors.author?.message ? stylesForm["invalid-error"] : ""
              }
            >
              <FormLabel htmlFor="author">Author *</FormLabel>
              <InputElement
                type="text"
                id="author"
                {...form.register("author")}
                primary
                placeholder="Enter author name"
                className={`${styles["form-group__input"]} ${stylesForm["form-group__input"]}`}
              />
              <span className={styles["form-group__message"]}>
                {errors.author?.message}
              </span>
            </FormGroup>

            <FormGroup
              className={
                errors.price?.message ? stylesForm["invalid-error"] : ""
              }
            >
              <FormLabel htmlFor="price">Price *</FormLabel>
              <InputElement
                type="type"
                id="price"
                {...form.register("price")}
                aria-invalid={errors.price ? "true" : "false"}
                primary
                placeholder="Enter book price"
                className={`${styles["form-group__input"]} ${stylesForm["form-group__input"]}`}
              />
              <span className={styles["form-group__message"]}>
                {errors.price?.message}
              </span>
            </FormGroup>
          </Formbody>
          <FormAction>
            <Button primary type="submit" disabled={loading} loading={loading}>
              {loading ? "Submitting" : "Save changes"}
            </Button>
            <Button
              tertiary
              type="button"
              onClick={() => {
                resetForm();
              }}
            >
              Cancel
            </Button>
          </FormAction>
        </Form>
      </CardContent>
    </Card>
  );
}
