import { NextApiRequest, NextApiResponse } from 'next'
import { withSessionRoute } from "../../lib/withSession";
import axios, { AxiosError } from 'axios'

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    try {

        const username: string = String(req.query.username)
        const password: string = String(req.query.password)
        const campaign: string = String(req.query.campaign)
        const apiUrl: string = String(process.env.NEXT_PUBLIC_API_URL)
        const response = await axios.get(apiUrl, { auth: { username: username, password: password } })

        const user = { username: username, password: password, campaign: campaign }
        req.session.user = user
        await req.session.save();
        res.send({ ok: true });

    } catch (error : Error | AxiosError) {
        res.status(error.response.status).send({ detail: String(error.response.data.detail) });
    }
}

export default withSessionRoute(loginRoute)