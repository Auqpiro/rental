"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

import { FaGoogle } from "react-icons/fa"

import logo from "@/assets/images/logo-white.png";
import profileDefault from "@/assets/images/profile.png";
import notification from "@/assets/icons/notification.svg"
import hamburger from "@/assets/icons/hamburger.svg"

const Navbar = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [isProfileMenuOpen, setProfileOpen] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const pathname = usePathname();
    return (
        <nav className="bg-blue-700 border-b border-blue-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">

                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <button
                            type="button"
                            id="mobile-dropdown-button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setBurgerMenuOpen(prev => !prev)}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <Image src={hamburger} alt=""/>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        
                        <Link
                            href="/"
                            className="flex flex-shrink-0 items-center"
                        >
                            <Image className="h-10 w-auto" src={logo} alt="" />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">PropertyRental</span>
                        </Link>
                        
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-2">
                                <Link
                                    href="/"
                                    className={`${pathname === "/" ? "bg-black" : ""} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/properties"
                                    className={`${pathname === "/properties" ? "bg-black" : ""} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                                >
                                    Properties
                                </Link>
                                {isLoggedIn && (
                                    <Link
                                    href="/properties/add"
                                    className={`${pathname === "/properties/add" ? "bg-black" : ""} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                                    >
                                    Add Property
                                </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {!isLoggedIn && (
                        <div className="hidden md:block md:ml-6">
                        <div className="flex items-center">
                            <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                                <FaGoogle className="text-white mr-2"/>
                                <span>Login or Register</span>
                            </button>
                        </div>
                    </div>
                    )}

                    {isLoggedIn && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                            <Link href="/messages" className="relative group">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">View notifications</span>
                                    <Image src={notification} alt=""/>
                                </button>
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    2{/* Replace with the actual number of notifications */}
                                </span>
                            </Link>
                            
                            <div className="relative ml-3">
                                <div>
                                    <button
                                        type="button"
                                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                        onClick={() => setProfileOpen(prev => !prev)}
                                    >
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <Image className="h-8 w-8 rounded-full" src={profileDefault} alt="" />
                                    </button>
                                </div>

                                {isProfileMenuOpen && (
                                    <div
                                        id="user-menu"
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                        tabIndex="-1"
                                        >
                                        <Link
                                            href="/profile"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-0"
                                        >
                                            Your Profile
                                        </Link>
                                        <Link
                                            href="/properties/saved"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-2"
                                        >
                                            Saved Properties
                                        </Link>
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-2"
                                            >
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {isBurgerMenuOpen && (
                <div id="mobile-menu" className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link
                            href="/"
                            className={`${pathname === "/" ? "bg-black" : ""} text-white block rounded-md px-3 py-2 text-base font-medium`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/properties"
                            className={`${pathname === "/properties" ? "bg-black" : ""} text-white block rounded-md px-3 py-2 text-base font-medium`}
                        >
                            Properties
                        </Link>
                        {isLoggedIn && (
                            <Link
                            href="/properties/add"
                            className={`${pathname === "/properties/add" ? "bg-black" : ""} text-white block rounded-md px-3 py-2 text-base font-medium`}
                            >
                            Add Property
                        </Link>
                        )}
                        {!isLoggedIn && (
                            <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4">
                            <FaGoogle className="text-white mr-2"/>
                            <span>Login or Register</span>
                        </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
