import "./globals.css";

export const metadata = {
  title: "Social Account Status Checker",
  description: "Understand what can and cannot be verified about social media account status."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
