// import styles from '../styles/View.module.css'
import Snippet from '../components/Snippet'
import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next'

// props
type ViewProps = {
  message: string
}

// functional component
const View: FunctionComponent<ViewProps> = ({ message }) => (
  <div>
    <Snippet message={message}>
      <p>Children</p>
    </Snippet>
  </div>
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