import Chip from "@/components/shared/chip";
import Radio from "@/components/shared/radio";
import {
  Avatar,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";

export default function HomePage() {
  return (
    <>
      <div>
        Chip MUI
        <Chip
          label={"Chip component"}
          sizeChip="large"
          color="warning"
          avatar={<Avatar>M</Avatar>}
          onDelete={() => {
            alert("delete");
          }}
        />
      </div>

      <div>
        <FormControl>
          <FormLabel id="radio-mui">Radio MUI</FormLabel>
          <RadioGroup
            aria-labelledby="radio-mui"
            defaultValue="female"
            name="radio-mui-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio color="warning" />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="secondary" />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
}
