import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js";




export const SendToken = () => {
    const {connection} = useConnection();
     const wallet = useWallet();
    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        let transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet?.publicKey,
            toPubkey: to,
            lamports: amount * LAMPORTS_PER_SOL
        }));
        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }
    return (
        <div style={{padding:"2rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <input id="to" type="text" placeholder="to"/><br/> 
          <input id="amount" type="text" placeholder="amount"/><br/>
          <button onClick={sendTokens}>Send Token</button>

        </div>
    )
}