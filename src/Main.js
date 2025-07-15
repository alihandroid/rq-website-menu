import { useMenuContext } from "./MenuContext";

function Main() {
    const { isLoggedIn, login, logout } = useMenuContext();
    return (
        <main>
            <h1>Welcome to this website</h1>
            {isLoggedIn ? (
                <button onClick={logout}>Log out</button>
            ) : (
                <button onClick={login}>Log in</button>
            )}
        </main>
    );
}

export default Main;