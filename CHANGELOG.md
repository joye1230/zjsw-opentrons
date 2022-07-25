# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.0.0](https://github.com/Opentrons/opentrons/compare/v5.0.2...v6.0.0) (2022-07-14)


### Bug Fixes

* **add:** Dispay sortBy labels to labware and protocols ([#10475](https://github.com/Opentrons/opentrons/issues/10475)) ([c58c51c](https://github.com/Opentrons/opentrons/commit/c58c51c188cd1940e2c4bf77393a5256bb7daf63))
* **api:** delete legacy deck calibration file ([#10656](https://github.com/Opentrons/opentrons/issues/10656)) ([787c3a5](https://github.com/Opentrons/opentrons/commit/787c3a5a5586678fc0d74b497b80687ae7ec58f4))
* **api:** disallow thermocycler if item in conflicting slot ([#10516](https://github.com/Opentrons/opentrons/issues/10516)) ([b3735c2](https://github.com/Opentrons/opentrons/commit/b3735c29eb21a2f76e6d663dd4bdd439d18ad1cf)), closes [#9419](https://github.com/Opentrons/opentrons/issues/9419)
* **api:** drop loop parameters removed in Python 3.10 ([#9368](https://github.com/Opentrons/opentrons/issues/9368)) ([e549c8c](https://github.com/Opentrons/opentrons/commit/e549c8c20205f7575700ed4df0adae18990305a9)), closes [#9331](https://github.com/Opentrons/opentrons/issues/9331)
* **api:** Fix delays returning immediately ([#10334](https://github.com/Opentrons/opentrons/issues/10334)) ([fa72078](https://github.com/Opentrons/opentrons/commit/fa72078d746a63319d12e9e4638d6299d287d49b))
* **api:** fix multiple h/s bugs ([#10727](https://github.com/Opentrons/opentrons/issues/10727)) ([b8c7c88](https://github.com/Opentrons/opentrons/commit/b8c7c8878a8c99ad2f2c5d6bc150faecb0b7f7d4)), closes [#10605](https://github.com/Opentrons/opentrons/issues/10605) [#10258](https://github.com/Opentrons/opentrons/issues/10258)
* **api:** invalid state in poller ([#9959](https://github.com/Opentrons/opentrons/issues/9959)) ([9954d4a](https://github.com/Opentrons/opentrons/commit/9954d4a459122157c4ff9716aca654d9ad97d63a)), closes [#9940](https://github.com/Opentrons/opentrons/issues/9940)
* **api:** make opentrons_hardware not required ([#9605](https://github.com/Opentrons/opentrons/issues/9605)) ([32312c7](https://github.com/Opentrons/opentrons/commit/32312c7b577ce99e451fe385cb813e89754c64c5))
* **api:** mark JSONv6 run as failed if queued protocol command fails ([#10629](https://github.com/Opentrons/opentrons/issues/10629)) ([a521e16](https://github.com/Opentrons/opentrons/commit/a521e16c0b8c47006198a2479d0c71954db11016)), closes [#9888](https://github.com/Opentrons/opentrons/issues/9888)
* **api:** opentrons execute doesn't try to format run log command ([#9994](https://github.com/Opentrons/opentrons/issues/9994)) ([9c88176](https://github.com/Opentrons/opentrons/commit/9c8817629839402ebbd983e77828d9bc413a8643))
* **api:** opentrons_simulate run log error  ([#9799](https://github.com/Opentrons/opentrons/issues/9799)) ([abc7e64](https://github.com/Opentrons/opentrons/commit/abc7e644e8f980656a71c8e1d1ca8ddb68503c58))
* **api:** ot3: fix saving config to json ([#10377](https://github.com/Opentrons/opentrons/issues/10377)) ([2da4911](https://github.com/Opentrons/opentrons/commit/2da4911b971214fb273f71845abae1ac0e2e2bd7))
* **api:** set finished live runs to stopped rather than succeeded/failed ([#9936](https://github.com/Opentrons/opentrons/issues/9936)) ([d1a73cc](https://github.com/Opentrons/opentrons/commit/d1a73ccede564ec503a0d7d7053cc2c9b7dabb13)), closes [#9277](https://github.com/Opentrons/opentrons/issues/9277)
* **api:** sort modules in ascending port order ([#9620](https://github.com/Opentrons/opentrons/issues/9620)) ([4e65e98](https://github.com/Opentrons/opentrons/commit/4e65e9881fa074b9d36d5b42bfdf3e5dc537cb91)), closes [#9309](https://github.com/Opentrons/opentrons/issues/9309) [#9253](https://github.com/Opentrons/opentrons/issues/9253)
* **api:** working volume is not set in fast simulation ([#9550](https://github.com/Opentrons/opentrons/issues/9550)) ([dfbf237](https://github.com/Opentrons/opentrons/commit/dfbf2377efb4973cd1072611dd2a31a9b971e737)), closes [#9503](https://github.com/Opentrons/opentrons/issues/9503)
* **app:** 6.0 feedback design QA T1 protocols landing page ([#10488](https://github.com/Opentrons/opentrons/issues/10488)) ([18149cc](https://github.com/Opentrons/opentrons/commit/18149cc99ef91cfd4ecc6ed04eed3324afc4892f))
* **app:** 6.0 overall design QA ([#11081](https://github.com/Opentrons/opentrons/issues/11081)) ([bec8e23](https://github.com/Opentrons/opentrons/commit/bec8e23b9dfc4d29c88d5b5de73dd315a0c00885))
* **app:** add default message for waitForResume commands ([#10965](https://github.com/Opentrons/opentrons/issues/10965)) ([b04a1eb](https://github.com/Opentrons/opentrons/commit/b04a1eba23e13f5ba3f6b606c08bafda4500a1e4)), closes [#10948](https://github.com/Opentrons/opentrons/issues/10948)
* **app:** Add looking for robots state ([#10615](https://github.com/Opentrons/opentrons/issues/10615)) ([00df52d](https://github.com/Opentrons/opentrons/commit/00df52d1ee54d2f6e6dc711ec394b8891d7f5eee)), closes [#10483](https://github.com/Opentrons/opentrons/issues/10483)
* **app:** Add null check to avoid white screen ([#10518](https://github.com/Opentrons/opentrons/issues/10518)) ([7981096](https://github.com/Opentrons/opentrons/commit/798109663751b0f0e1fda5340ec293b1536beb77))
* **app:** add overflow prop for long name ([#10524](https://github.com/Opentrons/opentrons/issues/10524)) ([1c051fe](https://github.com/Opentrons/opentrons/commit/1c051febd37aa87fd986b99c5fa486f983c1b0d3)), closes [#10505](https://github.com/Opentrons/opentrons/issues/10505) [#10481](https://github.com/Opentrons/opentrons/issues/10481)
* **app:** Add release notes link to GeneralSettings ([#10097](https://github.com/Opentrons/opentrons/issues/10097)) ([5d51bd1](https://github.com/Opentrons/opentrons/commit/5d51bd1187a08c81fe79ab6f9887d4c683e2a285))
* **app:** Address Choose a robot to run slideout design feedback ([#11065](https://github.com/Opentrons/opentrons/issues/11065)) ([1b1f84e](https://github.com/Opentrons/opentrons/commit/1b1f84e195ebd4daf709ce2736defcd6d55c37a2)), closes [#11029](https://github.com/Opentrons/opentrons/issues/11029) [#11057](https://github.com/Opentrons/opentrons/issues/11057)
* **app:** address design feedback initial protocols landing page  ([#10950](https://github.com/Opentrons/opentrons/issues/10950)) ([9346a8a](https://github.com/Opentrons/opentrons/commit/9346a8af2830a1d191558d2215e9feb7a696a1e5)), closes [#10907](https://github.com/Opentrons/opentrons/issues/10907)
* **app:** Address Labware import slideout design feedback ([#10994](https://github.com/Opentrons/opentrons/issues/10994)) ([6943c37](https://github.com/Opentrons/opentrons/commit/6943c37e5fadab983b10366b69ea7706a5c587f8)), closes [#10926](https://github.com/Opentrons/opentrons/issues/10926)
* **app:** Address labware landing page design feedback ([#10957](https://github.com/Opentrons/opentrons/issues/10957)) ([6baaa46](https://github.com/Opentrons/opentrons/commit/6baaa46169d6f6e7907a1bf75b88719cbccf729c)), closes [#10905](https://github.com/Opentrons/opentrons/issues/10905)
* **app:** Address protocols landing design feedback ([#10993](https://github.com/Opentrons/opentrons/issues/10993)) ([1e83a0f](https://github.com/Opentrons/opentrons/commit/1e83a0f0a0ab0977d2accca9db0f67485e29de49)), closes [#10767](https://github.com/Opentrons/opentrons/issues/10767) [#10208](https://github.com/Opentrons/opentrons/issues/10208) [#10208](https://github.com/Opentrons/opentrons/issues/10208)
* **app:** Align Import a Protocol Slideout with the Design ([#10112](https://github.com/Opentrons/opentrons/issues/10112)) ([8520da7](https://github.com/Opentrons/opentrons/commit/8520da76cee442a15d912615e8486f5ff4882229))
* **app:** Aligned link text with the design ([#10030](https://github.com/Opentrons/opentrons/issues/10030)) ([a0504c7](https://github.com/Opentrons/opentrons/commit/a0504c74e266001ca23b32a6bc8d636901d6336d))
* **app:** App fix deck cal banner misleading issue ([#10979](https://github.com/Opentrons/opentrons/issues/10979)) ([4b732bf](https://github.com/Opentrons/opentrons/commit/4b732bf506af0327a8bae6e4ef87a9ce160fafbf)), closes [#10952](https://github.com/Opentrons/opentrons/issues/10952)
* **app:** App fix deck cal button disabled issue ([#10650](https://github.com/Opentrons/opentrons/issues/10650)) ([5819011](https://github.com/Opentrons/opentrons/commit/5819011c5e4ddec6afeb1d7e5527d5f9754ba47c)), closes [#10638](https://github.com/Opentrons/opentrons/issues/10638)
* **app:** App fix design feedback navbar ([#10439](https://github.com/Opentrons/opentrons/issues/10439)) ([a2c2f3a](https://github.com/Opentrons/opentrons/commit/a2c2f3a6a6c997cb5d0f8f283ea301608b166c24))
* **app:** App fix modal dialogs to delete protocol ([#10291](https://github.com/Opentrons/opentrons/issues/10291)) ([2580809](https://github.com/Opentrons/opentrons/commit/258080906c77fa582dbf725f62e164ce1e0f66b4))
* **app:** App fix one attached pipette cal display issue ([#10657](https://github.com/Opentrons/opentrons/issues/10657)) ([c5df074](https://github.com/Opentrons/opentrons/commit/c5df074471a041548f84e84369429791a50ed21c)), closes [#10574](https://github.com/Opentrons/opentrons/issues/10574)
* **app:** App fix robot settings design feedback ([#10290](https://github.com/Opentrons/opentrons/issues/10290)) ([bb1d78d](https://github.com/Opentrons/opentrons/commit/bb1d78dc2627b3fee050726f48b01eef72eb4fb5))
* **app:** App fix switch default page ([#10128](https://github.com/Opentrons/opentrons/issues/10128)) ([cd25aea](https://github.com/Opentrons/opentrons/commit/cd25aea5b504e3a7144b95fbc338de7331321730))
* **app:** app settings navigation active state ([#10299](https://github.com/Opentrons/opentrons/issues/10299)) ([aba494a](https://github.com/Opentrons/opentrons/commit/aba494a6a3232790d36d616b4ce2aed71cfc78d2)), closes [#10104](https://github.com/Opentrons/opentrons/issues/10104)
* **app:** Appettings general tab remove duplicated text ([#10526](https://github.com/Opentrons/opentrons/issues/10526)) ([929abce](https://github.com/Opentrons/opentrons/commit/929abcef437c7861d60876906406ced663a4d9fe))
* **app:** avoid the name conflict issue in the same network ([#10723](https://github.com/Opentrons/opentrons/issues/10723)) ([9ba3c37](https://github.com/Opentrons/opentrons/commit/9ba3c37cddcd8210f65a01cd5e980ec88db70b6c))
* **app:** cancelling a protocol run should patch the run to current false ([#10452](https://github.com/Opentrons/opentrons/issues/10452)) ([20848a1](https://github.com/Opentrons/opentrons/commit/20848a15b1ece3885489527ffd96dff302be1f62)), closes [#10412](https://github.com/Opentrons/opentrons/issues/10412)
* **app:** change error text when creation error is run is busy ([#11069](https://github.com/Opentrons/opentrons/issues/11069)) ([b9f2ba4](https://github.com/Opentrons/opentrons/commit/b9f2ba4436a20758f7dcb3356b54ba3f0a0060c9)), closes [#11060](https://github.com/Opentrons/opentrons/issues/11060)
* **app:** check for sw updates with regular top level poll ([#10659](https://github.com/Opentrons/opentrons/issues/10659)) ([62f4476](https://github.com/Opentrons/opentrons/commit/62f4476febd45adbf4dcc39feac8084af2360833))
* **app:** close labware slideout when labware deleted ([#10663](https://github.com/Opentrons/opentrons/issues/10663)) ([4ce9d70](https://github.com/Opentrons/opentrons/commit/4ce9d70872a6138bf72063efbf18e176722ca427)), closes [#10482](https://github.com/Opentrons/opentrons/issues/10482)
* **app:** close pipette and module overflow menus on click ([#10662](https://github.com/Opentrons/opentrons/issues/10662)) ([edb5482](https://github.com/Opentrons/opentrons/commit/edb548282052d35f875ba0129d90f8676ed17b37)), closes [#10639](https://github.com/Opentrons/opentrons/issues/10639)
* **app:** disable device details module controls when robot is busy ([#10614](https://github.com/Opentrons/opentrons/issues/10614)) ([79c70cd](https://github.com/Opentrons/opentrons/commit/79c70cdfb0c3638f751bd375c867b66deec66995)), closes [#10609](https://github.com/Opentrons/opentrons/issues/10609)
* **app:** disable protocol runs when robot update available ([#11050](https://github.com/Opentrons/opentrons/issues/11050)) ([3618c9a](https://github.com/Opentrons/opentrons/commit/3618c9a73c7bb751413f435925ff9b53e52765ad)), closes [#10935](https://github.com/Opentrons/opentrons/issues/10935)
* **app:** disallow run level module control while the run is paused ([#10685](https://github.com/Opentrons/opentrons/issues/10685)) ([212a0f4](https://github.com/Opentrons/opentrons/commit/212a0f4798e5937cba0a4a2c25be379fd5c25722)), closes [#10647](https://github.com/Opentrons/opentrons/issues/10647)
* **app:** do not include tipracks in Labware Position Check that are unused in protocol ([#10295](https://github.com/Opentrons/opentrons/issues/10295)) ([80eea2b](https://github.com/Opentrons/opentrons/commit/80eea2b7b8bdac27b1cd5d2ccebf4d9347588254)), closes [#9691](https://github.com/Opentrons/opentrons/issues/9691)
* **app:** edit paused step item copy ([#10735](https://github.com/Opentrons/opentrons/issues/10735)) ([1a245a8](https://github.com/Opentrons/opentrons/commit/1a245a83a981ac2647e69de95b7a3a2b50a2ff21)), closes [#10338](https://github.com/Opentrons/opentrons/issues/10338)
* **app:** firmware update modal copy update ([#11088](https://github.com/Opentrons/opentrons/issues/11088)) ([27bed72](https://github.com/Opentrons/opentrons/commit/27bed7252268881abe1163ddbe8c96483da46b47)), closes [#11075](https://github.com/Opentrons/opentrons/issues/11075)
* **app:** fix Browse file system button issues ([#11113](https://github.com/Opentrons/opentrons/issues/11113)) ([ec1a4bb](https://github.com/Opentrons/opentrons/commit/ec1a4bbeab8af136cd4162d156b7916a1c95f65d)), closes [#11105](https://github.com/Opentrons/opentrons/issues/11105)
* **app:** fix connect robot via ip address functionality and style ([#10784](https://github.com/Opentrons/opentrons/issues/10784)) ([e3025b7](https://github.com/Opentrons/opentrons/commit/e3025b75f0c5db7eeb499de2df122e31c33c05ed)), closes [#10618](https://github.com/Opentrons/opentrons/issues/10618) [#10593](https://github.com/Opentrons/opentrons/issues/10593) [#10594](https://github.com/Opentrons/opentrons/issues/10594)
* **app:** fix devices landing page text wrapping ([#11110](https://github.com/Opentrons/opentrons/issues/11110)) ([9de3dca](https://github.com/Opentrons/opentrons/commit/9de3dca436a96c8c975ca23e2d230016fe17a892)), closes [#10886](https://github.com/Opentrons/opentrons/issues/10886)
* **app:** fix heater shaker intro pg and misc typography ([#9493](https://github.com/Opentrons/opentrons/issues/9493)) ([347ed6e](https://github.com/Opentrons/opentrons/commit/347ed6e1b90a87f97bb171be87620f20f2db28f2))
* **app:** fix historical protocol run overflow menu bugs ([#10587](https://github.com/Opentrons/opentrons/issues/10587)) ([5f5c20d](https://github.com/Opentrons/opentrons/commit/5f5c20d2ea9d1c3699f7a4d2368cb7e630b4c76a)), closes [#10404](https://github.com/Opentrons/opentrons/issues/10404) [#10545](https://github.com/Opentrons/opentrons/issues/10545) [#10548](https://github.com/Opentrons/opentrons/issues/10548)
* **app:** fix historical protocol run timestamps ([#10934](https://github.com/Opentrons/opentrons/issues/10934)) ([1ade355](https://github.com/Opentrons/opentrons/commit/1ade355b019b3f8d3988938f21047dc70b5a5cb0))
* **app:** fix jump to current step when outside current window ([#11052](https://github.com/Opentrons/opentrons/issues/11052)) ([eb8cf4c](https://github.com/Opentrons/opentrons/commit/eb8cf4c3c31442822fd01bf487a066719ba4f73c)), closes [#10898](https://github.com/Opentrons/opentrons/issues/10898)
* **app:** fix labware info overlay styling with vector ([#11008](https://github.com/Opentrons/opentrons/issues/11008)) ([ebe2ed5](https://github.com/Opentrons/opentrons/commit/ebe2ed559d0e5180a14f57250a7c1be5bc4acbc3)), closes [#10942](https://github.com/Opentrons/opentrons/issues/10942)
* **app:** fix labware offset text alignment, fix historical run log missing timestamps ([#11114](https://github.com/Opentrons/opentrons/issues/11114)) ([94c32a7](https://github.com/Opentrons/opentrons/commit/94c32a70da46201af28481703df775296c600199)), closes [#11109](https://github.com/Opentrons/opentrons/issues/11109) [#11108](https://github.com/Opentrons/opentrons/issues/11108)
* **app:** fix long labware name display issue on slideout ([#10745](https://github.com/Opentrons/opentrons/issues/10745)) ([f88a416](https://github.com/Opentrons/opentrons/commit/f88a4167cfcd90664e0c93d23a4f816910b9fc29)), closes [#10641](https://github.com/Opentrons/opentrons/issues/10641)
* **app:** fix long protocol name display issue ([#10371](https://github.com/Opentrons/opentrons/issues/10371)) ([5433486](https://github.com/Opentrons/opentrons/commit/5433486ff4fc08a6d91442f008658d5348699968))
* **app:** fix pipette calibration modal auto closing ([#10955](https://github.com/Opentrons/opentrons/issues/10955)) ([5d775be](https://github.com/Opentrons/opentrons/commit/5d775be54088f9afbfdd300a39aeccf693a77550)), closes [#10941](https://github.com/Opentrons/opentrons/issues/10941)
* **app:** fix pipette offset cal data fetch issue on RobotSettings ([#10680](https://github.com/Opentrons/opentrons/issues/10680)) ([c11da0c](https://github.com/Opentrons/opentrons/commit/c11da0ca04fe4d78a8f80668e0ae58df9c6d5942)), closes [#10676](https://github.com/Opentrons/opentrons/issues/10676)
* **app:** fix propagation issues with overflow menu modals ([#10364](https://github.com/Opentrons/opentrons/issues/10364)) ([425ec48](https://github.com/Opentrons/opentrons/commit/425ec4824993956efc2b99aa95a39a49b05ef05d)), closes [#10206](https://github.com/Opentrons/opentrons/issues/10206)
* **app:** fix ProtocolRunningContent remounting issue ([#10977](https://github.com/Opentrons/opentrons/issues/10977)) ([be8b3b5](https://github.com/Opentrons/opentrons/commit/be8b3b5a4f2121772156f0e4f0173abc8b0a9ff4)), closes [#10956](https://github.com/Opentrons/opentrons/issues/10956)
* **app:** fix refresh robots spinner spacing and double icon ([#10646](https://github.com/Opentrons/opentrons/issues/10646)) ([33df1aa](https://github.com/Opentrons/opentrons/commit/33df1aa4f5a540d7b0409cdc1577324ca8ce1460)), closes [#10483](https://github.com/Opentrons/opentrons/issues/10483)
* **app:** fix robot settings rename a robot name ([#10044](https://github.com/Opentrons/opentrons/issues/10044)) ([c561f2d](https://github.com/Opentrons/opentrons/commit/c561f2d61b2921de52e8df9ad42d07877c2cdcf3))
* **app:** fix robot settings tip length calibration method selection ([#10991](https://github.com/Opentrons/opentrons/issues/10991)) ([84aa5bf](https://github.com/Opentrons/opentrons/commit/84aa5bf2969f4b41e53108327f6fc5aa07d0b18c)), closes [#10939](https://github.com/Opentrons/opentrons/issues/10939)
* **app:** fix robot update banner ([#10567](https://github.com/Opentrons/opentrons/issues/10567)) ([a7713c4](https://github.com/Opentrons/opentrons/commit/a7713c45216a0ad22e62bbf24605fd902224b8b8)), closes [#10041](https://github.com/Opentrons/opentrons/issues/10041)
* **app:** fix RobotSettings pipette offset cals banner issue ([#10599](https://github.com/Opentrons/opentrons/issues/10599)) ([e6ac78a](https://github.com/Opentrons/opentrons/commit/e6ac78a811eabe69730cb408f439fa58f72f769c))
* **app:** Fix RobotSettings sync issue ([#10581](https://github.com/Opentrons/opentrons/issues/10581)) ([349f35f](https://github.com/Opentrons/opentrons/commit/349f35f4c409858854dc1a3accdcc88cee52b9fc)), closes [#10577](https://github.com/Opentrons/opentrons/issues/10577)
* **app:** fix run log run duration ([#10860](https://github.com/Opentrons/opentrons/issues/10860)) ([6413cfb](https://github.com/Opentrons/opentrons/commit/6413cfbd5d62b38d107a0ac0fb7f49160df607bf))
* **app:** fix See how to setup a new robot link ([#10390](https://github.com/Opentrons/opentrons/issues/10390)) ([fce784c](https://github.com/Opentrons/opentrons/commit/fce784c17cab91b327ab76345ef241d394534fca))
* **app:** Fix Slideout title display bug ([#10437](https://github.com/Opentrons/opentrons/issues/10437)) ([69fc92b](https://github.com/Opentrons/opentrons/commit/69fc92b8544149e720aea728f6a0170d11453373))
* **app:** fix StyledText ts error in RobotSettingsNetworking ([#10317](https://github.com/Opentrons/opentrons/issues/10317)) ([678ba77](https://github.com/Opentrons/opentrons/commit/678ba779c2feea30549ca5339eacc9eef177db99))
* **app:** Fix the section order (Deck Calibration) ([#10394](https://github.com/Opentrons/opentrons/issues/10394)) ([ff1a807](https://github.com/Opentrons/opentrons/commit/ff1a807a68b2f5af8ecd8bee56197e19f8ef6f83))
* **app:** Fix tip length cal fetch on device details ([#10598](https://github.com/Opentrons/opentrons/issues/10598)) ([c73f4cd](https://github.com/Opentrons/opentrons/commit/c73f4cd4be5ffbd06a00f821451df1cdca1be953)), closes [#10531](https://github.com/Opentrons/opentrons/issues/10531)
* **app:** fix tip length calibration method selection ([#10976](https://github.com/Opentrons/opentrons/issues/10976)) ([9d4bec0](https://github.com/Opentrons/opentrons/commit/9d4bec019e449efc8d160005e198fd0e567009da)), closes [#10939](https://github.com/Opentrons/opentrons/issues/10939)
* **app:** fix toast display issue on RobotSettings Advanced tab ([#10625](https://github.com/Opentrons/opentrons/issues/10625)) ([dae7ee5](https://github.com/Opentrons/opentrons/commit/dae7ee5f2087dce9c7d9c122cae61c0f40588481)), closes [#10624](https://github.com/Opentrons/opentrons/issues/10624)
* **app:** fix white screen issue after renaming clicking advanced tab ([#10463](https://github.com/Opentrons/opentrons/issues/10463)) ([e272382](https://github.com/Opentrons/opentrons/commit/e272382d0b3a2318fdf1b8271521bbfc8d164d32))
* **app:** fix wrong event name for Mixpanel ([#10748](https://github.com/Opentrons/opentrons/issues/10748)) ([601e3e6](https://github.com/Opentrons/opentrons/commit/601e3e68d7ba1918751d56a732ee9c28de2bdb6d)), closes [#10744](https://github.com/Opentrons/opentrons/issues/10744)
* **app:** Fixed check-js error ([#10308](https://github.com/Opentrons/opentrons/issues/10308)) ([6a5a434](https://github.com/Opentrons/opentrons/commit/6a5a434324d9acf30816262aadcc4ab0fabfbc59))
* **app:** H-S confirm attachment modal form stopPropagation addition ([#10996](https://github.com/Opentrons/opentrons/issues/10996)) ([e196f4d](https://github.com/Opentrons/opentrons/commit/e196f4d0fd500423ffea7b3ae0fd0dab111aa68a)), closes [#10881](https://github.com/Opentrons/opentrons/issues/10881)
* **app:** handle protocol creation failure in slideouts ([#10925](https://github.com/Opentrons/opentrons/issues/10925)) ([91c28a9](https://github.com/Opentrons/opentrons/commit/91c28a939396955deac52a84f00e8546fcecb91e)), closes [#10569](https://github.com/Opentrons/opentrons/issues/10569)
* **app:** historical runs labware offset should list display names ([#11064](https://github.com/Opentrons/opentrons/issues/11064)) ([09fbb1f](https://github.com/Opentrons/opentrons/commit/09fbb1fb76e103af6378693f043f7db8ac1fc465)), closes [#11062](https://github.com/Opentrons/opentrons/issues/11062)
* **app:** if robot is not connectable during run, navigate to devices ([#10769](https://github.com/Opentrons/opentrons/issues/10769)) ([a4123d3](https://github.com/Opentrons/opentrons/commit/a4123d338c81b83479109d62d568122ed1c8152f)), closes [#10584](https://github.com/Opentrons/opentrons/issues/10584)
* **app:** Modified icon size ([#10113](https://github.com/Opentrons/opentrons/issues/10113)) ([6136c77](https://github.com/Opentrons/opentrons/commit/6136c7785dbcbaccc173915194ac78f7dfece87b))
* **app:** Modify labware card and slideout style ([#10101](https://github.com/Opentrons/opentrons/issues/10101)) ([f7baa38](https://github.com/Opentrons/opentrons/commit/f7baa38744a77c3a2a9ff9af809e4c0ed2a5767d))
* **app:** module cards and slideouts various bug fixes ([#10864](https://github.com/Opentrons/opentrons/issues/10864)) ([7b90a79](https://github.com/Opentrons/opentrons/commit/7b90a79c88c743c36f4291f41baf7db6e821873e)), closes [#10839](https://github.com/Opentrons/opentrons/issues/10839) [#10854](https://github.com/Opentrons/opentrons/issues/10854) [#10856](https://github.com/Opentrons/opentrons/issues/10856)
* **app:** no longer require app restart after python override path config is updated ([#11049](https://github.com/Opentrons/opentrons/issues/11049)) ([25cc201](https://github.com/Opentrons/opentrons/commit/25cc201c98a30a6431a26b18510bf827e10b978b)), closes [#10612](https://github.com/Opentrons/opentrons/issues/10612)
* **app:** only render historical run overflow menu when menu is open ([#10306](https://github.com/Opentrons/opentrons/issues/10306)) ([14f3bf4](https://github.com/Opentrons/opentrons/commit/14f3bf46140daca9bae2c3db9c568a08f20730da))
* **app:** open tc lid in LPC via protocol engine command ([#11111](https://github.com/Opentrons/opentrons/issues/11111)) ([f74853b](https://github.com/Opentrons/opentrons/commit/f74853b072ff31d3a383ce639d35d0ff5d4db033)), closes [#11096](https://github.com/Opentrons/opentrons/issues/11096)
* **app:** pipette card banners and historical protocol run protocolNames render fix ([#10848](https://github.com/Opentrons/opentrons/issues/10848)) ([3bec913](https://github.com/Opentrons/opentrons/commit/3bec9135fc54014db49ada51150826cc81832c02)), closes [#10658](https://github.com/Opentrons/opentrons/issues/10658)
* **app:** pipette card calibrate banner bug fix ([#10400](https://github.com/Opentrons/opentrons/issues/10400)) ([66b3a70](https://github.com/Opentrons/opentrons/commit/66b3a705764e04e8fc88db55860e18e381795467)), closes [#10324](https://github.com/Opentrons/opentrons/issues/10324)
* **app:** poll protocol analyses not record in useProtocolDetailsForRun ([#10376](https://github.com/Opentrons/opentrons/issues/10376)) ([30babe4](https://github.com/Opentrons/opentrons/commit/30babe469e99171a68ee2083551f32fc01021af2)), closes [#10341](https://github.com/Opentrons/opentrons/issues/10341)
* **app:** protocol run page design qa ([#11013](https://github.com/Opentrons/opentrons/issues/11013)) ([529a0d4](https://github.com/Opentrons/opentrons/commit/529a0d40f4a78b2237dc85b76bc75b730d291d15))
* **app:** protocol Run Record protocolName no longer renders runId ([#10961](https://github.com/Opentrons/opentrons/issues/10961)) ([322c71c](https://github.com/Opentrons/opentrons/commit/322c71c69139c7b7acfa5f7e58a4d9840d24d278)), closes [#10899](https://github.com/Opentrons/opentrons/issues/10899) [#10658](https://github.com/Opentrons/opentrons/issues/10658)
* **app:** protocol sort order changing when clicking sort menu ([#10556](https://github.com/Opentrons/opentrons/issues/10556)) ([6083fb0](https://github.com/Opentrons/opentrons/commit/6083fb08eb859c10b306fab71efa98a5db351163)), closes [#10398](https://github.com/Opentrons/opentrons/issues/10398)
* **app:** remove array brackets in devices landing page jsx ([#11004](https://github.com/Opentrons/opentrons/issues/11004)) ([65e6f0d](https://github.com/Opentrons/opentrons/commit/65e6f0dc94a767422a9477eac5652ab047be88aa))
* **app:** remove copy link from context menu ([#10328](https://github.com/Opentrons/opentrons/issues/10328)) ([4237331](https://github.com/Opentrons/opentrons/commit/4237331d025decab22d1f148c306b0d17f46f98c))
* **app:** remove focus state in nav on app load ([#11068](https://github.com/Opentrons/opentrons/issues/11068)) ([ace77fd](https://github.com/Opentrons/opentrons/commit/ace77fd5417e4b21602eb1fa155b84b4924d2b01))
* **app:** remove legacy modal content background color override prop ([#10992](https://github.com/Opentrons/opentrons/issues/10992)) ([346fafc](https://github.com/Opentrons/opentrons/commit/346fafce067bfd805e073309d0660feb7603b0d9)), closes [#10742](https://github.com/Opentrons/opentrons/issues/10742)
* **app:** remove Robot is now successful modal from update flow ([#11001](https://github.com/Opentrons/opentrons/issues/11001)) ([81373cb](https://github.com/Opentrons/opentrons/commit/81373cbff82a0f41f80a44d89525b8303b05d825))
* **app:** remove slideout and modal from robot overflow menu conditional render ([#10990](https://github.com/Opentrons/opentrons/issues/10990)) ([884396d](https://github.com/Opentrons/opentrons/commit/884396d9cb04753fd21e802ae1e9d9ecb5a51e6a)), closes [#10782](https://github.com/Opentrons/opentrons/issues/10782) [#10536](https://github.com/Opentrons/opentrons/issues/10536)
* **app:** remove unused intercom snippet ([#10620](https://github.com/Opentrons/opentrons/issues/10620)) ([8607bc0](https://github.com/Opentrons/opentrons/commit/8607bc0451cee5acc20b9e2a18608dc98f861679)), closes [#10547](https://github.com/Opentrons/opentrons/issues/10547)
* **app:** render LPC summary data as a table to prevent misalignment ([#11084](https://github.com/Opentrons/opentrons/issues/11084)) ([331c52e](https://github.com/Opentrons/opentrons/commit/331c52ec6bc926e06ecb4536dfb6a6f4732185f9)), closes [#11077](https://github.com/Opentrons/opentrons/issues/11077)
* **app:** reorder overeflow menu on protocol card ([#10522](https://github.com/Opentrons/opentrons/issues/10522)) ([5d737ce](https://github.com/Opentrons/opentrons/commit/5d737cef27ec114ba9021e710e256f17e9d98315)), closes [#10499](https://github.com/Opentrons/opentrons/issues/10499)
* **app:** rm analyzing state in run header for historical runs ([#11122](https://github.com/Opentrons/opentrons/issues/11122)) ([efa83d4](https://github.com/Opentrons/opentrons/commit/efa83d4da31d27bb2d16dd35ddd91757dace02fb))
* **app:** robot configuration unused pipette mount copy ([#10467](https://github.com/Opentrons/opentrons/issues/10467)) ([07d2dd0](https://github.com/Opentrons/opentrons/commit/07d2dd047cde571386801ac4eea354ae68b61c0f)), closes [#10466](https://github.com/Opentrons/opentrons/issues/10466)
* **app:** robot settings cal health check wizard issue ([#10525](https://github.com/Opentrons/opentrons/issues/10525)) ([b1a28e3](https://github.com/Opentrons/opentrons/commit/b1a28e3a14a44397a9ae12fa5bd2ff840edecf91))
* **app:** robot Update banner renders when bot is unavailable fix ([#10673](https://github.com/Opentrons/opentrons/issues/10673)) ([f8f8425](https://github.com/Opentrons/opentrons/commit/f8f84256f7d51783f05d40e3b0624c8cfffac4ee)), closes [#10670](https://github.com/Opentrons/opentrons/issues/10670)
* **app:** robot update Modal CTA fix ([#10592](https://github.com/Opentrons/opentrons/issues/10592)) ([33fd4ab](https://github.com/Opentrons/opentrons/commit/33fd4abdfbcf6aa2bf6c2aeb843a1d5914f50558)), closes [#10431](https://github.com/Opentrons/opentrons/issues/10431)
* **app:** RobotSettings deck calibration banner issue display issue ([#10515](https://github.com/Opentrons/opentrons/issues/10515)) ([4e975d3](https://github.com/Opentrons/opentrons/commit/4e975d383e788efb069144f5cc1a4d20e555c43f)), closes [#10484](https://github.com/Opentrons/opentrons/issues/10484)
* **app:** sanitize legacy command text in new run log to protect for non string values ([#11129](https://github.com/Opentrons/opentrons/issues/11129)) ([06edad6](https://github.com/Opentrons/opentrons/commit/06edad69dae9c8827c9083562304f59bc399c016))
* **app:** sanitize legacy command text in run log to protect for non string values ([#11127](https://github.com/Opentrons/opentrons/issues/11127)) ([e586bfe](https://github.com/Opentrons/opentrons/commit/e586bfefd904587673fa7ca4cd71ffee524aa484))
* **app:** See How Robot Calibration Works Modal ([#10415](https://github.com/Opentrons/opentrons/issues/10415)) ([b28a6be](https://github.com/Opentrons/opentrons/commit/b28a6be983b444a1b647f5d89d31a4ed03f1941b))
* **app:** see how to restore a previous sw version btn fix ([#10978](https://github.com/Opentrons/opentrons/issues/10978)) ([c20ad24](https://github.com/Opentrons/opentrons/commit/c20ad24feb1cfc54e07d633f3a3c4a9d8ef9933d)), closes [#10972](https://github.com/Opentrons/opentrons/issues/10972)
* **app:** show update modal for update from file and unlink unfinished update slideout ([#10405](https://github.com/Opentrons/opentrons/issues/10405)) ([04f24cd](https://github.com/Opentrons/opentrons/commit/04f24cdfd8c9a928b9d45018584b790dfcba5d95)), closes [#10312](https://github.com/Opentrons/opentrons/issues/10312)
* **app:** software update toggle logic refactor ([#10968](https://github.com/Opentrons/opentrons/issues/10968)) ([df3ab80](https://github.com/Opentrons/opentrons/commit/df3ab804f628299b728db56cd0cf5a11e2db524d)), closes [#10962](https://github.com/Opentrons/opentrons/issues/10962)
* **app:** stop click outside modal redirect  ([#10382](https://github.com/Opentrons/opentrons/issues/10382)) ([44dc04a](https://github.com/Opentrons/opentrons/commit/44dc04a8e4d4ab088571581c58c16e9723eafcf8)), closes [#10277](https://github.com/Opentrons/opentrons/issues/10277)
* **app:** sync robot clock on device and run detail page ([#10933](https://github.com/Opentrons/opentrons/issues/10933)) ([06a73a8](https://github.com/Opentrons/opentrons/commit/06a73a8c9571a1950d3055de8b971d77d3d6015b)), closes [#10804](https://github.com/Opentrons/opentrons/issues/10804)
* **app:** temporary redirect to devices page ([#10712](https://github.com/Opentrons/opentrons/issues/10712)) ([4eaedbe](https://github.com/Opentrons/opentrons/commit/4eaedbea2fa7d08a614c2633d7cb6a74955d4095)), closes [#10709](https://github.com/Opentrons/opentrons/issues/10709)
* **app:** this PR makes <Link> from opentrons componets tabbable ([#10930](https://github.com/Opentrons/opentrons/issues/10930)) ([c7fc0f0](https://github.com/Opentrons/opentrons/commit/c7fc0f0969b8c29325a153b61ac2796dda042703))
* **app:** this will fix [#11028](https://github.com/Opentrons/opentrons/issues/11028) ([#11053](https://github.com/Opentrons/opentrons/issues/11053)) ([7497d68](https://github.com/Opentrons/opentrons/commit/7497d683e143f00d20d90bb4c912ff74c46b4926))
* **app:** this will fix overflow menu overlapping issue on RobotSettings Calibration Tab ([#10661](https://github.com/Opentrons/opentrons/issues/10661)) ([44f9e81](https://github.com/Opentrons/opentrons/commit/44f9e8126006b0406139418af46607f3f7770646)), closes [#10640](https://github.com/Opentrons/opentrons/issues/10640)
* **app:** tweak copy on not avail modal ([#10428](https://github.com/Opentrons/opentrons/issues/10428)) ([ae729e7](https://github.com/Opentrons/opentrons/commit/ae729e724a47941160acae3508a8c7fed314f463))
* **app:** tweak protocol delete modal title ([#10464](https://github.com/Opentrons/opentrons/issues/10464)) ([fae7cb6](https://github.com/Opentrons/opentrons/commit/fae7cb67d61e6525d53677b017fffcfa697396d2)), closes [#10167](https://github.com/Opentrons/opentrons/issues/10167)
* **app:** update out of date support links ([#10388](https://github.com/Opentrons/opentrons/issues/10388)) ([fb4ed1f](https://github.com/Opentrons/opentrons/commit/fb4ed1f1ecec96195626c71a06e0cca2c3578b87)), closes [#10204](https://github.com/Opentrons/opentrons/issues/10204)
* **app:** update robot banner no longer accessible when robot is busy ([#10717](https://github.com/Opentrons/opentrons/issues/10717)) ([bb700df](https://github.com/Opentrons/opentrons/commit/bb700df918ee8ebfcb34f80add01f18fe4de1562)), closes [#10311](https://github.com/Opentrons/opentrons/issues/10311)
* **app:** Update robot rename rule ([#10318](https://github.com/Opentrons/opentrons/issues/10318)) ([ecd77ef](https://github.com/Opentrons/opentrons/commit/ecd77ef5404b693933f75748e2a12778681f5805))
* **app:** wire up Software Update Alerts toggle logic ([#10732](https://github.com/Opentrons/opentrons/issues/10732)) ([6c8c5c0](https://github.com/Opentrons/opentrons/commit/6c8c5c0b0980e5c33a836cf46c94a6597dd55046)), closes [#10576](https://github.com/Opentrons/opentrons/issues/10576)
* **app-shell:** allow corrupt protocol analysis files to error gracefully ([#10969](https://github.com/Opentrons/opentrons/issues/10969)) ([ed72dc3](https://github.com/Opentrons/opentrons/commit/ed72dc3003f2de4bbfb931526ebaddd506f9b7cd)), closes [#10828](https://github.com/Opentrons/opentrons/issues/10828)
* **app-shell:** ensure Windows build can analyze protocols ([#10347](https://github.com/Opentrons/opentrons/issues/10347)) ([66a96bc](https://github.com/Opentrons/opentrons/commit/66a96bc9e76911a3a63b9dae5730607c5ee4cebc)), closes [#10378](https://github.com/Opentrons/opentrons/issues/10378)
* **app-shell:** use existing logic to feed custom labware to analysis ([#10827](https://github.com/Opentrons/opentrons/issues/10827)) ([d210ac5](https://github.com/Opentrons/opentrons/commit/d210ac54ba9d962cd40970e41327aa9785fd373b))
* **app, react-api-client:** add run creation spinner and handle errors in slideouts during run creation ([#10944](https://github.com/Opentrons/opentrons/issues/10944)) ([3002093](https://github.com/Opentrons/opentrons/commit/300209338efcd77071632d88a677ab2a68636a71))
* **can:** ensure that the pcan parameters match new values for 500KHz bit timing ([#10572](https://github.com/Opentrons/opentrons/issues/10572)) ([d5a319b](https://github.com/Opentrons/opentrons/commit/d5a319bc0a508aed418070dceb9a0ad10ae670fe))
* **components:** fix link tabIndex ([#10986](https://github.com/Opentrons/opentrons/issues/10986)) ([867e6b7](https://github.com/Opentrons/opentrons/commit/867e6b74d93bdf56b984d71522492fec31528929))
* **components:** update labware render story to match new component interface ([#10169](https://github.com/Opentrons/opentrons/issues/10169)) ([6b77e75](https://github.com/Opentrons/opentrons/commit/6b77e75b676ff39b3971f524f089c66a909033dc))
* **discovery-client:** fix off by one error in remove logic ([#10711](https://github.com/Opentrons/opentrons/issues/10711)) ([70cb3cb](https://github.com/Opentrons/opentrons/commit/70cb3cba7a78ab3fff5858b41590920e408cc884))
* **docs:** don't center text on API doc pages ([#9748](https://github.com/Opentrons/opentrons/issues/9748)) ([4e176b7](https://github.com/Opentrons/opentrons/commit/4e176b79ef0311f94e9e49254963d6f176cc10ef)), closes [#9695](https://github.com/Opentrons/opentrons/issues/9695)
* **docs:** link fix, upcoming issues ([c385668](https://github.com/Opentrons/opentrons/commit/c385668f6d1384b7ca42a97d2f5b4ced581f4037))
* **engine:** disallow setup commands while run is paused ([#10675](https://github.com/Opentrons/opentrons/issues/10675)) ([bd3a4e1](https://github.com/Opentrons/opentrons/commit/bd3a4e146ace8157687cf6913ec3794bae0f4411))
* **engine:** do not allow completed timestamp to change once set ([#11055](https://github.com/Opentrons/opentrons/issues/11055)) ([b413d40](https://github.com/Opentrons/opentrons/commit/b413d40312715fceeabe6b873640d6c892a65501))
* **engine:** include modules w/o labware in motion planning ([#10902](https://github.com/Opentrons/opentrons/issues/10902)) ([0b0dfae](https://github.com/Opentrons/opentrons/commit/0b0dfae27211607ace9465b63e1fe0024a855fee))
* **hardware:** can bus shutdown in driver ([#10273](https://github.com/Opentrons/opentrons/issues/10273)) ([22f8dbd](https://github.com/Opentrons/opentrons/commit/22f8dbd009e3313f7d35d455a1bc0b8dc9dcd6be))
* **hardware:** changed float conversion, updated integration test values ([#10162](https://github.com/Opentrons/opentrons/issues/10162)) ([cd0c95e](https://github.com/Opentrons/opentrons/commit/cd0c95e867c28f65586d9103e57f802f4f62b0ea))
* **hardware:** fix eeprom data field from_string ([#10242](https://github.com/Opentrons/opentrons/issues/10242)) ([eb595f4](https://github.com/Opentrons/opentrons/commit/eb595f41f7a7e95f700fc7a194093637a603f04b))
* **hardware:** Fix equal leg triangle move handling ([#10335](https://github.com/Opentrons/opentrons/issues/10335)) ([2d96e5a](https://github.com/Opentrons/opentrons/commit/2d96e5a9ca89bf2cf06b5b8ddb6668cc51d36a3f))
* **hardware:** ot3: fix incorrect field order in move ([#9724](https://github.com/Opentrons/opentrons/issues/9724)) ([ce2f69c](https://github.com/Opentrons/opentrons/commit/ce2f69cd452ba232d7f172516fa5b949118cd840))
* **hardware:** plan motion script needs converter to handle int64 vals ([#9667](https://github.com/Opentrons/opentrons/issues/9667)) ([4bc2e0d](https://github.com/Opentrons/opentrons/commit/4bc2e0d9f0e78288d16b0bcb437acacd4f9a6c3a))
* **hardware:** serial number field needs from_string to be updated from can_comm ([#10342](https://github.com/Opentrons/opentrons/issues/10342)) ([ae2957c](https://github.com/Opentrons/opentrons/commit/ae2957cb77fcdd15b226749f5a051ebc268f92b9))
* **hardware:** Update can bitrate ([#10332](https://github.com/Opentrons/opentrons/issues/10332)) ([bd8c4e8](https://github.com/Opentrons/opentrons/commit/bd8c4e8bd60277cbb0059836e62ec479a2f64f55))
* **hardware:** update firmware and sim_socket fixes ([#9349](https://github.com/Opentrons/opentrons/issues/9349)) ([1167d3f](https://github.com/Opentrons/opentrons/commit/1167d3ff8f91d056a4d5b3ff0f00110a074fb7db))
* **hardware,api:** can network_probe functionality ([#9437](https://github.com/Opentrons/opentrons/issues/9437)) ([2b68474](https://github.com/Opentrons/opentrons/commit/2b684743fd70f8b44b7820bfa6d2b649ffbb239b))
* **labware-library:** Update shop links for alumn block nest ([#9406](https://github.com/Opentrons/opentrons/issues/9406)) ([e46879e](https://github.com/Opentrons/opentrons/commit/e46879e5818d13ce414a4c7064ccebc1e3e36feb)), closes [#9375](https://github.com/Opentrons/opentrons/issues/9375)
* **notify-server:** depend on opentrons_hardware ([#9540](https://github.com/Opentrons/opentrons/issues/9540)) ([c320d6a](https://github.com/Opentrons/opentrons/commit/c320d6adb8404e3f5b97c950abf8ac2963cfaca4))
* **ot3:** fix motion math and add Hypothesis testing library ([#9263](https://github.com/Opentrons/opentrons/issues/9263)) ([51dda67](https://github.com/Opentrons/opentrons/commit/51dda67904dc0f7e304680efc2a09ec0c81b3f5e))
* **ot3:** handle unbalanced triangle moves ([#9360](https://github.com/Opentrons/opentrons/issues/9360)) ([7b02869](https://github.com/Opentrons/opentrons/commit/7b02869626e6a379bf296aa79e479daf71abf495))
* **protocol-designer:** change PD help link ([#10440](https://github.com/Opentrons/opentrons/issues/10440)) ([9152d25](https://github.com/Opentrons/opentrons/commit/9152d2571f4c821387b4b3249b895a6278c17b77)), closes [#10325](https://github.com/Opentrons/opentrons/issues/10325)
* **protocol-designer:** delay when offset length is falsey ([#10016](https://github.com/Opentrons/opentrons/issues/10016)) ([1c13967](https://github.com/Opentrons/opentrons/commit/1c139676fcc3fea28f29c1b49bff6452514475b0)), closes [#815](https://github.com/Opentrons/opentrons/issues/815)
* **react-api-client:** fix check for v3 module ([#10460](https://github.com/Opentrons/opentrons/issues/10460)) ([8a48ddc](https://github.com/Opentrons/opentrons/commit/8a48ddc5f429cca54cf58671d545d347e282f237))
* **robot-server:** allow live commands if current run is terminal ([#10879](https://github.com/Opentrons/opentrons/issues/10879)) ([0ee0c72](https://github.com/Opentrons/opentrons/commit/0ee0c728a1517009336c2c6e2135eaaf0dab2150))
* **robot-server:** calculate magnetic module gen 1 height  ([#10724](https://github.com/Opentrons/opentrons/issues/10724)) ([c231d1b](https://github.com/Opentrons/opentrons/commit/c231d1b841b40018ad891aeb5a3cb707d34e0ea8)), closes [#9515](https://github.com/Opentrons/opentrons/issues/9515)
* **robot-server:** cancel background tasks when server shuts down ([#10052](https://github.com/Opentrons/opentrons/issues/10052)) ([9e20642](https://github.com/Opentrons/opentrons/commit/9e2064297fde04c291deaf3b75275f3a6cbaeb17))
* **robot-server:** disallow pause action for non-active run ([#10550](https://github.com/Opentrons/opentrons/issues/10550)) ([5d17c93](https://github.com/Opentrons/opentrons/commit/5d17c937de3e10f71b7665c3796d2dfb9d6bdb55))
* **robot-server, api:** Disallow python protocol upload with unsupported version ([#10780](https://github.com/Opentrons/opentrons/issues/10780)) ([da8d9af](https://github.com/Opentrons/opentrons/commit/da8d9af65d47207251131d413aca284e08612132))
* **update-server:** Avoid bricking when given a bad name ([#10219](https://github.com/Opentrons/opentrons/issues/10219)) ([b71278f](https://github.com/Opentrons/opentrons/commit/b71278f481f56269a1de67372eb40d6ed3f25923)), closes [#9960](https://github.com/Opentrons/opentrons/issues/9960) [#10198](https://github.com/Opentrons/opentrons/issues/10198)
* Put opentrons repo in it's own directory for E2E testing against em ([#9812](https://github.com/Opentrons/opentrons/issues/9812)) ([fb38d4d](https://github.com/Opentrons/opentrons/commit/fb38d4d767c3b1b4bf59f2e3ad94624b2ca4b5e1))
* **robot-server:** clean up modules in fixtures. ([#9649](https://github.com/Opentrons/opentrons/issues/9649)) ([80ac11d](https://github.com/Opentrons/opentrons/commit/80ac11dec13f4a42eb14b6e37294204c19362e0a))
* **robot-server:** return 409 if client tries to delete a protocol used by a run ([#10459](https://github.com/Opentrons/opentrons/issues/10459)) ([fcd7052](https://github.com/Opentrons/opentrons/commit/fcd705247412c4d511cd45b85609907dc1c84bd8)), closes [#10407](https://github.com/Opentrons/opentrons/issues/10407)
* **shared-data:** Add Python tests for JSON v5 type-checking, and fix several small bugs ([#9720](https://github.com/Opentrons/opentrons/issues/9720)) ([805a262](https://github.com/Opentrons/opentrons/commit/805a26272c62078e6f0de28dab7dc94c96ee2006))
* **update-server:** Keep name deconflicted with other devices on the network ([#10559](https://github.com/Opentrons/opentrons/issues/10559)) ([d40e435](https://github.com/Opentrons/opentrons/commit/d40e435eea5d135057176dfbec848732e8d24d9c)), closes [#10126](https://github.com/Opentrons/opentrons/issues/10126)


### Features

* **api:** add gripper offset calibration data handling ([#10411](https://github.com/Opentrons/opentrons/issues/10411)) ([4b89491](https://github.com/Opentrons/opentrons/commit/4b894917c5d1d764b14a588bea390c91b86afbf9))
* **api:** add heaterShakerModuleContext and methods to PAPIv2 ([#10426](https://github.com/Opentrons/opentrons/issues/10426)) ([6461ec8](https://github.com/Opentrons/opentrons/commit/6461ec84846151ccc68640cc6a0bbdfb7cf35590))
* **api:** add ProtocolEngine-based analysis CLI ([#9862](https://github.com/Opentrons/opentrons/issues/9862)) ([257b06d](https://github.com/Opentrons/opentrons/commit/257b06d9b82ff6ab0c472bde064f144b023cd4a2))
* **api:** add Thermocycler Gen2 driver ([#9854](https://github.com/Opentrons/opentrons/issues/9854)) ([b12641d](https://github.com/Opentrons/opentrons/commit/b12641dd93c0c8fd24924d1f4d56dcccf055a8dc))
* **api:** Analyze v6 json protocols and translate v6 commands to protocol engine  ([#9772](https://github.com/Opentrons/opentrons/issues/9772)) ([c6bc5d8](https://github.com/Opentrons/opentrons/commit/c6bc5d857ba080dc9ed0392bc42822471f091ddd))
* **api:** home za axis first, and home pipettes in parallel ([#9709](https://github.com/Opentrons/opentrons/issues/9709)) ([9c864ce](https://github.com/Opentrons/opentrons/commit/9c864ce39463adecd61d8b8fdca9cafd887c5624))
* **api:** Integrate acceleration in OT3 hardware control api ([#9432](https://github.com/Opentrons/opentrons/issues/9432)) ([09be15a](https://github.com/Opentrons/opentrons/commit/09be15a7f41a0e9d70646f8ada390d48f954294e))
* **api:** use V3 module definitions as default in PAPI ([#10245](https://github.com/Opentrons/opentrons/issues/10245)) ([85daa65](https://github.com/Opentrons/opentrons/commit/85daa655eac994aa53a0bcbebe4f398f6734499b))
* **api-client, react-api-client:** add create live command hook ([#9656](https://github.com/Opentrons/opentrons/issues/9656)) ([3f147a8](https://github.com/Opentrons/opentrons/commit/3f147a8f4dccaa369f518238700d4f287dbb9a08)), closes [#9650](https://github.com/Opentrons/opentrons/issues/9650)
* **api, ot3:** add gripper to get_attached_instruments  ([#10619](https://github.com/Opentrons/opentrons/issues/10619)) ([212dfc5](https://github.com/Opentrons/opentrons/commit/212dfc540f29fe05cc56335560fb22a70e7bf9b5))
* **api, robot-server:** wire up heater shaker live data to modules endpoint ([#9552](https://github.com/Opentrons/opentrons/issues/9552)) ([60c40bb](https://github.com/Opentrons/opentrons/commit/60c40bbf8934c7ccd83d5fb8b36717e5ecb8d806))
* **app:**  App robot settings advanced tab robot update ([#10010](https://github.com/Opentrons/opentrons/issues/10010)) ([cf4e9ec](https://github.com/Opentrons/opentrons/commit/cf4e9ecf1bc825bf86339fb0867781a8e25f7e3a))
* **app:** about Module Slideouts ([#9543](https://github.com/Opentrons/opentrons/issues/9543)) ([d40dbc3](https://github.com/Opentrons/opentrons/commit/d40dbc3502cef97bbb10956c831e94e48f0ed688)), closes [#9305](https://github.com/Opentrons/opentrons/issues/9305)
* **app:** add animation to StatusLabel icon ([#9388](https://github.com/Opentrons/opentrons/issues/9388)) ([ea03868](https://github.com/Opentrons/opentrons/commit/ea03868088fb6962a64216568a8b97bc9e0acd9c)), closes [#9356](https://github.com/Opentrons/opentrons/issues/9356)
* **app:** add delete protocol option to overflow menu and create modal ([#10984](https://github.com/Opentrons/opentrons/issues/10984)) ([2e4ad60](https://github.com/Opentrons/opentrons/commit/2e4ad6065a310c12f2fdbe8f3a8b576df9395374)), closes [#10402](https://github.com/Opentrons/opentrons/issues/10402)
* **app:** Add Download logs Toast to RobotSettingsAdvanced Tab ([#10088](https://github.com/Opentrons/opentrons/issues/10088)) ([f5b0ad8](https://github.com/Opentrons/opentrons/commit/f5b0ad8a7e395b3e438afe004f2453c89f3a4433))
* **app:** add feature flag for liquid setup ([#10554](https://github.com/Opentrons/opentrons/issues/10554)) ([d4d3666](https://github.com/Opentrons/opentrons/commit/d4d3666300faa78e802aba5c34cf3f4944a59039)), closes [#10520](https://github.com/Opentrons/opentrons/issues/10520)
* **app:** add filter and sort to labware landing ([#9954](https://github.com/Opentrons/opentrons/issues/9954)) ([4bd9dec](https://github.com/Opentrons/opentrons/commit/4bd9decfb63e569c24443f2bfedd64bfaf448fa9))
* **app:** add H-S 2d render to Power On page in Wizard ([#9757](https://github.com/Opentrons/opentrons/issues/9757)) ([177f5a5](https://github.com/Opentrons/opentrons/commit/177f5a58759baeb5f308b9834c26ac2275f13169)), closes [#9519](https://github.com/Opentrons/opentrons/issues/9519)
* **app:** add H-S labware set up info ([#9974](https://github.com/Opentrons/opentrons/issues/9974)) ([d064106](https://github.com/Opentrons/opentrons/commit/d064106d477332d6a72182a338b088ab5eaf291a)), closes [#9269](https://github.com/Opentrons/opentrons/issues/9269)
* **app:** add H-S to PD pause step ([#9939](https://github.com/Opentrons/opentrons/issues/9939)) ([f5d4ab5](https://github.com/Opentrons/opentrons/commit/f5d4ab5d987f149793f63a269d8b9f3e71cd0c20))
* **app:** add heater shaker attach module page ([#9517](https://github.com/Opentrons/opentrons/issues/9517)) ([caaab4e](https://github.com/Opentrons/opentrons/commit/caaab4e64ce321689ce930ee399f4c7fbecb2565))
* **app:** add heater shaker module card ([#9653](https://github.com/Opentrons/opentrons/issues/9653)) ([a26e918](https://github.com/Opentrons/opentrons/commit/a26e9182970ea30c9e7726201202adcd76026698)), closes [#9288](https://github.com/Opentrons/opentrons/issues/9288)
* **app:** add heater shaker wizard key parts page ([#9499](https://github.com/Opentrons/opentrons/issues/9499)) ([e75fe82](https://github.com/Opentrons/opentrons/commit/e75fe82c8b8f3723bebed40dcd32cfdf3b7f6c10))
* **app:** add heater shaker wizard scaffold ([#9451](https://github.com/Opentrons/opentrons/issues/9451)) ([c68b750](https://github.com/Opentrons/opentrons/commit/c68b75018f58343852d72c297c8970483760d6cd))
* **app:** add liquid setup list view static list ([#10608](https://github.com/Opentrons/opentrons/issues/10608)) ([4158875](https://github.com/Opentrons/opentrons/commit/415887527fcd161cc8fcffcc6536e746a4f7d7df)), closes [#10517](https://github.com/Opentrons/opentrons/issues/10517)
* **app:** add liquid setup step to run setup page ([#10591](https://github.com/Opentrons/opentrons/issues/10591)) ([9f54480](https://github.com/Opentrons/opentrons/commit/9f54480213cf033d32e0531a0b397b7626a2e86d)), closes [#8909](https://github.com/Opentrons/opentrons/issues/8909)
* **app:** add magnetic module card in device details ([#9347](https://github.com/Opentrons/opentrons/issues/9347)) ([466e056](https://github.com/Opentrons/opentrons/commit/466e0567065d8773a81c25cd1b5c7998e00adf2c)), closes [#9324](https://github.com/Opentrons/opentrons/issues/9324)
* **app:** add managed file system storage for protocols ([#9703](https://github.com/Opentrons/opentrons/issues/9703)) ([153431f](https://github.com/Opentrons/opentrons/commit/153431f7092ce542d068fcd603f423cd3f5442ad)), closes [#9483](https://github.com/Opentrons/opentrons/issues/9483) [#9405](https://github.com/Opentrons/opentrons/issues/9405)
* **app:** add module icon tooltips to robot card ([#10103](https://github.com/Opentrons/opentrons/issues/10103)) ([20472f4](https://github.com/Opentrons/opentrons/commit/20472f4a97a92049bf93dd68a15c1e7700a0f391)), closes [#8672](https://github.com/Opentrons/opentrons/issues/8672)
* **app:** add overFlow menu component and icon states ([#9409](https://github.com/Opentrons/opentrons/issues/9409)) ([40fcfd9](https://github.com/Opentrons/opentrons/commit/40fcfd9ee628dccace4a8e118d0039030ebd400c)), closes [#9362](https://github.com/Opentrons/opentrons/issues/9362)
* **app:** add protocol card sorting ([#10223](https://github.com/Opentrons/opentrons/issues/10223)) ([49f9b1f](https://github.com/Opentrons/opentrons/commit/49f9b1ff415ff5dc598028b5eb1662673101ef81)), closes [#8817](https://github.com/Opentrons/opentrons/issues/8817)
* **app:** add protocol labware details ([#10084](https://github.com/Opentrons/opentrons/issues/10084)) ([8429e2d](https://github.com/Opentrons/opentrons/commit/8429e2dcaf124636b42df65839092e667766706a)), closes [#8825](https://github.com/Opentrons/opentrons/issues/8825) [#9676](https://github.com/Opentrons/opentrons/issues/9676)
* **app:** Add protocol landing page empty state ([#9358](https://github.com/Opentrons/opentrons/issues/9358)) ([dc1d9e7](https://github.com/Opentrons/opentrons/commit/dc1d9e76c2a60b3f32cad6edb6e99e09b1f550e9)), closes [#8814](https://github.com/Opentrons/opentrons/issues/8814)
* **app:** add protocol overview section ([#10212](https://github.com/Opentrons/opentrons/issues/10212)) ([1066ff0](https://github.com/Opentrons/opentrons/commit/1066ff0238e091c9bcfeac23e729a4b74a063211)), closes [#8821](https://github.com/Opentrons/opentrons/issues/8821)
* **app:** add protocol robot configuration details ([#10033](https://github.com/Opentrons/opentrons/issues/10033)) ([363e7d5](https://github.com/Opentrons/opentrons/commit/363e7d55a50b3d81389bd2184546f2dd04771cf2)), closes [#8824](https://github.com/Opentrons/opentrons/issues/8824)
* **app:** Add protocols list skeleton layout ([#9638](https://github.com/Opentrons/opentrons/issues/9638)) ([cfa1aa5](https://github.com/Opentrons/opentrons/commit/cfa1aa50501677dab49cbb9b3e02e373f256293a))
* **app:** add reinstall button to robot advanced settings ([#10773](https://github.com/Opentrons/opentrons/issues/10773)) ([ace769c](https://github.com/Opentrons/opentrons/commit/ace769c678703d1d96d5e5e40eb70ba567cc23af)), closes [#10435](https://github.com/Opentrons/opentrons/issues/10435)
* **app:** add robot overview action menu ([#10020](https://github.com/Opentrons/opentrons/issues/10020)) ([43214aa](https://github.com/Opentrons/opentrons/commit/43214aac5f0c9bd63ad7200899fac23c50bfcc24)), closes [#8695](https://github.com/Opentrons/opentrons/issues/8695)
* **app:** Add robot side protocol analysis error states ([#10595](https://github.com/Opentrons/opentrons/issues/10595)) ([44cc077](https://github.com/Opentrons/opentrons/commit/44cc077c8c0457fdf76f3abdc00f9a5b95ed6864)), closes [#10357](https://github.com/Opentrons/opentrons/issues/10357)
* **app:** add run tab module controls ([#10006](https://github.com/Opentrons/opentrons/issues/10006)) ([2b157fc](https://github.com/Opentrons/opentrons/commit/2b157fc23544834687da3bce00b70e8757cdb155)), closes [#8752](https://github.com/Opentrons/opentrons/issues/8752)
* **app:** add selectors to Module Cards ([#9636](https://github.com/Opentrons/opentrons/issues/9636)) ([1c04d83](https://github.com/Opentrons/opentrons/commit/1c04d830f12b81f135315a8e71735dc21133ad0b)), closes [#9359](https://github.com/Opentrons/opentrons/issues/9359)
* **app:** add temperature module card in device details ([#9361](https://github.com/Opentrons/opentrons/issues/9361)) ([decbcbb](https://github.com/Opentrons/opentrons/commit/decbcbb753acdae9d7f0f1d79b332fb3a535e0cb)), closes [#9325](https://github.com/Opentrons/opentrons/issues/9325)
* **app:** add test shake slideout ([#9680](https://github.com/Opentrons/opentrons/issues/9680)) ([f3c8296](https://github.com/Opentrons/opentrons/commit/f3c82961939c5627de5dae1a68b78e2caad328d0)), closes [#9317](https://github.com/Opentrons/opentrons/issues/9317)
* **app:** add thermocycler module card in device details ([#9373](https://github.com/Opentrons/opentrons/issues/9373)) ([64575c0](https://github.com/Opentrons/opentrons/commit/64575c0201a24c233fc0462c3848dbc37b1d58e7)), closes [#9326](https://github.com/Opentrons/opentrons/issues/9326)
* **app:** add thermocycler slideout card ([#9421](https://github.com/Opentrons/opentrons/issues/9421)) ([d1a4a72](https://github.com/Opentrons/opentrons/commit/d1a4a7286b83bc4bbb6a366b647b27234efb9c84)), closes [#8789](https://github.com/Opentrons/opentrons/issues/8789)
* **app:** add useToggleGroup for toggle component ([#10558](https://github.com/Opentrons/opentrons/issues/10558)) ([ab66052](https://github.com/Opentrons/opentrons/commit/ab660524e7207dfbc33ec2f29f70b4479ff2793a)), closes [#10552](https://github.com/Opentrons/opentrons/issues/10552)
* **app:** adding selectors for the appSettings ([#9629](https://github.com/Opentrons/opentrons/issues/9629)) ([ec4b2e2](https://github.com/Opentrons/opentrons/commit/ec4b2e28f2390ddc7310426a87839936dc547585))
* **app:** App add reset option for run history ([#10461](https://github.com/Opentrons/opentrons/issues/10461)) ([73503a3](https://github.com/Opentrons/opentrons/commit/73503a392b1f208180b9e9796375d4391fc56d6f))
* **app:** App advanced settings u2e info ([#9876](https://github.com/Opentrons/opentrons/issues/9876)) ([5df5a33](https://github.com/Opentrons/opentrons/commit/5df5a33b6381b89704675ee23446598196fcff82))
* **app:** App robot settings advanced tab robot is busy ([#10368](https://github.com/Opentrons/opentrons/issues/10368)) ([4cfaadc](https://github.com/Opentrons/opentrons/commit/4cfaadc1d4847976781cae50e6e954f90b873157))
* **app:** App robot settings other tabs robot is busy ([#10369](https://github.com/Opentrons/opentrons/issues/10369)) ([c9500e0](https://github.com/Opentrons/opentrons/commit/c9500e0aabcf9634352993566b84509168791fe2))
* **app:** App robot settings temp netwroking ([#9924](https://github.com/Opentrons/opentrons/issues/9924)) ([88b4ef3](https://github.com/Opentrons/opentrons/commit/88b4ef34bfd9c5661da1a94746dd1c88f438e00e))
* **app:** App RobotSettings Calibration Tab Pipette Offset Calibrations and Tip Length Calibrations ([#10275](https://github.com/Opentrons/opentrons/issues/10275)) ([84eebb4](https://github.com/Opentrons/opentrons/commit/84eebb450de5ff284c5e41721ae433f7f25184de))
* **app:** app Settings for unified app ([#9489](https://github.com/Opentrons/opentrons/issues/9489)) ([af8d1ce](https://github.com/Opentrons/opentrons/commit/af8d1ce24071c5b75ef67ad244ca959246a4f9c7)), closes [#8885](https://github.com/Opentrons/opentrons/issues/8885) [#8884](https://github.com/Opentrons/opentrons/issues/8884) [#8886](https://github.com/Opentrons/opentrons/issues/8886) [#8882](https://github.com/Opentrons/opentrons/issues/8882) [#8880](https://github.com/Opentrons/opentrons/issues/8880) [#8879](https://github.com/Opentrons/opentrons/issues/8879)
* **app:** AppSettings Enable labware offset download link ([#9815](https://github.com/Opentrons/opentrons/issues/9815)) ([eeaccf4](https://github.com/Opentrons/opentrons/commit/eeaccf4ee7dc1f8b8e8b2dbe99ed8f8080e9172e))
* **app:** change H-S set shake speed button disabled reason ([#10421](https://github.com/Opentrons/opentrons/issues/10421)) ([0b1b15f](https://github.com/Opentrons/opentrons/commit/0b1b15f3d555c961a1c77c54d765406c454c3a41)), closes [#10418](https://github.com/Opentrons/opentrons/issues/10418)
* **app:** Connect Robot via IP Address Slidout ([#9811](https://github.com/Opentrons/opentrons/issues/9811)) ([4a93206](https://github.com/Opentrons/opentrons/commit/4a932064598cbdece69d47c475a90d9d602fa751)), closes [#8883](https://github.com/Opentrons/opentrons/issues/8883) [/github.com/Opentrons/opentrons/pull/9811#discussion_r837678382](https://github.com//github.com/Opentrons/opentrons/pull/9811/issues/discussion_r837678382)
* **app:** create app tooltip ([#9970](https://github.com/Opentrons/opentrons/issues/9970)) ([ac6c0b3](https://github.com/Opentrons/opentrons/commit/ac6c0b320eaf7ecaa5f1c4e046084c0d60f56408)), closes [#9962](https://github.com/Opentrons/opentrons/issues/9962)
* **app:** create Banner component and add throughout module cards ([#9740](https://github.com/Opentrons/opentrons/issues/9740)) ([161a554](https://github.com/Opentrons/opentrons/commit/161a554ce57133eff511e05e6975fb5491d2ce95)), closes [#9290](https://github.com/Opentrons/opentrons/issues/9290) [#9545](https://github.com/Opentrons/opentrons/issues/9545)
* **app:** create H-S confirm attachment modals ([#9813](https://github.com/Opentrons/opentrons/issues/9813)) ([4a85bbd](https://github.com/Opentrons/opentrons/commit/4a85bbd04fe65cefd55447f98e271ed0c76e8a2b)), closes [#9278](https://github.com/Opentrons/opentrons/issues/9278)
* **app:** create heater shaker wizard intro page ([#9469](https://github.com/Opentrons/opentrons/issues/9469)) ([b8848f2](https://github.com/Opentrons/opentrons/commit/b8848f28d534a7023e984c0b43814db9c966964f)), closes [#9283](https://github.com/Opentrons/opentrons/issues/9283)
* **app:** Create Labware card and Labware Landing ([#9612](https://github.com/Opentrons/opentrons/issues/9612)) ([d09dbd1](https://github.com/Opentrons/opentrons/commit/d09dbd1547c419b7fb63f7dca1589c7def5bcb43)), closes [#8861](https://github.com/Opentrons/opentrons/issues/8861)
* **app:** create Slideout component and make mag deck slideout ([#9382](https://github.com/Opentrons/opentrons/issues/9382)) ([1a3441b](https://github.com/Opentrons/opentrons/commit/1a3441b9532e5c37b699cd599a92fcb1a7837e2c)), closes [#8788](https://github.com/Opentrons/opentrons/issues/8788)
* **app:** creates temp module slideout ([#9415](https://github.com/Opentrons/opentrons/issues/9415)) ([4f85fd5](https://github.com/Opentrons/opentrons/commit/4f85fd560ba1b9f72fe8471b0b5ea6b4bcb32655)), closes [#8790](https://github.com/Opentrons/opentrons/issues/8790)
* **app:** DeckCalibration Section ([#10233](https://github.com/Opentrons/opentrons/issues/10233)) ([f9baa2d](https://github.com/Opentrons/opentrons/commit/f9baa2d9f890d3c13c498741648515363cded52e))
* **app:** delete Connection to Robot Lost modal ([#10416](https://github.com/Opentrons/opentrons/issues/10416)) ([1f0c98b](https://github.com/Opentrons/opentrons/commit/1f0c98be7f97f94ff3da9657fb61ed6a3f301837)), closes [#8795](https://github.com/Opentrons/opentrons/issues/8795)
* **app:** device Details design qa round 2 and fix card overflow btn bugs ([#11054](https://github.com/Opentrons/opentrons/issues/11054)) ([2804048](https://github.com/Opentrons/opentrons/commit/280404814882be82f12ea0b2d9b2ca8c9ea405b1)), closes [#10892](https://github.com/Opentrons/opentrons/issues/10892)
* **app:** device Details historical run log ([#10287](https://github.com/Opentrons/opentrons/issues/10287)) ([4d39ae0](https://github.com/Opentrons/opentrons/commit/4d39ae0595fb59437ea51baee892ff8bf869a34e)), closes [#8696](https://github.com/Opentrons/opentrons/issues/8696)
* **app:** edit Robot Overflow Menu, Pipette Card banner and Advanced Settings ([#10188](https://github.com/Opentrons/opentrons/issues/10188)) ([e21d8db](https://github.com/Opentrons/opentrons/commit/e21d8db51eac5818477264a45ef12c0a2d15fb72)), closes [#10117](https://github.com/Opentrons/opentrons/issues/10117) [#8673](https://github.com/Opentrons/opentrons/issues/8673)
* **app:** fix choose protocol/robot slideout robot busy error logic ([#11106](https://github.com/Opentrons/opentrons/issues/11106)) ([d7ae58b](https://github.com/Opentrons/opentrons/commit/d7ae58bba1bcdf5b2c9bc0197881a65e4488e4c2)), closes [#11060](https://github.com/Opentrons/opentrons/issues/11060)
* **app:** heater shaker banner ([#9424](https://github.com/Opentrons/opentrons/issues/9424)) ([17ee912](https://github.com/Opentrons/opentrons/commit/17ee91255c7dc996cec4cb7d54a9e26502a5e63a)), closes [#9243](https://github.com/Opentrons/opentrons/issues/9243)
* **app:** heater shaker is currently shaking modal ([#9807](https://github.com/Opentrons/opentrons/issues/9807)) ([0ffe555](https://github.com/Opentrons/opentrons/commit/0ffe555f12a2ded6b75f8fdb3b0786e041526829)), closes [#9281](https://github.com/Opentrons/opentrons/issues/9281)
* **app:** heater shaker wizard power on page ([#9536](https://github.com/Opentrons/opentrons/issues/9536)) ([f2cf483](https://github.com/Opentrons/opentrons/commit/f2cf48345cdef75c9b18045c8f4cbd18d09cd68a)), closes [#9283](https://github.com/Opentrons/opentrons/issues/9283)
* **app:** heater shaker wizard test shake ([#9549](https://github.com/Opentrons/opentrons/issues/9549)) ([fa6f9c6](https://github.com/Opentrons/opentrons/commit/fa6f9c6f146a2eb3c54ca0131461abb22c8ec715))
* **app:** heater shaker wizard thermal adapter page ([#9500](https://github.com/Opentrons/opentrons/issues/9500)) ([60b249b](https://github.com/Opentrons/opentrons/commit/60b249b8a088fc0604820416668cd45d31e55b8c)), closes [#9283](https://github.com/Opentrons/opentrons/issues/9283)
* **app:** import new custom labware definition ([#9749](https://github.com/Opentrons/opentrons/issues/9749)) ([d3479fd](https://github.com/Opentrons/opentrons/commit/d3479fdb07ab12cf8199e8d7160478ef99061601)), closes [#8866](https://github.com/Opentrons/opentrons/issues/8866)
* **app:** interactive liquid list view items ([#10696](https://github.com/Opentrons/opentrons/issues/10696)) ([9116db1](https://github.com/Opentrons/opentrons/commit/9116db1c565f73799983cbbebe7245cc6098aa6d)), closes [#10571](https://github.com/Opentrons/opentrons/issues/10571)
* **app:** liquid setup labware detail modal ([#10742](https://github.com/Opentrons/opentrons/issues/10742)) ([bda60f1](https://github.com/Opentrons/opentrons/commit/bda60f115ab929367c01e7b931622c28163b7960)), closes [#10669](https://github.com/Opentrons/opentrons/issues/10669)
* **app:** make pipette cards and overflow menus ([#9976](https://github.com/Opentrons/opentrons/issues/9976)) ([c2753cd](https://github.com/Opentrons/opentrons/commit/c2753cdb1b1f27c2d5762a220a5d3aba061bb921)), closes [#8692](https://github.com/Opentrons/opentrons/issues/8692) [#8693](https://github.com/Opentrons/opentrons/issues/8693)
* **app:** make protocol runs from history clickable ([#10537](https://github.com/Opentrons/opentrons/issues/10537)) ([b98abee](https://github.com/Opentrons/opentrons/commit/b98abee7ce9922b656ed4f2caf3baedc49fa0609)), closes [#10502](https://github.com/Opentrons/opentrons/issues/10502)
* **app:** make story for MenuItem, Slideout, and OverflowBtn ([#9455](https://github.com/Opentrons/opentrons/issues/9455)) ([b10dcb3](https://github.com/Opentrons/opentrons/commit/b10dcb3637d12149bd4d6b664c684c7117be3a9d)), closes [#9449](https://github.com/Opentrons/opentrons/issues/9449)
* **app:** map view of liquid setup  ([#10743](https://github.com/Opentrons/opentrons/issues/10743)) ([e8eab25](https://github.com/Opentrons/opentrons/commit/e8eab253444c546d0cefcfb116957a1666779b22)), closes [#10519](https://github.com/Opentrons/opentrons/issues/10519)
* **app:** modal design qa feedback round 2 ([#10868](https://github.com/Opentrons/opentrons/issues/10868)) ([aba9664](https://github.com/Opentrons/opentrons/commit/aba9664450a668d3295c47908a2e6a5f1c12521c)), closes [#10866](https://github.com/Opentrons/opentrons/issues/10866)
* **app:** module slideout QA feedback touchups  ([#10110](https://github.com/Opentrons/opentrons/issues/10110)) ([a9b0738](https://github.com/Opentrons/opentrons/commit/a9b073854bd9d51ba79bfc25a24b07b3b30b3a07)), closes [#9869](https://github.com/Opentrons/opentrons/issues/9869)
* **app:** nav Help Button link out to Salesforce ([#10302](https://github.com/Opentrons/opentrons/issues/10302)) ([eeb373e](https://github.com/Opentrons/opentrons/commit/eeb373e972c9164d9217f1d6b9a3cf76be06c342)), closes [#10239](https://github.com/Opentrons/opentrons/issues/10239)
* **app:** promote new navigational structure to default view ([#9980](https://github.com/Opentrons/opentrons/issues/9980)) ([4b40d83](https://github.com/Opentrons/opentrons/commit/4b40d8380327708b8a4fd4a7c628b3138e43fba0))
* **app:** propose recent labware offsets to be reapplied for new protocol runs ([#10216](https://github.com/Opentrons/opentrons/issues/10216)) ([15c372c](https://github.com/Opentrons/opentrons/commit/15c372c523f376fcd592f784072aceb6254f108a)), closes [#9795](https://github.com/Opentrons/opentrons/issues/9795)
* **app:** robot controls warning banner ([#10174](https://github.com/Opentrons/opentrons/issues/10174)) ([45fec50](https://github.com/Opentrons/opentrons/commit/45fec50e2574105bbb9291f9f65d361e2f61a0d2)), closes [#10123](https://github.com/Opentrons/opentrons/issues/10123)
* **app:** Robot Settings Design QA 2 ([#11020](https://github.com/Opentrons/opentrons/issues/11020)) ([8b43995](https://github.com/Opentrons/opentrons/commit/8b439959d97cc077e3795cfdfb82398ea6e62d9b)), closes [#10893](https://github.com/Opentrons/opentrons/issues/10893)
* **app:** RobotSettings Advanced Tab FactoryReset reset options ([#10066](https://github.com/Opentrons/opentrons/issues/10066)) ([b2ac094](https://github.com/Opentrons/opentrons/commit/b2ac094274d940f9a3585f593dd77998a33e4106))
* **app:** RobotSettings Calibration Tab Health Check Section ([#10234](https://github.com/Opentrons/opentrons/issues/10234)) ([03243f2](https://github.com/Opentrons/opentrons/commit/03243f2ba19156f0cdfdcef801d7e59379a36a23))
* **app:** show live labware offset while jogging during Labware Position Check ([#10264](https://github.com/Opentrons/opentrons/issues/10264)) ([a5df9e0](https://github.com/Opentrons/opentrons/commit/a5df9e0bbaa7b2429b1e06d0243a8886693c45a4)), closes [#9796](https://github.com/Opentrons/opentrons/issues/9796) [#9797](https://github.com/Opentrons/opentrons/issues/9797)
* **app:** slideout and functionality to heater shaker overflow menu ([#9682](https://github.com/Opentrons/opentrons/issues/9682)) ([271dea6](https://github.com/Opentrons/opentrons/commit/271dea6d1924a795f56aee1e2a0839ef8d10bf61)), closes [#9304](https://github.com/Opentrons/opentrons/issues/9304) [#9303](https://github.com/Opentrons/opentrons/issues/9303) [#9302](https://github.com/Opentrons/opentrons/issues/9302) [#9450](https://github.com/Opentrons/opentrons/issues/9450)
* **app:** wire up don't show me again checkbox for HS modal ([#10139](https://github.com/Opentrons/opentrons/issues/10139)) ([f86b664](https://github.com/Opentrons/opentrons/commit/f86b6646b9fb15cd493bb5302cf4e5dd222ae0f3)), closes [#9814](https://github.com/Opentrons/opentrons/issues/9814)
* **app:** wire up firmware update banner in Module Cards ([#9953](https://github.com/Opentrons/opentrons/issues/9953)) ([372cde0](https://github.com/Opentrons/opentrons/commit/372cde0c8e76adf44fdc8c62eca4cbf743c421bd)), closes [#9155](https://github.com/Opentrons/opentrons/issues/9155)
* **app:** wire up H-S AttachModule page and add MoAM support to wizard ([#9926](https://github.com/Opentrons/opentrons/issues/9926)) ([7d4258a](https://github.com/Opentrons/opentrons/commit/7d4258a18518169bc273b7ee037f7ade50f7550a)), closes [#9534](https://github.com/Opentrons/opentrons/issues/9534)
* **app:** wire up Heater Shaker wizard intro page ([#9867](https://github.com/Opentrons/opentrons/issues/9867)) ([f6235c0](https://github.com/Opentrons/opentrons/commit/f6235c055f1ff180edbd594692d2dc783ac3fc4a)), closes [#9518](https://github.com/Opentrons/opentrons/issues/9518)
* **app:** wire up Modal warning for Clear unavailable robots list button ([#10648](https://github.com/Opentrons/opentrons/issues/10648)) ([a701e09](https://github.com/Opentrons/opentrons/commit/a701e097bd0d7b2730a8dc5dced94bdaf6dfc79a)), closes [#10511](https://github.com/Opentrons/opentrons/issues/10511)
* **app:** wire up pipette overflow menu items ([#10009](https://github.com/Opentrons/opentrons/issues/10009)) ([19d9180](https://github.com/Opentrons/opentrons/commit/19d91803470b2817e68705b19acc3dbe887a1a13)), closes [#8785](https://github.com/Opentrons/opentrons/issues/8785) [#8786](https://github.com/Opentrons/opentrons/issues/8786) [#8787](https://github.com/Opentrons/opentrons/issues/8787) [#9972](https://github.com/Opentrons/opentrons/issues/9972)
* **app-shell, app:** change window width, height; add minWidth ([#10343](https://github.com/Opentrons/opentrons/issues/10343)) ([69685e3](https://github.com/Opentrons/opentrons/commit/69685e38a786a23de4bcf251cee39a00c7314aa7))
* **app, app-shell:** add labware details slideout and overflow menu ([#9894](https://github.com/Opentrons/opentrons/issues/9894)) ([dee5a11](https://github.com/Opentrons/opentrons/commit/dee5a11e594f48b9bd642755d5cc63c023d6c0dc)), closes [#8870](https://github.com/Opentrons/opentrons/issues/8870)
* **app, app-shell, api-client:** include analysis as cli tool within app for protocol ingestion  ([#9825](https://github.com/Opentrons/opentrons/issues/9825)) ([cdf6c59](https://github.com/Opentrons/opentrons/commit/cdf6c59a96ea6ea5dca2ed79269537dbc0bc6ff7))
* **can:** add encoder position to CAN message payload ([#9881](https://github.com/Opentrons/opentrons/issues/9881)) ([a14e255](https://github.com/Opentrons/opentrons/commit/a14e2554ec47c57dcd640873c1c792a8ca4e4452))
* **can:** add messages for gripper control ([#9841](https://github.com/Opentrons/opentrons/issues/9841)) ([647cb25](https://github.com/Opentrons/opentrons/commit/647cb2570a60d189878e02cac0f606b49d13f8c5))
* **components:** Add design system constants to components library ([#9398](https://github.com/Opentrons/opentrons/issues/9398)) ([657df06](https://github.com/Opentrons/opentrons/commit/657df06a813359d1a4ed519057c687f68b8559b0)), closes [#9389](https://github.com/Opentrons/opentrons/issues/9389)
* **components:** Add single path icon data for new compound icons ([#9462](https://github.com/Opentrons/opentrons/issues/9462)) ([fe164a4](https://github.com/Opentrons/opentrons/commit/fe164a472205de559a054eeeaac81fc27990554c))
* **engine:** allow blow out command in Protocol API  ([#10623](https://github.com/Opentrons/opentrons/issues/10623)) ([bf4e89d](https://github.com/Opentrons/opentrons/commit/bf4e89dc355f4bbc03430c18c95b2b96f151dd0a))
* **engine:** implement heater-shaker commands ([#9747](https://github.com/Opentrons/opentrons/issues/9747)) ([aaf5dcb](https://github.com/Opentrons/opentrons/commit/aaf5dcb9bee60f8f574cf6855790fa0be07a01cd))
* **engine:** open and close thermocycler lid ([#10760](https://github.com/Opentrons/opentrons/issues/10760)) ([1e82c26](https://github.com/Opentrons/opentrons/commit/1e82c26a8f8aa6d0f4821390109661216a095732))
* **engine:** set flow rate in aspirate, dispense, and blowout ([#10800](https://github.com/Opentrons/opentrons/issues/10800)) ([0e66677](https://github.com/Opentrons/opentrons/commit/0e666777f96dd832b08efba255ef0e28a31641d6))
* **engine:** touch tip PAPIv3 ([#10678](https://github.com/Opentrons/opentrons/issues/10678)) ([25c99df](https://github.com/Opentrons/opentrons/commit/25c99df9e4ac89107af51bfa720e2d3242946f83))
* **hardware:** add gripper lifetime test script ([#10240](https://github.com/Opentrons/opentrons/issues/10240)) ([b98795d](https://github.com/Opentrons/opentrons/commit/b98795dbb67e004c12f233e0cb907710ddf1cd3a))
* **hardware:** add Gripper test script ([#9847](https://github.com/Opentrons/opentrons/issues/9847)) ([8aeeefe](https://github.com/Opentrons/opentrons/commit/8aeeefeb9ef071430c73dceb416f0029deca7835))
* **hardware:** add InstrumentInfoRequest to get info from Pipettes & Gripper ([#10557](https://github.com/Opentrons/opentrons/issues/10557)) ([2485b5b](https://github.com/Opentrons/opentrons/commit/2485b5b98092f12c54517d8ab2c918cd584d0224))
* **hardware:** add ot3 gpio driver, set estop ([#10776](https://github.com/Opentrons/opentrons/issues/10776)) ([b1ad8d2](https://github.com/Opentrons/opentrons/commit/b1ad8d20f4de8c3e39b928c848e34f7466f305ae))
* **hardware:** add sensor binding ([#9872](https://github.com/Opentrons/opentrons/issues/9872)) ([cbd8138](https://github.com/Opentrons/opentrons/commit/cbd8138d8f8e84640a6bd8b8670262fdf75dca49))
* **hardware:** add sensor integration test ([#9932](https://github.com/Opentrons/opentrons/issues/9932)) ([ae7c625](https://github.com/Opentrons/opentrons/commit/ae7c6258b3c4909da518b82cb544abee847fed94))
* **hardware:** added read temperature from pressure sensor ([#9884](https://github.com/Opentrons/opentrons/issues/9884)) ([cee3268](https://github.com/Opentrons/opentrons/commit/cee3268447c7ec69a5e7ff1e42e47fd59a6f9445))
* **hardware:** binary_serializable.from_string ([#10237](https://github.com/Opentrons/opentrons/issues/10237)) ([d96e18c](https://github.com/Opentrons/opentrons/commit/d96e18c56dc79802b2251b8c56641653df0293ee))
* **hardware:** bootloader erase flash message ([#9622](https://github.com/Opentrons/opentrons/issues/9622)) ([a4d397b](https://github.com/Opentrons/opentrons/commit/a4d397bd28c1cb65b2804cd4395059064e018eb9))
* **hardware:** can monitor script ([#9607](https://github.com/Opentrons/opentrons/issues/9607)) ([3926664](https://github.com/Opentrons/opentrons/commit/3926664e91b4dffb03ffba53184535c6707a4c80))
* **hardware:** fw update includes crc32 ([#9576](https://github.com/Opentrons/opentrons/issues/9576)) ([415c1c8](https://github.com/Opentrons/opentrons/commit/415c1c83b600e461b831f490580f05d9450dfd2b))
* **hardware:** Hardware integration tests ([#9224](https://github.com/Opentrons/opentrons/issues/9224)) ([c8161cd](https://github.com/Opentrons/opentrons/commit/c8161cd503a5a023141e3634d9d9ccf7c6409f52))
* **hardware:** OT3 gripper info messages ([#10027](https://github.com/Opentrons/opentrons/issues/10027)) ([5724a19](https://github.com/Opentrons/opentrons/commit/5724a19e6a8336516627c1ed95b74b8a243ca88e))
* **hardware:** ot3: add pipette querying ([#9730](https://github.com/Opentrons/opentrons/issues/9730)) ([777e5ee](https://github.com/Opentrons/opentrons/commit/777e5ee924c5813b42536fdca0c7c90ee18c5290))
* **hardware:** polling support for sensor drivers ([#10083](https://github.com/Opentrons/opentrons/issues/10083)) ([0d664d2](https://github.com/Opentrons/opentrons/commit/0d664d2021bae89144c2c7eda18aba01f96b33a0))
* **hardware:** send FirmwareUpdateStartApp at end up download. ([#9476](https://github.com/Opentrons/opentrons/issues/9476)) ([4cd0e58](https://github.com/Opentrons/opentrons/commit/4cd0e58f319c8aaee68cb54181cb953af43bafb2))
* **hardware:** set serial message. ([#10331](https://github.com/Opentrons/opentrons/issues/10331)) ([c849f0b](https://github.com/Opentrons/opentrons/commit/c849f0bff17e28414b9d61110dac9eab0f0dffda))
* **hardware:** task info ([#9608](https://github.com/Opentrons/opentrons/issues/9608)) ([021e650](https://github.com/Opentrons/opentrons/commit/021e6507099c4b66e981a930ad268a92b6638469))
* **hardware:** update Gripper CAN messages ([#10161](https://github.com/Opentrons/opentrons/issues/10161)) ([cfd2a33](https://github.com/Opentrons/opentrons/commit/cfd2a33ed000c4e9df6df8c1d8468b70003741a6))
* **head:** tool detection ([#9641](https://github.com/Opentrons/opentrons/issues/9641)) ([3a4059d](https://github.com/Opentrons/opentrons/commit/3a4059d2ed3f8bc0e60a025af88a6c5a84bf9135))
* **heater-shaker:** add deactivate_heater method ([#9955](https://github.com/Opentrons/opentrons/issues/9955)) ([003727f](https://github.com/Opentrons/opentrons/commit/003727f804569cfccef35f3f541706451a9d7347))
* **heater-shaker:** update module definition ([#9759](https://github.com/Opentrons/opentrons/issues/9759)) ([8c0a796](https://github.com/Opentrons/opentrons/commit/8c0a796a2e687d9ec514a49952db705270468804))
* **labware-library:** Add info alert for newly added labware ([#9685](https://github.com/Opentrons/opentrons/issues/9685)) ([01bf481](https://github.com/Opentrons/opentrons/commit/01bf481f5a198ca8e8e72a80fea58009428399f3)), closes [#9575](https://github.com/Opentrons/opentrons/issues/9575)
* **ot3:** add diagnostic messages for sensors ([#9820](https://github.com/Opentrons/opentrons/issues/9820)) ([0d62da6](https://github.com/Opentrons/opentrons/commit/0d62da6a2c0601daa67421eb46fb1b301bec6df7))
* **ot3:** add drivers for sensors on the OT3 ([#9654](https://github.com/Opentrons/opentrons/issues/9654)) ([fe19f56](https://github.com/Opentrons/opentrons/commit/fe19f56d431afe5fd03892d9ebdb25fe7f9758b9))
* **ot3:** add home request, test to move group runner ([#9563](https://github.com/Opentrons/opentrons/issues/9563)) ([96ab10a](https://github.com/Opentrons/opentrons/commit/96ab10a17ba381657ad1b919dd8113c2cbea9911))
* **ot3:** add HomeRequest, HomeResponse messages ([#9531](https://github.com/Opentrons/opentrons/issues/9531)) ([8ccc7d6](https://github.com/Opentrons/opentrons/commit/8ccc7d69709ea8c16453c8ced4f7529250291dc1))
* **ot3:** add pipette tip handling CAN messages ([#10038](https://github.com/Opentrons/opentrons/issues/10038)) ([ff62fe8](https://github.com/Opentrons/opentrons/commit/ff62fe8671648df302c1dce85a631526b318f2d6))
* **ot3:** fw update machinery. ([#9327](https://github.com/Opentrons/opentrons/issues/9327)) ([7b28607](https://github.com/Opentrons/opentrons/commit/7b286075f34f6d638a67583e57f0354a6cc68bfa))
* **ot3:** set motor current in mA ([#9610](https://github.com/Opentrons/opentrons/issues/9610)) ([b097d88](https://github.com/Opentrons/opentrons/commit/b097d886c92872a1177406022d795ac80d625f66))
* **ot3-gravimetric:** ot3 gravimetric test project ([#10348](https://github.com/Opentrons/opentrons/issues/10348)) ([98d7e09](https://github.com/Opentrons/opentrons/commit/98d7e0949ebb7b8d5d1f6991c27aedc5de43af06))
* **ot3-hardware:** support tip action requests in the move group runner ([#10445](https://github.com/Opentrons/opentrons/issues/10445)) ([9403981](https://github.com/Opentrons/opentrons/commit/9403981003cd6d40842bb2c374c16f384c64fa56))
* **ot3, api:** Add gripper class  ([#10278](https://github.com/Opentrons/opentrons/issues/10278)) ([0eeba15](https://github.com/Opentrons/opentrons/commit/0eeba1558876a8ae6e44bd81cb4c9ba689aec3e9))
* **papi-v2:** restrict placement of heater-shaker modules ([#10785](https://github.com/Opentrons/opentrons/issues/10785)) ([3c74e30](https://github.com/Opentrons/opentrons/commit/3c74e30e1183844e456c5e9bef7779141a2fa115)), closes [#10316](https://github.com/Opentrons/opentrons/issues/10316)
* **papiv3:** set rail lights ([#9569](https://github.com/Opentrons/opentrons/issues/9569)) ([a900063](https://github.com/Opentrons/opentrons/commit/a9000639d6b6e89af72a0d769a404dfee6d7051c)), closes [#9458](https://github.com/Opentrons/opentrons/issues/9458)
* **protocol-designer:** add collision warnings for heater shaker ([#10759](https://github.com/Opentrons/opentrons/issues/10759)) ([039d597](https://github.com/Opentrons/opentrons/commit/039d597ddbbf615e5acd8c41795cb5a825e2174f)), closes [#10514](https://github.com/Opentrons/opentrons/issues/10514)
* **protocol-designer:** add heater shaker module ([#9626](https://github.com/Opentrons/opentrons/issues/9626)) ([adc2692](https://github.com/Opentrons/opentrons/commit/adc26925464ea2358c3f981abe01acb0d143f216)), closes [#9560](https://github.com/Opentrons/opentrons/issues/9560)
* **protocol-designer:** add heater shaker step form ([#9711](https://github.com/Opentrons/opentrons/issues/9711)) ([ff6a8a2](https://github.com/Opentrons/opentrons/commit/ff6a8a23445504254e0a1a6a80752859dee2f9b5)), closes [#9689](https://github.com/Opentrons/opentrons/issues/9689)
* **protocol-designer:** add heater shaker step to dropdown ([#9643](https://github.com/Opentrons/opentrons/issues/9643)) ([7e7bca9](https://github.com/Opentrons/opentrons/commit/7e7bca99ad8dfcc81b8acf298775b19ec0598988)), closes [#9562](https://github.com/Opentrons/opentrons/issues/9562)
* **protocol-designer:** add HS announcement modal ([#10795](https://github.com/Opentrons/opentrons/issues/10795)) ([b9f0d9f](https://github.com/Opentrons/opentrons/commit/b9f0d9fdae0dbd6565f9bbc794318cf290de7acc)), closes [#9973](https://github.com/Opentrons/opentrons/issues/9973)
* **protocol-designer:** add labware placement restrictions east west of heater-shaker ([#10410](https://github.com/Opentrons/opentrons/issues/10410)) ([e1a8887](https://github.com/Opentrons/opentrons/commit/e1a88879941ae3e9da025f10aaac191452e3f938)), closes [#10255](https://github.com/Opentrons/opentrons/issues/10255)
* **protocol-designer:** add load liquid commands ([#9923](https://github.com/Opentrons/opentrons/issues/9923)) ([5b003f5](https://github.com/Opentrons/opentrons/commit/5b003f57ed224b69c2b133156c8685e3808e812b)), closes [#9702](https://github.com/Opentrons/opentrons/issues/9702)
* **protocol-designer:** add module placement restriction when editing position of H-S ([#10457](https://github.com/Opentrons/opentrons/issues/10457)) ([9f16650](https://github.com/Opentrons/opentrons/commit/9f16650d3efdb008329751941308264d9324cc56)), closes [#10454](https://github.com/Opentrons/opentrons/issues/10454)
* **protocol-designer:** add schema v6 migration support ([#9595](https://github.com/Opentrons/opentrons/issues/9595)) ([639cc00](https://github.com/Opentrons/opentrons/commit/639cc0093aac7cf960d0254796c5ca0131d15e25)), closes [#9542](https://github.com/Opentrons/opentrons/issues/9542)
* **protocol-designer:** add timeline error for tall labware east west of a heater shaker ([#10551](https://github.com/Opentrons/opentrons/issues/10551)) ([1e799d3](https://github.com/Opentrons/opentrons/commit/1e799d3d65a40080f346f8ac2f1e6e3e7196b564)), closes [#10444](https://github.com/Opentrons/opentrons/issues/10444)
* **protocol-designer:** add tooltips to H-S stepform ([#9944](https://github.com/Opentrons/opentrons/issues/9944)) ([d5d06b1](https://github.com/Opentrons/opentrons/commit/d5d06b100a88780d76f46f06a39d6b0c3ba964f1)), closes [#9733](https://github.com/Opentrons/opentrons/issues/9733)
* **protocol-designer:** bump PD version to 6.0 ([#10796](https://github.com/Opentrons/opentrons/issues/10796)) ([5419409](https://github.com/Opentrons/opentrons/commit/5419409ee353e9454deba149cc27bc0f239996be)), closes [#9853](https://github.com/Opentrons/opentrons/issues/9853)
* **protocol-designer:** close latch when set shake is set to true ([#9984](https://github.com/Opentrons/opentrons/issues/9984)) ([46ce934](https://github.com/Opentrons/opentrons/commit/46ce93447cee53aa89ef565d2e4a99637fb9fa86)), closes [#9983](https://github.com/Opentrons/opentrons/issues/9983)
* **protocol-designer:** disable placing module next to heater shaker ([#10660](https://github.com/Opentrons/opentrons/issues/10660)) ([b96b410](https://github.com/Opentrons/opentrons/commit/b96b410599c823bd6efbb02d8b749e4a89db0fa6)), closes [#10449](https://github.com/Opentrons/opentrons/issues/10449) [#10450](https://github.com/Opentrons/opentrons/issues/10450)
* **protocol-designer:** export TC load module commands with slot 7 ([#10829](https://github.com/Opentrons/opentrons/issues/10829)) ([540dae2](https://github.com/Opentrons/opentrons/commit/540dae239b17a844db8d51d6ca5642c6be91f60e)), closes [#10808](https://github.com/Opentrons/opentrons/issues/10808)
* **protocol-designer:** hook up heater shaker command creator ([#9896](https://github.com/Opentrons/opentrons/issues/9896)) ([443afa1](https://github.com/Opentrons/opentrons/commit/443afa1edc22da4ec832d8fe429730cf12a18f48))
* **protocol-designer:** make liquids descriptions strings ([#10002](https://github.com/Opentrons/opentrons/issues/10002)) ([81544ba](https://github.com/Opentrons/opentrons/commit/81544ba87075736eae9e1f38a32e0c8d9bbff480)), closes [#10001](https://github.com/Opentrons/opentrons/issues/10001)
* **protocol-designer:** pipette step validation for H-S latch open ([#9928](https://github.com/Opentrons/opentrons/issues/9928)) ([cd65ccd](https://github.com/Opentrons/opentrons/commit/cd65ccd5c15b29d8619d5b43a43c6626e6059641)), closes [#9745](https://github.com/Opentrons/opentrons/issues/9745)
* **protocol-designer:** pipette step validation for H-S shaking ([#9933](https://github.com/Opentrons/opentrons/issues/9933)) ([5b52d68](https://github.com/Opentrons/opentrons/commit/5b52d68041cb72ecfa9422b1b01090a37b103ec7)), closes [#9752](https://github.com/Opentrons/opentrons/issues/9752)
* **protocol-designer:** restrict H-S slot access and reorder components ([#10705](https://github.com/Opentrons/opentrons/issues/10705)) ([84d6873](https://github.com/Opentrons/opentrons/commit/84d68735afd7b0564f4e790b497fb27919365f86)), closes [#9993](https://github.com/Opentrons/opentrons/issues/9993)
* **protocol-designer:** update export modal ([#10807](https://github.com/Opentrons/opentrons/issues/10807)) ([431a535](https://github.com/Opentrons/opentrons/commit/431a53528a3536afce386cfb3f8614fd182824f6)), closes [#9987](https://github.com/Opentrons/opentrons/issues/9987)
* **protocol-designer:** wire up moduleState for H-S on the deckmap ([#9902](https://github.com/Opentrons/opentrons/issues/9902)) ([d640b7b](https://github.com/Opentrons/opentrons/commit/d640b7b02939eefc93bd5def746afce544d9855e)), closes [#9739](https://github.com/Opentrons/opentrons/issues/9739)
* **protocol-designer, step-generation, shared-data:** rename trash labware id to match protocol engine usage ([#10132](https://github.com/Opentrons/opentrons/issues/10132)) ([2136030](https://github.com/Opentrons/opentrons/commit/21360302a0a67a544ebde9f114d5eb31d61af659)), closes [#10017](https://github.com/Opentrons/opentrons/issues/10017)
* **protocol-engine:** Implement Magnetic Module engage ([#9599](https://github.com/Opentrons/opentrons/issues/9599)) ([81e4b09](https://github.com/Opentrons/opentrons/commit/81e4b09046979ef5ad89499ca621ae62299d0c10))
* **robot-server:** add heater-shaker to simulator file ([#9567](https://github.com/Opentrons/opentrons/issues/9567)) ([8649379](https://github.com/Opentrons/opentrons/commit/86493797323cd730f62312abec3364a5687821dc))
* **robot-server:** add key to POST /protocols and persist in SQL table ([#9868](https://github.com/Opentrons/opentrons/issues/9868)) ([8b5e721](https://github.com/Opentrons/opentrons/commit/8b5e72120a83233cecefc11d6973137369f32880))
* **robot-server:** add modules field to /runs responses ([#10462](https://github.com/Opentrons/opentrons/issues/10462)) ([b4389fb](https://github.com/Opentrons/opentrons/commit/b4389fbe9934193a963671fbce344e50a827db85)), closes [#10432](https://github.com/Opentrons/opentrons/issues/10432)
* **robot-server:** add run completedAt and startedAt timestamps ([#10327](https://github.com/Opentrons/opentrons/issues/10327)) ([93a195d](https://github.com/Opentrons/opentrons/commit/93a195d26a1128a68a91f71514fb122b48f253b4))
* **robot-server:** add runs history removal to reset options ([#10395](https://github.com/Opentrons/opentrons/issues/10395)) ([e9294c3](https://github.com/Opentrons/opentrons/commit/e9294c3592783dcfdbcbc5ed91dcb60d37afe90e))
* **robot-server:** add top-level stateless /commands endpoints ([#9696](https://github.com/Opentrons/opentrons/issues/9696)) ([f7988cb](https://github.com/Opentrons/opentrons/commit/f7988cb93c8b00d01541d5094cf77ea2ce9b74be))
* **robot-server:** add unique IDs to GET /modules response ([#9758](https://github.com/Opentrons/opentrons/issues/9758)) ([8d5e6a1](https://github.com/Opentrons/opentrons/commit/8d5e6a16df96c96a1b719be419b359cfc7f9a357)), closes [#9533](https://github.com/Opentrons/opentrons/issues/9533)
* **robot-server:** allow /commands to receive module commands ([#9776](https://github.com/Opentrons/opentrons/issues/9776)) ([db0a526](https://github.com/Opentrons/opentrons/commit/db0a5268a490b77cd6a00700df55a1de8460b786)), closes [#9617](https://github.com/Opentrons/opentrons/issues/9617)
* **robot-server:** Automatically delete old resources to make room for new ones ([#10248](https://github.com/Opentrons/opentrons/issues/10248)) ([9ab070f](https://github.com/Opentrons/opentrons/commit/9ab070fad8d932a153cbde5077a7674674d92c34)), closes [#9966](https://github.com/Opentrons/opentrons/issues/9966)
* **robot-server:** persist previous run results and commands ([#10187](https://github.com/Opentrons/opentrons/issues/10187)) ([87677c6](https://github.com/Opentrons/opentrons/commit/87677c6919cb6257e8ad063b58b3faccea96d7fe)), closes [#8474](https://github.com/Opentrons/opentrons/issues/8474)
* **robot-server:** Persist protocol analyses across reboots ([#10042](https://github.com/Opentrons/opentrons/issues/10042)) ([4f35cf4](https://github.com/Opentrons/opentrons/commit/4f35cf49abc5cae73ad8d6ac414bb5b1d3498c85)), closes [#9964](https://github.com/Opentrons/opentrons/issues/9964)
* **robot-server:** Persist protocols across reboots in a configurable directory ([#9864](https://github.com/Opentrons/opentrons/issues/9864)) ([fa3c6a2](https://github.com/Opentrons/opentrons/commit/fa3c6a2800c321d7c3647b0aaceb548ef9d91945))
* **robot-server:** persist runs and action runs in sql db ([#9914](https://github.com/Opentrons/opentrons/issues/9914)) ([9c363e1](https://github.com/Opentrons/opentrons/commit/9c363e1ba1aa93fc789d526887b9df0242b907d0))
* **robot-server:** recognize JSONv6 as a valid main protocol file ([#9686](https://github.com/Opentrons/opentrons/issues/9686)) ([32a5ed0](https://github.com/Opentrons/opentrons/commit/32a5ed00882aa981821f6e14cad720958e4ddc89))
* **robot-server, api:** support running JSONv6 protocols ([#10170](https://github.com/Opentrons/opentrons/issues/10170)) ([9c30653](https://github.com/Opentrons/opentrons/commit/9c306534576847bd7bd6ea0b8454afd4e74ae476)), closes [#9584](https://github.com/Opentrons/opentrons/issues/9584)
* **sensors:** add script to test sensors  ([#9714](https://github.com/Opentrons/opentrons/issues/9714)) ([a0401c7](https://github.com/Opentrons/opentrons/commit/a0401c7a16ebb1bbf3596464cbb9f05b5adb79b6))
* **shared-data:** add gripper specs ([#10722](https://github.com/Opentrons/opentrons/issues/10722)) ([9dc6a28](https://github.com/Opentrons/opentrons/commit/9dc6a28a5cc94c0794f394d877836a634c44afce))
* **shared-data:** add H/S to deck definition, bump deck definition schema ([#10417](https://github.com/Opentrons/opentrons/issues/10417)) ([183a1ac](https://github.com/Opentrons/opentrons/commit/183a1acd2db56750148d59a6058345aa32618311))
* **shared-data:** add heater shaker 2d render key ([#9707](https://github.com/Opentrons/opentrons/issues/9707)) ([094af23](https://github.com/Opentrons/opentrons/commit/094af238976532e99a8324e0d89a1a2101a5e095))
* **shared-data:** add heater-shaker labware w/ adapter definitions ([#9917](https://github.com/Opentrons/opentrons/issues/9917)) ([859fe69](https://github.com/Opentrons/opentrons/commit/859fe69789fbf1d065420fce07dcd7a940e2c09c))
* **shared-data, protocol-designer:** add liquid color to schema v6 ([#10294](https://github.com/Opentrons/opentrons/issues/10294)) ([c8ee567](https://github.com/Opentrons/opentrons/commit/c8ee5675f725e36578d0aca024e4bcd838030bf8))
* **step-generation:** add multi channel N/S access timeline error for heater shaker ([#10697](https://github.com/Opentrons/opentrons/issues/10697)) ([15f47dd](https://github.com/Opentrons/opentrons/commit/15f47dd0343536a05a45a750a7e48b1318ccc80e)), closes [#10448](https://github.com/Opentrons/opentrons/issues/10448)
* **step-generation:** raise timeline error when pipetting E/W of H-S with multi channel pipette ([#10681](https://github.com/Opentrons/opentrons/issues/10681)) ([3ea88a2](https://github.com/Opentrons/opentrons/commit/3ea88a260ebbfedc7c7fcda194ab5d37e1b22774)), closes [#10442](https://github.com/Opentrons/opentrons/issues/10442)
* **step-generation, protocol-designer:** add H-S timeline error when pipetting E-W with latch open ([#10566](https://github.com/Opentrons/opentrons/issues/10566)) ([3abafbd](https://github.com/Opentrons/opentrons/commit/3abafbd8f5b6463c67b47d14ecf6a371b8ce7bfa)), closes [#10510](https://github.com/Opentrons/opentrons/issues/10510)
* **step-generation, protocol-designer:** add JSON schema v6 support ([#9824](https://github.com/Opentrons/opentrons/issues/9824)) ([0c95a58](https://github.com/Opentrons/opentrons/commit/0c95a58c309ea8d901bbb9fac82f371c296fe1d4))
* **step-generation, protocol-designer:** generate error when pipetting NSEW of HS while shaking ([#10589](https://github.com/Opentrons/opentrons/issues/10589)) ([17c1b27](https://github.com/Opentrons/opentrons/commit/17c1b27dbdf30f6e42fac0e3e657d813d7eff57e)), closes [#10509](https://github.com/Opentrons/opentrons/issues/10509)
* **step-generation, protocol-designer:** hook up heater-shaker PD step form ([#9873](https://github.com/Opentrons/opentrons/issues/9873)) ([a44ecd7](https://github.com/Opentrons/opentrons/commit/a44ecd7694006e61947dc963e5842078bd7076ae)), closes [#9741](https://github.com/Opentrons/opentrons/issues/9741)
* **update-server:** ot3 support ([#10011](https://github.com/Opentrons/opentrons/issues/10011)) ([c1b3a55](https://github.com/Opentrons/opentrons/commit/c1b3a55381b45f7dfa0c26d81f37f95ec1622fb7)), closes [#9732](https://github.com/Opentrons/opentrons/issues/9732) [#9830](https://github.com/Opentrons/opentrons/issues/9830) [#10115](https://github.com/Opentrons/opentrons/issues/10115) [#10252](https://github.com/Opentrons/opentrons/issues/10252)





## [5.0.2](https://github.com/Opentrons/opentrons/compare/v5.0.1...v5.0.2) (2022-03-03)


### Bug Fixes

* **api:** lowercase filename before checking extension in ProtocolReader ([#9609](https://github.com/Opentrons/opentrons/issues/9609)) ([474c448](https://github.com/Opentrons/opentrons/commit/474c44860ac8b29c621b3a704e826688aa57ca59))
* **api, app:** display labware label ([#9587](https://github.com/Opentrons/opentrons/issues/9587)) ([7680d92](https://github.com/Opentrons/opentrons/commit/7680d92d4a966d641e8da558514a153e06946bce)), closes [#9105](https://github.com/Opentrons/opentrons/issues/9105) [#9088](https://github.com/Opentrons/opentrons/issues/9088)
* **app:** do not pass `directionControlButtonColor` into DOM ([#9615](https://github.com/Opentrons/opentrons/issues/9615)) ([0651d91](https://github.com/Opentrons/opentrons/commit/0651d914685f21ef9ca0f11e0339b147df745090))
* **app:** show labware def display name in lpc summary screen, fix nested lw render condition ([#9614](https://github.com/Opentrons/opentrons/issues/9614)) ([fa33c33](https://github.com/Opentrons/opentrons/commit/fa33c33cd586b2694ec6f87642d5019b4cf49c51))
* **app:** surface run record creation errors to users on upload page ([#9597](https://github.com/Opentrons/opentrons/issues/9597)) ([983306c](https://github.com/Opentrons/opentrons/commit/983306c70893fb19f593c9732b566e7b6cfe7a21))
* send custom labware definitions to the server during LPC setup ([#9588](https://github.com/Opentrons/opentrons/issues/9588)) ([7cf3233](https://github.com/Opentrons/opentrons/commit/7cf323370aefb952b0640d04738c64a0f4a2e5c9))





## [5.0.1](https://github.com/Opentrons/opentrons/compare/v5.0.0...v5.0.1) (2022-02-24)


### Bug Fixes

* **app:** add error boundary to LPC component ([#9508](https://github.com/Opentrons/opentrons/issues/9508)) ([6634454](https://github.com/Opentrons/opentrons/commit/66344543053709886a1f5213dff4dea3c9ddbba9))
* **app:** make sure pipette is being used during LPC flow ([#9501](https://github.com/Opentrons/opentrons/issues/9501)) ([459be85](https://github.com/Opentrons/opentrons/commit/459be854c3e34dc19abf7aa8d79cef3e542be2b3))





# [5.0.0](https://github.com/Opentrons/opentrons/compare/v4.7.0...v5.0.0) (2022-02-16)


### Bug Fixes

* **api:**  Fix simulator home and is_homed ([#9279](https://github.com/Opentrons/opentrons/issues/9279)) ([e5db3b7](https://github.com/Opentrons/opentrons/commit/e5db3b7447fbb8624d63345bab661463c936d1a4)), closes [#8969](https://github.com/Opentrons/opentrons/issues/8969)
* **api:** add missing f-string to thermocycler profile command text ([#9407](https://github.com/Opentrons/opentrons/issues/9407)) ([5a37197](https://github.com/Opentrons/opentrons/commit/5a37197a3ab44072067fe57f85d20a88ddd0daf5)), closes [#9380](https://github.com/Opentrons/opentrons/issues/9380)
* **api:** check home status in move_rel ([#8724](https://github.com/Opentrons/opentrons/issues/8724)) ([7347847](https://github.com/Opentrons/opentrons/commit/734784718188f10e4b36ac0a0b043a4b3ca8b3b8))
* **api:** check pipette names in simulator ([#9181](https://github.com/Opentrons/opentrons/issues/9181)) ([a81ebd9](https://github.com/Opentrons/opentrons/commit/a81ebd96cf3079bb518a2cb89ee6763149177a5c))
* **api:** don't show exception on module server disconnect. ([#8778](https://github.com/Opentrons/opentrons/issues/8778)) ([1bfaabe](https://github.com/Opentrons/opentrons/commit/1bfaabe233afe4d370313417a3423aa540a2a685))
* **api:** filter higher order commands out of legacy command response ([#9294](https://github.com/Opentrons/opentrons/issues/9294)) ([21e5bf5](https://github.com/Opentrons/opentrons/commit/21e5bf590f5523f90adff5ad447baa9c2db7bf6c)), closes [#9102](https://github.com/Opentrons/opentrons/issues/9102)
* **api:** Prioritize mc alarms over errors ([#9230](https://github.com/Opentrons/opentrons/issues/9230)) ([c44fed3](https://github.com/Opentrons/opentrons/commit/c44fed3aae222e7712937d77f9a2720fb9be1651))
* **api:** set serial timeouts for transactions ([#9190](https://github.com/Opentrons/opentrons/issues/9190)) ([03e3c55](https://github.com/Opentrons/opentrons/commit/03e3c559b134502bc411e8d97c5b33e16c6d9b2a))
* **app:** add fileName to title bar if protocolName is undefined ([#9307](https://github.com/Opentrons/opentrons/issues/9307)) ([18cc3ac](https://github.com/Opentrons/opentrons/commit/18cc3acd78924f84e23384599133547ec6732d71)), closes [#9163](https://github.com/Opentrons/opentrons/issues/9163)
* **app:** add missing URL to RerunningProtocolModal ([#8806](https://github.com/Opentrons/opentrons/issues/8806)) ([ce4c2c9](https://github.com/Opentrons/opentrons/commit/ce4c2c985a8e821963b7feaa077d4497ac8b074e)), closes [#8801](https://github.com/Opentrons/opentrons/issues/8801)
* **app:** add null protection for empty file array on protocol upload ([#8809](https://github.com/Opentrons/opentrons/issues/8809)) ([24cc5af](https://github.com/Opentrons/opentrons/commit/24cc5afa3f7839b4da15d0a133133a61ffc188c1))
* **app:** adjust deck map and module warning sizes ([#9184](https://github.com/Opentrons/opentrons/issues/9184)) ([cb682f1](https://github.com/Opentrons/opentrons/commit/cb682f10dd2dd0891d96798610eba69cf59e9e89)), closes [#9158](https://github.com/Opentrons/opentrons/issues/9158)
* **app:** app ([#9165](https://github.com/Opentrons/opentrons/issues/9165)) ([b001ae7](https://github.com/Opentrons/opentrons/commit/b001ae79e6bb06f39ed2cd255a4693adfc4c293a)), closes [#9051](https://github.com/Opentrons/opentrons/issues/9051)
* **app:** block LPC when a protocol does not have a tip rack loaded ([#9145](https://github.com/Opentrons/opentrons/issues/9145)) ([feefc8b](https://github.com/Opentrons/opentrons/commit/feefc8b3dfd0a67bd3a4401c9ac2a12ab43fe080)), closes [#9090](https://github.com/Opentrons/opentrons/issues/9090)
* **app:** calibrate pipette cta goes to robotName/instruments ([#9310](https://github.com/Opentrons/opentrons/issues/9310)) ([0717d4f](https://github.com/Opentrons/opentrons/commit/0717d4f8724966a187e41d6acc877b653c41fac3)), closes [#9267](https://github.com/Opentrons/opentrons/issues/9267)
* **app:** close LPC success toast if relaunched ([#9385](https://github.com/Opentrons/opentrons/issues/9385)) ([4999f71](https://github.com/Opentrons/opentrons/commit/4999f71bba06902db08ce2f36c8210500b4e67cb)), closes [#9377](https://github.com/Opentrons/opentrons/issues/9377)
* **app:** continue to clone run even after receiving a conflict when run is stopped ([#8933](https://github.com/Opentrons/opentrons/issues/8933)) ([6f09043](https://github.com/Opentrons/opentrons/commit/6f0904316ce005dfae592ac521d7eaad17a67617))
* **app:** copy changes in LPC for consistency ([#9178](https://github.com/Opentrons/opentrons/issues/9178)) ([e7013e2](https://github.com/Opentrons/opentrons/commit/e7013e2fe2e72495920b46acc5deb2e77ce7b269)), closes [#9156](https://github.com/Opentrons/opentrons/issues/9156)
* **app:** display error and close run if protocol analysis is not-ok ([#9007](https://github.com/Opentrons/opentrons/issues/9007)) ([a4bf3b5](https://github.com/Opentrons/opentrons/commit/a4bf3b5458949cc8abed2f32de0f54b635d28ee1)), closes [#8984](https://github.com/Opentrons/opentrons/issues/8984)
* **app:** display runtime errors in run detail header ([#9435](https://github.com/Opentrons/opentrons/issues/9435)) ([7e5e1e7](https://github.com/Opentrons/opentrons/commit/7e5e1e77562847e3957d54eec2469d40f1389771))
* **app:** fix borken tooltip translation for LPC CTA when modules not detected ([#9189](https://github.com/Opentrons/opentrons/issues/9189)) ([fe92615](https://github.com/Opentrons/opentrons/commit/fe92615a941bb17becfef799a70cfcabe327ef41))
* **app:** fix bug in which runs and protocols were being queried with empty string params ([#8810](https://github.com/Opentrons/opentrons/issues/8810)) ([ee07fec](https://github.com/Opentrons/opentrons/commit/ee07feced5f92f5f3c824f416f8caa1d629ad7f4))
* **app:** fix loading and disabling of run cta button to avoid infinite spinner ([#9333](https://github.com/Opentrons/opentrons/issues/9333)) ([bce5334](https://github.com/Opentrons/opentrons/commit/bce533450ba6da489f4d4a38aee3a6b3d691fb29))
* **app:** fix missing null checks in protocol setup ([#9114](https://github.com/Opentrons/opentrons/issues/9114)) ([9fe24a4](https://github.com/Opentrons/opentrons/commit/9fe24a4e56ba23edd417957f92e973958d32b1c3))
* **app:** fix module status card error on run page ([#8938](https://github.com/Opentrons/opentrons/issues/8938)) ([1f7aca5](https://github.com/Opentrons/opentrons/commit/1f7aca547b893816346512daaeb4968189f6ddce))
* **app:** fix up labware offset matching logic for labware setup overlays ([#8932](https://github.com/Opentrons/opentrons/issues/8932)) ([91eb5e3](https://github.com/Opentrons/opentrons/commit/91eb5e3c1e62038d3cbb59067903658c62ee2bd3))
* **app:** fix wifi connection result overlay z index ([#9482](https://github.com/Opentrons/opentrons/issues/9482)) ([a8c0daf](https://github.com/Opentrons/opentrons/commit/a8c0daf676ac2e236cedd41f54c9a62c05097c7c)), closes [#9474](https://github.com/Opentrons/opentrons/issues/9474)
* **app:** flip run details redirect check for loaded run ([#9023](https://github.com/Opentrons/opentrons/issues/9023)) ([ba5b901](https://github.com/Opentrons/opentrons/commit/ba5b901454c8c8bb5678edd8cc1af52d5a9f48b3))
* **app:** ignore lpc commands when reconciling run and analysis for run log ([#8940](https://github.com/Opentrons/opentrons/issues/8940)) ([9541236](https://github.com/Opentrons/opentrons/commit/9541236c99bb7c9f903a9023e6e9c7933c9a5f22))
* **app:** initially expand correct setup step with modules and cal complete ([#9185](https://github.com/Opentrons/opentrons/issues/9185)) ([7e93404](https://github.com/Opentrons/opentrons/commit/7e9340441735d628d8d37f4c8a79675e3f78c2c7)), closes [#9127](https://github.com/Opentrons/opentrons/issues/9127)
* **app:** Load pipette centering images and fix styling ([#9148](https://github.com/Opentrons/opentrons/issues/9148)) ([3b3092b](https://github.com/Opentrons/opentrons/commit/3b3092b0a512b77e70e7739f1a7a8529132328fe))
* **app:** prevent run canceled banner from disappearing ([#9179](https://github.com/Opentrons/opentrons/issues/9179)) ([2bf57d9](https://github.com/Opentrons/opentrons/commit/2bf57d9795864c4fab8b5e54db57d34cd2b0d748)), closes [#9108](https://github.com/Opentrons/opentrons/issues/9108)
* **app:** prevent white screen when restarting and closing protocols ([#9091](https://github.com/Opentrons/opentrons/issues/9091)) ([391f606](https://github.com/Opentrons/opentrons/commit/391f606a740ad19ff3962bd7e9709b321f4d5def)), closes [#9082](https://github.com/Opentrons/opentrons/issues/9082) [#9083](https://github.com/Opentrons/opentrons/issues/9083)
* **app:** redirect to run page when run is cloned ([#9297](https://github.com/Opentrons/opentrons/issues/9297)) ([df85a2b](https://github.com/Opentrons/opentrons/commit/df85a2bae4fc0da110f7762fd41b7c70159c1539)), closes [#9106](https://github.com/Opentrons/opentrons/issues/9106)
* **app:** set run again button loading state for completed and stopped runs ([#9229](https://github.com/Opentrons/opentrons/issues/9229)) ([c74b241](https://github.com/Opentrons/opentrons/commit/c74b2417702ca65108d38b8c01774e4678710bf7)), closes [#9161](https://github.com/Opentrons/opentrons/issues/9161)
* **app:** shore up edge cases of current command tracking, use new commands endpoint link metadata ([#9418](https://github.com/Opentrons/opentrons/issues/9418)) ([3c27050](https://github.com/Opentrons/opentrons/commit/3c270503244ee6250d0fff3f902d9356b79892d3)), closes [#9379](https://github.com/Opentrons/opentrons/issues/9379)
* **app:** show cancel run when paused ([#8943](https://github.com/Opentrons/opentrons/issues/8943)) ([526892d](https://github.com/Opentrons/opentrons/commit/526892dfd4d1b7f5fe4694344ce82212f8dda512))
* **app:** show empty protocol upload page if current run is being dimissed ([#8983](https://github.com/Opentrons/opentrons/issues/8983)) ([b50f414](https://github.com/Opentrons/opentrons/commit/b50f4147ab049123ef6f9bc72ffc558772960993)), closes [#8953](https://github.com/Opentrons/opentrons/issues/8953)
* **app:** show protocol setup loading state after protocol record creation ([#8982](https://github.com/Opentrons/opentrons/issues/8982)) ([be485fe](https://github.com/Opentrons/opentrons/commit/be485fed08bc3ef6abf6bb0048d2822ac55455ae))
* **app:** show run errors in banner if run fails, hide errors if canceled ([#9464](https://github.com/Opentrons/opentrons/issues/9464)) ([008c116](https://github.com/Opentrons/opentrons/commit/008c1168a8e46ae35cec00505ca16c3cb6d571d5))
* **app:** titlebar cancel run button behavior and styling ([#9192](https://github.com/Opentrons/opentrons/issues/9192)) ([46c1428](https://github.com/Opentrons/opentrons/commit/46c14284a752d1a76558bf64e8a70e5cad4dcae5))
* **app:** update labware for drop_tip case to prevent whitescreen ([#9228](https://github.com/Opentrons/opentrons/issues/9228)) ([6402246](https://github.com/Opentrons/opentrons/commit/64022465b2321020b9c87fc0e8fe8b91c2a9703a))
* **app:** update protocol upload failed banner style ([#9180](https://github.com/Opentrons/opentrons/issues/9180)) ([d9e3cef](https://github.com/Opentrons/opentrons/commit/d9e3cef40965188125263c926634faa7d957c2c9)), closes [#9097](https://github.com/Opentrons/opentrons/issues/9097)
* **app:** while closing a protocol run, place loading spinner over whole app ([#9353](https://github.com/Opentrons/opentrons/issues/9353)) ([9d0775f](https://github.com/Opentrons/opentrons/commit/9d0775f4e9991cf2d13708cba93eb3b1fc7d91d9))
* **app, shared-data:** splice out first set of setup commands from run log only ([#9086](https://github.com/Opentrons/opentrons/issues/9086)) ([a86d9f7](https://github.com/Opentrons/opentrons/commit/a86d9f7d1b607aef3436a2ddcaa45042dfaf28b5)), closes [#9011](https://github.com/Opentrons/opentrons/issues/9011)
* **can:**  binary serializable build will ignore extra bytes. ([#8776](https://github.com/Opentrons/opentrons/issues/8776)) ([a9c644a](https://github.com/Opentrons/opentrons/commit/a9c644ad958ded970521c57e7d1905940a270c18))
* **engine:** take calibrated tip length into account during tip pickup ([#9246](https://github.com/Opentrons/opentrons/issues/9246)) ([7866767](https://github.com/Opentrons/opentrons/commit/7866767ee6057197edf253f8b31272a734a71afd)), closes [#9220](https://github.com/Opentrons/opentrons/issues/9220)
* **hardware:** Revert [#8995](https://github.com/Opentrons/opentrons/issues/8995) ([#9014](https://github.com/Opentrons/opentrons/issues/9014)) ([224f4c2](https://github.com/Opentrons/opentrons/commit/224f4c22b1a3a333bd35edc06ae8f2e22272a2c5))
* **hardware:** use correct payload for execute move group request. ([#8937](https://github.com/Opentrons/opentrons/issues/8937)) ([69928cc](https://github.com/Opentrons/opentrons/commit/69928ccad86208ed3901f0b2eae103ecefab0cb7))
* **labware-library:** Default opentrons tuberack inserts to brand opentrons ([#8644](https://github.com/Opentrons/opentrons/issues/8644)) ([1f0d8c0](https://github.com/Opentrons/opentrons/commit/1f0d8c0537e4b72d3313e2de5bc5bbbe897574a3)), closes [#8248](https://github.com/Opentrons/opentrons/issues/8248)
* **protocol-engine:** move HW API cleanup to engine.finish ([#9233](https://github.com/Opentrons/opentrons/issues/9233)) ([1994405](https://github.com/Opentrons/opentrons/commit/19944058762d889a6ab5b22e7a6ccc16f7367dda))
* **protocol-engine:** Preserve distinction between APIv2 protocols' requested vs. connected modules ([#9364](https://github.com/Opentrons/opentrons/issues/9364)) ([042907b](https://github.com/Opentrons/opentrons/commit/042907b3fa69cf30935dfa381eafa72b2b9f42fe))
* **robot-server:** add current command metadata to /commands response ([#9400](https://github.com/Opentrons/opentrons/issues/9400)) ([7da0420](https://github.com/Opentrons/opentrons/commit/7da0420bd07810095312e07eb22fb2d31ee29215))
* Change links to networks ([#9182](https://github.com/Opentrons/opentrons/issues/9182)) ([5fce550](https://github.com/Opentrons/opentrons/commit/5fce5504879121bfe294e0e4d6a09d09b1761c03))
* Fix poetry errors ([#9176](https://github.com/Opentrons/opentrons/issues/9176)) ([6080065](https://github.com/Opentrons/opentrons/commit/6080065579a94fb99d31d27b19073e153fc53ea3))


### Code Refactoring

* **robot-server:** remove deprecated protocols endpoints and FF ([#9261](https://github.com/Opentrons/opentrons/issues/9261)) ([802d858](https://github.com/Opentrons/opentrons/commit/802d8582dbc09566b8de9eca3672254ef271164b))
* **robot-server:** remove unused experimental /protocols code ([#9296](https://github.com/Opentrons/opentrons/issues/9296)) ([e462d17](https://github.com/Opentrons/opentrons/commit/e462d17dff12ce42a038ad221eb4ec52564e37e5))


### Features

* **api:** remove Calibrate to Bottom from Robot Settings ([#9111](https://github.com/Opentrons/opentrons/issues/9111)) ([06a92ee](https://github.com/Opentrons/opentrons/commit/06a92eecd9fba67c596d91e7c0096b5144b32ab6))
* **api:** Remove legacy LC reset from robot settings ([#9093](https://github.com/Opentrons/opentrons/issues/9093)) ([9b78815](https://github.com/Opentrons/opentrons/commit/9b788154fffc405152f6f5f165a4d646dd47b4b5)), closes [#8283](https://github.com/Opentrons/opentrons/issues/8283)
* **app:** add Comment text above comment commands in run details ([#9054](https://github.com/Opentrons/opentrons/issues/9054)) ([8c5d71f](https://github.com/Opentrons/opentrons/commit/8c5d71f2eb3c8262c556748424e1c390c06f4668)), closes [#9040](https://github.com/Opentrons/opentrons/issues/9040)
* **app:** add feedback link to protocol upload page ([#8854](https://github.com/Opentrons/opentrons/issues/8854)) ([03a61aa](https://github.com/Opentrons/opentrons/commit/03a61aaddb0b44d2fadc1ba3f26a4eb9242b1ce0)), closes [#8727](https://github.com/Opentrons/opentrons/issues/8727)
* **app:** add jupyter advanced setting to download offset data ([#9284](https://github.com/Opentrons/opentrons/issues/9284)) ([a15601b](https://github.com/Opentrons/opentrons/commit/a15601bd95bc775a9f203c02ee5681c1d67b4932))
* **app:** add Labware Offset Link in LPC ([#8967](https://github.com/Opentrons/opentrons/issues/8967)) ([ba6a9a1](https://github.com/Opentrons/opentrons/commit/ba6a9a14443cf543ecbae063eda285a191b6fee5)), closes [#8963](https://github.com/Opentrons/opentrons/issues/8963)
* **app:** add loader to LPC summary screen ([#9006](https://github.com/Opentrons/opentrons/issues/9006)) ([e9c1312](https://github.com/Opentrons/opentrons/commit/e9c13124f5e7d1950228547566ff63f0d9c6a180)), closes [#9001](https://github.com/Opentrons/opentrons/issues/9001)
* **app:** add loading text to LPC hook ([#8700](https://github.com/Opentrons/opentrons/issues/8700)) ([0372a76](https://github.com/Opentrons/opentrons/commit/0372a7645fe5cc51a7869f2e675f46e2d946b2f0)), closes [#8679](https://github.com/Opentrons/opentrons/issues/8679)
* **app:** add LPC Success Toast ([#8830](https://github.com/Opentrons/opentrons/issues/8830)) ([276afb1](https://github.com/Opentrons/opentrons/commit/276afb1525b95de3d39eacfc3eaeba18aa9cd726)), closes [#8486](https://github.com/Opentrons/opentrons/issues/8486)
* **app:** add module mismatch warning label to Module Setup ([#9250](https://github.com/Opentrons/opentrons/issues/9250)) ([af472e6](https://github.com/Opentrons/opentrons/commit/af472e6910c4726c876b025d23fe0c720c36e95a)), closes [#9160](https://github.com/Opentrons/opentrons/issues/9160)
* **app:** add tooltips if module connection or robot calibration is incomplete ([#9110](https://github.com/Opentrons/opentrons/issues/9110)) ([8e2a5a4](https://github.com/Opentrons/opentrons/commit/8e2a5a4bd024da47f066ad15fcd5e3e6bc2193f6)), closes [#9094](https://github.com/Opentrons/opentrons/issues/9094)
* **app:** add X icon to close out of exta attention warning labels ([#9258](https://github.com/Opentrons/opentrons/issues/9258)) ([9406ff6](https://github.com/Opentrons/opentrons/commit/9406ff6937173aafd86403335293d049b197decc)), closes [#8487](https://github.com/Opentrons/opentrons/issues/8487)
* **app:** added thermocycler error state status ([#8643](https://github.com/Opentrons/opentrons/issues/8643)) ([02544ae](https://github.com/Opentrons/opentrons/commit/02544ae2502335658e36e903450809416ee2e68b))
* **app:** apply in flight offsets to pick up tip and drop tip commands ([#8812](https://github.com/Opentrons/opentrons/issues/8812)) ([71b279d](https://github.com/Opentrons/opentrons/commit/71b279d38aa8f9549bbc0cdbbca757f17932f4ff))
* **app:** apply labware offsets to run record after LPC completes ([#8900](https://github.com/Opentrons/opentrons/issues/8900)) ([a961730](https://github.com/Opentrons/opentrons/commit/a961730ed9f21fbf0f8f226d7be9a5be3f432ab4))
* **app:** clear previous labware offsets on LPC start ([#8895](https://github.com/Opentrons/opentrons/issues/8895)) ([be31e2f](https://github.com/Opentrons/opentrons/commit/be31e2ff0553774a687296930c53e87058fa9f6f))
* **app:** confirm pick up tip button style ([#8968](https://github.com/Opentrons/opentrons/issues/8968)) ([b61ef1d](https://github.com/Opentrons/opentrons/commit/b61ef1d0822496dfb052a34c39df342e87899110)), closes [#8961](https://github.com/Opentrons/opentrons/issues/8961)
* **app:** delete v6 adapter pick up tip shim ([#8742](https://github.com/Opentrons/opentrons/issues/8742)) ([38d87eb](https://github.com/Opentrons/opentrons/commit/38d87ebbeb220b1cf99880acd7e1a2fa94b8a8a1))
* **app:** disable start run until robot is ready ([#8924](https://github.com/Opentrons/opentrons/issues/8924)) ([79f0f0a](https://github.com/Opentrons/opentrons/commit/79f0f0a22011fb8c5178773191f349eb6fd57d96)), closes [#8915](https://github.com/Opentrons/opentrons/issues/8915)
* **app:** Display banners when stopped, failed, or succeeded ([#8800](https://github.com/Opentrons/opentrons/issues/8800)) ([700f5a2](https://github.com/Opentrons/opentrons/commit/700f5a22669b89154b26c5d715225c65ea229820)), closes [#8573](https://github.com/Opentrons/opentrons/issues/8573)
* **app:** explain no TLC data if pipette not attached ([#8848](https://github.com/Opentrons/opentrons/issues/8848)) ([2d11fc5](https://github.com/Opentrons/opentrons/commit/2d11fc50507c4ca6be868771e281171d1de28e52)), closes [#8585](https://github.com/Opentrons/opentrons/issues/8585)
* **app:** LPC add pick up tip confirmation  ([#8849](https://github.com/Opentrons/opentrons/issues/8849)) ([f560f3b](https://github.com/Opentrons/opentrons/commit/f560f3babca84d2464050f57c947606fb25832c6))
* **app:** LPC robot is moving modal ([#8657](https://github.com/Opentrons/opentrons/issues/8657)) ([8d7d47d](https://github.com/Opentrons/opentrons/commit/8d7d47d3d2e7d7f9bc289ef4aa46a7172288625b)), closes [#8216](https://github.com/Opentrons/opentrons/issues/8216)
* **app:** LPC: warn about offset destruction ([#8840](https://github.com/Opentrons/opentrons/issues/8840)) ([dd0e0d4](https://github.com/Opentrons/opentrons/commit/dd0e0d4e8d45d8b2576f77e80a288b5c70fc41e7)), closes [#8684](https://github.com/Opentrons/opentrons/issues/8684)
* **app:** pass through python file and run tab disabled reason hook up to run presence ([#8729](https://github.com/Opentrons/opentrons/issues/8729)) ([9f827e2](https://github.com/Opentrons/opentrons/commit/9f827e2a110e86fdedf6e38c9da7901230d748ce))
* **app:** place LPC success modal above metadata card ([#8917](https://github.com/Opentrons/opentrons/issues/8917)) ([8dfbf0c](https://github.com/Opentrons/opentrons/commit/8dfbf0cc7d00ede53652680a26f10b80ce72c5e1))
* **app:** PUR MoaM support ([#8838](https://github.com/Opentrons/opentrons/issues/8838)) ([3ed5be7](https://github.com/Opentrons/opentrons/commit/3ed5be7af0762a669ad1b92c1b1cf07d5200574d)), closes [#8713](https://github.com/Opentrons/opentrons/issues/8713)
* **app:** Run Details Command List ([#8682](https://github.com/Opentrons/opentrons/issues/8682)) ([9ddf133](https://github.com/Opentrons/opentrons/commit/9ddf133f724389444b1ab269238e6aeb862768fe)), closes [#8368](https://github.com/Opentrons/opentrons/issues/8368) [#8481](https://github.com/Opentrons/opentrons/issues/8481)
* **app:** save position right after executing movement command ([#8923](https://github.com/Opentrons/opentrons/issues/8923)) ([ee709ef](https://github.com/Opentrons/opentrons/commit/ee709ef1524dd137f1a7198a3bfa231c01f6b804))
* **app:** show correct number of offsets in rerun protocol section ([#8934](https://github.com/Opentrons/opentrons/issues/8934)) ([f38e78e](https://github.com/Opentrons/opentrons/commit/f38e78ede79d430d50e63fdc0006c15b774f16d0))
* **app:** show loader when setup for runs steps are still loading ([#8857](https://github.com/Opentrons/opentrons/issues/8857)) ([1f3191e](https://github.com/Opentrons/opentrons/commit/1f3191eb3d420a69b88b74cc12f54e763802d467)), closes [#8777](https://github.com/Opentrons/opentrons/issues/8777)
* **app:** show offset deletion warning if previous offsets exist ([#8919](https://github.com/Opentrons/opentrons/issues/8919)) ([98f9696](https://github.com/Opentrons/opentrons/commit/98f96961a66312fcb633f5ce4d3fcfec1506a3e0)), closes [#8841](https://github.com/Opentrons/opentrons/issues/8841)
* **app:** use module model when applying labware offsets ([#8992](https://github.com/Opentrons/opentrons/issues/8992)) ([eaea065](https://github.com/Opentrons/opentrons/commit/eaea0656710d8734168cd4ad84b08043783f50c0))
* **app:** wire up calibration status to protocol details ([#8853](https://github.com/Opentrons/opentrons/issues/8853)) ([1ffeb68](https://github.com/Opentrons/opentrons/commit/1ffeb68fe8b4fc47f606cc79ce2e963298f9739e)), closes [#8846](https://github.com/Opentrons/opentrons/issues/8846)
* **app:** wire up cancel run ([#8721](https://github.com/Opentrons/opentrons/issues/8721)) ([6450edb](https://github.com/Opentrons/opentrons/commit/6450edb0421f1c2484c292f8583602d8f6fd13b8)), closes [#8543](https://github.com/Opentrons/opentrons/issues/8543)
* **app:** wire up labware position check ([#8774](https://github.com/Opentrons/opentrons/issues/8774)) ([6b2c3f1](https://github.com/Opentrons/opentrons/commit/6b2c3f1cfcfcc98b200919ad34544a661641c2cb))
* **app:** wire up labware setup accordion step labware offsets ([#8887](https://github.com/Opentrons/opentrons/issues/8887)) ([8672854](https://github.com/Opentrons/opentrons/commit/8672854b28e5cfbec90f1cd9705ee91998355e63)), closes [#8859](https://github.com/Opentrons/opentrons/issues/8859)
* **app:** wire up protocol resource + LPC ([#8722](https://github.com/Opentrons/opentrons/issues/8722)) ([c463e0a](https://github.com/Opentrons/opentrons/commit/c463e0a22ebccf410d67c6b18fe3c50b8a4a8d03)), closes [#8553](https://github.com/Opentrons/opentrons/issues/8553)
* **app, api-client:** add custom labware support ([#9044](https://github.com/Opentrons/opentrons/issues/9044)) ([9cbff27](https://github.com/Opentrons/opentrons/commit/9cbff274e5989ae6434032052a9875606ab249b3)), closes [#9026](https://github.com/Opentrons/opentrons/issues/9026)
* **can:** create clear all move groups request. ([#8718](https://github.com/Opentrons/opentrons/issues/8718)) ([bd1e56b](https://github.com/Opentrons/opentrons/commit/bd1e56bb70fa5b5347fbd3f2a54ba21c38d0117a))
* **can:** very basic script to run a move group. ([#8723](https://github.com/Opentrons/opentrons/issues/8723)) ([cc0981e](https://github.com/Opentrons/opentrons/commit/cc0981e6aa57f795a07dfa670e069b16dbe5b196))
* **components:** add overflow icon ([#9346](https://github.com/Opentrons/opentrons/issues/9346)) ([5845b3f](https://github.com/Opentrons/opentrons/commit/5845b3f71dde54759fa66e0b27c2ff367f10be9d))
* **engine:** allow compatible module loads and reloads ([#9273](https://github.com/Opentrons/opentrons/issues/9273)) ([1c7e00d](https://github.com/Opentrons/opentrons/commit/1c7e00d8da77273eca1a8d0bb5e7bed544e3c168))
* **hardware:** add messages to read and write to motor driver registers ([#8855](https://github.com/Opentrons/opentrons/issues/8855)) ([3142446](https://github.com/Opentrons/opentrons/commit/3142446d3246545a7fbab2b0af23ce66035bb987))
* **hardware:** add move manager ([#9022](https://github.com/Opentrons/opentrons/issues/9022)) ([93cc6fb](https://github.com/Opentrons/opentrons/commit/93cc6fb66627427abbe64bc77784da5995721ef6))
* **hardware:** CAN over plain old socket ([#9005](https://github.com/Opentrons/opentrons/issues/9005)) ([0ecc6bf](https://github.com/Opentrons/opentrons/commit/0ecc6bfe22d011a197b4de28fc71cb677a320396))
* **hardware:** ot3 push for hardware package. ([#8726](https://github.com/Opentrons/opentrons/issues/8726)) ([b0175bd](https://github.com/Opentrons/opentrons/commit/b0175bdb2a2d7d451447e8cf5bf0780c1189ba7d))
* **labware-library:** Add 4 new labware definitions to shared-data/library ([#9218](https://github.com/Opentrons/opentrons/issues/9218)) ([a7a51b2](https://github.com/Opentrons/opentrons/commit/a7a51b273b1450943221a64f140a30ec1eb0c042)), closes [#8649](https://github.com/Opentrons/opentrons/issues/8649)
* **ot3:** create over the wire format from hex file ([#9266](https://github.com/Opentrons/opentrons/issues/9266)) ([b43ee0d](https://github.com/Opentrons/opentrons/commit/b43ee0dfee0823c3c14d69f4ef61762921050031))
* **ot3:** introduce independent head l and r motion. ([#8966](https://github.com/Opentrons/opentrons/issues/8966)) ([30cb899](https://github.com/Opentrons/opentrons/commit/30cb899fe1769b996fb0ea6f0bae391c6dbec635))
* **ot3:** ot3 hardware controller move ([#8738](https://github.com/Opentrons/opentrons/issues/8738)) ([883db3a](https://github.com/Opentrons/opentrons/commit/883db3a96ca9c6a48bd4ccee16e221fe03154361)), closes [#8946](https://github.com/Opentrons/opentrons/issues/8946)
* **papi:** add labware.set_offset for jupyter/cli, bump papi to 2.12 ([#9242](https://github.com/Opentrons/opentrons/issues/9242)) ([17d03cd](https://github.com/Opentrons/opentrons/commit/17d03cdfbf1b41be17dd41d6b064f75d2184938a))
* **protocol-designer:** add feature flag for heater shaker in PD ([#9345](https://github.com/Opentrons/opentrons/issues/9345)) ([d36fac0](https://github.com/Opentrons/opentrons/commit/d36fac0cb0247f09b0e6fa61a10eff4a852fc3e0))
* **robot-server:** Add the `key` field to command HTTP summaries ([#9257](https://github.com/Opentrons/opentrons/issues/9257)) ([0be9e94](https://github.com/Opentrons/opentrons/commit/0be9e941a3ecc635550fbfef5926623c39876b43))
* **robot-server:** enable /runs and /protocols endpoints by default ([#8913](https://github.com/Opentrons/opentrons/issues/8913)) ([aa3549f](https://github.com/Opentrons/opentrons/commit/aa3549fad49383243f9ad2ccc291d15e8fd50725)), closes [#8155](https://github.com/Opentrons/opentrons/issues/8155)
* **robot-server:** Expose robot model in health ([#9072](https://github.com/Opentrons/opentrons/issues/9072)) ([8e052fc](https://github.com/Opentrons/opentrons/commit/8e052fcbb11c7338df4725ac7257c37fc5dd77fb))
* **robot-server,api,app:** When adding a jog command over HTTP, wait for it to complete before returning ([#9410](https://github.com/Opentrons/opentrons/issues/9410)) ([4d811d5](https://github.com/Opentrons/opentrons/commit/4d811d5485754b45795a275424e0b267edc88270))
* **shared-data:** add home command to proocol schema ([#8947](https://github.com/Opentrons/opentrons/issues/8947)) ([79e0ab9](https://github.com/Opentrons/opentrons/commit/79e0ab936dff72b221fd428039e110695d801212)), closes [#8892](https://github.com/Opentrons/opentrons/issues/8892)


### Performance Improvements

* **api:** bring back the ThreadManager ([#9199](https://github.com/Opentrons/opentrons/issues/9199)) ([ba931f7](https://github.com/Opentrons/opentrons/commit/ba931f750cf67ce68a6dc9e2ae9ac8682ce43d3a))
* **api:** Do not wait for the event loop to be free when reporting APIv2 commands ([#9238](https://github.com/Opentrons/opentrons/issues/9238)) ([6ab9b10](https://github.com/Opentrons/opentrons/commit/6ab9b10425eec5c63db93abdd3e68a1c33e0a3ac))
* **app:** memoize command items to reduce rerender on run poll ([#9247](https://github.com/Opentrons/opentrons/issues/9247)) ([411c8db](https://github.com/Opentrons/opentrons/commit/411c8db05ac8b64f9a3d809685b82cbff40e4090))
* **app:** virtualize command list on run detail page ([#9275](https://github.com/Opentrons/opentrons/issues/9275)) ([028e85f](https://github.com/Opentrons/opentrons/commit/028e85f89a9e12da98824e009e822d2dbb0022ea)), closes [#9217](https://github.com/Opentrons/opentrons/issues/9217)
* **app, robot-server:** paginate /runs/:run_id/commands response ([#9348](https://github.com/Opentrons/opentrons/issues/9348)) ([b9eb7b4](https://github.com/Opentrons/opentrons/commit/b9eb7b4d98532480705d3c32fd2485508315bea9))
* **protocol-engine:** avoid iterating all commands for every state update ([#9170](https://github.com/Opentrons/opentrons/issues/9170)) ([b12bffc](https://github.com/Opentrons/opentrons/commit/b12bffcee1edaba848c43b4af8c95a7bba367dde)), closes [#9109](https://github.com/Opentrons/opentrons/issues/9109) [#8739](https://github.com/Opentrons/opentrons/issues/8739)
* **robot-server:** move large response serialization to worker thread ([#9197](https://github.com/Opentrons/opentrons/issues/9197)) ([21c044d](https://github.com/Opentrons/opentrons/commit/21c044d4010bd1441950150acf4275b0b72a0d52))
* **robot-server:** Return some HTTP results slightly more efficiently ([#9336](https://github.com/Opentrons/opentrons/issues/9336)) ([0573ba6](https://github.com/Opentrons/opentrons/commit/0573ba62e914f1ab8d0fe7d984890b44ea2fd706))
* **robot-server:** serialize /protocols, /runs responses with Pydantic ([#9188](https://github.com/Opentrons/opentrons/issues/9188)) ([85b7ebb](https://github.com/Opentrons/opentrons/commit/85b7ebbe6dd728583c4f341803f9d756a5a6c685))
* **robot-server, api-client:** return run summaries from GET /runs rather than full run models ([#9332](https://github.com/Opentrons/opentrons/issues/9332)) ([66b1d7c](https://github.com/Opentrons/opentrons/commit/66b1d7c0082970c53306eb99006309914ad33b22))
* **robot-server, app:** remove commands from GET /runs/:run_id ([#9337](https://github.com/Opentrons/opentrons/issues/9337)) ([56f291a](https://github.com/Opentrons/opentrons/commit/56f291a1a4179322d440621e745186269e2dc4ee))


### Reverts

* Revert "feat(can): add getMoveStatus request & response (#8688)" (#8710) ([bfbab43](https://github.com/Opentrons/opentrons/commit/bfbab43a4af30c5a8ec75d227e91276cb2039cba)), closes [#8688](https://github.com/Opentrons/opentrons/issues/8688) [#8710](https://github.com/Opentrons/opentrons/issues/8710)


### BREAKING CHANGES

* **robot-server:** Removes experimental `protocol` session type
in favor of v5 `/protocols` and `/runs` endpoints
* **robot-server:** This removes endpoints used during the 2021 HTTP protocol upload beta.
Users should transition to the new `/protocols` and `/runs` endpoints, instead.
* **robot-server:** The RPC WebSocket endpoint has been removed. The /protocols endpoints have been
heavily reworked.





# [4.7.0](https://github.com/opentrons/opentrons/compare/v4.6.2...v4.7.0) (2021-11-18)


### Bug Fixes

* **api:** 4.6.x set max speed fails ([#8437](https://github.com/opentrons/opentrons/issues/8437)) ([5989af0](https://github.com/opentrons/opentrons/commit/5989af08e19d78c8cfff65e6bb2bb415ed7e174b)), closes [#8436](https://github.com/opentrons/opentrons/issues/8436)
* **api:** fix flaky emulator proxy tests ([#8704](https://github.com/opentrons/opentrons/issues/8704)) ([a1d5b04](https://github.com/opentrons/opentrons/commit/a1d5b045b34675f96d2cd5ceb92346992c50f0b0))
* **api:** Improve metadata parse error messages and fix metadata typechecking ([#8378](https://github.com/opentrons/opentrons/issues/8378)) ([1015b14](https://github.com/opentrons/opentrons/commit/1015b1459cd5da834f88925ce3f6b5eece4018ef)), closes [#8352](https://github.com/opentrons/opentrons/issues/8352)
* **api:** thermocycler error handling ([#8439](https://github.com/opentrons/opentrons/issues/8439)) ([7dcff2f](https://github.com/opentrons/opentrons/commit/7dcff2f7e0f5427c83738fca14c8d2dde7476740)), closes [#8393](https://github.com/opentrons/opentrons/issues/8393)
* **can:** show parsed messages in log. ([#8564](https://github.com/opentrons/opentrons/issues/8564)) ([f419193](https://github.com/opentrons/opentrons/commit/f419193ac93ef77f2975308487570297e2f89c0e))
* **components:** fix deck story in storybook ([#8446](https://github.com/opentrons/opentrons/issues/8446)) ([fe5d6d6](https://github.com/opentrons/opentrons/commit/fe5d6d64ad97f36c2bf80eb154f99323988cd488)), closes [#8445](https://github.com/opentrons/opentrons/issues/8445)
* **hardware:** add setup.cfg in order to conform to wheel naming standard. ([#8363](https://github.com/opentrons/opentrons/issues/8363)) ([b5a09c3](https://github.com/opentrons/opentrons/commit/b5a09c3bc9f985cd2f5886c23a7a482dace62d5f))
* **hardware:** fix another issue related to pcan. ([#8428](https://github.com/opentrons/opentrons/issues/8428)) ([5d28e3e](https://github.com/opentrons/opentrons/commit/5d28e3e8d7fa4fafc8b2a624598212fd74f97bdc))
* **opentrons-hardware:** setup.py in opentrons-hardware ([#8420](https://github.com/opentrons/opentrons/issues/8420)) ([6943bbd](https://github.com/opentrons/opentrons/commit/6943bbde791f06cf6333a00032106057783ed84d))
* **react-api-client:** add missing protocols export ([#8618](https://github.com/opentrons/opentrons/issues/8618)) ([d15de3d](https://github.com/opentrons/opentrons/commit/d15de3d774f8ebca2418f174a211a4738a3c8823))
* **robot-server:** avoid LabwareDefinition type in cal models ([#8698](https://github.com/opentrons/opentrons/issues/8698)) ([c3bf7ab](https://github.com/opentrons/opentrons/commit/c3bf7ab51074e8b5e160ce5755be6e80296f1963)), closes [#8654](https://github.com/opentrons/opentrons/issues/8654)
* **robot-server:** ensure background tasks do not affect requests ([#8362](https://github.com/opentrons/opentrons/issues/8362)) ([3e4bc2f](https://github.com/opentrons/opentrons/commit/3e4bc2f504282c51622682001780f35d5f3e5312))
* **tests:** robot server edge fix ([#8540](https://github.com/opentrons/opentrons/issues/8540)) ([5906edd](https://github.com/opentrons/opentrons/commit/5906edd0289bf25cbf88ae780c8752dbf4ff9ee5))


### Features

* **api:** Add hardware control for heater shaker ([#8435](https://github.com/opentrons/opentrons/issues/8435)) ([1a68d66](https://github.com/opentrons/opentrons/commit/1a68d66e9638206c2a4700ed0348f3137bc13789))
* **api-client:** add protocol resource to api-client and react-api-client ([#8577](https://github.com/opentrons/opentrons/issues/8577)) ([bcd50e7](https://github.com/opentrons/opentrons/commit/bcd50e79bf94ad5fa2d5d7288a1fbb587752567f)), closes [#8460](https://github.com/opentrons/opentrons/issues/8460)
* **api,robot-server:** upgrade fastapi and pydantic deps ([#8345](https://github.com/opentrons/opentrons/issues/8345)) ([9cf416a](https://github.com/opentrons/opentrons/commit/9cf416a498e77b2127a6e3e71298f9368f818d35)), closes [#8134](https://github.com/opentrons/opentrons/issues/8134)
* **app:** Add dependency on react-api-client and wrap app/ in QueryClientProvider ([#8614](https://github.com/opentrons/opentrons/issues/8614)) ([63d4039](https://github.com/opentrons/opentrons/commit/63d4039410da6ac3c45c5b6e7aaf57bcabce0361))
* **app:** add dynamic section + labware highlighting to LPC intro screen ([#8506](https://github.com/opentrons/opentrons/issues/8506)) ([6da1eca](https://github.com/opentrons/opentrons/commit/6da1ecaf7977341b7b290a1a2efee51175b1ceee)), closes [#8467](https://github.com/opentrons/opentrons/issues/8467)
* **app:** add Generic Step Screen dynamic image ([#8519](https://github.com/opentrons/opentrons/issues/8519)) ([9f25a91](https://github.com/opentrons/opentrons/commit/9f25a914dedf396c1617e8e8b891c5eeb43b1ca3)), closes [#8510](https://github.com/opentrons/opentrons/issues/8510)
* **app:** add ids to elements labware setup section ([#8461](https://github.com/opentrons/opentrons/issues/8461)) ([c1e877f](https://github.com/opentrons/opentrons/commit/c1e877f3f2f92fecd0609dcbbae706ece715615c)), closes [#8447](https://github.com/opentrons/opentrons/issues/8447)
* **app:** add js api client utils and wire up generic step screen ([#8638](https://github.com/opentrons/opentrons/issues/8638)) ([d790a0b](https://github.com/opentrons/opentrons/commit/d790a0bd04e35b78d93526850d90cf4d46db91cc)), closes [#8552](https://github.com/opentrons/opentrons/issues/8552)
* **app:** Add Labware Detail with Well Row/Column Highlighting ([#8499](https://github.com/opentrons/opentrons/issues/8499)) ([158c0bb](https://github.com/opentrons/opentrons/commit/158c0bbcfa9dc0a0af0acd9e5b24d76853ad913d)), closes [#8380](https://github.com/opentrons/opentrons/issues/8380)
* **app:** add PE analysis schema v6 adapter ([31fcc98](https://github.com/opentrons/opentrons/commit/31fcc9885c6be2b077f2b865f96fe99e981529c1)), closes [#8661](https://github.com/opentrons/opentrons/issues/8661)
* **app:** create blank labware position check generic step screen and break out intro screen ([#8433](https://github.com/opentrons/opentrons/issues/8433)) ([be5a764](https://github.com/opentrons/opentrons/commit/be5a764b93807c29d36c74beb39cc00742c7ecf2))
* **app:** extend DeckMap component in Generic Step Screen ([#8541](https://github.com/opentrons/opentrons/issues/8541)) ([3e15135](https://github.com/opentrons/opentrons/commit/3e15135a66bdf28b3b72c9d9cec1919396f282fe)), closes [#8501](https://github.com/opentrons/opentrons/issues/8501)
* **app:** extend SectionList component for Generic Step Screen ([#8513](https://github.com/opentrons/opentrons/issues/8513)) ([bb5fab0](https://github.com/opentrons/opentrons/commit/bb5fab030dbab11cf1c6d40bb0441cec1ca0e7fd)), closes [#8500](https://github.com/opentrons/opentrons/issues/8500)
* **app:** labware position check generic screen dynamic text ([#8451](https://github.com/opentrons/opentrons/issues/8451)) ([7f141dd](https://github.com/opentrons/opentrons/commit/7f141ddadba79b464395abd6c04e85b46ac2811e))
* **app:** LPC final summary screen scaffolding ([#8575](https://github.com/opentrons/opentrons/issues/8575)) ([d60e9fe](https://github.com/opentrons/opentrons/commit/d60e9fe9cce7205498b5541d119b235363e0f09f)), closes [#8219](https://github.com/opentrons/opentrons/issues/8219)
* **app:** protocol upload revamp confirm close protocol ([#8383](https://github.com/opentrons/opentrons/issues/8383)) ([511c003](https://github.com/opentrons/opentrons/commit/511c0037cf639a304510982c33d8f651a57c8aeb))
* **app:** PUR accordion steps copy updates ([#8465](https://github.com/opentrons/opentrons/issues/8465)) ([ee22043](https://github.com/opentrons/opentrons/commit/ee22043a27307a9b23b3170684031c83daf65a83)), closes [#8430](https://github.com/opentrons/opentrons/issues/8430)
* **app:** reveal jog controls ([#8528](https://github.com/opentrons/opentrons/issues/8528)) ([6750168](https://github.com/opentrons/opentrons/commit/675016811cf3dc95255b42a686cc3aaf2b2b1b06)), closes [#8382](https://github.com/opentrons/opentrons/issues/8382)
* **app:** rewire connect to robot ([#8567](https://github.com/opentrons/opentrons/issues/8567)) ([913040e](https://github.com/opentrons/opentrons/commit/913040e7fdb06f78ffe7adcb1b09f61a2b5a83f7)), closes [#8552](https://github.com/opentrons/opentrons/issues/8552)
* **app:** Robot Cal Accordion Step ([#8333](https://github.com/opentrons/opentrons/issues/8333)) ([78e413a](https://github.com/opentrons/opentrons/commit/78e413a47da32004dee32ddf8b05835cd19b9268))
* **app:** Run Details Individual command styling ([#8612](https://github.com/opentrons/opentrons/issues/8612)) ([bb0715b](https://github.com/opentrons/opentrons/commit/bb0715b4040834ee8b21e4eaf3b6c420ae88d079)), closes [#8480](https://github.com/opentrons/opentrons/issues/8480)
* **app:** wire up protocol upload ([#8663](https://github.com/opentrons/opentrons/issues/8663)) ([3b8d754](https://github.com/opentrons/opentrons/commit/3b8d7541f110279ce0955ded13bbc3af714bb0de))
* **can:**  add separate gantry ids ([#8529](https://github.com/opentrons/opentrons/issues/8529)) ([ffb61ef](https://github.com/opentrons/opentrons/commit/ffb61ef859017ce5b61586c0bbd3119b5b9bbbb3))
* **can:**  can move group messages ([#8554](https://github.com/opentrons/opentrons/issues/8554)) ([283df4a](https://github.com/opentrons/opentrons/commit/283df4acc7841827c885b9beb0b5ae7a43a6bbac))
* **can:** add can messenger. ([#8647](https://github.com/opentrons/opentrons/issues/8647)) ([5abc00e](https://github.com/opentrons/opentrons/commit/5abc00ed04e863b765474df963ac235821b5a55b))
* **can:** add getMoveStatus request & response ([#8688](https://github.com/opentrons/opentrons/issues/8688)) ([4f50044](https://github.com/opentrons/opentrons/commit/4f500440b5d785c9f7cc1698b15b758df9ced507))
* **can:** add head id ([#8532](https://github.com/opentrons/opentrons/issues/8532)) ([f69e315](https://github.com/opentrons/opentrons/commit/f69e3153a7fed176b351aeebb0d928774f7e50c0))
* **can:** add messages for enabling and disabling motors ([#8531](https://github.com/opentrons/opentrons/issues/8531)) ([db67a13](https://github.com/opentrons/opentrons/commit/db67a13bf255f5f153e3fe9346955900fd735404))
* **can:** Add MoveCompleted Response ([#8581](https://github.com/opentrons/opentrons/issues/8581)) ([32c03eb](https://github.com/opentrons/opentrons/commit/32c03ebff24e721c377072dad297212d846b54aa))
* **can:** allow 64 bit fields in payloads. ([#8664](https://github.com/opentrons/opentrons/issues/8664)) ([23ff933](https://github.com/opentrons/opentrons/commit/23ff9331f474af8d630fe4cca96b879e8a479312))
* **can:** Api hardware can id script ([#8344](https://github.com/opentrons/opentrons/issues/8344)) ([6697e39](https://github.com/opentrons/opentrons/commit/6697e394458dfebf7974f7ff0edfd99f8a2e944b))
* **can:** api hardware sub project ([#8343](https://github.com/opentrons/opentrons/issues/8343)) ([822e419](https://github.com/opentrons/opentrons/commit/822e41911e7064783048b3a3605b30d57fb25d8d))
* **can:** generate can constants header file ([#8350](https://github.com/opentrons/opentrons/issues/8350)) ([623f820](https://github.com/opentrons/opentrons/commit/623f820dbe13c6eb789f0e7d5945616d7d40826d))
* **can:** Hardware move group schedule ([#8656](https://github.com/opentrons/opentrons/issues/8656)) ([bed6a2b](https://github.com/opentrons/opentrons/commit/bed6a2b15e7ef0ddbf324648d8349ec771c50111))
* **can:** PCAN does FD. ([#8597](https://github.com/opentrons/opentrons/issues/8597)) ([51df13c](https://github.com/opentrons/opentrons/commit/51df13c1e0d8228f8de1b2aa14556d728402cf25))
* **can:** raise error when an error frame is detected. [#8458](https://github.com/opentrons/opentrons/issues/8458) ([c038929](https://github.com/opentrons/opentrons/commit/c0389293c9ca78dd021edccc9847f2e4ef94e7e9))
* **can:** replace uart script ([#8450](https://github.com/opentrons/opentrons/issues/8450)) ([63eb764](https://github.com/opentrons/opentrons/commit/63eb7641b2690fdd559dd38b8d0ecd8242d30bd5))
* **can:** The most rudimentary move group builder. ([#8653](https://github.com/opentrons/opentrons/issues/8653)) ([90fce3c](https://github.com/opentrons/opentrons/commit/90fce3c0a7bc8d57d0d5493fd1c586a5c0289df7))
* **components:** add pipette render component ([#8414](https://github.com/opentrons/opentrons/issues/8414)) ([8c008c4](https://github.com/opentrons/opentrons/commit/8c008c41ce4dc093770343f8edac18cc69ca4c51)), closes [#8379](https://github.com/opentrons/opentrons/issues/8379)
* **g-code-testing:** HTTP G-Code GitHub Action (RET-174) ([#8338](https://github.com/opentrons/opentrons/issues/8338)) ([b45e05b](https://github.com/opentrons/opentrons/commit/b45e05b55b1976f09e29a1adc79d1734115bb568))
* **hardware:** Connect integration tests to OT-3 Emulator (RET-183, RET-187) ([#8381](https://github.com/opentrons/opentrons/issues/8381)) ([7dfa85e](https://github.com/opentrons/opentrons/commit/7dfa85e1647bdf5c68a594b1e932d4803c1ca5bc))
* **hardware:** serializing dataclasses for can message contents ([#8400](https://github.com/opentrons/opentrons/issues/8400)) ([0487896](https://github.com/opentrons/opentrons/commit/0487896d16613c161563eca85dee8edaa6db3a8d))
* **ot3:** OT3Controller backend for hardware controller ([#8492](https://github.com/opentrons/opentrons/issues/8492)) ([5600948](https://github.com/opentrons/opentrons/commit/56009482a376b712384441f429c2e0d78192bdbd))
* **robot-server:** allow a run and a legacy session to exist simultaneously ([#8615](https://github.com/opentrons/opentrons/issues/8615)) ([b470946](https://github.com/opentrons/opentrons/commit/b4709462df09479a2c4f8160561046e5cd588e3b))


### Reverts

* **robot-server:** revert attach pipette code back to using the mount ([#8699](https://github.com/opentrons/opentrons/issues/8699)) ([dc9f9a8](https://github.com/opentrons/opentrons/commit/dc9f9a8df5cd92b8efe0dceae0415dc7240682a3))







**Note:** Version bump only for package opentrons





## [4.6.2](https://github.com/Opentrons/opentrons/compare/v4.6.1...v4.6.2) (2021-09-30)


### Bug Fixes

* **api:** 4.6.x set max speed fails ([#8437](https://github.com/Opentrons/opentrons/issues/8437)) ([cb9a4f0](https://github.com/Opentrons/opentrons/commit/cb9a4f03df857b3e688651be4abd3ff9f9baa586)), closes [#8436](https://github.com/Opentrons/opentrons/issues/8436)





## [4.6.1](https://github.com/Opentrons/opentrons/compare/v4.6.0...v4.6.1) (2021-09-28)


### Bug Fixes

* **api:** loosen numpy spec in setup.py ([#8418](https://github.com/Opentrons/opentrons/issues/8418)) ([105cf3a](https://github.com/Opentrons/opentrons/commit/105cf3ab8bd404da07e457b145f6339358390a37))





# [4.6.0](https://github.com/Opentrons/opentrons/compare/v4.5.0...v4.6.0) (2021-09-27)


### Bug Fixes

* **api:** drop tip after cancel ([#8229](https://github.com/Opentrons/opentrons/issues/8229)) ([bb44718](https://github.com/Opentrons/opentrons/commit/bb447184b97f7607604eb79a4cdad942a9366bc1))
* **api:** ensure decorators do not erase ProtocolContext types ([#8323](https://github.com/Opentrons/opentrons/issues/8323)) ([2a8a370](https://github.com/Opentrons/opentrons/commit/2a8a37025e8894230cdeb0376a7bf832b4e9f12f))
* **api:** Make tip pickup error say "pick up tip," not "drop tip" ([#8251](https://github.com/Opentrons/opentrons/issues/8251)) ([430fbeb](https://github.com/Opentrons/opentrons/commit/430fbeb9b59cbbcb8a9288a5afc9445030711b34))
* **api:** wait for poll before awaiting tempdeck temperature ([#8340](https://github.com/Opentrons/opentrons/issues/8340)) ([acb394d](https://github.com/Opentrons/opentrons/commit/acb394d72260f3660df9e2086a8e44e0b349b632))
* **components, protocol-designer:** fix TitledList alignment ([#8186](https://github.com/Opentrons/opentrons/issues/8186)) ([557e583](https://github.com/Opentrons/opentrons/commit/557e58301fb9391ae68334561ff0a478ce5d4c37)), closes [#8008](https://github.com/Opentrons/opentrons/issues/8008) [#7543](https://github.com/Opentrons/opentrons/issues/7543)
* **fastsim:** fast sim fails when using InstrumentContext.pair_with function ([#8290](https://github.com/Opentrons/opentrons/issues/8290)) ([02b78de](https://github.com/Opentrons/opentrons/commit/02b78de18ba03bfceafb98374f04ef41431f8d51)), closes [#8222](https://github.com/Opentrons/opentrons/issues/8222)
* **fastsim:** set_defaults for FlowRates in InstrumentContextSimulation ([165dd5d](https://github.com/Opentrons/opentrons/commit/165dd5d45a3fef4a4af9756fbfcc774e674e102c)), closes [#8272](https://github.com/Opentrons/opentrons/issues/8272)
* **labware-creator:** fix bad syntax in tip rack protocol ([#8171](https://github.com/Opentrons/opentrons/issues/8171)) ([9468633](https://github.com/Opentrons/opentrons/commit/9468633a2eb5c3ee8388f4f83427635b5f32199b))
* **labware-creator:** fix readonly option type error ([#8306](https://github.com/Opentrons/opentrons/issues/8306)) ([463fb70](https://github.com/Opentrons/opentrons/commit/463fb70a65f3fbb0968b7056c5323dd19ea11238)), closes [#7972](https://github.com/Opentrons/opentrons/issues/7972)
* **protocol-designer:** fix whitescreen when adding addtl temp steps ([#8181](https://github.com/Opentrons/opentrons/issues/8181)) ([34dbc35](https://github.com/Opentrons/opentrons/commit/34dbc351f4e1d8039878e9485685f2b508a88f17)), closes [#7819](https://github.com/Opentrons/opentrons/issues/7819)
* **robot-server:** use the current critical point when moving pipettes ([#8331](https://github.com/Opentrons/opentrons/issues/8331)) ([09efb81](https://github.com/Opentrons/opentrons/commit/09efb818822cbfa5169377884240c6e494024226))
* **simulation:** NoTipAttachedError in fast simulation only ([#8280](https://github.com/Opentrons/opentrons/issues/8280)) ([b7e93f1](https://github.com/Opentrons/opentrons/commit/b7e93f1e2e47a70c61f40432ac60010163d2fb5b)), closes [#8273](https://github.com/Opentrons/opentrons/issues/8273)
* **tempdeck:** make tempdeck waiting functions cancelable ([#8327](https://github.com/Opentrons/opentrons/issues/8327)) ([70b956f](https://github.com/Opentrons/opentrons/commit/70b956f4aa8bb344385787ea07f1d4f5ccef28da))


### Features

* **api:** Add filtering of polling messages to G-Code Parser ([#8198](https://github.com/Opentrons/opentrons/issues/8198)) ([5719c62](https://github.com/Opentrons/opentrons/commit/5719c62bd6daee7e557cfb5c23ef56fe62c65e3c))
* **api:** Add G-Code Parser CI Integration ([#8203](https://github.com/Opentrons/opentrons/issues/8203)) ([0f3f066](https://github.com/Opentrons/opentrons/commit/0f3f066deae94b6e31b2258d1a2f0fd2360c7f19))
* **api:** Add G-Code Parser Makefile S3 Interface ([#8194](https://github.com/Opentrons/opentrons/issues/8194)) ([c4191e0](https://github.com/Opentrons/opentrons/commit/c4191e058ec773ded13ece228b8e4f1ffb20fa16))
* **api:** Add G-Code parsing for Thermocycler ([#8173](https://github.com/Opentrons/opentrons/issues/8173)) ([f162300](https://github.com/Opentrons/opentrons/commit/f162300cab76ae7a77608458af6e66f726864a30))
* **api:** opentrons_simulate gets duration estimation ([#8321](https://github.com/Opentrons/opentrons/issues/8321)) ([5c59fc7](https://github.com/Opentrons/opentrons/commit/5c59fc7fa5e7c2a0b318f64b2aca7149747eb550)), closes [#8279](https://github.com/Opentrons/opentrons/issues/8279) [#8300](https://github.com/Opentrons/opentrons/issues/8300) [#8311](https://github.com/Opentrons/opentrons/issues/8311)
* **app:** add id attributes for e2e testing ([#8262](https://github.com/Opentrons/opentrons/issues/8262)) ([9d4274c](https://github.com/Opentrons/opentrons/commit/9d4274c565a43ddaeb748752ea17afa8c90a6fe0))
* **app:** add labware setup step to protocol setup flow ([#8172](https://github.com/Opentrons/opentrons/issues/8172)) ([e33deb7](https://github.com/Opentrons/opentrons/commit/e33deb7ca641900196dbc6c8edff0bea7e14343e)), closes [#7665](https://github.com/Opentrons/opentrons/issues/7665)
* **app:** add module attention warning to labware setup  ([#8230](https://github.com/Opentrons/opentrons/issues/8230)) ([618161c](https://github.com/Opentrons/opentrons/commit/618161c74e582845d5907e9368c199396486ed6f))
* **app:** add module setup step to protocol setup ([#8224](https://github.com/Opentrons/opentrons/issues/8224)) ([2b9e77c](https://github.com/Opentrons/opentrons/commit/2b9e77cc0644b8582ceb84764f073f260bdc8c2c))
* **app:** establish logic for labware position check ([#8246](https://github.com/Opentrons/opentrons/issues/8246)) ([9bf7f61](https://github.com/Opentrons/opentrons/commit/9bf7f615660d5949d47b7c410580cf5394011c29))
* **app:** gather all protocol and calibration data  ([#8182](https://github.com/Opentrons/opentrons/issues/8182)) ([31b8df5](https://github.com/Opentrons/opentrons/commit/31b8df583f23f79829e2e046b6db11c123acf4dc)), closes [#8097](https://github.com/Opentrons/opentrons/issues/8097)
* **app:** usb connection and moam modal functionality in module setup ([#8257](https://github.com/Opentrons/opentrons/issues/8257)) ([da516da](https://github.com/Opentrons/opentrons/commit/da516da0cfc6d8a88372f9282d9899d632a5eba4))
* **g-code-testing:** Add functionality to run HTTP requests through G-Code Parser (RET-148, RET-149, RET-151) ([#8316](https://github.com/Opentrons/opentrons/issues/8316)) ([08c049b](https://github.com/Opentrons/opentrons/commit/08c049b625c318d6a1d143cfe555545b6b6a2e6a))
* **protocol-engine:** implement well & labware's well accessor methods ([#8151](https://github.com/Opentrons/opentrons/issues/8151)) ([bff281a](https://github.com/Opentrons/opentrons/commit/bff281a273ae2dce99e770f76b823ec503217d3f))





# [4.5.0](https://github.com/Opentrons/opentrons/compare/v4.4.0...v4.5.0) (2021-08-03)


### Bug Fixes

* **api:** fix module path for jupyter notebook ([#8009](https://github.com/Opentrons/opentrons/issues/8009)) ([f8bdf5c](https://github.com/Opentrons/opentrons/commit/f8bdf5c096c444320e9b70d5f88f6eec38a2dc01))
* **api:** ignore missing aionotify more properly ([#8154](https://github.com/Opentrons/opentrons/issues/8154)) ([bb0e3a0](https://github.com/Opentrons/opentrons/commit/bb0e3a02720b4e7f9c3e0678ea6f8d4d9b5145a4))
* **api:** reduce the severity of retry message from warning to info. ([#8192](https://github.com/Opentrons/opentrons/issues/8192)) ([47bc77a](https://github.com/Opentrons/opentrons/commit/47bc77a1a0b89becf9e43ac2f32b53f2b6efa048))
* **api:** tolerate bad json in calibration defs ([#7962](https://github.com/Opentrons/opentrons/issues/7962)) ([588668a](https://github.com/Opentrons/opentrons/commit/588668a8500297ce52bb36d67a93b14790c4d91b))
* **app:** Run timer stays at 00:00:00 if you reconnect in the middle of a delay ([#7937](https://github.com/Opentrons/opentrons/issues/7937)) ([6415c90](https://github.com/Opentrons/opentrons/commit/6415c9036e5f0368a9862cb11d6608702c0815a3))
* **labware-creator:** add margin to bottom of LC ([#8034](https://github.com/Opentrons/opentrons/issues/8034)) ([eeace5b](https://github.com/Opentrons/opentrons/commit/eeace5b3f3f953e10c2052e645a7f1551d99a24f)), closes [#8027](https://github.com/Opentrons/opentrons/issues/8027)
* **labware-creator:** reduce spacing btw tube brand + rack brand ([#8144](https://github.com/Opentrons/opentrons/issues/8144)) ([d67f0f9](https://github.com/Opentrons/opentrons/commit/d67f0f9f3e7adb49aaf450c6368ed99ecda72a20)), closes [#8140](https://github.com/Opentrons/opentrons/issues/8140)
* **labware-creator:** remove extra margin btw p's of "Custom Tip Racks Are Not Recommended" section ([#8047](https://github.com/Opentrons/opentrons/issues/8047)) ([4be5bc0](https://github.com/Opentrons/opentrons/commit/4be5bc00b7db5958238e53ad7738af31a046fca0))
* **labware-creator:** simplify autofill and fix bugs ([#8143](https://github.com/Opentrons/opentrons/issues/8143)) ([e6e3d9c](https://github.com/Opentrons/opentrons/commit/e6e3d9c95cfcb4577472d82bb896f92885e2f92a))
* **robot-server:** Don't hide exceptions in startup/shutdown handlers ([#8080](https://github.com/Opentrons/opentrons/issues/8080)) ([3f25b5d](https://github.com/Opentrons/opentrons/commit/3f25b5d022b3e89b971ff6b84726681578848181))


### Features

* **api:** Add G-Code parsing ([#8043](https://github.com/Opentrons/opentrons/issues/8043)) ([c2ccb10](https://github.com/Opentrons/opentrons/commit/c2ccb109b1d680f885bc13608cf35d131440ec07))
* **api:** Add G-Code response handling to G-Code Parser ([#8096](https://github.com/Opentrons/opentrons/issues/8096)) ([a417735](https://github.com/Opentrons/opentrons/commit/a417735874e8550b3d48d6372b3996d37ab0106f))
* **api:** Add G-Code to human-readable text parsing ([#8086](https://github.com/Opentrons/opentrons/issues/8086)) ([bedaeeb](https://github.com/Opentrons/opentrons/commit/bedaeeba9b5d2a30560442728aebc87493458e80))
* **api:** Add Magdeck G-Code Parsing ([#8159](https://github.com/Opentrons/opentrons/issues/8159)) ([3185656](https://github.com/Opentrons/opentrons/commit/31856567f5753f1927a6c0328e8ab3699b88a3a9))
* **api:** Create framework for running protocols against emulation ([#8149](https://github.com/Opentrons/opentrons/issues/8149)) ([1d046ea](https://github.com/Opentrons/opentrons/commit/1d046eabb1f7065cb603b3aae309c495c2fda017))
* **api:** G-Code CLI ([#8156](https://github.com/Opentrons/opentrons/issues/8156)) ([73bd30c](https://github.com/Opentrons/opentrons/commit/73bd30c0e12ae6894e5dff5a5f6d4926e89744c8))
* **api:** G-Code Diffing ([#8135](https://github.com/Opentrons/opentrons/issues/8135)) ([33e3ee3](https://github.com/Opentrons/opentrons/commit/33e3ee3b0c80e0897816ee0ad4e787d0249e6fe4))
* **api:** promote fast protocol analysis to default behavior ([#8022](https://github.com/Opentrons/opentrons/issues/8022)) ([8d9a707](https://github.com/Opentrons/opentrons/commit/8d9a707064b6d471419a8ddf4ba33d6d0d6f2a02)), closes [#7835](https://github.com/Opentrons/opentrons/issues/7835)
* **api:** Tempdeck G-Code Parsing ([#8160](https://github.com/Opentrons/opentrons/issues/8160)) ([79778e7](https://github.com/Opentrons/opentrons/commit/79778e7125bb496f0c6659464d976afae5ea754f))
* **labware-creator:** add custom copy for tip rack volume section ([#7899](https://github.com/Opentrons/opentrons/issues/7899)) ([d7bf804](https://github.com/Opentrons/opentrons/commit/d7bf80428befb71e1b468145437914e98d4409d6)), closes [#7717](https://github.com/Opentrons/opentrons/issues/7717)
* **labware-creator:** add dynamic height copy for tip racks ([#7869](https://github.com/Opentrons/opentrons/issues/7869)) ([781cc8b](https://github.com/Opentrons/opentrons/commit/781cc8bf8a961166a9cafd76b7d31bb674f7e7f0)), closes [#7716](https://github.com/Opentrons/opentrons/issues/7716)
* **labware-creator:** add python labware test protocols ([#7998](https://github.com/Opentrons/opentrons/issues/7998)) ([50d78bc](https://github.com/Opentrons/opentrons/commit/50d78bca2e9426fd153f8a7f77f66fee24cb2218))
* **labware-creator:** add tiprack test file to export section ([#8018](https://github.com/Opentrons/opentrons/issues/8018)) ([311e1b2](https://github.com/Opentrons/opentrons/commit/311e1b26bbb781645cfa4793562ad0a0890a884f)), closes [#7166](https://github.com/Opentrons/opentrons/issues/7166)
* **labware-creator:** added multichannel compatibility to protocol ([#8093](https://github.com/Opentrons/opentrons/issues/8093)) ([645e633](https://github.com/Opentrons/opentrons/commit/645e633d9e47819733d536442d18030071f9ba21))
* **labware-creator:** added tube brand and rack brand ([#8082](https://github.com/Opentrons/opentrons/issues/8082)) ([22ee36f](https://github.com/Opentrons/opentrons/commit/22ee36f79129b04d2588ae72a173ea1eb1253a12)), closes [#7986](https://github.com/Opentrons/opentrons/issues/7986)
* **labware-creator:** allow dynamic field labels via getLabel ([#8062](https://github.com/Opentrons/opentrons/issues/8062)) ([4960d97](https://github.com/Opentrons/opentrons/commit/4960d9779005d5274a1dbb2d07e9349d5340e4f6)), closes [#7974](https://github.com/Opentrons/opentrons/issues/7974)
* **labware-creator:** change preview text to reflect labware type ([#8031](https://github.com/Opentrons/opentrons/issues/8031)) ([94a5395](https://github.com/Opentrons/opentrons/commit/94a539597855f31a10f82fbf2200b4fe6f406152))
* **labware-creator:** change tube rack inserts for custom tubes ([#8060](https://github.com/Opentrons/opentrons/issues/8060)) ([f51ec8d](https://github.com/Opentrons/opentrons/commit/f51ec8da9c853b3fd9d7a8e76b708f3909459ab2)), closes [#7969](https://github.com/Opentrons/opentrons/issues/7969)
* **labware-creator:** export and import tiprack defs ([#7947](https://github.com/Opentrons/opentrons/issues/7947)) ([a90e66d](https://github.com/Opentrons/opentrons/commit/a90e66d191a47d2a92a839e9554b8610aac27603)), closes [#7696](https://github.com/Opentrons/opentrons/issues/7696) [#7697](https://github.com/Opentrons/opentrons/issues/7697)
* **labware-creator:** grid offset update for tube racks ([#8071](https://github.com/Opentrons/opentrons/issues/8071)) ([f332849](https://github.com/Opentrons/opentrons/commit/f332849cdaaceb174c7aae0d0365c8276e4afde8)), closes [#7984](https://github.com/Opentrons/opentrons/issues/7984)
* **labware-creator:** implement and test saving custom tube racks ([#8089](https://github.com/Opentrons/opentrons/issues/8089)) ([2f6f7e0](https://github.com/Opentrons/opentrons/commit/2f6f7e0c313a9ef9a0d04da67aa8e05e579ca916)), closes [#7964](https://github.com/Opentrons/opentrons/issues/7964)
* **labware-creator:** make dynamic wells/tips copy in Grid section ([#8019](https://github.com/Opentrons/opentrons/issues/8019)) ([9738d9c](https://github.com/Opentrons/opentrons/commit/9738d9c95d1f75a9596ce01b04359af9bdc7dc56))
* **labware-creator:** make error copy "is required" not "must be a number" ([#8038](https://github.com/Opentrons/opentrons/issues/8038)) ([9afc2dd](https://github.com/Opentrons/opentrons/commit/9afc2dd4ffb382e18fd770845430dda1b6562399)), closes [#8026](https://github.com/Opentrons/opentrons/issues/8026)
* **labware-creator:** refactored paused before tip pick up ([#8029](https://github.com/Opentrons/opentrons/issues/8029)) ([40cd5a3](https://github.com/Opentrons/opentrons/commit/40cd5a32acf0a44c9c9ff561f5450d1edc2f5a97))
* **labware-creator:** remove text saying tipracks not supported in LC ([#7971](https://github.com/Opentrons/opentrons/issues/7971)) ([64011e0](https://github.com/Opentrons/opentrons/commit/64011e000c9f4ab972075ac3a0d06ea43ce42d8f))
* **labware-creator:** show Grid section for custom tube racks ([#8068](https://github.com/Opentrons/opentrons/issues/8068)) ([8c5bff3](https://github.com/Opentrons/opentrons/commit/8c5bff3d3f2e59d0100c8b5d3374c619337bcc0b)), closes [#7979](https://github.com/Opentrons/opentrons/issues/7979)
* **labware-creator:** show whole labware in preview svg ([#8013](https://github.com/Opentrons/opentrons/issues/8013)) ([9b2fc17](https://github.com/Opentrons/opentrons/commit/9b2fc17843187d36746c10f4ba1ac6e551483ef9)), closes [#7164](https://github.com/Opentrons/opentrons/issues/7164)
* **labware-creator:** support multi-channel pipettes ([#8099](https://github.com/Opentrons/opentrons/issues/8099)) ([992f579](https://github.com/Opentrons/opentrons/commit/992f579b0287a572f71683fa744fbf97f8012f1b)), closes [#7965](https://github.com/Opentrons/opentrons/issues/7965)
* **labware-creator:** update bottom & depth section for tubes ([#8066](https://github.com/Opentrons/opentrons/issues/8066)) ([ccdb7d8](https://github.com/Opentrons/opentrons/commit/ccdb7d8ea4bf4fce53a451b707e9f717841054b2)), closes [#7982](https://github.com/Opentrons/opentrons/issues/7982)
* **labware-creator:** Update grid spacing when tiprack is selected ([#7932](https://github.com/Opentrons/opentrons/issues/7932)) ([6123de9](https://github.com/Opentrons/opentrons/commit/6123de96c67aba27fe94c3b6fba64ef3771d47dd)), closes [#7725](https://github.com/Opentrons/opentrons/issues/7725)
* **labware-creator:** Update gridd offset instructions/img when tiprack selected ([#7914](https://github.com/Opentrons/opentrons/issues/7914)) ([c314ad7](https://github.com/Opentrons/opentrons/commit/c314ad7e3eaa5c2484483c944d62d836a090d581)), closes [#7726](https://github.com/Opentrons/opentrons/issues/7726)
* **labware-creator:** update shape+size section for tube rack ([#8074](https://github.com/Opentrons/opentrons/issues/8074)) ([9b89ad9](https://github.com/Opentrons/opentrons/commit/9b89ad99535439d9f758b130383fcdaa3f1b5923)), closes [#7981](https://github.com/Opentrons/opentrons/issues/7981)
* **labware-creator:** update spacing section for custom tube racks ([#8063](https://github.com/Opentrons/opentrons/issues/8063)) ([03db137](https://github.com/Opentrons/opentrons/commit/03db13771a5f94fe37764b4def01680397631de7)), closes [#7983](https://github.com/Opentrons/opentrons/issues/7983)
* **labware-creator:** update tiprack recommendation text ([#8036](https://github.com/Opentrons/opentrons/issues/8036)) ([d051e08](https://github.com/Opentrons/opentrons/commit/d051e0813ccf88374794fb24078b33105047d569)), closes [#8035](https://github.com/Opentrons/opentrons/issues/8035)
* **labware-creator:** Update Well Depth Section to show Tip Length ([#7949](https://github.com/Opentrons/opentrons/issues/7949)) ([fe4d6db](https://github.com/Opentrons/opentrons/commit/fe4d6db248b2444506e839005e54bf4475d1bdc8)), closes [#7724](https://github.com/Opentrons/opentrons/issues/7724)
* **labware-creator:** use "tube" not "well" for x/y errors ([#8150](https://github.com/Opentrons/opentrons/issues/8150)) ([d9c7ed2](https://github.com/Opentrons/opentrons/commit/d9c7ed23d13cdb62bd1bc397dc2871d4bd5b77e9)), closes [#8142](https://github.com/Opentrons/opentrons/issues/8142)
* **labware-designer:** add prototype react-based sandbox-style live labware editor ([#8010](https://github.com/Opentrons/opentrons/issues/8010)) ([e56aea5](https://github.com/Opentrons/opentrons/commit/e56aea54a0b44b99c4914bf05fc39bc2e08cef0f))
* **labware-library:** add tip rack test .py protocol ([#8020](https://github.com/Opentrons/opentrons/issues/8020)) ([174dad9](https://github.com/Opentrons/opentrons/commit/174dad99a92c21218416c1381feb40f0abc856a1)), closes [#7884](https://github.com/Opentrons/opentrons/issues/7884)
* **labware-library:** change default display name for tube racks ([#8130](https://github.com/Opentrons/opentrons/issues/8130)) ([1a485aa](https://github.com/Opentrons/opentrons/commit/1a485aa6ff666407cc3caac9be3b2b270b3bd8e9)), closes [#7987](https://github.com/Opentrons/opentrons/issues/7987)
* **protocol-engine:** Add a command queue worker class ([#7817](https://github.com/Opentrons/opentrons/issues/7817)) ([8bdd223](https://github.com/Opentrons/opentrons/commit/8bdd2236cb09fc497f1884441605117521378478))
* **protocol-engine:** Implement `CommandState.get_next_request()` ([#7936](https://github.com/Opentrons/opentrons/issues/7936)) ([61136a1](https://github.com/Opentrons/opentrons/commit/61136a128795bd6e3ee896e79e06455f782cbf01))
* **protocol-engine:** Support loading pipettes and labware from JSON protocols ([#7950](https://github.com/Opentrons/opentrons/issues/7950)) ([e43c80f](https://github.com/Opentrons/opentrons/commit/e43c80f8f00a0146558345483993bc0c66fdce99))





# [4.4.0](https://github.com/Opentrons/opentrons/compare/v4.3.1...v4.4.0) (2021-06-16)


### Bug Fixes

* **api:** add pause manager to separate pause and delay ([#7773](https://github.com/Opentrons/opentrons/issues/7773)) ([af1a29a](https://github.com/Opentrons/opentrons/commit/af1a29a))
* **api:** Correct some type annotations in `ProtocolContext` ([#7701](https://github.com/Opentrons/opentrons/issues/7701)) ([6f01726](https://github.com/Opentrons/opentrons/commit/6f01726))
* **api:** do not cache removed modules in thread_manager ([#7690](https://github.com/Opentrons/opentrons/issues/7690)) ([ca47a9c](https://github.com/Opentrons/opentrons/commit/ca47a9c)), closes [#5359](https://github.com/Opentrons/opentrons/issues/5359)
* **api:** eliminate implicit creations of ThreadManager objects to avoid thread leaks leading to unit tests hanging due to too many open file descriptors. ([#7641](https://github.com/Opentrons/opentrons/issues/7641)) ([d7e94ed](https://github.com/Opentrons/opentrons/commit/d7e94ed))
* **api:** simulation allows aspirating and dispensing on a tip rack ([#7788](https://github.com/Opentrons/opentrons/issues/7788)) ([1d624d8](https://github.com/Opentrons/opentrons/commit/1d624d8))
* **robot-server:** exempt /logs and RPC from version header requirement ([#7927](https://github.com/Opentrons/opentrons/issues/7927)) ([58eb503](https://github.com/Opentrons/opentrons/commit/58eb503))
* **shared-data:** fix p1000_single_gen2 literal in type union ([#7675](https://github.com/Opentrons/opentrons/issues/7675)) ([72735c2](https://github.com/Opentrons/opentrons/commit/72735c2))


### Features

* **api:** allow labware calibration on non liquid handling events ([#7812](https://github.com/Opentrons/opentrons/issues/7812)) ([26567f4](https://github.com/Opentrons/opentrons/commit/26567f4))
* **api:** CommandTranslator._aspirate implemented. ([#7722](https://github.com/Opentrons/opentrons/issues/7722)) ([24d6f15](https://github.com/Opentrons/opentrons/commit/24d6f15)), closes [#7434](https://github.com/Opentrons/opentrons/issues/7434)
* **api:** CommandTranslator._dispense implemented. ([#7734](https://github.com/Opentrons/opentrons/issues/7734)) ([5c1b694](https://github.com/Opentrons/opentrons/commit/5c1b694)), closes [#7435](https://github.com/Opentrons/opentrons/issues/7435)
* **api:** CommandTranslator._drop_tip implemented. ([#7743](https://github.com/Opentrons/opentrons/issues/7743)) ([08e9a1e](https://github.com/Opentrons/opentrons/commit/08e9a1e)), closes [#7433](https://github.com/Opentrons/opentrons/issues/7433)
* **api:** expand emulators and integration tests. ([#7739](https://github.com/Opentrons/opentrons/issues/7739)) ([448325a](https://github.com/Opentrons/opentrons/commit/448325a))
* **api:** implement CommandTranslator._pick_up ([#7744](https://github.com/Opentrons/opentrons/issues/7744)) ([d3552eb](https://github.com/Opentrons/opentrons/commit/d3552eb))
* **api:** implement JsonFileRunner ([#7797](https://github.com/Opentrons/opentrons/issues/7797)) ([6209f71](https://github.com/Opentrons/opentrons/commit/6209f71))
* **api:** JSON protocol labware loading support in Protocol Engine ([#7762](https://github.com/Opentrons/opentrons/issues/7762)) ([8bbb5ef](https://github.com/Opentrons/opentrons/commit/8bbb5ef)), closes [#7429](https://github.com/Opentrons/opentrons/issues/7429)
* **api:** JSON protocol pipette loading support in Protocol Engine  ([#7766](https://github.com/Opentrons/opentrons/issues/7766)) ([7aa9034](https://github.com/Opentrons/opentrons/commit/7aa9034)), closes [#7430](https://github.com/Opentrons/opentrons/issues/7430)
* **api,robot-server:** Add Dockerfile and docker-compose file ([#7836](https://github.com/Opentrons/opentrons/issues/7836)) ([f89a660](https://github.com/Opentrons/opentrons/commit/f89a660)), closes [#7674](https://github.com/Opentrons/opentrons/issues/7674)
* **api,robot-server:** hardware emulation integration ([#7821](https://github.com/Opentrons/opentrons/issues/7821)) ([e21b870](https://github.com/Opentrons/opentrons/commit/e21b870))
* **components, protocol-library:** pass thru semantic 'disabled' attr to InputField elem ([#7759](https://github.com/Opentrons/opentrons/issues/7759)) ([1ec53d1](https://github.com/Opentrons/opentrons/commit/1ec53d1))
* **emulator:** allow overriding pipettes used by smoothie emulator ([#7868](https://github.com/Opentrons/opentrons/issues/7868)) ([de05ed1](https://github.com/Opentrons/opentrons/commit/de05ed1))
* **labware-creator:** add "Tip Racks" to labwareType dropdown ([#7791](https://github.com/Opentrons/opentrons/issues/7791)) ([b53f6b5](https://github.com/Opentrons/opentrons/commit/b53f6b5)), closes [#7160](https://github.com/Opentrons/opentrons/issues/7160)
* **labware-creator:** Add custom tiprack not recommended section ([#7822](https://github.com/Opentrons/opentrons/issues/7822)) ([f7e58f5](https://github.com/Opentrons/opentrons/commit/f7e58f5)), closes [#7712](https://github.com/Opentrons/opentrons/issues/7712)
* **labware-creator:** add dynamic footprint copy for tip racks ([#7861](https://github.com/Opentrons/opentrons/issues/7861)) ([5bb265f](https://github.com/Opentrons/opentrons/commit/5bb265f)), closes [#7715](https://github.com/Opentrons/opentrons/issues/7715)
* **labware-creator:** Add hand placed tip fit section and alerts ([#7832](https://github.com/Opentrons/opentrons/issues/7832)) ([46431d5](https://github.com/Opentrons/opentrons/commit/46431d5)), closes [#7713](https://github.com/Opentrons/opentrons/issues/7713)
* **labware-creator:** Add new errors for too large/small footprint ([#7846](https://github.com/Opentrons/opentrons/issues/7846)) ([dd853de](https://github.com/Opentrons/opentrons/commit/dd853de)), closes [#7163](https://github.com/Opentrons/opentrons/issues/7163) [#7792](https://github.com/Opentrons/opentrons/issues/7792)
* **labware-creator:** autofill homogenousWells for tipRacks ([#7806](https://github.com/Opentrons/opentrons/issues/7806)) ([1594984](https://github.com/Opentrons/opentrons/commit/1594984)), closes [#7712](https://github.com/Opentrons/opentrons/issues/7712)
* **labware-creator:** new errors for wells outside of footprint ([#7784](https://github.com/Opentrons/opentrons/issues/7784)) ([9733697](https://github.com/Opentrons/opentrons/commit/9733697)), closes [#7165](https://github.com/Opentrons/opentrons/issues/7165)
* **labware-creator:** Update well shape and size section when tipRack is selected ([#7864](https://github.com/Opentrons/opentrons/issues/7864)) ([897d84b](https://github.com/Opentrons/opentrons/commit/897d84b)), closes [#7723](https://github.com/Opentrons/opentrons/issues/7723)
* **labware-library:** fix mixpanel id bug ([#7761](https://github.com/Opentrons/opentrons/issues/7761)) ([6a9d611](https://github.com/Opentrons/opentrons/commit/6a9d611)), closes [#7536](https://github.com/Opentrons/opentrons/issues/7536)
* **labware-library:** use correct type import ([#7718](https://github.com/Opentrons/opentrons/issues/7718)) ([dc84710](https://github.com/Opentrons/opentrons/commit/dc84710))
* **protocol-designer:** Add batch edit hint modal ([#7626](https://github.com/Opentrons/opentrons/issues/7626)) ([0ff9179](https://github.com/Opentrons/opentrons/commit/0ff9179)), closes [#7488](https://github.com/Opentrons/opentrons/issues/7488)
* **protocol-designer:** add DOM identifiers for e2e tests ([#7667](https://github.com/Opentrons/opentrons/issues/7667)) ([d4e43e1](https://github.com/Opentrons/opentrons/commit/d4e43e1)), closes [#7607](https://github.com/Opentrons/opentrons/issues/7607)
* **protocol-designer:** add form level volume error to mix form ([#7625](https://github.com/Opentrons/opentrons/issues/7625)) ([3393368](https://github.com/Opentrons/opentrons/commit/3393368))
* **protocol-designer:** Add tooltip for indeterminate checkboxes ([#7614](https://github.com/Opentrons/opentrons/issues/7614)) ([b1f43fb](https://github.com/Opentrons/opentrons/commit/b1f43fb)), closes [#7491](https://github.com/Opentrons/opentrons/issues/7491)
* **protocol-designer:** remove FF and bump version for batch edit mix ([#7679](https://github.com/Opentrons/opentrons/issues/7679)) ([1968164](https://github.com/Opentrons/opentrons/commit/1968164)), closes [#7560](https://github.com/Opentrons/opentrons/issues/7560)
* **protocol-designer:** show default tooltips when no indeterminate available ([#7714](https://github.com/Opentrons/opentrons/issues/7714)) ([c623f0c](https://github.com/Opentrons/opentrons/commit/c623f0c)), closes [#7711](https://github.com/Opentrons/opentrons/issues/7711)
* **protocol-engine:** add load_pipette method to engine-backed ProtocolContext ([#7676](https://github.com/Opentrons/opentrons/issues/7676)) ([7ca8f76](https://github.com/Opentrons/opentrons/commit/7ca8f76)), closes [#7437](https://github.com/Opentrons/opentrons/issues/7437)
* **protocol-engine:** InstrumentContext implements dispense ([#7640](https://github.com/Opentrons/opentrons/issues/7640)) ([a4a2d11](https://github.com/Opentrons/opentrons/commit/a4a2d11))
* **protocol-engine:** Support `InstrumentContext.aspirate()` ([#7630](https://github.com/Opentrons/opentrons/issues/7630)) ([6e259f2](https://github.com/Opentrons/opentrons/commit/6e259f2))
* **robot-server:** Clarify "local connection only" error message ([#7686](https://github.com/Opentrons/opentrons/issues/7686)) ([5d04dc4](https://github.com/Opentrons/opentrons/commit/5d04dc4))
* **robot-server:** http protocol upload supports custom labware. ([#7694](https://github.com/Opentrons/opentrons/issues/7694)) ([4ad824c](https://github.com/Opentrons/opentrons/commit/4ad824c)), closes [#7148](https://github.com/Opentrons/opentrons/issues/7148)





## [4.3.1](https://github.com/Opentrons/opentrons/compare/v4.3.0...v4.3.1) (2021-05-10)

### Bug Fixes

* **api:** do not cache tip lengths because it breaks calibration ([#7778](https://github.com/Opentrons/opentrons/issues/7778)) ([d43fdd7](https://github.com/Opentrons/opentrons/commit/d43fdd7))





# [4.3.0](https://github.com/Opentrons/opentrons/compare/v4.2.1...v4.3.0) (2021-05-06)

### Bug Fixes

* **app:** conditionally show module usb order instructions ([#7749](https://github.com/Opentrons/opentrons/issues/7749)) ([cc2e974](https://github.com/Opentrons/opentrons/commit/cc2e974))
* **app:** add USB hub port number ([#7738](https://github.com/Opentrons/opentrons/issues/7738)) ([2f317bc](https://github.com/Opentrons/opentrons/commit/2f317bc))
* **api:** ensure loaded modules is returned in order ([#7704](https://github.com/Opentrons/opentrons/issues/7704)) ([66a775c](https://github.com/Opentrons/opentrons/commit/66a775c))
* **app:** add USB order to protocol module list ([#7710](https://github.com/Opentrons/opentrons/issues/7710)) ([64e87a7](https://github.com/Opentrons/opentrons/commit/64e87a7))
* **app:** fix calibrate page redirect url ([#7691](https://github.com/Opentrons/opentrons/issues/7691)) ([450a0c2](https://github.com/Opentrons/opentrons/commit/450a0c2))
* **app:** add missing border to thermocycler live status card ([#7681](https://github.com/Opentrons/opentrons/issues/7681)) ([6fdfe25](https://github.com/Opentrons/opentrons/commit/6fdfe25))
* **app:** use correct module order to get usb port ([#7651](https://github.com/Opentrons/opentrons/issues/7651)) ([4c08cee](https://github.com/Opentrons/opentrons/commit/4c08cee))
* **api:** return a simulated module for magnetic modules if they are not compatible ([#7654](https://github.com/Opentrons/opentrons/issues/7654)) ([f6fcb77](https://github.com/Opentrons/opentrons/commit/f6fcb77))
* **shared-data:** fix data not being included in package build ([#7650](https://github.com/Opentrons/opentrons/issues/7650)) ([1708904](https://github.com/Opentrons/opentrons/commit/1708904))
* **api:**  can't find pipettes ([#7639](https://github.com/Opentrons/opentrons/issues/7639)) ([4e5176c](https://github.com/Opentrons/opentrons/commit/4e5176c))
* **api:** api location cache fix ([#7609](https://github.com/Opentrons/opentrons/issues/7609)) ([df68ea2](https://github.com/Opentrons/opentrons/commit/df68ea2)), closes [#7156](https://github.com/Opentrons/opentrons/issues/7156)
* **api:** check the symlink of the virtual port to map to the physical port ([#7524](https://github.com/Opentrons/opentrons/issues/7524)) ([32b9de5](https://github.com/Opentrons/opentrons/commit/32b9de5))
* **api:** do not search for a tip length calibration by slot name ([#7574](https://github.com/Opentrons/opentrons/issues/7574)) ([22b6ccd](https://github.com/Opentrons/opentrons/commit/22b6ccd))
* **api:** represent Location correctly in log ([#7565](https://github.com/Opentrons/opentrons/issues/7565)) ([be091a3](https://github.com/Opentrons/opentrons/commit/be091a3)), closes [#7564](https://github.com/Opentrons/opentrons/issues/7564)
* **api:** Sleeps do not happen in thermocycler and tempdeck when simulating.  ([8ef61c0](https://github.com/Opentrons/opentrons/commit/8ef61c0)), closes [#7506](https://github.com/Opentrons/opentrons/issues/7506)
* **api, shared-data:** Regular expression used to split well into row and column did not allow a 0 column. ([#7566](https://github.com/Opentrons/opentrons/issues/7566)) ([1f6b11b](https://github.com/Opentrons/opentrons/commit/1f6b11b)), closes [#7531](https://github.com/Opentrons/opentrons/issues/7531)
* **components:** bump the components library version manually ([#7606](https://github.com/Opentrons/opentrons/issues/7606)) ([247c5dc](https://github.com/Opentrons/opentrons/commit/247c5dc))
* **discovery-client:** allow discovery client to track network interfaces ([#7608](https://github.com/Opentrons/opentrons/issues/7608)) ([c526b19](https://github.com/Opentrons/opentrons/commit/c526b19))
* **protocol-designer:** add config to invariantContext ([#7598](https://github.com/Opentrons/opentrons/issues/7598)) ([2addf84](https://github.com/Opentrons/opentrons/commit/2addf84))
* **protocol-designer:** clear presaved form on multiselect ([#7494](https://github.com/Opentrons/opentrons/issues/7494)) ([cc5d8ca](https://github.com/Opentrons/opentrons/commit/cc5d8ca))
* **protocol-designer:** fix probs with typing zero in tip position ([#7495](https://github.com/Opentrons/opentrons/issues/7495)) ([8b0bf73](https://github.com/Opentrons/opentrons/commit/8b0bf73)), closes [#7485](https://github.com/Opentrons/opentrons/issues/7485)
* **protocol-designer:** Fix starting deck state button toolbar overlap ([#7613](https://github.com/Opentrons/opentrons/issues/7613)) ([3e868fb](https://github.com/Opentrons/opentrons/commit/3e868fb)), closes [#7611](https://github.com/Opentrons/opentrons/issues/7611)
* **protocol-designer:** fix tip position modal minus button ([#7592](https://github.com/Opentrons/opentrons/issues/7592)) ([bb93c7c](https://github.com/Opentrons/opentrons/commit/bb93c7c)), closes [#7508](https://github.com/Opentrons/opentrons/issues/7508)
* **protocol-designer:** fix tooltip for delay tip position field ([#7503](https://github.com/Opentrons/opentrons/issues/7503)) ([ec2d677](https://github.com/Opentrons/opentrons/commit/ec2d677))
* **protocol-designer:** mask batch edit form fields ([#7612](https://github.com/Opentrons/opentrons/issues/7612)) ([65c121f](https://github.com/Opentrons/opentrons/commit/65c121f))
* **protocol-designer:** remove air gap fields from batch edit form ([#7616](https://github.com/Opentrons/opentrons/issues/7616)) ([0c48e46](https://github.com/Opentrons/opentrons/commit/0c48e46))
* **protocol-designer:** remove single-edit dependencies for PathField ([#7526](https://github.com/Opentrons/opentrons/issues/7526)) ([15b4a34](https://github.com/Opentrons/opentrons/commit/15b4a34)), closes [#7301](https://github.com/Opentrons/opentrons/issues/7301) [#7295](https://github.com/Opentrons/opentrons/issues/7295)
* **protocol-designer:** Restore hidden tooltips on MultiSelectToolbar ([#7501](https://github.com/Opentrons/opentrons/issues/7501)) ([b6ddb8f](https://github.com/Opentrons/opentrons/commit/b6ddb8f))
* **protocol-designer:** track batch edit form change properties in mixpanel ([#7593](https://github.com/Opentrons/opentrons/issues/7593)) ([abf2e77](https://github.com/Opentrons/opentrons/commit/abf2e77))
* **protocol-designer:** Update cancel/save button tooltip placement ([#7535](https://github.com/Opentrons/opentrons/issues/7535)) ([53529f3](https://github.com/Opentrons/opentrons/commit/53529f3))
* **protocol-designer:** Update no shared settings text ([#7457](https://github.com/Opentrons/opentrons/issues/7457)) ([2aa3201](https://github.com/Opentrons/opentrons/commit/2aa3201))
* **protocol-designer:** Update tooltip placement to avoid deckmap conflict ([#7512](https://github.com/Opentrons/opentrons/issues/7512)) ([f900f55](https://github.com/Opentrons/opentrons/commit/f900f55))


### Features

* **api:** add module emulation ([#7353](https://github.com/Opentrons/opentrons/issues/7353)) ([78869dc](https://github.com/Opentrons/opentrons/commit/78869dc))
* **api:** Add physical USB Port information to the hardware controller ([#7359](https://github.com/Opentrons/opentrons/issues/7359)) ([7d9734b](https://github.com/Opentrons/opentrons/commit/7d9734b))
* **api:** allow ProtocolContext to load labware using the ProtocolEngine ([#7398](https://github.com/Opentrons/opentrons/issues/7398)) ([858135b](https://github.com/Opentrons/opentrons/commit/858135b)), closes [#7390](https://github.com/Opentrons/opentrons/issues/7390) [#7448](https://github.com/Opentrons/opentrons/issues/7448)
* **api:** api json command dispatcher and translator ([#7555](https://github.com/Opentrons/opentrons/issues/7555)) ([9c56ab5](https://github.com/Opentrons/opentrons/commit/9c56ab5)), closes [#7428](https://github.com/Opentrons/opentrons/issues/7428)
* **api:** fast simulation catches tip and volume errors ([#7631](https://github.com/Opentrons/opentrons/issues/7631)) ([b8e3d26](https://github.com/Opentrons/opentrons/commit/b8e3d26)), closes [#7627](https://github.com/Opentrons/opentrons/issues/7627)
* **api:** protocol engine InstrumentContext implementes pick_up_tip and drop_tip ([#7621](https://github.com/Opentrons/opentrons/issues/7621)) ([1d77016](https://github.com/Opentrons/opentrons/commit/1d77016)), closes [#7326](https://github.com/Opentrons/opentrons/issues/7326) [#7327](https://github.com/Opentrons/opentrons/issues/7327)
* **api:** protocol engine labware interface implementationn ([#7453](https://github.com/Opentrons/opentrons/issues/7453)) ([1ad02d8](https://github.com/Opentrons/opentrons/commit/1ad02d8)), closes [#7332](https://github.com/Opentrons/opentrons/issues/7332)
* **api:** sort modules in protocol context by USB port ([#7532](https://github.com/Opentrons/opentrons/issues/7532)) ([a752897](https://github.com/Opentrons/opentrons/commit/a752897))
* **app:** allow robot restarts to track boot ID and timeout ([#7589](https://github.com/Opentrons/opentrons/issues/7589)) ([3b33102](https://github.com/Opentrons/opentrons/commit/3b33102)), closes [#6585](https://github.com/Opentrons/opentrons/issues/6585)
* **components:** allow Tooltip to take style props ([#7462](https://github.com/Opentrons/opentrons/issues/7462)) ([b692444](https://github.com/Opentrons/opentrons/commit/b692444)), closes [#7461](https://github.com/Opentrons/opentrons/issues/7461)
* **components, protocol-designer:** provide more e2e selectors ([#7441](https://github.com/Opentrons/opentrons/issues/7441)) ([a07ac19](https://github.com/Opentrons/opentrons/commit/a07ac19)), closes [#7384](https://github.com/Opentrons/opentrons/issues/7384)
* **protocol-designer:** Add batch edit announcement modal ([#7465](https://github.com/Opentrons/opentrons/issues/7465)) ([cd82e1c](https://github.com/Opentrons/opentrons/commit/cd82e1c)), closes [#7318](https://github.com/Opentrons/opentrons/issues/7318)
* **protocol-designer:** add batch edit mix disabled fields ([#7575](https://github.com/Opentrons/opentrons/issues/7575)) ([77af1d5](https://github.com/Opentrons/opentrons/commit/77af1d5)), closes [#7558](https://github.com/Opentrons/opentrons/issues/7558)
* **protocol-designer:** add Batch Edit Mix form  ([#7597](https://github.com/Opentrons/opentrons/issues/7597)) ([bcddf1f](https://github.com/Opentrons/opentrons/commit/bcddf1f)), closes [#7557](https://github.com/Opentrons/opentrons/issues/7557)
* **protocol-designer:** add development mixpanel reporting ([#7490](https://github.com/Opentrons/opentrons/issues/7490)) ([3295581](https://github.com/Opentrons/opentrons/commit/3295581)), closes [#7472](https://github.com/Opentrons/opentrons/issues/7472)
* **protocol-designer:** Add expand/collapse animation to MutliSelectToolbar ([#7492](https://github.com/Opentrons/opentrons/issues/7492)) ([7588f2c](https://github.com/Opentrons/opentrons/commit/7588f2c))
* **protocol-designer:** add hover background to well order ([#7460](https://github.com/Opentrons/opentrons/issues/7460)) ([db2a5c1](https://github.com/Opentrons/opentrons/commit/db2a5c1)), closes [#7456](https://github.com/Opentrons/opentrons/issues/7456)
* **protocol-designer:** add mix batch edit FF ([#7568](https://github.com/Opentrons/opentrons/issues/7568)) ([6e1d7bb](https://github.com/Opentrons/opentrons/commit/6e1d7bb)), closes [#7559](https://github.com/Opentrons/opentrons/issues/7559)
* **protocol-designer:** add tooltips for disabled fields ([#7447](https://github.com/Opentrons/opentrons/issues/7447)) ([c730a7e](https://github.com/Opentrons/opentrons/commit/c730a7e)), closes [#7397](https://github.com/Opentrons/opentrons/issues/7397)
* **protocol-designer:** add tooltips when tip position disabled in batch edit mode ([#7451](https://github.com/Opentrons/opentrons/issues/7451)) ([f4b6efe](https://github.com/Opentrons/opentrons/commit/f4b6efe)), closes [#7450](https://github.com/Opentrons/opentrons/issues/7450)
* **protocol-designer:** allow FFs to be set via query params ([#7545](https://github.com/Opentrons/opentrons/issues/7545)) ([c50bd75](https://github.com/Opentrons/opentrons/commit/c50bd75))
* **protocol-designer:** allow user to choose default vs custom tip position ([#7471](https://github.com/Opentrons/opentrons/issues/7471)) ([ed31d94](https://github.com/Opentrons/opentrons/commit/ed31d94)), closes [#7143](https://github.com/Opentrons/opentrons/issues/7143)
* **protocol-designer:** bump to 5.2.4; remove batch edit FF ([#7446](https://github.com/Opentrons/opentrons/issues/7446)) ([b415508](https://github.com/Opentrons/opentrons/commit/b415508)), closes [#7340](https://github.com/Opentrons/opentrons/issues/7340)
* **protocol-designer:** cancel well order changes when clicking cancel button ([#7473](https://github.com/Opentrons/opentrons/issues/7473)) ([cd83650](https://github.com/Opentrons/opentrons/commit/cd83650)), closes [#7463](https://github.com/Opentrons/opentrons/issues/7463)
* **protocol-designer:** change copy of batch edit cancel button ([#7484](https://github.com/Opentrons/opentrons/issues/7484)) ([7b45f6a](https://github.com/Opentrons/opentrons/commit/7b45f6a)), closes [#7486](https://github.com/Opentrons/opentrons/issues/7486)
* **protocol-designer:** change no shared settings copy text ([#7502](https://github.com/Opentrons/opentrons/issues/7502)) ([a0d4880](https://github.com/Opentrons/opentrons/commit/a0d4880))
* **protocol-designer:** disable batch edit touch tip field when labware different ([#7419](https://github.com/Opentrons/opentrons/issues/7419)) ([7f6ae5a](https://github.com/Opentrons/opentrons/commit/7f6ae5a)), closes [#7418](https://github.com/Opentrons/opentrons/issues/7418)
* **protocol-designer:** disable terminal item click in batch edit mode ([#7496](https://github.com/Opentrons/opentrons/issues/7496)) ([88fdbe2](https://github.com/Opentrons/opentrons/commit/88fdbe2)), closes [#7493](https://github.com/Opentrons/opentrons/issues/7493)
* **protocol-designer:** distinguish mix liquid and mix batch edit events in mixpanel ([#7602](https://github.com/Opentrons/opentrons/issues/7602)) ([eda6583](https://github.com/Opentrons/opentrons/commit/eda6583)), closes [#7562](https://github.com/Opentrons/opentrons/issues/7562)
* **protocol-designer:** fix batch edit step count bug ([#7511](https://github.com/Opentrons/opentrons/issues/7511)) ([ec40357](https://github.com/Opentrons/opentrons/commit/ec40357)), closes [#7509](https://github.com/Opentrons/opentrons/issues/7509)
* **protocol-designer:** Make discard changes button secondary ([#7504](https://github.com/Opentrons/opentrons/issues/7504)) ([f385200](https://github.com/Opentrons/opentrons/commit/f385200))
* **protocol-designer:** show deck state in batch edit hover and show "no shared settings" ([#7458](https://github.com/Opentrons/opentrons/issues/7458)) ([5282c6f](https://github.com/Opentrons/opentrons/commit/5282c6f)), closes [#7455](https://github.com/Opentrons/opentrons/issues/7455)
* **protocol-designer:** update Flow Rate field+modal ([#7476](https://github.com/Opentrons/opentrons/issues/7476)) ([fe3b29e](https://github.com/Opentrons/opentrons/commit/fe3b29e)), closes [#7467](https://github.com/Opentrons/opentrons/issues/7467)
* **protocol-engine:** Start a Protocol-Engine–backed implementation of InstrumentContext ([#7474](https://github.com/Opentrons/opentrons/issues/7474)) ([0be7126](https://github.com/Opentrons/opentrons/commit/0be7126)), closes [#7324](https://github.com/Opentrons/opentrons/issues/7324)
* **robot-server:** Add physical module usb port information to the http server ([#7362](https://github.com/Opentrons/opentrons/issues/7362)) ([07b0f4a](https://github.com/Opentrons/opentrons/commit/07b0f4a))


### Reverts

* **robot-server:** Save the z offset for pipette calibration  ([0b102da](https://github.com/Opentrons/opentrons/commit/0b102da))





## [4.2.1](https://github.com/opentrons/opentrons/compare/v4.2.0...v4.2.1) (2021-04-06)

### Bug Fixes

* **api:** do not search for a tip length calibration by slot name ([#7574](https://github.com/opentrons/opentrons/issues/7574)) ([313f4ef](https://github.com/opentrons/opentrons/commit/313f4ef))


### Reverts

* **robot-server:** Save the z offset for pipette calibration  ([b76230a](https://github.com/opentrons/opentrons/commit/b76230a))



# [4.2.0](https://github.com/Opentrons/opentrons/compare/v4.1.1...v4.2.0) (2021-03-18)

### Bug Fixes

* **api:** Correctly restore serial timeouts in the face of exceptions ([#7344](https://github.com/Opentrons/opentrons/issues/7344)) ([9aeda16](https://github.com/Opentrons/opentrons/commit/9aeda16))
* **api:** fix mount critical point ([#7314](https://github.com/Opentrons/opentrons/issues/7314)) ([bc8196e](https://github.com/Opentrons/opentrons/commit/bc8196e)), closes [#7092](https://github.com/Opentrons/opentrons/issues/7092)
* **api:** fix race condition causing pause/running state mismatch. ([#7265](https://github.com/Opentrons/opentrons/issues/7265)) ([cf62256](https://github.com/Opentrons/opentrons/commit/cf62256)), closes [#7216](https://github.com/Opentrons/opentrons/issues/7216)
* **api:** fix return code of set_syslog_level ([#7351](https://github.com/Opentrons/opentrons/issues/7351)) ([7ec7a6b](https://github.com/Opentrons/opentrons/commit/7ec7a6b))
* **api:** labware calibration can be completed when using fast simulation. ([#7371](https://github.com/Opentrons/opentrons/issues/7371)) ([d4f436f](https://github.com/Opentrons/opentrons/commit/d4f436f)), closes [#7365](https://github.com/Opentrons/opentrons/issues/7365)
* **api, robot-server:** fix a comical cascade of pipette config bugs ([#7316](https://github.com/Opentrons/opentrons/issues/7316)) ([98d0ddf](https://github.com/Opentrons/opentrons/commit/98d0ddf)), closes [#7305](https://github.com/Opentrons/opentrons/issues/7305)
* **app:** do not resume when clicking "back" from confirm cancel modal ([#7342](https://github.com/Opentrons/opentrons/issues/7342)) ([d55cdab](https://github.com/Opentrons/opentrons/commit/d55cdab)), closes [#5924](https://github.com/Opentrons/opentrons/issues/5924) [#5923](https://github.com/Opentrons/opentrons/issues/5923)
* **app:** ensure cal block prompt appears in pre protocol tlc ([#7278](https://github.com/Opentrons/opentrons/issues/7278)) ([2b55bde](https://github.com/Opentrons/opentrons/commit/2b55bde))
* **components:** forward "id" prop in Button ([#7421](https://github.com/Opentrons/opentrons/issues/7421)) ([6f432d1](https://github.com/Opentrons/opentrons/commit/6f432d1)), closes [#7384](https://github.com/Opentrons/opentrons/issues/7384) [#7382](https://github.com/Opentrons/opentrons/issues/7382)
* **protocol-designer:** avoid StepList exception on keydown ([#7442](https://github.com/Opentrons/opentrons/issues/7442)) ([b5bf1c7](https://github.com/Opentrons/opentrons/commit/b5bf1c7))
* **protocol-designer:** fix DropdownFormField ([#7378](https://github.com/Opentrons/opentrons/issues/7378)) ([8f4e9a1](https://github.com/Opentrons/opentrons/commit/8f4e9a1)), closes [#7376](https://github.com/Opentrons/opentrons/issues/7376)
* **protocol-designer:** fix syntax error from automerge ([#7357](https://github.com/Opentrons/opentrons/issues/7357)) ([c6732e5](https://github.com/Opentrons/opentrons/commit/c6732e5))
* **robot-server:** Do not save the z offset for pipette calibration ([#7417](https://github.com/Opentrons/opentrons/issues/7417)) ([3873f17](https://github.com/Opentrons/opentrons/commit/3873f17))
* For requests to upload an empty SSH key, respond with a helpful error message ([#7244](https://github.com/Opentrons/opentrons/issues/7244)) ([2dad642](https://github.com/Opentrons/opentrons/commit/2dad642)), closes [#7173](https://github.com/Opentrons/opentrons/issues/7173)


### Features

* **api:** add dispense command to the Protocol Engine ([#7221](https://github.com/Opentrons/opentrons/issues/7221)) ([31b1e67](https://github.com/Opentrons/opentrons/commit/31b1e67)), closes [#6599](https://github.com/Opentrons/opentrons/issues/6599)
* **api:** add enableProtocolEngine feature flag to opentrons.config ([#7389](https://github.com/Opentrons/opentrons/issues/7389)) ([faf871e](https://github.com/Opentrons/opentrons/commit/faf871e)), closes [#7333](https://github.com/Opentrons/opentrons/issues/7333)
* **api:** create ProtocolEngineImplementation class ([#7377](https://github.com/Opentrons/opentrons/issues/7377)) ([e78ae41](https://github.com/Opentrons/opentrons/commit/e78ae41)), closes [#7323](https://github.com/Opentrons/opentrons/issues/7323)
* **api:** fast protocol upload feature flag ([#7321](https://github.com/Opentrons/opentrons/issues/7321)) ([6aa9249](https://github.com/Opentrons/opentrons/commit/6aa9249)), closes [#7288](https://github.com/Opentrons/opentrons/issues/7288)
* **api:** SimInstrumentContext.move_to calls plan_moves. ([#7120](https://github.com/Opentrons/opentrons/issues/7120)) ([8990100](https://github.com/Opentrons/opentrons/commit/8990100))
* **api:** upload using fast sim if feature flag enables feature ([#7322](https://github.com/Opentrons/opentrons/issues/7322)) ([f7e8283](https://github.com/Opentrons/opentrons/commit/f7e8283)), closes [#7286](https://github.com/Opentrons/opentrons/issues/7286)
* **app:** add modules as a side panel group to the calibrate page ([#7312](https://github.com/Opentrons/opentrons/issues/7312)) ([8d1f3ab](https://github.com/Opentrons/opentrons/commit/8d1f3ab))
* **components:** add id prop to NavTab ([#7382](https://github.com/Opentrons/opentrons/issues/7382)) ([5da3238](https://github.com/Opentrons/opentrons/commit/5da3238)), closes [#7384](https://github.com/Opentrons/opentrons/issues/7384)
* **components:** Add isIndeterminate options prop to InputField ([#7280](https://github.com/Opentrons/opentrons/issues/7280)) ([4304677](https://github.com/Opentrons/opentrons/commit/4304677)), closes [#7255](https://github.com/Opentrons/opentrons/issues/7255)
* **components:** Add isIndeterminate prop to DropdownField ([#7282](https://github.com/Opentrons/opentrons/issues/7282)) ([284fd79](https://github.com/Opentrons/opentrons/commit/284fd79)), closes [#7256](https://github.com/Opentrons/opentrons/issues/7256)
* **components:** Add optional isIndeterminate prop to CheckBoxField ([#7259](https://github.com/Opentrons/opentrons/issues/7259)) ([b06974c](https://github.com/Opentrons/opentrons/commit/b06974c)), closes [#7257](https://github.com/Opentrons/opentrons/issues/7257) [#7154](https://github.com/Opentrons/opentrons/issues/7154)
* **protocol-designer:**  disable context menu in batch edit mode ([#7399](https://github.com/Opentrons/opentrons/issues/7399)) ([3bc2f17](https://github.com/Opentrons/opentrons/commit/3bc2f17))
* **protocol-designer:** add functionality to multi select toolbar ([#7264](https://github.com/Opentrons/opentrons/issues/7264)) ([926fdbf](https://github.com/Opentrons/opentrons/commit/926fdbf)), closes [#7105](https://github.com/Opentrons/opentrons/issues/7105)
* **protocol-designer:** add high priority analytics events for batch edit form interactions ([#7409](https://github.com/Opentrons/opentrons/issues/7409)) ([307e072](https://github.com/Opentrons/opentrons/commit/307e072))
* **protocol-designer:** Add layout styling to no batch shared settings message ([#7367](https://github.com/Opentrons/opentrons/issues/7367)) ([1b48a47](https://github.com/Opentrons/opentrons/commit/1b48a47)), closes [#7129](https://github.com/Opentrons/opentrons/issues/7129)
* **protocol-designer:** add modal fields ([#7440](https://github.com/Opentrons/opentrons/issues/7440)) ([466bd00](https://github.com/Opentrons/opentrons/commit/466bd00)), closes [#7239](https://github.com/Opentrons/opentrons/issues/7239)
* **protocol-designer:** Add multiselect mode UI ([#7211](https://github.com/Opentrons/opentrons/issues/7211)) ([9387073](https://github.com/Opentrons/opentrons/commit/9387073))
* **protocol-designer:** add non-modal batch edit fields to form ([#7420](https://github.com/Opentrons/opentrons/issues/7420)) ([93d7485](https://github.com/Opentrons/opentrons/commit/93d7485)), closes [#7128](https://github.com/Opentrons/opentrons/issues/7128)
* **protocol-designer:** add redux infrastructure for batch edit form ([#7346](https://github.com/Opentrons/opentrons/issues/7346)) ([5de1696](https://github.com/Opentrons/opentrons/commit/5de1696))
* **protocol-designer:** add selector for gathering multi select field values ([#7215](https://github.com/Opentrons/opentrons/issues/7215)) ([31deede](https://github.com/Opentrons/opentrons/commit/31deede)), closes [#7187](https://github.com/Opentrons/opentrons/issues/7187)
* **protocol-designer:** add selector to get batch edit disabled fields ([#7223](https://github.com/Opentrons/opentrons/issues/7223)) ([517ad76](https://github.com/Opentrons/opentrons/commit/517ad76))
* **protocol-designer:** Add test coverage to StepCreationButton ([#7400](https://github.com/Opentrons/opentrons/issues/7400)) ([218898f](https://github.com/Opentrons/opentrons/commit/218898f)), closes [#7355](https://github.com/Opentrons/opentrons/issues/7355)
* **protocol-designer:** add user prompts when exiting batch edit form ([#7387](https://github.com/Opentrons/opentrons/issues/7387)) ([0a1392b](https://github.com/Opentrons/opentrons/commit/0a1392b)), closes [#7138](https://github.com/Opentrons/opentrons/issues/7138)
* **protocol-designer:** clear unsaved form state in batch edit mode ([#7361](https://github.com/Opentrons/opentrons/issues/7361)) ([07475c6](https://github.com/Opentrons/opentrons/commit/07475c6)), closes [#7360](https://github.com/Opentrons/opentrons/issues/7360)
* **protocol-designer:** create batch edit form skeleton ([#7350](https://github.com/Opentrons/opentrons/issues/7350)) ([ab4e7b2](https://github.com/Opentrons/opentrons/commit/ab4e7b2))
* **protocol-designer:** disable step creation button when in batch edit ([#7308](https://github.com/Opentrons/opentrons/issues/7308)) ([84a50d3](https://github.com/Opentrons/opentrons/commit/84a50d3)), closes [#7294](https://github.com/Opentrons/opentrons/issues/7294)
* **protocol-designer:** hook up exit batch edit mode button ([#7299](https://github.com/Opentrons/opentrons/issues/7299)) ([013026c](https://github.com/Opentrons/opentrons/commit/013026c))
* **protocol-designer:** implement makeBatchEditFieldProps and save/cancel buttons ([#7391](https://github.com/Opentrons/opentrons/issues/7391)) ([31b9217](https://github.com/Opentrons/opentrons/commit/31b9217)), closes [#7222](https://github.com/Opentrons/opentrons/issues/7222)
* **protocol-designer:** implement save button disabling in batch edit form ([#7405](https://github.com/Opentrons/opentrons/issues/7405)) ([5b729da](https://github.com/Opentrons/opentrons/commit/5b729da)), closes [#7130](https://github.com/Opentrons/opentrons/issues/7130)
* **protocol-designer:** make CheckboxRowField handle isIndeterminate ([#7393](https://github.com/Opentrons/opentrons/issues/7393)) ([a84255b](https://github.com/Opentrons/opentrons/commit/a84255b)), closes [#7392](https://github.com/Opentrons/opentrons/issues/7392)
* **protocol-designer:** move batch edit form redux types from shared types into own files ([#7354](https://github.com/Opentrons/opentrons/issues/7354)) ([4f1601f](https://github.com/Opentrons/opentrons/commit/4f1601f))
* **protocol-designer:** Update Multiselect UI based off feedback ([#7293](https://github.com/Opentrons/opentrons/issues/7293)) ([1094d03](https://github.com/Opentrons/opentrons/commit/1094d03)), closes [#7270](https://github.com/Opentrons/opentrons/issues/7270)
* **robot-server:** extract author and protocol name from JSON protocol metadata. ([#7267](https://github.com/Opentrons/opentrons/issues/7267)) ([4c10907](https://github.com/Opentrons/opentrons/commit/4c10907))
* **robot-server:** protocol http api uses fast sim ([#7146](https://github.com/Opentrons/opentrons/issues/7146)) ([ce636c0](https://github.com/Opentrons/opentrons/commit/ce636c0)), closes [#6104](https://github.com/Opentrons/opentrons/issues/6104)
* **update-server:** Add bootId field to GET /server/update/health ([#7404](https://github.com/Opentrons/opentrons/issues/7404)) ([061a580](https://github.com/Opentrons/opentrons/commit/061a580))





## [4.1.1](https://github.com/opentrons/opentrons/compare/v4.1.0...v4.1.1) (2021-01-25)

### Bug Fixes

* **api:** bump pyserial dependency in setup.py ([#7250](https://github.com/Opentrons/opentrons/issues/7250)) ([052b783](https://github.com/Opentrons/opentrons/commit/052b783))





# [4.1.0](https://github.com/Opentrons/opentrons/compare/v4.0.0...v4.1.0) (2021-01-20)


## Bug Fixes

* **robot-server:** disable overlap for custom tips ([#7229](https://github.com/Opentrons/opentrons/issues/7229)) ([1e180c8](https://github.com/Opentrons/opentrons/commit/1e180c8))
* **robot-server:** save custom tiprack def on robot during tip length cal ([#7231](https://github.com/Opentrons/opentrons/issues/7231)) ([4fe2b37](https://github.com/Opentrons/opentrons/commit/4fe2b37))
* **api:** do not call a method dependent on the Python API Version directly ([#7220](https://github.com/Opentrons/opentrons/issues/7220)) ([2382ac6](https://github.com/Opentrons/opentrons/commit/2382ac6))
* **app:** restrict size of reset config modal ([#7212](https://github.com/Opentrons/opentrons/issues/7212)) ([01ca11e](https://github.com/Opentrons/opentrons/commit/01ca11e))
* **api:** bump y max bounds to match robot geometry ([#7140](https://github.com/Opentrons/opentrons/issues/7140)) ([85b3d6b](https://github.com/Opentrons/opentrons/commit/85b3d6b)), closes [#6886](https://github.com/Opentrons/opentrons/issues/6886)
* **api:** ensure exact delay floats are preserved in command log ([#7078](https://github.com/Opentrons/opentrons/issues/7078)) ([8ebb2dc](https://github.com/Opentrons/opentrons/commit/8ebb2dc)), closes [#7066](https://github.com/Opentrons/opentrons/issues/7066)
* **api:** fixed `axis` variable renaming in final `driver_3_0.home` block of code ([#7015](https://github.com/Opentrons/opentrons/issues/7015)) ([65abcb1](https://github.com/Opentrons/opentrons/commit/65abcb1))
* **api:** get correct instrument max height ([#7095](https://github.com/Opentrons/opentrons/issues/7095)) ([074f222](https://github.com/Opentrons/opentrons/commit/074f222))
* **api:** Labware.__hash__ fix ([#7023](https://github.com/Opentrons/opentrons/issues/7023)) ([cf4034c](https://github.com/Opentrons/opentrons/commit/cf4034c)), closes [#6992](https://github.com/Opentrons/opentrons/issues/6992)
* **api:** Specify correct channels for a paired pipette during pick up tip ([#6903](https://github.com/Opentrons/opentrons/issues/6903)) ([047a909](https://github.com/Opentrons/opentrons/commit/047a909))
* **app:** prompt whether to replace pipette after detach ([#7025](https://github.com/Opentrons/opentrons/issues/7025)) ([dfa92c3](https://github.com/Opentrons/opentrons/commit/dfa92c3))
* **build:** proper prod pypi deploys ([#7080](https://github.com/Opentrons/opentrons/issues/7080)) ([ace49be](https://github.com/Opentrons/opentrons/commit/ace49be)), closes [#7049](https://github.com/Opentrons/opentrons/issues/7049)
* **labware-library:** Render custom labware footprint diagram correctly ([#7111](https://github.com/Opentrons/opentrons/issues/7111)) ([33cec5b](https://github.com/Opentrons/opentrons/commit/33cec5b)), closes [#6983](https://github.com/Opentrons/opentrons/issues/6983)
* **notify-server:** fix errors in readme. ([#7176](https://github.com/Opentrons/opentrons/issues/7176)) ([986cb24](https://github.com/Opentrons/opentrons/commit/986cb24))
* **protocol-designer:** fix lastModified when exporting ([#7024](https://github.com/Opentrons/opentrons/issues/7024)) ([50096cd](https://github.com/Opentrons/opentrons/commit/50096cd)), closes [#6636](https://github.com/Opentrons/opentrons/issues/6636)
* **protocol-designer:** include custom tiprack defs... ([#7099](https://github.com/Opentrons/opentrons/issues/7099)) ([b98e621](https://github.com/Opentrons/opentrons/commit/b98e621)), closes [#6875](https://github.com/Opentrons/opentrons/issues/6875)
* **protocol-designer:** skip 10000s of redundant state updates ([#7053](https://github.com/Opentrons/opentrons/issues/7053)) ([f2d5cb2](https://github.com/Opentrons/opentrons/commit/f2d5cb2))
* **robot-server:** do not update state machine for tiprack select ([#7190](https://github.com/Opentrons/opentrons/issues/7190)) ([f2fc9f5](https://github.com/Opentrons/opentrons/commit/f2fc9f5))
* **robot-server:** health endpoint tavern test didn't actually perform validation of response. ([#7186](https://github.com/Opentrons/opentrons/issues/7186)) ([07ea7ff](https://github.com/Opentrons/opentrons/commit/07ea7ff))
* **robot-server:** ProtocolManager expects a ThreadManager and not a SynchronousAdapter. ([#7175](https://github.com/Opentrons/opentrons/issues/7175)) ([c0c9225](https://github.com/Opentrons/opentrons/commit/c0c9225))


## Features

* **api:** add aspirate handling to protocol engine ([#7191](https://github.com/Opentrons/opentrons/issues/7191)) ([18bfdea](https://github.com/Opentrons/opentrons/commit/18bfdea))
* **api:** add deck and deck fixture loading to ProtocolEngine factory ([#7031](https://github.com/Opentrons/opentrons/issues/7031)) ([509b7b7](https://github.com/Opentrons/opentrons/commit/509b7b7))
* **api:** add drop tip command to engine ([#7034](https://github.com/Opentrons/opentrons/issues/7034)) ([2922158](https://github.com/Opentrons/opentrons/commit/2922158)), closes [#6596](https://github.com/Opentrons/opentrons/issues/6596)
* **api:** add move-to-well to protocol engine ([#6943](https://github.com/Opentrons/opentrons/issues/6943)) ([779acb4](https://github.com/Opentrons/opentrons/commit/779acb4))
* **api:** add pick up tip handling to protocol_engine ([#6985](https://github.com/Opentrons/opentrons/issues/6985)) ([3b511f4](https://github.com/Opentrons/opentrons/commit/3b511f4)), closes [#6595](https://github.com/Opentrons/opentrons/issues/6595)
* **api:** fast instrument simulation ([#7114](https://github.com/Opentrons/opentrons/issues/7114)) ([384ecad](https://github.com/Opentrons/opentrons/commit/384ecad))
* **app:** allow custom tiprack selection in deck cal & pipette offset cal ([#7155](https://github.com/Opentrons/opentrons/issues/7155)) ([c8fc9f2](https://github.com/Opentrons/opentrons/commit/c8fc9f2)), closes [#7087](https://github.com/Opentrons/opentrons/issues/7087)
* **app:** Allow Z jog in save-xy-point ([#7117](https://github.com/Opentrons/opentrons/issues/7117)) ([50865f0](https://github.com/Opentrons/opentrons/commit/50865f0)), closes [#7094](https://github.com/Opentrons/opentrons/issues/7094)
* **app:** track deck & pipette offset cal tiprack selection ([#7205](https://github.com/Opentrons/opentrons/issues/7205)) ([b2bfec5](https://github.com/Opentrons/opentrons/commit/b2bfec5)), closes [#7147](https://github.com/Opentrons/opentrons/issues/7147)
* **chore:** remove e2e tests from travis ([#7033](https://github.com/Opentrons/opentrons/issues/7033)) ([8a5c159](https://github.com/Opentrons/opentrons/commit/8a5c159)), closes [#7032](https://github.com/Opentrons/opentrons/issues/7032)
* **protocol designer:** bump pd version for hotfix release ([#6896](https://github.com/Opentrons/opentrons/issues/6896)) ([2ba7e1f](https://github.com/Opentrons/opentrons/commit/2ba7e1f))
* **protocol-designer:** add "batch edit" feature flag ([#7079](https://github.com/Opentrons/opentrons/issues/7079)) ([350be43](https://github.com/Opentrons/opentrons/commit/350be43)), closes [#7058](https://github.com/Opentrons/opentrons/issues/7058)
* **protocol-designer:** add labware to modules allowlists ([#6901](https://github.com/Opentrons/opentrons/issues/6901)) ([65792d9](https://github.com/Opentrons/opentrons/commit/65792d9)), closes [#6876](https://github.com/Opentrons/opentrons/issues/6876) [#6860](https://github.com/Opentrons/opentrons/issues/6860)
* **protocol-designer:** Add mount designation for matching pipettes ([#6959](https://github.com/Opentrons/opentrons/issues/6959)) ([ee8abac](https://github.com/Opentrons/opentrons/commit/ee8abac)), closes [#6783](https://github.com/Opentrons/opentrons/issues/6783)
* **protocol-designer:** add pipette min to warnings ([#6974](https://github.com/Opentrons/opentrons/issues/6974)) ([cdea661](https://github.com/Opentrons/opentrons/commit/cdea661)), closes [#6493](https://github.com/Opentrons/opentrons/issues/6493)
* **protocol-designer:** add redux infra for batch edit mode ([#7125](https://github.com/Opentrons/opentrons/issues/7125)) ([86eb355](https://github.com/Opentrons/opentrons/commit/86eb355)), closes [#7122](https://github.com/Opentrons/opentrons/issues/7122)
* **protocol-designer:** Add spacing to file details page ([#6969](https://github.com/Opentrons/opentrons/issues/6969)) ([b6e8104](https://github.com/Opentrons/opentrons/commit/b6e8104)), closes [#6885](https://github.com/Opentrons/opentrons/issues/6885)
* **protocol-designer:** clean up IngredientsList card ([#6949](https://github.com/Opentrons/opentrons/issues/6949)) ([44cc58f](https://github.com/Opentrons/opentrons/commit/44cc58f)), closes [#6834](https://github.com/Opentrons/opentrons/issues/6834)
* **protocol-designer:** enable multi step selection ([#7168](https://github.com/Opentrons/opentrons/issues/7168)) ([9d97186](https://github.com/Opentrons/opentrons/commit/9d97186))
* **protocol-designer:** implement step selection banner ([#7159](https://github.com/Opentrons/opentrons/issues/7159)) ([777bc88](https://github.com/Opentrons/opentrons/commit/777bc88)), closes [#7081](https://github.com/Opentrons/opentrons/issues/7081)
* **protocol-designer:** increment numbers of added tip racks ([#6998](https://github.com/Opentrons/opentrons/issues/6998)) ([af3487e](https://github.com/Opentrons/opentrons/commit/af3487e)), closes [#5632](https://github.com/Opentrons/opentrons/issues/5632)
* **protocol-designer:** remove dispense > air gap FF and bump PD version ([#6858](https://github.com/Opentrons/opentrons/issues/6858)) ([c48a600](https://github.com/Opentrons/opentrons/commit/c48a600)), closes [#6654](https://github.com/Opentrons/opentrons/issues/6654) [#6865](https://github.com/Opentrons/opentrons/issues/6865)
* **protocol-designer:** reorder labware dropdown options ([#6940](https://github.com/Opentrons/opentrons/issues/6940)) ([7214f22](https://github.com/Opentrons/opentrons/commit/7214f22)), closes [#1449](https://github.com/Opentrons/opentrons/issues/1449)
* **protocol-designer:** update no tip error copy ([#6789](https://github.com/Opentrons/opentrons/issues/6789)) ([268223c](https://github.com/Opentrons/opentrons/commit/268223c)), closes [#6712](https://github.com/Opentrons/opentrons/issues/6712)
* **robot-server:** add hardware events publisher ([#7042](https://github.com/Opentrons/opentrons/issues/7042)) ([9943acc](https://github.com/Opentrons/opentrons/commit/9943acc))
* **robot-server:** expose uvicorn logs ([#7118](https://github.com/Opentrons/opentrons/issues/7118)) ([571eb1e](https://github.com/Opentrons/opentrons/commit/571eb1e)), closes [#7097](https://github.com/Opentrons/opentrons/issues/7097)
* **robot-server:** notifications service websocket subscriber client ([#7107](https://github.com/Opentrons/opentrons/issues/7107)) ([3986b0a](https://github.com/Opentrons/opentrons/commit/3986b0a)), closes [#6911](https://github.com/Opentrons/opentrons/issues/6911) [#6909](https://github.com/Opentrons/opentrons/issues/6909)
* **shared-data:** add default tipracks to each pipette name spec ([#7108](https://github.com/Opentrons/opentrons/issues/7108)) ([757ca85](https://github.com/Opentrons/opentrons/commit/757ca85))


## Performance Improvements

* **api:** more (small) simulation improvements ([#7132](https://github.com/Opentrons/opentrons/issues/7132)) ([6ad1477](https://github.com/Opentrons/opentrons/commit/6ad1477))
* **api:** simulation optimizations ([#7124](https://github.com/Opentrons/opentrons/issues/7124)) ([d8ea3b2](https://github.com/Opentrons/opentrons/commit/d8ea3b2))





# [4.0.0](https://github.com/Opentrons/opentrons/compare/v3.21.2...v4.0.0) (2020-11-20)

### Bug Fixes

* **api:** Mark pipette and deck calibration as bad for slot one ([#7035](https://github.com/Opentrons/opentrons/issues/7035)) ([92f1cbf](https://github.com/Opentrons/opentrons/commit/92f1cbf))
* **app:** cal check: fix deck setup typo ([#7037](https://github.com/Opentrons/opentrons/issues/7037)) ([0c0013e](https://github.com/Opentrons/opentrons/commit/0c0013e))
* **api:** handle missing intermediate keys in poc index ([#7029](https://github.com/Opentrons/opentrons/issues/7029)) ([a123a5f](https://github.com/Opentrons/opentrons/commit/a123a5f))
* **api:** tolerate delete of nonexistent pip offset ([#7027](https://github.com/Opentrons/opentrons/issues/7027)) ([6fac6ce](https://github.com/Opentrons/opentrons/commit/6fac6ce))
* **app:** Filter pipette offset calibrations by mount as well ([#7017](https://github.com/Opentrons/opentrons/issues/7017)) ([8bf5a71](https://github.com/Opentrons/opentrons/commit/8bf5a71))
* **app:** fix pipette info page flag for configuring or changing pipette ([#7018](https://github.com/Opentrons/opentrons/issues/7018)) ([74d9cb4](https://github.com/Opentrons/opentrons/commit/74d9cb4))
* **robot-server:** deck cal: clear pipette offset cal when deck cal completes ([#7019](https://github.com/Opentrons/opentrons/issues/7019)) ([243c683](https://github.com/Opentrons/opentrons/commit/243c683))
* **robot-server:** remove pip offset after tlc in fused flow ([#7020](https://github.com/Opentrons/opentrons/issues/7020)) ([858219e](https://github.com/Opentrons/opentrons/commit/858219e))
* **app:** consistent date formatting for calibration last modified time ([#7003](https://github.com/Opentrons/opentrons/issues/7003)) ([3b3d75d](https://github.com/Opentrons/opentrons/commit/3b3d75d)), closes [#7002](https://github.com/Opentrons/opentrons/issues/7002)
* **app:** fix post attach pipette calibration double wizard ([#7008](https://github.com/Opentrons/opentrons/issues/7008)) ([f4ec258](https://github.com/Opentrons/opentrons/commit/f4ec258))
* **app:** fix required modules list on protocol info page ([#7012](https://github.com/Opentrons/opentrons/issues/7012)) ([47fdbb5](https://github.com/Opentrons/opentrons/commit/47fdbb5))
* **robot-server:** load tip length data correctly in pipette offset cal ([#7009](https://github.com/Opentrons/opentrons/issues/7009)) ([8c8ef89](https://github.com/Opentrons/opentrons/commit/8c8ef89))
* **app:** misc cal overhaul sizing, font weight, and spacing tweaks ([#6999](https://github.com/Opentrons/opentrons/issues/6999)) ([ac07045](https://github.com/Opentrons/opentrons/commit/ac07045))
* **app:** pipette calibration info sections show be same height ([#6996](https://github.com/Opentrons/opentrons/issues/6996)) ([bb9cfc4](https://github.com/Opentrons/opentrons/commit/bb9cfc4))
* **api:** session._dedupe needs to use equality checking ([#6988](https://github.com/Opentrons/opentrons/issues/6988)) ([26c666b](https://github.com/Opentrons/opentrons/commit/26c666b)), closes [#6692](https://github.com/Opentrons/opentrons/issues/6692)
* **robot-server:** reset cal when starting pip offset cal ([#6991](https://github.com/Opentrons/opentrons/issues/6991)) ([d471900](https://github.com/Opentrons/opentrons/commit/d471900))
* **shared-data:** fix P300 GEN2 tip overlap values ([#6987](https://github.com/Opentrons/opentrons/issues/6987)) ([bc38f36](https://github.com/Opentrons/opentrons/commit/bc38f36))
* **app:** Accidental parens in react usememo deps ([#6968](https://github.com/Opentrons/opentrons/issues/6968)) ([df0a15e](https://github.com/Opentrons/opentrons/commit/df0a15e))
* **app:** Correct text when saving z point for all sessions ([#6955](https://github.com/Opentrons/opentrons/issues/6955)) ([71d5ff9](https://github.com/Opentrons/opentrons/commit/71d5ff9))
* **app:** Ensure we are using the correct logic for screen transitions in cal check ([#6960](https://github.com/Opentrons/opentrons/issues/6960)) ([2fbc872](https://github.com/Opentrons/opentrons/commit/2fbc872))
* **app:** fix buildroot download modal title ([#6966](https://github.com/Opentrons/opentrons/issues/6966)) ([9ea7b45](https://github.com/Opentrons/opentrons/commit/9ea7b45)), closes [#5546](https://github.com/Opentrons/opentrons/issues/5546)
* **app:** Fix calibration warning text ([#6977](https://github.com/Opentrons/opentrons/issues/6977)) ([32c90c5](https://github.com/Opentrons/opentrons/commit/32c90c5))
* **app:** fix change pipette and add tests ([#6976](https://github.com/Opentrons/opentrons/issues/6976)) ([079b8c3](https://github.com/Opentrons/opentrons/commit/079b8c3))
* **app:** full-width jog controls ([#6970](https://github.com/Opentrons/opentrons/issues/6970)) ([e41ab7a](https://github.com/Opentrons/opentrons/commit/e41ab7a))
* **app:** prettyprint cal check results ([#6964](https://github.com/Opentrons/opentrons/issues/6964)) ([8ebb9f7](https://github.com/Opentrons/opentrons/commit/8ebb9f7))
* **robot-server:** cal check: fix comparingHeight y-value ([#6981](https://github.com/Opentrons/opentrons/issues/6981)) ([dd393e9](https://github.com/Opentrons/opentrons/commit/dd393e9))
* **robot-server:** Opt logs out of version requirements ([#6980](https://github.com/Opentrons/opentrons/issues/6980)) ([e73083d](https://github.com/Opentrons/opentrons/commit/e73083d))
* **app:** Fix a typo in introduction ([#6946](https://github.com/Opentrons/opentrons/issues/6946)) ([8cba814](https://github.com/Opentrons/opentrons/commit/8cba814))
* **app:** place top portal at higher z index than page level portal ([#6950](https://github.com/Opentrons/opentrons/issues/6950)) ([b08c4d3](https://github.com/Opentrons/opentrons/commit/b08c4d3))
* **app:** debounce jogs in calcheck ([#6933](https://github.com/Opentrons/opentrons/issues/6933)) ([f355397](https://github.com/Opentrons/opentrons/commit/f355397))
* **app:** Fix intro screen layout with p1k tiprack ([#6932](https://github.com/Opentrons/opentrons/issues/6932)) ([431eacc](https://github.com/Opentrons/opentrons/commit/431eacc))
* **app:** Handle cal data without status ([#6936](https://github.com/Opentrons/opentrons/issues/6936)) ([1cfc0a5](https://github.com/Opentrons/opentrons/commit/1cfc0a5))
* **app:** suppress title bar exit in calcheck results ([#6941](https://github.com/Opentrons/opentrons/issues/6941)) ([e52c8db](https://github.com/Opentrons/opentrons/commit/e52c8db))
* **robot-server:** calcheck: fix invalidation, pickup, retract ([#6934](https://github.com/Opentrons/opentrons/issues/6934)) ([c351ea7](https://github.com/Opentrons/opentrons/commit/c351ea7))
* **robot-server,api:** reset cal during dc process ([#6942](https://github.com/Opentrons/opentrons/issues/6942)) ([8d142d4](https://github.com/Opentrons/opentrons/commit/8d142d4))
* **app:** change pipette exit button text ([#6930](https://github.com/Opentrons/opentrons/issues/6930))
* **app:** Spinner for deck calibration button ([#6902](https://github.com/Opentrons/opentrons/issues/6902)) ([7df8b95](https://github.com/Opentrons/opentrons/commit/7df8b95))
* **robot-server:** prefer smaller pipette in deck cal ([#6900](https://github.com/Opentrons/opentrons/issues/6900)) ([9f2830a](https://github.com/Opentrons/opentrons/commit/9f2830a))
* **api:** recache position before plunger home ([#6881](https://github.com/Opentrons/opentrons/issues/6881)) ([603dfff](https://github.com/Opentrons/opentrons/commit/603dfff))
* **app:** cal wizards show if session exists, always ask for cal block if not saved ([#6870](https://github.com/Opentrons/opentrons/issues/6870)) ([e19b850](https://github.com/Opentrons/opentrons/commit/e19b850))
* **build:** Dont break make with weird deps in shared-data ([#6857](https://github.com/Opentrons/opentrons/issues/6857)) ([0681ae0](https://github.com/Opentrons/opentrons/commit/0681ae0))
* **app:** Center start over in measure nozzle ([c875f3d](https://github.com/Opentrons/opentrons/commit/c875f3d))
* **app:** put blocking user flows in new top level modal portal ([#6821](https://github.com/Opentrons/opentrons/issues/6821)) ([0e62ff4](https://github.com/Opentrons/opentrons/commit/0e62ff4))
* **robot-server:** cache instruments before each calibration flow ([#6822](https://github.com/Opentrons/opentrons/issues/6822)) ([0d61b0e](https://github.com/Opentrons/opentrons/commit/0d61b0e))
* **robot-server:** home plungers in cal flows ([#6823](https://github.com/Opentrons/opentrons/issues/6823)) ([c641d0f](https://github.com/Opentrons/opentrons/commit/c641d0f))
* **api,robot-server:** reload robot calibration on deck calibration exit ([#6815](https://github.com/Opentrons/opentrons/issues/6815)) ([254af66](https://github.com/Opentrons/opentrons/commit/254af66))
* **app:** Display if DC was migrated ([#6812](https://github.com/Opentrons/opentrons/issues/6812)) ([d37c0c0](https://github.com/Opentrons/opentrons/commit/d37c0c0))
* **robot-server:** Fix return tip moves in cal flows ([#6814](https://github.com/Opentrons/opentrons/issues/6814)) ([3c94eef](https://github.com/Opentrons/opentrons/commit/3c94eef))
* **robot-server:** Home pipettes after calibration flows ([#6813](https://github.com/Opentrons/opentrons/issues/6813)) ([1f378a2](https://github.com/Opentrons/opentrons/commit/1f378a2))
* **api:** Do not perform a transfer if a zero volume is passed in ([#6620](https://github.com/opentrons/opentrons/issues/6620)) ([05e66b4](https://github.com/opentrons/opentrons/commit/05e66b4))
* **api:** Increase the tolerance on this test for how long a function takes to execute ([#6621](https://github.com/opentrons/opentrons/issues/6621)) ([1b068c2](https://github.com/opentrons/opentrons/commit/1b068c2))
* **api,robot-server:** add pydantic to api, upgrade and add test dev deps ([#6673](https://github.com/opentrons/opentrons/issues/6673)) ([2e4ad6a](https://github.com/opentrons/opentrons/commit/2e4ad6a))
* **app:** debounce calibration jog requests while others are in flight ([#6794](https://github.com/opentrons/opentrons/issues/6794)) ([d5ae8cd](https://github.com/opentrons/opentrons/commit/d5ae8cd))
* **app:** fix fetch-on-session-end epics for POC, TLC ([#6757](https://github.com/opentrons/opentrons/issues/6757)) ([7124bd9](https://github.com/opentrons/opentrons/commit/7124bd9)), closes [#6747](https://github.com/opentrons/opentrons/issues/6747)
* **app:** Fix the fetch epics for real this time ([#6761](https://github.com/opentrons/opentrons/issues/6761)) ([0df6dc5](https://github.com/opentrons/opentrons/commit/0df6dc5))
* **app:** remove redundant tip rack display name from tooltip ([#6770](https://github.com/opentrons/opentrons/issues/6770)) ([a81228a](https://github.com/opentrons/opentrons/commit/a81228a))
* **app, robot-server:** add param to set has cal block command  ([#6792](https://github.com/opentrons/opentrons/issues/6792)) ([4b9e582](https://github.com/opentrons/opentrons/commit/4b9e582))
* **protocol-designer:** cast mix tip offset to number ([#6629](https://github.com/opentrons/opentrons/issues/6629)) ([7b4ee9b](https://github.com/opentrons/opentrons/commit/7b4ee9b)), closes [#6552](https://github.com/opentrons/opentrons/issues/6552)
* **protocol-designer:** fix 5.1.0 migration ([#6643](https://github.com/opentrons/opentrons/issues/6643)) ([cc7cd17](https://github.com/opentrons/opentrons/commit/cc7cd17))
* **api:** Increase the tolerance on this test for how long a function takes to execute ([#6621](https://github.com/Opentrons/opentrons/issues/6621)) ([1b068c2](https://github.com/Opentrons/opentrons/commit/1b068c2))
* **api,robot-server:** add pydantic to api, upgrade and add test dev deps ([#6673](https://github.com/Opentrons/opentrons/issues/6673)) ([2e4ad6a](https://github.com/Opentrons/opentrons/commit/2e4ad6a))
* **app:** fix fetch-on-session-end epics for POC, TLC ([#6757](https://github.com/Opentrons/opentrons/issues/6757)) ([7124bd9](https://github.com/Opentrons/opentrons/commit/7124bd9)), closes [#6747](https://github.com/Opentrons/opentrons/issues/6747)
* **app:** Fix the fetch epics for real this time ([#6761](https://github.com/Opentrons/opentrons/issues/6761)) ([0df6dc5](https://github.com/Opentrons/opentrons/commit/0df6dc5))
* **app:** remove redundant tip rack display name from tooltip ([#6770](https://github.com/Opentrons/opentrons/issues/6770)) ([a81228a](https://github.com/Opentrons/opentrons/commit/a81228a))
* **app, robot-server:** add param to set has cal block command  ([#6792](https://github.com/Opentrons/opentrons/issues/6792)) ([4b9e582](https://github.com/Opentrons/opentrons/commit/4b9e582))
* **protocol-designer:** cast mix tip offset to number ([#6629](https://github.com/Opentrons/opentrons/issues/6629)) ([7b4ee9b](https://github.com/Opentrons/opentrons/commit/7b4ee9b)), closes [#6552](https://github.com/Opentrons/opentrons/issues/6552)
* **protocol-designer:** fix 5.1.0 migration ([#6643](https://github.com/Opentrons/opentrons/issues/6643)) ([cc7cd17](https://github.com/Opentrons/opentrons/commit/cc7cd17))





### Performance Improvements

* **shared-data,api:** speed up pipette settings ([#6952](https://github.com/Opentrons/opentrons/issues/6952)) ([f8b6266](https://github.com/Opentrons/opentrons/commit/f8b6266))



### Features

* **api:** Mark calibrations as bad when determined they exceed threshold ([#6918](https://github.com/Opentrons/opentrons/issues/6918)) ([ac3a866](https://github.com/Opentrons/opentrons/commit/ac3a866))
* **app, robot-server:** Report both the minimum and maximum supported protocol api versions ([#6921](https://github.com/Opentrons/opentrons/issues/6921)) ([22fc36a](https://github.com/Opentrons/opentrons/commit/22fc36a))
* **api:** p1000_single_v2.2, p20_single_v2.2 ([#6922](https://github.com/Opentrons/opentrons/issues/6922)) ([14659b8](https://github.com/Opentrons/opentrons/commit/14659b8))

([7d4a6bd](https://github.com/Opentrons/opentrons/commit/7d4a6bd))
* **app,discovery-client:** send Opentrons-Version header with HTTP requests ([#6914](https://github.com/Opentrons/opentrons/issues/6914)) ([089dd36](https://github.com/Opentrons/opentrons/commit/089dd36)), closes [#6852](https://github.com/Opentrons/opentrons/issues/6852)
* **robot-server:** increment HTTP API version ([#6917](https://github.com/Opentrons/opentrons/issues/6917)) ([601c3fb](https://github.com/Opentrons/opentrons/commit/601c3fb)), closes [#6851](https://github.com/Opentrons/opentrons/issues/6851)
* **app:** Send intercom event on no-cal-block selected ([#6893](https://github.com/Opentrons/opentrons/issues/6893))
* **notify-server:** add models package and Event model ([#6785](https://github.com/Opentrons/opentrons/issues/6785)) ([aa26264](https://github.com/Opentrons/opentrons/commit/aa26264)), closes [#6705](https://github.com/Opentrons/opentrons/issues/6705)
* **notify-server:** create pub sub server ([#6777](https://github.com/Opentrons/opentrons/issues/6777)) ([04b1e7e](https://github.com/Opentrons/opentrons/commit/04b1e7e)), closes [#6703](https://github.com/Opentrons/opentrons/issues/6703)
* **notify-server:** Notify server publisher client ([#6817](https://github.com/Opentrons/opentrons/issues/6817)) ([12b1c09](https://github.com/Opentrons/opentrons/commit/12b1c09)), closes [#6706](https://github.com/Opentrons/opentrons/issues/6706)
* **notify-server:** Notify server subscriber client ([#6818](https://github.com/Opentrons/opentrons/issues/6818)) ([6611e07](https://github.com/Opentrons/opentrons/commit/6611e07)), closes [#6707](https://github.com/Opentrons/opentrons/issues/6707)
* **protocol-designer:** add dispense air gap to distribute command creator ([#6824](https://github.com/Opentrons/opentrons/issues/6824)) ([2aeccd4](https://github.com/Opentrons/opentrons/commit/2aeccd4)), closes [#6510](https://github.com/Opentrons/opentrons/issues/6510)
* **protocol-designer:** add validation to dispense > air gap volume ([#6771](https://github.com/Opentrons/opentrons/issues/6771)) ([2594aa8](https://github.com/Opentrons/opentrons/commit/2594aa8)), closes [#6500](https://github.com/Opentrons/opentrons/issues/6500) [#6513](https://github.com/Opentrons/opentrons/issues/6513) [#6652](https://github.com/Opentrons/opentrons/issues/6652)
* **protocol-designer:** implement consolidate dispense airgap commands ([#6845](https://github.com/Opentrons/opentrons/issues/6845)) ([0dd7157](https://github.com/Opentrons/opentrons/commit/0dd7157)), closes [#6512](https://github.com/Opentrons/opentrons/issues/6512)
* add basic application configuration using pydantic BaseSettings. ([#6768](https://github.com/Opentrons/opentrons/issues/6768)) ([13db187](https://github.com/Opentrons/opentrons/commit/13db187)), closes [#6704](https://github.com/Opentrons/opentrons/issues/6704)
* **api:** Prevent Python API v1 protocol upload in server version 4.0.0 ([#6841](https://github.com/Opentrons/opentrons/issues/6841)) ([054f037](https://github.com/Opentrons/opentrons/commit/054f037))
* **app,robot-server:** Retry cal actions ([#6830](https://github.com/Opentrons/opentrons/issues/6830)) ([86c729b](https://github.com/Opentrons/opentrons/commit/86c729b)), closes [#6729](https://github.com/Opentrons/opentrons/issues/6729)
* **api:** Add calibration status to all of the calibration data models ([#6648](https://github.com/opentrons/opentrons/issues/6648)) ([2753734](https://github.com/opentrons/opentrons/commit/2753734))
* **api:** add source blowout location option to transfer function ([#6670](https://github.com/opentrons/opentrons/issues/6670)) ([811a767](https://github.com/opentrons/opentrons/commit/811a767)), closes [#6576](https://github.com/opentrons/opentrons/issues/6576)
* **api:** pin JSON protocols to APIVersion 2.8 ([#6691](https://github.com/opentrons/opentrons/issues/6691)) ([0804474](https://github.com/opentrons/opentrons/commit/0804474)), closes [#6681](https://github.com/opentrons/opentrons/issues/6681)
* **api:** Use more human-friendly names in "API version too low" error messages ([#6662](https://github.com/opentrons/opentrons/issues/6662)) ([55daec2](https://github.com/opentrons/opentrons/commit/55daec2))
* **api,robot-server:** Overhaul robot calibration flows ([#6797](https://github.com/opentrons/opentrons/issues/6797)) ([f0f236f](https://github.com/opentrons/opentrons/commit/f0f236f)), closes [#6738](https://github.com/opentrons/opentrons/issues/6738) [#6739](https://github.com/opentrons/opentrons/issues/6739)
* **app:** Overhaul OT-2 calibration experience ([#6804](https://github.com/opentrons/opentrons/issues/6804)) ([91f9e98](https://github.com/opentrons/opentrons/commit/91f9e98)), closes [#6736](https://github.com/opentrons/opentrons/issues/6736) [#6737](https://github.com/opentrons/opentrons/issues/6737)
* **app:** update pipette attach flow to include calibration ([#6760](https://github.com/opentrons/opentrons/issues/6760)) ([c873113](https://github.com/opentrons/opentrons/commit/c873113)), closes [#2130](https://github.com/opentrons/opentrons/issues/2130)
* **labware-library:** Add labware creator visibility ([#6667](https://github.com/opentrons/opentrons/issues/6667)) ([eb906a3](https://github.com/opentrons/opentrons/commit/eb906a3)), closes [#6307](https://github.com/opentrons/opentrons/issues/6307)
* **protocol designer:** put mix delay behind FF ([#6619](https://github.com/opentrons/opentrons/issues/6619)) ([5c7bf7d](https://github.com/opentrons/opentrons/commit/5c7bf7d))
* **protocol-designer:** add air gap dispense FF ([#6647](https://github.com/opentrons/opentrons/issues/6647)) ([4c53b73](https://github.com/opentrons/opentrons/commit/4c53b73)), closes [#6522](https://github.com/opentrons/opentrons/issues/6522)
* **protocol-designer:** add air gap dispense for fields to move liquid form ([#6658](https://github.com/opentrons/opentrons/issues/6658)) ([a6c1930](https://github.com/opentrons/opentrons/commit/a6c1930)), closes [#6499](https://github.com/opentrons/opentrons/issues/6499)
* **protocol-designer:** add dispenseAirGapVolume arg ([#6656](https://github.com/opentrons/opentrons/issues/6656)) ([4703456](https://github.com/opentrons/opentrons/commit/4703456)), closes [#6653](https://github.com/opentrons/opentrons/issues/6653)
* **protocol-designer:** add mix delay commands ([#6631](https://github.com/opentrons/opentrons/issues/6631)) ([953d454](https://github.com/opentrons/opentrons/commit/953d454)), closes [#6498](https://github.com/opentrons/opentrons/issues/6498)
* **protocol-designer:** add mix delay default values ([#6607](https://github.com/opentrons/opentrons/issues/6607)) ([db2b331](https://github.com/opentrons/opentrons/commit/db2b331)), closes [#6579](https://github.com/opentrons/opentrons/issues/6579)
* **protocol-designer:** bump pd to 5.1.0; add migration ([#6583](https://github.com/opentrons/opentrons/issues/6583)) ([d6ba128](https://github.com/opentrons/opentrons/commit/d6ba128)), closes [#6573](https://github.com/opentrons/opentrons/issues/6573) [#6634](https://github.com/opentrons/opentrons/issues/6634)
* **protocol-designer:** implement dispense > air gap for Transfer command creator ([#6745](https://github.com/opentrons/opentrons/issues/6745)) ([e684f7d](https://github.com/opentrons/opentrons/commit/e684f7d)), closes [#6508](https://github.com/opentrons/opentrons/issues/6508)
* **protocol-designer:** update air gap dispense tooltip ([#6753](https://github.com/opentrons/opentrons/issues/6753)) ([b6ace2d](https://github.com/opentrons/opentrons/commit/b6ace2d)), closes [#6714](https://github.com/opentrons/opentrons/issues/6714)
* **robot-server:** create models for basic pipetting session commands ([#6560](https://github.com/opentrons/opentrons/issues/6560)) ([b31377b](https://github.com/opentrons/opentrons/commit/b31377b)), closes [#6556](https://github.com/opentrons/opentrons/issues/6556)
* **robot-server:** http basic pipetting session - command routing and state store ([#6606](https://github.com/opentrons/opentrons/issues/6606)) ([534f038](https://github.com/opentrons/opentrons/commit/534f038)), closes [#6559](https://github.com/opentrons/opentrons/issues/6559)
* **robot-server:** http basic pipetting- load labware ([#6640](https://github.com/opentrons/opentrons/issues/6640)) ([afeee2e](https://github.com/opentrons/opentrons/commit/afeee2e))
* **robot-server:** live protocol session handles LoadInstrument command ([#6639](https://github.com/opentrons/opentrons/issues/6639)) ([969112c](https://github.com/opentrons/opentrons/commit/969112c)), closes [#6602](https://github.com/opentrons/opentrons/issues/6602)
* **robot-server,app:** extend pipette offset cal to include tip length cal if needed ([#6641](https://github.com/opentrons/opentrons/issues/6641)) ([5819f29](https://github.com/opentrons/opentrons/commit/5819f29))
* **api:** Add calibration status to all of the calibration data models ([#6648](https://github.com/Opentrons/opentrons/issues/6648)) ([2753734](https://github.com/Opentrons/opentrons/commit/2753734))
* **api:** add source blowout location option to transfer function ([#6670](https://github.com/Opentrons/opentrons/issues/6670)) ([811a767](https://github.com/Opentrons/opentrons/commit/811a767)), closes [#6576](https://github.com/Opentrons/opentrons/issues/6576)
* **api:** pin JSON protocols to APIVersion 2.8 ([#6691](https://github.com/Opentrons/opentrons/issues/6691)) ([0804474](https://github.com/Opentrons/opentrons/commit/0804474)), closes [#6681](https://github.com/Opentrons/opentrons/issues/6681)
* **api:** Use more human-friendly names in "API version too low" error messages ([#6662](https://github.com/Opentrons/opentrons/issues/6662)) ([55daec2](https://github.com/Opentrons/opentrons/commit/55daec2))
* **app:** update pipette attach flow to include calibration ([#6760](https://github.com/Opentrons/opentrons/issues/6760)) ([c873113](https://github.com/Opentrons/opentrons/commit/c873113)), closes [#2130](https://github.com/Opentrons/opentrons/issues/2130)
* **labware-library:** Add labware creator visibility ([#6667](https://github.com/Opentrons/opentrons/issues/6667)) ([eb906a3](https://github.com/Opentrons/opentrons/commit/eb906a3)), closes [#6307](https://github.com/Opentrons/opentrons/issues/6307)
* **protocol designer:** put mix delay behind FF ([#6619](https://github.com/Opentrons/opentrons/issues/6619)) ([5c7bf7d](https://github.com/Opentrons/opentrons/commit/5c7bf7d))
* **protocol-designer:** add air gap dispense FF ([#6647](https://github.com/Opentrons/opentrons/issues/6647)) ([4c53b73](https://github.com/Opentrons/opentrons/commit/4c53b73)), closes [#6522](https://github.com/Opentrons/opentrons/issues/6522)
* **protocol-designer:** add air gap dispense for fields to move liquid form ([#6658](https://github.com/Opentrons/opentrons/issues/6658)) ([a6c1930](https://github.com/Opentrons/opentrons/commit/a6c1930)), closes [#6499](https://github.com/Opentrons/opentrons/issues/6499)
* **protocol-designer:** add dispenseAirGapVolume arg ([#6656](https://github.com/Opentrons/opentrons/issues/6656)) ([4703456](https://github.com/Opentrons/opentrons/commit/4703456)), closes [#6653](https://github.com/Opentrons/opentrons/issues/6653)
* **protocol-designer:** add mix delay commands ([#6631](https://github.com/Opentrons/opentrons/issues/6631)) ([953d454](https://github.com/Opentrons/opentrons/commit/953d454)), closes [#6498](https://github.com/Opentrons/opentrons/issues/6498)
* **protocol-designer:** add mix delay default values ([#6607](https://github.com/Opentrons/opentrons/issues/6607)) ([db2b331](https://github.com/Opentrons/opentrons/commit/db2b331)), closes [#6579](https://github.com/Opentrons/opentrons/issues/6579)
* **protocol-designer:** bump pd to 5.1.0; add migration ([#6583](https://github.com/Opentrons/opentrons/issues/6583)) ([d6ba128](https://github.com/Opentrons/opentrons/commit/d6ba128)), closes [#6573](https://github.com/Opentrons/opentrons/issues/6573) [#6634](https://github.com/Opentrons/opentrons/issues/6634)
* **protocol-designer:** implement dispense > air gap for Transfer command creator ([#6745](https://github.com/Opentrons/opentrons/issues/6745)) ([e684f7d](https://github.com/Opentrons/opentrons/commit/e684f7d)), closes [#6508](https://github.com/Opentrons/opentrons/issues/6508)
* **protocol-designer:** update air gap dispense tooltip ([#6753](https://github.com/Opentrons/opentrons/issues/6753)) ([b6ace2d](https://github.com/Opentrons/opentrons/commit/b6ace2d)), closes [#6714](https://github.com/Opentrons/opentrons/issues/6714)
* **robot-server:** create models for basic pipetting session commands ([#6560](https://github.com/Opentrons/opentrons/issues/6560)) ([b31377b](https://github.com/Opentrons/opentrons/commit/b31377b)), closes [#6556](https://github.com/Opentrons/opentrons/issues/6556)
* **robot-server:** http basic pipetting session - command routing and state store ([#6606](https://github.com/Opentrons/opentrons/issues/6606)) ([534f038](https://github.com/Opentrons/opentrons/commit/534f038)), closes [#6559](https://github.com/Opentrons/opentrons/issues/6559)
* **robot-server:** http basic pipetting- load labware ([#6640](https://github.com/Opentrons/opentrons/issues/6640)) ([afeee2e](https://github.com/Opentrons/opentrons/commit/afeee2e))
* **robot-server:** live protocol session handles LoadInstrument command ([#6639](https://github.com/Opentrons/opentrons/issues/6639)) ([969112c](https://github.com/Opentrons/opentrons/commit/969112c)), closes [#6602](https://github.com/Opentrons/opentrons/issues/6602)
* **robot-server,app:** extend pipette offset cal to include tip length cal if needed ([#6641](https://github.com/Opentrons/opentrons/issues/6641)) ([5819f29](https://github.com/Opentrons/opentrons/commit/5819f29))





### BREAKING CHANGES

* **robot-server:** Requests without Opentrons-Version or with a value lower than 2 will be rejected

([8e7059a](https://github.com/Opentrons/opentrons/commit/8e7059a)), closes [#6781](https://github.com/Opentrons/opentrons/issues/6781)




## [3.21.2](https://github.com/Opentrons/opentrons/compare/v3.21.1...v3.21.2) (2020-10-16)


* **api:** Be fault-tolerant to bad deck cal data ([#6803](https://github.com/Opentrons/opentrons/issues/6803)) ([43ba721](https://github.com/Opentrons/opentrons/commit/43ba721))
* **app:** add analytics and support tracking to ignore app update ([#6790](https://github.com/Opentrons/opentrons/issues/6790)) ([079c2e9](https://github.com/Opentrons/opentrons/commit/079c2e9))
* **app-shell:** ensure robot update download folder exists before caching manifest ([#6787](https://github.com/Opentrons/opentrons/issues/6787)) ([200b3d5](https://github.com/Opentrons/opentrons/commit/200b3d5)), closes [#6786](https://github.com/Opentrons/opentrons/issues/6786)





## [3.21.1](https://github.com/Opentrons/opentrons/compare/v3.21.0...v3.21.1) (2020-10-14)


### Features

* **app:** allow app update pop-up notifications to be disabled ([#6715](https://github.com/Opentrons/opentrons/issues/6715)) ([7982d5f](https://github.com/Opentrons/opentrons/commit/7982d5f)), closes [#6684](https://github.com/Opentrons/opentrons/issues/6684)
* **components:** add primitives-based BaseModal layout component ([#6687](https://github.com/Opentrons/opentrons/issues/6687)) ([dfa0b0d](https://github.com/Opentrons/opentrons/commit/dfa0b0d))





# [3.21.0](https://github.com/Opentrons/opentrons/compare/v3.20.1...v3.21.0) (2020-09-30)


### Bug Fixes

* **api:** can't inhibit creating Session in build_and_prep if http protocol sessions are enabled because.... THATS HOW PROTOCOL SESSIONS RUN PROTOCOLS ([#6345](https://github.com/Opentrons/opentrons/issues/6345)) ([b49c2a1](https://github.com/Opentrons/opentrons/commit/b49c2a1))
* **api:** Document deck slot deletion ([#6260](https://github.com/Opentrons/opentrons/issues/6260)) ([b37e23a](https://github.com/Opentrons/opentrons/commit/b37e23a)), closes [#6214](https://github.com/Opentrons/opentrons/issues/6214)
* **api:** fix Deck.get_slot_center z value ([#6435](https://github.com/Opentrons/opentrons/issues/6435)) ([ddc8965](https://github.com/Opentrons/opentrons/commit/ddc8965))
* **api:** fix InstrumentContext.home_plunger ([#6367](https://github.com/Opentrons/opentrons/issues/6367)) ([120d68a](https://github.com/Opentrons/opentrons/commit/120d68a))
* **api:** limit calibration jogs when going upward ([#6565](https://github.com/Opentrons/opentrons/issues/6565)) ([5a82384](https://github.com/Opentrons/opentrons/commit/5a82384)), closes [#6562](https://github.com/Opentrons/opentrons/issues/6562)
* **api:** Prevent extra pipette movement after homing ([#6364](https://github.com/Opentrons/opentrons/issues/6364)) ([1ea97c7](https://github.com/Opentrons/opentrons/commit/1ea97c7))
* **api:** thermocycler hold_time bug ([#6479](https://github.com/Opentrons/opentrons/issues/6479)) ([b9d6498](https://github.com/Opentrons/opentrons/commit/b9d6498))
* **api:** typo in should_dodge_thermocycler ([#6458](https://github.com/Opentrons/opentrons/issues/6458)) ([8e446e1](https://github.com/Opentrons/opentrons/commit/8e446e1))
* **app:** cache robot releases manifest for offline usage ([#6494](https://github.com/Opentrons/opentrons/issues/6494)) ([5308562](https://github.com/Opentrons/opentrons/commit/5308562)), closes [#5992](https://github.com/Opentrons/opentrons/issues/5992)
* **app:** do not set the user's Intercom name to "Unknown User" ([#6468](https://github.com/Opentrons/opentrons/issues/6468)) ([66662a4](https://github.com/Opentrons/opentrons/commit/66662a4)), closes [#6461](https://github.com/Opentrons/opentrons/issues/6461)
* **app:** Ensure cal check exit button on the title modal only displays if there is no primary exit ([#6616](https://github.com/Opentrons/opentrons/issues/6616)) ([88bb0a8](https://github.com/Opentrons/opentrons/commit/88bb0a8))
* **app:** fix layout of calibration panel complete confirmation button ([#6509](https://github.com/Opentrons/opentrons/issues/6509)) ([093bddb](https://github.com/Opentrons/opentrons/commit/093bddb))
* **app:** flip modules on deck map when in slots 3, 6, or 9 ([#6383](https://github.com/Opentrons/opentrons/issues/6383)) ([d0347da](https://github.com/Opentrons/opentrons/commit/d0347da)), closes [#4422](https://github.com/Opentrons/opentrons/issues/4422)
* **app:** make cal commands chain instead of race ([#6561](https://github.com/Opentrons/opentrons/issues/6561)) ([20f01bc](https://github.com/Opentrons/opentrons/commit/20f01bc)), closes [#6535](https://github.com/Opentrons/opentrons/issues/6535)
* **app:** make tip length calibration use generic calibration move to tiprack command ([#6489](https://github.com/Opentrons/opentrons/issues/6489)) ([b5a59e0](https://github.com/Opentrons/opentrons/commit/b5a59e0))
* **app:** properly enable/disable robot update from file button ([#6483](https://github.com/Opentrons/opentrons/issues/6483)) ([a996cdc](https://github.com/Opentrons/opentrons/commit/a996cdc)), closes [#5429](https://github.com/Opentrons/opentrons/issues/5429)
* **app:** sync robot time with app time on connect ([#6501](https://github.com/Opentrons/opentrons/issues/6501)) ([66dc626](https://github.com/Opentrons/opentrons/commit/66dc626)), closes [#3872](https://github.com/Opentrons/opentrons/issues/3872)
* **app:** temporary fix for chained command race conditions in cal flows to unblock user testing ([#6530](https://github.com/Opentrons/opentrons/issues/6530)) ([3c17d9e](https://github.com/Opentrons/opentrons/commit/3c17d9e))
* **app, app-shell:** use mtime for custom labware date display ([#6396](https://github.com/Opentrons/opentrons/issues/6396)) ([45f7ec8](https://github.com/Opentrons/opentrons/commit/45f7ec8)), closes [#6381](https://github.com/Opentrons/opentrons/issues/6381)
* **labware-library:** fix test protocol well order bug ([#6393](https://github.com/Opentrons/opentrons/issues/6393)) ([d6c42bf](https://github.com/Opentrons/opentrons/commit/d6c42bf))
* **protocol-designer:** fix dismissing warnings for unsaved step forms ([#6503](https://github.com/Opentrons/opentrons/issues/6503)) ([1d37f09](https://github.com/Opentrons/opentrons/commit/1d37f09)), closes [#6263](https://github.com/Opentrons/opentrons/issues/6263)
* **protocol-designer:** fix scroll position of MoreOptionsModal ([#6515](https://github.com/Opentrons/opentrons/issues/6515)) ([2bf776b](https://github.com/Opentrons/opentrons/commit/2bf776b)), closes [#6156](https://github.com/Opentrons/opentrons/issues/6156)
* **protocol-designer:** Rename aspirate/dispense delay tip position fields ([#6324](https://github.com/Opentrons/opentrons/issues/6324)) ([bf4a959](https://github.com/Opentrons/opentrons/commit/bf4a959)), closes [#6300](https://github.com/Opentrons/opentrons/issues/6300)
* **robot-server:** add inspectingTip state to deck calibration ([#6313](https://github.com/Opentrons/opentrons/issues/6313)) ([c1fd90a](https://github.com/Opentrons/opentrons/commit/c1fd90a))
* **robot-server:** calibraiton flows - fix assert statements ([#6529](https://github.com/Opentrons/opentrons/issues/6529)) ([a269b0f](https://github.com/Opentrons/opentrons/commit/a269b0f))
* **robot-server:** correct move to deck safety buffer in y ([#6478](https://github.com/Opentrons/opentrons/issues/6478)) ([a124bb5](https://github.com/Opentrons/opentrons/commit/a124bb5))
* **robot-server:** datetime responses are missing timezone. ([#6375](https://github.com/Opentrons/opentrons/issues/6375)) ([1a65835](https://github.com/Opentrons/opentrons/commit/1a65835)), closes [#6374](https://github.com/Opentrons/opentrons/issues/6374)
* **robot-server:** deck calibration flow clean up ([#6430](https://github.com/Opentrons/opentrons/issues/6430)) ([986e5d1](https://github.com/Opentrons/opentrons/commit/986e5d1))
* **robot-server:** fix multi channel move in tip length cal ([#6319](https://github.com/Opentrons/opentrons/issues/6319)) ([898a24b](https://github.com/Opentrons/opentrons/commit/898a24b))
* **robot-server:** make systemd startup more tolerant ([#6397](https://github.com/Opentrons/opentrons/issues/6397)) ([86fbc47](https://github.com/Opentrons/opentrons/commit/86fbc47))
* **robot-server:** only import type_extension during type checking ([#6462](https://github.com/Opentrons/opentrons/issues/6462)) ([b3c844d](https://github.com/Opentrons/opentrons/commit/b3c844d))
* **robot-server:** pip offset: save offset from reference point ([#6586](https://github.com/Opentrons/opentrons/issues/6586)) ([ef722ba](https://github.com/Opentrons/opentrons/commit/ef722ba))
* **robot-server:** pipette offset - uses z ref height to move to point ([#6514](https://github.com/Opentrons/opentrons/issues/6514)) ([58116d0](https://github.com/Opentrons/opentrons/commit/58116d0)), closes [#6424](https://github.com/Opentrons/opentrons/issues/6424)
* **robot-server:** pipette offset cal - add missing arg to save offset data ([#6520](https://github.com/Opentrons/opentrons/issues/6520)) ([13c2b27](https://github.com/Opentrons/opentrons/commit/13c2b27))
* **robot-server:** tip length cal -  use nozzle height for tip length calculation ([#6527](https://github.com/Opentrons/opentrons/issues/6527)) ([b87df49](https://github.com/Opentrons/opentrons/commit/b87df49))
* **shared-data:** fix typos (themocycler->thermocycler) ([1689fa8](https://github.com/Opentrons/opentrons/commit/1689fa8))


### Features

* **api:** Add all tip handling and tracking functions for the paired instrument context ([#6550](https://github.com/Opentrons/opentrons/issues/6550)) ([d9cf00e](https://github.com/Opentrons/opentrons/commit/d9cf00e))
* **api:** Add pipette pairing to the command log and support in rpc ([#6577](https://github.com/Opentrons/opentrons/issues/6577)) ([75a7545](https://github.com/Opentrons/opentrons/commit/75a7545))
* **api:** Add skeleton Pipette pairing context ([#6472](https://github.com/Opentrons/opentrons/issues/6472)) ([eb030d1](https://github.com/Opentrons/opentrons/commit/eb030d1))
* **api:** adding deep_get utility function ([#6338](https://github.com/Opentrons/opentrons/issues/6338)) ([f83dc3e](https://github.com/Opentrons/opentrons/commit/f83dc3e))
* **api:** Allow pipette pairing for aspirate and dispense functions ([#6450](https://github.com/Opentrons/opentrons/issues/6450)) ([f1cbe81](https://github.com/Opentrons/opentrons/commit/f1cbe81))
* **api:** Lay foundation on the backend to support simultaneous axis movement ([#6373](https://github.com/Opentrons/opentrons/issues/6373)) ([82e5edf](https://github.com/Opentrons/opentrons/commit/82e5edf))
* **api:** Save new robot calibration in a separate location ([#6281](https://github.com/Opentrons/opentrons/issues/6281)) ([03c3051](https://github.com/Opentrons/opentrons/commit/03c3051))
* **api:** Support pipette pairing for pickup and drop tip ([#6390](https://github.com/Opentrons/opentrons/issues/6390)) ([a3d4d12](https://github.com/Opentrons/opentrons/commit/a3d4d12))
* **api, robot-server:** expose pipette offset cal via http ([#6563](https://github.com/Opentrons/opentrons/issues/6563)) ([ffd3439](https://github.com/Opentrons/opentrons/commit/ffd3439)), closes [#6429](https://github.com/Opentrons/opentrons/issues/6429)
* **api,robot-server:** Robot server rpc http ff ([#6310](https://github.com/Opentrons/opentrons/issues/6310)) ([ba0fc92](https://github.com/Opentrons/opentrons/commit/ba0fc92)), closes [#6305](https://github.com/Opentrons/opentrons/issues/6305)
* **app:** add Jupyter Notebook button to robot's Advanced Settings ([#6474](https://github.com/Opentrons/opentrons/issues/6474)) ([d615d2d](https://github.com/Opentrons/opentrons/commit/d615d2d)), closes [#6102](https://github.com/Opentrons/opentrons/issues/6102)
* **app:** rename base -> block for TC copy ([#6524](https://github.com/Opentrons/opentrons/issues/6524)) ([abd6b65](https://github.com/Opentrons/opentrons/commit/abd6b65)), closes [#6086](https://github.com/Opentrons/opentrons/issues/6086)
* **protocol designer:** remove mix tip position fields ([#6590](https://github.com/Opentrons/opentrons/issues/6590)) ([eb058a2](https://github.com/Opentrons/opentrons/commit/eb058a2)), closes [#6589](https://github.com/Opentrons/opentrons/issues/6589)
* **protocol-designer:** account for two air gaps when bumping down multi aspirate to single path ([#6477](https://github.com/Opentrons/opentrons/issues/6477)) ([897e711](https://github.com/Opentrons/opentrons/commit/897e711)), closes [#6469](https://github.com/Opentrons/opentrons/issues/6469)
* **protocol-designer:** add 3.20 export warning modal ([#6436](https://github.com/Opentrons/opentrons/issues/6436)) ([70cb5bb](https://github.com/Opentrons/opentrons/commit/70cb5bb)), closes [#6278](https://github.com/Opentrons/opentrons/issues/6278)
* **protocol-designer:** add air gap commands and export protocols as v5 ([#6401](https://github.com/Opentrons/opentrons/issues/6401)) ([a16351e](https://github.com/Opentrons/opentrons/commit/a16351e))
* **protocol-designer:** add air gap formToArgs ([#6334](https://github.com/Opentrons/opentrons/issues/6334)) ([16684e4](https://github.com/Opentrons/opentrons/commit/16684e4)), closes [#6219](https://github.com/Opentrons/opentrons/issues/6219) [#6217](https://github.com/Opentrons/opentrons/issues/6217)
* **protocol-designer:** Add defaults for air gap and delay ([#6341](https://github.com/Opentrons/opentrons/issues/6341)) ([8b9ba81](https://github.com/Opentrons/opentrons/commit/8b9ba81)), closes [#6058](https://github.com/Opentrons/opentrons/issues/6058)
* **protocol-designer:** add delay field to mix form ([#6574](https://github.com/Opentrons/opentrons/issues/6574)) ([70b5344](https://github.com/Opentrons/opentrons/commit/70b5344)), closes [#6347](https://github.com/Opentrons/opentrons/issues/6347)
* **protocol-designer:** add migration for new fields; bump to 5.0.0 ([#6357](https://github.com/Opentrons/opentrons/issues/6357)) ([3377ff7](https://github.com/Opentrons/opentrons/commit/3377ff7)), closes [#6183](https://github.com/Opentrons/opentrons/issues/6183) [#6276](https://github.com/Opentrons/opentrons/issues/6276)
* **protocol-designer:** add new air gap / delay announcement ([#6414](https://github.com/Opentrons/opentrons/issues/6414)) ([2ea012f](https://github.com/Opentrons/opentrons/commit/2ea012f)), closes [#6411](https://github.com/Opentrons/opentrons/issues/6411)
* **protocol-designer:** add OT_PD_ENABLE_MIX_DELAY feature flag ([#6525](https://github.com/Opentrons/opentrons/issues/6525)) ([862ab14](https://github.com/Opentrons/opentrons/commit/862ab14)), closes [#6523](https://github.com/Opentrons/opentrons/issues/6523)
* **protocol-designer:** adjust disposal volume and path for air gap ([#6372](https://github.com/Opentrons/opentrons/issues/6372)) ([aa70623](https://github.com/Opentrons/opentrons/commit/aa70623)), closes [#6022](https://github.com/Opentrons/opentrons/issues/6022)
* **protocol-designer:** apply delays to aspirates/dispenses in a mix  ([#6365](https://github.com/Opentrons/opentrons/issues/6365)) ([a34e3f4](https://github.com/Opentrons/opentrons/commit/a34e3f4)), closes [#6306](https://github.com/Opentrons/opentrons/issues/6306)
* **protocol-designer:** apply delays to pre-wet ([#6380](https://github.com/Opentrons/opentrons/issues/6380)) ([516783a](https://github.com/Opentrons/opentrons/commit/516783a)), closes [#6021](https://github.com/Opentrons/opentrons/issues/6021)
* **protocol-designer:** clamp air gap volume when tiprack changes ([#6320](https://github.com/Opentrons/opentrons/issues/6320)) ([1af3bae](https://github.com/Opentrons/opentrons/commit/1af3bae)), closes [#6264](https://github.com/Opentrons/opentrons/issues/6264)
* **protocol-designer:** export airgap protocols as v5 ([#6433](https://github.com/Opentrons/opentrons/issues/6433)) ([a3c960d](https://github.com/Opentrons/opentrons/commit/a3c960d)), closes [#6400](https://github.com/Opentrons/opentrons/issues/6400)
* **protocol-designer:** implement formToArgs for delays ([#6301](https://github.com/Opentrons/opentrons/issues/6301)) ([6681cfb](https://github.com/Opentrons/opentrons/commit/6681cfb)), closes [#6219](https://github.com/Opentrons/opentrons/issues/6219)
* **protocol-designer:** minor copy change for aspirate delay tooltip ([#6449](https://github.com/Opentrons/opentrons/issues/6449)) ([e00fcc1](https://github.com/Opentrons/opentrons/commit/e00fcc1)), closes [#6448](https://github.com/Opentrons/opentrons/issues/6448)
* **protocol-designer:** remove air gap + delay FF ([#6434](https://github.com/Opentrons/opentrons/issues/6434)) ([e3906f5](https://github.com/Opentrons/opentrons/commit/e3906f5)), closes [#6277](https://github.com/Opentrons/opentrons/issues/6277)
* **protocol-designer:** setup Mixpanel and add initial events ([#6511](https://github.com/Opentrons/opentrons/issues/6511)) ([1959639](https://github.com/Opentrons/opentrons/commit/1959639)), closes [#6057](https://github.com/Opentrons/opentrons/issues/6057)
* **protocol-designer:** update mixFormToArgs with new delay fields ([#6575](https://github.com/Opentrons/opentrons/issues/6575)) ([ff69de7](https://github.com/Opentrons/opentrons/commit/ff69de7)), closes [#6348](https://github.com/Opentrons/opentrons/issues/6348)
* **protocol-designer:** update tooltips for air gap + delay ([#6404](https://github.com/Opentrons/opentrons/issues/6404)) ([89e63b4](https://github.com/Opentrons/opentrons/commit/89e63b4)), closes [#6402](https://github.com/Opentrons/opentrons/issues/6402)
* **robot_server:** add system/time GET & PUT endpoints ([#6403](https://github.com/Opentrons/opentrons/issues/6403)) ([c3e5b46](https://github.com/Opentrons/opentrons/commit/c3e5b46))
* **robot-server:** Executor for protocol session ([#6262](https://github.com/Opentrons/opentrons/issues/6262)) ([7b473c1](https://github.com/Opentrons/opentrons/commit/7b473c1)), closes [#6192](https://github.com/Opentrons/opentrons/issues/6192) [#6194](https://github.com/Opentrons/opentrons/issues/6194) [#6195](https://github.com/Opentrons/opentrons/issues/6195) [#6196](https://github.com/Opentrons/opentrons/issues/6196)
* **robot-server:** Robot server protocol session model ([#6371](https://github.com/Opentrons/opentrons/issues/6371)) ([973ee18](https://github.com/Opentrons/opentrons/commit/973ee18)), closes [#6225](https://github.com/Opentrons/opentrons/issues/6225)
* **robot-server,app:** add download deck calibration button ([#6453](https://github.com/Opentrons/opentrons/issues/6453)) ([b3b365d](https://github.com/Opentrons/opentrons/commit/b3b365d)), closes [#6055](https://github.com/Opentrons/opentrons/issues/6055)


### Performance Improvements

* **protocol-designer:** strip no-op mixes from robot state generation ([#6488](https://github.com/Opentrons/opentrons/issues/6488)) ([4885b50](https://github.com/Opentrons/opentrons/commit/4885b50)), closes [#6176](https://github.com/Opentrons/opentrons/issues/6176)





## [3.20.1](https://github.com/Opentrons/opentrons/compare/v3.20.0...v3.20.1) (2020-08-25)

### Bug Fixes

* **api, app:** Ensure index file exists before reading from it ([#6410](https://github.com/Opentrons/opentrons/issues/6410)) ([d616d0b](https://github.com/Opentrons/opentrons/commit/d616d0b)), closes [#6394](https://github.com/Opentrons/opentrons/issues/6394)





# [3.20.0](https://github.com/Opentrons/opentrons/compare/v3.19.0...v3.20.0) (2020-08-13)

### Bug Fixes

* **api:** use the hash-with-parent for rpc cal hashes ([#6355](https://github.com/Opentrons/opentrons/issues/6355)) ([6675154](https://github.com/Opentrons/opentrons/commit/6675154))
* **api:** Save v2 labware in api v1 with URIs ([#6325](https://github.com/Opentrons/opentrons/issues/6325)) ([c6e3688](https://github.com/Opentrons/opentrons/commit/c6e3688))
* **robot-server:** Robot server createParams bug ([fa7a35e](https://github.com/Opentrons/opentrons/commit/fa7a35e))
* **app:** fix tip probe button in apiV1 protocols ([#6318](https://github.com/Opentrons/opentrons/issues/6318)) ([3b75f5d](https://github.com/Opentrons/opentrons/commit/3b75f5d))
* **app:** fix labware list uniqueing logic for file info page ([#6309](https://github.com/Opentrons/opentrons/issues/6309)) ([ca85b7e](https://github.com/Opentrons/opentrons/commit/ca85b7e))
* **api:** add missing space to runlog entry for set block temperature ([#6259](https://github.com/Opentrons/opentrons/issues/6259)) ([2c24069](https://github.com/Opentrons/opentrons/commit/2c24069)), closes [#6258](https://github.com/Opentrons/opentrons/issues/6258)
* **api:** avoid hitting endstop during retract fast home ([#6299](https://github.com/Opentrons/opentrons/issues/6299)) ([997e156](https://github.com/Opentrons/opentrons/commit/997e156))
* **api:** Clarify what is behind GPIO connection problems ([#6204](https://github.com/Opentrons/opentrons/issues/6204)) ([5148f96](https://github.com/Opentrons/opentrons/commit/5148f96)), closes [#6164](https://github.com/Opentrons/opentrons/issues/6164)
* **api:** Commands log: misleading "rate" for aspirate/dispense ([#6189](https://github.com/Opentrons/opentrons/issues/6189)) ([74dad72](https://github.com/Opentrons/opentrons/commit/74dad72))
* **api:** db write optimization ([#6033](https://github.com/Opentrons/opentrons/issues/6033)) ([a62b833](https://github.com/Opentrons/opentrons/commit/a62b833)), closes [#6029](https://github.com/Opentrons/opentrons/issues/6029) [#5983](https://github.com/Opentrons/opentrons/issues/5983)
* **api:** don't stomp other loggers in log config ([#6286](https://github.com/Opentrons/opentrons/issues/6286)) ([b6d6e18](https://github.com/Opentrons/opentrons/commit/b6d6e18))
* **api:** Ensure old calibration index entries are migrated over before displaying data ([#6297](https://github.com/Opentrons/opentrons/issues/6297)) ([f242c4b](https://github.com/Opentrons/opentrons/commit/f242c4b))
* **api:** fix APIv1 GPIO ctl for cmdline and jupyter protocol execution ([#6091](https://github.com/Opentrons/opentrons/issues/6091)) ([09b6459](https://github.com/Opentrons/opentrons/commit/09b6459)), closes [#6045](https://github.com/Opentrons/opentrons/issues/6045)
* **api:** fix load tip length calibration exception handling ([#6206](https://github.com/Opentrons/opentrons/issues/6206)) ([e89cda2](https://github.com/Opentrons/opentrons/commit/e89cda2))
* **api:** get_parent_identifier should get parent identifier ([#6295](https://github.com/Opentrons/opentrons/issues/6295)) ([9ef28a8](https://github.com/Opentrons/opentrons/commit/9ef28a8))
* **api:** move TypedDicts to dev_types for type checking only ([#6185](https://github.com/Opentrons/opentrons/issues/6185)) ([34633f8](https://github.com/Opentrons/opentrons/commit/34633f8))
* **api:** set parent for in-slot offsets to empty ([#6211](https://github.com/Opentrons/opentrons/issues/6211)) ([463d56d](https://github.com/Opentrons/opentrons/commit/463d56d))
* **api:** verify lid target temp has propagated to TC status after set_lid_temperature ([#6143](https://github.com/Opentrons/opentrons/issues/6143)) ([676f129](https://github.com/Opentrons/opentrons/commit/676f129))
* **api, app:** Clear instrument offset before performing deck calibration, don't restart ([#6208](https://github.com/Opentrons/opentrons/issues/6208)) ([cefa633](https://github.com/Opentrons/opentrons/commit/cefa633)), closes [#5022](https://github.com/Opentrons/opentrons/issues/5022)
* **api, robot-server:** remove the deprecated useV1HttpApi config setting and use_fast_api feature flag. ([#6082](https://github.com/Opentrons/opentrons/issues/6082)) ([83d7c7d](https://github.com/Opentrons/opentrons/commit/83d7c7d)), closes [#6079](https://github.com/Opentrons/opentrons/issues/6079)
* **app:** correctly namespace calibration check command ([#6127](https://github.com/Opentrons/opentrons/issues/6127)) ([59faac6](https://github.com/Opentrons/opentrons/commit/59faac6))
* **app:** don't doublecount labware on modules ([#6246](https://github.com/Opentrons/opentrons/issues/6246)) ([837f153](https://github.com/Opentrons/opentrons/commit/837f153))
* **app:** fix calibrate to trough bottom image for multi pipettes ([#5974](https://github.com/Opentrons/opentrons/issues/5974)) ([dac535f](https://github.com/Opentrons/opentrons/commit/dac535f)), closes [#4734](https://github.com/Opentrons/opentrons/issues/4734)
* **app:** fix data reads from JSON Protocols later than v3 ([#6284](https://github.com/Opentrons/opentrons/issues/6284)) ([f0f7109](https://github.com/Opentrons/opentrons/commit/f0f7109)), closes [#6235](https://github.com/Opentrons/opentrons/issues/6235)
* **app:** show alert if WS closes **or** robot becomes unhealthy ([#6233](https://github.com/Opentrons/opentrons/issues/6233)) ([2cd4fd1](https://github.com/Opentrons/opentrons/commit/2cd4fd1))
* **app:** simplify discovery state to avoid stale IPs and health data ([#6193](https://github.com/Opentrons/opentrons/issues/6193)) ([0e089a7](https://github.com/Opentrons/opentrons/commit/0e089a7)), closes [#5985](https://github.com/Opentrons/opentrons/issues/5985) [#5250](https://github.com/Opentrons/opentrons/issues/5250)
* **app:** update link to support center ([#6087](https://github.com/Opentrons/opentrons/issues/6087)) ([be05ef9](https://github.com/Opentrons/opentrons/commit/be05ef9))
* **comp-lib:** Update SlotMap prop names ([#6124](https://github.com/Opentrons/opentrons/issues/6124)) ([392e35c](https://github.com/Opentrons/opentrons/commit/392e35c))
* **docs:** Remove legacy intercom script ([#6298](https://github.com/Opentrons/opentrons/issues/6298)) ([7d38504](https://github.com/Opentrons/opentrons/commit/7d38504))
* **protocol-designer:** fix TC profile step lid label text ([#6069](https://github.com/Opentrons/opentrons/issues/6069)) ([39ed163](https://github.com/Opentrons/opentrons/commit/39ed163)), closes [#6060](https://github.com/Opentrons/opentrons/issues/6060)
* **protocol-designer:** lazy load air gap/delay FF from local storage ([#6252](https://github.com/Opentrons/opentrons/issues/6252)) ([414dc0b](https://github.com/Opentrons/opentrons/commit/414dc0b))
* **protocol-designer:** new TC steps default to last TC module state ([#6090](https://github.com/Opentrons/opentrons/issues/6090)) ([1d79fdc](https://github.com/Opentrons/opentrons/commit/1d79fdc)), closes [#6068](https://github.com/Opentrons/opentrons/issues/6068)
* **protocol-designer:** Update TC timeline text alignment ([#6202](https://github.com/Opentrons/opentrons/issues/6202)) ([98eeec1](https://github.com/Opentrons/opentrons/commit/98eeec1)), closes [#6138](https://github.com/Opentrons/opentrons/issues/6138)
* **protocol-designer:** Update temperature field min sizing tc state ([#6113](https://github.com/Opentrons/opentrons/issues/6113)) ([1163a36](https://github.com/Opentrons/opentrons/commit/1163a36))
* **robot-server:** correct return tip height, only load block when present ([#6224](https://github.com/Opentrons/opentrons/issues/6224)) ([3bf6b26](https://github.com/Opentrons/opentrons/commit/3bf6b26))
* **robot-server:** fix a merge race condition. ([#6030](https://github.com/Opentrons/opentrons/issues/6030)) ([628049c](https://github.com/Opentrons/opentrons/commit/628049c))
* **robot-server:** fix typo in change pipette position ([#6083](https://github.com/Opentrons/opentrons/issues/6083)) ([67c3332](https://github.com/Opentrons/opentrons/commit/67c3332))
* **robot-server:** force pydantic to version 1.4 as that is what is on the robot. ([#6037](https://github.com/Opentrons/opentrons/issues/6037)) ([aa5bcc2](https://github.com/Opentrons/opentrons/commit/aa5bcc2))
* **robot-server:** Log uncaught exceptions ([#6209](https://github.com/Opentrons/opentrons/issues/6209)) ([0e1b15b](https://github.com/Opentrons/opentrons/commit/0e1b15b))
* **robot-server:** tavern test setup fix ([#6025](https://github.com/Opentrons/opentrons/issues/6025)) ([7b17c83](https://github.com/Opentrons/opentrons/commit/7b17c83))
* **robot-server:** websockets has a 1mb upload limit. Use wsproto instead. ([#6229](https://github.com/Opentrons/opentrons/issues/6229)) ([c23e980](https://github.com/Opentrons/opentrons/commit/c23e980)), closes [#6159](https://github.com/Opentrons/opentrons/issues/6159)
* **robot-server, app:** fix broken chained commands in tip length cal ([#6212](https://github.com/Opentrons/opentrons/issues/6212)) ([727ba64](https://github.com/Opentrons/opentrons/commit/727ba64))
* **shared-data:** do not show calibration block defs in the labware library ([#6031](https://github.com/Opentrons/opentrons/issues/6031)) ([c248d32](https://github.com/Opentrons/opentrons/commit/c248d32))
* **shared-data:** fix well bottom shape of nest_96_wellplate_2ml_deep ([#6216](https://github.com/Opentrons/opentrons/issues/6216)) ([6350511](https://github.com/Opentrons/opentrons/commit/6350511)), closes [#6171](https://github.com/Opentrons/opentrons/issues/6171)


### Features

* **api:**  Use 10mm/s-equivalent flow rates for GEN2 singles in API Version 2.6 ([#6283](https://github.com/Opentrons/opentrons/issues/6283)) ([70c54e2](https://github.com/Opentrons/opentrons/commit/70c54e2)), closes [#6279](https://github.com/Opentrons/opentrons/issues/6279) [#5968](https://github.com/Opentrons/opentrons/issues/5968)
* **api:** add JSON v5 executor and schema ([#6239](https://github.com/Opentrons/opentrons/issues/6239)) ([17969d6](https://github.com/Opentrons/opentrons/commit/17969d6)), closes [#6228](https://github.com/Opentrons/opentrons/issues/6228)
* **api:** ensure stable load_module order in JSON executor ([#5995](https://github.com/Opentrons/opentrons/issues/5995)) ([c34aa22](https://github.com/Opentrons/opentrons/commit/c34aa22))
* **api:** load tip length calibratioin in v1 ([#5936](https://github.com/Opentrons/opentrons/issues/5936)) ([598f7e6](https://github.com/Opentrons/opentrons/commit/598f7e6)), closes [#5608](https://github.com/Opentrons/opentrons/issues/5608)
* **api:** support air gap command in V3+V4 executors ([#6003](https://github.com/Opentrons/opentrons/issues/6003)) ([4e85f4d](https://github.com/Opentrons/opentrons/commit/4e85f4d))
* **app:** Expose Labware Calibration Status on the FileInfo Page ([#6100](https://github.com/Opentrons/opentrons/issues/6100)) ([2a22f59](https://github.com/Opentrons/opentrons/commit/2a22f59))
* **components:** add primitive btns and fix useHover on disabled buttons ([#5972](https://github.com/Opentrons/opentrons/issues/5972)) ([57cc219](https://github.com/Opentrons/opentrons/commit/57cc219))
* **labware-library:** avoid adding info to 'group' field in LC ([#5975](https://github.com/Opentrons/opentrons/issues/5975)) ([c6f1fa9](https://github.com/Opentrons/opentrons/commit/c6f1fa9)), closes [#5801](https://github.com/Opentrons/opentrons/issues/5801)
* **labware-library:** make LC test protocol go to bottom last ([#5958](https://github.com/Opentrons/opentrons/issues/5958)) ([b1bc683](https://github.com/Opentrons/opentrons/commit/b1bc683)), closes [#4625](https://github.com/Opentrons/opentrons/issues/4625)
* **protocol-designer:** add air gap command creator ([#6179](https://github.com/Opentrons/opentrons/issues/6179)) ([db071cb](https://github.com/Opentrons/opentrons/commit/db071cb)), closes [#6053](https://github.com/Opentrons/opentrons/issues/6053)
* **protocol-designer:** add air gap form validation ([#6226](https://github.com/Opentrons/opentrons/issues/6226)) ([46958b3](https://github.com/Opentrons/opentrons/commit/46958b3))
* **protocol-designer:** add aspirate delay commands ([#6290](https://github.com/Opentrons/opentrons/issues/6290)) ([08ad8db](https://github.com/Opentrons/opentrons/commit/08ad8db)), closes [#6019](https://github.com/Opentrons/opentrons/issues/6019)
* **protocol-designer:** add commands for delay after dispense ([#6294](https://github.com/Opentrons/opentrons/issues/6294)) ([d94bb47](https://github.com/Opentrons/opentrons/commit/d94bb47)), closes [#6019](https://github.com/Opentrons/opentrons/issues/6019)
* **protocol-designer:** Add delay field validation ([#6145](https://github.com/Opentrons/opentrons/issues/6145)) ([e26ca78](https://github.com/Opentrons/opentrons/commit/e26ca78)), closes [#6008](https://github.com/Opentrons/opentrons/issues/6008) [#6108](https://github.com/Opentrons/opentrons/issues/6108)
* **protocol-designer:** add delay form fields ([#6085](https://github.com/Opentrons/opentrons/issues/6085)) ([eeb56cc](https://github.com/Opentrons/opentrons/commit/eeb56cc))
* **protocol-designer:** add FF for air gap + delay ([#6048](https://github.com/Opentrons/opentrons/issues/6048)) ([5fd5f4d](https://github.com/Opentrons/opentrons/commit/5fd5f4d)), closes [#6005](https://github.com/Opentrons/opentrons/issues/6005)
* **protocol-designer:** add form level errors for missing TC block + lid temperatures ([da8bb24](https://github.com/Opentrons/opentrons/commit/da8bb24)), closes [#6114](https://github.com/Opentrons/opentrons/issues/6114)
* **protocol-designer:** add initial step to new tc cycles ([#6092](https://github.com/Opentrons/opentrons/issues/6092)) ([ee0d583](https://github.com/Opentrons/opentrons/commit/ee0d583)), closes [#6064](https://github.com/Opentrons/opentrons/issues/6064)
* **protocol-designer:** add move to slot command creator ([#6261](https://github.com/Opentrons/opentrons/issues/6261)) ([fd45dd7](https://github.com/Opentrons/opentrons/commit/fd45dd7)), closes [#6221](https://github.com/Opentrons/opentrons/issues/6221)
* **protocol-designer:** add moveToWell command creator ([#6244](https://github.com/Opentrons/opentrons/issues/6244)) ([762a956](https://github.com/Opentrons/opentrons/commit/762a956)), closes [#6240](https://github.com/Opentrons/opentrons/issues/6240)
* **protocol-designer:** add new air gap UI fields ([#6190](https://github.com/Opentrons/opentrons/issues/6190)) ([c07682f](https://github.com/Opentrons/opentrons/commit/c07682f)), closes [#6005](https://github.com/Opentrons/opentrons/issues/6005)
* **protocol-designer:** add profile button tooltips ([#6076](https://github.com/Opentrons/opentrons/issues/6076)) ([13259ff](https://github.com/Opentrons/opentrons/commit/13259ff)), closes [#6062](https://github.com/Opentrons/opentrons/issues/6062)
* **protocol-designer:** add profile step numbers to TC side bar ([#6099](https://github.com/Opentrons/opentrons/issues/6099)) ([8bd03f8](https://github.com/Opentrons/opentrons/commit/8bd03f8)), closes [#6059](https://github.com/Opentrons/opentrons/issues/6059)
* **protocol-designer:** air gap default value ([#6218](https://github.com/Opentrons/opentrons/issues/6218)) ([1fb272d](https://github.com/Opentrons/opentrons/commit/1fb272d)), closes [#6017](https://github.com/Opentrons/opentrons/issues/6017)
* **protocol-designer:** change default lid open state to false ([#6129](https://github.com/Opentrons/opentrons/issues/6129)) ([6b5acce](https://github.com/Opentrons/opentrons/commit/6b5acce)), closes [#6128](https://github.com/Opentrons/opentrons/issues/6128)
* **protocol-designer:** do not default select TC state form ([#6158](https://github.com/Opentrons/opentrons/issues/6158)) ([2444f07](https://github.com/Opentrons/opentrons/commit/2444f07)), closes [#6097](https://github.com/Opentrons/opentrons/issues/6097)
* **protocol-designer:** do not display calibration blocks ([#6118](https://github.com/Opentrons/opentrons/issues/6118)) ([081ac74](https://github.com/Opentrons/opentrons/commit/081ac74)), closes [#6117](https://github.com/Opentrons/opentrons/issues/6117)
* **protocol-designer:** offload timeline computation from UI thread ([#5917](https://github.com/Opentrons/opentrons/issues/5917)) ([7bd381b](https://github.com/Opentrons/opentrons/commit/7bd381b))
* **protocol-designer:** only show one labware name in sidebar tooltip ([#6088](https://github.com/Opentrons/opentrons/issues/6088)) ([d697b35](https://github.com/Opentrons/opentrons/commit/d697b35))
* **protocol-designer:** promote thermocycler to full feature ([#5921](https://github.com/Opentrons/opentrons/issues/5921)) ([9681aca](https://github.com/Opentrons/opentrons/commit/9681aca)), closes [#5889](https://github.com/Opentrons/opentrons/issues/5889)
* **protocol-designer:** replace computing overlay with wait cursor ([#6150](https://github.com/Opentrons/opentrons/issues/6150)) ([e16e05e](https://github.com/Opentrons/opentrons/commit/e16e05e))
* **protocol-designer:** show confirm modal before losing form's unsaved changes ([#6040](https://github.com/Opentrons/opentrons/issues/6040)) ([e32cc01](https://github.com/Opentrons/opentrons/commit/e32cc01)), closes [#5472](https://github.com/Opentrons/opentrons/issues/5472) [#6042](https://github.com/Opentrons/opentrons/issues/6042)
* **protocol-designer:** update tc profile button copy ([#6094](https://github.com/Opentrons/opentrons/issues/6094)) ([7f98f1f](https://github.com/Opentrons/opentrons/commit/7f98f1f)), closes [#6065](https://github.com/Opentrons/opentrons/issues/6065)
* **protocol-designer:** warn before deleting cycle; update confirm modals ([#6101](https://github.com/Opentrons/opentrons/issues/6101)) ([33ae860](https://github.com/Opentrons/opentrons/commit/33ae860)), closes [#6081](https://github.com/Opentrons/opentrons/issues/6081) [#6096](https://github.com/Opentrons/opentrons/issues/6096)
* **robot-server:** Add endpoints to access labware calibration ([#5811](https://github.com/Opentrons/opentrons/issues/5811)) ([6e24726](https://github.com/Opentrons/opentrons/commit/6e24726))
* **robot-server:** add started_at and completed_at to command response. ([#5940](https://github.com/Opentrons/opentrons/issues/5940)) ([b626f67](https://github.com/Opentrons/opentrons/commit/b626f67)), closes [#5828](https://github.com/Opentrons/opentrons/issues/5828)
* **robot-server:** protocol manager and api ([#6182](https://github.com/Opentrons/opentrons/issues/6182)) ([f296bb4](https://github.com/Opentrons/opentrons/commit/f296bb4)), closes [#6071](https://github.com/Opentrons/opentrons/issues/6071)
* **robot-server:** return created_at in session response ([#6011](https://github.com/Opentrons/opentrons/issues/6011)) ([f5865be](https://github.com/Opentrons/opentrons/commit/f5865be))
* **robot-server:** Robot server command namespaces ([#6098](https://github.com/Opentrons/opentrons/issues/6098)) ([73152e3](https://github.com/Opentrons/opentrons/commit/73152e3)), closes [#6089](https://github.com/Opentrons/opentrons/issues/6089)
* **robot-server:** Robot server default session ([#5967](https://github.com/Opentrons/opentrons/issues/5967)) ([754057b](https://github.com/Opentrons/opentrons/commit/754057b)), closes [#5768](https://github.com/Opentrons/opentrons/issues/5768)
* **robot-server:** Robot server protocol session mockup ([#6215](https://github.com/Opentrons/opentrons/issues/6215)) ([d137be0](https://github.com/Opentrons/opentrons/commit/d137be0)), closes [#6072](https://github.com/Opentrons/opentrons/issues/6072)
* **robot-server:** Session create parameters ([#6144](https://github.com/Opentrons/opentrons/issues/6144)) ([ee1b504](https://github.com/Opentrons/opentrons/commit/ee1b504)), closes [#6149](https://github.com/Opentrons/opentrons/issues/6149)
* **robot-server, api:** async hardware initialization after HTTP server starts. ([#6116](https://github.com/Opentrons/opentrons/issues/6116)) ([b4eb2ca](https://github.com/Opentrons/opentrons/commit/b4eb2ca)), closes [#6109](https://github.com/Opentrons/opentrons/issues/6109)
* **shared-data:** add labware definitions for calibration block ([#5993](https://github.com/Opentrons/opentrons/issues/5993)) ([f56e2f4](https://github.com/Opentrons/opentrons/commit/f56e2f4)), closes [#5618](https://github.com/Opentrons/opentrons/issues/5618)





# [3.19.0](https://github.com/opentrons/opentrons/compare/v3.18.1...v3.19.0) (2020-06-29)


### Bug Fixes

* **app:** fix clunky text wrapping for multi tip pick up in cal check ([#6026](https://github.com/opentrons/opentrons/issues/6026)) ([76edd1d](https://github.com/opentrons/opentrons/commit/76edd1d))
* **app:** calcheck: content fixups ([#5989](https://github.com/opentrons/opentrons/issues/5989)) ([21b5e4e](https://github.com/opentrons/opentrons/commit/21b5e4e))
* **app:** calcheck: fix display of bad deck transform ([#5988](https://github.com/opentrons/opentrons/issues/5988)) ([22b15ff](https://github.com/opentrons/opentrons/commit/22b15ff))
* **app:** replace wrong assets for xy multi cal check ([#5996](https://github.com/opentrons/opentrons/issues/5996)) ([072062d](https://github.com/opentrons/opentrons/commit/072062d))
* **api:** catch factory tests up to gpio changes ([#5747](https://github.com/opentrons/opentrons/issues/5747)) ([751d9a4](https://github.com/opentrons/opentrons/commit/751d9a4))
* **api:** convert extra seconds to minutes in delay command ([#5755](https://github.com/opentrons/opentrons/issues/5755)) ([df26e07](https://github.com/opentrons/opentrons/commit/df26e07)), closes [#5414](https://github.com/opentrons/opentrons/issues/5414)
* **api:** disallow calling Session._run while protocol is running. ([#5831](https://github.com/opentrons/opentrons/issues/5831)) ([fce1f79](https://github.com/opentrons/opentrons/commit/fce1f79)), closes [#5239](https://github.com/opentrons/opentrons/issues/5239)
* **api:** do not allow v1 imports in v2 protocols ([#5859](https://github.com/opentrons/opentrons/issues/5859)) ([7ed945d](https://github.com/opentrons/opentrons/commit/7ed945d)), closes [#5852](https://github.com/opentrons/opentrons/issues/5852)
* **api:** Enable audio on GPIO startup ([#5787](https://github.com/opentrons/opentrons/issues/5787)) ([907401c](https://github.com/opentrons/opentrons/commit/907401c)), closes [/github.com/Opentrons/opentrons/blob/751d9a402fa5d1f936df43ed12fd7387be23237f/api/src/opentrons/tools/factory_test.py#L217](https://github.com//github.com/Opentrons/opentrons/blob/751d9a402fa5d1f936df43ed12fd7387be23237f/api/src/opentrons/tools/factory_test.py/issues/L217)
* **api:** Fix failing test from edge due to kwarg check ([#5961](https://github.com/opentrons/opentrons/issues/5961)) ([ef70a7c](https://github.com/opentrons/opentrons/commit/ef70a7c))
* **api:** Fix return tip behavior in check session ([#5772](https://github.com/opentrons/opentrons/issues/5772)) ([34ef09c](https://github.com/opentrons/opentrons/commit/34ef09c))
* **api:** fix transform type logic in calibration check session ([#5951](https://github.com/opentrons/opentrons/issues/5951)) ([bcb566e](https://github.com/opentrons/opentrons/commit/bcb566e))
* **api:** prevent thermocycler wait_for_temp() from exiting prematurely ([#5807](https://github.com/opentrons/opentrons/issues/5807)) ([7720b28](https://github.com/opentrons/opentrons/commit/7720b28)), closes [#5602](https://github.com/opentrons/opentrons/issues/5602)
* **api:** return rail lights to original state post cal-check ([#5861](https://github.com/opentrons/opentrons/issues/5861)) ([3a6cc41](https://github.com/opentrons/opentrons/commit/3a6cc41))
* **api:** Simulate protocols with a realistic deck transform ([#5908](https://github.com/opentrons/opentrons/issues/5908)) ([03757d9](https://github.com/opentrons/opentrons/commit/03757d9))
* **app:** clear <input> value after robot update file select ([#5789](https://github.com/opentrons/opentrons/issues/5789)) ([62372b0](https://github.com/opentrons/opentrons/commit/62372b0)), closes [#5781](https://github.com/opentrons/opentrons/issues/5781)
* **app:** delete local records of session if id not found  ([#5863](https://github.com/opentrons/opentrons/issues/5863)) ([9f8adfb](https://github.com/opentrons/opentrons/commit/9f8adfb))
* **app:** fix cal check tiprack images at large window sizes ([#5841](https://github.com/opentrons/opentrons/issues/5841)) ([065ce49](https://github.com/opentrons/opentrons/commit/065ce49))
* **app:** fix up calibration check copy ([#5779](https://github.com/opentrons/opentrons/issues/5779)) ([57b9ca8](https://github.com/opentrons/opentrons/commit/57b9ca8))
* **app:** interpolate session type into session exit event name ([#5804](https://github.com/opentrons/opentrons/issues/5804)) ([bee8cb0](https://github.com/opentrons/opentrons/commit/bee8cb0))
* **app:** restart MDNS browser when network interfaces change ([#5933](https://github.com/opentrons/opentrons/issues/5933)) ([c9c6dc8](https://github.com/opentrons/opentrons/commit/c9c6dc8)), closes [#5343](https://github.com/opentrons/opentrons/issues/5343)
* **app:** use troubleshooting link when calcheck fails at tip pickup ([#5952](https://github.com/opentrons/opentrons/issues/5952)) ([474c98f](https://github.com/opentrons/opentrons/commit/474c98f))
* **app-shell:** clean up old robot update files ([#5892](https://github.com/opentrons/opentrons/issues/5892)) ([1e2b815](https://github.com/opentrons/opentrons/commit/1e2b815)), closes [#4667](https://github.com/opentrons/opentrons/issues/4667)
* **build:** allow test pypi uploads to fail again ([#5849](https://github.com/opentrons/opentrons/issues/5849)) ([61b5eba](https://github.com/opentrons/opentrons/commit/61b5eba))
* **build:** missing semicolon in shared-data/python/Makefile ([#5901](https://github.com/opentrons/opentrons/issues/5901)) ([27a8751](https://github.com/opentrons/opentrons/commit/27a8751))
* **protocol-designer:** Add scroll to top on export modal display ([#5744](https://github.com/opentrons/opentrons/issues/5744)) ([f797cdc](https://github.com/opentrons/opentrons/commit/f797cdc)), closes [#5422](https://github.com/opentrons/opentrons/issues/5422)
* **protocol-designer:** auto add TC module id to TC steps ([#5944](https://github.com/opentrons/opentrons/issues/5944)) ([cf70c98](https://github.com/opentrons/opentrons/commit/cf70c98)), closes [#5942](https://github.com/opentrons/opentrons/issues/5942)
* **protocol-designer:** Correct tc profile fields sizing ([#5870](https://github.com/opentrons/opentrons/issues/5870)) ([2ac185b](https://github.com/opentrons/opentrons/commit/2ac185b)), closes [#5851](https://github.com/opentrons/opentrons/issues/5851)
* **protocol-designer:** ensure all TC set temps + runProfile are awaited ([#5910](https://github.com/opentrons/opentrons/issues/5910)) ([644375c](https://github.com/opentrons/opentrons/commit/644375c))
* **protocol-designer:** ensure lid is closed before calling TC runProfile ([#5918](https://github.com/opentrons/opentrons/issues/5918)) ([19c2479](https://github.com/opentrons/opentrons/commit/19c2479))
* **protocol-designer:** Lighten TC hover overlay ([#5939](https://github.com/opentrons/opentrons/issues/5939)) ([3204f6c](https://github.com/opentrons/opentrons/commit/3204f6c)), closes [#5912](https://github.com/opentrons/opentrons/issues/5912)
* **protocol-designer:** Remove errant p tag ([#5786](https://github.com/opentrons/opentrons/issues/5786)) ([6695bd3](https://github.com/opentrons/opentrons/commit/6695bd3))
* **protocol-designer:** Update profile step fields alignment ([#5937](https://github.com/opentrons/opentrons/issues/5937)) ([5ab095d](https://github.com/opentrons/opentrons/commit/5ab095d))
* **robot-server:** make sure fastapi validation errors are properly documented ([#5748](https://github.com/opentrons/opentrons/issues/5748)) ([dbecbfc](https://github.com/opentrons/opentrons/commit/dbecbfc))
* **robot-server:** preserve newlines in text logs ([#5850](https://github.com/opentrons/opentrons/issues/5850)) ([6420b5f](https://github.com/opentrons/opentrons/commit/6420b5f)), closes [#5846](https://github.com/opentrons/opentrons/issues/5846)
* **robot-server:** type mismatch in SerialCommand args ([#5883](https://github.com/opentrons/opentrons/issues/5883)) ([2134b97](https://github.com/opentrons/opentrons/commit/2134b97))
* **robot-server, api:** reject commands while robot is moving ([#5878](https://github.com/opentrons/opentrons/issues/5878)) ([d8c63d7](https://github.com/opentrons/opentrons/commit/d8c63d7)), closes [#5810](https://github.com/opentrons/opentrons/issues/5810)
* **scripts:** make python_build_utils 2.7 compatible again ([#5886](https://github.com/opentrons/opentrons/issues/5886)) ([bd9e6b7](https://github.com/opentrons/opentrons/commit/bd9e6b7))
* **shared-data:** recursively specify subpackages ([#5844](https://github.com/opentrons/opentrons/issues/5844)) ([3ccbbea](https://github.com/opentrons/opentrons/commit/3ccbbea))
* fix makefile refactor for push tasks ([#5773](https://github.com/opentrons/opentrons/issues/5773)) ([db743bc](https://github.com/opentrons/opentrons/commit/db743bc))
* **api:** catch factory tests up to gpio changes ([#5747](https://github.com/opentrons/opentrons/issues/5747)) ([751d9a4](https://github.com/opentrons/opentrons/commit/751d9a4))
* **api:** convert extra seconds to minutes in delay command ([#5755](https://github.com/opentrons/opentrons/issues/5755)) ([df26e07](https://github.com/opentrons/opentrons/commit/df26e07)), closes [#5414](https://github.com/opentrons/opentrons/issues/5414)
* **api:** do not allow v1 imports in v2 protocols ([#5859](https://github.com/opentrons/opentrons/issues/5859)) ([7ed945d](https://github.com/opentrons/opentrons/commit/7ed945d)), closes [#5852](https://github.com/opentrons/opentrons/issues/5852)
* **api:** Enable audio on GPIO startup ([#5787](https://github.com/opentrons/opentrons/issues/5787)) ([907401c](https://github.com/opentrons/opentrons/commit/907401c)), closes [/github.com/Opentrons/opentrons/blob/751d9a402fa5d1f936df43ed12fd7387be23237f/api/src/opentrons/tools/factory_test.py#L217](https://github.com//github.com/Opentrons/opentrons/blob/751d9a402fa5d1f936df43ed12fd7387be23237f/api/src/opentrons/tools/factory_test.py/issues/L217)
* **build:** allow test pypi uploads to fail again ([#5849](https://github.com/opentrons/opentrons/issues/5849)) ([61b5eba](https://github.com/opentrons/opentrons/commit/61b5eba))
* **protocol-designer:** Add scroll to top on export modal display ([#5744](https://github.com/opentrons/opentrons/issues/5744)) ([f797cdc](https://github.com/opentrons/opentrons/commit/f797cdc)), closes [#5422](https://github.com/opentrons/opentrons/issues/5422)




### Features

* **api:** add warning when a wrong tiprack is used for the pipette in the protocol ([#5997](https://github.com/opentrons/opentrons/issues/5997)) ([24b7756](https://github.com/opentrons/opentrons/commit/24b7756))
* **api:** add info to debug warning on how IS_ROBOT is determined ([#5783](https://github.com/opentrons/opentrons/issues/5783)) ([fbbf1b6](https://github.com/opentrons/opentrons/commit/fbbf1b6))
* **api:** add skeleton state machine instance for tip length calibration ([#5805](https://github.com/opentrons/opentrons/issues/5805)) ([dd36d53](https://github.com/opentrons/opentrons/commit/dd36d53)), closes [#5605](https://github.com/opentrons/opentrons/issues/5605)
* **api:** define data architecture for tip length calibration in v2 ([#5820](https://github.com/opentrons/opentrons/issues/5820)) ([f149cb6](https://github.com/opentrons/opentrons/commit/f149cb6)), closes [#5606](https://github.com/opentrons/opentrons/issues/5606)
* **api, app:** Check Robot Deck Transform ([#5845](https://github.com/opentrons/opentrons/issues/5845)) ([ed67383](https://github.com/opentrons/opentrons/commit/ed67383))
* **api, app:** implement automatic door safety stop feature ([#5706](https://github.com/opentrons/opentrons/issues/5706)) ([ad94d07](https://github.com/opentrons/opentrons/commit/ad94d07)), closes [#2820](https://github.com/opentrons/opentrons/issues/2820) [#2752](https://github.com/opentrons/opentrons/issues/2752)
* **api, docs:** add GPIO rail lights and door control to ProtocolContext ([#5862](https://github.com/opentrons/opentrons/issues/5862)) ([4d5d89f](https://github.com/opentrons/opentrons/commit/4d5d89f)), closes [#5775](https://github.com/opentrons/opentrons/issues/5775) [#5703](https://github.com/opentrons/opentrons/issues/5703)
* **app:** add network interface collection to system-info ([#5764](https://github.com/opentrons/opentrons/issues/5764)) ([7d64efa](https://github.com/opentrons/opentrons/commit/7d64efa)), closes [#5397](https://github.com/opentrons/opentrons/issues/5397)
* **app:** introduce Robot Calibration Check tool ([#5960](https://github.com/opentrons/opentrons/issues/5960)) ([bc7d5d5](https://github.com/opentrons/opentrons/commit/bc7d5d5))
* **app, app-shell:** add ability to disable discovery cache ([#5759](https://github.com/opentrons/opentrons/issues/5759)) ([5ad57d9](https://github.com/opentrons/opentrons/commit/5ad57d9))
* **components:** add position props to primitive components ([#5926](https://github.com/opentrons/opentrons/issues/5926)) ([9b0a666](https://github.com/opentrons/opentrons/commit/9b0a666))
* **components:** add useConditionalConfirm hook to shared components ([#5735](https://github.com/opentrons/opentrons/issues/5735)) ([8e5248f](https://github.com/opentrons/opentrons/commit/8e5248f))
* **js:** update lodash to 4.17.15 ([#5788](https://github.com/opentrons/opentrons/issues/5788)) ([5a145dc](https://github.com/opentrons/opentrons/commit/5a145dc))
* **labware-library:** use loadname not displayname for LC file ([#5945](https://github.com/opentrons/opentrons/issues/5945)) ([3869c63](https://github.com/opentrons/opentrons/commit/3869c63)), closes [#5722](https://github.com/opentrons/opentrons/issues/5722)
* **labware-library:** use slot 2 instead of 3 in LC test protocol ([#5950](https://github.com/opentrons/opentrons/issues/5950)) ([fbd1506](https://github.com/opentrons/opentrons/commit/fbd1506)), closes [#5019](https://github.com/opentrons/opentrons/issues/5019)
* **protocol-designer:** add atomic thermocyclerRunProfile command creator ([#5843](https://github.com/opentrons/opentrons/issues/5843)) ([e20bbda](https://github.com/opentrons/opentrons/commit/e20bbda)), closes [#5839](https://github.com/opentrons/opentrons/issues/5839)
* **protocol-designer:** Add ending hold state fields to TC profile ([#5750](https://github.com/opentrons/opentrons/issues/5750)) ([d388237](https://github.com/opentrons/opentrons/commit/d388237)), closes [#5519](https://github.com/opentrons/opentrons/issues/5519)
* **protocol-designer:** add ending hold to TC profile substeps ([#5884](https://github.com/opentrons/opentrons/issues/5884)) ([edcfadc](https://github.com/opentrons/opentrons/commit/edcfadc)), closes [#5522](https://github.com/opentrons/opentrons/issues/5522)
* **protocol-designer:** Add number maskers to tc duration fields ([#5848](https://github.com/opentrons/opentrons/issues/5848)) ([e7523a8](https://github.com/opentrons/opentrons/commit/e7523a8)), closes [#5737](https://github.com/opentrons/opentrons/issues/5737)
* **protocol-designer:** Add profile step numbers and tooltips ([#5819](https://github.com/opentrons/opentrons/issues/5819)) ([4cfc25d](https://github.com/opentrons/opentrons/commit/4cfc25d)), closes [#5515](https://github.com/opentrons/opentrons/issues/5515)
* **protocol-designer:** Add profiles settings to TC profile form ([#5771](https://github.com/opentrons/opentrons/issues/5771)) ([ce484cb](https://github.com/opentrons/opentrons/commit/ce484cb))
* **protocol-designer:** Add step grouping and styles for tc cycles ([#5836](https://github.com/opentrons/opentrons/issues/5836)) ([f335d77](https://github.com/opentrons/opentrons/commit/f335d77)), closes [#5516](https://github.com/opentrons/opentrons/issues/5516) [#5517](https://github.com/opentrons/opentrons/issues/5517) [#5518](https://github.com/opentrons/opentrons/issues/5518)
* **protocol-designer:** add support for TC cycles ([#5809](https://github.com/opentrons/opentrons/issues/5809)) ([5cb55bc](https://github.com/opentrons/opentrons/commit/5cb55bc)), closes [#5516](https://github.com/opentrons/opentrons/issues/5516) [#5517](https://github.com/opentrons/opentrons/issues/5517) [#5518](https://github.com/opentrons/opentrons/issues/5518)
* **protocol-designer:** add TC announcement modal ([#5898](https://github.com/opentrons/opentrons/issues/5898)) ([e5894c5](https://github.com/opentrons/opentrons/commit/e5894c5)), closes [#5887](https://github.com/opentrons/opentrons/issues/5887)
* **protocol-designer:** add TC profile deck visualization ([#5896](https://github.com/opentrons/opentrons/issues/5896)) ([47b4329](https://github.com/opentrons/opentrons/commit/47b4329)), closes [#5523](https://github.com/opentrons/opentrons/issues/5523)
* **protocol-designer:** add TC profile state updater ([#5856](https://github.com/opentrons/opentrons/issues/5856)) ([83eff59](https://github.com/opentrons/opentrons/commit/83eff59)), closes [#5837](https://github.com/opentrons/opentrons/issues/5837)
* **protocol-designer:** Add validation to profile settings and end hold ([#5802](https://github.com/opentrons/opentrons/issues/5802)) ([c303e38](https://github.com/opentrons/opentrons/commit/c303e38)), closes [#5520](https://github.com/opentrons/opentrons/issues/5520) [#5753](https://github.com/opentrons/opentrons/issues/5753)
* **protocol-designer:** create barebones setup for TC profile steps ([#5751](https://github.com/opentrons/opentrons/issues/5751)) ([a2c6ca6](https://github.com/opentrons/opentrons/commit/a2c6ca6))
* **protocol-designer:** create barebones TC profile substeps ([#5865](https://github.com/opentrons/opentrons/issues/5865)) ([ab29038](https://github.com/opentrons/opentrons/commit/ab29038)), closes [#5522](https://github.com/opentrons/opentrons/issues/5522)
* **protocol-designer:** disable save for dynamic field errors ([#5769](https://github.com/opentrons/opentrons/issues/5769)) ([9a36b87](https://github.com/opentrons/opentrons/commit/9a36b87)), closes [#5737](https://github.com/opentrons/opentrons/issues/5737)
* **protocol-designer:** finish form-level errors for dynamic fields ([#5818](https://github.com/opentrons/opentrons/issues/5818)) ([9ca9911](https://github.com/opentrons/opentrons/commit/9ca9911)), closes [#5814](https://github.com/opentrons/opentrons/issues/5814)
* **protocol-designer:** implement form-level errors for dynamic profile fields ([#5784](https://github.com/opentrons/opentrons/issues/5784)) ([56588f0](https://github.com/opentrons/opentrons/commit/56588f0)), closes [#5737](https://github.com/opentrons/opentrons/issues/5737)
* **protocol-designer:** implement formToArgs for TC profile ([#5842](https://github.com/opentrons/opentrons/issues/5842)) ([4b3e008](https://github.com/opentrons/opentrons/commit/4b3e008)), closes [#5838](https://github.com/opentrons/opentrons/issues/5838)
* **protocol-designer:** implement thermocyclerProfileStep CC ([#5858](https://github.com/opentrons/opentrons/issues/5858)) ([cc3be8e](https://github.com/opentrons/opentrons/commit/cc3be8e)), closes [#5835](https://github.com/opentrons/opentrons/issues/5835)
* **protocol-designer:** replace v4 protocol export hint ([#5897](https://github.com/opentrons/opentrons/issues/5897)) ([179f638](https://github.com/opentrons/opentrons/commit/179f638)), closes [#5888](https://github.com/opentrons/opentrons/issues/5888)
* **protocol-designer:** Reset TC form on form type toggle ([#5871](https://github.com/opentrons/opentrons/issues/5871)) ([8192afd](https://github.com/opentrons/opentrons/commit/8192afd)), closes [#5754](https://github.com/opentrons/opentrons/issues/5754)
* **protocol-designer:** reverse multi channel substep arrows in sidebar ([#5931](https://github.com/opentrons/opentrons/issues/5931)) ([ade4cca](https://github.com/opentrons/opentrons/commit/ade4cca))
* **protocol-designer:** Style dynamic step fields ([#5795](https://github.com/opentrons/opentrons/issues/5795)) ([eb950b6](https://github.com/opentrons/opentrons/commit/eb950b6)), closes [#5513](https://github.com/opentrons/opentrons/issues/5513)
* **protocol-designer:** style TC profile substeps ([#5876](https://github.com/opentrons/opentrons/issues/5876)) ([615866c](https://github.com/opentrons/opentrons/commit/615866c)), closes [#5522](https://github.com/opentrons/opentrons/issues/5522)
* **robot-server:** Add skeleton of tip calibration session including integration test.' ([#5868](https://github.com/opentrons/opentrons/issues/5868)) ([c66f8ae](https://github.com/opentrons/opentrons/commit/c66f8ae))
* **robot-server:** Mock up of access control models and router. ([#5749](https://github.com/opentrons/opentrons/issues/5749)) ([05348ec](https://github.com/opentrons/opentrons/commit/05348ec)), closes [#5746](https://github.com/opentrons/opentrons/issues/5746)
* **robot-server:** session manager ([#5796](https://github.com/opentrons/opentrons/issues/5796)) ([c1fd7e8](https://github.com/opentrons/opentrons/commit/c1fd7e8)), closes [#5763](https://github.com/opentrons/opentrons/issues/5763) [#5765](https://github.com/opentrons/opentrons/issues/5765)
* **test:** add button names to edit pipette, swap pipette, and continue to liquids ([#5826](https://github.com/opentrons/opentrons/issues/5826)) ([cc3ba61](https://github.com/opentrons/opentrons/commit/cc3ba61)), closes [#5724](https://github.com/opentrons/opentrons/issues/5724)
* **test:** add test id to Pipette Select component ([#5791](https://github.com/opentrons/opentrons/issues/5791)) ([845b508](https://github.com/opentrons/opentrons/commit/845b508)), closes [#5724](https://github.com/opentrons/opentrons/issues/5724)



### Features

* **api:** add info to debug warning on how IS_ROBOT is determined ([#5783](https://github.com/opentrons/opentrons/issues/5783)) ([fbbf1b6](https://github.com/opentrons/opentrons/commit/fbbf1b6))
* **api:** add skeleton state machine instance for tip length calibration ([#5805](https://github.com/opentrons/opentrons/issues/5805)) ([dd36d53](https://github.com/opentrons/opentrons/commit/dd36d53)), closes [#5605](https://github.com/opentrons/opentrons/issues/5605)
* **api, app:** implement automatic door safety stop feature ([#5706](https://github.com/opentrons/opentrons/issues/5706)) ([ad94d07](https://github.com/opentrons/opentrons/commit/ad94d07)), closes [#2820](https://github.com/opentrons/opentrons/issues/2820) [#2752](https://github.com/opentrons/opentrons/issues/2752)
* **app:** add network interface collection to system-info ([#5764](https://github.com/opentrons/opentrons/issues/5764)) ([7d64efa](https://github.com/opentrons/opentrons/commit/7d64efa)), closes [#5397](https://github.com/opentrons/opentrons/issues/5397)
* **app, app-shell:** add ability to disable discovery cache ([#5759](https://github.com/opentrons/opentrons/issues/5759)) ([5ad57d9](https://github.com/opentrons/opentrons/commit/5ad57d9))
* **components:** add useConditionalConfirm hook to shared components ([#5735](https://github.com/opentrons/opentrons/issues/5735)) ([8e5248f](https://github.com/opentrons/opentrons/commit/8e5248f))
* **js:** update lodash to 4.17.15 ([#5788](https://github.com/opentrons/opentrons/issues/5788)) ([5a145dc](https://github.com/opentrons/opentrons/commit/5a145dc))
* **protocol-designer:** add atomic thermocyclerRunProfile command creator ([#5843](https://github.com/opentrons/opentrons/issues/5843)) ([e20bbda](https://github.com/opentrons/opentrons/commit/e20bbda)), closes [#5839](https://github.com/opentrons/opentrons/issues/5839)
* **protocol-designer:** Add ending hold state fields to TC profile ([#5750](https://github.com/opentrons/opentrons/issues/5750)) ([d388237](https://github.com/opentrons/opentrons/commit/d388237)), closes [#5519](https://github.com/opentrons/opentrons/issues/5519)
* **protocol-designer:** Add profile step numbers and tooltips ([#5819](https://github.com/opentrons/opentrons/issues/5819)) ([4cfc25d](https://github.com/opentrons/opentrons/commit/4cfc25d)), closes [#5515](https://github.com/opentrons/opentrons/issues/5515)
* **protocol-designer:** Add profiles settings to TC profile form ([#5771](https://github.com/opentrons/opentrons/issues/5771)) ([ce484cb](https://github.com/opentrons/opentrons/commit/ce484cb))
* **protocol-designer:** Add step grouping and styles for tc cycles ([#5836](https://github.com/opentrons/opentrons/issues/5836)) ([f335d77](https://github.com/opentrons/opentrons/commit/f335d77)), closes [#5516](https://github.com/opentrons/opentrons/issues/5516) [#5517](https://github.com/opentrons/opentrons/issues/5517) [#5518](https://github.com/opentrons/opentrons/issues/5518)
* **protocol-designer:** add support for TC cycles ([#5809](https://github.com/opentrons/opentrons/issues/5809)) ([5cb55bc](https://github.com/opentrons/opentrons/commit/5cb55bc)), closes [#5516](https://github.com/opentrons/opentrons/issues/5516) [#5517](https://github.com/opentrons/opentrons/issues/5517) [#5518](https://github.com/opentrons/opentrons/issues/5518)
* **protocol-designer:** Add validation to profile settings and end hold ([#5802](https://github.com/opentrons/opentrons/issues/5802)) ([c303e38](https://github.com/opentrons/opentrons/commit/c303e38)), closes [#5520](https://github.com/opentrons/opentrons/issues/5520) [#5753](https://github.com/opentrons/opentrons/issues/5753)
* **protocol-designer:** create barebones setup for TC profile steps ([#5751](https://github.com/opentrons/opentrons/issues/5751)) ([a2c6ca6](https://github.com/opentrons/opentrons/commit/a2c6ca6))
* **protocol-designer:** disable save for dynamic field errors ([#5769](https://github.com/opentrons/opentrons/issues/5769)) ([9a36b87](https://github.com/opentrons/opentrons/commit/9a36b87)), closes [#5737](https://github.com/opentrons/opentrons/issues/5737)
* **protocol-designer:** finish form-level errors for dynamic fields ([#5818](https://github.com/opentrons/opentrons/issues/5818)) ([9ca9911](https://github.com/opentrons/opentrons/commit/9ca9911)), closes [#5814](https://github.com/opentrons/opentrons/issues/5814)
* **protocol-designer:** implement form-level errors for dynamic profile fields ([#5784](https://github.com/opentrons/opentrons/issues/5784)) ([56588f0](https://github.com/opentrons/opentrons/commit/56588f0)), closes [#5737](https://github.com/opentrons/opentrons/issues/5737)
* **protocol-designer:** implement formToArgs for TC profile ([#5842](https://github.com/opentrons/opentrons/issues/5842)) ([4b3e008](https://github.com/opentrons/opentrons/commit/4b3e008)), closes [#5838](https://github.com/opentrons/opentrons/issues/5838)
* **protocol-designer:** Style dynamic step fields ([#5795](https://github.com/opentrons/opentrons/issues/5795)) ([eb950b6](https://github.com/opentrons/opentrons/commit/eb950b6)), closes [#5513](https://github.com/opentrons/opentrons/issues/5513)
* **robot-server:** Mock up of access control models and router. ([#5749](https://github.com/opentrons/opentrons/issues/5749)) ([05348ec](https://github.com/opentrons/opentrons/commit/05348ec)), closes [#5746](https://github.com/opentrons/opentrons/issues/5746)
* **robot-server:** session manager ([#5796](https://github.com/opentrons/opentrons/issues/5796)) ([c1fd7e8](https://github.com/opentrons/opentrons/commit/c1fd7e8)), closes [#5763](https://github.com/opentrons/opentrons/issues/5763) [#5765](https://github.com/opentrons/opentrons/issues/5765)
* **test:** add button names to edit pipette, swap pipette, and continue to liquids ([#5826](https://github.com/opentrons/opentrons/issues/5826)) ([cc3ba61](https://github.com/opentrons/opentrons/commit/cc3ba61)), closes [#5724](https://github.com/opentrons/opentrons/issues/5724)
* **test:** add test id to Pipette Select component ([#5791](https://github.com/opentrons/opentrons/issues/5791)) ([845b508](https://github.com/opentrons/opentrons/commit/845b508)), closes [#5724](https://github.com/opentrons/opentrons/issues/5724)



## [3.18.1](https://github.com/Opentrons/opentrons/compare/v3.18.0...v3.18.1) (2020-05-26)


### Bug Fixes

* **app:** workaround issues with Realtek's website and driver versions ([67d6d89](https://github.com/Opentrons/opentrons/commit/67d6d89))





# [3.18.0](https://github.com/Opentrons/opentrons/compare/v3.17.1...v3.18.0) (2020-05-20)


### Bug Fixes

* **api:** cal check: terminal drop tips during delete ([#5664](https://github.com/Opentrons/opentrons/issues/5664)) ([872140e](https://github.com/Opentrons/opentrons/commit/872140e))
* **api:** cal check: use plan_arc to blend critical points ([#5663](https://github.com/Opentrons/opentrons/issues/5663)) ([ed70395](https://github.com/Opentrons/opentrons/commit/ed70395))
* **api:** cal check: use real trash labware ([#5666](https://github.com/Opentrons/opentrons/issues/5666)) ([a90f675](https://github.com/Opentrons/opentrons/commit/a90f675))
* **api:** calcheck: move the slot 5 check point -y ([#5667](https://github.com/Opentrons/opentrons/issues/5667)) ([11cec65](https://github.com/Opentrons/opentrons/commit/11cec65))
* **api:** Correctly grab slot from labware object ([#5532](https://github.com/Opentrons/opentrons/issues/5532)) ([39cd384](https://github.com/Opentrons/opentrons/commit/39cd384))
* **api:** don't return defaultdicts for labware accessors ([#5593](https://github.com/Opentrons/opentrons/issues/5593)) ([6b2c9e8](https://github.com/Opentrons/opentrons/commit/6b2c9e8))
* **api:** make delay wait for existing pause before pausing itself ([#5558](https://github.com/Opentrons/opentrons/issues/5558)) ([3935adc](https://github.com/Opentrons/opentrons/commit/3935adc)), closes [#4801](https://github.com/Opentrons/opentrons/issues/4801)
* **api:** make reading door switch state unblocking ([#5658](https://github.com/Opentrons/opentrons/issues/5658)) ([4efa400](https://github.com/Opentrons/opentrons/commit/4efa400)), closes [#5536](https://github.com/Opentrons/opentrons/issues/5536)
* **api:** Move multi-channel pipettes to the correct location in cal check ([#5544](https://github.com/Opentrons/opentrons/issues/5544)) ([f29861f](https://github.com/Opentrons/opentrons/commit/f29861f))
* **app:** tighten filter logic that identifies Realtek U2E adapters ([#5707](https://github.com/Opentrons/opentrons/issues/5707)) ([ea9a6c4](https://github.com/Opentrons/opentrons/commit/ea9a6c4))
* **protocol-designer:** fix multichannel well selection bug ([#5607](https://github.com/Opentrons/opentrons/issues/5607)) ([e20d645](https://github.com/Opentrons/opentrons/commit/e20d645))
* **protocol-designer:** set lower bound for temp module target temp to 4 degrees ([#5644](https://github.com/Opentrons/opentrons/issues/5644)) ([9ae81db](https://github.com/Opentrons/opentrons/commit/9ae81db)), closes [#5548](https://github.com/Opentrons/opentrons/issues/5548)
* **robot-server:**  /modules was not returning the right module specific data ([9ba54e4](https://github.com/Opentrons/opentrons/commit/9ba54e4))
* **robot-server:** Fixup failing tests in robot-server ([#5673](https://github.com/Opentrons/opentrons/issues/5673)) ([d307e12](https://github.com/Opentrons/opentrons/commit/d307e12))
* **robot-server:** prevent nmcli connection states from causing a 500 response ([e380837](https://github.com/Opentrons/opentrons/commit/e380837)), closes [#5698](https://github.com/Opentrons/opentrons/issues/5698)
* **robot-server,api:** bug in deck calibration ([e0c1754](https://github.com/Opentrons/opentrons/commit/e0c1754)), closes [#5688](https://github.com/Opentrons/opentrons/issues/5688)


### Features

* **api:** Add type of deck calibration and remove ability to start the program without pipettes ([#5645](https://github.com/Opentrons/opentrons/issues/5645)) ([334be7f](https://github.com/Opentrons/opentrons/commit/334be7f))
* **api:** support thermocycler commands in executor ([#5557](https://github.com/Opentrons/opentrons/issues/5557)) ([b4ca09e](https://github.com/Opentrons/opentrons/commit/b4ca09e))
* **api, app:** add state change information to rpc ([#5512](https://github.com/Opentrons/opentrons/issues/5512)) ([ca3ef95](https://github.com/Opentrons/opentrons/commit/ca3ef95)), closes [#5502](https://github.com/Opentrons/opentrons/issues/5502)
* **app:** add UI to clear cached robots ([#5629](https://github.com/Opentrons/opentrons/issues/5629)) ([330acc0](https://github.com/Opentrons/opentrons/commit/330acc0)), closes [#2435](https://github.com/Opentrons/opentrons/issues/2435)
* **app:** alert user if Windows U2E driver is out of date ([#5656](https://github.com/Opentrons/opentrons/issues/5656)) ([02cd054](https://github.com/Opentrons/opentrons/commit/02cd054)), closes [#5493](https://github.com/Opentrons/opentrons/issues/5493)
* **app:** collect pipette and module load analytics from protocol runs' ([#5675](https://github.com/Opentrons/opentrons/issues/5675)) ([11feca3](https://github.com/Opentrons/opentrons/commit/11feca3)), closes [#5540](https://github.com/Opentrons/opentrons/issues/5540)
* **app,robot-server:** add support for sessions API ([#5628](https://github.com/Opentrons/opentrons/issues/5628)) ([441d682](https://github.com/Opentrons/opentrons/commit/441d682))
* **components:** add Box primitive to components library ([#5665](https://github.com/Opentrons/opentrons/issues/5665)) ([73614d0](https://github.com/Opentrons/opentrons/commit/73614d0))
* **components:** add Flex and Text primitives to components library ([#5637](https://github.com/Opentrons/opentrons/issues/5637)) ([b1b318e](https://github.com/Opentrons/opentrons/commit/b1b318e))
* **components:** Add ToggleField form component and tests ([#5579](https://github.com/Opentrons/opentrons/issues/5579)) ([4272cc6](https://github.com/Opentrons/opentrons/commit/4272cc6))
* **protocol-designer:** add 'mini' command creators for TC ([#5643](https://github.com/Opentrons/opentrons/issues/5643)) ([e6654a8](https://github.com/Opentrons/opentrons/commit/e6654a8)), closes [#5598](https://github.com/Opentrons/opentrons/issues/5598)
* **protocol-designer:** Add base thermocycler form ([#5585](https://github.com/Opentrons/opentrons/issues/5585)) ([ec469a4](https://github.com/Opentrons/opentrons/commit/ec469a4)), closes [#5566](https://github.com/Opentrons/opentrons/issues/5566)
* **protocol-designer:** add custom tiprack on protocol creation ([#5489](https://github.com/Opentrons/opentrons/issues/5489)) ([485bb7c](https://github.com/Opentrons/opentrons/commit/485bb7c)), closes [#4736](https://github.com/Opentrons/opentrons/issues/4736)
* **protocol-designer:** add groundwork for 5421 ([#5494](https://github.com/Opentrons/opentrons/issues/5494)) ([03ba3c4](https://github.com/Opentrons/opentrons/commit/03ba3c4))
* **protocol-designer:** Add thermocycler state form ([#5615](https://github.com/Opentrons/opentrons/issues/5615)) ([51b04e0](https://github.com/Opentrons/opentrons/commit/51b04e0)), closes [#5568](https://github.com/Opentrons/opentrons/issues/5568)
* **protocol-designer:** Add validation to TC state form ([#5659](https://github.com/Opentrons/opentrons/issues/5659)) ([7849b5c](https://github.com/Opentrons/opentrons/commit/7849b5c)), closes [#5569](https://github.com/Opentrons/opentrons/issues/5569)
* **protocol-designer:** confirm when creating a new step when needed ([#5634](https://github.com/Opentrons/opentrons/issues/5634)) ([7b0cf77](https://github.com/Opentrons/opentrons/commit/7b0cf77))
* **protocol-designer:** Implement presaved step form for TC state ([#5641](https://github.com/Opentrons/opentrons/issues/5641)) ([32b191b](https://github.com/Opentrons/opentrons/commit/32b191b)), closes [#5596](https://github.com/Opentrons/opentrons/issues/5596)
* **protocol-designer:** implement TC robot state updaters ([#5657](https://github.com/Opentrons/opentrons/issues/5657)) ([34ff540](https://github.com/Opentrons/opentrons/commit/34ff540)), closes [#5611](https://github.com/Opentrons/opentrons/issues/5611)
* **protocol-designer:** implement thermocyclerFormToArgs for TC State ([#5640](https://github.com/Opentrons/opentrons/issues/5640)) ([b8d5f11](https://github.com/Opentrons/opentrons/commit/b8d5f11)), closes [#5597](https://github.com/Opentrons/opentrons/issues/5597)
* **protocol-designer:** make steps transient until saved ([#5560](https://github.com/Opentrons/opentrons/issues/5560)) ([2067b62](https://github.com/Opentrons/opentrons/commit/2067b62))
* **protocol-designer:** Remove custom tiprack feature flag ([#5631](https://github.com/Opentrons/opentrons/issues/5631)) ([3e83e78](https://github.com/Opentrons/opentrons/commit/3e83e78))
* **protocol-designer:** removes form level warnings for pause until temperature form ([#5655](https://github.com/Opentrons/opentrons/issues/5655)) ([5165f07](https://github.com/Opentrons/opentrons/commit/5165f07))
* **protocol-designer:** set up tc module state ([#5636](https://github.com/Opentrons/opentrons/issues/5636)) ([e61e731](https://github.com/Opentrons/opentrons/commit/e61e731)), closes [#5609](https://github.com/Opentrons/opentrons/issues/5609)
* **robot-server:** session response must contain session_id ([#5635](https://github.com/Opentrons/opentrons/issues/5635)) ([52313f5](https://github.com/Opentrons/opentrons/commit/52313f5))
* **robot-server, api:** calibration check fastapi  ([#5581](https://github.com/Opentrons/opentrons/issues/5581)) ([b44360d](https://github.com/Opentrons/opentrons/commit/b44360d))
* **robot-server,api:** robot-server's fastapi endpoints are now the default ([f69f276](https://github.com/Opentrons/opentrons/commit/f69f276)), closes [#5510](https://github.com/Opentrons/opentrons/issues/5510)





## [3.17.1](https://github.com/opentrons/opentrons/compare/v3.17.0...v3.17.1) (2020-05-06)

### Bug Fixes

* **api:** fix tempdeck simulate freeze ([#5563](https://github.com/Opentrons/opentrons/issues/5563)) ([ae2bdcb](https://github.com/Opentrons/opentrons/commit/ae2bdcb)), closes [#5561](https://github.com/Opentrons/opentrons/issues/5561)
* **app-shell:** upgrade Electron, avoid hoisting dependencies, and fix devtools ([#5545](https://github.com/Opentrons/opentrons/issues/5545)) ([f993925](https://github.com/Opentrons/opentrons/commit/f993925)), closes [#5537](https://github.com/Opentrons/opentrons/issues/5537) [#5541](https://github.com/Opentrons/opentrons/issues/5541)
* **api:** Correctly grab slot from labware object ([#5534](https://github.com/opentrons/opentrons/issues/5534)) ([8a3850a](https://github.com/opentrons/opentrons/commit/8a3850a))
* **api:** home only the axis probing after error ([#5525](https://github.com/opentrons/opentrons/issues/5525)) ([c0d640c](https://github.com/opentrons/opentrons/commit/c0d640c))
* **api:** allow protocol delay to be cancelled ([#5403](https://github.com/opentrons/opentrons/issues/5403)) ([c0ed09d](https://github.com/opentrons/opentrons/commit/c0ed09d)), closes [#5400](https://github.com/opentrons/opentrons/issues/5400)
* **api:** avoid tc lid when pathing ([#5390](https://github.com/opentrons/opentrons/issues/5390)) ([4a7fe0b](https://github.com/opentrons/opentrons/commit/4a7fe0b)), closes [#5263](https://github.com/opentrons/opentrons/issues/5263)
* **api:** Load the correct gantry calibration upon deck calibration exit ([#5469](https://github.com/opentrons/opentrons/issues/5469)) ([b03038d](https://github.com/opentrons/opentrons/commit/b03038d))
* **api:** verify the structure of v2 protocol ast ([#5454](https://github.com/opentrons/opentrons/issues/5454)) ([b45af1e](https://github.com/opentrons/opentrons/commit/b45af1e))
* **app:** ensure only one RPC connect request can go out at once ([#5322](https://github.com/opentrons/opentrons/issues/5322)) ([9465cef](https://github.com/opentrons/opentrons/commit/9465cef)), closes [#5241](https://github.com/opentrons/opentrons/issues/5241) [#5307](https://github.com/opentrons/opentrons/issues/5307)
* **protocol-designer:** add field level validation for magnetic module engage height ([#5339](https://github.com/opentrons/opentrons/issues/5339)) ([5e2aff6](https://github.com/opentrons/opentrons/commit/5e2aff6)), closes [#5274](https://github.com/opentrons/opentrons/issues/5274)
* **protocol-designer:** allow adding labware to slots again ([#5378](https://github.com/opentrons/opentrons/issues/5378)) ([e49e162](https://github.com/opentrons/opentrons/commit/e49e162)), closes [#5370](https://github.com/opentrons/opentrons/issues/5370)
* **protocol-designer:** Default to GEN1 model for TC ([#5443](https://github.com/opentrons/opentrons/issues/5443)) ([14c68c8](https://github.com/opentrons/opentrons/commit/14c68c8)), closes [#5389](https://github.com/opentrons/opentrons/issues/5389)
* **protocol-designer:** default to non-i18n step-gen errors if no i18n title ([#5360](https://github.com/opentrons/opentrons/issues/5360)) ([644b2db](https://github.com/opentrons/opentrons/commit/644b2db))
* **protocol-designer:** fix dnd steps vs labware bug ([#5370](https://github.com/opentrons/opentrons/issues/5370)) ([a6f6594](https://github.com/opentrons/opentrons/commit/a6f6594)), closes [#5367](https://github.com/opentrons/opentrons/issues/5367)
* **protocol-designer:** fix module substep text styling ([#5306](https://github.com/opentrons/opentrons/issues/5306)) ([61b94ab](https://github.com/opentrons/opentrons/commit/61b94ab)), closes [#5305](https://github.com/opentrons/opentrons/issues/5305)
* **protocol-designer:** Hide CrashInfoBox when module restrictions disabled ([#5295](https://github.com/opentrons/opentrons/issues/5295)) ([692f307](https://github.com/opentrons/opentrons/commit/692f307)), closes [#5276](https://github.com/opentrons/opentrons/issues/5276)
* **protocol-designer:** Only show slot access warnings for Gen1 modules ([#5313](https://github.com/opentrons/opentrons/issues/5313)) ([74d9d64](https://github.com/opentrons/opentrons/commit/74d9d64)), closes [#5309](https://github.com/opentrons/opentrons/issues/5309)
* **protocol-designer:** Remove mm unit from engage height field ([#5365](https://github.com/opentrons/opentrons/issues/5365)) ([fc18eea](https://github.com/opentrons/opentrons/commit/fc18eea))
* **protocol-designer:** rename 'module' variables to something else ([#5308](https://github.com/opentrons/opentrons/issues/5308)) ([e5536da](https://github.com/opentrons/opentrons/commit/e5536da)), closes [#5284](https://github.com/opentrons/opentrons/issues/5284)
* **protocol-designer:** Unify pause step item spacing ([#5408](https://github.com/opentrons/opentrons/issues/5408)) ([d75f471](https://github.com/opentrons/opentrons/commit/d75f471)), closes [#5387](https://github.com/opentrons/opentrons/issues/5387)
* **protocol-designer:** Update TC image proportions ([#5442](https://github.com/opentrons/opentrons/issues/5442)) ([0e5f284](https://github.com/opentrons/opentrons/commit/0e5f284)), closes [#5388](https://github.com/opentrons/opentrons/issues/5388)
* **protocol-designer:** updates module slot placement after warning modal is confirmed ([#5393](https://github.com/opentrons/opentrons/issues/5393)) ([0adc97e](https://github.com/opentrons/opentrons/commit/0adc97e))
* **protocol-designer e2e:** Add custom command to close the 3.17 announcement modal ([#5355](https://github.com/opentrons/opentrons/issues/5355)) ([77af8ac](https://github.com/opentrons/opentrons/commit/77af8ac))
* **robot-server:** add robot-server to monorepo's package.json [#5433](https://github.com/opentrons/opentrons/issues/5433) ([705b5cc](https://github.com/opentrons/opentrons/commit/705b5cc))
* **robot-server:** unavailable is a valid network connection state ([#5316](https://github.com/opentrons/opentrons/issues/5316)) ([7438453](https://github.com/opentrons/opentrons/commit/7438453))


### Features

* **api:** Add labware required to session status  ([#5298](https://github.com/opentrons/opentrons/issues/5298)) ([c602cd6](https://github.com/opentrons/opentrons/commit/c602cd6))
* **api:** Allow move, jog and tip handling for a cal session ([#5402](https://github.com/opentrons/opentrons/issues/5402)) ([d5ff537](https://github.com/opentrons/opentrons/commit/d5ff537))
* **api:** Allow moves to crosses and slot 5 ([#5415](https://github.com/opentrons/opentrons/issues/5415)) ([98ca207](https://github.com/opentrons/opentrons/commit/98ca207)), closes [#5099](https://github.com/opentrons/opentrons/issues/5099) [#5098](https://github.com/opentrons/opentrons/issues/5098)
* **api:** Allow Non-Full plate Thermocycler Configuration ([#5498](https://github.com/opentrons/opentrons/issues/5498)) ([60f6b16](https://github.com/opentrons/opentrons/commit/60f6b16))
* **app:** guide the user through leveling gen2 multis ([#5348](https://github.com/opentrons/opentrons/issues/5348)) ([185d0ad](https://github.com/opentrons/opentrons/commit/185d0ad)), closes [#5344](https://github.com/opentrons/opentrons/issues/5344)
* **components:** add hooks-based tooltip component to library ([#5362](https://github.com/opentrons/opentrons/issues/5362)) ([7ef3ca9](https://github.com/opentrons/opentrons/commit/7ef3ca9)), closes [#5120](https://github.com/opentrons/opentrons/issues/5120)
* **components:** add useHover and useHoverTooltip hooks ([#5364](https://github.com/opentrons/opentrons/issues/5364)) ([874d749](https://github.com/opentrons/opentrons/commit/874d749))
* **protocol-designer:** add PD Pause form migration for 3.0.x -> 4.0.0 ([#5373](https://github.com/opentrons/opentrons/issues/5373)) ([e3ce552](https://github.com/opentrons/opentrons/commit/e3ce552)), closes [#5371](https://github.com/opentrons/opentrons/issues/5371)
* **protocol-designer:** add warning modal switching mag model ([#5329](https://github.com/opentrons/opentrons/issues/5329)) ([2cfe3e1](https://github.com/opentrons/opentrons/commit/2cfe3e1)), closes [#5251](https://github.com/opentrons/opentrons/issues/5251)
* **protocol-designer:** allow GEN1 multi pipette access N/S of GEN2 modules ([#5341](https://github.com/opentrons/opentrons/issues/5341)) ([dc6af21](https://github.com/opentrons/opentrons/commit/dc6af21)), closes [#5331](https://github.com/opentrons/opentrons/issues/5331)
* **protocol-designer:** allow moving empty module under compat labware ([#5396](https://github.com/opentrons/opentrons/issues/5396)) ([57ef5ce](https://github.com/opentrons/opentrons/commit/57ef5ce)), closes [#5384](https://github.com/opentrons/opentrons/issues/5384)
* **protocol-designer:** allow user to select module model when adding or editing modules ([#5284](https://github.com/opentrons/opentrons/issues/5284)) ([8ad1607](https://github.com/opentrons/opentrons/commit/8ad1607)), closes [#5188](https://github.com/opentrons/opentrons/issues/5188)
* **protocol-designer:** Enable magnetic and temperature module support ([#5304](https://github.com/opentrons/opentrons/issues/5304)) ([8235e71](https://github.com/opentrons/opentrons/commit/8235e71)), closes [#4968](https://github.com/opentrons/opentrons/issues/4968)
* **protocol-designer:** hide slot placement tooltip when slot dropdown enabled ([#5405](https://github.com/opentrons/opentrons/issues/5405)) ([8a8b757](https://github.com/opentrons/opentrons/commit/8a8b757)), closes [#5385](https://github.com/opentrons/opentrons/issues/5385)
* **protocol-designer:** Implement custom tiprack UI behind flag ([#5440](https://github.com/opentrons/opentrons/issues/5440)) ([1fc35fd](https://github.com/opentrons/opentrons/commit/1fc35fd)), closes [#5332](https://github.com/opentrons/opentrons/issues/5332)
* **protocol-designer:** preserve engage heights if already default ([#5294](https://github.com/opentrons/opentrons/issues/5294)) ([9cac165](https://github.com/opentrons/opentrons/commit/9cac165)), closes [#5232](https://github.com/opentrons/opentrons/issues/5232)
* **protocol-designer:** Remove multi gen2 feature flag ([#5351](https://github.com/opentrons/opentrons/issues/5351)) ([4a2a1fd](https://github.com/opentrons/opentrons/commit/4a2a1fd)), closes [#5336](https://github.com/opentrons/opentrons/issues/5336)
* **protocol-designer:** remove unnecessary comment ([#5379](https://github.com/opentrons/opentrons/issues/5379)) ([12277df](https://github.com/opentrons/opentrons/commit/12277df))
* **protocol-designer:** update export v4 protocol modal copy ([#5356](https://github.com/opentrons/opentrons/issues/5356)) ([81489a0](https://github.com/opentrons/opentrons/commit/81489a0))
* **protocol-designer:** update intro announcement modal copy ([#5345](https://github.com/opentrons/opentrons/issues/5345)) ([20e2a96](https://github.com/opentrons/opentrons/commit/20e2a96)), closes [#5334](https://github.com/opentrons/opentrons/issues/5334)
* **protocol-designer:** update pause until temp modal copy ([#5434](https://github.com/opentrons/opentrons/issues/5434)) ([441f30e](https://github.com/opentrons/opentrons/commit/441f30e)), closes [#5432](https://github.com/opentrons/opentrons/issues/5432)
* **protocol-designer:** use model-specific engageHeight diagram ([#5273](https://github.com/opentrons/opentrons/issues/5273)) ([a85f206](https://github.com/opentrons/opentrons/commit/a85f206)), closes [#5228](https://github.com/opentrons/opentrons/issues/5228)
* **robot-server:** create middleware to support api versioning ([#5438](https://github.com/opentrons/opentrons/issues/5438)) ([6fed41a](https://github.com/opentrons/opentrons/commit/6fed41a)), closes [#4633](https://github.com/opentrons/opentrons/issues/4633)
* **robot-server:** make fastapi return v1 style errors ([#5404](https://github.com/opentrons/opentrons/issues/5404)) ([906c399](https://github.com/opentrons/opentrons/commit/906c399)), closes [#5285](https://github.com/opentrons/opentrons/issues/5285)
* **robot-server:** return correct error format based on endpoint ([e6a98ad](https://github.com/opentrons/opentrons/commit/e6a98ad)), closes [#5401](https://github.com/opentrons/opentrons/issues/5401)
* **robot-server:** Robot server logging and settings ([#5398](https://github.com/opentrons/opentrons/issues/5398)) ([041c313](https://github.com/opentrons/opentrons/commit/041c313)), closes [#5013](https://github.com/opentrons/opentrons/issues/5013)
* **robot-server, api:** calibration check overhaul ([#5465](https://github.com/opentrons/opentrons/issues/5465)) ([4feeeba](https://github.com/opentrons/opentrons/commit/4feeeba))
* **shared-data:** add nest_96_wellplate_2ml_deep ([#5503](https://github.com/opentrons/opentrons/issues/5503)) ([3002453](https://github.com/opentrons/opentrons/commit/3002453))





# [3.17.0](https://github.com/opentrons/opentrons/compare/v3.17.0-beta.1...v3.17.0) (2020-04-23)

**Note:** Version bump only for package opentrons





# [3.17.0-beta.1](https://github.com/opentrons/opentrons/compare/v3.17.0-beta.0...v3.17.0-beta.1) (2020-04-14)

### Bug Fixes

* **api:** allow protocol delay to be cancelled ([#5403](https://github.com/opentrons/opentrons/issues/5403)) ([67d090e](https://github.com/opentrons/opentrons/commit/67d090e)), closes [#5400](https://github.com/opentrons/opentrons/issues/5400)
* **api:** correctly set magdeck offsets ([#5416](https://github.com/opentrons/opentrons/issues/5416)) ([5c121cf](https://github.com/opentrons/opentrons/commit/5c121cf))





# [3.17.0-beta.0](https://github.com/opentrons/opentrons/compare/v3.16.1...v3.17.0-beta.0) (2020-04-01)

### Bug Fixes

* **api:** correctly handle magdeck engage kwargs ([#5330](https://github.com/opentrons/opentrons/issues/5330)) ([57c0382](https://github.com/opentrons/opentrons/commit/57c0382))
* **api:** fix missing arg in v1 move splitting during cache instr models ([#5338](https://github.com/opentrons/opentrons/issues/5338)) ([057bea5](https://github.com/opentrons/opentrons/commit/057bea5))
* **api:** move splitting: strip step postfix ([#5337](https://github.com/opentrons/opentrons/issues/5337)) ([e36217a](https://github.com/opentrons/opentrons/commit/e36217a))
* **api:** fix blocking module tasks ([#5315](https://github.com/opentrons/opentrons/issues/5315)) ([0f4e2c1](https://github.com/opentrons/opentrons/commit/0f4e2c1)), closes [#5312](https://github.com/opentrons/opentrons/issues/5312)
* **api:** fix update module firmware ([#5317](https://github.com/opentrons/opentrons/issues/5317)) ([63808c2](https://github.com/opentrons/opentrons/commit/63808c2)), closes [#5314](https://github.com/opentrons/opentrons/issues/5314)
* **app:** alignment and time formatting in thermocycler card ([#5320](https://github.com/opentrons/opentrons/issues/5320)) ([3c7fcc8](https://github.com/opentrons/opentrons/commit/3c7fcc8))
* **app:** fix tiprack in tip probe instructions when tipracks are shared ([#5319](https://github.com/opentrons/opentrons/issues/5319)) ([7d5f4ab](https://github.com/opentrons/opentrons/commit/7d5f4ab)), closes [#5311](https://github.com/opentrons/opentrons/issues/5311)
* **api:** add ThreadManager.cleanup() calls in test fixtures ([#5109](https://github.com/opentrons/opentrons/issues/5109)) ([45f81db](https://github.com/opentrons/opentrons/commit/45f81db))
* **api:** Avoid Python 3.8 unsupported `str in Enum` expression ([#5088](https://github.com/opentrons/opentrons/issues/5088)) ([6f399ba](https://github.com/opentrons/opentrons/commit/6f399ba))
* **api:** call module functions across threads ([#5194](https://github.com/opentrons/opentrons/issues/5194)) ([ba1afe2](https://github.com/opentrons/opentrons/commit/ba1afe2))
* **api:** compare smoothie version before hardware controller on boot ([#5165](https://github.com/opentrons/opentrons/issues/5165)) ([285211f](https://github.com/opentrons/opentrons/commit/285211f))
* **api:** exec protocol contents in module mode ([#5292](https://github.com/opentrons/opentrons/issues/5292)) ([0174ab3](https://github.com/opentrons/opentrons/commit/0174ab3)), closes [#4982](https://github.com/opentrons/opentrons/issues/4982) [#4981](https://github.com/opentrons/opentrons/issues/4981)
* **api:** fix recent change breaking api server init ([#5003](https://github.com/opentrons/opentrons/issues/5003)) ([01fccdf](https://github.com/opentrons/opentrons/commit/01fccdf))
* **api:** fix server crash due to unresponsive motor controller at boot ([#5277](https://github.com/opentrons/opentrons/issues/5277)) ([103e3d1](https://github.com/opentrons/opentrons/commit/103e3d1))
* **api:** make api coroutine properties sync for polls during pause ([#5166](https://github.com/opentrons/opentrons/issues/5166)) ([e9dcd9e](https://github.com/opentrons/opentrons/commit/e9dcd9e))
* **api:** make hardware control gantry fns observe execution manager ([#5180](https://github.com/opentrons/opentrons/issues/5180)) ([c143bcf](https://github.com/opentrons/opentrons/commit/c143bcf))
* **api:** make sure we move plunger to bottom after home ([#5253](https://github.com/opentrons/opentrons/issues/5253)) ([f298b6e](https://github.com/opentrons/opentrons/commit/f298b6e)), closes [#5164](https://github.com/opentrons/opentrons/issues/5164)
* **api:** properly parse escaped nmcli responses ([#5246](https://github.com/opentrons/opentrons/issues/5246)) ([91178f0](https://github.com/opentrons/opentrons/commit/91178f0))
* **api:** remove unnecessary pipette movement during mix ([#5128](https://github.com/opentrons/opentrons/issues/5128)) ([88e1893](https://github.com/opentrons/opentrons/commit/88e1893)), closes [#4640](https://github.com/opentrons/opentrons/issues/4640)
* **api:** reset location cache before tip probe ([#5269](https://github.com/opentrons/opentrons/issues/5269)) ([53977ec](https://github.com/opentrons/opentrons/commit/53977ec)), closes [#4793](https://github.com/opentrons/opentrons/issues/4793)
* **api:** return tips to tipracks from the same height as drop tip ([#5187](https://github.com/opentrons/opentrons/issues/5187)) ([82187ed](https://github.com/opentrons/opentrons/commit/82187ed)), closes [#5186](https://github.com/opentrons/opentrons/issues/5186)
* **api:** ThreadManager hides builder exceptions ([#5108](https://github.com/opentrons/opentrons/issues/5108)) ([9c50a79](https://github.com/opentrons/opentrons/commit/9c50a79))
* **app:** accept mixed-case extensions for protocols and custom labware ([#5153](https://github.com/opentrons/opentrons/issues/5153)) ([12cce54](https://github.com/opentrons/opentrons/commit/12cce54)), closes [#5151](https://github.com/opentrons/opentrons/issues/5151)
* **app:** build RPC pipette tip rack list from both containers and instruments ([#5147](https://github.com/opentrons/opentrons/issues/5147)) ([2c5fc9f](https://github.com/opentrons/opentrons/commit/2c5fc9f))
* **app:** Deck cal: Tell users to attach an Opentrons tip, not a GEB tip. ([#5048](https://github.com/opentrons/opentrons/issues/5048)) ([336bb17](https://github.com/opentrons/opentrons/commit/336bb17))
* **app:** disable module commands when protocol paused ([#5209](https://github.com/opentrons/opentrons/issues/5209)) ([b313c95](https://github.com/opentrons/opentrons/commit/b313c95))
* **protocol-designer:** fix bug with selecting magnet > disengage step ([#5257](https://github.com/opentrons/opentrons/issues/5257)) ([42e6a65](https://github.com/opentrons/opentrons/commit/42e6a65)), closes [#5247](https://github.com/opentrons/opentrons/issues/5247)
* **protocol-designer:** fix failing action test ([#5002](https://github.com/opentrons/opentrons/issues/5002)) ([46f6d3f](https://github.com/opentrons/opentrons/commit/46f6d3f))
* **protocol-designer:** fix tests for FileSidebar after merging [#5029](https://github.com/opentrons/opentrons/issues/5029) ([#5077](https://github.com/opentrons/opentrons/issues/5077)) ([62a4461](https://github.com/opentrons/opentrons/commit/62a4461))
* **protocol-designer:** fix typo in deck setup explanation modal ([#5104](https://github.com/opentrons/opentrons/issues/5104)) ([5a70562](https://github.com/opentrons/opentrons/commit/5a70562)), closes [#5102](https://github.com/opentrons/opentrons/issues/5102)
* **protocol-designer:** null out deleted module IDs from step forms ([#5017](https://github.com/opentrons/opentrons/issues/5017)) ([5a94de5](https://github.com/opentrons/opentrons/commit/5a94de5)), closes [#4883](https://github.com/opentrons/opentrons/issues/4883)
* **protocol-designer:** removes error when fn cannot find temperature or thermocycler on deck ([#4994](https://github.com/opentrons/opentrons/issues/4994)) ([951a3e1](https://github.com/opentrons/opentrons/commit/951a3e1)), closes [#4841](https://github.com/opentrons/opentrons/issues/4841)
* **protocol-designer:** round caption under engage height to match input box ([#4993](https://github.com/opentrons/opentrons/issues/4993)) ([f5c2c47](https://github.com/opentrons/opentrons/commit/f5c2c47)), closes [#4912](https://github.com/opentrons/opentrons/issues/4912)
* **protocol-designer:** set magnetic module params for both pristine … ([#4990](https://github.com/opentrons/opentrons/issues/4990)) ([9b3fef1](https://github.com/opentrons/opentrons/commit/9b3fef1)), closes [#4908](https://github.com/opentrons/opentrons/issues/4908)
* **protocol-designer:** Update conditional experimental settings warning text ([#4978](https://github.com/opentrons/opentrons/issues/4978)) ([cd3d645](https://github.com/opentrons/opentrons/commit/cd3d645)), closes [#4911](https://github.com/opentrons/opentrons/issues/4911)
* **protocol-designer:** Update SlotMap and CrashInfoBox styles ([#4996](https://github.com/opentrons/opentrons/issues/4996)) ([845b465](https://github.com/opentrons/opentrons/commit/845b465)), closes [#4989](https://github.com/opentrons/opentrons/issues/4989)
* **protocol-designer:** Update temperature modules disengage text ([#5159](https://github.com/opentrons/opentrons/issues/5159)) ([bc9d503](https://github.com/opentrons/opentrons/commit/bc9d503)), closes [#5111](https://github.com/opentrons/opentrons/issues/5111)
* **robot-server:** cannot import log control ([#5207](https://github.com/opentrons/opentrons/issues/5207)) ([74191db](https://github.com/opentrons/opentrons/commit/74191db))
* **robot-server:** fix failure in fw_version reading in health endpoint. ([#5185](https://github.com/opentrons/opentrons/issues/5185)) ([1944fe6](https://github.com/opentrons/opentrons/commit/1944fe6))
* **robot-server:** fix typing_extensions bug introduced in json response work ([#5281](https://github.com/opentrons/opentrons/issues/5281)) ([dd3a915](https://github.com/opentrons/opentrons/commit/dd3a915)), closes [#5275](https://github.com/opentrons/opentrons/issues/5275)
* **shared-data:** fix typo in v4 protocol schema ([#4997](https://github.com/opentrons/opentrons/issues/4997)) ([2483b00](https://github.com/opentrons/opentrons/commit/2483b00))


### Features

* **api:** Add API calibration check session ([#5197](https://github.com/opentrons/opentrons/issues/5197)) ([6fa9346](https://github.com/opentrons/opentrons/commit/6fa9346))
* **api:** add start set temperature to api ([#5179](https://github.com/opentrons/opentrons/issues/5179)) ([cdf0c8a](https://github.com/opentrons/opentrons/commit/cdf0c8a)), closes [#5176](https://github.com/opentrons/opentrons/issues/5176)
* **api:** add v4 JSON executor ([#5221](https://github.com/opentrons/opentrons/issues/5221)) ([e81cb56](https://github.com/opentrons/opentrons/commit/e81cb56))
* **api:** add wifi disconnect capability ([#4957](https://github.com/opentrons/opentrons/issues/4957)) ([67155a8](https://github.com/opentrons/opentrons/commit/67155a8))
* **api:** create a centralized hw execution manager ([#5138](https://github.com/opentrons/opentrons/issues/5138)) ([af10af2](https://github.com/opentrons/opentrons/commit/af10af2)), closes [#4871](https://github.com/opentrons/opentrons/issues/4871)
* **api:** Define existing endpoints using FastAPI/Pydantic ([#4962](https://github.com/opentrons/opentrons/issues/4962)) ([6ec838f](https://github.com/opentrons/opentrons/commit/6ec838f)), closes [#4917](https://github.com/opentrons/opentrons/issues/4917)
* **api:** invert management of hw control thread ([#5078](https://github.com/opentrons/opentrons/issues/5078)) ([b8f543a](https://github.com/opentrons/opentrons/commit/b8f543a)), closes [#4870](https://github.com/opentrons/opentrons/issues/4870)
* **api:** robot server replaces api ([#5139](https://github.com/opentrons/opentrons/issues/5139)) ([ab7905d](https://github.com/opentrons/opentrons/commit/ab7905d)), closes [#5049](https://github.com/opentrons/opentrons/issues/5049)
* **api:** robot-server sub project created  ([#5130](https://github.com/opentrons/opentrons/issues/5130)) ([9671575](https://github.com/opentrons/opentrons/commit/9671575)), closes [#5011](https://github.com/opentrons/opentrons/issues/5011) [#5012](https://github.com/opentrons/opentrons/issues/5012)
* **api:** support gen2 modules ([#5039](https://github.com/opentrons/opentrons/issues/5039)) ([fa7a320](https://github.com/opentrons/opentrons/commit/fa7a320)), closes [#4960](https://github.com/opentrons/opentrons/issues/4960)
* **api:** updated images for all modules ([#5210](https://github.com/opentrons/opentrons/issues/5210)) ([7e80a5b](https://github.com/opentrons/opentrons/commit/7e80a5b)), closes [#4224](https://github.com/opentrons/opentrons/issues/4224)
* **api:** use instrument max achievable height in plan_moves ([#5193](https://github.com/opentrons/opentrons/issues/5193)) ([65425da](https://github.com/opentrons/opentrons/commit/65425da)), closes [#5156](https://github.com/opentrons/opentrons/issues/5156)
* **app:** add Wi-Fi disconnect to app ([#5296](https://github.com/opentrons/opentrons/issues/5296)) ([f6620ee](https://github.com/opentrons/opentrons/commit/f6620ee))
* **app:** enable gen2 multi pipettes ([#5297](https://github.com/opentrons/opentrons/issues/5297)) ([707f0ab](https://github.com/opentrons/opentrons/commit/707f0ab)), closes [#4698](https://github.com/opentrons/opentrons/issues/4698)
* **app:** report PAPI version during protocol analytics events ([#5053](https://github.com/opentrons/opentrons/issues/5053)) ([493a2ea](https://github.com/opentrons/opentrons/commit/493a2ea)), closes [#4971](https://github.com/opentrons/opentrons/issues/4971)
* **app, components:** Support gen2 modules ([#5177](https://github.com/opentrons/opentrons/issues/5177)) ([3a938ff](https://github.com/opentrons/opentrons/commit/3a938ff)), closes [#4960](https://github.com/opentrons/opentrons/issues/4960)
* **js:** update Formik to v2 ([#5190](https://github.com/opentrons/opentrons/issues/5190)) ([b15d360](https://github.com/opentrons/opentrons/commit/b15d360))
* **labware-library:** Support more pipettes in custom labware test protocol ([#5084](https://github.com/opentrons/opentrons/issues/5084)), and use opentrons_96_tiprack_20ul instead of 10ul ([19dce65](https://github.com/opentrons/opentrons/commit/19dce65))
* **protocol-designer:** add border to module tag when hovering over step ([#5161](https://github.com/opentrons/opentrons/issues/5161)) ([b04ee69](https://github.com/opentrons/opentrons/commit/b04ee69)), closes [#5110](https://github.com/opentrons/opentrons/issues/5110)
* **protocol-designer:** add modal to add a pause after set temp ([#5182](https://github.com/opentrons/opentrons/issues/5182)) ([dbae680](https://github.com/opentrons/opentrons/commit/dbae680)), closes [#5117](https://github.com/opentrons/opentrons/issues/5117)
* **protocol-designer:** Add module prefix to labware ([#5205](https://github.com/opentrons/opentrons/issues/5205)) ([1f979dd](https://github.com/opentrons/opentrons/commit/1f979dd)), closes [#5119](https://github.com/opentrons/opentrons/issues/5119)
* **protocol-designer:** Add V4 export warning modal ([#5092](https://github.com/opentrons/opentrons/issues/5092)) ([e63577b](https://github.com/opentrons/opentrons/commit/e63577b)), closes [#4934](https://github.com/opentrons/opentrons/issues/4934)
* **protocol-designer:** allow custom labware on modules ([#5175](https://github.com/opentrons/opentrons/issues/5175)) ([1c4e1b5](https://github.com/opentrons/opentrons/commit/1c4e1b5)), closes [#4910](https://github.com/opentrons/opentrons/issues/4910)
* **protocol-designer:** allow modules to be placed on compatble labware ([#4972](https://github.com/opentrons/opentrons/issues/4972)) ([5abd33f](https://github.com/opentrons/opentrons/commit/5abd33f)), closes [#4726](https://github.com/opentrons/opentrons/issues/4726)
* **protocol-designer:** allow selection of gen 2 modules and use formik ([#5265](https://github.com/opentrons/opentrons/issues/5265)) ([71b59ce](https://github.com/opentrons/opentrons/commit/71b59ce)), closes [#5150](https://github.com/opentrons/opentrons/issues/5150)
* **protocol-designer:** allow setting initial settings w env vars ([#5268](https://github.com/opentrons/opentrons/issues/5268)) ([ba52ae4](https://github.com/opentrons/opentrons/commit/ba52ae4))
* **protocol-designer:** allow user to bypass typeform modal ([#5169](https://github.com/opentrons/opentrons/issues/5169)) ([e7ecaf6](https://github.com/opentrons/opentrons/commit/e7ecaf6)), closes [#5126](https://github.com/opentrons/opentrons/issues/5126)
* **protocol-designer:** clear out engageHeight ([#5254](https://github.com/opentrons/opentrons/issues/5254)) ([2417071](https://github.com/opentrons/opentrons/commit/2417071)), closes [#5225](https://github.com/opentrons/opentrons/issues/5225)
* **protocol-designer:** create modal component to show announcements ([#5091](https://github.com/opentrons/opentrons/issues/5091)) ([225c12a](https://github.com/opentrons/opentrons/commit/225c12a)), closes [#4995](https://github.com/opentrons/opentrons/issues/4995)
* **protocol-designer:** disambiguate module model vs type ([#5029](https://github.com/opentrons/opentrons/issues/5029)) ([a1f4740](https://github.com/opentrons/opentrons/commit/a1f4740)), closes [#4897](https://github.com/opentrons/opentrons/issues/4897)
* **protocol-designer:** remove warnings and display correct version for gen 2 modules ([#5224](https://github.com/opentrons/opentrons/issues/5224)) ([a24a544](https://github.com/opentrons/opentrons/commit/a24a544)), closes [#5152](https://github.com/opentrons/opentrons/issues/5152)
* **protocol-designer:** reset time fields in pause step ([#4950](https://github.com/opentrons/opentrons/issues/4950)) ([4297a54](https://github.com/opentrons/opentrons/commit/4297a54)), closes [#4949](https://github.com/opentrons/opentrons/issues/4949)
* **protocol-designer:** save v3/v4 files correctly ([#5100](https://github.com/opentrons/opentrons/issues/5100)) ([53e8ddf](https://github.com/opentrons/opentrons/commit/53e8ddf)), closes [#4919](https://github.com/opentrons/opentrons/issues/4919)
* **protocol-designer:** unify "button row" styles ([#5056](https://github.com/opentrons/opentrons/issues/5056)) ([06c74d9](https://github.com/opentrons/opentrons/commit/06c74d9))
* **protocol-designer:** use different ranges for gen1 vs gen2 engageHeight ([#5262](https://github.com/opentrons/opentrons/issues/5262)) ([434ca61](https://github.com/opentrons/opentrons/commit/434ca61)), closes [#5230](https://github.com/opentrons/opentrons/issues/5230)
* **robot_server:** add missing endpoints to robot_server from api ([#5167](https://github.com/opentrons/opentrons/issues/5167)) ([a0b0e50](https://github.com/opentrons/opentrons/commit/a0b0e50))
* **robot-server:** add formatted json responses and error handling ([#5208](https://github.com/opentrons/opentrons/issues/5208)) ([25e9298](https://github.com/opentrons/opentrons/commit/25e9298))
* **scripts:** python_build_utils supports upcoming api split  ([#5113](https://github.com/opentrons/opentrons/issues/5113)) ([be46e64](https://github.com/opentrons/opentrons/commit/be46e64))
* **shared-data:** correct existing labware defs engageHeight ([#5261](https://github.com/opentrons/opentrons/issues/5261)) ([767054d](https://github.com/opentrons/opentrons/commit/767054d)), closes [#5226](https://github.com/opentrons/opentrons/issues/5226)
* include all vscode configs in gitignore ([#5222](https://github.com/opentrons/opentrons/issues/5222)) ([30a4e97](https://github.com/opentrons/opentrons/commit/30a4e97))





## [3.16.1](https://github.com/opentrons/opentrons/compare/v3.16.0...v3.16.1) (2020-02-25)

### Bug Fixes

* **api:** always clean up in script entries on error ([#5064](https://github.com/opentrons/opentrons/issues/5064)) ([e98fdd1](https://github.com/opentrons/opentrons/commit/e98fdd1)), closes [#5061](https://github.com/opentrons/opentrons/issues/5061)
* **api:** correctly set api level in session sim ([#5063](https://github.com/opentrons/opentrons/issues/5063)) ([9f4cb1d](https://github.com/opentrons/opentrons/commit/9f4cb1d)), closes [#5060](https://github.com/opentrons/opentrons/issues/5060)
* **api:** do not check used tips after pickup ([#5062](https://github.com/opentrons/opentrons/issues/5062)) ([5c155d9](https://github.com/opentrons/opentrons/commit/5c155d9)), closes [#5059](https://github.com/opentrons/opentrons/issues/5059)





# [3.16.0](https://github.com/opentrons/opentrons/compare/v3.15.2...v3.16.0) (2020-02-19)

### Bug Fixes

* **api:** make probe failures raise the actual error ([#5015](https://github.com/opentrons/opentrons/issues/5015)) ([bc74517](https://github.com/opentrons/opentrons/commit/bc74517)), closes [#4980](https://github.com/opentrons/opentrons/issues/4980)
* **api:** swallow hard-halt-related errors and hold lock in session.stop() ([#4980](https://github.com/opentrons/opentrons/issues/4980)) ([c42d4dc](https://github.com/opentrons/opentrons/commit/c42d4dc)), closes [#4979](https://github.com/opentrons/opentrons/issues/4979)
* **api:** Add back in useProtocolApi2 feature flag ([#4665](https://github.com/opentrons/opentrons/issues/4665)) ([5c3fae3](https://github.com/opentrons/opentrons/commit/5c3fae3))
* **api:** amend temperature module old bootloader check ([#4942](https://github.com/opentrons/opentrons/issues/4942)) ([dbc90cb](https://github.com/opentrons/opentrons/commit/dbc90cb))
* **api:** apiv2: allow multi to access all 384 wells in transfer ([#4678](https://github.com/opentrons/opentrons/issues/4678)) ([975915a](https://github.com/opentrons/opentrons/commit/975915a)), closes [#4669](https://github.com/opentrons/opentrons/issues/4669)
* **api:** bug in MalformedProtocolError.__str__ ([28a0eca](https://github.com/opentrons/opentrons/commit/28a0eca))
* **api:** Clarify intended use of "Use older pipette calibrations" flag ([#4677](https://github.com/opentrons/opentrons/issues/4677)) ([0f2d7e3](https://github.com/opentrons/opentrons/commit/0f2d7e3))
* **api:** detect old bootloaders, fix tc enter bootloader, remove ununused paths ([#4935](https://github.com/opentrons/opentrons/issues/4935)) ([cfa5374](https://github.com/opentrons/opentrons/commit/cfa5374)), closes [#4575](https://github.com/opentrons/opentrons/issues/4575)
* **api:** do not pick up returned tips ([#4681](https://github.com/opentrons/opentrons/issues/4681)) ([5d358f2](https://github.com/opentrons/opentrons/commit/5d358f2)), closes [#4668](https://github.com/opentrons/opentrons/issues/4668)
* **api:** Ensure position is fully updated after a home ([#4915](https://github.com/opentrons/opentrons/issues/4915)) ([00b8d5b](https://github.com/opentrons/opentrons/commit/00b8d5b))
* **api:** Fix simulate file from python shell ([#4660](https://github.com/opentrons/opentrons/issues/4660)) ([7fc6bbe](https://github.com/opentrons/opentrons/commit/7fc6bbe))
* **api:** more specific errors for bad json protocols ([#4967](https://github.com/opentrons/opentrons/issues/4967)) ([885a6f8](https://github.com/opentrons/opentrons/commit/885a6f8)), closes [#4735](https://github.com/opentrons/opentrons/issues/4735) [#4515](https://github.com/opentrons/opentrons/issues/4515)
* **api:** properly clean up threads in opentrons_simulate, _execute ([#4694](https://github.com/opentrons/opentrons/issues/4694)) ([31bd02d](https://github.com/opentrons/opentrons/commit/31bd02d))
* **api:** restore plunger current before move to bottom after drop tip ([#4831](https://github.com/opentrons/opentrons/issues/4831)) ([d07efcb](https://github.com/opentrons/opentrons/commit/d07efcb))
* **api:** set default move timeout to 12000 instead of 60 ([#4768](https://github.com/opentrons/opentrons/issues/4768)) ([6e28b2b](https://github.com/opentrons/opentrons/commit/6e28b2b)), closes [#4755](https://github.com/opentrons/opentrons/issues/4755)
* **api:** smoothie driver: Limit high currents to moving axes ([#4729](https://github.com/opentrons/opentrons/issues/4729)) ([7e728ea](https://github.com/opentrons/opentrons/commit/7e728ea)), closes [#4714](https://github.com/opentrons/opentrons/issues/4714)
* **api:** split out tc deactivation at driver level ([#4624](https://github.com/opentrons/opentrons/issues/4624)) ([ae15a7f](https://github.com/opentrons/opentrons/commit/ae15a7f))
* **api:** typo in Session.turn_off_rail_lights ([#4948](https://github.com/opentrons/opentrons/issues/4948)) ([44bf050](https://github.com/opentrons/opentrons/commit/44bf050))
* **api:** Use specified port in tools ([#4812](https://github.com/opentrons/opentrons/issues/4812)) ([5351183](https://github.com/opentrons/opentrons/commit/5351183))
* **api:** Utilize return tip height from pipette configs ([#4828](https://github.com/opentrons/opentrons/issues/4828)) ([b388c4e](https://github.com/opentrons/opentrons/commit/b388c4e))
* **app:** add spinner to "Save" button in Pipette Settings ([#4685](https://github.com/opentrons/opentrons/issues/4685)) ([b8a9aac](https://github.com/opentrons/opentrons/commit/b8a9aac)), closes [#4583](https://github.com/opentrons/opentrons/issues/4583)
* **app:** clear lw calibration state if top level home is called ([#4703](https://github.com/opentrons/opentrons/issues/4703)) ([8fe7120](https://github.com/opentrons/opentrons/commit/8fe7120))
* **app:** home all axes after lw calibration to allow deck access ([#4687](https://github.com/opentrons/opentrons/issues/4687)) ([6e0ad61](https://github.com/opentrons/opentrons/commit/6e0ad61)), closes [#4034](https://github.com/opentrons/opentrons/issues/4034)
* **protocol-designer:** fix warnings not displaying during timeline creation process ([#4840](https://github.com/opentrons/opentrons/issues/4840)) ([111f36b](https://github.com/opentrons/opentrons/commit/111f36b)), closes [#4829](https://github.com/opentrons/opentrons/issues/4829)
* **protocol-designer:** Update magnetic module recommended labware ([#4827](https://github.com/opentrons/opentrons/issues/4827)) ([42ec004](https://github.com/opentrons/opentrons/commit/42ec004)), closes [#4825](https://github.com/opentrons/opentrons/issues/4825)
* **protocol-designer:** Update maskToNumber to allow for negatives and 0 ([#4709](https://github.com/opentrons/opentrons/issues/4709)) ([79c7818](https://github.com/opentrons/opentrons/commit/79c7818)), closes [#4305](https://github.com/opentrons/opentrons/issues/4305)
* **protocol-designer:** when adding new module only update mag steps … ([#4839](https://github.com/opentrons/opentrons/issues/4839)) ([ea014fc](https://github.com/opentrons/opentrons/commit/ea014fc)), closes [#4823](https://github.com/opentrons/opentrons/issues/4823) [#4823](https://github.com/opentrons/opentrons/issues/4823)


### Features

* **api:** Add an OpenAPI spec for the HTTP API ([#4691](https://github.com/opentrons/opentrons/issues/4691)) ([cb195a5](https://github.com/opentrons/opentrons/commit/cb195a5)), closes [#4635](https://github.com/opentrons/opentrons/issues/4635)
* **api:** add module def schema v2 and v2 defs ([#4805](https://github.com/opentrons/opentrons/issues/4805)) ([4018254](https://github.com/opentrons/opentrons/commit/4018254)), closes [#4222](https://github.com/opentrons/opentrons/issues/4222)
* **api:** add p10m v1.6 ([#4722](https://github.com/opentrons/opentrons/issues/4722)) ([c25c887](https://github.com/opentrons/opentrons/commit/c25c887))
* **api:** add perform module fw update endpoint ([#4889](https://github.com/opentrons/opentrons/issues/4889)) ([5354eff](https://github.com/opentrons/opentrons/commit/5354eff)), closes [#4576](https://github.com/opentrons/opentrons/issues/4576)
* **api:** apiv2: add height_from_base arg to MagneticModuleContext.engage() ([#4707](https://github.com/opentrons/opentrons/issues/4707)) ([ffaee78](https://github.com/opentrons/opentrons/commit/ffaee78)), closes [#4213](https://github.com/opentrons/opentrons/issues/4213)
* **api:** change attach pipette positions to match leveling blocks ([#4888](https://github.com/opentrons/opentrons/issues/4888)) ([b10fe2e](https://github.com/opentrons/opentrons/commit/b10fe2e)), closes [#4679](https://github.com/opentrons/opentrons/issues/4679)
* **api:** make modules aware of available fw updates in file system ([#4856](https://github.com/opentrons/opentrons/issues/4856)) ([4ede522](https://github.com/opentrons/opentrons/commit/4ede522)), closes [#4575](https://github.com/opentrons/opentrons/issues/4575)
* **app:** allow custom labware dir to be opened and reset to default ([#4918](https://github.com/opentrons/opentrons/issues/4918)) ([03c438a](https://github.com/opentrons/opentrons/commit/03c438a)), closes [#4878](https://github.com/opentrons/opentrons/issues/4878) [#4879](https://github.com/opentrons/opentrons/issues/4879)
* **app:** enable module firmware update button when update available ([#4923](https://github.com/opentrons/opentrons/issues/4923)) ([1edc587](https://github.com/opentrons/opentrons/commit/1edc587)), closes [#4575](https://github.com/opentrons/opentrons/issues/4575)
* **components:** Add mini slot map to shared components ([#4890](https://github.com/opentrons/opentrons/issues/4890)) ([8b2904c](https://github.com/opentrons/opentrons/commit/8b2904c))
* **labware-library:** add decks 1 and 7 to labwareTestProtocol before labware test ([#4647](https://github.com/opentrons/opentrons/issues/4647)) ([f1e560a](https://github.com/opentrons/opentrons/commit/f1e560a))
* **protocol-designer:** Add awaitTemperature substep items ([#4945](https://github.com/opentrons/opentrons/issues/4945)) ([d576961](https://github.com/opentrons/opentrons/commit/d576961)), closes [#4863](https://github.com/opentrons/opentrons/issues/4863)
* **protocol-designer:** Add clarity around engage height ([#4921](https://github.com/opentrons/opentrons/issues/4921)) ([8f84e34](https://github.com/opentrons/opentrons/commit/8f84e34)), closes [#4727](https://github.com/opentrons/opentrons/issues/4727)
* **protocol-designer:** add commands for temperature step ([#4770](https://github.com/opentrons/opentrons/issues/4770)) ([6aff0e8](https://github.com/opentrons/opentrons/commit/6aff0e8))
* **protocol-designer:** add field and form level validation for pause temperature ([#4944](https://github.com/opentrons/opentrons/issues/4944)) ([ec6c1dd](https://github.com/opentrons/opentrons/commit/ec6c1dd)), closes [#4937](https://github.com/opentrons/opentrons/issues/4937)
* **protocol-designer:** add labware hover highlighting to modules ([#4843](https://github.com/opentrons/opentrons/issues/4843)) ([dfe9bda](https://github.com/opentrons/opentrons/commit/dfe9bda)), closes [#4696](https://github.com/opentrons/opentrons/issues/4696)
* **protocol-designer:** Add missing labware hint to magnet step ([#4592](https://github.com/opentrons/opentrons/issues/4592)) ([a947a14](https://github.com/opentrons/opentrons/commit/a947a14)), closes [#4303](https://github.com/opentrons/opentrons/issues/4303)
* **protocol-designer:** Add module missing labware hint to temperature step ([#4644](https://github.com/opentrons/opentrons/issues/4644)) ([f142e1c](https://github.com/opentrons/opentrons/commit/f142e1c)), closes [#4643](https://github.com/opentrons/opentrons/issues/4643)
* **protocol-designer:** Add module slot placement guidance ([#4916](https://github.com/opentrons/opentrons/issues/4916)) ([ae06796](https://github.com/opentrons/opentrons/commit/ae06796)), closes [#4815](https://github.com/opentrons/opentrons/issues/4815)
* **protocol-designer:** add temperature step form validation ([#4593](https://github.com/opentrons/opentrons/issues/4593)) ([f869c4c](https://github.com/opentrons/opentrons/commit/f869c4c)), closes [#4592](https://github.com/opentrons/opentrons/issues/4592)
* **protocol-designer:** allow temperature deck to be updated ([#4865](https://github.com/opentrons/opentrons/issues/4865)) ([c392d68](https://github.com/opentrons/opentrons/commit/c392d68)), closes [#4693](https://github.com/opentrons/opentrons/issues/4693)
* **protocol-designer:** Auto-select module in set temperature form ([#4661](https://github.com/opentrons/opentrons/issues/4661)) ([ce9d4ce](https://github.com/opentrons/opentrons/commit/ce9d4ce)), closes [#4642](https://github.com/opentrons/opentrons/issues/4642)
* **protocol-designer:** Autoselect !previous magnet action ([#4662](https://github.com/opentrons/opentrons/issues/4662)) ([d4375dd](https://github.com/opentrons/opentrons/commit/d4375dd)), closes [#4449](https://github.com/opentrons/opentrons/issues/4449)
* **protocol-designer:** change volume label to volume per well ([#4645](https://github.com/opentrons/opentrons/issues/4645)) ([f808a59](https://github.com/opentrons/opentrons/commit/f808a59)), closes [#4015](https://github.com/opentrons/opentrons/issues/4015)
* **protocol-designer:** Conditionally disabled pause until temp ([#4885](https://github.com/opentrons/opentrons/issues/4885)) ([d83646d](https://github.com/opentrons/opentrons/commit/d83646d)), closes [#4867](https://github.com/opentrons/opentrons/issues/4867)
* **protocol-designer:** Hide incompatible labware ([#4753](https://github.com/opentrons/opentrons/issues/4753)) ([9d55c56](https://github.com/opentrons/opentrons/commit/9d55c56)), closes [#4728](https://github.com/opentrons/opentrons/issues/4728)
* **protocol-designer:** Hide thermocycler functionality behind flag ([#4704](https://github.com/opentrons/opentrons/issues/4704)) ([053d9f0](https://github.com/opentrons/opentrons/commit/053d9f0)), closes [#4695](https://github.com/opentrons/opentrons/issues/4695)
* **protocol-designer:** hook up wait for temp in PD ([#4926](https://github.com/opentrons/opentrons/issues/4926)) ([710cffa](https://github.com/opentrons/opentrons/commit/710cffa)), closes [#4732](https://github.com/opentrons/opentrons/issues/4732)
* **protocol-designer:** hookup magnet step ([#4628](https://github.com/opentrons/opentrons/issues/4628)) ([33177a1](https://github.com/opentrons/opentrons/commit/33177a1)), closes [#4450](https://github.com/opentrons/opentrons/issues/4450)
* **protocol-designer:** Make moduleId field required for temperature step ([#4716](https://github.com/opentrons/opentrons/issues/4716)) ([d25b9d4](https://github.com/opentrons/opentrons/commit/d25b9d4))
* **protocol-designer:** Pause until temperature reached ([#4745](https://github.com/opentrons/opentrons/issues/4745)) ([fbbcac1](https://github.com/opentrons/opentrons/commit/fbbcac1)), closes [#4306](https://github.com/opentrons/opentrons/issues/4306)
* **protocol-designer:** Populate engageHeight field with previous values ([#4794](https://github.com/opentrons/opentrons/issues/4794)) ([b68b52d](https://github.com/opentrons/opentrons/commit/b68b52d)), closes [#4764](https://github.com/opentrons/opentrons/issues/4764)
* **protocol-designer:** render substep section in timeline for set temperature step ([#4932](https://github.com/opentrons/opentrons/issues/4932)) ([69938be](https://github.com/opentrons/opentrons/commit/69938be)), closes [#4862](https://github.com/opentrons/opentrons/issues/4862)
* **protocol-designer:** show magnetic module status in substeps and on deck ([#4724](https://github.com/opentrons/opentrons/issues/4724)) ([8b71b4a](https://github.com/opentrons/opentrons/commit/8b71b4a)), closes [#4304](https://github.com/opentrons/opentrons/issues/4304)
* **protocol-designer:** use immer in step generation ([#4769](https://github.com/opentrons/opentrons/issues/4769)) ([7915393](https://github.com/opentrons/opentrons/commit/7915393)), closes [#4697](https://github.com/opentrons/opentrons/issues/4697)
* **shared-data:** add 20uL filter tiprack ([#4532](https://github.com/opentrons/opentrons/issues/4532)) ([423da87](https://github.com/opentrons/opentrons/commit/423da87))
* **shared-data:** add new v4 JSON protocol schema ([#4846](https://github.com/opentrons/opentrons/issues/4846)) ([bd49812](https://github.com/opentrons/opentrons/commit/bd49812)), closes [#4836](https://github.com/opentrons/opentrons/issues/4836) [#4897](https://github.com/opentrons/opentrons/issues/4897)


### Performance Improvements

* **protocol-designer:** improve timeline generation performance ([#4701](https://github.com/opentrons/opentrons/issues/4701)) ([ee63163](https://github.com/opentrons/opentrons/commit/ee63163))


### Reverts

* **protocol-designer:** Revert change default exports to named exports ([#4938](https://github.com/opentrons/opentrons/issues/4938)) ([49d81c9](https://github.com/opentrons/opentrons/commit/49d81c9))





## [3.15.2](https://github.com/opentrons/opentrons/compare/v3.15.1...v3.15.2) (2019-12-17)


### Bug Fixes

* **api:** fix cancelling during the pre-protocol home ([#4627](https://github.com/opentrons/opentrons/issues/4627)) ([94852cf](https://github.com/opentrons/opentrons/commit/94852cf))
* **api:** allow labeling and versioning for module labware ([#4605](https://github.com/opentrons/opentrons/issues/4605)) ([d4d66a3](https://github.com/opentrons/opentrons/commit/d4d66a3))
* **api:** allow labels on old magdeck containers in v1 ([#4608](https://github.com/opentrons/opentrons/issues/4608)) ([37ab7b8](https://github.com/opentrons/opentrons/commit/37ab7b8)), closes [#2310](https://github.com/opentrons/opentrons/issues/2310)
* **api:** apiv1: move instrument in Z-axis prior to touch tip in XY ([#4585](https://github.com/opentrons/opentrons/issues/4585)) ([c946d5b](https://github.com/opentrons/opentrons/commit/c946d5b))
* **api:** do not allow robot.connect() in rpc protocols ([#4589](https://github.com/opentrons/opentrons/issues/4589)) ([929baea](https://github.com/opentrons/opentrons/commit/929baea)), closes [#4252](https://github.com/opentrons/opentrons/issues/4252)
* **api:** fix homing timeouts ([#4554](https://github.com/opentrons/opentrons/issues/4554)) ([31ab73b](https://github.com/opentrons/opentrons/commit/31ab73b))
* **api:** fix temp connect to attached modules during lw calibration ([#4614](https://github.com/opentrons/opentrons/issues/4614)) ([e2848f8](https://github.com/opentrons/opentrons/commit/e2848f8)), closes [#4613](https://github.com/opentrons/opentrons/issues/4613)
* **api:** limit air_gap in transfer to <max volume ([#4588](https://github.com/opentrons/opentrons/issues/4588)) ([d7a3b70](https://github.com/opentrons/opentrons/commit/d7a3b70)), closes [#364](https://github.com/opentrons/opentrons/issues/364)
* **api:** make sure the robot is connected before querying instrs ([#4611](https://github.com/opentrons/opentrons/issues/4611)) ([286f1ce](https://github.com/opentrons/opentrons/commit/286f1ce)), closes [#4590](https://github.com/opentrons/opentrons/issues/4590)
* **api:** remove unnecessary tip return ([#4566](https://github.com/opentrons/opentrons/issues/4566)) ([94df11e](https://github.com/opentrons/opentrons/commit/94df11e))
* **api:** special case pause at end of protocol ([#4603](https://github.com/opentrons/opentrons/issues/4603)) ([0080d7b](https://github.com/opentrons/opentrons/commit/0080d7b)), closes [#3238](https://github.com/opentrons/opentrons/issues/3238)
* **api:** specify v_offset in v1 transfer touch_tip ([#4602](https://github.com/opentrons/opentrons/issues/4602)) ([5605c37](https://github.com/opentrons/opentrons/commit/5605c37)), closes [#3703](https://github.com/opentrons/opentrons/issues/3703)
* **api:** update settings reset copy to avoid confusion ([#4572](https://github.com/opentrons/opentrons/issues/4572)) ([0cf9132](https://github.com/opentrons/opentrons/commit/0cf9132)), closes [#4568](https://github.com/opentrons/opentrons/issues/4568)
* **app:** disable tip probe for unused pipettes ([#4584](https://github.com/opentrons/opentrons/issues/4584)) ([9388391](https://github.com/opentrons/opentrons/commit/9388391)), closes [#4570](https://github.com/opentrons/opentrons/issues/4570)
* **app:** naïve loading state for tc open lid during lw cal ([#4616](https://github.com/opentrons/opentrons/issues/4616)) ([c4a4cdf](https://github.com/opentrons/opentrons/commit/c4a4cdf))
* **labware:** "retire" eppendorf tiprack definitions ([#4526](https://github.com/opentrons/opentrons/issues/4526)) ([ddc2800](https://github.com/opentrons/opentrons/commit/ddc2800)), closes [#4518](https://github.com/opentrons/opentrons/issues/4518)
* **protocol-designer:** filters out non trash labware for blowout options ([#4559](https://github.com/opentrons/opentrons/issues/4559)) ([aaf189d](https://github.com/opentrons/opentrons/commit/aaf189d)), closes [#4348](https://github.com/opentrons/opentrons/issues/4348) [#4348](https://github.com/opentrons/opentrons/issues/4348)
* **shared-data:** require well(s) in labware schema ([#4621](https://github.com/opentrons/opentrons/issues/4621)) ([4dcbff5](https://github.com/opentrons/opentrons/commit/4dcbff5)), closes [#4506](https://github.com/opentrons/opentrons/issues/4506)


### Features

* **api:** Handle extra labware in script entrypoints ([#4574](https://github.com/opentrons/opentrons/issues/4574)) ([8926340](https://github.com/opentrons/opentrons/commit/8926340))
* **api:** Restart jupyter with an api push ([#4581](https://github.com/opentrons/opentrons/issues/4581)) ([aa3cea3](https://github.com/opentrons/opentrons/commit/aa3cea3))
* **app:** add link to docs in resources card ([#4606](https://github.com/opentrons/opentrons/issues/4606)) ([21ec9ff](https://github.com/opentrons/opentrons/commit/21ec9ff))
* **labware-library:** change test protocol to api v2 ([#4571](https://github.com/opentrons/opentrons/issues/4571)) ([bd631d4](https://github.com/opentrons/opentrons/commit/bd631d4))
* **protocol-designer:** Add set temperature form ([#4533](https://github.com/opentrons/opentrons/issues/4533)) ([255e910](https://github.com/opentrons/opentrons/commit/255e910)), closes [#4307](https://github.com/opentrons/opentrons/issues/4307)
* **protocol-designer:** reorganize step-generation ([#4531](https://github.com/opentrons/opentrons/issues/4531)) ([125f06f](https://github.com/opentrons/opentrons/commit/125f06f)), closes [#4301](https://github.com/opentrons/opentrons/issues/4301)
* **protocol-designer:** update recommended labware article link ([#4552](https://github.com/opentrons/opentrons/issues/4552)) ([08a2d26](https://github.com/opentrons/opentrons/commit/08a2d26)), closes [#4324](https://github.com/opentrons/opentrons/issues/4324)





## [3.15.1](https://github.com/opentrons/opentrons/compare/v3.15.0...v3.15.1) (2019-12-09)

### Bug Fixes

* **api:** shadow the magdeck height in v1 ([#4561](https://github.com/opentrons/opentrons/issues/4561)) ([d7b4351](https://github.com/opentrons/opentrons/commit/d7b4351))
* **api:** Allow Location types for multichannels in transfer ([#4555](https://github.com/opentrons/opentrons/issues/4555)) ([6449401](https://github.com/opentrons/opentrons/commit/6449401))
* **api:** always do equivalent v1 factory resets ([#4556](https://github.com/opentrons/opentrons/issues/4556)) ([87abf31](https://github.com/opentrons/opentrons/commit/87abf31))





# [3.15.0](https://github.com/opentrons/opentrons/compare/v3.14.1...v3.15.0) (2019-12-05)


### Features

* **app:** add simple aggregate event tracking for custom labware ([#4544](https://github.com/opentrons/opentrons/issues/4544)) ([b4fd536](https://github.com/opentrons/opentrons/commit/b4fd536)), closes [#4537](https://github.com/opentrons/opentrons/issues/4537)
* **app:** put bundle upload + exec under ff ([#4541](https://github.com/opentrons/opentrons/issues/4541)) ([9023d95](https://github.com/opentrons/opentrons/commit/9023d95))
* **app:** enable custom labware management in the app ([#4525](https://github.com/opentrons/opentrons/issues/4525)) ([e1c9958](https://github.com/opentrons/opentrons/commit/e1c9958))
* **api:** add extra labware in session ([#4490](https://github.com/opentrons/opentrons/issues/4490)) ([27666db](https://github.com/opentrons/opentrons/commit/27666db))
* **api:** add http endpoint for robot settings dump ([#4344](https://github.com/opentrons/opentrons/issues/4344)) ([bb91107](https://github.com/opentrons/opentrons/commit/bb91107))
* **api:** Add locks on direct data access for mag and temp module ([#4501](https://github.com/opentrons/opentrons/issues/4501)) ([17a27c7](https://github.com/opentrons/opentrons/commit/17a27c7))
* **api:** add the maximum supported protocol api version ([#4363](https://github.com/opentrons/opentrons/issues/4363)) ([086723d](https://github.com/opentrons/opentrons/commit/086723d))
* **api:** add volume parameter to thermocycler temperature commands ([#4500](https://github.com/opentrons/opentrons/issues/4500)) ([ad3d77f](https://github.com/opentrons/opentrons/commit/ad3d77f)), closes [#4264](https://github.com/opentrons/opentrons/issues/4264)
* **api:** apiv2: backcompat: implement LegacyWell position methods ([#4448](https://github.com/opentrons/opentrons/issues/4448)) ([222cf37](https://github.com/opentrons/opentrons/commit/222cf37))
* **api:** apiv2: implement instruments backcompat ([#4458](https://github.com/opentrons/opentrons/issues/4458)) ([ffb2942](https://github.com/opentrons/opentrons/commit/ffb2942)), closes [#3540](https://github.com/opentrons/opentrons/issues/3540)
* **api:** apiv2: Limit protocols to max supported version ([#4365](https://github.com/opentrons/opentrons/issues/4365)) ([8decf1a](https://github.com/opentrons/opentrons/commit/8decf1a)), closes [#4342](https://github.com/opentrons/opentrons/issues/4342)
* **api:** apiv2: v1-backcompat: implement module backcompat ([#4438](https://github.com/opentrons/opentrons/issues/4438)) ([2a42591](https://github.com/opentrons/opentrons/commit/2a42591)), closes [#3655](https://github.com/opentrons/opentrons/issues/3655)
* **api:** check papi version on method call ([#4399](https://github.com/opentrons/opentrons/issues/4399)) ([493029c](https://github.com/opentrons/opentrons/commit/493029c)), closes [#4343](https://github.com/opentrons/opentrons/issues/4343)
* **api:** enable v2 internals by default ([#4474](https://github.com/opentrons/opentrons/issues/4474)) ([e25bb55](https://github.com/opentrons/opentrons/commit/e25bb55))
* **api:** Migrate DB Labware into V2 Format ([#4256](https://github.com/opentrons/opentrons/issues/4256)) ([d0c3f4a](https://github.com/opentrons/opentrons/commit/d0c3f4a))
* **api:** register module instances on os events ([#4441](https://github.com/opentrons/opentrons/issues/4441)) ([89afd64](https://github.com/opentrons/opentrons/commit/89afd64)), closes [#3580](https://github.com/opentrons/opentrons/issues/3580)
* **api:** surface protocol apiv1 backcompat in apiv2 ([#4473](https://github.com/opentrons/opentrons/issues/4473)) ([831e963](https://github.com/opentrons/opentrons/commit/831e963))
* **api:** warn tc-lid/gantry collision in simulation ([#4394](https://github.com/opentrons/opentrons/issues/4394)) ([b22a3b3](https://github.com/opentrons/opentrons/commit/b22a3b3)), closes [#4044](https://github.com/opentrons/opentrons/issues/4044)
* **api,shared-data:** support p20/300/1k single v2.1 ([#4392](https://github.com/opentrons/opentrons/issues/4392)) ([e743d2b](https://github.com/opentrons/opentrons/commit/e743d2b)), closes [#4389](https://github.com/opentrons/opentrons/issues/4389)
* **app:** Display robot and protocol api versions ([#4502](https://github.com/opentrons/opentrons/issues/4502)) ([00f333e](https://github.com/opentrons/opentrons/commit/00f333e)), closes [#4362](https://github.com/opentrons/opentrons/issues/4362)
* **app:** parse subnest out of CIDR-notation IP address ([#4372](https://github.com/opentrons/opentrons/issues/4372)) ([ac74c12](https://github.com/opentrons/opentrons/commit/ac74c12)), closes [#4075](https://github.com/opentrons/opentrons/issues/4075)
* **app,api:** allow rich version specification for python protocols ([#4358](https://github.com/opentrons/opentrons/issues/4358)) ([b0adef5](https://github.com/opentrons/opentrons/commit/b0adef5)), closes [#4338](https://github.com/opentrons/opentrons/issues/4338)
* **protocol-designer:** add compatibility info to LabwarePreview ([#4393](https://github.com/opentrons/opentrons/issues/4393)) ([df9f41d](https://github.com/opentrons/opentrons/commit/df9f41d)), closes [#4135](https://github.com/opentrons/opentrons/issues/4135)
* **protocol-designer:** Add edit modules modal ([#4320](https://github.com/opentrons/opentrons/issues/4320)) ([bb71ae8](https://github.com/opentrons/opentrons/commit/bb71ae8))
* **protocol-designer:** Add magnet step form field validation ([#4469](https://github.com/opentrons/opentrons/issues/4469)) ([07d7905](https://github.com/opentrons/opentrons/commit/07d7905)), closes [#4300](https://github.com/opentrons/opentrons/issues/4300)
* **protocol-designer:** Add magnet step UI ([#4455](https://github.com/opentrons/opentrons/issues/4455)) ([963288b](https://github.com/opentrons/opentrons/commit/963288b))
* **protocol-designer:** Add module placement warning and validation ([#4425](https://github.com/opentrons/opentrons/issues/4425)) ([9034128](https://github.com/opentrons/opentrons/commit/9034128)), closes [#4137](https://github.com/opentrons/opentrons/issues/4137)
* **protocol-designer:** add module slot visualization ([#4355](https://github.com/opentrons/opentrons/issues/4355)) ([187fae0](https://github.com/opentrons/opentrons/commit/187fae0)), closes [#4310](https://github.com/opentrons/opentrons/issues/4310)
* **protocol-designer:** add warning when using expt features ([#4447](https://github.com/opentrons/opentrons/issues/4447)) ([15fcbd7](https://github.com/opentrons/opentrons/commit/15fcbd7)), closes [#4129](https://github.com/opentrons/opentrons/issues/4129)
* **protocol-designer:** blocking hint on adding custom labware to modal ([#4383](https://github.com/opentrons/opentrons/issues/4383)) ([f04d67e](https://github.com/opentrons/opentrons/commit/f04d67e)), closes [#4329](https://github.com/opentrons/opentrons/issues/4329)
* **protocol-designer:** Disable module step creation when module missing ([#4468](https://github.com/opentrons/opentrons/issues/4468)) ([f2e1a9e](https://github.com/opentrons/opentrons/commit/f2e1a9e)), closes [#4456](https://github.com/opentrons/opentrons/issues/4456)
* **protocol-designer:** Enable adding and editing modules in file page ([#4385](https://github.com/opentrons/opentrons/issues/4385)) ([6d975fd](https://github.com/opentrons/opentrons/commit/6d975fd)), closes [#4317](https://github.com/opentrons/opentrons/issues/4317)
* **protocol-designer:** Enable slot selection for modules when FF enabled ([#4347](https://github.com/opentrons/opentrons/issues/4347)) ([31fa641](https://github.com/opentrons/opentrons/commit/31fa641)), closes [#4133](https://github.com/opentrons/opentrons/issues/4133)
* **protocol-designer:** enforce labware<>module compat ([#4427](https://github.com/opentrons/opentrons/issues/4427)) ([4d42156](https://github.com/opentrons/opentrons/commit/4d42156)), closes [#4136](https://github.com/opentrons/opentrons/issues/4136)
* **protocol-designer:** expose GEN2 pipettes in pipette select ([#4351](https://github.com/opentrons/opentrons/issues/4351)) ([6195a2d](https://github.com/opentrons/opentrons/commit/6195a2d)), closes [#4295](https://github.com/opentrons/opentrons/issues/4295)
* **protocol-designer:** fix labware duplication bug ([#4429](https://github.com/opentrons/opentrons/issues/4429)) ([a0b321a](https://github.com/opentrons/opentrons/commit/a0b321a)), closes [#4407](https://github.com/opentrons/opentrons/issues/4407)
* **protocol-designer:** hook up module creation in NewFileModal ([#4319](https://github.com/opentrons/opentrons/issues/4319)) ([c2dba36](https://github.com/opentrons/opentrons/commit/c2dba36))
* **protocol-designer:** ignore labware<>module collision error in rogue mode ([#4437](https://github.com/opentrons/opentrons/issues/4437)) ([99526ae](https://github.com/opentrons/opentrons/commit/99526ae)), closes [#4130](https://github.com/opentrons/opentrons/issues/4130)
* **protocol-designer:** labware<>module incompat DnD behavior ([#4409](https://github.com/opentrons/opentrons/issues/4409)) ([e7f0334](https://github.com/opentrons/opentrons/commit/e7f0334)), closes [#4136](https://github.com/opentrons/opentrons/issues/4136)
* **protocol-designer:** move deck setup guidance to hint modal ([#4463](https://github.com/opentrons/opentrons/issues/4463)) ([ae4e7be](https://github.com/opentrons/opentrons/commit/ae4e7be)), closes [#4328](https://github.com/opentrons/opentrons/issues/4328)
* **protocol-designer:** Render crash warning for modules with Gen1 multi pipettes ([#4410](https://github.com/opentrons/opentrons/issues/4410)) ([9981193](https://github.com/opentrons/opentrons/commit/9981193)), closes [#4373](https://github.com/opentrons/opentrons/issues/4373)
* **protocol-designer:** render modules on deck ([#4309](https://github.com/opentrons/opentrons/issues/4309)) ([20514f0](https://github.com/opentrons/opentrons/commit/20514f0))
* **protocol-designer:** save/load protocols with modules in prepro PD ([#4419](https://github.com/opentrons/opentrons/issues/4419)) ([2b98da2](https://github.com/opentrons/opentrons/commit/2b98da2))
* **protocol-designer:** show module<>pipette collision error ([#4436](https://github.com/opentrons/opentrons/issues/4436)) ([21cbca1](https://github.com/opentrons/opentrons/commit/21cbca1)), closes [#4130](https://github.com/opentrons/opentrons/issues/4130)
* **protocol-designer:** show special-case warning for north/south ([#4361](https://github.com/opentrons/opentrons/issues/4361)) ([86912e8](https://github.com/opentrons/opentrons/commit/86912e8)), closes [#4332](https://github.com/opentrons/opentrons/issues/4332)
* **protocol-designer:** updates to LabwareSelectionModal ([#4325](https://github.com/opentrons/opentrons/issues/4325)) ([04d8fea](https://github.com/opentrons/opentrons/commit/04d8fea)), closes [#4323](https://github.com/opentrons/opentrons/issues/4323)
* **protocol-designer:** Wire up modules card with actual data ([#4354](https://github.com/opentrons/opentrons/issues/4354)) ([33c5952](https://github.com/opentrons/opentrons/commit/33c5952))
* **protocol-library-kludge:** support v2 labware ([#4507](https://github.com/opentrons/opentrons/issues/4507)) ([8117289](https://github.com/opentrons/opentrons/commit/8117289)), closes [#4505](https://github.com/opentrons/opentrons/issues/4505)



### Bug Fixes

* **api:** ensure load name is attached to RPC "containers" ([#4530](https://github.com/opentrons/opentrons/issues/4530)) ([4580aa4](https://github.com/opentrons/opentrons/commit/4580aa4))
* **api:** Fix critical points and gantry config backup in http deck cal ([#4527](https://github.com/opentrons/opentrons/issues/4527)) ([cfefab4](https://github.com/opentrons/opentrons/commit/cfefab4))
* **api:** present loaded but unused pipettes and modules to rpc ([#4538](https://github.com/opentrons/opentrons/issues/4538)) ([fe27ef7](https://github.com/opentrons/opentrons/commit/fe27ef7))
* **api:** prevent liquid handling without a tip ([#4528](https://github.com/opentrons/opentrons/issues/4528)) ([e1724ab](https://github.com/opentrons/opentrons/commit/e1724ab)), closes [#4219](https://github.com/opentrons/opentrons/issues/4219)
* **app:** consolidate nav state to disable calibrate link on file info page ([#4514](https://github.com/opentrons/opentrons/issues/4514)) ([842f15c](https://github.com/opentrons/opentrons/commit/842f15c))
* **shared-data:** increase GEN2 pipette plunger & drop tip current ([#4523](https://github.com/opentrons/opentrons/issues/4523)) ([e6909b9](https://github.com/opentrons/opentrons/commit/e6909b9))
* **api:** clear running module tasks on cancel ([#4464](https://github.com/opentrons/opentrons/issues/4464)) ([5135da9](https://github.com/opentrons/opentrons/commit/5135da9))
* **api:** connect context to real thermocycler during calibration ([#4454](https://github.com/opentrons/opentrons/issues/4454)) ([1d40fd6](https://github.com/opentrons/opentrons/commit/1d40fd6))
* **api:** fix bad adv settings crash ([#4489](https://github.com/opentrons/opentrons/issues/4489)) ([34fb8e7](https://github.com/opentrons/opentrons/commit/34fb8e7))
* **api:** fix calibration issues in backcompat ([#4480](https://github.com/opentrons/opentrons/issues/4480)) ([7153be3](https://github.com/opentrons/opentrons/commit/7153be3))
* **api:** flag move to tc with in-between lid as unsafe ([#4488](https://github.com/opentrons/opentrons/issues/4488)) ([1741088](https://github.com/opentrons/opentrons/commit/1741088))
* **api:** Suppress error log during check for pipettes ([#4374](https://github.com/opentrons/opentrons/issues/4374)) ([b68caac](https://github.com/opentrons/opentrons/commit/b68caac)), closes [#4096](https://github.com/opentrons/opentrons/issues/4096)
* **api:** tools: fix `write_pipette_memory` on host ([#4434](https://github.com/opentrons/opentrons/issues/4434)) ([f3eef16](https://github.com/opentrons/opentrons/commit/f3eef16))
* **api:** wrap modules hc instance in async adapter on load ([#4492](https://github.com/opentrons/opentrons/issues/4492)) ([99d3a47](https://github.com/opentrons/opentrons/commit/99d3a47))
* **api,shared-data:** fix gen2 multi positioning ([#4412](https://github.com/opentrons/opentrons/issues/4412)) ([54be7f9](https://github.com/opentrons/opentrons/commit/54be7f9))
* **APIV2:** Make tipracks always calibrate from top ([#4418](https://github.com/opentrons/opentrons/issues/4418)) ([bf2cf8c](https://github.com/opentrons/opentrons/commit/bf2cf8c))
* **app:** add handling for legacy(location,well,labware) in rpc ([#4478](https://github.com/opentrons/opentrons/issues/4478)) ([4528c7a](https://github.com/opentrons/opentrons/commit/4528c7a))
* **app:** Call correct create method depending on protocol ([#4509](https://github.com/opentrons/opentrons/issues/4509)) ([a3ec421](https://github.com/opentrons/opentrons/commit/a3ec421)), closes [#4202](https://github.com/opentrons/opentrons/issues/4202)
* **app:** display robot ip not robot ip subnet base ([#4411](https://github.com/opentrons/opentrons/issues/4411)) ([57cdfee](https://github.com/opentrons/opentrons/commit/57cdfee)), closes [#4372](https://github.com/opentrons/opentrons/issues/4372)
* **app:** prevent user from proceeding if uploaded protocol has no steps ([#4381](https://github.com/opentrons/opentrons/issues/4381)) ([a8344e9](https://github.com/opentrons/opentrons/commit/a8344e9)), closes [#3121](https://github.com/opentrons/opentrons/issues/3121)
* **app-shell:** improve context menu and log handling ([#4472](https://github.com/opentrons/opentrons/issues/4472)) ([de15135](https://github.com/opentrons/opentrons/commit/de15135)), closes [#4293](https://github.com/opentrons/opentrons/issues/4293)
* **app,api:** display session error messages in SessionAlert ([#4378](https://github.com/opentrons/opentrons/issues/4378)) ([19d3e00](https://github.com/opentrons/opentrons/commit/19d3e00)), closes [#4367](https://github.com/opentrons/opentrons/issues/4367)
* **docs:** v2/writing: 'left' = 'right', use pipette name ([662279c](https://github.com/opentrons/opentrons/commit/662279c))
* **protocol-designer:** fix bug in manualIntervention step ([#4350](https://github.com/opentrons/opentrons/issues/4350)) ([2648052](https://github.com/opentrons/opentrons/commit/2648052)), closes [#4334](https://github.com/opentrons/opentrons/issues/4334)
* **protocol-designer:** fix labware incompat drag warning ([#4428](https://github.com/opentrons/opentrons/issues/4428)) ([467c2e4](https://github.com/opentrons/opentrons/commit/467c2e4))



### Performance Improvements

* **api:** use math.isclose in hotpaths ([#4510](https://github.com/opentrons/opentrons/issues/4510)) ([fb6aef8](https://github.com/opentrons/opentrons/commit/fb6aef8)), closes [#4482](https://github.com/opentrons/opentrons/issues/4482) [#4482](https://github.com/opentrons/opentrons/issues/4482)





## [3.14.1](https://github.com/opentrons/opentrons/compare/v3.14.1-alpha.2...v3.14.1) (2019-11-11)

**Note:** Version bump only for package opentrons





# [3.14.0](https://github.com/opentrons/opentrons/compare/v3.13.2...v3.14.0) (2019-10-31)


### Bug Fixes

* **api:** apiv2: initialize simulator runflag ([#4330](https://github.com/opentrons/opentrons/issues/4330)) ([9405695](https://github.com/opentrons/opentrons/commit/9405695))
* **api:** Modify list check to return first item of source and dest ([#4331](https://github.com/opentrons/opentrons/issues/4331)) ([4802beb](https://github.com/opentrons/opentrons/commit/4802beb))
* **api:** update all pose tree state when calibrating labware ([#4322](https://github.com/opentrons/opentrons/issues/4322)) ([24841ab](https://github.com/opentrons/opentrons/commit/24841ab)), closes [#4288](https://github.com/opentrons/opentrons/issues/4288)
* **api:** Allow Location types in advanced liquid handling functions ([#4276](https://github.com/opentrons/opentrons/issues/4276)) ([8f015b8](https://github.com/opentrons/opentrons/commit/8f015b8))
* **api:** always touch tip before blow out ([#4265](https://github.com/opentrons/opentrons/issues/4265)) ([1e54098](https://github.com/opentrons/opentrons/commit/1e54098))
* **api:** api1: consider model offset in cli deck cal tip pickup ([#4253](https://github.com/opentrons/opentrons/issues/4253)) ([e1963ae](https://github.com/opentrons/opentrons/commit/e1963ae)), closes [#4250](https://github.com/opentrons/opentrons/issues/4250)
* **api:** apiv1: touch tip before blowing out during transfers ([#4231](https://github.com/opentrons/opentrons/issues/4231)) ([294aa8f](https://github.com/opentrons/opentrons/commit/294aa8f)), closes [#419](https://github.com/opentrons/opentrons/issues/419)
* **api:** apiv2: correctly set smoothie speed ([#4263](https://github.com/opentrons/opentrons/issues/4263)) ([3e6d26d](https://github.com/opentrons/opentrons/commit/3e6d26d))
* **api:** apiv2: fix air gap in complex commands ([#4259](https://github.com/opentrons/opentrons/issues/4259)) ([e4ba931](https://github.com/opentrons/opentrons/commit/e4ba931))
* **api:** correctly handle mix optional arguments ([#4237](https://github.com/opentrons/opentrons/issues/4237)) ([e5fa621](https://github.com/opentrons/opentrons/commit/e5fa621))
* **api:** Do not throw warning if run flag is set ([#4294](https://github.com/opentrons/opentrons/issues/4294)) ([150c784](https://github.com/opentrons/opentrons/commit/150c784))
* **api:** Use proper currents for plunger home ([#4167](https://github.com/opentrons/opentrons/issues/4167)) ([b17eaff](https://github.com/opentrons/opentrons/commit/b17eaff)), closes [#3572](https://github.com/opentrons/opentrons/issues/3572)
* **api,shared-data,labware-creator:** do not touch tip on troughs ([#4271](https://github.com/opentrons/opentrons/issues/4271)) ([d7e76cd](https://github.com/opentrons/opentrons/commit/d7e76cd)), closes [#4258](https://github.com/opentrons/opentrons/issues/4258)
* **labware-creator:** fix radio group touched on change in Mac FF ([#4210](https://github.com/opentrons/opentrons/issues/4210)) ([8c89022](https://github.com/opentrons/opentrons/commit/8c89022)), closes [#4209](https://github.com/opentrons/opentrons/issues/4209)
* **labware-library:** Remove global CSS that's breaking filter link styling ([#4239](https://github.com/opentrons/opentrons/issues/4239)) ([11bdec4](https://github.com/opentrons/opentrons/commit/11bdec4))
* **protocol-designer:** fix copy & link for custom labware ([#4232](https://github.com/opentrons/opentrons/issues/4232)) ([1490f65](https://github.com/opentrons/opentrons/commit/1490f65))
* **shared-data:** swap X/Y spacing for 24-well nest tuberacks ([#4240](https://github.com/opentrons/opentrons/issues/4240)) ([34330ed](https://github.com/opentrons/opentrons/commit/34330ed))


### Features

* **api:** Allow backwards compatibility with gen2 pipettes in apiv2 ([#4326](https://github.com/opentrons/opentrons/issues/4326)) ([4609172](https://github.com/opentrons/opentrons/commit/4609172))
* **api:** reflect original instrument name via rpc ([#4312](https://github.com/opentrons/opentrons/issues/4312)) ([8bf0c85](https://github.com/opentrons/opentrons/commit/8bf0c85))
* **app:** allow inexact cross-generational pipette compatibility ([#4311](https://github.com/opentrons/opentrons/issues/4311)) ([95dae6a](https://github.com/opentrons/opentrons/commit/95dae6a)), closes [#3598](https://github.com/opentrons/opentrons/issues/3598)
* **app:** allow p1000 gen2 to fallback to specced p1000 gen1 ([#4316](https://github.com/opentrons/opentrons/issues/4316)) ([0e33f65](https://github.com/opentrons/opentrons/commit/0e33f65)), closes [#3598](https://github.com/opentrons/opentrons/issues/3598)
* **shared-data:** add "GEN1" to gen 1 pipette display names ([#4313](https://github.com/opentrons/opentrons/issues/4313)) ([cbdc814](https://github.com/opentrons/opentrons/commit/cbdc814))
* **api:** add ability to update TC firmware from robot ([#4277](https://github.com/Opentrons/opentrons/pull/4277))
* **api:** Add bundle creation to opentrons_simulate ([#4125](https://github.com/opentrons/opentrons/issues/4125)) ([b1d9d66](https://github.com/opentrons/opentrons/commit/b1d9d66))
* **api:** apiv2: add max speed control ([#4187](https://github.com/opentrons/opentrons/issues/4187)) ([ed48382](https://github.com/opentrons/opentrons/commit/ed48382))
* **api:** apiv2: conditionally enable backcompat ([#4234](https://github.com/opentrons/opentrons/issues/4234)) ([806af2c](https://github.com/opentrons/opentrons/commit/806af2c))
* **api:** apiv2: implement robot methods backcompat ([#4201](https://github.com/opentrons/opentrons/issues/4201)) ([685599f](https://github.com/opentrons/opentrons/commit/685599f)), closes [#3539](https://github.com/opentrons/opentrons/issues/3539)
* **api:** deprecate api support for JSON v1/2 ([#4155](https://github.com/opentrons/opentrons/issues/4155)) ([61361a8](https://github.com/opentrons/opentrons/commit/61361a8)), closes [#4128](https://github.com/opentrons/opentrons/issues/4128)
* **api:** implement deck item spanning first pass ([#4160](https://github.com/opentrons/opentrons/issues/4160)) ([1b621a4](https://github.com/opentrons/opentrons/commit/1b621a4)), closes [#3107](https://github.com/opentrons/opentrons/issues/3107)
* **api:** Specify if a restart is required after changing some ffs ([#4233](https://github.com/opentrons/opentrons/issues/4233)) ([9452ffa](https://github.com/opentrons/opentrons/commit/9452ffa))
* **api:** v1: Add version specification to labware.load ([#4218](https://github.com/opentrons/opentrons/issues/4218)) ([37060ce](https://github.com/opentrons/opentrons/commit/37060ce)), closes [#4216](https://github.com/opentrons/opentrons/issues/4216)
* **app:** add robot restart alert for FF changes that require restart ([#4285](https://github.com/opentrons/opentrons/issues/4285)) ([96408a1](https://github.com/opentrons/opentrons/commit/96408a1))
* **app:** Enable GEN2 pipettes ([#4297](https://github.com/opentrons/opentrons/issues/4297)) ([f9d2c3b](https://github.com/opentrons/opentrons/commit/f9d2c3b)), closes [#3601](https://github.com/opentrons/opentrons/issues/3601)
* **app:** improve modules on run tab, enable module temp control for tc and td ([#4172](https://github.com/opentrons/opentrons/issues/4172)) ([c11de69](https://github.com/opentrons/opentrons/commit/c11de69)), closes [#4021](https://github.com/opentrons/opentrons/issues/4021)
* **app:** restrict calibrate and run on incompatible pipettes ([#4185](https://github.com/opentrons/opentrons/issues/4185)) ([02fcd4c](https://github.com/opentrons/opentrons/commit/02fcd4c))
* **labware-creator:** add analytics events skeleton ([#4168](https://github.com/opentrons/opentrons/issues/4168)) ([3593171](https://github.com/opentrons/opentrons/commit/3593171))
* **labware-creator:** Guide user to labware test ([#4153](https://github.com/opentrons/opentrons/issues/4153)) ([4bc00c4](https://github.com/opentrons/opentrons/commit/4bc00c4)), closes [#4118](https://github.com/opentrons/opentrons/issues/4118)
* **labware-library:** Add link for LC to LL sidebar ([#4154](https://github.com/opentrons/opentrons/issues/4154)) ([4117e8e](https://github.com/opentrons/opentrons/commit/4117e8e)), closes [#4147](https://github.com/opentrons/opentrons/issues/4147)
* **labware-library:** add P20 tip rack image to library ([#4280](https://github.com/opentrons/opentrons/issues/4280)) ([63032fb](https://github.com/opentrons/opentrons/commit/63032fb))
* **labware-library:** hook up LC analytics and opt-in ([#4177](https://github.com/opentrons/opentrons/issues/4177)) ([bad03e1](https://github.com/opentrons/opentrons/commit/bad03e1)), closes [#4115](https://github.com/opentrons/opentrons/issues/4115) [#4116](https://github.com/opentrons/opentrons/issues/4116) [#4117](https://github.com/opentrons/opentrons/issues/4117)
* **protocol-designer:** add new actions for module interactions ([#4275](https://github.com/opentrons/opentrons/issues/4275)) ([5e9fa80](https://github.com/opentrons/opentrons/commit/5e9fa80))
* **protocol-designer:** add reducers for module placement ([#4287](https://github.com/opentrons/opentrons/issues/4287)) ([7973d2a](https://github.com/opentrons/opentrons/commit/7973d2a))
* **protocol-designer:** Add unrestricted module placement FF ([#4289](https://github.com/opentrons/opentrons/issues/4289)) ([4c59d4d](https://github.com/opentrons/opentrons/commit/4c59d4d)), closes [#4134](https://github.com/opentrons/opentrons/issues/4134)
* **protocol-designer:** promote custom labware upload to full feature ([#4207](https://github.com/opentrons/opentrons/issues/4207)) ([c19634e](https://github.com/opentrons/opentrons/commit/c19634e))
* **shared-data:** add NEST labware ([#4156](https://github.com/opentrons/opentrons/issues/4156)) ([0d2491d](https://github.com/opentrons/opentrons/commit/0d2491d))
* **update-server:** add clear all keys endpoint link local ([#4182](https://github.com/opentrons/opentrons/issues/4182)) ([5b04918](https://github.com/opentrons/opentrons/commit/5b04918))





## [3.13.2](https://github.com/Opentrons/opentrons/compare/v3.13.1...v3.13.2) (2019-10-10)


### Bug Fixes

* **app:** fix broken back-compat for pre-3.13.x robots ([#4203](https://github.com/Opentrons/opentrons/issues/4203)) ([9243a8d](https://github.com/Opentrons/opentrons/commit/9243a8d)), closes [#4202](https://github.com/Opentrons/opentrons/issues/4202)





## [3.13.1](https://github.com/opentrons/opentrons/compare/v3.13.0...v3.13.1) (2019-10-09)


### Bug Fixes

* **api:** change trash definitions to avoid y head crash ([#4188](https://github.com/opentrons/opentrons/issues/4188)) ([68b6201](https://github.com/opentrons/opentrons/commit/68b6201))





# [3.13.0](https://github.com/opentrons/opentrons/compare/v3.12.0...v3.13.0) (2019-10-02)


### Bug Fixes

* **api:** Only load labware for modules from bundles ([#4162](https://github.com/opentrons/opentrons/issues/4162)) ([f3eb988](https://github.com/opentrons/opentrons/commit/f3eb988))
* **api:** Put camera images in tempdirs ([#4163](https://github.com/opentrons/opentrons/issues/4163)) ([1411da8](https://github.com/opentrons/opentrons/commit/1411da8)), closes [#4122](https://github.com/opentrons/opentrons/issues/4122)
* **api:** Do not run out of memory when dumping large logs ([#4157](https://github.com/opentrons/opentrons/issues/4157)) ([56354f2](https://github.com/opentrons/opentrons/commit/56354f2))
* **api:** Fix sim and exec entrypoints for bundled protocols ([#4149](https://github.com/opentrons/opentrons/issues/4149)) ([7163924](https://github.com/opentrons/opentrons/commit/7163924))
* **api:** reflect protocol text over rpc ([#4152](https://github.com/opentrons/opentrons/issues/4152)) ([dae2de5](https://github.com/opentrons/opentrons/commit/dae2de5))
* **app:** fix zip mimetype bug ([#4150](https://github.com/opentrons/opentrons/issues/4150)) ([9f4c357](https://github.com/opentrons/opentrons/commit/9f4c357))
* **api:** apiv2: allow pipette name or model in cache_instruments ([#4063](https://github.com/opentrons/opentrons/issues/4063)) ([f29ab14](https://github.com/opentrons/opentrons/commit/f29ab14)), closes [#4062](https://github.com/opentrons/opentrons/issues/4062)
* **api:** apiv2: allow transfer with uneven sources and targets  ([#4107](https://github.com/opentrons/opentrons/issues/4107)) ([036eca1](https://github.com/opentrons/opentrons/commit/036eca1))
* **api:** apiv2: pass correct locations for mix in TransferPlan ([#4076](https://github.com/opentrons/opentrons/issues/4076)) ([067098d](https://github.com/opentrons/opentrons/commit/067098d))
* **api:** apiv2: Separate tip overlap per pipette ([#4106](https://github.com/opentrons/opentrons/issues/4106)) ([1bac2a9](https://github.com/opentrons/opentrons/commit/1bac2a9)), closes [#4103](https://github.com/opentrons/opentrons/issues/4103)
* **api:** cache location before pick up tip during labware calibration ([#4033](https://github.com/opentrons/opentrons/issues/4033)) ([8dc8bb9](https://github.com/opentrons/opentrons/commit/8dc8bb9))
* **api:** dont parse the smoothie response to udpate_pipette_config ([#4112](https://github.com/opentrons/opentrons/issues/4112)) ([109cdcc](https://github.com/opentrons/opentrons/commit/109cdcc))
* **api:** Expand infer_version_from_metadata to catch more ([#4094](https://github.com/opentrons/opentrons/issues/4094)) ([1f7ad77](https://github.com/opentrons/opentrons/commit/1f7ad77)), closes [#3949](https://github.com/opentrons/opentrons/issues/3949)
* **api:** fix format string in module slot assertion ([#4039](https://github.com/opentrons/opentrons/issues/4039)) ([2a88233](https://github.com/opentrons/opentrons/commit/2a88233))
* **api:** Fix miscellaneous bugs in deck CLI ([#4119](https://github.com/opentrons/opentrons/issues/4119)) ([7e7196a](https://github.com/opentrons/opentrons/commit/7e7196a))
* **api:** Fix usage of return tip height v1 ([#4040](https://github.com/opentrons/opentrons/issues/4040)) ([3f4ace6](https://github.com/opentrons/opentrons/commit/3f4ace6))
* **api:** Force the permanent mac address for wifi connections ([#4121](https://github.com/opentrons/opentrons/issues/4121)) ([7cfa929](https://github.com/opentrons/opentrons/commit/7cfa929))
* **app:** Disable run start button if missing modules ([#3994](https://github.com/opentrons/opentrons/issues/3994)) ([5c75152](https://github.com/opentrons/opentrons/commit/5c75152)), closes [#2676](https://github.com/opentrons/opentrons/issues/2676)
* **app:** ensure gantry not blocking pcr seal placement ([#4071](https://github.com/opentrons/opentrons/issues/4071)) ([01d6858](https://github.com/opentrons/opentrons/commit/01d6858)), closes [#4034](https://github.com/opentrons/opentrons/issues/4034)
* **app,labware-library:** Upgrade to react-router 5 and fix imports ([#4084](https://github.com/opentrons/opentrons/issues/4084)) ([5595f8d](https://github.com/opentrons/opentrons/commit/5595f8d))
* **protocol-designer:** fix tip position bug with zero ([#4079](https://github.com/opentrons/opentrons/issues/4079)) ([be82a73](https://github.com/opentrons/opentrons/commit/be82a73)), closes [#4057](https://github.com/opentrons/opentrons/issues/4057)
* **protocol-designer:** show form error state in StepItems ([#4080](https://github.com/opentrons/opentrons/issues/4080)) ([2aa1556](https://github.com/opentrons/opentrons/commit/2aa1556)), closes [#3678](https://github.com/opentrons/opentrons/issues/3678)


### Features

* **api:** apiv1: load magdeck engage height from labware definitions ([#4042](https://github.com/opentrons/opentrons/issues/4042)) ([f232659](https://github.com/opentrons/opentrons/commit/f232659)), closes [#3832](https://github.com/opentrons/opentrons/issues/3832)
* **api:** apiv2: improve accessors for loaded lw/mods/instrs ([#4068](https://github.com/opentrons/opentrons/issues/4068)) ([fc289dd](https://github.com/opentrons/opentrons/commit/fc289dd))
* **api:** Explicit cmdline and jupyter entrypoints ([#4032](https://github.com/opentrons/opentrons/issues/4032)) ([b534096](https://github.com/opentrons/opentrons/commit/b534096))
* **api:** replace format with quirks for rectangular well behavior ([#4027](https://github.com/opentrons/opentrons/issues/4027)) ([42deac2](https://github.com/opentrons/opentrons/commit/42deac2)), closes [#3894](https://github.com/opentrons/opentrons/issues/3894)
* **api:** support experimental bundle execution ([#4099](https://github.com/opentrons/opentrons/issues/4099)) ([1c503ed](https://github.com/opentrons/opentrons/commit/1c503ed))
* **components, app:** add custom pipette select with category support ([#3996](https://github.com/opentrons/opentrons/issues/3996)) ([47f0713](https://github.com/opentrons/opentrons/commit/47f0713))
* **labware-library:** add Labware Creator ([#4031](https://github.com/opentrons/opentrons/issues/4031)) ([0a4aa7c](https://github.com/opentrons/opentrons/commit/0a4aa7c))
* **protocol-designer:** avoid use of labware "format" ([#4070](https://github.com/opentrons/opentrons/issues/4070)) ([f8603a6](https://github.com/opentrons/opentrons/commit/f8603a6)), closes [#3894](https://github.com/opentrons/opentrons/issues/3894)
* **protocol-designer:** disallow standard labware def upload ([#4077](https://github.com/opentrons/opentrons/issues/4077)) ([5670823](https://github.com/opentrons/opentrons/commit/5670823)), closes [#4009](https://github.com/opentrons/opentrons/issues/4009)
* **app:** show spinner while robot logs are downloading ([#4158](https://github.com/opentrons/opentrons/issues/4158)) ([cd50c42](https://github.com/opentrons/opentrons/commit/cd50c42))




# [3.12.0](https://github.com/Opentrons/opentrons/compare/v3.11.4...v3.12.0) (2019-09-13)

### Bug Fixes

* **api:** check instrument name or type, allow gen2's ([#3933](https://github.com/Opentrons/opentrons/issues/3933)) ([6c0c49b](https://github.com/Opentrons/opentrons/commit/6c0c49b))
* **api:** fix overeager homing during smoothie errors ([#3979](https://github.com/Opentrons/opentrons/issues/3979)) ([1cc86f3](https://github.com/Opentrons/opentrons/commit/1cc86f3))
* **api:** fix tip probing not fully self-centering ([#4001](https://github.com/Opentrons/opentrons/issues/4001)) ([6d42fc3](https://github.com/Opentrons/opentrons/commit/6d42fc3)), closes [#3983](https://github.com/Opentrons/opentrons/issues/3983)
* **api:** remove protocol file size limit and ack immediately ([#4006](https://github.com/Opentrons/opentrons/issues/4006)) ([2a82724](https://github.com/Opentrons/opentrons/commit/2a82724)), closes [#3998](https://github.com/Opentrons/opentrons/issues/3998)
* **app:** Add tip rack name to tip probe wizard instructions ([#3940](https://github.com/Opentrons/opentrons/issues/3940)) ([e053008](https://github.com/Opentrons/opentrons/commit/e053008))
* **app:** compensate for differences in app and robot clocks ([#3875](https://github.com/Opentrons/opentrons/issues/3875)) ([a3ee4eb](https://github.com/Opentrons/opentrons/commit/a3ee4eb)), closes [#3872](https://github.com/Opentrons/opentrons/issues/3872)
* **app:** Improve tip probe wizard state and error handling ([#3959](https://github.com/Opentrons/opentrons/issues/3959)) ([b88c73b](https://github.com/Opentrons/opentrons/commit/b88c73b)), closes [#3948](https://github.com/Opentrons/opentrons/issues/3948) [#3944](https://github.com/Opentrons/opentrons/issues/3944) [#3943](https://github.com/Opentrons/opentrons/issues/3943) [#2008](https://github.com/Opentrons/opentrons/issues/2008)
* **app:** make shell remote check lazier to avoid spurious assertions ([#3895](https://github.com/Opentrons/opentrons/issues/3895)) ([7aaad6d](https://github.com/Opentrons/opentrons/commit/7aaad6d))
* **app:** Remove incorrect data removal warning from change pipette ([#3942](https://github.com/Opentrons/opentrons/issues/3942)) ([27b315c](https://github.com/Opentrons/opentrons/commit/27b315c))
* **app-shell:** Update Electron and add macOS app notarization ([#4011](https://github.com/Opentrons/opentrons/issues/4011)) ([246d6db](https://github.com/Opentrons/opentrons/commit/246d6db)), closes [#3997](https://github.com/Opentrons/opentrons/issues/3997) [#2567](https://github.com/Opentrons/opentrons/issues/2567)
* **docs:** Fix OT 1 API link and PDF link ([#3993](https://github.com/Opentrons/opentrons/issues/3993)) ([921e2cb](https://github.com/Opentrons/opentrons/commit/921e2cb))
* **labware-library:** Fix incorrect tree hydration with query params ([f9ba169](https://github.com/Opentrons/opentrons/commit/f9ba169))
* **shared-data:** fix tipOvelap value for P20 tiprack ([#3990](https://github.com/Opentrons/opentrons/issues/3990)) ([9982ceb](https://github.com/Opentrons/opentrons/commit/9982ceb))
* **update-server:** Fix hash in SSH key upload response message ([#3947](https://github.com/Opentrons/opentrons/issues/3947)) ([b070205](https://github.com/Opentrons/opentrons/commit/b070205))


### Features

* **api:** Allow starting tip selection for pipettes ([#3935](https://github.com/Opentrons/opentrons/issues/3935)) ([e383034](https://github.com/Opentrons/opentrons/commit/e383034))
* **app:** display custom labware on deckmap ([#3891](https://github.com/Opentrons/opentrons/issues/3891)) ([f3ee4b3](https://github.com/Opentrons/opentrons/commit/f3ee4b3)), closes [#3826](https://github.com/Opentrons/opentrons/issues/3826)
* **protocol-designer:** add copy with custom labware button ([#3991](https://github.com/Opentrons/opentrons/issues/3991)) ([edb5d75](https://github.com/Opentrons/opentrons/commit/edb5d75)), closes [#3924](https://github.com/Opentrons/opentrons/issues/3924)
* **protocol-designer:** allow user to upload custom labware ([#3863](https://github.com/Opentrons/opentrons/issues/3863)) ([2dfe404](https://github.com/Opentrons/opentrons/commit/2dfe404))
* **protocol-designer:** output minified json ([#3999](https://github.com/Opentrons/opentrons/issues/3999)) ([44d9a5b](https://github.com/Opentrons/opentrons/commit/44d9a5b)), closes [#3998](https://github.com/Opentrons/opentrons/issues/3998)
* **protocol-designer:** put custom labware upload under feature flag ([#3923](https://github.com/Opentrons/opentrons/issues/3923)) ([a61dfc2](https://github.com/Opentrons/opentrons/commit/a61dfc2))
* **shared-data:** add 24-well NEST tube racks ([#3916](https://github.com/Opentrons/opentrons/issues/3916)) ([eaa30dc](https://github.com/Opentrons/opentrons/commit/eaa30dc))
* **shared-data:** add NEST 96 PCR well plate 100 uL ([#3827](https://github.com/Opentrons/opentrons/issues/3827)) ([2a9a986](https://github.com/Opentrons/opentrons/commit/2a9a986))
* **shared-data:** add NEST 96 wellplate 200 uL Flat ([#3862](https://github.com/Opentrons/opentrons/issues/3862)) ([39835e9](https://github.com/Opentrons/opentrons/commit/39835e9))
* **shared-data:** add NEST conical tuberacks ([#3906](https://github.com/Opentrons/opentrons/issues/3906)) ([a39c3e7](https://github.com/Opentrons/opentrons/commit/a39c3e7))





## [3.11.4](https://github.com/opentrons/opentrons/compare/v3.11.3...v3.11.4) (2019-08-29)

**Note:** Version bump only for package opentrons





## [3.11.3](https://github.com/opentrons/opentrons/compare/v3.11.2...v3.11.3) (2019-08-28)


### Bug Fixes

* **api:** do not swallow smoothie errors with certain patterns ([#3955](https://github.com/opentrons/opentrons/issues/3955)) ([5c95c59](https://github.com/opentrons/opentrons/commit/5c95c59))
* **api:** Restore the name, desc of tip probe reset in v1 ([#3952](https://github.com/opentrons/opentrons/issues/3952)) ([27a4e95](https://github.com/opentrons/opentrons/commit/27a4e95)), closes [#3950](https://github.com/opentrons/opentrons/issues/3950)





## [3.11.2](https://github.com/Opentrons/opentrons/compare/v3.11.1...v3.11.2) (2019-08-21)


### Bug Fixes

* **app:** Fix regression breaking trash removal modal before tip probe ([f0d1da3](https://github.com/Opentrons/opentrons/commit/f0d1da3))





## [3.11.1](https://github.com/Opentrons/opentrons/compare/v3.11.0...v3.11.1) (2019-08-21)


### Bug Fixes

* **app:** Fix paths to BR premigration wheels on Windows ([0ff8638](https://github.com/Opentrons/opentrons/commit/0ff8638))





# [3.11.0](https://github.com/opentrons/opentrons/compare/v3.10.3...v3.11.0) (2019-08-21)

### Bug Fixes

* **shared-data:** fix "strict" arg for labware creation ([#3874](https://github.com/opentrons/opentrons/issues/3874)) ([bd604e2](https://github.com/opentrons/opentrons/commit/bd604e2))
* **api:** apiv1: fix transfer volume ([#3792](https://github.com/opentrons/opentrons/issues/3792)) ([e3099af](https://github.com/opentrons/opentrons/commit/e3099af))
* **api:** apiv2: fix mix, blowout in advanced steps ([#3799](https://github.com/opentrons/opentrons/issues/3799)) ([48fc442](https://github.com/opentrons/opentrons/commit/48fc442)), closes [#3719](https://github.com/opentrons/opentrons/issues/3719)
* **api:** apiv2: fix overaspiration after blowout ([#3801](https://github.com/opentrons/opentrons/issues/3801)) ([61e82c3](https://github.com/opentrons/opentrons/commit/61e82c3)), closes [#3797](https://github.com/opentrons/opentrons/issues/3797)
* **api:** Do not publish commands for RPC pause/resume in APIv1 ([#3850](https://github.com/opentrons/opentrons/issues/3850)) ([72952ba](https://github.com/opentrons/opentrons/commit/72952ba))
* **api:** duplicate mix with blowout during transfer ([#3810](https://github.com/opentrons/opentrons/issues/3810)) ([9a70c36](https://github.com/opentrons/opentrons/commit/9a70c36)), closes [#2607](https://github.com/opentrons/opentrons/issues/2607)
* **api:** force nmcli to actively check for connectivity ([#3811](https://github.com/opentrons/opentrons/issues/3811)) ([c200de3](https://github.com/opentrons/opentrons/commit/c200de3)), closes [#3768](https://github.com/opentrons/opentrons/issues/3768)
* **app:** eagerly fetch modules and instruments on robot connect ([#3854](https://github.com/opentrons/opentrons/issues/3854)) ([88f5aec](https://github.com/opentrons/opentrons/commit/88f5aec)), closes [#3844](https://github.com/opentrons/opentrons/issues/3844)
* **app:** Remove Electron RPC remote objects from Redux state ([#3820](https://github.com/opentrons/opentrons/issues/3820)) ([d5f3fe3](https://github.com/opentrons/opentrons/commit/d5f3fe3))
* **protocol-designer:** update typeform version ([#3794](https://github.com/opentrons/opentrons/issues/3794)) ([46c6503](https://github.com/opentrons/opentrons/commit/46c6503))


### Features

* **app:** Add robot logging opt-out alert ([#3869](https://github.com/opentrons/opentrons/issues/3869)) ([9ab6938](https://github.com/opentrons/opentrons/commit/9ab6938))
* **api:** Add a log aggregation optout ([#3868](https://github.com/opentrons/opentrons/issues/3868)) ([ccb0b94](https://github.com/opentrons/opentrons/commit/ccb0b94)), closes [#3866](https://github.com/opentrons/opentrons/issues/3866)
* **api:** apiv2: prevent over-aspiration with filter tips ([#3781](https://github.com/opentrons/opentrons/issues/3781)) ([4cc3023](https://github.com/opentrons/opentrons/commit/4cc3023))
* **api:** cycle temperatures, pause, cancel, and resume to TC control ([#3839](https://github.com/opentrons/opentrons/issues/3839)) ([6841419](https://github.com/opentrons/opentrons/commit/6841419)), closes [#3581](https://github.com/opentrons/opentrons/issues/3581)
* **api:** move gantry to safe spot while TC lid moves ([#3807](https://github.com/opentrons/opentrons/issues/3807)) ([752295c](https://github.com/opentrons/opentrons/commit/752295c))
* **api:** prevent over-aspiration with filter tips in v1  ([#3692](https://github.com/opentrons/opentrons/issues/3692)) ([487927a](https://github.com/opentrons/opentrons/commit/487927a))
* **app:** add control of modules to run cards ([#3841](https://github.com/opentrons/opentrons/issues/3841)) ([9b34f9f](https://github.com/opentrons/opentrons/commit/9b34f9f))
* **app:** display TC on Deck Map ([#3786](https://github.com/opentrons/opentrons/issues/3786)) ([272a6ad](https://github.com/opentrons/opentrons/commit/272a6ad)), closes [#3553](https://github.com/opentrons/opentrons/issues/3553) [#3064](https://github.com/opentrons/opentrons/issues/3064)
* **app:** Enable buildroot updates by default ([#3861](https://github.com/opentrons/opentrons/issues/3861)) ([bf68ad9](https://github.com/opentrons/opentrons/commit/bf68ad9)), closes [#3822](https://github.com/opentrons/opentrons/issues/3822)
* **app:** prompt to open TC lid before labware calibration ([#3853](https://github.com/opentrons/opentrons/issues/3853)) ([2b7efbc](https://github.com/opentrons/opentrons/commit/2b7efbc)), closes [#3066](https://github.com/opentrons/opentrons/issues/3066)
* **app, api:** Key calibration by parent-type/labware-type combo ([#3800](https://github.com/opentrons/opentrons/issues/3800)) ([ba0df67](https://github.com/opentrons/opentrons/commit/ba0df67)), closes [#3775](https://github.com/opentrons/opentrons/issues/3775)
* **docs:** Add transfers page for API v2 ([#3857](https://github.com/opentrons/opentrons/issues/3857)) ([08a7d4c](https://github.com/opentrons/opentrons/commit/08a7d4c))
* **labware-library:** support static rendering of labware library ([#3791](https://github.com/opentrons/opentrons/issues/3791)) ([793b624](https://github.com/opentrons/opentrons/commit/793b624))
* **protocol-designer:** bump typeform/embed to v0.12.1 ([#3865](https://github.com/opentrons/opentrons/issues/3865)) ([617d5ad](https://github.com/opentrons/opentrons/commit/617d5ad))
* **protocol-designer:** warn user when exporting w/o steps ([#3864](https://github.com/opentrons/opentrons/issues/3864)) ([1a129ec](https://github.com/opentrons/opentrons/commit/1a129ec)), closes [#3060](https://github.com/opentrons/opentrons/issues/3060)





<a name="3.10.3"></a>
## [3.10.3](https://github.com/opentrons/opentrons/compare/v3.10.2...v3.10.3) (2019-07-26)

### Bug Fixes

* **api:** revert: "feat(api): prevent over-aspiration with filter tips in v1 ([#3692](https://github.com/opentrons/opentrons/issues/3692)) ([bd0808d](https://github.com/Opentrons/opentrons/commit/bd0808d726b7b17c35fa0116638b28f143d140e0))




<a name="3.10.2"></a>
## [3.10.2](https://github.com/opentrons/opentrons/compare/v3.10.0...v3.10.2) (2019-07-25)


### Bug Fixes

* **api:** Allow gen2 reference in protocol without pipette attached ([#3760](https://github.com/opentrons/opentrons/issues/3760)) ([e6c0b48](https://github.com/opentrons/opentrons/commit/e6c0b48))
* **api:** apiv1: handle partial db schema changes ([#3783](https://github.com/opentrons/opentrons/issues/3783)) ([5d52cd7](https://github.com/opentrons/opentrons/commit/5d52cd7))
* **api:** Save the difference between offsets in labwarev2 cal ([#3782](https://github.com/Opentrons/opentrons/commit/35a095aa5d74e02a183c71ddf58ad7ee97360a6a))
* **api:** apiv2: Correctly handle flow rates and plunger speeds ([#3739](https://github.com/opentrons/opentrons/issues/3739)) ([01c0fcb](https://github.com/opentrons/opentrons/commit/01c0fcb)), closes [#3737](https://github.com/opentrons/opentrons/issues/3737) [#3270](https://github.com/opentrons/opentrons/issues/3270)
* **api:** apiv2: Display locs for drop/pickup from implicit locs ([#3774](https://github.com/opentrons/opentrons/issues/3774)) ([cf7710f](https://github.com/opentrons/opentrons/commit/cf7710f)), closes [#3364](https://github.com/opentrons/opentrons/issues/3364)
* **api:** apiv2: fix protocol cancel ([#3725](https://github.com/opentrons/opentrons/issues/3725)) ([b2b8c46](https://github.com/opentrons/opentrons/commit/b2b8c46))
* **api:** apiv2: simulator should find pipettes by name versus model ([#3779](https://github.com/opentrons/opentrons/issues/3779)) ([a0fd72b](https://github.com/opentrons/opentrons/commit/a0fd72b))
* **api:** fix blow out logic ([#3764](https://github.com/opentrons/opentrons/issues/3764)) ([fb99bf0](https://github.com/opentrons/opentrons/commit/fb99bf0))
* **api:** Modify delay and motors which are disengaged ([#3770](https://github.com/opentrons/opentrons/issues/3770)) ([1eb760c](https://github.com/opentrons/opentrons/commit/1eb760c))
* **api:** Remove model name check for non-gen2 pipettes ([#3761](https://github.com/opentrons/opentrons/issues/3761)) ([263b536](https://github.com/opentrons/opentrons/commit/263b536))
* **api:** Use pip config presses by default ([#3778](https://github.com/opentrons/opentrons/issues/3778)) ([8fce1a9](https://github.com/opentrons/opentrons/commit/8fce1a9))
* **factory_scripts:** Remove old func name and refactor IP look-up ([#3763](https://github.com/opentrons/opentrons/issues/3763)) ([2847cad](https://github.com/opentrons/opentrons/commit/2847cad))
* **protocol-designer:** update various styles to match designs ([#3714](https://github.com/opentrons/opentrons/issues/3714)) ([ad0562c](https://github.com/opentrons/opentrons/commit/ad0562c)), closes [#2122](https://github.com/opentrons/opentrons/issues/2122)


### Features

* **api:** Make blow out flow rate settable ([#3735](https://github.com/opentrons/opentrons/issues/3735)) ([e12b4fd](https://github.com/opentrons/opentrons/commit/e12b4fd)), closes [#3733](https://github.com/opentrons/opentrons/issues/3733)
* **api:** prevent over-aspiration with filter tips in v1  ([#3692](https://github.com/opentrons/opentrons/issues/3692)) ([487927a](https://github.com/opentrons/opentrons/commit/487927a))
* **app:** add GEN2 images to change pipette ([#3734](https://github.com/opentrons/opentrons/issues/3734)) ([1016c16](https://github.com/opentrons/opentrons/commit/1016c16)), closes [#3630](https://github.com/opentrons/opentrons/issues/3630)
* **protocol-designer:** update migration modal copy ([#3709](https://github.com/opentrons/opentrons/issues/3709)) ([e3d1ffa](https://github.com/opentrons/opentrons/commit/e3d1ffa)), closes [#3696](https://github.com/opentrons/opentrons/issues/3696)
* **shared-data:** add displayCategory to pipetteNameSpecs and schema ([#3731](https://github.com/opentrons/opentrons/issues/3731)) ([3b39dea](https://github.com/opentrons/opentrons/commit/3b39dea))
* **shared-data:** labwareV2: add filter tip racks ([#3777](https://github.com/opentrons/opentrons/issues/3777)) ([0dd5285](https://github.com/opentrons/opentrons/commit/0dd5285))





<a name="3.10.1"></a>
## [3.10.1](https://github.com/opentrons/opentrons/compare/v3.10.0...v3.10.1) (2019-07-19)


### Bug Fixes

* **api:** apiv2: Correctly handle flow rates and plunger speeds ([#3739](https://github.com/opentrons/opentrons/issues/3739)) ([01c0fcb](https://github.com/opentrons/opentrons/commit/01c0fcb)), closes [#3737](https://github.com/opentrons/opentrons/issues/3737) [#3270](https://github.com/opentrons/opentrons/issues/3270)
* **api:** apiv2: fix protocol cancel ([#3725](https://github.com/opentrons/opentrons/issues/3725)) ([b2b8c46](https://github.com/opentrons/opentrons/commit/b2b8c46))
* **protocol-designer:** update various styles to match designs ([#3714](https://github.com/opentrons/opentrons/issues/3714)) ([ad0562c](https://github.com/opentrons/opentrons/commit/ad0562c)), closes [#2122](https://github.com/opentrons/opentrons/issues/2122)


### Features

* **api:** Make blow out flow rate settable ([#3735](https://github.com/opentrons/opentrons/issues/3735)) ([e12b4fd](https://github.com/opentrons/opentrons/commit/e12b4fd)), closes [#3733](https://github.com/opentrons/opentrons/issues/3733)
* **app:** add GEN2 images to change pipette ([#3734](https://github.com/opentrons/opentrons/issues/3734)) ([1016c16](https://github.com/opentrons/opentrons/commit/1016c16)), closes [#3630](https://github.com/opentrons/opentrons/issues/3630)
* **protocol-designer:** update migration modal copy ([#3709](https://github.com/opentrons/opentrons/issues/3709)) ([e3d1ffa](https://github.com/opentrons/opentrons/commit/e3d1ffa)), closes [#3696](https://github.com/opentrons/opentrons/issues/3696)
* **shared-data:** add displayCategory to pipetteNameSpecs and schema ([#3731](https://github.com/opentrons/opentrons/issues/3731)) ([3b39dea](https://github.com/opentrons/opentrons/commit/3b39dea))





<a name="3.10.0"></a>
# [3.10.0](https://github.com/Opentrons/opentrons/compare/v3.9.0...v3.10.0) (2019-07-15)


### Bug Fixes

* **api:** Account for tip length in deck cal move-to-front ([#3495](https://github.com/Opentrons/opentrons/issues/3495)) ([01dfaa8](https://github.com/Opentrons/opentrons/commit/01dfaa8))
* **api:** Add new biorad def name to engage height list ([#3717](https://github.com/Opentrons/opentrons/issues/3717)) ([9b8ce91](https://github.com/Opentrons/opentrons/commit/9b8ce91))
* **api:** always ensure labware db is up to date ([#3713](https://github.com/Opentrons/opentrons/issues/3713)) ([e0a5cc1](https://github.com/Opentrons/opentrons/commit/e0a5cc1))
* **api:** Correct labwarev2 reservoirs on apiv1 ([#3706](https://github.com/Opentrons/opentrons/issues/3706)) ([397f17e](https://github.com/Opentrons/opentrons/commit/397f17e))
* **api:** do not handle smoothie alarms from halt() ([#3721](https://github.com/Opentrons/opentrons/issues/3721)) ([1e72261](https://github.com/Opentrons/opentrons/commit/1e72261))
* **api:** Fix api v2 deck cal ([#3550](https://github.com/Opentrons/opentrons/issues/3550)) ([953abad](https://github.com/Opentrons/opentrons/commit/953abad))
* **api:** Fix first-boot smoothie updates for apiv2 ([#3519](https://github.com/Opentrons/opentrons/issues/3519)) ([2c0800d](https://github.com/Opentrons/opentrons/commit/2c0800d)), closes [#3501](https://github.com/Opentrons/opentrons/issues/3501)
* **api:** Fix gen2 model offsets ([#3614](https://github.com/Opentrons/opentrons/issues/3614)) ([dd1680a](https://github.com/Opentrons/opentrons/commit/dd1680a))
* **api:** Fix module calibration in API V2 ([#3675](https://github.com/Opentrons/opentrons/issues/3675)) ([d214c5a](https://github.com/Opentrons/opentrons/commit/d214c5a))
* **api:** increase serial response timeout for thermocycler ([#3711](https://github.com/Opentrons/opentrons/issues/3711)) ([4018870](https://github.com/Opentrons/opentrons/commit/4018870))
* **api:** Make BCRobot fw_version sync again ([#3688](https://github.com/Opentrons/opentrons/issues/3688)) ([067fe4c](https://github.com/Opentrons/opentrons/commit/067fe4c))
* **api:** Remove usage of time.clock() ([#3635](https://github.com/Opentrons/opentrons/issues/3635)) ([a9c7237](https://github.com/Opentrons/opentrons/commit/a9c7237))
* **api:** Synchronize access to the smoothie and rpc ([#3528](https://github.com/Opentrons/opentrons/issues/3528)) ([628c6c4](https://github.com/Opentrons/opentrons/commit/628c6c4)), closes [#3527](https://github.com/Opentrons/opentrons/issues/3527)
* **api:** unrestrict thermocycler lid at api level for testing ([#3705](https://github.com/Opentrons/opentrons/issues/3705)) ([f46ad49](https://github.com/Opentrons/opentrons/commit/f46ad49))
* **api:** Use npx shx instead of shx directly ([#3524](https://github.com/Opentrons/opentrons/issues/3524)) ([29b7c91](https://github.com/Opentrons/opentrons/commit/29b7c91))
* **app:** Add reservior calibration instruction support ([#3704](https://github.com/Opentrons/opentrons/issues/3704)) ([1464772](https://github.com/Opentrons/opentrons/commit/1464772))
* **app:** Do not swallow protocol run errors ([#3723](https://github.com/Opentrons/opentrons/issues/3723)) ([73d06d8](https://github.com/Opentrons/opentrons/commit/73d06d8)), closes [#1828](https://github.com/Opentrons/opentrons/issues/1828)
* **app:** Stop long labware names overflowing calibration screens ([#3715](https://github.com/Opentrons/opentrons/issues/3715)) ([22fd8ad](https://github.com/Opentrons/opentrons/commit/22fd8ad))
* **app-shell:** Add missing existence check to FF object ([#3638](https://github.com/Opentrons/opentrons/issues/3638)) ([3e784c4](https://github.com/Opentrons/opentrons/commit/3e784c4))
* **app-shell:** Clean up main window and DC on app quit ([#3622](https://github.com/Opentrons/opentrons/issues/3622)) ([d4a5c3e](https://github.com/Opentrons/opentrons/commit/d4a5c3e)), closes [#3482](https://github.com/Opentrons/opentrons/issues/3482)
* **app,pd:** Truncate long labware names ([#3644](https://github.com/Opentrons/opentrons/issues/3644)) ([abe4bc7](https://github.com/Opentrons/opentrons/commit/abe4bc7)), closes [#3617](https://github.com/Opentrons/opentrons/issues/3617) [#2444](https://github.com/Opentrons/opentrons/issues/2444)
* **components:** add remove scroll override prop to Modal ([#3671](https://github.com/Opentrons/opentrons/issues/3671)) ([2abaea2](https://github.com/Opentrons/opentrons/commit/2abaea2))
* **components:** fix console error with invalid transform ([#3624](https://github.com/Opentrons/opentrons/issues/3624)) ([47dcbb7](https://github.com/Opentrons/opentrons/commit/47dcbb7))
* **flow:** declare node_modules and shared-data defs as untyped ([#3577](https://github.com/Opentrons/opentrons/issues/3577)) ([befded9](https://github.com/Opentrons/opentrons/commit/befded9))
* **labware:** Fix generator well y calculation, update docs/schema ([#3697](https://github.com/Opentrons/opentrons/issues/3697)) ([31a2963](https://github.com/Opentrons/opentrons/commit/31a2963)), closes [#3602](https://github.com/Opentrons/opentrons/issues/3602)
* **protocol-designer:** add "fixed-trash" labware type to v1->v2 shim ([#3512](https://github.com/Opentrons/opentrons/issues/3512)) ([03f0716](https://github.com/Opentrons/opentrons/commit/03f0716))
* **protocol-designer:** darken "drag to new slot" text ([#3660](https://github.com/Opentrons/opentrons/issues/3660)) ([c31a816](https://github.com/Opentrons/opentrons/commit/c31a816)), closes [#3649](https://github.com/Opentrons/opentrons/issues/3649)
* **protocol-designer:** fix bug with pipette field change ([#3585](https://github.com/Opentrons/opentrons/issues/3585)) ([851edf4](https://github.com/Opentrons/opentrons/commit/851edf4))
* **protocol-designer:** fix bug with protocol title ([#3640](https://github.com/Opentrons/opentrons/issues/3640)) ([ed6c2a7](https://github.com/Opentrons/opentrons/commit/ed6c2a7)), closes [#3639](https://github.com/Opentrons/opentrons/issues/3639)
* **protocol-designer:** fix bug with timeline idx out of range ([#3621](https://github.com/Opentrons/opentrons/issues/3621)) ([eca6181](https://github.com/Opentrons/opentrons/commit/eca6181)), closes [#3603](https://github.com/Opentrons/opentrons/issues/3603)
* **protocol-designer:** fix labware nickname µL capitalization ([#3673](https://github.com/Opentrons/opentrons/issues/3673)) ([8b596fb](https://github.com/Opentrons/opentrons/commit/8b596fb))
* **protocol-designer:** inner mix in move liquid predictable tip height ([#3418](https://github.com/Opentrons/opentrons/issues/3418)) ([95feefc](https://github.com/Opentrons/opentrons/commit/95feefc)), closes [#3414](https://github.com/Opentrons/opentrons/issues/3414)
* **protocol-designer:** keep edit nickname to one line ([#3659](https://github.com/Opentrons/opentrons/issues/3659)) ([158c270](https://github.com/Opentrons/opentrons/commit/158c270)), closes [#3648](https://github.com/Opentrons/opentrons/issues/3648)
* **protocol-designer:** left-align labware text in labware selection modal ([#3658](https://github.com/Opentrons/opentrons/issues/3658)) ([aaa7803](https://github.com/Opentrons/opentrons/commit/aaa7803)), closes [#3647](https://github.com/Opentrons/opentrons/issues/3647)
* **protocol-designer:** mend and extend scroll to top, fix reorder crash ([#3681](https://github.com/Opentrons/opentrons/issues/3681)) ([9b4f601](https://github.com/Opentrons/opentrons/commit/9b4f601)), closes [#3679](https://github.com/Opentrons/opentrons/issues/3679)
* **protocol-designer:** redo disambiguation nums for labware ([#3600](https://github.com/Opentrons/opentrons/issues/3600)) ([98bd916](https://github.com/Opentrons/opentrons/commit/98bd916)), closes [#2424](https://github.com/Opentrons/opentrons/issues/2424)
* **shared_data:** Change deep well name, modify tipracks ([#3513](https://github.com/Opentrons/opentrons/issues/3513)) ([9c883d5](https://github.com/Opentrons/opentrons/commit/9c883d5))
* **shared_data:** Fix module path in shared data ([#3556](https://github.com/Opentrons/opentrons/issues/3556)) ([4742458](https://github.com/Opentrons/opentrons/commit/4742458))
* **shared-data:** patch some v2 labware from drawings ([#3623](https://github.com/Opentrons/opentrons/issues/3623)) ([84ecef1](https://github.com/Opentrons/opentrons/commit/84ecef1)), closes [#3618](https://github.com/Opentrons/opentrons/issues/3618)
* **shared-data:** patch v2 opentrons 15 and 50 mL tube racks ([#3712](https://github.com/Opentrons/opentrons/issues/3712)) ([66f1200](https://github.com/Opentrons/opentrons/commit/66f1200))


### Features

* **api:** Add a quirk for return tip height ([#3687](https://github.com/Opentrons/opentrons/issues/3687)) ([3a89b69](https://github.com/Opentrons/opentrons/commit/3a89b69))
* **api:** Add Gen2 multichannel pipette api support ([#3691](https://github.com/Opentrons/opentrons/issues/3691)) ([d1ae1ed](https://github.com/Opentrons/opentrons/commit/d1ae1ed))
* **api:** Add hardware control socket server ([#3633](https://github.com/Opentrons/opentrons/issues/3633)) ([6cac0b5](https://github.com/Opentrons/opentrons/commit/6cac0b5)), closes [#3544](https://github.com/Opentrons/opentrons/issues/3544)
* **api:** add missing TC stuff for science testing ([#3348](https://github.com/Opentrons/opentrons/issues/3348)) ([0640c7a](https://github.com/Opentrons/opentrons/commit/0640c7a))
* **api:** Add P50Sv1.5 ([#3689](https://github.com/Opentrons/opentrons/issues/3689)) ([6b42e6c](https://github.com/Opentrons/opentrons/commit/6b42e6c)), closes [#3680](https://github.com/Opentrons/opentrons/issues/3680)
* **api:** Add speed settings to apiv2 ([#3708](https://github.com/Opentrons/opentrons/issues/3708)) ([45ec246](https://github.com/Opentrons/opentrons/commit/45ec246))
* **api:** Always remove v2 calibration ([#3701](https://github.com/Opentrons/opentrons/issues/3701)) ([dea5d40](https://github.com/Opentrons/opentrons/commit/dea5d40)), closes [#3700](https://github.com/Opentrons/opentrons/issues/3700)
* **api:** default to labware version 1, not latest ([#3667](https://github.com/Opentrons/opentrons/issues/3667)) ([53b48ba](https://github.com/Opentrons/opentrons/commit/53b48ba)), closes [#3664](https://github.com/Opentrons/opentrons/issues/3664)
* **api:** do not use labware otId ([#3515](https://github.com/Opentrons/opentrons/issues/3515)) ([744075f](https://github.com/Opentrons/opentrons/commit/744075f))
* **api:** reference calibration data via hash of labware def ([#3498](https://github.com/Opentrons/opentrons/issues/3498)) ([0475586](https://github.com/Opentrons/opentrons/commit/0475586)), closes [#3493](https://github.com/Opentrons/opentrons/issues/3493)
* **api:** save labware under namespace/load_name/version ([#3487](https://github.com/Opentrons/opentrons/issues/3487)) ([400d6e6](https://github.com/Opentrons/opentrons/commit/400d6e6)), closes [#3474](https://github.com/Opentrons/opentrons/issues/3474)
* **app:** add support for v2 labware ([#3590](https://github.com/Opentrons/opentrons/issues/3590)) ([0b74937](https://github.com/Opentrons/opentrons/commit/0b74937)), closes [#3451](https://github.com/Opentrons/opentrons/issues/3451)
* **app:** Get protocolDisplayData based on protocol schema ([#3531](https://github.com/Opentrons/opentrons/issues/3531)) ([ec69d84](https://github.com/Opentrons/opentrons/commit/ec69d84)), closes [#3494](https://github.com/Opentrons/opentrons/issues/3494)
* **components:** Make design changes to RWS ([#3608](https://github.com/Opentrons/opentrons/issues/3608)) ([d3dd2c6](https://github.com/Opentrons/opentrons/commit/d3dd2c6))
* **labware:** update labware mapping ([#3636](https://github.com/Opentrons/opentrons/issues/3636)) ([a1e6005](https://github.com/Opentrons/opentrons/commit/a1e6005)), closes [#3605](https://github.com/Opentrons/opentrons/issues/3605)
* **labware:** zero out cornerOffsetFromSlot from all current v2 labware defs ([#3642](https://github.com/Opentrons/opentrons/issues/3642)) ([9b91298](https://github.com/Opentrons/opentrons/commit/9b91298))
* **labware-library:** show only the single latest version of a def ([#3552](https://github.com/Opentrons/opentrons/issues/3552)) ([f901a30](https://github.com/Opentrons/opentrons/commit/f901a30)), closes [#3551](https://github.com/Opentrons/opentrons/issues/3551)
* **protocol-designer:** add 'view measurements' link ([#3665](https://github.com/Opentrons/opentrons/issues/3665)) ([406b27d](https://github.com/Opentrons/opentrons/commit/406b27d)), closes [#3657](https://github.com/Opentrons/opentrons/issues/3657)
* **protocol-designer:** load v3 protocols ([#3591](https://github.com/Opentrons/opentrons/issues/3591)) ([8a10ec6](https://github.com/Opentrons/opentrons/commit/8a10ec6)), closes [#3336](https://github.com/Opentrons/opentrons/issues/3336)
* **protocol-designer:** migrate PD files to 3.0.0 ([#3606](https://github.com/Opentrons/opentrons/issues/3606)) ([10363ca](https://github.com/Opentrons/opentrons/commit/10363ca)), closes [#3337](https://github.com/Opentrons/opentrons/issues/3337)
* **protocol-designer:** save v3 protocols ([#3588](https://github.com/Opentrons/opentrons/issues/3588)) ([40f3a9e](https://github.com/Opentrons/opentrons/commit/40f3a9e)), closes [#3336](https://github.com/Opentrons/opentrons/issues/3336) [#3414](https://github.com/Opentrons/opentrons/issues/3414)
* **protocol-designer:** show only latest version of labware in LabwareSelectionModal ([467b04d](https://github.com/Opentrons/opentrons/commit/467b04d)), closes [#3525](https://github.com/Opentrons/opentrons/issues/3525)
* **protocol-designer:** style deck to designs, fix move labware ([#3523](https://github.com/Opentrons/opentrons/issues/3523)) ([bd7fb24](https://github.com/Opentrons/opentrons/commit/bd7fb24))
* **protocol-designer:** use labware def URIs ([#3526](https://github.com/Opentrons/opentrons/issues/3526)) ([6077eb8](https://github.com/Opentrons/opentrons/commit/6077eb8)), closes [#3455](https://github.com/Opentrons/opentrons/issues/3455)
* **protocol-designer:** use RobotWorkSpace for deck map ([#3479](https://github.com/Opentrons/opentrons/issues/3479)) ([9aa4eb6](https://github.com/Opentrons/opentrons/commit/9aa4eb6)), closes [#3327](https://github.com/Opentrons/opentrons/issues/3327)
* **protocol-designer:** use RWS for deck setup with highlight and dnd ([#3517](https://github.com/Opentrons/opentrons/issues/3517)) ([7f45124](https://github.com/Opentrons/opentrons/commit/7f45124))
* **protocol-designer:** warn on migrating to 3.0.0 ([#3632](https://github.com/Opentrons/opentrons/issues/3632)) ([01884d0](https://github.com/Opentrons/opentrons/commit/01884d0))
* **shared-data:** add 1-well troughs and 96-well deep well plate ([#3570](https://github.com/Opentrons/opentrons/issues/3570)) ([f495ea1](https://github.com/Opentrons/opentrons/commit/f495ea1))
* **shared-data:** Add Corning 96 flat labware def ([#3625](https://github.com/Opentrons/opentrons/issues/3625)) ([af9e561](https://github.com/Opentrons/opentrons/commit/af9e561)), closes [#3619](https://github.com/Opentrons/opentrons/issues/3619)
* **shared-data:** display specific v2 labware as "retired" ([#3627](https://github.com/Opentrons/opentrons/issues/3627)) ([3fb5812](https://github.com/Opentrons/opentrons/commit/3fb5812))
* **shared-data:** make flow def for json protocol v3 ([#3571](https://github.com/Opentrons/opentrons/issues/3571)) ([9144193](https://github.com/Opentrons/opentrons/commit/9144193))
* **shared-data:** remove otId from all v2 labware and dependencies ([#3549](https://github.com/Opentrons/opentrons/issues/3549)) ([1766cb1](https://github.com/Opentrons/opentrons/commit/1766cb1)), closes [#3471](https://github.com/Opentrons/opentrons/issues/3471)
* **update-server:** Default buildroot migration to available ([#3514](https://github.com/Opentrons/opentrons/issues/3514)) ([d3cae93](https://github.com/Opentrons/opentrons/commit/d3cae93))





<a name="3.9.0"></a>
# [3.9.0](https://github.com/opentrons/opentrons/compare/v3.8.3...v3.9.0) (2019-05-29)


### Bug Fixes

* **api:** Add separate key for new steps per mm shape ([#3499](https://github.com/opentrons/opentrons/issues/3499)) ([50bb2a9](https://github.com/opentrons/opentrons/commit/50bb2a9))
* **api:** Don't talk about apiv2 if you can't find a labware ([#3435](https://github.com/opentrons/opentrons/issues/3435)) ([d31f1a5](https://github.com/opentrons/opentrons/commit/d31f1a5))
* **api:** Fix default transfer tip behavior ([#3486](https://github.com/opentrons/opentrons/issues/3486)) ([4534e6f](https://github.com/opentrons/opentrons/commit/4534e6f))
* **api:** Handle smoothie update better ([#3437](https://github.com/opentrons/opentrons/issues/3437)) ([d2569d8](https://github.com/opentrons/opentrons/commit/d2569d8))
* **app:** Allow valid pipette+ model names for display images ([#3413](https://github.com/opentrons/opentrons/issues/3413)) ([1f77a08](https://github.com/opentrons/opentrons/commit/1f77a08))
* **app:** Re-enable change pipette and pipette settings ([#3475](https://github.com/opentrons/opentrons/issues/3475)) ([2419110](https://github.com/opentrons/opentrons/commit/2419110))
* **app:** Verify attached/protocol pipettes ([#3458](https://github.com/opentrons/opentrons/issues/3458)) ([20988b8](https://github.com/opentrons/opentrons/commit/20988b8))
* **protocol-designer:** cast offsetFromBottomMm values to number ([#3387](https://github.com/opentrons/opentrons/issues/3387)) ([893f83a](https://github.com/opentrons/opentrons/commit/893f83a))
* **protocol-designer:** update document title to reflect project status ([#3390](https://github.com/opentrons/opentrons/issues/3390)) ([9ea495d](https://github.com/opentrons/opentrons/commit/9ea495d))


### Features

* **api:** Add backwards compatibility to old pipette constructors ([#3438](https://github.com/opentrons/opentrons/issues/3438)) ([25cf5fe](https://github.com/opentrons/opentrons/commit/25cf5fe))
* **api:** Add G Code for pipette config in driver ([#3388](https://github.com/opentrons/opentrons/issues/3388)) ([77fffa6](https://github.com/opentrons/opentrons/commit/77fffa6))
* **api:** add pipette plus constructors ([#3407](https://github.com/opentrons/opentrons/issues/3407)) ([f4feee9](https://github.com/opentrons/opentrons/commit/f4feee9))
* **api:** Add pipette v2.0 config ([#3394](https://github.com/opentrons/opentrons/issues/3394)) ([f7739b9](https://github.com/opentrons/opentrons/commit/f7739b9))
* **api:** Add pipette+ to write_pipette_memory ([#3405](https://github.com/opentrons/opentrons/issues/3405)) ([1b35ed1](https://github.com/opentrons/opentrons/commit/1b35ed1))
* **api:** Allow loading labware v2 definitions directly into apiv1 ([#3466](https://github.com/opentrons/opentrons/issues/3466)) ([a3201fb](https://github.com/opentrons/opentrons/commit/a3201fb))
* **api:** apiv2: allow returning tips to the tip tracker ([#3470](https://github.com/opentrons/opentrons/issues/3470)) ([0c73aa1](https://github.com/opentrons/opentrons/commit/0c73aa1))
* **api:** buildroot: allow separate setting of upstream log level ([#3436](https://github.com/opentrons/opentrons/issues/3436)) ([ebc41a4](https://github.com/opentrons/opentrons/commit/ebc41a4)), closes [#3422](https://github.com/opentrons/opentrons/issues/3422)
* **api:** Detect and change behavior for buildroot system ([#3367](https://github.com/opentrons/opentrons/issues/3367)) ([a439f5b](https://github.com/opentrons/opentrons/commit/a439f5b))
* **api:** Enable Double Drop Quirk ([#3485](https://github.com/opentrons/opentrons/issues/3485)) ([e864150](https://github.com/opentrons/opentrons/commit/e864150))
* **api:** Make pipette quirks configurable ([#3463](https://github.com/opentrons/opentrons/issues/3463)) ([3513794](https://github.com/opentrons/opentrons/commit/3513794))
* **api:** support running v3 protocols in APIv1 ([#3468](https://github.com/opentrons/opentrons/issues/3468)) ([0ff1ab6](https://github.com/opentrons/opentrons/commit/0ff1ab6)), closes [#3449](https://github.com/opentrons/opentrons/issues/3449)
* **app:** Enable pipette quirks in pipette config ([#3488](https://github.com/opentrons/opentrons/issues/3488)) ([b17f568](https://github.com/opentrons/opentrons/commit/b17f568))
* **components:** dynamic props for Labware component ([#3408](https://github.com/opentrons/opentrons/issues/3408)) ([ab83662](https://github.com/opentrons/opentrons/commit/ab83662)), closes [#3328](https://github.com/opentrons/opentrons/issues/3328)
* **protocol-designer:** make "labware views" use new v2 labware components ([#3448](https://github.com/opentrons/opentrons/issues/3448)) ([ec6598b](https://github.com/opentrons/opentrons/commit/ec6598b))
* **protocol-designer:** v2 labware selection from definitions ([#3439](https://github.com/opentrons/opentrons/issues/3439)) ([0ae7129](https://github.com/opentrons/opentrons/commit/0ae7129)), closes [#3335](https://github.com/opentrons/opentrons/issues/3335) [#3291](https://github.com/opentrons/opentrons/issues/3291) [#3290](https://github.com/opentrons/opentrons/issues/3290)
* **repo:** change v2 labware len/width fields ([#3410](https://github.com/opentrons/opentrons/issues/3410)) ([0ef0bd5](https://github.com/opentrons/opentrons/commit/0ef0bd5))
* **shared-data:** add layers to deck schema and definitions ([#3385](https://github.com/opentrons/opentrons/issues/3385)) ([d84cc35](https://github.com/opentrons/opentrons/commit/d84cc35)), closes [#3325](https://github.com/opentrons/opentrons/issues/3325)
* **shared-data:** add version, schemaVersion, and namespace keys to v2 labware ([#3469](https://github.com/opentrons/opentrons/issues/3469)) ([da03025](https://github.com/opentrons/opentrons/commit/da03025)), closes [#3454](https://github.com/opentrons/opentrons/issues/3454)
* **shared-data:** deck component from physical data ([#3415](https://github.com/opentrons/opentrons/issues/3415)) ([ddf9e78](https://github.com/opentrons/opentrons/commit/ddf9e78)), closes [#3326](https://github.com/opentrons/opentrons/issues/3326)
* **update-server:** buildroot: use sd-notify and better hostname ([#3416](https://github.com/opentrons/opentrons/issues/3416)) ([e38944c](https://github.com/opentrons/opentrons/commit/e38944c))


<a name="3.8.3"></a>
## [3.8.3](https://github.com/opentrons/opentrons/compare/v3.8.2...v3.8.3) (2019-04-30)


### Features

* **api:** Add new 10ul tiprack ([#3393](https://github.com/opentrons/opentrons/issues/3393)) ([a7c15cc](https://github.com/opentrons/opentrons/commit/a7c15cc))

<a name="3.8.2"></a>
## [3.8.2](https://github.com/opentrons/opentrons/compare/v3.8.1...v3.8.2) (2019-04-23)


### Bug Fixes

* **api:** Correctly specify jsonschema in setup.py install_requires ([#3377](https://github.com/opentrons/opentrons/issues/3377)) ([a79d7ab](https://github.com/opentrons/opentrons/commit/a79d7ab))
* **api:** Do not sleep in simulated delays ([#3347](https://github.com/opentrons/opentrons/issues/3347)) ([e12e200](https://github.com/opentrons/opentrons/commit/e12e200)), closes [#3346](https://github.com/opentrons/opentrons/issues/3346)
* **api:** Remove module load regression in V2 ([#3288](https://github.com/opentrons/opentrons/issues/3288)) ([7fe143a](https://github.com/opentrons/opentrons/commit/7fe143a))
* **app:** Clear deck cal request states on wizard exit ([#3378](https://github.com/opentrons/opentrons/issues/3378)) ([408b8aa](https://github.com/opentrons/opentrons/commit/408b8aa))
* **app:** Disable manual ip double submit on enter keypress ([#3376](https://github.com/opentrons/opentrons/issues/3376)) ([81291ca](https://github.com/opentrons/opentrons/commit/81291ca))
* **app:** render correct image for vial and tube racks ([#3298](https://github.com/opentrons/opentrons/issues/3298)) ([b9e1ebb](https://github.com/opentrons/opentrons/commit/b9e1ebb)), closes [#3294](https://github.com/opentrons/opentrons/issues/3294)
* **labware-library:** Take cornerOffsetFromSlot into account with render ([#3297](https://github.com/opentrons/opentrons/issues/3297)) ([04a1ab8](https://github.com/opentrons/opentrons/commit/04a1ab8))
* **protocol-designer:** fix trough over-aspirate bug ([#3280](https://github.com/opentrons/opentrons/issues/3280)) ([c0b0333](https://github.com/opentrons/opentrons/commit/c0b0333))
* **shared-data:** fix v2 labware definition ([#3289](https://github.com/opentrons/opentrons/issues/3289)) ([e652fb7](https://github.com/opentrons/opentrons/commit/e652fb7)), closes [#3271](https://github.com/opentrons/opentrons/issues/3271)
* **update-server:** Create ~/.ssh/authorized_keys if needed ([#3351](https://github.com/opentrons/opentrons/issues/3351)) ([c2836bb](https://github.com/opentrons/opentrons/commit/c2836bb))
* **update-server:** Fix some issues with br update, test, fast flow ([#3352](https://github.com/opentrons/opentrons/issues/3352)) ([6e4d2f6](https://github.com/opentrons/opentrons/commit/6e4d2f6))


### Features

* **api:** Add Geometry Logic For Thermocycler Configurations ([#3266](https://github.com/opentrons/opentrons/issues/3266)) ([4d8e463](https://github.com/opentrons/opentrons/commit/4d8e463))
* **api:** add P10M 1.5 config data ([#3365](https://github.com/opentrons/opentrons/issues/3365)) ([1332f63](https://github.com/opentrons/opentrons/commit/1332f63))
* **api:** define & execute v3 json protocols ([#3312](https://github.com/opentrons/opentrons/issues/3312)) ([988407d](https://github.com/opentrons/opentrons/commit/988407d)), closes [#3110](https://github.com/opentrons/opentrons/issues/3110)
* **api:** publish pause and delay commands in python and JSON ([#3310](https://github.com/opentrons/opentrons/issues/3310)) ([5656d65](https://github.com/opentrons/opentrons/commit/5656d65)), closes [#3308](https://github.com/opentrons/opentrons/issues/3308)
* **api:** Set P10M1.5 pick up increment to 3mm ([#3374](https://github.com/opentrons/opentrons/issues/3374)) ([f5b63d0](https://github.com/opentrons/opentrons/commit/f5b63d0))
* **api:** validate JSON protocols before executing ([#3318](https://github.com/opentrons/opentrons/issues/3318)) ([9c15f7d](https://github.com/opentrons/opentrons/commit/9c15f7d)), closes [#3250](https://github.com/opentrons/opentrons/issues/3250)
* **api:** wire up TC deactivate, and add module cmd exec endpoint ([#3264](https://github.com/opentrons/opentrons/issues/3264)) ([483122a](https://github.com/opentrons/opentrons/commit/483122a)), closes [#2981](https://github.com/opentrons/opentrons/issues/2981)
* **app:** Enable adding manual robot IP addresses in app settings ([#3284](https://github.com/opentrons/opentrons/issues/3284)) ([c34fcfa](https://github.com/opentrons/opentrons/commit/c34fcfa)), closes [#2741](https://github.com/opentrons/opentrons/issues/2741)
* **components:** use transparent gray for button hover ([#3281](https://github.com/opentrons/opentrons/issues/3281)) ([b724151](https://github.com/opentrons/opentrons/commit/b724151))
* **protocol-designer:** show tooltips on disabled fields in Transfer form ([#3286](https://github.com/opentrons/opentrons/issues/3286)) ([a9cc612](https://github.com/opentrons/opentrons/commit/a9cc612)), closes [#3259](https://github.com/opentrons/opentrons/issues/3259)
* **shared-data:** update P300M 1.5 pick up current to 0.9 A ([#3355](https://github.com/opentrons/opentrons/issues/3355)) ([a2d9024](https://github.com/opentrons/opentrons/commit/a2d9024))
* **update-server:** add buildroot migration ([#3321](https://github.com/opentrons/opentrons/issues/3321)) ([76d6b28](https://github.com/opentrons/opentrons/commit/76d6b28)), closes [#2880](https://github.com/opentrons/opentrons/issues/2880) [#2881](https://github.com/opentrons/opentrons/issues/2881)
* **update-server:** Add SSH public key management for buildroot ([#3339](https://github.com/opentrons/opentrons/issues/3339)) ([ef02433](https://github.com/opentrons/opentrons/commit/ef02433)), closes [#3320](https://github.com/opentrons/opentrons/issues/3320)
* **update-server:** Set buildroot hostname ([#3356](https://github.com/opentrons/opentrons/issues/3356)) ([1addcf7](https://github.com/opentrons/opentrons/commit/1addcf7))


### Performance Improvements

* **protocol-designer:** avoid selector recomputation in step forms ([#3292](https://github.com/opentrons/opentrons/issues/3292)) ([41c40c5](https://github.com/opentrons/opentrons/commit/41c40c5))
* **protocol-designer:** fix selectors used by allSubsteps ([#3287](https://github.com/opentrons/opentrons/issues/3287)) ([54dfa53](https://github.com/opentrons/opentrons/commit/54dfa53))





<a name="3.8.1"></a>
## [3.8.1](https://github.com/opentrons/opentrons/compare/v3.8.0...v3.8.1) (2019-03-29)


### Bug Fixes

* **api:** Correctly migrate probe center settings ([#3246](https://github.com/opentrons/opentrons/issues/3246)) ([84d3b00](https://github.com/opentrons/opentrons/commit/84d3b00))
* **api:** simulate needs to set loglevel ([#3268](https://github.com/opentrons/opentrons/issues/3268)) ([37c00fb](https://github.com/opentrons/opentrons/commit/37c00fb))
* **api,shared-data:** Lowercase labware names and camelCase categories ([#3234](https://github.com/opentrons/opentrons/issues/3234)) ([55e332e](https://github.com/opentrons/opentrons/commit/55e332e)), closes [#3231](https://github.com/opentrons/opentrons/issues/3231)
* **app:** Fix modules not populating the modules card ([#3278](https://github.com/opentrons/opentrons/issues/3278)) ([1fd936d](https://github.com/opentrons/opentrons/commit/1fd936d))
* **components:** Revert addition of "sideEffects": false ([#3236](https://github.com/opentrons/opentrons/issues/3236)) ([4616504](https://github.com/opentrons/opentrons/commit/4616504))
* **protocol-designer:** do not create labware ids if can't create labware ([#3255](https://github.com/opentrons/opentrons/issues/3255)) ([916a10c](https://github.com/opentrons/opentrons/commit/916a10c)), closes [#3254](https://github.com/opentrons/opentrons/issues/3254)
* **shared-data:** Ensure all volumes are µL; remove displayLengthUnits ([#3262](https://github.com/opentrons/opentrons/issues/3262)) ([031f2b9](https://github.com/opentrons/opentrons/commit/031f2b9)), closes [#3240](https://github.com/opentrons/opentrons/issues/3240)
* **shared-data:** fix case of 'brand' text ([#3258](https://github.com/opentrons/opentrons/issues/3258)) ([3dbe35a](https://github.com/opentrons/opentrons/commit/3dbe35a))


### Features

* **api:** Add more pick up tip config elements to pipette config ([#3237](https://github.com/opentrons/opentrons/issues/3237)) ([f69da42](https://github.com/opentrons/opentrons/commit/f69da42))
* **api:** Add support for (p300m,p50m,p10s,p1000s)v1.5 ([#3265](https://github.com/opentrons/opentrons/issues/3265)) ([9dfc127](https://github.com/opentrons/opentrons/commit/9dfc127))
* **api:** Add support for p300s v1.5 ([#3276](https://github.com/opentrons/opentrons/issues/3276)) ([e4ca4ff](https://github.com/opentrons/opentrons/commit/e4ca4ff))
* **api:** add z margin override ([#3235](https://github.com/opentrons/opentrons/issues/3235)) ([341385c](https://github.com/opentrons/opentrons/commit/341385c))
* **api:** allow robot to discover thermocycler and return live data ([#3239](https://github.com/opentrons/opentrons/issues/3239)) ([34af269](https://github.com/opentrons/opentrons/commit/34af269)), closes [#2958](https://github.com/opentrons/opentrons/issues/2958)
* **api:** move-to-slot JSON protocol command ([#3242](https://github.com/opentrons/opentrons/issues/3242)) ([cef5123](https://github.com/opentrons/opentrons/commit/cef5123))
* **api:** Print out the runlog in the simulate script ([#3251](https://github.com/opentrons/opentrons/issues/3251)) ([73d755f](https://github.com/opentrons/opentrons/commit/73d755f))
* **protocol-designer:** assorted form tweaks ([#3260](https://github.com/opentrons/opentrons/issues/3260)) ([a14fca9](https://github.com/opentrons/opentrons/commit/a14fca9))
* **protocol-designer:** update mix form design ([#3247](https://github.com/opentrons/opentrons/issues/3247)) ([57ee363](https://github.com/opentrons/opentrons/commit/57ee363)), closes [#3141](https://github.com/opentrons/opentrons/issues/3141)
* **protocol-designer:** update pause form design ([#3257](https://github.com/opentrons/opentrons/issues/3257)) ([9bf5cad](https://github.com/opentrons/opentrons/commit/9bf5cad)), closes [#3142](https://github.com/opentrons/opentrons/issues/3142) [#3255](https://github.com/opentrons/opentrons/issues/3255)
* **protocol-designer:** update transfer form design ([#3221](https://github.com/opentrons/opentrons/issues/3221)) ([775ec4b](https://github.com/opentrons/opentrons/commit/775ec4b))
* **protocol-designer:** use file-saver to save protocols ([#3263](https://github.com/opentrons/opentrons/issues/3263)) ([56d4788](https://github.com/opentrons/opentrons/commit/56d4788))
* **protocol-designer:** warning/error redesign ([#3270](https://github.com/opentrons/opentrons/issues/3270)) ([51a6cc3](https://github.com/opentrons/opentrons/commit/51a6cc3))





<a name="3.8.0"></a>
# [3.8.0](https://github.com/opentrons/opentrons/compare/v3.7.0...v3.8.0) (2019-03-19)


### Bug Fixes

* **api:** Access wells in calibration so 1-well containers are ok ([#3187](https://github.com/opentrons/opentrons/issues/3187)) ([05ad4b1](https://github.com/opentrons/opentrons/commit/05ad4b1))
* **api:** force update tempdeck target temp cache ([#3223](https://github.com/opentrons/opentrons/issues/3223)) ([175461b](https://github.com/opentrons/opentrons/commit/175461b)), closes [#3218](https://github.com/opentrons/opentrons/issues/3218)
* **api:** cache modules in singleton for apiV1 protocols ([#3219](https://github.com/opentrons/opentrons/issues/3219)) ([058319f](https://github.com/opentrons/opentrons/commit/058319f)), closes [#3205](https://github.com/opentrons/opentrons/issues/3205)
* **api:** Clear globals in simulate script thing ([#3156](https://github.com/opentrons/opentrons/issues/3156)) ([58ddfb6](https://github.com/opentrons/opentrons/commit/58ddfb6))
* **api:** cli deck cal pipette control and tests ([#3222](https://github.com/opentrons/opentrons/issues/3222)) ([0e95e08](https://github.com/opentrons/opentrons/commit/0e95e08))
* **api:** Fix mistakenly-changed pick up current for p10s1.4 ([#3155](https://github.com/opentrons/opentrons/issues/3155)) ([7474752](https://github.com/opentrons/opentrons/commit/7474752))
* **api:** Fix the mount calibration pipette control ([#3228](https://github.com/opentrons/opentrons/issues/3228)) ([962b0a7](https://github.com/opentrons/opentrons/commit/962b0a7))
* **api:** Manually publish to broker in param-mangling commands ([#3159](https://github.com/opentrons/opentrons/issues/3159)) ([17e86bf](https://github.com/opentrons/opentrons/commit/17e86bf)), closes [#3105](https://github.com/opentrons/opentrons/issues/3105)
* **docs:** Catch some last api v4 references ([#3224](https://github.com/opentrons/opentrons/issues/3224)) ([f1940c6](https://github.com/opentrons/opentrons/commit/f1940c6))
* **docs:** Fix broken support link in docs ([#3230](https://github.com/opentrons/opentrons/issues/3230)) ([95663fe](https://github.com/opentrons/opentrons/commit/95663fe))
* **docs:** Fix typo and clarify intro in docs, deploy on edge ([#3154](https://github.com/opentrons/opentrons/issues/3154)) ([0e2c994](https://github.com/opentrons/opentrons/commit/0e2c994))
* **protocol-designer:** fix drop tip offset bug ([#3126](https://github.com/opentrons/opentrons/issues/3126)) ([6db63f4](https://github.com/opentrons/opentrons/commit/6db63f4)), closes [#3122](https://github.com/opentrons/opentrons/issues/3122) [#3123](https://github.com/opentrons/opentrons/issues/3123)
* **protocol-designer:** fix mistake with load file error reporting ([#3190](https://github.com/opentrons/opentrons/issues/3190)) ([3f648ad](https://github.com/opentrons/opentrons/commit/3f648ad)), closes [#3172](https://github.com/opentrons/opentrons/issues/3172)
* **protocol-designer:** fix mix disabled fields ([#3192](https://github.com/opentrons/opentrons/issues/3192)) ([51846d5](https://github.com/opentrons/opentrons/commit/51846d5)), closes [#3049](https://github.com/opentrons/opentrons/issues/3049)
* **protocol-designer:** fix move liquid tooltip; remove old unused tooltips ([#3147](https://github.com/opentrons/opentrons/issues/3147)) ([c1cc891](https://github.com/opentrons/opentrons/commit/c1cc891))
* **protocol-designer:** update disposal volume knowledge base link ([#3132](https://github.com/opentrons/opentrons/issues/3132)) ([1431cbd](https://github.com/opentrons/opentrons/commit/1431cbd)), closes [#3130](https://github.com/opentrons/opentrons/issues/3130)
* **shared-data:** fix y axis svg value for fixed trash ([#3151](https://github.com/opentrons/opentrons/issues/3151)) ([248f3ec](https://github.com/opentrons/opentrons/commit/248f3ec))


### Features

* **api:** Add interruptable poller to Thermocycler driver & API with lid open/close ([#3118](https://github.com/opentrons/opentrons/issues/3118)) ([b04add2](https://github.com/opentrons/opentrons/commit/b04add2))
* **api:** add pipette config endpoint ([#3128](https://github.com/opentrons/opentrons/issues/3128)) ([b6b958b](https://github.com/opentrons/opentrons/commit/b6b958b))
* **api:** Add set_temperature command to API and driver ([#3152](https://github.com/opentrons/opentrons/issues/3152)) ([bde3b1c](https://github.com/opentrons/opentrons/commit/bde3b1c)), closes [#2979](https://github.com/opentrons/opentrons/issues/2979)
* **api:** add udev rule for thermocycler board, include rule file in makefile ([#3203](https://github.com/opentrons/opentrons/issues/3203)) ([d47fee0](https://github.com/opentrons/opentrons/commit/d47fee0)), closes [#3144](https://github.com/opentrons/opentrons/issues/3144)
* **app:** Enable pipette config modal and form ([#3202](https://github.com/opentrons/opentrons/issues/3202)) ([49c1fe9](https://github.com/opentrons/opentrons/commit/49c1fe9)), closes [#3112](https://github.com/opentrons/opentrons/issues/3112)
* **protocol-designer:** add 404 redirect page ([#3193](https://github.com/opentrons/opentrons/issues/3193)) ([10658b8](https://github.com/opentrons/opentrons/commit/10658b8)), closes [#3167](https://github.com/opentrons/opentrons/issues/3167)
* **protocol-designer:** add change tip and reasons for disabled path ([#3139](https://github.com/opentrons/opentrons/issues/3139)) ([6c3f0f0](https://github.com/opentrons/opentrons/commit/6c3f0f0)), closes [#3137](https://github.com/opentrons/opentrons/issues/3137)
* **protocol-designer:** add emailListName param to confirmEmail call ([#3174](https://github.com/opentrons/opentrons/issues/3174)) ([af40d4b](https://github.com/opentrons/opentrons/commit/af40d4b)), closes [#3166](https://github.com/opentrons/opentrons/issues/3166)
* **protocol-designer:** add favicon ([#3176](https://github.com/opentrons/opentrons/issues/3176)) ([0410731](https://github.com/opentrons/opentrons/commit/0410731)), closes [#3171](https://github.com/opentrons/opentrons/issues/3171)
* **protocol-designer:** auto-select well of single well labware ([#3157](https://github.com/opentrons/opentrons/issues/3157)) ([8424c15](https://github.com/opentrons/opentrons/commit/8424c15)), closes [#3146](https://github.com/opentrons/opentrons/issues/3146)
* **protocol-designer:** expose current version in settings page ([#3135](https://github.com/opentrons/opentrons/issues/3135)) ([ce30ab6](https://github.com/opentrons/opentrons/commit/ce30ab6)), closes [#3114](https://github.com/opentrons/opentrons/issues/3114)
* **protocol-designer:** gate entry by user identity ([#3153](https://github.com/opentrons/opentrons/issues/3153)) ([1a257b2](https://github.com/opentrons/opentrons/commit/1a257b2)), closes [#3149](https://github.com/opentrons/opentrons/issues/3149) [#3150](https://github.com/opentrons/opentrons/issues/3150)
* **protocol-designer:** hash favicon ([#3184](https://github.com/opentrons/opentrons/issues/3184)) ([153c596](https://github.com/opentrons/opentrons/commit/153c596))
* **protocol-designer:** hide GateModal in dev by default ([#3210](https://github.com/opentrons/opentrons/issues/3210)) ([3b01ee8](https://github.com/opentrons/opentrons/commit/3b01ee8)), closes [#3189](https://github.com/opentrons/opentrons/issues/3189)
* **protocol-designer:** pd version metadata in code and analytics  ([#3178](https://github.com/opentrons/opentrons/issues/3178)) ([9319198](https://github.com/opentrons/opentrons/commit/9319198))
* **protocol-designer:** point to staging or prod resources accordingly ([#3181](https://github.com/opentrons/opentrons/issues/3181)) ([8a2befc](https://github.com/opentrons/opentrons/commit/8a2befc)), closes [#3180](https://github.com/opentrons/opentrons/issues/3180)
* **protocol-designer:** show info modal when file has been migrated ([#3148](https://github.com/opentrons/opentrons/issues/3148)) ([1150068](https://github.com/opentrons/opentrons/commit/1150068)), closes [#3057](https://github.com/opentrons/opentrons/issues/3057)
* **protocol-designer:** update title and add beta tag ([#3131](https://github.com/opentrons/opentrons/issues/3131)) ([09322d7](https://github.com/opentrons/opentrons/commit/09322d7)), closes [#3127](https://github.com/opentrons/opentrons/issues/3127)





<a name="3.7.0"></a>
# [3.7.0](https://github.com/Opentrons/opentrons/compare/v3.6.5...v3.7.0) (2019-02-19)


### Bug Fixes

* **api:** Add gpio.set_button_light() to QC tools scripts, so they work with 3.6 changes ([#2890](https://github.com/Opentrons/opentrons/issues/2890)) ([aca6931](https://github.com/Opentrons/opentrons/commit/aca6931))
* **api:** api2: Do not do a "safety move" when homing the plunger ([#2965](https://github.com/Opentrons/opentrons/issues/2965)) ([28edc68](https://github.com/Opentrons/opentrons/commit/28edc68))
* **api:** Avoid resource contention on smoothie serial during boot ([#3035](https://github.com/Opentrons/opentrons/issues/3035)) ([3f9a4e3](https://github.com/Opentrons/opentrons/commit/3f9a4e3))
* **api:** Correctly format acceleration from settings as dict ([#2964](https://github.com/Opentrons/opentrons/issues/2964)) ([45a49e0](https://github.com/Opentrons/opentrons/commit/45a49e0))
* **api:** Flush and sync config file writes immediately ([#2899](https://github.com/Opentrons/opentrons/issues/2899)) ([3905e72](https://github.com/Opentrons/opentrons/commit/3905e72))
* **api:** use twine directly for pypi deploys ([ad98402](https://github.com/Opentrons/opentrons/commit/ad98402))
* **components:** do not convert humanized labware type decimal to space ([#3031](https://github.com/Opentrons/opentrons/issues/3031)) ([c9aba2f](https://github.com/Opentrons/opentrons/commit/c9aba2f)), closes [#2766](https://github.com/Opentrons/opentrons/issues/2766)
* **components:** remove padding from empty AlertItems ([#2891](https://github.com/Opentrons/opentrons/issues/2891)) ([7fcd6fb](https://github.com/Opentrons/opentrons/commit/7fcd6fb))
* **docs:** Fix broken support article link ([#2850](https://github.com/Opentrons/opentrons/issues/2850)) ([819ba16](https://github.com/Opentrons/opentrons/commit/819ba16))
* **protocol-designer:** fix bug where 'default-values' shape did not conform to JSON schema ([#3032](https://github.com/Opentrons/opentrons/issues/3032)) ([6c86496](https://github.com/Opentrons/opentrons/commit/6c86496))
* **protocol-designer:** fix bug where auto-populated fields aren't pristine ([#2884](https://github.com/Opentrons/opentrons/issues/2884)) ([e2d2160](https://github.com/Opentrons/opentrons/commit/e2d2160)), closes [#2883](https://github.com/Opentrons/opentrons/issues/2883)
* **protocol-designer:** fix dropdown font-size for pipettes and tips ([#2991](https://github.com/Opentrons/opentrons/issues/2991)) ([77ba111](https://github.com/Opentrons/opentrons/commit/77ba111))
* **protocol-designer:** fix inner mix inside moveLiquid form ([#3050](https://github.com/Opentrons/opentrons/issues/3050)) ([886bd68](https://github.com/Opentrons/opentrons/commit/886bd68)), closes [#3048](https://github.com/Opentrons/opentrons/issues/3048)
* **protocol-designer:** fix liquid placement modal overlay height ([#2819](https://github.com/Opentrons/opentrons/issues/2819)) ([318ffa3](https://github.com/Opentrons/opentrons/commit/318ffa3)), closes [#2203](https://github.com/Opentrons/opentrons/issues/2203)
* **protocol-designer:** fix well order modal height; remove unused .labware_field class ([#3024](https://github.com/Opentrons/opentrons/issues/3024)) ([c4a5f88](https://github.com/Opentrons/opentrons/commit/c4a5f88))
* **protocol-designer:** make rename labware set correct key ([#2927](https://github.com/Opentrons/opentrons/issues/2927)) ([a72822f](https://github.com/Opentrons/opentrons/commit/a72822f)), closes [#2923](https://github.com/Opentrons/opentrons/issues/2923)
* **protocol-designer:** migrate old and new step names and descriptions ([#2888](https://github.com/Opentrons/opentrons/issues/2888)) ([16c1887](https://github.com/Opentrons/opentrons/commit/16c1887))
* **protocol-designer:** resolve bug where PD failed to save correct labware slots ([#2967](https://github.com/Opentrons/opentrons/issues/2967)) ([1179d04](https://github.com/Opentrons/opentrons/commit/1179d04))
* **protocol-designer:** restrict move labware to manual intervention step ([#2897](https://github.com/Opentrons/opentrons/issues/2897)) ([1fdbcac](https://github.com/Opentrons/opentrons/commit/1fdbcac))
* **protocol-designer:** revert changes to source_well / dest_well constants ([#2931](https://github.com/Opentrons/opentrons/issues/2931)) ([bb630f2](https://github.com/Opentrons/opentrons/commit/bb630f2))
* **shared-data:** add tests to ensure filename matches name/loadName ([#2849](https://github.com/Opentrons/opentrons/issues/2849)) ([e821079](https://github.com/Opentrons/opentrons/commit/e821079))
* **shared-data:** fix irregular labware generator ([#2855](https://github.com/Opentrons/opentrons/issues/2855)) ([f405c8e](https://github.com/Opentrons/opentrons/commit/f405c8e))


### Features

* **api:** Add ability to use papi2 in protocol ([#2803](https://github.com/Opentrons/opentrons/issues/2803)) ([6bbb83c](https://github.com/Opentrons/opentrons/commit/6bbb83c))
* **api:** Add calibrate labware and tip probe with new protocol API ([#2846](https://github.com/Opentrons/opentrons/issues/2846)) ([3264cff](https://github.com/Opentrons/opentrons/commit/3264cff)), closes [#2719](https://github.com/Opentrons/opentrons/issues/2719)
* **api:** Add json protocol execution to new protocol API ([#2854](https://github.com/Opentrons/opentrons/issues/2854)) ([48bbcb1](https://github.com/Opentrons/opentrons/commit/48bbcb1)), closes [#2248](https://github.com/Opentrons/opentrons/issues/2248)
* **api:** Add set_temperature command to Thermocycler ([#3017](https://github.com/Opentrons/opentrons/issues/3017)) ([e78238d](https://github.com/Opentrons/opentrons/commit/e78238d)), closes [#2960](https://github.com/Opentrons/opentrons/issues/2960)
* **api:** Add skeleton of Thermocycler API class ([#3015](https://github.com/Opentrons/opentrons/issues/3015)) ([b42f318](https://github.com/Opentrons/opentrons/commit/b42f318)), closes [#2992](https://github.com/Opentrons/opentrons/issues/2992)
* **api:** add thermocycler driver connect/disconnect methods ([#2996](https://github.com/Opentrons/opentrons/issues/2996)) ([6d3e41e](https://github.com/Opentrons/opentrons/commit/6d3e41e)), closes [#2984](https://github.com/Opentrons/opentrons/issues/2984)
* **api:** Allow advanced settings to be null (unset) ([#3029](https://github.com/Opentrons/opentrons/issues/3029)) ([256d736](https://github.com/Opentrons/opentrons/commit/256d736)), closes [#3026](https://github.com/Opentrons/opentrons/issues/3026)
* **api:** api2: Move multichannel center for certain labwares ([#2900](https://github.com/Opentrons/opentrons/issues/2900)) ([dfb60a5](https://github.com/Opentrons/opentrons/commit/dfb60a5)), closes [#2892](https://github.com/Opentrons/opentrons/issues/2892)
* **api:** decrease plunger acceleration and add drop tip speed to config ([#2904](https://github.com/Opentrons/opentrons/issues/2904)) ([dc64b0d](https://github.com/Opentrons/opentrons/commit/dc64b0d))
* **api:** Limit config settings to single directory ([#3000](https://github.com/Opentrons/opentrons/issues/3000)) ([a52e6f0](https://github.com/Opentrons/opentrons/commit/a52e6f0)), closes [#2970](https://github.com/Opentrons/opentrons/issues/2970) [#2969](https://github.com/Opentrons/opentrons/issues/2969)
* **api:** Load and save per-pipette-id config overrides ([#3018](https://github.com/Opentrons/opentrons/issues/3018)) ([9459010](https://github.com/Opentrons/opentrons/commit/9459010)), closes [#2936](https://github.com/Opentrons/opentrons/issues/2936)
* **api:** pipette config plunger position ([#2999](https://github.com/Opentrons/opentrons/issues/2999)) ([cbd559a](https://github.com/Opentrons/opentrons/commit/cbd559a))
* **api:** top-level simulate script and entrypoint ([#3005](https://github.com/Opentrons/opentrons/issues/3005)) ([5969748](https://github.com/Opentrons/opentrons/commit/5969748)), closes [#2971](https://github.com/Opentrons/opentrons/issues/2971)
* **app:** Add robot pipettes, versions, FFs to mixpanel and intercom ([#3059](https://github.com/Opentrons/opentrons/issues/3059)) ([de4a15f](https://github.com/Opentrons/opentrons/commit/de4a15f)), closes [#3009](https://github.com/Opentrons/opentrons/issues/3009) [#3010](https://github.com/Opentrons/opentrons/issues/3010)
* **app:** Configure analytics to send Python and JSON protocol info ([#2946](https://github.com/Opentrons/opentrons/issues/2946)) ([22f419d](https://github.com/Opentrons/opentrons/commit/22f419d)), closes [#2615](https://github.com/Opentrons/opentrons/issues/2615) [#2618](https://github.com/Opentrons/opentrons/issues/2618)
* **app:** Enable new app update modal ([#3044](https://github.com/Opentrons/opentrons/issues/3044)) ([d36071e](https://github.com/Opentrons/opentrons/commit/d36071e))
* **app:** Replace P10 update warning with one for all pipettes ([#3043](https://github.com/Opentrons/opentrons/issues/3043)) ([9bd3eb2](https://github.com/Opentrons/opentrons/commit/9bd3eb2)), closes [#3011](https://github.com/Opentrons/opentrons/issues/3011)
* **protocol-designer:** add animated path field tooltips ([#3004](https://github.com/Opentrons/opentrons/issues/3004)) ([3dec97a](https://github.com/Opentrons/opentrons/commit/3dec97a)), closes [#2914](https://github.com/Opentrons/opentrons/issues/2914)
* **protocol-designer:** add perSource/perDest changeTip options to transfer.js ([#2913](https://github.com/Opentrons/opentrons/issues/2913)) ([0224a8f](https://github.com/Opentrons/opentrons/commit/0224a8f))
* **protocol-designer:** avoid aspirate/dispense below pipette min volume ([#2804](https://github.com/Opentrons/opentrons/issues/2804)) ([2430e09](https://github.com/Opentrons/opentrons/commit/2430e09)), closes [#1603](https://github.com/Opentrons/opentrons/issues/1603)
* **protocol-designer:** build up the ui for new step form ([#2949](https://github.com/Opentrons/opentrons/issues/2949)) ([7c3b553](https://github.com/Opentrons/opentrons/commit/7c3b553))
* **protocol-designer:** change pipette<>labware incompatible copy ([#2989](https://github.com/Opentrons/opentrons/issues/2989)) ([71669b0](https://github.com/Opentrons/opentrons/commit/71669b0)), closes [#2674](https://github.com/Opentrons/opentrons/issues/2674)
* **protocol-designer:** disabled distribute's fallback to transfer ([#2998](https://github.com/Opentrons/opentrons/issues/2998)) ([784c587](https://github.com/Opentrons/opentrons/commit/784c587)), closes [#2921](https://github.com/Opentrons/opentrons/issues/2921)
* **protocol-designer:** drag and drop to move labware, duplicate ([#2857](https://github.com/Opentrons/opentrons/issues/2857)) ([44e449a](https://github.com/Opentrons/opentrons/commit/44e449a))
* **protocol-designer:** hook up flexible step to handleFormChange and gen commands! ([#2985](https://github.com/Opentrons/opentrons/issues/2985)) ([2cad201](https://github.com/Opentrons/opentrons/commit/2cad201))
* **protocol-designer:** implement form-level field disabling in new form ([#2978](https://github.com/Opentrons/opentrons/issues/2978)) ([ae72b9f](https://github.com/Opentrons/opentrons/commit/ae72b9f))
* **protocol-designer:** implement handleFormChangeMoveLiquid ([#2947](https://github.com/Opentrons/opentrons/issues/2947)) ([c32d700](https://github.com/Opentrons/opentrons/commit/c32d700))
* **protocol-designer:** implement moveLiquidFormToArgs ([#2908](https://github.com/Opentrons/opentrons/issues/2908)) ([147f1cd](https://github.com/Opentrons/opentrons/commit/147f1cd)), closes [#2906](https://github.com/Opentrons/opentrons/issues/2906)
* **protocol-designer:** improve ux behavior of disposal volume ([#3021](https://github.com/Opentrons/opentrons/issues/3021)) ([e2b3c48](https://github.com/Opentrons/opentrons/commit/e2b3c48))
* **protocol-designer:** migration of mix form and migration tests ([#3034](https://github.com/Opentrons/opentrons/issues/3034)) ([e18ac3e](https://github.com/Opentrons/opentrons/commit/e18ac3e))
* **protocol-designer:** migration version and tcd to flexible steps ([#3002](https://github.com/Opentrons/opentrons/issues/3002)) ([316643b](https://github.com/Opentrons/opentrons/commit/316643b)), closes [#2917](https://github.com/Opentrons/opentrons/issues/2917)
* **protocol-designer:** new placeholder form for moveLiquid stepType ([#2928](https://github.com/Opentrons/opentrons/issues/2928)) ([fc133ae](https://github.com/Opentrons/opentrons/commit/fc133ae))
* **protocol-designer:** polish up new transfer form layout and styling ([#2983](https://github.com/Opentrons/opentrons/issues/2983)) ([b00166b](https://github.com/Opentrons/opentrons/commit/b00166b))
* **protocol-designer:** separate field processing from casting ([#2993](https://github.com/Opentrons/opentrons/issues/2993)) ([e1d5aca](https://github.com/Opentrons/opentrons/commit/e1d5aca))
* **protocol-designer:** use SelectField for change tip ([#3001](https://github.com/Opentrons/opentrons/issues/3001)) ([b477f34](https://github.com/Opentrons/opentrons/commit/b477f34)), closes [#2915](https://github.com/Opentrons/opentrons/issues/2915)


### Performance Improvements

* **api:** New aspiration functions for all pipettes ([#3014](https://github.com/Opentrons/opentrons/issues/3014)) ([ae850ce](https://github.com/Opentrons/opentrons/commit/ae850ce)), closes [#3012](https://github.com/Opentrons/opentrons/issues/3012)
* **protocol-designer:** optimize substep components to render less often ([#3007](https://github.com/Opentrons/opentrons/issues/3007)) ([5b2ed7d](https://github.com/Opentrons/opentrons/commit/5b2ed7d))





<a name="3.6.5"></a>
## [3.6.5](https://github.com/opentrons/opentrons/compare/v3.6.4...v3.6.5) (2018-12-18)


### Bug Fixes

* **api:** Fix extract metadata ([#2833](https://github.com/opentrons/opentrons/issues/2833)) ([0930915](https://github.com/opentrons/opentrons/commit/0930915))
* **api:** Remove the intermingled old aspirate function from p10s ([#2839](https://github.com/opentrons/opentrons/issues/2839)) ([696184c](https://github.com/opentrons/opentrons/commit/696184c))
* **protocol-designer:** ensure pipettes are removed from step forms when nuked ([#2813](https://github.com/opentrons/opentrons/issues/2813)) ([46fee8b](https://github.com/opentrons/opentrons/commit/46fee8b))


### Features

* **protocol-designer:** display timeline and form alerts in same fashion ([#2817](https://github.com/opentrons/opentrons/issues/2817)) ([e27d2ae](https://github.com/opentrons/opentrons/commit/e27d2ae)), closes [#1990](https://github.com/opentrons/opentrons/issues/1990)





<a name="3.6.4"></a>
## [3.6.4](https://github.com/opentrons/opentrons/compare/v3.6.3...v3.6.4) (2018-12-17)


### Bug Fixes

* **protocol-designer:** fix bug with null distribute step ([#2826](https://github.com/opentrons/opentrons/issues/2826)) ([3eecb29](https://github.com/opentrons/opentrons/commit/3eecb29))


### Features

* **api:** Adds optional arg to QC scripts to specify UART port ([#2825](https://github.com/opentrons/opentrons/issues/2825)) ([5d622ad](https://github.com/opentrons/opentrons/commit/5d622ad))


### Performance Improvements

* **api:** Update P1000S aspirate function ([#2830](https://github.com/opentrons/opentrons/issues/2830)) ([ca65283](https://github.com/opentrons/opentrons/commit/ca65283))





<a name="3.6.3"></a>
## [3.6.3](https://github.com/Opentrons/opentrons/compare/v3.6.2...v3.6.3) (2018-12-13)


### Bug Fixes

* **api:** raise p300s droptip pose by 1mm to increase QC yield ([#2808](https://github.com/Opentrons/opentrons/issues/2808)) ([40759b2](https://github.com/Opentrons/opentrons/commit/40759b2))


### Features

* **app:** Add opt-in modal for new p10s ([#2816](https://github.com/Opentrons/opentrons/issues/2816)) ([cd69e19](https://github.com/Opentrons/opentrons/commit/cd69e19)), closes [#2793](https://github.com/Opentrons/opentrons/issues/2793)
* **app:** Display Python protocol metadata in the app ([#2805](https://github.com/Opentrons/opentrons/issues/2805)) ([f854953](https://github.com/Opentrons/opentrons/commit/f854953)), closes [#2617](https://github.com/Opentrons/opentrons/issues/2617)
* **app:** Implement clearer robot server upgrade/downgrade information ([#2807](https://github.com/Opentrons/opentrons/issues/2807)) ([d37e3aa](https://github.com/Opentrons/opentrons/commit/d37e3aa)), closes [#2401](https://github.com/Opentrons/opentrons/issues/2401)





<a name="3.6.2"></a>
## [3.6.2](https://github.com/Opentrons/opentrons/compare/v3.6.0...v3.6.2) (2018-12-11)


### Bug Fixes

* **api:** Do not overwrite settings every time we get config files ([#2802](https://github.com/Opentrons/opentrons/issues/2802)) ([c679c5c](https://github.com/Opentrons/opentrons/commit/c679c5c))
* **app:** Show main nav notification dot for updatable connected robot ([#2801](https://github.com/Opentrons/opentrons/issues/2801)) ([6a67c86](https://github.com/Opentrons/opentrons/commit/6a67c86)), closes [#2642](https://github.com/Opentrons/opentrons/issues/2642)
* **protocol-designer:** finish implementing flow rate in PD ([#2782](https://github.com/Opentrons/opentrons/issues/2782)) ([fda0920](https://github.com/Opentrons/opentrons/commit/fda0920)), closes [#2773](https://github.com/Opentrons/opentrons/issues/2773)
* **protocol-designer:** fix bug where new protocol w 1 pipette deleted fixedTrash ([#2797](https://github.com/Opentrons/opentrons/issues/2797)) ([2052f49](https://github.com/Opentrons/opentrons/commit/2052f49))
* **protocol-designer:** fix changeTip once bug in distribute step ([#2784](https://github.com/Opentrons/opentrons/issues/2784)) ([64111f6](https://github.com/Opentrons/opentrons/commit/64111f6)), closes [#2748](https://github.com/Opentrons/opentrons/issues/2748)
* **protocol-designer:** fix distribute aspirate touchtip offset ([#2795](https://github.com/Opentrons/opentrons/issues/2795)) ([c9a4e3f](https://github.com/Opentrons/opentrons/commit/c9a4e3f))
* **protocol-designer:** fix missing disposal volume in new distribute forms ([#2733](https://github.com/Opentrons/opentrons/issues/2733)) ([5657164](https://github.com/Opentrons/opentrons/commit/5657164)), closes [#2705](https://github.com/Opentrons/opentrons/issues/2705)
* **protocol-designer:** fix regression of [#2370](https://github.com/Opentrons/opentrons/issues/2370) ([#2791](https://github.com/Opentrons/opentrons/issues/2791)) ([8a4f470](https://github.com/Opentrons/opentrons/commit/8a4f470))
* **protocol-designer:** fix swap pipettes button dispatch ([#2798](https://github.com/Opentrons/opentrons/issues/2798)) ([68c16c2](https://github.com/Opentrons/opentrons/commit/68c16c2))
* **protocol-designer:** fix when add liquid hint is shown ([#2787](https://github.com/Opentrons/opentrons/issues/2787)) ([eb59fec](https://github.com/Opentrons/opentrons/commit/eb59fec)), closes [#2777](https://github.com/Opentrons/opentrons/issues/2777)


### Features

* **api:** Add metadata to session for Python protocols ([#2799](https://github.com/Opentrons/opentrons/issues/2799)) ([1da19bb](https://github.com/Opentrons/opentrons/commit/1da19bb)), closes [#2616](https://github.com/Opentrons/opentrons/issues/2616)
* **api:** p10 behavior feature flag ([#2794](https://github.com/Opentrons/opentrons/issues/2794)) ([c468b06](https://github.com/Opentrons/opentrons/commit/c468b06)), closes [#2792](https://github.com/Opentrons/opentrons/issues/2792)
* **protocol-designer:** allow user to re-enable dismissed hints ([#2726](https://github.com/Opentrons/opentrons/issues/2726)) ([af52d1e](https://github.com/Opentrons/opentrons/commit/af52d1e)), closes [#2652](https://github.com/Opentrons/opentrons/issues/2652)
* **protocol-designer:** drag and drop step reordering ([#2714](https://github.com/Opentrons/opentrons/issues/2714)) ([13d6fe3](https://github.com/Opentrons/opentrons/commit/13d6fe3)), closes [#2654](https://github.com/Opentrons/opentrons/issues/2654)
* **protocol-designer:** enable sharing tip racks between pipettes ([#2753](https://github.com/Opentrons/opentrons/issues/2753)) ([45db100](https://github.com/Opentrons/opentrons/commit/45db100))
* **protocol-designer:** highlight tips per substep ([#2716](https://github.com/Opentrons/opentrons/issues/2716)) ([eb2c2ce](https://github.com/Opentrons/opentrons/commit/eb2c2ce)), closes [#2537](https://github.com/Opentrons/opentrons/issues/2537)
* **protocol-designer:** new protocol modal defaults and visual updates ([#2739](https://github.com/Opentrons/opentrons/issues/2739)) ([333ad5a](https://github.com/Opentrons/opentrons/commit/333ad5a)), closes [#2721](https://github.com/Opentrons/opentrons/issues/2721)
* **protocol-designer:** place tipracks on protocol creation ([#2750](https://github.com/Opentrons/opentrons/issues/2750)) ([a110a8d](https://github.com/Opentrons/opentrons/commit/a110a8d)), closes [#1327](https://github.com/Opentrons/opentrons/issues/1327)
* **protocol-designer:** remove delay from advanced settings of all step types ([#2731](https://github.com/Opentrons/opentrons/issues/2731)) ([b26abdd](https://github.com/Opentrons/opentrons/commit/b26abdd)), closes [#2579](https://github.com/Opentrons/opentrons/issues/2579)
* **protocol-designer:** remove option of tiprack-1000ul-chem from pd ([#2745](https://github.com/Opentrons/opentrons/issues/2745)) ([3d5f276](https://github.com/Opentrons/opentrons/commit/3d5f276))
* **protocol-designer:** scroll to top of page when step created/selected ([#2785](https://github.com/Opentrons/opentrons/issues/2785)) ([8d91f8a](https://github.com/Opentrons/opentrons/commit/8d91f8a))
* **protocol-designer:** show file created and modified date ([#2754](https://github.com/Opentrons/opentrons/issues/2754)) ([7fe3f0f](https://github.com/Opentrons/opentrons/commit/7fe3f0f)), closes [#1623](https://github.com/Opentrons/opentrons/issues/1623)
* **protocol-designer:** standardize blowout and disposal volume destinations ([#2732](https://github.com/Opentrons/opentrons/issues/2732)) ([586f045](https://github.com/Opentrons/opentrons/commit/586f045)), closes [#1989](https://github.com/Opentrons/opentrons/issues/1989)
* **protocol-designer:** use pipette min vol as default/recommended disposal volume ([#2788](https://github.com/Opentrons/opentrons/issues/2788)) ([2276619](https://github.com/Opentrons/opentrons/commit/2276619)), closes [#2777](https://github.com/Opentrons/opentrons/issues/2777)
* **shared-data:** Add more new labware definitions to shared-data ([#2703](https://github.com/Opentrons/opentrons/issues/2703)) ([9737196](https://github.com/Opentrons/opentrons/commit/9737196))





<a name="3.6.1"></a>
## [3.6.1](https://github.com/Opentrons/opentrons/compare/v3.6.0...v3.6.1) (2018-12-05)


### Bug Fixes

* **api:** Fix bad P10S config causing under-aspirations ([#2774](https://github.com/Opentrons/opentrons/issues/2774)) ([9c5e0a2](https://github.com/Opentrons/opentrons/commit/9c5e0a2))
* **protocol-designer:** fix missing disposal volume in new distribute forms ([#2733](https://github.com/Opentrons/opentrons/issues/2733)) ([5657164](https://github.com/Opentrons/opentrons/commit/5657164)), closes [#2705](https://github.com/Opentrons/opentrons/issues/2705)


### Features

* **protocol-designer:** allow user to re-enable dismissed hints ([#2726](https://github.com/Opentrons/opentrons/issues/2726)) ([af52d1e](https://github.com/Opentrons/opentrons/commit/af52d1e)), closes [#2652](https://github.com/Opentrons/opentrons/issues/2652)
* **protocol-designer:** drag and drop step reordering ([#2714](https://github.com/Opentrons/opentrons/issues/2714)) ([13d6fe3](https://github.com/Opentrons/opentrons/commit/13d6fe3)), closes [#2654](https://github.com/Opentrons/opentrons/issues/2654)
* **protocol-designer:** highlight tips per substep ([#2716](https://github.com/Opentrons/opentrons/issues/2716)) ([eb2c2ce](https://github.com/Opentrons/opentrons/commit/eb2c2ce)), closes [#2537](https://github.com/Opentrons/opentrons/issues/2537)
* **protocol-designer:** new protocol modal defaults and visual updates ([#2739](https://github.com/Opentrons/opentrons/issues/2739)) ([333ad5a](https://github.com/Opentrons/opentrons/commit/333ad5a)), closes [#2721](https://github.com/Opentrons/opentrons/issues/2721)
* **protocol-designer:** place tipracks on protocol creation ([#2750](https://github.com/Opentrons/opentrons/issues/2750)) ([a110a8d](https://github.com/Opentrons/opentrons/commit/a110a8d)), closes [#1327](https://github.com/Opentrons/opentrons/issues/1327)
* **protocol-designer:** remove delay from advanced settings of all step types ([#2731](https://github.com/Opentrons/opentrons/issues/2731)) ([b26abdd](https://github.com/Opentrons/opentrons/commit/b26abdd)), closes [#2579](https://github.com/Opentrons/opentrons/issues/2579)
* **protocol-designer:** remove option of tiprack-1000ul-chem from pd ([#2745](https://github.com/Opentrons/opentrons/issues/2745)) ([3d5f276](https://github.com/Opentrons/opentrons/commit/3d5f276))





<a name="3.6.0"></a>
# [3.6.0](https://github.com/Opentrons/opentrons/compare/v3.6.0-beta.1...v3.6.0) (2018-11-29)


### Bug Fixes

* **api:** Fix the flaky tempdeck test ([#2725](https://github.com/Opentrons/opentrons/issues/2725)) ([f721163](https://github.com/Opentrons/opentrons/commit/f721163))
* **shared-data:** fix total-liquid-volume of opentrons-tuberack-50ml ([#2744](https://github.com/Opentrons/opentrons/issues/2744)) ([aef8cc8](https://github.com/Opentrons/opentrons/commit/aef8cc8)), closes [#2743](https://github.com/Opentrons/opentrons/issues/2743)


### Features

* **protocol-designer:** add tooltip to advanced settings icon ([#2727](https://github.com/Opentrons/opentrons/issues/2727)) ([0deb6b7](https://github.com/Opentrons/opentrons/commit/0deb6b7)), closes [#2706](https://github.com/Opentrons/opentrons/issues/2706)
* **protocol-designer:** make multichannel substeps collapsed by default ([#2729](https://github.com/Opentrons/opentrons/issues/2729)) ([b419a72](https://github.com/Opentrons/opentrons/commit/b419a72)), closes [#2678](https://github.com/Opentrons/opentrons/issues/2678)
* **protocol-designer:** remove label from 200ul/300ul tiprack image ([#2722](https://github.com/Opentrons/opentrons/issues/2722)) ([fe5cf6a](https://github.com/Opentrons/opentrons/commit/fe5cf6a)), closes [#2704](https://github.com/Opentrons/opentrons/issues/2704)





<a name="3.6.0-beta.1"></a>
# [3.6.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.6.0-beta.0...v3.6.0-beta.1) (2018-11-27)


### Bug Fixes

* **api:** re-position p1000 droptip/blowout positions ([#2681](https://github.com/Opentrons/opentrons/issues/2681)) ([f0cf01b](https://github.com/Opentrons/opentrons/commit/f0cf01b))
* **protocol-designer:** de-hydrate disposal and blowout labware in st… ([#2669](https://github.com/Opentrons/opentrons/issues/2669)) ([b6246b2](https://github.com/Opentrons/opentrons/commit/b6246b2))
* **protocol-designer:** well selection modal refresh on step change ([#2671](https://github.com/Opentrons/opentrons/issues/2671)) ([941916f](https://github.com/Opentrons/opentrons/commit/941916f))


### Features

* **api:** Add 1.5ml tuberack to old labware definition section ([#2679](https://github.com/Opentrons/opentrons/issues/2679)) ([2739038](https://github.com/Opentrons/opentrons/commit/2739038))
* **api:** Adds pipette models v1.4 to robot config ([#2689](https://github.com/Opentrons/opentrons/issues/2689)) ([fd9c38a](https://github.com/Opentrons/opentrons/commit/fd9c38a))
* **protocol-designer:** allow user to set touch-tip offset ([#2691](https://github.com/Opentrons/opentrons/issues/2691)) ([d5b7d8a](https://github.com/Opentrons/opentrons/commit/d5b7d8a)), closes [#2540](https://github.com/Opentrons/opentrons/issues/2540)
* **protocol-designer:** disambiguate left/right pipette names when they match ([#2698](https://github.com/Opentrons/opentrons/issues/2698)) ([2f43a0e](https://github.com/Opentrons/opentrons/commit/2f43a0e)), closes [#2078](https://github.com/Opentrons/opentrons/issues/2078)
* **protocol-designer:** disconnect well selection modal from hovered step state ([#2662](https://github.com/Opentrons/opentrons/issues/2662)) ([973a8a5](https://github.com/Opentrons/opentrons/commit/973a8a5)), closes [#2558](https://github.com/Opentrons/opentrons/issues/2558)
* **protocol-designer:** liquid placement modal performance boost ([#2661](https://github.com/Opentrons/opentrons/issues/2661)) ([ecc8569](https://github.com/Opentrons/opentrons/commit/ecc8569)), closes [#2557](https://github.com/Opentrons/opentrons/issues/2557)
* **protocol-designer:** make settings tab always active ([#2700](https://github.com/Opentrons/opentrons/issues/2700)) ([036e2ee](https://github.com/Opentrons/opentrons/commit/036e2ee)), closes [#2697](https://github.com/Opentrons/opentrons/issues/2697)
* **protocol-designer:** use tip max vol, not pipette max vol ([#2656](https://github.com/Opentrons/opentrons/issues/2656)) ([418665d](https://github.com/Opentrons/opentrons/commit/418665d)), closes [#2160](https://github.com/Opentrons/opentrons/issues/2160)


### Performance Improvements

* **api:** Decrease plunger motor max speed by 20% ([#2682](https://github.com/Opentrons/opentrons/issues/2682)) ([f8b7ccf](https://github.com/Opentrons/opentrons/commit/f8b7ccf))





<a name="3.6.0-beta.0"></a>
# [3.6.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.5.1...v3.6.0-beta.0) (2018-11-13)


### Bug Fixes

* **api:** Correct well ordering for custom labware ([#2633](https://github.com/Opentrons/opentrons/issues/2633)) ([8e7530c](https://github.com/Opentrons/opentrons/commit/8e7530c)), closes [#2631](https://github.com/Opentrons/opentrons/issues/2631)
* **api:** Fix bug where drop-tip current is not used while actually dropping tip ([#2572](https://github.com/Opentrons/opentrons/issues/2572)) ([d7c7f60](https://github.com/Opentrons/opentrons/commit/d7c7f60))
* **protocol-designer:** add vertical spacing back to form fields ([#2644](https://github.com/Opentrons/opentrons/issues/2644)) ([c7173da](https://github.com/Opentrons/opentrons/commit/c7173da)), closes [#2580](https://github.com/Opentrons/opentrons/issues/2580) [#2597](https://github.com/Opentrons/opentrons/issues/2597)
* **protocol-designer:** fix sidebar for liquid placement modal ([#2649](https://github.com/Opentrons/opentrons/issues/2649)) ([8da2f7d](https://github.com/Opentrons/opentrons/commit/8da2f7d))


### Features

* **api:** Pipette id included in GET /pipettes ([#2564](https://github.com/Opentrons/opentrons/issues/2564)) ([0a171fe](https://github.com/Opentrons/opentrons/commit/0a171fe)), closes [#2148](https://github.com/Opentrons/opentrons/issues/2148)
* **api:** support offset in json protocol touch-tip command ([#2566](https://github.com/Opentrons/opentrons/issues/2566)) ([d54ee84](https://github.com/Opentrons/opentrons/commit/d54ee84))
* **app:** Home pipette after tip probe confirmed ([#2586](https://github.com/Opentrons/opentrons/issues/2586)) ([3119379](https://github.com/Opentrons/opentrons/commit/3119379)), closes [#2544](https://github.com/Opentrons/opentrons/issues/2544)
* **app:** Implement new connectivity card ([#2608](https://github.com/Opentrons/opentrons/issues/2608)) ([a4b26a2](https://github.com/Opentrons/opentrons/commit/a4b26a2)), closes [#2555](https://github.com/Opentrons/opentrons/issues/2555)
* **app:** Track restart status in discovery state for better alerts ([#2639](https://github.com/Opentrons/opentrons/issues/2639)) ([b4ba600](https://github.com/Opentrons/opentrons/commit/b4ba600)), closes [#2516](https://github.com/Opentrons/opentrons/issues/2516)
* **docs:** Add opentrons container defs and images ([#2531](https://github.com/Opentrons/opentrons/issues/2531)) ([0619fb3](https://github.com/Opentrons/opentrons/commit/0619fb3))
* **protocol-designer:** add labware details card ([#2490](https://github.com/Opentrons/opentrons/issues/2490)) ([fb96472](https://github.com/Opentrons/opentrons/commit/fb96472)), closes [#2428](https://github.com/Opentrons/opentrons/issues/2428)
* **protocol-designer:** add more labware options to PD ([#2634](https://github.com/Opentrons/opentrons/issues/2634)) ([7db10ce](https://github.com/Opentrons/opentrons/commit/7db10ce)), closes [#2583](https://github.com/Opentrons/opentrons/issues/2583)
* **protocol-designer:** add well tooltip to liquid placement modal ([#2550](https://github.com/Opentrons/opentrons/issues/2550)) ([7c13891](https://github.com/Opentrons/opentrons/commit/7c13891)), closes [#2486](https://github.com/Opentrons/opentrons/issues/2486)
* **protocol-designer:** allow user to change pipette selection ([#2548](https://github.com/Opentrons/opentrons/issues/2548)) ([bb08aa4](https://github.com/Opentrons/opentrons/commit/bb08aa4)), closes [#2474](https://github.com/Opentrons/opentrons/issues/2474) [#2475](https://github.com/Opentrons/opentrons/issues/2475) [#2477](https://github.com/Opentrons/opentrons/issues/2477) [#2632](https://github.com/Opentrons/opentrons/issues/2632)
* **protocol-designer:** clean up navigation and modal hierarchy ([#2638](https://github.com/Opentrons/opentrons/issues/2638)) ([134558f](https://github.com/Opentrons/opentrons/commit/134558f)), closes [#2198](https://github.com/Opentrons/opentrons/issues/2198)
* **protocol-designer:** collapse all step items on newly loaded file ([#2549](https://github.com/Opentrons/opentrons/issues/2549)) ([46066a2](https://github.com/Opentrons/opentrons/commit/46066a2)), closes [#2541](https://github.com/Opentrons/opentrons/issues/2541)
* **protocol-designer:** edit saved step forms when labware is deleted ([#2653](https://github.com/Opentrons/opentrons/issues/2653)) ([78b99c3](https://github.com/Opentrons/opentrons/commit/78b99c3)), closes [#2361](https://github.com/Opentrons/opentrons/issues/2361)
* **shared-data:** Add generator function for irregular labware ([#2610](https://github.com/Opentrons/opentrons/issues/2610)) ([ad568c1](https://github.com/Opentrons/opentrons/commit/ad568c1)), closes [#2275](https://github.com/Opentrons/opentrons/issues/2275)
* **shared-data:** support unversioned pipettes in JSON protocols ([#2605](https://github.com/Opentrons/opentrons/issues/2605)) ([9e84ff6](https://github.com/Opentrons/opentrons/commit/9e84ff6))





<a name="3.5.1"></a>
# [3.5.1](https://github.com/opentrons/opentrons/compare/v3.5.0...v3.5.1) (2018-10-26)


### Bug Fixes

* **api:** Correct GET /wifi/keys response to match documentation ([#2532](https://github.com/opentrons/opentrons/issues/2532)) ([9e577b2](https://github.com/opentrons/opentrons/commit/9e577b2))
* **app:** Show the correct release notes for robot update ([#2560](https://github.com/Opentrons/opentrons/issues/2560)) ([7b0279c](https://github.com/Opentrons/opentrons/commit/7b0279c))


<a name="3.5.0"></a>
# [3.5.0](https://github.com/opentrons/opentrons/compare/v3.5.0-beta.1...v3.5.0) (2018-10-25)


### Bug Fixes

* **api:** Correct GET /wifi/keys response to match documentation ([#2532](https://github.com/opentrons/opentrons/issues/2532)) ([9e577b2](https://github.com/opentrons/opentrons/commit/9e577b2))
* **api:** Fix height of p1000 tip rack definition ([#2547](https://github.com/opentrons/opentrons/issues/2547)) ([8a92e82](https://github.com/opentrons/opentrons/commit/8a92e82))
* **api:** Make the Makefile have more real prerequisites/targets ([#2510](https://github.com/opentrons/opentrons/issues/2510)) ([1eb207a](https://github.com/opentrons/opentrons/commit/1eb207a))
* **api:** Write .env with absolute path for conf on make install ([#2500](https://github.com/opentrons/opentrons/issues/2500)) ([ec469ed](https://github.com/opentrons/opentrons/commit/ec469ed)), closes [#2495](https://github.com/opentrons/opentrons/issues/2495)
* **protocol-designer:** close liquid placement form when clear wells is clicked ([#2533](https://github.com/opentrons/opentrons/issues/2533)) ([e0727e6](https://github.com/opentrons/opentrons/commit/e0727e6)), closes [#2528](https://github.com/opentrons/opentrons/issues/2528)
* **protocol-designer:** do not add __air__ on blowout ([#2545](https://github.com/opentrons/opentrons/issues/2545)) ([b35cfa9](https://github.com/opentrons/opentrons/commit/b35cfa9)), closes [#2498](https://github.com/opentrons/opentrons/issues/2498)
* **protocol-designer:** fix LiquidPlacementForm onBlur typo ([#2546](https://github.com/opentrons/opentrons/issues/2546)) ([c6a9f38](https://github.com/opentrons/opentrons/commit/c6a9f38))
* **protocol-designer:** fix localization refactor mistakes ([#2499](https://github.com/opentrons/opentrons/issues/2499)) ([4ef34f2](https://github.com/opentrons/opentrons/commit/4ef34f2))
* **repo:** increase flow merge timeout ([#2514](https://github.com/opentrons/opentrons/issues/2514)) ([b1ba303](https://github.com/opentrons/opentrons/commit/b1ba303))
* **shared-data:** Fix corner offset from slot logic; add in container offset to well coordinates ([#2519](https://github.com/opentrons/opentrons/issues/2519)) ([c79684b](https://github.com/opentrons/opentrons/commit/c79684b))


### Features

* **api:** Add ability to save new delta from calibrating labware ([#2503](https://github.com/opentrons/opentrons/issues/2503)) ([a6e3a24](https://github.com/opentrons/opentrons/commit/a6e3a24))
* **api:** Add error checking on generated labware def ([#2476](https://github.com/opentrons/opentrons/issues/2476)) ([242ffe4](https://github.com/opentrons/opentrons/commit/242ffe4))
* **api:** Clear labware calibrations in new labware system ([#2513](https://github.com/opentrons/opentrons/issues/2513)) ([cb3d12e](https://github.com/opentrons/opentrons/commit/cb3d12e)), closes [#2276](https://github.com/opentrons/opentrons/issues/2276)
* **api:** Use deck-absolute coords in hardware_control ([#2502](https://github.com/opentrons/opentrons/issues/2502)) ([36c9f73](https://github.com/opentrons/opentrons/commit/36c9f73)), closes [#2238](https://github.com/opentrons/opentrons/issues/2238)
* **app:** Show all labware of same type as confirmed ([#2525](https://github.com/opentrons/opentrons/issues/2525)) ([ab8fdd9](https://github.com/opentrons/opentrons/commit/ab8fdd9)), closes [#2523](https://github.com/opentrons/opentrons/issues/2523)
* **protocol-designer:** add tooltip for labware name/type on steplist ([#2497](https://github.com/opentrons/opentrons/issues/2497)) ([4890374](https://github.com/opentrons/opentrons/commit/4890374)), closes [#2421](https://github.com/opentrons/opentrons/issues/2421)
* **protocol-designer:** allow user to delete entire liquid groups ([#2524](https://github.com/opentrons/opentrons/issues/2524)) ([dce806b](https://github.com/opentrons/opentrons/commit/dce806b)), closes [#2437](https://github.com/opentrons/opentrons/issues/2437)
* **protocol-designer:** continue to liquids not design page ([#2539](https://github.com/opentrons/opentrons/issues/2539)) ([49da7b1](https://github.com/opentrons/opentrons/commit/49da7b1)), closes [#2534](https://github.com/opentrons/opentrons/issues/2534)
* **protocol-designer:** implement "clear wells" button ([#2528](https://github.com/opentrons/opentrons/issues/2528)) ([145977f](https://github.com/opentrons/opentrons/commit/145977f)), closes [#2430](https://github.com/opentrons/opentrons/issues/2430)
* **protocol-designer:** liquid tooltips on well selection, popper and portal ([#2521](https://github.com/opentrons/opentrons/issues/2521)) ([12d8adb](https://github.com/opentrons/opentrons/commit/12d8adb)), closes [#2487](https://github.com/opentrons/opentrons/issues/2487)
* **protocol-designer:** replace liquid placement form ([#2518](https://github.com/opentrons/opentrons/issues/2518)) ([3a6b06f](https://github.com/opentrons/opentrons/commit/3a6b06f)), closes [#2429](https://github.com/opentrons/opentrons/issues/2429)
* **protocol-designer:** use formik for liquid edit form ([#2512](https://github.com/opentrons/opentrons/issues/2512)) ([3e7456f](https://github.com/opentrons/opentrons/commit/3e7456f)), closes [#2460](https://github.com/opentrons/opentrons/issues/2460)





<a name="3.5.0-beta.1"></a>
# [3.5.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.5.0-beta.0...v3.5.0-beta.1) (2018-10-16)


### Bug Fixes

* **api:** Filter out missing SSIDs from network list ([#2493](https://github.com/Opentrons/opentrons/issues/2493)) ([82584bd](https://github.com/Opentrons/opentrons/commit/82584bd)), closes [#2489](https://github.com/Opentrons/opentrons/issues/2489)
* **api:** Fix docs build failure after move to legacy_api ([#2469](https://github.com/Opentrons/opentrons/issues/2469)) ([cbe686a](https://github.com/Opentrons/opentrons/commit/cbe686a)), closes [#2468](https://github.com/Opentrons/opentrons/issues/2468)
* **app:** Check semver validity of API returned version strings ([#2492](https://github.com/Opentrons/opentrons/issues/2492)) ([d9a48bf](https://github.com/Opentrons/opentrons/commit/d9a48bf))
* **protocol-designer:** unhighlight wells on deselect in well selection modal ([#2491](https://github.com/Opentrons/opentrons/issues/2491)) ([5dfbf25](https://github.com/Opentrons/opentrons/commit/5dfbf25)), closes [#2463](https://github.com/Opentrons/opentrons/issues/2463)
* **repo:** fix gitattributes hex crlf bug ([#2482](https://github.com/Opentrons/opentrons/issues/2482)) ([c01f6c4](https://github.com/Opentrons/opentrons/commit/c01f6c4))


### Features

* **api:** Add /networking/status endpoint to get all interface info ([#2471](https://github.com/Opentrons/opentrons/issues/2471)) ([7555e26](https://github.com/Opentrons/opentrons/commit/7555e26)), closes [#2445](https://github.com/Opentrons/opentrons/issues/2445)
* **api:** Add labware load to protocol API ([#2472](https://github.com/Opentrons/opentrons/issues/2472)) ([bae6ef6](https://github.com/Opentrons/opentrons/commit/bae6ef6)), closes [#2240](https://github.com/Opentrons/opentrons/issues/2240)
* **api:** Add newly formatted labware defs and update labware schema ([#2457](https://github.com/Opentrons/opentrons/issues/2457)) ([690c0f2](https://github.com/Opentrons/opentrons/commit/690c0f2))
* **api:** Store pipette function params as data ([#2466](https://github.com/Opentrons/opentrons/issues/2466)) ([4e557dd](https://github.com/Opentrons/opentrons/commit/4e557dd))
* **app:** Move deck calibration to robot controls ([#2470](https://github.com/Opentrons/opentrons/issues/2470)) ([b6ef29c](https://github.com/Opentrons/opentrons/commit/b6ef29c)), closes [#2377](https://github.com/Opentrons/opentrons/issues/2377)
* **components:** Add wifi connectivity icons ([#2473](https://github.com/Opentrons/opentrons/issues/2473)) ([6baf532](https://github.com/Opentrons/opentrons/commit/6baf532))
* **protocol-designer:** add tooltips on hover of final result wells ([#2479](https://github.com/Opentrons/opentrons/issues/2479)) ([73d2bf3](https://github.com/Opentrons/opentrons/commit/73d2bf3)), closes [#2409](https://github.com/Opentrons/opentrons/issues/2409)
* **protocol-designer:** create view to browse final liquid state ([#2451](https://github.com/Opentrons/opentrons/issues/2451)) ([5a436c3](https://github.com/Opentrons/opentrons/commit/5a436c3)), closes [#2335](https://github.com/Opentrons/opentrons/issues/2335)
* **protocol-designer:** implement liquids page interactivity ([#2478](https://github.com/Opentrons/opentrons/issues/2478)) ([7e85673](https://github.com/Opentrons/opentrons/commit/7e85673)), closes [#2427](https://github.com/Opentrons/opentrons/issues/2427)
* **protocol-designer:** implement rounding properly ([#2458](https://github.com/Opentrons/opentrons/issues/2458)) ([6ef6bf0](https://github.com/Opentrons/opentrons/commit/6ef6bf0)), closes [#2405](https://github.com/Opentrons/opentrons/issues/2405)





<a name="3.5.0-beta.0"></a>
# [3.5.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.4.0...v3.5.0-beta.0) (2018-10-11)


### Bug Fixes

* **api:** Bind jupyter notebook to 0.0.0.0 ([#2398](https://github.com/Opentrons/opentrons/issues/2398)) ([be24335](https://github.com/Opentrons/opentrons/commit/be24335)), closes [#2394](https://github.com/Opentrons/opentrons/issues/2394)
* **api:** Change api update ignore route to be accessible to client ([#2368](https://github.com/Opentrons/opentrons/issues/2368)) ([b581f2a](https://github.com/Opentrons/opentrons/commit/b581f2a)), closes [#2367](https://github.com/Opentrons/opentrons/issues/2367)
* **api:** Remove unnecessary return in hardware controller ([#2450](https://github.com/Opentrons/opentrons/issues/2450)) ([5e28aff](https://github.com/Opentrons/opentrons/commit/5e28aff))
* **app:** Allow portal to re-check for root element ([#2440](https://github.com/Opentrons/opentrons/issues/2440)) ([5930a34](https://github.com/Opentrons/opentrons/commit/5930a34))
* **app:** Use type for labware table, not name ([#2441](https://github.com/Opentrons/opentrons/issues/2441)) ([cf91003](https://github.com/Opentrons/opentrons/commit/cf91003)), closes [#2407](https://github.com/Opentrons/opentrons/issues/2407)
* **discovery-client:** Ensure IPs are actually de-duped ([#2404](https://github.com/Opentrons/opentrons/issues/2404)) ([928dcab](https://github.com/Opentrons/opentrons/commit/928dcab))
* **discovery-client:** Monkeypatch uncatchable throw from mdns-js ([#2433](https://github.com/Opentrons/opentrons/issues/2433)) ([c177f87](https://github.com/Opentrons/opentrons/commit/c177f87))
* **protocol-designer:** fix tiprack diagram only displaying right ([#2340](https://github.com/Opentrons/opentrons/issues/2340)) ([3d4d57b](https://github.com/Opentrons/opentrons/commit/3d4d57b))
* **protocol-designer:** tweak analytics copy for accuracy ([#2366](https://github.com/Opentrons/opentrons/issues/2366)) ([b3f4b45](https://github.com/Opentrons/opentrons/commit/b3f4b45))


### Features

* **api:** Add a displayName field to EAP types in /wifi/eap-options ([#2448](https://github.com/Opentrons/opentrons/issues/2448)) ([1232448](https://github.com/Opentrons/opentrons/commit/1232448)), closes [#2439](https://github.com/Opentrons/opentrons/issues/2439)
* **api:** Add accessor functions in new labware class ([#2418](https://github.com/Opentrons/opentrons/issues/2418)) ([d963cfc](https://github.com/Opentrons/opentrons/commit/d963cfc))
* **api:** Add function for p1000 ul-to-millimeter conversions ([#2425](https://github.com/Opentrons/opentrons/issues/2425)) ([4a26340](https://github.com/Opentrons/opentrons/commit/4a26340))
* **api:** add hardware control move_to(), move_rel() ([#2389](https://github.com/Opentrons/opentrons/issues/2389)) ([c14ca14](https://github.com/Opentrons/opentrons/commit/c14ca14)), closes [#2234](https://github.com/Opentrons/opentrons/issues/2234)
* **api:** Add hardware_control submodule ([#2349](https://github.com/Opentrons/opentrons/issues/2349)) ([ea25b15](https://github.com/Opentrons/opentrons/commit/ea25b15)), closes [#2232](https://github.com/Opentrons/opentrons/issues/2232)
* **api:** add instrument cache to hardware control ([#2402](https://github.com/Opentrons/opentrons/issues/2402)) ([bcc7040](https://github.com/Opentrons/opentrons/commit/bcc7040)), closes [#2236](https://github.com/Opentrons/opentrons/issues/2236)
* **api:** add module firmware update endpoint ([#2173](https://github.com/Opentrons/opentrons/issues/2173)) ([19f9a0d](https://github.com/Opentrons/opentrons/commit/19f9a0d)), closes [#1654](https://github.com/Opentrons/opentrons/issues/1654)
* **api:** Add new protocol API stubs ([#2375](https://github.com/Opentrons/opentrons/issues/2375)) ([82d28c5](https://github.com/Opentrons/opentrons/commit/82d28c5)), closes [#2233](https://github.com/Opentrons/opentrons/issues/2233)
* **api:** Add skeleton of new Labware class ([#2363](https://github.com/Opentrons/opentrons/issues/2363)) ([3488612](https://github.com/Opentrons/opentrons/commit/3488612)), closes [#2261](https://github.com/Opentrons/opentrons/issues/2261)
* **api:** Add top, bottom, and center methods to Well ([#2379](https://github.com/Opentrons/opentrons/issues/2379)) ([9ef7dd1](https://github.com/Opentrons/opentrons/commit/9ef7dd1)), closes [#2369](https://github.com/Opentrons/opentrons/issues/2369)
* **api:** change tempdeck temperature resolution,fix temp in docs ([#2359](https://github.com/Opentrons/opentrons/issues/2359)) ([343e845](https://github.com/Opentrons/opentrons/commit/343e845)), closes [#2358](https://github.com/Opentrons/opentrons/issues/2358)
* **app:** Add release notes to robot update modals ([#2397](https://github.com/Opentrons/opentrons/issues/2397)) ([f5e5fd9](https://github.com/Opentrons/opentrons/commit/f5e5fd9)), closes [#2353](https://github.com/Opentrons/opentrons/issues/2353)
* **app:** Add upgrade and downgrade logic to robot updates ([#2376](https://github.com/Opentrons/opentrons/issues/2376)) ([d44386a](https://github.com/Opentrons/opentrons/commit/d44386a))
* **app:** Display reachable but non-connectable robots ([#2455](https://github.com/Opentrons/opentrons/issues/2455)) ([8785ea8](https://github.com/Opentrons/opentrons/commit/8785ea8)), closes [#2345](https://github.com/Opentrons/opentrons/issues/2345)
* **app:** Display unreachable robots in list ([#2434](https://github.com/Opentrons/opentrons/issues/2434)) ([9b47f2d](https://github.com/Opentrons/opentrons/commit/9b47f2d)), closes [#2344](https://github.com/Opentrons/opentrons/issues/2344)
* **app:** Only display instrument settings for selected robot ([#2406](https://github.com/Opentrons/opentrons/issues/2406)) ([9150e21](https://github.com/Opentrons/opentrons/commit/9150e21)), closes [#2362](https://github.com/Opentrons/opentrons/issues/2362)
* **app:** Prompt user to update app in robot update modal ([#2386](https://github.com/Opentrons/opentrons/issues/2386)) ([c389750](https://github.com/Opentrons/opentrons/commit/c389750)), closes [#2354](https://github.com/Opentrons/opentrons/issues/2354)
* **app:** Remove 'opentrons-' prefix in robot displayNames ([#2459](https://github.com/Opentrons/opentrons/issues/2459)) ([06f158a](https://github.com/Opentrons/opentrons/commit/06f158a)), closes [#2357](https://github.com/Opentrons/opentrons/issues/2357)
* **components:** change default border width to 1px ([#2385](https://github.com/Opentrons/opentrons/issues/2385)) ([1fbb749](https://github.com/Opentrons/opentrons/commit/1fbb749))
* **components:** create new tab-styled vertical nav bar ([#2371](https://github.com/Opentrons/opentrons/issues/2371)) ([0202b53](https://github.com/Opentrons/opentrons/commit/0202b53)), closes [#1923](https://github.com/Opentrons/opentrons/issues/1923)
* **discovery-client:** Add mdns flag and health responses to services ([#2420](https://github.com/Opentrons/opentrons/issues/2420)) ([0c06d32](https://github.com/Opentrons/opentrons/commit/0c06d32))
* **labware-designer:** set up labware-designer skeleton for use in browser console ([#2392](https://github.com/Opentrons/opentrons/issues/2392)) ([85fadd0](https://github.com/Opentrons/opentrons/commit/85fadd0))
* **protocol-designer:** add "app build date" field to PD saved files ([#2350](https://github.com/Opentrons/opentrons/issues/2350)) ([d2bf281](https://github.com/Opentrons/opentrons/commit/d2bf281))
* **protocol-designer:** add liquids tab and sidebar ([#2454](https://github.com/Opentrons/opentrons/issues/2454)) ([0aedda6](https://github.com/Opentrons/opentrons/commit/0aedda6)), closes [#2426](https://github.com/Opentrons/opentrons/issues/2426)
* **protocol-designer:** implement "metadata.created" in JSON file ([#2403](https://github.com/Opentrons/opentrons/issues/2403)) ([a9c3d07](https://github.com/Opentrons/opentrons/commit/a9c3d07)), closes [#2189](https://github.com/Opentrons/opentrons/issues/2189)
* **protocol-designer:** implement selective redux persistence ([#2436](https://github.com/Opentrons/opentrons/issues/2436)) ([6591104](https://github.com/Opentrons/opentrons/commit/6591104))
* **protocol-designer:** modify the "name new labware" overlay for new design ([#2422](https://github.com/Opentrons/opentrons/issues/2422)) ([4934c47](https://github.com/Opentrons/opentrons/commit/4934c47)), closes [#2410](https://github.com/Opentrons/opentrons/issues/2410)
* **protocol-designer:** refactor and performance audit of labware components ([#2442](https://github.com/Opentrons/opentrons/issues/2442)) ([09f4eb3](https://github.com/Opentrons/opentrons/commit/09f4eb3)), closes [#2285](https://github.com/Opentrons/opentrons/issues/2285)
* **protocol-designer:** show hints as modal ([#2447](https://github.com/Opentrons/opentrons/issues/2447)) ([9a3509f](https://github.com/Opentrons/opentrons/commit/9a3509f))
* **shared-data:** Add generator function to create regular labware defs ([#2380](https://github.com/Opentrons/opentrons/issues/2380)) ([bc81574](https://github.com/Opentrons/opentrons/commit/bc81574))


### Performance Improvements

* **app:** Upgrade Electron to v3 and remove Node in renderer ([#2374](https://github.com/Opentrons/opentrons/issues/2374)) ([778b9af](https://github.com/Opentrons/opentrons/commit/778b9af))





<a name="3.4.0"></a>
# [3.4.0](https://github.com/Opentrons/opentrons/compare/v3.4.0-beta.0...v3.4.0) (2018-09-21)


### Bug Fixes

* **api:** Patch resources/scripts to always be executable ([#2314](https://github.com/Opentrons/opentrons/issues/2314)) ([7db14bc](https://github.com/Opentrons/opentrons/commit/7db14bc)), closes [#2313](https://github.com/Opentrons/opentrons/issues/2313)
* **api:** Update definitions for tuberacks ([#2317](https://github.com/Opentrons/opentrons/issues/2317)) ([4ce2595](https://github.com/Opentrons/opentrons/commit/4ce2595)), closes [#2290](https://github.com/Opentrons/opentrons/issues/2290)
* **api:** Update the aluminum block definitions to match drawings ([#2342](https://github.com/Opentrons/opentrons/issues/2342)) ([4c1e4c2](https://github.com/Opentrons/opentrons/commit/4c1e4c2)), closes [#2292](https://github.com/Opentrons/opentrons/issues/2292)
* **api:** When reseting the robot singleton, clear added tips ([#2323](https://github.com/Opentrons/opentrons/issues/2323)) ([710e2d6](https://github.com/Opentrons/opentrons/commit/710e2d6))
* **app:** Fix robot list scroll clipping ([#2288](https://github.com/Opentrons/opentrons/issues/2288)) ([28556ef](https://github.com/Opentrons/opentrons/commit/28556ef)), closes [#2046](https://github.com/Opentrons/opentrons/issues/2046)
* **app:** Open external links in browser instead of app window ([#2327](https://github.com/Opentrons/opentrons/issues/2327)) ([5bf5d5f](https://github.com/Opentrons/opentrons/commit/5bf5d5f))
* **app:** Prevent keypresses from changing jog jump size ([#2315](https://github.com/Opentrons/opentrons/issues/2315)) ([1b32d6d](https://github.com/Opentrons/opentrons/commit/1b32d6d))
* **app:** Wrap runscreen modals in portal ([#2308](https://github.com/Opentrons/opentrons/issues/2308)) ([aefad0a](https://github.com/Opentrons/opentrons/commit/aefad0a))
* **protocol-designer:** close tooltips and step creation button ([#2326](https://github.com/Opentrons/opentrons/issues/2326)) ([f99445b](https://github.com/Opentrons/opentrons/commit/f99445b))
* **protocol-designer:** correct alignment of form fields ([#2281](https://github.com/Opentrons/opentrons/issues/2281)) ([419c55a](https://github.com/Opentrons/opentrons/commit/419c55a)), closes [#2196](https://github.com/Opentrons/opentrons/issues/2196)
* **protocol-designer:** fix bug with well access for rect wells ([#2296](https://github.com/Opentrons/opentrons/issues/2296)) ([309a8bf](https://github.com/Opentrons/opentrons/commit/309a8bf)), closes [#2081](https://github.com/Opentrons/opentrons/issues/2081)
* **protocol-designer:** fix recurring deleted labware bug ([#2299](https://github.com/Opentrons/opentrons/issues/2299)) ([ebb44e1](https://github.com/Opentrons/opentrons/commit/ebb44e1))
* **protocol-designer:** fix whitescreen on deleting blowout labware ([#2341](https://github.com/Opentrons/opentrons/issues/2341)) ([44196c6](https://github.com/Opentrons/opentrons/commit/44196c6))


### Features

* **api:** Add ability to connect to WPA2-Enterprise networks ([#2283](https://github.com/Opentrons/opentrons/issues/2283)) ([972b501](https://github.com/Opentrons/opentrons/commit/972b501)), closes [#2252](https://github.com/Opentrons/opentrons/issues/2252) [#2251](https://github.com/Opentrons/opentrons/issues/2251) [#2284](https://github.com/Opentrons/opentrons/issues/2284)
* **api:** Flash the smoothie on api boot if versions don't match ([#2325](https://github.com/Opentrons/opentrons/issues/2325)) ([b015f58](https://github.com/Opentrons/opentrons/commit/b015f58))
* **api:** Remove deck calibration from reset options ([#2330](https://github.com/Opentrons/opentrons/issues/2330)) ([f7d0c48](https://github.com/Opentrons/opentrons/commit/f7d0c48))
* **api:** support optional pause message ([#2306](https://github.com/Opentrons/opentrons/issues/2306)) ([e8056ae](https://github.com/Opentrons/opentrons/commit/e8056ae)), closes [#1694](https://github.com/Opentrons/opentrons/issues/1694)
* **app:** Add release notes to app update modal ([#2316](https://github.com/Opentrons/opentrons/issues/2316)) ([745a1f8](https://github.com/Opentrons/opentrons/commit/745a1f8))
* **app:** Enable autoupdate on Linux by switching to AppImage builds ([#2329](https://github.com/Opentrons/opentrons/issues/2329)) ([caade74](https://github.com/Opentrons/opentrons/commit/caade74)), closes [#2303](https://github.com/Opentrons/opentrons/issues/2303)
* **components:** make titlebar stick to top on scroll ([#2321](https://github.com/Opentrons/opentrons/issues/2321)) ([e9b58d8](https://github.com/Opentrons/opentrons/commit/e9b58d8)), closes [#2195](https://github.com/Opentrons/opentrons/issues/2195)
* **protocol-designer:** add dynamic tooltip arrow ([#2319](https://github.com/Opentrons/opentrons/issues/2319)) ([44eb1fb](https://github.com/Opentrons/opentrons/commit/44eb1fb)), closes [#2026](https://github.com/Opentrons/opentrons/issues/2026)
* **protocol-designer:** allow user to specify disposal volume dest ([#2295](https://github.com/Opentrons/opentrons/issues/2295)) ([92ba845](https://github.com/Opentrons/opentrons/commit/92ba845)), closes [#1676](https://github.com/Opentrons/opentrons/issues/1676)
* **protocol-designer:** autoselect default pipette for new forms ([#2320](https://github.com/Opentrons/opentrons/issues/2320)) ([c5efd3c](https://github.com/Opentrons/opentrons/commit/c5efd3c)), closes [#1296](https://github.com/Opentrons/opentrons/issues/1296)
* **protocol-designer:** modify well selection instructional text ([#2263](https://github.com/Opentrons/opentrons/issues/2263)) ([9ec91a4](https://github.com/Opentrons/opentrons/commit/9ec91a4)), closes [#2204](https://github.com/Opentrons/opentrons/issues/2204)





<a name="3.4.0-beta.0"></a>
# [3.4.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.3.1-beta.0...v3.4.0-beta.0) (2018-09-14)


### Bug Fixes

* **api:** Do not bind the api server to localhost if socket specd ([#2258](https://github.com/Opentrons/opentrons/issues/2258)) ([d534c6f](https://github.com/Opentrons/opentrons/commit/d534c6f)), closes [#2256](https://github.com/Opentrons/opentrons/issues/2256)
* **api:** Fix pipette volume params and revert change in param order ([#2255](https://github.com/Opentrons/opentrons/issues/2255)) ([55d2cd5](https://github.com/Opentrons/opentrons/commit/55d2cd5))
* **api:** throw early error on bad json delay cmd ([#2219](https://github.com/Opentrons/opentrons/issues/2219)) ([3d907d1](https://github.com/Opentrons/opentrons/commit/3d907d1))
* **discovery-client:** Fix health state latching regression ([#2280](https://github.com/Opentrons/opentrons/issues/2280)) ([9176758](https://github.com/Opentrons/opentrons/commit/9176758))
* **protocol-designer:** correctly null out blowout if unchecked in form ([#2226](https://github.com/Opentrons/opentrons/issues/2226)) ([6179b18](https://github.com/Opentrons/opentrons/commit/6179b18))


### Features

* **api:** Add new container defs to shared data ([#2225](https://github.com/Opentrons/opentrons/issues/2225)) ([20e2751](https://github.com/Opentrons/opentrons/commit/20e2751))
* **api:** Add wifi key upload endpoints ([#2254](https://github.com/Opentrons/opentrons/issues/2254)) ([250101c](https://github.com/Opentrons/opentrons/commit/250101c)), closes [#2253](https://github.com/Opentrons/opentrons/issues/2253)
* **api:** Added min and max volume keywords to pipette constructors ([#2084](https://github.com/Opentrons/opentrons/issues/2084)) ([f68da5a](https://github.com/Opentrons/opentrons/commit/f68da5a)), closes [#2075](https://github.com/Opentrons/opentrons/issues/2075)
* **app:** Add protocol file info page ([#2221](https://github.com/Opentrons/opentrons/issues/2221)) ([e861365](https://github.com/Opentrons/opentrons/commit/e861365))
* **app:** Parse JSON protocols into state ([#2231](https://github.com/Opentrons/opentrons/issues/2231)) ([b5f3666](https://github.com/Opentrons/opentrons/commit/b5f3666))
* **app:** Populate FileInfo page with JSON protocol metadata ([#2278](https://github.com/Opentrons/opentrons/issues/2278)) ([995038a](https://github.com/Opentrons/opentrons/commit/995038a)), closes [#2129](https://github.com/Opentrons/opentrons/issues/2129)
* **discovery-client:** Add /server/update/health check to poller ([#2206](https://github.com/Opentrons/opentrons/issues/2206)) ([d08a87d](https://github.com/Opentrons/opentrons/commit/d08a87d))
* **protocol-designer:** add ux analytics with opt in settings and modal ([#2177](https://github.com/Opentrons/opentrons/issues/2177)) ([4a8ebbe](https://github.com/Opentrons/opentrons/commit/4a8ebbe)), closes [#2119](https://github.com/Opentrons/opentrons/issues/2119) [#2172](https://github.com/Opentrons/opentrons/issues/2172)
* **protocol-designer:** allow tenths of µl pipette volumes ([#2222](https://github.com/Opentrons/opentrons/issues/2222)) ([827f3ee](https://github.com/Opentrons/opentrons/commit/827f3ee)), closes [#2120](https://github.com/Opentrons/opentrons/issues/2120)
* **protocol-designer:** auto dismiss no liquid hint ([#2220](https://github.com/Opentrons/opentrons/issues/2220)) ([d2982e1](https://github.com/Opentrons/opentrons/commit/d2982e1))
* **protocol-designer:** replace 200µl tiprack with 300µl tiprack ([#2223](https://github.com/Opentrons/opentrons/issues/2223)) ([8a8fc0f](https://github.com/Opentrons/opentrons/commit/8a8fc0f)), closes [#1955](https://github.com/Opentrons/opentrons/issues/1955)
* **protocol-designer:** warn changes will be lost on import/create ([#2168](https://github.com/Opentrons/opentrons/issues/2168)) ([0a5a071](https://github.com/Opentrons/opentrons/commit/0a5a071))
* **protocol-library-kludge:** set up OT2 deckmap mini-app kludge ([#2210](https://github.com/Opentrons/opentrons/issues/2210)) ([e4cf249](https://github.com/Opentrons/opentrons/commit/e4cf249)), closes [#2145](https://github.com/Opentrons/opentrons/issues/2145)
* **protocol-library-kludge:** support modules and nicknames ([#2224](https://github.com/Opentrons/opentrons/issues/2224)) ([15a3790](https://github.com/Opentrons/opentrons/commit/15a3790))





<a name="3.3.1-beta.0"></a>
## [3.3.1-beta.0](https://github.com/Opentrons/opentrons/compare/v3.3.0...v3.3.1-beta.0) (2018-09-10)


### Bug Fixes

* **api:** delete pipette-config.json ([#2166](https://github.com/Opentrons/opentrons/issues/2166)) ([034edc7](https://github.com/Opentrons/opentrons/commit/034edc7))
* **api:** Delete the labware database journal on reset ([#2098](https://github.com/Opentrons/opentrons/issues/2098)) ([0579fb5](https://github.com/Opentrons/opentrons/commit/0579fb5))
* **api:** Fix container definitions of biorad PCR and 10ul tiprack ([#2191](https://github.com/Opentrons/opentrons/issues/2191)) ([b261dfa](https://github.com/Opentrons/opentrons/commit/b261dfa))
* **api:** opentrons.nmcli security types should be nmcli key-mgmt ([#2190](https://github.com/Opentrons/opentrons/issues/2190)) ([4873dc4](https://github.com/Opentrons/opentrons/commit/4873dc4)), closes [#2178](https://github.com/Opentrons/opentrons/issues/2178)
* **app:** Grab intercom handler from window on every call ([#2179](https://github.com/Opentrons/opentrons/issues/2179)) ([a90aaae](https://github.com/Opentrons/opentrons/commit/a90aaae))
* **protocol-designer:** change copy for excessive aspirate warning ([#2214](https://github.com/Opentrons/opentrons/issues/2214)) ([de1b714](https://github.com/Opentrons/opentrons/commit/de1b714)), closes [#2213](https://github.com/Opentrons/opentrons/issues/2213)
* **shared-data:** fix tube-rack-15_50ml labware def ([#2063](https://github.com/Opentrons/opentrons/issues/2063)) ([b32df5e](https://github.com/Opentrons/opentrons/commit/b32df5e))


### Features

* **api:** Add container definitions for opentrons alumnium block set ([#2205](https://github.com/Opentrons/opentrons/issues/2205)) ([107d6b0](https://github.com/Opentrons/opentrons/commit/107d6b0))
* **api:** Add definitions for the modular tuberack ([#2167](https://github.com/Opentrons/opentrons/issues/2167)) ([be902f6](https://github.com/Opentrons/opentrons/commit/be902f6))
* **api:** add engage custom height and offset params ([#2171](https://github.com/Opentrons/opentrons/issues/2171)) ([4b1f8bd](https://github.com/Opentrons/opentrons/commit/4b1f8bd)), closes [#2155](https://github.com/Opentrons/opentrons/issues/2155)
* **api:** Add hidden ssid wifi support ([#2193](https://github.com/Opentrons/opentrons/issues/2193)) ([ffc702f](https://github.com/Opentrons/opentrons/commit/ffc702f))
* **api:** Add net config info to /wifi/status ([#2188](https://github.com/Opentrons/opentrons/issues/2188)) ([cb51b86](https://github.com/Opentrons/opentrons/commit/cb51b86))
* **api:** support flow rate (uL/sec) in JSON protocols ([#2123](https://github.com/Opentrons/opentrons/issues/2123)) ([b0f944e](https://github.com/Opentrons/opentrons/commit/b0f944e))
* **app:** Add attached pipette info to intercom support ([#2140](https://github.com/Opentrons/opentrons/issues/2140)) ([b06e845](https://github.com/Opentrons/opentrons/commit/b06e845)), closes [#2019](https://github.com/Opentrons/opentrons/issues/2019)
* **protocol-designer:** add tooltips for advanced settings ([#2170](https://github.com/Opentrons/opentrons/issues/2170)) ([af09a4b](https://github.com/Opentrons/opentrons/commit/af09a4b)), closes [#1981](https://github.com/Opentrons/opentrons/issues/1981)
* **protocol-designer:** add tooltips for step creation button ([#2163](https://github.com/Opentrons/opentrons/issues/2163)) ([e34e636](https://github.com/Opentrons/opentrons/commit/e34e636)), closes [#1979](https://github.com/Opentrons/opentrons/issues/1979)
* **protocol-designer:** default form fields from old protocols ([#2162](https://github.com/Opentrons/opentrons/issues/2162)) ([54585e6](https://github.com/Opentrons/opentrons/commit/54585e6))
* **protocol-designer:** flow rate field more dependent on pipette ([#2154](https://github.com/Opentrons/opentrons/issues/2154)) ([ac778ea](https://github.com/Opentrons/opentrons/commit/ac778ea))
* **protocol-designer:** implement ui for flow rate ([#2149](https://github.com/Opentrons/opentrons/issues/2149)) ([e0e25c1](https://github.com/Opentrons/opentrons/commit/e0e25c1))
* **protocol-designer:** restyle selected TitledList carat hover ([#2165](https://github.com/Opentrons/opentrons/issues/2165)) ([48c488a](https://github.com/Opentrons/opentrons/commit/48c488a)), closes [#1977](https://github.com/Opentrons/opentrons/issues/1977)
* **protocol-designer:** support mm from bottom offset in JSON protocols ([#2180](https://github.com/Opentrons/opentrons/issues/2180)) ([db22ae8](https://github.com/Opentrons/opentrons/commit/db22ae8)), closes [#2157](https://github.com/Opentrons/opentrons/issues/2157)





<a name="3.3.0"></a>
# [3.3.0](https://github.com/Opentrons/opentrons/compare/v3.3.0-beta.1...v3.3.0) (2018-08-22)


### Bug Fixes

* **api:** change udev rule to include multiple modules ([#1995](https://github.com/Opentrons/opentrons/issues/1995)) ([91ffc7e](https://github.com/Opentrons/opentrons/commit/91ffc7e))
* **api:** Fix /server/restart failing in api-server-lib ([#2104](https://github.com/Opentrons/opentrons/issues/2104)) ([5220b4f](https://github.com/Opentrons/opentrons/commit/5220b4f))
* **app:** Fix copy typos in update error modal ([#2027](https://github.com/Opentrons/opentrons/issues/2027)) ([37795ce](https://github.com/Opentrons/opentrons/commit/37795ce))
* **protocol-designer:** fix serialized name in ingred list ([#2002](https://github.com/Opentrons/opentrons/issues/2002)) ([d19d29b](https://github.com/Opentrons/opentrons/commit/d19d29b)), closes [#1294](https://github.com/Opentrons/opentrons/issues/1294)
* **protocol-designer:** tweak timeline alert copy ([#2086](https://github.com/Opentrons/opentrons/issues/2086)) ([5108f21](https://github.com/Opentrons/opentrons/commit/5108f21))
* **update-server:** Fix issues with 3.2 api on 3.3 system ([#2097](https://github.com/Opentrons/opentrons/issues/2097)) ([bad6e3a](https://github.com/Opentrons/opentrons/commit/bad6e3a))
* **update-server:** Set the cwd to the venv when running an otupdate selftest ([#2070](https://github.com/Opentrons/opentrons/issues/2070)) ([bd9502a](https://github.com/Opentrons/opentrons/commit/bd9502a))


### Features

* **api:** Add /settings/reset endpoints ([#2082](https://github.com/Opentrons/opentrons/issues/2082)) ([f42ae1b](https://github.com/Opentrons/opentrons/commit/f42ae1b)), closes [#1885](https://github.com/Opentrons/opentrons/issues/1885)
* **api:** Consolidate pipette configuration ([#2055](https://github.com/Opentrons/opentrons/issues/2055)) ([ee39ea3](https://github.com/Opentrons/opentrons/commit/ee39ea3))
* **api:** Handle read-only thumb drive mount on OT2 ([#2037](https://github.com/Opentrons/opentrons/issues/2037)) ([9247392](https://github.com/Opentrons/opentrons/commit/9247392)), closes [#1903](https://github.com/Opentrons/opentrons/issues/1903)
* **api:** publish module commands and make module data endpoint ([#2053](https://github.com/Opentrons/opentrons/issues/2053)) ([c25c081](https://github.com/Opentrons/opentrons/commit/c25c081)), closes [#1653](https://github.com/Opentrons/opentrons/issues/1653)
* **api:** Use the resin supervisor restart endpoint to restart ([#2093](https://github.com/Opentrons/opentrons/issues/2093)) ([d47da3c](https://github.com/Opentrons/opentrons/commit/d47da3c)), closes [/docs.resin.io/reference/supervisor/supervisor-api/#post-v1](https://github.com//docs.resin.io/reference/supervisor/supervisor-api//issues/post-v1) [#2092](https://github.com/Opentrons/opentrons/issues/2092)
* **app:** Add persistent unique user ID to intercom data ([#2004](https://github.com/Opentrons/opentrons/issues/2004)) ([0a47d64](https://github.com/Opentrons/opentrons/commit/0a47d64)), closes [#1999](https://github.com/Opentrons/opentrons/issues/1999)
* **app:** Add robot name to intercom on connect ([#2069](https://github.com/Opentrons/opentrons/issues/2069)) ([f5be08d](https://github.com/Opentrons/opentrons/commit/f5be08d))
* **app:** Add update channel selector to advanced settings ([#2010](https://github.com/Opentrons/opentrons/issues/2010)) ([f7fb865](https://github.com/Opentrons/opentrons/commit/f7fb865))
* **app:** Add upload protocol warning modal ([#1988](https://github.com/Opentrons/opentrons/issues/1988)) ([8e010cf](https://github.com/Opentrons/opentrons/commit/8e010cf)), closes [#1032](https://github.com/Opentrons/opentrons/issues/1032)
* **app:** Enable download robot logs in advanced settings ([#2014](https://github.com/Opentrons/opentrons/issues/2014)) ([6e51ba0](https://github.com/Opentrons/opentrons/commit/6e51ba0)), closes [#1727](https://github.com/Opentrons/opentrons/issues/1727)
* **app:** Enable support for IPv4 wired robots by default ([#2090](https://github.com/Opentrons/opentrons/issues/2090)) ([d3a3afa](https://github.com/Opentrons/opentrons/commit/d3a3afa)), closes [#990](https://github.com/Opentrons/opentrons/issues/990) [#1964](https://github.com/Opentrons/opentrons/issues/1964)
* **app:** Persist known robots to file-system when using new discovery ([#2065](https://github.com/Opentrons/opentrons/issues/2065)) ([55b4000](https://github.com/Opentrons/opentrons/commit/55b4000))
* **app,api:** Add opt-in ping/pong monitoring to RPC websocket ([#2083](https://github.com/Opentrons/opentrons/issues/2083)) ([a9b3f0e](https://github.com/Opentrons/opentrons/commit/a9b3f0e)), closes [#2052](https://github.com/Opentrons/opentrons/issues/2052)
* **components:** refactor Plate to Labware ([#2060](https://github.com/Opentrons/opentrons/issues/2060)) ([ca8297a](https://github.com/Opentrons/opentrons/commit/ca8297a))
* **compute:** Add openjdk8 to container ([#2025](https://github.com/Opentrons/opentrons/issues/2025)) ([8463b5c](https://github.com/Opentrons/opentrons/commit/8463b5c))
* **compute,api,update:** Add sys ver to health, allow resin pull ([#2089](https://github.com/Opentrons/opentrons/issues/2089)) ([7fdce05](https://github.com/Opentrons/opentrons/commit/7fdce05)), closes [#2091](https://github.com/Opentrons/opentrons/issues/2091)
* **compute,api,update-server:** Move system configs out of Dockerfile ([#2073](https://github.com/Opentrons/opentrons/issues/2073)) ([354c740](https://github.com/Opentrons/opentrons/commit/354c740)), closes [#1114](https://github.com/Opentrons/opentrons/issues/1114)
* **discovery-client:** Add CLI commands to find and SSH into a robot ([#2072](https://github.com/Opentrons/opentrons/issues/2072)) ([5ae3ef1](https://github.com/Opentrons/opentrons/commit/5ae3ef1))
* **discovery-client:** Add standalone discovery-client to repo ([#1996](https://github.com/Opentrons/opentrons/issues/1996)) ([a2becbe](https://github.com/Opentrons/opentrons/commit/a2becbe)), closes [#1944](https://github.com/Opentrons/opentrons/issues/1944)
* **protocol-designer:** add 'drop tip' to 'dispense' section of form ([#1998](https://github.com/Opentrons/opentrons/issues/1998)) ([fa47f85](https://github.com/Opentrons/opentrons/commit/fa47f85)), closes [#1689](https://github.com/Opentrons/opentrons/issues/1689)
* **protocol-designer:** change tip field and timeline alert copy to i18n ([#2062](https://github.com/Opentrons/opentrons/issues/2062)) ([6fd4807](https://github.com/Opentrons/opentrons/commit/6fd4807)), closes [#1934](https://github.com/Opentrons/opentrons/issues/1934)
* **protocol-designer:** display tip use across step timeline ([#2074](https://github.com/Opentrons/opentrons/issues/2074)) ([51da5ae](https://github.com/Opentrons/opentrons/commit/51da5ae)), closes [#1094](https://github.com/Opentrons/opentrons/issues/1094)
* **protocol-designer:** rename change tip options ([#2003](https://github.com/Opentrons/opentrons/issues/2003)) ([e80fd25](https://github.com/Opentrons/opentrons/commit/e80fd25)), closes [#1933](https://github.com/Opentrons/opentrons/issues/1933)





<a name="3.3.0-beta.1"></a>
# [3.3.0-beta.1](https://github.com/OpenTrons/opentrons/compare/v3.3.0-beta.0...v3.3.0-beta.1) (2018-08-02)


### Bug Fixes

* **api:** check virtual smoothie before copying udev file on server start ([#1960](https://github.com/OpenTrons/opentrons/issues/1960)) ([9a31f3d](https://github.com/OpenTrons/opentrons/commit/9a31f3d))
* **api:** Fix pipette.delay() so it does not sleep during protocol simulation ([#1902](https://github.com/OpenTrons/opentrons/issues/1902)) ([f63bdba](https://github.com/OpenTrons/opentrons/commit/f63bdba))
* **api:** Fix the database migration script geometry logic ([#1959](https://github.com/OpenTrons/opentrons/issues/1959)) ([7ae9756](https://github.com/OpenTrons/opentrons/commit/7ae9756))
* **api:** Home Z axes before run to guarantee that pipettes will be retracted ([#1914](https://github.com/OpenTrons/opentrons/issues/1914)) ([7252a73](https://github.com/OpenTrons/opentrons/commit/7252a73))
* **api:** support touch-tip for JSON protocols ([#2000](https://github.com/OpenTrons/opentrons/issues/2000)) ([43125b7](https://github.com/OpenTrons/opentrons/commit/43125b7)), closes [#1997](https://github.com/OpenTrons/opentrons/issues/1997)
* **app:** Check if modulesRequired when displaying review modals ([#1940](https://github.com/OpenTrons/opentrons/issues/1940)) ([14a54a5](https://github.com/OpenTrons/opentrons/commit/14a54a5))
* **docker:** Switch out dumb-init, add modules tools & udev config ([#1952](https://github.com/OpenTrons/opentrons/issues/1952)) ([caac645](https://github.com/OpenTrons/opentrons/commit/caac645)), closes [#1822](https://github.com/OpenTrons/opentrons/issues/1822)
* **protocol-designer:** fix bug where tips not dropped at end of protocol ([#1911](https://github.com/OpenTrons/opentrons/issues/1911)) ([945ff6a](https://github.com/OpenTrons/opentrons/commit/945ff6a)), closes [#969](https://github.com/OpenTrons/opentrons/issues/969)
* **protocol-designer:** fix destination well pills in substeps ([#1896](https://github.com/OpenTrons/opentrons/issues/1896)) ([60481b5](https://github.com/OpenTrons/opentrons/commit/60481b5)), closes [#1812](https://github.com/OpenTrons/opentrons/issues/1812)
* **protocol-designer:** fix file load bug w mismatched pipette ids ([#1918](https://github.com/OpenTrons/opentrons/issues/1918)) ([9ec52d1](https://github.com/OpenTrons/opentrons/commit/9ec52d1))
* **protocol-designer:** fix styling of pause and mix step items ([#1948](https://github.com/OpenTrons/opentrons/issues/1948)) ([16c2a30](https://github.com/OpenTrons/opentrons/commit/16c2a30)), closes [#1947](https://github.com/OpenTrons/opentrons/issues/1947)
* **protocol-designer:** fix substeps for consolidate using inner mix ([#1921](https://github.com/OpenTrons/opentrons/issues/1921)) ([e59cc7e](https://github.com/OpenTrons/opentrons/commit/e59cc7e)), closes [#1919](https://github.com/OpenTrons/opentrons/issues/1919)
* **protocol-designer:** make well selection modal show pipette display name ([#1907](https://github.com/OpenTrons/opentrons/issues/1907)) ([07ad9ff](https://github.com/OpenTrons/opentrons/commit/07ad9ff)), closes [#1888](https://github.com/OpenTrons/opentrons/issues/1888)
* **protocol-designer:** Only show deck setup prompt text when selected ([#1894](https://github.com/OpenTrons/opentrons/issues/1894)) ([32656ef](https://github.com/OpenTrons/opentrons/commit/32656ef))


### Features

* **api:** Add "modules" field to RPC ([#1890](https://github.com/OpenTrons/opentrons/issues/1890)) ([f80ad18](https://github.com/OpenTrons/opentrons/commit/f80ad18)), closes [#1733](https://github.com/OpenTrons/opentrons/issues/1733)
* **api:** Add clear method to RPC SessionManager ([#1969](https://github.com/OpenTrons/opentrons/issues/1969)) ([8228e6d](https://github.com/OpenTrons/opentrons/commit/8228e6d))
* **api:** Add endpoints to get robot logs ([#1928](https://github.com/OpenTrons/opentrons/issues/1928)) ([9224719](https://github.com/OpenTrons/opentrons/commit/9224719))
* **api:** add magdeck api object ([#1925](https://github.com/OpenTrons/opentrons/issues/1925)) ([b016eec](https://github.com/OpenTrons/opentrons/commit/b016eec)), closes [#1889](https://github.com/OpenTrons/opentrons/issues/1889) [#1887](https://github.com/OpenTrons/opentrons/issues/1887) [#1886](https://github.com/OpenTrons/opentrons/issues/1886) [#1645](https://github.com/OpenTrons/opentrons/issues/1645)
* **api:** Add tempdeck api object ([#1962](https://github.com/OpenTrons/opentrons/issues/1962)) ([cb7f107](https://github.com/OpenTrons/opentrons/commit/cb7f107)), closes [#1965](https://github.com/OpenTrons/opentrons/issues/1965) [#1648](https://github.com/OpenTrons/opentrons/issues/1648) [#1649](https://github.com/OpenTrons/opentrons/issues/1649)
* **api:** Brings back the shake after drop-tip ([#1871](https://github.com/OpenTrons/opentrons/issues/1871)) ([304c71d](https://github.com/OpenTrons/opentrons/commit/304c71d))
* **app:** Add and implement module selectors in calibration ([#1895](https://github.com/OpenTrons/opentrons/issues/1895)) ([2cf1b4d](https://github.com/OpenTrons/opentrons/commit/2cf1b4d))
* **app:** Add continuous polling to modules during run ([#1961](https://github.com/OpenTrons/opentrons/issues/1961)) ([5f7d6f4](https://github.com/OpenTrons/opentrons/commit/5f7d6f4))
* **app:** Add deck map to module review modal ([#1910](https://github.com/OpenTrons/opentrons/issues/1910)) ([f2e63e3](https://github.com/OpenTrons/opentrons/commit/f2e63e3)), closes [#1737](https://github.com/OpenTrons/opentrons/issues/1737)
* **app:** Add realtime status TempDeck card to run panel ([#1932](https://github.com/OpenTrons/opentrons/issues/1932)) ([75c8df4](https://github.com/OpenTrons/opentrons/commit/75c8df4)), closes [#1740](https://github.com/OpenTrons/opentrons/issues/1740)
* **app:** Add support for modules to RPC API client ([#1891](https://github.com/OpenTrons/opentrons/issues/1891)) ([331305f](https://github.com/OpenTrons/opentrons/commit/331305f))
* **app:** Render calibrate to bottom instructions when enabled ([#1865](https://github.com/OpenTrons/opentrons/issues/1865)) ([c427599](https://github.com/OpenTrons/opentrons/commit/c427599))
* **app:** Show connect modules modal when session modules detected ([#1897](https://github.com/OpenTrons/opentrons/issues/1897)) ([8306130](https://github.com/OpenTrons/opentrons/commit/8306130)), closes [#1738](https://github.com/OpenTrons/opentrons/issues/1738)
* **app:** Show module name over labware on deckmaps ([#1913](https://github.com/OpenTrons/opentrons/issues/1913)) ([c40905b](https://github.com/OpenTrons/opentrons/commit/c40905b)), closes [#1739](https://github.com/OpenTrons/opentrons/issues/1739)
* **app:** Show modules on review and calibration deckmaps ([#1898](https://github.com/OpenTrons/opentrons/issues/1898)) ([5917a2b](https://github.com/OpenTrons/opentrons/commit/5917a2b))
* **app:** Wire modules card to API calls (and keep stubbed response) ([#1860](https://github.com/OpenTrons/opentrons/issues/1860)) ([a30912f](https://github.com/OpenTrons/opentrons/commit/a30912f))
* **comp:** Add IntervalWrapper to interaction enhancers ([#1942](https://github.com/OpenTrons/opentrons/issues/1942)) ([21e1869](https://github.com/OpenTrons/opentrons/commit/21e1869))
* **components:** implement hover tooltip and include react popper ([#1855](https://github.com/OpenTrons/opentrons/issues/1855)) ([c44e0eb](https://github.com/OpenTrons/opentrons/commit/c44e0eb)), closes [#921](https://github.com/OpenTrons/opentrons/issues/921)
* **components:** restyle field caption ([#1991](https://github.com/OpenTrons/opentrons/issues/1991)) ([910b510](https://github.com/OpenTrons/opentrons/commit/910b510)), closes [#1936](https://github.com/OpenTrons/opentrons/issues/1936)
* **compute:** Use IPv4 link-local ethernet networking ([#1970](https://github.com/OpenTrons/opentrons/issues/1970)) ([094ca28](https://github.com/OpenTrons/opentrons/commit/094ca28))
* **protocol-designer:** add continue to design button to file data page ([#1876](https://github.com/OpenTrons/opentrons/issues/1876)) ([cd8ea5e](https://github.com/OpenTrons/opentrons/commit/cd8ea5e)), closes [#1782](https://github.com/OpenTrons/opentrons/issues/1782)
* **protocol-designer:** add help link to PD nav ([#1945](https://github.com/OpenTrons/opentrons/issues/1945)) ([1525cf5](https://github.com/OpenTrons/opentrons/commit/1525cf5)), closes [#1941](https://github.com/OpenTrons/opentrons/issues/1941)
* **protocol-designer:** add max volume to ingred selection modal volume field ([#1993](https://github.com/OpenTrons/opentrons/issues/1993)) ([807c289](https://github.com/OpenTrons/opentrons/commit/807c289)), closes [#1835](https://github.com/OpenTrons/opentrons/issues/1835)
* **protocol-designer:** alert user of unsaved changes to protocol ([#1856](https://github.com/OpenTrons/opentrons/issues/1856)) ([e195363](https://github.com/OpenTrons/opentrons/commit/e195363)), closes [#1602](https://github.com/OpenTrons/opentrons/issues/1602)
* **protocol-designer:** auto fill well volume field if inferrable ([#1870](https://github.com/OpenTrons/opentrons/issues/1870)) ([ab5a40e](https://github.com/OpenTrons/opentrons/commit/ab5a40e)), closes [#1668](https://github.com/OpenTrons/opentrons/issues/1668)
* **protocol-designer:** change copy for pipette missing tip error ([#1915](https://github.com/OpenTrons/opentrons/issues/1915)) ([cd8b920](https://github.com/OpenTrons/opentrons/commit/cd8b920)), closes [#1815](https://github.com/OpenTrons/opentrons/issues/1815) [#1880](https://github.com/OpenTrons/opentrons/issues/1880) [#1815](https://github.com/OpenTrons/opentrons/issues/1815)
* **protocol-designer:** change copy ingredients -> liquid ([#1905](https://github.com/OpenTrons/opentrons/issues/1905)) ([9f9b989](https://github.com/OpenTrons/opentrons/commit/9f9b989)), closes [#1864](https://github.com/OpenTrons/opentrons/issues/1864)
* **protocol-designer:** deactivate non-beta step settings, add tooltip ([#1875](https://github.com/OpenTrons/opentrons/issues/1875)) ([267b5b3](https://github.com/OpenTrons/opentrons/commit/267b5b3)), closes [#1873](https://github.com/OpenTrons/opentrons/issues/1873)
* **protocol-designer:** enable user to swap pipette mounts ([#1883](https://github.com/OpenTrons/opentrons/issues/1883)) ([d5e40cd](https://github.com/OpenTrons/opentrons/commit/d5e40cd)), closes [#1536](https://github.com/OpenTrons/opentrons/issues/1536)
* **protocol-designer:** implement move labware in place of copy ([#1938](https://github.com/OpenTrons/opentrons/issues/1938)) ([c51ce66](https://github.com/OpenTrons/opentrons/commit/c51ce66)), closes [#1908](https://github.com/OpenTrons/opentrons/issues/1908)
* **protocol-designer:** make form warnings & errors match TimelineAlerts ([#1924](https://github.com/OpenTrons/opentrons/issues/1924)) ([c355be8](https://github.com/OpenTrons/opentrons/commit/c355be8)), closes [#1882](https://github.com/OpenTrons/opentrons/issues/1882)
* **protocol-designer:** make pipettes eagerly drop tips ([#1946](https://github.com/OpenTrons/opentrons/issues/1946)) ([9fb0725](https://github.com/OpenTrons/opentrons/commit/9fb0725)), closes [#1706](https://github.com/OpenTrons/opentrons/issues/1706)
* **protocol-designer:** make WellSelectionInput label change for multi-channel pipette ([#1927](https://github.com/OpenTrons/opentrons/issues/1927)) ([7df3c29](https://github.com/OpenTrons/opentrons/commit/7df3c29)), closes [#1537](https://github.com/OpenTrons/opentrons/issues/1537)
* **protocol-designer:** re-order and restyle file sidebar buttons ([#1926](https://github.com/OpenTrons/opentrons/issues/1926)) ([4ae1f5b](https://github.com/OpenTrons/opentrons/commit/4ae1f5b)), closes [#1784](https://github.com/OpenTrons/opentrons/issues/1784)
* **protocol-designer:** refactor and restyle LabwareSelectionModal ([#1929](https://github.com/OpenTrons/opentrons/issues/1929)) ([7c9891e](https://github.com/OpenTrons/opentrons/commit/7c9891e))
* **protocol-designer:** refactor and restyle timeline terminal items ([#1967](https://github.com/OpenTrons/opentrons/issues/1967)) ([a2421fd](https://github.com/OpenTrons/opentrons/commit/a2421fd)), closes [#1706](https://github.com/OpenTrons/opentrons/issues/1706) [#1930](https://github.com/OpenTrons/opentrons/issues/1930) [#1974](https://github.com/OpenTrons/opentrons/issues/1974)
* **protocol-designer:** remove disposal volume field from all but distribute ([#1868](https://github.com/OpenTrons/opentrons/issues/1868)) ([7d98355](https://github.com/OpenTrons/opentrons/commit/7d98355)), closes [#1867](https://github.com/OpenTrons/opentrons/issues/1867)
* **protocol-designer:** restyle labware hover buttons ([#1916](https://github.com/OpenTrons/opentrons/issues/1916)) ([799d1b1](https://github.com/OpenTrons/opentrons/commit/799d1b1)), closes [#1519](https://github.com/OpenTrons/opentrons/issues/1519)
* **protocol-designer:** save version in PD file with git-describe ([#1987](https://github.com/OpenTrons/opentrons/issues/1987)) ([7040727](https://github.com/OpenTrons/opentrons/commit/7040727))
* **protocol-designer:** show no pipette on mount in file details ([#1917](https://github.com/OpenTrons/opentrons/issues/1917)) ([74e077c](https://github.com/OpenTrons/opentrons/commit/74e077c)), closes [#1909](https://github.com/OpenTrons/opentrons/issues/1909) [#1783](https://github.com/OpenTrons/opentrons/issues/1783)
* **protocol-designer:** support tiprack-to-pipette assignment ([#1866](https://github.com/OpenTrons/opentrons/issues/1866)) ([6a4f19d](https://github.com/OpenTrons/opentrons/commit/6a4f19d)), closes [#1573](https://github.com/OpenTrons/opentrons/issues/1573)
* **protocol-designer:** swap pen icons to pencil ([#1906](https://github.com/OpenTrons/opentrons/issues/1906)) ([70a9fc0](https://github.com/OpenTrons/opentrons/commit/70a9fc0)), closes [#1861](https://github.com/OpenTrons/opentrons/issues/1861)
* **protocol-designer:** switch well order colors ([#1878](https://github.com/OpenTrons/opentrons/issues/1878)) ([a86aa3e](https://github.com/OpenTrons/opentrons/commit/a86aa3e)), closes [#1862](https://github.com/OpenTrons/opentrons/issues/1862)
* **protocol-designer:** update copy for 'no tip on pipette' error ([#1994](https://github.com/OpenTrons/opentrons/issues/1994)) ([3a64530](https://github.com/OpenTrons/opentrons/commit/3a64530)), closes [#1975](https://github.com/OpenTrons/opentrons/issues/1975)
* **protocol-designer:** update well selection modal's TitleBar ([#1884](https://github.com/OpenTrons/opentrons/issues/1884)) ([8ce9a4c](https://github.com/OpenTrons/opentrons/commit/8ce9a4c)), closes [#1502](https://github.com/OpenTrons/opentrons/issues/1502)


### Performance Improvements

* **api:** Set axis-testing speed to 8mm/sec to avoid resonance ([#1912](https://github.com/OpenTrons/opentrons/issues/1912)) ([d7bb03b](https://github.com/OpenTrons/opentrons/commit/d7bb03b))





<a name="3.3.0-beta.0"></a>
# [3.3.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.3...v3.3.0-beta.0) (2018-07-12)


### Bug Fixes

* **api:** Allows floating-point temperatures to be set/read to/from temp-deck ([#1798](https://github.com/Opentrons/opentrons/issues/1798)) ([856134a](https://github.com/Opentrons/opentrons/commit/856134a))
* **api:** Fix QC script which uses 85% current to use default speeds for Y axis ([#1802](https://github.com/Opentrons/opentrons/issues/1802)) ([aa8a319](https://github.com/Opentrons/opentrons/commit/aa8a319))
* **api:** Remove incorrect call to `cache_instrument_models` ([#1810](https://github.com/Opentrons/opentrons/issues/1810)) ([2f80ece](https://github.com/Opentrons/opentrons/commit/2f80ece))
* **app:** Call GET /pipettes before starting calibration ([#1830](https://github.com/Opentrons/opentrons/issues/1830)) ([011a3a8](https://github.com/Opentrons/opentrons/commit/011a3a8))
* **app:** Disable calibration page unless protocol is fresh ([#1821](https://github.com/Opentrons/opentrons/issues/1821)) ([c9168c8](https://github.com/Opentrons/opentrons/commit/c9168c8)), closes [#1817](https://github.com/Opentrons/opentrons/issues/1817)
* **app:** Make WiFi card more lenient and understandable ([#1771](https://github.com/Opentrons/opentrons/issues/1771)) ([6f2f37d](https://github.com/Opentrons/opentrons/commit/6f2f37d))
* **app:** Remove holdover /calibrate/instruments missed by [#1765](https://github.com/Opentrons/opentrons/issues/1765) ([#1787](https://github.com/Opentrons/opentrons/issues/1787)) ([03dd305](https://github.com/Opentrons/opentrons/commit/03dd305))
* **app:** Remove tip-probed check in calibrator selector ([#1847](https://github.com/Opentrons/opentrons/issues/1847)) ([bb50677](https://github.com/Opentrons/opentrons/commit/bb50677))
* **app:** Show spinner during home on deck calibration exit ([#1760](https://github.com/Opentrons/opentrons/issues/1760)) ([b6999a8](https://github.com/Opentrons/opentrons/commit/b6999a8)), closes [#1613](https://github.com/Opentrons/opentrons/issues/1613)
* **components:** fix Deck component viewBox ([#1807](https://github.com/Opentrons/opentrons/issues/1807)) ([bff921f](https://github.com/Opentrons/opentrons/commit/bff921f))
* **components:** Make preventDefault call in HandleKeypress opt-in ([#1768](https://github.com/Opentrons/opentrons/issues/1768)) ([9e64fb2](https://github.com/Opentrons/opentrons/commit/9e64fb2)), closes [#1764](https://github.com/Opentrons/opentrons/issues/1764)
* **protocol-designer:** allow scroll when NewFileModal too tall ([#1777](https://github.com/Opentrons/opentrons/issues/1777)) ([e6238ab](https://github.com/Opentrons/opentrons/commit/e6238ab)), closes [#1776](https://github.com/Opentrons/opentrons/issues/1776)
* **protocol-designer:** do not navigate on FilePage form submit ([8f98a08](https://github.com/Opentrons/opentrons/commit/8f98a08))
* **protocol-designer:** fix labware copy mirroring ([#1859](https://github.com/Opentrons/opentrons/issues/1859)) ([3742bb7](https://github.com/Opentrons/opentrons/commit/3742bb7)), closes [#1616](https://github.com/Opentrons/opentrons/issues/1616)


### Features

* **api:** Add advanced settings endpoints to api server ([#1786](https://github.com/Opentrons/opentrons/issues/1786)) ([b89b4ea](https://github.com/Opentrons/opentrons/commit/b89b4ea)), closes [#1656](https://github.com/Opentrons/opentrons/issues/1656)
* **api:** Add GET /modules endpoint with stub for module discovery ([#1858](https://github.com/Opentrons/opentrons/issues/1858)) ([8dedb68](https://github.com/Opentrons/opentrons/commit/8dedb68))
* **api:** Add Magdeck driver ([#1840](https://github.com/Opentrons/opentrons/issues/1840)) ([e731c78](https://github.com/Opentrons/opentrons/commit/e731c78)), closes [#1809](https://github.com/Opentrons/opentrons/issues/1809)
* **app:** Add advanced settings card to robot settings page ([#1762](https://github.com/Opentrons/opentrons/issues/1762)) ([b70f9b8](https://github.com/Opentrons/opentrons/commit/b70f9b8)), closes [#1632](https://github.com/Opentrons/opentrons/issues/1632)
* **app:** Add attached modules card UI to instrument settings page ([#1854](https://github.com/Opentrons/opentrons/issues/1854)) ([3a57807](https://github.com/Opentrons/opentrons/commit/3a57807)), closes [#1735](https://github.com/Opentrons/opentrons/issues/1735)
* **app:** Add GET /modules to API client ([#1837](https://github.com/Opentrons/opentrons/issues/1837)) ([da88936](https://github.com/Opentrons/opentrons/commit/da88936))
* **app:** Add keyboard shortcuts to jog controls ([#1761](https://github.com/Opentrons/opentrons/issues/1761)) ([7c51e98](https://github.com/Opentrons/opentrons/commit/7c51e98)), closes [#1476](https://github.com/Opentrons/opentrons/issues/1476)
* **app:** Add modules and pipettes settings page ([#1785](https://github.com/Opentrons/opentrons/issues/1785)) ([7ce12b3](https://github.com/Opentrons/opentrons/commit/7ce12b3))
* **app:** Add robot settings toggles to Advanced Settings card ([#1795](https://github.com/Opentrons/opentrons/issues/1795)) ([73f7528](https://github.com/Opentrons/opentrons/commit/73f7528)), closes [#1632](https://github.com/Opentrons/opentrons/issues/1632)
* **app:** Log tracebacks from failed RPC calls  ([#1846](https://github.com/Opentrons/opentrons/issues/1846)) ([0c07c52](https://github.com/Opentrons/opentrons/commit/0c07c52)), closes [#1841](https://github.com/Opentrons/opentrons/issues/1841)
* **components:** use labware defs from shared-data for Deck component ([26493f4](https://github.com/Opentrons/opentrons/commit/26493f4))
* **protocol-designer:** add diagrams & copy to new file modal ([#1766](https://github.com/Opentrons/opentrons/issues/1766)) ([6ad44b6](https://github.com/Opentrons/opentrons/commit/6ad44b6)), closes [#1695](https://github.com/Opentrons/opentrons/issues/1695)
* **protocol-designer:** add form level validation errors and warnings ([#1823](https://github.com/Opentrons/opentrons/issues/1823)) ([9cdd66f](https://github.com/Opentrons/opentrons/commit/9cdd66f)), closes [#1090](https://github.com/Opentrons/opentrons/issues/1090) [#1595](https://github.com/Opentrons/opentrons/issues/1595) [#1592](https://github.com/Opentrons/opentrons/issues/1592) [#1594](https://github.com/Opentrons/opentrons/issues/1594)
* **protocol-designer:** allow file upload ([11f582b](https://github.com/Opentrons/opentrons/commit/11f582b))
* **protocol-designer:** change copy for deck setup clarity ([#1839](https://github.com/Opentrons/opentrons/issues/1839)) ([a713ed0](https://github.com/Opentrons/opentrons/commit/a713ed0)), closes [#1811](https://github.com/Opentrons/opentrons/issues/1811)
* **protocol-designer:** change edit labware nickname icon to pen ([#1842](https://github.com/Opentrons/opentrons/issues/1842)) ([512f62c](https://github.com/Opentrons/opentrons/commit/512f62c)), closes [#1660](https://github.com/Opentrons/opentrons/issues/1660)
* **protocol-designer:** clear everything when new protocol is created ([#1852](https://github.com/Opentrons/opentrons/issues/1852)) ([eab21a3](https://github.com/Opentrons/opentrons/commit/eab21a3)), closes [#970](https://github.com/Opentrons/opentrons/issues/970)
* **protocol-designer:** implement full protocol file loading ([#1804](https://github.com/Opentrons/opentrons/issues/1804)) ([bf57e9a](https://github.com/Opentrons/opentrons/commit/bf57e9a)), closes [#1604](https://github.com/Opentrons/opentrons/issues/1604)
* **protocol-designer:** make timeline warnings dismissable ([#1791](https://github.com/Opentrons/opentrons/issues/1791)) ([f9b1dee](https://github.com/Opentrons/opentrons/commit/f9b1dee))
* **protocol-designer:** move Delete button from MoreOptionsModal to StepEditForm ([#1770](https://github.com/Opentrons/opentrons/issues/1770)) ([3df8444](https://github.com/Opentrons/opentrons/commit/3df8444)), closes [#1555](https://github.com/Opentrons/opentrons/issues/1555)
* **protocol-designer:** pipette tiprack assignment ([e0555af](https://github.com/Opentrons/opentrons/commit/e0555af)), closes [#1750](https://github.com/Opentrons/opentrons/issues/1750)
* **protocol-designer:** remove numbers from step names ([#1838](https://github.com/Opentrons/opentrons/issues/1838)) ([2277e15](https://github.com/Opentrons/opentrons/commit/2277e15)), closes [#1820](https://github.com/Opentrons/opentrons/issues/1820)
* **protocol-designer:** save all PD-required protocol data to file ([#1796](https://github.com/Opentrons/opentrons/issues/1796)) ([9403898](https://github.com/Opentrons/opentrons/commit/9403898)), closes [#1789](https://github.com/Opentrons/opentrons/issues/1789)
* **protocol-designer:** show file upload errors in modal ([#1829](https://github.com/Opentrons/opentrons/issues/1829)) ([5ffed81](https://github.com/Opentrons/opentrons/commit/5ffed81)), closes [#1610](https://github.com/Opentrons/opentrons/issues/1610)
* **protocol-designer:** support distribute with volume over pipette max ([#1827](https://github.com/Opentrons/opentrons/issues/1827)) ([9b1a3df](https://github.com/Opentrons/opentrons/commit/9b1a3df)), closes [#1763](https://github.com/Opentrons/opentrons/issues/1763)
* **protocol-designer:** user can collapse selected StepItem ([ed02098](https://github.com/Opentrons/opentrons/commit/ed02098)), closes [#1681](https://github.com/Opentrons/opentrons/issues/1681)
* **shared-data:** annotate labware with format and other metadata ([9d4082d](https://github.com/Opentrons/opentrons/commit/9d4082d))
* **update-server:** Add basic update server ([#1701](https://github.com/Opentrons/opentrons/issues/1701)) ([02d92c7](https://github.com/Opentrons/opentrons/commit/02d92c7))
* **update-server:** Add endpoint to update API Server, ot2serverlib, and Smoothie FW ([#1797](https://github.com/Opentrons/opentrons/issues/1797)) ([464ed7f](https://github.com/Opentrons/opentrons/commit/464ed7f)), closes [#1549](https://github.com/Opentrons/opentrons/issues/1549)
* **update-server:** Add restart endpoint to Update Server and shorten restart sleep to 1s ([#1793](https://github.com/Opentrons/opentrons/issues/1793)) ([1bf8bd7](https://github.com/Opentrons/opentrons/commit/1bf8bd7)), closes [#1794](https://github.com/Opentrons/opentrons/issues/1794)


### Performance Improvements

* **api:** Slightly increase probing speed, avoid resonance and pipette shaking ([#1801](https://github.com/Opentrons/opentrons/issues/1801)) ([8f28ad4](https://github.com/Opentrons/opentrons/commit/8f28ad4))





<a name="3.2.0"></a>
# [3.2.0](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.3...v3.2.0) (2018-07-10)

**Note:** Version bump only for package opentrons





<a name="3.2.0-beta.3"></a>
# [3.2.0-beta.3](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.2...v3.2.0-beta.3) (2018-06-25)


### Bug Fixes

* **api:** Fix row order in labware.create ([#1749](https://github.com/Opentrons/opentrons/issues/1749)) ([40ac527](https://github.com/Opentrons/opentrons/commit/40ac527)), closes [#1748](https://github.com/Opentrons/opentrons/issues/1748)
* **app:** Fix overlay and redirect duplication in robot settings page ([#1759](https://github.com/Opentrons/opentrons/issues/1759)) ([ce94b22](https://github.com/Opentrons/opentrons/commit/ce94b22))
* **components:** Resize main navbar and title bar to match designs ([#1757](https://github.com/Opentrons/opentrons/issues/1757)) ([4d46011](https://github.com/Opentrons/opentrons/commit/4d46011)), closes [#1285](https://github.com/Opentrons/opentrons/issues/1285)


### Features

* **protocol-designer:** allow button to look hovered via .hover class ([#1732](https://github.com/Opentrons/opentrons/issues/1732)) ([04173b7](https://github.com/Opentrons/opentrons/commit/04173b7)), closes [#1690](https://github.com/Opentrons/opentrons/issues/1690)





<a name="3.2.0-beta.2"></a>
# [3.2.0-beta.2](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.1...v3.2.0-beta.2) (2018-06-22)


### Bug Fixes

* **api:** Sanitize wifi inputs to handle special characters ([#1743](https://github.com/Opentrons/opentrons/issues/1743)) ([18f8d0f](https://github.com/Opentrons/opentrons/commit/18f8d0f))
* **protocol-designer:** set max width of form field rows ([#1723](https://github.com/Opentrons/opentrons/issues/1723)) ([c3a0dc6](https://github.com/Opentrons/opentrons/commit/c3a0dc6)), closes [#1488](https://github.com/Opentrons/opentrons/issues/1488)


### Features

* **api:** Log API server and Smoothie FW versions on API server boot ([#1728](https://github.com/Opentrons/opentrons/issues/1728)) ([6c3c3c4](https://github.com/Opentrons/opentrons/commit/6c3c3c4)), closes [#1120](https://github.com/Opentrons/opentrons/issues/1120)
* **app:** Connect home button to API on robot settings ([#1726](https://github.com/Opentrons/opentrons/issues/1726)) ([103d8c0](https://github.com/Opentrons/opentrons/commit/103d8c0)), closes [#856](https://github.com/Opentrons/opentrons/issues/856)
* **protocol-designer:** disallow saving ingred form w/o name & volume ([#1724](https://github.com/Opentrons/opentrons/issues/1724)) ([206d378](https://github.com/Opentrons/opentrons/commit/206d378)), closes [#1609](https://github.com/Opentrons/opentrons/issues/1609) [#1671](https://github.com/Opentrons/opentrons/issues/1671)





<a name="3.2.0-beta.1"></a>
# [3.2.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.0...v3.2.0-beta.1) (2018-06-19)


### Bug Fixes

* **api:** Add ignore update endpoint implementation to fallback file ([#1720](https://github.com/Opentrons/opentrons/issues/1720)) ([2a68dc5](https://github.com/Opentrons/opentrons/commit/2a68dc5))
* **api:** Fix RPC reporting wrong models for v1.3 pipettes ([#1691](https://github.com/Opentrons/opentrons/issues/1691)) ([e302382](https://github.com/Opentrons/opentrons/commit/e302382))
* **api:** Fixes bug in replacing substring of old p50 pipettes written with v13 instead of v1.3 ([#1717](https://github.com/Opentrons/opentrons/issues/1717)) ([1322055](https://github.com/Opentrons/opentrons/commit/1322055))
* **app:** Enable robot update even if API reports up-to-date ([#1721](https://github.com/Opentrons/opentrons/issues/1721)) ([16bb8eb](https://github.com/Opentrons/opentrons/commit/16bb8eb))
* **app:** Fix alignment issues in modals, fix titlebar on page ([#1719](https://github.com/Opentrons/opentrons/issues/1719)) ([ccf4881](https://github.com/Opentrons/opentrons/commit/ccf4881))
* **app:** Switch to hash routes to enable goBack in prod ([#1722](https://github.com/Opentrons/opentrons/issues/1722)) ([9bf2398](https://github.com/Opentrons/opentrons/commit/9bf2398))
* **protocol-designer:** fix styles for SelectionRect ([#1714](https://github.com/Opentrons/opentrons/issues/1714)) ([295940e](https://github.com/Opentrons/opentrons/commit/295940e))


### Features

* **api:** Add endpoints to handle API update ignores ([#1693](https://github.com/Opentrons/opentrons/issues/1693)) ([8c5eae9](https://github.com/Opentrons/opentrons/commit/8c5eae9))
* **app:** Add toggle to turn on/off robot rail lights ([#1710](https://github.com/Opentrons/opentrons/issues/1710)) ([d2c182c](https://github.com/Opentrons/opentrons/commit/d2c182c)), closes [#1684](https://github.com/Opentrons/opentrons/issues/1684)
* **app:** Show connect alert banner on successful connection ([#1700](https://github.com/Opentrons/opentrons/issues/1700)) ([70cd8b2](https://github.com/Opentrons/opentrons/commit/70cd8b2)), closes [#1314](https://github.com/Opentrons/opentrons/issues/1314)
* **protocol-designer:** clarify editing file details ([d03d42f](https://github.com/Opentrons/opentrons/commit/d03d42f)), closes [#1504](https://github.com/Opentrons/opentrons/issues/1504) [#1661](https://github.com/Opentrons/opentrons/issues/1661)





<a name="3.2.0-beta.0"></a>
# [3.2.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.1.2...v3.2.0-beta.0) (2018-06-13)


### Bug Fixes

* **api:** Fallback for update endpoints ([#1669](https://github.com/Opentrons/opentrons/issues/1669)) ([3ce97df](https://github.com/Opentrons/opentrons/commit/3ce97df))
* **app:** Add priority 2 analytics events ([#1627](https://github.com/Opentrons/opentrons/issues/1627)) ([08e622e](https://github.com/Opentrons/opentrons/commit/08e622e)), closes [#1553](https://github.com/Opentrons/opentrons/issues/1553)
* **app:** Hide modal title in pick up tip spinner ([#1635](https://github.com/Opentrons/opentrons/issues/1635)) ([1509f1a](https://github.com/Opentrons/opentrons/commit/1509f1a)), closes [#1630](https://github.com/Opentrons/opentrons/issues/1630)
* **app:** Reset calibration state on reset run ([#1682](https://github.com/Opentrons/opentrons/issues/1682)) ([689e586](https://github.com/Opentrons/opentrons/commit/689e586)), closes [#1597](https://github.com/Opentrons/opentrons/issues/1597)
* **app:** Tip probe clears labware calibration progress ([#1634](https://github.com/Opentrons/opentrons/issues/1634)) ([9d216a4](https://github.com/Opentrons/opentrons/commit/9d216a4)), closes [#1620](https://github.com/Opentrons/opentrons/issues/1620)
* **app:** Update cancel button text ([#1644](https://github.com/Opentrons/opentrons/issues/1644)) ([c0870d8](https://github.com/Opentrons/opentrons/commit/c0870d8)), closes [#1639](https://github.com/Opentrons/opentrons/issues/1639)
* **app:** Update Z calibration slot 5 diagram ([#1638](https://github.com/Opentrons/opentrons/issues/1638)) ([35e50cb](https://github.com/Opentrons/opentrons/commit/35e50cb)), closes [#1608](https://github.com/Opentrons/opentrons/issues/1608)
* **app-shell:** Remove Reload from View menu unless devtools are active ([#1659](https://github.com/Opentrons/opentrons/issues/1659)) ([b7cd58c](https://github.com/Opentrons/opentrons/commit/b7cd58c)), closes [#1618](https://github.com/Opentrons/opentrons/issues/1618)
* **protocol-designer:** fix bug with multi-channel substeps ([#1663](https://github.com/Opentrons/opentrons/issues/1663)) ([1fca294](https://github.com/Opentrons/opentrons/commit/1fca294))


### Features

* **app:** Add firmware version to robot settings page ([#1633](https://github.com/Opentrons/opentrons/issues/1633)) ([9a32383](https://github.com/Opentrons/opentrons/commit/9a32383))
* **app:** Add resources page to more section ([#1631](https://github.com/Opentrons/opentrons/issues/1631)) ([443afc0](https://github.com/Opentrons/opentrons/commit/443afc0)), closes [#1607](https://github.com/Opentrons/opentrons/issues/1607)
* **app:** Capture and display errors during deck calibration ([#1680](https://github.com/Opentrons/opentrons/issues/1680)) ([4f75ed7](https://github.com/Opentrons/opentrons/commit/4f75ed7)), closes [#1641](https://github.com/Opentrons/opentrons/issues/1641)
* **app:** Pass server-lib and firmware to /server/update ([#1679](https://github.com/Opentrons/opentrons/issues/1679)) ([4dc8a76](https://github.com/Opentrons/opentrons/commit/4dc8a76)), closes [#1115](https://github.com/Opentrons/opentrons/issues/1115)
* **app:** Toggle devtools feature flag in app settings ([#1678](https://github.com/Opentrons/opentrons/issues/1678)) ([6676903](https://github.com/Opentrons/opentrons/commit/6676903)), closes [#1632](https://github.com/Opentrons/opentrons/issues/1632)
* **components:** make info title text selected-dark ([5eeec11](https://github.com/Opentrons/opentrons/commit/5eeec11))
* **protocol-designer:** Darken font in labware selection modal ([#1646](https://github.com/Opentrons/opentrons/issues/1646)) ([aacc76c](https://github.com/Opentrons/opentrons/commit/aacc76c)), closes [#1341](https://github.com/Opentrons/opentrons/issues/1341)
* **protocol-designer:** elaborate on deck setup in title bar ([#1637](https://github.com/Opentrons/opentrons/issues/1637)) ([6bda925](https://github.com/Opentrons/opentrons/commit/6bda925)), closes [#1339](https://github.com/Opentrons/opentrons/issues/1339)
* **protocol-designer:** increase selected pipette font-size ([#1629](https://github.com/Opentrons/opentrons/issues/1629)) ([b90e767](https://github.com/Opentrons/opentrons/commit/b90e767)), closes [#1325](https://github.com/Opentrons/opentrons/issues/1325)
* **protocol-designer:** update behavior for well setup ([#1511](https://github.com/Opentrons/opentrons/issues/1511)) ([8c611b5](https://github.com/Opentrons/opentrons/commit/8c611b5))


### Performance Improvements

* **api:** decrease Y and ZA currents ([#1647](https://github.com/Opentrons/opentrons/issues/1647)) ([3fe7358](https://github.com/Opentrons/opentrons/commit/3fe7358))
