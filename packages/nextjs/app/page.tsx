"use client";

// import { useState } from "react";
// import { gql } from "@apollo/client";
// import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
// import { useAccount } from "wagmi";
// import { Address, AddressInput, Balance } from "~~/components/scaffold-eth";
import "~~/hooks/scaffold-eth";

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
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">
              REGISTER YOUR VAT NUMBER <br /> ON THE BLOCKCHAIN
            </span>
          </h1>
        </div>
        <div className="flex items-center flex-col mx-10 flex-grow pt-10"></div>
        <div className="flex items-center flex-col mx-20 mb-4">
          <div className="flex">
            <button className="use-clientbotton text-white my-7 p-5 rounded-md" onClick={handleButtonClick}>
              Issue an invoice
            </button>
            <button className="use-clientbotton text-white my-7 p-5 rounded-md" onClick={handleButtonClick}>
              Pay an invoice
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
