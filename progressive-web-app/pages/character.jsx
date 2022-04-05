import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import { getPartyData } from '../lib/common';
import {
  GiScrollQuill,
  GiAbacus,
  GiOrbital,
  GiBreastplate,
  GiFluffyCloud,
  GiSwordsEmblem,
  GiBackpack
} from 'react-icons/gi'
import { CollapsableContent } from '../components/Common';
import {
  BasicInfo,
  ProvidenceTable,
  ArmorTable,
  CharacteristicsTable,
  SkillTable,
  InventoryTable,
  BasicData
} from '../components/Character'
import axios from "axios"
import qs from 'qs'


// functional component
const Character = ({ character, characterItems, characterArmor, characterWeapons }) => (
  <div className='bg-neutral-focus h-screen'>
    <div className='bg-neutral-focus'>
      <div className="m-2 mb-0 w-12/12 card bg-neutral text-neutral-content shadow-xl">
        <div className="card-body p-2">
          <BasicInfo character={character} />
          <CollapsableContent title={<div className='flex'><GiScrollQuill size={28} /> &nbsp; Basic Data </div>}>
            <BasicData character={character} />
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiBackpack size={26} /> &nbsp; Inventory </div>}>
            <InventoryTable
              characterItems={characterItems}
              characterWeapons={characterWeapons}
              characterArmor={characterArmor}
            />
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiBreastplate size={28} /> &nbsp; Armor </div>}>
            {<ArmorTable character={character} />}
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiSwordsEmblem size={26} /> &nbsp; Basic Skills </div>}>
            {<SkillTable character={character} />}
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiAbacus size={28} /> &nbsp; Characteristics </div>}>
            {<CharacteristicsTable character={character} />}
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiOrbital size={28} /> &nbsp; Destiny </div>}>
            {<ProvidenceTable character={character} />}
          </CollapsableContent>
        </div>
      </div>
    </div>
  </div>
)

async function getItemData({ character, username, password, apiUrl }) {
  const queryString = qs.stringify({
    character: character.uuid,
  })
  const response = await axios.get(`${apiUrl}items/?${queryString}`, { auth: { username, password } })
  return response.data
}

async function getWeaponData({ character, username, password, apiUrl }) {
  const queryString = qs.stringify({
    character: character.uuid,
  })
  const response = await axios.get(`${apiUrl}weapons/?${queryString}`, { auth: { username, password } })
  return response.data
}

async function getArmorData({ character, username, password, apiUrl }) {
  const queryString = qs.stringify({
    character: character.uuid,
  })
  const response = await axios.get(`${apiUrl}armor/?${queryString}`, { auth: { username, password } })
  return response.data
}

async function getTalentData({ character, username, password, apiUrl }) {
  const queryString = qs.stringify({
    character: character.uuid,
  })
  const response = await axios.get(`${apiUrl}talents/?${queryString}`, { auth: { username, password } })
  return response.data
}

async function getAdvancedSkillData({ character, username, password, apiUrl }) {
  const queryString = qs.stringify({
    character: character.uuid,
  })
  const response = await axios.get(`${apiUrl}advanced-skills/?${queryString}`, { auth: { username, password } })
  return response.data
}

async function getSpellData({ character, username, password, apiUrl }) {
  const queryString = qs.stringify({
    character: character.uuid,
  })
  const response = await axios.get(`${apiUrl}spells/?${queryString}`, { auth: { username, password } })
  return response.data
}



// prop func
async function getServerSidePropsBase({ req }) {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const { redirect, username, password, campaign } = getUnauthRedirect(req)
  if (redirect !== false) { return { redirect } }

  const partyData = await getPartyData({ campaign, username, password, apiUrl })
  const characterData = partyData.filter(item => item.user == username)[0]
  const itemData = await getItemData({ character: characterData.uuid, username, password, apiUrl })
  const armorData = await getArmorData({ character: characterData.uuid, username, password, apiUrl })
  const weaponData = await getWeaponData({ character: characterData.uuid, username, password, apiUrl })
  const spellData = await getSpellData({ character: characterData.uuid, username, password, apiUrl })
  const talentData = await getTalentData({ character: characterData.uuid, username, password, apiUrl })
  const advancedSkillData = await getAdvancedSkillData({ character: characterData.uuid, username, password, apiUrl })

  // const [itemD, journalEntries, partyData] = await Promise.all([
  //   getCampaignData({ campaign, username, password, apiUrl }),
  //   getJournalData({ campaign, username, password, apiUrl }),
  //   getPartyData({ campaign, username, password, apiUrl })
  // ])

  return {
    props: {
      character: characterData,
      characterItems: itemData,
      characterArmor: armorData,
      characterWeapons: weaponData
    }
  }
}

//exports
const getServerSideProps = withSessionSsr(getServerSidePropsBase)
export default Character
export { getServerSideProps }