import Image from "next/image"

export const BasicInfo = ({ character }) => (
    <div className="w-12/12 card bg-base-200 text-neutral-content shadow-xl">
        <div className="card-body p-4">
            <div className='grid grid-cols-3'>
                <div className="avatar col-span-1">
                    <div className="w-32 mask mask-squircle bg-neutral-focus">
                        {/* <img src={character.character_avatar} /> */}
                        <Image
                            src={character.character_avatar || '/static/img/user_placeholder.png'}   // not working (loading) on production server
                            alt={'Campaign cover image'}
                            layout='responsive'
                            width={256}
                            height={256}
                        />
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
            <table className="mt-2 table table-compact overflow-auto">
                <tbody>
                    <tr className=''>
                        <td className='pl-8'><b>Pennies</b>&nbsp;{character.brass_pennies}</td>
                        <td className=''><b>Shillings</b>&nbsp;{character.silver_shillings}</td>
                        <td className=''><b>Crowns</b>&nbsp;{character.gold_crowns}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export const SkillTable = ({ character }) => (
    <div className='w-12/12'>
        <table className="table table-compact w-full">
            <thead>
                <tr>
                    <th>Skill</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='pl-4'>Artisan</th>
                    <td className='p-auto'>{character.art}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Athletics</th>
                    <td className='p-auto'>{character.athletics}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Charm</th>
                    <td className='p-auto'>{character.charm}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Charm Animal</th>
                    <td className='p-auto'>{character.charm_animal}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Climb</th>
                    <td className='p-auto'>{character.climb}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Cool</th>
                    <td className='p-auto'>{character.cool}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Consume Alcohol</th>
                    <td className='p-auto'>{character.consume_alcohol}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Dodge</th>
                    <td className='p-auto'>{character.dodge}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Endurance</th>
                    <td className='p-auto'>{character.endurance}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Haggle</th>
                    <td className='p-auto'>{character.haggle}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Intimidate</th>
                    <td className='p-auto'>{character.intimidate}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Intuition</th>
                    <td className='p-auto'>{character.intuition}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Leadership</th>
                    <td className='p-auto'>{character.leadership}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Navigation</th>
                    <td className='p-auto'>{character.navigation}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Outdoor Survival</th>
                    <td className='p-auto'>{character.outdoor_survival}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Perception</th>
                    <td className='p-auto'>{character.perception}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Ride</th>
                    <td className='p-auto'>{character.ride}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Stealth</th>
                    <td className='p-auto'>{character.stealth}</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export const ArmorTable = ({ character }) => (
    <div className='w-12/12'>
        <table className="table table-compact w-full">
            <thead>
                <tr>
                    <th>Armor Slot</th>
                    <th>Armor Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='pl-4'>Head</th>
                    <td className='p-auto'>{character.head}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Right arm</th>
                    <td className='p-auto'>{character.right_arm}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Left arm</th>
                    <td className='p-auto'>{character.left_arm}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Right leg</th>
                    <td className='p-auto'>{character.right_leg}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Left leg</th>
                    <td className='p-auto'>{character.left_leg}</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export const ProvidenceTable = ({ character }) => (
    <div className='w-12/12'>
        <table className="table table-compact w-full">
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='pl-4'>Fate</th>
                    <td className='p-auto'>{character.fate}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Fortune</th>
                    <td className='p-auto'>{character.fortune}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Resilience</th>
                    <td className='p-auto'>{character.resilience}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Resolve</th>
                    <td className='p-auto'>{character.resolve}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Motivation</th>
                    <td className='p-auto'>{character.motivation_value}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Corruption</th>
                    <td className='p-auto'>{character.corruption}</td>
                </tr>
            </tbody>
        </table>
        {/* {character.mutations ? <div className="ml-1 mt-3">
            <p><b>Mutations:</b> {character.mutations}</p>
        </div> : <div></div>} */}
        <div className="ml-1 mt-3 mb-1">
            <b>Mutations</b>
            <p className='text-sm whitespace-pre-wrap'>
                {character.mutations}
            </p>
        </div>
        <div className="ml-1 mb-1">
            <b>Short term ambitions</b>
            <p className='text-sm whitespace-pre-wrap'>
                {character.short_term_ambitions}
            </p>
        </div>
        <div className="ml-1 mb-1">
            <b>Long term ambitions</b>
            <p className='text-sm whitespace-pre-wrap'>
                {character.short_term_ambitions}
            </p>
        </div>
        <div className="ml-1 mb-1">
            <b>Psychology</b>
            <p className='text-sm whitespace-pre-wrap'>
                {character.psychology}
            </p>
        </div>
        <div className="ml-1 mb-1">
            <b>Secrets</b>
            <p className='text-sm whitespace-pre-wrap'>
                {character.secrets}
            </p>
        </div>
    </div>
)

export const BasicData = ({ character }) => (
    <div className='w-12/12'>
        <b>Background Story</b>
        <p className='text-sm italic whitespace-pre-wrap'>
            {character.background_story}
        </p>
        <div className='w-12/12'>
            <table className="mt-2 table table-compact w-full">
                <tbody>
                    <tr className=''>
                        <td className='pl-4'><b>Movement</b>&nbsp;{character.movement}</td>
                        <td className=''><b>Walk</b>&nbsp;{character.walk}</td>
                        <td className=''><b>Run</b>&nbsp;{character.run}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='w-12/12'>
            <table className="mt-2 table table-compact overflow-auto w-full">
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
        <div className='w-12/12'>
            <table className="mt-2 table table-compact w-full">
                <tbody>
                    <tr>
                        <th className='pl-4'>Species</th>
                        <td className='p-auto'>{character.species}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Age</th>
                        <td className='p-auto'>{character.age}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Height</th>
                        <td className='p-auto'>{character.height} feet</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Hair</th>
                        <td className='p-auto'>{character.hair}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Eyes</th>
                        <td className='p-auto'>{character.eyes}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Skin Color</th>
                        <td className='p-auto'>{character.skin_color}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Birthplace</th>
                        <td className='p-auto'>{character.birthplace}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Class</th>
                        <td className='p-auto'>{character.character_class}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Career</th>
                        <td className='p-auto'>{character.career}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Career Level</th>
                        <td className='p-auto'>{character.career_level}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Career Path</th>
                        <td className='p-auto'>{character.career_path.split(' ').slice(-3)}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Career Status</th>
                        <td className='p-auto'>{character.status}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Mother</th>
                        <td className='p-auto'>{character.mother}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Father</th>
                        <td className='p-auto'>{character.father}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Siblings</th>
                        <td className='p-auto'>{character.siblings}</td>
                    </tr>
                    <tr>
                        <th className='pl-4'>Couple</th>
                        <td className='p-auto'>{character.couple}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export const CharacteristicsTable = ({ character }) => (
    <div className='w-12/12'>
        <table className="table table-compact w-full">
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='pl-4'>Weapon Skill</th>
                    <td className='p-auto'>{character.weapon_skill}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Ballistic Skill</th>
                    <td className='p-auto'>{character.ballistic_skill}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Strength</th>
                    <td className='p-auto'>{character.strength}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Toughness</th>
                    <td className='p-auto'>{character.toughness}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Intelligence</th>
                    <td className='p-auto'>{character.intelligence}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Agility</th>
                    <td className='p-auto'>{character.agility}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Dexterity</th>
                    <td className='p-auto'>{character.dexterity}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Intelligence</th>
                    <td className='p-auto'>{character.intelligence}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Willpower</th>
                    <td className='p-auto'>{character.willpower}</td>
                </tr>
                <tr>
                    <th className='pl-4'>Fellowship</th>
                    <td className='p-auto'>{character.fellowship}</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export const InventoryTable = ({ characterItems, characterArmor, characterWeapons, characterSpells }) => (
    <div className='w-12/12'>
        <table className="table mb-2 table-compact w-full">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Enc</th>
                </tr>
            </thead>
            <tbody>
                {characterItems.map((item, i) => (
                    <tr key={`item_${i}`}>
                        <th className='pl-4'>{item.name}</th>
                        <td className='p-auto'>{item.encumbrance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <table className="table mb-2 table-compact w-full">
            <thead>
                <tr>
                    <th>Armor</th>
                    <th>Locations</th>
                    <th>Enc</th>
                    <th>AP</th>
                </tr>
            </thead>
            <tbody>
                {characterArmor.map((item, i) => (
                    <tr key={`armor_${i}`}>
                        <th className='pl-4'>{item.name}</th>
                        <td className='p-auto'>{item.locations}</td>
                        <td className='p-auto'>{item.encumbrance}</td>
                        <td className='p-auto'>{item.armor_points}</td>
                    </tr>
                )) || <div></div>}
            </tbody>
        </table>
        <table className="table table-compact w-full">
            <thead>
                <tr>
                    <th>Weapon</th>
                    <th>Group</th>
                    <th>Enc</th>
                    <th>Range</th>
                    <th>Damage</th>
                </tr>
            </thead>
            <tbody>
                {characterWeapons.map((item, i) => (
                    <tr key={`weapon_${i}`}>
                        <th className='pl-4'>{item.name}</th>
                        <td className='p-auto'>{item.group}</td>
                        <td className='p-auto'>{item.encumbrance}</td>
                        <td className='p-auto'>{item.weapon_range}</td>
                        <td className='p-auto'>{item.damage}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <table className="table table-compact w-full">
            <thead>
                <tr>
                    <th className='text-xs'>Spell</th>
                    <th className='text-xs'>TN</th>
                    <th className='text-xs'>RNG</th>
                    <th className='text-xs'>TRGT</th>
                    <th className='text-xs'>Time</th>
                    <th className='text-xs'>EFFECT</th>
                </tr>
            </thead>
            <tbody>
                {characterSpells.map((item, i) => (
                    <tr key={`spell_${i}`}>
                        <th className='pl-4'>{item.name}</th>
                        <td className='p-auto'>{item.tn}</td>
                        <td className='p-auto'>{item.spell_range}</td>
                        <td className='p-auto'>{item.target}</td>
                        <td className='p-auto'>{item.duration}</td>
                        <td className='p-auto'>{item.effect}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

export const TalentsTable = ({ character, characterTalents, characterAdvancedSkills }) => (
    <div className='w-12/12'>
        <table className="table mb-2 table-compact w-full overflow-x-auto">
            <thead>
                <tr>
                    <th>Talent</th>
                    <th>Times Taken</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {characterTalents.map((item, i) => (
                    <tr key={`talent_${i}`}>
                        <th className='pl-4'>{item.name}</th>
                        <td className='p-auto'>{item.times_taken}</td>
                        <td className='p-auto'>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <table className="table mb-2 table-compact w-full">
            <thead>
                <tr>
                    <th>Adv. Skill</th>
                    <th>Attr.</th>
                    <th>Bonus</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {characterAdvancedSkills.map((item, i) => (
                    <tr key={`skill_${i}`}>
                        <th className='pl-4 text-xs'>{item.name}</th>
                        <td className='p-auto'>{item.characteristic.slice(0, 3)}</td>
                        <td className='p-auto'>{item.value}</td>
                        <td className='p-auto'>{character[item.characteristic] + item.value}</td>
                    </tr>
                )) || <div></div>}
            </tbody>
        </table>
    </div>
)