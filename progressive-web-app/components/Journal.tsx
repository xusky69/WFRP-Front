import { FunctionComponent } from 'react'
import { GiFeather} from 'react-icons/gi'
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
    <div tabIndex={0} className="collapse collapse-arrow bg-neutral-focus text-neutral-content ">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-neutral-content">
            Journal Entries
        </div>
        <div className='collapse-content'>
            {journalEntries.map((item, i) => (
                <div key={i} className="mb-3 mx-0 w-fit card shadow-xl bg-neutral text-neutral-content">
                    <div className="card-body p-5">
                        <h2 className="card-title">
                            <GiFeather size="28" />{item.name}
                        </h2>
                        <div className='text-sm italic'>
                            {processDate(item.creation_date)}
                        </div>
                        <p className='italic'>
                            {item.entry_text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

// exports
export default JournalEntries