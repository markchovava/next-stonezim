import type { Metadata } from "next";
import "./globals.css";
/* ToastContainer */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./(main)/_components/footers/Footer";


export const metadata: Metadata = {
  title: "StoneZim Travel",
  description: "StoneZim Travel",
  keywords: ["StoneZim Travel", 'zimtravel', 'travel agency in zimbabwe', 'zimbabwe travel', 'africa travel', 'safari tours', 'cultural tours', 'adventure tours', 'family vacations', 'group travel', 'custom itineraries'],
  verification: {
    google: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-scroll-behavior="smooth"
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
