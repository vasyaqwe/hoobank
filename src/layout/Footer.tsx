import logo from '../assets/logo-large.svg'
import copyrightIcon from '../assets/copyright.svg'
import { ReactComponent as Instagram } from '../assets/instagram.svg'
import { ReactComponent as Facebook } from '../assets/facebook.svg'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'

const data = [
    { title: 'Useful Links', list: ['Content', 'How It Works', 'Create', 'Explore', 'Terms & Services'] },
    { title: 'Community', list: ['Help Center', 'Suggestions', 'Blog', 'Newsletters'] },
    { title: 'Partners', list: ['Our Partners', 'Become a Partner'] },
]

export const Footer = () => {
    return (
        <footer className='mt-20 md:mt-30 lg:mt-40 px-7 max-w-7xl mx-auto grid'>
            <div className='pb-7 flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-24 xl:gap-32'>
                <div className='grid gap-6 lg:gap-0 max-w-xs'>
                    <img className='xl:ml-[-27px]' src={logo} alt="HooBank logo" />
                    <p className='md:text-lg'>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className='flex flex-wrap gap-12 lg:justify-between flex-1'>
                    {data.map(item => (
                        <div key={item.title}>
                            <h4 className='text-white text-lg mb-4'>{item.title}</h4>
                            <ul className='grid gap-3'>
                                {item.list.map(listItem => (
                                    <li key={listItem}>
                                        <a className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-accent-100 to-accent-700'
                                            href="#">{listItem}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-7 flex flex-col gap-5 md:gap-0 md:items-center md:flex-row md:justify-between border-t border-t-neutral-800'>
                <p className='md:text-lg'><span className='font-accent'>Copyright </span>
                    <img className='inline mx-2' src={copyrightIcon} alt={'copyright symbol'} />
                    {" "}2023 HooBank. All Rights Reserved.
                </p>

                <ul className='flex items-center gap-5'>
                    <li><a href="#"><Instagram className='social' /></a></li>
                    <li><a href="#"><Facebook className='social' /></a></li>
                    <li><a href="#"><Twitter className='social' /></a></li>
                    <li><a href="#"><Linkedin className='social' /></a></li>
                </ul>
            </div>
        </footer>
    )
}
