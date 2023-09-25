# LearnWeb3DAO <> Swisstronik Challenge #3   

💰 Bounty: https://learnweb3.io/bounties/swisstronik-challenge-3/   
📚 Guide: https://swisstronik.gitbook.io/swisstronik-docs/build-on-swisstronik/contract-deployment-hardhat   

# Task   

`Make a JSON RPC call using eth_getStorageAt() to get the first storage variable (slot #0) of any deployed smart contract and explain what is the retrieved value or if there is any difference with other blockchains when using this RPC method.`   

# Contract   

`0xf84Df872D385997aBc28E3f07A2E3cd707c9698a` use it to retrieve the 'message' string variable (slot #0)   


# Deploy   
```shell
gitpod /workspace/LW3-Bounty-Swisstronik-3 (main) $ npx hardhat run scripts/getStorageAt.js
Getting Message from Swisstronik:
BYTES:  0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4
string
false
Getting Message from Mumbai:
BYTES:  0x0000000000000000000000000000000000000000000000000000000000000000
string
false
Getting Message from Sepolia:
BYTES:  0x0000000000000000000000000000000000000000000000000000000000000000
string
false
```   

# Console   

<img src="https://i.postimg.cc/ZnZxQ7zn/gpod.png"/>   

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
``` 

