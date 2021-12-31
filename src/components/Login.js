import React from "react";
import "../styles/login.scss";

export default function Login() {
  return (
    <div className="login">
      <img
        className="login__spotify-logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <button className="login__login-button">LOGIN WITH SPOTIFY</button>
    </div>
  );
}
