'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a5f6f3d966152bc8411fe2074ea6da56",
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
".git/index": "95fbe45bf495cd2a990ff33b7b45ab90",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0eed16189af1e14fcdf0a3dd546eb811",
".git/logs/refs/heads/main": "940bedac63a161c8f184eac2d73b23c7",
".git/logs/refs/remotes/origin/main": "d2dc7cb800cc7a53a0320ac9e8010480",
".git/objects/03/7a96a366be1d11b382a6d29b5c17d38250b211": "29b77a68cd84263b29779b340b263458",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/5211e870dae7d6ed80c2292885af990b867835": "f8c7cf39288c160056410fbe90c04ef8",
".git/objects/05/753d7870055bbf7391afeba22b33a7f701bf94": "022cb93c1568616ea9962289c6a145cb",
".git/objects/07/ef342e28be9d6fd96ce00032bce959e2f6bb1a": "e3297e7a4185e518328053307a9bfbdc",
".git/objects/09/6d19af6fac51089b1bfb8b516d5023728799cd": "770ade4ae8f3490679fdb786a5baf6b9",
".git/objects/0a/c2a37595815766daa41ca31d205a133ebac3a7": "ac4270374a0c8416302673320545e13e",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/5adaf7cab3d97f271972ca2485407839f590c8": "9ceb19ef8198cfdf2cf74b808f206bac",
".git/objects/0d/a53033b75ef90942f70b0e0a76a8ff7f60647a": "664610f92e42ccdbf236d4a51469539d",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/16/ac2ec9cf0a10df0376a101e26307bde82ee12c": "ba3f0358c26a21aae50740844f980dfd",
".git/objects/18/388f147a7dd37ed4397097cb9ec1ab562f1a74": "3f3ca2d7e31c42f4ced9f490347cfecd",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/e4a00d041f59d259c4db076ce8f488f24c9ff3": "fd0d00ae3a790613cf68dbb2a27a7dfc",
".git/objects/1e/a9f73f8b8f0d2e47961dbfd2f8e60f9b8fe3f3": "4ee12a6595c21b02cf90efcb967fb93a",
".git/objects/20/a2bff40366d096d9cfb04ebef268dcfe6cf108": "1a9b5fe3514203c453265eb4c7a82c6d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/9ea93c2da57a359f6d544353857fd4af908ccc": "6df1d416af2e73a4c930ec474a2fdf47",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/6f4be4fc61fbdd6f1d41eb570152593409cbb0": "c21b3a795b33240abb6b787150de03b0",
".git/objects/25/c62134b506d0eb69cbcb42a1dd67ad642c5160": "ca0888a5c0015f20db70b40f79d8271c",
".git/objects/27/963e82bea206c1e97a3c0157ac10438db1e3be": "d14ffb927e8525549fe27319de971d33",
".git/objects/28/076efcaeb2d681734c0809d412ee2e6eb41f90": "4855401d77db1b70b28731a0c863e39f",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/80eafea2945efc6a50656250c4c5e93486a636": "efade58d0f7623616384fafa6990c66b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/ea8ad706a44a7902d2086f0144a93c70652b7e": "d10856b540433e853a70a1b9d1045b1d",
".git/objects/2e/fadfdfb5ee34bb0d3d275fae438c87cf7e7de3": "15486d1321d9cb806333352d876d28f2",
".git/objects/30/0a705cb61afb6f3c67d869d80561892a0b75de": "e3e27212a473007fb46677e45b96e490",
".git/objects/35/1806c8c67c0106e38e604e13180d10b7db05d7": "96dbd3927bddae918e14fa2a142ba7a1",
".git/objects/37/053e0cac175db40cbdc49eba0119d5f3331e22": "0ed49a2a98d6427ce6472f6874b8d3d8",
".git/objects/39/80aac3ef50c3f3a99be44494f35ec4528b0580": "6bae3c8346587bf4883a41cf1203fa63",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/cbaf8cbe8f4c2e24f917bfcbee1c72d2e4d6b7": "89eb18bc3ad59ae212bdd80a96716a63",
".git/objects/40/cce37c5dcc75d497390c50ba101c653c419148": "6e52749336293e2f77e385ee50ba6dde",
".git/objects/44/81bc3a36243c8a6acce43c74ea2a936834ea44": "3b43f5d67f23c910af4ece9288210e89",
".git/objects/44/dc97592950ec1361c5536d6e6219a41b8089bd": "077929fb809eca37ed9204e9ea7db4f3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/b21984dc6e8ab8afc93fe40f3e7ed0f8a8defa": "25eecd3727c1ca4232762c76e2219e1c",
".git/objects/4a/a4f6d7a189a4bab734c5c37524a8f007352e1e": "c31cc6ef345f54f1f116fa0a7243d476",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/13c4bce4bffa354b15710514572b379b423c79": "11b4ce35477335b6331fb808719901a0",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/27bb1d1e200acb27d4463873ac1b4968c3194e": "ed59c2360e828fb97bf3fdde7dc45bf3",
".git/objects/50/36b2c4b0228a70dfe33423a3d381bb474ef72a": "5c3624d440347e8d3682846d845dc7ec",
".git/objects/50/7b908192f0b4dc587fa34d8143e8de0e64ce9f": "a951ca7b67e02a3c49eb58268760f28e",
".git/objects/53/5183f59fc47f74876f9ca492d4f90cb1964190": "e8865c005cde96f8319f4afa190cbf70",
".git/objects/58/9485ce1e814e40abb1d337e0488cc906f54962": "9fee13ecd102ce0c6ca736ce362d554a",
".git/objects/59/350664fa474d0491c7fb8144abfadbc87b7774": "a055082ce2a0a542f8b5ede4ec0a7cdf",
".git/objects/5b/686dc2c7c8e3e36c49cba4f98c95208181b597": "b9cc99d1e83e415496ccfa023cc30ac8",
".git/objects/5f/a7a2e15a4d63e3c7ad418dd1652c7f085b4b5f": "b7fc58d938a93243f2c028c8a52d2b1a",
".git/objects/60/9e1646ecb755bf8d5763df9de728cbee3fafcc": "5dc9fc86d2b988fa1cfe218462a80997",
".git/objects/64/59ab13901ddfe1cc555383897db24ac702a90e": "3189fd662fb5a56b84a189f7a1861dc0",
".git/objects/65/4c74f0404ac969b02c17ea378820ca8b2ecb0d": "178bcea68fa6e87f371c660d79181523",
".git/objects/67/11e74703485d4bb1f768435d380b5fb4151f71": "0ad41b5ea4e4308bab34b6e4354d02a5",
".git/objects/6b/ef58f24f0951366b5ea662fbcd20fa1b41c78d": "9df4678b94274f5c93c394059dde4cc8",
".git/objects/6c/694d292a3b6c1ccec01228f7ccaff8f49fadea": "7ab4cd729cea35f31bd42bcae7d86cfd",
".git/objects/71/534e37fe333acc3e88b631eb3517a37f2d4ab0": "90ab638c34902dc5eaad82a0560da548",
".git/objects/73/7dbb009f57b99638617e2963e6c2dc4e583a02": "437a4190e44ce356257ea4104ba3925e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/d9a0c7675126c1f075d72d198e19c125521196": "cb294a0607f5d912df13ac798d5f91c5",
".git/objects/78/33f7b221a25a53322f79c2c3c54dcd239f9f2d": "8d9d125b173aae7975eb8aa871e932fb",
".git/objects/78/7baf0a28a277f603c5076c0c4b527a2cbb3c64": "bcb03fb02fa3561d95da6d7dce5e7068",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d05202bdb9eef340be6f68857edf3a9f2a3a87": "bfcb13971d6a3714039b3d48f795d3e8",
".git/objects/7a/13f878461e31cf9b87dea91704b088a2d595f9": "8604510718af0720d0053fa75392850c",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/94e6a945db4b8c0a924b406416f2d7ca18dc1a": "57b45dacd4df93228b86aa7e1ae5364f",
".git/objects/7f/4a668f4ecba5d852f0dd5f6be8c8a60fe441db": "00657f89ad545fdbe02198c69643048c",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/87/eb87626c048ec6d90af4469bf5478a2d5ee271": "fca876153d0551502f737e7d3664c8e8",
".git/objects/88/3253300bf6e3ac124fb794c104f4dfd0a4ab3c": "087b56ac735ce591c7379624bfa8bb01",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/091406bb454da82de41b79c2d43f5fc1655c2f": "3cee4e9e499fcda546c7f204695b45e7",
".git/objects/89/6e59e5b083c4839e4bfdd8a0537b71b23fea28": "907654b6c7518a3c11c8fac29ba1cb70",
".git/objects/89/fd89cf5c6d68527ae3991750c56eb6007fe5de": "0c864c62a4890dbe6919fa68859572dc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d1f6c4150f5469dd94eb3f0a2bf08021f478d9": "b677b2470c4b1d448063765b035b53bc",
".git/objects/8b/e21167d62704745aa6c8ca68d7b60f2468bad0": "68ed5d6bbf8b439f9f6f717c6c5d2f26",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/90/1134c157ac9a13d589229858edb911de18e2cd": "18df8dc476535695d0e1798181d04e3f",
".git/objects/90/aab60a9652f357c9010fcd1b88f71d45e248ae": "79f7d477afe655ef1e077dfc6c131430",
".git/objects/97/2553d55604c37372fd730a4abcbbe631be78d0": "bcd78641ad5424f65aae94fde1f2fe1a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ffdbb83ea5962a2fe92fa726f6526d5143d657": "11412abf8ddc997b2bdd693cd10f6c31",
".git/objects/a2/97686ae3117efa42c341addee58553b27988ad": "84d58cd047821ee3420f4875b495c40b",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a6/1ed45b0ca52c411623fc1d1667e619232f66e0": "5d3a1c71234fbcd7cce44e87efe77aa5",
".git/objects/a6/4f6371c0cf8e3c1fc80a681a5ae83de833c7fa": "1a1eb308d60feb02f0455c919aba8fd2",
".git/objects/a7/19cc7180d76c5ecfd889ac30c540a932a89cc4": "9829017a439a46b78a61ad14d264f914",
".git/objects/aa/96bd875df66357557ad85541ab56d24db079ee": "0f9f8c1d1ebe1ce53bb055927b7aa4e9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/a34ebe366e3989c31026a49ecd2d5a4c30abab": "762538e9fffcb1a54ec042ea18ac528b",
".git/objects/b2/49e16ffd9562a6f0dada27ae4e0935e86f842e": "1e9f93b3fdf52ba12dbe0b6f1a8b0985",
".git/objects/b3/0386ad51b664ad8f25e7facf3ccafe49035434": "3ec065c7aaa966aa945065766ef35ea8",
".git/objects/b5/3b49de30dc02901c70ed7534cbac86ae4c53a2": "3d3da2b76e5db09031f84b8c9683eed2",
".git/objects/b6/23866198df5a967753d5241649e293d114523d": "94f367df260025e4841fda0f87b50faf",
".git/objects/b6/f979cde21c4d57fc8d98f218105f11fb9a2986": "5ad72d698bf3262f3ed009f2f44edec0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8c474928dd2d20ac3ef877f005ce54d45d28fc": "f5255839aa53a27b908faddfc1f90278",
".git/objects/ba/f420e8d67dfbcb8f7f118eeea50234e333c8cd": "e5f184c3f596564f46650eddd2fe4971",
".git/objects/bb/831425dd15974d0e0e16acb3bff8d5b60bfcf7": "bf1f49e606e0dcbbc7a884f6cf71efe0",
".git/objects/bc/62fb7cec9a70070624ad886bfb6b4a8770f634": "bb23fd8dd7957bd843431baafdcf8935",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c2/5570306f6e0235f415f64a5b44ec9270a886de": "327038694c0e92d1a6abd2c4fd10ade0",
".git/objects/c3/edca1f6ff46015ed202fd2d0e641a8727c4f44": "0946aee22ebfe7caca14e5db4d66e8f0",
".git/objects/c5/3e2108545c2d4a4e39bd5fd4bbe23a22fdd9f7": "e5a4e133e925ad6ce0b9db39ee2d7cf9",
".git/objects/c5/4821b4ba258d43c83faf7ff00f81a7c4bd86cf": "972bde8eb0c7a403ef164d0a854998d1",
".git/objects/c9/12e9442bf045b5535a8ae5818c2c93372801dc": "2b4b994c5730c650ee33757efd736cef",
".git/objects/cb/19fe974a5f7aa403ace9863f858ebaaa335c13": "9fef88f291a4173342185fcd1d8ae5a0",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/c2b3d401ed56382985cf3fbf8f521b6d504782": "b2f65e1fa52c5e7f66c45963a9e029ea",
".git/objects/d1/53fc662ab3d76641bb219e78c502d5811716d5": "dbce98e23da1d4d52450bc63c7af4fe7",
".git/objects/d2/7a729d7726587456822568abbbe13de13df763": "4b9f96ee79161938213b1a5c49fd6a90",
".git/objects/d3/7acb02c115485fa755bcbc2fb7f7c5b95953b9": "ffbda90648e1aebcaa951f96b424c0d1",
".git/objects/d3/b0c714a2d1dbf671e3895c781823bdf1a31d54": "dda844f361af4d0a4ac8cfec27744592",
".git/objects/d6/32b65f62962468ee4417716428cc4500c62293": "97a3124bcb9a658ad92dc996eac1c9dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3d19fa052c6ea4a6787a5f8a252192cd51d479": "09911a7463161bf4a08a2de85c026ce9",
".git/objects/da/df76d6c1cbf49044c58971210a13bf2d778c83": "d20babd604409cf8dfc20904e900515f",
".git/objects/dd/1827e4ac3dcee2b4c9d1c2f4a74c6602dbc383": "4e59e33fb28055396cca467092a76f71",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/6d2e901b447db5356393346e815771aceb1ba9": "f8b1920d32ced0422cf4e49a4be350c2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/28ebef468d16f9d633447647a76a97b7dcaf5d": "43b5e1fecefcc9a79607245fe657ef87",
".git/objects/e9/01ee4400d8c080d74ac27567ec1a956f82c04c": "634ec73070bc91de170069abc5c47c5e",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7e81f83f1a197983e3b25be9df575464c55fc5": "0d496afac3398341d3b30fb4cc41143d",
".git/objects/ed/df73387de77085ac0e105ce5e822e500191b9d": "8721e94be65e9474787d350b69b93401",
".git/objects/ef/76d69f3ac7286075197fc515d4ee3b538b0e2b": "5c8d00f66558cb5773525d6d310cf102",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f8/2919f2c73f7f943d21f816f02531535d4fc648": "da6a3e0d8aeed72a6b8a15f3989efacf",
".git/objects/f8/84a521108164eada22855f895dc54f80d3422b": "769e8fe232e1045fd295c4e6d676b308",
".git/objects/fd/ce1eeb3d2f0c2593732da2211d3fde3fceebf4": "b70b183324bcb68cceaca124d8b0a62e",
".git/objects/fe/25d67c10a50e12ad0b1f5ec731eada815b739c": "16877ce5b7be399b8e5bcc88473aa4a2",
".git/objects/fe/be83a30a436f3514a72de33fb0bf7eb5e36e57": "acca67336828db18de42d38ccb4cc627",
".git/refs/heads/main": "e1e995c55c73b075f43017b80544b1a7",
".git/refs/remotes/origin/main": "e1e995c55c73b075f43017b80544b1a7",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b1b6b3922bcbb5c0bf532ddcf4afc2e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5d5778a8c09afb6576a03df1622b7071",
"/": "5d5778a8c09afb6576a03df1622b7071",
"main.dart.js": "accb725bf03e95edefbac7d54ed7d3d5",
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
