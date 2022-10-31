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
            <main id="padding">
                <h2>
                    <a href="about.html">Brendan Mau</a>
                </h2>
                <a href="about.html">
                    <img id="headshot" src="Mau Headshot Cronkite News.JPEG" />
                </a>
                <p>
                    <a href="about.html">
                    I have covered everything from club volleyball to high school tennis to college football to Supercross 
                    through video, print journalism and social media. <br/>
                    Some of the skills I will possess are experience with Microsoft Office, Adobe Premiere Pro, Photoshop 
                    and Audition, as well as the ability to use social media effectively and knowledge of how to use NRX cameras. 
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
                        those who would like to keep up with my latest content.
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
                            <a href="multimedia.html">Recent Content</a>
                        </h2>
                        <div id="article" className="recentcontent">
                            <a href="https://cronkitenews.azpbs.org/2022/10/17/sun-devils-prepare-for-mens-basketball-season/ ">
                                <img
                                    src="DJ Horne Practice.jpeg"
                                    alt="Arizona State guard DJ Horne, a transfer from Illinois State, looks to build on his first season with the Sun Devils.  
            The junior led the team in scoring with 12.5 points per game. (Photo by Susan Wong/Cronkite News)"
                                />
                                <h4>
                                    Practices ‘like war’ as Sun Devils prepare
                                    for men’s basketball season
                                </h4>
                                <h5>
                                    <i>By Brendan Mau/Cronkite News</i> ⁠— Oct.
                                    17, 2022
                                </h5>
                                <h6>
                                    TEMPE – As Arizona State’s men’s basketball
                                    team ramps up for the 2022-23 season, the
                                    team’s toughness and competitiveness are
                                    already bleeding through. <br />
                                    <br />
                                    Literally, in some instances.
                                </h6>
                            </a>
                        </div>
                        <br />
                        <div id="article" className="recentcontent">
                            <a href="https://cronkitenews.azpbs.org/2022/10/12/sneaker-con-phoenix-nba-wnba-players-basketball-influencers/">
                                <img
                                    src="Sneaker Con.jpeg"
                                    alt="Lost Solez owners, Vida Martinez and Danny Fader, show off a variety of their collection to potential 
            buyers at Sneaker Con. (Photo by Brooklyn Hall/ Cronkite News)"
                                />
                                <h4>
                                    Kickin’ it in style: Sneaker Con Phoenix
                                    draws large crowd, immerses basketball and
                                    sneaker culture
                                </h4>
                                <h5>
                                    <i>By Brendan Mau/Cronkite News</i> ⁠— Oct.
                                    12, 2022
                                </h5>
                                <h6>
                                    PHOENIX – Sneakers are so much more than
                                    simple shoes. Sneakers are swag, a fashion
                                    statement, a way to levitate, a collector’s
                                    item as rare as stamps or coins.
                                </h6>
                            </a>
                        </div>
                        <br />
                        <div id="article" className="recentcontent">
                            <a href="https://cronkitenews.azpbs.org/2022/10/04/arizona-wildcats-football-pac-12-colorado-wide-receivers/">
                                <img
                                    src="Arizona Football Receivers.jpeg"
                                    alt="Arizona’s wide receivers, including Tetairoa McMillan, left, and Dorian Singer, have plenty to celebrate 
            after a strong showing by the unit against Colorado Saturday. (Photo by Rebecca Noble/Getty Images)"
                                />
                                <h4>
                                    Arizona Wildcats receivers catch on in quest
                                    to become the Pac-12’s best
                                </h4>
                                <h5>
                                    <i>By Brendan Mau/Cronkite News</i> ⁠— Oct.
                                    4, 2022
                                </h5>
                                <h6>
                                    TUCSON – On the first drive of the game
                                    against Colorado, Arizona QB Jayden de Laura
                                    threw a quick backwards pass to freshman WR
                                    Tetairoa McMillan. McMillan looked down the
                                    field on the trick play to throw to an open
                                    receiver, but could not find anyone, so he
                                    ran to the other side of the backfield,
                                    looking like he was going to turn downfield,
                                    but then he checked down a pass to de Laura,
                                    who made a nice catch along the sideline for
                                    an 11-yard gain.
                                </h6>
                            </a>
                        </div>
                        <br />
                    </div>
                    <div className="contacthome">
                        <a href="contact.html">
                            <h2>Contact me!</h2>
                            <h3>
                                Have any questions or want a story to be
                                published? Feel free to reach out!
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
                            <label htmlFor="phone:">
                                Phone Number (Optional):
                            </label>
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
            </main>
        </>
    )
}
