import './admin.css'
import Link from 'next/link'
import AdminNavLink from '@/components/admin/AdminNavLink'
import AdminResearchMenu from '@/components/admin/AdminResearchMenu'
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
          <span className="adm-nav-brand">R.O.P. - Admin</span>
          <div className="adm-nav-links">
            <AdminNavLink href="/admin/chapitres">Chapters</AdminNavLink>
            <AdminNavLink href="/admin/chat">Chatbot</AdminNavLink>
            <span className="adm-nav-sep" aria-hidden="true" />
            <AdminNavLink href="/admin">Overview</AdminNavLink>
            <AdminNavLink href="/admin/visits">Visits</AdminNavLink>
            <AdminNavLink href="/admin/engagement">Engagement</AdminNavLink>
            <AdminNavLink href="/admin/readers">Readers</AdminNavLink>
            <AdminNavLink href="/admin/parcours">Journey</AdminNavLink>
            <AdminNavLink href="/admin/campaigns">Campaigns</AdminNavLink>
            <span className="adm-nav-sep" aria-hidden="true" />
            <AdminNavLink href="/admin/sales-plan" className="sales">Sales Plan</AdminNavLink>
            <span className="adm-nav-sep" aria-hidden="true" />
            <AdminNavLink href="/admin/observatoire">Observatoire</AdminNavLink>
            <AdminResearchMenu />
          </div>
        </div>
        <div className="adm-nav-right">
          <Link href="/" className="adm-nav-site-link">&lt;- guy-boitout.com</Link>
          <LogoutButton />
        </div>
      </nav>
      {children}
    </div>
  )
}
