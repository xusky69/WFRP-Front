import { FunctionComponent } from 'react'; // importing FunctionComponent
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

// props
type DummyProps = {
    message : string 
}

// functional component
const Dummy: FunctionComponent<DummyProps> = ({message}) => (
    <div>
    <div>{ message }</div>
    <div>{process.env.NEXT_PUBLIC_API_URL}</div>
    </div>
)

// prop func
const getServerSideProps: GetServerSideProps = async () => {
    return {
        props:
            { message: 'hello world' }
    }
}

//exports
export default Dummy
export { getServerSideProps }