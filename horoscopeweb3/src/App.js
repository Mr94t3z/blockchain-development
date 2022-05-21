import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";
import NFT from "./abi/horoscopeNFT.json";

const NFT_CONTRACT_ADDRESS = "0x21F710FcD5A8081bdf432b2d8bF5EdA887689b44";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [date, setDate] = useState("1992-08-31");
  const [zodiacSign, setZodiacSign] = useState(null);

  // state for whether app is minting or not.
  const [isMinting, setIsMinting] = useState(false);

  const [NFTContract, setNFTContract] = useState(null);

  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  function handleDateInput({ target }) {
    setDate(target.value);
  }

  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }

  useEffect(() => {
    calculateZodiacSign(date);
  }, [date]);

  function handleDateInput({ target }) {
    setDate(target.value);
  }

  function calculateZodiacSign(date) {
    let dateObject = new Date(date);
    let day = dateObject.getDate();
    let month = dateObject.getMonth();
    if (month == 0) {
      if (day >= 20) {
        setZodiacSign("Aquarius");
      } else {
        setZodiacSign("Capricorn");
      }
    } else if (month == 1) {
      if (day >= 19) {
        setZodiacSign("Pisces");
      } else {
        setZodiacSign("Aquarius");
      }
    } else if (month == 2) {
      if (day >= 21) {
        setZodiacSign("Aries");
      } else {
        setZodiacSign("Pisces");
      }
    } else if (month == 3) {
      if (day >= 20) {
        setZodiacSign("Taurus");
      } else {
        setZodiacSign("Aries");
      }
    } else if (month == 4) {
      if (day >= 21) {
        setZodiacSign("Gemini");
      } else {
        setZodiacSign("Taurus");
      }
    } else if (month == 5) {
      if (day >= 21) {
        setZodiacSign("Cancer");
      } else {
        setZodiacSign("Gemini");
      }
    } else if (month == 6) {
      if (day >= 23) {
        setZodiacSign("Leo");
      } else {
        setZodiacSign("Cancer");
      }
    } else if (month == 7) {
      if (day >= 23) {
        setZodiacSign("Virgo");
      } else {
        setZodiacSign("Leo");
      }
    } else if (month == 8) {
      if (day >= 23) {
        setZodiacSign("Libra");
      } else {
        setZodiacSign("Virgo");
      }
    } else if (month == 9) {
      if (day >= 23) {
        setZodiacSign("Scorpio");
      } else {
        setZodiacSign("Libra");
      }
    } else if (month == 10) {
      if (day >= 22) {
        setZodiacSign("Sagittarius");
      } else {
        setZodiacSign("Scorpio");
      }
    } else if (month == 11) {
      if (day >= 22) {
        setZodiacSign("Capricorn");
      } else {
        setZodiacSign("Sagittarius");
      }
    }
  }

  useEffect(() => {
    function initNFTContract() {
      const provider = new providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setNFTContract(new Contract(NFT_CONTRACT_ADDRESS, NFT.abi, signer));
    }
    initNFTContract();
  }, [account]);

  async function mintNFT() {
    setIsMinting(true);
    try {
      await NFTContract.mintNFT(account, zodiacSign);
    } catch (e) {
    } finally {
      setIsMinting(false);
    }
  }

  if (account === null) {
    return (
      <div className="App">
        {" "}
        <br />
        {isWalletInstalled ? (

           <button class="button" onClick={connectWallet}>

                <span class="button__text">
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>n</span>
                <span>e</span>
                <span>c</span>t</span>
                <span> </span>
                <span>W</span>
                <span>a</span>
                <span>l</span>
                <span>l</span>
                <span>e</span>
                <span>t</span>

                <svg class="button__svg" role="presentational" viewBox="0 0 600 600">
                
                <defs>
                  <clipPath id="myClip">
                    <rect x="0" y="0" width="100%" height="50%" />
                  </clipPath>
                </defs>

                <g clip-path="url(#myClip)">
                  <g id="money">
                    <path
                      d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z"
                      fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                    <path
                      d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z"
                      fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                  </g>
                  
                  <g id="creditcard">
                    <path
                      d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z"
                      fill="#a76fe2" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                    <path
                      d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z"
                      fill="#ffdc67" />
                    <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
                  </g>
                </g>

                <g id="wallet">
                  <path
                    d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z"
                    fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                  <path
                    d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z"
                    fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                  <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#a4bdc1" stroke="#323c44"
                    stroke-miterlimit="10" stroke-width="14" />
                  <path
                    d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z"
                    fill="#7b8f91" />
                  <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
                </g>

              </svg>

              </button>
            ) : (
              <p class="mint">Install Metamask wallet</p>
            )
          }

        </div>
    );
  }
  return (
    <div className="App">
      <h1>Horoscope NFT Minting Dapp</h1>
      <p class="mint">Connected as: {account}</p>

      <input onChange={handleDateInput} value={date} type="date" id="dob" />
      <br />
      <br />
      {zodiacSign ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 300 300"
          width="400px"
          height="400px"
        >
          <style>{`.base { fill: white; font-family: serif; font-size: 24px;`}</style>
          <rect width="100%" height="100%" fill="black" />
          <text
            x="50%"
            y="50%"
            class="base"
            dominant-baseline="middle"
            text-anchor="middle"
          >
            {zodiacSign}
          </text>
        </svg>
      ) : null}

      <br />
      <br />
      <button class="mint" isLoading={isMinting} onClick={mintNFT}>
        Mint
      </button>
    </div>
  );
}
export default App;