interface Circles {
  [key: string]: string;
}

const blurCircles: Circles = {
  one: 'circle at center, rgba(4, 124, 174, 0.2), rgba(0, 0, 0, 0) 135px',
  two: 'circle at center, rgba(34, 154, 204, 0.25), rgba(0, 0, 0, 0) 158px',
  three: 'circle at center, rgba(61, 117, 255, 0.2), rgba(0, 0, 0, 0) 110px',
  four: 'circle at center, rgba(115, 157, 221, 0.2), rgba(0, 0, 0, 0) 127px',
  five: 'circle at center, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0) 126px',
};

export default function BlurCircle({ number }: { number: string }) {
  return (
    <div
      className="aspect-square h-[20rem]"
      style={{
        background: `radial-gradient(${blurCircles[number]})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
      }}
    />
  );
}
