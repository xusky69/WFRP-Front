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
  ProvidenceTable,
  ArmorTable,
  CharacteristicsTable,
  SkillTable
} from '../components/Character'



const PartyItem = ({ partyCharacter }) => (
  <div className='bg-neutral-focus'>
    <div className="m-2 mb-0 w-12/12 card bg-neutral text-neutral-content shadow-xl">
      <div className="card-body p-2">
        <BasicInfo character={partyCharacter} />
        <CollapsableContent title={<div className='flex'><GiScrollQuill size={28} /> &nbsp; Background </div>}>
          <p className='text-sm italic whitespace-pre-wrap'>
            {partyCharacter.background_story}
          </p>
        </CollapsableContent>
        <CollapsableContent title={<div className='flex'><GiBreastplate size={28} /> &nbsp; Armor </div>}>
          <p className='text-sm whitespace-pre-wrap'>
            {<ArmorTable character={partyCharacter} />}
          </p>
        </CollapsableContent>
        <CollapsableContent title={<div className='flex'><GiAbacus size={28} /> &nbsp; Characteristics </div>}>
          <p className='text-sm whitespace-pre-wrap'>
            {<CharacteristicsTable character={partyCharacter} />}
          </p>
        </CollapsableContent>
        <CollapsableContent title={<div className='flex'><GiSwordsEmblem size={26} /> &nbsp; Basic Skills </div>}>
          <p className='text-sm whitespace-pre-wrap'>
            {<SkillTable character={partyCharacter} />}
          </p>
        </CollapsableContent>
      </div>
    </div>
  </div>
)

// functional component
const Party = ({ partyData }) => (
  <div className='bg-neutral-focus h-screen'>
    {partyData.filter((item) => (item.name == 'Gunnar Hrolfsson')).map((item) =>
      <PartyItem partyCharacter={item} />)}
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