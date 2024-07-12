import { useFormik } from "formik";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  TextField,
  Radio,
  RadioGroup,
} from "@mui/material";

// フォームの要素を型として定義
interface FormValues {
  selectAll: boolean;
  selectedOptions: string[];
  textInput: string;
  radioOption: string;
}

// チェックボックス用配列
const options = [
  { value: "option1", label: "オプション1" },
  { value: "option2", label: "オプション2" },
  { value: "option3", label: "オプション3" },
];

// ラジオボタン用配列
const radioOptions = [
  { value: "radio1", label: "ラジオ1" },
  { value: "radio2", label: "ラジオ2" },
  { value: "radio3", label: "ラジオ3" },
];

// フォームの初期値
const initialValues: FormValues = {
  selectAll: false,
  selectedOptions: [],
  textInput: "",
  radioOption: "",
};

const App = () => {
  // formikの設定
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // 「すべて」の選択状態
  const allSelected = formik.values.selectedOptions.length === options.length;

  // 「すべて」が選択されたときの処理
  const handleSelectAll = (checked: boolean) => {
    formik.setValues({
      ...formik.values,
      selectAll: checked,
      selectedOptions: checked ? options.map((option) => option.value) : [],
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        label="テキスト入力"
        {...formik.getFieldProps("textInput")}
        margin="normal"
      />

      <RadioGroup
        aria-label="radio-options"
        {...formik.getFieldProps("radioOption")}
      >
        {radioOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={allSelected}
              onChange={(e) => handleSelectAll(e.target.checked)}
              name="selectAll"
            />
          }
          label="すべて選択"
        />
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                {...formik.getFieldProps("selectedOptions")}
                value={option.value}
                checked={formik.values.selectedOptions.includes(option.value)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
      >
        送信
      </Button>
    </form>
  );
};

export default App;
