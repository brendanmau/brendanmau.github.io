import { Helmet } from 'react-helmet'
import {Link} from "wouter"
import Slideshow from "../components/Slideshow";
export default function About() {
  const slides = [
    { src: "Mau Headshot Cronkite News.JPEG", alt: "Brendan Mau Headshot" },
    { src: "Broadcast.JPG", alt: "Brendan broadcasting live" },
    { src: "Desert Financial.jpg", alt: "Brendan at Desert Financial" },
    { src: "Bell Bank.jpg", alt: "Brendan at Bell Bank" },
    { src: "Mau Arizona Football 1.jpeg", alt: "Brendan standing on UArizona's football field" },
    { src: "Mau Kyree Walker.jpeg", alt: "Brendan with Kyree Walker" },
    { src: "Mau Ish Wainwright.jpeg", alt: "Brendan with Ish Wainright" },
    { src: "Mau Arizona Basketball.jpeg", alt: "Brendan standing at ASU basketball court" },
    { src: "Mau Arizona Football 2.jpeg", alt: "Brendan standing on UArizona's football field (again)" },
    { src: "Mau ASU Basketball.jpeg", alt: "Brendan standing on ASU basketball court" },
    { src: "Mau DJ Foster Scooby Wright.jpeg", alt: "Brendan after an interview with Scooby Wright and D.J. Foster" },
    { src: "Mau Scooby Wright.jpeg", alt: "Brendan interviewing Scooby Wright" },
    { src: "Mau Wally Award.jpeg", alt: "Brendan with a Wally award he won at Cronkite News for outstanding recent work" },
    { src: "Mau Scooby Wright U of A.jpeg", alt: "Brendan with Scooby Wright, who was an honorary captain, at Arizona before filming a football game" },
    { src: "Mau Standup U of A.jpeg", alt: "Brendan doing a standup for a broadcast package he did at Arizona stadium" },
    { src: "Mau Territorial Cup 1.jpeg", alt: "Brendan with Cronkite News colleagues before the Territorial Cup" },
    { src: "Mau Territorial Cup 2.jpeg", alt: "Brendan at Arizona Stadium after the Wildcats defeated Arizona State 38-35 in the Territorial Cup" },
  ]
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Brendanmau.com displays Brendan's portfolio of work to potential employers and is also for those who would like to keep up 
        with his latest content. Here you can find his latest content."
        />
      </Helmet>
      <h2>About Brendan Mau</h2>
      <Slideshow slides={slides} />
      <p className="mb-8">
        I got into this field after watching sports constantly growing
        up and loving to write. I discovered early on in high school
        that I could combine these two passions to be a sports
        journalist, and I realized that I wanted to do this as a career
        after attending a two week sports broadcast boot camp at the
        Cronkite school the summer after my junior year of high school.
        I shared my love of sports with my father, who passed away from
        cancer my freshman year of college, so now I try to do what
        would make him proud with everything I do in this field. Through
        all of the experience I have gained, I continue to love doing
        this and growing more and more in my abilities. <br />
      </p>
      <Link href="/hireme" className="bg-blue-500 p-4 rounded-lg hover:bg-blue-600 transition-[background]">Hire&nbsp;Me!</Link>

    </>
  )
}
