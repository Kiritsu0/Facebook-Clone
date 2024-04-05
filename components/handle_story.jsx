"use client";

import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const HandleStory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("storyList")
      ? JSON.parse(localStorage.getItem("storyList"))
      : null;
    if (storedData) {
      setData(storedData);
    }
  }, []);

// Functions
  // Hanlde invalid images
  const handleImageError = () => {
    localStorage.removeItem("storyList");
  };

  // Delete stories
  const handleDeletePost = (index) => {
    const storedData = localStorage.getItem("storyList")
      ? JSON.parse(localStorage.getItem("storyList"))
      : [];
    storedData.splice(index, 1);
    localStorage.setItem("storyList", JSON.stringify(storedData));  
    setData(storedData);
  };

  return (
    <div>
      {data.length > 0 && (
        <div className="bg-white rounded-md px-3 pb-3 max-w-[15rem] md:max-w-[20rem] lg:max-w-[30rem] overflow-auto">
          <h2 className="font-semibold">Stories</h2>
          <div className="flex gap-3">
            {data.map((storyData, index) => {
              return storyData.type === "image" ? (
                <div
                  key={index}
                  className="h-40 md:h-44 lg:h-52 w-28 md:w-32 lg:w-36 rounded-lg shadow-lg hover:brightness-90 relative overflow-hidden"
                >
                  <div className="bg-gray-400 h-full flex rounded-lg">
                    <img
                      src={storyData.url}
                      onError={handleImageError}
                      alt="Story"
                      width="200"
                      height="200"
                      className="rounded-lg"
                    />
                    <span className="text-white absolute left-1 md:left-2 top-32 md:top-36 lg:top-44">
                      {storyData.name}
                    </span>
                    <RxCross2 className="text-2xl cursor-pointer text-gray-400 absolute left-1 md:left-2 top-2" onClick={() => handleDeletePost(index)} />
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="h-52 w-36 rounded-lg cursor-pointer shadow-lg hover:brightness-90 relative overflow-hidden"
                >
                  <div className="bg-gray-400 h-full flex justify-center items-center text-center rounded-lg p-2" style={{backgroundColor: storyData.color, fontFamily: storyData.font}}>
                    <span>
                      {storyData.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HandleStory;
