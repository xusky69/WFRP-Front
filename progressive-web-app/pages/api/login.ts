import { NextApiRequest, NextApiResponse } from 'next'
import { withSessionRoute } from "../../lib/withSession";
const axios = require('axios');

async function loginRoute(req: NextApiRequest, res: NextApiResponse){
    try {
        console.log(req)
        const username = String(req.query.username)
        const password = String(req.query.password)
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await axios.get(apiUrl, { auth: { username: username, password: password} })
        // get user from database then:
        const user = {username: username, password: password}
        req.session.user = user
        await req.session.save();
        res.send({ ok: true });
    } catch (error) {
        res.status(403).send({message:'login error, please check your credentials'});
    }
}

export default withSessionRoute(loginRoute)