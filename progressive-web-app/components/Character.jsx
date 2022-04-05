

export const BasicInfo = ({ character }) => (
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
            {/* <div className=''>
          <div><b>Height:</b>&nbsp;{character.height}</div>
          <div><b>Hair:</b>&nbsp;{character.hair}</div>
          <div><b>Eyes:</b>&nbsp;{character.eyes}</div>
        </div> */}
            <table className="mt-2 table table-compact overflow-auto">
                <tbody>
                    <tr className=''>
                        <th className='pl-4'>XP</th>
                        <td className=''><b>Current</b>&nbsp;{character.current_experience}</td>
                        <td className=''><b>Spent</b>&nbsp;{character.spent_experience}</td>
                        <td className=''><b>Total</b>&nbsp;{parseFloat(character.current_experience) + parseFloat(character.spent_experience)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export const SkillTable = ({ character }) => (
    <div className='w-12/12'>
        <table className="table table-compact w-full">
            <tbody>
                <tr>
                    <th className='pl-8'>Artisan</th>
                    <td className='p-auto'>{character.art}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Athletics</th>
                    <td className='p-auto'>{character.athletics}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Charm</th>
                    <td className='p-auto'>{character.charm}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Charm Animal</th>
                    <td className='p-auto'>{character.charm_animal}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Climb</th>
                    <td className='p-auto'>{character.climb}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Cool</th>
                    <td className='p-auto'>{character.cool}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Consume Alcohol</th>
                    <td className='p-auto'>{character.consume_alcohol}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Dodge</th>
                    <td className='p-auto'>{character.dodge}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Endurance</th>
                    <td className='p-auto'>{character.endurance}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Haggle</th>
                    <td className='p-auto'>{character.haggle}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Intimidate</th>
                    <td className='p-auto'>{character.intimidate}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Intuition</th>
                    <td className='p-auto'>{character.intuition}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Leadership</th>
                    <td className='p-auto'>{character.leadership}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Navigation</th>
                    <td className='p-auto'>{character.navigation}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Outdoor Survival</th>
                    <td className='p-auto'>{character.outdoor_survival}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Perception</th>
                    <td className='p-auto'>{character.perception}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Ride</th>
                    <td className='p-auto'>{character.ride}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Stealth</th>
                    <td className='p-auto'>{character.stealth}</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export const ArmorTable = ({ character }) => (
    <div className='w-12/12'>
        <table className="table table-compact w-full">
            <tbody>
                <tr>
                    <th className='pl-8'>Head</th>
                    <td className='p-auto'>{character.head}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Right arm</th>
                    <td className='p-auto'>{character.right_arm}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Left arm</th>
                    <td className='p-auto'>{character.left_arm}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Right leg</th>
                    <td className='p-auto'>{character.right_leg}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Left leg</th>
                    <td className='p-auto'>{character.left_leg}</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export const ProvidenceTable = ({ character }) => (
    <div className='w-12/12'>
        <table className="table table-compact w-full">
            <tbody>
                <tr>
                    <th className='pl-8'>Fate</th>
                    <td className='p-auto'>{character.fate}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Fortune</th>
                    <td className='p-auto'>{character.fortune}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Resilience</th>
                    <td className='p-auto'>{character.resilience}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Resolve</th>
                    <td className='p-auto'>{character.resolve}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Motivation</th>
                    <td className='p-auto'>{character.motivation_value}</td>
                </tr>
                {/* <tr>
            <th className='pl-8'>Max Wounds</th>
            <td className='p-auto'>{character.wounds}</td>
          </tr>
          <tr>
            <th className='pl-8'>Corruption</th>
            <td className='p-auto'>{character.corruption}</td>
          </tr> */}
            </tbody>
        </table>
    </div>
)

export const CharacteristicsTable = ({ character }) => (
    <div className='w-12/12'>
        <table className="table table-compact w-full">
            <tbody>
                <tr>
                    <th className='pl-8'>Weapon Skill</th>
                    <td className='p-auto'>{character.weapon_skill}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Ballistic Skill</th>
                    <td className='p-auto'>{character.ballistic_skill}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Strength</th>
                    <td className='p-auto'>{character.strength}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Toughness</th>
                    <td className='p-auto'>{character.toughness}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Intelligence</th>
                    <td className='p-auto'>{character.intelligence}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Agility</th>
                    <td className='p-auto'>{character.agility}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Dexterity</th>
                    <td className='p-auto'>{character.dexterity}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Intelligence</th>
                    <td className='p-auto'>{character.intelligence}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Willpower</th>
                    <td className='p-auto'>{character.willpower}</td>
                </tr>
                <tr>
                    <th className='pl-8'>Fellowship</th>
                    <td className='p-auto'>{character.fellowship}</td>
                </tr>
            </tbody>
        </table>
    </div>
)