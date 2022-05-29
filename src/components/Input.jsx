import React from "react";
import "../App.css";

const Input = () => {
  return (
    <form className="form">
      <label>
        Enter Number:
        <input type="number" name="name" />
      </label>
      <input type="submit" value="Shoot" />
    </form>
  );
};

export default Input;
