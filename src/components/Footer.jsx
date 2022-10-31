export default function Footer() {
    return (
        <footer>
            <ul className="fa">
                <li className="fa">
                    <a href="https://twitter.com/brendan_mau" className="fa">
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
            <br />
            Copyright &copy; {new Date().getFullYear()} Brendan Mau
            <br />
            <a href="mailto:brendanmau@gmail.com">brendanmau@gmail.com</a>
        </footer>
    )
}
