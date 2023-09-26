// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Web3 from "web3";
import ERC20ABI from "../ABI/erc20Bytecode.json"
import NFTABI from "../ABI/NFT.json"
import ERC20Bytecode from "../ABI/erc20Bytecode.json";
import NFTBytecode from "../ABI/NFTBytecode.json";
import DAOABI from "../ABI/DAO.json";
import DAOBytecode from "../ABI/DAOBytecode.json";
import StakingABI from "../ABI/Staking.json";
import StakingBytecode from "../ABI/StakingBytecode.json";
// import VestingABI from "../ABI/Vesting.json";
// import VestingBytecode from "../ABI/VestingBytecode.json";
import FarmingABI from "../ABI/Farming.json";
import FarmingBytecode from "../ABI/FarmingBytecode.json";
import DeflationaryABI from "../ABI/Deflatationary.json";
import DeflationaryBytecode from "../ABI/DeflationaryBytecode.json";
import JackpotABI from "../ABI/Jackpot.json";
import JackpotBytecode from "../ABI/JackpotBytecode.json";
import LotteryGameABI from "../ABI/LotteryGame.json";
import LotteryGameBytecode from "../ABI/LotteryGameBytecode.json";
import PrizeWinABI from  "../ABI/PrizeWin.json";
import PrizeWinBytecode from "../ABI/PrizeWinBytecode.json";
import CrowdsaleABI from "../ABI/Crowdsale.json";
import CrowdsaleBytecode from "../ABI/CrowdsaleBytecode.json";




const web3 = new Web3(window.ethereum);

const account = web3.eth.accounts.privateKeyToAccount(
  "deefae67a7b2a95aaaa85d6bbdda9a3cf03107a9da09c1cbe57d88bbfa5461c1"
);
// ff05b95263e55b3561b4f2d6b587021574a6ec90ffe33db369d768e038834b2a



export async function metamaskConnection() {
  if (typeof window.ethereum === "undefined") {
    console.log("Please install MetaMask to use this feature.");
  }

  try {
    // Connect to MetaMask
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // MetaMask is connected and the user has allowed access to their accounts.
    let account = accounts[0];
    console.log("Connected to MetaMask!");
    console.log("Your address:", accounts);
    localStorage.setItem("wallet_address", account);
    // Create a new Web3 instance
    const web3 = new Web3(window.ethereum);

    // Example: Get the current Ethereum network
    const networkId = await web3.eth.net.getId();
    console.log("Current network ID:", networkId);

    // Listen for account changes
    await window.ethereum.on("accountsChanged", (accounts) => {
      account = accounts[0];
      window.location.reload()
      
    });
    
    return account;
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
  }
}

export async function deployERC20() {
  // let Status;
  let contractAddress;
  let name = document.querySelector("#tokenName").value;
  let symbol = document.querySelector("#tokenSymbol").value;
  let decimales = document.querySelector("#counter").textContent;
  let totalSupply = document.querySelector("#totalSupply").value;

  try {
    if (!name || !symbol || !totalSupply || !decimales) {
      alert("All input values are required");
    } else {
      document.querySelector(".loader_block").style.display = "block";
      // Status = await sendTx();
    }

    // if (Status === true) {
    const ERC20 = new web3.eth.Contract(ERC20ABI);
    const gasPrice = await web3.eth.getGasPrice();

    const txData = ERC20.deploy({
      data: ERC20Bytecode,
      arguments: [name, symbol, decimales, totalSupply],
    });

    const gasLimit = await txData.estimateGas({ from: account.address });

    const tx = {
      from: account.address,
      gasPrice: gasPrice,
      gas: gasLimit,
      data: txData.encodeABI(),
      nonce: await web3.eth.getTransactionCount(account.address),
    };

    const signedTx = await web3.eth.accounts.signTransaction(
      tx,
      account.privateKey
    );
    const receipt = await web3.eth
      .sendSignedTransaction(signedTx.rawTransaction)
      .on("receipt", function (receipt) {
        console.log(receipt.contractAddress);
        return receipt;
      });

    contractAddress = receipt.contractAddress;

    document.querySelector(".loader_block").style.display = "none";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".deploy_information").style.display = "block";
    document.querySelector(".Deploy_information_block").style.display = "block";
    document.querySelector(".address").innerHTML = contractAddress;
    // } else {
    //   document.querySelector(".loader_block").style.display = "none";
    //   alert("Something went wrong !!!");
    // }
  } catch (error) {
    // Handle the error here
    console.error(error);

    document.querySelector(".loader_block").style.display = "none";
  }
}

