import React from "react";
import { Formik, Form } from "formik";
import { Grid, Paper, Typography, Stack, Button } from "@mui/material";
import { FormValues, validationSchema, initialValues } from "./types";
import { GENDERS } from "./constants";
import FormikDatePicker from "./FormikDatePicker";
import FormikTextField from "./FormikTextField";
import FormikRadioGroup from "./FormikRadioGroup";

interface UserFormProps {
  onSubmit: (values: FormValues) => Promise<void>;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <Grid container spacing={3} marginTop={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              プロフィールフォーム
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Stack spacing={2} padding={3}>
                <Typography variant="h5" gutterBottom>
                  ユーザー情報
                </Typography>
                <FormikTextField
                  name="personalInfo.name"
                  label="名前"
                  fullWidth
                />
                <FormikDatePicker
                  name="personalInfo.birthDate"
                  label="生年月日"
                />
                <FormikRadioGroup
                  name="personalInfo.gender"
                  label="性別"
                  options={GENDERS}
                />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              送信
            </Button>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default UserForm;
