import { GiCurledTentacle } from 'react-icons/gi'
import { CollapsableContent } from '../components/Common'

export const CreatureCard = ({ creature, creatureTraits }) => (
    <div>
        <div className="w-12/12 card bg-base-200 text-neutral-content shadow-xl mb-2">
            <div className="card-body p-3 pb-4">
                <div className='max-h-64 overflow-hidden rounded-lg bg-neutral'>
                    <img
                        src={creature.creature_picture}
                        alt='campaign cover image'
                        className='object-scale-down w-screen'
                    />
                </div>
                <div className='col-span-2'>
                    <h2 className="card-title mb-1">
                        {creature.name}
                    </h2>
                </div>
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th className='text-xs'>M</th>
                            <th className='text-xs'>WS</th>
                            <th className='text-xs'>BS</th>
                            <th className='text-xs'>S</th>
                            <th className='text-xs'>T</th>
                            <th className='text-xs'>Ini</th>
                            <th className='text-xs'>A</th>
                            <th className='text-xs'>D</th>
                            <th className='text-xs'>Int</th>
                            <th className='text-xs'>WP</th>
                            <th className='text-xs'>FS</th>
                            <th className='text-xs'>W</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-xs'>{creature.movement}</td>
                            <td className='text-xs'>{creature.weapon_skill}</td>
                            <td className='text-xs'>{creature.ballistic_skill}</td>
                            <td className='text-xs'>{creature.strength}</td>
                            <td className='text-xs'>{creature.toughness}</td>
                            <td className='text-xs'>{creature.initiative}</td>
                            <td className='text-xs'>{creature.agility}</td>
                            <td className='text-xs'>{creature.dexterity}</td>
                            <td className='text-xs'>{creature.intelligence}</td>
                            <td className='text-xs'>{creature.willpower}</td>
                            <td className='text-xs'>{creature.fellowship}</td>
                            <td className='text-xs'>{creature.max_wounds}</td>
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