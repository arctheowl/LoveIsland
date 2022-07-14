import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Dispatch, SetStateAction } from "react";
// import GirlsTimeline from "../../data/TimeLineGirls.json";

interface Iprops {
  setSelection: Dispatch<SetStateAction<string>>;
  selection: string;
  timeLine: any;
}

export default function Dropdown({
  setSelection,
  selection,
  timeLine,
}: Iprops) {
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof selection>) => {
    setSelection(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <InputLabel id="demo-controlled-open-select-label">Islanders</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={selection}
        label="Islanders"
        onChange={handleChange}
      >
        {timeLine.map((data: any) => {
          return (
            <MenuItem value={data.name} key={data.name}>
              {data.name}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}
