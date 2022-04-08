import { FunctionComponent } from 'react'

// props
type SnippetProps = {
    message: string, 
    children?: React.ReactNode
}

// functional component
const Snippet: FunctionComponent<SnippetProps> = ({ message, children}) => (
    <div>
        Snippet component
        {children}
    </div>
)

//exports
export default Snippet