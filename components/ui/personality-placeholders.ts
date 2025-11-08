/**
 * Personality-filled placeholders and messages
 */

export const placeholders = {
  name: [
    "Your awesome name",
    "What should we call you?",
    "The name your friends know you by",
    "Your full name (or nickname, we're flexible!)",
  ],
  email: [
    "your.email@example.com",
    "Where should we reach you?",
    "your@email.com (we promise not to spam)",
    "Drop your email here",
  ],
  phone: [
    "Optional, but helpful!",
    "Your phone number (optional)",
    "Only if you want us to call you",
    "Phone number? Totally optional!",
  ],
  company: [
    "Your company name (optional)",
    "Where do you work?",
    "Company name (if applicable)",
    "The place you call work",
  ],
  description: [
    "Tell us about your project...",
    "What are you looking to build?",
    "Describe your vision in detail",
    "Share your project ideas with us!",
    "What's on your mind?",
  ],
};

export const errorMessages = {
  name: {
    required: "We'd love to know your name!",
    minLength: "Names are usually at least 2 characters long",
    invalid: "Hmm, that doesn't look quite right",
  },
  email: {
    required: "We need your email to get back to you!",
    invalid: "That email looks a bit off. Mind checking it?",
    format: "Please use a valid email format (e.g., name@example.com)",
  },
  phone: {
    invalid: "That phone number doesn't look quite right",
  },
  service: {
    required: "Please pick a service so we know how to help!",
  },
  description: {
    required: "Tell us about your project!",
    minLength: "A bit more detail would help us understand better (at least 20 characters)",
  },
};

export const successMessages = [
  "Awesome! You're all set!",
  "Perfect! We'll be in touch soon!",
  "Great! Your message is on its way!",
  "Excellent! We'll get back to you within 24 hours!",
  "Fantastic! We've received your message!",
];

export const loadingMessages = [
  "Crafting your experience...",
  "Loading awesome content...",
  "Almost there...",
  "Preparing something special...",
  "Just a moment...",
  "Setting things up...",
  "Getting ready...",
  "Almost ready...",
];

export const getRandomPlaceholder = (key: keyof typeof placeholders): string => {
  const options = placeholders[key];
  return options[Math.floor(Math.random() * options.length)];
};

export const getRandomSuccessMessage = (): string => {
  return successMessages[Math.floor(Math.random() * successMessages.length)];
};

export const getRandomLoadingMessage = (): string => {
  return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
};

