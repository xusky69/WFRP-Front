import { FunctionComponent, ReactElement } from 'react'
import {
    GiBroadsword,
    GiWarhammer,
    GiDwarfHelmet,
    GiBookmarklet,
    GiBeerStein,
    GiEvilMoon,
    GiSpikedDragonHead,
    GiDiceTwentyFacesTwenty
} from 'react-icons/gi'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { BiLogOut } from 'react-icons/bi'
import Link from 'next/link'

type IconProps = {
    icon: ReactElement,
    text: string
}

const SidebarIcon: FunctionComponent<IconProps> = ({ icon, text }) => {
    return (
        // <div className='relative m-0 flex items-center justify-center h-16 w-16 px-2 shadow-lg bg-neutral-focus text-pink-500 rounded-3xl
        //               hover:bg-pink-600 hover:text-white hover:rounded-xl 
        //                 transition-all duration-300 ease-linear group'>
        <div className='relative m-0 flex items-center justify-center h-16 w-16 px-2 shadow-lg bg-neutral-focus text-red-600 rounded-3xl
                      hover:bg-red-600 hover:text-white hover:rounded-xl 
                        transition-all duration-300 ease-linear group'>
            {icon}
            <span className=' absolute w-auto p-2 m-2 mx-4 min-w-max left-14 rounded-md shadow-md 
                           text-white bg-gray-900 text-xs font-bold transition-all duration-100 
                             scale-0 origin-left group-hover:scale-100 z-10'>
                {text}
            </span>
        </div>
    )
}

// props
type LayoutProps = {
    children?: React.ReactNode
    // userPicture?: string,
}

// functional component
const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
    <div data-theme="dark">
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-neutral text-neutral-content shadow-md">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                                </path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <Link href="/">
                            <a className="btn btn-ghost normal-case text-xl">
                                <GiWarhammer size={36} /> &nbsp; Warhammer RPG
                            </a>
                        </Link>
                    </div>
                    {/* <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li><a>Navbar Item 1</a></li>
                            <li><a>Navbar Item 2</a></li>
                        </ul>
                    </div> */}
                    <div className="flex pr-2">
                        <a className="avatar" href='/api/logout'>
                            <RiLogoutBoxRLine size={28} />
                            {/* <div className="w-10 mask mask-squircle bg-base-300">
                                <img src={'/static/img/user_placeholder.png'} alt='user avatar' className='mask mask-squircle' />
                            </div> */}
                        </a>
                    </div>
                </div>
                <div className='bg-neutral-focus overflow-y-auto h-screen'>
                    {children}
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu w-24 overflow-y-visible overflow-x-visible bg-neutral text-neutral-content">
                    <li>
                        <Link href="/">
                            <a className='pb-0 active:bg-neutral hover:bg-neutral'>
                                <SidebarIcon text='Campaign' icon={<GiBookmarklet size="36" />} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/party">
                            <a className='pb-0 active:bg-neutral hover:bg-neutral'>
                                <SidebarIcon text='Party' icon={<GiBeerStein size="36" />} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/character">
                            <a className='pb-0 active:bg-neutral hover:bg-neutral'>
                                <SidebarIcon text='Character' icon={<GiDwarfHelmet size="36" />} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/bestiary">
                            <a className='pb-0 active:bg-neutral hover:bg-neutral'>
                                <SidebarIcon text='Bestiary' icon={<GiSpikedDragonHead size="36" />} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/memories">
                            <a className='pb-0 active:bg-neutral hover:bg-neutral'>
                                <SidebarIcon text='Memories' icon={<GiEvilMoon size="36" />} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        {/* <Link href="/album"> */}
                        <a className='pb-0 active:bg-neutral hover:bg-neutral'>
                            <SidebarIcon text='Dice(WIP)' icon={<GiDiceTwentyFacesTwenty size="36" />} />
                        </a>
                        {/* </Link> */}
                    </li>
                    {/* <li>
                        <Link href="/combat">
                        <a className='pb-0 active:bg-neutral hover:bg-neutral'>
                            <SidebarIcon text='Combat' icon={<GiBroadsword size="36" />} />
                        </a>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    </div>
)

//exports
export default Layout