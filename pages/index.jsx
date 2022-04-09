import Layout from '../components/Layout'
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import Journal from '../components/Journal'
import Campaign from '../components/Campaign'
import PartySummary from '../components/PartySummary';
import { getCampaignData, getJournalData, getPartyData } from '../lib/common';
import { useEffect } from 'react';
import next from 'next';
// import { GiSpikedDragonHead, GiAxeSword } from 'react-icons/gi'

const Home = ({ journalEntries, campaignData, partyData, userData }) => {

  const staticUrl = process.env.NEXT_PUBLIC_STATIC_URL
  const staticFolder=process.env.NEXT_PUBLIC_STATIC_FOLDER
  const urlBase = staticUrl + staticFolder
  const mediaName = campaignData.cover_image.split(urlBase).slice(-1)
  const nextCoverImage = '/api/media/' +  mediaName

  return (
    <div className='bg-neutral-focus'>
      <Campaign campaignData={{...campaignData, cover_image: nextCoverImage}} />
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