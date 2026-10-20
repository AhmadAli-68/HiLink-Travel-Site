import Image from 'next/image'
import Button from './Button'

const GetApp = () => {
  return (
    <section className='flex-center flex-col w-full pb-25'>
      <div className='get-app'>
        <div className='z-20 w-full flex flex-1 flex-col items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get for Free Now!</h2>
          <p className='regular-16 text-gray-10'>Available on iOS and Android, Download now!</p>

          <div className='flex flex-col gap-3 w-full whitespace-nowrap xl:flex-row'>
            <Button
              type='button'
              title='App Store'
              icon='/apple.svg'
              variant='btn-white'
              full
            />

            <Button
              type='button'
              title='Google Play'
              icon='/android.svg'
              variant='btn-dark-green-outline'
              full
            />
          </div>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <Image
            src='/phones.png'
            alt='phones'
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp