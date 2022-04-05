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

// functional component
const Character = ({ partyCharacter }) => (
  <div className='bg-neutral-focus h-screen'>
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
          <CollapsableContent title={<div className='flex'><GiOrbital size={28} /> &nbsp; Providence </div>}>
            <p className='text-sm whitespace-pre-wrap'>
              {<ProvidenceTable character={partyCharacter} />}
            </p>
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiSwordsEmblem size={26} /> &nbsp; Basic Skills </div>}>
            <p className='text-sm whitespace-pre-wrap'>
              {<SkillTable character={partyCharacter} />}
            </p>
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiFluffyCloud size={26} /> &nbsp; Ambitions </div>}>
            <p className='text-sm whitespace-pre-wrap mb-1'>
              <b>Short term: </b>{partyCharacter.short_term_ambitions}
            </p>

            <p className='text-sm whitespace-pre-wrap'>
              <b>Long term: </b>{partyCharacter.short_term_ambitions}
            </p>
          </CollapsableContent>
        </div>
      </div>
    </div>
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
      partyCharacter: partyData.filter((item) => (item.name == 'Gunnar Hrolfsson'))[0]
    }
  }
}

//exports
const getServerSideProps = withSessionSsr(getServerSidePropsBase)
export default Character
export { getServerSideProps }