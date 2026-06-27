import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  // Initialize the Gemini SDK
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API chat route
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Invalid request. "messages" must be an array.' });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ 
          error: 'Gemini API key is not configured. Please set GEMINI_API_KEY in the Secrets panel.' 
        });
      }

      // Map frontend messages structure to Gemini contents format
      // Filter to ensure only roles 'user' and 'model' are passed (gemini SDK uses 'user' and 'model')
      const contents = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      const systemInstruction = `You are "Amit AI", the personal AI Chatbot assistant for Amit Kumar, a Website Developer, Graphic Designer, and Digital Marketer based in Bangalore, India.
Your goal is to answer visitor questions about Amit Kumar's skills, portfolio, services, and career, and guide them to hire him or contact him.

Here are the authentic details and facts about Amit Kumar you MUST base your answers on:

1. CONTACT INFO:
- Name: Amit Kumar
- Role: Web Developer | Graphic Designer | Digital Marketer
- Email: blogbyamit62051@gmail.com
- Phone: +91 6205120223
- Location: Bangalore, India
- WhatsApp: https://wa.me/916205120223
- Resume Download Link: Available on the website Resume page or via the download button.

2. CORE SERVICES OFFERED:
- Web Design & Development: Custom, fast, responsive websites (WordPress, Odoo custom CRM systems, Full-stack React & Node.js).
- Graphic Design: Brand identity packages, logos, posters, marketing collaterals, brochures, YouTube thumbnails.
- Digital Marketing: Paid traffic campaigns (Google Ads, Facebook Ads, Instagram promotions), lead generation, sales boost campaigns.
- Social Media Management: Complete brand audience growth and active engagement across all major platforms.
- SEO Optimization: Technical SEO audits, organic rankings on Google's first page, keyword research, on-page content optimization.
- Trademark Registration Service: Secure brand registration and business intellectual property protection PAN India.

3. OUTSTANDING PORTFOLIO PROJECTS:
- GTD Trademark (Legal & Compliance): PAN India trademark, copyright & company registration portal (www.gtdtrademark.com).
- BBCO Exporter Hub (Export & Trade): Global trade and automotive/industrial parts sourcing portal (www.bbcoexporterhub.com).
- One Digital Bharat (Digital Agency): Complete web platform for digital services growth in India (www.onedigitalbharat.com).
- Prime Property Bang (Real Estate): Premium agency portal for renting/buying office spaces in Kolkata (www.primepropertybang.com).
- GR Ginger (Agriculture & Food): Sourcing and showcase portal for premium ginger farms (www.grginger.com).
- Prasab Communication Pvt. Ltd. (Telecom): Technology networking, systems integration, and automation company portal (www.prasabcpl.com).
- Global Edu Campus (Education): Modern educational and training consultation platform (www.globaleducampus.com).
- Kalighat Shakti Peeth Seva Samiti (Social Service): Charitable non-profit devotion guidance portal in Kolkata (www.kalighatshaktipeeth.com).
- Usha International School (Education): Premium, feature-rich academic portal with online admissions for a leading school in Patna (www.ushainternationalschool.com).

4. PROFESSIONAL EXPERIENCE:
- Freelance Website Developer (2021 - Present): Built corporate sites, optimized Lighthouse speed to 90+, integrated APIs, AI chatbots, and WhatsApp portals.
- Digital Marketer & SEO Specialist (2022 - Present): Scaled local business lead generation by 2.5x using Google and Facebook/Meta ads, and technical keyword optimization.
- Graphic & Brand Designer (2020 - Present): Designed multi-industry brand books, custom vector logos, high-conversion visual posters.

GUIDELINES FOR CHATTING:
- Be polite, welcoming, and professional.
- Keep your responses concise (ideally 1 to 3 short paragraphs) so they fit nicely in a chat box.
- Never make up information that isn't provided in the facts above. If someone asks for unmentioned services or personal questions, kindly guide them to contact Amit directly.
- Always include a call to action when relevant (e.g., inviting them to hire Amit, mail him, message on WhatsApp, or schedule a free business audit consultation).`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ content: response.text });
    } catch (error: any) {
      console.error('Error in chat API:', error);
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  });

  // Serve health status
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Configure Vite or Static server
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

startServer();
