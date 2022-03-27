import { FunctionComponent } from 'react'
import Layout from "../components/Layout"

// props
type Props = {
    message: string, 
}

// functional view
const Home: FunctionComponent<Props> = ({ message}) => (
  <Layout message="hello world">
    <p>Children 1</p>
    <p>Children 2</p>
    <p>Children 3</p>
  </Layout>
)

//exports
export default Home