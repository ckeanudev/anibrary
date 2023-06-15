import CollectionNavbar from "@/components/CollectionNavbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ReactQueryProvider from "@/components/ReactQueryProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "AniBrary",
  description: "A website containing collections of anime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <CollectionNavbar />

          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
