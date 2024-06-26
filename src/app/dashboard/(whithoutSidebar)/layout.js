import NavbarDashboard from "../../../../components/layout/dashboard/NavbarDashboard";
import "../../globals.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <section>
          <NavbarDashboard whitoutSidebar={true} />
          <section className="max-w-[1440px] m-auto">
            {children}
          </section>
        </section>
      </body>
    </html>
  )
}
