"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-6xl mx-auto justify-between items-center px-5"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search keywords..."
          className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        />
        <button
          type="submit"
          className="text-amber-600 disabled:text-gray-400 transition-color duration-300 "
          disabled={!search}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
