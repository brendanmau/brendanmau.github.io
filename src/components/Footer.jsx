import Socials from "./Socials"
export default function Footer() {
    return (
        <>
        <Socials/>
        <footer className="bg-blue-500 flex p-2 justify-between text-sm mt-4">
            <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Brendan Mau</p>
            <a href="mailto:brendanmau@gmail.com" className="hover:underline decoration-wavy">brendanmau@gmail.com</a>
        </footer>
    </>
    )
}
