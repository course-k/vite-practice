import * as Yup from "yup";

export interface FormValues {
  personalInfo: {
    name: string;
    birthDate: Date | null;
    gender: string;
  };
}

export const validationSchema = Yup.object().shape({
  personalInfo: Yup.object().shape({
    name: Yup.string().required("名前は必須です"),
    birthDate: Yup.date().nullable().required("生年月日は必須です"),
    gender: Yup.string().required("性別を選択してください"),
  }),
});

export const initialValues: FormValues = {
  personalInfo: {
    name: "",
    birthDate: null,
    gender: "",
  },
};
