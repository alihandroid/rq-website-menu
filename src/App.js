import "./style.css";
import Menu from "./Menu";
import Main from "./Main";
import { MenuContextProvider } from "./MenuContext";

function App() {
  return (
    <MenuContextProvider>
      <header>
        <Menu />
      </header>
      <Main />
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </MenuContextProvider>
  );
}

export default App;