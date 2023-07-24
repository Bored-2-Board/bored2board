import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <Link href={'/landing'}>
      <div className='button'>
        hello world
      </div>
    </Link>
  )
}