export async function deployNFT() {
  let contractAddress;
  let name = document.querySelector("#nftName").value;
  let symbol = document.querySelector("#nftSymbol").value;
  let uri = document.querySelector("#uri").value;

  if (!name || !symbol || !uri) {
    alert("All input values are required");
  } else {
    document.querySelector(".loader_block").style.display = "block";

    try {
      const NFT = await new web3.eth.Contract(NFTABI);
      const gasPrice = await web3.eth.getGasPrice();
      const txData = NFT.deploy({
        data: NFTBytecode,
        arguments: [name, symbol, uri],
      });
      const gasLimit = await txData.estimateGas({ from: account.address });
      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };
      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );
      const receipt = await web3.eth
        .sendSignedTransaction(signedTx.rawTransaction)
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress);
          return receipt;
        });

      const contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } catch (error) {
      // Handle the error here
      alert(error);

      document.querySelector(".loader_block").style.display = "none";
    }
  }
}

export async function deployDAO() {
  let Status;
  let contractAddress;
  let duration = getDate();
  let passVote = document.querySelector("#vote").value;
  let partnersAddress = document.querySelector("#address").textContent;

  try {
    if (!duration || !passVote || !partnersAddress) {
      throw new Error("All input values are required");
    } else {
      document.querySelector(".loader_block").style.display = "block";
      Status = await sendTx();
    }

    if (Status === true) {
      const DAO = new web3.eth.Contract(DAOABI);
      const gasPrice = await web3.eth.getGasPrice();

      const txData = DAO.deploy({
        data: DAOBytecode,
        arguments: [partnersAddress, duration, passVote],
      });

      const gasLimit = await txData.estimateGas({ from: account.address });

      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };

      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );
      const receipt = await web3.eth
        .sendSignedTransaction(signedTx.rawTransaction)
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress);
          return receipt;
        });

      contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } else {
      document.querySelector(".loader_block").style.display = "none";
      alert("Something went wrong !!!");
    }
  } catch (error) {
    // Handle the error here
    console.error(error);

    document.querySelector(".loader_block").style.display = "none";
  }
}

export async function deployStaking() {
  let Status;
  let contractAddress;
  let name = document.querySelector("#stakingName").value;
  let symbol = document.querySelector("#stakingSymbol").value;
  let rewCount = document.querySelector("#stakingRew").value;
  let compoundFreq = Number(document.querySelector("#stakingCompound").value);
  let compoundFreqInSeconds = compoundFreq * 3600;
  let minStake = document.querySelector("#stakeMin").value;
  console.log(compoundFreqInSeconds);
  try {
    if (!name || !symbol || !rewCount || !compoundFreq || !minStake) {
      throw new Error("All input values are required");
    } else {
      document.querySelector(".loader_block").style.display = "block";
      Status = await sendTx();
    }

    if (Status === true) {
      const Staking = new web3.eth.Contract(StakingABI);
      const gasPrice = await web3.eth.getGasPrice();

      const txData = Staking.deploy({
        data: StakingBytecode,
        arguments: [name, symbol, rewCount, minStake, compoundFreqInSeconds],
      });

      const gasLimit = await txData.estimateGas({ from: account.address });

      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };

      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );
      const receipt = await web3.eth
        .sendSignedTransaction(signedTx.rawTransaction)
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress);
          return receipt;
        });

      contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } else {
      document.querySelector(".loader_block").style.display = "none";
      alert("Something went wrong !!!");
    }
  } catch (error) {
    // Handle the error here
    console.error(error);

    document.querySelector(".loader_block").style.display = "none";
  }
}

