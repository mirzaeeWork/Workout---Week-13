import React from "react";
import Header from "../Header";

function Layout({currentPath, setCurrentPath, children }) {
  return (
    <>
      <Header currentPath={currentPath} setCurrentPath={setCurrentPath} />
      <main style={{ padding: "1rem" }}>{children}</main>
    </>
  );
}

export default Layout;
