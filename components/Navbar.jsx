import Image from "next/image";
import logo from "@/assets/images/logo.png";
import profileDefault from "@/assets/images/profile.png";
import notification from "@/assets/icons/notification.svg"
import hamburger from "@/assets/icons/hamburger.svg"

const Navbar = () => {
    return (
        <nav className="bg-blue-700 border-b border-blue-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu butto */}
                        <button
                            type="button"
                            id="mobile-dropdown-button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <Image src={hamburger} />
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        {/* Logo */}
                        <a
                            href="/"
                            className="flex flex-shrink-0 items-center"
                        >
                            <Image className="h-10 w-auto" src={logo} alt="PropertyRental" />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">PropertyRental</span>
                        </a>
                        {/* Desktop Menu Hidden below md screens */}
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-2">
                                <a
                                    href="/"
                                    className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >
                                    Home
                                </a>
                                <a
                                    href="/properties"
                                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >
                                    Properties
                                </a>
                                <a
                                    href="/properties/add"
                                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >
                                    Add Property
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Menu (Logged Out) */}
                    <div className="hidden md:block md:ml-6">
                        <div className="flex items-center">
                            <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                                <i className="fa-brands fa-google text-white mr-2"></i>
                                <span>Login or Register</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side Menu (Logged In) */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                        <a href="/messages" className="relative group">
                            <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <Image src={notification}/>
                            </button>
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                2{/* Replace with the actual number of notifications */}
                            </span>
                        </a>
                        {/* Profile dropdown button */}
                        <div className="relative ml-3">
                        <div>
                            <button
                                type="button"
                                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                id="user-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">Open user menu</span>
                                <Image className="h-8 w-8 rounded-full" src={profileDefault} alt="" />
                            </button>
                        </div>

                        {/* Profile dropdown */}
                        <div
                            id="user-menu"
                            className="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabIndex="-1"
                        >
                            <a
                                href="/profile"
                                className="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabIndex="-1"
                                id="user-menu-item-0"
                            >
                                Your Profile
                            </a>
                            <a
                                href="/saved"
                                className="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabIndex="-1"
                                id="user-menu-item-2"
                            >
                                Saved Properties
                            </a>
                            <a
                                href="/"
                                className="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabIndex="-1"
                                id="user-menu-item-2"
                            >
                                Sign Out
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className="hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a
                        href="/"
                        className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="/properties"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Properties
                    </a>
                    <a
                        href="/properties/add"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Add Property
                    </a>
                    <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4">
                        <i className="fa-brands fa-google mr-2"></i>
                        <span>Login or Register</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
