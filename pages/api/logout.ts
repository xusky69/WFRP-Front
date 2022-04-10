import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/withSession";

function logoutRoute(req: NextApiRequest, res : NextApiResponse) {
    // req.session.destroy();
    res.redirect('/login')
}

export default withSessionRoute(logoutRoute);