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
          'minism:w-[350px] h-[64px] w-8/12 sm:w-[317px]': width === 'hero',
          'minism:w-[310px] h-[64px] w-[80%] sm:w-[292px]': width === 'banner',
        },
      )}
    >
      {text}
    </button>
  );
}
