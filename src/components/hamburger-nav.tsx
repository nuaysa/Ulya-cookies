import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div >

      <nav  className="flex flex-col items-center justify-between">
          <nav  className="flex items-center gap-32">
      <div className="flex gap-5 items-center">
            <Link href="/">
            <Image
            alt="brand" 
            src="/logo.jpg"
            width={50}
            height={50}
            className="border rounded-full"
            />
            </Link>
            <Link href="/" className="font-extrabold text-[30px]">Ulya cookies</Link>
              </div>
        <div className="block mt-2 lg:hidden">
          <button  onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
          </button>
      </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`bg-neutral-700 w-screen lg:hidden ${isOpen ? 'flex, -translate-x-2'  : 'hidden'} mt-4 flex flex-col items-center overflow-hidden`}
        >
        <Link href="/" className="text-white hover:text-neutral-300">Home</Link>
        <Link href="/about" className="text-white hover:text-neutral-300">About</Link>
        <Link href="/team" className="text-white hover:text-neutral-300">Team</Link>
        <Link href="/products" className="text-white hover:text-neutral-300">Products</Link>
      </div>
    </nav>
      </div>
  );
};
;
