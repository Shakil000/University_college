import { useState } from 'react';
import { CONTACT_CARDS } from '../data.js';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="sec-tag">Contact</div>
          <h2 className="sec-h2">We'd love to hear from you.</h2>
          <p className="sec-body max-w-2xl mt-5">
            Reach out for admissions queries, campus visits, partnerships, or just to say hello.
          </p>
        </div>
      </section>

      <section className="section py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Contact Info */}
            <div>
              {CONTACT_CARDS.map((item) => (
                <div 
                  key={item.title} 
                  className="flex gap-4 p-6 bg-amber-50 rounded-2xl mb-5 border border-blue-100"
                >
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-playfair font-bold text-lg text-blue-900 mb-1">
                      {item.title}
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                      {item.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-blue-900">
                    Send us a message
                  </h3>
                  <button className="bg-gray-900 text-white border-none rounded-full py-1.5 px-3 text-xs font-bold cursor-pointer whitespace-nowrap hover:bg-gray-800">
                    Mode with Emergen
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block text-sm font-semibold text-blue-900 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-blue-100 rounded-xl text-sm outline-none focus:border-blue-900 transition-colors bg-white text-blue-900 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-900 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-blue-100 rounded-xl text-sm outline-none focus:border-blue-900 transition-colors bg-white text-blue-900 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full px-4 py-2 border border-blue-100 rounded-xl text-sm outline-none focus:border-blue-900 transition-colors bg-white text-blue-900 placeholder-slate-400"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Write your message"
                      className="w-full px-4 py-2 border border-blue-100 rounded-xl text-sm outline-none focus:border-blue-900 transition-colors bg-white text-blue-900 placeholder-slate-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="bg-blue-900 text-white border-none px-8 py-3 rounded-full text-sm font-semibold cursor-pointer font-sans transition-colors hover:bg-blue-800"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
