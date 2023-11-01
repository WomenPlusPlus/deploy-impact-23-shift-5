import {
    Avatar,
    Typography,
} from "@material-tailwind/react";



export function CandidateNavbar() {
    return (
        <div id="content" className="px-8 bg-transparent flex-grow flex-shrink flex-auto o">
            <div id="info" className="border-b border-grey-light h-24">
                <div className="flex justify-between flex-grow items-center border-b h-24">
                    <div className="flex">
                        <form>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">

                                <input type="search" id="default-search"
                                    className="block w-full p-4 pl-10 text-sm text-gray-900 border bg-gray-50 rounded-full" placeholder="Initiatives" />
                                <div className="absolute inset-y-2 right-4 flex items-center pl-3 pointer-events-none">
                                    <img src="./src/assets/candidates/Search.png" alt="" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex pr-5 mr-10">
                        <ul className="inline-flex text-black">
                            <li className=" p-2">
                                    <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
                                        <span className="sr-only">Open user menu</span>
                                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                    </button>
                                   {/* Dropdown menu */}
                                    <div id="dropdownAvatarName" className="z-10 hidden  bg-dark caret-violet-700 divide-y rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div className="font-medium ">Pro User</div>
                                            <div className="truncate">name@flowbite.com</div>
                                        </div>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                        </ul>
                                        <div className="py-2">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </div>
                                    </div>
                            </li>
                            <li className=" p-2">
                                <div>
                                    <Avatar src="./src/assets/candidates/EmilyPicture.png" alt="Picture" className="rounded-full  border-purple-70 border-1 h-5 w-5" />
                                </div>
                            </li>
                            <li className=" p-2">
                                <div>
                                    <Typography variant="small" color="gray" className="font-roboto">Emily</Typography>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidateNavbar