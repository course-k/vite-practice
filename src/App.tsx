import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  check: string;
}
const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "3文字以上で入力して下さい" },
          })}
        />
        {errors.firstName?.type === "required" && "必須です"}
        {errors.firstName?.type === "minLength" && errors.firstName.message}
      </div>

      <div>
        <label>Check</label>
        <input
          type="checkbox"
          {...register("check", {
            required: { value: true, message: "check is required" },
          })}
        />
        {errors.check && errors.check.message}
      </div>
      <input type="submit" />
    </form>
  );
};

export default App;
