const hre = require("hardhat"); 

async function main() {  

    const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
    const hscp = await horoscopeNFT.deploy();   
    await hscp.deployed();
	
	//since we are testing, you should mention your own Eth wallet address
    const myAddress="0xcB46Bfb7315eca9ECd42D02C1AE174DA4BBFf291";
    console.log("horoscopeNFT deployed to:", hscp.address);   

    let txn = await hscp.mintNFT(myAddress, 'LEO');
    await txn.wait();

 } 

main()
    .then(() => process.exit(0))  
    .catch((error) => {    
    console.error(error);
    process.exit(1); 
 });