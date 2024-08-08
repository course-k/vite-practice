// App.tsx
interface User {
  name: string;
  age: number;
  gender?: string;
}

const func = (user: User) => {
  if (typeof user.gender === "string") {
    const gender = user.gender.toUpperCase();
    console.log(gender);
  }
};
func({ name: "John", age: 28 });
const button = document.querySelector("#submit-button")!;
button.addEventListener("click", handleClick);
