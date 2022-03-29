import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextApiHandler,
    NextApiRequest
} from "next";

const sessionOptions = {
    password: "complex_password_at_least_32_characters_long",
    cookieName: "myapp_cookiename",
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

export function getUnauthRedirect(req: NextApiRequest){
    if (req.session.user) {
        const username = req.session.user.username
        const password = req.session.user.password
        const campaign = req.session.user.campaign
        return {redirect: false, username, password, campaign}
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
        username: '',
        password: '',
        campaign: ''
      }
    }
  }