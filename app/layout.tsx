import "./globals.css";
import NextAuthProvider from "./components/SessionProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
