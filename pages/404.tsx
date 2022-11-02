
import Link from 'next/link'

export default function FourOhFour() {
    return <div className='flex flex-col'>
        <span className='text-black text-[20px]'>404 - sadasdaPage Not Found</span>
        <Link href="/">
            <span className='text-black'>
                Go back home
            </span>
        </Link>
    </div>
}