import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { withSessionRoute } from "../../lib/withSession";
import axios, { AxiosError } from 'axios'


type LoginRouteRequest = NextApiRequest & {session:any, query:any}

async function loginRoute(req: LoginRouteRequest, res: NextApiResponse) {
    try {
        console.log('QUERY IS' + JSON.stringify(req.body))
        const username: string = String(req.body.username)
        const password: string = String(req.body.password)
        const campaign: string = String(req.body.campaign)
        const apiUrl: string = String(process.env.NEXT_PUBLIC_API_URL)
        const response = await axios.get(apiUrl, { auth: { username: username, password: password } })
        const user = { username: username, password: password, campaign: campaign }
        req.session.user = user
        await req.session.save()
        res.send({ ok: true })

    } catch (error : any) {
        if(error.response){
            res.status(error.response.status).send({ detail: String(error.response.data.detail) });
        } else{
            res.status(500).send({ detail: String(error) });
        }
    }
}

export default withSessionRoute(loginRoute)