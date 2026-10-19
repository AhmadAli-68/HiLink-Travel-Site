import CampSite from './CampSite'

const Camp = () => {
  return (
    <section className='border-2 border-green-500 2xl:max-container relative flex py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-85 w-full overflow-x-auto lg:h-100 xl:h-160'>
        <CampSite
          backgroundImage='bg-camp-img-1'
          title='Putuk Truno Camp'
          subtitle='Prigen, Pasuruan'
          peopleJoined='50+ Joined'
        />

        <CampSite
          backgroundImage='bg-camp-img-2'
          title=''
          subtitle=''
          peopleJoined=''
        />
      </div>
    </section>
  )
}

export default Camp