# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.0.0](https://github.com/Opentrons/opentrons/compare/v5.0.2...v6.0.0) (2022-07-14)


### Bug Fixes

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
* **app-shell:** ensure Windows build can analyze protocols ([#10347](https://github.com/Opentrons/opentrons/issues/10347)) ([66a96bc](https://github.com/Opentrons/opentrons/commit/66a96bc9e76911a3a63b9dae5730607c5ee4cebc)), closes [#10378](https://github.com/Opentrons/opentrons/issues/10378)
* **engine:** disallow setup commands while run is paused ([#10675](https://github.com/Opentrons/opentrons/issues/10675)) ([bd3a4e1](https://github.com/Opentrons/opentrons/commit/bd3a4e146ace8157687cf6913ec3794bae0f4411))
* **engine:** do not allow completed timestamp to change once set ([#11055](https://github.com/Opentrons/opentrons/issues/11055)) ([b413d40](https://github.com/Opentrons/opentrons/commit/b413d40312715fceeabe6b873640d6c892a65501))
* **engine:** include modules w/o labware in motion planning ([#10902](https://github.com/Opentrons/opentrons/issues/10902)) ([0b0dfae](https://github.com/Opentrons/opentrons/commit/0b0dfae27211607ace9465b63e1fe0024a855fee))
* **hardware,api:** can network_probe functionality ([#9437](https://github.com/Opentrons/opentrons/issues/9437)) ([2b68474](https://github.com/Opentrons/opentrons/commit/2b684743fd70f8b44b7820bfa6d2b649ffbb239b))
* **robot-server:** allow live commands if current run is terminal ([#10879](https://github.com/Opentrons/opentrons/issues/10879)) ([0ee0c72](https://github.com/Opentrons/opentrons/commit/0ee0c728a1517009336c2c6e2135eaaf0dab2150))
* **robot-server:** calculate magnetic module gen 1 height  ([#10724](https://github.com/Opentrons/opentrons/issues/10724)) ([c231d1b](https://github.com/Opentrons/opentrons/commit/c231d1b841b40018ad891aeb5a3cb707d34e0ea8)), closes [#9515](https://github.com/Opentrons/opentrons/issues/9515)
* **robot-server:** disallow pause action for non-active run ([#10550](https://github.com/Opentrons/opentrons/issues/10550)) ([5d17c93](https://github.com/Opentrons/opentrons/commit/5d17c937de3e10f71b7665c3796d2dfb9d6bdb55))
* **robot-server, api:** Disallow python protocol upload with unsupported version ([#10780](https://github.com/Opentrons/opentrons/issues/10780)) ([da8d9af](https://github.com/Opentrons/opentrons/commit/da8d9af65d47207251131d413aca284e08612132))


### Features

* **api:** add gripper offset calibration data handling ([#10411](https://github.com/Opentrons/opentrons/issues/10411)) ([4b89491](https://github.com/Opentrons/opentrons/commit/4b894917c5d1d764b14a588bea390c91b86afbf9))
* **api:** add heaterShakerModuleContext and methods to PAPIv2 ([#10426](https://github.com/Opentrons/opentrons/issues/10426)) ([6461ec8](https://github.com/Opentrons/opentrons/commit/6461ec84846151ccc68640cc6a0bbdfb7cf35590))
* **api:** add ProtocolEngine-based analysis CLI ([#9862](https://github.com/Opentrons/opentrons/issues/9862)) ([257b06d](https://github.com/Opentrons/opentrons/commit/257b06d9b82ff6ab0c472bde064f144b023cd4a2))
* **api:** add Thermocycler Gen2 driver ([#9854](https://github.com/Opentrons/opentrons/issues/9854)) ([b12641d](https://github.com/Opentrons/opentrons/commit/b12641dd93c0c8fd24924d1f4d56dcccf055a8dc))
* **api:** Analyze v6 json protocols and translate v6 commands to protocol engine  ([#9772](https://github.com/Opentrons/opentrons/issues/9772)) ([c6bc5d8](https://github.com/Opentrons/opentrons/commit/c6bc5d857ba080dc9ed0392bc42822471f091ddd))
* **api:** home za axis first, and home pipettes in parallel ([#9709](https://github.com/Opentrons/opentrons/issues/9709)) ([9c864ce](https://github.com/Opentrons/opentrons/commit/9c864ce39463adecd61d8b8fdca9cafd887c5624))
* **api:** Integrate acceleration in OT3 hardware control api ([#9432](https://github.com/Opentrons/opentrons/issues/9432)) ([09be15a](https://github.com/Opentrons/opentrons/commit/09be15a7f41a0e9d70646f8ada390d48f954294e))
* **api:** use V3 module definitions as default in PAPI ([#10245](https://github.com/Opentrons/opentrons/issues/10245)) ([85daa65](https://github.com/Opentrons/opentrons/commit/85daa655eac994aa53a0bcbebe4f398f6734499b))
* **api, ot3:** add gripper to get_attached_instruments  ([#10619](https://github.com/Opentrons/opentrons/issues/10619)) ([212dfc5](https://github.com/Opentrons/opentrons/commit/212dfc540f29fe05cc56335560fb22a70e7bf9b5))
* **api, robot-server:** wire up heater shaker live data to modules endpoint ([#9552](https://github.com/Opentrons/opentrons/issues/9552)) ([60c40bb](https://github.com/Opentrons/opentrons/commit/60c40bbf8934c7ccd83d5fb8b36717e5ecb8d806))
* **app:** show live labware offset while jogging during Labware Position Check ([#10264](https://github.com/Opentrons/opentrons/issues/10264)) ([a5df9e0](https://github.com/Opentrons/opentrons/commit/a5df9e0bbaa7b2429b1e06d0243a8886693c45a4)), closes [#9796](https://github.com/Opentrons/opentrons/issues/9796) [#9797](https://github.com/Opentrons/opentrons/issues/9797)
* **engine:** allow blow out command in Protocol API  ([#10623](https://github.com/Opentrons/opentrons/issues/10623)) ([bf4e89d](https://github.com/Opentrons/opentrons/commit/bf4e89dc355f4bbc03430c18c95b2b96f151dd0a))
* **engine:** implement heater-shaker commands ([#9747](https://github.com/Opentrons/opentrons/issues/9747)) ([aaf5dcb](https://github.com/Opentrons/opentrons/commit/aaf5dcb9bee60f8f574cf6855790fa0be07a01cd))
* **engine:** open and close thermocycler lid ([#10760](https://github.com/Opentrons/opentrons/issues/10760)) ([1e82c26](https://github.com/Opentrons/opentrons/commit/1e82c26a8f8aa6d0f4821390109661216a095732))
* **engine:** set flow rate in aspirate, dispense, and blowout ([#10800](https://github.com/Opentrons/opentrons/issues/10800)) ([0e66677](https://github.com/Opentrons/opentrons/commit/0e666777f96dd832b08efba255ef0e28a31641d6))
* **engine:** touch tip PAPIv3 ([#10678](https://github.com/Opentrons/opentrons/issues/10678)) ([25c99df](https://github.com/Opentrons/opentrons/commit/25c99df9e4ac89107af51bfa720e2d3242946f83))
* **hardware:** add ot3 gpio driver, set estop ([#10776](https://github.com/Opentrons/opentrons/issues/10776)) ([b1ad8d2](https://github.com/Opentrons/opentrons/commit/b1ad8d20f4de8c3e39b928c848e34f7466f305ae))
* **hardware:** ot3: add pipette querying ([#9730](https://github.com/Opentrons/opentrons/issues/9730)) ([777e5ee](https://github.com/Opentrons/opentrons/commit/777e5ee924c5813b42536fdca0c7c90ee18c5290))
* **heater-shaker:** add deactivate_heater method ([#9955](https://github.com/Opentrons/opentrons/issues/9955)) ([003727f](https://github.com/Opentrons/opentrons/commit/003727f804569cfccef35f3f541706451a9d7347))
* **ot3:** add home request, test to move group runner ([#9563](https://github.com/Opentrons/opentrons/issues/9563)) ([96ab10a](https://github.com/Opentrons/opentrons/commit/96ab10a17ba381657ad1b919dd8113c2cbea9911))
* **ot3:** set motor current in mA ([#9610](https://github.com/Opentrons/opentrons/issues/9610)) ([b097d88](https://github.com/Opentrons/opentrons/commit/b097d886c92872a1177406022d795ac80d625f66))
* **ot3, api:** Add gripper class  ([#10278](https://github.com/Opentrons/opentrons/issues/10278)) ([0eeba15](https://github.com/Opentrons/opentrons/commit/0eeba1558876a8ae6e44bd81cb4c9ba689aec3e9))
* **papi-v2:** restrict placement of heater-shaker modules ([#10785](https://github.com/Opentrons/opentrons/issues/10785)) ([3c74e30](https://github.com/Opentrons/opentrons/commit/3c74e30e1183844e456c5e9bef7779141a2fa115)), closes [#10316](https://github.com/Opentrons/opentrons/issues/10316)
* **papiv3:** set rail lights ([#9569](https://github.com/Opentrons/opentrons/issues/9569)) ([a900063](https://github.com/Opentrons/opentrons/commit/a9000639d6b6e89af72a0d769a404dfee6d7051c)), closes [#9458](https://github.com/Opentrons/opentrons/issues/9458)
* **protocol-engine:** Implement Magnetic Module engage ([#9599](https://github.com/Opentrons/opentrons/issues/9599)) ([81e4b09](https://github.com/Opentrons/opentrons/commit/81e4b09046979ef5ad89499ca621ae62299d0c10))
* **robot-server:** add modules field to /runs responses ([#10462](https://github.com/Opentrons/opentrons/issues/10462)) ([b4389fb](https://github.com/Opentrons/opentrons/commit/b4389fbe9934193a963671fbce344e50a827db85)), closes [#10432](https://github.com/Opentrons/opentrons/issues/10432)
* **robot-server:** add run completedAt and startedAt timestamps ([#10327](https://github.com/Opentrons/opentrons/issues/10327)) ([93a195d](https://github.com/Opentrons/opentrons/commit/93a195d26a1128a68a91f71514fb122b48f253b4))
* **robot-server:** add runs history removal to reset options ([#10395](https://github.com/Opentrons/opentrons/issues/10395)) ([e9294c3](https://github.com/Opentrons/opentrons/commit/e9294c3592783dcfdbcbc5ed91dcb60d37afe90e))
* **robot-server:** add top-level stateless /commands endpoints ([#9696](https://github.com/Opentrons/opentrons/issues/9696)) ([f7988cb](https://github.com/Opentrons/opentrons/commit/f7988cb93c8b00d01541d5094cf77ea2ce9b74be))
* **robot-server:** add unique IDs to GET /modules response ([#9758](https://github.com/Opentrons/opentrons/issues/9758)) ([8d5e6a1](https://github.com/Opentrons/opentrons/commit/8d5e6a16df96c96a1b719be419b359cfc7f9a357)), closes [#9533](https://github.com/Opentrons/opentrons/issues/9533)
* **robot-server:** allow /commands to receive module commands ([#9776](https://github.com/Opentrons/opentrons/issues/9776)) ([db0a526](https://github.com/Opentrons/opentrons/commit/db0a5268a490b77cd6a00700df55a1de8460b786)), closes [#9617](https://github.com/Opentrons/opentrons/issues/9617)
* **robot-server:** persist previous run results and commands ([#10187](https://github.com/Opentrons/opentrons/issues/10187)) ([87677c6](https://github.com/Opentrons/opentrons/commit/87677c6919cb6257e8ad063b58b3faccea96d7fe)), closes [#8474](https://github.com/Opentrons/opentrons/issues/8474)
* **robot-server:** recognize JSONv6 as a valid main protocol file ([#9686](https://github.com/Opentrons/opentrons/issues/9686)) ([32a5ed0](https://github.com/Opentrons/opentrons/commit/32a5ed00882aa981821f6e14cad720958e4ddc89))
* **robot-server, api:** support running JSONv6 protocols ([#10170](https://github.com/Opentrons/opentrons/issues/10170)) ([9c30653](https://github.com/Opentrons/opentrons/commit/9c306534576847bd7bd6ea0b8454afd4e74ae476)), closes [#9584](https://github.com/Opentrons/opentrons/issues/9584)
* **shared-data:** add H/S to deck definition, bump deck definition schema ([#10417](https://github.com/Opentrons/opentrons/issues/10417)) ([183a1ac](https://github.com/Opentrons/opentrons/commit/183a1acd2db56750148d59a6058345aa32618311))





## [5.0.2](https://github.com/Opentrons/opentrons/compare/v5.0.1...v5.0.2) (2022-03-03)


### Bug Fixes

* **api:** lowercase filename before checking extension in ProtocolReader ([#9609](https://github.com/Opentrons/opentrons/issues/9609)) ([474c448](https://github.com/Opentrons/opentrons/commit/474c44860ac8b29c621b3a704e826688aa57ca59))
* **api, app:** display labware label ([#9587](https://github.com/Opentrons/opentrons/issues/9587)) ([7680d92](https://github.com/Opentrons/opentrons/commit/7680d92d4a966d641e8da558514a153e06946bce)), closes [#9105](https://github.com/Opentrons/opentrons/issues/9105) [#9088](https://github.com/Opentrons/opentrons/issues/9088)
* send custom labware definitions to the server during LPC setup ([#9588](https://github.com/Opentrons/opentrons/issues/9588)) ([7cf3233](https://github.com/Opentrons/opentrons/commit/7cf323370aefb952b0640d04738c64a0f4a2e5c9))





## [5.0.1](https://github.com/Opentrons/opentrons/compare/v5.0.0...v5.0.1) (2022-02-24)

**Note:** Version bump only for package @opentrons/api-server





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
* **engine:** take calibrated tip length into account during tip pickup ([#9246](https://github.com/Opentrons/opentrons/issues/9246)) ([7866767](https://github.com/Opentrons/opentrons/commit/7866767ee6057197edf253f8b31272a734a71afd)), closes [#9220](https://github.com/Opentrons/opentrons/issues/9220)
* **protocol-engine:** move HW API cleanup to engine.finish ([#9233](https://github.com/Opentrons/opentrons/issues/9233)) ([1994405](https://github.com/Opentrons/opentrons/commit/19944058762d889a6ab5b22e7a6ccc16f7367dda))
* **protocol-engine:** Preserve distinction between APIv2 protocols' requested vs. connected modules ([#9364](https://github.com/Opentrons/opentrons/issues/9364)) ([042907b](https://github.com/Opentrons/opentrons/commit/042907b3fa69cf30935dfa381eafa72b2b9f42fe))
* **robot-server:** add current command metadata to /commands response ([#9400](https://github.com/Opentrons/opentrons/issues/9400)) ([7da0420](https://github.com/Opentrons/opentrons/commit/7da0420bd07810095312e07eb22fb2d31ee29215))


### Code Refactoring

* **robot-server:** remove deprecated protocols endpoints and FF ([#9261](https://github.com/Opentrons/opentrons/issues/9261)) ([802d858](https://github.com/Opentrons/opentrons/commit/802d8582dbc09566b8de9eca3672254ef271164b))


### Features

* **api:** remove Calibrate to Bottom from Robot Settings ([#9111](https://github.com/Opentrons/opentrons/issues/9111)) ([06a92ee](https://github.com/Opentrons/opentrons/commit/06a92eecd9fba67c596d91e7c0096b5144b32ab6))
* **api:** Remove legacy LC reset from robot settings ([#9093](https://github.com/Opentrons/opentrons/issues/9093)) ([9b78815](https://github.com/Opentrons/opentrons/commit/9b788154fffc405152f6f5f165a4d646dd47b4b5)), closes [#8283](https://github.com/Opentrons/opentrons/issues/8283)
* **engine:** allow compatible module loads and reloads ([#9273](https://github.com/Opentrons/opentrons/issues/9273)) ([1c7e00d](https://github.com/Opentrons/opentrons/commit/1c7e00d8da77273eca1a8d0bb5e7bed544e3c168))
* **ot3:** introduce independent head l and r motion. ([#8966](https://github.com/Opentrons/opentrons/issues/8966)) ([30cb899](https://github.com/Opentrons/opentrons/commit/30cb899fe1769b996fb0ea6f0bae391c6dbec635))
* **ot3:** ot3 hardware controller move ([#8738](https://github.com/Opentrons/opentrons/issues/8738)) ([883db3a](https://github.com/Opentrons/opentrons/commit/883db3a96ca9c6a48bd4ccee16e221fe03154361)), closes [#8946](https://github.com/Opentrons/opentrons/issues/8946)
* **papi:** add labware.set_offset for jupyter/cli, bump papi to 2.12 ([#9242](https://github.com/Opentrons/opentrons/issues/9242)) ([17d03cd](https://github.com/Opentrons/opentrons/commit/17d03cdfbf1b41be17dd41d6b064f75d2184938a))
* **robot-server:** enable /runs and /protocols endpoints by default ([#8913](https://github.com/Opentrons/opentrons/issues/8913)) ([aa3549f](https://github.com/Opentrons/opentrons/commit/aa3549fad49383243f9ad2ccc291d15e8fd50725)), closes [#8155](https://github.com/Opentrons/opentrons/issues/8155)
* **robot-server,api,app:** When adding a jog command over HTTP, wait for it to complete before returning ([#9410](https://github.com/Opentrons/opentrons/issues/9410)) ([4d811d5](https://github.com/Opentrons/opentrons/commit/4d811d5485754b45795a275424e0b267edc88270))


### Performance Improvements

* **api:** bring back the ThreadManager ([#9199](https://github.com/Opentrons/opentrons/issues/9199)) ([ba931f7](https://github.com/Opentrons/opentrons/commit/ba931f750cf67ce68a6dc9e2ae9ac8682ce43d3a))
* **api:** Do not wait for the event loop to be free when reporting APIv2 commands ([#9238](https://github.com/Opentrons/opentrons/issues/9238)) ([6ab9b10](https://github.com/Opentrons/opentrons/commit/6ab9b10425eec5c63db93abdd3e68a1c33e0a3ac))
* **app, robot-server:** paginate /runs/:run_id/commands response ([#9348](https://github.com/Opentrons/opentrons/issues/9348)) ([b9eb7b4](https://github.com/Opentrons/opentrons/commit/b9eb7b4d98532480705d3c32fd2485508315bea9))
* **protocol-engine:** avoid iterating all commands for every state update ([#9170](https://github.com/Opentrons/opentrons/issues/9170)) ([b12bffc](https://github.com/Opentrons/opentrons/commit/b12bffcee1edaba848c43b4af8c95a7bba367dde)), closes [#9109](https://github.com/Opentrons/opentrons/issues/9109) [#8739](https://github.com/Opentrons/opentrons/issues/8739)


### BREAKING CHANGES

* **robot-server:** This removes endpoints used during the 2021 HTTP protocol upload beta.
Users should transition to the new `/protocols` and `/runs` endpoints, instead.
* **robot-server:** The RPC WebSocket endpoint has been removed. The /protocols endpoints have been
heavily reworked.





# [4.7.0](https://github.com/Opentrons/opentrons/compare/v4.6.2...v4.7.0) (2021-11-18)


### Bug Fixes

* **api:** 4.6.x set max speed fails ([#8437](https://github.com/Opentrons/opentrons/issues/8437)) ([5989af0](https://github.com/Opentrons/opentrons/commit/5989af08e19d78c8cfff65e6bb2bb415ed7e174b)), closes [#8436](https://github.com/Opentrons/opentrons/issues/8436)
* **api:** Improve metadata parse error messages and fix metadata typechecking ([#8378](https://github.com/Opentrons/opentrons/issues/8378)) ([1015b14](https://github.com/Opentrons/opentrons/commit/1015b1459cd5da834f88925ce3f6b5eece4018ef)), closes [#8352](https://github.com/Opentrons/opentrons/issues/8352)
* **api:** thermocycler error handling ([#8439](https://github.com/Opentrons/opentrons/issues/8439)) ([7dcff2f](https://github.com/Opentrons/opentrons/commit/7dcff2f7e0f5427c83738fca14c8d2dde7476740)), closes [#8393](https://github.com/Opentrons/opentrons/issues/8393)
* **api:** lock reads to pipettes in the hardware controller ([d78939c] https://github.com/Opentrons/opentrons/commit/d78939c6a791b8e260f598bee916d5fb8799a7d3), closes [#8576](https://github.com/Opentrons/opentrons/issues/8576)
* **robot-server:** avoid LabwareDefinition type in cal models ([#8698](https://github.com/Opentrons/opentrons/issues/8698)) ([c3bf7ab](https://github.com/Opentrons/opentrons/commit/c3bf7ab51074e8b5e160ce5755be6e80296f1963)), closes [#8654](https://github.com/Opentrons/opentrons/issues/8654)
* **robot-server:** ensure background tasks do not affect requests ([#8362](https://github.com/Opentrons/opentrons/issues/8362)) ([3e4bc2f](https://github.com/Opentrons/opentrons/commit/3e4bc2f504282c51622682001780f35d5f3e5312))


### Features

* **api:** Add hardware control for heater shaker ([#8435](https://github.com/Opentrons/opentrons/issues/8435)) ([1a68d66](https://github.com/Opentrons/opentrons/commit/1a68d66e9638206c2a4700ed0348f3137bc13789))
* **api,robot-server:** upgrade fastapi and pydantic deps ([#8345](https://github.com/Opentrons/opentrons/issues/8345)) ([9cf416a](https://github.com/Opentrons/opentrons/commit/9cf416a498e77b2127a6e3e71298f9368f818d35)), closes [#8134](https://github.com/Opentrons/opentrons/issues/8134)
* **ot3:** OT3Controller backend for hardware controller ([#8492](https://github.com/Opentrons/opentrons/issues/8492)) ([5600948](https://github.com/Opentrons/opentrons/commit/56009482a376b712384441f429c2e0d78192bdbd))







**Note:** Version bump only for package @opentrons/api-server





## [4.6.2](https://github.com/Opentrons/opentrons/compare/v4.6.1...v4.6.2) (2021-09-30)


### Bug Fixes

* **api:** 4.6.x set max speed fails ([#8437](https://github.com/Opentrons/opentrons/issues/8437)) ([cb9a4f0](https://github.com/Opentrons/opentrons/commit/cb9a4f03df857b3e688651be4abd3ff9f9baa586)), closes [#8436](https://github.com/Opentrons/opentrons/issues/8436)





## [4.6.1](https://github.com/Opentrons/opentrons/compare/v4.6.0...v4.6.1) (2021-09-28)

**Note:** Version bump only for package @opentrons/api-server





# [4.6.0](https://github.com/Opentrons/opentrons/compare/v4.5.0...v4.6.0) (2021-09-27)


### Bug Fixes

* **api:** drop tip after cancel ([#8229](https://github.com/Opentrons/opentrons/issues/8229)) ([bb44718](https://github.com/Opentrons/opentrons/commit/bb447184b97f7607604eb79a4cdad942a9366bc1))
* **api:** ensure decorators do not erase ProtocolContext types ([#8323](https://github.com/Opentrons/opentrons/issues/8323)) ([2a8a370](https://github.com/Opentrons/opentrons/commit/2a8a37025e8894230cdeb0376a7bf832b4e9f12f))
* **api:** Make tip pickup error say "pick up tip," not "drop tip" ([#8251](https://github.com/Opentrons/opentrons/issues/8251)) ([430fbeb](https://github.com/Opentrons/opentrons/commit/430fbeb9b59cbbcb8a9288a5afc9445030711b34))
* **api:** wait for poll before awaiting tempdeck temperature ([#8340](https://github.com/Opentrons/opentrons/issues/8340)) ([acb394d](https://github.com/Opentrons/opentrons/commit/acb394d72260f3660df9e2086a8e44e0b349b632))
* **fastsim:** fast sim fails when using InstrumentContext.pair_with function ([#8290](https://github.com/Opentrons/opentrons/issues/8290)) ([02b78de](https://github.com/Opentrons/opentrons/commit/02b78de18ba03bfceafb98374f04ef41431f8d51)), closes [#8222](https://github.com/Opentrons/opentrons/issues/8222)
* **fastsim:** set_defaults for FlowRates in InstrumentContextSimulation ([165dd5d](https://github.com/Opentrons/opentrons/commit/165dd5d45a3fef4a4af9756fbfcc774e674e102c)), closes [#8272](https://github.com/Opentrons/opentrons/issues/8272)
* **simulation:** NoTipAttachedError in fast simulation only ([#8280](https://github.com/Opentrons/opentrons/issues/8280)) ([b7e93f1](https://github.com/Opentrons/opentrons/commit/b7e93f1e2e47a70c61f40432ac60010163d2fb5b)), closes [#8273](https://github.com/Opentrons/opentrons/issues/8273)
* **tempdeck:** make tempdeck waiting functions cancelable ([#8327](https://github.com/Opentrons/opentrons/issues/8327)) ([70b956f](https://github.com/Opentrons/opentrons/commit/70b956f4aa8bb344385787ea07f1d4f5ccef28da))


### Features

* **api:** Add filtering of polling messages to G-Code Parser ([#8198](https://github.com/Opentrons/opentrons/issues/8198)) ([5719c62](https://github.com/Opentrons/opentrons/commit/5719c62bd6daee7e557cfb5c23ef56fe62c65e3c))
* **api:** Add G-Code Parser CI Integration ([#8203](https://github.com/Opentrons/opentrons/issues/8203)) ([0f3f066](https://github.com/Opentrons/opentrons/commit/0f3f066deae94b6e31b2258d1a2f0fd2360c7f19))
* **api:** Add G-Code parsing for Thermocycler ([#8173](https://github.com/Opentrons/opentrons/issues/8173)) ([f162300](https://github.com/Opentrons/opentrons/commit/f162300cab76ae7a77608458af6e66f726864a30))
* **api:** opentrons_simulate gets duration estimation ([#8321](https://github.com/Opentrons/opentrons/issues/8321)) ([5c59fc7](https://github.com/Opentrons/opentrons/commit/5c59fc7fa5e7c2a0b318f64b2aca7149747eb550)), closes [#8279](https://github.com/Opentrons/opentrons/issues/8279) [#8300](https://github.com/Opentrons/opentrons/issues/8300) [#8311](https://github.com/Opentrons/opentrons/issues/8311)
* **protocol-engine:** implement well & labware's well accessor methods ([#8151](https://github.com/Opentrons/opentrons/issues/8151)) ([bff281a](https://github.com/Opentrons/opentrons/commit/bff281a273ae2dce99e770f76b823ec503217d3f))





# [4.5.0](https://github.com/Opentrons/opentrons/compare/v4.4.0...v4.5.0) (2021-08-03)


### Bug Fixes

* **api:** fix module path for jupyter notebook ([#8009](https://github.com/Opentrons/opentrons/issues/8009)) ([f8bdf5c](https://github.com/Opentrons/opentrons/commit/f8bdf5c096c444320e9b70d5f88f6eec38a2dc01))
* **api:** ignore missing aionotify more properly ([#8154](https://github.com/Opentrons/opentrons/issues/8154)) ([bb0e3a0](https://github.com/Opentrons/opentrons/commit/bb0e3a02720b4e7f9c3e0678ea6f8d4d9b5145a4))
* **api:** reduce the severity of retry message from warning to info. ([#8192](https://github.com/Opentrons/opentrons/issues/8192)) ([47bc77a](https://github.com/Opentrons/opentrons/commit/47bc77a1a0b89becf9e43ac2f32b53f2b6efa048))
* **api:** tolerate bad json in calibration defs ([#7962](https://github.com/Opentrons/opentrons/issues/7962)) ([588668a](https://github.com/Opentrons/opentrons/commit/588668a8500297ce52bb36d67a93b14790c4d91b))


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
* **protocol-engine:** Add a command queue worker class ([#7817](https://github.com/Opentrons/opentrons/issues/7817)) ([8bdd223](https://github.com/Opentrons/opentrons/commit/8bdd2236cb09fc497f1884441605117521378478))
* **protocol-engine:** Implement `CommandState.get_next_request()` ([#7936](https://github.com/Opentrons/opentrons/issues/7936)) ([61136a1](https://github.com/Opentrons/opentrons/commit/61136a128795bd6e3ee896e79e06455f782cbf01))
* **protocol-engine:** Support loading pipettes and labware from JSON protocols ([#7950](https://github.com/Opentrons/opentrons/issues/7950)) ([e43c80f](https://github.com/Opentrons/opentrons/commit/e43c80f8f00a0146558345483993bc0c66fdce99))





# [4.4.0](https://github.com/Opentrons/opentrons/compare/v4.3.1...v4.4.0) (2021-06-16)


### Bug Fixes

* **api:** add pause manager to separate pause and delay ([#7773](https://github.com/Opentrons/opentrons/issues/7773)) ([af1a29a](https://github.com/Opentrons/opentrons/commit/af1a29a))
* **api:** Correct some type annotations in `ProtocolContext` ([#7701](https://github.com/Opentrons/opentrons/issues/7701)) ([6f01726](https://github.com/Opentrons/opentrons/commit/6f01726))
* **api:** do not cache removed modules in thread_manager ([#7690](https://github.com/Opentrons/opentrons/issues/7690)) ([ca47a9c](https://github.com/Opentrons/opentrons/commit/ca47a9c)), closes [#5359](https://github.com/Opentrons/opentrons/issues/5359)
* **api:** simulation allows aspirating and dispensing on a tip rack ([#7788](https://github.com/Opentrons/opentrons/issues/7788)) ([1d624d8](https://github.com/Opentrons/opentrons/commit/1d624d8))


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
* **emulator:** allow overriding pipettes used by smoothie emulator ([#7868](https://github.com/Opentrons/opentrons/issues/7868)) ([de05ed1](https://github.com/Opentrons/opentrons/commit/de05ed1))
* **protocol-engine:** add load_pipette method to engine-backed ProtocolContext ([#7676](https://github.com/Opentrons/opentrons/issues/7676)) ([7ca8f76](https://github.com/Opentrons/opentrons/commit/7ca8f76)), closes [#7437](https://github.com/Opentrons/opentrons/issues/7437)
* **protocol-engine:** InstrumentContext implements dispense ([#7640](https://github.com/Opentrons/opentrons/issues/7640)) ([a4a2d11](https://github.com/Opentrons/opentrons/commit/a4a2d11))
* **protocol-engine:** Support `InstrumentContext.aspirate()` ([#7630](https://github.com/Opentrons/opentrons/issues/7630)) ([6e259f2](https://github.com/Opentrons/opentrons/commit/6e259f2))
* **robot-server:** http protocol upload supports custom labware. ([#7694](https://github.com/Opentrons/opentrons/issues/7694)) ([4ad824c](https://github.com/Opentrons/opentrons/commit/4ad824c)), closes [#7148](https://github.com/Opentrons/opentrons/issues/7148)





## [4.3.1](https://github.com/Opentrons/opentrons/compare/v4.3.0...v4.3.1) (2021-05-10)

### Bug Fixes

* **api:** do not cache tip lengths because it breaks calibration ([#7778](https://github.com/Opentrons/opentrons/issues/7778)) ([d43fdd7](https://github.com/Opentrons/opentrons/commit/d43fdd7))





# [4.3.0](https://github.com/Opentrons/opentrons/compare/v4.2.1...v4.3.0) (2021-05-06)

### Bug Fixes

* **api:** ensure loaded modules is returned in order ([#7704](https://github.com/Opentrons/opentrons/issues/7704)) ([66a775c](https://github.com/Opentrons/opentrons/commit/66a775c))
* **api:** return a simulated module for magnetic modules if they are not compatible ([#7654](https://github.com/Opentrons/opentrons/issues/7654)) ([f6fcb77](https://github.com/Opentrons/opentrons/commit/f6fcb77))
* **api:**  can't find pipettes ([#7639](https://github.com/Opentrons/opentrons/issues/7639)) ([4e5176c](https://github.com/Opentrons/opentrons/commit/4e5176c))
* **api:** api location cache fix ([#7609](https://github.com/Opentrons/opentrons/issues/7609)) ([df68ea2](https://github.com/Opentrons/opentrons/commit/df68ea2)), closes [#7156](https://github.com/Opentrons/opentrons/issues/7156)
* **api:** check the symlink of the virtual port to map to the physical port ([#7524](https://github.com/Opentrons/opentrons/issues/7524)) ([32b9de5](https://github.com/Opentrons/opentrons/commit/32b9de5))
* **api:** do not search for a tip length calibration by slot name ([#7574](https://github.com/Opentrons/opentrons/issues/7574)) ([22b6ccd](https://github.com/Opentrons/opentrons/commit/22b6ccd))
* **api:** represent Location correctly in log ([#7565](https://github.com/Opentrons/opentrons/issues/7565)) ([be091a3](https://github.com/Opentrons/opentrons/commit/be091a3)), closes [#7564](https://github.com/Opentrons/opentrons/issues/7564)
* **api:** Sleeps do not happen in thermocycler and tempdeck when simulating.  ([8ef61c0](https://github.com/Opentrons/opentrons/commit/8ef61c0)), closes [#7506](https://github.com/Opentrons/opentrons/issues/7506)


### Features

* **api:** add module emulation ([#7353](https://github.com/Opentrons/opentrons/issues/7353)) ([78869dc](https://github.com/Opentrons/opentrons/commit/78869dc))
* **api:** Add physical USB Port information to the hardware controller ([#7359](https://github.com/Opentrons/opentrons/issues/7359)) ([7d9734b](https://github.com/Opentrons/opentrons/commit/7d9734b))
* **api:** allow ProtocolContext to load labware using the ProtocolEngine ([#7398](https://github.com/Opentrons/opentrons/issues/7398)) ([858135b](https://github.com/Opentrons/opentrons/commit/858135b)), closes [#7390](https://github.com/Opentrons/opentrons/issues/7390) [#7448](https://github.com/Opentrons/opentrons/issues/7448)
* **api:** api json command dispatcher and translator ([#7555](https://github.com/Opentrons/opentrons/issues/7555)) ([9c56ab5](https://github.com/Opentrons/opentrons/commit/9c56ab5)), closes [#7428](https://github.com/Opentrons/opentrons/issues/7428)
* **api:** fast simulation catches tip and volume errors ([#7631](https://github.com/Opentrons/opentrons/issues/7631)) ([b8e3d26](https://github.com/Opentrons/opentrons/commit/b8e3d26)), closes [#7627](https://github.com/Opentrons/opentrons/issues/7627)
* **api:** protocol engine InstrumentContext implementes pick_up_tip and drop_tip ([#7621](https://github.com/Opentrons/opentrons/issues/7621)) ([1d77016](https://github.com/Opentrons/opentrons/commit/1d77016)), closes [#7326](https://github.com/Opentrons/opentrons/issues/7326) [#7327](https://github.com/Opentrons/opentrons/issues/7327)
* **api:** protocol engine labware interface implementationn ([#7453](https://github.com/Opentrons/opentrons/issues/7453)) ([1ad02d8](https://github.com/Opentrons/opentrons/commit/1ad02d8)), closes [#7332](https://github.com/Opentrons/opentrons/issues/7332)
* **api:** sort modules in protocol context by USB port ([#7532](https://github.com/Opentrons/opentrons/issues/7532)) ([a752897](https://github.com/Opentrons/opentrons/commit/a752897))
* **protocol-engine:** Start a Protocol-Engine–backed implementation of InstrumentContext ([#7474](https://github.com/Opentrons/opentrons/issues/7474)) ([0be7126](https://github.com/Opentrons/opentrons/commit/0be7126)), closes [#7324](https://github.com/Opentrons/opentrons/issues/7324)
* **robot-server:** Add physical module usb port information to the http server ([#7362](https://github.com/Opentrons/opentrons/issues/7362)) ([07b0f4a](https://github.com/Opentrons/opentrons/commit/07b0f4a))





## [4.2.1](https://github.com/Opentrons/opentrons/compare/v4.2.0..v4.2.1) (2021-04-06)

### Bug Fixes

* **api:** do not search for a tip length calibration by slot name ([#7574](https://github.com/Opentrons/opentrons/issues/7574)) ([313f4ef](https://github.com/Opentrons/opentrons/commit/313f4ef))




# [4.2.0](https://github.com/Opentrons/opentrons/compare/v4.1.1...v4.2.0) (2021-03-18)

### Bug Fixes

* **api:** Correctly restore serial timeouts in the face of exceptions ([#7344](https://github.com/Opentrons/opentrons/issues/7344)) ([9aeda16](https://github.com/Opentrons/opentrons/commit/9aeda16))
* **api:** fix mount critical point ([#7314](https://github.com/Opentrons/opentrons/issues/7314)) ([bc8196e](https://github.com/Opentrons/opentrons/commit/bc8196e)), closes [#7092](https://github.com/Opentrons/opentrons/issues/7092)
* **api:** fix race condition causing pause/running state mismatch. ([#7265](https://github.com/Opentrons/opentrons/issues/7265)) ([cf62256](https://github.com/Opentrons/opentrons/commit/cf62256)), closes [#7216](https://github.com/Opentrons/opentrons/issues/7216)
* **api:** fix return code of set_syslog_level ([#7351](https://github.com/Opentrons/opentrons/issues/7351)) ([7ec7a6b](https://github.com/Opentrons/opentrons/commit/7ec7a6b))
* **api:** labware calibration can be completed when using fast simulation. ([#7371](https://github.com/Opentrons/opentrons/issues/7371)) ([d4f436f](https://github.com/Opentrons/opentrons/commit/d4f436f)), closes [#7365](https://github.com/Opentrons/opentrons/issues/7365)
* **api, robot-server:** fix a comical cascade of pipette config bugs ([#7316](https://github.com/Opentrons/opentrons/issues/7316)) ([98d0ddf](https://github.com/Opentrons/opentrons/commit/98d0ddf)), closes [#7305](https://github.com/Opentrons/opentrons/issues/7305)


### Features

* **api:** add dispense command to the Protocol Engine ([#7221](https://github.com/Opentrons/opentrons/issues/7221)) ([31b1e67](https://github.com/Opentrons/opentrons/commit/31b1e67)), closes [#6599](https://github.com/Opentrons/opentrons/issues/6599)
* **api:** add enableProtocolEngine feature flag to opentrons.config ([#7389](https://github.com/Opentrons/opentrons/issues/7389)) ([faf871e](https://github.com/Opentrons/opentrons/commit/faf871e)), closes [#7333](https://github.com/Opentrons/opentrons/issues/7333)
* **api:** create ProtocolEngineImplementation class ([#7377](https://github.com/Opentrons/opentrons/issues/7377)) ([e78ae41](https://github.com/Opentrons/opentrons/commit/e78ae41)), closes [#7323](https://github.com/Opentrons/opentrons/issues/7323)
* **api:** fast protocol upload feature flag ([#7321](https://github.com/Opentrons/opentrons/issues/7321)) ([6aa9249](https://github.com/Opentrons/opentrons/commit/6aa9249)), closes [#7288](https://github.com/Opentrons/opentrons/issues/7288)
* **api:** SimInstrumentContext.move_to calls plan_moves. ([#7120](https://github.com/Opentrons/opentrons/issues/7120)) ([8990100](https://github.com/Opentrons/opentrons/commit/8990100))
* **api:** upload using fast sim if feature flag enables feature ([#7322](https://github.com/Opentrons/opentrons/issues/7322)) ([f7e8283](https://github.com/Opentrons/opentrons/commit/f7e8283)), closes [#7286](https://github.com/Opentrons/opentrons/issues/7286)





## [4.1.1](https://github.com/Opentrons/opentrons/compare/v4.1.0...v4.1.1) (2021-01-25)

**Note:** Version bump only for package @opentrons/api-server





# [4.1.0](https://github.com/Opentrons/opentrons/compare/v4.0.0...v4.1.0) (2021-01-20)

## Bug Fixes

* **robot-server:** save custom tiprack def on robot during tip length cal ([#7231](https://github.com/Opentrons/opentrons/issues/7231)) ([4fe2b37](https://github.com/Opentrons/opentrons/commit/4fe2b37))
* **api:** do not call a method dependent on the Python API Version directly ([#7220](https://github.com/Opentrons/opentrons/issues/7220)) ([2382ac6](https://github.com/Opentrons/opentrons/commit/2382ac6))
* **app:** restrict size of reset config modal ([#7212](https://github.com/Opentrons/opentrons/issues/7212)) ([01ca11e](https://github.com/Opentrons/opentrons/commit/01ca11e))
* **api:** bump y max bounds to match robot geometry ([#7140](https://github.com/Opentrons/opentrons/issues/7140)) ([85b3d6b](https://github.com/Opentrons/opentrons/commit/85b3d6b)), closes [#6886](https://github.com/Opentrons/opentrons/issues/6886)
* **api:** ensure exact delay floats are preserved in command log ([#7078](https://github.com/Opentrons/opentrons/issues/7078)) ([8ebb2dc](https://github.com/Opentrons/opentrons/commit/8ebb2dc)), closes [#7066](https://github.com/Opentrons/opentrons/issues/7066)
* **api:** fixed `axis` variable renaming in final `driver_3_0.home` block of code ([#7015](https://github.com/Opentrons/opentrons/issues/7015)) ([65abcb1](https://github.com/Opentrons/opentrons/commit/65abcb1))
* **api:** get correct instrument max height ([#7095](https://github.com/Opentrons/opentrons/issues/7095)) ([074f222](https://github.com/Opentrons/opentrons/commit/074f222))
* **api:** Labware.__hash__ fix ([#7023](https://github.com/Opentrons/opentrons/issues/7023)) ([cf4034c](https://github.com/Opentrons/opentrons/commit/cf4034c)), closes [#6992](https://github.com/Opentrons/opentrons/issues/6992)
* **api:** Specify correct channels for a paired pipette during pick up tip ([#6903](https://github.com/Opentrons/opentrons/issues/6903)) ([047a909](https://github.com/Opentrons/opentrons/commit/047a909))
* **robot-server:** ProtocolManager expects a ThreadManager and not a SynchronousAdapter. ([#7175](https://github.com/Opentrons/opentrons/issues/7175)) ([c0c9225](https://github.com/Opentrons/opentrons/commit/c0c9225))


## Features

* **api:** add aspirate handling to protocol engine ([#7191](https://github.com/Opentrons/opentrons/issues/7191)) ([18bfdea](https://github.com/Opentrons/opentrons/commit/18bfdea))
* **api:** add deck and deck fixture loading to ProtocolEngine factory ([#7031](https://github.com/Opentrons/opentrons/issues/7031)) ([509b7b7](https://github.com/Opentrons/opentrons/commit/509b7b7))
* **api:** add drop tip command to engine ([#7034](https://github.com/Opentrons/opentrons/issues/7034)) ([2922158](https://github.com/Opentrons/opentrons/commit/2922158)), closes [#6596](https://github.com/Opentrons/opentrons/issues/6596)
* **api:** add move-to-well to protocol engine ([#6943](https://github.com/Opentrons/opentrons/issues/6943)) ([779acb4](https://github.com/Opentrons/opentrons/commit/779acb4))
* **api:** add pick up tip handling to protocol_engine ([#6985](https://github.com/Opentrons/opentrons/issues/6985)) ([3b511f4](https://github.com/Opentrons/opentrons/commit/3b511f4)), closes [#6595](https://github.com/Opentrons/opentrons/issues/6595)
* **api:** fast instrument simulation ([#7114](https://github.com/Opentrons/opentrons/issues/7114)) ([384ecad](https://github.com/Opentrons/opentrons/commit/384ecad))
* **shared-data:** add default tipracks to each pipette name spec ([#7108](https://github.com/Opentrons/opentrons/issues/7108)) ([757ca85](https://github.com/Opentrons/opentrons/commit/757ca85))


## Performance Improvements

* **api:** more (small) simulation improvements ([#7132](https://github.com/Opentrons/opentrons/issues/7132)) ([6ad1477](https://github.com/Opentrons/opentrons/commit/6ad1477))
* **api:** simulation optimizations ([#7124](https://github.com/Opentrons/opentrons/issues/7124)) ([d8ea3b2](https://github.com/Opentrons/opentrons/commit/d8ea3b2))





# [4.0.0](https://github.com/Opentrons/opentrons/compare/v3.21.2...v4.0.0) (2020-11-20)


### Bug Fixes

* **api:** handle missing intermediate keys in poc index ([#7029](https://github.com/Opentrons/opentrons/issues/7029)) ([a123a5f](https://github.com/Opentrons/opentrons/commit/a123a5f))
* **api:** tolerate delete of nonexistent pip offset ([#7027](https://github.com/Opentrons/opentrons/issues/7027)) ([6fac6ce](https://github.com/Opentrons/opentrons/commit/6fac6ce))
* **robot-server:** load tip length data correctly in pipette offset cal ([#7009](https://github.com/Opentrons/opentrons/issues/7009)) ([8c8ef89](https://github.com/Opentrons/opentrons/commit/8c8ef89))
* **api:** session._dedupe needs to use equality checking ([#6988](https://github.com/Opentrons/opentrons/issues/6988)) ([26c666b](https://github.com/Opentrons/opentrons/commit/26c666b)), closes [#6692](https://github.com/Opentrons/opentrons/issues/6692)
* **robot-server:** reset cal when starting pip offset cal ([#6991](https://github.com/Opentrons/opentrons/issues/6991)) ([d471900](https://github.com/Opentrons/opentrons/commit/d471900))
* **robot-server,api:** reset cal during dc process ([#6942](https://github.com/Opentrons/opentrons/issues/6942)) ([8d142d4](https://github.com/Opentrons/opentrons/commit/8d142d4))
* **api:** recache position before plunger home ([#6881](https://github.com/Opentrons/opentrons/issues/6881)) ([603dfff](https://github.com/Opentrons/opentrons/commit/603dfff))
* **api,robot-server:** reload robot calibration on deck calibration exit ([#6815](https://github.com/Opentrons/opentrons/issues/6815)) ([254af66](https://github.com/Opentrons/opentrons/commit/254af66))
* **app:** Display if DC was migrated ([#6812](https://github.com/Opentrons/opentrons/issues/6812)) ([d37c0c0](https://github.com/Opentrons/opentrons/commit/d37c0c0))
* **api:** Do not perform a transfer if a zero volume is passed in ([#6620](https://github.com/Opentrons/opentrons/issues/6620)) ([05e66b4](https://github.com/Opentrons/opentrons/commit/05e66b4))




### Performance Improvements

* **shared-data,api:** speed up pipette settings ([#6952](https://github.com/Opentrons/opentrons/issues/6952)) ([f8b6266](https://github.com/Opentrons/opentrons/commit/f8b6266))


### Features

* **api:** Mark calibrations as bad when determined they exceed threshold ([#6918](https://github.com/Opentrons/opentrons/issues/6918)) ([ac3a866](https://github.com/Opentrons/opentrons/commit/ac3a866))
* **app, robot-server:** Report both the minimum and maximum supported protocol api versions ([#6921](https://github.com/Opentrons/opentrons/issues/6921)) ([22fc36a](https://github.com/Opentrons/opentrons/commit/22fc36a))
* **api:** p1000_single_v2.2, p20_single_v2.2 ([#6922](https://github.com/Opentrons/opentrons/issues/6922)) ([14659b8](https://github.com/Opentrons/opentrons/commit/14659b8))
* **api:** Prevent Python API v1 protocol upload in server version 4.0.0 ([#6841](https://github.com/Opentrons/opentrons/issues/6841)) ([054f037](https://github.com/Opentrons/opentrons/commit/054f037))
* **api:** Add calibration status to all of the calibration data models ([#6648](https://github.com/Opentrons/opentrons/issues/6648)) ([2753734](https://github.com/Opentrons/opentrons/commit/2753734))
* **api:** add source blowout location option to transfer function ([#6670](https://github.com/Opentrons/opentrons/issues/6670)) ([811a767](https://github.com/Opentrons/opentrons/commit/811a767)), closes [#6576](https://github.com/Opentrons/opentrons/issues/6576)
* **api:** pin JSON protocols to APIVersion 2.8 ([#6691](https://github.com/Opentrons/opentrons/issues/6691)) ([0804474](https://github.com/Opentrons/opentrons/commit/0804474)), closes [#6681](https://github.com/Opentrons/opentrons/issues/6681)
* **api:** Use more human-friendly names in "API version too low" error messages ([#6662](https://github.com/Opentrons/opentrons/issues/6662)) ([55daec2](https://github.com/Opentrons/opentrons/commit/55daec2))
* **api,robot-server:** Overhaul robot calibration flows ([#6797](https://github.com/Opentrons/opentrons/issues/6797)) ([f0f236f](https://github.com/Opentrons/opentrons/commit/f0f236f)), closes [#6738](https://github.com/Opentrons/opentrons/issues/6738) [#6739](https://github.com/Opentrons/opentrons/issues/6739)
* **api:** Add calibration status to all of the calibration data models ([#6648](https://github.com/Opentrons/opentrons/issues/6648)) ([2753734](https://github.com/Opentrons/opentrons/commit/2753734))
* **api:** add source blowout location option to transfer function ([#6670](https://github.com/Opentrons/opentrons/issues/6670)) ([811a767](https://github.com/Opentrons/opentrons/commit/811a767)), closes [#6576](https://github.com/Opentrons/opentrons/issues/6576)
* **api:** pin JSON protocols to APIVersion 2.8 ([#6691](https://github.com/Opentrons/opentrons/issues/6691)) ([0804474](https://github.com/Opentrons/opentrons/commit/0804474)), closes [#6681](https://github.com/Opentrons/opentrons/issues/6681)
* **api:** Use more human-friendly names in "API version too low" error messages ([#6662](https://github.com/Opentrons/opentrons/issues/6662)) ([55daec2](https://github.com/Opentrons/opentrons/commit/55daec2))




## [3.21.2](https://github.com/Opentrons/opentrons/compare/v3.21.1...v3.21.2) (2020-10-16)


* **api:** Be fault-tolerant to bad deck cal data ([#6803](https://github.com/Opentrons/opentrons/issues/6803)) ([43ba721](https://github.com/Opentrons/opentrons/commit/43ba721))





## [3.21.1](https://github.com/Opentrons/opentrons/compare/v3.21.0...v3.21.1) (2020-10-14)

**Note:** Version bump only for package @opentrons/api-server





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
* **robot-server:** datetime responses are missing timezone. ([#6375](https://github.com/Opentrons/opentrons/issues/6375)) ([1a65835](https://github.com/Opentrons/opentrons/commit/1a65835)), closes [#6374](https://github.com/Opentrons/opentrons/issues/6374)


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





## [3.20.1](https://github.com/Opentrons/opentrons/compare/v3.20.0...v3.20.1) (2020-08-25)

### Bug Fixes

* **api, app:** Ensure index file exists before reading from it ([#6410](https://github.com/Opentrons/opentrons/issues/6410)) ([d616d0b](https://github.com/Opentrons/opentrons/commit/d616d0b)), closes [#6394](https://github.com/Opentrons/opentrons/issues/6394)





# [3.20.0](https://github.com/Opentrons/opentrons/compare/v3.19.0...v3.20.0) (2020-08-13)

* **api:** use the hash-with-parent for rpc cal hashes ([#6355](https://github.com/Opentrons/opentrons/issues/6355)) ([6675154](https://github.com/Opentrons/opentrons/commit/6675154))
* **api:** Save v2 labware in api v1 with URIs ([#6325](https://github.com/Opentrons/opentrons/issues/6325)) ([c6e3688](https://github.com/Opentrons/opentrons/commit/c6e3688))
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


### Features

* **api:**  Use 10mm/s-equivalent flow rates for GEN2 singles in API Version 2.6 ([#6283](https://github.com/Opentrons/opentrons/issues/6283)) ([70c54e2](https://github.com/Opentrons/opentrons/commit/70c54e2)), closes [#6279](https://github.com/Opentrons/opentrons/issues/6279) [#5968](https://github.com/Opentrons/opentrons/issues/5968)
* **api:** add JSON v5 executor and schema ([#6239](https://github.com/Opentrons/opentrons/issues/6239)) ([17969d6](https://github.com/Opentrons/opentrons/commit/17969d6)), closes [#6228](https://github.com/Opentrons/opentrons/issues/6228)
* **api:** ensure stable load_module order in JSON executor ([#5995](https://github.com/Opentrons/opentrons/issues/5995)) ([c34aa22](https://github.com/Opentrons/opentrons/commit/c34aa22))
* **api:** load tip length calibratioin in v1 ([#5936](https://github.com/Opentrons/opentrons/issues/5936)) ([598f7e6](https://github.com/Opentrons/opentrons/commit/598f7e6)), closes [#5608](https://github.com/Opentrons/opentrons/issues/5608)
* **api:** support air gap command in V3+V4 executors ([#6003](https://github.com/Opentrons/opentrons/issues/6003)) ([4e85f4d](https://github.com/Opentrons/opentrons/commit/4e85f4d))
* **robot-server:** Add endpoints to access labware calibration ([#5811](https://github.com/Opentrons/opentrons/issues/5811)) ([6e24726](https://github.com/Opentrons/opentrons/commit/6e24726))
* **robot-server, api:** async hardware initialization after HTTP server starts. ([#6116](https://github.com/Opentrons/opentrons/issues/6116)) ([b4eb2ca](https://github.com/Opentrons/opentrons/commit/b4eb2ca)), closes [#6109](https://github.com/Opentrons/opentrons/issues/6109)





# [3.19.0](https://github.com/Opentrons/opentrons/compare/v3.18.1...v3.19.0) (2020-06-29)


### Bug Fixes

* **api:** catch factory tests up to gpio changes ([#5747](https://github.com/Opentrons/opentrons/issues/5747)) ([751d9a4](https://github.com/Opentrons/opentrons/commit/751d9a4))
* **api:** convert extra seconds to minutes in delay command ([#5755](https://github.com/Opentrons/opentrons/issues/5755)) ([df26e07](https://github.com/Opentrons/opentrons/commit/df26e07)), closes [#5414](https://github.com/Opentrons/opentrons/issues/5414)
* **api:** disallow calling Session._run while protocol is running. ([#5831](https://github.com/Opentrons/opentrons/issues/5831)) ([fce1f79](https://github.com/Opentrons/opentrons/commit/fce1f79)), closes [#5239](https://github.com/Opentrons/opentrons/issues/5239)
* **api:** do not allow v1 imports in v2 protocols ([#5859](https://github.com/Opentrons/opentrons/issues/5859)) ([7ed945d](https://github.com/Opentrons/opentrons/commit/7ed945d)), closes [#5852](https://github.com/Opentrons/opentrons/issues/5852)
* **api:** Enable audio on GPIO startup ([#5787](https://github.com/Opentrons/opentrons/issues/5787)) ([907401c](https://github.com/Opentrons/opentrons/commit/907401c)), closes [/github.com/Opentrons/opentrons/blob/751d9a402fa5d1f936df43ed12fd7387be23237f/api/src/opentrons/tools/factory_test.py#L217](https://github.com//github.com/Opentrons/opentrons/blob/751d9a402fa5d1f936df43ed12fd7387be23237f/api/src/opentrons/tools/factory_test.py/issues/L217)
* **api:** Fix return tip behavior in check session ([#5772](https://github.com/Opentrons/opentrons/issues/5772)) ([34ef09c](https://github.com/Opentrons/opentrons/commit/34ef09c))
* **api:** fix transform type logic in calibration check session ([#5951](https://github.com/Opentrons/opentrons/issues/5951)) ([bcb566e](https://github.com/Opentrons/opentrons/commit/bcb566e))
* **api:** prevent thermocycler wait_for_temp() from exiting prematurely ([#5807](https://github.com/Opentrons/opentrons/issues/5807)) ([7720b28](https://github.com/Opentrons/opentrons/commit/7720b28)), closes [#5602](https://github.com/Opentrons/opentrons/issues/5602)
* **api:** return rail lights to original state post cal-check ([#5861](https://github.com/Opentrons/opentrons/issues/5861)) ([3a6cc41](https://github.com/Opentrons/opentrons/commit/3a6cc41))
* **api:** Simulate protocols with a realistic deck transform ([#5908](https://github.com/Opentrons/opentrons/issues/5908)) ([03757d9](https://github.com/Opentrons/opentrons/commit/03757d9))
* **robot-server, api:** reject commands while robot is moving ([#5878](https://github.com/Opentrons/opentrons/issues/5878)) ([d8c63d7](https://github.com/Opentrons/opentrons/commit/d8c63d7)), closes [#5810](https://github.com/Opentrons/opentrons/issues/5810)


### Features

* **api:** add info to debug warning on how IS_ROBOT is determined ([#5783](https://github.com/Opentrons/opentrons/issues/5783)) ([fbbf1b6](https://github.com/Opentrons/opentrons/commit/fbbf1b6))
* **api:** add skeleton state machine instance for tip length calibration ([#5805](https://github.com/Opentrons/opentrons/issues/5805)) ([dd36d53](https://github.com/Opentrons/opentrons/commit/dd36d53)), closes [#5605](https://github.com/Opentrons/opentrons/issues/5605)
* **api:** define data architecture for tip length calibration in v2 ([#5820](https://github.com/Opentrons/opentrons/issues/5820)) ([f149cb6](https://github.com/Opentrons/opentrons/commit/f149cb6)), closes [#5606](https://github.com/Opentrons/opentrons/issues/5606)
* **api, app:** Check Robot Deck Transform ([#5845](https://github.com/Opentrons/opentrons/issues/5845)) ([ed67383](https://github.com/Opentrons/opentrons/commit/ed67383))
* **api, app:** implement automatic door safety stop feature ([#5706](https://github.com/Opentrons/opentrons/issues/5706)) ([ad94d07](https://github.com/Opentrons/opentrons/commit/ad94d07)), closes [#2820](https://github.com/Opentrons/opentrons/issues/2820) [#2752](https://github.com/Opentrons/opentrons/issues/2752)
* **api, docs:** add GPIO rail lights and door control to ProtocolContext ([#5862](https://github.com/Opentrons/opentrons/issues/5862)) ([4d5d89f](https://github.com/Opentrons/opentrons/commit/4d5d89f)), closes [#5775](https://github.com/Opentrons/opentrons/issues/5775) [#5703](https://github.com/Opentrons/opentrons/issues/5703)
* **robot-server:** Add skeleton of tip calibration session including integration test.' ([#5868](https://github.com/Opentrons/opentrons/issues/5868)) ([c66f8ae](https://github.com/Opentrons/opentrons/commit/c66f8ae))
* **robot-server:** session manager ([#5796](https://github.com/Opentrons/opentrons/issues/5796)) ([c1fd7e8](https://github.com/Opentrons/opentrons/commit/c1fd7e8)), closes [#5763](https://github.com/Opentrons/opentrons/issues/5763) [#5765](https://github.com/Opentrons/opentrons/issues/5765)




## [3.18.1](https://github.com/Opentrons/opentrons/compare/v3.18.0...v3.18.1) (2020-05-26)

**Note:** Version bump only for package @opentrons/api-server





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
* **robot-server,api:** bug in deck calibration ([e0c1754](https://github.com/Opentrons/opentrons/commit/e0c1754)), closes [#5688](https://github.com/Opentrons/opentrons/issues/5688)


### Features

* **api:** Add type of deck calibration and remove ability to start the program without pipettes ([#5645](https://github.com/Opentrons/opentrons/issues/5645)) ([334be7f](https://github.com/Opentrons/opentrons/commit/334be7f))
* **api:** support thermocycler commands in executor ([#5557](https://github.com/Opentrons/opentrons/issues/5557)) ([b4ca09e](https://github.com/Opentrons/opentrons/commit/b4ca09e))
* **api, app:** add state change information to rpc ([#5512](https://github.com/Opentrons/opentrons/issues/5512)) ([ca3ef95](https://github.com/Opentrons/opentrons/commit/ca3ef95)), closes [#5502](https://github.com/Opentrons/opentrons/issues/5502)
* **app,robot-server:** add support for sessions API ([#5628](https://github.com/Opentrons/opentrons/issues/5628)) ([441d682](https://github.com/Opentrons/opentrons/commit/441d682))
* **robot-server, api:** calibration check fastapi  ([#5581](https://github.com/Opentrons/opentrons/issues/5581)) ([b44360d](https://github.com/Opentrons/opentrons/commit/b44360d))
* **robot-server,api:** robot-server's fastapi endpoints are now the default ([f69f276](https://github.com/Opentrons/opentrons/commit/f69f276)), closes [#5510](https://github.com/Opentrons/opentrons/issues/5510)





## [3.17.1](https://github.com/Opentrons/opentrons/compare/v3.17.0...v3.17.1) (2020-05-06)

### Bug Fixes

* **api:** fix tempdeck simulate freeze ([#5563](https://github.com/Opentrons/opentrons/issues/5563)) ([ae2bdcb](https://github.com/Opentrons/opentrons/commit/ae2bdcb)), closes [#5561](https://github.com/Opentrons/opentrons/issues/5561)
* **api:** Correctly grab slot from labware object ([#5534](https://github.com/Opentrons/opentrons/issues/5534)) ([8a3850a](https://github.com/Opentrons/opentrons/commit/8a3850a))
* **api:** home only the axis probing after error ([#5525](https://github.com/Opentrons/opentrons/issues/5525)) ([c0d640c](https://github.com/Opentrons/opentrons/commit/c0d640c))
* **api:** allow protocol delay to be cancelled ([#5403](https://github.com/Opentrons/opentrons/issues/5403)) ([c0ed09d](https://github.com/Opentrons/opentrons/commit/c0ed09d)), closes [#5400](https://github.com/Opentrons/opentrons/issues/5400)
* **api:** avoid tc lid when pathing ([#5390](https://github.com/Opentrons/opentrons/issues/5390)) ([4a7fe0b](https://github.com/Opentrons/opentrons/commit/4a7fe0b)), closes [#5263](https://github.com/Opentrons/opentrons/issues/5263)
* **api:** Load the correct gantry calibration upon deck calibration exit ([#5469](https://github.com/Opentrons/opentrons/issues/5469)) ([b03038d](https://github.com/Opentrons/opentrons/commit/b03038d))
* **api:** verify the structure of v2 protocol ast ([#5454](https://github.com/Opentrons/opentrons/issues/5454)) ([b45af1e](https://github.com/Opentrons/opentrons/commit/b45af1e))


### Features

* **api:** Add labware required to session status  ([#5298](https://github.com/Opentrons/opentrons/issues/5298)) ([c602cd6](https://github.com/Opentrons/opentrons/commit/c602cd6))
* **api:** Allow move, jog and tip handling for a cal session ([#5402](https://github.com/Opentrons/opentrons/issues/5402)) ([d5ff537](https://github.com/Opentrons/opentrons/commit/d5ff537))
* **api:** Allow moves to crosses and slot 5 ([#5415](https://github.com/Opentrons/opentrons/issues/5415)) ([98ca207](https://github.com/Opentrons/opentrons/commit/98ca207)), closes [#5099](https://github.com/Opentrons/opentrons/issues/5099) [#5098](https://github.com/Opentrons/opentrons/issues/5098)
* **api:** Allow Non-Full plate Thermocycler Configuration ([#5498](https://github.com/Opentrons/opentrons/issues/5498)) ([60f6b16](https://github.com/Opentrons/opentrons/commit/60f6b16))
* **robot-server, api:** calibration check overhaul ([#5465](https://github.com/Opentrons/opentrons/issues/5465)) ([4feeeba](https://github.com/Opentrons/opentrons/commit/4feeeba))





# [3.17.0](https://github.com/Opentrons/opentrons/compare/v3.17.0-beta.1...v3.17.0) (2020-04-23)

**Note:** Version bump only for package @opentrons/api-server





# [3.17.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.17.0-beta.0...v3.17.0-beta.1) (2020-04-14)

### Bug Fixes

* **api:** allow protocol delay to be cancelled ([#5403](https://github.com/Opentrons/opentrons/issues/5403)) ([67d090e](https://github.com/Opentrons/opentrons/commit/67d090e)), closes [#5400](https://github.com/Opentrons/opentrons/issues/5400)
* **api:** correctly set magdeck offsets ([#5416](https://github.com/Opentrons/opentrons/issues/5416)) ([5c121cf](https://github.com/Opentrons/opentrons/commit/5c121cf))





# [3.17.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.16.1...v3.17.0-beta.0) (2020-04-01)

### Bug Fixes

* **api:** correctly handle magdeck engage kwargs ([#5330](https://github.com/Opentrons/opentrons/issues/5330)) ([57c0382](https://github.com/Opentrons/opentrons/commit/57c0382))
* **api:** fix missing arg in v1 move splitting during cache instr models ([#5338](https://github.com/Opentrons/opentrons/issues/5338)) ([057bea5](https://github.com/Opentrons/opentrons/commit/057bea5))
* **api:** move splitting: strip step postfix ([#5337](https://github.com/Opentrons/opentrons/issues/5337)) ([e36217a](https://github.com/Opentrons/opentrons/commit/e36217a))
* **api:** fix blocking module tasks ([#5315](https://github.com/Opentrons/opentrons/issues/5315)) ([0f4e2c1](https://github.com/Opentrons/opentrons/commit/0f4e2c1)), closes [#5312](https://github.com/Opentrons/opentrons/issues/5312)
* **api:** fix update module firmware ([#5317](https://github.com/Opentrons/opentrons/issues/5317)) ([63808c2](https://github.com/Opentrons/opentrons/commit/63808c2)), closes [#5314](https://github.com/Opentrons/opentrons/issues/5314)
* **api:** Avoid Python 3.8 unsupported `str in Enum` expression ([#5088](https://github.com/Opentrons/opentrons/issues/5088)) ([6f399ba](https://github.com/Opentrons/opentrons/commit/6f399ba))
* **api:** call module functions across threads ([#5194](https://github.com/Opentrons/opentrons/issues/5194)) ([ba1afe2](https://github.com/Opentrons/opentrons/commit/ba1afe2))
* **api:** compare smoothie version before hardware controller on boot ([#5165](https://github.com/Opentrons/opentrons/issues/5165)) ([285211f](https://github.com/Opentrons/opentrons/commit/285211f))
* **api:** exec protocol contents in module mode ([#5292](https://github.com/Opentrons/opentrons/issues/5292)) ([0174ab3](https://github.com/Opentrons/opentrons/commit/0174ab3)), closes [#4982](https://github.com/Opentrons/opentrons/issues/4982) [#4981](https://github.com/Opentrons/opentrons/issues/4981)
* **api:** fix recent change breaking api server init ([#5003](https://github.com/Opentrons/opentrons/issues/5003)) ([01fccdf](https://github.com/Opentrons/opentrons/commit/01fccdf))
* **api:** fix server crash due to unresponsive motor controller at boot ([#5277](https://github.com/Opentrons/opentrons/issues/5277)) ([103e3d1](https://github.com/Opentrons/opentrons/commit/103e3d1))
* **api:** make api coroutine properties sync for polls during pause ([#5166](https://github.com/Opentrons/opentrons/issues/5166)) ([e9dcd9e](https://github.com/Opentrons/opentrons/commit/e9dcd9e))
* **api:** make hardware control gantry fns observe execution manager ([#5180](https://github.com/Opentrons/opentrons/issues/5180)) ([c143bcf](https://github.com/Opentrons/opentrons/commit/c143bcf))
* **api:** make sure we move plunger to bottom after home ([#5253](https://github.com/Opentrons/opentrons/issues/5253)) ([f298b6e](https://github.com/Opentrons/opentrons/commit/f298b6e)), closes [#5164](https://github.com/Opentrons/opentrons/issues/5164)
* **api:** properly parse escaped nmcli responses ([#5246](https://github.com/Opentrons/opentrons/issues/5246)) ([91178f0](https://github.com/Opentrons/opentrons/commit/91178f0))
* **api:** remove unnecessary pipette movement during mix ([#5128](https://github.com/Opentrons/opentrons/issues/5128)) ([88e1893](https://github.com/Opentrons/opentrons/commit/88e1893)), closes [#4640](https://github.com/Opentrons/opentrons/issues/4640)
* **api:** reset location cache before tip probe ([#5269](https://github.com/Opentrons/opentrons/issues/5269)) ([53977ec](https://github.com/Opentrons/opentrons/commit/53977ec)), closes [#4793](https://github.com/Opentrons/opentrons/issues/4793)
* **api:** return tips to tipracks from the same height as drop tip ([#5187](https://github.com/Opentrons/opentrons/issues/5187)) ([82187ed](https://github.com/Opentrons/opentrons/commit/82187ed)), closes [#5186](https://github.com/Opentrons/opentrons/issues/5186)
* **api:** ThreadManager hides builder exceptions ([#5108](https://github.com/Opentrons/opentrons/issues/5108)) ([9c50a79](https://github.com/Opentrons/opentrons/commit/9c50a79))


### Features

* **api:** Add API calibration check session ([#5197](https://github.com/Opentrons/opentrons/issues/5197)) ([6fa9346](https://github.com/Opentrons/opentrons/commit/6fa9346))
* **api:** add start set temperature to api ([#5179](https://github.com/Opentrons/opentrons/issues/5179)) ([cdf0c8a](https://github.com/Opentrons/opentrons/commit/cdf0c8a)), closes [#5176](https://github.com/Opentrons/opentrons/issues/5176)
* **api:** add v4 JSON executor ([#5221](https://github.com/Opentrons/opentrons/issues/5221)) ([e81cb56](https://github.com/Opentrons/opentrons/commit/e81cb56))
* **api:** add wifi disconnect capability ([#4957](https://github.com/Opentrons/opentrons/issues/4957)) ([67155a8](https://github.com/Opentrons/opentrons/commit/67155a8))
* **api:** create a centralized hw execution manager ([#5138](https://github.com/Opentrons/opentrons/issues/5138)) ([af10af2](https://github.com/Opentrons/opentrons/commit/af10af2)), closes [#4871](https://github.com/Opentrons/opentrons/issues/4871)
* **api:** Define existing endpoints using FastAPI/Pydantic ([#4962](https://github.com/Opentrons/opentrons/issues/4962)) ([6ec838f](https://github.com/Opentrons/opentrons/commit/6ec838f)), closes [#4917](https://github.com/Opentrons/opentrons/issues/4917)
* **api:** invert management of hw control thread ([#5078](https://github.com/Opentrons/opentrons/issues/5078)) ([b8f543a](https://github.com/Opentrons/opentrons/commit/b8f543a)), closes [#4870](https://github.com/Opentrons/opentrons/issues/4870)
* **api:** robot server replaces api ([#5139](https://github.com/Opentrons/opentrons/issues/5139)) ([ab7905d](https://github.com/Opentrons/opentrons/commit/ab7905d)), closes [#5049](https://github.com/Opentrons/opentrons/issues/5049)
* **api:** support gen2 modules ([#5039](https://github.com/Opentrons/opentrons/issues/5039)) ([fa7a320](https://github.com/Opentrons/opentrons/commit/fa7a320)), closes [#4960](https://github.com/Opentrons/opentrons/issues/4960)
* **api:** use instrument max achievable height in plan_moves ([#5193](https://github.com/Opentrons/opentrons/issues/5193)) ([65425da](https://github.com/Opentrons/opentrons/commit/65425da)), closes [#5156](https://github.com/Opentrons/opentrons/issues/5156)





## [3.16.1](https://github.com/opentrons/opentrons/compare/v3.16.0...v3.16.1) (2020-02-25)

### Bug Fixes

* **api:** always clean up in script entries on error ([#5064](https://github.com/Opentrons/opentrons/issues/5064)) ([e98fdd1](https://github.com/Opentrons/opentrons/commit/e98fdd1)), closes [#5061](https://github.com/Opentrons/opentrons/issues/5061)
* **api:** correctly set api level in session sim ([#5063](https://github.com/Opentrons/opentrons/issues/5063)) ([9f4cb1d](https://github.com/Opentrons/opentrons/commit/9f4cb1d)), closes [#5060](https://github.com/Opentrons/opentrons/issues/5060)
* **api:** do not check used tips after pickup ([#5062](https://github.com/Opentrons/opentrons/issues/5062)) ([5c155d9](https://github.com/Opentrons/opentrons/commit/5c155d9)), closes [#5059](https://github.com/Opentrons/opentrons/issues/5059)





# [3.16.0](https://github.com/Opentrons/opentrons/compare/v3.15.2...v3.16.0) (2020-02-19)

### Bug Fixes

* **api:** make probe failures raise the actual error ([#5015](https://github.com/Opentrons/opentrons/issues/5015)) ([bc74517](https://github.com/Opentrons/opentrons/commit/bc74517)), closes [#4980](https://github.com/Opentrons/opentrons/issues/4980)
* **api:** swallow hard-halt-related errors and hold lock in session.stop() ([#4980](https://github.com/Opentrons/opentrons/issues/4980)) ([c42d4dc](https://github.com/Opentrons/opentrons/commit/c42d4dc)), closes [#4979](https://github.com/Opentrons/opentrons/issues/4979)
* **api:** Add back in useProtocolApi2 feature flag ([#4665](https://github.com/Opentrons/opentrons/issues/4665)) ([5c3fae3](https://github.com/Opentrons/opentrons/commit/5c3fae3))
* **api:** amend temperature module old bootloader check ([#4942](https://github.com/Opentrons/opentrons/issues/4942)) ([dbc90cb](https://github.com/Opentrons/opentrons/commit/dbc90cb))
* **api:** apiv2: allow multi to access all 384 wells in transfer ([#4678](https://github.com/Opentrons/opentrons/issues/4678)) ([975915a](https://github.com/Opentrons/opentrons/commit/975915a)), closes [#4669](https://github.com/Opentrons/opentrons/issues/4669)
* **api:** bug in MalformedProtocolError.__str__ ([28a0eca](https://github.com/Opentrons/opentrons/commit/28a0eca))
* **api:** Clarify intended use of "Use older pipette calibrations" flag ([#4677](https://github.com/Opentrons/opentrons/issues/4677)) ([0f2d7e3](https://github.com/Opentrons/opentrons/commit/0f2d7e3))
* **api:** detect old bootloaders, fix tc enter bootloader, remove ununused paths ([#4935](https://github.com/Opentrons/opentrons/issues/4935)) ([cfa5374](https://github.com/Opentrons/opentrons/commit/cfa5374)), closes [#4575](https://github.com/Opentrons/opentrons/issues/4575)
* **api:** do not pick up returned tips ([#4681](https://github.com/Opentrons/opentrons/issues/4681)) ([5d358f2](https://github.com/Opentrons/opentrons/commit/5d358f2)), closes [#4668](https://github.com/Opentrons/opentrons/issues/4668)
* **api:** Ensure position is fully updated after a home ([#4915](https://github.com/Opentrons/opentrons/issues/4915)) ([00b8d5b](https://github.com/Opentrons/opentrons/commit/00b8d5b))
* **api:** Fix simulate file from python shell ([#4660](https://github.com/Opentrons/opentrons/issues/4660)) ([7fc6bbe](https://github.com/Opentrons/opentrons/commit/7fc6bbe))
* **api:** more specific errors for bad json protocols ([#4967](https://github.com/Opentrons/opentrons/issues/4967)) ([885a6f8](https://github.com/Opentrons/opentrons/commit/885a6f8)), closes [#4735](https://github.com/Opentrons/opentrons/issues/4735) [#4515](https://github.com/Opentrons/opentrons/issues/4515)
* **api:** properly clean up threads in opentrons_simulate, _execute ([#4694](https://github.com/Opentrons/opentrons/issues/4694)) ([31bd02d](https://github.com/Opentrons/opentrons/commit/31bd02d))
* **api:** restore plunger current before move to bottom after drop tip ([#4831](https://github.com/Opentrons/opentrons/issues/4831)) ([d07efcb](https://github.com/Opentrons/opentrons/commit/d07efcb))
* **api:** set default move timeout to 12000 instead of 60 ([#4768](https://github.com/Opentrons/opentrons/issues/4768)) ([6e28b2b](https://github.com/Opentrons/opentrons/commit/6e28b2b)), closes [#4755](https://github.com/Opentrons/opentrons/issues/4755)
* **api:** smoothie driver: Limit high currents to moving axes ([#4729](https://github.com/Opentrons/opentrons/issues/4729)) ([7e728ea](https://github.com/Opentrons/opentrons/commit/7e728ea)), closes [#4714](https://github.com/Opentrons/opentrons/issues/4714)
* **api:** split out tc deactivation at driver level ([#4624](https://github.com/Opentrons/opentrons/issues/4624)) ([ae15a7f](https://github.com/Opentrons/opentrons/commit/ae15a7f))
* **api:** typo in Session.turn_off_rail_lights ([#4948](https://github.com/Opentrons/opentrons/issues/4948)) ([44bf050](https://github.com/Opentrons/opentrons/commit/44bf050))
* **api:** Use specified port in tools ([#4812](https://github.com/Opentrons/opentrons/issues/4812)) ([5351183](https://github.com/Opentrons/opentrons/commit/5351183))
* **api:** Utilize return tip height from pipette configs ([#4828](https://github.com/Opentrons/opentrons/issues/4828)) ([b388c4e](https://github.com/Opentrons/opentrons/commit/b388c4e))
* **app:** home all axes after lw calibration to allow deck access ([#4687](https://github.com/Opentrons/opentrons/issues/4687)) ([6e0ad61](https://github.com/Opentrons/opentrons/commit/6e0ad61)), closes [#4034](https://github.com/Opentrons/opentrons/issues/4034)


### Features

* **api:** Add an OpenAPI spec for the HTTP API ([#4691](https://github.com/Opentrons/opentrons/issues/4691)) ([cb195a5](https://github.com/Opentrons/opentrons/commit/cb195a5)), closes [#4635](https://github.com/Opentrons/opentrons/issues/4635)
* **api:** add p10m v1.6 ([#4722](https://github.com/Opentrons/opentrons/issues/4722)) ([c25c887](https://github.com/Opentrons/opentrons/commit/c25c887))
* **api:** add perform module fw update endpoint ([#4889](https://github.com/Opentrons/opentrons/issues/4889)) ([5354eff](https://github.com/Opentrons/opentrons/commit/5354eff)), closes [#4576](https://github.com/Opentrons/opentrons/issues/4576)
* **api:** apiv2: add height_from_base arg to MagneticModuleContext.engage() ([#4707](https://github.com/Opentrons/opentrons/issues/4707)) ([ffaee78](https://github.com/Opentrons/opentrons/commit/ffaee78)), closes [#4213](https://github.com/Opentrons/opentrons/issues/4213)
* **api:** change attach pipette positions to match leveling blocks ([#4888](https://github.com/Opentrons/opentrons/issues/4888)) ([b10fe2e](https://github.com/Opentrons/opentrons/commit/b10fe2e)), closes [#4679](https://github.com/Opentrons/opentrons/issues/4679)
* **api:** make modules aware of available fw updates in file system ([#4856](https://github.com/Opentrons/opentrons/issues/4856)) ([4ede522](https://github.com/Opentrons/opentrons/commit/4ede522)), closes [#4575](https://github.com/Opentrons/opentrons/issues/4575)





## [3.15.2](https://github.com/opentrons/opentrons/compare/v3.15.1...v3.15.2) (2019-12-17)


### Bug Fixes

* **api:** fix cancelling during the pre-protocol home ([#4627](https://github.com/Opentrons/opentrons/issues/4627)) ([94852cf](https://github.com/Opentrons/opentrons/commit/94852cf))
* **api:** allow labeling and versioning for module labware ([#4605](https://github.com/Opentrons/opentrons/issues/4605)) ([d4d66a3](https://github.com/Opentrons/opentrons/commit/d4d66a3))
* **api:** allow labels on old magdeck containers in v1 ([#4608](https://github.com/Opentrons/opentrons/issues/4608)) ([37ab7b8](https://github.com/Opentrons/opentrons/commit/37ab7b8)), closes [#2310](https://github.com/Opentrons/opentrons/issues/2310)
* **api:** apiv1: move instrument in Z-axis prior to touch tip in XY ([#4585](https://github.com/Opentrons/opentrons/issues/4585)) ([c946d5b](https://github.com/Opentrons/opentrons/commit/c946d5b))
* **api:** do not allow robot.connect() in rpc protocols ([#4589](https://github.com/Opentrons/opentrons/issues/4589)) ([929baea](https://github.com/Opentrons/opentrons/commit/929baea)), closes [#4252](https://github.com/Opentrons/opentrons/issues/4252)
* **api:** fix homing timeouts ([#4554](https://github.com/Opentrons/opentrons/issues/4554)) ([31ab73b](https://github.com/Opentrons/opentrons/commit/31ab73b))
* **api:** fix temp connect to attached modules during lw calibration ([#4614](https://github.com/Opentrons/opentrons/issues/4614)) ([e2848f8](https://github.com/Opentrons/opentrons/commit/e2848f8)), closes [#4613](https://github.com/Opentrons/opentrons/issues/4613)
* **api:** limit air_gap in transfer to <max volume ([#4588](https://github.com/Opentrons/opentrons/issues/4588)) ([d7a3b70](https://github.com/Opentrons/opentrons/commit/d7a3b70)), closes [#364](https://github.com/Opentrons/opentrons/issues/364)
* **api:** make sure the robot is connected before querying instrs ([#4611](https://github.com/Opentrons/opentrons/issues/4611)) ([286f1ce](https://github.com/Opentrons/opentrons/commit/286f1ce)), closes [#4590](https://github.com/Opentrons/opentrons/issues/4590)
* **api:** remove unnecessary tip return ([#4566](https://github.com/Opentrons/opentrons/issues/4566)) ([94df11e](https://github.com/Opentrons/opentrons/commit/94df11e))
* **api:** special case pause at end of protocol ([#4603](https://github.com/Opentrons/opentrons/issues/4603)) ([0080d7b](https://github.com/Opentrons/opentrons/commit/0080d7b)), closes [#3238](https://github.com/Opentrons/opentrons/issues/3238)
* **api:** specify v_offset in v1 transfer touch_tip ([#4602](https://github.com/Opentrons/opentrons/issues/4602)) ([5605c37](https://github.com/Opentrons/opentrons/commit/5605c37)), closes [#3703](https://github.com/Opentrons/opentrons/issues/3703)
* **api:** update settings reset copy to avoid confusion ([#4572](https://github.com/Opentrons/opentrons/issues/4572)) ([0cf9132](https://github.com/Opentrons/opentrons/commit/0cf9132)), closes [#4568](https://github.com/Opentrons/opentrons/issues/4568)


### Features

* **api:** Handle extra labware in script entrypoints ([#4574](https://github.com/Opentrons/opentrons/issues/4574)) ([8926340](https://github.com/Opentrons/opentrons/commit/8926340))





## [3.15.1](https://github.com/Opentrons/opentrons/compare/v3.15.0...v3.15.1) (2019-12-09)

### Bug Fixes

* **api:** shadow the magdeck height in v1 ([#4561](https://github.com/Opentrons/opentrons/issues/4561)) ([d7b4351](https://github.com/Opentrons/opentrons/commit/d7b4351))
* **api:** Allow Location types for multichannels in transfer ([#4555](https://github.com/Opentrons/opentrons/issues/4555)) ([6449401](https://github.com/Opentrons/opentrons/commit/6449401))
* **api:** always do equivalent v1 factory resets ([#4556](https://github.com/Opentrons/opentrons/issues/4556)) ([87abf31](https://github.com/Opentrons/opentrons/commit/87abf31))





# [3.15.0](https://github.com/Opentrons/opentrons/compare/v3.14.1...v3.15.0) (2019-12-05)


### Features

* **api:** add extra labware in session ([#4490](https://github.com/Opentrons/opentrons/issues/4490)) ([27666db](https://github.com/Opentrons/opentrons/commit/27666db))
* **api:** add http endpoint for robot settings dump ([#4344](https://github.com/Opentrons/opentrons/issues/4344)) ([bb91107](https://github.com/Opentrons/opentrons/commit/bb91107))
* **api:** Add locks on direct data access for mag and temp module ([#4501](https://github.com/Opentrons/opentrons/issues/4501)) ([17a27c7](https://github.com/Opentrons/opentrons/commit/17a27c7))
* **api:** add the maximum supported protocol api version ([#4363](https://github.com/Opentrons/opentrons/issues/4363)) ([086723d](https://github.com/Opentrons/opentrons/commit/086723d))
* **api:** add volume parameter to thermocycler temperature commands ([#4500](https://github.com/Opentrons/opentrons/issues/4500)) ([ad3d77f](https://github.com/Opentrons/opentrons/commit/ad3d77f)), closes [#4264](https://github.com/Opentrons/opentrons/issues/4264)
* **api:** apiv2: backcompat: implement LegacyWell position methods ([#4448](https://github.com/Opentrons/opentrons/issues/4448)) ([222cf37](https://github.com/Opentrons/opentrons/commit/222cf37))
* **api:** apiv2: implement instruments backcompat ([#4458](https://github.com/Opentrons/opentrons/issues/4458)) ([ffb2942](https://github.com/Opentrons/opentrons/commit/ffb2942)), closes [#3540](https://github.com/Opentrons/opentrons/issues/3540)
* **api:** apiv2: Limit protocols to max supported version ([#4365](https://github.com/Opentrons/opentrons/issues/4365)) ([8decf1a](https://github.com/Opentrons/opentrons/commit/8decf1a)), closes [#4342](https://github.com/Opentrons/opentrons/issues/4342)
* **api:** apiv2: v1-backcompat: implement module backcompat ([#4438](https://github.com/Opentrons/opentrons/issues/4438)) ([2a42591](https://github.com/Opentrons/opentrons/commit/2a42591)), closes [#3655](https://github.com/Opentrons/opentrons/issues/3655)
* **api:** check papi version on method call ([#4399](https://github.com/Opentrons/opentrons/issues/4399)) ([493029c](https://github.com/Opentrons/opentrons/commit/493029c)), closes [#4343](https://github.com/Opentrons/opentrons/issues/4343)
* **api:** enable v2 internals by default ([#4474](https://github.com/Opentrons/opentrons/issues/4474)) ([e25bb55](https://github.com/Opentrons/opentrons/commit/e25bb55))
* **api:** Migrate DB Labware into V2 Format ([#4256](https://github.com/Opentrons/opentrons/issues/4256)) ([d0c3f4a](https://github.com/Opentrons/opentrons/commit/d0c3f4a))
* **api:** register module instances on os events ([#4441](https://github.com/Opentrons/opentrons/issues/4441)) ([89afd64](https://github.com/Opentrons/opentrons/commit/89afd64)), closes [#3580](https://github.com/Opentrons/opentrons/issues/3580)
* **api:** surface protocol apiv1 backcompat in apiv2 ([#4473](https://github.com/Opentrons/opentrons/issues/4473)) ([831e963](https://github.com/Opentrons/opentrons/commit/831e963))
* **api:** warn tc-lid/gantry collision in simulation ([#4394](https://github.com/Opentrons/opentrons/issues/4394)) ([b22a3b3](https://github.com/Opentrons/opentrons/commit/b22a3b3)), closes [#4044](https://github.com/Opentrons/opentrons/issues/4044)
* **api,shared-data:** support p20/300/1k single v2.1 ([#4392](https://github.com/Opentrons/opentrons/issues/4392)) ([e743d2b](https://github.com/Opentrons/opentrons/commit/e743d2b)), closes [#4389](https://github.com/Opentrons/opentrons/issues/4389)
* **app,api:** allow rich version specification for python protocols ([#4358](https://github.com/Opentrons/opentrons/issues/4358)) ([b0adef5](https://github.com/Opentrons/opentrons/commit/b0adef5)), closes [#4338](https://github.com/Opentrons/opentrons/issues/4338)



### Bug Fixes

* **api:** ensure load name is attached to RPC "containers" ([#4530](https://github.com/Opentrons/opentrons/issues/4530)) ([4580aa4](https://github.com/Opentrons/opentrons/commit/4580aa4))
* **api:** Fix critical points and gantry config backup in http deck cal ([#4527](https://github.com/Opentrons/opentrons/issues/4527)) ([cfefab4](https://github.com/Opentrons/opentrons/commit/cfefab4))
* **api:** present loaded but unused pipettes and modules to rpc ([#4538](https://github.com/Opentrons/opentrons/issues/4538)) ([fe27ef7](https://github.com/Opentrons/opentrons/commit/fe27ef7))
* **api:** prevent liquid handling without a tip ([#4528](https://github.com/Opentrons/opentrons/issues/4528)) ([e1724ab](https://github.com/Opentrons/opentrons/commit/e1724ab)), closes [#4219](https://github.com/Opentrons/opentrons/issues/4219)
* **api:** clear running module tasks on cancel ([#4464](https://github.com/Opentrons/opentrons/issues/4464)) ([5135da9](https://github.com/Opentrons/opentrons/commit/5135da9))
* **api:** connect context to real thermocycler during calibration ([#4454](https://github.com/Opentrons/opentrons/issues/4454)) ([1d40fd6](https://github.com/Opentrons/opentrons/commit/1d40fd6))
* **api:** fix bad adv settings crash ([#4489](https://github.com/Opentrons/opentrons/issues/4489)) ([34fb8e7](https://github.com/Opentrons/opentrons/commit/34fb8e7))
* **api:** fix calibration issues in backcompat ([#4480](https://github.com/Opentrons/opentrons/issues/4480)) ([7153be3](https://github.com/Opentrons/opentrons/commit/7153be3))
* **api:** flag move to tc with in-between lid as unsafe ([#4488](https://github.com/Opentrons/opentrons/issues/4488)) ([1741088](https://github.com/Opentrons/opentrons/commit/1741088))
* **api:** Suppress error log during check for pipettes ([#4374](https://github.com/Opentrons/opentrons/issues/4374)) ([b68caac](https://github.com/Opentrons/opentrons/commit/b68caac)), closes [#4096](https://github.com/Opentrons/opentrons/issues/4096)
* **api:** tools: fix `write_pipette_memory` on host ([#4434](https://github.com/Opentrons/opentrons/issues/4434)) ([f3eef16](https://github.com/Opentrons/opentrons/commit/f3eef16))
* **api:** wrap modules hc instance in async adapter on load ([#4492](https://github.com/Opentrons/opentrons/issues/4492)) ([99d3a47](https://github.com/Opentrons/opentrons/commit/99d3a47))
* **api,shared-data:** fix gen2 multi positioning ([#4412](https://github.com/Opentrons/opentrons/issues/4412)) ([54be7f9](https://github.com/Opentrons/opentrons/commit/54be7f9))
* **APIV2:** Make tipracks always calibrate from top ([#4418](https://github.com/Opentrons/opentrons/issues/4418)) ([bf2cf8c](https://github.com/Opentrons/opentrons/commit/bf2cf8c))
* **app:** add handling for legacy(location,well,labware) in rpc ([#4478](https://github.com/Opentrons/opentrons/issues/4478)) ([4528c7a](https://github.com/Opentrons/opentrons/commit/4528c7a))
* **app,api:** display session error messages in SessionAlert ([#4378](https://github.com/Opentrons/opentrons/issues/4378)) ([19d3e00](https://github.com/Opentrons/opentrons/commit/19d3e00)), closes [#4367](https://github.com/Opentrons/opentrons/issues/4367)




### Performance Improvements

* **api:** use math.isclose in hotpaths ([#4510](https://github.com/Opentrons/opentrons/issues/4510)) ([fb6aef8](https://github.com/Opentrons/opentrons/commit/fb6aef8)), closes [#4482](https://github.com/Opentrons/opentrons/issues/4482) [#4482](https://github.com/Opentrons/opentrons/issues/4482)





## [3.14.1](https://github.com/Opentrons/opentrons/compare/v3.14.0...v3.14.1) (2019-11-11)

**Note:** Version bump only for package @opentrons/api-server





# [3.14.0](https://github.com/Opentrons/opentrons/compare/v3.13.2...v3.14.0) (2019-10-31)

### Bug Fixes

* **api:** apiv2: initialize simulator runflag ([#4330](https://github.com/Opentrons/opentrons/issues/4330)) ([9405695](https://github.com/Opentrons/opentrons/commit/9405695))
* **api:** Modify list check to return first item of source and dest ([#4331](https://github.com/Opentrons/opentrons/issues/4331)) ([4802beb](https://github.com/Opentrons/opentrons/commit/4802beb))
* **api:** update all pose tree state when calibrating labware ([#4322](https://github.com/Opentrons/opentrons/issues/4322)) ([24841ab](https://github.com/Opentrons/opentrons/commit/24841ab)), closes [#4288](https://github.com/Opentrons/opentrons/issues/4288)
* **api:** Allow Location types in advanced liquid handling functions ([#4276](https://github.com/Opentrons/opentrons/issues/4276)) ([8f015b8](https://github.com/Opentrons/opentrons/commit/8f015b8))
* **api:** always touch tip before blow out ([#4265](https://github.com/Opentrons/opentrons/issues/4265)) ([1e54098](https://github.com/Opentrons/opentrons/commit/1e54098))
* **api:** api1: consider model offset in cli deck cal tip pickup ([#4253](https://github.com/Opentrons/opentrons/issues/4253)) ([e1963ae](https://github.com/Opentrons/opentrons/commit/e1963ae)), closes [#4250](https://github.com/Opentrons/opentrons/issues/4250)
* **api:** apiv1: touch tip before blowing out during transfers ([#4231](https://github.com/Opentrons/opentrons/issues/4231)) ([294aa8f](https://github.com/Opentrons/opentrons/commit/294aa8f)), closes [#419](https://github.com/Opentrons/opentrons/issues/419)
* **api:** apiv2: correctly set smoothie speed ([#4263](https://github.com/Opentrons/opentrons/issues/4263)) ([3e6d26d](https://github.com/Opentrons/opentrons/commit/3e6d26d))
* **api:** apiv2: fix air gap in complex commands ([#4259](https://github.com/Opentrons/opentrons/issues/4259)) ([e4ba931](https://github.com/Opentrons/opentrons/commit/e4ba931))
* **api:** correctly handle mix optional arguments ([#4237](https://github.com/Opentrons/opentrons/issues/4237)) ([e5fa621](https://github.com/Opentrons/opentrons/commit/e5fa621))
* **api:** Do not throw warning if run flag is set ([#4294](https://github.com/Opentrons/opentrons/issues/4294)) ([150c784](https://github.com/Opentrons/opentrons/commit/150c784))
* **api:** Use proper currents for plunger home ([#4167](https://github.com/Opentrons/opentrons/issues/4167)) ([b17eaff](https://github.com/Opentrons/opentrons/commit/b17eaff)), closes [#3572](https://github.com/Opentrons/opentrons/issues/3572)
* **api,shared-data,labware-creator:** do not touch tip on troughs ([#4271](https://github.com/Opentrons/opentrons/issues/4271)) ([d7e76cd](https://github.com/Opentrons/opentrons/commit/d7e76cd)), closes [#4258](https://github.com/Opentrons/opentrons/issues/4258)


### Features

* **api:** Allow backwards compatibility with gen2 pipettes in apiv2 ([#4326](https://github.com/Opentrons/opentrons/issues/4326)) ([4609172](https://github.com/Opentrons/opentrons/commit/4609172))
* **api:** reflect original instrument name via rpc ([#4312](https://github.com/Opentrons/opentrons/issues/4312)) ([8bf0c85](https://github.com/Opentrons/opentrons/commit/8bf0c85))
* **api:** add ability to update TC firmware from robot ([#4277](https://github.com/Opentrons/opentrons/pull/4277))
* **api:** Add bundle creation to opentrons_simulate ([#4125](https://github.com/Opentrons/opentrons/issues/4125)) ([b1d9d66](https://github.com/Opentrons/opentrons/commit/b1d9d66))
* **api:** apiv2: add max speed control ([#4187](https://github.com/Opentrons/opentrons/issues/4187)) ([ed48382](https://github.com/Opentrons/opentrons/commit/ed48382))
* **api:** apiv2: conditionally enable backcompat ([#4234](https://github.com/Opentrons/opentrons/issues/4234)) ([806af2c](https://github.com/Opentrons/opentrons/commit/806af2c))
* **api:** apiv2: implement robot methods backcompat ([#4201](https://github.com/Opentrons/opentrons/issues/4201)) ([685599f](https://github.com/Opentrons/opentrons/commit/685599f)), closes [#3539](https://github.com/Opentrons/opentrons/issues/3539)
* **api:** deprecate api support for JSON v1/2 ([#4155](https://github.com/Opentrons/opentrons/issues/4155)) ([61361a8](https://github.com/Opentrons/opentrons/commit/61361a8)), closes [#4128](https://github.com/Opentrons/opentrons/issues/4128)
* **api:** implement deck item spanning first pass ([#4160](https://github.com/Opentrons/opentrons/issues/4160)) ([1b621a4](https://github.com/Opentrons/opentrons/commit/1b621a4)), closes [#3107](https://github.com/Opentrons/opentrons/issues/3107)
* **api:** Specify if a restart is required after changing some ffs ([#4233](https://github.com/Opentrons/opentrons/issues/4233)) ([9452ffa](https://github.com/Opentrons/opentrons/commit/9452ffa))
* **api:** v1: Add version specification to labware.load ([#4218](https://github.com/Opentrons/opentrons/issues/4218)) ([37060ce](https://github.com/Opentrons/opentrons/commit/37060ce)), closes [#4216](https://github.com/Opentrons/opentrons/issues/4216)





## [3.13.2](https://github.com/Opentrons/opentrons/compare/v3.13.1...v3.13.2) (2019-10-10)

**Note:** Version bump only for package @opentrons/api-server





## [3.13.1](https://github.com/Opentrons/opentrons/compare/v3.13.0...v3.13.1) (2019-10-09)


### Bug Fixes

* **api:** change trash definitions to avoid y head crash ([#4188](https://github.com/Opentrons/opentrons/issues/4188)) ([68b6201](https://github.com/Opentrons/opentrons/commit/68b6201))





# [3.13.0](https://github.com/Opentrons/opentrons/compare/v3.12.0...v3.13.0) (2019-10-02)

### Bug Fixes

* **api:** Only load labware for modules from bundles ([#4162](https://github.com/Opentrons/opentrons/issues/4162)) ([f3eb988](https://github.com/Opentrons/opentrons/commit/f3eb988))
* **api:** Put camera images in tempdirs ([#4163](https://github.com/Opentrons/opentrons/issues/4163)) ([1411da8](https://github.com/Opentrons/opentrons/commit/1411da8)), closes [#4122](https://github.com/Opentrons/opentrons/issues/4122)
* **api:** Do not run out of memory when dumping large logs ([#4157](https://github.com/Opentrons/opentrons/issues/4157)) ([56354f2](https://github.com/Opentrons/opentrons/commit/56354f2))
* **api:** Fix sim and exec entrypoints for bundled protocols ([#4149](https://github.com/Opentrons/opentrons/issues/4149)) ([7163924](https://github.com/Opentrons/opentrons/commit/7163924))
* **api:** reflect protocol text over rpc ([#4152](https://github.com/Opentrons/opentrons/issues/4152)) ([dae2de5](https://github.com/Opentrons/opentrons/commit/dae2de5))
* **api:** apiv2: allow pipette name or model in cache_instruments ([#4063](https://github.com/Opentrons/opentrons/issues/4063)) ([f29ab14](https://github.com/Opentrons/opentrons/commit/f29ab14)), closes [#4062](https://github.com/Opentrons/opentrons/issues/4062)
* **api:** apiv2: allow transfer with uneven sources and targets  ([#4107](https://github.com/Opentrons/opentrons/issues/4107)) ([036eca1](https://github.com/Opentrons/opentrons/commit/036eca1))
* **api:** apiv2: pass correct locations for mix in TransferPlan ([#4076](https://github.com/Opentrons/opentrons/issues/4076)) ([067098d](https://github.com/Opentrons/opentrons/commit/067098d))
* **api:** apiv2: Separate tip overlap per pipette ([#4106](https://github.com/Opentrons/opentrons/issues/4106)) ([1bac2a9](https://github.com/Opentrons/opentrons/commit/1bac2a9)), closes [#4103](https://github.com/Opentrons/opentrons/issues/4103)
* **api:** cache location before pick up tip during labware calibration ([#4033](https://github.com/Opentrons/opentrons/issues/4033)) ([8dc8bb9](https://github.com/Opentrons/opentrons/commit/8dc8bb9))
* **api:** dont parse the smoothie response to udpate_pipette_config ([#4112](https://github.com/Opentrons/opentrons/issues/4112)) ([109cdcc](https://github.com/Opentrons/opentrons/commit/109cdcc))
* **api:** Expand infer_version_from_metadata to catch more ([#4094](https://github.com/Opentrons/opentrons/issues/4094)) ([1f7ad77](https://github.com/Opentrons/opentrons/commit/1f7ad77)), closes [#3949](https://github.com/Opentrons/opentrons/issues/3949)
* **api:** fix format string in module slot assertion ([#4039](https://github.com/Opentrons/opentrons/issues/4039)) ([2a88233](https://github.com/Opentrons/opentrons/commit/2a88233))
* **api:** Fix miscellaneous bugs in deck CLI ([#4119](https://github.com/Opentrons/opentrons/issues/4119)) ([7e7196a](https://github.com/Opentrons/opentrons/commit/7e7196a))
* **api:** Fix usage of return tip height v1 ([#4040](https://github.com/Opentrons/opentrons/issues/4040)) ([3f4ace6](https://github.com/Opentrons/opentrons/commit/3f4ace6))
* **api:** Force the permanent mac address for wifi connections ([#4121](https://github.com/Opentrons/opentrons/issues/4121)) ([7cfa929](https://github.com/Opentrons/opentrons/commit/7cfa929))


### Features

* **api:** apiv1: load magdeck engage height from labware definitions ([#4042](https://github.com/Opentrons/opentrons/issues/4042)) ([f232659](https://github.com/Opentrons/opentrons/commit/f232659)), closes [#3832](https://github.com/Opentrons/opentrons/issues/3832)
* **api:** apiv2: improve accessors for loaded lw/mods/instrs ([#4068](https://github.com/Opentrons/opentrons/issues/4068)) ([fc289dd](https://github.com/Opentrons/opentrons/commit/fc289dd))
* **api:** Explicit cmdline and jupyter entrypoints ([#4032](https://github.com/Opentrons/opentrons/issues/4032)) ([b534096](https://github.com/Opentrons/opentrons/commit/b534096))
* **api:** replace format with quirks for rectangular well behavior ([#4027](https://github.com/Opentrons/opentrons/issues/4027)) ([42deac2](https://github.com/Opentrons/opentrons/commit/42deac2)), closes [#3894](https://github.com/Opentrons/opentrons/issues/3894)
* **api:** support experimental bundle execution ([#4099](https://github.com/Opentrons/opentrons/issues/4099)) ([1c503ed](https://github.com/Opentrons/opentrons/commit/1c503ed))





# [3.12.0](https://github.com/Opentrons/opentrons/compare/v3.11.4...v3.12.0) (2019-09-13)

### Bug Fixes

* **api:** check instrument name or type, allow gen2's ([#3933](https://github.com/Opentrons/opentrons/issues/3933)) ([6c0c49b](https://github.com/Opentrons/opentrons/commit/6c0c49b))
* **api:** fix overeager homing during smoothie errors ([#3979](https://github.com/Opentrons/opentrons/issues/3979)) ([1cc86f3](https://github.com/Opentrons/opentrons/commit/1cc86f3))
* **api:** fix tip probing not fully self-centering ([#4001](https://github.com/Opentrons/opentrons/issues/4001)) ([6d42fc3](https://github.com/Opentrons/opentrons/commit/6d42fc3)), closes [#3983](https://github.com/Opentrons/opentrons/issues/3983)
* **api:** remove protocol file size limit and ack immediately ([#4006](https://github.com/Opentrons/opentrons/issues/4006)) ([2a82724](https://github.com/Opentrons/opentrons/commit/2a82724)), closes [#3998](https://github.com/Opentrons/opentrons/issues/3998)


### Features

* **api:** Allow starting tip selection for pipettes ([#3935](https://github.com/Opentrons/opentrons/issues/3935)) ([e383034](https://github.com/Opentrons/opentrons/commit/e383034))
* **shared-data:** add NEST 96 PCR well plate 100 uL ([#3827](https://github.com/Opentrons/opentrons/issues/3827)) ([2a9a986](https://github.com/Opentrons/opentrons/commit/2a9a986))





## [3.11.4](https://github.com/Opentrons/opentrons/compare/v3.11.3...v3.11.4) (2019-08-29)

**Note:** Version bump only for package @opentrons/api-server





## [3.11.3](https://github.com/Opentrons/opentrons/compare/v3.11.2...v3.11.3) (2019-08-28)


### Bug Fixes

* **api:** do not swallow smoothie errors with certain patterns ([#3955](https://github.com/Opentrons/opentrons/issues/3955)) ([5c95c59](https://github.com/Opentrons/opentrons/commit/5c95c59))
* **api:** Restore the name, desc of tip probe reset in v1 ([#3952](https://github.com/Opentrons/opentrons/issues/3952)) ([27a4e95](https://github.com/Opentrons/opentrons/commit/27a4e95)), closes [#3950](https://github.com/Opentrons/opentrons/issues/3950)





## [3.11.2](https://github.com/Opentrons/opentrons/compare/v3.11.1...v3.11.2) (2019-08-21)

**Note:** Version bump only for package @opentrons/api-server





## [3.11.1](https://github.com/Opentrons/opentrons/compare/v3.11.0...v3.11.1) (2019-08-21)

**Note:** Version bump only for package @opentrons/api-server





# [3.11.0](https://github.com/Opentrons/opentrons/compare/v3.10.3...v3.11.0) (2019-08-21)


### Bug Fixes

* **api:** apiv1: fix transfer volume ([#3792](https://github.com/Opentrons/opentrons/issues/3792)) ([e3099af](https://github.com/Opentrons/opentrons/commit/e3099af))
* **api:** apiv2: fix mix, blowout in advanced steps ([#3799](https://github.com/Opentrons/opentrons/issues/3799)) ([48fc442](https://github.com/Opentrons/opentrons/commit/48fc442)), closes [#3719](https://github.com/Opentrons/opentrons/issues/3719)
* **api:** apiv2: fix overaspiration after blowout ([#3801](https://github.com/Opentrons/opentrons/issues/3801)) ([61e82c3](https://github.com/Opentrons/opentrons/commit/61e82c3)), closes [#3797](https://github.com/Opentrons/opentrons/issues/3797)
* **api:** Do not publish commands for RPC pause/resume in APIv1 ([#3850](https://github.com/Opentrons/opentrons/issues/3850)) ([72952ba](https://github.com/Opentrons/opentrons/commit/72952ba))
* **api:** duplicate mix with blowout during transfer ([#3810](https://github.com/Opentrons/opentrons/issues/3810)) ([9a70c36](https://github.com/Opentrons/opentrons/commit/9a70c36)), closes [#2607](https://github.com/Opentrons/opentrons/issues/2607)
* **api:** force nmcli to actively check for connectivity ([#3811](https://github.com/Opentrons/opentrons/issues/3811)) ([c200de3](https://github.com/Opentrons/opentrons/commit/c200de3)), closes [#3768](https://github.com/Opentrons/opentrons/issues/3768)


### Features

* **api:** Add a log aggregation optout ([#3868](https://github.com/Opentrons/opentrons/issues/3868)) ([ccb0b94](https://github.com/Opentrons/opentrons/commit/ccb0b94)), closes [#3866](https://github.com/Opentrons/opentrons/issues/3866)
* **api:** apiv2: prevent over-aspiration with filter tips ([#3781](https://github.com/Opentrons/opentrons/issues/3781)) ([4cc3023](https://github.com/Opentrons/opentrons/commit/4cc3023))
* **api:** cycle temperatures, pause, cancel, and resume to TC control ([#3839](https://github.com/Opentrons/opentrons/issues/3839)) ([6841419](https://github.com/Opentrons/opentrons/commit/6841419)), closes [#3581](https://github.com/Opentrons/opentrons/issues/3581)
* **api:** move gantry to safe spot while TC lid moves ([#3807](https://github.com/Opentrons/opentrons/issues/3807)) ([752295c](https://github.com/Opentrons/opentrons/commit/752295c))
* **app:** display TC on Deck Map ([#3786](https://github.com/Opentrons/opentrons/issues/3786)) ([272a6ad](https://github.com/Opentrons/opentrons/commit/272a6ad)), closes [#3553](https://github.com/Opentrons/opentrons/issues/3553) [#3064](https://github.com/Opentrons/opentrons/issues/3064)
* **app, api:** Key calibration by parent-type/labware-type combo ([#3800](https://github.com/Opentrons/opentrons/issues/3800)) ([ba0df67](https://github.com/Opentrons/opentrons/commit/ba0df67)), closes [#3775](https://github.com/Opentrons/opentrons/issues/3775)





<a name="3.10.3"></a>
## [3.10.3](https://github.com/Opentrons/opentrons/compare/v3.10.2...v3.10.3) (2019-07-26)


### Bug Fixes

* **api:** revert: "feat(api): prevent over-aspiration with filter tips in v1 ([#3692](https://github.com/opentrons/opentrons/issues/3692)) ([bd0808d](https://github.com/Opentrons/opentrons/commit/bd0808d726b7b17c35fa0116638b28f143d140e0))



<a name="3.10.2"></a>
## [3.10.2](https://github.com/Opentrons/opentrons/compare/v3.10.0...v3.10.2) (2019-07-25)


### Bug Fixes

* **api:** Allow gen2 reference in protocol without pipette attached ([#3760](https://github.com/Opentrons/opentrons/issues/3760)) ([e6c0b48](https://github.com/Opentrons/opentrons/commit/e6c0b48))
* **api:** apiv1: handle partial db schema changes ([#3783](https://github.com/Opentrons/opentrons/issues/3783)) ([5d52cd7](https://github.com/Opentrons/opentrons/commit/5d52cd7))
* **api:** Save the difference between offsets in labwarev2 cal ([#3782](https://github.com/Opentrons/opentrons/commit/35a095aa5d74e02a183c71ddf58ad7ee97360a6a))
* **api:** apiv2: Correctly handle flow rates and plunger speeds ([#3739](https://github.com/Opentrons/opentrons/issues/3739)) ([01c0fcb](https://github.com/Opentrons/opentrons/commit/01c0fcb)), closes [#3737](https://github.com/Opentrons/opentrons/issues/3737) [#3270](https://github.com/Opentrons/opentrons/issues/3270)
* **api:** apiv2: Display locs for drop/pickup from implicit locs ([#3774](https://github.com/Opentrons/opentrons/issues/3774)) ([cf7710f](https://github.com/Opentrons/opentrons/commit/cf7710f)), closes [#3364](https://github.com/Opentrons/opentrons/issues/3364)
* **api:** apiv2: fix protocol cancel ([#3725](https://github.com/Opentrons/opentrons/issues/3725)) ([b2b8c46](https://github.com/Opentrons/opentrons/commit/b2b8c46))
* **api:** apiv2: simulator should find pipettes by name versus model ([#3779](https://github.com/Opentrons/opentrons/issues/3779)) ([a0fd72b](https://github.com/Opentrons/opentrons/commit/a0fd72b))
* **api:** fix blow out logic ([#3764](https://github.com/Opentrons/opentrons/issues/3764)) ([fb99bf0](https://github.com/Opentrons/opentrons/commit/fb99bf0))
* **api:** Modify delay and motors which are disengaged ([#3770](https://github.com/Opentrons/opentrons/issues/3770)) ([1eb760c](https://github.com/Opentrons/opentrons/commit/1eb760c))
* **api:** Remove model name check for non-gen2 pipettes ([#3761](https://github.com/Opentrons/opentrons/issues/3761)) ([263b536](https://github.com/Opentrons/opentrons/commit/263b536))
* **api:** Use pip config presses by default ([#3778](https://github.com/Opentrons/opentrons/issues/3778)) ([8fce1a9](https://github.com/Opentrons/opentrons/commit/8fce1a9))
* **factory_scripts:** Remove old func name and refactor IP look-up ([#3763](https://github.com/Opentrons/opentrons/issues/3763)) ([2847cad](https://github.com/Opentrons/opentrons/commit/2847cad))


### Features

* **api:** Make blow out flow rate settable ([#3735](https://github.com/Opentrons/opentrons/issues/3735)) ([e12b4fd](https://github.com/Opentrons/opentrons/commit/e12b4fd)), closes [#3733](https://github.com/Opentrons/opentrons/issues/3733)
* **api:** prevent over-aspiration with filter tips in v1  ([#3692](https://github.com/Opentrons/opentrons/issues/3692)) ([487927a](https://github.com/Opentrons/opentrons/commit/487927a))
* **shared-data:** add displayCategory to pipetteNameSpecs and schema ([#3731](https://github.com/Opentrons/opentrons/issues/3731)) ([3b39dea](https://github.com/Opentrons/opentrons/commit/3b39dea))





<a name="3.10.1"></a>
## [3.10.1](https://github.com/Opentrons/opentrons/compare/v3.10.0...v3.10.1) (2019-07-19)


### Bug Fixes

* **api:** apiv2: Correctly handle flow rates and plunger speeds ([#3739](https://github.com/Opentrons/opentrons/issues/3739)) ([01c0fcb](https://github.com/Opentrons/opentrons/commit/01c0fcb)), closes [#3737](https://github.com/Opentrons/opentrons/issues/3737) [#3270](https://github.com/Opentrons/opentrons/issues/3270)
* **api:** apiv2: fix protocol cancel ([#3725](https://github.com/Opentrons/opentrons/issues/3725)) ([b2b8c46](https://github.com/Opentrons/opentrons/commit/b2b8c46))


### Features

* **api:** Make blow out flow rate settable ([#3735](https://github.com/Opentrons/opentrons/issues/3735)) ([e12b4fd](https://github.com/Opentrons/opentrons/commit/e12b4fd)), closes [#3733](https://github.com/Opentrons/opentrons/issues/3733)
* **shared-data:** add displayCategory to pipetteNameSpecs and schema ([#3731](https://github.com/Opentrons/opentrons/issues/3731)) ([3b39dea](https://github.com/Opentrons/opentrons/commit/3b39dea))





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
* **api:** Fix module calibration in API V2 ([#3675](https://github.com/Opentrons/opentrons/issues/3675)) ([d214c5a](https://github.com/Opentrons/opentrons/commit/d214c5a))
* **api:** increase serial response timeout for thermocycler ([#3711](https://github.com/Opentrons/opentrons/issues/3711)) ([4018870](https://github.com/Opentrons/opentrons/commit/4018870))
* **api:** Make BCRobot fw_version sync again ([#3688](https://github.com/Opentrons/opentrons/issues/3688)) ([067fe4c](https://github.com/Opentrons/opentrons/commit/067fe4c))
* **api:** Remove usage of time.clock() ([#3635](https://github.com/Opentrons/opentrons/issues/3635)) ([a9c7237](https://github.com/Opentrons/opentrons/commit/a9c7237))
* **api:** Synchronize access to the smoothie and rpc ([#3528](https://github.com/Opentrons/opentrons/issues/3528)) ([628c6c4](https://github.com/Opentrons/opentrons/commit/628c6c4)), closes [#3527](https://github.com/Opentrons/opentrons/issues/3527)
* **api:** unrestrict thermocycler lid at api level for testing ([#3705](https://github.com/Opentrons/opentrons/issues/3705)) ([f46ad49](https://github.com/Opentrons/opentrons/commit/f46ad49))


### Features

* **api:** Add a quirk for return tip height ([#3687](https://github.com/Opentrons/opentrons/issues/3687)) ([3a89b69](https://github.com/Opentrons/opentrons/commit/3a89b69))
* **api:** Add Gen2 multichannel pipette api support ([#3691](https://github.com/Opentrons/opentrons/issues/3691)) ([d1ae1ed](https://github.com/Opentrons/opentrons/commit/d1ae1ed))
* **api:** Add hardware control socket server ([#3633](https://github.com/Opentrons/opentrons/issues/3633)) ([6cac0b5](https://github.com/Opentrons/opentrons/commit/6cac0b5)), closes [#3544](https://github.com/Opentrons/opentrons/issues/3544)
* **api:** add missing TC stuff for science testing ([#3348](https://github.com/Opentrons/opentrons/issues/3348)) ([0640c7a](https://github.com/Opentrons/opentrons/commit/0640c7a))
* **api:** Add speed settings to apiv2 ([#3708](https://github.com/Opentrons/opentrons/issues/3708)) ([45ec246](https://github.com/Opentrons/opentrons/commit/45ec246))
* **api:** Always remove v2 calibration ([#3701](https://github.com/Opentrons/opentrons/issues/3701)) ([dea5d40](https://github.com/Opentrons/opentrons/commit/dea5d40)), closes [#3700](https://github.com/Opentrons/opentrons/issues/3700)
* **api:** default to labware version 1, not latest ([#3667](https://github.com/Opentrons/opentrons/issues/3667)) ([53b48ba](https://github.com/Opentrons/opentrons/commit/53b48ba)), closes [#3664](https://github.com/Opentrons/opentrons/issues/3664)
* **api:** do not use labware otId ([#3515](https://github.com/Opentrons/opentrons/issues/3515)) ([744075f](https://github.com/Opentrons/opentrons/commit/744075f))
* **api:** reference calibration data via hash of labware def ([#3498](https://github.com/Opentrons/opentrons/issues/3498)) ([0475586](https://github.com/Opentrons/opentrons/commit/0475586)), closes [#3493](https://github.com/Opentrons/opentrons/issues/3493)
* **api:** save labware under namespace/load_name/version ([#3487](https://github.com/Opentrons/opentrons/issues/3487)) ([400d6e6](https://github.com/Opentrons/opentrons/commit/400d6e6)), closes [#3474](https://github.com/Opentrons/opentrons/issues/3474)
* **app:** add support for v2 labware ([#3590](https://github.com/Opentrons/opentrons/issues/3590)) ([0b74937](https://github.com/Opentrons/opentrons/commit/0b74937)), closes [#3451](https://github.com/Opentrons/opentrons/issues/3451)
* **labware:** update labware mapping ([#3636](https://github.com/Opentrons/opentrons/issues/3636)) ([a1e6005](https://github.com/Opentrons/opentrons/commit/a1e6005)), closes [#3605](https://github.com/Opentrons/opentrons/issues/3605)
* **protocol-designer:** save v3 protocols ([#3588](https://github.com/Opentrons/opentrons/issues/3588)) ([40f3a9e](https://github.com/Opentrons/opentrons/commit/40f3a9e)), closes [#3336](https://github.com/Opentrons/opentrons/issues/3336) [#3414](https://github.com/Opentrons/opentrons/issues/3414)





<a name="3.9.0"></a>
# [3.9.0](https://github.com/Opentrons/opentrons/compare/v3.8.3...v3.9.0) (2019-05-29)


### Bug Fixes

* **api:** Add separate key for new steps per mm shape ([#3499](https://github.com/Opentrons/opentrons/issues/3499)) ([50bb2a9](https://github.com/Opentrons/opentrons/commit/50bb2a9))
* **api:** Don't talk about apiv2 if you can't find a labware ([#3435](https://github.com/Opentrons/opentrons/issues/3435)) ([d31f1a5](https://github.com/Opentrons/opentrons/commit/d31f1a5))
* **api:** Fix default transfer tip behavior ([#3486](https://github.com/Opentrons/opentrons/issues/3486)) ([4534e6f](https://github.com/Opentrons/opentrons/commit/4534e6f))
* **api:** Handle smoothie update better ([#3437](https://github.com/Opentrons/opentrons/issues/3437)) ([d2569d8](https://github.com/Opentrons/opentrons/commit/d2569d8))


### Features

* **api:** Add backwards compatibility to old pipette constructors ([#3438](https://github.com/Opentrons/opentrons/issues/3438)) ([25cf5fe](https://github.com/Opentrons/opentrons/commit/25cf5fe))
* **api:** Add G Code for pipette config in driver ([#3388](https://github.com/Opentrons/opentrons/issues/3388)) ([77fffa6](https://github.com/Opentrons/opentrons/commit/77fffa6))
* **api:** add pipette plus constructors ([#3407](https://github.com/Opentrons/opentrons/issues/3407)) ([f4feee9](https://github.com/Opentrons/opentrons/commit/f4feee9))
* **api:** Add pipette+ to write_pipette_memory ([#3405](https://github.com/Opentrons/opentrons/issues/3405)) ([1b35ed1](https://github.com/Opentrons/opentrons/commit/1b35ed1))
* **api:** Allow loading labware v2 definitions directly into apiv1 ([#3466](https://github.com/Opentrons/opentrons/issues/3466)) ([a3201fb](https://github.com/Opentrons/opentrons/commit/a3201fb))
* **api:** apiv2: allow returning tips to the tip tracker ([#3470](https://github.com/Opentrons/opentrons/issues/3470)) ([0c73aa1](https://github.com/Opentrons/opentrons/commit/0c73aa1))
* **api:** buildroot: allow separate setting of upstream log level ([#3436](https://github.com/Opentrons/opentrons/issues/3436)) ([ebc41a4](https://github.com/Opentrons/opentrons/commit/ebc41a4)), closes [#3422](https://github.com/Opentrons/opentrons/issues/3422)
* **api:** Detect and change behavior for buildroot system ([#3367](https://github.com/Opentrons/opentrons/issues/3367)) ([a439f5b](https://github.com/Opentrons/opentrons/commit/a439f5b))
* **api:** Enable Double Drop Quirk ([#3485](https://github.com/Opentrons/opentrons/issues/3485)) ([e864150](https://github.com/Opentrons/opentrons/commit/e864150))
* **api:** Make pipette quirks configurable ([#3463](https://github.com/Opentrons/opentrons/issues/3463)) ([3513794](https://github.com/Opentrons/opentrons/commit/3513794))
* **api:** support running v3 protocols in APIv1 ([#3468](https://github.com/Opentrons/opentrons/issues/3468)) ([0ff1ab6](https://github.com/Opentrons/opentrons/commit/0ff1ab6)), closes [#3449](https://github.com/Opentrons/opentrons/issues/3449)
* **repo:** change v2 labware len/width fields ([#3410](https://github.com/Opentrons/opentrons/issues/3410)) ([0ef0bd5](https://github.com/Opentrons/opentrons/commit/0ef0bd5))


<a name="3.8.3"></a>
## [3.8.3](https://github.com/Opentrons/opentrons/compare/v3.8.2...v3.8.3) (2019-04-30)


### Features

* **api:** Add new 10ul tiprack ([#3393](https://github.com/Opentrons/opentrons/issues/3393)) ([a7c15cc](https://github.com/Opentrons/opentrons/commit/a7c15cc))


<a name="3.8.2"></a>
## [3.8.2](https://github.com/Opentrons/opentrons/compare/v3.8.1...v3.8.2) (2019-04-23)


### Bug Fixes

* **api:** Do not sleep in simulated delays ([#3347](https://github.com/Opentrons/opentrons/issues/3347)) ([e12e200](https://github.com/Opentrons/opentrons/commit/e12e200)), closes [#3346](https://github.com/Opentrons/opentrons/issues/3346)
* **api:** Remove module load regression in V2 ([#3288](https://github.com/Opentrons/opentrons/issues/3288)) ([7fe143a](https://github.com/Opentrons/opentrons/commit/7fe143a))


### Features

* **api:** Add Geometry Logic For Thermocycler Configurations ([#3266](https://github.com/Opentrons/opentrons/issues/3266)) ([4d8e463](https://github.com/Opentrons/opentrons/commit/4d8e463))
* **api:** define & execute v3 json protocols ([#3312](https://github.com/Opentrons/opentrons/issues/3312)) ([988407d](https://github.com/Opentrons/opentrons/commit/988407d)), closes [#3110](https://github.com/Opentrons/opentrons/issues/3110)
* **api:** publish pause and delay commands in python and JSON ([#3310](https://github.com/Opentrons/opentrons/issues/3310)) ([5656d65](https://github.com/Opentrons/opentrons/commit/5656d65)), closes [#3308](https://github.com/Opentrons/opentrons/issues/3308)
* **api:** validate JSON protocols before executing ([#3318](https://github.com/Opentrons/opentrons/issues/3318)) ([9c15f7d](https://github.com/Opentrons/opentrons/commit/9c15f7d)), closes [#3250](https://github.com/Opentrons/opentrons/issues/3250)
* **api:** wire up TC deactivate, and add module cmd exec endpoint ([#3264](https://github.com/Opentrons/opentrons/issues/3264)) ([483122a](https://github.com/Opentrons/opentrons/commit/483122a)), closes [#2981](https://github.com/Opentrons/opentrons/issues/2981)
* **update-server:** add buildroot migration ([#3321](https://github.com/Opentrons/opentrons/issues/3321)) ([76d6b28](https://github.com/Opentrons/opentrons/commit/76d6b28)), closes [#2880](https://github.com/Opentrons/opentrons/issues/2880) [#2881](https://github.com/Opentrons/opentrons/issues/2881)





<a name="3.8.1"></a>
## [3.8.1](https://github.com/Opentrons/opentrons/compare/v3.8.0...v3.8.1) (2019-03-29)


### Bug Fixes

* **api:** Correctly migrate probe center settings ([#3246](https://github.com/Opentrons/opentrons/issues/3246)) ([84d3b00](https://github.com/Opentrons/opentrons/commit/84d3b00))
* **api:** simulate needs to set loglevel ([#3268](https://github.com/Opentrons/opentrons/issues/3268)) ([37c00fb](https://github.com/Opentrons/opentrons/commit/37c00fb))
* **api,shared-data:** Lowercase labware names and camelCase categories ([#3234](https://github.com/Opentrons/opentrons/issues/3234)) ([55e332e](https://github.com/Opentrons/opentrons/commit/55e332e)), closes [#3231](https://github.com/Opentrons/opentrons/issues/3231)
* **app:** Fix modules not populating the modules card ([#3278](https://github.com/Opentrons/opentrons/issues/3278)) ([1fd936d](https://github.com/Opentrons/opentrons/commit/1fd936d))


### Features

* **api:** Add more pick up tip config elements to pipette config ([#3237](https://github.com/Opentrons/opentrons/issues/3237)) ([f69da42](https://github.com/Opentrons/opentrons/commit/f69da42))
* **api:** Add support for (p300m,p50m,p10s,p1000s)v1.5 ([#3265](https://github.com/Opentrons/opentrons/issues/3265)) ([9dfc127](https://github.com/Opentrons/opentrons/commit/9dfc127))
* **api:** add z margin override ([#3235](https://github.com/Opentrons/opentrons/issues/3235)) ([341385c](https://github.com/Opentrons/opentrons/commit/341385c))
* **api:** allow robot to discover thermocycler and return live data ([#3239](https://github.com/Opentrons/opentrons/issues/3239)) ([34af269](https://github.com/Opentrons/opentrons/commit/34af269)), closes [#2958](https://github.com/Opentrons/opentrons/issues/2958)
* **api:** move-to-slot JSON protocol command ([#3242](https://github.com/Opentrons/opentrons/issues/3242)) ([cef5123](https://github.com/Opentrons/opentrons/commit/cef5123))
* **api:** Print out the runlog in the simulate script ([#3251](https://github.com/Opentrons/opentrons/issues/3251)) ([73d755f](https://github.com/Opentrons/opentrons/commit/73d755f))





<a name="3.8.0"></a>
# [3.8.0](https://github.com/Opentrons/opentrons/compare/v3.7.0...v3.8.0) (2019-03-19)


### Bug Fixes

* **api:** Access wells in calibration so 1-well containers are ok ([#3187](https://github.com/Opentrons/opentrons/issues/3187)) ([05ad4b1](https://github.com/Opentrons/opentrons/commit/05ad4b1))
* **api:** force update tempdeck target temp cache ([#3223](https://github.com/Opentrons/opentrons/issues/3223)) ([175461b](https://github.com/Opentrons/opentrons/commit/175461b)), closes [#3218](https://github.com/Opentrons/opentrons/issues/3218)
* **api:** cache modules in singleton for apiV1 protocols ([#3219](https://github.com/Opentrons/opentrons/issues/3219)) ([058319f](https://github.com/Opentrons/opentrons/commit/058319f)), closes [#3205](https://github.com/Opentrons/opentrons/issues/3205)
* **api:** Clear globals in simulate script thing ([#3156](https://github.com/Opentrons/opentrons/issues/3156)) ([58ddfb6](https://github.com/Opentrons/opentrons/commit/58ddfb6))
* **api:** cli deck cal pipette control and tests ([#3222](https://github.com/Opentrons/opentrons/issues/3222)) ([0e95e08](https://github.com/Opentrons/opentrons/commit/0e95e08))
* **api:** Fix the mount calibration pipette control ([#3228](https://github.com/Opentrons/opentrons/issues/3228)) ([962b0a7](https://github.com/Opentrons/opentrons/commit/962b0a7))
* **api:** Manually publish to broker in param-mangling commands ([#3159](https://github.com/Opentrons/opentrons/issues/3159)) ([17e86bf](https://github.com/Opentrons/opentrons/commit/17e86bf)), closes [#3105](https://github.com/Opentrons/opentrons/issues/3105)


### Features

* **api:** Add interruptable poller to Thermocycler driver & API with lid open/close ([#3118](https://github.com/Opentrons/opentrons/issues/3118)) ([b04add2](https://github.com/Opentrons/opentrons/commit/b04add2))
* **api:** add pipette config endpoint ([#3128](https://github.com/Opentrons/opentrons/issues/3128)) ([b6b958b](https://github.com/Opentrons/opentrons/commit/b6b958b))
* **api:** Add set_temperature command to API and driver ([#3152](https://github.com/Opentrons/opentrons/issues/3152)) ([bde3b1c](https://github.com/Opentrons/opentrons/commit/bde3b1c)), closes [#2979](https://github.com/Opentrons/opentrons/issues/2979)
* **api:** add udev rule for thermocycler board, include rule file in makefile ([#3203](https://github.com/Opentrons/opentrons/issues/3203)) ([d47fee0](https://github.com/Opentrons/opentrons/commit/d47fee0)), closes [#3144](https://github.com/Opentrons/opentrons/issues/3144)





<a name="3.7.0"></a>
# [3.7.0](https://github.com/Opentrons/opentrons/compare/v3.6.5...v3.7.0) (2019-02-19)


### Bug Fixes

* **api:** Add gpio.set_button_light() to QC tools scripts, so they work with 3.6 changes ([#2890](https://github.com/Opentrons/opentrons/issues/2890)) ([aca6931](https://github.com/Opentrons/opentrons/commit/aca6931))
* **api:** api2: Do not do a "safety move" when homing the plunger ([#2965](https://github.com/Opentrons/opentrons/issues/2965)) ([28edc68](https://github.com/Opentrons/opentrons/commit/28edc68))
* **api:** Avoid resource contention on smoothie serial during boot ([#3035](https://github.com/Opentrons/opentrons/issues/3035)) ([3f9a4e3](https://github.com/Opentrons/opentrons/commit/3f9a4e3))
* **api:** Correctly format acceleration from settings as dict ([#2964](https://github.com/Opentrons/opentrons/issues/2964)) ([45a49e0](https://github.com/Opentrons/opentrons/commit/45a49e0))
* **api:** Flush and sync config file writes immediately ([#2899](https://github.com/Opentrons/opentrons/issues/2899)) ([3905e72](https://github.com/Opentrons/opentrons/commit/3905e72))


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


### Performance Improvements

* **api:** New aspiration functions for all pipettes ([#3014](https://github.com/Opentrons/opentrons/issues/3014)) ([ae850ce](https://github.com/Opentrons/opentrons/commit/ae850ce)), closes [#3012](https://github.com/Opentrons/opentrons/issues/3012)





<a name="3.6.5"></a>
## [3.6.5](https://github.com/Opentrons/opentrons/compare/v3.6.4...v3.6.5) (2018-12-18)


### Bug Fixes

* **api:** Fix extract metadata ([#2833](https://github.com/Opentrons/opentrons/issues/2833)) ([0930915](https://github.com/Opentrons/opentrons/commit/0930915))
* **api:** Remove the intermingled old aspirate function from p10s ([#2839](https://github.com/Opentrons/opentrons/issues/2839)) ([696184c](https://github.com/Opentrons/opentrons/commit/696184c))





<a name="3.6.4"></a>
## [3.6.4](https://github.com/Opentrons/opentrons/compare/v3.6.3...v3.6.4) (2018-12-17)


### Features

* **api:** Adds optional arg to QC scripts to specify UART port ([#2825](https://github.com/Opentrons/opentrons/issues/2825)) ([5d622ad](https://github.com/Opentrons/opentrons/commit/5d622ad))





<a name="3.6.3"></a>
## [3.6.3](https://github.com/Opentrons/opentrons/compare/v3.6.2...v3.6.3) (2018-12-13)

**Note:** Version bump only for package @opentrons/api-server





<a name="3.6.2"></a>
## [3.6.2](https://github.com/Opentrons/opentrons/compare/v3.6.0...v3.6.2) (2018-12-11)


### Bug Fixes

* **api:** Do not overwrite settings every time we get config files ([#2802](https://github.com/Opentrons/opentrons/issues/2802)) ([c679c5c](https://github.com/Opentrons/opentrons/commit/c679c5c))


### Features

* **api:** Add metadata to session for Python protocols ([#2799](https://github.com/Opentrons/opentrons/issues/2799)) ([1da19bb](https://github.com/Opentrons/opentrons/commit/1da19bb)), closes [#2616](https://github.com/Opentrons/opentrons/issues/2616)
* **api:** p10 behavior feature flag ([#2794](https://github.com/Opentrons/opentrons/issues/2794)) ([c468b06](https://github.com/Opentrons/opentrons/commit/c468b06)), closes [#2792](https://github.com/Opentrons/opentrons/issues/2792)





<a name="3.6.1"></a>
## [3.6.1](https://github.com/Opentrons/opentrons/compare/v3.6.0...v3.6.1) (2018-12-05)

### Bug Fixes

* **api:** Fix bad P10S config causing under-aspirations ([#2774](https://github.com/Opentrons/opentrons/issues/2774)) ([9c5e0a2](https://github.com/Opentrons/opentrons/commit/9c5e0a2))





<a name="3.6.0"></a>
# [3.6.0](https://github.com/Opentrons/opentrons/compare/v3.6.0-beta.1...v3.6.0) (2018-11-29)


### Bug Fixes

* **shared-data:** fix total-liquid-volume of opentrons-tuberack-50ml ([#2744](https://github.com/Opentrons/opentrons/issues/2744)) ([aef8cc8](https://github.com/Opentrons/opentrons/commit/aef8cc8)), closes [#2743](https://github.com/Opentrons/opentrons/issues/2743)





<a name="3.6.0-beta.1"></a>
# [3.6.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.6.0-beta.0...v3.6.0-beta.1) (2018-11-27)


### Features

* **api:** Add 1.5ml tuberack to old labware definition section ([#2679](https://github.com/Opentrons/opentrons/issues/2679)) ([2739038](https://github.com/Opentrons/opentrons/commit/2739038))
* **api:** Adds pipette models v1.4 to robot config ([#2689](https://github.com/Opentrons/opentrons/issues/2689)) ([fd9c38a](https://github.com/Opentrons/opentrons/commit/fd9c38a))


### Performance Improvements

* **api:** Decrease plunger motor max speed by 20% ([#2682](https://github.com/Opentrons/opentrons/issues/2682)) ([f8b7ccf](https://github.com/Opentrons/opentrons/commit/f8b7ccf))





<a name="3.6.0-beta.0"></a>
# [3.6.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.5.1...v3.6.0-beta.0) (2018-11-13)


### Bug Fixes

* **api:** Correct well ordering for custom labware ([#2633](https://github.com/Opentrons/opentrons/issues/2633)) ([8e7530c](https://github.com/Opentrons/opentrons/commit/8e7530c)), closes [#2631](https://github.com/Opentrons/opentrons/issues/2631)
* **api:** Fix bug where drop-tip current is not used while actually dropping tip ([#2572](https://github.com/Opentrons/opentrons/issues/2572)) ([d7c7f60](https://github.com/Opentrons/opentrons/commit/d7c7f60))


### Features

* **api:** Pipette id included in GET /pipettes ([#2564](https://github.com/Opentrons/opentrons/issues/2564)) ([0a171fe](https://github.com/Opentrons/opentrons/commit/0a171fe)), closes [#2148](https://github.com/Opentrons/opentrons/issues/2148)
* **api:** support offset in json protocol touch-tip command ([#2566](https://github.com/Opentrons/opentrons/issues/2566)) ([d54ee84](https://github.com/Opentrons/opentrons/commit/d54ee84))
* **shared-data:** support unversioned pipettes in JSON protocols ([#2605](https://github.com/Opentrons/opentrons/issues/2605)) ([9e84ff6](https://github.com/Opentrons/opentrons/commit/9e84ff6))





<a name="3.5.1"></a>
# [3.5.1](https://github.com/Opentrons/opentrons/compare/v3.5.0-beta.1...v3.5.1) (2018-10-26)


### Bug Fixes

* **api:** Correct GET /wifi/keys response to match documentation ([#2532](https://github.com/Opentrons/opentrons/issues/2532)) ([9e577b2](https://github.com/Opentrons/opentrons/commit/9e577b2))
* **api:** Fix height of p1000 tip rack definition ([#2547](https://github.com/Opentrons/opentrons/issues/2547)) ([8a92e82](https://github.com/Opentrons/opentrons/commit/8a92e82))


### Features

* **api:** Add ability to save new delta from calibrating labware ([#2503](https://github.com/Opentrons/opentrons/issues/2503)) ([a6e3a24](https://github.com/Opentrons/opentrons/commit/a6e3a24))
* **api:** Clear labware calibrations in new labware system ([#2513](https://github.com/Opentrons/opentrons/issues/2513)) ([cb3d12e](https://github.com/Opentrons/opentrons/commit/cb3d12e)), closes [#2276](https://github.com/Opentrons/opentrons/issues/2276)
* **api:** Use deck-absolute coords in hardware_control ([#2502](https://github.com/Opentrons/opentrons/issues/2502)) ([36c9f73](https://github.com/Opentrons/opentrons/commit/36c9f73)), closes [#2238](https://github.com/Opentrons/opentrons/issues/2238)





<a name="3.5.0-beta.0"></a>
# [3.5.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.4.0...v3.5.0-beta.0) (2018-10-11)


### Bug Fixes

* **api:** Bind jupyter notebook to 0.0.0.0 ([#2398](https://github.com/Opentrons/opentrons/issues/2398)) ([be24335](https://github.com/Opentrons/opentrons/commit/be24335)), closes [#2394](https://github.com/Opentrons/opentrons/issues/2394)
* **api:** Change api update ignore route to be accessible to client ([#2368](https://github.com/Opentrons/opentrons/issues/2368)) ([b581f2a](https://github.com/Opentrons/opentrons/commit/b581f2a)), closes [#2367](https://github.com/Opentrons/opentrons/issues/2367)
* **api:** Remove unnecessary return in hardware controller ([#2450](https://github.com/Opentrons/opentrons/issues/2450)) ([5e28aff](https://github.com/Opentrons/opentrons/commit/5e28aff))


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





<a name="3.4.0"></a>
# [3.4.0](https://github.com/Opentrons/opentrons/compare/v3.4.0-beta.0...v3.4.0) (2018-09-21)


### Bug Fixes

* **api:** Patch resources/scripts to always be executable ([#2314](https://github.com/Opentrons/opentrons/issues/2314)) ([7db14bc](https://github.com/Opentrons/opentrons/commit/7db14bc)), closes [#2313](https://github.com/Opentrons/opentrons/issues/2313)
* **api:** Update definitions for tuberacks ([#2317](https://github.com/Opentrons/opentrons/issues/2317)) ([4ce2595](https://github.com/Opentrons/opentrons/commit/4ce2595)), closes [#2290](https://github.com/Opentrons/opentrons/issues/2290)
* **api:** Update the aluminum block definitions to match drawings ([#2342](https://github.com/Opentrons/opentrons/issues/2342)) ([4c1e4c2](https://github.com/Opentrons/opentrons/commit/4c1e4c2)), closes [#2292](https://github.com/Opentrons/opentrons/issues/2292)
* **api:** When reseting the robot singleton, clear added tips ([#2323](https://github.com/Opentrons/opentrons/issues/2323)) ([710e2d6](https://github.com/Opentrons/opentrons/commit/710e2d6))


### Features

* **api:** Add ability to connect to WPA2-Enterprise networks ([#2283](https://github.com/Opentrons/opentrons/issues/2283)) ([972b501](https://github.com/Opentrons/opentrons/commit/972b501)), closes [#2252](https://github.com/Opentrons/opentrons/issues/2252) [#2251](https://github.com/Opentrons/opentrons/issues/2251) [#2284](https://github.com/Opentrons/opentrons/issues/2284)
* **api:** Flash the smoothie on api boot if versions don't match ([#2325](https://github.com/Opentrons/opentrons/issues/2325)) ([b015f58](https://github.com/Opentrons/opentrons/commit/b015f58))
* **api:** Remove deck calibration from reset options ([#2330](https://github.com/Opentrons/opentrons/issues/2330)) ([f7d0c48](https://github.com/Opentrons/opentrons/commit/f7d0c48))
* **api:** support optional pause message ([#2306](https://github.com/Opentrons/opentrons/issues/2306)) ([e8056ae](https://github.com/Opentrons/opentrons/commit/e8056ae)), closes [#1694](https://github.com/Opentrons/opentrons/issues/1694)





<a name="3.4.0-beta.0"></a>
# [3.4.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.3.1-beta.0...v3.4.0-beta.0) (2018-09-14)


### Bug Fixes

* **api:** Do not bind the api server to localhost if socket specd ([#2258](https://github.com/Opentrons/opentrons/issues/2258)) ([d534c6f](https://github.com/Opentrons/opentrons/commit/d534c6f)), closes [#2256](https://github.com/Opentrons/opentrons/issues/2256)
* **api:** Fix pipette volume params and revert change in param order ([#2255](https://github.com/Opentrons/opentrons/issues/2255)) ([55d2cd5](https://github.com/Opentrons/opentrons/commit/55d2cd5))
* **api:** throw early error on bad json delay cmd ([#2219](https://github.com/Opentrons/opentrons/issues/2219)) ([3d907d1](https://github.com/Opentrons/opentrons/commit/3d907d1))


### Features

* **api:** Add wifi key upload endpoints ([#2254](https://github.com/Opentrons/opentrons/issues/2254)) ([250101c](https://github.com/Opentrons/opentrons/commit/250101c)), closes [#2253](https://github.com/Opentrons/opentrons/issues/2253)
* **api:** Added min and max volume keywords to pipette constructors ([#2084](https://github.com/Opentrons/opentrons/issues/2084)) ([f68da5a](https://github.com/Opentrons/opentrons/commit/f68da5a)), closes [#2075](https://github.com/Opentrons/opentrons/issues/2075)





<a name="3.3.1-beta.0"></a>
## [3.3.1-beta.0](https://github.com/Opentrons/opentrons/compare/v3.3.0...v3.3.1-beta.0) (2018-09-10)


### Bug Fixes

* **api:** delete pipette-config.json ([#2166](https://github.com/Opentrons/opentrons/issues/2166)) ([034edc7](https://github.com/Opentrons/opentrons/commit/034edc7))
* **api:** Delete the labware database journal on reset ([#2098](https://github.com/Opentrons/opentrons/issues/2098)) ([0579fb5](https://github.com/Opentrons/opentrons/commit/0579fb5))
* **api:** Fix container definitions of biorad PCR and 10ul tiprack ([#2191](https://github.com/Opentrons/opentrons/issues/2191)) ([b261dfa](https://github.com/Opentrons/opentrons/commit/b261dfa))
* **api:** opentrons.nmcli security types should be nmcli key-mgmt ([#2190](https://github.com/Opentrons/opentrons/issues/2190)) ([4873dc4](https://github.com/Opentrons/opentrons/commit/4873dc4)), closes [#2178](https://github.com/Opentrons/opentrons/issues/2178)


### Features

* **api:** Add container definitions for opentrons alumnium block setaluminum block ([#2205](https://github.com/Opentrons/opentrons/issues/2205)) ([107d6b0](https://github.com/Opentrons/opentrons/commit/107d6b0))
* **api:** Add definitions for the modular tuberack ([#2167](https://github.com/Opentrons/opentrons/issues/2167)) ([be902f6](https://github.com/Opentrons/opentrons/commit/be902f6))
* **api:** add engage custom height and offset params ([#2171](https://github.com/Opentrons/opentrons/issues/2171)) ([4b1f8bd](https://github.com/Opentrons/opentrons/commit/4b1f8bd)), closes [#2155](https://github.com/Opentrons/opentrons/issues/2155)
* **api:** Add hidden ssid wifi support ([#2193](https://github.com/Opentrons/opentrons/issues/2193)) ([ffc702f](https://github.com/Opentrons/opentrons/commit/ffc702f))
* **api:** Add net config info to /wifi/status ([#2188](https://github.com/Opentrons/opentrons/issues/2188)) ([cb51b86](https://github.com/Opentrons/opentrons/commit/cb51b86))
* **api:** support flow rate (uL/sec) in JSON protocols ([#2123](https://github.com/Opentrons/opentrons/issues/2123)) ([b0f944e](https://github.com/Opentrons/opentrons/commit/b0f944e))
* **protocol-designer:** support mm from bottom offset in JSON protocols ([#2180](https://github.com/Opentrons/opentrons/issues/2180)) ([db22ae8](https://github.com/Opentrons/opentrons/commit/db22ae8)), closes [#2157](https://github.com/Opentrons/opentrons/issues/2157)





<a name="3.3.0"></a>
# [3.3.0](https://github.com/Opentrons/opentrons/compare/v3.3.0-beta.1...v3.3.0) (2018-08-22)


### Bug Fixes

* **api:** change udev rule to include multiple modules ([#1995](https://github.com/Opentrons/opentrons/issues/1995)) ([91ffc7e](https://github.com/Opentrons/opentrons/commit/91ffc7e))
* **update-server:** Fix issues with 3.2 api on 3.3 system ([#2097](https://github.com/Opentrons/opentrons/issues/2097)) ([bad6e3a](https://github.com/Opentrons/opentrons/commit/bad6e3a))


### Features

* **api:** Add /settings/reset endpoints ([#2082](https://github.com/Opentrons/opentrons/issues/2082)) ([f42ae1b](https://github.com/Opentrons/opentrons/commit/f42ae1b)), closes [#1885](https://github.com/Opentrons/opentrons/issues/1885)
* **api:** Consolidate pipette configuration ([#2055](https://github.com/Opentrons/opentrons/issues/2055)) ([ee39ea3](https://github.com/Opentrons/opentrons/commit/ee39ea3))
* **api:** Handle read-only thumb drive mount on OT2 ([#2037](https://github.com/Opentrons/opentrons/issues/2037)) ([9247392](https://github.com/Opentrons/opentrons/commit/9247392)), closes [#1903](https://github.com/Opentrons/opentrons/issues/1903)
* **api:** publish module commands and make module data endpoint ([#2053](https://github.com/Opentrons/opentrons/issues/2053)) ([c25c081](https://github.com/Opentrons/opentrons/commit/c25c081)), closes [#1653](https://github.com/Opentrons/opentrons/issues/1653)
* **app:** Add upload protocol warning modal ([#1988](https://github.com/Opentrons/opentrons/issues/1988)) ([8e010cf](https://github.com/Opentrons/opentrons/commit/8e010cf)), closes [#1032](https://github.com/Opentrons/opentrons/issues/1032)
* **app,api:** Add opt-in ping/pong monitoring to RPC websocket ([#2083](https://github.com/Opentrons/opentrons/issues/2083)) ([a9b3f0e](https://github.com/Opentrons/opentrons/commit/a9b3f0e)), closes [#2052](https://github.com/Opentrons/opentrons/issues/2052)
* **compute,api,update:** Add sys ver to health, allow resin pull ([#2089](https://github.com/Opentrons/opentrons/issues/2089)) ([7fdce05](https://github.com/Opentrons/opentrons/commit/7fdce05)), closes [#2091](https://github.com/Opentrons/opentrons/issues/2091)
* **compute,api,update-server:** Move system configs out of Dockerfile ([#2073](https://github.com/Opentrons/opentrons/issues/2073)) ([354c740](https://github.com/Opentrons/opentrons/commit/354c740)), closes [#1114](https://github.com/Opentrons/opentrons/issues/1114)





<a name="3.3.0-beta.1"></a>
# [3.3.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.3.0-beta.0...v3.3.0-beta.1) (2018-08-02)


### Bug Fixes

* **api:** check virtual smoothie before copying udev file on server start ([#1960](https://github.com/Opentrons/opentrons/issues/1960)) ([9a31f3d](https://github.com/Opentrons/opentrons/commit/9a31f3d))
* **api:** Fix pipette.delay() so it does not sleep during protocol simulation ([#1902](https://github.com/Opentrons/opentrons/issues/1902)) ([f63bdba](https://github.com/Opentrons/opentrons/commit/f63bdba))
* **api:** Fix the database migration script geometry logic ([#1959](https://github.com/Opentrons/opentrons/issues/1959)) ([7ae9756](https://github.com/Opentrons/opentrons/commit/7ae9756))
* **api:** Home Z axes before run to guarantee that pipettes will be retracted ([#1914](https://github.com/Opentrons/opentrons/issues/1914)) ([7252a73](https://github.com/Opentrons/opentrons/commit/7252a73))
* **api:** support touch-tip for JSON protocols ([#2000](https://github.com/Opentrons/opentrons/issues/2000)) ([43125b7](https://github.com/Opentrons/opentrons/commit/43125b7)), closes [#1997](https://github.com/Opentrons/opentrons/issues/1997)
* **docker:** Switch out dumb-init, add modules tools & udev config ([#1952](https://github.com/Opentrons/opentrons/issues/1952)) ([caac645](https://github.com/Opentrons/opentrons/commit/caac645)), closes [#1822](https://github.com/Opentrons/opentrons/issues/1822)


### Features

* **api:** Add "modules" field to RPC ([#1890](https://github.com/Opentrons/opentrons/issues/1890)) ([f80ad18](https://github.com/Opentrons/opentrons/commit/f80ad18)), closes [#1733](https://github.com/Opentrons/opentrons/issues/1733)
* **api:** Add clear method to RPC SessionManager ([#1969](https://github.com/Opentrons/opentrons/issues/1969)) ([8228e6d](https://github.com/Opentrons/opentrons/commit/8228e6d))
* **api:** Add endpoints to get robot logs ([#1928](https://github.com/Opentrons/opentrons/issues/1928)) ([9224719](https://github.com/Opentrons/opentrons/commit/9224719))
* **api:** add magdeck api object ([#1925](https://github.com/Opentrons/opentrons/issues/1925)) ([b016eec](https://github.com/Opentrons/opentrons/commit/b016eec)), closes [#1889](https://github.com/Opentrons/opentrons/issues/1889) [#1887](https://github.com/Opentrons/opentrons/issues/1887) [#1886](https://github.com/Opentrons/opentrons/issues/1886) [#1645](https://github.com/Opentrons/opentrons/issues/1645)
* **api:** Add tempdeck api object ([#1962](https://github.com/Opentrons/opentrons/issues/1962)) ([cb7f107](https://github.com/Opentrons/opentrons/commit/cb7f107)), closes [#1965](https://github.com/Opentrons/opentrons/issues/1965) [#1648](https://github.com/Opentrons/opentrons/issues/1648) [#1649](https://github.com/Opentrons/opentrons/issues/1649)
* **api:** Brings back the shake after drop-tip ([#1871](https://github.com/Opentrons/opentrons/issues/1871)) ([304c71d](https://github.com/Opentrons/opentrons/commit/304c71d))


### Performance Improvements

* **api:** Set axis-testing speed to 8mm/sec to avoid resonance ([#1912](https://github.com/Opentrons/opentrons/issues/1912)) ([d7bb03b](https://github.com/Opentrons/opentrons/commit/d7bb03b))





<a name="3.3.0-beta.0"></a>
# [3.3.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.3...v3.3.0-beta.0) (2018-07-12)


### Bug Fixes

* **api:** Allows floating-point temperatures to be set/read to/from temp-deck ([#1798](https://github.com/Opentrons/opentrons/issues/1798)) ([856134a](https://github.com/Opentrons/opentrons/commit/856134a))
* **api:** Fix QC script which uses 85% current to use default speeds for Y axis ([#1802](https://github.com/Opentrons/opentrons/issues/1802)) ([aa8a319](https://github.com/Opentrons/opentrons/commit/aa8a319))
* **api:** Remove incorrect call to `cache_instrument_models` ([#1810](https://github.com/Opentrons/opentrons/issues/1810)) ([2f80ece](https://github.com/Opentrons/opentrons/commit/2f80ece))


### Features

* **api:** Add advanced settings endpoints to api server ([#1786](https://github.com/Opentrons/opentrons/issues/1786)) ([b89b4ea](https://github.com/Opentrons/opentrons/commit/b89b4ea)), closes [#1656](https://github.com/Opentrons/opentrons/issues/1656)
* **api:** Add GET /modules endpoint with stub for module discovery ([#1858](https://github.com/Opentrons/opentrons/issues/1858)) ([8dedb68](https://github.com/Opentrons/opentrons/commit/8dedb68))
* **api:** Add Magdeck driver ([#1840](https://github.com/Opentrons/opentrons/issues/1840)) ([e731c78](https://github.com/Opentrons/opentrons/commit/e731c78)), closes [#1809](https://github.com/Opentrons/opentrons/issues/1809)
* **app:** Log tracebacks from failed RPC calls  ([#1846](https://github.com/Opentrons/opentrons/issues/1846)) ([0c07c52](https://github.com/Opentrons/opentrons/commit/0c07c52)), closes [#1841](https://github.com/Opentrons/opentrons/issues/1841)
* **update-server:** Add endpoint to update API Server, ot2serverlib, and Smoothie FW ([#1797](https://github.com/Opentrons/opentrons/issues/1797)) ([464ed7f](https://github.com/Opentrons/opentrons/commit/464ed7f)), closes [#1549](https://github.com/Opentrons/opentrons/issues/1549)
* **update-server:** Add restart endpoint to Update Server and shorten restart sleep to 1s ([#1793](https://github.com/Opentrons/opentrons/issues/1793)) ([1bf8bd7](https://github.com/Opentrons/opentrons/commit/1bf8bd7)), closes [#1794](https://github.com/Opentrons/opentrons/issues/1794)


### Performance Improvements

* **api:** Slightly increase probing speed, avoid resonance and pipette shaking ([#1801](https://github.com/Opentrons/opentrons/issues/1801)) ([8f28ad4](https://github.com/Opentrons/opentrons/commit/8f28ad4))





<a name="3.2.0"></a>
# [3.2.0](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.3...v3.2.0) (2018-07-10)

**Note:** Version bump only for package @opentrons/api-server





<a name="3.2.0-beta.3"></a>
# [3.2.0-beta.3](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.2...v3.2.0-beta.3) (2018-06-25)


### Bug Fixes

* **api:** Fix row order in labware.create ([#1749](https://github.com/Opentrons/opentrons/issues/1749)) ([40ac527](https://github.com/Opentrons/opentrons/commit/40ac527)), closes [#1748](https://github.com/Opentrons/opentrons/issues/1748)





<a name="3.2.0-beta.2"></a>
# [3.2.0-beta.2](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.1...v3.2.0-beta.2) (2018-06-22)


### Bug Fixes

* **api:** Sanitize wifi inputs to handle special characters ([#1743](https://github.com/Opentrons/opentrons/issues/1743)) ([18f8d0f](https://github.com/Opentrons/opentrons/commit/18f8d0f))


### Features

* **api:** Log API server and Smoothie FW versions on API server boot ([#1728](https://github.com/Opentrons/opentrons/issues/1728)) ([6c3c3c4](https://github.com/Opentrons/opentrons/commit/6c3c3c4)), closes [#1120](https://github.com/Opentrons/opentrons/issues/1120)





<a name="3.2.0-beta.1"></a>
# [3.2.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.0...v3.2.0-beta.1) (2018-06-19)


### Bug Fixes

* **api:** Add ignore update endpoint implementation to fallback file ([#1720](https://github.com/Opentrons/opentrons/issues/1720)) ([2a68dc5](https://github.com/Opentrons/opentrons/commit/2a68dc5))
* **api:** Fix RPC reporting wrong models for v1.3 pipettes ([#1691](https://github.com/Opentrons/opentrons/issues/1691)) ([e302382](https://github.com/Opentrons/opentrons/commit/e302382))
* **api:** Fixes bug in replacing substring of old p50 pipettes written with v13 instead of v1.3 ([#1717](https://github.com/Opentrons/opentrons/issues/1717)) ([1322055](https://github.com/Opentrons/opentrons/commit/1322055))


### Features

* **api:** Add endpoints to handle API update ignores ([#1693](https://github.com/Opentrons/opentrons/issues/1693)) ([8c5eae9](https://github.com/Opentrons/opentrons/commit/8c5eae9))





<a name="3.2.0-beta.0"></a>
# [3.2.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.1.2...v3.2.0-beta.0) (2018-06-13)


### Bug Fixes

* **api:** Fallback for update endpoints ([#1669](https://github.com/Opentrons/opentrons/issues/1669)) ([3ce97df](https://github.com/Opentrons/opentrons/commit/3ce97df))


### Performance Improvements

* **api:** decrease Y and ZA currents ([#1647](https://github.com/Opentrons/opentrons/issues/1647)) ([3fe7358](https://github.com/Opentrons/opentrons/commit/3fe7358))
