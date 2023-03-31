import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const posts = [
  {
    id: 1,
    message: "Hi, dear Christine!",
    likes: 23,
  },
  {
    id: 2,
    message: "Hope you are fine!",
    likes: 8,
  },
  {
    id: 3,
    message: "I got my salary today!",
    likes: 11,
  },
];

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};

export default Profile;
