import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
   
      >
        <h2>Navbar</h2>
        {children}
      </body>
    </html>
  );
}
