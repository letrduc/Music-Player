/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Header() {
  const { currentTrackName } = useMusicPlayer();

  return (
    <div className="header">
      <marquee>{currentTrackName}</marquee>
    </div>
  );
}
export default Header;
