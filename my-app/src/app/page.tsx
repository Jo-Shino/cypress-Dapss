"use client";
import Image from "next/image";
interface Window {
  ethereum: any;
}

declare const window: Window;

export default function Home() {
  const connectWallet = async () => {
    try {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (account.length > 0) {
        console.log(account[0]);
        return account[0];
      } else {
        return "";
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button
          id="button"
          onClick={() => {
            connectWallet();
          }}
        >
          メタマスクを接続
        </button>
      </div>
    </main>
  );
}
