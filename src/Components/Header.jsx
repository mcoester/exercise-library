import Navigation from "./Navigation";

function Header({ children }){
    return (
        <header className="bg-body-tertiary w-100">
            <h1 className="display-1 text-primary text-center">Exercise Library</h1>
            {children}
        </header>
    );
}

export default Header;