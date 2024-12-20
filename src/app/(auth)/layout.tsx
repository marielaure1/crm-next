import type { Metadata } from "next";
// import "@styles/globals.css";

import { ClientProviders } from "@ui/utilities/client-providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-backgound">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
