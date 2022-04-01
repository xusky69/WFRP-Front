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
            <div className="card-body p-5">
                <h2 className="card-title">
                    <GiAxeSword size="24" /> Party summary
                </h2>
                <div>
                    <table className="table table-compact w-full">
                        <tbody>
                            {partyData.map((item) => (
                                <tr>
                                    <td className='flex'>
                                        <div className="pl-4 avatar">
                                            <div className="w-8 mask mask-squircle">
                                                <img src={item.avatar || '/static/img/user_placeholder.png'} />
                                            </div>
                                        </div>
                                    </td>
                                    <th>{item.name}</th>
                                    <td>{item.species}</td>
                                    <td>{item.career}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default PartySummary
