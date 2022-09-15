import React from "react";

interface NotFoundProps {
  type?: string;
}

const NotFound: React.FC<NotFoundProps> = (props) => {
  return <div>404</div>;
};

export default NotFound;
