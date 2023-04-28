import Header from "../components/Header";
import Info from "@/components/Info";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [word, setWord] = useState<string>("keyboard");
  const [data, setData] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("search") as string;
    setWord(searchTerm);
  };

  useEffect(() => {
    const dictionaryApi = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dictionaryApi();
  }, [word]);


const synonyms = (data: any) => {
  setWord(data)
}



  return (
    <div className="mx-auto mt-8 flex h-screen max-w-screen-lg flex-col items-center justify-start gap-5 px-5">
      <Header search={handleSearch} />
      <Info data={data} sinonim={synonyms}  />
    </div>
  );
}

export default App;
