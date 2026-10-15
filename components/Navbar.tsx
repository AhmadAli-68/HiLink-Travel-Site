import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='relative max-container padding-container py-5 flex-between z-30'>
      <Link href='/'>
        <Image
          src='/hilink-logo.svg'
          alt='logo'
          width={74}
          height={29}
        />
      </Link>

      <ul className='hidden lg:flex gap-12 h-full'>
        {NavLinks.map(({ key, href, label }) => (
          <Link
            key={key}
            href={href}
            className='regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 hover:font-bold transition-all'
          >
            {label}
          </Link>
        ))}
      </ul>

      <div className='lg:flex-center hidden'>
        <Button
          type='button'
          title='Login'
          icon='/user.svg'
          variant='btn-dark-green'
        />
      </div>

      {/* Mobile Menu */}
      <Image
        src='/menu.svg'
        alt='menu'
        width={32}
        height={32}
        className='inline-block lg:hidden'
      />
    </nav>
  )
}

export default Navbar