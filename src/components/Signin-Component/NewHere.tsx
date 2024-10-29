import Link from "next/link"

const NewHere = () => {
    return (
        <div className='h-fit w-full flex justify-center rounded-md p-5 border-2 items-center bg-black border-zinc-700'>
            <div className="h-fit w-full flex gap-1 justify-center items-center">
                <p>New to WatchAlong?</p>
                <Link className="text-blue-600 " href={'/signup'}>Register</Link>
            </div>
        </div>
    )
}

export default NewHere