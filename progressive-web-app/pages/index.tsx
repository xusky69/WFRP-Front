import { FunctionComponent } from 'react'
// import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import axios from 'axios'
import { redirect } from 'next/dist/server/api-utils';

// props
type Props = {
  message: string,
  content: string,
}

// functional view
const Home: FunctionComponent<Props> = ({ message, content }) => {

  return <>
    <Layout message={message}>
      <p>{message}</p>
      <p>{content}</p>
      <p>Children 2</p>
      <p>Children 3</p>
    </Layout>
  </>
}

// props func
const getServerSidePropsBase = async function ({ req }) {

  const { redirect, username, password } = getUnauthRedirect(req)
  if (redirect !== false) { return { redirect } }

  return {
    props: {
      message: String(username),
      content: String(password)
    }
  }

}

const getServerSideProps = withSessionSsr(getServerSidePropsBase)

//exports
export default Home
export { getServerSideProps }