export async function deployVesting() {
  let Status;
  let contractAddress;
  let name = document.querySelector("#stakingName").value;
  let symbol = document.querySelector("#stakingSymbol").value;
  let rewCount = document.querySelector("#stakingRew").value;
  let compoundFreq = document.querySelector("#stakingCompound").value;
  let minStake = document.querySelector("#stakeMin").value;

  try {
    if (!name || !symbol || !rewCount || !compoundFreq || !minStake) {
      throw new Error("All input values are required");
    } else {
      document.querySelector(".loader_block").style.display = "block";
      Status = await sendTx();
    }

    if (Status === true) {
      const Staking = new web3.eth.Contract(StakingABI);
      const gasPrice = await web3.eth.getGasPrice();

      const txData = Staking.deploy({
        data: StakingBytecode,
        arguments: [name, symbol, rewCount, minStake, compoundFreq],
      });

      const gasLimit = await txData.estimateGas({ from: account.address });

      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };

      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );
      const receipt = await web3.eth
        .sendSignedTransaction(signedTx.rawTransaction)
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress);
          return receipt;
        });

      contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } else {
      document.querySelector(".loader_block").style.display = "none";
      alert("Something went wrong !!!");
    }
  } catch (error) {
    // Handle the error here
    console.error(error);

    document.querySelector(".loader_block").style.display = "none";
  }
}

export async function deployFarming() {
  let Status;
  let contractAddress;
  let rewardToken = document.querySelector("#farmingRewardToken").value;
  let coefficient = document.querySelector("#farimngCoefficent").value;
  let farmingOwner = document.querySelector("#farmingOwner").value;

  try {
    if (!rewardToken || !coefficient || !farmingOwner) {
      throw new Error("All input values are required");
    } else {
      document.querySelector(".loader_block").style.display = "block";
      Status = await sendTx();
    }

    if (Status === true) {
      const Farming = new web3.eth.Contract(FarmingABI);
      const gasPrice = await web3.eth.getGasPrice();

      const txData = Farming.deploy({
        data: FarmingBytecode,
        arguments: [rewardToken, coefficient, farmingOwner],
      });

      const gasLimit = await txData.estimateGas({ from: account.address });

      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };

      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );
      const receipt = await web3.eth
        .sendSignedTransaction(signedTx.rawTransaction)
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress);
          return receipt;
        });

      contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } else {
      document.querySelector(".loader_block").style.display = "none";
      alert("Something went wrong !!!");
    }
  } catch (error) {
    // Handle the error here
    console.error(error);

    document.querySelector(".loader_block").style.display = "none";
  }
}

export async function deployCrowdsale() {
  let Status;
  let contractAddress;
  let tokenAddressCrowd = document.querySelector("#tokenAddressCrowd").value;
  let tokenRateCrowd = document.querySelector("#tokenRateCrowd").value;
  let walletAddress = document.querySelector("#tokenWalletCrod").value;
  let initialOwner = document.querySelector("#initialOwnerCrowd").value;
  let blockDate = document.querySelector("#dateDurationCrowd").value;

  const dateObject = new Date(blockDate);

  // Convert the date object to seconds
  const closingTimeSeconds = dateToSeconds(dateObject);

  try {
    if (
      !tokenRateCrowd ||
      !walletAddress ||
      !tokenAddressCrowd ||
      !closingTimeSeconds ||
      !initialOwner
    ) {
      throw new Error("All input values are required");
    } else {
      document.querySelector(".loader_block").style.display = "block";
      Status = await sendTx();
    }

    if (Status === true) {
      const Crowdsale = new web3.eth.Contract(CrowdsaleABI);
      const gasPrice = await web3.eth.getGasPrice();
      const txData = Crowdsale.deploy({
        data: CrowdsaleBytecode,
        arguments: [
          tokenRateCrowd,
          walletAddress,
          tokenAddressCrowd,
          closingTimeSeconds,
          initialOwner,
        ],
      });
      const gasLimit = await txData.estimateGas({ from: account.address });
      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };
      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );
      const receipt = await web3.eth
        .sendSignedTransaction(signedTx.rawTransaction)
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress);
          return receipt;
        });

      contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } else {
      document.querySelector(".loader_block").style.display = "none";
      alert("Something went wrong !!!");
    }
  } catch (error) {
    // Handle the error here
    console.error(error);

    document.querySelector(".loader_block").style.display = "none";
  }
}

