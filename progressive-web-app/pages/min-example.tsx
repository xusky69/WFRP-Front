// import styles from '../styles/View.module.css'
import Snippet from '../components/Snippet'
import { FunctionComponent } from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'

// props
type ViewProps = {
  message: string
}

// functional component
const View: FunctionComponent<ViewProps> = ({ message }) => (
  <Layout>
    <div>
      <Snippet message={message}>
        <p>Children</p>
      </Snippet>
    </div>
  </Layout>
)

// prop func
const getServerSideProps: GetServerSideProps = async () => {
  return {
    props:
      { message: 'hello world' }
  }
}

//exports
export default View
export { getServerSideProps }