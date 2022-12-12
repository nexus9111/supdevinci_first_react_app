const Header = () => {
    const displayTitle = true;
    const title = "Sup de Vinci";

    return (
        <header>
            {displayTitle ? <h1>{title}</h1> : <h1>You don't have permission</h1>}
        </header>
    );
};
export default Header;
