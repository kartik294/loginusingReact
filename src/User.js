import { useState, useEffect } from "react";
const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isToken = localStorage.getItem("demo-token");
    setIsLoggedIn(isToken);
    document.title = isToken ? "Welcome User" : "Please Login";
  }, [isLoggedIn]);

  const handleLogin = () => {
    localStorage.setItem("demo-token", true);
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem("demo-token");
    setIsLoggedIn(false);
  };
  return (
    <div>
      <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
      {isLoggedIn ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default User;
