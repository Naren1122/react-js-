import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext); // to access user context and user is from UserContext

  if (!user) return <div>please login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
