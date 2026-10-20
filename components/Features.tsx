import { features } from '@/constants'
import Image from 'next/image'
import FeatureItem from './FeatureItem'

const Features = () => {
  return (
    <section className='flex-center flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative w-full flex justify-end'>
        <div className='flex flex-1 lg:min-h-225'>
          <Image
            src='/phone.png'
            alt='phone'
            width={440}
            height={1000}
            className='feature-phone'
          />
        </div>

        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image
              src='/camp.svg'
              alt='camp'
              width={50}
              height={50}
              className='absolute -left-1.25 -top-7 w-10 lg:w-12.5'
            />
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div>

          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
            {features.map((feat) => (
              <FeatureItem
                key={feat.title}
                title={feat.title}
                icon={feat.icon}
                variant={feat.variant}
                description={feat.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features