import React, { useState } from 'react';
import { Send, MessageSquare, Twitter, FileText, History, TrendingUp, User, Bell } from 'lucide-react';
import ChatWindow from '@/components/ChatWindow';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

function App() {
  const [chatMode, setChatMode] = useState<'chat' | 'tweet' | 'leak'>('chat');
  const [messages, setMessages] = useState<Array<{ type: string; content: string; timestamp: Date }>>([
    {
      type: 'bot',
      content: "Hey Upper East Siders, Gossip Girl here. Your one and only source into the scandalous lives of Manhattan's elite. And who am I? That's one secret I'll never tell. XOXO.",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (content: string) => {
    setMessages([
      ...messages,
      { type: 'user', content, timestamp: new Date() },
    ]);
    // Bot response would be handled here in a real implementation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-[1440px] mx-auto h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <main className="flex-1 flex flex-col bg-white shadow-xl">
            <ChatWindow 
              messages={messages}
              mode={chatMode}
              onSend={handleSendMessage}
              onModeChange={setChatMode}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;