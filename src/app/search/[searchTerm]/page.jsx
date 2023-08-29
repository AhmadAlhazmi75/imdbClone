const { default: Results } = require("@/components/Results");

async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`
  );

  const data = await res.json();
  const results = data.results;

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found !</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}

export default SearchPage;
