export default function BlurBack() {
  return (
    <div
      className="-z-30 aspect-[5/2] w-screen"
      style={{
        background: `radial-gradient(ellipse at center, rgba(80, 93, 203, 0.09), rgba(0, 0, 0, 0) 60vw 10vh)`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
      }}
    >
      <div className="h-[40rem] md:h-[20rem] md:bg-[radial-gradient(ellipse_at_center,rgba(80,93,203,0.01),rgba(0,0,0,0)_10vw_100px)]"></div>
    </div>
  );
}
