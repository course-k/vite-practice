import React from "react";
import { useField } from "formik";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";

interface Option {
  label: string;
  value: string;
}

interface FormikRadioGroupProps {
  name: string;
  label: string;
  options: Option[];
}

const FormikRadioGroup: React.FC<FormikRadioGroupProps> = ({
  name,
  label,
  options,
}) => {
  const [field, meta] = useField(name);
  const errorText = meta.touched && meta.error ? meta.error : "";

  return (
    <FormControl error={!!errorText}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup {...field}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

export default FormikRadioGroup;
