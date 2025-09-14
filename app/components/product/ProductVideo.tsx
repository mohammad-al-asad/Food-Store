import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function ProductVideo() {
  const video = useRef<any>(null);
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      {/* Video Placeholder */}
      <div className="group relative w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
        <video ref={video} autoPlay className="w-full h-full z-10 object-cover">
          <source src="../showcase.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => {
              setIsPaused(video.current.paused);
              video.current.paused == false
                ? video.current.pause()
                : video.current.play();
            }}
            className={`w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center ${isPaused ? "opacity-100" : "opacity-0"} group-hover:opacity-100 transition-all`}
          >
            {isPaused ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 text-green-600">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">64% Discount</h4>
              <p className="text-sm text-gray-500">
                Save your 64% money with us
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 text-green-600">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.23.82c.94-2.04 2.26-4.7 4.21-6.74C10 16.5 11.5 17 13 17c3.31 0 6-2.69 6-6 0-2.76-1.88-5.08-4.42-5.79C14.38 5.08 14.19 5 14 5c-.55 0-1 .45-1 1 0 .55.45 1 1 1 1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1s-.45-1-1-1z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">100% Organic</h4>
              <p className="text-sm text-gray-500">100% Organic Vegetables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductVideo;
