import React from "react";

const Button = ({ text }: { text: String }) => {
  return (
    <div className="border-2 border-white px-4 py-3 mt-4 rounded-full w-40 grid place-items-center mx-auto cursor-pointer lg:mx-0">
      {text}
    </div>
  );
};

export default Button;
