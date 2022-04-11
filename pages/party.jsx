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
        <CollapsableContent title={<div className='flex'><GiAbacus size={28} /> &nbsp; Skills & Attributes </div>}>
          <ArmorTable character={character} />
          <div className="mt-2"></div>
          <CharacteristicsTable character={character} />
          <div className='mt-2'></div>
          <SkillTable character={character} />
        </CollapsableContent>
      </div>
    </div>
  </div>
)

// functional component
const Party = ({ partyData }) => (
  <div className='bg-neutral-focus mb-2'>
    {partyData.map((item, i) =>
      <PartyItem character={item} key={`character_${i}`} />)}
    {/* {partyData.filter((item) => (item.name == 'Gunnar Hrolfsson')).map((item, i) =>
      <PartyItem character={item} key={`character_${i}`} />)} */}
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