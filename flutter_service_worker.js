'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "42e773c8771429f0d22505b40b8c8ed6",
".git/config": "e82b9f507616f9d59109cf8357817bd3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8297d4ebd70aad7ff83e7cda1e7e29a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b7b134599f91cf776fba9e0d6bb95b95",
".git/logs/refs/heads/main": "69df82989a5d28906b808b5e97979e30",
".git/logs/refs/remotes/origin/main": "c7bbde10b3a5b4fae7f23dc058ea9b22",
".git/objects/02/1027c5b1e04c430e30e2cace6aed1e945b49c8": "57dbd1a9cd4cae995f943e50afd26dd9",
".git/objects/03/7a96a366be1d11b382a6d29b5c17d38250b211": "29b77a68cd84263b29779b340b263458",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/5211e870dae7d6ed80c2292885af990b867835": "f8c7cf39288c160056410fbe90c04ef8",
".git/objects/05/753d7870055bbf7391afeba22b33a7f701bf94": "022cb93c1568616ea9962289c6a145cb",
".git/objects/07/ef342e28be9d6fd96ce00032bce959e2f6bb1a": "e3297e7a4185e518328053307a9bfbdc",
".git/objects/08/6b68963f5d258fad389a9d0e7561934523519b": "d0cffe6052b55633788cd10bf1930643",
".git/objects/09/6d19af6fac51089b1bfb8b516d5023728799cd": "770ade4ae8f3490679fdb786a5baf6b9",
".git/objects/0a/c2a37595815766daa41ca31d205a133ebac3a7": "ac4270374a0c8416302673320545e13e",
".git/objects/0b/c8845453618c662785c07ddfa86c65f348c111": "643736a32eed304788d85f3a4b721f56",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/5adaf7cab3d97f271972ca2485407839f590c8": "9ceb19ef8198cfdf2cf74b808f206bac",
".git/objects/0d/a53033b75ef90942f70b0e0a76a8ff7f60647a": "664610f92e42ccdbf236d4a51469539d",
".git/objects/0d/ac9985f2c8064414a6e79707d18b65ebc870e3": "bd83b542d3e5a2d75e8b276ceae4b35b",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/0e/4bcf19d683efb3d42f99fa9dbbb4e474f40c6b": "2c6919ad34de274195136820197864d3",
".git/objects/0f/23e785ff3e5b3850e9e65b678ac52e436c57db": "f32737601b503dffc29eeb0fae9522e3",
".git/objects/10/47b58a2077d18497a0f255d20d95de60eb5eb9": "f17523e53d663f618e855d760dd7ae44",
".git/objects/10/82e9bf8a5446bbe4629af86de0146e6572326b": "6a3f9c620c241ff0a89a11701b69f562",
".git/objects/12/647a0144d150f1cc25a4ea85e63ccd557dede5": "40572fd02dd2b7648d715b70fabc5b45",
".git/objects/12/72bb0b6ea9e7cbd791a449672edf2c837779bf": "544ab523aa3dbac54afd581c48c1480e",
".git/objects/12/dc8106db2ab28df4d31d3f0e9f7e8171f2929a": "11d90b22a108c003facd46bf341391ca",
".git/objects/15/7a3f36c807aebb176e4b183be88113a5365be6": "049ef0984dbf49f57100eae63c2e8a0e",
".git/objects/16/ac2ec9cf0a10df0376a101e26307bde82ee12c": "ba3f0358c26a21aae50740844f980dfd",
".git/objects/18/388f147a7dd37ed4397097cb9ec1ab562f1a74": "3f3ca2d7e31c42f4ced9f490347cfecd",
".git/objects/18/619d49d11efba62c2d5d75b71e630d6b58884f": "411aa65807462fd95675fc6d3292dfd1",
".git/objects/18/e21890974bc95c9b7d17308d7ed0ed9cfa9f6c": "cc7f1491a8f57f1dbe9b8bdbb707c30f",
".git/objects/19/f8f9f81275f4540bf4b0047ac69df30ce25854": "39438fc4ce4d9374d3d8461b8128d794",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/e4a00d041f59d259c4db076ce8f488f24c9ff3": "fd0d00ae3a790613cf68dbb2a27a7dfc",
".git/objects/1b/376f2fbd6a6783cf34f23164534f22dc2eacb7": "1544bd9560a81922fbd005cf37a5b210",
".git/objects/1c/29c53a6e080d55c5701fdad13bae3e6eefc439": "4e9362ff3fa78176823c7661e8821a48",
".git/objects/1d/a28b078e8b74e6185d3433c19f6019bbb7fcb0": "e781857f42312152d29f6ee40e9e3af5",
".git/objects/1d/edf566683cdb90a4241ebdefa8e0fc8465e4d6": "d16580ddf12d72852b5103fd744e9dbf",
".git/objects/1e/a9f73f8b8f0d2e47961dbfd2f8e60f9b8fe3f3": "4ee12a6595c21b02cf90efcb967fb93a",
".git/objects/20/a2bff40366d096d9cfb04ebef268dcfe6cf108": "1a9b5fe3514203c453265eb4c7a82c6d",
".git/objects/21/77d0c4014f7ac7fb854245243e4cc73662d4cd": "8707c2cf0b88d2545640bff22ccac61f",
".git/objects/21/fddf7aa4702705a6232f778e81c09624731562": "4fb98991453d0b6b846241f9ad1f84cf",
".git/objects/22/bbc60c65b162a7618aefe4bfe016afa8689bec": "e41295847aee21ad5ad0cc5188946412",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/9ea93c2da57a359f6d544353857fd4af908ccc": "6df1d416af2e73a4c930ec474a2fdf47",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/02ac85a782de870097da891e3ed4d0b7f76535": "53a1cad2fbe42f1335fbf9d274a2d1b7",
".git/objects/25/6f4be4fc61fbdd6f1d41eb570152593409cbb0": "c21b3a795b33240abb6b787150de03b0",
".git/objects/25/c62134b506d0eb69cbcb42a1dd67ad642c5160": "ca0888a5c0015f20db70b40f79d8271c",
".git/objects/26/fe50457a344259d60942fd1c95a27a3c736cc0": "06745f669419e1b6143bfe232a34f1cb",
".git/objects/26/fece6010fa2892b799bd1f6522ef8944ff6363": "9ad7305b1db239fdcfe6e70961b75939",
".git/objects/27/963e82bea206c1e97a3c0157ac10438db1e3be": "d14ffb927e8525549fe27319de971d33",
".git/objects/28/076efcaeb2d681734c0809d412ee2e6eb41f90": "4855401d77db1b70b28731a0c863e39f",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/28/9f5698667c6276b0a545f405adf8a274ce89b8": "56efc72daa5903ddf095f9380474a010",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/80eafea2945efc6a50656250c4c5e93486a636": "efade58d0f7623616384fafa6990c66b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/b2a078f191a1e4c8f538b68e5ec299164a3fa3": "861dbd7eae004290426f0403d40e9ab2",
".git/objects/2e/ea8ad706a44a7902d2086f0144a93c70652b7e": "d10856b540433e853a70a1b9d1045b1d",
".git/objects/2e/fadfdfb5ee34bb0d3d275fae438c87cf7e7de3": "15486d1321d9cb806333352d876d28f2",
".git/objects/30/0a705cb61afb6f3c67d869d80561892a0b75de": "e3e27212a473007fb46677e45b96e490",
".git/objects/31/86a1f3380a3f6e83816d6b83b7699a690f2d52": "91e5b30dca4929f8168d32e1a7b940ac",
".git/objects/33/927951967016a3e686e9fe0a60adad22ec7042": "def47d7f39ebf8fd4d3e1dd0237a6ca7",
".git/objects/35/1806c8c67c0106e38e604e13180d10b7db05d7": "96dbd3927bddae918e14fa2a142ba7a1",
".git/objects/36/419b7e2d5b794a12dfe436a49d7b0c0341a6d0": "5fa848b9e8ef6518c7867c320c2113df",
".git/objects/37/053e0cac175db40cbdc49eba0119d5f3331e22": "0ed49a2a98d6427ce6472f6874b8d3d8",
".git/objects/38/6ba3ca5cd0e2b6d77944f66dd596f2693c5d24": "4e065ab472cc0b31085e99fe37aaaa09",
".git/objects/38/ef4f46242253d3580af5c22d4898d26697c299": "6ab0f20ca9823191691c83d49add0a59",
".git/objects/39/80aac3ef50c3f3a99be44494f35ec4528b0580": "6bae3c8346587bf4883a41cf1203fa63",
".git/objects/3b/890cceddece76e8f05f7d4465c0afa28ea069a": "5a972bcdaa388e17bcd357898bf9c57f",
".git/objects/3b/e87d6d8f7419d07c1ae48b12a9f9120048eb39": "5ad8a3eed7f050ec7ef7896474393f6a",
".git/objects/3d/2b841a589a82209acd46c541815a898cb226d2": "5b7aee218d9fc7f53ea741c6f9bf052b",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/cbaf8cbe8f4c2e24f917bfcbee1c72d2e4d6b7": "89eb18bc3ad59ae212bdd80a96716a63",
".git/objects/40/cce37c5dcc75d497390c50ba101c653c419148": "6e52749336293e2f77e385ee50ba6dde",
".git/objects/40/e2561a98d5634784b7d0ec85cfb16fe69d61ea": "e5403a183eda2d8c05f8bb01fe90ac06",
".git/objects/43/7bd9b8337e9383dc1d01bde7e7e74d43d42e2e": "eec5ea6faa28dc3e127006f2fc69eec7",
".git/objects/44/81bc3a36243c8a6acce43c74ea2a936834ea44": "3b43f5d67f23c910af4ece9288210e89",
".git/objects/44/dc97592950ec1361c5536d6e6219a41b8089bd": "077929fb809eca37ed9204e9ea7db4f3",
".git/objects/45/3035e7d8dc3b3d01d83ba750feff1467d72323": "53feee559500ad49b36a34f054164135",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/4f586e66715350d7229e6575998e06af2917d8": "6ad6015c5b3f381eb037feb72f80adce",
".git/objects/48/b21984dc6e8ab8afc93fe40f3e7ed0f8a8defa": "25eecd3727c1ca4232762c76e2219e1c",
".git/objects/4a/a4f6d7a189a4bab734c5c37524a8f007352e1e": "c31cc6ef345f54f1f116fa0a7243d476",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/fc5bc3aef3994466cf09a58c628dbb142b0e83": "1226e9bdb949cbf2f6268e10fb73bfcf",
".git/objects/4d/13c4bce4bffa354b15710514572b379b423c79": "11b4ce35477335b6331fb808719901a0",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/bb02235b2670859fb5ec79792b7ae034619c74": "320f67bc765432a49f7d5a9b23834a02",
".git/objects/4e/fe5339638200764331b0fbb62f6ee7b167f953": "a506708f116ac0af4124877a47a68403",
".git/objects/50/27bb1d1e200acb27d4463873ac1b4968c3194e": "ed59c2360e828fb97bf3fdde7dc45bf3",
".git/objects/50/36b2c4b0228a70dfe33423a3d381bb474ef72a": "5c3624d440347e8d3682846d845dc7ec",
".git/objects/50/7b908192f0b4dc587fa34d8143e8de0e64ce9f": "a951ca7b67e02a3c49eb58268760f28e",
".git/objects/50/a0e85fefc0a011ddc83226128a420df8d65b7e": "c664830262941350c960ba581be939c4",
".git/objects/53/5183f59fc47f74876f9ca492d4f90cb1964190": "e8865c005cde96f8319f4afa190cbf70",
".git/objects/53/df7529fee66e5aec175d1c4f8876f46625c1e5": "92eb4a12186e87d46c6be653b949393c",
".git/objects/54/f3ef4730d4ca691f3fe2959fdaaddf3ff8fa55": "30f5ab33f241bbc4b4f9b3b0c86f20a7",
".git/objects/55/e3eca08e2889a21ba522872ab4c63d62f0f31e": "979fc2ea8dc063a4baa5880cbec8a5ee",
".git/objects/56/78ba3d6239a61b8f5e4f3beaaaa53c31b33ace": "a249b69ae7a29cbb1f924d2017b44092",
".git/objects/56/971f3674346397113ed56f12dd21e6b9f061c4": "8f1c3c01bc6ad87bceff611fb1b44ffb",
".git/objects/57/84739db076ab95f3dc3ef143752bfaabd43548": "ffbec0574331df70af884c98977c927e",
".git/objects/58/9485ce1e814e40abb1d337e0488cc906f54962": "9fee13ecd102ce0c6ca736ce362d554a",
".git/objects/59/350664fa474d0491c7fb8144abfadbc87b7774": "a055082ce2a0a542f8b5ede4ec0a7cdf",
".git/objects/5a/6d57b835fb77d5f761d19cc954ecde0e8b6f07": "1afb7b6c4c2d4d3cebc77a17dab2615e",
".git/objects/5b/686dc2c7c8e3e36c49cba4f98c95208181b597": "b9cc99d1e83e415496ccfa023cc30ac8",
".git/objects/5b/e34d7a6ab50eff247847ac838de84554b5bc1f": "3317382b95572eb2c3c29d08d4775cf3",
".git/objects/5f/4dbce53e9379580cee15b10d76ea86d13ece85": "d6e63c01e41fdf5ab288c69ce316336c",
".git/objects/5f/a7a2e15a4d63e3c7ad418dd1652c7f085b4b5f": "b7fc58d938a93243f2c028c8a52d2b1a",
".git/objects/60/9e1646ecb755bf8d5763df9de728cbee3fafcc": "5dc9fc86d2b988fa1cfe218462a80997",
".git/objects/60/baf545510223ab5d9b378a9ac48f5663c3bdd3": "079b85507d172f829a89c230bac643e3",
".git/objects/61/2632a5f7b2c94b08fa8844206433ba80f9c742": "9318cca496d0a2268859218811d88641",
".git/objects/62/34e70550a7ce3e0077bbc5d293a3887cc3d3e6": "ec78e10a4bb8208ae65e9d8c33cc4fe7",
".git/objects/62/65d88918c29d19a9c497eafd5b323cdc792915": "5b6ab491b2e5032aec50504d760a58d8",
".git/objects/62/7f65fb659f22ad43512f0e3b175e3b812a833a": "b7d19da43b05e7c4bc3610b684ca4fd4",
".git/objects/63/b58a1250597ffe37a5904cf9984f043c01db0f": "222b3eff77c73d03b3c8b0e333d8e98b",
".git/objects/64/59ab13901ddfe1cc555383897db24ac702a90e": "3189fd662fb5a56b84a189f7a1861dc0",
".git/objects/65/4c74f0404ac969b02c17ea378820ca8b2ecb0d": "178bcea68fa6e87f371c660d79181523",
".git/objects/67/11e74703485d4bb1f768435d380b5fb4151f71": "0ad41b5ea4e4308bab34b6e4354d02a5",
".git/objects/67/f1db56abea98f0b3fc10c5a21787c82f6b6b35": "084c90f87c03cf1aef7c1e5780805b3a",
".git/objects/68/113ed022bc460e60ee899119be2aee2cb5442e": "276c95e9897007a8940363f26f256d0c",
".git/objects/69/5540eeecf3890764124ff88998640e1f2dc783": "98a52005939f1a456b69788cbfdb0e55",
".git/objects/69/6761a775c39fe24f8f4e0262e2ce3c7758d2a4": "0c9c1b1923d6ec98feb7d3de0594648c",
".git/objects/69/bff969d45eb255205dae937c3dfaa43b1b1374": "116f09f14646b4e1521a3ba458d2d672",
".git/objects/6b/ef58f24f0951366b5ea662fbcd20fa1b41c78d": "9df4678b94274f5c93c394059dde4cc8",
".git/objects/6c/694d292a3b6c1ccec01228f7ccaff8f49fadea": "7ab4cd729cea35f31bd42bcae7d86cfd",
".git/objects/6c/ca5b8471252d2b5dd163b7f11c4450fc14d5ac": "2c0de26f9884d48a641dd810eeb98b85",
".git/objects/6f/df3d175c5f25bdc91a075ae02adb095708abe2": "af1482fcb4a149568a1f142269159f92",
".git/objects/70/5bbb7debc92f78662825b4fda84cc4f4e435eb": "97d6902428e4db5bb43cb66f63baef17",
".git/objects/70/65015460c44df5c72945f2949f4c3192357faa": "7eba439304f2fac6fc1b226fbd9e9fe8",
".git/objects/71/534e37fe333acc3e88b631eb3517a37f2d4ab0": "90ab638c34902dc5eaad82a0560da548",
".git/objects/72/1a34cb60312417344a2ba082b9de99cc14dd8c": "76a72e05c2d9b70ffe0d47d79343e175",
".git/objects/72/2480f06e3cf44868a82ae0dc36da631b155550": "a9d407584f218c6e62747ef222e60bc8",
".git/objects/73/1081c1290d29452cd933487dfb734f32639c0a": "f5c35db3a0373095a7a9582e2a15b863",
".git/objects/73/7dbb009f57b99638617e2963e6c2dc4e583a02": "437a4190e44ce356257ea4104ba3925e",
".git/objects/74/4cc3e34dba05b176cd28bd6c52d35a23289674": "fa5addf2b866f817aec0b1f605eda3d5",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/d9a0c7675126c1f075d72d198e19c125521196": "cb294a0607f5d912df13ac798d5f91c5",
".git/objects/78/33f7b221a25a53322f79c2c3c54dcd239f9f2d": "8d9d125b173aae7975eb8aa871e932fb",
".git/objects/78/7baf0a28a277f603c5076c0c4b527a2cbb3c64": "bcb03fb02fa3561d95da6d7dce5e7068",
".git/objects/78/fedcdcda40191ff8c5f37ca7c8ae850e8eb8a9": "9377c5558327f546aac9527911f21772",
".git/objects/79/9fc800a1d2cf9787a67450f513675783dab0a9": "b0f953f8fdb008487524639d5985e419",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d05202bdb9eef340be6f68857edf3a9f2a3a87": "bfcb13971d6a3714039b3d48f795d3e8",
".git/objects/7a/13f878461e31cf9b87dea91704b088a2d595f9": "8604510718af0720d0053fa75392850c",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/94e6a945db4b8c0a924b406416f2d7ca18dc1a": "57b45dacd4df93228b86aa7e1ae5364f",
".git/objects/7f/4a668f4ecba5d852f0dd5f6be8c8a60fe441db": "00657f89ad545fdbe02198c69643048c",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/84/5aa44bac8ed80203ee5d4bdc90da112667a259": "eae051e7552bc4df48438dba80185e28",
".git/objects/87/eb87626c048ec6d90af4469bf5478a2d5ee271": "fca876153d0551502f737e7d3664c8e8",
".git/objects/88/3253300bf6e3ac124fb794c104f4dfd0a4ab3c": "087b56ac735ce591c7379624bfa8bb01",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/091406bb454da82de41b79c2d43f5fc1655c2f": "3cee4e9e499fcda546c7f204695b45e7",
".git/objects/89/6e59e5b083c4839e4bfdd8a0537b71b23fea28": "907654b6c7518a3c11c8fac29ba1cb70",
".git/objects/89/fd89cf5c6d68527ae3991750c56eb6007fe5de": "0c864c62a4890dbe6919fa68859572dc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d6948ff3a9742f5640b9c7d26c637ccbfd2ae1": "18d0fc10fca2005b69dcb764bb60199f",
".git/objects/8b/d1f6c4150f5469dd94eb3f0a2bf08021f478d9": "b677b2470c4b1d448063765b035b53bc",
".git/objects/8b/e21167d62704745aa6c8ca68d7b60f2468bad0": "68ed5d6bbf8b439f9f6f717c6c5d2f26",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8d/b0171cda7a4a0d44a4cbf1b13f0bc114398265": "8227be76833ccd41ae144cd03ca92bd1",
".git/objects/8e/358f32ac12859e971c37d510644527323de9ec": "91c4ef99c7b05e31255796ad42823dce",
".git/objects/90/1134c157ac9a13d589229858edb911de18e2cd": "18df8dc476535695d0e1798181d04e3f",
".git/objects/90/aab60a9652f357c9010fcd1b88f71d45e248ae": "79f7d477afe655ef1e077dfc6c131430",
".git/objects/90/d9a2ed033798bac6f984d35ea5c0dd93feadec": "ed5990c5ffccf5ac923b28052e8e8ac9",
".git/objects/91/004ac43f3e723f5bf7bccd6ad3e5e12a46ba23": "801390dbd860fcd0bb7e93cb1834973d",
".git/objects/94/824c35e9c6c248a69467f42e24feac4d8713d0": "6fe2ce97661123a0e538fba6fc9c3ed9",
".git/objects/95/c022b449d8d3f1a027ce23e2a7b95f3000583b": "acb6a248cef47651b08ec683ed3fd3b5",
".git/objects/97/155e90eedac588667cd2e901d8ff66a9ed7458": "51e8661e007a1a3101ef39bc9e17cfd6",
".git/objects/97/2553d55604c37372fd730a4abcbbe631be78d0": "bcd78641ad5424f65aae94fde1f2fe1a",
".git/objects/97/37a7f9677e14d2f6a6f2841d245ee6bb62b474": "2f4eb30be16aeaea7894b1eb42835094",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/aa1ff78711ca7f6c5910629d9803660cb7c582": "9ba206a7ffa4ceafbf7b27dcf40eb660",
".git/objects/99/d0b45f04358fe7e86bc2e1c68ee601d16a0720": "2f2000429f3cb72c04f23f1d79abb47e",
".git/objects/99/f56c083aec6a46415c835d6237265d3f4a82c3": "6d62b5c773dbea6bb3744660f4208be5",
".git/objects/9a/f31f3891715c4e5795c2f448807531a359dabf": "4faef0af997c61eb22dbb55c07e939f5",
".git/objects/9c/023236302a1a53788ef33837741dfbe368fb25": "d853d4ee1e109cb93638d6d04652c48d",
".git/objects/9d/51f5a951f3513a4c1343d058e4e034ef793bc7": "c13d42d0ccdb0f08c288fd8ad53ffa10",
".git/objects/9d/fae252ce57b171ea09a2431306918f11566d91": "1a70b9705e8ed2b69fa7b0541bdf50ce",
".git/objects/9e/43e31f89b89d98de0644786b1549119808dc2d": "5017cef66bb3d9a9f997d55a576643f5",
".git/objects/9e/efb10534220d4837e6d57fb4c52712a46f817e": "7c1d9365882a8ed4b532543e99a4c3e7",
".git/objects/a0/421414bcce5a5d522b467cd9981e473e8125f8": "1d8bc6ad5e0731f5a693622e787ca5a1",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ffdbb83ea5962a2fe92fa726f6526d5143d657": "11412abf8ddc997b2bdd693cd10f6c31",
".git/objects/a2/97686ae3117efa42c341addee58553b27988ad": "84d58cd047821ee3420f4875b495c40b",
".git/objects/a4/2cb5662ea2fb5bfa9e7dd0b7511736119378a7": "66706fa5945ed3af665ce5002aa21e6a",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a5/a6943950223bfca10c51ee0d320a4366015852": "792af871397cdab5108306c516ac6af4",
".git/objects/a6/1ed45b0ca52c411623fc1d1667e619232f66e0": "5d3a1c71234fbcd7cce44e87efe77aa5",
".git/objects/a6/4f6371c0cf8e3c1fc80a681a5ae83de833c7fa": "1a1eb308d60feb02f0455c919aba8fd2",
".git/objects/a7/19cc7180d76c5ecfd889ac30c540a932a89cc4": "9829017a439a46b78a61ad14d264f914",
".git/objects/a8/a48594a997958e5328691c2ab1011bd3e546c2": "26fcd501f23ca0be78b4251e2b7a5c22",
".git/objects/a8/abca6995c8bb4daa36a9a3c9cd770742dc3e11": "4ecb8a620563f6576e5a268c2a9d6d8e",
".git/objects/a9/ec0b10a6429d414b1fce1d99d827d8ec360306": "6a3dea2909fe3c1a283b10d0a5676b43",
".git/objects/aa/96bd875df66357557ad85541ab56d24db079ee": "0f9f8c1d1ebe1ce53bb055927b7aa4e9",
".git/objects/aa/c0061a9754acef62efe17455660ea439066597": "5608315f41c75d9c5933fb9483d19dbd",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/91972fefc7d67f9f0ad554d2517c148196d4ff": "5d074f5091cfb0fff0fe85dd59796180",
".git/objects/ae/a34ebe366e3989c31026a49ecd2d5a4c30abab": "762538e9fffcb1a54ec042ea18ac528b",
".git/objects/b2/49e16ffd9562a6f0dada27ae4e0935e86f842e": "1e9f93b3fdf52ba12dbe0b6f1a8b0985",
".git/objects/b3/0386ad51b664ad8f25e7facf3ccafe49035434": "3ec065c7aaa966aa945065766ef35ea8",
".git/objects/b5/3b49de30dc02901c70ed7534cbac86ae4c53a2": "3d3da2b76e5db09031f84b8c9683eed2",
".git/objects/b5/402553971c40a0630482446a0e1d086f247338": "fd0279760cc7e98c65028ca3b1bde43c",
".git/objects/b6/23866198df5a967753d5241649e293d114523d": "94f367df260025e4841fda0f87b50faf",
".git/objects/b6/f979cde21c4d57fc8d98f218105f11fb9a2986": "5ad72d698bf3262f3ed009f2f44edec0",
".git/objects/b7/4473e63c1258a1d6dc526a3d02d638a163c196": "aceb9100fce9004ae10c2c090925cbec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2c6ada1e1a4dc6fe381ded55d7a005373c7f0f": "0d48c5c869ad002b760d56d8ef05140f",
".git/objects/b9/8c474928dd2d20ac3ef877f005ce54d45d28fc": "f5255839aa53a27b908faddfc1f90278",
".git/objects/ba/c3c746fa54fbd7d5271f47a7c2eb18383ef684": "2c3711502a62fedc087dc49401808a50",
".git/objects/ba/f420e8d67dfbcb8f7f118eeea50234e333c8cd": "e5f184c3f596564f46650eddd2fe4971",
".git/objects/bb/112dbf12221a6bea36904c52dada27b6d94a99": "efb69056874eea4f904f39861110dbc8",
".git/objects/bb/831425dd15974d0e0e16acb3bff8d5b60bfcf7": "bf1f49e606e0dcbbc7a884f6cf71efe0",
".git/objects/bc/62fb7cec9a70070624ad886bfb6b4a8770f634": "bb23fd8dd7957bd843431baafdcf8935",
".git/objects/bd/092e7518772ae09054ea6f367d8df83b2823c7": "c6c7a51bcf20d7ffc7dd25e95e183f0c",
".git/objects/bd/a138a4569c99b8b28a8d5eef57be512883797b": "ac66d5fddb768f847cd5f53ccd5dd580",
".git/objects/be/689536e1a107e41eecab22f1c2d796fae45e08": "ecb0eb54c476a0d772bbb7c3a04be273",
".git/objects/be/a9411f1dcdac6a8beebd0c440ec10944059377": "063f4fb6c84b54f815c455ce564f0ffc",
".git/objects/be/cfc24733767142d44fe9581107ba2a40bc3d2c": "6503a9ae0e084200e2339ba58adf67e1",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c2/5570306f6e0235f415f64a5b44ec9270a886de": "327038694c0e92d1a6abd2c4fd10ade0",
".git/objects/c3/72c1b38cc86c0281e351ec677c22a0e2b88339": "80e728957249be274d6d7ab3c3f4e967",
".git/objects/c3/865253b9b7a7af393ad5e2cba4d2b6ced34e5b": "5f366dd49ea1dc51b7f1d36636e71448",
".git/objects/c3/b18432050c382cca874800d79d95ec802f0a73": "86cc9a847f3d630fd796972b9feddd8b",
".git/objects/c3/edca1f6ff46015ed202fd2d0e641a8727c4f44": "0946aee22ebfe7caca14e5db4d66e8f0",
".git/objects/c4/484cc1ec746cfe95aeb5bfe5dbcc9dbdafc61f": "c535f364327795860d0a1e0570aba92d",
".git/objects/c4/d8ff5b57d1b9d1b980a22ce3a9adbbe291834d": "5bfcc095006dedef9fe107600c0e1de7",
".git/objects/c5/35f0670bfa4983504bed11058ad3ace8d12ea0": "1d902c701394b000e17369a49188966b",
".git/objects/c5/3e2108545c2d4a4e39bd5fd4bbe23a22fdd9f7": "e5a4e133e925ad6ce0b9db39ee2d7cf9",
".git/objects/c5/4821b4ba258d43c83faf7ff00f81a7c4bd86cf": "972bde8eb0c7a403ef164d0a854998d1",
".git/objects/c5/4b797b96ffdd6963de2c85e3e4ee95f4989d55": "d5ba037ca76d2d7f8a283b2ef14a6632",
".git/objects/c6/19ebb1c03d7805a4897b4b09f81b4174c1384b": "3caac13aa8725443365331c455ff7e63",
".git/objects/c8/b798ee4fb743d3c5e9593c2616c9130a4ee95d": "9515915b5d9a8f0576bea6448d87b8c6",
".git/objects/c9/12e9442bf045b5535a8ae5818c2c93372801dc": "2b4b994c5730c650ee33757efd736cef",
".git/objects/c9/40a008f7e69e54bef4954838cb6cb510e8a28b": "88c1e1ab3ae91f2dc0d3bddbebc4fbf6",
".git/objects/ca/f13c9d1eaad047770725e1771b4ba5dc037f9c": "923821c9a65ec7760a40d107566b95ce",
".git/objects/cb/19fe974a5f7aa403ace9863f858ebaaa335c13": "9fef88f291a4173342185fcd1d8ae5a0",
".git/objects/cb/5ac2e3cdd7665c373ccf4fc9b0482d46f25348": "83c92c2ebca8537572c59838113ddf0f",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/c2b3d401ed56382985cf3fbf8f521b6d504782": "b2f65e1fa52c5e7f66c45963a9e029ea",
".git/objects/d1/53fc662ab3d76641bb219e78c502d5811716d5": "dbce98e23da1d4d52450bc63c7af4fe7",
".git/objects/d2/3d58682a2f45ea8567a0c091483c55fffef868": "4750f98c946c4a87114c95b3dfad9ea8",
".git/objects/d2/7a729d7726587456822568abbbe13de13df763": "4b9f96ee79161938213b1a5c49fd6a90",
".git/objects/d3/7acb02c115485fa755bcbc2fb7f7c5b95953b9": "ffbda90648e1aebcaa951f96b424c0d1",
".git/objects/d3/b0c714a2d1dbf671e3895c781823bdf1a31d54": "dda844f361af4d0a4ac8cfec27744592",
".git/objects/d5/206a670d7a817425ec878eb9abdc0b69f2a050": "8798e82665bf74b753a8558eb0db395b",
".git/objects/d5/5de933fa3b7f7e79e1cc42ea4d4b6f2cd25703": "378023e7ea0101e1688189d2ca05faad",
".git/objects/d6/32b65f62962468ee4417716428cc4500c62293": "97a3124bcb9a658ad92dc996eac1c9dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4e6e7902b98380376bd0be052e5d4bd28a5433": "138748ac3b387546ae533be1152e4cb1",
".git/objects/d9/3d19fa052c6ea4a6787a5f8a252192cd51d479": "09911a7463161bf4a08a2de85c026ce9",
".git/objects/d9/3e936236b6b6b54c001584ebe99b3c1ed864e0": "802063fbf99e1ed3483bb7a7d9e02a2e",
".git/objects/da/df76d6c1cbf49044c58971210a13bf2d778c83": "d20babd604409cf8dfc20904e900515f",
".git/objects/dd/1827e4ac3dcee2b4c9d1c2f4a74c6602dbc383": "4e59e33fb28055396cca467092a76f71",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/1c733263454f38f0b806ce90dd8067c3cfba7e": "bcbd3fe1d8492dec18a0a723972ec83a",
".git/objects/e0/1e186a68dab9a2bf22c13bb09a48c1f9cc1651": "5863336835c348ee626d0fd8739e4170",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/6d2e901b447db5356393346e815771aceb1ba9": "f8b1920d32ced0422cf4e49a4be350c2",
".git/objects/e3/14bf767d73e886256eb5f3ae2575e027a2356e": "5a17aaa450c57b8c8eb595447f0c0db8",
".git/objects/e4/4e72793ce4a8ece82c4b273af6a4c32a02a1ae": "509a4c267e81e93af2caa7254f2765ff",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5182336d22f10519a1a3ec81ab2f69b330dcc4": "6d68b2e7cb14dc55f9ec913ea47cc581",
".git/objects/e8/28ebef468d16f9d633447647a76a97b7dcaf5d": "43b5e1fecefcc9a79607245fe657ef87",
".git/objects/e8/9ce701f623dccfcbcd0078af72bf31eed97ba9": "d41a7dce3ea7b45593558f9e5d08ddd3",
".git/objects/e9/01ee4400d8c080d74ac27567ec1a956f82c04c": "634ec73070bc91de170069abc5c47c5e",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/ffe7964f7b74031f6cf43c226dccd161610172": "bf58c12d0601f106bc10c1159d291601",
".git/objects/eb/45cf57f16aecf5ca2a2789aacc3218f1979407": "67cefe6962317236f932b24d86db4750",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7e81f83f1a197983e3b25be9df575464c55fc5": "0d496afac3398341d3b30fb4cc41143d",
".git/objects/ed/df73387de77085ac0e105ce5e822e500191b9d": "8721e94be65e9474787d350b69b93401",
".git/objects/ee/db14159877ca18d0697f29771280fa91136c34": "57daf6574ceb6ef8822a018a488f1768",
".git/objects/ef/76d69f3ac7286075197fc515d4ee3b538b0e2b": "5c8d00f66558cb5773525d6d310cf102",
".git/objects/ef/e6e64052033688c1091a22bde9b099ab0ff2fc": "29d07a4aa416a656e2530806b492f514",
".git/objects/f0/9625bc47e98a6b36e125c6cf7e521892f01069": "26ef44727436ecc024dfce12696da475",
".git/objects/f1/33699c4af8c29476ab94a8386841e6768e73ff": "f3441fa174928657eb845b197275a3a2",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f3/e608dba78c3af331f4390bd851a5af53909f78": "4074b4095116e51a70a942b951c9d295",
".git/objects/f4/371fbcd3c0b784e781ab3770d168a24f9cac15": "6cc059f35ae68d879732e3547bf297b0",
".git/objects/f5/cf452fd09116db9c207382fcefd1ac6d90f8a0": "7acc600caafc7d0931496a12c6cf6689",
".git/objects/f6/db5af6715cf56fb64457404997185309d45112": "54f19ab4019fc5ceeb7fe841e74a698c",
".git/objects/f7/85435af955acba087acba3a064ce6cf33d83ae": "24eead8471069ea9ced4db8ce76e34be",
".git/objects/f7/a3c1e27c74bb94a3e789d69c3acfa11450dcea": "4ce76237178c259dafdb14ba72d4dcc6",
".git/objects/f8/2919f2c73f7f943d21f816f02531535d4fc648": "da6a3e0d8aeed72a6b8a15f3989efacf",
".git/objects/f8/84a521108164eada22855f895dc54f80d3422b": "769e8fe232e1045fd295c4e6d676b308",
".git/objects/f9/dc97c958e5344af3220155e83bd4c3e94f24d3": "04e9a8055295033dfe2a8d1d093d0d0b",
".git/objects/fa/a09b58bca4e6eddf12bba0c525c33b00c93b22": "68c1a185183113c8d648e99f88f564e0",
".git/objects/fd/25a2b256cf1cb1feabcbef5554886d5271ec0e": "c50e5953180f090f8fe31c694a47bb5d",
".git/objects/fd/ce1eeb3d2f0c2593732da2211d3fde3fceebf4": "b70b183324bcb68cceaca124d8b0a62e",
".git/objects/fe/25d67c10a50e12ad0b1f5ec731eada815b739c": "16877ce5b7be399b8e5bcc88473aa4a2",
".git/objects/fe/be83a30a436f3514a72de33fb0bf7eb5e36e57": "acca67336828db18de42d38ccb4cc627",
".git/refs/heads/main": "a19327d8aa23bf6ac9d56f40bf478ed8",
".git/refs/remotes/origin/main": "a19327d8aa23bf6ac9d56f40bf478ed8",
"assets/AssetManifest.json": "3d4c3f3226c8899818c2266056aaebd7",
"assets/assets/timemanagement.svg": "f3bd1becf4e14feaf25fb389ecbd93e8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5bfb5ce5cb475827e27645c724981bf2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"assets/timemanagement.svg": "f3bd1becf4e14feaf25fb389ecbd93e8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "b933d24618c21130fca115d3f6f16dba",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "b933d24618c21130fca115d3f6f16dba",
"icons/Icon-512.png": "b933d24618c21130fca115d3f6f16dba",
"icons/Icon-maskable-192.png": "b933d24618c21130fca115d3f6f16dba",
"icons/Icon-maskable-512.png": "b933d24618c21130fca115d3f6f16dba",
"index.html": "e5b3bb46e68a0c471eb6e3400b0c5e0d",
"/": "e5b3bb46e68a0c471eb6e3400b0c5e0d",
"main.dart.js": "3e7eefe16463ee9c0ca293b7e91c868a",
"manifest.json": "01152825add36b19c7a6db344a9553d4",
"version.json": "baae2d51da9b9fcaf064723a9d8a903f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
