"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Icons
import { IoTextOutline } from "react-icons/io5";
import { MdAddPhotoAlternate } from "react-icons/md";

const Clientstory = () => {
  // Variables
  const [fileStory, setFileStory] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [textState, setState] = useState(false);
  const [text, setText] = useState("");
  const [inputCondition, setCondition] = useState(true);
  const router = useRouter();

  // Functions
  const handleFile = (event) => {
    setSelectedFile(event.target.files[0]);
    setCondition(true)
  };

  useEffect(() => {
    const storedStoryList = localStorage.getItem("storyList");
    if (storedStoryList) {
      setFileStory(JSON.parse(storedStoryList));
    }
  }, []);

  const handleAddImageStory = () => {
    if (selectedFile) {
      const imageName = selectedFile.name.replace(/\.[^/.]+$/, "");
      setFileStory((previous) => {
        const newStoryList = [{ type: "image", url: URL.createObjectURL(selectedFile), name: imageName }, ...previous];
        localStorage.setItem("storyList", JSON.stringify(newStoryList));
        router.push('/');
        return newStoryList;
      });
    }
    setSelectedFile(null);
  };

  const handleAddTextStory = () => {
    if (text) {
      setFileStory((previous) => {
        const newStoryList = [{ type: "text", text }, ...previous];
        localStorage.setItem("storyList", JSON.stringify(newStoryList));
        router.push('/');
        return newStoryList;
      });
    }
    setText("");
    setState(false)
  }

  const handleText = () => {
    setSelectedFile(true)
    setCondition(false)
  }

  const handleDiscardStory = () => {
    setSelectedFile(null);
    setState(false)
  };

  return (
    <div className="flex justify-center items-center">
      {!selectedFile || textState ? (
        <div className="flex gap-5 ml-20">
          <label
            htmlFor="fileInput"
            className="flex justify-center items-center h-80 w-52 bg-gradient-to-tr from-cyan-300 to-blue-900 rounded-lg hover:brightness-95"
          >
            <input
              id="fileInput"
              type="file"
              onChange={handleFile}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="flex-col items-center">
              <MdAddPhotoAlternate className="rounded-full bg-white text-4xl p-1 mx-auto" />
              <p className="text-white">Create a photo story</p>
            </div>
          </label>
          <div onClick={handleText} className="flex justify-center items-center h-80 w-52 cursor-pointer bg-gradient-to-t from-red-500 to-purple-600 rounded-lg hover:brightness-95">
            <div className="flex-col">
              <IoTextOutline className="rounded-full bg-white text-4xl p-1 mx-auto" />
              <p className="text-white">Create a text story</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-md p-3 ml-20 w-[20rem] h-96 md:w-[35rem]">
          <h2 className="font-semibold">Preview</h2>
          <div className="bg-black flex justify-center items-center h-4/6">
            {inputCondition ? (
            <div className="aspect-video h-48 w-40 border-gray-400 overflow-hidden flex items-center">
              <Image
                src={URL.createObjectURL(selectedFile)}
                alt="Selected File"
                width={800}
                height={450}
              />
            </div>
            ) : (
              <div className="">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your text here..."
                  className="p-2 resize-none"
                  rows={4}
                  cols={50}
                />
              </div>
            )}
          </div>
          <div className="mt-10 flex gap-3 px-2">
            <button
              onClick={handleDiscardStory}
              className="bg-gray-300 hover:bg-gray-200 px-2 font-medium w-28 flex justify-center items-center rounded-md"
            >
              Discard
            </button>
            <button
              onClick={inputCondition ? handleAddImageStory : handleAddTextStory}
              className="text-white bg-blue-500 hover:bg-blue-400 p-2 w-36 font-medium flex justify-center items-center rounded-md"
            >
              Share to story
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clientstory;