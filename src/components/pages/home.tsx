import Filters from "../features/filters";
import Search from "../features/search";
import Table from "../features/table";
import TopNav from "../navigation/topnav";

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
      <div className="md:w-[70%]">
        <TopNav />
        <div className="mt-12">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
