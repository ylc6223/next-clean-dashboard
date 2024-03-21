import DashEaseLogo from '@/app/ui/dash-ease-logo';
import { ReactNode } from 'react';
import { notoSans } from '@/app/ui/fonts';
import Link from 'next/link';
import { Bars4Icon } from '@heroicons/react/24/outline';
import styles from './navbar.module.css';

interface NavProps {
  brandIcon?: (props: { className: string; style: object }) => ReactNode;
  logoWidth?: number;
  logoHeight?: number;
  title?: string;
}

export default function Nav({
  brandIcon,
  logoWidth,
  logoHeight,
  title,
}: NavProps) {
  const Brand = brandIcon;
  const width = logoWidth || '2rem';
  const height = logoHeight || '2rem';
  const text = title || 'Dash Ease';
  const Logo = Brand ? (
    <div
      className={`${notoSans.className} flex flex-row items-center leading-none text-stone-600 dark:text-white`}
    >
      <Brand
        className="h-8 w-8"
        style={{
          width: typeof width === 'number' ? width + 'px' : width,
          height: typeof height === 'number' ? height + 'px' : height,
        }}
      />
      {/*<XMarkIcon className="h-8 w-8" />*/}
      <p className="ml-2 text-base text-blue-400">{text}</p>
    </div>
  ) : (
    <DashEaseLogo title={text} />
  );
  return (
    <>
      <nav className="navbar">
        <div className="navbar__innder">
          <div className="navbar__items">{Logo}</div>
          <div className="navbar__items navbar__items--right">
            <div className="mr-2 hidden text-blue-400 md:block">
              <Link
                href="/login"
                className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Log in
              </Link>
            </div>
            <div className="block flex h-full w-full shrink-0 items-center justify-center md:hidden">
              <input type="checkbox" id={styles['toggler']} />
              <label htmlFor={styles['toggler']}>
                <div className={styles['hamburger-container']}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </label>
            </div>
          </div>
        </div>
        {/* 导航栏伸出时呈现的背景 */}
        <div className="navbar-sidebar__backdrop"></div>
      </nav>
    </>
  );
}
