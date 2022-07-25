# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.0.0](https://github.com/Opentrons/opentrons/compare/v5.0.2...v6.0.0) (2022-07-14)


### Bug Fixes

* **api:** drop loop parameters removed in Python 3.10 ([#9368](https://github.com/Opentrons/opentrons/issues/9368)) ([e549c8c](https://github.com/Opentrons/opentrons/commit/e549c8c20205f7575700ed4df0adae18990305a9)), closes [#9331](https://github.com/Opentrons/opentrons/issues/9331)
* **app-shell:** ensure Windows build can analyze protocols ([#10347](https://github.com/Opentrons/opentrons/issues/10347)) ([66a96bc](https://github.com/Opentrons/opentrons/commit/66a96bc9e76911a3a63b9dae5730607c5ee4cebc)), closes [#10378](https://github.com/Opentrons/opentrons/issues/10378)
* **labware-library:** Update shop links for alumn block nest ([#9406](https://github.com/Opentrons/opentrons/issues/9406)) ([e46879e](https://github.com/Opentrons/opentrons/commit/e46879e5818d13ce414a4c7064ccebc1e3e36feb)), closes [#9375](https://github.com/Opentrons/opentrons/issues/9375)
* **shared-data:** Add Python tests for JSON v5 type-checking, and fix several small bugs ([#9720](https://github.com/Opentrons/opentrons/issues/9720)) ([805a262](https://github.com/Opentrons/opentrons/commit/805a26272c62078e6f0de28dab7dc94c96ee2006))


### Features

* **api:** add ProtocolEngine-based analysis CLI ([#9862](https://github.com/Opentrons/opentrons/issues/9862)) ([257b06d](https://github.com/Opentrons/opentrons/commit/257b06d9b82ff6ab0c472bde064f144b023cd4a2))
* **api:** add Thermocycler Gen2 driver ([#9854](https://github.com/Opentrons/opentrons/issues/9854)) ([b12641d](https://github.com/Opentrons/opentrons/commit/b12641dd93c0c8fd24924d1f4d56dcccf055a8dc))
* **api:** Analyze v6 json protocols and translate v6 commands to protocol engine  ([#9772](https://github.com/Opentrons/opentrons/issues/9772)) ([c6bc5d8](https://github.com/Opentrons/opentrons/commit/c6bc5d857ba080dc9ed0392bc42822471f091ddd))
* **api:** use V3 module definitions as default in PAPI ([#10245](https://github.com/Opentrons/opentrons/issues/10245)) ([85daa65](https://github.com/Opentrons/opentrons/commit/85daa655eac994aa53a0bcbebe4f398f6734499b))
* **app:** add liquid setup list view static list ([#10608](https://github.com/Opentrons/opentrons/issues/10608)) ([4158875](https://github.com/Opentrons/opentrons/commit/415887527fcd161cc8fcffcc6536e746a4f7d7df)), closes [#10517](https://github.com/Opentrons/opentrons/issues/10517)
* **app:** add liquid setup step to run setup page ([#10591](https://github.com/Opentrons/opentrons/issues/10591)) ([9f54480](https://github.com/Opentrons/opentrons/commit/9f54480213cf033d32e0531a0b397b7626a2e86d)), closes [#8909](https://github.com/Opentrons/opentrons/issues/8909)
* **app:** add protocol overview section ([#10212](https://github.com/Opentrons/opentrons/issues/10212)) ([1066ff0](https://github.com/Opentrons/opentrons/commit/1066ff0238e091c9bcfeac23e729a4b74a063211)), closes [#8821](https://github.com/Opentrons/opentrons/issues/8821)
* **app:** Add robot side protocol analysis error states ([#10595](https://github.com/Opentrons/opentrons/issues/10595)) ([44cc077](https://github.com/Opentrons/opentrons/commit/44cc077c8c0457fdf76f3abdc00f9a5b95ed6864)), closes [#10357](https://github.com/Opentrons/opentrons/issues/10357)
* **app:** add test shake slideout ([#9680](https://github.com/Opentrons/opentrons/issues/9680)) ([f3c8296](https://github.com/Opentrons/opentrons/commit/f3c82961939c5627de5dae1a68b78e2caad328d0)), closes [#9317](https://github.com/Opentrons/opentrons/issues/9317)
* **app:** create Banner component and add throughout module cards ([#9740](https://github.com/Opentrons/opentrons/issues/9740)) ([161a554](https://github.com/Opentrons/opentrons/commit/161a554ce57133eff511e05e6975fb5491d2ce95)), closes [#9290](https://github.com/Opentrons/opentrons/issues/9290) [#9545](https://github.com/Opentrons/opentrons/issues/9545)
* **app:** create Slideout component and make mag deck slideout ([#9382](https://github.com/Opentrons/opentrons/issues/9382)) ([1a3441b](https://github.com/Opentrons/opentrons/commit/1a3441b9532e5c37b699cd599a92fcb1a7837e2c)), closes [#8788](https://github.com/Opentrons/opentrons/issues/8788)
* **app:** creates temp module slideout ([#9415](https://github.com/Opentrons/opentrons/issues/9415)) ([4f85fd5](https://github.com/Opentrons/opentrons/commit/4f85fd560ba1b9f72fe8471b0b5ea6b4bcb32655)), closes [#8790](https://github.com/Opentrons/opentrons/issues/8790)
* **app:** heater shaker wizard test shake ([#9549](https://github.com/Opentrons/opentrons/issues/9549)) ([fa6f9c6](https://github.com/Opentrons/opentrons/commit/fa6f9c6f146a2eb3c54ca0131461abb22c8ec715))
* **app:** module slideout QA feedback touchups  ([#10110](https://github.com/Opentrons/opentrons/issues/10110)) ([a9b0738](https://github.com/Opentrons/opentrons/commit/a9b073854bd9d51ba79bfc25a24b07b3b30b3a07)), closes [#9869](https://github.com/Opentrons/opentrons/issues/9869)
* **app:** show live labware offset while jogging during Labware Position Check ([#10264](https://github.com/Opentrons/opentrons/issues/10264)) ([a5df9e0](https://github.com/Opentrons/opentrons/commit/a5df9e0bbaa7b2429b1e06d0243a8886693c45a4)), closes [#9796](https://github.com/Opentrons/opentrons/issues/9796) [#9797](https://github.com/Opentrons/opentrons/issues/9797)
* **app:** slideout and functionality to heater shaker overflow menu ([#9682](https://github.com/Opentrons/opentrons/issues/9682)) ([271dea6](https://github.com/Opentrons/opentrons/commit/271dea6d1924a795f56aee1e2a0839ef8d10bf61)), closes [#9304](https://github.com/Opentrons/opentrons/issues/9304) [#9303](https://github.com/Opentrons/opentrons/issues/9303) [#9302](https://github.com/Opentrons/opentrons/issues/9302) [#9450](https://github.com/Opentrons/opentrons/issues/9450)
* **app:** wire up Heater Shaker wizard intro page ([#9867](https://github.com/Opentrons/opentrons/issues/9867)) ([f6235c0](https://github.com/Opentrons/opentrons/commit/f6235c055f1ff180edbd594692d2dc783ac3fc4a)), closes [#9518](https://github.com/Opentrons/opentrons/issues/9518)
* **app, app-shell, api-client:** include analysis as cli tool within app for protocol ingestion  ([#9825](https://github.com/Opentrons/opentrons/issues/9825)) ([cdf6c59](https://github.com/Opentrons/opentrons/commit/cdf6c59a96ea6ea5dca2ed79269537dbc0bc6ff7))
* **heater-shaker:** update module definition ([#9759](https://github.com/Opentrons/opentrons/issues/9759)) ([8c0a796](https://github.com/Opentrons/opentrons/commit/8c0a796a2e687d9ec514a49952db705270468804))
* **papi-v2:** restrict placement of heater-shaker modules ([#10785](https://github.com/Opentrons/opentrons/issues/10785)) ([3c74e30](https://github.com/Opentrons/opentrons/commit/3c74e30e1183844e456c5e9bef7779141a2fa115)), closes [#10316](https://github.com/Opentrons/opentrons/issues/10316)
* **protocol-designer:** add labware placement restrictions east west of heater-shaker ([#10410](https://github.com/Opentrons/opentrons/issues/10410)) ([e1a8887](https://github.com/Opentrons/opentrons/commit/e1a88879941ae3e9da025f10aaac191452e3f938)), closes [#10255](https://github.com/Opentrons/opentrons/issues/10255)
* **protocol-designer:** add load liquid commands ([#9923](https://github.com/Opentrons/opentrons/issues/9923)) ([5b003f5](https://github.com/Opentrons/opentrons/commit/5b003f57ed224b69c2b133156c8685e3808e812b)), closes [#9702](https://github.com/Opentrons/opentrons/issues/9702)
* **protocol-designer:** add schema v6 migration support ([#9595](https://github.com/Opentrons/opentrons/issues/9595)) ([639cc00](https://github.com/Opentrons/opentrons/commit/639cc0093aac7cf960d0254796c5ca0131d15e25)), closes [#9542](https://github.com/Opentrons/opentrons/issues/9542)
* **protocol-designer, step-generation, shared-data:** rename trash labware id to match protocol engine usage ([#10132](https://github.com/Opentrons/opentrons/issues/10132)) ([2136030](https://github.com/Opentrons/opentrons/commit/21360302a0a67a544ebde9f114d5eb31d61af659)), closes [#10017](https://github.com/Opentrons/opentrons/issues/10017)
* **robot-server:** recognize JSONv6 as a valid main protocol file ([#9686](https://github.com/Opentrons/opentrons/issues/9686)) ([32a5ed0](https://github.com/Opentrons/opentrons/commit/32a5ed00882aa981821f6e14cad720958e4ddc89))
* **shared-data:** add gripper specs ([#10722](https://github.com/Opentrons/opentrons/issues/10722)) ([9dc6a28](https://github.com/Opentrons/opentrons/commit/9dc6a28a5cc94c0794f394d877836a634c44afce))
* **shared-data:** add H/S to deck definition, bump deck definition schema ([#10417](https://github.com/Opentrons/opentrons/issues/10417)) ([183a1ac](https://github.com/Opentrons/opentrons/commit/183a1acd2db56750148d59a6058345aa32618311))
* **shared-data:** add heater shaker 2d render key ([#9707](https://github.com/Opentrons/opentrons/issues/9707)) ([094af23](https://github.com/Opentrons/opentrons/commit/094af238976532e99a8324e0d89a1a2101a5e095))
* **shared-data:** add heater-shaker labware w/ adapter definitions ([#9917](https://github.com/Opentrons/opentrons/issues/9917)) ([859fe69](https://github.com/Opentrons/opentrons/commit/859fe69789fbf1d065420fce07dcd7a940e2c09c))
* **shared-data, protocol-designer:** add liquid color to schema v6 ([#10294](https://github.com/Opentrons/opentrons/issues/10294)) ([c8ee567](https://github.com/Opentrons/opentrons/commit/c8ee5675f725e36578d0aca024e4bcd838030bf8))
* **step-generation, protocol-designer:** add JSON schema v6 support ([#9824](https://github.com/Opentrons/opentrons/issues/9824)) ([0c95a58](https://github.com/Opentrons/opentrons/commit/0c95a58c309ea8d901bbb9fac82f371c296fe1d4))
* **step-generation, protocol-designer:** generate error when pipetting NSEW of HS while shaking ([#10589](https://github.com/Opentrons/opentrons/issues/10589)) ([17c1b27](https://github.com/Opentrons/opentrons/commit/17c1b27dbdf30f6e42fac0e3e657d813d7eff57e)), closes [#10509](https://github.com/Opentrons/opentrons/issues/10509)





## [5.0.2](https://github.com/Opentrons/opentrons/compare/v5.0.1...v5.0.2) (2022-03-03)


### Bug Fixes

* **api, app:** display labware label ([#9587](https://github.com/Opentrons/opentrons/issues/9587)) ([7680d92](https://github.com/Opentrons/opentrons/commit/7680d92d4a966d641e8da558514a153e06946bce)), closes [#9105](https://github.com/Opentrons/opentrons/issues/9105) [#9088](https://github.com/Opentrons/opentrons/issues/9088)





## [5.0.1](https://github.com/Opentrons/opentrons/compare/v5.0.0...v5.0.1) (2022-02-24)

**Note:** Version bump only for package @opentrons/shared-data





# [5.0.0](https://github.com/Opentrons/opentrons/compare/v4.7.0...v5.0.0) (2022-02-16)


### Bug Fixes

* **app:** display error and close run if protocol analysis is not-ok ([#9007](https://github.com/Opentrons/opentrons/issues/9007)) ([a4bf3b5](https://github.com/Opentrons/opentrons/commit/a4bf3b5458949cc8abed2f32de0f54b635d28ee1)), closes [#8984](https://github.com/Opentrons/opentrons/issues/8984)
* **app, shared-data:** splice out first set of setup commands from run log only ([#9086](https://github.com/Opentrons/opentrons/issues/9086)) ([a86d9f7](https://github.com/Opentrons/opentrons/commit/a86d9f7d1b607aef3436a2ddcaa45042dfaf28b5)), closes [#9011](https://github.com/Opentrons/opentrons/issues/9011)


### Features

* **app:** apply in flight offsets to pick up tip and drop tip commands ([#8812](https://github.com/Opentrons/opentrons/issues/8812)) ([71b279d](https://github.com/Opentrons/opentrons/commit/71b279d38aa8f9549bbc0cdbbca757f17932f4ff))
* **app:** delete v6 adapter pick up tip shim ([#8742](https://github.com/Opentrons/opentrons/issues/8742)) ([38d87eb](https://github.com/Opentrons/opentrons/commit/38d87ebbeb220b1cf99880acd7e1a2fa94b8a8a1))
* **app:** PUR MoaM support ([#8838](https://github.com/Opentrons/opentrons/issues/8838)) ([3ed5be7](https://github.com/Opentrons/opentrons/commit/3ed5be7af0762a669ad1b92c1b1cf07d5200574d)), closes [#8713](https://github.com/Opentrons/opentrons/issues/8713)
* **app:** Run Details Command List ([#8682](https://github.com/Opentrons/opentrons/issues/8682)) ([9ddf133](https://github.com/Opentrons/opentrons/commit/9ddf133f724389444b1ab269238e6aeb862768fe)), closes [#8368](https://github.com/Opentrons/opentrons/issues/8368) [#8481](https://github.com/Opentrons/opentrons/issues/8481)
* **app:** wire up labware position check ([#8774](https://github.com/Opentrons/opentrons/issues/8774)) ([6b2c3f1](https://github.com/Opentrons/opentrons/commit/6b2c3f1cfcfcc98b200919ad34544a661641c2cb))
* **app:** wire up protocol resource + LPC ([#8722](https://github.com/Opentrons/opentrons/issues/8722)) ([c463e0a](https://github.com/Opentrons/opentrons/commit/c463e0a22ebccf410d67c6b18fe3c50b8a4a8d03)), closes [#8553](https://github.com/Opentrons/opentrons/issues/8553)
* **engine:** allow compatible module loads and reloads ([#9273](https://github.com/Opentrons/opentrons/issues/9273)) ([1c7e00d](https://github.com/Opentrons/opentrons/commit/1c7e00d8da77273eca1a8d0bb5e7bed544e3c168))
* **labware-library:** Add 4 new labware definitions to shared-data/library ([#9218](https://github.com/Opentrons/opentrons/issues/9218)) ([a7a51b2](https://github.com/Opentrons/opentrons/commit/a7a51b273b1450943221a64f140a30ec1eb0c042)), closes [#8649](https://github.com/Opentrons/opentrons/issues/8649)
* **robot-server:** Expose robot model in health ([#9072](https://github.com/Opentrons/opentrons/issues/9072)) ([8e052fc](https://github.com/Opentrons/opentrons/commit/8e052fcbb11c7338df4725ac7257c37fc5dd77fb))
* **shared-data:** add home command to proocol schema ([#8947](https://github.com/Opentrons/opentrons/issues/8947)) ([79e0ab9](https://github.com/Opentrons/opentrons/commit/79e0ab936dff72b221fd428039e110695d801212)), closes [#8892](https://github.com/Opentrons/opentrons/issues/8892)





# [4.7.0](https://github.com/Opentrons/opentrons/compare/v4.6.2...v4.7.0) (2021-11-18)


### Features

* **api-client:** add protocol resource to api-client and react-api-client ([#8577](https://github.com/Opentrons/opentrons/issues/8577)) ([bcd50e7](https://github.com/Opentrons/opentrons/commit/bcd50e79bf94ad5fa2d5d7288a1fbb587752567f)), closes [#8460](https://github.com/Opentrons/opentrons/issues/8460)
* **app:** add js api client utils and wire up generic step screen ([#8638](https://github.com/Opentrons/opentrons/issues/8638)) ([d790a0b](https://github.com/Opentrons/opentrons/commit/d790a0bd04e35b78d93526850d90cf4d46db91cc)), closes [#8552](https://github.com/Opentrons/opentrons/issues/8552)
* **app:** add PE analysis schema v6 adapter ([31fcc98](https://github.com/Opentrons/opentrons/commit/31fcc9885c6be2b077f2b865f96fe99e981529c1)), closes [#8661](https://github.com/Opentrons/opentrons/issues/8661)
* **app:** labware position check generic screen dynamic text ([#8451](https://github.com/Opentrons/opentrons/issues/8451)) ([7f141dd](https://github.com/Opentrons/opentrons/commit/7f141ddadba79b464395abd6c04e85b46ac2811e))







**Note:** Version bump only for package @opentrons/shared-data





## [4.6.2](https://github.com/Opentrons/opentrons/compare/v4.6.1...v4.6.2) (2021-09-30)

**Note:** Version bump only for package @opentrons/shared-data





## [4.6.1](https://github.com/Opentrons/opentrons/compare/v4.6.0...v4.6.1) (2021-09-28)

**Note:** Version bump only for package @opentrons/shared-data





# [4.6.0](https://github.com/Opentrons/opentrons/compare/v4.5.0...v4.6.0) (2021-09-27)


### Features

* **app:** add labware setup step to protocol setup flow ([#8172](https://github.com/Opentrons/opentrons/issues/8172)) ([e33deb7](https://github.com/Opentrons/opentrons/commit/e33deb7ca641900196dbc6c8edff0bea7e14343e)), closes [#7665](https://github.com/Opentrons/opentrons/issues/7665)
* **app:** establish logic for labware position check ([#8246](https://github.com/Opentrons/opentrons/issues/8246)) ([9bf7f61](https://github.com/Opentrons/opentrons/commit/9bf7f615660d5949d47b7c410580cf5394011c29))





# [4.5.0](https://github.com/Opentrons/opentrons/compare/v4.4.0...v4.5.0) (2021-08-03)


### Features

* **labware-creator:** added tube brand and rack brand ([#8082](https://github.com/Opentrons/opentrons/issues/8082)) ([22ee36f](https://github.com/Opentrons/opentrons/commit/22ee36f79129b04d2588ae72a173ea1eb1253a12)), closes [#7986](https://github.com/Opentrons/opentrons/issues/7986)
* **labware-creator:** export and import tiprack defs ([#7947](https://github.com/Opentrons/opentrons/issues/7947)) ([a90e66d](https://github.com/Opentrons/opentrons/commit/a90e66d191a47d2a92a839e9554b8610aac27603)), closes [#7696](https://github.com/Opentrons/opentrons/issues/7696) [#7697](https://github.com/Opentrons/opentrons/issues/7697)
* **labware-creator:** implement and test saving custom tube racks ([#8089](https://github.com/Opentrons/opentrons/issues/8089)) ([2f6f7e0](https://github.com/Opentrons/opentrons/commit/2f6f7e0c313a9ef9a0d04da67aa8e05e579ca916)), closes [#7964](https://github.com/Opentrons/opentrons/issues/7964)





# [4.4.0](https://github.com/Opentrons/opentrons/compare/v4.3.1...v4.4.0) (2021-06-16)


### Bug Fixes

* **shared-data:** fix p1000_single_gen2 literal in type union ([#7675](https://github.com/Opentrons/opentrons/issues/7675)) ([72735c2](https://github.com/Opentrons/opentrons/commit/72735c2))





## [4.3.1](https://github.com/Opentrons/opentrons/compare/v4.3.0...v4.3.1) (2021-05-10)

**Note:** Version bump only for package @opentrons/shared-data





# [4.3.0](https://github.com/Opentrons/opentrons/compare/v4.2.1...v4.3.0) (2021-05-06)

### Bug Fixes

* **shared-data:** fix data not being included in package build ([#7650](https://github.com/Opentrons/opentrons/issues/7650)) ([1708904](https://github.com/Opentrons/opentrons/commit/1708904))
* **api, shared-data:** Regular expression used to split well into row and column did not allow a 0 column. ([#7566](https://github.com/Opentrons/opentrons/issues/7566)) ([1f6b11b](https://github.com/Opentrons/opentrons/commit/1f6b11b)), closes [#7531](https://github.com/Opentrons/opentrons/issues/7531)





## [4.2.1](https://github.com/Opentrons/opentrons/compare/v4.2..0...v4.2.1) (2021-04-06)

**Note:** Version bump only for package @opentrons/shared-data


# [4.2.0](https://github.com/Opentrons/opentrons/compare/v4.1.1...v4.2.0) (2021-03-18)

**Note:** Version bump only for package @opentrons/shared-data





## [4.1.1](https://github.com/Opentrons/opentrons/compare/v4.1.0...v4.1.1) (2021-01-25)

**Note:** Version bump only for package @opentrons/shared-data





# [4.1.0](https://github.com/Opentrons/opentrons/compare/v4.0.0...v4.1.0) (2021-01-20)

## Features

* **shared-data:** add default tipracks to each pipette name spec ([#7108](https://github.com/Opentrons/opentrons/issues/7108)) ([757ca85](https://github.com/Opentrons/opentrons/commit/757ca85))





# [4.0.0](https://github.com/Opentrons/opentrons/compare/v3.21.2...v4.0.0) (2020-11-20)


### Bug Fixes

* **shared-data:** fix P300 GEN2 tip overlap values ([#6987](https://github.com/Opentrons/opentrons/issues/6987)) ([bc38f36](https://github.com/Opentrons/opentrons/commit/bc38f36))
* **build:** Dont break make with weird deps in shared-data ([#6857](https://github.com/Opentrons/opentrons/issues/6857)) ([0681ae0](https://github.com/Opentrons/opentrons/commit/0681ae0))
* **api,robot-server:** add pydantic to api, upgrade and add test dev deps ([#6673](https://github.com/Opentrons/opentrons/issues/6673)) ([2e4ad6a](https://github.com/Opentrons/opentrons/commit/2e4ad6a))



### Performance Improvements

* **shared-data,api:** speed up pipette settings ([#6952](https://github.com/Opentrons/opentrons/issues/6952)) ([f8b6266](https://github.com/Opentrons/opentrons/commit/f8b6266))


### Features

* **api:** p1000_single_v2.2, p20_single_v2.2 ([#6922](https://github.com/Opentrons/opentrons/issues/6922)) ([14659b8](https://github.com/Opentrons/opentrons/commit/14659b8))
* **api:** add source blowout location option to transfer function ([#6670](https://github.com/Opentrons/opentrons/issues/6670)) ([811a767](https://github.com/Opentrons/opentrons/commit/811a767)), closes [#6576](https://github.com/Opentrons/opentrons/issues/6576)




## [3.21.2](https://github.com/Opentrons/opentrons/compare/v3.21.1...v3.21.2) (2020-10-16)

**Note:** Version bump only for package @opentrons/shared-data






## [3.21.1](https://github.com/Opentrons/opentrons/compare/v3.21.0...v3.21.1) (2020-10-14)

**Note:** Version bump only for package @opentrons/shared-data





# [3.21.0](https://github.com/Opentrons/opentrons/compare/v3.20.1...v3.21.0) (2020-09-30)


### Bug Fixes

* **shared-data:** fix typos (themocycler->thermocycler) ([1689fa8](https://github.com/Opentrons/opentrons/commit/1689fa8))


### Features

* **protocol-designer:** add air gap commands and export protocols as v5 ([#6401](https://github.com/Opentrons/opentrons/issues/6401)) ([a16351e](https://github.com/Opentrons/opentrons/commit/a16351e))


### Performance Improvements

* **protocol-designer:** strip no-op mixes from robot state generation ([#6488](https://github.com/Opentrons/opentrons/issues/6488)) ([4885b50](https://github.com/Opentrons/opentrons/commit/4885b50)), closes [#6176](https://github.com/Opentrons/opentrons/issues/6176)





## [3.20.1](https://github.com/Opentrons/opentrons/compare/v3.20.0...v3.20.1) (2020-08-25)

**Note:** Version bump only for package @opentrons/shared-data





# [3.20.0](https://github.com/Opentrons/opentrons/compare/v3.19.0...v3.20.0) (2020-08-13)

### Bug Fixes

* **app:** fix data reads from JSON Protocols later than v3 ([#6284](https://github.com/Opentrons/opentrons/issues/6284)) ([f0f7109](https://github.com/Opentrons/opentrons/commit/f0f7109)), closes [#6235](https://github.com/Opentrons/opentrons/issues/6235)
* **shared-data:** do not show calibration block defs in the labware library ([#6031](https://github.com/Opentrons/opentrons/issues/6031)) ([c248d32](https://github.com/Opentrons/opentrons/commit/c248d32))
* **shared-data:** fix well bottom shape of nest_96_wellplate_2ml_deep ([#6216](https://github.com/Opentrons/opentrons/issues/6216)) ([6350511](https://github.com/Opentrons/opentrons/commit/6350511)), closes [#6171](https://github.com/Opentrons/opentrons/issues/6171)


### Features

* **api:** add JSON v5 executor and schema ([#6239](https://github.com/Opentrons/opentrons/issues/6239)) ([17969d6](https://github.com/Opentrons/opentrons/commit/17969d6)), closes [#6228](https://github.com/Opentrons/opentrons/issues/6228)
* **labware-library:** avoid adding info to 'group' field in LC ([#5975](https://github.com/Opentrons/opentrons/issues/5975)) ([c6f1fa9](https://github.com/Opentrons/opentrons/commit/c6f1fa9)), closes [#5801](https://github.com/Opentrons/opentrons/issues/5801)
* **protocol-designer:** add aspirate delay commands ([#6290](https://github.com/Opentrons/opentrons/issues/6290)) ([08ad8db](https://github.com/Opentrons/opentrons/commit/08ad8db)), closes [#6019](https://github.com/Opentrons/opentrons/issues/6019)
* **protocol-designer:** add move to slot command creator ([#6261](https://github.com/Opentrons/opentrons/issues/6261)) ([fd45dd7](https://github.com/Opentrons/opentrons/commit/fd45dd7)), closes [#6221](https://github.com/Opentrons/opentrons/issues/6221)
* **protocol-designer:** add moveToWell command creator ([#6244](https://github.com/Opentrons/opentrons/issues/6244)) ([762a956](https://github.com/Opentrons/opentrons/commit/762a956)), closes [#6240](https://github.com/Opentrons/opentrons/issues/6240)
* **protocol-designer:** do not display calibration blocks ([#6118](https://github.com/Opentrons/opentrons/issues/6118)) ([081ac74](https://github.com/Opentrons/opentrons/commit/081ac74)), closes [#6117](https://github.com/Opentrons/opentrons/issues/6117)
* **shared-data:** add labware definitions for calibration block ([#5993](https://github.com/Opentrons/opentrons/issues/5993)) ([f56e2f4](https://github.com/Opentrons/opentrons/commit/f56e2f4)), closes [#5618](https://github.com/Opentrons/opentrons/issues/5618)





# [3.19.0](https://github.com/Opentrons/opentrons/compare/v3.18.1...v3.19.0) (2020-06-29)


### Bug Fixes

* **build:** allow test pypi uploads to fail again ([#5849](https://github.com/Opentrons/opentrons/issues/5849)) ([61b5eba](https://github.com/Opentrons/opentrons/commit/61b5eba))
* **build:** missing semicolon in shared-data/python/Makefile ([#5901](https://github.com/Opentrons/opentrons/issues/5901)) ([27a8751](https://github.com/Opentrons/opentrons/commit/27a8751))
* **shared-data:** recursively specify subpackages ([#5844](https://github.com/Opentrons/opentrons/issues/5844)) ([3ccbbea](https://github.com/Opentrons/opentrons/commit/3ccbbea))


### Features

* **js:** update lodash to 4.17.15 ([#5788](https://github.com/Opentrons/opentrons/issues/5788)) ([5a145dc](https://github.com/Opentrons/opentrons/commit/5a145dc))
* **protocol-designer:** add atomic thermocyclerRunProfile command creator ([#5843](https://github.com/Opentrons/opentrons/issues/5843)) ([e20bbda](https://github.com/Opentrons/opentrons/commit/e20bbda)), closes [#5839](https://github.com/Opentrons/opentrons/issues/5839)




## [3.18.1](https://github.com/Opentrons/opentrons/compare/v3.18.0...v3.18.1) (2020-05-26)

**Note:** Version bump only for package @opentrons/shared-data





# [3.18.0](https://github.com/Opentrons/opentrons/compare/v3.17.1...v3.18.0) (2020-05-20)


### Bug Fixes

* **protocol-designer:** fix multichannel well selection bug ([#5607](https://github.com/Opentrons/opentrons/issues/5607)) ([e20d645](https://github.com/Opentrons/opentrons/commit/e20d645))


### Features

* **api:** support thermocycler commands in executor ([#5557](https://github.com/Opentrons/opentrons/issues/5557)) ([b4ca09e](https://github.com/Opentrons/opentrons/commit/b4ca09e))
* **protocol-designer:** add 'mini' command creators for TC ([#5643](https://github.com/Opentrons/opentrons/issues/5643)) ([e6654a8](https://github.com/Opentrons/opentrons/commit/e6654a8)), closes [#5598](https://github.com/Opentrons/opentrons/issues/5598)





## [3.17.1](https://github.com/Opentrons/opentrons/compare/v3.17.0...v3.17.1) (2020-05-06)

### Bug Fixes

* **app-shell:** upgrade Electron, avoid hoisting dependencies, and fix devtools ([#5545](https://github.com/Opentrons/opentrons/issues/5545)) ([f993925](https://github.com/Opentrons/opentrons/commit/f993925)), closes [#5537](https://github.com/Opentrons/opentrons/issues/5537) [#5541](https://github.com/Opentrons/opentrons/issues/5541)


### Features

* **app:** guide the user through leveling gen2 multis ([#5348](https://github.com/Opentrons/opentrons/issues/5348)) ([185d0ad](https://github.com/Opentrons/opentrons/commit/185d0ad)), closes [#5344](https://github.com/Opentrons/opentrons/issues/5344)
* **shared-data:** add nest_96_wellplate_2ml_deep ([#5503](https://github.com/Opentrons/opentrons/issues/5503)) ([3002453](https://github.com/Opentrons/opentrons/commit/3002453))





# [3.17.0](https://github.com/Opentrons/opentrons/compare/v3.17.0-beta.1...v3.17.0) (2020-04-23)

**Note:** Version bump only for package @opentrons/shared-data





# [3.17.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.17.0-beta.0...v3.17.0-beta.1) (2020-04-14)

**Note:** Version bump only for package @opentrons/shared-data





# [3.17.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.16.1...v3.17.0-beta.0) (2020-04-01)

### Bug Fixes

* **api:** return tips to tipracks from the same height as drop tip ([#5187](https://github.com/Opentrons/opentrons/issues/5187)) ([82187ed](https://github.com/Opentrons/opentrons/commit/82187ed)), closes [#5186](https://github.com/Opentrons/opentrons/issues/5186)
* **shared-data:** fix typo in v4 protocol schema ([#4997](https://github.com/Opentrons/opentrons/issues/4997)) ([2483b00](https://github.com/Opentrons/opentrons/commit/2483b00))


### Features

* **api:** add v4 JSON executor ([#5221](https://github.com/Opentrons/opentrons/issues/5221)) ([e81cb56](https://github.com/Opentrons/opentrons/commit/e81cb56))
* **api:** support gen2 modules ([#5039](https://github.com/Opentrons/opentrons/issues/5039)) ([fa7a320](https://github.com/Opentrons/opentrons/commit/fa7a320)), closes [#4960](https://github.com/Opentrons/opentrons/issues/4960)
* **app, components:** Support gen2 modules ([#5177](https://github.com/Opentrons/opentrons/issues/5177)) ([3a938ff](https://github.com/Opentrons/opentrons/commit/3a938ff)), closes [#4960](https://github.com/Opentrons/opentrons/issues/4960)
* **protocol-designer:** disambiguate module model vs type ([#5029](https://github.com/Opentrons/opentrons/issues/5029)) ([a1f4740](https://github.com/Opentrons/opentrons/commit/a1f4740)), closes [#4897](https://github.com/Opentrons/opentrons/issues/4897)
* **protocol-designer:** save v3/v4 files correctly ([#5100](https://github.com/Opentrons/opentrons/issues/5100)) ([53e8ddf](https://github.com/Opentrons/opentrons/commit/53e8ddf)), closes [#4919](https://github.com/Opentrons/opentrons/issues/4919)
* **shared-data:** correct existing labware defs engageHeight ([#5261](https://github.com/Opentrons/opentrons/issues/5261)) ([767054d](https://github.com/Opentrons/opentrons/commit/767054d)), closes [#5226](https://github.com/Opentrons/opentrons/issues/5226)





## [3.16.1](https://github.com/opentrons/opentrons/compare/v3.16.0...v3.16.1) (2020-02-25)

**Note:** Version bump only for package @opentrons/shared-data





# [3.16.0](https://github.com/Opentrons/opentrons/compare/v3.15.2...v3.16.0) (2020-02-19)

### Features

* **api:** add module def schema v2 and v2 defs ([#4805](https://github.com/Opentrons/opentrons/issues/4805)) ([4018254](https://github.com/Opentrons/opentrons/commit/4018254)), closes [#4222](https://github.com/Opentrons/opentrons/issues/4222)
* **api:** add p10m v1.6 ([#4722](https://github.com/Opentrons/opentrons/issues/4722)) ([c25c887](https://github.com/Opentrons/opentrons/commit/c25c887))
* **protocol-designer:** add commands for temperature step ([#4770](https://github.com/Opentrons/opentrons/issues/4770)) ([6aff0e8](https://github.com/Opentrons/opentrons/commit/6aff0e8))
* **protocol-designer:** Populate engageHeight field with previous values ([#4794](https://github.com/Opentrons/opentrons/issues/4794)) ([b68b52d](https://github.com/Opentrons/opentrons/commit/b68b52d)), closes [#4764](https://github.com/Opentrons/opentrons/issues/4764)
* **protocol-designer:** use immer in step generation ([#4769](https://github.com/Opentrons/opentrons/issues/4769)) ([7915393](https://github.com/Opentrons/opentrons/commit/7915393)), closes [#4697](https://github.com/Opentrons/opentrons/issues/4697)
* **shared-data:** add 20uL filter tiprack ([#4532](https://github.com/Opentrons/opentrons/issues/4532)) ([423da87](https://github.com/Opentrons/opentrons/commit/423da87))
* **shared-data:** add new v4 JSON protocol schema ([#4846](https://github.com/Opentrons/opentrons/issues/4846)) ([bd49812](https://github.com/Opentrons/opentrons/commit/bd49812)), closes [#4836](https://github.com/Opentrons/opentrons/issues/4836) [#4897](https://github.com/Opentrons/opentrons/issues/4897)





## [3.15.2](https://github.com/opentrons/opentrons/compare/v3.15.1...v3.15.2) (2019-12-17)


### Bug Fixes

* **labware:** "retire" eppendorf tiprack definitions ([#4526](https://github.com/Opentrons/opentrons/issues/4526)) ([ddc2800](https://github.com/Opentrons/opentrons/commit/ddc2800)), closes [#4518](https://github.com/Opentrons/opentrons/issues/4518)
* **shared-data:** require well(s) in labware schema ([#4621](https://github.com/Opentrons/opentrons/issues/4621)) ([4dcbff5](https://github.com/Opentrons/opentrons/commit/4dcbff5)), closes [#4506](https://github.com/Opentrons/opentrons/issues/4506)


### Features

* **protocol-designer:** reorganize step-generation ([#4531](https://github.com/Opentrons/opentrons/issues/4531)) ([125f06f](https://github.com/Opentrons/opentrons/commit/125f06f)), closes [#4301](https://github.com/Opentrons/opentrons/issues/4301)





## [3.15.1](https://github.com/Opentrons/opentrons/compare/v3.15.1...v3.15.1) (2019-12-09)

**Note:** Version bump only for package @opentrons/shared-data





# [3.15.0](https://github.com/Opentrons/opentrons/compare/v3.14.1...v3.15.0) (2019-12-05)



### Bug Fixes

* **api:** present loaded but unused pipettes and modules to rpc ([#4538](https://github.com/Opentrons/opentrons/issues/4538)) ([fe27ef7](https://github.com/Opentrons/opentrons/commit/fe27ef7))
* **shared-data:** increase GEN2 pipette plunger & drop tip current ([#4523](https://github.com/Opentrons/opentrons/issues/4523)) ([e6909b9](https://github.com/Opentrons/opentrons/commit/e6909b9))
* **api,shared-data:** fix gen2 multi positioning ([#4412](https://github.com/Opentrons/opentrons/issues/4412)) ([54be7f9](https://github.com/Opentrons/opentrons/commit/54be7f9))


### Features

* **api,shared-data:** support p20/300/1k single v2.1 ([#4392](https://github.com/Opentrons/opentrons/issues/4392)) ([e743d2b](https://github.com/Opentrons/opentrons/commit/e743d2b)), closes [#4389](https://github.com/Opentrons/opentrons/issues/4389)
* **protocol-designer:** render modules on deck ([#4309](https://github.com/Opentrons/opentrons/issues/4309)) ([20514f0](https://github.com/Opentrons/opentrons/commit/20514f0))
* **protocol-designer:** save/load protocols with modules in prepro PD ([#4419](https://github.com/Opentrons/opentrons/issues/4419)) ([2b98da2](https://github.com/Opentrons/opentrons/commit/2b98da2))





## [3.14.1](https://github.com/Opentrons/opentrons/compare/v3.14.0...v3.14.1) (2019-11-11)

**Note:** Version bump only for package @opentrons/shared-data





# [3.14.0](https://github.com/Opentrons/opentrons/compare/v3.13.2...v3.14.0) (2019-10-31)

### Bug Fixes

* **api,shared-data,labware-creator:** do not touch tip on troughs ([#4271](https://github.com/Opentrons/opentrons/issues/4271)) ([d7e76cd](https://github.com/Opentrons/opentrons/commit/d7e76cd)), closes [#4258](https://github.com/Opentrons/opentrons/issues/4258)
* **shared-data:** swap X/Y spacing for 24-well nest tuberacks ([#4240](https://github.com/Opentrons/opentrons/issues/4240)) ([34330ed](https://github.com/Opentrons/opentrons/commit/34330ed))

### Features

* **api:** Allow backwards compatibility with gen2 pipettes in apiv2 ([#4326](https://github.com/Opentrons/opentrons/issues/4326)) ([4609172](https://github.com/Opentrons/opentrons/commit/4609172))
* **app:** allow p1000 gen2 to fallback to specced p1000 gen1 ([#4316](https://github.com/Opentrons/opentrons/issues/4316)) ([0e33f65](https://github.com/Opentrons/opentrons/commit/0e33f65)), closes [#3598](https://github.com/Opentrons/opentrons/issues/3598)
* **shared-data:** add "GEN1" to gen 1 pipette display names ([#4313](https://github.com/Opentrons/opentrons/issues/4313)) ([cbdc814](https://github.com/Opentrons/opentrons/commit/cbdc814))
* **api:** deprecate api support for JSON v1/2 ([#4155](https://github.com/Opentrons/opentrons/issues/4155)) ([61361a8](https://github.com/Opentrons/opentrons/commit/61361a8)), closes [#4128](https://github.com/Opentrons/opentrons/issues/4128)
* **api:** v1: Add version specification to labware.load ([#4218](https://github.com/Opentrons/opentrons/issues/4218)) ([37060ce](https://github.com/Opentrons/opentrons/commit/37060ce)), closes [#4216](https://github.com/Opentrons/opentrons/issues/4216)
* **shared-data:** add NEST labware ([#4156](https://github.com/Opentrons/opentrons/issues/4156)) ([0d2491d](https://github.com/Opentrons/opentrons/commit/0d2491d))





## [3.13.2](https://github.com/Opentrons/opentrons/compare/v3.13.1...v3.13.2) (2019-10-10)

**Note:** Version bump only for package @opentrons/shared-data





## [3.13.1](https://github.com/Opentrons/opentrons/compare/v3.13.0...v3.13.1) (2019-10-09)


### Bug Fixes

* **api:** change trash definitions to avoid y head crash ([#4188](https://github.com/Opentrons/opentrons/issues/4188)) ([68b6201](https://github.com/Opentrons/opentrons/commit/68b6201))





# [3.13.0](https://github.com/Opentrons/opentrons/compare/v3.12.0...v3.13.0) (2019-10-02)

### Bug Fixes

* **api:** apiv2: Separate tip overlap per pipette ([#4106](https://github.com/Opentrons/opentrons/issues/4106)) ([1bac2a9](https://github.com/Opentrons/opentrons/commit/1bac2a9)), closes [#4103](https://github.com/Opentrons/opentrons/issues/4103)


### Features

* **api:** Explicit cmdline and jupyter entrypoints ([#4032](https://github.com/Opentrons/opentrons/issues/4032)) ([b534096](https://github.com/Opentrons/opentrons/commit/b534096))
* **api:** replace format with quirks for rectangular well behavior ([#4027](https://github.com/Opentrons/opentrons/issues/4027)) ([42deac2](https://github.com/Opentrons/opentrons/commit/42deac2)), closes [#3894](https://github.com/Opentrons/opentrons/issues/3894)
* **components, app:** add custom pipette select with category support ([#3996](https://github.com/Opentrons/opentrons/issues/3996)) ([47f0713](https://github.com/Opentrons/opentrons/commit/47f0713))
* **protocol-designer:** avoid use of labware "format" ([#4070](https://github.com/Opentrons/opentrons/issues/4070)) ([f8603a6](https://github.com/Opentrons/opentrons/commit/f8603a6)), closes [#3894](https://github.com/Opentrons/opentrons/issues/3894)





# [3.12.0](https://github.com/Opentrons/opentrons/compare/v3.11.4...v3.12.0) (2019-09-13)

### Bug Fixes

* **shared-data:** fix tipOvelap value for P20 tiprack ([#3990](https://github.com/Opentrons/opentrons/issues/3990)) ([9982ceb](https://github.com/Opentrons/opentrons/commit/9982ceb))


### Features

* **protocol-designer:** allow user to upload custom labware ([#3863](https://github.com/Opentrons/opentrons/issues/3863)) ([2dfe404](https://github.com/Opentrons/opentrons/commit/2dfe404))
* **shared-data:** add 24-well NEST tube racks ([#3916](https://github.com/Opentrons/opentrons/issues/3916)) ([eaa30dc](https://github.com/Opentrons/opentrons/commit/eaa30dc))
* **shared-data:** add NEST 96 PCR well plate 100 uL ([#3827](https://github.com/Opentrons/opentrons/issues/3827)) ([2a9a986](https://github.com/Opentrons/opentrons/commit/2a9a986))
* **shared-data:** add NEST 96 wellplate 200 uL Flat ([#3862](https://github.com/Opentrons/opentrons/issues/3862)) ([39835e9](https://github.com/Opentrons/opentrons/commit/39835e9))
* **shared-data:** add NEST conical tuberacks ([#3906](https://github.com/Opentrons/opentrons/issues/3906)) ([a39c3e7](https://github.com/Opentrons/opentrons/commit/a39c3e7))





## [3.11.4](https://github.com/Opentrons/opentrons/compare/v3.11.3...v3.11.4) (2019-08-29)

**Note:** Version bump only for package @opentrons/shared-data





## [3.11.3](https://github.com/Opentrons/opentrons/compare/v3.11.2...v3.11.3) (2019-08-28)

**Note:** Version bump only for package @opentrons/shared-data





## [3.11.2](https://github.com/Opentrons/opentrons/compare/v3.11.1...v3.11.2) (2019-08-21)

**Note:** Version bump only for package @opentrons/shared-data





## [3.11.1](https://github.com/Opentrons/opentrons/compare/v3.11.0...v3.11.1) (2019-08-21)

**Note:** Version bump only for package @opentrons/shared-data





# [3.11.0](https://github.com/Opentrons/opentrons/compare/v3.10.3...v3.11.0) (2019-08-21)


### Bug Fixes

* **shared-data:** fix "strict" arg for labware creation ([#3874](https://github.com/Opentrons/opentrons/issues/3874)) ([bd604e2](https://github.com/Opentrons/opentrons/commit/bd604e2))


### Features

* **app:** display TC on Deck Map ([#3786](https://github.com/Opentrons/opentrons/issues/3786)) ([272a6ad](https://github.com/Opentrons/opentrons/commit/272a6ad)), closes [#3553](https://github.com/Opentrons/opentrons/issues/3553) [#3064](https://github.com/Opentrons/opentrons/issues/3064)





<a name="3.10.3"></a>
## [3.10.3](https://github.com/Opentrons/opentrons/compare/v3.10.2...v3.10.3) (2019-07-26)

**Note:** Version bump only for package @opentrons/shared-data




<a name="3.10.2"></a>
## [3.10.2](https://github.com/Opentrons/opentrons/compare/v3.10.0...v3.10.2) (2019-07-25)


### Features

* **api:** Make blow out flow rate settable ([#3735](https://github.com/Opentrons/opentrons/issues/3735)) ([e12b4fd](https://github.com/Opentrons/opentrons/commit/e12b4fd)), closes [#3733](https://github.com/Opentrons/opentrons/issues/3733)
* **app:** add GEN2 images to change pipette ([#3734](https://github.com/Opentrons/opentrons/issues/3734)) ([1016c16](https://github.com/Opentrons/opentrons/commit/1016c16)), closes [#3630](https://github.com/Opentrons/opentrons/issues/3630)
* **shared-data:** add displayCategory to pipetteNameSpecs and schema ([#3731](https://github.com/Opentrons/opentrons/issues/3731)) ([3b39dea](https://github.com/Opentrons/opentrons/commit/3b39dea))
* **shared-data:** labwareV2: add filter tip racks ([#3777](https://github.com/Opentrons/opentrons/issues/3777)) ([0dd5285](https://github.com/Opentrons/opentrons/commit/0dd5285))





<a name="3.10.1"></a>
## [3.10.1](https://github.com/Opentrons/opentrons/compare/v3.10.0...v3.10.1) (2019-07-19)


### Features

* **api:** Make blow out flow rate settable ([#3735](https://github.com/Opentrons/opentrons/issues/3735)) ([e12b4fd](https://github.com/Opentrons/opentrons/commit/e12b4fd)), closes [#3733](https://github.com/Opentrons/opentrons/issues/3733)
* **app:** add GEN2 images to change pipette ([#3734](https://github.com/Opentrons/opentrons/issues/3734)) ([1016c16](https://github.com/Opentrons/opentrons/commit/1016c16)), closes [#3630](https://github.com/Opentrons/opentrons/issues/3630)
* **shared-data:** add displayCategory to pipetteNameSpecs and schema ([#3731](https://github.com/Opentrons/opentrons/issues/3731)) ([3b39dea](https://github.com/Opentrons/opentrons/commit/3b39dea))





<a name="3.10.0"></a>
# [3.10.0](https://github.com/Opentrons/opentrons/compare/v3.9.0...v3.10.0) (2019-07-15)


### Bug Fixes

* **api:** Fix gen2 model offsets ([#3614](https://github.com/Opentrons/opentrons/issues/3614)) ([dd1680a](https://github.com/Opentrons/opentrons/commit/dd1680a))
* **labware:** Fix generator well y calculation, update docs/schema ([#3697](https://github.com/Opentrons/opentrons/issues/3697)) ([31a2963](https://github.com/Opentrons/opentrons/commit/31a2963)), closes [#3602](https://github.com/Opentrons/opentrons/issues/3602)
* **shared_data:** Change deep well name, modify tipracks ([#3513](https://github.com/Opentrons/opentrons/issues/3513)) ([9c883d5](https://github.com/Opentrons/opentrons/commit/9c883d5))
* **shared_data:** Fix module path in shared data ([#3556](https://github.com/Opentrons/opentrons/issues/3556)) ([4742458](https://github.com/Opentrons/opentrons/commit/4742458))
* **shared-data:** patch some v2 labware from drawings ([#3623](https://github.com/Opentrons/opentrons/issues/3623)) ([84ecef1](https://github.com/Opentrons/opentrons/commit/84ecef1)), closes [#3618](https://github.com/Opentrons/opentrons/issues/3618)
* **shared-data:** patch v2 opentrons 15 and 50 mL tube racks ([#3712](https://github.com/Opentrons/opentrons/issues/3712)) ([66f1200](https://github.com/Opentrons/opentrons/commit/66f1200))


### Features

* **api:** Add a quirk for return tip height ([#3687](https://github.com/Opentrons/opentrons/issues/3687)) ([3a89b69](https://github.com/Opentrons/opentrons/commit/3a89b69))
* **api:** Add Gen2 multichannel pipette api support ([#3691](https://github.com/Opentrons/opentrons/issues/3691)) ([d1ae1ed](https://github.com/Opentrons/opentrons/commit/d1ae1ed))
* **api:** Add P50Sv1.5 ([#3689](https://github.com/Opentrons/opentrons/issues/3689)) ([6b42e6c](https://github.com/Opentrons/opentrons/commit/6b42e6c)), closes [#3680](https://github.com/Opentrons/opentrons/issues/3680)
* **api:** reference calibration data via hash of labware def ([#3498](https://github.com/Opentrons/opentrons/issues/3498)) ([0475586](https://github.com/Opentrons/opentrons/commit/0475586)), closes [#3493](https://github.com/Opentrons/opentrons/issues/3493)
* **api:** save labware under namespace/load_name/version ([#3487](https://github.com/Opentrons/opentrons/issues/3487)) ([400d6e6](https://github.com/Opentrons/opentrons/commit/400d6e6)), closes [#3474](https://github.com/Opentrons/opentrons/issues/3474)
* **app:** Get protocolDisplayData based on protocol schema ([#3531](https://github.com/Opentrons/opentrons/issues/3531)) ([ec69d84](https://github.com/Opentrons/opentrons/commit/ec69d84)), closes [#3494](https://github.com/Opentrons/opentrons/issues/3494)
* **labware:** update labware mapping ([#3636](https://github.com/Opentrons/opentrons/issues/3636)) ([a1e6005](https://github.com/Opentrons/opentrons/commit/a1e6005)), closes [#3605](https://github.com/Opentrons/opentrons/issues/3605)
* **labware:** zero out cornerOffsetFromSlot from all current v2 labware defs ([#3642](https://github.com/Opentrons/opentrons/issues/3642)) ([9b91298](https://github.com/Opentrons/opentrons/commit/9b91298))
* **labware-library:** show only the single latest version of a def ([#3552](https://github.com/Opentrons/opentrons/issues/3552)) ([f901a30](https://github.com/Opentrons/opentrons/commit/f901a30)), closes [#3551](https://github.com/Opentrons/opentrons/issues/3551)
* **protocol-designer:** migrate PD files to 3.0.0 ([#3606](https://github.com/Opentrons/opentrons/issues/3606)) ([10363ca](https://github.com/Opentrons/opentrons/commit/10363ca)), closes [#3337](https://github.com/Opentrons/opentrons/issues/3337)
* **protocol-designer:** save v3 protocols ([#3588](https://github.com/Opentrons/opentrons/issues/3588)) ([40f3a9e](https://github.com/Opentrons/opentrons/commit/40f3a9e)), closes [#3336](https://github.com/Opentrons/opentrons/issues/3336) [#3414](https://github.com/Opentrons/opentrons/issues/3414)
* **protocol-designer:** use labware def URIs ([#3526](https://github.com/Opentrons/opentrons/issues/3526)) ([6077eb8](https://github.com/Opentrons/opentrons/commit/6077eb8)), closes [#3455](https://github.com/Opentrons/opentrons/issues/3455)
* **protocol-designer:** use RobotWorkSpace for deck map ([#3479](https://github.com/Opentrons/opentrons/issues/3479)) ([9aa4eb6](https://github.com/Opentrons/opentrons/commit/9aa4eb6)), closes [#3327](https://github.com/Opentrons/opentrons/issues/3327)
* **shared-data:** add 1-well troughs and 96-well deep well plate ([#3570](https://github.com/Opentrons/opentrons/issues/3570)) ([f495ea1](https://github.com/Opentrons/opentrons/commit/f495ea1))
* **shared-data:** Add Corning 96 flat labware def ([#3625](https://github.com/Opentrons/opentrons/issues/3625)) ([af9e561](https://github.com/Opentrons/opentrons/commit/af9e561)), closes [#3619](https://github.com/Opentrons/opentrons/issues/3619)
* **shared-data:** display specific v2 labware as "retired" ([#3627](https://github.com/Opentrons/opentrons/issues/3627)) ([3fb5812](https://github.com/Opentrons/opentrons/commit/3fb5812))
* **shared-data:** make flow def for json protocol v3 ([#3571](https://github.com/Opentrons/opentrons/issues/3571)) ([9144193](https://github.com/Opentrons/opentrons/commit/9144193))
* **shared-data:** remove otId from all v2 labware and dependencies ([#3549](https://github.com/Opentrons/opentrons/issues/3549)) ([1766cb1](https://github.com/Opentrons/opentrons/commit/1766cb1)), closes [#3471](https://github.com/Opentrons/opentrons/issues/3471)





<a name="3.9.0"></a>
# [3.9.0](https://github.com/Opentrons/opentrons/compare/v3.8.3...v3.9.0) (2019-05-29)


### Features

* **api:** add pipette plus constructors ([#3407](https://github.com/Opentrons/opentrons/issues/3407)) ([f4feee9](https://github.com/Opentrons/opentrons/commit/f4feee9))
* **api:** Add pipette v2.0 config ([#3394](https://github.com/Opentrons/opentrons/issues/3394)) ([f7739b9](https://github.com/Opentrons/opentrons/commit/f7739b9))
* **api:** Enable Double Drop Quirk ([#3485](https://github.com/Opentrons/opentrons/issues/3485)) ([e864150](https://github.com/Opentrons/opentrons/commit/e864150))
* **api:** Make pipette quirks configurable ([#3463](https://github.com/Opentrons/opentrons/issues/3463)) ([3513794](https://github.com/Opentrons/opentrons/commit/3513794))
* **protocol-designer:** make "labware views" use new v2 labware components ([#3448](https://github.com/Opentrons/opentrons/issues/3448)) ([ec6598b](https://github.com/Opentrons/opentrons/commit/ec6598b))
* **repo:** change v2 labware len/width fields ([#3410](https://github.com/Opentrons/opentrons/issues/3410)) ([0ef0bd5](https://github.com/Opentrons/opentrons/commit/0ef0bd5))
* **shared-data:** add layers to deck schema and definitions ([#3385](https://github.com/Opentrons/opentrons/issues/3385)) ([d84cc35](https://github.com/Opentrons/opentrons/commit/d84cc35)), closes [#3325](https://github.com/Opentrons/opentrons/issues/3325)
* **shared-data:** add version, schemaVersion, and namespace keys to v2 labware ([#3469](https://github.com/Opentrons/opentrons/issues/3469)) ([da03025](https://github.com/Opentrons/opentrons/commit/da03025)), closes [#3454](https://github.com/Opentrons/opentrons/issues/3454)
* **shared-data:** deck component from physical data ([#3415](https://github.com/Opentrons/opentrons/issues/3415)) ([ddf9e78](https://github.com/Opentrons/opentrons/commit/ddf9e78)), closes [#3326](https://github.com/Opentrons/opentrons/issues/3326)


<a name="3.8.3"></a>
## [3.8.3](https://github.com/Opentrons/opentrons/compare/v3.8.2...v3.8.3) (2019-04-30)


### Features

* **api:** Add new 10ul tiprack ([#3393](https://github.com/Opentrons/opentrons/issues/3393)) ([a7c15cc](https://github.com/Opentrons/opentrons/commit/a7c15cc))



<a name="3.8.2"></a>
## [3.8.2](https://github.com/Opentrons/opentrons/compare/v3.8.1...v3.8.2) (2019-04-23)


### Bug Fixes

* **labware-library:** Take cornerOffsetFromSlot into account with render ([#3297](https://github.com/Opentrons/opentrons/issues/3297)) ([04a1ab8](https://github.com/Opentrons/opentrons/commit/04a1ab8))
* **shared-data:** fix v2 labware definition ([#3289](https://github.com/Opentrons/opentrons/issues/3289)) ([e652fb7](https://github.com/Opentrons/opentrons/commit/e652fb7)), closes [#3271](https://github.com/Opentrons/opentrons/issues/3271)


### Features

* **api:** Add Geometry Logic For Thermocycler Configurations ([#3266](https://github.com/Opentrons/opentrons/issues/3266)) ([4d8e463](https://github.com/Opentrons/opentrons/commit/4d8e463))
* **api:** add P10M 1.5 config data ([#3365](https://github.com/Opentrons/opentrons/issues/3365)) ([1332f63](https://github.com/Opentrons/opentrons/commit/1332f63))
* **api:** define & execute v3 json protocols ([#3312](https://github.com/Opentrons/opentrons/issues/3312)) ([988407d](https://github.com/Opentrons/opentrons/commit/988407d)), closes [#3110](https://github.com/Opentrons/opentrons/issues/3110)
* **api:** Set P10M1.5 pick up increment to 3mm ([#3374](https://github.com/Opentrons/opentrons/issues/3374)) ([f5b63d0](https://github.com/Opentrons/opentrons/commit/f5b63d0))
* **api:** validate JSON protocols before executing ([#3318](https://github.com/Opentrons/opentrons/issues/3318)) ([9c15f7d](https://github.com/Opentrons/opentrons/commit/9c15f7d)), closes [#3250](https://github.com/Opentrons/opentrons/issues/3250)
* **shared-data:** update P300M 1.5 pick up current to 0.9 A ([#3355](https://github.com/Opentrons/opentrons/issues/3355)) ([a2d9024](https://github.com/Opentrons/opentrons/commit/a2d9024))





<a name="3.8.1"></a>
## [3.8.1](https://github.com/Opentrons/opentrons/compare/v3.8.0...v3.8.1) (2019-03-29)


### Bug Fixes

* **api,shared-data:** Lowercase labware names and camelCase categories ([#3234](https://github.com/Opentrons/opentrons/issues/3234)) ([55e332e](https://github.com/Opentrons/opentrons/commit/55e332e)), closes [#3231](https://github.com/Opentrons/opentrons/issues/3231)
* **shared-data:** Ensure all volumes are µL; remove displayLengthUnits ([#3262](https://github.com/Opentrons/opentrons/issues/3262)) ([031f2b9](https://github.com/Opentrons/opentrons/commit/031f2b9)), closes [#3240](https://github.com/Opentrons/opentrons/issues/3240)
* **shared-data:** fix case of 'brand' text ([#3258](https://github.com/Opentrons/opentrons/issues/3258)) ([3dbe35a](https://github.com/Opentrons/opentrons/commit/3dbe35a))


### Features

* **api:** Add more pick up tip config elements to pipette config ([#3237](https://github.com/Opentrons/opentrons/issues/3237)) ([f69da42](https://github.com/Opentrons/opentrons/commit/f69da42))
* **api:** Add support for (p300m,p50m,p10s,p1000s)v1.5 ([#3265](https://github.com/Opentrons/opentrons/issues/3265)) ([9dfc127](https://github.com/Opentrons/opentrons/commit/9dfc127))
* **api:** Add support for p300s v1.5 ([#3276](https://github.com/Opentrons/opentrons/issues/3276)) ([e4ca4ff](https://github.com/Opentrons/opentrons/commit/e4ca4ff))
* **api:** move-to-slot JSON protocol command ([#3242](https://github.com/Opentrons/opentrons/issues/3242)) ([cef5123](https://github.com/Opentrons/opentrons/commit/cef5123))





<a name="3.8.0"></a>
# [3.8.0](https://github.com/Opentrons/opentrons/compare/v3.7.0...v3.8.0) (2019-03-19)


### Bug Fixes

* **api:** Fix mistakenly-changed pick up current for p10s1.4 ([#3155](https://github.com/Opentrons/opentrons/issues/3155)) ([7474752](https://github.com/Opentrons/opentrons/commit/7474752))
* **shared-data:** fix y axis svg value for fixed trash ([#3151](https://github.com/Opentrons/opentrons/issues/3151)) ([248f3ec](https://github.com/Opentrons/opentrons/commit/248f3ec))


### Features

* **api:** add pipette config endpoint ([#3128](https://github.com/Opentrons/opentrons/issues/3128)) ([b6b958b](https://github.com/Opentrons/opentrons/commit/b6b958b))





<a name="3.7.0"></a>
# [3.7.0](https://github.com/Opentrons/opentrons/compare/v3.6.5...v3.7.0) (2019-02-19)


### Bug Fixes

* **protocol-designer:** fix bug where 'default-values' shape did not conform to JSON schema ([#3032](https://github.com/Opentrons/opentrons/issues/3032)) ([6c86496](https://github.com/Opentrons/opentrons/commit/6c86496))
* **shared-data:** add tests to ensure filename matches name/loadName ([#2849](https://github.com/Opentrons/opentrons/issues/2849)) ([e821079](https://github.com/Opentrons/opentrons/commit/e821079))
* **shared-data:** fix irregular labware generator ([#2855](https://github.com/Opentrons/opentrons/issues/2855)) ([f405c8e](https://github.com/Opentrons/opentrons/commit/f405c8e))


### Features

* **api:** Add ability to use papi2 in protocol ([#2803](https://github.com/Opentrons/opentrons/issues/2803)) ([6bbb83c](https://github.com/Opentrons/opentrons/commit/6bbb83c))
* **api:** Add calibrate labware and tip probe with new protocol API ([#2846](https://github.com/Opentrons/opentrons/issues/2846)) ([3264cff](https://github.com/Opentrons/opentrons/commit/3264cff)), closes [#2719](https://github.com/Opentrons/opentrons/issues/2719)
* **api:** Add json protocol execution to new protocol API ([#2854](https://github.com/Opentrons/opentrons/issues/2854)) ([48bbcb1](https://github.com/Opentrons/opentrons/commit/48bbcb1)), closes [#2248](https://github.com/Opentrons/opentrons/issues/2248)
* **api:** Add skeleton of Thermocycler API class ([#3015](https://github.com/Opentrons/opentrons/issues/3015)) ([b42f318](https://github.com/Opentrons/opentrons/commit/b42f318)), closes [#2992](https://github.com/Opentrons/opentrons/issues/2992)
* **api:** api2: Move multichannel center for certain labwares ([#2900](https://github.com/Opentrons/opentrons/issues/2900)) ([dfb60a5](https://github.com/Opentrons/opentrons/commit/dfb60a5)), closes [#2892](https://github.com/Opentrons/opentrons/issues/2892)
* **api:** decrease plunger acceleration and add drop tip speed to config ([#2904](https://github.com/Opentrons/opentrons/issues/2904)) ([dc64b0d](https://github.com/Opentrons/opentrons/commit/dc64b0d))
* **api:** pipette config plunger position ([#2999](https://github.com/Opentrons/opentrons/issues/2999)) ([cbd559a](https://github.com/Opentrons/opentrons/commit/cbd559a))


### Performance Improvements

* **api:** New aspiration functions for all pipettes ([#3014](https://github.com/Opentrons/opentrons/issues/3014)) ([ae850ce](https://github.com/Opentrons/opentrons/commit/ae850ce)), closes [#3012](https://github.com/Opentrons/opentrons/issues/3012)





<a name="3.6.5"></a>
## [3.6.5](https://github.com/Opentrons/opentrons/compare/v3.6.4...v3.6.5) (2018-12-18)

**Note:** Version bump only for package @opentrons/shared-data





<a name="3.6.4"></a>
## [3.6.4](https://github.com/Opentrons/opentrons/compare/v3.6.3...v3.6.4) (2018-12-17)


### Performance Improvements

* **api:** Update P1000S aspirate function ([#2830](https://github.com/Opentrons/opentrons/issues/2830)) ([ca65283](https://github.com/Opentrons/opentrons/commit/ca65283))





<a name="3.6.3"></a>
## [3.6.3](https://github.com/Opentrons/opentrons/compare/v3.6.2...v3.6.3) (2018-12-13)


### Bug Fixes

* **api:** raise p300s droptip pose by 1mm to increase QC yield ([#2808](https://github.com/Opentrons/opentrons/issues/2808)) ([40759b2](https://github.com/Opentrons/opentrons/commit/40759b2))





<a name="3.6.2"></a>
## [3.6.2](https://github.com/Opentrons/opentrons/compare/v3.6.0...v3.6.2) (2018-12-11)


### Features

* **api:** p10 behavior feature flag ([#2794](https://github.com/Opentrons/opentrons/issues/2794)) ([c468b06](https://github.com/Opentrons/opentrons/commit/c468b06)), closes [#2792](https://github.com/Opentrons/opentrons/issues/2792)
* **shared-data:** Add more new labware definitions to shared-data ([#2703](https://github.com/Opentrons/opentrons/issues/2703)) ([9737196](https://github.com/Opentrons/opentrons/commit/9737196))





<a name="3.6.1"></a>
## [3.6.1](https://github.com/Opentrons/opentrons/compare/v3.6.0...v3.6.1) (2018-12-05)

**Note:** Version bump only for package @opentrons/shared-data





<a name="3.6.0"></a>
# [3.6.0](https://github.com/Opentrons/opentrons/compare/v3.6.0-beta.1...v3.6.0) (2018-11-29)


### Bug Fixes

* **shared-data:** fix total-liquid-volume of opentrons-tuberack-50ml ([#2744](https://github.com/Opentrons/opentrons/issues/2744)) ([aef8cc8](https://github.com/Opentrons/opentrons/commit/aef8cc8)), closes [#2743](https://github.com/Opentrons/opentrons/issues/2743)





<a name="3.6.0-beta.1"></a>
# [3.6.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.6.0-beta.0...v3.6.0-beta.1) (2018-11-27)


### Bug Fixes

* **api:** re-position p1000 droptip/blowout positions ([#2681](https://github.com/Opentrons/opentrons/issues/2681)) ([f0cf01b](https://github.com/Opentrons/opentrons/commit/f0cf01b))


### Features

* **api:** Add 1.5ml tuberack to old labware definition section ([#2679](https://github.com/Opentrons/opentrons/issues/2679)) ([2739038](https://github.com/Opentrons/opentrons/commit/2739038))
* **api:** Adds pipette models v1.4 to robot config ([#2689](https://github.com/Opentrons/opentrons/issues/2689)) ([fd9c38a](https://github.com/Opentrons/opentrons/commit/fd9c38a))





<a name="3.6.0-beta.0"></a>
# [3.6.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.5.1...v3.6.0-beta.0) (2018-11-13)


### Features

* **api:** support offset in json protocol touch-tip command ([#2566](https://github.com/Opentrons/opentrons/issues/2566)) ([d54ee84](https://github.com/Opentrons/opentrons/commit/d54ee84))
* **shared-data:** Add generator function for irregular labware ([#2610](https://github.com/Opentrons/opentrons/issues/2610)) ([ad568c1](https://github.com/Opentrons/opentrons/commit/ad568c1)), closes [#2275](https://github.com/Opentrons/opentrons/issues/2275)
* **shared-data:** support unversioned pipettes in JSON protocols ([#2605](https://github.com/Opentrons/opentrons/issues/2605)) ([9e84ff6](https://github.com/Opentrons/opentrons/commit/9e84ff6))





<a name="3.5.1"></a>
# [3.5.1](https://github.com/Opentrons/opentrons/compare/v3.5.0...v3.5.1) (2018-10-26)


**Note:** Version bump only for package @opentrons/shared-data




<a name="3.5.0"></a>
# [3.5.0](https://github.com/Opentrons/opentrons/compare/v3.5.0-beta.1...v3.5.0) (2018-10-25)


### Bug Fixes

* **shared-data:** Fix corner offset from slot logic; add in container offset to well coordinates ([#2519](https://github.com/Opentrons/opentrons/issues/2519)) ([c79684b](https://github.com/Opentrons/opentrons/commit/c79684b))


### Features

* **api:** Add error checking on generated labware def ([#2476](https://github.com/Opentrons/opentrons/issues/2476)) ([242ffe4](https://github.com/Opentrons/opentrons/commit/242ffe4))





<a name="3.5.0-beta.1"></a>
# [3.5.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.5.0-beta.0...v3.5.0-beta.1) (2018-10-16)


### Features

* **api:** Add labware load to protocol API ([#2472](https://github.com/Opentrons/opentrons/issues/2472)) ([bae6ef6](https://github.com/Opentrons/opentrons/commit/bae6ef6)), closes [#2240](https://github.com/Opentrons/opentrons/issues/2240)
* **api:** Add newly formatted labware defs and update labware schema ([#2457](https://github.com/Opentrons/opentrons/issues/2457)) ([690c0f2](https://github.com/Opentrons/opentrons/commit/690c0f2))
* **api:** Store pipette function params as data ([#2466](https://github.com/Opentrons/opentrons/issues/2466)) ([4e557dd](https://github.com/Opentrons/opentrons/commit/4e557dd))





<a name="3.5.0-beta.0"></a>
# [3.5.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.4.0...v3.5.0-beta.0) (2018-10-11)


### Features

* **shared-data:** Add generator function to create regular labware defs ([#2380](https://github.com/Opentrons/opentrons/issues/2380)) ([bc81574](https://github.com/Opentrons/opentrons/commit/bc81574))





<a name="3.4.0"></a>
# [3.4.0](https://github.com/Opentrons/opentrons/compare/v3.4.0-beta.0...v3.4.0) (2018-09-21)


### Bug Fixes

* **api:** Update the aluminum block definitions to match drawings ([#2342](https://github.com/Opentrons/opentrons/issues/2342)) ([4c1e4c2](https://github.com/Opentrons/opentrons/commit/4c1e4c2)), closes [#2292](https://github.com/Opentrons/opentrons/issues/2292)
* **protocol-designer:** fix bug with well access for rect wells ([#2296](https://github.com/Opentrons/opentrons/issues/2296)) ([309a8bf](https://github.com/Opentrons/opentrons/commit/309a8bf)), closes [#2081](https://github.com/Opentrons/opentrons/issues/2081)


### Features

* **protocol-designer:** modify well selection instructional text ([#2263](https://github.com/Opentrons/opentrons/issues/2263)) ([9ec91a4](https://github.com/Opentrons/opentrons/commit/9ec91a4)), closes [#2204](https://github.com/Opentrons/opentrons/issues/2204)





<a name="3.4.0-beta.0"></a>
# [3.4.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.3.1-beta.0...v3.4.0-beta.0) (2018-09-14)


### Features

* **api:** Add new container defs to shared data ([#2225](https://github.com/Opentrons/opentrons/issues/2225)) ([20e2751](https://github.com/Opentrons/opentrons/commit/20e2751))
* **api:** Added min and max volume keywords to pipette constructors ([#2084](https://github.com/Opentrons/opentrons/issues/2084)) ([f68da5a](https://github.com/Opentrons/opentrons/commit/f68da5a)), closes [#2075](https://github.com/Opentrons/opentrons/issues/2075)





<a name="3.3.1-beta.0"></a>
## [3.3.1-beta.0](https://github.com/Opentrons/opentrons/compare/v3.3.0...v3.3.1-beta.0) (2018-09-10)


### Bug Fixes

* **shared-data:** fix tube-rack-15_50ml labware def ([#2063](https://github.com/Opentrons/opentrons/issues/2063)) ([b32df5e](https://github.com/Opentrons/opentrons/commit/b32df5e))


### Features

* **api:** support flow rate (uL/sec) in JSON protocols ([#2123](https://github.com/Opentrons/opentrons/issues/2123)) ([b0f944e](https://github.com/Opentrons/opentrons/commit/b0f944e))
* **protocol-designer:** support mm from bottom offset in JSON protocols ([#2180](https://github.com/Opentrons/opentrons/issues/2180)) ([db22ae8](https://github.com/Opentrons/opentrons/commit/db22ae8)), closes [#2157](https://github.com/Opentrons/opentrons/issues/2157)





<a name="3.3.0"></a>
# [3.3.0](https://github.com/Opentrons/opentrons/compare/v3.3.0-beta.1...v3.3.0) (2018-08-22)


### Features

* **api:** Consolidate pipette configuration ([#2055](https://github.com/Opentrons/opentrons/issues/2055)) ([ee39ea3](https://github.com/Opentrons/opentrons/commit/ee39ea3))





<a name="3.3.0-beta.1"></a>
# [3.3.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.3.0-beta.0...v3.3.0-beta.1) (2018-08-02)

**Note:** Version bump only for package @opentrons/shared-data





<a name="3.3.0-beta.0"></a>
# [3.3.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.3...v3.3.0-beta.0) (2018-07-12)


### Features

* **components:** use labware defs from shared-data for Deck component ([26493f4](https://github.com/Opentrons/opentrons/commit/26493f4))
* **protocol-designer:** add form level validation errors and warnings ([#1823](https://github.com/Opentrons/opentrons/issues/1823)) ([9cdd66f](https://github.com/Opentrons/opentrons/commit/9cdd66f)), closes [#1090](https://github.com/Opentrons/opentrons/issues/1090) [#1595](https://github.com/Opentrons/opentrons/issues/1595) [#1592](https://github.com/Opentrons/opentrons/issues/1592) [#1594](https://github.com/Opentrons/opentrons/issues/1594)
* **shared-data:** annotate labware with format and other metadata ([9d4082d](https://github.com/Opentrons/opentrons/commit/9d4082d))





<a name="3.2.0"></a>
# [3.2.0](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.3...v3.2.0) (2018-07-10)

**Note:** Version bump only for package @opentrons/shared-data





<a name="3.2.0-beta.3"></a>
# [3.2.0-beta.3](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.2...v3.2.0-beta.3) (2018-06-25)

**Note:** Version bump only for package @opentrons/shared-data





<a name="3.2.0-beta.2"></a>
# [3.2.0-beta.2](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.1...v3.2.0-beta.2) (2018-06-22)

**Note:** Version bump only for package @opentrons/shared-data





<a name="3.2.0-beta.1"></a>
# [3.2.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.0...v3.2.0-beta.1) (2018-06-19)

**Note:** Version bump only for package @opentrons/shared-data





<a name="3.2.0-beta.0"></a>
# [3.2.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.1.2...v3.2.0-beta.0) (2018-06-13)

**Note:** Version bump only for package @opentrons/shared-data
