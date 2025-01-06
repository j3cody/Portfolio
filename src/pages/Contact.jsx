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
            Accept: "application/json"
          },
          body: json
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
        <div className="pt-10 text-center mb-10 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-6 text-yellow-400">Contact Us</h1>

            <form onSubmit={onSubmit} className="bg-yellow-200 shadow-md rounded-lg p-8 w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-left text-red-700 font-medium mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="w-full text-blue-800 bg-blue-200 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-left text-red-700 font-medium mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full text-blue-800 bg-blue-200 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-left text-red-700 font-medium mb-2" htmlFor="number">Mobile Number</label>
                    <input
                        type="number"
                        id="number"
                        name="number"
                        placeholder="Mobile Number"
                        className="w-full text-blue-800 bg-blue-200 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-left text-red-700 font-medium mb-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        className="w-full text-blue-800 bg-blue-200 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full block text-center px-4 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-green-800 transition-all duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
