import Image from 'next/image'
import { FunctionComponent } from 'react'

interface CampaignProps {
    campaignData: {
        master: string
        name: string,
        cover_image: string,
        description: string
        creation_date: string,
    }
}

const Campaign: FunctionComponent<CampaignProps> = ({ campaignData }) => {
    return (
        <div className="m-2 mb-0 w-12/12 card bg-neutral text-neutral-content shadow-xl">
            <div className='h-64 overflow-hidden bg-base-100'>
                <img
                    src={campaignData.cover_image}
                    alt='campaign cover image'
                    className='object-scale-down w-screen'
                />
                {/* <Image
                    src={campaignData.cover_image}   // not working (loading) on production server
                    alt={'Campaign cover image'}
                    layout='responsive'
                    width={1920}
                    height={1080}
                /> */}
            </div>
            <div className="card-body p-4">
                <h2 className="card-title">
                    {campaignData.name}
                </h2>
                <div className='text-sm flex flex-row'>
                    Dungeon master:&nbsp;<b>{campaignData.master}</b>
                </div>
                <p className='italic text-sm whitespace-pre-wrap'>
                    {campaignData.description}
                </p>
            </div>
        </div>
    )
}

export default Campaign


