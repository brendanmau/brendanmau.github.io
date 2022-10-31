import { Link, useRoute } from 'wouter'

const ActiveLink = (props) => {
    const [isActive] = useRoute(props.href)

    return (
        <Link {...props}>
            <a className={isActive ? 'currentpage' : ''}>{props.children}</a>
        </Link>
    )
}

export default function Header() {
    return (
        <div>
            <header>
                <h1>
                    <a href="/">BRENDANMAU.COM</a>
                </h1>
            </header>

            <nav>
                <ul>
                    <li>
                        <ActiveLink href="/">
                            <i
                                id="homebutton"
                                className="fa-solid fa-house-chimney fa-4x"
                            />
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/multimedia">Multimedia</ActiveLink>
                        <ul>
                            <li>
                                <ActiveLink href="/articles">
                                    Articles
                                </ActiveLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ActiveLink href="/about">About</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/contact">Contact</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/hireme">Hire Me</ActiveLink>
                        <ul>
                            <li>
                                <ActiveLink href="/resume">Resume</ActiveLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div className="social">
                <ul className="fa">
                    <li className="fa">
                        <a
                            href="https://twitter.com/brendan_mau"
                            className="fa"
                        >
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li className="fa">
                        <a
                            href="https://www.linkedin.com/in/brendan-mau-6439aa205/"
                            className="fa"
                        >
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className="fa">
                        <a
                            href="https://www.youtube.com/channel/UCnwTiqOW0FKA_jC4sabSTDA"
                            className="fa"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                    <li className="fa">
                        <a
                            href="https://www.instagram.com/brendan.mau/?hl=en"
                            className="fa"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li className="fa">
                        <a
                            href="https://www.facebook.com/brendan.mau"
                            className="fa"
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="fa">
                        <a href="mailto:brendanmau@gmail.com" className="fa">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
