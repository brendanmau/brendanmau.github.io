const ContactForm = () => {
  const updateBody = (e) => {
    // get  fields
    e.preventDefault();
    console.log(e);
    const firstName = document.querySelector("input#myFName").value;
    const lastName = document.querySelector("input#myLName").value;
    const phoneNumber = document.querySelector("input#phone").value;
    const comments = document.querySelector("textarea#myComments").value;
    let message = `Full Name: ${firstName} ${lastName}\n\n`;
    if (phoneNumber !== "") {
      message += `Phone Number: ${phoneNumber}\n\n`;
    }
    message += `\n${comments}`;

    // const form = document.querySelector("form");
    // form.setAttribute("action", mailtoLink);
    // form.submit();
    const subject = `Contact form from ${firstName} ${lastName}`;
    const mailtoLink = `mailto:brendanmau@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }
  return (
    <form
      className="flex flex-col gap-2 text-black"
      method="post"
      action="mailto:brendanmau@gmail.com?subject=Contact Form"
      onSubmit={updateBody}
    >
      <label className="text-white" htmlFor="myFName">First Name:</label>
      <input className="rounded border-none p-1" type="text" name="myFName" id="myFName" required pattern="[a-zA-Z\- ]+" title="Please enter a valid first name (letters, dashes, and spaces only)" />
      <label className="text-white" htmlFor="myLName">Last Name:</label>
      <input className="rounded border-none p-1" type="text" name="myLName" id="myLName" required pattern="[a-zA-Z\- ]+" title="Please enter a valid last name (letters, dashes, and spaces only)" />
      <label className="text-white" htmlFor="phone">Phone Number (Optional):</label>
      <input
        className="rounded border-none p-1" type="tel"
        name="phone"
        id="phone"
        pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$" title="Please enter a valid US phone number (###-###-#### or (###) ###-#### or ##########)" />
      <label className="text-white" htmlFor="myComments">Comments:</label>
      <textarea
        className="rounded border-none p-1" name="myComments"
        id="myComments"
        rows="7"
        cols="30"
        required aria-required="true"
      ></textarea>
      <button
        className="bg-teal-500 p-4 text-white rounded-lg hover:bg-teal-600 transition-[background]"
        type="submit"
      >
        Send to <u>brendanmau@gmail.com</u>
      </button>
    </form>
  );
}
export default ContactForm;
