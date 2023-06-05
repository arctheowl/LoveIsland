import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

type SelectProps = {
  setSelection: React.Dispatch<React.SetStateAction<string>>;
};
export default function GroupedSelect({ setSelection }: SelectProps) {
  const guys = ["Mitchel", "George", "Mehdi", "Andre", "Tyrique"];
  const girls = ["Molly", "Catherine", "Ruchee", "Jess", "Ella"];
  const onSelection = (e: any) => {
    setSelection(e.target.value as string);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, color: 'red'}}>
        <InputLabel htmlFor="grouped-native-select">Contestant</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
          onChange={(e) => onSelection(e)}
        >
          <option aria-label="None" value="" />
          <optgroup label="Guys">
            {guys.map((guy, i) => {
              return (
                <option key={guy} value={guy}>
                  {guy}
                </option>
              );
            })}
          </optgroup>
          <optgroup label="Girls">
            {girls.map((girl, i) => {
              return (
                <option key={girl} value={girl}>
                  {girl}
                </option>
              );
            })}
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}
