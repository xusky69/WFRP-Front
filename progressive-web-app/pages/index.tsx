import { FunctionComponent } from 'react'
// import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import axios from 'axios'

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

  // filters now working on the api side!
  // example
  // http://localhost:8000/playable-characters/?campaign=58a53f18-22b6-4d01-84d8-95b037bfd036&user__username=admin

  const { redirect, username, password, campaign } = getUnauthRedirect(req)
  if (redirect !== false) { return { redirect } }

  const response = axios.get()

  return {
    props: {
      message: String(username),
      content: String(campaign)
    }
  }

}

const getServerSideProps = withSessionSsr(getServerSidePropsBase)

//exports
export default Home
export { getServerSideProps }