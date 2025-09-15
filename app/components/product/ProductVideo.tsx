import { useRef, useState } from "react";
import { FaLeaf, FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";

function ProductVideo() {
  const video = useRef<any>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-6">
      {/* Video Placeholder */}
      <div className="group relative w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
        <video autoPlay loop ref={video} className="w-full h-full z-10 object-cover">
          <source src="../showcase.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => {
              video.current.paused == false
                ? video.current.pause()
                : video.current.play();
              setIsPaused(video.current.paused);
            }}
            className={`w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center ${isPaused ?"opacity-100": "opacity-0" } group-hover:opacity-100 transition-all`}
          >
            {isPaused ? <FaPlay /> : <FaPause />}
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 text-green-600">
              <RiDiscountPercentLine size={25}/>
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
              <FaLeaf size={25}/>
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
