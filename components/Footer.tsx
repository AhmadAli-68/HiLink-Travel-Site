import { FooterContactInfo, FooterLinks, Socials } from '@/constants'
import { FooterColumnProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex-center mb-24'>
      <div className='padding-container max-container w-full flex flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link
            href='/'
            className='mb-10'
          >
            <Image
              src='/hilink-logo.svg'
              alt='logo'
              width={74}
              height={29}
            />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FooterLinks.map((cols) => (
              <FooterColumn key={cols.id} title={cols.title}>
                <ul className='flex flex-col gap-4 regular-14 text-gray-30'>
                  {cols.links.map((link) => (
                    <Link key={link} href='/'>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FooterContactInfo.title}>
                {FooterContactInfo.links.map((link) => (
                  <Link
                    key={link.id}
                    href='/'
                    className='flex gap-4 md:flex-col lg:flex-row'
                  >
                    <p className='whitespace-nowrap'>
                      {link.label}:
                    </p>

                    <p className='medium-14 whitespace-nowrap text-blue-70'>
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={Socials.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'>
                  {Socials.links.map((link) => (
                    <Link key={link} href='/' >
                      <Image
                        src={link}
                        alt='logo'
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border-[0.5px] border-gray-20' />

        <p className='regular-14 w-full text-center text-gray-30'>
          2026 @Hilink. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>
        {title}
      </h4>
      {children}
    </div>
  )
}

export default Footer