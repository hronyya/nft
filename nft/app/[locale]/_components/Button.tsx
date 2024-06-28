export default function Button({ text }: { text: string }) {
  return (
    <button className="text- h-[62px] w-[321px] rounded-xl bg-white text-blacktext transition-all duration-300 hover:bg-stone-200">
      {text}
    </button>
  );
}
