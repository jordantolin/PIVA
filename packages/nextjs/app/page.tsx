"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  // const { address } = useAccount();
  // const { data: greeting } = useScaffoldContractRead({
  //   contractName: "YourContract",
  //   functionName: "greeting",
  // });
  const backgroundImageUrl = "https://wallpapercave.com/wp/wp2757874.gif";
  const handleButtonClick = () => {
    // Azioni da eseguire quando il pulsante viene cliccato
    console.log("Button clicked!");
    // aggiungere ulteriori azioni qui
  };

  return (
    <>
      <div
        className="flex items-centre flex-col flex-grow pt-10 bg-cover"
        style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-3xl mb-2">Welcome to</span>
            <span className="block text-6xl font-bold" style={{ fontWeight: "bold" }}>
              ETH-VAT
            </span>
            <p className="text-size">
            Optimize your financial standing with our service, <br></br> offering Token Association and proactive Tax Evasion Control.
            </p>
          </h1>
        </div>
        <div className="flex items-center flex-col mx-10 flex-grow pt-10"></div>
        <div className="flex items-center flex-col mx-20 mb-4" style={{ marginBottom: "40px" }}>
          <div className="flex">
            <Link href="/debug"> {/* Usa il percorso della nuova pagina creata */}
            <a className="use-clientbotton mx-2 text-white my-7 p-5 rounded-md ">Issue an invoice</a>
            </Link>
            <Link href="/debug"> {/* Usa il percorso della nuova pagina creata */}
            <a className="use-clientbotton mx-2 text-white my-7 p-5 rounded-md">Pay an invoice</a>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};


export default Home;