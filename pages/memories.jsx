import { getMemoriesData } from '../lib/common';
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import { MemoryCard } from '../components/Memories';
import { GiWarhammer } from 'react-icons/gi'

// functional component
const Memories = ({ memoriesData }) => (
    <div className='bg-neutral-focus mb-2'>
        {/* <GiWarhammer size={500}/> */}
        <div className='bg-neutral-focus'>
            {memoriesData.map((memory,i) => (
                <div key={`m${i}`} className="m-2 w-12/12 card bg-neutral text-neutral-content shadow-xl">
                    <div className="card-body p-2">
                        <MemoryCard memory={memory} />
                    </div>
                </div>))}
        </div>
    </div>
)

// prop func
const getServerSidePropsBase = async ({ req }) => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const { redirect, username, password, campaign } = getUnauthRedirect(req)
    if (redirect !== false) { return { redirect } }

    const memoriesData = await getMemoriesData({ campaign, username, password, apiUrl })

    return {
        props: {
            memoriesData,
        }
    }
}

//exports
const getServerSideProps = withSessionSsr(getServerSidePropsBase)
export default Memories
export { getServerSideProps }