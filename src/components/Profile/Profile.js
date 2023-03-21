import React from "react";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <div className="content">
        <img
          src="https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
          alt="image"
        />
      </div>
      <div>Avatar + description</div>
      <div>
        My Posts
        <div>New Post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
