import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import { getPartyData } from '../lib/common';
import {
  GiScrollQuill,
  GiAbacus,
  GiOrbital,
  GiBreastplate,
  GiFluffyCloud,
  GiSwordsEmblem
} from 'react-icons/gi'
import { CollapsableContent } from '../components/Common';
import {
  BasicInfo,
  BasicData,
  ArmorTable,
  CharacteristicsTable,
  SkillTable
} from '../components/Character'

const PartyItem = ({ character }) => (
  <div className='bg-neutral-focus'>
    <div className="m-2 mb-0 w-12/12 card bg-neutral text-neutral-content shadow-xl">
      <div className="card-body p-2">
        <BasicInfo character={character} />
        <CollapsableContent title={<div className='flex'><GiScrollQuill size={28} /> &nbsp; Basic Data </div>}>
          <BasicData character={character} />
        </CollapsableContent>
        <CollapsableContent title={<div className='flex'><GiBreastplate size={28} /> &nbsp; Armor </div>}>
          <ArmorTable character={character} />
        </CollapsableContent>
        <CollapsableContent title={<div className='flex'><GiAbacus size={28} /> &nbsp; Characteristics </div>}>
          <CharacteristicsTable character={character} />
        </CollapsableContent>
        <CollapsableContent title={<div className='flex'><GiSwordsEmblem size={26} /> &nbsp; Basic Skills </div>}>
          <SkillTable character={character} />
        </CollapsableContent>
      </div>
    </div>
  </div>
)

// functional component
const Party = ({ partyData }) => (
  <div className='bg-neutral-focus h-screen'>
    {partyData.filter((item) => (item.name == 'Gunnar Hrolfsson')).map((item) =>
      <PartyItem character={item} />)}
  </div>
)

// prop func
async function getServerSidePropsBase({ req }) {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const { redirect, username, password, campaign } = getUnauthRedirect(req)
  if (redirect !== false) { return { redirect } }

  const partyData = await getPartyData({ campaign, username, password, apiUrl })

  return {
    props: {
      partyData
    }
  }
}

//exports
const getServerSideProps = withSessionSsr(getServerSidePropsBase)
export default Party
export { getServerSideProps }