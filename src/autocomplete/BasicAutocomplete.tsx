import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
interface Fruit {
  value: string;
  label: string;
}
const films: Fruit[] = [
  { value: 'apple', label:'りんご'},
  { value: 'banana', label:'ばなな'},
  { value: 'cherry', label:'さくらんぼ'},
];

const BasicAutocomplete = () => {
  const [value, setValue] = useState<Fruit | null>(null);

  return (
    <Autocomplete
      value={value}
      onChange={(_e, newValue: Fruit | null) => {
        setValue(newValue);
      }}
      options={films}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} label="フルーツを選択" variant="outlined" />
      )}
    />
  );
};

export default BasicAutocomplete;


