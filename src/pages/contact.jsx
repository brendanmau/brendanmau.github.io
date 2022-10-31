import { Helmet } from 'react-helmet'
export default function Contact() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Brendanmau.com displays Brendan's portfolio of work to potential employers and is also for those who would like to keep up 
        with his latest content. Here you can fill out a contact form to get in touch with him."
                />
            </Helmet>

            <main id="center">
                <main id="padding">
                    <h2>Contact me!</h2>
                    <h3>
                        Have any questions or want a story to be published? Feel
                        free to reach
                        out!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h3>
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
                        />
                        <input
                            type="submit"
                            value="Send to brendanmau@gmail.com"
                        />
                    </form>
                </main>
            </main>
        </>
    )
}
