import Snippet from '../components/Snippet'
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import { getPartyData } from '../lib/common';
import { GiScrollQuill, GiAbacus, GiOrbital, GiBreastplate, GiSkills } from 'react-icons/gi'

const PartyItem = ({ partyCharacter }) => (
  <div className="m-3 mb-0 w-12/12 card bg-neutral text-neutral-content shadow-xl">
    <div className="card-body p-5">
      <BasicInfo character={partyCharacter} />
      <CollapsableContent title={<div className='flex'><GiScrollQuill size={28} /> &nbsp; Background </div>}>
        <p className='text-sm italic whitespace-pre-wrap'>
          {partyCharacter.background_story}
        </p>
      </CollapsableContent>
      <CollapsableContent title={<div className='flex'><GiBreastplate size={28} /> &nbsp; Armor </div>}>
        <p className='text-sm italic whitespace-pre-wrap'>
          {<ArmorTable character={partyCharacter} />}
        </p>
      </CollapsableContent>
      <CollapsableContent title={<div className='flex'><GiAbacus size={28} /> &nbsp; Characteristics </div>}>
        <p className='text-sm italic whitespace-pre-wrap'>
          {<CharacteristicsTable character={partyCharacter} />}
        </p>
      </CollapsableContent>
      <CollapsableContent title={<div className='flex'><GiOrbital size={28} /> &nbsp; Providence </div>}>
        <p className='text-sm italic whitespace-pre-wrap'>
          {<ProvidenceTable character={partyCharacter} />}
        </p>
      </CollapsableContent>
      <CollapsableContent title={<div className='flex'><GiSkills size={26} /> &nbsp; Basic Skills </div>}>
        <p className='text-sm italic whitespace-pre-wrap'>
          {<SkillTable character={partyCharacter} />}
        </p>
      </CollapsableContent>
    </div>
  </div>
)

