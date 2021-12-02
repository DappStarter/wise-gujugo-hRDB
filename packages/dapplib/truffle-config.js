require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food jar release stereo unknown coral light army ghost'; 
let testAccounts = [
"0xfcc2670790a4da1bc2a2eb47fca1d5c0775ee9a37784348ec18c409192c916b7",
"0x6284c6e271b16badae69411a44bff30958153e8a25240b6c1d1f99f42f983d5e",
"0x6416f5647b0f030b0ad5d6b14d00f30263a81823498c14b064d4991e01aab2ef",
"0x56d8e4a87729d3fc7544d637868d1f579485f72bdd24f0ff6999c44ae7191e3e",
"0xb549fe682ffab8b24116b6e4f373d17177eabe2749ff85ad473c6d980e1c861b",
"0x6beb6476792b79616642b00fd2a2c5532f0307515632dbf7d1ffba41988bd229",
"0x26b90bdc0b84ce0181706b4b411f23c2d65f50abadfb77b0496cc0ff9121a999",
"0x6a29efaa057a05b2f4825e72889c0b753315abadec6b884df9b94191a1135703",
"0x4c3162185b4e0fbe01ca9d8bc6ce40aab14e30244864ff343629b979a27d141d",
"0xf8ce750fd556c013e7754701f256fdbec49e147ce0b3209fb96e8d2aa04cd1d5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

