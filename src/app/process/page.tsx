'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ProcessPage() {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');
  const [returnApp, setReturnApp] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const handleSubmit = async () => {
    if (!textInput.trim()) {
      alert('Please enter some text!');
      return;
    }

    setIsLoading(true);
    
    // Simulate some processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return to Android app with result
    const returnUrl = `helloworld://result?username=${encodeURIComponent(username)}&result=${encodeURIComponent(textInput)}`;
    window.location.href = returnUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full transform transition-all">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-3xl">🚀</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Welcome, {username}!
          </h1>
          <p className="text-gray-600 text-lg">
            Processing your request
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label htmlFor="textInput" className="block text-sm font-semibold text-gray-700 mb-3">
              Enter your message
            </label>
            <textarea
              id="textInput"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition-all duration-200 text-lg"
              rows={5}
              placeholder="Type something amazing..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading || !textInput.trim()}
            className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-lg ${
              isLoading || !textInput.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-purple-500'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              'Send to Mobile App'
            )}
          </button>
        </div>

        {/* Info Panel */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl">
          <h3 className="font-semibold text-gray-800 mb-2">Connection Info</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <div className="flex justify-between">
              <span>Username:</span>
              <span className="font-medium">{username || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span>Mobile App:</span>
              <span className={`font-medium ${returnApp ? 'text-green-600' : 'text-red-600'}`}>
                {returnApp ? '✅ Connected' : '❌ Not connected'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="font-medium text-blue-600">Ready to process</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            This will redirect back to your mobile app
          </p>
        </div>
      </div>
    </div>
  );
}