export async function WinWin() {
  let Status;
  let contractAddress;
  let tokenAddressCrowd = document.querySelector("#tokenAddressCrowd").value;
  let tokenRateCrowd = document.querySelector("#tokenRateCrowd").value;
  let walletAddress = document.querySelector("#tokenWalletCrod").value;
  let initialOwner = document.querySelector("#initialOwnerCrowd").value;
  let blockDate = document.querySelector("#dateDurationCrowd").value;

  const dateObject = new Date(blockDate);

  // Convert the date object to seconds
  const closingTimeSeconds = dateToSeconds(dateObject);

  try {
    if (
      !tokenRateCrowd ||
      !walletAddress ||
      !tokenAddressCrowd ||
      !closingTimeSeconds ||
      !initialOwner
    ) {
      throw new Error("All input values are required");
    } else {
      document.querySelector(".loader_block").style.display = "block";
      Status = await sendTx();
    }

    if (Status === true) {
      const Crowdsale = new web3.eth.Contract(CrowdsaleABI);
      const gasPrice = await web3.eth.getGasPrice();
      const txData = Crowdsale.deploy({
        data: CrowdsaleBytecode,
        arguments: [
          tokenRateCrowd,
          walletAddress,
          tokenAddressCrowd,
          closingTimeSeconds,
          initialOwner,
        ],
      });
      const gasLimit = await txData.estimateGas({ from: account.address });
      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };
      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );
      const receipt = await web3.eth
        .sendSignedTransaction(signedTx.rawTransaction)
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress);
          return receipt;
        });

      contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } else {
      document.querySelector(".loader_block").style.display = "none";
      alert("Something went wrong !!!");
    }
  } catch (error) {
    // Handle the error here
    console.error(error);

    document.querySelector(".loader_block").style.display = "none";
  }
}

export async function jackpot() {
  let Status;
  let contractAddress;
  let ticketPrice = document.querySelector("#ticketPrice").value;
  let ticketCount = document.querySelector("#ticketCount").value;
  let ownerAddress = document.querySelector("#ownerAddress").value;
  let percentOfWinner = document.querySelector("#counter").textContent;

  console.log(typeof percentOfWinner);

  try {
    if (!ticketPrice || !ticketCount || !ownerAddress) {
      throw new Error("All input values are required");
    }

    document.querySelector(".loader_block").style.display = "block";
    Status = await sendTx();

    if (Status === true) {
      const Jackpot = new web3.eth.Contract(JackpotABI);
      const gasPrice = await web3.eth.getGasPrice();

      const txData = Jackpot.deploy({
        data: JackpotBytecode,
        arguments: [ticketPrice, percentOfWinner, ownerAddress, ticketCount],
      });

      const gasLimit = await txData.estimateGas({ from: account.address });

      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };

      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );

      const receipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
      );

      console.log(receipt.contractAddress);
      contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } else {
      throw new Error("Something went wrong!");
    }
  } catch (error) {
    document.querySelector(".loader_block").style.display = "none";
    alert(error.message);
  }
}

