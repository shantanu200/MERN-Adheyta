import React from "react";
import "./Main.css";
import main from "./images/main.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <div className="buttons">
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>
      <button
        onClick={() => {
          navigate("/tutorial");
        }}
      >
        Tutorial
      </button>
      <button
        onClick={() => {
          navigate("/student");
        }}
      >
        Student
      </button>
      <button
        onClick={() => {
          navigate("/teacher");
        }}
      >
        Teacher
      </button>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
    </div>
  );
};

export default Main;
