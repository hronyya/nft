import clsx from 'clsx';

export default function Button({
  text,
  width,
}: {
  text: string;
  width: 'hero' | 'banner';
}) {
  return (
    <button
      className={clsx(
        'rounded-xl bg-white text-lg font-semibold text-blacktext transition-all duration-300 hover:bg-stone-200 lg:scale-90 lg:text-[14px] xl:text-lg 2xl:text-xl',
        {
          'h-[64px] w-[350px] sm:w-[317px]': width === 'hero',
          'h-[64px] w-[310px] sm:w-[292px]': width === 'banner',
        },
      )}
    >
      {text}
    </button>
  );
}
