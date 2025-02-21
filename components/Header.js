import Image from 'next/image'
import logo from '@/public/logo.jpeg'


export default function Header() {
  return (
    <Image src={logo} alt=''/>

  )
}