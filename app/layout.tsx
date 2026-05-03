import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ThemeProviderWrapper from "@/components/ThemeProvider";

export const metadata = {
  title: "MA Global Rw | Technology & Systems Integration",
  description: "Accredited enterprise technology and systems integration company delivering network, cloud, and infrastructure solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProviderWrapper>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>

  );
}