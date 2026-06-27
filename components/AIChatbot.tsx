import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Send, 
  X, 
  Sparkles, 
  RefreshCw, 
  User, 
  Bot, 
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_PROMPTS = [
  "Are you available for freelance work?",
  "Show me your web development projects",
  "What digital marketing services do you offer?",
  "How can I contact Amit Kumar?"
];

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm **Amit AI**, Amit Kumar's personal digital assistant. I can tell you all about Amit's web development, graphic design, and marketing services, show you his recent projects, or help you hire him! How can I help you grow your business today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages list updates
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setHasError(false);

    try {
      const updatedHistory = [...messages, userMessage];
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedHistory })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from server');
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.content || 'I apologize, I could not generate a response.' }]);
    } catch (err) {
      console.error('Chat error:', err);
      setHasError(true);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Oops! I encountered an error connecting to my core brain. Please make sure the server is configured correctly with a valid Gemini API key in the Settings." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm **Amit AI**, Amit Kumar's personal digital assistant. I can tell you all about Amit's web development, graphic design, and marketing services, show you his recent projects, or help you hire him! How can I help you grow your business today?"
      }
    ]);
    setInput('');
    setIsLoading(false);
    setHasError(false);
  };

  // Utility to render simple bold formatting and links in response text
  const formatMessageContent = (text: string) => {
    // Basic regex formatting for bold (**text**)
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-extrabold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
      }
      
      // Look for web links or email addresses and render them nicely
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const subParts = part.split(urlRegex);
      return subParts.map((subPart, subIdx) => {
        if (subPart.match(urlRegex)) {
          return (
            <a 
              key={`${index}-${subIdx}`}
              href={subPart}
              target="_blank"
              rel="noreferrer"
              className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 font-bold underline inline-flex items-center gap-0.5"
            >
              {subPart.includes('wa.me') ? 'WhatsApp Chat' : subPart.replace(/(^\w+:|^)\/\//, '').split('/')[0]}
            </a>
          );
        }
        return subPart;
      });
    });
  };

  return (
    <>
      {/* Floating Launcher Button - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          id="ai-chatbot-launcher"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-[0_8px_30px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group relative ${
            isOpen 
              ? 'bg-slate-800 dark:bg-slate-700 text-white shadow-[0_8px_25px_rgba(15,23,42,0.3)]' 
              : 'bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white'
          }`}
          aria-label="Toggle AI Assistant"
        >
          {/* Pulsing indicator when closed */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-red-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[8px] font-bold text-white">AI</span>
            </span>
          )}

          {isOpen ? (
            <X size={22} className="transition-transform duration-300 rotate-90" />
          ) : (
            <div className="relative">
              <MessageSquare size={22} className="group-hover:opacity-0 transition-opacity duration-200" />
              <Sparkles size={18} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-110 animate-pulse text-yellow-300" />
            </div>
          )}
        </button>
      </div>

      {/* Expandable Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chatbot-window"
            initial={{ opacity: 0, scale: 0.85, y: 50, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30, x: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-24 left-6 z-50 w-[calc(100vw-3rem)] sm:w-[380px] md:w-[410px] h-[580px] max-h-[calc(100vh-10rem)] bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800/80 shadow-2xl flex flex-col overflow-hidden transition-colors duration-300"
          >
            {/* Header section */}
            <div className="relative bg-gradient-to-r from-red-500 via-orange-500 to-red-500 p-5 pb-6 text-white overflow-hidden shrink-0">
              {/* Background abstract overlay details */}
              <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner relative">
                    <Bot className="w-5.5 h-5.5 text-white animate-pulse" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-orange-500 rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base tracking-tight leading-none mb-1 flex items-center gap-1.5">
                      Amit AI <Sparkles size={13} className="text-yellow-300 fill-yellow-300 animate-bounce" />
                    </h3>
                    <p className="text-xs text-white/80 font-semibold flex items-center gap-1">
                      Personal Digital Assistant • Online
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleResetChat}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                    title="Reset Chat"
                  >
                    <RefreshCw size={14} />
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                    title="Minimize"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat message body list */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-slate-50/50 dark:bg-slate-950/30">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2.5 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    {/* Avatar badges */}
                    <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold ${
                      message.role === 'user' 
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {message.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                    </div>

                    {/* Chat Bubble card */}
                    <div className={`p-3.5 rounded-[1.25rem] text-sm leading-relaxed font-medium ${
                      message.role === 'user'
                        ? 'bg-slate-800 dark:bg-slate-800 text-white rounded-tr-none shadow-sm'
                        : 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 rounded-tl-none shadow-sm'
                    }`}>
                      <div className="whitespace-pre-line">
                        {formatMessageContent(message.content)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Loader typing dot indicators */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2.5 max-w-[85%]">
                    <div className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center">
                      <Bot size={12} className="animate-spin" />
                    </div>
                    <div className="p-3.5 rounded-[1.25rem] rounded-tl-none bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Anchor scroll point */}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick chips suggestion triggers */}
            {messages.length === 1 && (
              <div className="p-3 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-50 dark:border-slate-800/40 shrink-0">
                <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mb-2 px-1">Suggested Prompts</p>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_PROMPTS.map((prompt, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => handleSendMessage(prompt)}
                      className="px-2.5 py-1.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 hover:border-red-500 dark:hover:border-red-400 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 transition-all text-left shadow-xs"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message input panel */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, services, projects..."
                disabled={isLoading}
                className="flex-grow px-4 py-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold shadow-md hover:shadow-red-500/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default AIChatbot;
