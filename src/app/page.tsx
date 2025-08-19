'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');
  const [returnApp, setReturnApp] = useState<string>('');

  useEffect(() => {
    const usernameParam = searchParams.get('username');
    const returnAppParam = searchParams.get('returnApp');
    
    if (usernameParam) {
      setUsername(usernameParam);
    }
    if (returnAppParam) {
      setReturnApp(returnAppParam);
    }
  }, [searchParams]);

  const handleSubmit = () => {
    if (!textInput.trim()) {
      alert('Please enter some text!');
      return;
    }

    if (returnApp) {
      // Return to Android app with result
      const returnUrl = `helloworld://result?username=${encodeURIComponent(username)}&result=${encodeURIComponent(textInput)}`;
      window.location.href = returnUrl;
    } else {
      alert('No return app specified');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">👋</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hello, {username || 'User'}!
          </h1>
          <p className="text-gray-600">
            Please enter some text to continue
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="textInput" className="block text-sm font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="textInput"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              rows={4}
              placeholder="Type your message here..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Send to App
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500 space-y-1">
            <p><strong>Username:</strong> {username || 'Not provided'}</p>
            <p><strong>Return App:</strong> {returnApp ? '✅ Connected' : '❌ Not connected'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}