"use client"
import { useState } from "react"

const SigninMain = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='min-h-[40vh] w-full sm:w-3/4 md:w-3/4 p-5 rounded-md border-2 flex justify-center items-center bg-zinc-900 border-zinc-700'>
            <form className="h-fit w-full flex flex-col justify-center items-center gap-5 text-white">
                <div className="h-fit w-full flex justify-center items-center flex-col">
                    <p className="px-4 md:px-6 w-full font-semibold">Email</p>
                    <input
                        type="email"
                        className="h-11 w-11/12 text-gray-300 px-3 rounded-lg bg-black bg-opacity-45 border-2 border-zinc-600 outline-none focus:border-blue-600 placeholder:opacity-50"
                        name="email"
                        value={email}
                        placeholder="example@domain.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="h-fit w-full flex justify-center items-center flex-col">
                    <p className="px-4 md:px-6 w-full font-semibold">Password</p>
                    <input
                        type="password"
                        className="h-11 w-11/12 px-3 text-gray-300 rounded-lg bg-black bg-opacity-45 border-2 border-zinc-600 outline-none focus:border-blue-600 placeholder:opacity-50"
                        name="password"
                        value={password}
                        placeholder="example123"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="h-fit w-full flex justify-center items-center flex-col">
                    <button className="bg-green-600 h-fit p-1.5 w-5/12 rounded-lg text-lg font-semibold border-2 border-green-600 hover:text-green-500 hover:bg-transparent hover:border-zinc-700 transition-all">SignIn</button>
                </div>
            </form>
        </div>
    )
}

export default SigninMain