import * as React from "react";

import { Card, CardContent } from "@/components/shared/card";
import { useForm } from "react-hook-form";
import { bookSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormAction, Formbody } from "@/components/shared/form";

import styles from "./index.module.scss";
import stylesForm from "@/components/shared/form/index.module.scss";

import { Box, Button as ButtonMui, InputBase, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import useBook from "@/hooks/useBook";
import { FormGroup, FormLabel } from "@mui/material";
import { theme } from "@/theme";

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
      <Typography variant={"h4"}>Book Information</Typography>
      <CardContent>
        <Box component={"form"} onSubmit={form.handleSubmit(onSubmit)}>
          <Formbody>
            <FormGroup
              sx={{ flex: "1 0 0" }}
              className={
                errors.code?.message ? stylesForm["invalid-error"] : ""
              }
            >
              <FormLabel htmlFor="code">Book Code *</FormLabel>
              <InputBase
                type="text"
                id="code"
                itemRef="code"
                disabled={isEdit}
                {...form.register("code")}
                placeholder="Enter book code"
                className={`${styles["form-group__input"]} ${stylesForm["form-group__input"]}`}
                itemType={errors.code?.message ? "error" : "secondary"}
              />
              <Typography
                variant="caption"
                component="span"
                sx={{ color: theme.palette.error.main }}
              >
                {errors.code?.message}
              </Typography>
            </FormGroup>

            <FormGroup
              sx={{ flex: "1 0 0" }}
              className={
                errors.title?.message ? stylesForm["invalid-error"] : ""
              }
            >
              <FormLabel htmlFor="title">Book Name *</FormLabel>
              <InputBase
                type="text"
                id="title"
                {...form.register("title")}
                placeholder="Enter book name"
                className={`${styles["form-group__input"]} ${stylesForm["form-group__input"]}`}
                itemType={errors.title?.message ? "error" : "secondary"}
              />
              <Typography
                variant="caption"
                component="span"
                sx={{ color: theme.palette.error.main }}
              >
                {errors.title?.message}
              </Typography>
            </FormGroup>

            <FormGroup
              sx={{ flex: "1 0 0" }}
              className={
                errors.author?.message ? stylesForm["invalid-error"] : ""
              }
            >
              <FormLabel htmlFor="author">Author *</FormLabel>
              <InputBase
                type="text"
                id="author"
                {...form.register("author")}
                placeholder="Enter author name"
                className={`${styles["form-group__input"]} ${stylesForm["form-group__input"]}`}
                itemType={errors.author?.message ? "error" : "secondary"}
              />
              <Typography
                variant="caption"
                component="span"
                sx={{ color: theme.palette.error.main }}
              >
                {errors.author?.message}
              </Typography>
            </FormGroup>

            <FormGroup
              sx={{ flex: "1 0 0" }}
              className={
                errors.price?.message ? stylesForm["invalid-error"] : ""
              }
            >
              <FormLabel htmlFor="price">Price *</FormLabel>
              <InputBase
                type="type"
                id="price"
                {...form.register("price")}
                aria-invalid={errors.price ? "true" : "false"}
                placeholder="Enter book price"
                className={`${styles["form-group__input"]} ${stylesForm["form-group__input"]}`}
                itemType={errors.price?.message ? "error" : "secondary"}
              />
              <Typography
                variant="caption"
                component="span"
                sx={{ color: theme.palette.error.main }}
              >
                {errors.price?.message}
              </Typography>
            </FormGroup>
          </Formbody>
          <FormAction>
            <ButtonMui variant="contained" type="submit" disabled={loading}>
              Save changes
            </ButtonMui>
            <ButtonMui variant="text" type="button" onClick={resetForm}>
              Cancel
            </ButtonMui>
          </FormAction>
        </Box>
      </CardContent>
    </Card>
  );
}
