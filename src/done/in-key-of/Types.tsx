interface FormData {
  username: string;
  age: number;
  email: string;
  password: string;
}

type ValidationRules<T> = {
  [k in keyof T]: (value: T[k]) => string | null;
};

const validationRules: ValidationRules<FormData> = {
  username: (value) =>
    value.length < 3 ? "ユーザー名は3文字以上である必要があります" : null,
  age: (value) => (value > 100 ? "年齢は100未満で入力してください" : null),
  email: (value) =>
    /@/.test(value) ? null : "有効なメールアドレスを入力してください",
  password: (value) =>
    value.length < 8 ? "パスワードは8文字以上である必要があります" : null,
};

function validateForm<T>(
  data: T,
  rules: ValidationRules<T>
): { [k in keyof T]?: string } {
  const errors: Partial<{ [k in keyof T]: string }> = {};

  for (const key in data) {
    if (key in rules) {
      const error = rules[key](data[key]);
      if (error) {
        errors[key] = error;
      }
    }
  }

  return errors;
}

// 使用例
const formData: FormData = {
  username: "ab",
  email: "invalid-email",
  password: "short",
};

const validationErrors = validateForm(formData, validationRules);
console.log(validationErrors);

const Base = () => {
  return (
    <>
      <h1></h1>
    </>
  );
};

export default Base;
