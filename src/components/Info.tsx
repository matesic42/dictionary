import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

type Props = {
  data: any;
  sinonim: any;
};

function Info({ data, sinonim }: Props) {
  const speakWord = (word: string) => {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };


  return (
    <div className="mt-5 flex w-full flex-col items-center px-5 text-left">
      <div className="flex w-full items-center justify-between gap-5">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-medium">{data[0]?.word}</h2>
          <p className="mt-3 text-2xl text-purple-500">{data[0]?.phonetic}</p>
        </div>
        <div
          onClick={() => speakWord(data[0]?.word)}
          className="rounded-full bg-purple-800 p-3"
        >
          <BsFillPlayFill className="h-10 w-10" />
        </div>
      </div>
      <div className="mt-5 flex w-full items-center justify-between gap-2">
        <p className="text-xl font-medium">noun</p>
        <div className="my-5 flex-1 border"></div>
      </div>
      <div className="mt-4">
        <h4 className=" mb-3 text-2xl  tracking-wider text-gray-400">
          Meaning
        </h4>
        <ul className="ml-10 list-[disc] marker:text-purple-500">
          {data[0]?.meanings[0].definitions.map((def: any) => (
            <li className="mb-3" key={def.definition}>
              {def.definition}
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center space-x-3 ">
          <h4 className=" mb-3 mt-3 text-xl tracking-wider text-gray-400">
            Synonyms
          </h4>
          {data[0]?.meanings[1]?.synonyms.map((syn: any) => (
            <p
              onClick={() => sinonim(syn)}
              className="text-purple-500 underline hover:cursor-pointer"
              key={syn}
            >
              {syn}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-5 flex w-full items-center justify-between gap-2">
        <p className="text-xl font-medium">verb</p>
        <div className="my-5 flex-1 border"></div>
      </div>
      <div className="mt-4">
        <h4 className=" text-2xl tracking-wider text-gray-400">Meaning</h4>
        <ul>
          {data[0]?.meanings[1]?.definitions?.map((def: any) => (
            <li className="mb-3 " key={def.definition}>
              {def.definition}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex w-full items-center justify-between gap-2">
        <div className="my-5 flex-1 border"></div>
      </div>
      <div className="flex flex-row space-x-3">
        <h5>Source</h5>

        <a
          href={data[0]?.sourceUrls[0]}
          className="text-purple-500 underline hover:cursor-pointer"
        >
          {data[0]?.sourceUrls[0]}
        </a>
      </div>
    </div>
  );
}

export default Info;
