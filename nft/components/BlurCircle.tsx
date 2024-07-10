interface BlurCircleProps {
  gradientColor: string;
  position: string;
}

export default function BlurCircle({
  gradientColor,
  position,
}: BlurCircleProps) {
  return (
    <div
      className={`h-[252px] w-[252px] scale-[0.4] sm:scale-100 ${position}`}
      style={{
        background: gradientColor,
      }}
    />
  );
}
