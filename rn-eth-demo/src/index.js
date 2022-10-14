import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Metamask from './Metamask';

// const bip39 = require('bip39')
// const hdkey = require('hdkey');
// const ethUtil = require('ethereumjs-util');


// const mnemonic = bip39.generateMnemonic(); //generates string
// console.log(mnemonic);
// bip39.mnemonicToSeed(mnemonic)
//   .then(seed => {
//     console.log('Seed: ', seed);
//     console.log('mnemonic: ', mnemonic);

//     const root = hdkey.fromMasterSeed(seed);
//     const masterPrivateKey = root.privateKey.toString('hex');
//     console.log('mpkey' , masterPrivateKey);

//     const addrNode = root.derive("m/44'/60'/0'/0/0"); //line 1
//     const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
//     const addr = '0x' + ethUtil.publicToAddress(pubKey).toString('hex');
//     const address = ethUtil.toChecksumAddress(addr);
//     console.log('address', address);
//   });
// console.log(root);

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Metamask />
   
    <p>Generate new mnemonics: {}</p>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
