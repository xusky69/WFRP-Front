import Snippet from '../components/Snippet'
import { withSessionSsr, getUnauthRedirect } from '../lib/withSession';
import { getPartyData } from '../lib/common';

const PartyItem = ({ partyCharacter }) => (
  <div className="m-3 mb-0 w-12/12 card bg-neutral text-neutral-content shadow-xl">
    <div className="card-body p-5">
      <div className='grid grid-cols-3'>
        <div className="avatar col-span-1">
          <div className="w-32 mask mask-squircle bg-neutral-focus">
            <img src={partyCharacter.avatar} />
          </div>
        </div>
        <div className='pl-4 col-span-2'>
          <h2 className="card-title">
            {partyCharacter.name}
          </h2>
          <h3 className=''>
            {partyCharacter.career}
          </h3>
        </div>
      </div>
      <p className='italic text-sm' style={{ whiteSpace: "pre-wrap" }}>
        {partyCharacter.name}
      </p>
    </div>
  </div>
)

// functional component
const Party = ({ partyData }) => (
  <div className='bg-neutral-focus pb-4'>
    {partyData.map((item) =>
      <PartyItem partyCharacter={item} />)}
  </div>
)

// prop func
async function getServerSidePropsBase({ req }) {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const { redirect, username, password, campaign } = getUnauthRedirect(req)
  if (redirect !== false) { return { redirect } }

  const partyData = await getPartyData({ campaign, username, password, apiUrl })

  return {
    props: {
      partyData
    }
  }
}

//exports
const getServerSideProps = withSessionSsr(getServerSidePropsBase)
export default Party
export { getServerSideProps }