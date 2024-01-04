
// import Header from './Header';


// const Header = require("./Header");

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" alt="React Logo" className="nav-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Content</li>
                </ul>
            </nav>
        </header>
    )
}
function Footer() {
    return  (
        <footer className="footer">
            <small>
                @2022 React-Block Devs. All Right Reserved
            </small>
        </footer>
    )
}

function MainContent() {
    return (
        <div className="main-content">
            <h1>Fun Facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originalky created by Jordan Walke</li>
                <li>Has well over 100K start on Github</li>
                <li>Maitained by Meta and a community of developers</li>
                <li>Can be used for SPA and mobile-dekstop app as well</li>
            </ul>
        </div>
    )
}


function Navbar() {
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
        
    </div>
)
}
console.log(Navbar);
ReactDOM.render(<Navbar />, document.getElementById("app"));