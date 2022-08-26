import React from "react";
import ModelList from "./model-list";

interface ManagementProps {
  type?: string;
}

const Management: React.FC<ManagementProps> = (props) => {
  return (
    <div>
      <ModelList />
    </div>
  );
};

export default Management;
