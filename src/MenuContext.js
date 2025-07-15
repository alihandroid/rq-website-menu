import { createContext, useContext, useState } from 'react';
const MenuContext = createContext({
    links: [],
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
});
export default MenuContext;

export function useMenuContext() {
    return useContext(MenuContext);
};

export function MenuContextProvider({ children }) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);
    const links = [
        { title: "Home", href: "/", icon: "home" },
        { title: "Services", href: "/services", icon: "services" },
        { title: "Pricing", href: "/pricing", icon: "pricing" },
        { title: "Blog", href: "/blog", icon: "blog" },
    ];
    if (isLoggedIn) {
        links.push({ title: "Profile", href: "/profile", icon: "profile" });
    }
    const value = { links, isLoggedIn, login, logout };
    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}