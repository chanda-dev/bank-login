import { Head, Link } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    balance,
    savings,
}) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-300 text-black/50">
                <div className="relative flex flex-col selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full ">
                        <header>
                            <nav>
                                {auth.user ? (
                                    <div className="flex justify-around items-center bg-white shadow-sm p-5">
                                        <div>
                                            <Link
                                                href={route("welcome")}
                                                className=" text-black font-bold text-[26px]"
                                            >
                                                Banking
                                            </Link>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-black dark:focus-visible:ring-white">
                                                <p>Home</p>
                                            </div>
                                            <div className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-black dark:focus-visible:ring-white">
                                                <p>About</p>
                                            </div>
                                            <div className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-black dark:focus-visible:ring-white">
                                                <p>Logout</p>
                                            </div>
                                        </div>
                                        <div>
                                            <form
                                                method="POST"
                                                action={route("logout")}
                                            >
                                                <input
                                                    type="hidden"
                                                    name="_token"
                                                    value={auth.csrfToken}
                                                />
                                                <button
                                                    type="submit"
                                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-black dark:focus-visible:ring-white bg-gray-400"
                                                >
                                                    Log out
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6 mx-5 flex">
                            <div className=" w-[40%] h-ful">
                                <div className="bg-white rounded-[12px] h-auto w-full p-5 shadow-sm">
                                    <div className=" text-black font-bold text-[16px]">
                                        <p>Your finanicial overview</p>
                                    </div>
                                    <div className="bg-black w-full h-[2px]"></div>
                                    <div className=" flex flex-col justify-center ">
                                        <p className="my-4 font-bold text-black">
                                            Your finanicial overview
                                        </p>
                                        <p className="my-4 font-bold text-black">
                                            Transaction
                                        </p>
                                        <p className="my-4 font-bold text-black">
                                            Settings
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[60%] h-full ml-2">
                                <div className="bg-white rounded-[12px] h-screen w-full p-5 shadow-sm">
                                    <div className=" text-black font-bold text-[26px]">
                                        <p>Bank Service</p>
                                    </div>
                                    <div className="bg-black w-full h-[2px]"></div>
                                    <div
                                        className="flex justify-around
                                    "
                                    >
                                        <div className="w-[250px]">
                                            <p className="my-5 font-bold text-black">
                                                Account and Card
                                            </p>
                                            <div className="bg-black w-full h-[2px]"></div>
                                        </div>
                                        <div className="w-[250px] font-bold text-black">
                                            <p className="my-5">Balance</p>
                                            <div className="bg-black w-full h-[2px]"></div>
                                            <div className="bg-white rounded-md shadow-md p-5">
                                                <div>
                                                    <p>Total Balance:</p>
                                                </div>
                                                <div>
                                                    <p>${balance}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[250px] font-bold text-black">
                                            <p className="my-5">Saving</p>
                                            <div className="bg-black w-full h-[2px]"></div>
                                            <div className="bg-white rounded-md shadow-md p-5">
                                                <div>
                                                    <p>Total Saving:</p>
                                                </div>
                                                <div>
                                                    <p>${savings}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
