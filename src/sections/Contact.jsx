import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add toast or success state here
    };

    const socials = [
        { icon: <Github size={24} />, href: "https://github.com/Huzaifa-12Imran", name: "GitHub" },
        { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/huzaifa-imran-12b10b3b3/", name: "LinkedIn" },
        { icon: <Mail size={24} />, href: "mailto:sungpog89@gmail.com", name: "Email" },
    ];

    return (
        <section id="contact" className="py-32 relative bg-grey-soft/40">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-8">
                            04 — Connect
                        </h2>
                        <h3 className="text-5xl md:text-8xl font-syne font-black tracking-tighter mb-12 uppercase leading-[0.8] text-grey-deep">
                            Let's build <br /> something <br /> <span className="text-gold">Premium.</span>
                        </h3>

                        <div className="flex gap-8 mt-12">
                            {socials.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    whileHover={{ y: -5, color: '#C5A059' }}
                                    className="p-4 bg-cream border border-grey-soft rounded-2xl transition-all duration-300 shadow-sm text-grey-deep"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-grey-mid">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-cream border border-grey-soft p-6 rounded-2xl focus:outline-none focus:border-gold transition-colors font-medium text-grey-deep"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-grey-mid">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="hello@world.com"
                                    className="w-full bg-cream border border-grey-soft p-6 rounded-2xl focus:outline-none focus:border-gold transition-colors font-medium text-grey-deep"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-grey-mid">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-cream border border-grey-soft p-6 rounded-2xl focus:outline-none focus:border-gold transition-colors font-medium resize-none text-grey-deep"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gold text-white font-black uppercase tracking-[0.2em] py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-gold-dark transition-all duration-500 shadow-lg"
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
