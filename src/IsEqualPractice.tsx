import { useState } from "react";
import _ from "lodash";

interface UserProfile {
  name: string;
  email: string;
  preferences: {
    theme: "light" | "dark";
  };
}

const UserProfileComponent = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "John Doe",
    email: "john@example.com",
    preferences: {
      theme: "light",
    },
  });

  const [newProfile, setNewProfile] = useState<UserProfile>({ ...profile });

  const handleUpdate = () => {
    if (!_.isEqual(profile, newProfile)) {
      setProfile(newProfile);
      console.log("プロフィールを更新しました。");
    } else {
      console.log("変更はありません。");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        width: "50%",
        justifyContent: "space-around",
        height: 150,
      }}
    >
      <input
        value={newProfile.name}
        onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
      />
      <input
        value={newProfile.email}
        onChange={(e) =>
          setNewProfile({ ...newProfile, email: e.target.value })
        }
      />
      <select
        value={newProfile.preferences.theme}
        onChange={(e) =>
          setNewProfile({
            ...newProfile,
            preferences: {
              ...newProfile.preferences,
              theme: e.target.value as "light" | "dark",
            },
          })
        }
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <button onClick={handleUpdate}>更新</button>
    </div>
  );
};

export default UserProfileComponent;
