import { CampSiteProps } from '@/types'

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampSiteProps) => {
  return (
    <div className={`h-full w-full min-w-275 ${backgroundImage} bg-cover bg-center`}>

    </div>
  )
}

export default CampSite