import './globals.css';

export const metadata = {
  title: '3D Animation Prompt Builder',
  description: 'Craft a 3D animation prompt about a girl treating her first pimple with gentle home care.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
