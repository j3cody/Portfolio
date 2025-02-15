import React from 'react';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "bbc5fe6f-f72d-4bb1-beaa-57659116c1c3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Your message has been sent successfully!");
    } else {
      console.error("Error", res);
      alert("There was an error sending your message.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <h1 className="text-4xl font-bold mb-8 text-white">Contact Me</h1>
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-gray-900/80 p-8 rounded-lg shadow-xl backdrop-blur-sm"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-left text-white text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-left text-white text-sm font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-left text-white text-sm font-medium mb-2"
          >
            Mobile Number
          </label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Mobile Number"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-left text-white text-sm font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
