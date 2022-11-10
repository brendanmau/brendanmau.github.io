const ContactForm = () => (
        <form
        className="flex flex-col gap-2 text-black"
        method="post"
        action="mailto:brendanmau@gmail.com?subject=Contact Form"
      >
        <div className="flex flex-col sm:flex-row gap-2">
          <label className="text-white" htmlFor="myFName">First Name:</label>
          <input className="rounded border-none p-1" type="text" name="myFName" id="myFName" />
          <label className="text-white" htmlFor="myLName">Last Name:</label>
          <input className="rounded border-none p-1" type="text" name="myLName" id="myLName" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <label className="text-white" htmlFor="myEmail">E-mail:</label>
          <input className="rounded border-none p-1" type="email" name="myEmail" id="myEmail" />
          <label className="text-white" htmlFor="phone">Phone Number (Optional):</label>
          <input
            className="rounded border-none p-1" type="tel"
            name="phone"
            id="phone"
            maxLength="12"
          />
        </div>
        <label className="text-white" htmlFor="myComments">Comments:</label>
        <textarea
          className="rounded border-none p-1" name="myComments"
          id="myComments"
          rows="7"
          cols="30"
        ></textarea>
        <button
          className="bg-blue-500 p-4 text-white rounded-lg hover:bg-blue-600 transition-[background]"
          type="submit"
        >
          Send to brendanmau@gmail.com
        </button>
      </form>
)
export default ContactForm;
