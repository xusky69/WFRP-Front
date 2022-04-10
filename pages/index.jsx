import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import Journal from '../components/Journal'
import Campaign from '../components/Campaign'
import PartySummary from '../components/PartySummary';
import { getCampaignData, getJournalData, getPartyData } from '../lib/common';


const Home = ({ journalEntries, campaignData, partyData, userData }) => {

  return (
    <div className='bg-neutral-focus'>
      <Campaign campaignData={campaignData} />
      <PartySummary partyData={partyData} />
      <Journal journalEntries={journalEntries} />
    </div>
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

  return {
    props: {
      journalEntries,
      campaignData,
      partyData,
    }
  }
}

const getServerSideProps = withSessionSsr(getServerSidePropsBase)
export default Home
export { getServerSideProps }