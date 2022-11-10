import YouTube from "./icons/YouTube";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";
import Facebook from "./icons/Facebook";
import Mail from "./icons/Mail";
import { Link } from "wouter"

const SocialLink = ({ href, children }) => (
	<Link href={href} >
		<a className="flex justify-center w-[40px] h-[40px] p-2 rounded-full fill-white bg-blue-500 hover:bg-blue-600 transition-[background] drop-shadow-lg">
			{children}
		</a>
	</Link>
)

export default function Socials() {
	return (
		<ul className="list-none flex justify-center gap-3 flex-wrap my-4">
			<SocialLink href="https://twitter.com/brendan_mau">
				<Twitter />
			</SocialLink>
			<SocialLink href="https://www.youtube.com/channel/UCnwTiqOW0FKA_jC4sabSTDA">
				<YouTube />
			</SocialLink>
			<SocialLink href="https://www.instagram.com/brendan.mau/">
				<Instagram />
			</SocialLink>
			<SocialLink href="https://www.facebook.com/brendan.mau/">
				<Facebook />
			</SocialLink>
			<SocialLink href="mailto:brendanmau@gmail.com">
				<Mail />
			</SocialLink>
		</ul>
	);
}
