'use client';

import { useState } from 'react';

export default function DemoPage() {
  const [username, setUsername] = useState('testuser');

  const openMobileApp = () => {
    const url = `helloworld://result?username=${encodeURIComponent(username)}&result=${encodeURIComponent('Hello from web demo!')}`;
    window.location.href = url;
  };

  const testWebFlow = () => {
    const processUrl = `/process?username=${encodeURIComponent(username)}&returnApp=helloworld://result`;
    window.location.href = processUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🧪 Demo & Test
          </h1>
          <p className="text-gray-600">
            Test the mobile app integration
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Test Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter test username"
            />
          </div>

          <div className="space-y-3">
            <button
              onClick={testWebFlow}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              🌐 Test Web Flow
            </button>

            <button
              onClick={openMobileApp}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              📱 Open Mobile App
            </button>
          </div>

          <div className="text-sm text-gray-500 p-4 bg-gray-50 rounded-lg">
            <p><strong>Web Flow:</strong> Goes to process page</p>
            <p><strong>Mobile App:</strong> Direct deep link test</p>
          </div>
        </div>
      </div>
    </div>
  );
}
