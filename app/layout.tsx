"use client";
import CollectionNavbar from "@/components/CollectionNavbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={montserrat.className}>
          <CollectionNavbar />

          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
