import { useEffect } from "react";
import "./header.css";

function Header({ currentPath, setCurrentPath }) {
  useEffect(() => {
    const activeLink = document.querySelector(`a[data-path='${currentPath}']`);
    if (activeLink) {
      activeLink.focus();
    }
  }, [currentPath]);

  const handleNavigation = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <header>
      <h1>Tabs Component Without React Router</h1>
      <nav>
        <ul>
          <li>
            <a
              href="#"
              data-path="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/");
              }}
            >
              Tab1
            </a>
          </li>
          <li>
            <a
              href="#"
              data-path="/tab2"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/tab2");
              }}
            >
              Tab2
            </a>
          </li>
          <li>
            <a
              href="#"
              data-path="/tab3"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/tab3");
              }}
            >
              Tab3
            </a>
          </li>
          <li>
            <a
              href="#"
              data-path="/tab4"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/tab4");
              }}
            >
              Tab4
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
