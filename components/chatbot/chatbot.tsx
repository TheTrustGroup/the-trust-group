"use client";

import * as React from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { getChatbotResponse } from "./chatbot-responses";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you with any questions about The Trust Group. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking time
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get bot response
    const botResponse = getChatbotResponse(userMessage.text);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: "bot",
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleQuickAction = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot thinking time
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get bot response
    const botResponse = getChatbotResponse(text);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: "bot",
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage]);
  };

  // Memoize quick actions to prevent recreation on re-renders
  const quickActions = React.useMemo(() => [
    "What services do you offer?",
    "How can I contact you?",
    "Tell me about your company",
    "Do you have job openings?",
  ], []);

  const handleToggleChat = React.useCallback((e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => {
      const newValue = !prev;
      return newValue;
    });
  }, []);

  return (
    <>
      {/* Chat Toggle Button - Premium Styling */}
      {!isOpen && (
        <motion.button
          type="button"
          onClick={handleToggleChat}
          onTouchEnd={handleToggleChat}
          className={cn(
            "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1200]",
            "rounded-2xl w-14 h-14 sm:w-16 sm:h-16",
            "bg-primary text-primary-foreground",
            "shadow-lg hover:shadow-2xl",
            "border border-primary/20 dark:border-primary/30",
            "transition-all duration-300",
            "flex items-center justify-center",
            "touch-manipulation cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          )}
          style={{
            pointerEvents: "auto",
            WebkitTapHighlightColor: "transparent",
            zIndex: 1200,
            position: "fixed",
            isolation: "isolate",
          }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open chat"
        >
          <MessageCircle 
            className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" 
            strokeWidth={2.5} 
            fill="none"
            aria-hidden="true"
            style={{ stroke: "currentColor" }}
          />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex h-[500px] w-[90vw] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-border dark:border-border/60 bg-background dark:bg-background shadow-2xl dark:shadow-2xl md:h-[600px] md:w-[420px]"
            style={{ 
              zIndex: 1400,
              position: "fixed",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border dark:border-border/60 bg-primary/5 dark:bg-primary/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground">
                  <Bot className="h-5 w-5 stroke-current" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground dark:text-foreground">Trust Group Assistant</h3>
                  <p className="text-xs text-muted-foreground dark:text-muted-foreground">We&apos;re here to help</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-muted-foreground dark:text-muted-foreground transition-colors hover:bg-muted dark:hover:bg-muted/80 hover:text-foreground dark:hover:text-foreground"
                aria-label="Close chat"
              >
                <X className="h-5 w-5 stroke-current" strokeWidth={2} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "flex gap-3",
                    message.sender === "user" && "flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {message.sender === "user" ? (
                      <User className="h-4 w-4 stroke-current dark:stroke-current" strokeWidth={2} />
                    ) : (
                      <Bot className="h-4 w-4 stroke-current dark:stroke-current" strokeWidth={2} />
                    )}
                  </div>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2",
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground"
                        : "bg-muted text-foreground dark:bg-muted/80 dark:text-foreground"
                    )}
                  >
                    <p className="text-sm leading-relaxed dark:text-foreground">{message.text}</p>
                    <p className="mt-1 text-xs opacity-70 dark:opacity-80">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <Bot className="h-4 w-4 stroke-current dark:stroke-current" strokeWidth={2} />
                  </div>
                  <div className="rounded-2xl bg-muted px-4 py-2">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Actions */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <p className="text-xs font-medium text-muted-foreground">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action)}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-muted hover:border-primary/50"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="border-t border-border dark:border-border/60 p-4 bg-background dark:bg-background">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-background dark:bg-background text-foreground dark:text-foreground border-border dark:border-border/60"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || isTyping}
                  className="shrink-0 bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/90"
                >
                  <Send className="h-4 w-4 stroke-current" strokeWidth={2} />
                </Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground dark:text-muted-foreground">
                Press Enter to send • Esc to close
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

