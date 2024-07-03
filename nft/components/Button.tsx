export default function Button({ text }: { text: string }) {
  return (
    <button
      className={`h-[62px] w-4/12 rounded-xl bg-white text-xs font-medium text-blacktext transition-all duration-300 hover:bg-stone-200 lg:scale-90 lg:text-[14px] xl:text-lg 2xl:text-xl`}
    >
      {text}
    </button>
  );
}
