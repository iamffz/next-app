import { Layout, ConfigProvider } from 'antd'
import { AppProps } from 'next/app'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const PageLayout = ({ children }) => {
  return (
    <>
      <ConfigProvider>
        <Layout id="app-layout" style={{ minHeight: '100vh' }}>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default PageLayout
