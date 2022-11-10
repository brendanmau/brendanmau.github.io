import { useState, useEffect } from "react";
export default function Slideshow({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const alterIndex = (amount) => {
    const newIndex = activeIndex + amount;
    if (newIndex < 0) setActiveIndex(slides.length - 1);
    else if (newIndex >= slides.length) setActiveIndex(0);
    else setActiveIndex(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => { if (!paused) alterIndex(1) }, 2000)
    return () => {
      clearInterval(interval);
    }
  })

  return (
    <div className="flex flex-col items-center">
      <div className="h-[400px] w-full flex flex-col items-center">
        <div className="w-full h-full"></div>
        <img className="rounded shrink w-auto h-auto max-w-full max-h-full drop-shadow" src={slides[activeIndex].src} alt={slides[activeIndex].alt} />
        <div className="w-full h-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => { setPaused(true); setActiveIndex(idx) }}
            className={`rounded-full w-[20px] h-[20px] transition-[background] hover:bg-blue-700 ${idx === activeIndex ? 'bg-blue-100' : 'bg-blue-500'}`}></button>
        ))}
      </div>
      <div className="flex gap-4 my-6">
        <button className="drop-shadow bg-blue-500 p-4 hover:bg-blue-600 transition-[background] rounded-lg" onClick={() => { setPaused(true); alterIndex(-1) }}>
          Previous
        </button>
        <button className="drop-shadow bg-blue-500 p-4 hover:bg-blue-600 transition-[background] rounded-lg" onClick={() => { setPaused(true); alterIndex(+1) }}>
          Next
        </button>
      </div>
    </div>
  );
}