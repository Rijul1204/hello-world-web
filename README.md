# Hello World Web

This project is the web companion for the [HelloWorldAndroid POC](https://github.com/Rijul1204/hello-world-android), demonstrating seamless integration between an Android app and a web application using **Android App Links** and **Custom Tabs**.

## 🚀 Purpose

The main goal is to enable smooth, secure, and user-friendly data exchange between a native Android app and a web app using:
- **App Links & Deep Linking:**  
  The Android app can open this web app with user data and a custom return URL. The web app processes input and returns results back to the app via a deep link.
- **Custom Tabs Integration:**  
  The Android app launches the web app in a Chrome Custom Tab, providing a native-like experience while maintaining security and user context.

## 🔗 How the Flow Works

1. **User enters a username** in the Android app.
2. The app opens the web app in a Custom Tab, passing the username and a return URL (custom scheme: `helloworld://result`).
3. The web app processes the username and, when done, redirects back to the Android app using the custom scheme with result data as query params.
4. The Android app receives the result via deep link and displays it.

> **Android Project:**  
> See the full Android implementation here: [hello-world-android](https://github.com/Rijul1204/hello-world-android)

## 🧩 Key Web App Features

- **Deep Link Handling:**  
  Receives `username` and `returnApp` parameters from the Android app.
- **User Input:**  
  Lets the user enter a message or data to send back to the app.
- **Return via App Link:**  
  Redirects to the custom scheme (e.g., `helloworld://result?username=...&result=...`) to deliver results to the Android app.
- **Demo & Test Pages:**  
  Includes `/demo` and `/process` routes for testing the integration and simulating the full flow.

## 🌐 Example URLs

- **Open from Android app:**  
  ```
  https://hello-world-web-ivory.vercel.app/?username=john&returnApp=helloworld://result
  ```
- **Return to Android app:**  
  ```
  helloworld://result?username=john&result=Hello%20from%20web
  ```

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (React 19)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## 🏗️ Getting Started

```bash
git clone https://github.com/Rijul1204/hello-world-web.git
cd hello-world-web
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Android Integration

For details on the Android side, see the [hello-world-android README](https://github.com/Rijul1204/hello-world-android#readme).

---
