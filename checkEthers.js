const { ethers } = require('ethers');
const { AlchemyProvider } = require('@alch/alchemy-web3');

// Ganti dengan Alchemy API Key Anda
const alchemyApiKey = 'YOUR_ALCHEMY_API_KEY';

// Ganti dengan alamat dompet Ethereum yang ingin Anda periksa saldonya
const walletAddress = 'YOUR_ETH_WALLET_ADDRESS';

// Inisialisasi provider menggunakan Alchemy
const alchemyProvider = new AlchemyProvider('mainnet', alchemyApiKey);

// Fungsi untuk memeriksa saldo Ether
async function checkBalance() {
  try {
    // Dapatkan saldo Ether menggunakan alamat dompet
    const balance = await alchemyProvider.getBalance(walletAddress);

    // Konversi saldo dari wei ke Ether
    const etherBalance = ethers.utils.formatEther(balance);

    console.log(`Saldo Ether dari alamat ${walletAddress}: ${etherBalance} ETH`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Panggil fungsi untuk memeriksa saldo Ether
checkBalance();
