import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="cursor-pointer p-3 hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <h2 className="truncate mb-2 text-lg font-bold sm:text-xl">
          {result.title || result.name}
        </h2>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="object-cover h-32 sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 w-full"
          style={{
            maxWidth: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-sm sm:text-md">{result.overview}</p>
          <p className="flex items-center text-sm sm:text-md">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-4 sm:h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
);
}
