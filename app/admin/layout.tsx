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
            <AdminNavLink href="/admin/chapitres">Chapitres</AdminNavLink>
            <span className="adm-nav-sep" aria-hidden="true" />
            <AdminNavLink href="/admin">Overview</AdminNavLink>
            <AdminNavLink href="/admin/engagement">Engagement</AdminNavLink>
            <AdminNavLink href="/admin/readers">Readers</AdminNavLink>
            <AdminNavLink href="/admin/parcours">Parcours</AdminNavLink>
            <span className="adm-nav-sep" aria-hidden="true" />
            <a
              href="/prototype-pied"
              target="_blank"
              rel="noopener noreferrer"
              className="adm-nav-link"
            >
              Prototype 3D ↗
            </a>
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
