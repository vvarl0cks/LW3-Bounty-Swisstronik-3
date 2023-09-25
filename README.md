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

# Summary   

`01. Provide an explanation of the value retrieved from the RPC call.`   
<br>
✅ Swisstronik Network:
✔ Value: 0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4    
✔ Explanation: This hexadecimal string represents the raw data stored in the contract's first storage slot, which corresponds to the private message variable. The value 0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4 encodes the current message stored in the contract. This value can change when someone calls the setMessage() function to update the message.   
<br>
✅ Mumbai Network and Sepolia Network:   
✔ Value: 0x0000000000000000000000000000000000000000000000000000000000000000   
✔ Explanation: These values are also hexadecimal strings, but they consist entirely of zeros. This suggests that either no meaningful data was stored in the first storage slot of the contract on these networks. Essentially, it indicates that there is no message stored in the contract on these networks, or the message is an empty string.   
<br>
`02. What does this retrieved value represent? Is there any difference if this RPC call is made on the Sepolia or Mumbai networks?`   
<br>
✅ Swisstronik Network, you are seeing the encoded or hashed representation of the current message stored in the contract's first storage slot.   
✅ Mumbai and Sepolia Networks, you are seeing all zeros in the first storage slot, indicating an empty message or no message has been set on these networks for the given contract.    

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

