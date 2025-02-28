import Nav from 'components/Nav/Nav'
import PageLayout from 'layouts/PageLayout'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <div className="flex min-h-screen flex-col bg-black bg-opacity-50">
    <Nav />
    <main className="flex-1">
      <PageLayout>{children}</PageLayout>
    </main>
  </div>
)

export default AppLayout
