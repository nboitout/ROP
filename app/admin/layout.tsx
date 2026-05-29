import './admin.css'
import AdminNavLink from '@/components/admin/AdminNavLink'
import LogoutButton from '@/components/admin/LogoutButton'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="adm-root">
      <nav className="adm-nav">
        <div className="adm-nav-left">
          <span className="adm-nav-brand">R.O.P. — Admin</span>
          <div className="adm-nav-links">
            <AdminNavLink href="/admin">Overview</AdminNavLink>
            <AdminNavLink href="/admin/funnel">Funnel</AdminNavLink>
            <AdminNavLink href="/admin/readers">Readers</AdminNavLink>
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
