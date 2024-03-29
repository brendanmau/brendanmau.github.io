import { Helmet } from 'react-helmet'
import { Link } from 'wouter'

export default function HireMe() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Brendanmau.com displays Brendan's portfolio of work to potential employers and is also for those who would like to keep up 
        with his latest content. Here potential employers can learn more about him and his goals."
        />
      </Helmet>
      <h2>Hire Me!</h2>
      <p>
        I am a hardworking, dedicated sports journalist willing to help
        out any potential employer as they need, whether it be a job or
        freelance work. Working as a sports writer for various media
        outlets has taught me a lot on how to work for a publication and
        the importance of meeting deadlines. During my time at the
        Walter Cronkite School of Journalism, I learned from so many
        successful journalists and developed my skills in every aspect,
        especially for writing and video broadcast work. Because of my
        business minor, I also took a web design course that helped me
        to code this website for myself. I have a good grasp for writing
        in a variety of ways, using cameras and working in Adobe
        Premiere Pro, Photoshop and Audition. Through all of my
        experiences, I am working to be the best version of myself I can
        be and hope to be.{' '}
      </p>
      <br />
      <h2>What I Want to Be</h2>
      <p>
        My main goal is to be a sportswriter for a team, newspaper,
        website or other content provider. As I gain more experience in
        the field of journalism, I hope to become a more proficient
        writer and well-rounded in all of its aspects. When it is all
        said and done, I want to look back on a career filled with lots
        of exciting experiences and earn many accolades as a sports
        journalist.
      </p>
      <br />
      <br />
      <div className="flex gap-4">
        <Link href="/resume">
          <a className="bg-teal-500 p-4 hover:bg-teal-600 rounded-lg transition-[background]">Resume</a>
        </Link>
        <Link href="/articles">
          <a className="bg-teal-500 p-4 hover:bg-teal-600 rounded-lg transition-[background]">Article&nbsp;Work&nbsp;Samples</a>
        </Link>
      </div>
    </>
  )
}