export async function lotteryGame() {
  let Status;
  let contractAddress;
  let minBet = document.querySelector("#minBet").value;
  let maxPlayerCount = document.querySelector("#maxPlayerCount").value;
  let ownerAddress = document.querySelector("#ownerAddress").value;
  let endDate = document.querySelector("#endDate").value;

  const dateObject = new Date(endDate);

  // Convert the date object to seconds
  const endDayInSeconds = dateToSeconds(dateObject);

  try {
    if (!minBet || !maxPlayerCount || !ownerAddress || !endDate) {
      throw new Error("All input values are required");
    }

    document.querySelector(".loader_block").style.display = "block";
    Status = await sendTx();

    if (Status) {
      const LotteryGame = new web3.eth.Contract(LotteryGameABI);
      const gasPrice = await web3.eth.getGasPrice();

      const txData = LotteryGame.deploy({
        data: LotteryGameBytecode,
        arguments: [minBet, maxPlayerCount, endDayInSeconds, ownerAddress],
      });

      const gasLimit = await txData.estimateGas({ from: account.address });

      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };

      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );

      const receipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
      );

      console.log(receipt.contractAddress);
      contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } else {
      throw new Error("Something went wrong!");
    }
  } catch (error) {
    document.querySelector(".loader_block").style.display = "none";
    alert(error.message);
  }
}

export async function prizeWin() {
  let Status;
  let contractAddress;
  let percent1 = document.querySelector("#firstGroupInp").value;
  let percent2 = document.querySelector("#secondGroupInp").value;
  let percentPool1 = document.querySelector("#counter1").textContent;
  let percentPool2 = document.querySelector("#counter2").textContent;
  let percentPool3 = document.querySelector("#counter3").textContent;
  let creator = document.querySelector("#ownerAddress").value;

  try {
    if (!percent1 || !percent2) {
      throw new Error("All input values are required");
    }

    document.querySelector(".loader_block").style.display = "block";
    Status = await sendTx();

    if (Status === true) {
      const prizeWin = new web3.eth.Contract(PrizeWinABI);
      const gasPrice = await web3.eth.getGasPrice();

      const txData = prizeWin.deploy({
        data: PrizeWinBytecode,
        arguments: [
          percent1,
          percent2,
          percentPool1,
          percentPool2,
          percentPool3,
          creator,
        ],
      });

      const gasLimit = await txData.estimateGas({ from: account.address });

      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };

      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );

      const receipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
      );

      console.log(receipt.contractAddress);
      contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } else {
      throw new Error("Something went wrong!");
    }
  } catch (error) {
    document.querySelector(".loader_block").style.display = "none";
    alert(error.message);
  }
}

export async function deployDeflationary() {
  let Status;
  let contractAddress;
  let name = document.querySelector("#defTokenName").value;
  let symbol = document.querySelector("#defSymbol").value;
  let decimales = document.querySelector("#counter").textContent;
  let totalSupply = document.querySelector("#defTotal").value;
  let owner = document.querySelector(".ownewrAddress").textContent;

  try {
    if (!name || !symbol || !totalSupply || !decimales) {
      throw new Error("All input values are required");
    }

    document.querySelector(".loader_block").style.display = "block";
    Status = await sendTx();

    if (Status === true) {
      const Deflationary = new web3.eth.Contract(DeflationaryABI);
      const gasPrice = await web3.eth.getGasPrice();

      const txData = Deflationary.deploy({
        data: DeflationaryBytecode,
        arguments: [name, symbol, decimales, totalSupply, owner],
      });

      const gasLimit = await txData.estimateGas({ from: account.address });

      const tx = {
        from: account.address,
        gasPrice: gasPrice,
        gas: gasLimit,
        data: txData.encodeABI(),
        nonce: await web3.eth.getTransactionCount(account.address),
      };

      const signedTx = await web3.eth.accounts.signTransaction(
        tx,
        account.privateKey
      );

      const receipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
      );

      console.log(receipt.contractAddress);
      contractAddress = receipt.contractAddress;

      document.querySelector(".loader_block").style.display = "none";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".deploy_information").style.display = "block";
      document.querySelector(".Deploy_information_block").style.display =
        "block";
      document.querySelector(".address").innerHTML = contractAddress;
    } else {
      throw new Error("Something went wrong!");
    }
  } catch (error) {
    document.querySelector(".loader_block").style.display = "none";
    alert(error.message);
  }
}

