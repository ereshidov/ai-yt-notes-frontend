import { ThemeProvider } from '~/shared/styles'
import './globals.css'

export const metadata = {
  title: 'YouTube video summary using AI'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
