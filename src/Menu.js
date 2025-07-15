import { useContext } from "react";
import MenuItem from "./MenuItem";
import MenuContext from "./MenuContext";

function Menu() {
  const links = useContext(MenuContext);
  return (
    <nav>
      <ul className="menu">
        {links.map(({ title, ...props }) => (
          <MenuItem key={title} {...props}>
            {title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;