import { Helmet } from 'react-helmet'

export default function Index() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Brendanmau.com displays Brendan's portfolio of work to potential employers and is also for those who would like to keep up with his latest content."
                />
            </Helmet>
            <h2>
                <a href="about.html">Brendan Mau</a>
            </h2>
            <a href="about.html">
                <img
                    className="max-h-[400px] float-right pl-[2rem] pt-[1rem] bg-cover"
                    src="Mau Headshot Cronkite News.JPEG"
                />
            </a>
            <p>
                <a href="about.html">
                    I have covered everything from club volleyball to high
                    school tennis to college football to Supercross through
                    video, print journalism and social media. <br />
                    Some of the skills I possess are experience with Microsoft
                    Office, Adobe Premiere Pro, Photoshop and Audition, as well
                    as the ability to use social media effectively and knowledge
                    of how to use Sony NRX cameras. I also have basic skills in
                    using CSS and HTML.
                </a>
            </p>
            <div className="homegrid">
                <div className="resumehome">
                    <a href="http://brendanmau.com/resume.html">Resume</a>
                </div>
                <h2>Description of Website</h2>
                <p>
                    I coded this website entirely by myself to display my
                    portfolio of work to potential future employers and for
                    those who would like to keep up with my content.
                </p>
                <div className="twitter">
                    <a
                        className="twitter-timeline"
                        href="https://twitter.com/brendan_mau"
                        data-width="300"
                        data-height="600"
                    >
                        Tweets by Brendan Mau
                    </a>
                    <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charSet="utf-8"
                    />
                </div>
                <div className="articles">
                    <h2>
                        <a href="articles.html">Top Content</a>
                    </h2>
                    <article className="recentcontent">
                        <a href="https://cronkitenews.azpbs.org/2022/10/04/arizona-wildcats-football-pac-12-colorado-wide-receivers/">
                            <img
                                src="Arizona Football Receivers.jpeg"
                                alt="Arizona’s wide receivers, including Tetairoa McMillan, left, and Dorian Singer, have plenty to celebrate 
        after a strong showing by the unit against Colorado Saturday. (Photo by Rebecca Noble/Getty Images)"
                            />
                            <h4>
                                Arizona Wildcats receivers catch on in quest to
                                become the Pac-12’s best
                            </h4>
                            <h5>
                                <i>By Brendan Mau/Cronkite News</i> ⁠— Oct. 4,
                                2022
                            </h5>
                            <h6>
                                TUCSON – On the first drive of the game against
                                Colorado, Arizona QB Jayden de Laura threw a
                                quick backwards pass to freshman WR Tetairoa
                                McMillan. McMillan looked down the field on the
                                trick play to throw to an open receiver, but
                                could not find anyone, so he ran to the other
                                side of the backfield, looking like he was going
                                to turn downfield, but then he checked down a
                                pass to de Laura, who made a nice catch along
                                the sideline for an 11-yard gain.
                            </h6>
                        </a>
                    </article>
                    <br />
                    <article className="recentcontent">
                        <a href="https://cronkitenews.azpbs.org/2022/10/03/arizona-basketball-red-blue-game-mckale-center/">
                            <img
                                src="Red Blue game.jpeg"
                                alt="Many Arizona basketball fans showed up early for the First Watch Red-Blue Game at McKale Center Friday night. 
        The Wildcats showcased new uniforms that are a throwback to 1987-88 and honored the program’s first Final Four team. (Photo by Ryan Meza/Cronkite News)"
                            />
                            <h4>
                                Promising future, storied past of Arizona hoops
                                on display at Red-Blue Game
                            </h4>
                            <h5>
                                <i>By Brendan Mau/Cronkite News</i> ⁠— Oct. 3,
                                2022
                            </h5>
                            <h6>
                                TUCSON – Arizona men’s basketball coach Tommy
                                Lloyd gave a sellout crowd at McKale Center its
                                first look at a remastered Wildcats roster along
                                with a glimpse into the program’s storied past
                                during at Arizona’s annual First Watch Red-Blue
                                Game on alumni weekend.
                            </h6>
                        </a>
                    </article>
                    <br />
                    <article className="recentcontent">
                        <a href="https://www.thefoothillsfocus.com/sports/youth-hockey-player-receives-big-surprise-from-coyotes/article_392bb022-aeea-11ec-987d-432c773104d4.html">
                            <img
                                src="Lena Travis.jpeg"
                                alt="Lena Travis, a huge Coyotes' fan, with a jersey she rceived from her favorite player, Lawson Crouse"
                            />
                            <h4>
                                Youth hockey player receives big surprise from
                                Coyotes
                            </h4>
                            <h5>
                                <i>
                                    By Brendan Mau, West Valley View Staff
                                    Writer
                                </i>{' '}
                                ⁠— Apr 17, 2022
                            </h5>
                            <h6>
                                It could be said that many sports fans feel like
                                they should have a direct say in what their team
                                does. Lena Travis, an 11-year-old youth hockey
                                player who lives in Anthem, now believes she has
                                done just that, and even more.
                            </h6>
                        </a>
                    </article>
                    <br />
                </div>
                <div className="contacthome">
                    <a href="contact.html">
                        <h2>Contact me!</h2>
                        <h3>
                            Have any questions or want a story to be published?
                            Feel free to reach out!
                        </h3>
                    </a>
                    <form
                        method="post"
                        action="mailto:brendanmau@gmail.com?subject=Contact Form"
                    >
                        <label htmlFor="myFName:">First Name:</label>
                        <input type="text" name="myFName" id="myFName" />
                        <label htmlFor="myLName:">Last Name:</label>
                        <input type="text" name="myLName" id="myLName" />
                        <label htmlFor="myEmail">E-mail:</label>
                        <input type="email" name="myEmail" id="myEmail" />
                        <label htmlFor="phone:">Phone Number (Optional):</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            maxLength="12"
                        />
                        <label htmlFor="myComments">Comments:</label>
                        <textarea
                            name="myComments"
                            id="myComments"
                            rows="7"
                            cols="30"
                        ></textarea>
                        <input
                            type="submit"
                            value="Send to brendanmau@gmail.com"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}
