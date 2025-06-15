'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;

  activeClassName?: string;

  inactiveClassName?: string;

  [key: string]: any;
}

export default function NavLink({
  href,
  children,
  activeClassName = '',
  inactiveClassName = '',
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href) && (href === '/' || pathname.length === href.length || pathname[href.length] === '/');
  const className = isActive ? activeClassName : inactiveClassName;

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}