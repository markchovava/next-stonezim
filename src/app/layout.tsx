import type { Metadata } from "next";
import "./globals.css";
/* ToastContainer */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./(main)/_components/headers/Header";
import Footer from "./(main)/_components/footers/Footer";


export const metadata: Metadata = {
  title: "FambaNow",
  description: "Famba Now",
  keywords: ["Famba Now", ],
  verification: {
    google: 'uzEnE4Z0slrSXHljnm7EKx2ZivfC8FgjZVlFUFXPGUY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen`}>

        {children}

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" 
        />
      </body>
    </html>
  );
}
