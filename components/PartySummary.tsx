import Image from 'next/image'
import { FunctionComponent } from 'react'
import { GiAxeSword } from 'react-icons/gi'

interface PartySummaryProps {
    partyData: Array<{
        user: string,
        character_avatar: string,
        name: string,
        species: string,
        career: string
    }>
}

const PartySummary: FunctionComponent<PartySummaryProps> = ({ partyData }) => {
    return (
        <div className="m-2 mb-0 w-12/12 card bg-neutral text-neutral-content shadow-xl">
            <div className="card-body p-2 overflow-x-hidden">
                <h2 className="card-title mt-1 ml-2">
                    <GiAxeSword size="24" /> Party Summary
                </h2>

                <table className="table table-compact m-2 w-12/12">
                    <tbody>
                        {partyData.map((item, i) => (
                            <tr key={"journal_" + String(i)}>
                                <td className='flex'>
                                    <div className="pl-1 avatar">
                                        <div className="w-8 mask mask-squircle bg-base-200">
                                            {/* <img className="" src={item.character_avatar || '/static/img/user_placeholder.png'} /> */}
                                            <Image
                                                src={item.character_avatar || '/static/img/user_placeholder.png'}   // not working (loading) on production server
                                                alt={'Campaign cover image'}
                                                layout='responsive'
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <th className="text-xs">{item.name}</th>
                                <td className="text-xs">{item.species}</td>
                                <td className="text-xs">{item.career}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default PartySummary
