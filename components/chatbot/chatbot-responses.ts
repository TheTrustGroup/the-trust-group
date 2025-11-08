/**
 * Chatbot Response System
 * 
 * This file contains the logic for generating chatbot responses based on user queries.
 * It can be extended to integrate with external APIs (OpenAI, Dialogflow, etc.)
 */

interface ResponseMatch {
  keywords: string[];
  response: string;
  links?: { text: string; href: string }[];
}

const responseDatabase: ResponseMatch[] = [
  {
    keywords: ["service", "services", "what do you do", "offer", "provide"],
    response: "We offer a wide range of services including:\n\n• AI Solutions & Implementation\n• Custom Software Development\n• Mobile App Development\n• Web Development\n• Cloud Solutions\n• Consulting & Strategy\n\nWould you like to know more about any specific service?",
    links: [{ text: "View all services", href: "/services" }],
  },
  {
    keywords: ["contact", "email", "phone", "reach", "get in touch", "address"],
    response: "You can reach us through:\n\nEmail: info@thetrustgroupsolutions.com\nPhone: Available on our contact page\nLocation: Check our contact page for details\n\nWe're also available for consultations and project discussions. Would you like to schedule a call?",
    links: [{ text: "Contact us", href: "/contact" }],
  },
  {
    keywords: ["company", "about", "who are you", "trust group", "background"],
    response: "The Trust Group is a parent company specializing in AI solutions and innovative software engineering. We transform businesses through cutting-edge technology and have multiple businesses under our umbrella, delivering excellence in every project.\n\nWe have 10+ years of experience, 500+ projects delivered, and 100+ happy clients.",
    links: [{ text: "Learn more about us", href: "/about" }],
  },
  {
    keywords: ["job", "career", "hiring", "position", "openings", "work", "employment"],
    response: "Yes! We're always looking for talented individuals to join our team. We have openings in:\n\n• Engineering\n• AI & Machine Learning\n• Product & Design\n• Sales & Business Development\n• Operations\n\nCheck out our careers page for current openings!",
    links: [{ text: "View job openings", href: "/careers" }],
  },
  {
    keywords: ["portfolio", "projects", "work", "examples", "case study"],
    response: "We've completed 500+ projects across various industries. Our portfolio includes AI solutions, web applications, mobile apps, and enterprise software.\n\nYou can browse our featured projects to see examples of our work.",
    links: [{ text: "View portfolio", href: "/portfolio" }],
  },
  {
    keywords: ["price", "cost", "pricing", "how much", "budget", "quote"],
    response: "Our pricing varies based on project scope, complexity, and requirements. We offer:\n\n• Custom quotes for each project\n• Flexible engagement models\n• Transparent pricing\n\nFor a detailed quote, please contact us with your project requirements.",
    links: [{ text: "Get a quote", href: "/contact" }],
  },
  {
    keywords: ["technology", "tech stack", "technologies", "tools", "stack"],
    response: "We work with a wide range of modern technologies including:\n\n• Frontend: React, Next.js, TypeScript\n• Backend: Node.js, Python, Java\n• AI/ML: TensorFlow, PyTorch, OpenAI\n• Cloud: AWS, Azure, GCP\n• Mobile: React Native, Flutter\n\nAnd many more! Check our technologies page for the complete list.",
    links: [{ text: "View technologies", href: "/technologies" }],
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hello! Welcome to The Trust Group. I'm here to help answer any questions you have about our services, company, or how we can assist with your project. What would you like to know?",
  },
  {
    keywords: ["help", "support", "assistance"],
    response: "I'm here to help! I can assist you with:\n\n• Information about our services\n• Company details\n• Career opportunities\n• Contact information\n• Project inquiries\n\nWhat would you like to know?",
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    response: "You're welcome! Is there anything else I can help you with today?",
  },
];

/**
 * Get a chatbot response based on user input
 */
export function getChatbotResponse(userInput: string): string {
  const input = userInput.toLowerCase().trim();

  // Check for exact matches or keyword matches
  for (const match of responseDatabase) {
    const hasKeyword = match.keywords.some((keyword) => input.includes(keyword));
    if (hasKeyword) {
      let response = match.response;
      
      // Add links if available
      if (match.links && match.links.length > 0) {
        response += "\n\n";
        match.links.forEach((link) => {
          response += `${link.text}: ${link.href}\n`;
        });
      }
      
      return response;
    }
  }

  // Default response if no match found
  return "I understand you're asking about: \"" + userInput + "\". While I'm still learning, I can help you with:\n\n• Our services and offerings\n• Company information\n• Contact details\n• Career opportunities\n• Project inquiries\n\nFeel free to ask me about any of these topics, or visit our contact page to speak with our team directly!";
}

/**
 * Get quick action suggestions based on context
 */
export function getQuickActions(context?: string): string[] {
  // This can be enhanced to provide context-aware suggestions
  return [
    "What services do you offer?",
    "How can I contact you?",
    "Tell me about your company",
  ];
}

