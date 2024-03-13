interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="h-full overflow-auto p-10">{children}</div>
)

export default PageLayout
