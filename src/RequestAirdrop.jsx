import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export const RequestAirdrop = () => {
       const wallet = useWallet();
       const {connection} = useConnection();

       async function requestAirdrop() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return (
        <div style={{padding:"2rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <br></br>
            <input id="amount" type="text" placeholder="Amount to airdrop"/><br/>
            <button onClick={requestAirdrop}>Request Airdrop</button>
        </div>
    )
}