import { CreatureCard } from '../components/Creatures'

import { getCreatureData, getCreatureTraitData } from '../lib/common';
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';


// functional component
const Bestiary = ({ creatureData, creatureTraitData }) => (
    <div className='bg-neutral-focus mb-2'>
        <div className='bg-neutral-focus'>
            {creatureData.map(creature => (
                <div className="m-2 mb-0 w-12/12 card bg-neutral text-neutral-content shadow-xl">
                    <div className="card-body p-2">
                        <CreatureCard creature={creature} creatureTraits={creatureTraitData.filter(trait => (creature.traits.includes(trait.uuid)))} />
                    </div>
                </div>))}
        </div>
    </div>
)

// prop func
const getServerSidePropsBase = async ({ req }) => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const { redirect, username, password, campaign } = getUnauthRedirect(req)
    // if (redirect !== false) { return { redirect } }

    const [creatureData, creatureTraitData] = await Promise.all([
        getCreatureData({ username, password, apiUrl }),
        getCreatureTraitData({ username, password, apiUrl }),
    ])

    return {
        props: {
            creatureData,
            creatureTraitData,
        }
    }
}

//exports
const getServerSideProps = withSessionSsr(getServerSidePropsBase)
export default Bestiary
export { getServerSideProps }