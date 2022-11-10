import { Helmet } from 'react-helmet'
import {Link} from "wouter"
import Slideshow from "../components/Slideshow";
export default function About() {
  const slides = [
    { src: "Mau Headshot Cronkite News.JPEG", alt: "Brendan Mau Headshot" },
    { src: "Broadcast.JPG", alt: "Brendan broadcasting live" },
    { src: "Desert Financial.jpg", alt: "Brendan at Desert Financial" },
    { src: "Bell Bank.jpg", alt: "Brendan at Bell Bank" },
    { src: "Mau Arizona Football 1.jpeg", alt: "Brendan standing at a football field" },
    { src: "Mau Kyree Walker Medium.jpeg", alt: "Brendan with Kyree Walker" },
    { src: "Mau Ish Wainwright.jpeg", alt: "Brendan with Ish Wainwright" },
    { src: "Mau Arizona Basketball.jpeg", alt: "Brendan standing at ASU basketball court" },
    { src: "Mau Arizona Football 2.jpeg", alt: "Brendan standing on football field (again)" }
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
        Outside of sports journalism, I like to play sports of my own,
        and my two favorites to play are pickleball and basketball. I am
        also a youth flag football referee, and I love and never take
        for granted spending time with my family, friends and dogs.
      </p>
      <Link href="/hireme" className="bg-blue-500 p-4 rounded-lg hover:bg-blue-600 transition-[background]">Hire&nbsp;Me!</Link>

    </>
  )
}
