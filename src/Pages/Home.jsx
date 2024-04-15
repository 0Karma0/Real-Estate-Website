import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import EstateCard from "../components/EstateCard";



const Home = () => {

  const data = useLoaderData();

  return (
    <>
      <main className="mb-10 mt-5">
        <Banner></Banner>
      </main>
      <div className="lg:grid md:grid-cols-2 mb-10 gap-8">
        {
          data.map(aData => <EstateCard
            key={aData.id}
            data={aData}
          ></EstateCard>)
        }
      </div>
    </>
  );
};

export default Home;