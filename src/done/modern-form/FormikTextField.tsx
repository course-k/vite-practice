import { TextField } from "@mui/material";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
  [x: string]: any;
}

const FormikTextField = ({ name, label, ...props }: Props) => {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      {...field}
      {...props}
      label={label}
      error={!!errorText}
      helperText={errorText}
    />
  );
};

export default FormikTextField;
