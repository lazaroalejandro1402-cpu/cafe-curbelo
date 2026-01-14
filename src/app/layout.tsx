import "./globals.css";

export const metadata = {
  title: "Café Curbelo | Café premium en Miami",
  description:
    "Café Curbelo: café premium, tueste fresco y sabor intenso. Pedidos por WhatsApp y entregas en Miami.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
<body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
