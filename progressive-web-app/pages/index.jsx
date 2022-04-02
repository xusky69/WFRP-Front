import Layout from '../components/Layout'
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import Journal from '../components/Journal'
import Campaign from '../components/Campaign'
import PartySummary from '../components/PartySummary';
import { getCampaignData, getJournalData, getPartyData } from '../lib/common';
// import { GiSpikedDragonHead, GiAxeSword } from 'react-icons/gi'

const Home = ({ journalEntries, campaignData, partyData, userData }) => {

  return (
    <Layout userPicture={userData.userAvatar}>
      <div className='bg-neutral-focus'>
      <Campaign campaignData={campaignData} />
      <PartySummary partyData={partyData} />
      <Journal journalEntries={journalEntries} />
      </div>
    </Layout>
  )
}

async function getServerSidePropsBase({ req }) {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const { redirect, username, password, campaign } = getUnauthRedirect(req)
  if (redirect !== false) { return { redirect } }

  const [campaignData, journalEntries, partyData] = await Promise.all([
    getCampaignData({ campaign, username, password, apiUrl }),
    getJournalData({ campaign, username, password, apiUrl }),
    getPartyData({ campaign, username, password, apiUrl })
  ])

  let userAvatar
  try {
    userAvatar = partyData.filter((item) => (item.user == username))[0].avatar
  } catch (error) {
    userAvatar = null
  }

  const userData = {
    username: username,
    userAvatar: userAvatar
  }

  return {
    props: {
      journalEntries,
      campaignData,
      partyData,
      userData
    }
  }
}

const getServerSideProps = withSessionSsr(getServerSidePropsBase)
export default Home
export { getServerSideProps }