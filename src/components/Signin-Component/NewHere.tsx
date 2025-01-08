import Link from "next/link"

const NewHere = () => {
    return (
        <div className='h-fit w-full sm:w-3/4 md:w-3/4 flex justify-center rounded-md p-5 border-2 items-center bg-black border-zinc-700 text-white'>
            <div className="h-fit w-full flex gap-1 justify-center items-center">
                <p>New to WatchAlong?</p>
                <Link className="text-blue-700 font-semibold " href={'/signup'}>Register</Link>
            </div>
        </div>
    )
}

export default NewHere