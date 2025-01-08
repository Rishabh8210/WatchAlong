"use client"
import { useState } from "react"

const SignupMain = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <div className='min-h-[40vh] w-full sm:w-3/4 md:w-3/4 p-5 rounded-md border-2 flex justify-center items-center bg-zinc-900 border-zinc-700'>
            <form className="h-fit w-full flex flex-col justify-center items-center gap-3 text-white">

                <div className="h-fit w-full flex justify-center items-center flex-col">
                    <p className="px-4 md:px-6 w-full font-semibold">Name</p>
                    <input
                        type="text"
                        className="h-10 w-11/12 text-gray-300 px-3 rounded-lg bg-black bg-opacity-45 border-2 border-zinc-600 outline-none focus:border-blue-600 placeholder:opacity-50"
                        name="name"
                        value={name}
                        placeholder="John Doe"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="h-fit w-full flex justify-center items-center flex-col">
                    <p className="px-4 md:px-6 w-full font-semibold">Email</p>
                    <input
                        type="email"
                        className="h-10 w-11/12 text-gray-300 px-3 rounded-lg bg-black bg-opacity-45 border-2 border-zinc-600 outline-none focus:border-blue-600 placeholder:opacity-50"
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
                        className="h-10 w-11/12 px-3 text-gray-300 rounded-lg bg-black bg-opacity-45 border-2 border-zinc-600 outline-none focus:border-blue-600 placeholder:opacity-50"
                        name="password"
                        value={password}
                        placeholder="example123"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="h-fit w-full flex justify-center items-center flex-col">
                    <p className="px-4 md:px-6 w-full font-semibold">Confirm password</p>
                    <input
                        type="password"
                        className="h-10 w-11/12 px-3 text-gray-300 rounded-lg bg-black bg-opacity-45 border-2 border-zinc-600 outline-none focus:border-blue-600 placeholder:opacity-50"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="example123"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="h-fit w-full flex justify-center items-center flex-col pt-2">
                    <button className="bg-green-600 h-fit p-1.5 w-5/12 rounded-lg text-lg font-semibold hover:text-green-600 hover:bg-transparent hover:border-2 border-zinc-700">Register</button>
                </div>
            </form>
        </div>
    )
}

export default SignupMain