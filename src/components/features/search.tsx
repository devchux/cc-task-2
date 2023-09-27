const Search = () => {
  return (
    <div className="border border-concrete bg-white rounded-lg p-4 flex items-center gap-3">
      <img src="/assets/icons/search.svg" alt="" className="w-5 h-5" />
      <input
        placeholder="Serach by name, edu, exp or #tag"
        className="w-full outline-none border-none text-sm placeholder:text-gray-chateau bg-transparent"
      />
      <img src="/assets/icons/warning.svg" alt="" className="w-5 h-5" />
    </div>
  );
};

export default Search;