export async function sendTx() {
  let status;
  try {
    const Price = await getChainId();
    console.log(Price);
    let status;

    try {
      const gasLimit = 5500000; // Set your desired gas limit

      const txParams = {
        from: account.address,
        to: "0x922E9527bF3aE7F885cD1Be70f7353d669210Db9",
        value: Price,
        gas: gasLimit,
      };

      const receipt = await web3.eth.sendTransaction(txParams);
      status = receipt.status;
      console.log(status);
      return status;
    } catch (error) {
      console.error("Error:", error);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function walletConnectionChange(chain) {
  // chain_name = event.target.id;

  switch (chain) {
    case "binance":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x38",
            chainName: "Binance Smart Chain Mainnet",
            rpcUrls: ["https://bsc-dataseed.binance.org/"],
            nativeCurrency: {
              symbol: "BNB",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "binance");
      break;
    case "binanceTestNet":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x61",
            chainName: "Binance Smart Chain TestNet",
            rpcUrls: ["https://endpoints.omniatech.io/v1/bsc/testnet/public"],
            nativeCurrency: {
              symbol: "tBNB",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "binanceTestNet");
      break;
    case "avalanche":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xA86A",
            chainName: "Binance Smart Chain Mainnet",
            rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
            nativeCurrency: {
              symbol: "AVAX",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "avalanche");
      break;
    case "ethereum":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x1",
            chainName: "Ethereum Mainnet",
            rpcUrls: ["https://eth.llamarpc.com"],
            nativeCurrency: {
              symbol: "ETH",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "ethereum");
      break;
    case "bitgert":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x7f08",
            chainName: "Bitgert Mainnet",
            rpcUrls: ["https://rpc.icecreamswap.com"],
            nativeCurrency: {
              symbol: "Brise",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "fantom");
      break;
    case "polygon":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x89",
            chainName: "Polygon Mainnet",
            rpcUrls: ["https://polygon.llamarpc.com"],
            nativeCurrency: {
              symbol: "MATIC",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "polygon");
      break;
    case "metis":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x440",
            chainName: "Metis Andromeda Mainnet",
            rpcUrls: ["https://andromeda.metis.io/?owner=1088"],
            nativeCurrency: {
              symbol: "METIS",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "harmony");
      break;

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x64",
            chainName: "Harmony Mainnet Shard 0",
            rpcUrls: ["https://rpc.gnosischain.com"],
            nativeCurrency: {
              symbol: "xDAI",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "gnosis");
      break;
    case "arbitrum":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xA4B1",
            chainName: "Arbitrum One",
            rpcUrls: ["https://arb1.arbitrum.io/rpc"],
            nativeCurrency: {
              symbol: "ETH",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "arbitrum");
      break;
    case "optimism":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xa",
            chainName: "Optimism",
            rpcUrls: ["https://mainnet.optimism.io"],
            nativeCurrency: {
              symbol: "ETH",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "optimism");
      break;

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x313",
            chainName: "Acala Network",
            rpcUrls: ["https://eth-rpc-acala.aca-api.network"],
            nativeCurrency: {
              symbol: "ACA",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "acala");
      break;
    case "mantle":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x1388",
            chainName: "Mantle",
            rpcUrls: ["https://rpc.mantle.xyz"],
            nativeCurrency: {
              symbol: "BIT",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "astar");
      break;
    case "aurora":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x4E454152",
            chainName: "Aurora Mainnet",
            rpcUrls: [
              "https://endpoints.omniatech.io/v1/aurora/mainnet/public",
            ],
            nativeCurrency: {
              symbol: "ETH",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "aurora");
      break;
    case "kava":
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x8AE",
            chainName: "KAVA",
            rpcUrls: ["https://evm.kava.io"],
            nativeCurrency: {
              symbol: "KAVA",
              decimals: 18,
            },
          },
        ],
      });
      localStorage.setItem("chain", "kava");
      break;

    default:
      break;
  }
}