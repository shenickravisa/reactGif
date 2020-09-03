import React, { useState } from "react";

export const AddCategory = ({ addInputValue }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(inputValue.trim().length > 2)) {
      return;
    }
    addInputValue(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleInputValue} type="text" />
      </form>
    </div>
  );
};
