import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from '@/components';

export const metadata: Metadata = {
  title: "HiLink",
  description: "",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full">
        <Navbar />

        <main className='relative overflow-hidden'>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout