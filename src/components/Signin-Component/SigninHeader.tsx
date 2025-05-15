import { Projector } from "lucide-react"
import Link from "next/link"
const SigninHeader = () => {
    return (
        <div className='h-fit w-full flex flex-col justify-center items-center'>
            <Link href={'/'}><Projector size={68} color="#ffffff" strokeWidth={2.25} /></Link>
            <h1 className='text-2xl font-semibold'>Sign in to WatchAlong</h1>
        </div>
    )
}

export default SigninHeader