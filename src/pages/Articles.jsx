import { Helmet } from 'react-helmet'
import Article from "../components/Article"

export default function Articles() {
  const articles =
    [{
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
    },
    {
      url: "https://www.thefoothillsfocus.com/sports/youth-hockey-player-receives-big-surprise-from-coyotes/article_392bb022-aeea-11ec-987d-432c773104d4.html",
      imgSrc: "Lena Travis.jpeg",
      imgAlt: "Lena Travis, a huge Coyotes' fan, with a jersey she rceived from her favorite player, Lawson Crouse",
      title: "Youth hockey player receives big surprise from Coyotes",
      author: "Brendan Mau, West Valley View Staff Writer",
      date: "Apr 17, 2022",
      description: "It could be said that many sports fans feel like \
                  they should have a direct say in what their team \
                  does. Lena Travis, an 11-year-old youth hockey \
                  player who lives in Anthem, now believes she has \
                  done just that, and even more."
    },
    {
      url: "https://www.thefoothillsfocus.com/online_features/desert-forest-golf-club-caddy-wins-scholarship/article_078bc66a-94be-11ec-8db5-535fe38ac267.html",
      imgSrc: "Jeremy Dreher.jpg",
      imgAlt: "Jeremy Drehr, a  golf caddy that was given a scholarship",
      title: "Desert Forest Golf Club caddy wins scholarship",
      author: "Brendan Mau, Foothills Focus Staff Writer",
      date: "Feb 28, 2022",
      description: "Jeremy Dreher has been golfing since sixth grade and \
                        started caddying his sophomore year of high school at \
                        Desert Forest Golf Club in Carefree."
    },
    {
      url: "https://www.glendalestar.com/sports/article_0f0cba64-8511-11ec-a46d-1fa7ac4f33e3.html",
      imgSrc: "Supercross.jpg",
      imgAlt: "Deven Raper and Chris Blose, two Supercross riders from the Valley",
      title: "Supercross’ Raper, Blose anticipating local race",
      author: "Brendan Mau, Glendale Star Staff Writer",
      date: "Feb 4, 2022",
      description: "The Valley’s Deven Raper and Chris Blose will hit the \
                        dirt on their home field for the Monster Energy \
                        Supercross Championship tour at State Farm Stadium on \
                        Saturday, Feb. 5."
    }];
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Brendanmau.com displays Brendan's portfolio of work to potential employers and is also for those who would like to keep up 
        with his latest content. Here you can find his latest content."
        />
      </Helmet>
      <h2>Article Work Samples</h2>
      <h3 className='italic text-lg'>Some examples of my articles that I feel represent me best:</h3>

      <div className="flex flex-col gap-8 mt-8">
        {articles.map(artic => (<Article {...artic} />))}
      </div>
    </>
  )
}
