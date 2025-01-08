import Link from "next/link"
const SignupHeader = () => {
    return (
        <div className='h-fit w-full flex flex-col justify-center items-center'>
            <Link href={'/'}><img className='w-20' src="./Logo.png" alt="#logo"/></Link>
            <h1 className='text-2xl font-semibold'>Register to WatchAlong</h1>
        </div>
    )
}

export default SignupHeader