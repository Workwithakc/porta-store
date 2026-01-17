export const metadata = {
  title: 'PortaStore - Automation Agency',
  description: 'Automation agency website with portfolio and e-commerce store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
