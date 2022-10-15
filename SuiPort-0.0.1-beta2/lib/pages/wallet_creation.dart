import 'dart:developer';
import 'dart:html';

import 'package:bip39/bip39.dart' as bip39;
import 'package:web3dart/web3dart.dart';
import 'package:ed25519_hd_key/ed25519_hd_key.dart';
import 'package:hex/hex.dart';

abstract class WalletAddressService {
  String generateMnemonic();
  Future<String> getPrivateKey(String mnemonic);
  Future<EthereumAddress> getPublicKey(String privateKey);
}

class WalletAddress implements WalletAddressService {
  @override
  String generateMnemonic() {
    return bip39.generateMnemonic();
  }

  @override
  

  Future<String> getPrivateKey(String mnemonic) async {
    print("getPrivateKey");

    final seed = bip39.mnemonicToSeed(mnemonic);
    KeyData master = await ED25519_HD_KEY.getMasterKeyFromSeed(seed);
    final privateKey = HEX.encode(master.key);

    ////test start
    
    KeyData keydata = await ED25519_HD_KEY.derivePath("m/44'/60'", seed);
    final privateKey1 = HEX.encode(keydata.key);
    print(privateKey1.toString());            
    ///test end

    return privateKey1;
  }

  @override
  Future<EthereumAddress> getPublicKey(String privateKey) async {
    final private = EthPrivateKey.fromHex(privateKey);
    final address = await private.extractAddress();
    print(address.hexEip55);
   
    return address;
  }


  
}