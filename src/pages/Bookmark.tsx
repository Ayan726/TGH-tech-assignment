import { useEffect, useState } from "react";
import { MdBookmarkRemove } from "react-icons/md";

const Bookmark = () => {
  const [storedItems, setStoredItems] = useState<string[] | []>([]);

  const getFromLocalStorage = () => {
    setStoredItems(JSON.parse(localStorage.getItem("quotes") ?? "[]"));
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <p className="font-bold text-lg">All bookmarked quote</p>
      {storedItems.map((el: string, ind: number) => (
        <div
          key={ind}
          className="w-80 bg-orangeBg min-h-32 rounded-lg grid place-content-center  relative p-5"
        >
          {el}
          <button
            onClick={() => {
              let arr: string[] | [] = JSON.parse(
                localStorage.getItem("quotes") ?? "[]"
              );
              let index = arr.indexOf(el as never);
              if (index === -1) return;
              arr.splice(index, 1);
              localStorage.setItem("quotes", JSON.stringify(arr));
              getFromLocalStorage();
            }}
            className="bg-transparent cursor-pointer absolute bottom-5 right-5"
          >
            <MdBookmarkRemove className="text-xl" />
          </button>
        </div>
      ))}

      {!storedItems.length && <p><i>No items!!</i></p>}
    </div>
  );
};

export default Bookmark;
