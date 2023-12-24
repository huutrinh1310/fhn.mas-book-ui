import { Components, LinkProps, Theme } from "@mui/material";
import palette from "./palette";
import LinkBehavior from "@/components/shared/link-behavior";
import Chip from "@/components/shared/chip";

const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: `

        `,
  },
  MuiInputBase: {
    defaultProps: {
      size: "medium",
    },

    styleOverrides: {
      root: ({ theme }) => ({
        "label + &": {
          marginTop: theme.spacing(1),
        },
        "& .MuiInputBase-input": {
          borderRadius: 10,
          position: "relative",
          width: "100%",
          flex: "1 0 0",
          transition: theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow",
          ]),
        },

        "& .MuiInputBase-input.Mui-error": {
          "> input": {
            border: "2px solid " + theme.palette.primary.main,
          },
          borderColor: theme.palette.error.main,
        },
        "&:hover .MuiInputBase-input": {
          borderColor: theme.palette.primary.main,
        },
        "& .MuiInputBase-input:focus": {
          borderColor: theme.palette.primary.main,
          boxShadow: `${theme.palette.primary.main} 0 0 0 0.1rem`,
        },
      }),
    },

    variants: [
      {
        props: { size: "medium" },
        style: {
          "& .MuiInputBase-input": {
            padding: "10px 16px",
            fontSize: 16,
          },
        },
      },
      {
        props: {
          itemType: "secondary",
        },
        style: {
          "& .MuiInputBase-input": {
            border: `1px solid #898989`,
          },
        },
      },
      {
        props: {
          itemType: "error",
        },
        style: {
          "& .MuiInputBase-input": {
            border: `1px solid ${palette.error.main}`,
          },
        },
      },
    ],
  },

  MuiButton: {
    defaultProps: {
      size: "medium",
      variant: "contained",
      color: "primary",
    },
    variants: [
      {
        props: { variant: "contained" },
        style: {
          background: palette.primary.main,
        },
      },
      {
        props: { variant: "text" },
        style: {
          background: palette.common.contrastText,
        },
      },
      {
        props: { size: "medium" },
        style: {
          padding: "12px 30px",
          fontSize: "16px",
          borderRadius: "10px",
          textTransform: "none",
          lineHeight: "normal",
        },
      },
    ],
  },

  MuiTable: {
    defaultProps: {
      size: "medium",
    },
    styleOverrides: {
      root: {
        width: "100%",
        borderCollapse: "collapse",
        borderSpacing: 0,
        "& thead": {
          "& tr": {
            "& th": {
              padding: "15px",
              borderBottom: `1px solid ${palette.grey[200]}`,
              color: palette.secondary.main,
              fontSize: 16,
            },
          },
        },
        "& tbody": {
          "& tr": {
            "& td": {
              padding: "15px",
              fontSize: 16,
              color: palette.common.black,
              borderBottom: "none",
            },
          },
        },
      },
    },
  },

  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    } as LinkProps,

    styleOverrides: {
      root: {
        color: palette.secondary.main,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
  },

  // MuiChip: {
  //   defaultProps: {
  //     component: Chip,
  //   },
  //   variants: [
  //     {
  //       props: {
  //         sizeChip: "small",
  //       },
  //       style: {
  //         padding: "4px 10px",
  //         fontSize: "12px",
  //         borderRadius: "10px",
  //         lineHeight: "normal",
  //       },
  //     },
  //   ],
  // },
};

export default components;
