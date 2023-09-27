import Filters from "../features/filters";
import Search from "../features/search";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-[30%]">
        <h3 className="text-xl text-persian-blue font-semibold">
          London Internship Program
        </h3>
        <p className="text-sm font-light">London</p>
        <div className="mt-8">
          <Search />
          <div className="mt-6">
            <Filters />
          </div>
        </div>
      </div>
      <div className="md:w-[70%]"></div>
    </div>
  );
};

export default Home;
