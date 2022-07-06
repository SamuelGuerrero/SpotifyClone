import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className="flex ">
        <Sidebar />
        <Center />
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
