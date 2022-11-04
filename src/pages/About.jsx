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

            <div className="resumehome">
                <a href="http://brendanmau.com/hireme">Hire&nbsp;Me!</a>
            </div>
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
