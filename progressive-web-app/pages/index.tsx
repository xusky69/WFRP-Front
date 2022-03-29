import { FunctionComponent } from 'react'
// import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import { withSessionSsr } from '../lib/withSession';
import { NextRequest, NextResponse } from 'next/server';
import { useRouter } from 'next/router';
const axios = require('axios');

// props
type Props = {
  message: string,
  loggedIn?: boolean,
}

// functional view
const Home: FunctionComponent<Props> = ({ message = 'hello world', loggedIn }) => {

  return <>
    <Layout message={message}>
      <p>{message}</p>
      <p>Children 2</p>
      <p>Children 3</p>
    </Layout>
  </>
}

// props func
const getServerSideProps = withSessionSsr(function ({ req }) {
  try {
    const username = req.session.user.username
    return {
      props: {
        message: String(username),
      }
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    }
  }
})

//exports
export default Home
export { getServerSideProps }