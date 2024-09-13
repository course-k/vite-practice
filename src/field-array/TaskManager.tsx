import React from "react";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
interface Task {
  taskName: string;
}

interface TaskFormValues {
  tasks: Task[];
}
const initialValues: TaskFormValues = {
  tasks: [],
};

const validationSchema = Yup.object({
  tasks: Yup.array()
    .of(
      Yup.object({
        taskName: Yup.string().required("タスク名は必須です"),
      })
    )
    .min(1, "少なくとも1つのタスクが必要です"),
});

const TaskManager: React.FC = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    // ここでバックエンドへのデータ送信などを行います
  };

  return (
    <div>
      <h1>シンプルタスク管理</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors }) => (
          <Form>
            <FieldArray name="tasks">
              {({ push, remove }) => (
                <>
                  {values.tasks.map((_, index) => (
                    <div key={index}>
                      <Field
                        name={`tasks.${index}.taskName`}
                        placeholder="タスク名"
                      />
                      <ErrorMessage
                        name={`tasks.${index}.taskName`}
                        component="div"
                      />
                      <button type="button" onClick={() => remove(index)}>
                        削除
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push({ taskName: "" })}>
                    タスクを追加
                  </button>
                </>
              )}
            </FieldArray>
            {typeof errors.tasks === "string" && <div>{errors.tasks}</div>}
            <div>
              <button type="submit">保存</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskManager;
