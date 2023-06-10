import CollectionNavbar from "@/components/CollectionNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CollectionNavbar />
        {children}
      </body>
    </html>
  );
}
