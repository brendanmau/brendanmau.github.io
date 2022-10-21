

function Header() {
    return (

        <div>
            <header>
                <h1>
                    <a href="/">BRENDANMAU.COM</a>
                </h1>
            </header>

            <nav>
                <ul>
                    <li><a href="/" id="homebutton"><i class="fa-solid fa-house-chimney fa-4x"></i></a></li>
                    <li><a class="currentpage" href="/multimedia">Multimedia</a>
                        <ul>
                            <li><a href="/articles">Articles</a></li>
                        </ul>
                    </li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/hireme">Hire&nbsp;Me</a>
                        <ul>
                            <li><a href="/resume">Resume</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>);

}

export default Header;