import Image from 'next/image';
import { processDate } from '../lib/common';

export const MemoryCard = ({ memory }) => (
    <div>
        <div className="w-12/12 card bg-base-200 text-neutral-content shadow-xl">
            <div className="card-body p-3 pb-4">
                <div className='overflow-hidden rounded-lg bg-neutral max-h-64'>
                    <Image
                        src={memory.memory_picture}   // not working (loading) on production server
                        alt={'Memory image'}
                        layout='responsive'
                        width={512}
                        height={512}
                    />
                    {/* <img
                        src={memory.memory_picture}
                        alt='campaign cover image'
                        className='object-scale-down w-screen'
                    /> */}
                </div>
                <div className='col-span-2'>
                    <b>{processDate(memory.creation_date).slice(0, 10)}</b>
                    <p className='whitespace-pre-wrap'>
                        {memory.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
)