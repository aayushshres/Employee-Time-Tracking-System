import React, { useEffect, useState } from "react";
import bg from "../images/bannerImage.png";

export default function LandingLogin() {
  const [theme, setTheme] = useState("light-theme");
  function handleTheme(e) {
    if (e.target.className === "fa-solid fa-sun") {
      e.target.className = "fa-solid fa-moon";
    } else {
      e.target.className = "fa-solid fa-sun";
    }

    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <div className="container">
        <i
          className="fa-solid fa-moon"
          id="changeThemeIcon"
          onClick={handleTheme}
        />
        <div className="heading__container">
          <div className="heading__banner__text">
            <h2>CodeNest Technologies</h2>
            <h4>We Code Your Dreams</h4>
            <p>
              CodeNest Technologies, the visionary coding wizards, bring your
              dreams to life through cutting-edge technology. With expertise and
              innovation, they transform your visions into digital realities.
            </p>
          </div>
          <a href="#login-container" id="login-pressBtn">Log In</a>
          <div className="heading__banner__img">
            <img src={bg} alt="" />
          </div>
        </div>
        <div id="login-container">
          <div className="loginForm">
            <div className="loginForm__content">
              <form className="login">
                <div className="login__field">
                  <i className="fa-solid fa-user-tie" />
                  <input
                    type="text"
                    className="login__input"
                    placeholder="Employee ID"
                  />
                </div>
                <div className="login__field">
                  <i className="fa-solid fa-lock" />
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                </div>
                <button className="button login__submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right" />
                </button>
              </form>
            </div>
            <div className="loginForm__background">
              <span className="loginForm__background__shape loginForm__background__shape4" />
              <span className="loginForm__background__shape loginForm__background__shape3" />
              <span className="loginForm__background__shape loginForm__background__shape2" />
              <span className="loginForm__background__shape loginForm__background__shape1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
