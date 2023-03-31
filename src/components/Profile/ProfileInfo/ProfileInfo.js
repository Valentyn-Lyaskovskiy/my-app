import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.content}>
        <img className={s.contentImage}
          src="https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
          alt="nature"
        />
      </div>
      <div></div>
    </div>
  );
};

export default ProfileInfo;
