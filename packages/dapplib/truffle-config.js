require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name razor sister hospital just arena metal ghost'; 
let testAccounts = [
"0x5596b43967bb5c437c745aba63e617e756f007a7674dd4f55c81c048d4bfe334",
"0x0a2b440b1e819f4a052671eaf8d9fbfd4fa1233657a2bd75fbf68e0f512538bf",
"0x7cdf6364016cd5f92cd1b2c30cd287d9ffe1cc6e43bad6af321f48b9f75152d0",
"0x60abad95794db52c745ce5e04467767001ff609d55a134e5250491c411a1ea4d",
"0x30c28289179ae2ca67d1911588dd2483ab805cd7ca286c25f8f879c4aefcf8a5",
"0x6b6dfd107aab9b534fd40b67f7054196eb71678145bad11b24655c0bc676bea9",
"0x96954b352d4beb9032df7d0a586d606ceaaa35062a342e37e887673e338662b4",
"0xaf9fab5f703247f0df1cafb704b1396ce05fcc9b56160e9642f54d310292615b",
"0x04629eb4fef43236181696627d9ff9f9d4984e402bc5a1bb8e7eed6dec4abe4f",
"0xd3a24c056999cc4c1a36356d7074615ddec2ac0296dc9498cc9600b08e5d6b9b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

