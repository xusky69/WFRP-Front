import { FunctionComponent } from 'react'
import { GiFeather, GiBookmarklet } from 'react-icons/gi'
import { processDate } from '../lib/common'

// props
export interface JournalProps {
    journalEntries: Array<{
        name: string,
        entry_text: string,
        creation_date: string,
    }>
}

// functional components
const JournalEntries: FunctionComponent<JournalProps> = ({ journalEntries }) => (
    <div className="m-2 w-12/12 card bg-neutral text-neutral-content shadow-xl">
        <div className="card-body p-1">
            <div tabIndex={0} className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title">
                    <h2 className="card-title">
                        <GiBookmarklet size="24" /> Party Journal
                    </h2>
                </div>
                <div className='collapse-content'>
                    {journalEntries.map((item, i) => (
                        <div key={"party_" + String(i)} className="mb-3 mx-0 w-12/12 card shadow-xl bg-base-100 text-neutral-content">
                            <div className="card-body p-5">
                                <h2 className="card-title text-base">
                                    <GiFeather size="28" />{item.name}
                                </h2>
                                <div className='text-xs italic'>
                                    {processDate(item.creation_date)}
                                </div>
                                <p className='italic text-sm'>
                                    {item.entry_text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)

// exports
export default JournalEntries