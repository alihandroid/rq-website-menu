import MenuItem from "./MenuItem";
import { useMenuContext } from "./MenuContext";

function Menu() {
  const { links } = useMenuContext();
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