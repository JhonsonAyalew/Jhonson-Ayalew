import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypingText from './TypingText.jsx';

const SUGGESTIONS = [
  'Show me your projects','What are your skills?',
  'Tell me about yourself','How can I hire you?',
  'Tell me about the scraper','What do you do on Upwork?',
];

export default function AIChatInterface({ onSendMessage, isLoading, messages }) {
  const [input, setInput] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef(null);
  const historyRef = useRef(null);

  useEffect(() => {
    if (historyRef.current) historyRef.current.scrollTop = historyRef.current.scrollHeight;
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    const msg = input.trim();
    setInput('');
    setShowSuggestions(false);
    onSendMessage(msg);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const handleSuggest = (text) => {
    setShowSuggestions(false);
    onSendMessage(text);
    setInput('');
  };

  const recentMessages = messages.slice(-4);

  return (
    <div style={{
      position:'fixed', bottom:0, left:0, right:0, zIndex:200,
      background:'rgba(2,4,8,0.97)', backdropFilter:'blur(24px)',
      borderTop:'1px solid var(--border-subtle)',
    }}>
      {/* Top glow line */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(90deg,transparent,var(--cyan-dim),transparent)', opacity:0.8 }} />

      {/* Message history */}
      <AnimatePresence>
        {(expanded || messages.length > 1) && (
          <motion.div
            initial={{ height:0, opacity:0 }} animate={{ height: expanded ? 180 : 110, opacity:1 }}
            exit={{ height:0, opacity:0 }} transition={{ duration:0.28 }}
            style={{ overflow:'hidden' }}
          >
            <div ref={historyRef}
              style={{ maxHeight: expanded ? '180px' : '110px', overflowY:'auto', padding:'10px 16px 0', display:'flex', flexDirection:'column', gap:'7px' }}>
              {recentMessages.map((msg, i) => (
                <div key={i} style={{ display:'flex', gap:'8px', alignItems:'flex-start', justifyContent: msg.role==='user' ? 'flex-end' : 'flex-start' }}>
                  {msg.role==='assistant' && (
                    <div style={{ width:'18px', height:'18px', flexShrink:0, border:'1px solid var(--cyan-dim)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.55rem', color:'var(--cyan)', marginTop:'2px', boxShadow:'0 0 8px rgba(0,180,255,0.2)' }}>◈</div>
                  )}
                  <div style={{
                    maxWidth:'78%', padding:'6px 11px',
                    background: msg.role==='user' ? 'rgba(0,180,255,0.07)' : 'var(--elevated)',
                    border:`1px solid ${msg.role==='user' ? 'rgba(0,180,255,0.2)' : 'var(--border-subtle)'}`,
                    borderLeft: msg.role==='assistant' ? '2px solid var(--cyan-dim)' : undefined,
                    fontSize:'0.6rem', color: msg.role==='user' ? 'var(--text-primary)' : 'var(--text-secondary)',
                    lineHeight:'1.7', fontFamily:'Share Tech Mono',
                  }}>
                    {msg.role==='assistant' && i===recentMessages.length-1 && msg.isNew
                      ? <TypingText text={msg.content} speed={14} />
                      : msg.content}
                  </div>
                  {msg.role==='user' && (
                    <div style={{ width:'18px', height:'18px', flexShrink:0, border:'1px solid rgba(0,180,255,0.2)', background:'rgba(0,180,255,0.07)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.5rem', color:'var(--text-secondary)', marginTop:'2px' }}>U</div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div style={{ display:'flex', gap:'5px', alignItems:'center', paddingBottom:'4px' }}>
                  <div style={{ width:'18px', height:'18px', border:'1px solid var(--cyan-dim)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.55rem', color:'var(--cyan)', boxShadow:'0 0 8px rgba(0,180,255,0.25)' }}>◈</div>
                  <div style={{ display:'flex', gap:'4px' }}>
                    {[0,150,300].map(d=>(
                      <div key={d} style={{ width:'4px', height:'4px', background:'var(--cyan-dim)', animation:`typeBounce 1.2s infinite ${d}ms` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Suggestions */}
      <AnimatePresence>
        {showSuggestions && messages.length <= 1 && (
          <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={{opacity:0}}
            style={{ padding:'8px 16px 0', display:'flex', flexWrap:'wrap', gap:'5px' }}>
            {SUGGESTIONS.map(s => (
              <button key={s} onClick={() => handleSuggest(s)} data-cursor
                style={{ padding:'4px 10px', background:'transparent', border:'1px solid var(--border-subtle)', color:'var(--text-muted)', fontFamily:'Share Tech Mono', fontSize:'0.5rem', letterSpacing:'0.06em', cursor:'none', transition:'all 0.2s', whiteSpace:'nowrap' }}
                onMouseEnter={e=>{e.target.style.borderColor='var(--cyan-dim)';e.target.style.color='var(--text-secondary)'}}
                onMouseLeave={e=>{e.target.style.borderColor='var(--border-subtle)';e.target.style.color='var(--text-muted)'}}
              >{s}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input row */}
      <div style={{ display:'flex', alignItems:'center', gap:'8px', padding:'10px 16px 14px' }}>
        <div style={{
          width:'34px', height:'34px', flexShrink:0,
          border:'1px solid var(--cyan-dim)',
          background:'rgba(0,180,255,0.06)',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:'0.95rem', color:'var(--cyan)',
          boxShadow: isLoading ? '0 0 24px rgba(0,212,255,0.5)' : '0 0 10px rgba(0,180,255,0.2)',
          transition:'box-shadow 0.3s',
          animation: isLoading ? 'aiPulse 1.5s ease-in-out infinite' : 'none',
          fontFamily:'Orbitron',
        }}>◈</div>

        <input ref={inputRef} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKey}
          placeholder="Query Jhonson AI..." disabled={isLoading} data-cursor
          style={{ flex:1, padding:'9px 14px', background:'var(--void)', border:'1px solid var(--border-subtle)', color:'var(--text-primary)', fontFamily:'Share Tech Mono', fontSize:'0.66rem', outline:'none', transition:'border-color 0.3s,box-shadow 0.3s', minWidth:0 }}
          onFocus={e=>{e.target.style.borderColor='var(--cyan-dim)';e.target.style.boxShadow='0 0 12px rgba(0,180,255,.1)'}}
          onBlur={e=>{e.target.style.borderColor='var(--border-subtle)';e.target.style.boxShadow='none'}}
        />

        {messages.length > 1 && (
          <button onClick={()=>setExpanded(v=>!v)} data-cursor
            style={{ padding:'9px 12px', background:'transparent', border:'1px solid var(--border-subtle)', color:'var(--text-muted)', fontFamily:'Orbitron', fontSize:'0.6rem', cursor:'none', transition:'all 0.25s', flexShrink:0 }}
            onMouseEnter={e=>{e.target.style.borderColor='var(--cyan-dim)';e.target.style.color='var(--text-secondary)'}}
            onMouseLeave={e=>{e.target.style.borderColor='var(--border-subtle)';e.target.style.color='var(--text-muted)'}}
          >{expanded ? '↓' : '↑'}</button>
        )}

        <button onClick={handleSend} disabled={isLoading || !input.trim()} className="btn-primary" data-cursor
          style={{ padding:'9px 18px', opacity:(isLoading || !input.trim()) ? 0.4 : 1, flexShrink:0 }}>
          {isLoading ? '...' : 'SEND →'}
        </button>
      </div>
    </div>
  );
}
