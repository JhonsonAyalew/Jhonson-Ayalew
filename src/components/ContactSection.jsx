import { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeInUp, cardItem } from '../utils/animationVariants.js';

const CONTACT_LINKS = [
  { label: 'Email', value: 'jhonsonayalew21@gmail.com', icon: '✉', href: 'mailto:jhonsonayalew21@gmail.com' },
  { label: 'Phone', value: '+251 977 797 756', icon: '◎', href: 'tel:+251977797756' },
  { label: 'GitHub', value: 'github.com/JhonsonAyalew', icon: '⬡', href: 'https://github.com/JhonsonAyalew' },
  { label: 'LinkedIn', value: 'in/jhonson-ayalew-a3738138b', icon: '◆', href: 'https://linkedin.com/in/jhonson-ayalew-a3738138b' },
];

// EmailJS config — fill in your own IDs from emailjs.com (free)
const EMAILJS_SERVICE_ID  = 'service_j041zyg';   // replace after signup
const EMAILJS_TEMPLATE_ID = 'template_0cxw4yk';  // replace after signup
const EMAILJS_PUBLIC_KEY  = 'EC5bBNREuqSI2vTcF';   // replace after signup
const OWNER_EMAIL         = 'jhonsonayalew21@gmail.com';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async () => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('sending');

    try {
      // Load EmailJS from CDN at runtime (no npm install needed)
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      }

      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        message: message,
        to_email: OWNER_EMAIL,
        reply_to: email,
      });

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);

    } catch (err) {
      console.error('EmailJS error:', err);
      // Fallback: open mailto so the message is never lost
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.open(`mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`, '_blank');
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) handleSubmit();
  };

  const isDisabled = status === 'sending' || !formData.name.trim() || !formData.email.trim() || !formData.message.trim();

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
      <div style={{ width: '100%', maxWidth: '900px' }}>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div style={{ fontSize: '0.48rem', color: 'var(--cyan-dim)', letterSpacing: '0.3em', fontFamily: 'Orbitron', border: '1px solid rgba(0,180,255,0.2)', padding: '4px 10px', background: 'rgba(0,180,255,0.04)' }}>
            CHANNEL: OPEN / SECURE COMM
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom: '10px' }}>Contact</motion.div>
        <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Orbitron', fontWeight: '900', fontSize: 'clamp(1.6rem,4vw,2.8rem)', color: 'var(--text-primary)', marginBottom: '20px', lineHeight: 1 }}>
          Let's <span style={{ color: 'var(--cyan)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}>Connect</span>
        </motion.h2>

        <div className="contact-grid">

          {/* Left: links + status */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <p style={{ marginBottom: '16px', fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'Share Tech Mono', letterSpacing: '0.04em', lineHeight: '1.9', borderLeft: '2px solid rgba(0,180,255,0.15)', paddingLeft: '12px' }}>
              Available for freelance contracts, remote roles, data engineering projects, and full-time positions. Response within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {CONTACT_LINKS.map(link => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  variants={cardItem} className="glass-card cyan-border" data-cursor
                  style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit', cursor: 'none' }}>
                  <div style={{ width: '28px', height: '28px', background: 'rgba(0,180,255,0.07)', border: '1px solid rgba(0,180,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: 'var(--cyan)', flexShrink: 0 }}>{link.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.5rem', letterSpacing: '0.16em', color: 'var(--cyan-dim)', marginBottom: '2px', fontFamily: 'Orbitron' }}>{link.label.toUpperCase()}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'Share Tech Mono' }}>{link.value}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'Share Tech Mono' }}>↗</div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={fadeInUp} style={{ marginTop: '12px', padding: '10px 14px', background: 'rgba(0,255,204,0.04)', border: '1px solid rgba(0,255,204,0.15)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="status-dot" />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.1em', color: 'var(--teal)', fontFamily: 'Orbitron' }}>
                AVAILABLE — UPWORK + DIRECT HIRE
              </span>
            </motion.div>

            {/* Location badge */}
            <motion.div variants={fadeInUp} style={{ marginTop: '8px', padding: '8px 14px', background: 'rgba(0,180,255,0.03)', border: '1px solid rgba(0,180,255,0.1)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.58rem', color: 'var(--text-muted)', fontFamily: 'Share Tech Mono', letterSpacing: '0.08em' }}>
                📍 Mersa, Ethiopia — Remote Globally
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            <div className="glass-card tactical-frame" style={{ padding: '22px' }}>
              <div style={{ marginBottom: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '0.5rem', letterSpacing: '0.24em', color: 'var(--cyan-dim)', fontFamily: 'Orbitron' }}>SEND TRANSMISSION</div>
                <div style={{ fontSize: '0.48rem', color: 'var(--text-dim)', fontFamily: 'Share Tech Mono' }}>Ctrl+Enter to send</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { key: 'name', label: 'YOUR NAME', placeholder: 'How should I call you?' },
                  { key: 'email', label: 'YOUR EMAIL', placeholder: 'your@email.com' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: 'block', fontSize: '0.48rem', letterSpacing: '0.16em', color: 'var(--text-muted)', marginBottom: '6px', fontFamily: 'Orbitron' }}>{f.label}</label>
                    <input
                      className="contact-input"
                      placeholder={f.placeholder}
                      value={formData[f.key]}
                      onChange={e => setFormData(d => ({ ...d, [f.key]: e.target.value }))}
                      onKeyDown={handleKey}
                      style={{ fontSize: '0.75rem' }}
                      data-cursor
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontSize: '0.48rem', letterSpacing: '0.16em', color: 'var(--text-muted)', marginBottom: '6px', fontFamily: 'Orbitron' }}>MESSAGE</label>
                  <textarea
                    className="contact-input"
                    placeholder="Describe your project, role, or mission..."
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                    onKeyDown={handleKey}
                    style={{ resize: 'none', fontSize: '0.75rem' }}
                    data-cursor
                  />
                </div>

                {/* Status message */}
                {status === 'sent' && (
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                    style={{ padding: '10px 14px', background: 'rgba(0,255,204,0.06)', border: '1px solid rgba(0,255,204,0.25)', fontSize: '0.65rem', color: 'var(--teal)', fontFamily: 'Share Tech Mono', letterSpacing: '0.06em' }}>
                    ✓ TRANSMISSION SENT — I'll respond within 24 hours.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                    style={{ padding: '10px 14px', background: 'rgba(255,51,68,0.05)', border: '1px solid rgba(255,51,68,0.2)', fontSize: '0.65rem', color: 'var(--red-alert)', fontFamily: 'Share Tech Mono' }}>
                    ✗ Send failed — try emailing directly: jhonsonayalew21@gmail.com
                  </motion.div>
                )}

                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  disabled={isDisabled}
                  data-cursor
                  style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px', opacity: isDisabled ? 0.4 : 1, transition: 'opacity 0.2s' }}
                >
                  {status === 'sending' ? '◈ TRANSMITTING...' : status === 'sent' ? '✓ TRANSMITTED' : 'TRANSMIT →'}
                </button>

                <div style={{ fontSize: '0.55rem', color: 'var(--text-dim)', fontFamily: 'Share Tech Mono', textAlign: 'center', letterSpacing: '0.06em' }}>
                  Or email directly: jhonsonayalew21@gmail.com
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
