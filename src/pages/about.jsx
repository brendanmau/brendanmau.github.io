import { Helmet } from 'react-helmet'
export default function About() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Brendanmau.com displays Brendan's portfolio of work to potential employers and is also for those who would like to keep up 
        with his latest content. Here you can find his latest content."
                />
            </Helmet>
            <main>
                <main id="padding">
                    <h2>About Brendan Mau</h2>
                    <div className="slideshowcontainer">
                        <div className="slideShow">
                            <div className="images">
                                <img src="Mau Headshot Cronkite News.JPEG" />
                                <img src="/Broadcast.JPG" />
                                <img src="Desert Financial.jpg" />
                                <img src="Bell Bank.jpg" />
                                <img src="Mau Arizona Football 1.jpeg" />
                                <img src="Mau Kyree Walker Medium.jpeg" />
                                <img src="Mau Ish Wainwright.jpeg" />
                                <img src="Mau Arizona Basketball.jpeg" />
                                <img src="Mau Arizona Football 2.jpeg" />
                            </div>
                        </div>
                    </div>
                    <p>
                        Brendan Mau is currently studying sports journalism at
                        Arizona State’s Walter Cronkite School of Journalism.
                        Brendan plans to graduate in December of 2022 with a
                        bachelor’s degree in this field and a minor in business.
                        Right now in his final semester, Brendan is a digital
                        reporter for Cronkite News in its Phoenix Sports Bureau.
                        He covers a variety of topics in sports for the Arizona
                        PBS affiliated station, and the majority of his work
                        comes from the beat he was assigned - UArizona, GCU and
                        NAU athletics. In the spring semester, Brendan was an
                        intern and wrote sports articles for Times Media Group,
                        a publication company which has numerous weekly papers
                        across his home state of Arizona and California. Brendan
                        has a passion for writing, but also has done some
                        broadcasting work for some of his classes. In addition
                        to school and Cronkite News, Brendan also referees youth
                        flag football in his local community. In the past,
                        Brendan worked for his local magazine to write sports
                        articles for his high school his freshman and sophomore
                        years. He realized his love for writing and sports could
                        become his career after attending a two week sports
                        broadcast boot camp at the Cronkite school the summer
                        after his junior year of high school. Shortly after, he
                        applied to the school and since then, he has learned so
                        much from his classes and the faculty. Once he
                        graduates, Brendan hopes to be a writer covering sports
                        and see his lifelong dream become a working reality.{' '}
                    </p>

                    <div className="resumehome">
                        <a href="http://brendanmau.com/hireme">Hire&nbsp;Me!</a>
                    </div>
                </main>
            </main>
        </>
    )
}
//                                        <script>
//                                            var indexValue = 0;
//                                            function slideShow(){
//                                                setTimeout(slideShow, 2500);
//                                            var x;
//                                            const img = document.querySelectorAll("img");
//                                            for(x = 0; x < img.length; x++){
//                                                img[x].style.display = "none";
//              }
//                                            indexValue++;
//              if(indexValue > img.length){indexValue = 1}
//                                            img[indexValue -1].style.display = "block";
//            }
//                                            slideShow();
//                                        </script>
//
