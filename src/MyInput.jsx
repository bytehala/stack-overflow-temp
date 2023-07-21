import React from "react";

export const MyInput = ({ onChange, value }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    onChange(event);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        label={"test-component"}
        data-testid={"test"}
        value={value}
      />
    </div>
  );
};
