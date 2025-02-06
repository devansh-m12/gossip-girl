import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, Twitter, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Message {
  type: string;
  content: string;
  timestamp: Date;
}

interface ChatWindowProps {
  messages: Message[];
  mode: 'chat' | 'tweet' | 'leak';
  onSend: (content: string) => void;
  onModeChange: (mode: 'chat' | 'tweet' | 'leak') => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, mode, onSend, onModeChange }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <>
      <div className="flex items-center space-x-2 p-4 border-b border-border">
        <Button
          variant={mode === 'chat' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => onModeChange('chat')}
        >
          <MessageSquare className="h-4 w-4" />
        </Button>
        <Button
          variant={mode === 'tweet' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => onModeChange('tweet')}
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant={mode === 'leak' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => onModeChange('leak')}
        >
          <FileText className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn("flex", message.type === 'user' ? 'justify-end' : 'justify-start')}
          >
            <div
              className={cn(
                "max-w-[70%] rounded-lg p-4",
                message.type === 'user'
                  ? 'bg-primary text-primary-foreground ml-4'
                  : 'bg-muted text-foreground mr-4'
              )}
            >
              <p className="mb-1">{message.content}</p>
              <p className="text-xs opacity-70">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-border">
        <div className="flex items-center space-x-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === 'chat'
                ? "Send a message..."
                : mode === 'tweet'
                ? "Compose a tweet..."
                : "Share your gossip..."
            }
            maxLength={mode === 'tweet' ? 140 : undefined}
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {mode === 'tweet' && (
          <div className="mt-2 text-sm text-muted-foreground text-right">
            {input.length}/140 characters
          </div>
        )}
      </form>
    </>
  );
}

export default ChatWindow;