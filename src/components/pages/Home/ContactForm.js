import Button from '../../common/Button'
import { useState } from 'react';
import ThankYouModal from '../../common/ThankYouModal.js';

function ContactForm() {    

    const [result, setResult] = useState("");
    const [openModal, setOpenModal] = useState(false);


    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "30e10b25-95be-4a30-80cc-f42ead663f82");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");

    if (data.success) {
            setOpenModal(true);
            event.target.reset();
        }

    console.log(data)
    console.log(result)
  };
    return (
        <section className="bg-white dark:bg-gray-800 my-4">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{"Contact"}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{"You can deliver your messages from here"}</p>
                <form action="#" onSubmit={onSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{"Email"}</label>
                        <input name="email" type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={"Your email"} required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{"Subject"}</label>
                        <input name="text" type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={"Your message"} required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{"Message"}</label>
                        <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={"Your message"}></textarea>
                    </div>
                    <Button type={"submit"} style="py-3 px-5 text-sm font-medium text-center text-gray-600 dark:bg-white bg-gray-200 rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{"contact"}</Button>
                </form>
                {/* Modal */}
                <ThankYouModal 
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                />
            </div>
        </section>
    )
}

export default ContactForm