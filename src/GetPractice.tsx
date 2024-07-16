import _ from "lodash";

interface User {
  name: string;
  contacts?: {
    email?: string;
    phone?: string;
  };
}

const user: User = {
  name: "Taro",
  contacts: {
    email: "taro@testmail",
  },
};

const GetPractice = () => {
  const email = _.get(user, "contacts.email", "なし");
  const phone = _.get(user, "contacts.phone", "なし");

  return (
    <div>
      <h2>{user.name}の連絡先</h2>
      <p>Email: {email}</p>
      <p>電話: {phone}</p>
    </div>
  );
};
export default GetPractice;
