import React from "react";

const MyComponent = () => {
  const handleLinkClick = () => {
    window.location.href = "C:/Users/DELL/Mini Project/iot-machine-monitor/front-end react/mini-project/public/.html";
  };

  return (
    <div>
      <head>
        <title>NImbus io</title>
      </head>
      <h1>My React Component</h1>
      <button onClick={handleLinkClick}>Go to External HTML Page</button>
    </div>
  );
};

export default MyComponent;
