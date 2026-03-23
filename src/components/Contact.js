import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [submitState, setSubmitState] = useState('idle'); // idle, encrypting, sent, error
  const [terminalLog, setTerminalLog] = useState([
    "INITIALIZING_SECURE_SOCKET...",
    "AWAITING_USER_INPUT..."
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (value.length > 0 && value.length % 5 === 0) { 
      addLog(`> COMPILING_${name.toUpperCase()}_DATA_BLOCK...`);
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
    addLog(`> TARGET_LOCKED: ${field.toUpperCase()}`);
  };

  const addLog = (msg) => {
    setTerminalLog(prev => {
      const newLogs = [...prev, msg];
      return newLogs.length > 5 ? newLogs.slice(1) : newLogs;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addLog("> ERROR: INCOMPLETE_DATA_PACKET");
      return;
    }

    setSubmitState('encrypting');
    addLog("> INITIATING_HANDSHAKE...");
    addLog("> ENCRYPTING_PAYLOAD [RSA-4096]...");
    addLog("> ESTABLISHING_UPLINK...");

    const serviceID = 'service_ejrs3cv';
    const templateID = 'template_gwyas08';
    const publicKey = 'ykM9XCkKI6JDORJRt';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          setSubmitState('sent');
          addLog("> TRANSMISSION_SUCCESSFUL.");
          addLog("> CONNECTION_SEVERED.");
          setFormData({ name: '', email: '', message: '' });
          
          setTimeout(() => setSubmitState('idle'), 5000);
      }, (error) => {
          setSubmitState('error');
          addLog("> ERROR: TRANSMISSION_FAILED.");
          console.log("SYSTEM ERROR DETAILS:", error.text);
          
          setTimeout(() => setSubmitState('idle'), 5000);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* --- NEW HEADER SECTION --- */}
        <div className="contact-header-container">
          <div className="section-header-inline">
            <span className="header-prefix">{'//'}</span>
            <h2>CONTACT ME</h2>
          </div>
          
          <p className="contact-subtitle">
            If you're working on a project or have an idea you'd like to bring to life, feel free to reach out.
            <br /><br />
            I’m open to discussing web and mobile applications, MVP builds, and custom software solutions.
            <br /><br />
            Let’s connect and see how we can build something meaningful.
          </p>
        </div>

        {/* --- CONTACT INTERFACE --- */}
        <div className="contact-interface">
          
          {/* LEFT: Live Terminal Readout */}
          <div className="terminal-readout">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">sys_log@comms</span>
            </div>
            <div className="terminal-body">
              {terminalLog.map((log, index) => (
                <div key={index} className="log-line">{log}</div>
              ))}
              <div className="log-line active">
                <span className="blink">█</span>
              </div>
            </div>
          </div>

          {/* RIGHT: The Contact Form */}
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            
            <div className={`input-group ${focusedField === 'name' ? 'focused' : ''}`}>
              <label>{'//'} IDENTIFIER_ID</label>
              <div className="input-wrapper">
                <span className="bracket left">[</span>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your name..."
                  autoComplete="off"
                />
                <span className="bracket right">]</span>
              </div>
            </div>

            <div className={`input-group ${focusedField === 'email' ? 'focused' : ''}`}>
              <label>{'//'} ROUTING_ADDRESS</label>
              <div className="input-wrapper">
                <span className="bracket left">[</span>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email..."
                  autoComplete="off"
                />
                <span className="bracket right">]</span>
              </div>
            </div>

            <div className={`input-group ${focusedField === 'message' ? 'focused' : ''}`}>
              <label>{'//'} ENCRYPTED_MESSAGE</label>
              <div className="input-wrapper textarea-wrapper">
                <span className="bracket left">[</span>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Type your message here..."
                  rows="5"
                ></textarea>
                <span className="bracket right">]</span>
              </div>
            </div>

            <button 
              type="submit" 
              className={`btn-transmit ${submitState !== 'idle' ? 'processing' : ''}`}
              disabled={submitState !== 'idle'}
            >
              {submitState === 'idle' && <><span className="arrow">{'>'}</span> TRANSMIT_MESSAGE</>}
              {submitState === 'encrypting' && <span className="glitch-text">ENCRYPTING...</span>}
              {submitState === 'sent' && <span className="success-text">TRANSMISSION_SECURE</span>}
              {submitState === 'error' && <span className="error-text" style={{color: '#ff5f56'}}>UPLINK_FAILED</span>}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;