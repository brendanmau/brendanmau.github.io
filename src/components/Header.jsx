import { useEffect } from 'react';
import { Link, useRoute, useLocation } from 'wouter'
import Socials from "./Socials"
import Home from "./icons/Home";

const ActiveLink = ({ linkClassName, children, ...props }) => {
  const [isActive] = useRoute(props.href)

  return (
    <Link {...props}>
      <a className={`${linkClassName} border-2  ${isActive ? 'border-white':'border-blue-500'} `}>
        {children}
      </a>
    </Link>
  )
}


export default function Header() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("effect!")
  }, [pathname]);

  return (
    <div>
      <header className="flex items-center justify-center bg-[url(/basketball-hoop.jpg)] h-[100px] bg-cover bg-center ">
        <h1 className="m-0 text-4xl text-center drop-shadow-sm bg-blue-500/40 backdrop-blur-sm p-2 text-3xl rounded-lg">
          <Link href="/">BRENDAN MAU</Link>
        </h1>
      </header>

      <nav className="my-4 px-2">
        <ul className="flex gap-4 align-center justify-center flex-wrap	">
          <li>
            <ActiveLink href="/" linkClassName="w-[50px] h-[50px] justify-center rounded-lg drop-shadow flex p-3 fill-white bg-blue-500 hover:bg-blue-600 transition-[background]">
              <Home />
            </ActiveLink>
          </li>
          <li className="flex items-center">
            <ActiveLink
              linkClassName="p-3 rounded-lg drop-shadow bg-blue-500 hover:bg-blue-600 transition-[background]"
              href="/articles"
            >
              Articles
            </ActiveLink>
          </li>
          <li className="flex items-center">
            <ActiveLink
              linkClassName="p-3 rounded-lg drop-shadow bg-blue-500 hover:bg-blue-600 transition-[background]"
              href="/about"
            >
              About
            </ActiveLink>
          </li>
          <li className="flex items-center">
            <ActiveLink
              linkClassName="p-3 rounded-lg drop-shadow bg-blue-500 hover:bg-blue-600 transition-[background]"
              href="/contact"
            >
              Contact
            </ActiveLink>
          </li>
          <li className="flex items-center">
            <ActiveLink
              linkClassName="p-3 rounded-lg drop-shadow bg-blue-500 hover:bg-blue-600 transition-[background]"
              href="/resume"
            >
              Resume
            </ActiveLink>
          </li>
          <li className="flex items-center">
            <ActiveLink
              linkClassName="p-3 rounded-lg drop-shadow bg-blue-500 hover:bg-blue-600 transition-[background]"
              href="/hireme"
            >
              Hire Me
            </ActiveLink>
          </li>
        </ul>
      </nav>

      <Socials />
    </div>
  )
}
