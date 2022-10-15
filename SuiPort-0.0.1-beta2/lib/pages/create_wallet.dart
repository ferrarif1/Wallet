import 'dart:developer';


import 'package:wallet/common/layout.dart';
import 'package:wallet/common/svg.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:wallet/pages/backup_wallet.dart';
import 'package:wallet/utils/mnemonic.dart';
import '../controller/global_theme_controller.dart';

import 'package:web3dart/web3dart.dart';
import 'dart:convert';
import 'package:convert/convert.dart';
import 'package:dart_bip32_bip44/dart_bip32_bip44.dart';
import 'package:bip39/bip39.dart' as bip39;

class CreateWalletPage extends StatelessWidget {
  const CreateWalletPage({super.key});
  @override
  Widget build(context) {
    GlobalThemeController theme = Get.find();
    return Scaffold(
      backgroundColor: theme.backgroundColor1,
      appBar: AppBar(
        backgroundColor: theme.backgroundColor1,
        elevation: 0.0,
        leading: IconButton(
            onPressed: () {
              Get.back();
            },
            icon: svgBack()),
      ),
      body: Container(
        padding: theme.pageGap,
        constraints: const BoxConstraints.expand(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Expanded(
              flex: 1,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Center(
                        child: svgCreateWallet(),
                      ),
                      Text(
                        'Create',
                        style: TextStyle(
                          color: theme.svgColor1,
                          fontSize: 26,
                        ),
                      ),
                      Text(
                        'New Wallet',
                        style: TextStyle(
                          color: theme.svgColor1,
                          fontSize: 24,
                        ),
                      ),
                      buildColumnGap(12.0),
                      Text(
                        'Creating a wallet generates new recovery passphrase. Using it you can backup and restore your wallet.',
                        style: TextStyle(
                          fontSize: 16,
                          color: theme.textColor2,
                        ),
                      ),
                    ],
                  )
                ],
              ),
            ),
            ElevatedButton(
              onPressed: () async {
                final mnemonic = generateMnemonic();
                //test2
                String seed = bip39.mnemonicToSeedHex(mnemonic);
                Chain chain = Chain.seed(seed);  
                ExtendedKey exkey = chain.forPath("m/44'/60'/0'/0/0");
                Credentials credentials = EthPrivateKey.fromHex(exkey.privateKeyHex()); //web3dart
                var address = await credentials.extractAddress(); //web3dart
              
                Get.to(const BackupWalletPage(), arguments: mnemonic+address.toString());
              },
              style: ButtonStyle(
                  foregroundColor: MaterialStateProperty.all(theme.textColor1),
                  backgroundColor:
                      MaterialStateProperty.all(theme.primaryColor1)),
              child: Padding(
                padding: theme.buttonPadding,
                child: const Text('Create Wallte Now'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
