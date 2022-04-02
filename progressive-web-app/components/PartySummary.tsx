import { FunctionComponent } from 'react'
import { GiAxeSword } from 'react-icons/gi'

interface PartySummaryProps {
    partyData: Array<{
        user: string,
        avatar: string,
        name: string,
        species: string,
        career: string
    }>
}

const PartySummary: FunctionComponent<PartySummaryProps> = ({ partyData }) => {
    return (
        <div className="m-3 mb-0 w-12/12 card bg-neutral text-neutral-content shadow-xl">
            <div className="card-body p-5 overflow-x-hidden">
                <h2 className="card-title">
                    <GiAxeSword size="24" /> Party Summary
                </h2>
                
                <table className="table table-compact w-12/12">
                    <tbody>
                        {partyData.map((item, i) => (
                            <tr key={"journal_" + String(i)}>
                                <td className='flex'>
                                    <div className="pl-1 avatar">
                                        <div className="w-8 mask mask-squircle bg-base-200">
                                            <img className="" src={item.avatar || '/static/img/user_placeholder.png'} />
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
