import Image from 'next/image'
import { GiCurledTentacle } from 'react-icons/gi'
import { CollapsableContent } from '../components/Common'

export const CreatureCard = ({ creature, creatureTraits }) => (
    <div>
        <div className="w-12/12 card bg-base-200 text-neutral-content shadow-xl mb-2">
            <div className="card-body p-3 pb-4">
                <div className='max-h-64 overflow-hidden rounded-lg bg-neutral'>
                    {/* <img
                        src={creature.creature_picture}
                        alt='campaign cover image'
                        className='object-scale-down w-screen'
                    /> */}
                    <Image
                        src={creature.creature_picture || '/static/img/user_placeholder.png'}   // not working (loading) on production server
                        alt={'creature image'}
                        layout='responsive'
                        width={512}
                        height={512}
                    />
                </div>
                <div className='col-span-2'>
                    <h2 className="card-title mb-0 pl-1">
                        {creature.name}
                    </h2>
                </div>
                <table className="table table-compact w-full ">
                    <thead>
                        <tr>
                            <th className='text-xs pr-0 pl-4'>M</th>
                            <th className='text-xs pr-0 pl-0'>WS</th>
                            <th className='text-xs pr-0 pl-0'>BS</th>
                            <th className='text-xs pr-0 pl-0'>S</th>
                            <th className='text-xs pr-0 pl-0'>T</th>
                            <th className='text-xs pr-0 pl-0'>Ini</th>
                            <th className='text-xs pr-0 pl-0'>A</th>
                            <th className='text-xs pr-0 pl-0'>D</th>
                            <th className='text-xs pr-0 pl-0'>Int</th>
                            <th className='text-xs pr-0 pl-0'>WP</th>
                            <th className='text-xs pr-0 pl-0'>FS</th>
                            <th className='text-xs pr-0 pl-0'>W</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-xs pr-0 pl-4'>{creature.movement}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.weapon_skill}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.ballistic_skill}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.strength}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.toughness}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.initiative}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.agility}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.dexterity}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.intelligence}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.willpower}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.fellowship}</td>
                            <td className='text-xs pr-0 pl-0'>{creature.max_wounds}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <CollapsableContent title={<div className='flex'><GiCurledTentacle size={28} /> &nbsp; Info </div>}>
            <div className='col-span-2'>
                <b>Description</b>
                <p className='text-sm italic whitespace-pre-wrap'>
                    {creature.description}
                </p>
            </div>
            {creatureTraits && (creatureTraits.length > 0) &&
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Trait</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {creatureTraits.map(trait => (
                            <tr>
                                <th className='p-auto'>{trait.name}</th>
                                <td className='p-auto'>{trait.value}</td>
                                <td className='p-auto'>{trait.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </CollapsableContent>
    </div>
)