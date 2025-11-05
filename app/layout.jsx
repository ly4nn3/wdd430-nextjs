export const metadata = {
  title: "Next.js",
  description: "Next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
