const MainNav = ({dashboard, socialspread, academy, business, entertainment, news, health, leisure}) => {
    return (
        <div className="main-nav-container">
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">SocialSpread</a></li>
                <li><a href="#">Academy</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Health</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Entertainment</a></li>
                <li><a href="#">Leisure</a></li>
            </ul>
        </div>
    )
}

export default MainNav
