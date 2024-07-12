import React from "react";
import { Field, FieldProps } from "formik";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
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
}) => (
  <Field name={name}>
    {({ field, meta }: FieldProps) => (
      <FormControl component="fieldset" error={meta.touched && !!meta.error}>
        <FormLabel component="legend">{label}</FormLabel>
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
        {meta.touched && meta.error && (
          <FormHelperText>{meta.error}</FormHelperText>
        )}
      </FormControl>
    )}
  </Field>
);

export default FormikRadioGroup;
