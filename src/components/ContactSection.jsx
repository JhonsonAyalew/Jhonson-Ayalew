import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Globe, Radio, Send, User, AtSign, MessageSquare } from 'lucide-react';
import { pageTransition, staggerContainer, fadeInUp, cardItem } from '../utils/animationVariants.js';

const CONTACT_LINKS = [
  { label: 'Email',    value: 'JhonsonAyalew21@gmail.com',                  Icon: Mail,     href: 'mailto:JhonsonAyalew21@gmail.com' },
  { label: 'GitHub',   value: 'github.com/JhonsonAyalew',                   Icon: Github,   href: 'https://github.com/JhonsonAyalew' },
  { label: 'LinkedIn', value: 'linkedin.com/in/johnson-ayalew',              Icon: Linkedin, href: 'https://www.linkedin.com/in/johnson-ayalew/' },
  { label: 'Upwork',   value: 'upwork.com/freelancers/~011fb9ce9920513a41', Icon: Globe,    href: 'https://www.upwork.com/freelancers/~011fb9ce9920513a41' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width: '100%', padding: '36px 5% 40px' }}>
      <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom: '10px' }}>
          Initialize Connection
        </motion.div>
        <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--text-light)', marginBottom: '24px', lineHeight: 1 }}>
          Let's <span className="gradient-text">Connect</span>
        </motion.h2>

        <div className="contact-grid">
          {/* Left: links */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <p style={{ marginBottom: '18px', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'Inter', lineHeight: '1.85' }}>
              Available for full-time remote roles, sponsored positions, and freelance contracts. Response within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {CONTACT_LINKS.map(({ label, value, Icon, href }) => (
                <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                  variants={cardItem} className="glass-card white-glow-border" data-cursor
                  style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit', cursor: 'none', borderRadius: '12px' }}>
                  <div style={{
                    width: '34px', height: '34px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={15} color="var(--text-light)" strokeWidth={1.75} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.5rem', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '2px', textTransform: 'uppercase', fontFamily: 'Inter' }}>{label}</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontFamily: 'Inter', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={fadeInUp} style={{ marginTop: '14px', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Radio size={14} color="var(--text-light)" strokeWidth={2} style={{ animation: 'statusBlink 2s ease-in-out infinite', flexShrink: 0 }} />
              <span style={{ fontSize: '0.64rem', letterSpacing: '0.1em', color: 'var(--text-secondary)', fontFamily: 'Inter', fontWeight: '500' }}>
                OPEN TO FULL-TIME, REMOTE & SPONSORED ROLES
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            <div className="glass-card" style={{ padding: '28px', borderRadius: '16px' }}>
              <div style={{ marginBottom: '22px', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-light)', textTransform: 'uppercase', fontWeight: '600' }}>Send a Message</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {[
                  { key: 'name',  label: 'Your Name', placeholder: 'How should I call you?', Icon: User },
                  { key: 'email', label: 'Email',      placeholder: 'your@email.com',          Icon: AtSign },
                ].map(({ key, label, placeholder, Icon }) => (
                  <div key={key}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.55rem', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', fontFamily: 'Inter' }}>
                      <Icon size={10} strokeWidth={2} />
                      {label}
                    </label>
                    <input className="contact-input" placeholder={placeholder}
                      value={formData[key]} onChange={e => setFormData(d => ({ ...d, [key]: e.target.value }))} data-cursor />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.55rem', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', fontFamily: 'Inter' }}>
                    <MessageSquare size={10} strokeWidth={2} />
                    Message
                  </label>
                  <textarea className="contact-input" placeholder="Tell me about your project..." rows={3}
                    value={formData.message} onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                    style={{ resize: 'none' }} data-cursor />
                </div>
                <button className="btn-white" onClick={handleSubmit} data-cursor
                  style={{ width: '100%', borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px' }}>
                  <Send size={14} strokeWidth={2.5} />
                  {sent ? 'Message Sent!' : 'Send Message'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
