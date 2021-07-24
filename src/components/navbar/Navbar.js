import React, { useState } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import navbarLogo from '../../Images/logoImage/logo-evernet-4.png';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Packages', href: '#packages', current: false },
  { name: 'Contact', href: '#contacts', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useState("")
    return (
        <Disclosure as="nav" className="bg-transparent">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block text-red-400 h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block text-red-400 h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src={navbarLogo}
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src={navbarLogo}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-200 text-red-500' : 'text-red-600 hover:bg-gray-200 hover:text-gray-700',
                                                    'px-3 py-2 rounded-md text-medium font-bold'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                               {
                                   !loggedInUser? 
                                   <a href="/signIn" className="my-font bg-red-500 text-white py-1.5 focus:ring-2 ring-red-500 font-semibold px-3 rounded hover:bg-red-700 focus:outline-none">Sign In</a> : 
                                   <Menu as="div" className="ml-3 relative">
                                   {({ open }) => (
                                       <>
                                           <div>
                                               <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                   <span className="sr-only">Open user menu</span>
                                                   <img
                                                       className="h-8 w-8 rounded-full"
                                                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                       alt=""
                                                   />
                                               </Menu.Button>
                                           </div>
                                           <Transition
                                               show={open}
                                               as={Fragment}
                                               enter="transition ease-out duration-100"
                                               enterFrom="transform opacity-0 scale-95"
                                               enterTo="transform opacity-100 scale-100"
                                               leave="transition ease-in duration-75"
                                               leaveFrom="transform opacity-100 scale-100"
                                               leaveTo="transform opacity-0 scale-95"
                                           >
                                               <Menu.Items
                                                   static
                                                   className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                               >
                                                   <Menu.Item>
                                                       {({ active }) => (
                                                           <a
                                                               href="/"
                                                               className={classNames(
                                                                   active ? 'bg-gray-100' : '',
                                                                   'block px-4 py-2 text-sm text-gray-700'
                                                               )}
                                                           >
                                                               Your Profile
                                                           </a>
                                                       )}
                                                   </Menu.Item>
                                                   {/* <Menu.Item>
                                                       {({ active }) => (
                                                           <a
                                                               href="/"
                                                               className={classNames(
                                                                   active ? 'bg-gray-100' : '',
                                                                   'block px-4 py-2 text-sm text-gray-700'
                                                               )}
                                                           >
                                                               Settings
                                                           </a>
                                                       )}
                                                   </Menu.Item> */}
                                                   <Menu.Item>
                                                       {({ active }) => (
                                                           <a
                                                               href="/"
                                                               className={classNames(
                                                                   active ? 'bg-gray-100' : '',
                                                                   'block px-4 py-2 text-sm text-gray-700'
                                                               )}
                                                           >
                                                               Sign out
                                                           </a>
                                                       )}
                                                   </Menu.Item>
                                               </Menu.Items>
                                           </Transition>
                                       </>
                                   )}
                               </Menu>
                               }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-200 text-red-500' : 'text-red-600 hover:bg-gray-200 hover:text-gray-700',
                                        'block px-3 py-2 rounded-md text-medium font-bold'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;