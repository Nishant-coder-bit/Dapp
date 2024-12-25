import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";




export const SignMessage = () => {
      const {publicKey,signMessage} = useWallet();
    async function signVerifyMessage() {
        if(!publicKey) throw new Error("Wallet not connected");
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        let message = document.getElementById("message").value;
        let encodedMessage = new TextEncoder().encode(message);
        const signature = await  signMessage(encodedMessage);

        if(!ed25519.verify(signature,encodedMessage,publicKey.toBytes())) throw new Error("Signature verification failed");
        alert("Message Signature verified", `Signature: ${signature}`);
    }
    return (
        <div style={{padding:"2rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
       
           <input id="message" type="text" placeholder="Message"/><br/>
           <button onClick={signVerifyMessage}>Sign Message</button>
       
        </div>

    )
}