import { PeopleUrl } from '@/constants'
import { CampSiteProps } from '@/types'
import Image from 'next/image'

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampSiteProps) => {
  return (
    <div className={`h-full w-full min-w-275 ${backgroundImage} bg-cover bg-no-repeat bg-center lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className='flex flex-col items-start justify-between h-full p-6 lg:px-20 lg:py-10'>
        <div className='flex-center gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image
              src='/folded-map.svg'
              alt='folded-map'
              width={28}
              height={28}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>
        </div>

        <div className='flex-center gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PeopleUrl.map((url) => (
              <Image
                className='inline-block h-10 w-10 rounded-full'
                key={url}
                src={url}
                alt='person'
                width={52}
                height={52}
              />
            ))}
          </span>

          <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

export default CampSite