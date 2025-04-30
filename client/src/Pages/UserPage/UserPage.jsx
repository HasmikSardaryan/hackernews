import React from "react";
import { useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Header from "../Header/Header";

const UserPage = () => {
  const { id } = useParams();
  const { user, loading } = useUser(id);
  
  if (!user) return <div>User not found</div>;
  const createdAt = new Date(user.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = createdAt.toLocaleDateString('en-US', options);

  if (loading) return <div>Loading user...</div>;

  return (
    <div className="homepage">
      <Header />
      <p>User: {user.username}</p>
      <p>Created: {formattedDate}</p>
      <p>Karma: {user.karma}</p>
      <p>About: {}</p>
    </div>
  );
};

export default UserPage;
