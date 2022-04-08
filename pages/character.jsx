import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import {
  getPartyData,
  getAdvancedSkillData,
  getArmorData,
  getCampaignData,
  getItemData,
  getJournalData,
  getSpellData,
  getTalentData,
  getWeaponData
} from '../lib/common';
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
  BasicData,
  TalentsTable
} from '../components/Character'
import axios from "axios"
import qs from 'qs'

// functional component
const Character = ({ character, characterItems, characterArmor, characterWeapons, characterSpells, characterTalents, characterAdvancedSkills }) => (
  <div className='bg-neutral-focus mb-2'>
    <div className='bg-neutral-focus'>
      <div className="m-2 mb-0 w-12/12 card bg-neutral text-neutral-content shadow-xl">
        <div className="card-body p-2">
          <BasicInfo character={character} />
          <CollapsableContent title={<div className='flex'><GiScrollQuill size={28} /> &nbsp; Basic Data </div>}>
            <BasicData character={character} />
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiBackpack size={26} /> &nbsp; Inventory & Spells </div>}>
            <InventoryTable
              characterItems={characterItems}
              characterWeapons={characterWeapons}
              characterArmor={characterArmor}
              characterSpells={characterSpells}
            />
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiAbacus size={28} /> &nbsp; Skills & Attributes </div>}>
            <ArmorTable character={character} />
            <div className="mt-2"></div>
            <CharacteristicsTable character={character} />
            <div className='mt-2'></div>
            <SkillTable character={character} />
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiOrbital size={28} /> &nbsp; Destiny & Secrets </div>}>
            <ProvidenceTable character={character} />
          </CollapsableContent>
          <CollapsableContent title={<div className='flex'><GiSwordsEmblem size={28} /> &nbsp; Talents & Advanced Skills </div>}>
            <TalentsTable
              character={character}
              characterTalents={characterTalents}
              characterAdvancedSkills={characterAdvancedSkills}
            />
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
  const characterData = partyData.filter(item => item.user == username)[0]

  const [itemData, armorData, weaponData, spellData, talentData, advancedSkillData] = await Promise.all([
    getItemData({ character: characterData.uuid, username, password, apiUrl }),
    getArmorData({ character: characterData.uuid, username, password, apiUrl }),
    getWeaponData({ character: characterData.uuid, username, password, apiUrl }),
    getSpellData({ character: characterData.uuid, username, password, apiUrl }),
    getTalentData({ character: characterData.uuid, username, password, apiUrl }),
    getAdvancedSkillData({ character: characterData.uuid, username, password, apiUrl })
  ])

  return {
    props: {
      character: characterData,
      characterItems: itemData,
      characterArmor: armorData,
      characterWeapons: weaponData,
      characterSpells: spellData,
      characterTalents: talentData,
      characterAdvancedSkills: advancedSkillData
    }
  }
}

//exports
const getServerSideProps = withSessionSsr(getServerSidePropsBase)
export default Character
export { getServerSideProps }