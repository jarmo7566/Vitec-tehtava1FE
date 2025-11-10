import CreateUser from "../features/user/CreateUser.jsx";

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16 ">
      <h1 className="mb-8 text-center text-xl text-yellow-500 font-semibold md:text-3xl">
        The best waste company.
        <br />
        <span className="text-yellow-500">Straight off your property.</span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
