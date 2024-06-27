export default function BlurCircle({
  color,
  radius,
}: {
  color: string;
  radius: number;
}) {
  return (
    <div
      className={`h-15 w-20 rounded-full shadow-[0_55px_190px_35px_rgba(0,0,225,0.3)] shadow-blue-500`}
    ></div>
  );
}
