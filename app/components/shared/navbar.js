'use client'

import { useState } from 'react';
import { RiUserLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import SearchBarHeader from '../searchBar/searchBarHeader';

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Logo from '@/public/assets/logo/Group.png';
import Link from 'next/link';
import { BsCupHot } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { LuDessert } from "react-icons/lu";
import { PiFan } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { GiNoodles } from "react-icons/gi";
import { FaBowlRice } from "react-icons/fa6";

const products = [
  { id: 1, name: 'Items', href: '/items', icon: BsCupHot  },
  { id: 2, name: 'T Shirt', href: '#', icon: IoShirtOutline },
  { id: 3, name: 'Toy', href: '#', icon: LuDessert },
  { id: 4, name: 'Integrations', href: '#', icon: PiFan  },
  { id: 5, name: 'Book', href: '#', icon: IoBookOutline },
  { id: 6, name: 'Noodles', href: '#', icon: GiNoodles },
  { id: 7, name: 'Rice', href: '#', icon: FaBowlRice },
]



export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5">
          <span className="sr-only">Your Company</span>
          <Image className='w-64 h-16' src={Logo} alt='Logo'/>
        </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative flex">
            <div>
              <SearchBarHeader/>
            </div>
          <PopoverButton className="flex items-center gap-x-1 text-gray-500 text-lg rounded-none">
            All Category
          <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/coupon" className="text-gray-500 text-lg">
            Coupon
          </Link>
          <Link href="#" className="text-gray-500 text-lg">
          Support
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#">
            <LuShoppingCart  className='text-2xl mr-4 text-gray-500'/>
          </Link>
          <Link href="/user/signIn">
            <RiUserLine  className='text-2xl text-gray-500'/>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
              <Image className='w-auto h-8' src={Logo} alt='Logo'/>
          </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                <div>
                  <SearchBarHeader/>
                </div>
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-500 hover:bg-gray-50">
                    All Category
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.id}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-500 hover:bg-gray-50"
                >
                  Coupon
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-500 hover:bg-gray-50"
                >
                  Support
              </Link>
              </div>
              <div className="">
                <Link href="#">
                  <LuShoppingCart  className='text-2xl text-gray-500 my-2.5'/>
                </Link>
                <Link href="#">
                  <RiUserLine  className='text-2xl text-gray-500'/>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    
  )
}
