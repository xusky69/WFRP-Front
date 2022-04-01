import Layout from '../components/Layout'
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import axios from 'axios'
import qs from 'qs'
import { GiSpikedDragonHead, GiAxeSword } from 'react-icons/gi'
import Journal from '../components/Journal'
import Campaign from '../components/Campaign'
import PartySummary from '../components/PartySummary';

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

// props func
async function getServerSidePropsBase({ req }) {

  // filters now working on the api side!
  // example
  // http://localhost:8000/playable-characters/?campaign=58a53f18-22b6-4d01-84d8-95b037bfd036&user__username=admin

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const { redirect, username, password, campaign } = getUnauthRedirect(req)
  if (redirect !== false) { return { redirect } }

  const campaignQueryString = qs.stringify({
    campaign__uuid: campaign,
  })

  const campaignResponse = await axios.get(`${apiUrl}campaigns/?${campaign}`, { auth: { username, password } })
  let campaignData
  if (campaignResponse.data.length > 0) {
    campaignData = {
      master: campaignResponse.data[0].master,
      user: username,
      cover_image: campaignResponse.data[0].cover_image,
      name: campaignResponse.data[0].name,
      description: campaignResponse.data[0].description
    }
  } else {
    campaignData = {
      master: 'No dungeon master campaign data was found',
      user: username,
      cover_image: 'No image data was found',
      name: 'No name campaign data was found',
      description: 'No description campaign data was found'
    }
  }

  const journalResponse = await axios.get(`${apiUrl}journal-entries/?${campaignQueryString}`, { auth: { username, password } })
  const journalEntries = journalResponse.data.map((item) => ({
    name: item.name,
    entry_text: item.entry_text,
    creation_date: item.creation_date
  }))

  const partyQueryString = qs.stringify({
    campaign__uuid: campaign,
  })

  const partyResponse = await axios.get(`${apiUrl}playable-characters/?${partyQueryString}`, { auth: { username, password } })
  const partyData = partyResponse.data.map((item) => ({
    user: item.user,
    avatar: item.character_avatar,
    name: item.name,
    species: item.species,
    career: item.career
  }))

  let userAvatar
  try {
    userAvatar = partyData.filter((item) => (item.user == username))[0].avatar
  } catch (error) {
    userAvatar = "undefined"
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

//exports
export default Home
export { getServerSideProps }