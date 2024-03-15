"use client";

import { useState, useEffect } from "react";

const HandleStory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("imageList")
      ? JSON.parse(localStorage.getItem("imageList"))
      : null;
    if (storedData) {
      setData(storedData);
    }
  });
  return (
    <div>
      {data.length > 0 && (
        <div className="bg-white rounded-md px-3 pb-3">
          <h2 className="font-semibold">Stories</h2>
          <div className="flex gap-3">
            {data.map((imageUrl, index) => (
              <div
                key={index}
                className="bg-white rounded-lg h-52 w-36 hover:brightness-95 shadow-md cursor-pointer"
              >
                <div className="bg-gray-400 flex h-full rounded-lg">
                  <img
                    src={imageUrl}
                    alt="Story"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HandleStory;
