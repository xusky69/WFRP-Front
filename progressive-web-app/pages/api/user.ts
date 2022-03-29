// pages/api/user.ts
import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/withSession";

function userRoute(req: NextApiRequest, res: NextApiResponse) {
    if (req.session.user) {
        res.send({ user: req.session.user });
    }
    res.redirect('/login')
}

export default withSessionRoute(userRoute)