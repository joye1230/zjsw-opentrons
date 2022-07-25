# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.0.0](https://github.com/Opentrons/opentrons/compare/v5.0.2...v6.0.0) (2022-07-14)


### Bug Fixes

* **protocol-designer:** change PD help link ([#10440](https://github.com/Opentrons/opentrons/issues/10440)) ([9152d25](https://github.com/Opentrons/opentrons/commit/9152d2571f4c821387b4b3249b895a6278c17b77)), closes [#10325](https://github.com/Opentrons/opentrons/issues/10325)
* **protocol-designer:** delay when offset length is falsey ([#10016](https://github.com/Opentrons/opentrons/issues/10016)) ([1c13967](https://github.com/Opentrons/opentrons/commit/1c139676fcc3fea28f29c1b49bff6452514475b0)), closes [#815](https://github.com/Opentrons/opentrons/issues/815)


### Features

* **app:** add H-S to PD pause step ([#9939](https://github.com/Opentrons/opentrons/issues/9939)) ([f5d4ab5](https://github.com/Opentrons/opentrons/commit/f5d4ab5d987f149793f63a269d8b9f3e71cd0c20))
* **app:** make pipette cards and overflow menus ([#9976](https://github.com/Opentrons/opentrons/issues/9976)) ([c2753cd](https://github.com/Opentrons/opentrons/commit/c2753cdb1b1f27c2d5762a220a5d3aba061bb921)), closes [#8692](https://github.com/Opentrons/opentrons/issues/8692) [#8693](https://github.com/Opentrons/opentrons/issues/8693)
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
* **shared-data:** add heater-shaker labware w/ adapter definitions ([#9917](https://github.com/Opentrons/opentrons/issues/9917)) ([859fe69](https://github.com/Opentrons/opentrons/commit/859fe69789fbf1d065420fce07dcd7a940e2c09c))
* **shared-data, protocol-designer:** add liquid color to schema v6 ([#10294](https://github.com/Opentrons/opentrons/issues/10294)) ([c8ee567](https://github.com/Opentrons/opentrons/commit/c8ee5675f725e36578d0aca024e4bcd838030bf8))
* **step-generation:** add multi channel N/S access timeline error for heater shaker ([#10697](https://github.com/Opentrons/opentrons/issues/10697)) ([15f47dd](https://github.com/Opentrons/opentrons/commit/15f47dd0343536a05a45a750a7e48b1318ccc80e)), closes [#10448](https://github.com/Opentrons/opentrons/issues/10448)
* **step-generation:** raise timeline error when pipetting E/W of H-S with multi channel pipette ([#10681](https://github.com/Opentrons/opentrons/issues/10681)) ([3ea88a2](https://github.com/Opentrons/opentrons/commit/3ea88a260ebbfedc7c7fcda194ab5d37e1b22774)), closes [#10442](https://github.com/Opentrons/opentrons/issues/10442)
* **step-generation, protocol-designer:** add H-S timeline error when pipetting E-W with latch open ([#10566](https://github.com/Opentrons/opentrons/issues/10566)) ([3abafbd](https://github.com/Opentrons/opentrons/commit/3abafbd8f5b6463c67b47d14ecf6a371b8ce7bfa)), closes [#10510](https://github.com/Opentrons/opentrons/issues/10510)
* **step-generation, protocol-designer:** add JSON schema v6 support ([#9824](https://github.com/Opentrons/opentrons/issues/9824)) ([0c95a58](https://github.com/Opentrons/opentrons/commit/0c95a58c309ea8d901bbb9fac82f371c296fe1d4))
* **step-generation, protocol-designer:** generate error when pipetting NSEW of HS while shaking ([#10589](https://github.com/Opentrons/opentrons/issues/10589)) ([17c1b27](https://github.com/Opentrons/opentrons/commit/17c1b27dbdf30f6e42fac0e3e657d813d7eff57e)), closes [#10509](https://github.com/Opentrons/opentrons/issues/10509)
* **step-generation, protocol-designer:** hook up heater-shaker PD step form ([#9873](https://github.com/Opentrons/opentrons/issues/9873)) ([a44ecd7](https://github.com/Opentrons/opentrons/commit/a44ecd7694006e61947dc963e5842078bd7076ae)), closes [#9741](https://github.com/Opentrons/opentrons/issues/9741)





## [5.0.2](https://github.com/Opentrons/opentrons/compare/v5.0.1...v5.0.2) (2022-03-03)

**Note:** Version bump only for package protocol-designer





## [5.0.1](https://github.com/Opentrons/opentrons/compare/v5.0.0...v5.0.1) (2022-02-24)

**Note:** Version bump only for package protocol-designer





# [5.0.0](https://github.com/Opentrons/opentrons/compare/v4.7.0...v5.0.0) (2022-02-16)


### Features

* **protocol-designer:** add feature flag for heater shaker in PD ([#9345](https://github.com/Opentrons/opentrons/issues/9345)) ([d36fac0](https://github.com/Opentrons/opentrons/commit/d36fac0cb0247f09b0e6fa61a10eff4a852fc3e0))





# [4.7.0](https://github.com/Opentrons/opentrons/compare/v4.6.2...v4.7.0) (2021-11-18)


### Features

* **app:** Add Labware Detail with Well Row/Column Highlighting ([#8499](https://github.com/Opentrons/opentrons/issues/8499)) ([158c0bb](https://github.com/Opentrons/opentrons/commit/158c0bbcfa9dc0a0af0acd9e5b24d76853ad913d)), closes [#8380](https://github.com/Opentrons/opentrons/issues/8380)







**Note:** Version bump only for package protocol-designer





## [4.6.2](https://github.com/Opentrons/opentrons/compare/v4.6.1...v4.6.2) (2021-09-30)

**Note:** Version bump only for package protocol-designer





## [4.6.1](https://github.com/Opentrons/opentrons/compare/v4.6.0...v4.6.1) (2021-09-28)

**Note:** Version bump only for package protocol-designer





# [4.6.0](https://github.com/Opentrons/opentrons/compare/v4.5.0...v4.6.0) (2021-09-27)


### Bug Fixes

* **protocol-designer:** fix whitescreen when adding addtl temp steps ([#8181](https://github.com/Opentrons/opentrons/issues/8181)) ([34dbc35](https://github.com/Opentrons/opentrons/commit/34dbc351f4e1d8039878e9485685f2b508a88f17)), closes [#7819](https://github.com/Opentrons/opentrons/issues/7819)


### Features

* **app:** add labware setup step to protocol setup flow ([#8172](https://github.com/Opentrons/opentrons/issues/8172)) ([e33deb7](https://github.com/Opentrons/opentrons/commit/e33deb7ca641900196dbc6c8edff0bea7e14343e)), closes [#7665](https://github.com/Opentrons/opentrons/issues/7665)





# [4.5.0](https://github.com/Opentrons/opentrons/compare/v4.4.0...v4.5.0) (2021-08-03)

**Note:** Version bump only for package protocol-designer





# [4.4.0](https://github.com/Opentrons/opentrons/compare/v4.3.1...v4.4.0) (2021-06-16)


### Features

* **components, protocol-library:** pass thru semantic 'disabled' attr to InputField elem ([#7759](https://github.com/Opentrons/opentrons/issues/7759)) ([1ec53d1](https://github.com/Opentrons/opentrons/commit/1ec53d1))
* **labware-library:** fix mixpanel id bug ([#7761](https://github.com/Opentrons/opentrons/issues/7761)) ([6a9d611](https://github.com/Opentrons/opentrons/commit/6a9d611)), closes [#7536](https://github.com/Opentrons/opentrons/issues/7536)
* **protocol-designer:** Add batch edit hint modal ([#7626](https://github.com/Opentrons/opentrons/issues/7626)) ([0ff9179](https://github.com/Opentrons/opentrons/commit/0ff9179)), closes [#7488](https://github.com/Opentrons/opentrons/issues/7488)
* **protocol-designer:** add DOM identifiers for e2e tests ([#7667](https://github.com/Opentrons/opentrons/issues/7667)) ([d4e43e1](https://github.com/Opentrons/opentrons/commit/d4e43e1)), closes [#7607](https://github.com/Opentrons/opentrons/issues/7607)
* **protocol-designer:** add form level volume error to mix form ([#7625](https://github.com/Opentrons/opentrons/issues/7625)) ([3393368](https://github.com/Opentrons/opentrons/commit/3393368))
* **protocol-designer:** Add tooltip for indeterminate checkboxes ([#7614](https://github.com/Opentrons/opentrons/issues/7614)) ([b1f43fb](https://github.com/Opentrons/opentrons/commit/b1f43fb)), closes [#7491](https://github.com/Opentrons/opentrons/issues/7491)
* **protocol-designer:** remove FF and bump version for batch edit mix ([#7679](https://github.com/Opentrons/opentrons/issues/7679)) ([1968164](https://github.com/Opentrons/opentrons/commit/1968164)), closes [#7560](https://github.com/Opentrons/opentrons/issues/7560)
* **protocol-designer:** show default tooltips when no indeterminate available ([#7714](https://github.com/Opentrons/opentrons/issues/7714)) ([c623f0c](https://github.com/Opentrons/opentrons/commit/c623f0c)), closes [#7711](https://github.com/Opentrons/opentrons/issues/7711)





## [4.3.1](https://github.com/Opentrons/opentrons/compare/v4.3.0...v4.3.1) (2021-05-10)

**Note:** Version bump only for package protocol-designer





# [4.3.0](https://github.com/Opentrons/opentrons/compare/v4.2.1...v4.3.0) (2021-05-06)

### Bug Fixes

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





## [4.2.1](https://github.com/Opentrons/opentrons/compare/v4.2.0...v4.2.1) (2021-04-06)

**Note:** Version bump only for package protocol-designer



# [4.2.0](https://github.com/Opentrons/opentrons/compare/v4.1.1...v4.2.0) (2021-03-18)

### Bug Fixes

* **protocol-designer:** avoid StepList exception on keydown ([#7442](https://github.com/Opentrons/opentrons/issues/7442)) ([b5bf1c7](https://github.com/Opentrons/opentrons/commit/b5bf1c7))
* **protocol-designer:** fix DropdownFormField ([#7378](https://github.com/Opentrons/opentrons/issues/7378)) ([8f4e9a1](https://github.com/Opentrons/opentrons/commit/8f4e9a1)), closes [#7376](https://github.com/Opentrons/opentrons/issues/7376)
* **protocol-designer:** fix syntax error from automerge ([#7357](https://github.com/Opentrons/opentrons/issues/7357)) ([c6732e5](https://github.com/Opentrons/opentrons/commit/c6732e5))


### Features

* **components:** add id prop to NavTab ([#7382](https://github.com/Opentrons/opentrons/issues/7382)) ([5da3238](https://github.com/Opentrons/opentrons/commit/5da3238)), closes [#7384](https://github.com/Opentrons/opentrons/issues/7384)
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





## [4.1.1](https://github.com/Opentrons/opentrons/compare/v4.1.0...v4.1.1) (2021-01-25)

**Note:** Version bump only for package protocol-designer





# [4.1.0](https://github.com/Opentrons/opentrons/compare/v4.0.0...v4.1.0) (2021-01-20)

## Bug Fixes

* **protocol-designer:** fix lastModified when exporting ([#7024](https://github.com/Opentrons/opentrons/issues/7024)) ([50096cd](https://github.com/Opentrons/opentrons/commit/50096cd)), closes [#6636](https://github.com/Opentrons/opentrons/issues/6636)
* **protocol-designer:** include custom tiprack defs... ([#7099](https://github.com/Opentrons/opentrons/issues/7099)) ([b98e621](https://github.com/Opentrons/opentrons/commit/b98e621)), closes [#6875](https://github.com/Opentrons/opentrons/issues/6875)
* **protocol-designer:** skip 10000s of redundant state updates ([#7053](https://github.com/Opentrons/opentrons/issues/7053)) ([f2d5cb2](https://github.com/Opentrons/opentrons/commit/f2d5cb2))


## Features

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





# [4.0.0](https://github.com/Opentrons/opentrons/compare/v3.21.2...v4.0.0) (2020-11-20)

### Features

* **protocol-designer:** add dispense air gap to distribute command creator ([#6824](https://github.com/Opentrons/opentrons/issues/6824)) ([2aeccd4](https://github.com/Opentrons/opentrons/commit/2aeccd4)), closes [#6510](https://github.com/Opentrons/opentrons/issues/6510)
* **protocol-designer:** add validation to dispense > air gap volume ([#6771](https://github.com/Opentrons/opentrons/issues/6771)) ([2594aa8](https://github.com/Opentrons/opentrons/commit/2594aa8)), closes [#6500](https://github.com/Opentrons/opentrons/issues/6500) [#6513](https://github.com/Opentrons/opentrons/issues/6513) [#6652](https://github.com/Opentrons/opentrons/issues/6652)
* **protocol-designer:** implement consolidate dispense airgap commands ([#6845](https://github.com/Opentrons/opentrons/issues/6845)) ([0dd7157](https://github.com/Opentrons/opentrons/commit/0dd7157)), closes [#6512](https://github.com/Opentrons/opentrons/issues/6512)
* **protocol designer:** put mix delay behind FF ([#6619](https://github.com/Opentrons/opentrons/issues/6619)) ([5c7bf7d](https://github.com/Opentrons/opentrons/commit/5c7bf7d))
* **protocol-designer:** add air gap dispense FF ([#6647](https://github.com/Opentrons/opentrons/issues/6647)) ([4c53b73](https://github.com/Opentrons/opentrons/commit/4c53b73)), closes [#6522](https://github.com/Opentrons/opentrons/issues/6522)
* **protocol-designer:** add air gap dispense for fields to move liquid form ([#6658](https://github.com/Opentrons/opentrons/issues/6658)) ([a6c1930](https://github.com/Opentrons/opentrons/commit/a6c1930)), closes [#6499](https://github.com/Opentrons/opentrons/issues/6499)
* **protocol-designer:** add dispenseAirGapVolume arg ([#6656](https://github.com/Opentrons/opentrons/issues/6656)) ([4703456](https://github.com/Opentrons/opentrons/commit/4703456)), closes [#6653](https://github.com/Opentrons/opentrons/issues/6653)
* **protocol-designer:** add mix delay commands ([#6631](https://github.com/Opentrons/opentrons/issues/6631)) ([953d454](https://github.com/Opentrons/opentrons/commit/953d454)), closes [#6498](https://github.com/Opentrons/opentrons/issues/6498)
* **protocol-designer:** add mix delay default values ([#6607](https://github.com/Opentrons/opentrons/issues/6607)) ([db2b331](https://github.com/Opentrons/opentrons/commit/db2b331)), closes [#6579](https://github.com/Opentrons/opentrons/issues/6579)
* **protocol-designer:** bump pd to 5.1.0; add migration ([#6583](https://github.com/Opentrons/opentrons/issues/6583)) ([d6ba128](https://github.com/Opentrons/opentrons/commit/d6ba128)), closes [#6573](https://github.com/Opentrons/opentrons/issues/6573) [#6634](https://github.com/Opentrons/opentrons/issues/6634)
* **protocol-designer:** implement dispense > air gap for Transfer command creator ([#6745](https://github.com/Opentrons/opentrons/issues/6745)) ([e684f7d](https://github.com/Opentrons/opentrons/commit/e684f7d)), closes [#6508](https://github.com/Opentrons/opentrons/issues/6508)
* **protocol-designer:** update air gap dispense tooltip ([#6753](https://github.com/Opentrons/opentrons/issues/6753)) ([b6ace2d](https://github.com/Opentrons/opentrons/commit/b6ace2d)), closes [#6714](https://github.com/Opentrons/opentrons/issues/6714)



### Bug Fixes

* **protocol-designer:** cast mix tip offset to number ([#6629](https://github.com/Opentrons/opentrons/issues/6629)) ([7b4ee9b](https://github.com/Opentrons/opentrons/commit/7b4ee9b)), closes [#6552](https://github.com/Opentrons/opentrons/issues/6552)
* **protocol-designer:** fix 5.1.0 migration ([#6643](https://github.com/Opentrons/opentrons/issues/6643)) ([cc7cd17](https://github.com/Opentrons/opentrons/commit/cc7cd17))





## [3.21.2](https://github.com/Opentrons/opentrons/compare/v3.21.1...v3.21.2) (2020-10-16)

**Note:** Version bump only for package protocol-designer





## [3.21.1](https://github.com/Opentrons/opentrons/compare/v3.21.0...v3.21.1) (2020-10-14)

**Note:** Version bump only for package protocol-designer





# [3.21.0](https://github.com/Opentrons/opentrons/compare/v3.20.1...v3.21.0) (2020-09-30)


### Bug Fixes

* **protocol-designer:** fix dismissing warnings for unsaved step forms ([#6503](https://github.com/Opentrons/opentrons/issues/6503)) ([1d37f09](https://github.com/Opentrons/opentrons/commit/1d37f09)), closes [#6263](https://github.com/Opentrons/opentrons/issues/6263)
* **protocol-designer:** fix scroll position of MoreOptionsModal ([#6515](https://github.com/Opentrons/opentrons/issues/6515)) ([2bf776b](https://github.com/Opentrons/opentrons/commit/2bf776b)), closes [#6156](https://github.com/Opentrons/opentrons/issues/6156)
* **protocol-designer:** Rename aspirate/dispense delay tip position fields ([#6324](https://github.com/Opentrons/opentrons/issues/6324)) ([bf4a959](https://github.com/Opentrons/opentrons/commit/bf4a959)), closes [#6300](https://github.com/Opentrons/opentrons/issues/6300)


### Features

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


### Performance Improvements

* **protocol-designer:** strip no-op mixes from robot state generation ([#6488](https://github.com/Opentrons/opentrons/issues/6488)) ([4885b50](https://github.com/Opentrons/opentrons/commit/4885b50)), closes [#6176](https://github.com/Opentrons/opentrons/issues/6176)





## [3.20.1](https://github.com/Opentrons/opentrons/compare/v3.20.0...v3.20.1) (2020-08-25)

**Note:** Version bump only for package protocol-designer





# [3.20.0](https://github.com/Opentrons/opentrons/compare/v3.19.0...v3.20.0) (2020-08-13)

### Bug Fixes

* **protocol-designer:** fix TC profile step lid label text ([#6069](https://github.com/Opentrons/opentrons/issues/6069)) ([39ed163](https://github.com/Opentrons/opentrons/commit/39ed163)), closes [#6060](https://github.com/Opentrons/opentrons/issues/6060)
* **protocol-designer:** lazy load air gap/delay FF from local storage ([#6252](https://github.com/Opentrons/opentrons/issues/6252)) ([414dc0b](https://github.com/Opentrons/opentrons/commit/414dc0b))
* **protocol-designer:** new TC steps default to last TC module state ([#6090](https://github.com/Opentrons/opentrons/issues/6090)) ([1d79fdc](https://github.com/Opentrons/opentrons/commit/1d79fdc)), closes [#6068](https://github.com/Opentrons/opentrons/issues/6068)
* **protocol-designer:** Update TC timeline text alignment ([#6202](https://github.com/Opentrons/opentrons/issues/6202)) ([98eeec1](https://github.com/Opentrons/opentrons/commit/98eeec1)), closes [#6138](https://github.com/Opentrons/opentrons/issues/6138)
* **protocol-designer:** Update temperature field min sizing tc state ([#6113](https://github.com/Opentrons/opentrons/issues/6113)) ([1163a36](https://github.com/Opentrons/opentrons/commit/1163a36))


### Features

* **labware-library:** avoid adding info to 'group' field in LC ([#5975](https://github.com/Opentrons/opentrons/issues/5975)) ([c6f1fa9](https://github.com/Opentrons/opentrons/commit/c6f1fa9)), closes [#5801](https://github.com/Opentrons/opentrons/issues/5801)
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





# [3.19.0](https://github.com/Opentrons/opentrons/compare/v3.18.1...v3.19.0) (2020-06-29)

### Bug Fixes

* **protocol-designer:** Add scroll to top on export modal display ([#5744](https://github.com/Opentrons/opentrons/issues/5744)) ([f797cdc](https://github.com/Opentrons/opentrons/commit/f797cdc)), closes [#5422](https://github.com/Opentrons/opentrons/issues/5422)
* **protocol-designer:** auto add TC module id to TC steps ([#5944](https://github.com/Opentrons/opentrons/issues/5944)) ([cf70c98](https://github.com/Opentrons/opentrons/commit/cf70c98)), closes [#5942](https://github.com/Opentrons/opentrons/issues/5942)
* **protocol-designer:** Correct tc profile fields sizing ([#5870](https://github.com/Opentrons/opentrons/issues/5870)) ([2ac185b](https://github.com/Opentrons/opentrons/commit/2ac185b)), closes [#5851](https://github.com/Opentrons/opentrons/issues/5851)
* **protocol-designer:** ensure all TC set temps + runProfile are awaited ([#5910](https://github.com/Opentrons/opentrons/issues/5910)) ([644375c](https://github.com/Opentrons/opentrons/commit/644375c))
* **protocol-designer:** ensure lid is closed before calling TC runProfile ([#5918](https://github.com/Opentrons/opentrons/issues/5918)) ([19c2479](https://github.com/Opentrons/opentrons/commit/19c2479))
* **protocol-designer:** Lighten TC hover overlay ([#5939](https://github.com/Opentrons/opentrons/issues/5939)) ([3204f6c](https://github.com/Opentrons/opentrons/commit/3204f6c)), closes [#5912](https://github.com/Opentrons/opentrons/issues/5912)
* **protocol-designer:** Remove errant p tag ([#5786](https://github.com/Opentrons/opentrons/issues/5786)) ([6695bd3](https://github.com/Opentrons/opentrons/commit/6695bd3))
* **protocol-designer:** Update profile step fields alignment ([#5937](https://github.com/Opentrons/opentrons/issues/5937)) ([5ab095d](https://github.com/Opentrons/opentrons/commit/5ab095d))


### Features

* **components:** add useConditionalConfirm hook to shared components ([#5735](https://github.com/Opentrons/opentrons/issues/5735)) ([8e5248f](https://github.com/Opentrons/opentrons/commit/8e5248f))
* **js:** update lodash to 4.17.15 ([#5788](https://github.com/Opentrons/opentrons/issues/5788)) ([5a145dc](https://github.com/Opentrons/opentrons/commit/5a145dc))
* **protocol-designer:** add atomic thermocyclerRunProfile command creator ([#5843](https://github.com/Opentrons/opentrons/issues/5843)) ([e20bbda](https://github.com/Opentrons/opentrons/commit/e20bbda)), closes [#5839](https://github.com/Opentrons/opentrons/issues/5839)
* **protocol-designer:** Add ending hold state fields to TC profile ([#5750](https://github.com/Opentrons/opentrons/issues/5750)) ([d388237](https://github.com/Opentrons/opentrons/commit/d388237)), closes [#5519](https://github.com/Opentrons/opentrons/issues/5519)
* **protocol-designer:** add ending hold to TC profile substeps ([#5884](https://github.com/Opentrons/opentrons/issues/5884)) ([edcfadc](https://github.com/Opentrons/opentrons/commit/edcfadc)), closes [#5522](https://github.com/Opentrons/opentrons/issues/5522)
* **protocol-designer:** Add number maskers to tc duration fields ([#5848](https://github.com/Opentrons/opentrons/issues/5848)) ([e7523a8](https://github.com/Opentrons/opentrons/commit/e7523a8)), closes [#5737](https://github.com/Opentrons/opentrons/issues/5737)
* **protocol-designer:** Add profile step numbers and tooltips ([#5819](https://github.com/Opentrons/opentrons/issues/5819)) ([4cfc25d](https://github.com/Opentrons/opentrons/commit/4cfc25d)), closes [#5515](https://github.com/Opentrons/opentrons/issues/5515)
* **protocol-designer:** Add profiles settings to TC profile form ([#5771](https://github.com/Opentrons/opentrons/issues/5771)) ([ce484cb](https://github.com/Opentrons/opentrons/commit/ce484cb))
* **protocol-designer:** Add step grouping and styles for tc cycles ([#5836](https://github.com/Opentrons/opentrons/issues/5836)) ([f335d77](https://github.com/Opentrons/opentrons/commit/f335d77)), closes [#5516](https://github.com/Opentrons/opentrons/issues/5516) [#5517](https://github.com/Opentrons/opentrons/issues/5517) [#5518](https://github.com/Opentrons/opentrons/issues/5518)
* **protocol-designer:** add support for TC cycles ([#5809](https://github.com/Opentrons/opentrons/issues/5809)) ([5cb55bc](https://github.com/Opentrons/opentrons/commit/5cb55bc)), closes [#5516](https://github.com/Opentrons/opentrons/issues/5516) [#5517](https://github.com/Opentrons/opentrons/issues/5517) [#5518](https://github.com/Opentrons/opentrons/issues/5518)
* **protocol-designer:** add TC announcement modal ([#5898](https://github.com/Opentrons/opentrons/issues/5898)) ([e5894c5](https://github.com/Opentrons/opentrons/commit/e5894c5)), closes [#5887](https://github.com/Opentrons/opentrons/issues/5887)
* **protocol-designer:** add TC profile deck visualization ([#5896](https://github.com/Opentrons/opentrons/issues/5896)) ([47b4329](https://github.com/Opentrons/opentrons/commit/47b4329)), closes [#5523](https://github.com/Opentrons/opentrons/issues/5523)
* **protocol-designer:** add TC profile state updater ([#5856](https://github.com/Opentrons/opentrons/issues/5856)) ([83eff59](https://github.com/Opentrons/opentrons/commit/83eff59)), closes [#5837](https://github.com/Opentrons/opentrons/issues/5837)
* **protocol-designer:** Add validation to profile settings and end hold ([#5802](https://github.com/Opentrons/opentrons/issues/5802)) ([c303e38](https://github.com/Opentrons/opentrons/commit/c303e38)), closes [#5520](https://github.com/Opentrons/opentrons/issues/5520) [#5753](https://github.com/Opentrons/opentrons/issues/5753)
* **protocol-designer:** create barebones setup for TC profile steps ([#5751](https://github.com/Opentrons/opentrons/issues/5751)) ([a2c6ca6](https://github.com/Opentrons/opentrons/commit/a2c6ca6))
* **protocol-designer:** create barebones TC profile substeps ([#5865](https://github.com/Opentrons/opentrons/issues/5865)) ([ab29038](https://github.com/Opentrons/opentrons/commit/ab29038)), closes [#5522](https://github.com/Opentrons/opentrons/issues/5522)
* **protocol-designer:** disable save for dynamic field errors ([#5769](https://github.com/Opentrons/opentrons/issues/5769)) ([9a36b87](https://github.com/Opentrons/opentrons/commit/9a36b87)), closes [#5737](https://github.com/Opentrons/opentrons/issues/5737)
* **protocol-designer:** finish form-level errors for dynamic fields ([#5818](https://github.com/Opentrons/opentrons/issues/5818)) ([9ca9911](https://github.com/Opentrons/opentrons/commit/9ca9911)), closes [#5814](https://github.com/Opentrons/opentrons/issues/5814)
* **protocol-designer:** implement form-level errors for dynamic profile fields ([#5784](https://github.com/Opentrons/opentrons/issues/5784)) ([56588f0](https://github.com/Opentrons/opentrons/commit/56588f0)), closes [#5737](https://github.com/Opentrons/opentrons/issues/5737)
* **protocol-designer:** implement formToArgs for TC profile ([#5842](https://github.com/Opentrons/opentrons/issues/5842)) ([4b3e008](https://github.com/Opentrons/opentrons/commit/4b3e008)), closes [#5838](https://github.com/Opentrons/opentrons/issues/5838)
* **protocol-designer:** implement thermocyclerProfileStep CC ([#5858](https://github.com/Opentrons/opentrons/issues/5858)) ([cc3be8e](https://github.com/Opentrons/opentrons/commit/cc3be8e)), closes [#5835](https://github.com/Opentrons/opentrons/issues/5835)
* **protocol-designer:** replace v4 protocol export hint ([#5897](https://github.com/Opentrons/opentrons/issues/5897)) ([179f638](https://github.com/Opentrons/opentrons/commit/179f638)), closes [#5888](https://github.com/Opentrons/opentrons/issues/5888)
* **protocol-designer:** Reset TC form on form type toggle ([#5871](https://github.com/Opentrons/opentrons/issues/5871)) ([8192afd](https://github.com/Opentrons/opentrons/commit/8192afd)), closes [#5754](https://github.com/Opentrons/opentrons/issues/5754)
* **protocol-designer:** reverse multi channel substep arrows in sidebar ([#5931](https://github.com/Opentrons/opentrons/issues/5931)) ([ade4cca](https://github.com/Opentrons/opentrons/commit/ade4cca))
* **protocol-designer:** Style dynamic step fields ([#5795](https://github.com/Opentrons/opentrons/issues/5795)) ([eb950b6](https://github.com/Opentrons/opentrons/commit/eb950b6)), closes [#5513](https://github.com/Opentrons/opentrons/issues/5513)
* **protocol-designer:** style TC profile substeps ([#5876](https://github.com/Opentrons/opentrons/issues/5876)) ([615866c](https://github.com/Opentrons/opentrons/commit/615866c)), closes [#5522](https://github.com/Opentrons/opentrons/issues/5522)
* **test:** add button names to edit pipette, swap pipette, and continue to liquids ([#5826](https://github.com/Opentrons/opentrons/issues/5826)) ([cc3ba61](https://github.com/Opentrons/opentrons/commit/cc3ba61)), closes [#5724](https://github.com/Opentrons/opentrons/issues/5724)
* **test:** add test id to Pipette Select component ([#5791](https://github.com/Opentrons/opentrons/issues/5791)) ([845b508](https://github.com/Opentrons/opentrons/commit/845b508)), closes [#5724](https://github.com/Opentrons/opentrons/issues/5724)




## [3.18.1](https://github.com/Opentrons/opentrons/compare/v3.18.0...v3.18.1) (2020-05-26)

**Note:** Version bump only for package protocol-designer





# [3.18.0](https://github.com/Opentrons/opentrons/compare/v3.17.1...v3.18.0) (2020-05-20)


### Bug Fixes

* **protocol-designer:** set lower bound for temp module target temp to 4 degrees ([#5644](https://github.com/Opentrons/opentrons/issues/5644)) ([9ae81db](https://github.com/Opentrons/opentrons/commit/9ae81db)), closes [#5548](https://github.com/Opentrons/opentrons/issues/5548)


### Features

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





## [3.17.1](https://github.com/Opentrons/opentrons/compare/v3.17.0...v3.17.1) (2020-05-06)

### Bug Fixes

* **protocol-designer:** add field level validation for magnetic module engage height ([#5339](https://github.com/Opentrons/opentrons/issues/5339)) ([5e2aff6](https://github.com/Opentrons/opentrons/commit/5e2aff6)), closes [#5274](https://github.com/Opentrons/opentrons/issues/5274)
* **protocol-designer:** allow adding labware to slots again ([#5378](https://github.com/Opentrons/opentrons/issues/5378)) ([e49e162](https://github.com/Opentrons/opentrons/commit/e49e162)), closes [#5370](https://github.com/Opentrons/opentrons/issues/5370)
* **protocol-designer:** Default to GEN1 model for TC ([#5443](https://github.com/Opentrons/opentrons/issues/5443)) ([14c68c8](https://github.com/Opentrons/opentrons/commit/14c68c8)), closes [#5389](https://github.com/Opentrons/opentrons/issues/5389)
* **protocol-designer:** default to non-i18n step-gen errors if no i18n title ([#5360](https://github.com/Opentrons/opentrons/issues/5360)) ([644b2db](https://github.com/Opentrons/opentrons/commit/644b2db))
* **protocol-designer:** fix dnd steps vs labware bug ([#5370](https://github.com/Opentrons/opentrons/issues/5370)) ([a6f6594](https://github.com/Opentrons/opentrons/commit/a6f6594)), closes [#5367](https://github.com/Opentrons/opentrons/issues/5367)
* **protocol-designer:** fix module substep text styling ([#5306](https://github.com/Opentrons/opentrons/issues/5306)) ([61b94ab](https://github.com/Opentrons/opentrons/commit/61b94ab)), closes [#5305](https://github.com/Opentrons/opentrons/issues/5305)
* **protocol-designer:** Hide CrashInfoBox when module restrictions disabled ([#5295](https://github.com/Opentrons/opentrons/issues/5295)) ([692f307](https://github.com/Opentrons/opentrons/commit/692f307)), closes [#5276](https://github.com/Opentrons/opentrons/issues/5276)
* **protocol-designer:** Only show slot access warnings for Gen1 modules ([#5313](https://github.com/Opentrons/opentrons/issues/5313)) ([74d9d64](https://github.com/Opentrons/opentrons/commit/74d9d64)), closes [#5309](https://github.com/Opentrons/opentrons/issues/5309)
* **protocol-designer:** Remove mm unit from engage height field ([#5365](https://github.com/Opentrons/opentrons/issues/5365)) ([fc18eea](https://github.com/Opentrons/opentrons/commit/fc18eea))
* **protocol-designer:** rename 'module' variables to something else ([#5308](https://github.com/Opentrons/opentrons/issues/5308)) ([e5536da](https://github.com/Opentrons/opentrons/commit/e5536da)), closes [#5284](https://github.com/Opentrons/opentrons/issues/5284)
* **protocol-designer:** Unify pause step item spacing ([#5408](https://github.com/Opentrons/opentrons/issues/5408)) ([d75f471](https://github.com/Opentrons/opentrons/commit/d75f471)), closes [#5387](https://github.com/Opentrons/opentrons/issues/5387)
* **protocol-designer:** Update TC image proportions ([#5442](https://github.com/Opentrons/opentrons/issues/5442)) ([0e5f284](https://github.com/Opentrons/opentrons/commit/0e5f284)), closes [#5388](https://github.com/Opentrons/opentrons/issues/5388)
* **protocol-designer:** updates module slot placement after warning modal is confirmed ([#5393](https://github.com/Opentrons/opentrons/issues/5393)) ([0adc97e](https://github.com/Opentrons/opentrons/commit/0adc97e))
* **protocol-designer e2e:** Add custom command to close the 3.17 announcement modal ([#5355](https://github.com/Opentrons/opentrons/issues/5355)) ([77af8ac](https://github.com/Opentrons/opentrons/commit/77af8ac))


### Features

* **protocol-designer:** add PD Pause form migration for 3.0.x -> 4.0.0 ([#5373](https://github.com/Opentrons/opentrons/issues/5373)) ([e3ce552](https://github.com/Opentrons/opentrons/commit/e3ce552)), closes [#5371](https://github.com/Opentrons/opentrons/issues/5371)
* **protocol-designer:** add warning modal switching mag model ([#5329](https://github.com/Opentrons/opentrons/issues/5329)) ([2cfe3e1](https://github.com/Opentrons/opentrons/commit/2cfe3e1)), closes [#5251](https://github.com/Opentrons/opentrons/issues/5251)
* **protocol-designer:** allow GEN1 multi pipette access N/S of GEN2 modules ([#5341](https://github.com/Opentrons/opentrons/issues/5341)) ([dc6af21](https://github.com/Opentrons/opentrons/commit/dc6af21)), closes [#5331](https://github.com/Opentrons/opentrons/issues/5331)
* **protocol-designer:** allow moving empty module under compat labware ([#5396](https://github.com/Opentrons/opentrons/issues/5396)) ([57ef5ce](https://github.com/Opentrons/opentrons/commit/57ef5ce)), closes [#5384](https://github.com/Opentrons/opentrons/issues/5384)
* **protocol-designer:** allow user to select module model when adding or editing modules ([#5284](https://github.com/Opentrons/opentrons/issues/5284)) ([8ad1607](https://github.com/Opentrons/opentrons/commit/8ad1607)), closes [#5188](https://github.com/Opentrons/opentrons/issues/5188)
* **protocol-designer:** Enable magnetic and temperature module support ([#5304](https://github.com/Opentrons/opentrons/issues/5304)) ([8235e71](https://github.com/Opentrons/opentrons/commit/8235e71)), closes [#4968](https://github.com/Opentrons/opentrons/issues/4968)
* **protocol-designer:** hide slot placement tooltip when slot dropdown enabled ([#5405](https://github.com/Opentrons/opentrons/issues/5405)) ([8a8b757](https://github.com/Opentrons/opentrons/commit/8a8b757)), closes [#5385](https://github.com/Opentrons/opentrons/issues/5385)
* **protocol-designer:** Implement custom tiprack UI behind flag ([#5440](https://github.com/Opentrons/opentrons/issues/5440)) ([1fc35fd](https://github.com/Opentrons/opentrons/commit/1fc35fd)), closes [#5332](https://github.com/Opentrons/opentrons/issues/5332)
* **protocol-designer:** preserve engage heights if already default ([#5294](https://github.com/Opentrons/opentrons/issues/5294)) ([9cac165](https://github.com/Opentrons/opentrons/commit/9cac165)), closes [#5232](https://github.com/Opentrons/opentrons/issues/5232)
* **protocol-designer:** Remove multi gen2 feature flag ([#5351](https://github.com/Opentrons/opentrons/issues/5351)) ([4a2a1fd](https://github.com/Opentrons/opentrons/commit/4a2a1fd)), closes [#5336](https://github.com/Opentrons/opentrons/issues/5336)
* **protocol-designer:** remove unnecessary comment ([#5379](https://github.com/Opentrons/opentrons/issues/5379)) ([12277df](https://github.com/Opentrons/opentrons/commit/12277df))
* **protocol-designer:** update export v4 protocol modal copy ([#5356](https://github.com/Opentrons/opentrons/issues/5356)) ([81489a0](https://github.com/Opentrons/opentrons/commit/81489a0))
* **protocol-designer:** update intro announcement modal copy ([#5345](https://github.com/Opentrons/opentrons/issues/5345)) ([20e2a96](https://github.com/Opentrons/opentrons/commit/20e2a96)), closes [#5334](https://github.com/Opentrons/opentrons/issues/5334)
* **protocol-designer:** update pause until temp modal copy ([#5434](https://github.com/Opentrons/opentrons/issues/5434)) ([441f30e](https://github.com/Opentrons/opentrons/commit/441f30e)), closes [#5432](https://github.com/Opentrons/opentrons/issues/5432)
* **protocol-designer:** use model-specific engageHeight diagram ([#5273](https://github.com/Opentrons/opentrons/issues/5273)) ([a85f206](https://github.com/Opentrons/opentrons/commit/a85f206)), closes [#5228](https://github.com/Opentrons/opentrons/issues/5228)





# [3.17.0](https://github.com/Opentrons/opentrons/compare/v3.17.0-beta.1...v3.17.0) (2020-04-23)

**Note:** Version bump only for package protocol-designer





# [3.17.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.17.0-beta.0...v3.17.0-beta.1) (2020-04-14)

**Note:** Version bump only for package protocol-designer





# [3.17.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.16.1...v3.17.0-beta.0) (2020-04-01)

### Bug Fixes

* **protocol-designer:** fix bug with selecting magnet > disengage step ([#5257](https://github.com/Opentrons/opentrons/issues/5257)) ([42e6a65](https://github.com/Opentrons/opentrons/commit/42e6a65)), closes [#5247](https://github.com/Opentrons/opentrons/issues/5247)
* **protocol-designer:** fix failing action test ([#5002](https://github.com/Opentrons/opentrons/issues/5002)) ([46f6d3f](https://github.com/Opentrons/opentrons/commit/46f6d3f))
* **protocol-designer:** fix tests for FileSidebar after merging [#5029](https://github.com/Opentrons/opentrons/issues/5029) ([#5077](https://github.com/Opentrons/opentrons/issues/5077)) ([62a4461](https://github.com/Opentrons/opentrons/commit/62a4461))
* **protocol-designer:** fix typo in deck setup explanation modal ([#5104](https://github.com/Opentrons/opentrons/issues/5104)) ([5a70562](https://github.com/Opentrons/opentrons/commit/5a70562)), closes [#5102](https://github.com/Opentrons/opentrons/issues/5102)
* **protocol-designer:** null out deleted module IDs from step forms ([#5017](https://github.com/Opentrons/opentrons/issues/5017)) ([5a94de5](https://github.com/Opentrons/opentrons/commit/5a94de5)), closes [#4883](https://github.com/Opentrons/opentrons/issues/4883)
* **protocol-designer:** removes error when fn cannot find temperature or thermocycler on deck ([#4994](https://github.com/Opentrons/opentrons/issues/4994)) ([951a3e1](https://github.com/Opentrons/opentrons/commit/951a3e1)), closes [#4841](https://github.com/Opentrons/opentrons/issues/4841)
* **protocol-designer:** round caption under engage height to match input box ([#4993](https://github.com/Opentrons/opentrons/issues/4993)) ([f5c2c47](https://github.com/Opentrons/opentrons/commit/f5c2c47)), closes [#4912](https://github.com/Opentrons/opentrons/issues/4912)
* **protocol-designer:** set magnetic module params for both pristine … ([#4990](https://github.com/Opentrons/opentrons/issues/4990)) ([9b3fef1](https://github.com/Opentrons/opentrons/commit/9b3fef1)), closes [#4908](https://github.com/Opentrons/opentrons/issues/4908)
* **protocol-designer:** Update conditional experimental settings warning text ([#4978](https://github.com/Opentrons/opentrons/issues/4978)) ([cd3d645](https://github.com/Opentrons/opentrons/commit/cd3d645)), closes [#4911](https://github.com/Opentrons/opentrons/issues/4911)
* **protocol-designer:** Update SlotMap and CrashInfoBox styles ([#4996](https://github.com/Opentrons/opentrons/issues/4996)) ([845b465](https://github.com/Opentrons/opentrons/commit/845b465)), closes [#4989](https://github.com/Opentrons/opentrons/issues/4989)
* **protocol-designer:** Update temperature modules disengage text ([#5159](https://github.com/Opentrons/opentrons/issues/5159)) ([bc9d503](https://github.com/Opentrons/opentrons/commit/bc9d503)), closes [#5111](https://github.com/Opentrons/opentrons/issues/5111)


### Features

* **app:** enable gen2 multi pipettes ([#5297](https://github.com/Opentrons/opentrons/issues/5297)) ([707f0ab](https://github.com/Opentrons/opentrons/commit/707f0ab)), closes [#4698](https://github.com/Opentrons/opentrons/issues/4698)
* **app, components:** Support gen2 modules ([#5177](https://github.com/Opentrons/opentrons/issues/5177)) ([3a938ff](https://github.com/Opentrons/opentrons/commit/3a938ff)), closes [#4960](https://github.com/Opentrons/opentrons/issues/4960)
* **js:** update Formik to v2 ([#5190](https://github.com/Opentrons/opentrons/issues/5190)) ([b15d360](https://github.com/Opentrons/opentrons/commit/b15d360))
* **protocol-designer:** add border to module tag when hovering over step ([#5161](https://github.com/Opentrons/opentrons/issues/5161)) ([b04ee69](https://github.com/Opentrons/opentrons/commit/b04ee69)), closes [#5110](https://github.com/Opentrons/opentrons/issues/5110)
* **protocol-designer:** add modal to add a pause after set temp ([#5182](https://github.com/Opentrons/opentrons/issues/5182)) ([dbae680](https://github.com/Opentrons/opentrons/commit/dbae680)), closes [#5117](https://github.com/Opentrons/opentrons/issues/5117)
* **protocol-designer:** Add module prefix to labware ([#5205](https://github.com/Opentrons/opentrons/issues/5205)) ([1f979dd](https://github.com/Opentrons/opentrons/commit/1f979dd)), closes [#5119](https://github.com/Opentrons/opentrons/issues/5119)
* **protocol-designer:** Add V4 export warning modal ([#5092](https://github.com/Opentrons/opentrons/issues/5092)) ([e63577b](https://github.com/Opentrons/opentrons/commit/e63577b)), closes [#4934](https://github.com/Opentrons/opentrons/issues/4934)
* **protocol-designer:** allow custom labware on modules ([#5175](https://github.com/Opentrons/opentrons/issues/5175)) ([1c4e1b5](https://github.com/Opentrons/opentrons/commit/1c4e1b5)), closes [#4910](https://github.com/Opentrons/opentrons/issues/4910)
* **protocol-designer:** allow modules to be placed on compatble labware ([#4972](https://github.com/Opentrons/opentrons/issues/4972)) ([5abd33f](https://github.com/Opentrons/opentrons/commit/5abd33f)), closes [#4726](https://github.com/Opentrons/opentrons/issues/4726)
* **protocol-designer:** allow selection of gen 2 modules and use formik ([#5265](https://github.com/Opentrons/opentrons/issues/5265)) ([71b59ce](https://github.com/Opentrons/opentrons/commit/71b59ce)), closes [#5150](https://github.com/Opentrons/opentrons/issues/5150)
* **protocol-designer:** allow setting initial settings w env vars ([#5268](https://github.com/Opentrons/opentrons/issues/5268)) ([ba52ae4](https://github.com/Opentrons/opentrons/commit/ba52ae4))
* **protocol-designer:** allow user to bypass typeform modal ([#5169](https://github.com/Opentrons/opentrons/issues/5169)) ([e7ecaf6](https://github.com/Opentrons/opentrons/commit/e7ecaf6)), closes [#5126](https://github.com/Opentrons/opentrons/issues/5126)
* **protocol-designer:** clear out engageHeight ([#5254](https://github.com/Opentrons/opentrons/issues/5254)) ([2417071](https://github.com/Opentrons/opentrons/commit/2417071)), closes [#5225](https://github.com/Opentrons/opentrons/issues/5225)
* **protocol-designer:** create modal component to show announcements ([#5091](https://github.com/Opentrons/opentrons/issues/5091)) ([225c12a](https://github.com/Opentrons/opentrons/commit/225c12a)), closes [#4995](https://github.com/Opentrons/opentrons/issues/4995)
* **protocol-designer:** disambiguate module model vs type ([#5029](https://github.com/Opentrons/opentrons/issues/5029)) ([a1f4740](https://github.com/Opentrons/opentrons/commit/a1f4740)), closes [#4897](https://github.com/Opentrons/opentrons/issues/4897)
* **protocol-designer:** remove warnings and display correct version for gen 2 modules ([#5224](https://github.com/Opentrons/opentrons/issues/5224)) ([a24a544](https://github.com/Opentrons/opentrons/commit/a24a544)), closes [#5152](https://github.com/Opentrons/opentrons/issues/5152)
* **protocol-designer:** reset time fields in pause step ([#4950](https://github.com/Opentrons/opentrons/issues/4950)) ([4297a54](https://github.com/Opentrons/opentrons/commit/4297a54)), closes [#4949](https://github.com/Opentrons/opentrons/issues/4949)
* **protocol-designer:** save v3/v4 files correctly ([#5100](https://github.com/Opentrons/opentrons/issues/5100)) ([53e8ddf](https://github.com/Opentrons/opentrons/commit/53e8ddf)), closes [#4919](https://github.com/Opentrons/opentrons/issues/4919)
* **protocol-designer:** unify "button row" styles ([#5056](https://github.com/Opentrons/opentrons/issues/5056)) ([06c74d9](https://github.com/Opentrons/opentrons/commit/06c74d9))
* **protocol-designer:** use different ranges for gen1 vs gen2 engageHeight ([#5262](https://github.com/Opentrons/opentrons/issues/5262)) ([434ca61](https://github.com/Opentrons/opentrons/commit/434ca61)), closes [#5230](https://github.com/Opentrons/opentrons/issues/5230)
* **shared-data:** correct existing labware defs engageHeight ([#5261](https://github.com/Opentrons/opentrons/issues/5261)) ([767054d](https://github.com/Opentrons/opentrons/commit/767054d)), closes [#5226](https://github.com/Opentrons/opentrons/issues/5226)





## [3.16.1](https://github.com/opentrons/opentrons/compare/v3.16.0...v3.16.1) (2020-02-25)

**Note:** Version bump only for package protocol-designer





# [3.16.0](https://github.com/Opentrons/opentrons/compare/v3.15.2...v3.16.0) (2020-02-19)

### Bug Fixes

* **protocol-designer:** fix warnings not displaying during timeline creation process ([#4840](https://github.com/Opentrons/opentrons/issues/4840)) ([111f36b](https://github.com/Opentrons/opentrons/commit/111f36b)), closes [#4829](https://github.com/Opentrons/opentrons/issues/4829)
* **protocol-designer:** Update magnetic module recommended labware ([#4827](https://github.com/Opentrons/opentrons/issues/4827)) ([42ec004](https://github.com/Opentrons/opentrons/commit/42ec004)), closes [#4825](https://github.com/Opentrons/opentrons/issues/4825)
* **protocol-designer:** Update maskToNumber to allow for negatives and 0 ([#4709](https://github.com/Opentrons/opentrons/issues/4709)) ([79c7818](https://github.com/Opentrons/opentrons/commit/79c7818)), closes [#4305](https://github.com/Opentrons/opentrons/issues/4305)
* **protocol-designer:** when adding new module only update mag steps … ([#4839](https://github.com/Opentrons/opentrons/issues/4839)) ([ea014fc](https://github.com/Opentrons/opentrons/commit/ea014fc)), closes [#4823](https://github.com/Opentrons/opentrons/issues/4823) [#4823](https://github.com/Opentrons/opentrons/issues/4823)


### Features

* **protocol-designer:** Add awaitTemperature substep items ([#4945](https://github.com/Opentrons/opentrons/issues/4945)) ([d576961](https://github.com/Opentrons/opentrons/commit/d576961)), closes [#4863](https://github.com/Opentrons/opentrons/issues/4863)
* **protocol-designer:** Add clarity around engage height ([#4921](https://github.com/Opentrons/opentrons/issues/4921)) ([8f84e34](https://github.com/Opentrons/opentrons/commit/8f84e34)), closes [#4727](https://github.com/Opentrons/opentrons/issues/4727)
* **protocol-designer:** add commands for temperature step ([#4770](https://github.com/Opentrons/opentrons/issues/4770)) ([6aff0e8](https://github.com/Opentrons/opentrons/commit/6aff0e8))
* **protocol-designer:** add field and form level validation for pause temperature ([#4944](https://github.com/Opentrons/opentrons/issues/4944)) ([ec6c1dd](https://github.com/Opentrons/opentrons/commit/ec6c1dd)), closes [#4937](https://github.com/Opentrons/opentrons/issues/4937)
* **protocol-designer:** add labware hover highlighting to modules ([#4843](https://github.com/Opentrons/opentrons/issues/4843)) ([dfe9bda](https://github.com/Opentrons/opentrons/commit/dfe9bda)), closes [#4696](https://github.com/Opentrons/opentrons/issues/4696)
* **protocol-designer:** Add missing labware hint to magnet step ([#4592](https://github.com/Opentrons/opentrons/issues/4592)) ([a947a14](https://github.com/Opentrons/opentrons/commit/a947a14)), closes [#4303](https://github.com/Opentrons/opentrons/issues/4303)
* **protocol-designer:** Add module missing labware hint to temperature step ([#4644](https://github.com/Opentrons/opentrons/issues/4644)) ([f142e1c](https://github.com/Opentrons/opentrons/commit/f142e1c)), closes [#4643](https://github.com/Opentrons/opentrons/issues/4643)
* **protocol-designer:** Add module slot placement guidance ([#4916](https://github.com/Opentrons/opentrons/issues/4916)) ([ae06796](https://github.com/Opentrons/opentrons/commit/ae06796)), closes [#4815](https://github.com/Opentrons/opentrons/issues/4815)
* **protocol-designer:** add temperature step form validation ([#4593](https://github.com/Opentrons/opentrons/issues/4593)) ([f869c4c](https://github.com/Opentrons/opentrons/commit/f869c4c)), closes [#4592](https://github.com/Opentrons/opentrons/issues/4592)
* **protocol-designer:** allow temperature deck to be updated ([#4865](https://github.com/Opentrons/opentrons/issues/4865)) ([c392d68](https://github.com/Opentrons/opentrons/commit/c392d68)), closes [#4693](https://github.com/Opentrons/opentrons/issues/4693)
* **protocol-designer:** Auto-select module in set temperature form ([#4661](https://github.com/Opentrons/opentrons/issues/4661)) ([ce9d4ce](https://github.com/Opentrons/opentrons/commit/ce9d4ce)), closes [#4642](https://github.com/Opentrons/opentrons/issues/4642)
* **protocol-designer:** Autoselect !previous magnet action ([#4662](https://github.com/Opentrons/opentrons/issues/4662)) ([d4375dd](https://github.com/Opentrons/opentrons/commit/d4375dd)), closes [#4449](https://github.com/Opentrons/opentrons/issues/4449)
* **protocol-designer:** change volume label to volume per well ([#4645](https://github.com/Opentrons/opentrons/issues/4645)) ([f808a59](https://github.com/Opentrons/opentrons/commit/f808a59)), closes [#4015](https://github.com/Opentrons/opentrons/issues/4015)
* **protocol-designer:** Conditionally disabled pause until temp ([#4885](https://github.com/Opentrons/opentrons/issues/4885)) ([d83646d](https://github.com/Opentrons/opentrons/commit/d83646d)), closes [#4867](https://github.com/Opentrons/opentrons/issues/4867)
* **protocol-designer:** Hide incompatible labware ([#4753](https://github.com/Opentrons/opentrons/issues/4753)) ([9d55c56](https://github.com/Opentrons/opentrons/commit/9d55c56)), closes [#4728](https://github.com/Opentrons/opentrons/issues/4728)
* **protocol-designer:** Hide thermocycler functionality behind flag ([#4704](https://github.com/Opentrons/opentrons/issues/4704)) ([053d9f0](https://github.com/Opentrons/opentrons/commit/053d9f0)), closes [#4695](https://github.com/Opentrons/opentrons/issues/4695)
* **protocol-designer:** hook up wait for temp in PD ([#4926](https://github.com/Opentrons/opentrons/issues/4926)) ([710cffa](https://github.com/Opentrons/opentrons/commit/710cffa)), closes [#4732](https://github.com/Opentrons/opentrons/issues/4732)
* **protocol-designer:** hookup magnet step ([#4628](https://github.com/Opentrons/opentrons/issues/4628)) ([33177a1](https://github.com/Opentrons/opentrons/commit/33177a1)), closes [#4450](https://github.com/Opentrons/opentrons/issues/4450)
* **protocol-designer:** Make moduleId field required for temperature step ([#4716](https://github.com/Opentrons/opentrons/issues/4716)) ([d25b9d4](https://github.com/Opentrons/opentrons/commit/d25b9d4))
* **protocol-designer:** Pause until temperature reached ([#4745](https://github.com/Opentrons/opentrons/issues/4745)) ([fbbcac1](https://github.com/Opentrons/opentrons/commit/fbbcac1)), closes [#4306](https://github.com/Opentrons/opentrons/issues/4306)
* **protocol-designer:** Populate engageHeight field with previous values ([#4794](https://github.com/Opentrons/opentrons/issues/4794)) ([b68b52d](https://github.com/Opentrons/opentrons/commit/b68b52d)), closes [#4764](https://github.com/Opentrons/opentrons/issues/4764)
* **protocol-designer:** render substep section in timeline for set temperature step ([#4932](https://github.com/Opentrons/opentrons/issues/4932)) ([69938be](https://github.com/Opentrons/opentrons/commit/69938be)), closes [#4862](https://github.com/Opentrons/opentrons/issues/4862)
* **protocol-designer:** show magnetic module status in substeps and on deck ([#4724](https://github.com/Opentrons/opentrons/issues/4724)) ([8b71b4a](https://github.com/Opentrons/opentrons/commit/8b71b4a)), closes [#4304](https://github.com/Opentrons/opentrons/issues/4304)
* **protocol-designer:** use immer in step generation ([#4769](https://github.com/Opentrons/opentrons/issues/4769)) ([7915393](https://github.com/Opentrons/opentrons/commit/7915393)), closes [#4697](https://github.com/Opentrons/opentrons/issues/4697)
* **shared-data:** add new v4 JSON protocol schema ([#4846](https://github.com/Opentrons/opentrons/issues/4846)) ([bd49812](https://github.com/Opentrons/opentrons/commit/bd49812)), closes [#4836](https://github.com/Opentrons/opentrons/issues/4836) [#4897](https://github.com/Opentrons/opentrons/issues/4897)


### Performance Improvements

* **protocol-designer:** improve timeline generation performance ([#4701](https://github.com/Opentrons/opentrons/issues/4701)) ([ee63163](https://github.com/Opentrons/opentrons/commit/ee63163))


### Reverts

* **protocol-designer:** Revert change default exports to named exports ([#4938](https://github.com/Opentrons/opentrons/issues/4938)) ([49d81c9](https://github.com/Opentrons/opentrons/commit/49d81c9))





## [3.15.2](https://github.com/opentrons/opentrons/compare/v3.15.1...v3.15.2) (2019-12-17)

### Bug Fixes

* **protocol-designer:** filters out non trash labware for blowout options ([#4559](https://github.com/Opentrons/opentrons/issues/4559)) ([aaf189d](https://github.com/Opentrons/opentrons/commit/aaf189d)), closes [#4348](https://github.com/Opentrons/opentrons/issues/4348) [#4348](https://github.com/Opentrons/opentrons/issues/4348)


### Features

* **protocol-designer:** Add set temperature form ([#4533](https://github.com/Opentrons/opentrons/issues/4533)) ([255e910](https://github.com/Opentrons/opentrons/commit/255e910)), closes [#4307](https://github.com/Opentrons/opentrons/issues/4307)
* **protocol-designer:** reorganize step-generation ([#4531](https://github.com/Opentrons/opentrons/issues/4531)) ([125f06f](https://github.com/Opentrons/opentrons/commit/125f06f)), closes [#4301](https://github.com/Opentrons/opentrons/issues/4301)
* **protocol-designer:** update recommended labware article link ([#4552](https://github.com/Opentrons/opentrons/issues/4552)) ([08a2d26](https://github.com/Opentrons/opentrons/commit/08a2d26)), closes [#4324](https://github.com/Opentrons/opentrons/issues/4324)





## [3.15.1](https://github.com/Opentrons/opentrons/compare/v3.15.0...v3.15.1) (2019-12-09)

**Note:** Version bump only for package protocol-designer





# [3.15.0](https://github.com/Opentrons/opentrons/compare/v3.14.1...v3.15.0) (2019-12-05)


### Bug Fixes

* **protocol-designer:** fix bug in manualIntervention step ([#4350](https://github.com/Opentrons/opentrons/issues/4350)) ([2648052](https://github.com/Opentrons/opentrons/commit/2648052)), closes [#4334](https://github.com/Opentrons/opentrons/issues/4334)
* **protocol-designer:** fix labware incompat drag warning ([#4428](https://github.com/Opentrons/opentrons/issues/4428)) ([467c2e4](https://github.com/Opentrons/opentrons/commit/467c2e4))


### Features

* **protocol-designer:** add compatibility info to LabwarePreview ([#4393](https://github.com/Opentrons/opentrons/issues/4393)) ([df9f41d](https://github.com/Opentrons/opentrons/commit/df9f41d)), closes [#4135](https://github.com/Opentrons/opentrons/issues/4135)
* **protocol-designer:** Add edit modules modal ([#4320](https://github.com/Opentrons/opentrons/issues/4320)) ([bb71ae8](https://github.com/Opentrons/opentrons/commit/bb71ae8))
* **protocol-designer:** Add magnet step form field validation ([#4469](https://github.com/Opentrons/opentrons/issues/4469)) ([07d7905](https://github.com/Opentrons/opentrons/commit/07d7905)), closes [#4300](https://github.com/Opentrons/opentrons/issues/4300)
* **protocol-designer:** Add magnet step UI ([#4455](https://github.com/Opentrons/opentrons/issues/4455)) ([963288b](https://github.com/Opentrons/opentrons/commit/963288b))
* **protocol-designer:** Add module placement warning and validation ([#4425](https://github.com/Opentrons/opentrons/issues/4425)) ([9034128](https://github.com/Opentrons/opentrons/commit/9034128)), closes [#4137](https://github.com/Opentrons/opentrons/issues/4137)
* **protocol-designer:** add module slot visualization ([#4355](https://github.com/Opentrons/opentrons/issues/4355)) ([187fae0](https://github.com/Opentrons/opentrons/commit/187fae0)), closes [#4310](https://github.com/Opentrons/opentrons/issues/4310)
* **protocol-designer:** add warning when using expt features ([#4447](https://github.com/Opentrons/opentrons/issues/4447)) ([15fcbd7](https://github.com/Opentrons/opentrons/commit/15fcbd7)), closes [#4129](https://github.com/Opentrons/opentrons/issues/4129)
* **protocol-designer:** blocking hint on adding custom labware to modal ([#4383](https://github.com/Opentrons/opentrons/issues/4383)) ([f04d67e](https://github.com/Opentrons/opentrons/commit/f04d67e)), closes [#4329](https://github.com/Opentrons/opentrons/issues/4329)
* **protocol-designer:** Disable module step creation when module missing ([#4468](https://github.com/Opentrons/opentrons/issues/4468)) ([f2e1a9e](https://github.com/Opentrons/opentrons/commit/f2e1a9e)), closes [#4456](https://github.com/Opentrons/opentrons/issues/4456)
* **protocol-designer:** Enable adding and editing modules in file page ([#4385](https://github.com/Opentrons/opentrons/issues/4385)) ([6d975fd](https://github.com/Opentrons/opentrons/commit/6d975fd)), closes [#4317](https://github.com/Opentrons/opentrons/issues/4317)
* **protocol-designer:** Enable slot selection for modules when FF enabled ([#4347](https://github.com/Opentrons/opentrons/issues/4347)) ([31fa641](https://github.com/Opentrons/opentrons/commit/31fa641)), closes [#4133](https://github.com/Opentrons/opentrons/issues/4133)
* **protocol-designer:** enforce labware<>module compat ([#4427](https://github.com/Opentrons/opentrons/issues/4427)) ([4d42156](https://github.com/Opentrons/opentrons/commit/4d42156)), closes [#4136](https://github.com/Opentrons/opentrons/issues/4136)
* **protocol-designer:** expose GEN2 pipettes in pipette select ([#4351](https://github.com/Opentrons/opentrons/issues/4351)) ([6195a2d](https://github.com/Opentrons/opentrons/commit/6195a2d)), closes [#4295](https://github.com/Opentrons/opentrons/issues/4295)
* **protocol-designer:** fix labware duplication bug ([#4429](https://github.com/Opentrons/opentrons/issues/4429)) ([a0b321a](https://github.com/Opentrons/opentrons/commit/a0b321a)), closes [#4407](https://github.com/Opentrons/opentrons/issues/4407)
* **protocol-designer:** hook up module creation in NewFileModal ([#4319](https://github.com/Opentrons/opentrons/issues/4319)) ([c2dba36](https://github.com/Opentrons/opentrons/commit/c2dba36))
* **protocol-designer:** ignore labware<>module collision error in rogue mode ([#4437](https://github.com/Opentrons/opentrons/issues/4437)) ([99526ae](https://github.com/Opentrons/opentrons/commit/99526ae)), closes [#4130](https://github.com/Opentrons/opentrons/issues/4130)
* **protocol-designer:** labware<>module incompat DnD behavior ([#4409](https://github.com/Opentrons/opentrons/issues/4409)) ([e7f0334](https://github.com/Opentrons/opentrons/commit/e7f0334)), closes [#4136](https://github.com/Opentrons/opentrons/issues/4136)
* **protocol-designer:** move deck setup guidance to hint modal ([#4463](https://github.com/Opentrons/opentrons/issues/4463)) ([ae4e7be](https://github.com/Opentrons/opentrons/commit/ae4e7be)), closes [#4328](https://github.com/Opentrons/opentrons/issues/4328)
* **protocol-designer:** Render crash warning for modules with Gen1 multi pipettes ([#4410](https://github.com/Opentrons/opentrons/issues/4410)) ([9981193](https://github.com/Opentrons/opentrons/commit/9981193)), closes [#4373](https://github.com/Opentrons/opentrons/issues/4373)
* **protocol-designer:** render modules on deck ([#4309](https://github.com/Opentrons/opentrons/issues/4309)) ([20514f0](https://github.com/Opentrons/opentrons/commit/20514f0))
* **protocol-designer:** save/load protocols with modules in prepro PD ([#4419](https://github.com/Opentrons/opentrons/issues/4419)) ([2b98da2](https://github.com/Opentrons/opentrons/commit/2b98da2))
* **protocol-designer:** show module<>pipette collision error ([#4436](https://github.com/Opentrons/opentrons/issues/4436)) ([21cbca1](https://github.com/Opentrons/opentrons/commit/21cbca1)), closes [#4130](https://github.com/Opentrons/opentrons/issues/4130)
* **protocol-designer:** show special-case warning for north/south ([#4361](https://github.com/Opentrons/opentrons/issues/4361)) ([86912e8](https://github.com/Opentrons/opentrons/commit/86912e8)), closes [#4332](https://github.com/Opentrons/opentrons/issues/4332)
* **protocol-designer:** updates to LabwareSelectionModal ([#4325](https://github.com/Opentrons/opentrons/issues/4325)) ([04d8fea](https://github.com/Opentrons/opentrons/commit/04d8fea)), closes [#4323](https://github.com/Opentrons/opentrons/issues/4323)
* **protocol-designer:** Wire up modules card with actual data ([#4354](https://github.com/Opentrons/opentrons/issues/4354)) ([33c5952](https://github.com/Opentrons/opentrons/commit/33c5952))





## [3.14.1](https://github.com/Opentrons/opentrons/compare/v3.14.0...v3.14.1) (2019-11-11)

**Note:** Version bump only for package protocol-designer





# [3.14.0](https://github.com/Opentrons/opentrons/compare/v3.13.2...v3.14.0) (2019-10-31)

### Bug Fixes

* **api,shared-data,labware-creator:** do not touch tip on troughs ([#4271](https://github.com/Opentrons/opentrons/issues/4271)) ([d7e76cd](https://github.com/Opentrons/opentrons/commit/d7e76cd)), closes [#4258](https://github.com/Opentrons/opentrons/issues/4258)
* **protocol-designer:** fix copy & link for custom labware ([#4232](https://github.com/Opentrons/opentrons/issues/4232)) ([1490f65](https://github.com/Opentrons/opentrons/commit/1490f65))


### Features

* **protocol-designer:** add new actions for module interactions ([#4275](https://github.com/Opentrons/opentrons/issues/4275)) ([5e9fa80](https://github.com/Opentrons/opentrons/commit/5e9fa80))
* **protocol-designer:** add reducers for module placement ([#4287](https://github.com/Opentrons/opentrons/issues/4287)) ([7973d2a](https://github.com/Opentrons/opentrons/commit/7973d2a))
* **protocol-designer:** Add unrestricted module placement FF ([#4289](https://github.com/Opentrons/opentrons/issues/4289)) ([4c59d4d](https://github.com/Opentrons/opentrons/commit/4c59d4d)), closes [#4134](https://github.com/Opentrons/opentrons/issues/4134)
* **protocol-designer:** promote custom labware upload to full feature ([#4207](https://github.com/Opentrons/opentrons/issues/4207)) ([c19634e](https://github.com/Opentrons/opentrons/commit/c19634e))





## [3.13.2](https://github.com/Opentrons/opentrons/compare/v3.13.1...v3.13.2) (2019-10-10)

**Note:** Version bump only for package protocol-designer





## [3.13.1](https://github.com/Opentrons/opentrons/compare/v3.13.0...v3.13.1) (2019-10-09)

**Note:** Version bump only for package protocol-designer





# [3.13.0](https://github.com/Opentrons/opentrons/compare/v3.12.0...v3.13.0) (2019-10-02)

### Bug Fixes

* **protocol-designer:** fix tip position bug with zero ([#4079](https://github.com/Opentrons/opentrons/issues/4079)) ([be82a73](https://github.com/Opentrons/opentrons/commit/be82a73)), closes [#4057](https://github.com/Opentrons/opentrons/issues/4057)
* **protocol-designer:** show form error state in StepItems ([#4080](https://github.com/Opentrons/opentrons/issues/4080)) ([2aa1556](https://github.com/Opentrons/opentrons/commit/2aa1556)), closes [#3678](https://github.com/Opentrons/opentrons/issues/3678)


### Features

* **protocol-designer:** avoid use of labware "format" ([#4070](https://github.com/Opentrons/opentrons/issues/4070)) ([f8603a6](https://github.com/Opentrons/opentrons/commit/f8603a6)), closes [#3894](https://github.com/Opentrons/opentrons/issues/3894)
* **protocol-designer:** disallow standard labware def upload ([#4077](https://github.com/Opentrons/opentrons/issues/4077)) ([5670823](https://github.com/Opentrons/opentrons/commit/5670823)), closes [#4009](https://github.com/Opentrons/opentrons/issues/4009)





# [3.12.0](https://github.com/Opentrons/opentrons/compare/v3.11.4...v3.12.0) (2019-09-13)

### Features

* **protocol-designer:** add copy with custom labware button ([#3991](https://github.com/Opentrons/opentrons/issues/3991)) ([edb5d75](https://github.com/Opentrons/opentrons/commit/edb5d75)), closes [#3924](https://github.com/Opentrons/opentrons/issues/3924)
* **protocol-designer:** allow user to upload custom labware ([#3863](https://github.com/Opentrons/opentrons/issues/3863)) ([2dfe404](https://github.com/Opentrons/opentrons/commit/2dfe404))
* **protocol-designer:** output minified json ([#3999](https://github.com/Opentrons/opentrons/issues/3999)) ([44d9a5b](https://github.com/Opentrons/opentrons/commit/44d9a5b)), closes [#3998](https://github.com/Opentrons/opentrons/issues/3998)
* **protocol-designer:** put custom labware upload under feature flag ([#3923](https://github.com/Opentrons/opentrons/issues/3923)) ([a61dfc2](https://github.com/Opentrons/opentrons/commit/a61dfc2))





## [3.11.4](https://github.com/Opentrons/opentrons/compare/v3.11.3...v3.11.4) (2019-08-29)

**Note:** Version bump only for package protocol-designer





## [3.11.3](https://github.com/Opentrons/opentrons/compare/v3.11.2...v3.11.3) (2019-08-28)

**Note:** Version bump only for package protocol-designer





## [3.11.2](https://github.com/Opentrons/opentrons/compare/v3.11.1...v3.11.2) (2019-08-21)

**Note:** Version bump only for package protocol-designer





## [3.11.1](https://github.com/Opentrons/opentrons/compare/v3.11.0...v3.11.1) (2019-08-21)

**Note:** Version bump only for package protocol-designer





# [3.11.0](https://github.com/Opentrons/opentrons/compare/v3.10.3...v3.11.0) (2019-08-21)


### Bug Fixes

* **protocol-designer:** update typeform version ([#3794](https://github.com/Opentrons/opentrons/issues/3794)) ([46c6503](https://github.com/Opentrons/opentrons/commit/46c6503))


### Features

* **protocol-designer:** bump typeform/embed to v0.12.1 ([#3865](https://github.com/Opentrons/opentrons/issues/3865)) ([617d5ad](https://github.com/Opentrons/opentrons/commit/617d5ad))
* **protocol-designer:** warn user when exporting w/o steps ([#3864](https://github.com/Opentrons/opentrons/issues/3864)) ([1a129ec](https://github.com/Opentrons/opentrons/commit/1a129ec)), closes [#3060](https://github.com/Opentrons/opentrons/issues/3060)





<a name="3.10.3"></a>
## [3.10.3](https://github.com/Opentrons/opentrons/compare/v3.10.2...v3.10.3) (2019-07-26)

**Note:** Version bump only for package @opentrons/protocol-designer




<a name="3.10.2"></a>
## [3.10.2](https://github.com/Opentrons/opentrons/compare/v3.10.0...v3.10.2) (2019-07-25)


### Bug Fixes

* **protocol-designer:** update various styles to match designs ([#3714](https://github.com/Opentrons/opentrons/issues/3714)) ([ad0562c](https://github.com/Opentrons/opentrons/commit/ad0562c)), closes [#2122](https://github.com/Opentrons/opentrons/issues/2122)


### Features

* **app:** add GEN2 images to change pipette ([#3734](https://github.com/Opentrons/opentrons/issues/3734)) ([1016c16](https://github.com/Opentrons/opentrons/commit/1016c16)), closes [#3630](https://github.com/Opentrons/opentrons/issues/3630)
* **protocol-designer:** update migration modal copy ([#3709](https://github.com/Opentrons/opentrons/issues/3709)) ([e3d1ffa](https://github.com/Opentrons/opentrons/commit/e3d1ffa)), closes [#3696](https://github.com/Opentrons/opentrons/issues/3696)





<a name="3.10.1"></a>
## [3.10.1](https://github.com/Opentrons/opentrons/compare/v3.10.0...v3.10.1) (2019-07-19)


### Bug Fixes

* **protocol-designer:** update various styles to match designs ([#3714](https://github.com/Opentrons/opentrons/issues/3714)) ([ad0562c](https://github.com/Opentrons/opentrons/commit/ad0562c)), closes [#2122](https://github.com/Opentrons/opentrons/issues/2122)


### Features

* **app:** add GEN2 images to change pipette ([#3734](https://github.com/Opentrons/opentrons/issues/3734)) ([1016c16](https://github.com/Opentrons/opentrons/commit/1016c16)), closes [#3630](https://github.com/Opentrons/opentrons/issues/3630)
* **protocol-designer:** update migration modal copy ([#3709](https://github.com/Opentrons/opentrons/issues/3709)) ([e3d1ffa](https://github.com/Opentrons/opentrons/commit/e3d1ffa)), closes [#3696](https://github.com/Opentrons/opentrons/issues/3696)





<a name="3.10.0"></a>
# [3.10.0](https://github.com/Opentrons/opentrons/compare/v3.9.0...v3.10.0) (2019-07-15)


### Bug Fixes

* **app,pd:** Truncate long labware names ([#3644](https://github.com/Opentrons/opentrons/issues/3644)) ([abe4bc7](https://github.com/Opentrons/opentrons/commit/abe4bc7)), closes [#3617](https://github.com/Opentrons/opentrons/issues/3617) [#2444](https://github.com/Opentrons/opentrons/issues/2444)
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


### Features

* **app:** add support for v2 labware ([#3590](https://github.com/Opentrons/opentrons/issues/3590)) ([0b74937](https://github.com/Opentrons/opentrons/commit/0b74937)), closes [#3451](https://github.com/Opentrons/opentrons/issues/3451)
* **components:** Make design changes to RWS ([#3608](https://github.com/Opentrons/opentrons/issues/3608)) ([d3dd2c6](https://github.com/Opentrons/opentrons/commit/d3dd2c6))
* **labware:** update labware mapping ([#3636](https://github.com/Opentrons/opentrons/issues/3636)) ([a1e6005](https://github.com/Opentrons/opentrons/commit/a1e6005)), closes [#3605](https://github.com/Opentrons/opentrons/issues/3605)
* **labware:** zero out cornerOffsetFromSlot from all current v2 labware defs ([#3642](https://github.com/Opentrons/opentrons/issues/3642)) ([9b91298](https://github.com/Opentrons/opentrons/commit/9b91298))
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
* **shared-data:** display specific v2 labware as "retired" ([#3627](https://github.com/Opentrons/opentrons/issues/3627)) ([3fb5812](https://github.com/Opentrons/opentrons/commit/3fb5812))
* **shared-data:** remove otId from all v2 labware and dependencies ([#3549](https://github.com/Opentrons/opentrons/issues/3549)) ([1766cb1](https://github.com/Opentrons/opentrons/commit/1766cb1)), closes [#3471](https://github.com/Opentrons/opentrons/issues/3471)





<a name="3.9.0"></a>
# [3.9.0](https://github.com/Opentrons/opentrons/compare/v3.8.3...v3.9.0) (2019-05-29)


### Bug Fixes

* **protocol-designer:** cast offsetFromBottomMm values to number ([#3387](https://github.com/Opentrons/opentrons/issues/3387)) ([893f83a](https://github.com/Opentrons/opentrons/commit/893f83a))
* **protocol-designer:** update document title to reflect project status ([#3390](https://github.com/Opentrons/opentrons/issues/3390)) ([9ea495d](https://github.com/Opentrons/opentrons/commit/9ea495d))


### Features

* **protocol-designer:** make "labware views" use new v2 labware components ([#3448](https://github.com/Opentrons/opentrons/issues/3448)) ([ec6598b](https://github.com/Opentrons/opentrons/commit/ec6598b))
* **protocol-designer:** v2 labware selection from definitions ([#3439](https://github.com/Opentrons/opentrons/issues/3439)) ([0ae7129](https://github.com/Opentrons/opentrons/commit/0ae7129)), closes [#3335](https://github.com/Opentrons/opentrons/issues/3335) [#3291](https://github.com/Opentrons/opentrons/issues/3291) [#3290](https://github.com/Opentrons/opentrons/issues/3290)
* **repo:** change v2 labware len/width fields ([#3410](https://github.com/Opentrons/opentrons/issues/3410)) ([0ef0bd5](https://github.com/Opentrons/opentrons/commit/0ef0bd5))
* **shared-data:** add version, schemaVersion, and namespace keys to v2 labware ([#3469](https://github.com/Opentrons/opentrons/issues/3469)) ([da03025](https://github.com/Opentrons/opentrons/commit/da03025)), closes [#3454](https://github.com/Opentrons/opentrons/issues/3454)
* **shared-data:** deck component from physical data ([#3415](https://github.com/Opentrons/opentrons/issues/3415)) ([ddf9e78](https://github.com/Opentrons/opentrons/commit/ddf9e78)), closes [#3326](https://github.com/Opentrons/opentrons/issues/3326)


<a name="3.8.3"></a>
## [3.8.3](https://github.com/Opentrons/opentrons/compare/v3.8.2...v3.8.3) (2019-04-30)

**Note:** Version bump only for package protocol-designer


<a name="3.8.2"></a>
## [3.8.2](https://github.com/Opentrons/opentrons/compare/v3.8.1...v3.8.2) (2019-04-23)


### Bug Fixes

* **protocol-designer:** fix trough over-aspirate bug ([#3280](https://github.com/Opentrons/opentrons/issues/3280)) ([c0b0333](https://github.com/Opentrons/opentrons/commit/c0b0333))


### Features

* **protocol-designer:** show tooltips on disabled fields in Transfer form ([#3286](https://github.com/Opentrons/opentrons/issues/3286)) ([a9cc612](https://github.com/Opentrons/opentrons/commit/a9cc612)), closes [#3259](https://github.com/Opentrons/opentrons/issues/3259)


### Performance Improvements

* **protocol-designer:** avoid selector recomputation in step forms ([#3292](https://github.com/Opentrons/opentrons/issues/3292)) ([41c40c5](https://github.com/Opentrons/opentrons/commit/41c40c5))
* **protocol-designer:** fix selectors used by allSubsteps ([#3287](https://github.com/Opentrons/opentrons/issues/3287)) ([54dfa53](https://github.com/Opentrons/opentrons/commit/54dfa53))





<a name="3.8.1"></a>
## [3.8.1](https://github.com/Opentrons/opentrons/compare/v3.8.0...v3.8.1) (2019-03-29)


### Bug Fixes

* **protocol-designer:** do not create labware ids if can't create labware ([#3255](https://github.com/Opentrons/opentrons/issues/3255)) ([916a10c](https://github.com/Opentrons/opentrons/commit/916a10c)), closes [#3254](https://github.com/Opentrons/opentrons/issues/3254)


### Features

* **protocol-designer:** assorted form tweaks ([#3260](https://github.com/Opentrons/opentrons/issues/3260)) ([a14fca9](https://github.com/Opentrons/opentrons/commit/a14fca9))
* **protocol-designer:** update mix form design ([#3247](https://github.com/Opentrons/opentrons/issues/3247)) ([57ee363](https://github.com/Opentrons/opentrons/commit/57ee363)), closes [#3141](https://github.com/Opentrons/opentrons/issues/3141)
* **protocol-designer:** update pause form design ([#3257](https://github.com/Opentrons/opentrons/issues/3257)) ([9bf5cad](https://github.com/Opentrons/opentrons/commit/9bf5cad)), closes [#3142](https://github.com/Opentrons/opentrons/issues/3142) [#3255](https://github.com/Opentrons/opentrons/issues/3255)
* **protocol-designer:** update transfer form design ([#3221](https://github.com/Opentrons/opentrons/issues/3221)) ([775ec4b](https://github.com/Opentrons/opentrons/commit/775ec4b))
* **protocol-designer:** use file-saver to save protocols ([#3263](https://github.com/Opentrons/opentrons/issues/3263)) ([56d4788](https://github.com/Opentrons/opentrons/commit/56d4788))
* **protocol-designer:** warning/error redesign ([#3270](https://github.com/Opentrons/opentrons/issues/3270)) ([51a6cc3](https://github.com/Opentrons/opentrons/commit/51a6cc3))





<a name="3.8.0"></a>
# [3.8.0](https://github.com/Opentrons/opentrons/compare/v3.7.0...v3.8.0) (2019-03-19)


### Bug Fixes

* **protocol-designer:** fix drop tip offset bug ([#3126](https://github.com/Opentrons/opentrons/issues/3126)) ([6db63f4](https://github.com/Opentrons/opentrons/commit/6db63f4)), closes [#3122](https://github.com/Opentrons/opentrons/issues/3122) [#3123](https://github.com/Opentrons/opentrons/issues/3123)
* **protocol-designer:** fix mistake with load file error reporting ([#3190](https://github.com/Opentrons/opentrons/issues/3190)) ([3f648ad](https://github.com/Opentrons/opentrons/commit/3f648ad)), closes [#3172](https://github.com/Opentrons/opentrons/issues/3172)
* **protocol-designer:** fix mix disabled fields ([#3192](https://github.com/Opentrons/opentrons/issues/3192)) ([51846d5](https://github.com/Opentrons/opentrons/commit/51846d5)), closes [#3049](https://github.com/Opentrons/opentrons/issues/3049)
* **protocol-designer:** fix move liquid tooltip; remove old unused tooltips ([#3147](https://github.com/Opentrons/opentrons/issues/3147)) ([c1cc891](https://github.com/Opentrons/opentrons/commit/c1cc891))
* **protocol-designer:** update disposal volume knowledge base link ([#3132](https://github.com/Opentrons/opentrons/issues/3132)) ([1431cbd](https://github.com/Opentrons/opentrons/commit/1431cbd)), closes [#3130](https://github.com/Opentrons/opentrons/issues/3130)


### Features

* **protocol-designer:** add 404 redirect page ([#3193](https://github.com/Opentrons/opentrons/issues/3193)) ([10658b8](https://github.com/Opentrons/opentrons/commit/10658b8)), closes [#3167](https://github.com/Opentrons/opentrons/issues/3167)
* **protocol-designer:** add change tip and reasons for disabled path ([#3139](https://github.com/Opentrons/opentrons/issues/3139)) ([6c3f0f0](https://github.com/Opentrons/opentrons/commit/6c3f0f0)), closes [#3137](https://github.com/Opentrons/opentrons/issues/3137)
* **protocol-designer:** add emailListName param to confirmEmail call ([#3174](https://github.com/Opentrons/opentrons/issues/3174)) ([af40d4b](https://github.com/Opentrons/opentrons/commit/af40d4b)), closes [#3166](https://github.com/Opentrons/opentrons/issues/3166)
* **protocol-designer:** add favicon ([#3176](https://github.com/Opentrons/opentrons/issues/3176)) ([0410731](https://github.com/Opentrons/opentrons/commit/0410731)), closes [#3171](https://github.com/Opentrons/opentrons/issues/3171)
* **protocol-designer:** auto-select well of single well labware ([#3157](https://github.com/Opentrons/opentrons/issues/3157)) ([8424c15](https://github.com/Opentrons/opentrons/commit/8424c15)), closes [#3146](https://github.com/Opentrons/opentrons/issues/3146)
* **protocol-designer:** expose current version in settings page ([#3135](https://github.com/Opentrons/opentrons/issues/3135)) ([ce30ab6](https://github.com/Opentrons/opentrons/commit/ce30ab6)), closes [#3114](https://github.com/Opentrons/opentrons/issues/3114)
* **protocol-designer:** gate entry by user identity ([#3153](https://github.com/Opentrons/opentrons/issues/3153)) ([1a257b2](https://github.com/Opentrons/opentrons/commit/1a257b2)), closes [#3149](https://github.com/Opentrons/opentrons/issues/3149) [#3150](https://github.com/Opentrons/opentrons/issues/3150)
* **protocol-designer:** hash favicon ([#3184](https://github.com/Opentrons/opentrons/issues/3184)) ([153c596](https://github.com/Opentrons/opentrons/commit/153c596))
* **protocol-designer:** hide GateModal in dev by default ([#3210](https://github.com/Opentrons/opentrons/issues/3210)) ([3b01ee8](https://github.com/Opentrons/opentrons/commit/3b01ee8)), closes [#3189](https://github.com/Opentrons/opentrons/issues/3189)
* **protocol-designer:** pd version metadata in code and analytics  ([#3178](https://github.com/Opentrons/opentrons/issues/3178)) ([9319198](https://github.com/Opentrons/opentrons/commit/9319198))
* **protocol-designer:** point to staging or prod resources accordingly ([#3181](https://github.com/Opentrons/opentrons/issues/3181)) ([8a2befc](https://github.com/Opentrons/opentrons/commit/8a2befc)), closes [#3180](https://github.com/Opentrons/opentrons/issues/3180)
* **protocol-designer:** show info modal when file has been migrated ([#3148](https://github.com/Opentrons/opentrons/issues/3148)) ([1150068](https://github.com/Opentrons/opentrons/commit/1150068)), closes [#3057](https://github.com/Opentrons/opentrons/issues/3057)
* **protocol-designer:** update title and add beta tag ([#3131](https://github.com/Opentrons/opentrons/issues/3131)) ([09322d7](https://github.com/Opentrons/opentrons/commit/09322d7)), closes [#3127](https://github.com/Opentrons/opentrons/issues/3127)





<a name="3.7.0"></a>
# [3.7.0](https://github.com/Opentrons/opentrons/compare/v3.6.5...v3.7.0) (2019-02-19)


### Bug Fixes

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


### Features

* **api:** pipette config plunger position ([#2999](https://github.com/Opentrons/opentrons/issues/2999)) ([cbd559a](https://github.com/Opentrons/opentrons/commit/cbd559a))
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

* **protocol-designer:** optimize substep components to render less often ([#3007](https://github.com/Opentrons/opentrons/issues/3007)) ([5b2ed7d](https://github.com/Opentrons/opentrons/commit/5b2ed7d))





<a name="3.6.5"></a>
## [3.6.5](https://github.com/Opentrons/opentrons/compare/v3.6.4...v3.6.5) (2018-12-18)


### Bug Fixes

* **protocol-designer:** ensure pipettes are removed from step forms when nuked ([#2813](https://github.com/Opentrons/opentrons/issues/2813)) ([46fee8b](https://github.com/Opentrons/opentrons/commit/46fee8b))


### Features

* **protocol-designer:** display timeline and form alerts in same fashion ([#2817](https://github.com/Opentrons/opentrons/issues/2817)) ([e27d2ae](https://github.com/Opentrons/opentrons/commit/e27d2ae)), closes [#1990](https://github.com/Opentrons/opentrons/issues/1990)





<a name="3.6.4"></a>
## [3.6.4](https://github.com/Opentrons/opentrons/compare/v3.6.3...v3.6.4) (2018-12-17)


### Bug Fixes

* **protocol-designer:** fix bug with null distribute step ([#2826](https://github.com/Opentrons/opentrons/issues/2826)) ([3eecb29](https://github.com/Opentrons/opentrons/commit/3eecb29))





<a name="3.6.3"></a>
## [3.6.3](https://github.com/Opentrons/opentrons/compare/v3.6.2...v3.6.3) (2018-12-13)

**Note:** Version bump only for package protocol-designer





<a name="3.6.2"></a>
## [3.6.2](https://github.com/Opentrons/opentrons/compare/v3.6.0...v3.6.2) (2018-12-11)


### Bug Fixes

* **protocol-designer:** finish implementing flow rate in PD ([#2782](https://github.com/Opentrons/opentrons/issues/2782)) ([fda0920](https://github.com/Opentrons/opentrons/commit/fda0920)), closes [#2773](https://github.com/Opentrons/opentrons/issues/2773)
* **protocol-designer:** fix bug where new protocol w 1 pipette deleted fixedTrash ([#2797](https://github.com/Opentrons/opentrons/issues/2797)) ([2052f49](https://github.com/Opentrons/opentrons/commit/2052f49))
* **protocol-designer:** fix changeTip once bug in distribute step ([#2784](https://github.com/Opentrons/opentrons/issues/2784)) ([64111f6](https://github.com/Opentrons/opentrons/commit/64111f6)), closes [#2748](https://github.com/Opentrons/opentrons/issues/2748)
* **protocol-designer:** fix distribute aspirate touchtip offset ([#2795](https://github.com/Opentrons/opentrons/issues/2795)) ([c9a4e3f](https://github.com/Opentrons/opentrons/commit/c9a4e3f))
* **protocol-designer:** fix missing disposal volume in new distribute forms ([#2733](https://github.com/Opentrons/opentrons/issues/2733)) ([5657164](https://github.com/Opentrons/opentrons/commit/5657164)), closes [#2705](https://github.com/Opentrons/opentrons/issues/2705)
* **protocol-designer:** fix regression of [#2370](https://github.com/Opentrons/opentrons/issues/2370) ([#2791](https://github.com/Opentrons/opentrons/issues/2791)) ([8a4f470](https://github.com/Opentrons/opentrons/commit/8a4f470))
* **protocol-designer:** fix swap pipettes button dispatch ([#2798](https://github.com/Opentrons/opentrons/issues/2798)) ([68c16c2](https://github.com/Opentrons/opentrons/commit/68c16c2))
* **protocol-designer:** fix when add liquid hint is shown ([#2787](https://github.com/Opentrons/opentrons/issues/2787)) ([eb59fec](https://github.com/Opentrons/opentrons/commit/eb59fec)), closes [#2777](https://github.com/Opentrons/opentrons/issues/2777)


### Features

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





<a name="3.6.1"></a>
## [3.6.1](https://github.com/Opentrons/opentrons/compare/v3.6.0...v3.6.1) (2018-12-05)


### Bug Fixes

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


### Features

* **protocol-designer:** add tooltip to advanced settings icon ([#2727](https://github.com/Opentrons/opentrons/issues/2727)) ([0deb6b7](https://github.com/Opentrons/opentrons/commit/0deb6b7)), closes [#2706](https://github.com/Opentrons/opentrons/issues/2706)
* **protocol-designer:** make multichannel substeps collapsed by default ([#2729](https://github.com/Opentrons/opentrons/issues/2729)) ([b419a72](https://github.com/Opentrons/opentrons/commit/b419a72)), closes [#2678](https://github.com/Opentrons/opentrons/issues/2678)
* **protocol-designer:** remove label from 200ul/300ul tiprack image ([#2722](https://github.com/Opentrons/opentrons/issues/2722)) ([fe5cf6a](https://github.com/Opentrons/opentrons/commit/fe5cf6a)), closes [#2704](https://github.com/Opentrons/opentrons/issues/2704)





<a name="3.6.0-beta.1"></a>
# [3.6.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.6.0-beta.0...v3.6.0-beta.1) (2018-11-27)


### Bug Fixes

* **protocol-designer:** de-hydrate disposal and blowout labware in st… ([#2669](https://github.com/Opentrons/opentrons/issues/2669)) ([b6246b2](https://github.com/Opentrons/opentrons/commit/b6246b2))
* **protocol-designer:** well selection modal refresh on step change ([#2671](https://github.com/Opentrons/opentrons/issues/2671)) ([941916f](https://github.com/Opentrons/opentrons/commit/941916f))


### Features

* **api:** Add 1.5ml tuberack to old labware definition section ([#2679](https://github.com/Opentrons/opentrons/issues/2679)) ([2739038](https://github.com/Opentrons/opentrons/commit/2739038))
* **protocol-designer:** allow user to set touch-tip offset ([#2691](https://github.com/Opentrons/opentrons/issues/2691)) ([d5b7d8a](https://github.com/Opentrons/opentrons/commit/d5b7d8a)), closes [#2540](https://github.com/Opentrons/opentrons/issues/2540)
* **protocol-designer:** disambiguate left/right pipette names when they match ([#2698](https://github.com/Opentrons/opentrons/issues/2698)) ([2f43a0e](https://github.com/Opentrons/opentrons/commit/2f43a0e)), closes [#2078](https://github.com/Opentrons/opentrons/issues/2078)
* **protocol-designer:** disconnect well selection modal from hovered step state ([#2662](https://github.com/Opentrons/opentrons/issues/2662)) ([973a8a5](https://github.com/Opentrons/opentrons/commit/973a8a5)), closes [#2558](https://github.com/Opentrons/opentrons/issues/2558)
* **protocol-designer:** liquid placement modal performance boost ([#2661](https://github.com/Opentrons/opentrons/issues/2661)) ([ecc8569](https://github.com/Opentrons/opentrons/commit/ecc8569)), closes [#2557](https://github.com/Opentrons/opentrons/issues/2557)
* **protocol-designer:** make settings tab always active ([#2700](https://github.com/Opentrons/opentrons/issues/2700)) ([036e2ee](https://github.com/Opentrons/opentrons/commit/036e2ee)), closes [#2697](https://github.com/Opentrons/opentrons/issues/2697)
* **protocol-designer:** use tip max vol, not pipette max vol ([#2656](https://github.com/Opentrons/opentrons/issues/2656)) ([418665d](https://github.com/Opentrons/opentrons/commit/418665d)), closes [#2160](https://github.com/Opentrons/opentrons/issues/2160)





<a name="3.6.0-beta.0"></a>
# [3.6.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.5.1...v3.6.0-beta.0) (2018-11-13)


### Bug Fixes

* **protocol-designer:** add vertical spacing back to form fields ([#2644](https://github.com/Opentrons/opentrons/issues/2644)) ([c7173da](https://github.com/Opentrons/opentrons/commit/c7173da)), closes [#2580](https://github.com/Opentrons/opentrons/issues/2580) [#2597](https://github.com/Opentrons/opentrons/issues/2597)
* **protocol-designer:** fix sidebar for liquid placement modal ([#2649](https://github.com/Opentrons/opentrons/issues/2649)) ([8da2f7d](https://github.com/Opentrons/opentrons/commit/8da2f7d))


### Features

* **api:** support offset in json protocol touch-tip command ([#2566](https://github.com/Opentrons/opentrons/issues/2566)) ([d54ee84](https://github.com/Opentrons/opentrons/commit/d54ee84))
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
# [3.5.1](https://github.com/Opentrons/opentrons/compare/v3.5.0...v3.5.1) (2018-10-26)


### Features

* **protocol-designer:** add 4-in-1 15-50 tuberack to PD ([#2530](https://github.com/Opentrons/opentrons/issues/2530)) ([48cc9c0](https://github.com/Opentrons/opentrons/commit/48cc9c0)), closes [#2453](https://github.com/Opentrons/opentrons/issues/2453)




<a name="3.5.0"></a>
# [3.5.0](https://github.com/Opentrons/opentrons/compare/v3.5.0-beta.1...v3.5.0) (2018-10-25)


### Bug Fixes

* **protocol-designer:** close liquid placement form when clear wells is clicked ([#2533](https://github.com/Opentrons/opentrons/issues/2533)) ([e0727e6](https://github.com/Opentrons/opentrons/commit/e0727e6)), closes [#2528](https://github.com/Opentrons/opentrons/issues/2528)
* **protocol-designer:** do not add __air__ on blowout ([#2545](https://github.com/Opentrons/opentrons/issues/2545)) ([b35cfa9](https://github.com/Opentrons/opentrons/commit/b35cfa9)), closes [#2498](https://github.com/Opentrons/opentrons/issues/2498)
* **protocol-designer:** fix LiquidPlacementForm onBlur typo ([#2546](https://github.com/Opentrons/opentrons/issues/2546)) ([c6a9f38](https://github.com/Opentrons/opentrons/commit/c6a9f38))
* **protocol-designer:** fix localization refactor mistakes ([#2499](https://github.com/Opentrons/opentrons/issues/2499)) ([4ef34f2](https://github.com/Opentrons/opentrons/commit/4ef34f2))


### Features

* **protocol-designer:** add tooltip for labware name/type on steplist ([#2497](https://github.com/Opentrons/opentrons/issues/2497)) ([4890374](https://github.com/Opentrons/opentrons/commit/4890374)), closes [#2421](https://github.com/Opentrons/opentrons/issues/2421)
* **protocol-designer:** allow user to delete entire liquid groups ([#2524](https://github.com/Opentrons/opentrons/issues/2524)) ([dce806b](https://github.com/Opentrons/opentrons/commit/dce806b)), closes [#2437](https://github.com/Opentrons/opentrons/issues/2437)
* **protocol-designer:** continue to liquids not design page ([#2539](https://github.com/Opentrons/opentrons/issues/2539)) ([49da7b1](https://github.com/Opentrons/opentrons/commit/49da7b1)), closes [#2534](https://github.com/Opentrons/opentrons/issues/2534)
* **protocol-designer:** implement "clear wells" button ([#2528](https://github.com/Opentrons/opentrons/issues/2528)) ([145977f](https://github.com/Opentrons/opentrons/commit/145977f)), closes [#2430](https://github.com/Opentrons/opentrons/issues/2430)
* **protocol-designer:** liquid tooltips on well selection, popper and portal ([#2521](https://github.com/Opentrons/opentrons/issues/2521)) ([12d8adb](https://github.com/Opentrons/opentrons/commit/12d8adb)), closes [#2487](https://github.com/Opentrons/opentrons/issues/2487)
* **protocol-designer:** replace liquid placement form ([#2518](https://github.com/Opentrons/opentrons/issues/2518)) ([3a6b06f](https://github.com/Opentrons/opentrons/commit/3a6b06f)), closes [#2429](https://github.com/Opentrons/opentrons/issues/2429)
* **protocol-designer:** use formik for liquid edit form ([#2512](https://github.com/Opentrons/opentrons/issues/2512)) ([3e7456f](https://github.com/Opentrons/opentrons/commit/3e7456f)), closes [#2460](https://github.com/Opentrons/opentrons/issues/2460)





<a name="3.5.0-beta.1"></a>
# [3.5.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.5.0-beta.0...v3.5.0-beta.1) (2018-10-16)


### Bug Fixes

* **protocol-designer:** unhighlight wells on deselect in well selection modal ([#2491](https://github.com/Opentrons/opentrons/issues/2491)) ([5dfbf25](https://github.com/Opentrons/opentrons/commit/5dfbf25)), closes [#2463](https://github.com/Opentrons/opentrons/issues/2463)


### Features

* **protocol-designer:** add tooltips on hover of final result wells ([#2479](https://github.com/Opentrons/opentrons/issues/2479)) ([73d2bf3](https://github.com/Opentrons/opentrons/commit/73d2bf3)), closes [#2409](https://github.com/Opentrons/opentrons/issues/2409)
* **protocol-designer:** create view to browse final liquid state ([#2451](https://github.com/Opentrons/opentrons/issues/2451)) ([5a436c3](https://github.com/Opentrons/opentrons/commit/5a436c3)), closes [#2335](https://github.com/Opentrons/opentrons/issues/2335)
* **protocol-designer:** implement liquids page interactivity ([#2478](https://github.com/Opentrons/opentrons/issues/2478)) ([7e85673](https://github.com/Opentrons/opentrons/commit/7e85673)), closes [#2427](https://github.com/Opentrons/opentrons/issues/2427)
* **protocol-designer:** implement rounding properly ([#2458](https://github.com/Opentrons/opentrons/issues/2458)) ([6ef6bf0](https://github.com/Opentrons/opentrons/commit/6ef6bf0)), closes [#2405](https://github.com/Opentrons/opentrons/issues/2405)





<a name="3.5.0-beta.0"></a>
# [3.5.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.4.0...v3.5.0-beta.0) (2018-10-11)


### Bug Fixes

* **protocol-designer:** fix tiprack diagram only displaying right ([#2340](https://github.com/Opentrons/opentrons/issues/2340)) ([3d4d57b](https://github.com/Opentrons/opentrons/commit/3d4d57b))
* **protocol-designer:** tweak analytics copy for accuracy ([#2366](https://github.com/Opentrons/opentrons/issues/2366)) ([b3f4b45](https://github.com/Opentrons/opentrons/commit/b3f4b45))


### Features

* **components:** create new tab-styled vertical nav bar ([#2371](https://github.com/Opentrons/opentrons/issues/2371)) ([0202b53](https://github.com/Opentrons/opentrons/commit/0202b53)), closes [#1923](https://github.com/Opentrons/opentrons/issues/1923)
* **protocol-designer:** add "app build date" field to PD saved files ([#2350](https://github.com/Opentrons/opentrons/issues/2350)) ([d2bf281](https://github.com/Opentrons/opentrons/commit/d2bf281))
* **protocol-designer:** add liquids tab and sidebar ([#2454](https://github.com/Opentrons/opentrons/issues/2454)) ([0aedda6](https://github.com/Opentrons/opentrons/commit/0aedda6)), closes [#2426](https://github.com/Opentrons/opentrons/issues/2426)
* **protocol-designer:** implement "metadata.created" in JSON file ([#2403](https://github.com/Opentrons/opentrons/issues/2403)) ([a9c3d07](https://github.com/Opentrons/opentrons/commit/a9c3d07)), closes [#2189](https://github.com/Opentrons/opentrons/issues/2189)
* **protocol-designer:** implement selective redux persistence ([#2436](https://github.com/Opentrons/opentrons/issues/2436)) ([6591104](https://github.com/Opentrons/opentrons/commit/6591104))
* **protocol-designer:** modify the "name new labware" overlay for new design ([#2422](https://github.com/Opentrons/opentrons/issues/2422)) ([4934c47](https://github.com/Opentrons/opentrons/commit/4934c47)), closes [#2410](https://github.com/Opentrons/opentrons/issues/2410)
* **protocol-designer:** refactor and performance audit of labware components ([#2442](https://github.com/Opentrons/opentrons/issues/2442)) ([09f4eb3](https://github.com/Opentrons/opentrons/commit/09f4eb3)), closes [#2285](https://github.com/Opentrons/opentrons/issues/2285)
* **protocol-designer:** show hints as modal ([#2447](https://github.com/Opentrons/opentrons/issues/2447)) ([9a3509f](https://github.com/Opentrons/opentrons/commit/9a3509f))
* **shared-data:** Add generator function to create regular labware defs ([#2380](https://github.com/Opentrons/opentrons/issues/2380)) ([bc81574](https://github.com/Opentrons/opentrons/commit/bc81574))





<a name="3.4.0"></a>
# [3.4.0](https://github.com/Opentrons/opentrons/compare/v3.4.0-beta.0...v3.4.0) (2018-09-21)


### Bug Fixes

* **protocol-designer:** close tooltips and step creation button ([#2326](https://github.com/Opentrons/opentrons/issues/2326)) ([f99445b](https://github.com/Opentrons/opentrons/commit/f99445b))
* **protocol-designer:** correct alignment of form fields ([#2281](https://github.com/Opentrons/opentrons/issues/2281)) ([419c55a](https://github.com/Opentrons/opentrons/commit/419c55a)), closes [#2196](https://github.com/Opentrons/opentrons/issues/2196)
* **protocol-designer:** fix recurring deleted labware bug ([#2299](https://github.com/Opentrons/opentrons/issues/2299)) ([ebb44e1](https://github.com/Opentrons/opentrons/commit/ebb44e1))
* **protocol-designer:** fix whitescreen on deleting blowout labware ([#2341](https://github.com/Opentrons/opentrons/issues/2341)) ([44196c6](https://github.com/Opentrons/opentrons/commit/44196c6))


### Features

* **components:** make titlebar stick to top on scroll ([#2321](https://github.com/Opentrons/opentrons/issues/2321)) ([e9b58d8](https://github.com/Opentrons/opentrons/commit/e9b58d8)), closes [#2195](https://github.com/Opentrons/opentrons/issues/2195)
* **protocol-designer:** add dynamic tooltip arrow ([#2319](https://github.com/Opentrons/opentrons/issues/2319)) ([44eb1fb](https://github.com/Opentrons/opentrons/commit/44eb1fb)), closes [#2026](https://github.com/Opentrons/opentrons/issues/2026)
* **protocol-designer:** allow user to specify disposal volume dest ([#2295](https://github.com/Opentrons/opentrons/issues/2295)) ([92ba845](https://github.com/Opentrons/opentrons/commit/92ba845)), closes [#1676](https://github.com/Opentrons/opentrons/issues/1676)
* **protocol-designer:** autoselect default pipette for new forms ([#2320](https://github.com/Opentrons/opentrons/issues/2320)) ([c5efd3c](https://github.com/Opentrons/opentrons/commit/c5efd3c)), closes [#1296](https://github.com/Opentrons/opentrons/issues/1296)
* **protocol-designer:** modify well selection instructional text ([#2263](https://github.com/Opentrons/opentrons/issues/2263)) ([9ec91a4](https://github.com/Opentrons/opentrons/commit/9ec91a4)), closes [#2204](https://github.com/Opentrons/opentrons/issues/2204)





<a name="3.4.0-beta.0"></a>
# [3.4.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.3.1-beta.0...v3.4.0-beta.0) (2018-09-14)


### Bug Fixes

* **protocol-designer:** correctly null out blowout if unchecked in form ([#2226](https://github.com/Opentrons/opentrons/issues/2226)) ([6179b18](https://github.com/Opentrons/opentrons/commit/6179b18))


### Features

* **app:** Parse JSON protocols into state ([#2231](https://github.com/Opentrons/opentrons/issues/2231)) ([b5f3666](https://github.com/Opentrons/opentrons/commit/b5f3666))
* **protocol-designer:** add ux analytics with opt in settings and modal ([#2177](https://github.com/Opentrons/opentrons/issues/2177)) ([4a8ebbe](https://github.com/Opentrons/opentrons/commit/4a8ebbe)), closes [#2119](https://github.com/Opentrons/opentrons/issues/2119) [#2172](https://github.com/Opentrons/opentrons/issues/2172)
* **protocol-designer:** allow tenths of µl pipette volumes ([#2222](https://github.com/Opentrons/opentrons/issues/2222)) ([827f3ee](https://github.com/Opentrons/opentrons/commit/827f3ee)), closes [#2120](https://github.com/Opentrons/opentrons/issues/2120)
* **protocol-designer:** auto dismiss no liquid hint ([#2220](https://github.com/Opentrons/opentrons/issues/2220)) ([d2982e1](https://github.com/Opentrons/opentrons/commit/d2982e1))
* **protocol-designer:** replace 200µl tiprack with 300µl tiprack ([#2223](https://github.com/Opentrons/opentrons/issues/2223)) ([8a8fc0f](https://github.com/Opentrons/opentrons/commit/8a8fc0f)), closes [#1955](https://github.com/Opentrons/opentrons/issues/1955)
* **protocol-designer:** warn changes will be lost on import/create ([#2168](https://github.com/Opentrons/opentrons/issues/2168)) ([0a5a071](https://github.com/Opentrons/opentrons/commit/0a5a071))





<a name="3.3.1-beta.0"></a>
## [3.3.1-beta.0](https://github.com/Opentrons/opentrons/compare/v3.3.0...v3.3.1-beta.0) (2018-09-10)


### Bug Fixes

* **protocol-designer:** change copy for excessive aspirate warning ([#2214](https://github.com/Opentrons/opentrons/issues/2214)) ([de1b714](https://github.com/Opentrons/opentrons/commit/de1b714)), closes [#2213](https://github.com/Opentrons/opentrons/issues/2213)


### Features

* **api:** support flow rate (uL/sec) in JSON protocols ([#2123](https://github.com/Opentrons/opentrons/issues/2123)) ([b0f944e](https://github.com/Opentrons/opentrons/commit/b0f944e))
* **protocol-designer:** add tooltips for advanced settings ([#2170](https://github.com/Opentrons/opentrons/issues/2170)) ([af09a4b](https://github.com/Opentrons/opentrons/commit/af09a4b)), closes [#1981](https://github.com/Opentrons/opentrons/issues/1981)
* **protocol-designer:** add tooltips for step creation button ([#2163](https://github.com/Opentrons/opentrons/issues/2163)) ([e34e636](https://github.com/Opentrons/opentrons/commit/e34e636)), closes [#1979](https://github.com/Opentrons/opentrons/issues/1979)
* **protocol-designer:** default form fields from old protocols ([#2162](https://github.com/Opentrons/opentrons/issues/2162)) ([54585e6](https://github.com/Opentrons/opentrons/commit/54585e6))
* **protocol-designer:** flow rate field more dependent on pipette ([#2154](https://github.com/Opentrons/opentrons/issues/2154)) ([ac778ea](https://github.com/Opentrons/opentrons/commit/ac778ea))
* **protocol-designer:** implement ui for flow rate ([#2149](https://github.com/Opentrons/opentrons/issues/2149)) ([e0e25c1](https://github.com/Opentrons/opentrons/commit/e0e25c1))
* **protocol-designer:** support mm from bottom offset in JSON protocols ([#2180](https://github.com/Opentrons/opentrons/issues/2180)) ([db22ae8](https://github.com/Opentrons/opentrons/commit/db22ae8)), closes [#2157](https://github.com/Opentrons/opentrons/issues/2157)





<a name="3.3.0"></a>
# [3.3.0](https://github.com/Opentrons/opentrons/compare/v3.3.0-beta.1...v3.3.0) (2018-08-22)


### Bug Fixes

* **protocol-designer:** fix serialized name in ingred list ([#2002](https://github.com/Opentrons/opentrons/issues/2002)) ([d19d29b](https://github.com/Opentrons/opentrons/commit/d19d29b)), closes [#1294](https://github.com/Opentrons/opentrons/issues/1294)
* **protocol-designer:** tweak timeline alert copy ([#2086](https://github.com/Opentrons/opentrons/issues/2086)) ([5108f21](https://github.com/Opentrons/opentrons/commit/5108f21))


### Features

* **protocol-designer:** add 'drop tip' to 'dispense' section of form ([#1998](https://github.com/Opentrons/opentrons/issues/1998)) ([fa47f85](https://github.com/Opentrons/opentrons/commit/fa47f85)), closes [#1689](https://github.com/Opentrons/opentrons/issues/1689)
* **protocol-designer:** change tip field and timeline alert copy to i18n ([#2062](https://github.com/Opentrons/opentrons/issues/2062)) ([6fd4807](https://github.com/Opentrons/opentrons/commit/6fd4807)), closes [#1934](https://github.com/Opentrons/opentrons/issues/1934)
* **protocol-designer:** display tip use across step timeline ([#2074](https://github.com/Opentrons/opentrons/issues/2074)) ([51da5ae](https://github.com/Opentrons/opentrons/commit/51da5ae)), closes [#1094](https://github.com/Opentrons/opentrons/issues/1094)
* **protocol-designer:** rename change tip options ([#2003](https://github.com/Opentrons/opentrons/issues/2003)) ([e80fd25](https://github.com/Opentrons/opentrons/commit/e80fd25)), closes [#1933](https://github.com/Opentrons/opentrons/issues/1933)





<a name="3.3.0-beta.1"></a>
# [3.3.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.3.0-beta.0...v3.3.0-beta.1) (2018-08-02)


### Bug Fixes

* **app:** Check if modulesRequired when displaying review modals ([#1940](https://github.com/Opentrons/opentrons/issues/1940)) ([14a54a5](https://github.com/Opentrons/opentrons/commit/14a54a5))
* **protocol-designer:** fix bug where tips not dropped at end of protocol ([#1911](https://github.com/Opentrons/opentrons/issues/1911)) ([945ff6a](https://github.com/Opentrons/opentrons/commit/945ff6a)), closes [#969](https://github.com/Opentrons/opentrons/issues/969)
* **protocol-designer:** fix destination well pills in substeps ([#1896](https://github.com/Opentrons/opentrons/issues/1896)) ([60481b5](https://github.com/Opentrons/opentrons/commit/60481b5)), closes [#1812](https://github.com/Opentrons/opentrons/issues/1812)
* **protocol-designer:** fix file load bug w mismatched pipette ids ([#1918](https://github.com/Opentrons/opentrons/issues/1918)) ([9ec52d1](https://github.com/Opentrons/opentrons/commit/9ec52d1))
* **protocol-designer:** fix styling of pause and mix step items ([#1948](https://github.com/Opentrons/opentrons/issues/1948)) ([16c2a30](https://github.com/Opentrons/opentrons/commit/16c2a30)), closes [#1947](https://github.com/Opentrons/opentrons/issues/1947)
* **protocol-designer:** fix substeps for consolidate using inner mix ([#1921](https://github.com/Opentrons/opentrons/issues/1921)) ([e59cc7e](https://github.com/Opentrons/opentrons/commit/e59cc7e)), closes [#1919](https://github.com/Opentrons/opentrons/issues/1919)
* **protocol-designer:** make well selection modal show pipette display name ([#1907](https://github.com/Opentrons/opentrons/issues/1907)) ([07ad9ff](https://github.com/Opentrons/opentrons/commit/07ad9ff)), closes [#1888](https://github.com/Opentrons/opentrons/issues/1888)
* **protocol-designer:** Only show deck setup prompt text when selected ([#1894](https://github.com/Opentrons/opentrons/issues/1894)) ([32656ef](https://github.com/Opentrons/opentrons/commit/32656ef))


### Features

* **components:** implement hover tooltip and include react popper ([#1855](https://github.com/Opentrons/opentrons/issues/1855)) ([c44e0eb](https://github.com/Opentrons/opentrons/commit/c44e0eb)), closes [#921](https://github.com/Opentrons/opentrons/issues/921)
* **protocol-designer:** add continue to design button to file data page ([#1876](https://github.com/Opentrons/opentrons/issues/1876)) ([cd8ea5e](https://github.com/Opentrons/opentrons/commit/cd8ea5e)), closes [#1782](https://github.com/Opentrons/opentrons/issues/1782)
* **protocol-designer:** add help link to PD nav ([#1945](https://github.com/Opentrons/opentrons/issues/1945)) ([1525cf5](https://github.com/Opentrons/opentrons/commit/1525cf5)), closes [#1941](https://github.com/Opentrons/opentrons/issues/1941)
* **protocol-designer:** add max volume to ingred selection modal volume field ([#1993](https://github.com/Opentrons/opentrons/issues/1993)) ([807c289](https://github.com/Opentrons/opentrons/commit/807c289)), closes [#1835](https://github.com/Opentrons/opentrons/issues/1835)
* **protocol-designer:** alert user of unsaved changes to protocol ([#1856](https://github.com/Opentrons/opentrons/issues/1856)) ([e195363](https://github.com/Opentrons/opentrons/commit/e195363)), closes [#1602](https://github.com/Opentrons/opentrons/issues/1602)
* **protocol-designer:** auto fill well volume field if inferrable ([#1870](https://github.com/Opentrons/opentrons/issues/1870)) ([ab5a40e](https://github.com/Opentrons/opentrons/commit/ab5a40e)), closes [#1668](https://github.com/Opentrons/opentrons/issues/1668)
* **protocol-designer:** change copy for pipette missing tip error ([#1915](https://github.com/Opentrons/opentrons/issues/1915)) ([cd8b920](https://github.com/Opentrons/opentrons/commit/cd8b920)), closes [#1815](https://github.com/Opentrons/opentrons/issues/1815) [#1880](https://github.com/Opentrons/opentrons/issues/1880) [#1815](https://github.com/Opentrons/opentrons/issues/1815)
* **protocol-designer:** change copy ingredients -> liquid ([#1905](https://github.com/Opentrons/opentrons/issues/1905)) ([9f9b989](https://github.com/Opentrons/opentrons/commit/9f9b989)), closes [#1864](https://github.com/Opentrons/opentrons/issues/1864)
* **protocol-designer:** deactivate non-beta step settings, add tooltip ([#1875](https://github.com/Opentrons/opentrons/issues/1875)) ([267b5b3](https://github.com/Opentrons/opentrons/commit/267b5b3)), closes [#1873](https://github.com/Opentrons/opentrons/issues/1873)
* **protocol-designer:** enable user to swap pipette mounts ([#1883](https://github.com/Opentrons/opentrons/issues/1883)) ([d5e40cd](https://github.com/Opentrons/opentrons/commit/d5e40cd)), closes [#1536](https://github.com/Opentrons/opentrons/issues/1536)
* **protocol-designer:** implement move labware in place of copy ([#1938](https://github.com/Opentrons/opentrons/issues/1938)) ([c51ce66](https://github.com/Opentrons/opentrons/commit/c51ce66)), closes [#1908](https://github.com/Opentrons/opentrons/issues/1908)
* **protocol-designer:** make form warnings & errors match TimelineAlerts ([#1924](https://github.com/Opentrons/opentrons/issues/1924)) ([c355be8](https://github.com/Opentrons/opentrons/commit/c355be8)), closes [#1882](https://github.com/Opentrons/opentrons/issues/1882)
* **protocol-designer:** make pipettes eagerly drop tips ([#1946](https://github.com/Opentrons/opentrons/issues/1946)) ([9fb0725](https://github.com/Opentrons/opentrons/commit/9fb0725)), closes [#1706](https://github.com/Opentrons/opentrons/issues/1706)
* **protocol-designer:** make WellSelectionInput label change for multi-channel pipette ([#1927](https://github.com/Opentrons/opentrons/issues/1927)) ([7df3c29](https://github.com/Opentrons/opentrons/commit/7df3c29)), closes [#1537](https://github.com/Opentrons/opentrons/issues/1537)
* **protocol-designer:** re-order and restyle file sidebar buttons ([#1926](https://github.com/Opentrons/opentrons/issues/1926)) ([4ae1f5b](https://github.com/Opentrons/opentrons/commit/4ae1f5b)), closes [#1784](https://github.com/Opentrons/opentrons/issues/1784)
* **protocol-designer:** refactor and restyle LabwareSelectionModal ([#1929](https://github.com/Opentrons/opentrons/issues/1929)) ([7c9891e](https://github.com/Opentrons/opentrons/commit/7c9891e))
* **protocol-designer:** refactor and restyle timeline terminal items ([#1967](https://github.com/Opentrons/opentrons/issues/1967)) ([a2421fd](https://github.com/Opentrons/opentrons/commit/a2421fd)), closes [#1706](https://github.com/Opentrons/opentrons/issues/1706) [#1930](https://github.com/Opentrons/opentrons/issues/1930) [#1974](https://github.com/Opentrons/opentrons/issues/1974)
* **protocol-designer:** remove disposal volume field from all but distribute ([#1868](https://github.com/Opentrons/opentrons/issues/1868)) ([7d98355](https://github.com/Opentrons/opentrons/commit/7d98355)), closes [#1867](https://github.com/Opentrons/opentrons/issues/1867)
* **protocol-designer:** restyle labware hover buttons ([#1916](https://github.com/Opentrons/opentrons/issues/1916)) ([799d1b1](https://github.com/Opentrons/opentrons/commit/799d1b1)), closes [#1519](https://github.com/Opentrons/opentrons/issues/1519)
* **protocol-designer:** save version in PD file with git-describe ([#1987](https://github.com/Opentrons/opentrons/issues/1987)) ([7040727](https://github.com/Opentrons/opentrons/commit/7040727))
* **protocol-designer:** show no pipette on mount in file details ([#1917](https://github.com/Opentrons/opentrons/issues/1917)) ([74e077c](https://github.com/Opentrons/opentrons/commit/74e077c)), closes [#1909](https://github.com/Opentrons/opentrons/issues/1909) [#1783](https://github.com/Opentrons/opentrons/issues/1783)
* **protocol-designer:** support tiprack-to-pipette assignment ([#1866](https://github.com/Opentrons/opentrons/issues/1866)) ([6a4f19d](https://github.com/Opentrons/opentrons/commit/6a4f19d)), closes [#1573](https://github.com/Opentrons/opentrons/issues/1573)
* **protocol-designer:** swap pen icons to pencil ([#1906](https://github.com/Opentrons/opentrons/issues/1906)) ([70a9fc0](https://github.com/Opentrons/opentrons/commit/70a9fc0)), closes [#1861](https://github.com/Opentrons/opentrons/issues/1861)
* **protocol-designer:** update copy for 'no tip on pipette' error ([#1994](https://github.com/Opentrons/opentrons/issues/1994)) ([3a64530](https://github.com/Opentrons/opentrons/commit/3a64530)), closes [#1975](https://github.com/Opentrons/opentrons/issues/1975)
* **protocol-designer:** update well selection modal's TitleBar ([#1884](https://github.com/Opentrons/opentrons/issues/1884)) ([8ce9a4c](https://github.com/Opentrons/opentrons/commit/8ce9a4c)), closes [#1502](https://github.com/Opentrons/opentrons/issues/1502)





<a name="3.3.0-beta.0"></a>
# [3.3.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.3...v3.3.0-beta.0) (2018-07-12)


### Bug Fixes

* **components:** fix Deck component viewBox ([#1807](https://github.com/Opentrons/opentrons/issues/1807)) ([bff921f](https://github.com/Opentrons/opentrons/commit/bff921f))
* **protocol-designer:** allow scroll when NewFileModal too tall ([#1777](https://github.com/Opentrons/opentrons/issues/1777)) ([e6238ab](https://github.com/Opentrons/opentrons/commit/e6238ab)), closes [#1776](https://github.com/Opentrons/opentrons/issues/1776)
* **protocol-designer:** do not navigate on FilePage form submit ([8f98a08](https://github.com/Opentrons/opentrons/commit/8f98a08))
* **protocol-designer:** fix labware copy mirroring ([#1859](https://github.com/Opentrons/opentrons/issues/1859)) ([3742bb7](https://github.com/Opentrons/opentrons/commit/3742bb7)), closes [#1616](https://github.com/Opentrons/opentrons/issues/1616)


### Features

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





<a name="3.2.0"></a>
# [3.2.0](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.3...v3.2.0) (2018-07-10)

**Note:** Version bump only for package protocol-designer





<a name="3.2.0-beta.3"></a>
# [3.2.0-beta.3](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.2...v3.2.0-beta.3) (2018-06-25)


### Features

* **protocol-designer:** allow button to look hovered via .hover class ([#1732](https://github.com/Opentrons/opentrons/issues/1732)) ([04173b7](https://github.com/Opentrons/opentrons/commit/04173b7)), closes [#1690](https://github.com/Opentrons/opentrons/issues/1690)





<a name="3.2.0-beta.2"></a>
# [3.2.0-beta.2](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.1...v3.2.0-beta.2) (2018-06-22)


### Bug Fixes

* **protocol-designer:** set max width of form field rows ([#1723](https://github.com/Opentrons/opentrons/issues/1723)) ([c3a0dc6](https://github.com/Opentrons/opentrons/commit/c3a0dc6)), closes [#1488](https://github.com/Opentrons/opentrons/issues/1488)


### Features

* **protocol-designer:** disallow saving ingred form w/o name & volume ([#1724](https://github.com/Opentrons/opentrons/issues/1724)) ([206d378](https://github.com/Opentrons/opentrons/commit/206d378)), closes [#1609](https://github.com/Opentrons/opentrons/issues/1609) [#1671](https://github.com/Opentrons/opentrons/issues/1671)





<a name="3.2.0-beta.1"></a>
# [3.2.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.0...v3.2.0-beta.1) (2018-06-19)


### Bug Fixes

* **protocol-designer:** fix styles for SelectionRect ([#1714](https://github.com/Opentrons/opentrons/issues/1714)) ([295940e](https://github.com/Opentrons/opentrons/commit/295940e))


### Features

* **protocol-designer:** clarify editing file details ([d03d42f](https://github.com/Opentrons/opentrons/commit/d03d42f)), closes [#1504](https://github.com/Opentrons/opentrons/issues/1504) [#1661](https://github.com/Opentrons/opentrons/issues/1661)





<a name="3.2.0-beta.0"></a>
# [3.2.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.1.2...v3.2.0-beta.0) (2018-06-13)


### Bug Fixes

* **protocol-designer:** fix bug with multi-channel substeps ([#1663](https://github.com/Opentrons/opentrons/issues/1663)) ([1fca294](https://github.com/Opentrons/opentrons/commit/1fca294))


### Features

* **protocol-designer:** Darken font in labware selection modal ([#1646](https://github.com/Opentrons/opentrons/issues/1646)) ([aacc76c](https://github.com/Opentrons/opentrons/commit/aacc76c)), closes [#1341](https://github.com/Opentrons/opentrons/issues/1341)
* **protocol-designer:** elaborate on deck setup in title bar ([#1637](https://github.com/Opentrons/opentrons/issues/1637)) ([6bda925](https://github.com/Opentrons/opentrons/commit/6bda925)), closes [#1339](https://github.com/Opentrons/opentrons/issues/1339)
* **protocol-designer:** increase selected pipette font-size ([#1629](https://github.com/Opentrons/opentrons/issues/1629)) ([b90e767](https://github.com/Opentrons/opentrons/commit/b90e767)), closes [#1325](https://github.com/Opentrons/opentrons/issues/1325)
* **protocol-designer:** update behavior for well setup ([#1511](https://github.com/Opentrons/opentrons/issues/1511)) ([8c611b5](https://github.com/Opentrons/opentrons/commit/8c611b5))
