import axios from 'axios'
import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/router';

export default function Login() {

    const [state, setState] = useState({ error: '' })
    const router = useRouter()

    async function SendCredentials(event: MouseEvent) {
        event.preventDefault();
        const username = String(event.currentTarget.username.value)
        const password = String(event.currentTarget.password.value)
        const campaign = String(event.currentTarget.campaign.value)
        if (username.length > 0 && password.length > 0 && campaign.length > 0) {
            console.log(username)
            console.log(password)
            let response
            try{
                response = await axios.get('/api/login', { params: { username, password, campaign} })
                router.push('/')
            }catch(error){
                console.log(error)
                setState({ ...state, error: `${error.message}. Please check your login credentials`})
            }
        } else {
            setState({ ...state, error: 'please fill the required fields' })
        }
    }

    return (
        <div className='grid place-items-center mt-32 sm:mt-8'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <form className="card-body" onSubmit={SendCredentials}>
                    <h2 className="card-title">Login</h2>
                    {state.error &&
                        <div className="alert alert-error shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{state.error}</span>
                            </div>
                        </div>}
                    <p>Enter your login credentials:</p>
                    <div>
                        <input type="text" placeholder="Username" name="username" className="input input-bordered w-full max-w-xs"></input>
                    </div>
                    <div className='pt-2'>
                        <input type="text" placeholder="Password" name="password" className="input input-bordered w-full max-w-xs"></input>
                    </div>
                    <div className='pt-2'>
                        <input type="text" placeholder="Campaign id" name="campaign" className="input input-bordered w-full max-w-xs"></input>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
