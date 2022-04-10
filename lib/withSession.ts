import { withIronSessionApiRoute, withIronSessionSsr} from "iron-session/next";
import {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextApiHandler,
    NextApiRequest
} from "next";

const sessionOptions = {
    password: "POgV0whwtnKB5k8RYpESvc6kJTi8GbWg",
    cookieName: "wfrp_session",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};

export function withSessionRoute(handler: NextApiHandler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export function withSessionSsr<
    P extends { [key: string]: unknown } = { [key: string]: unknown },
    >(
        handler: (
            context: GetServerSidePropsContext,
        ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) {
    return withIronSessionSsr(handler, sessionOptions);
}

type NextIronRequest = NextApiRequest & { session: {user: {username:string, password:string, campaign:string}} };

export function getUnauthRedirect(req: NextIronRequest){
    const username = req.session.user.username
    const password = req.session.user.password
    const campaign = req.session.user.campaign
    return {redirect: false, username, password, campaign}
    // if (req.session.user) {
    //     const username = req.session.user.username
    //     const password = req.session.user.password
    //     const campaign = req.session.user.campaign
    //     return {redirect: false, username, password, campaign}
    // } else {
    //   return {
    //     redirect: {
    //       permanent: false,
    //       destination: "/login",
    //     },
    //     username: '',
    //     password: '',
    //     campaign: ''
    //   }
    // }
  }