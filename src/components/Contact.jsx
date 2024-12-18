import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
             await emailjs.send(
                'service_xhl3gcy',
                'template_odznr2u',
                {
                    from_name: form.name,
                    to_name: 'Manisha',
                    from_email: form.email,
                    to_email: 'manishapariyar846@gmail.com',
                    message: form.message
                }, 'D5ENqsLKco2j4CKoa')

            setLoading(false);

             alert('Your message has been sent!')

            setForm({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            setLoading(false);

            console.log(error);

            alert('Something went wrong!')
        }

    }

    return (
        <section className="c-space my-20" id="contact">

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background"
                     className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text my-8">Let's talk</h3>
                     <p className="text-lg text-white-600 mt-1">
                         Whether you're looking to build a new website, improve your existing platform,
                         or bring a unique project to life, I'm here to help</p>

                    <form ref={formRef} onSubmit={handleSubmit}
                          className="mt-12 flex flex-col space-y-7">
                        <label className='space-y-3'>
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Manisha Pariyar"
                            />
                        </label>

                        <label className='space-y-3'>
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="exampleabc@gmail.com"
                            />
                        </label>

                        <label className='space-y-3'>
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I'm interested in..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending ...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
