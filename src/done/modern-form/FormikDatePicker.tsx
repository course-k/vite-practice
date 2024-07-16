import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
}

const FormikDatePicker = ({ name, label }: Props) => {
  const [field, meta, helpers] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <DatePicker
      label={label}
      value={field.value}
      onChange={(date) => helpers.setValue(date)}
      slots={{
        textField: TextField,
      }}
      slotProps={{
        textField: {
          error: !!errorText,
          helperText: errorText,
        },
      }}
    />
  );
};

export default FormikDatePicker;
