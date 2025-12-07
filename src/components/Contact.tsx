import { useState, FormEvent } from 'react';
import { Send, Mail, Linkedin, Phone, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../data/manageData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_j0a1f6s',
        'template_ldnlaqo',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'HbaHHDq8Jm30Fa9UG'
      );

      setShowModal(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => {
        setShowModal(false);
      }, 4000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#020B24]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Get In <span className="bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's work together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm always open to discuss new projects, creative ideas, or opportunities to be a part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-[#082B70]/30 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-[#00E1FF]/20 hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-[#082B70]/30 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-[#00E1FF]/20 hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-[#082B70]/30 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-[#00E1FF]/20 hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-xl">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">LinkedIn</h4>
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#005CFF] dark:hover:text-[#00E1FF] transition-colors">swarupsamal</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-[#082B70]/30 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-[#00E1FF]/20 hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-xl">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">GitHub</h4>
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#005CFF] dark:hover:text-[#00E1FF] transition-colors">swarupss</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative bg-white/80 dark:bg-[#082B70]/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-[#00E1FF]/20 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-[#020B24]/50 border border-gray-300 dark:border-[#00E1FF]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005CFF] dark:focus:ring-[#00E1FF] text-gray-900 dark:text-white transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-[#020B24]/50 border border-gray-300 dark:border-[#00E1FF]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005CFF] dark:focus:ring-[#00E1FF] text-gray-900 dark:text-white transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-[#020B24]/50 border border-gray-300 dark:border-[#00E1FF]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005CFF] dark:focus:ring-[#00E1FF] text-gray-900 dark:text-white transition-all"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-[#020B24]/50 border border-gray-300 dark:border-[#00E1FF]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005CFF] dark:focus:ring-[#00E1FF] text-gray-900 dark:text-white transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-[#020B24]/50 border border-gray-300 dark:border-[#00E1FF]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005CFF] dark:focus:ring-[#00E1FF] text-gray-900 dark:text-white transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] text-white rounded-full font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(0,225,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
              
              {showModal && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-[#082B70]/95 backdrop-blur-sm rounded-3xl">
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce-once shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      Message Sent Successfully!
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Thank you for reaching out. I will get back to you soon.
                    </p>

                    <button
                      onClick={handleModalClose}
                      className="px-8 py-3 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] text-white rounded-full font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(0,225,255,0.5)] transition-all duration-300"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
