// App.tsx
import { useState } from "react";
import { Container, Snackbar, Alert } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";
import UserForm from "./UserForm";
import { FormValues } from "./types";

const App = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      // フォーム送信処理を擬似的に表現
      await new Promise((resolve) => setTimeout(resolve, 100));
      console.log(values); // フォームの値をログ出力
      setSnackbar({
        open: true,
        message: "フォームが正常に送信されました！",
        severity: "success",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "エラーが発生しました。もう一度お試しください。",
        severity: "error",
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <Container maxWidth="sm">
        <UserForm onSubmit={handleSubmit} />
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
};

export default App;
