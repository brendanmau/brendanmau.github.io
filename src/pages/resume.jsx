import { Helmet } from 'react-helmet'

export default function Resume() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Brendanmau.com displays Brendan's portfolio of work to potential employers and is also for those who would like to keep up 
        with his latest content. Here you can find his resume and download it."
                />
            </Helmet>

            <main id="padding">
                <h2>Resume</h2>
                <p className="link">
                    <a href="Resume.pdf">Download Here</a>
                </p>
                <iframe
                    src="Resume.pdf#toolbar=0"
                    width="50%"
                    height="750px"
                ></iframe>

                <h2>Work Experience</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Job Title</th>
                            <th>Description</th>
                            <th>Time Worked</th>
                        </tr>
                        <tr>
                            <td>
                                <b>Cross of Christ; Anthem, AZ</b> -<br /> Tech
                                Crew
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        Operated A/V system with lyrics, lights
                                        and sound during church service
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <i>September 2015 - August 2019</i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>In&Out Magazine; Anthem, AZ</b> -<br />{' '}
                                Sports Writer
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        Wrote articles about high school sports
                                        teams and games for local weekly
                                        magazine
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <i>July 2016 - February 2017</i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Outdoor Systems Management; Phoenix, AZ</b> -
                                <br /> Assistant Estimator Intern
                            </td>
                            <td>
                                <ul>
                                    <li>Completed takeoffs</li>
                                    <li>
                                        Created bid budgets for landscaping
                                        projects
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <i>
                                    June 2017 - August 2017
                                    <br />
                                    2018 - July 2018
                                    <br />
                                    2019 - August 2019
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Content Supply; Remote</b> -<br /> Intern
                            </td>
                            <td>
                                <ul>
                                    <li>Edited Podcasts</li>
                                    <li>Wrote shownotes</li>
                                </ul>
                            </td>
                            <td>
                                <i>November 2017 - November 2018</i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Times Media Group; Remote</b> -<br /> Staff
                                Writer Intern
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        Write various sports articles featured
                                        in local papers in Arizona and online
                                    </li>
                                    <li>
                                        Cover everything from youth sports to
                                        professional leagues
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <i>January 2022 - April 2022</i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Core 5 Flag Football; Anthem, AZ</b> -<br />{' '}
                                Head Referee
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        Referee flag football games of children
                                        ages five to 15 every Friday night
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <i>March 2022 - Present</i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>
                                    Cronkite News: Phoenix Sports Bureau;
                                    Phoenix, AZ
                                </b>{' '}
                                -<br /> Digital Reporter
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        Cover a variety of sports news for
                                        Arizona PBS affiliated station
                                    </li>
                                    <li>
                                        Assigned to be a beat reporter for
                                        UArizona, GCU and NAU sports
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <i>August 2022 - Present</i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </>
    )
}
