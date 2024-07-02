export default function Button({ text }: { text: string }) {
  return (
    <button
      className={`h-[62px] w-3/12 rounded-xl bg-white text-xl font-medium text-blacktext transition-all duration-300 hover:bg-stone-200`}
    >
      {text}
    </button>
  );
}
