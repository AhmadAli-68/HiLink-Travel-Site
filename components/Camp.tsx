import Image from 'next/image'
import CampSite from './CampSite'

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex items-start justify-start gap-8 h-85 w-full overflow-x-auto lg:h-100 xl:h-160'>
        <CampSite
          backgroundImage='bg-camp-img-1'
          title='Putuk Truno Camp'
          subtitle='Prigen, Pasuruan'
          peopleJoined='50+ Joined'
        />

        <CampSite
          backgroundImage='bg-camp-img-2'
          title='Mountain View Camp'
          subtitle='Somewhere in the Wilderness'
          peopleJoined='70+ Joined'
        />
      </div>

      <div className='flex-end mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-125 xl:max-w-183.5 rounded-3xl xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden'>
          <h2 className='text-white regular-24 md:regular-32 2xl:regular-64 capitalize'>
            <strong>Feeling Lost</strong> and not knowing the way?
          </h2>

          <p className='mt-5 text-white regular-14 xl:regular-16'>
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That&apos;s why we are here for those of you who want to start an adventure.
          </p>

          <Image
            src='/quote.svg'
            alt='quote'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  )
}

export default Camp