"use client";

import { useState, useEffect } from "react";

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

  const handleImageError = () => {
    localStorage.clear();
  };

  return (
    <div>
      {data.length > 0 && (
        <div className="bg-white rounded-md px-3 pb-3 max-w-[30rem] overflow-auto">
          <h2 className="font-semibold">Stories</h2>
          <div className="flex gap-3">
            {data.map((storyData, index) => {
              return storyData.type === "image" ? (
                <div
                  key={index}
                  className="h-52 w-36 rounded-lg cursor-pointer shadow-lg hover:brightness-90 relative"
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
                    <span className="text-white absolute top-44 left-2">
                      {storyData.name}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="h-52 w-36 rounded-lg cursor-pointer shadow-lg hover:brightness-90 relative"
                >
                  <div className="bg-gray-400 h-full flex rounded-lg">
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
