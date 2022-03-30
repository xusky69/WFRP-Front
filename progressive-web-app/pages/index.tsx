import { FunctionComponent } from 'react'
// import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import { NextApiRequest } from 'next';
import axios from 'axios'
import qs from 'qs'
import { GiFeather, GiBookmarklet } from 'react-icons/gi'

// props
type Props = {
  journalEntries: Array<{
    name: string,
    entry_text: string,
    creation_date: string,
  }>,

}

// functional view
const Home: FunctionComponent<Props> = ({ journalEntries }) => {

  return (
    <Layout>
      <div tabIndex={0} className="collapse collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-neutral-content">
          Journal Entries
        </div>
        <div className='collapse-content'>
          {journalEntries.map(item => (
            <div className="mb-3 mx-0 w-fit card bg-neutral text-neutral-content shadow-xl">
              <div className="card-body p-5">
                <h2 className="card-title">
                  <GiFeather size="28" />{item.name}
                </h2>
                <div className='text-sm italic'>
                  {item.creation_date.slice(0, 10).replaceAll('-', '/')}
                </div>
                <p className='italic'>
                  {item.entry_text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// props func
const getServerSidePropsBase = async function ({ req }) {

  // filters now working on the api side!
  // example
  // http://localhost:8000/playable-characters/?campaign=58a53f18-22b6-4d01-84d8-95b037bfd036&user__username=admin

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const { redirect, username, password, campaign } = getUnauthRedirect(req)
  if (redirect !== false) { return { redirect } }

  const queryString = qs.stringify({
    campaign__uuid: campaign,
  })

  const response = await axios.get(`${apiUrl}journal-entries/?${queryString}`, { auth: { username, password } })
  const journalEntries = response.data.map((item: object) => ({
    name: item.name,
    entry_text: item.entry_text,
    creation_date: item.creation_date
  }))

  return {
    props: {
      journalEntries: journalEntries
    }
  }

}

const getServerSideProps = withSessionSsr(getServerSidePropsBase)

//exports
export default Home
export { getServerSideProps }