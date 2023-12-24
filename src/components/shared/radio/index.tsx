import { RadioProps, styled, Radio as RadioMui } from "@mui/material";
import { ReactComponent as IconRadio } from "@/assets/icons/icon-radio.svg";
export interface IRadioProps extends RadioProps {
  color?:
    | "primary"
    | "secondary"
    | "default"
    | "error"
    | "info"
    | "success"
    | "warning";
}

const RadioCustom = styled(RadioMui)<RadioProps>(({ theme, ...props }) => ({
  color: props.color || theme.palette.common.black,
}));

export default function Radio({ color = "primary", ...props }: IRadioProps) {
  return (
    <>
      <RadioCustom
        {...props}
        color={color}
        icon={<IconRadio />}
      />
    </>
  );
}
