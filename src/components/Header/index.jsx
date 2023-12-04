const Header = ({ title, 'data-testid': testId}) => {
    return (
        <div className="header" data-testid={testId}>
            <h1>{title}</h1>
            <h2>create color palette</h2>
        </div>
    )
}

export default Header;