// functional component
const Party = ({ partyData }) => (
  <div className='bg-neutral-focus h-screen pb-4'>
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

// subcomponents

const CollapsableContent = ({ title, children }) => (
  <div className=" w-12/12 card bg-base-200 text-neutral-content shadow-xl">
    <div className="card-body p-1">
      <div tabIndex={0} className="collapse collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title">
          <h2 className="card-title">
            {title}
          </h2>
        </div>
        <div className='collapse-content'>
          {children}
        </div>
      </div>
    </div>
  </div>
)

const BasicInfo = ({ character }) => (
  <div className="w-12/12 card bg-base-200 text-neutral-content shadow-xl">
    <div className="card-body p-4">
      <div className='grid grid-cols-3'>
        <div className="avatar col-span-1">
          <div className="w-32 mask mask-squircle bg-neutral-focus">
            <img src={character.character_avatar} />
          </div>
        </div>
        <div className='pl-4 col-span-2'>
          <h2 className="card-title">
            {character.name}
          </h2>
          <h3 className='font-semibold'>
            {character.species + ' ' + character.career_level}
          </h3>
          <p><b>Class: </b>{character.character_class}</p>
          <p><b>Age: </b>{character.age}</p>
          <p><b>Wounds: </b>{character.wounds}/{character.max_wounds}</p>
        </div>
      </div>
      <table className="mt-2 table table-compact">
        <tbody>
          <tr className=''>
            <th className='pl-4'>Experience</th>
            <td className=''>Current&nbsp;{character.current_experience}</td>
            <td className=''>Spent&nbsp;{character.spent_experience}</td>
            <td className=''>Total&nbsp;{parseFloat(character.current_experience) + parseFloat(character.spent_experience)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

const SkillTable = ({ character }) => (
  <table className="table table-compact w-12/12">
    <tbody>
      <tr>
        <th className='pl-8'>Artisan</th>
        <td className='pr-8'>{character.art}</td>
      </tr>
      <tr>
        <th className='pl-8'>Athletics</th>
        <td className='pr-8'>{character.athletics}</td>
      </tr>
      <tr>
        <th className='pl-8'>Charm</th>
        <td className='pr-8'>{character.charm}</td>
      </tr>
      <tr>
        <th className='pl-8'>Charm Animal</th>
        <td className='pr-8'>{character.charm_animal}</td>
      </tr>
      <tr>
        <th className='pl-8'>Climb</th>
        <td className='pr-8'>{character.climb}</td>
      </tr>
      <tr>
        <th className='pl-8'>Cool</th>
        <td className='pr-8'>{character.cool}</td>
      </tr>
      <tr>
        <th className='pl-8'>Consume Alcohol</th>
        <td className='pr-8'>{character.consume_alcohol}</td>
      </tr>
      <tr>
        <th className='pl-8'>Dodge</th>
        <td className='pr-8'>{character.dodge}</td>
      </tr>
      <tr>
        <th className='pl-8'>Endurance</th>
        <td className='pr-8'>{character.endurance}</td>
      </tr>
      <tr>
        <th className='pl-8'>Haggle</th>
        <td className='pr-8'>{character.haggle}</td>
      </tr>
      <tr>
        <th className='pl-8'>Heal</th>
        <td className='pr-8'>{character.heal}</td>
      </tr>
      <tr>
        <th className='pl-8'>Intimidate</th>
        <td className='pr-8'>{character.intimidate}</td>
      </tr>
      <tr>
        <th className='pl-8'>Intuition</th>
        <td className='pr-8'>{character.intuition}</td>
      </tr>
      <tr>
        <th className='pl-8'>Leadership</th>
        <td className='pr-8'>{character.leadership}</td>
      </tr>
      <tr>
        <th className='pl-8'>Navigation</th>
        <td className='pr-8'>{character.navigation}</td>
      </tr>
      <tr>
        <th className='pl-8'>Outdoor Survival</th>
        <td className='pr-8'>{character.outdoor_survival}</td>
      </tr>
      <tr>
        <th className='pl-8'>Perception</th>
        <td className='pr-8'>{character.perception}</td>
      </tr>
      <tr>
        <th className='pl-8'>Ride</th>
        <td className='pr-8'>{character.ride}</td>
      </tr>
      <tr>
        <th className='pl-8'>Stealth</th>
        <td className='pr-8'>{character.stealth}</td>
      </tr>
    </tbody>
  </table>
)

const ArmorTable = ({ character }) => (
  <table className="table table-compact w-12/12">
    <tbody>
      <tr>
        <th className='pl-8'>Head</th>
        <td className='pr-8'>{character.head}</td>
      </tr>
      <tr>
        <th className='pl-8'>Right arm</th>
        <td className='pr-8'>{character.right_arm}</td>
      </tr>
      <tr>
        <th className='pl-8'>Left arm</th>
        <td className='pr-8'>{character.left_arm}</td>
      </tr>
      <tr>
        <th className='pl-8'>Right leg</th>
        <td className='pr-8'>{character.right_leg}</td>
      </tr>
      <tr>
        <th className='pl-8'>Left leg</th>
        <td className='pr-8'>{character.left_leg}</td>
      </tr>
    </tbody>
  </table>
)

const ProvidenceTable = ({ character }) => (
  <table className="table table-compact w-12/12">
    <tbody>
      <tr>
        <th className='pl-8'>Fate</th>
        <td className='pr-8'>{character.fate}</td>
      </tr>
      <tr>
        <th className='pl-8'>Fortune</th>
        <td className='pr-8'>{character.fortune}</td>
      </tr>
      <tr>
        <th className='pl-8'>Resilience</th>
        <td className='pr-8'>{character.resilience}</td>
      </tr>
      <tr>
        <th className='pl-8'>Resolve</th>
        <td className='pr-8'>{character.resolve}</td>
      </tr>
      <tr>
        <th className='pl-8'>Max Wounds</th>
        <td className='pr-8'>{character.wounds}</td>
      </tr>
      <tr>
        <th className='pl-8'>Corruption</th>
        <td className='pr-8'>{character.corruption}</td>
      </tr>
    </tbody>
  </table>
)

const CharacteristicsTable = ({ character }) => (
  <table className="table table-compact">
    <tbody>
      <tr>
        <th className='pl-8'>Weapon Skill</th>
        <td className='pr-8'>{character.weapon_skill}</td>
      </tr>
      <tr>
        <th className='pl-8'>Ballistic Skill</th>
        <td className='pr-8'>{character.ballistic_skill}</td>
      </tr>
      <tr>
        <th className='pl-8'>Strength</th>
        <td className='pr-8'>{character.strength}</td>
      </tr>
      <tr>
        <th className='pl-8'>Toughness</th>
        <td className='pr-8'>{character.toughness}</td>
      </tr>
      <tr>
        <th className='pl-8'>Intelligence</th>
        <td className='pr-8'>{character.intelligence}</td>
      </tr>
      <tr>
        <th className='pl-8'>Agility</th>
        <td className='pr-8'>{character.agility}</td>
      </tr>
      <tr>
        <th className='pl-8'>Dexterity</th>
        <td className='pr-8'>{character.dexterity}</td>
      </tr>
      <tr>
        <th className='pl-8'>Intelligence</th>
        <td className='pr-8'>{character.intelligence}</td>
      </tr>
      <tr>
        <th className='pl-8'>Willpower</th>
        <td className='pr-8'>{character.willpower}</td>
      </tr>
      <tr>
        <th className='pl-8'>Fellowship</th>
        <td className='pr-8'>{character.fellowship}</td>
      </tr>
    </tbody>
  </table>
)