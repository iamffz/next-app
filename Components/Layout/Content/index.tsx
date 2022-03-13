import { Layout } from 'antd'
const { Content: AntdContent } = Layout

const Content = ({ children }) => {
  return (
    <>
      <AntdContent id="app-content" className="">
        {children}
      </AntdContent>
    </>
  )
}
export default Content
