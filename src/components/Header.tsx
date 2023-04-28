import { FaSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";

interface Props {
  search: (e: React.FormEvent<HTMLFormElement>) => void;
}

function Header( {search}: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="flex items-center justify-between   gap-5 space-x-10 ">
        <Image
          src="/logo.svg"
          alt="Picture of the author"
          width={35}
          height={100}
        ></Image>

        <h1 className="font-serif text-3xl font-semibold">Dictionary</h1>

        <button
          className="block rounded py-2 pl-4 pr-4 md:p-0"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FaSun /> : <FaRegMoon />}
        </button>
      </div>

      <div>
        <form onSubmit={(e)=>search(e)} className="relative mx-auto mt-5  pt-2 text-gray-600">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            className="h-10 rounded-lg border-2 bg-white px-5 pr-16 text-sm placeholder-[#1f1d2e] focus:border-[#c4a7e7] focus:outline-none dark:bg-[#191724] dark:text-white dark:placeholder-white"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="absolute right-0 top-0 mr-4 mt-5">
            <svg
              className="h-4 w-4 fill-current  text-[#c4a7e7]"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </div>
        </form>
      </div>
    </>
  );
}

export default Header;
