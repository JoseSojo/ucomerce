"use location"

import { Cog, Menu } from "lucide-react";

export function DashboardNavbar({openOrClose,openModal}:{openOrClose:() => void, openModal:() => void}) {

    return (
        <nav
            className={`rounded-xl transition-all top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5`}
        >
            <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center px-4">
                <button
                    className="p-3 rounded-lg border border-[#72AFC1] text-[#72AFC1] hover:bg-[#72AFC1] hover:text-white duration-200"
                    onClick={openOrClose}
                >
                    <Menu className="h-5 w-5 text-blue-gray-500" />
                </button>
                <div className="flex items-center">
                    <div className="mr-auto md:mr-4 md:w-56">
                        {/* <input placeholder="Search" className="border border-[#72AFC1] placeholder:text-[#72AFC1] focus:outline-none text-gray-600 rounded-lg p-2" /> */}
                    </div>

                    <button
                        className="hidden p-3 rounded-lg border border-[#72AFC1] text-[#72AFC1] hover:bg-[#72AFC1] hover:text-white duration-200"
                        onClick={openModal}
                    >
                        <Cog className="h-5 w-5 text-blue-gray-500" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default DashboardNavbar;
