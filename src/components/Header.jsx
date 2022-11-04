import { Link, useRoute } from 'wouter'

const ActiveLink = ({ linkClassName, children, ...props }) => {
    const [isActive] = useRoute(props.href)

    return (
        <Link {...props}>
            <a className={`${isActive && 'currentpage'} ${linkClassName}`}>
                {children}
            </a>
        </Link>
    )
}

const SocialIcon = ({ url, iconClass }) => (
    <li>
        <a href={url}>
            <i
                className={`${iconClass} bg-red-500 text-xl leading-none w-9 flex justify-center h-9 items-center rounded-full bg-blue-500 drop-shadow-lg shadow-lg hover:bg-blue-600 transition-[background]`}
            />
        </a>
    </li>
)

export default function Header() {
    return (
        <div>
            <header className="flex items-center justify-center bg-[url(basketball-hoop.jpg)] h-[100px] bg-cover bg-center ">
                <h1 className="m-0 text-4xl text-center drop-shadow-sm bg-blue-500/40 backdrop-blur-sm p-2 text-3xl rounded-lg">
                    <Link href="/">BRENDAN MAU</Link>
                </h1>
            </header>

            <nav className="my-4">
                <ul className="flex gap-4 align-center justify-center flex-wrap	">
                    <li>
                        <ActiveLink href="/">
                            <i className="fa-solid fa-house-chimney flex shadow-none bg-blue-500 rounded-lg w-12 h-12 text-2xl justify-center items-center" />
                        </ActiveLink>
                    </li>
                    <li className="flex items-center">
                        <ActiveLink
                            linkClassName="p-3 rounded-lg drop-shadow bg-blue-500"
                            href="/articles"
                        >
                            Print Digital
                        </ActiveLink>
                    </li>
                    <li className="flex items-center">
                        <ActiveLink
                            linkClassName="p-3 rounded-lg drop-shadow bg-blue-500"
                            href="/about"
                        >
                            About
                        </ActiveLink>
                    </li>
                    <li className="flex items-center">
                        <ActiveLink
                            linkClassName="p-3 rounded-lg drop-shadow bg-blue-500"
                            href="/contact"
                        >
                            Contact
                        </ActiveLink>
                    </li>
                    <li className="flex items-center">
                        <ActiveLink
                            linkClassName="p-3 rounded-lg drop-shadow bg-blue-500"
                            href="/resume"
                        >
                            Resume
                        </ActiveLink>
                    </li>
                    <li className="flex items-center">
                        <ActiveLink
                            linkClassName="p-3 rounded-lg drop-shadow bg-blue-500"
                            href="/hireme"
                        >
                            Hire Me
                        </ActiveLink>
                    </li>
                </ul>
            </nav>

            <ul className="list-none flex justify-center gap-3 flex-wrap my-4">
                <SocialIcon
                    url="https://twitter.com/brendan_mau"
                    iconClass="fa-brands fa-twitter"
                />
                <SocialIcon
                    url="https://www.youtube.com/channel/UCnwTiqOW0FKA_jC4sabSTDA"
                    iconClass="fa-brands fa-youtube"
                />
                <SocialIcon
                    url="https://www.instagram.com/brendan.mau/"
                    iconClass="fa-brands fa-instagram"
                />
                <SocialIcon
                    url="https://www.facebook.com/brendan.mau/"
                    iconClass="fa-brands fa-facebook-f"
                />
                <SocialIcon
                    url="mailto:brendanmau@gmail.com"
                    iconClass="fa-solid fa-envelope"
                />
            </ul>
        </div>
    )
}
