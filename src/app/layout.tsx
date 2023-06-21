import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "./AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface IRootLayoutProps {
  children: React.ReactElement;
}

export default async function RootLayout(props: IRootLayoutProps) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
