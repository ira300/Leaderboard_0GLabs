# 🧾 Leaderboard 0G Labs

Smart contract to maintain a leaderboard on the ZeroGravity (0G) testnet. Players can submit scores with a small fee, and the highest scorers stay at the top!

---

## 🚀 Technologies Used

- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.org/)
- [Solidity ^0.8.19](https://docs.soliditylang.org/)
- [ZeroGravity Testnet (0G)](https://chainscan-galileo.0g.ai/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## ⚙️ Installation

### 1. Clone the repository

```
git clone https://github.com/ira300/Leaderboard_0GLabs.git
cd Leaderboard_0GLabs
```
---

### 2. Install dependencies
```
npm install
```

---
### 3. Set up environment variables
Edit your hardhat.config.js file by placing your private key

```
nano hardhat.config.js
```
---
### hardhat.config.js
````
module.exports = {
  networks: {
    zerog: {
      url: "https://evmrpc-testnet.0g.ai",
      chainId: 16601,
      accounts: [`Your Private Key`], 
    },
  },
````
---
PRIVATE_KEY=your_private_key_here
⚠️ Never share your private key! Use a test account wallet for safety.

---

### 📦 Compile the contracts
```
npx hardhat compile
```
---
🚀 Deploy to ZeroG testnet
```
npx hardhat run scripts/deploy.js --network zerog
```
