import { ButtonProps } from '@/types'
import Image from 'next/image'

// here variant is the className, that is being applied to the element.

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex-center gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className='bold-16 whitespace-nowrap'>
        {title}
      </label>
    </button>
  )
}

export default Button