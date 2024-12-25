import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from "react";


export const ShowBalance = () => {
    const wallet = useWallet();
    const {connection} = useConnection();
     async function getBalance() {
        let balance = await connection.getBalance(wallet?.publicKey);
        document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
        console.log(balance);
    }
    useEffect(() => {
        getBalance();
    },[wallet?.publicKey])
    return (
        <div style={{padding:"2rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
           
            <p>Address: {wallet.publicKey?.toBase58()}</p><br/>
            <p>Balance Sol: {}</p>
            <span id="balance"></span>
        </div>
    )
} 