import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { developerProfile } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [logs, setLogs] = useState([
    '> Comms socket ready.',
    '> Fill out the form to dispatch a direct message.'
  ]);

  const appendLog = (entry) => {
    setLogs((prev) => {
      const next = [...prev, entry];
      return next.length > 5 ? next.slice(next.length - 5) : next;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      appendLog('> Validation error: All fields are required.');
      return;
    }

    setStatus('sending');
    appendLog(`> Preparing packet from ${formData.name.trim()}...`);
    appendLog('> Dispatching via EmailJS relay...');

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_ejrs3cv';
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_gwyas08';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'ykM9XCkKI6JDORJRt';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      () => {
        setStatus('sent');
        appendLog('> 200 OK — Message delivered successfully.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      },
      (error) => {
        setStatus('error');
        appendLog(`> Delivery failed: ${error?.text || 'Network error'}`);
        setTimeout(() => setStatus('idle'), 5000);
      }
    );
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">// 05. Start a Conversation</span>
          <h2 className="section-title">Let’s Build Something Meaningful</h2>
          <p className="section-subtitle">
            Working on a web platform, mobile app, or MVP build? Send a message below or connect
            directly via email, GitHub, or LinkedIn.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-panel">
            <div className="contact-direct-cards">
              <a href={`mailto:${developerProfile.email}`} className="direct-card">
                <span className="direct-label">Direct Email</span>
                <span className="direct-value">{developerProfile.email}</span>
              </a>

              <a
                href={developerProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-card"
              >
                <span className="direct-label">LinkedIn</span>
                <span className="direct-value">linkedin.com/in/yashasvi-kumar-shukla ↗</span>
              </a>

              <a
                href={developerProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-card"
              >
                <span className="direct-label">GitHub</span>
                <span className="direct-value">github.com/Yashasvi-kumar-shukla ↗</span>
              </a>
            </div>

            <div className="activity-console">
              <div className="console-header">
                <span>dispatch@yashasvi.dev</span>
                <span className="console-status-pill">● TLS READY</span>
              </div>
              <div className="console-body">
                {logs.map((line, i) => (
                  <div key={i} className="console-line">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rohan Sharma"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Project Details / Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project scope, timeline, or goals..."
                required
              />
            </div>

            {status === 'sent' && (
              <div className="form-feedback success" role="status">
                Message sent! I will get back to you shortly.
              </div>
            )}

            {status === 'error' && (
              <div className="form-feedback error" role="alert">
                Please fill in all fields or try again if the network request failed.
              </div>
            )}

            <button
              type="submit"
              className="btn-primary btn-submit-form"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending Message...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
