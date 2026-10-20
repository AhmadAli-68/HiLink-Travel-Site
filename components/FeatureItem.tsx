import { FeatureItemProps } from '@/types'
import Image from 'next/image'

const FeatureItem = ({ title, icon, variant, description }: FeatureItemProps) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className={`rounded-full p-4 lg:p-7 bg-${variant}-50`}>
        <Image
          src={icon}
          alt='feature-icon'
          width={28}
          height={28}
        />
      </div>

      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>
        {title}
      </h2>

      <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-7.5 lg:bg-none'>
        {description}
      </p>
    </li>
  )
}

export default FeatureItem