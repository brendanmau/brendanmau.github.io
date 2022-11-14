import { Helmet } from 'react-helmet'
import { Link } from 'wouter'
import ContactForm from "../components/ContactForm"
import { Timeline } from 'react-twitter-widgets'
import Article from "../components/Article";

export default function Index() {
  const articles = [{
    url: "https://cronkitenews.azpbs.org/2022/11/09/asu-dj-foster-arizona-scooby-wright-asu-football-star-sideline-reporters/",
    imgSrc: "/DJ Foster Scooby Wright.jpeg",
    imgAlt: "D.J. Foster, left, and Scooby Wright tag-team the pre-kickoff segment for GameTime on YurView at Basha High School on Oct. 20, ahead of a marquee football matchup between the Basha Bears and Chandler Hamilton Huskies. (Photo by Grace Edwards/Cronkite News)",
    title: "From rivals to teammates to co-workers: D.J. Foster, Scooby Wright join forces as sideline reporters",
    date: "Nov. 9, 2022",
    author: "Brendan Mau/Cronkite News",
    description: "CHANDLER – About a year ago, Randi Carson, executive \
                producer for GameTime on YurView, a Cox TV station that \
                showcases the top high school football matchups in Arizona, \
                wanted to add a former player to work as a sideline reporter \
                on the network’s broadcasts."
  },
  {
    url: "https://cronkitenews.azpbs.org/2022/10/04/arizona-wildcats-football-pac-12-colorado-wide-receivers/",
    imgSrc: "/Arizona Football Receivers.jpeg",
    imgAlt: "Arizona’s wide receivers, including Tetairoa McMillan, left, and Dorian Singer, have plenty to celebrate  after a strong showing by the unit against Colorado Saturday. (Photo by Rebecca Noble/Getty Images)",
    title: "Arizona Wildcats receivers catch on in quest to become the Pac-12’s best",
    date: "Oct. 4, 2022",
    author: "Brendan Mau/Cronkite News",
    description: "TUCSON – On the first drive of the game against \
                  Colorado, Arizona QB Jayden de Laura threw a \
                  quick backwards pass to freshman WR Tetairoa \
                  McMillan. McMillan looked down the field on the \
                  trick play to throw to an open receiver, but \
                  could not find anyone, so he ran to the other \
                  side of the backfield, looking like he was going \
                  to turn downfield, but then he checked down a \
                  pass to de Laura, who made a nice catch along \
                  the sideline for an 11-yard gain."
  },
  {
    url: "https://cronkitenews.azpbs.org/2022/10/03/arizona-basketball-red-blue-game-mckale-center/",
    imgSrc: "Red Blue game.jpeg",
    imgAlt: "Many Arizona basketball fans showed up early for the First Watch Red-Blue Game at McKale Center Friday night.  The Wildcats showcased new uniforms that are a throwback to 1987-88 and honored the program’s first Final Four team. (Photo by Ryan Meza/Cronkite News)",
    title: "Promising future, storied past of Arizona hoops on display at Red-Blue Game",
    author: "Brendan Mau/Cronkite News",
    date: "Oct. 3, 2022",
    description: "TUCSON – Arizona men’s basketball coach Tommy \
                  Lloyd gave a sellout crowd at McKale Center its \
                  first look at a remastered Wildcats roster along \
                  with a glimpse into the program’s storied past \
                  during at Arizona’s annual First Watch Red-Blue \
                  Game on alumni weekend."
  }];

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Brendanmau.com displays Brendan's portfolio of work to potential employers and is also for those who would like to keep up with his latest content."
        />
      </Helmet>
      <h2>
        <Link href="/about">Brendan Mau</Link>
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <img
          className="max-w-[400px] w-full h-full shrink-0 rounded drop-shadow"
          src="Mau Headshot Cronkite News.JPEG"
          alt="A headshot of Brendan Mau"
        />
        <div className="flex flex-col">
          <p>
            I have covered everything from club volleyball to high
            school tennis to college football to Supercross through
            video, print journalism and social media. <br  />
            <br />
            Some of the skills I possess are experience with Microsoft
            Office, Adobe Premiere Pro, Photoshop and Audition, as well
            as the ability to use social media effectively and knowledge
            of how to use Sony NRX cameras. I also have basic skills in
            using CSS and HTML.
          </p>
          <Link href="/resume" className="bg-blue-500 text-white p-4 rounded-lg w-min drop-shadow">Resume</Link>
        </div>
      </div>

      <h2 className="mt-8">Description of Website</h2>
      <p>
        I coded this website entirely by myself to display my
        portfolio of work to potential future employers and for
        those who would like to keep up with my content.
      </p>

      <h2 className="mt-8">Recent Tweets</h2>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'brendan_mau'
        }}
        options={{
          height: '500',
          dnt: 'true',
          theme: 'dark'
        }}
      />

      <h2 className='mt-8'>Top Content</h2>
      <div className="flex flex-col gap-8">
        {articles.map(artic => (<Article {...artic} />))}
      </div>

      <h2 className="mt-8">Contact me!</h2>
      <h3 className="text-lg italic my-2">
        Have any questions or want a story to be published?
        Feel free to reach out!
      </h3>
      <ContactForm />
    </>
  )
}
