import { Helmet } from 'react-helmet'
import ContactForm from '../components/ContactForm'

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

      <h2>Contact me!</h2>
      <h3 className="italic text-lg mb-2">
        Have any questions or want a story to be published? Feel
        free to reach
        out!
      </h3>
      <ContactForm />
    </>
  )
}
