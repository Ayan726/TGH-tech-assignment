import { useEffect, useState } from "react";
import { axiosInstance as axios } from "../lib/axios";
import { MdBookmarkAdd } from "react-icons/md";

function Home() {
  const [quote, setQuote] = useState<string>("");
  const [tags, setTags] = useState<string[] | []>([]);
  const [selectedTag, setSelectedTag] = useState<string>("age");

  const getRandomQuote = async () => {
    try {
      const { data } = await axios.get("/random", {
        params: { tags: selectedTag },
      });

      setQuote(data.content);
    } catch (error) {
      throw new Error("Something went wrong!!");
    }
  };
  const getTags = async () => {
    try {
      const { data } = await axios.get("/tags");
      const res: string[] = data.map((el: any) => el.slug);
      setTags(res);
    } catch (error) {
      throw new Error("Something went wrong!!");
    }
  };

  useEffect(() => {
    getTags();
    getRandomQuote();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-80 bg-orangeBg min-h-32 rounded-lg grid place-content-center mt-20 relative p-5">
        <span>{quote}</span>
        <button
          onClick={() => {
            let arr: string[] | [] = JSON.parse(
              localStorage.getItem("quotes") ?? "[]"
            );
            if ((arr as string[]).includes(quote)) return;
            (arr as string[]).push(quote);
            localStorage.setItem("quotes", JSON.stringify(arr));
          }}
          className="bg-transparent cursor-pointer absolute bottom-5 right-5"
        >
          <MdBookmarkAdd className="text-xl" />
        </button>
      </div>
      <select
        onChange={(e) => setSelectedTag(e.target.value)}
        className="text-black rounded-3xl w-48 h-8 text-center border-none outline-none cursor-pointer"
        name="selector"
      >
        {tags.map((el, ind: number) => (
          <option key={el + String(ind)} value={el}>
            {el}
          </option>
        ))}
      </select>

      <button
        onClick={getRandomQuote}
        className="bg-greenBg w-32 h-8 rounded-2xl font-bold cursor-pointer"
      >
        Next Quote
      </button>
    </div>
  );
}

export default Home;
