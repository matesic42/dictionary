import React from "react";
import { BsFillPlayFill } from "react-icons/bs";



function Info() {
  return (
    <div className="mt-5 flex flex-col items-center w-full px-5 text-left">
      <div className="flex justify-between items-center w-full  gap-5">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-medium">Keyboard</h2>
          <p className="mt-3 text-2xl text-purple-500">keyfsd</p>
        </div>
        <div className="rounded-full bg-purple-800 p-3">
          <BsFillPlayFill className="h-10 w-10" />
        </div>
      </div>
      <div className="flex mt-5 items-center justify-between w-full gap-2">
        <p className="text-xl font-medium">noun</p>
        <div className="border flex-1 my-5"></div>
      </div>
      <div className="mt-4">
        <h4 className=" mb-3 text-gray-400  text-2xl tracking-wider">Meaning</h4>
        <ul>
          <li>(etc.) A set of keys used to operate a typewriter, computer etc. </li>
        <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
        <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
        </ul>
        <div className="flex items-center space-x-5 flex-row ">
          <h4 className=" mb-3 text-gray-400 mt-3 text-xl tracking-wider">Synonyms</h4>
          <p className="font-bold text-purple-500">electonic keyboard</p>
        </div>
      </div>
      <div className="flex mt-5 items-center justify-between w-full gap-2">
        <p className="text-xl font-medium">verb</p>
        <div className="border flex-1 my-5"></div>
      </div>
      <div className="mt-4">
        <h4 className="mb-3 text-gray-400  text-2xl tracking-wider">Meaning</h4>
        <ul>
          <li>(etc.) A set of keys used to operate a typewriter, computer etc. </li>
        </ul>

      </div>
      <div className="flex mt-5 items-center justify-between w-full gap-2">
        <div className="border flex-1 my-5"></div>
      </div>
      <div className="flex flex-row">
        <h5>Source</h5>
        <a href="https://en.wiktionary.org/wiki/keyboard" className="text-purple-500 ml-2">Wiktionary</a>
      </div>

      
    </div>
  );
}

export default Info;
