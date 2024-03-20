import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { inter, notoSans } from '@/app/ui/fonts';

interface DashEaseLogoProps {
  title: string;
}

export default function DashEaseLogo({ title }: DashEaseLogoProps) {
  const logoText = title;
  return (
    <div
      className={`${notoSans.className} flex flex-row items-center leading-none text-stone-600 dark:text-white`}
    >
      <Bars4Icon className="h-8 w-8" />
      {/*<XMarkIcon className="h-8 w-8" />*/}
      <p className="ml-2 text-base text-blue-400">{logoText}</p>
    </div>
  );
}
