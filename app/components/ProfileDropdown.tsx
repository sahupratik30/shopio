"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

type ProfileDropdownProps = {
  name: string;
};

const ProfileDropdown = ({ name }: ProfileDropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white p-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200">
          <Image src="/images/user-icon.svg" alt="user" width={24} height={24} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <p
                className={
                  "pointer-events-none block select-none px-4 py-2 text-sm text-gray-700"
                }
              >
                Welcome, <span className="text-primary">{name}</span>
              </p>
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/orders"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  View Orders
                </Link>
              )}
            </Menu.Item>
            
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-red-600" : "text-red-600",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => signOut()}
                >
                  Logout
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropdown;
