import React from "react";

interface TestProps {
  type?: string;
}

const Test: React.FC<TestProps> = (props) => {
  return <div>{props.type || "Hello"}</div>;
};

export default Test;
