import Link from "next/link"
const SigninHeader = () => {
    return (
        <div className='h-fit w-full flex flex-col justify-center items-center'>
            <Link href={'/'}><img className='w-24' src="./Logo.png" alt="#logo"/></Link>
            <h1 className='text-2xl font-semibold'>Sign in to WatchAlong</h1>
        </div>
    )
}

export default SigninHeader