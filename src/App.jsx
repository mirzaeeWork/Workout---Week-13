import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Contents1 from "./components/Contents/Contents1";
import Contents2 from "./components/Contents/Contents2";
import Contents3 from "./components/Contents/Contents3";
import Contents4 from "./components/Contents/Contents4";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);


  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  let ContentComponent;
  switch (currentPath) {
    case "/tab2":
      ContentComponent = <Contents2 />;
      break;
    case "/tab3":
      ContentComponent = <Contents3 />;
      break;
    case "/tab4":
      ContentComponent = <Contents4 />;
      break;
    default:
      ContentComponent = <Contents1 />;
  }

  return <Layout currentPath={currentPath} setCurrentPath={setCurrentPath}>{ContentComponent}</Layout>;
}

export default App;
