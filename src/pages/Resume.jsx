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

      <h2>Resume</h2>
        <a className="text-xl hover:underline decoration-wavy text-blue-400" href="Brendan Mau Resume.pdf">Download Resume</a>
      <iframe
        className="mt-3"
        src="Brendan Mau Resume.pdf#toolbar=0"
        width="100%"
        height="750px"
      ></iframe>

      <h2 className="mt-4">Work Experience</h2>
      <table>
        <tbody>
          <tr>
            <th>Job Title</th>
            <th>Description</th>
            <th>Time Worked</th>
          </tr>
          <tr>
            <td>
              <b>
                Cronkite News/ Arizona PBS: Phoenix Sports Bureau; Phoenix,
                AZ
              </b>{' '}
              -<br /> Digital Reporter
            </td>
            <td>
              <ul>
                <li>
                Sports beat writer covering ASU basketball, UArizona, GCU and 
                NAU athletics, as well as general topics
                </li>
                <li>
                  Work published on their website and picked up by multiple
                  publications
                </li>
              </ul>
            </td>
            <td>
              <i>Aug. 2022 - Dec. 2022</i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Core 5 Flag Football; Anthem, AZ</b> -<br /> Head
              Referee
            </td>
            <td>
              <ul>
                <li>
                  Refereed flag football games of children ages
                  five to 15 every Friday night
                </li>
              </ul>
            </td>
            <td>
              <i>March 2022 - Dec. 2022</i>
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
                  Wrote various sports articles featured in
                  local papers in Arizona and online
                </li>
                <li>
                  Covered everything from youth sports to
                  professional leagues
                </li>
              </ul>
            </td>
            <td>
              <i>Jan. 2022 - Apr. 2022</i>
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
              <i>Nov. 2017 - Nov. 2018</i>
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
                  Created bid budgets for landscaping projects
                </li>
              </ul>
            </td>
            <td>
              <i>
                Summers of 2017 - 2019
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>In&Out Magazine; Anthem, AZ</b> -<br /> Sports
              Writer
            </td>
            <td>
              <ul>
                <li>
                  Wrote articles about high school sports
                  teams and games for local weekly magazine
                </li>
              </ul>
            </td>
            <td>
              <i>July 2016 - Feb. 2017</i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Cross of Christ; Anthem, AZ</b> -<br /> Tech Crew
            </td>
            <td>
              <ul>
                <li>
                  Operated A/V system with lyrics, lights and
                  sound during church service
                </li>
              </ul>
            </td>
            <td>
              <i>Sept. 2015 - Aug. 2019</i>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
