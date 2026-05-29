import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import './admin.css'
import AdminNavLink from '@/components/admin/AdminNavLink'
import LogoutButton from '@/components/admin/LogoutButton'

const COOKIE_NAME = 'admin_session'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const session = cookieStore.get(COOKIE_NAME)

  if (!session || session.value !== 'authenticated') {
    redirect('/admin/login')
  }

  return (
    <div className="adm-root">
      <nav className="adm-nav">
        <div className="adm-nav-left">
          <span className="adm-nav-brand">Admin</span>
          <div className="adm-nav-links">
            <AdminNavLink href="/admin">Overview</AdminNavLink>
            <AdminNavLink href="/admin/funnel">Funnel</AdminNavLink>
            <AdminNavLink href="/admin/leads">Leads</AdminNavLink>
            <AdminNavLink href="/admin/engagement">Engagement</AdminNavLink>
          </div>
        </div>
        <div className="adm-nav-right">
          <a href="/" className="adm-nav-site-link">← guy-boitout.com</a>
          <LogoutButton />
        </div>
      </nav>
      {children}
    </div>
  )
}
