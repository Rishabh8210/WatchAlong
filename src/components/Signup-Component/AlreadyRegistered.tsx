import Link from "next/link"

const AlreadyRegistered = () => {
    return (
        <div className='h-fit w-full md:w-2/5 flex justify-center rounded-md p-5 border-2 items-center bg-black border-zinc-700'>
            <div className="h-fit w-full flex gap-1 justify-center items-center text-white">
                <p>Already Registered?</p>
                <Link className="text-blue-700 font-semibold " href={'/signin'}>SignIn</Link>
            </div>
        </div>
    )
}

export default AlreadyRegistered