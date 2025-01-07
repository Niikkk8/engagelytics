'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Send, Loader } from 'lucide-react';

const ChatMessage = React.memo(({ message }) => (
    <div
        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
        <div
            className={`max-w-[70%] rounded-lg p-3 ${message.type === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
                }`}
        >
            <p className="break-words">{message.content}</p>
        </div>
    </div>
));

ChatMessage.displayName = 'ChatMessage';

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (!input.trim() || isLoading) return;

        const userMessage = { type: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userMessage: input }),
            });


            if (!response.ok) {
                const errorText = await response.text();
                console.error("Chat API Error:", errorText);
                throw new Error('Failed to fetch chat response.');
            }

            const data = await response.json();
            const botMessage = {
                type: 'bot',
                content: data.outputs[0].artifacts.message || 'I apologize, but I couldn’t process your request.',
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [
                ...prev,
                { type: 'bot', content: 'An error occurred. Please try again.' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 z-50">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 ease-in-out"
                    aria-label="Open chat"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                    </svg>
                </button>
            )}

            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl w-96 max-w-[calc(100vw-2rem)] flex flex-col border border-gray-200">
                    <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
                        <h3 className="font-medium">Chat Assistant</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200 transition-colors"
                            aria-label="Close chat"
                        >
                            ×
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 max-h-[400px] min-h-[300px] bg-gray-50">
                        {messages.map((message, index) => (
                            <ChatMessage key={index} message={message} />
                        ))}
                        {isLoading && (
                            <div className="flex justify-center items-center py-2">
                                <Loader className="w-6 h-6 animate-spin text-blue-600" />
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
                        <div className="flex gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-black focus:outline-none focus:border-blue-500"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                aria-label="Send message"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
