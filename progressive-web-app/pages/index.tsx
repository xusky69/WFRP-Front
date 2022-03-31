import { FunctionComponent } from 'react'
// import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import { NextApiRequest } from 'next';
import axios from 'axios'
import qs from 'qs'
import { GiSpikedDragonHead } from 'react-icons/gi'
import Image from 'next/image'
import Journal, { JournalProps } from '../components/Journal'

// props
interface CampaignPanelProps {
  campaignData: {
    master: string
    name: string,
    description: string
    creation_date: string,
  }
}
interface PartySummaryProps {
  partySummaryProps: Array<{
    user: string,
    name: string,
    species: string,
    career: string
  }>
}




// functional view
const Home: FunctionComponent<JournalProps & CampaignPanelProps & PartySummaryProps> = ({ journalEntries, campaignData, partyData }) => {

  return (
    <Layout>
      {/* <div className='h-56 overflow-hidden'> */}
      {/* <img
          src="/static/img/ubersreik.jpg"
          alt="Campaign image"
          className='object-scale-down w-screen'
        /> */}
      {/* </div> */}
      <div className="m-3 mb-0 w-fit card bg-neutral text-neutral-content shadow-xl">
        <div className='h-72 overflow-hidden'>
          <img
            src="/static/img/ubersreik.jpg"
            alt="Campaign image"
            className='object-scale-down w-screen'
          />
        </div>
        <div className="card-body p-5">
          <h2 className="card-title">
            <GiSpikedDragonHead size="24" /> {campaignData.name}
          </h2>
          <div className='text-sm flex flex-row'>
            Dungeon master:&nbsp;<b>{campaignData.master}</b>
          </div>
          <p className='italic'>
            {campaignData.description}
          </p>
        </div>
      </div>

      <div className="m-3 mb-0 w-fit card bg-neutral text-neutral-content shadow-xl">
        <div className="card-body p-5">
          <h2 className="card-title">
            <GiSpikedDragonHead size="24" /> {campaignData.name}
          </h2>
          <div className="">
            <table className="table table-compact w-10/12">
              <tbody>
                {partyData.map((item) => (
                  <tr>
                    <th>{item.name}</th>
                    <td>{item.species}</td>
                    <td>{item.career}</td>
                    <td>Blue</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="avatar">
            <div className="w-12 mask mask-squircle">
              <img src="https://api.lorem.space/image/face?hash=47449" />
            </div>
          </div>
        </div>
      </div>

      <Journal journalEntries={journalEntries} />
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

  const campaignQueryString = qs.stringify({
    campaign__uuid: campaign,
  })

  const journalResponse = await axios.get(`${apiUrl}journal-entries/?${campaignQueryString}`, { auth: { username, password } })
  const journalEntries = journalResponse.data.map((item: { name: string, entry_text: string, creation_date: string }) => ({
    name: item.name,
    entry_text: item.entry_text,
    creation_date: item.creation_date
  }))

  const campaignResponse = await axios.get(`${apiUrl}campaigns/?${campaign}`, { auth: { username, password } })
  const campaignData = {
    master: campaignResponse.data[0].master,
    name: campaignResponse.data[0].name,
    description: campaignResponse.data[0].description
  }

  const partyQueryString = qs.stringify({
    campaign__uuid: campaign,
  })

  const partyResponse = await axios.get(`${apiUrl}playable-characters/?${partyQueryString}`, { auth: { username, password } })
  const partyData = partyResponse.data.map((item: { user: string, name: string, species: string, career: string }) => ({
    user: item.user,
    name: item.name,
    species: item.species,
    career: item.career
  }))

  return {
    props: {
      journalEntries,
      campaignData,
      partyData
    }
  }

}

const getServerSideProps = withSessionSsr(getServerSidePropsBase)

//exports
export default Home
export { getServerSideProps }