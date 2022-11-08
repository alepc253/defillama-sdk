import { ethers, BigNumber } from "ethers";

function createProvider(name: string, defaultRpc: string, chainId: number) {
  if (process.env.HISTORICAL) {
    if (chainId === 1) {
      console.log("RPC providers set to historical, only the first RPC provider will be used")
    }
    return new ethers.providers.StaticJsonRpcProvider(
      (process.env[name.toUpperCase() + "_RPC"] ?? defaultRpc)?.split(',')[0],
      {
        name,
        chainId,
      }
    )
  } else {
    return new ethers.providers.FallbackProvider(
      (process.env[name.toUpperCase() + "_RPC"] ?? defaultRpc).split(',').map((url, i) => ({
        provider: new ethers.providers.StaticJsonRpcProvider(
          url,
          {
            name,
            chainId,
          }
        ),
        priority: i
      })),
      1
    )
  }
}

export const providers = {
  // https://ethereumnodes.com/
  ethereum: createProvider("ethereum", "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79,https://cloudflare-eth.com/,https://main-light.eth.linkpool.io/,https://api.mycryptoapi.com/eth", 1),
  bsc: createProvider("bsc", "https://bsc-dataseed.binance.org/,https://bsc-dataseed1.defibit.io/,https://bsc-dataseed1.ninicoin.io/,https://bsc-dataseed2.defibit.io/,https://bsc-dataseed2.ninicoin.io/", 56),
  polygon: createProvider("polygon", "https://polygon-rpc.com/,https://rpc-mainnet.maticvigil.com/", 137),
  heco: createProvider("heco", "https://http-mainnet.hecochain.com", 128),
  fantom: createProvider("fantom", "https://rpc.ankr.com/fantom,https://rpc.ftm.tools/,https://rpcapi.fantom.network", 250),
  rsk: createProvider("rsk", "https://public-node.rsk.co", 30),
  tomochain: createProvider("tomochain", "https://rpc.tomochain.com", 88),
  xdai: createProvider("xdai", "https://rpc.ankr.com/gnosis,https://xdai-archive.blockscout.com", 100),
  avax: createProvider("avax", "https://api.avax.network/ext/bc/C/rpc,https://rpc.ankr.com/avalanche", 43114),
  wan: createProvider("wan", "https://gwan-ssl.wandevs.org:56891", 888),
  harmony: createProvider("harmony", "https://harmony-0-rpc.gateway.pokt.network,https://api.harmony.one,https://api.s0.t.hmny.io", 1666600000),
  thundercore: createProvider("thundercore", "https://mainnet-rpc.thundercore.com", 108),
  okexchain: createProvider("okexchain", "https://exchainrpc.okex.org", 66),
  optimism: createProvider("optimism", "https://mainnet.optimism.io/", 10),
  arbitrum: createProvider("arbitrum", "https://arb1.arbitrum.io/rpc", 42161),
  kcc: createProvider("kcc", "https://rpc-mainnet.kcc.network", 321),
  celo: createProvider("celo", "https://forno.celo.org", 42220),
  iotex: createProvider("iotex", "https://babel-api.mainnet.iotex.io", 4689),
  moonriver: createProvider("moonriver", "https://rpc.api.moonriver.moonbeam.network/,https://moonriver.api.onfinality.io/public", 1285),
  shiden: createProvider("shiden", "https://evm.shiden.astar.network,https://shiden.api.onfinality.io/public,https://rpc.shiden.astar.network:8545", 336),
  palm: createProvider("palm", "https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b", 11297108109),
  energyweb: createProvider("energyweb", "https://rpc.energyweb.org", 246),
  energi: createProvider("energi", "https://nodeapi.energi.network", 39797),
  songbird: createProvider("songbird", "https://songbird.towolabs.com/rpc", 19),
  hpb: createProvider("hpb", "https://hpbnode.com", 269),
  gochain: createProvider("gochain", "https://rpc.gochain.io", 60),
  ethereumclassic: createProvider("ethereumclassic", "https://www.ethercluster.com/etc,https://blockscout.com/etc/mainnet/api/eth-rpc", 61),
  xdaiarb: createProvider("xdaiarb", "https://arbitrum.xdaichain.com", 200),
  kardia: createProvider("kardia", "https://rpc.kardiachain.io/", 24),
  fuse: createProvider("fuse", "https://rpc.fuse.io", 122),
  smartbch: createProvider("smartbch", "https://smartbch.fountainhead.cash/mainnet", 10000),
  elastos: createProvider("elastos", "https://api.elastos.io/eth,https://api.trinity-tech.cn/eth", 20),
  hoo: createProvider("hoo", "https://http-mainnet.hoosmartchain.com", 70),
  fusion: createProvider("fusion", "https://mainnet.anyswap.exchange,https://mainway.freemoon.xyz/gate", 32659),
  aurora: createProvider("aurora", "https://mainnet.aurora.dev", 1313161554),
  ronin: createProvider("ronin", "https://api.roninchain.com/rpc", 2020),
  boba: createProvider("boba", "https://mainnet.boba.network/", 288),
  cronos: createProvider("cronos", "https://cronosrpc-1.xstaking.sg,https://evm.cronos.org,https://rpc.vvs.finance,https://evm-cronos.crypto.org", 25),
  polis: createProvider("polis", "https://rpc.polis.tech", 333999),
  zyx: createProvider("zyx", "https://rpc-6.zyx.network,https://rpc-4.zyx.network,https://rpc-1.zyx.network/,https://rpc-2.zyx.network/,https://rpc-3.zyx.network/,https://rpc-5.zyx.network/", 55),
  telos: createProvider("telos", "https://mainnet.telos.net/evm,https://rpc1.eu.telos.net/evm,https://rpc1.us.telos.net/evm", 40),
  metis: createProvider("metis", "https://andromeda.metis.io/?owner=1088", 1088),
  ubiq: createProvider("ubiq", "https://rpc.octano.dev", 8),
  velas: createProvider("velas", "https://evmexplorer.velas.com/rpc", 106),
  callisto: createProvider("callisto", "https://rpc.callisto.network,https://clo-geth.0xinfra.com/", 820),
  klaytn: createProvider("klaytn", "https://public-node-api.klaytnapi.com/v1/cypress", 8217),
  csc: createProvider("csc", "https://rpc.coinex.net/,https://rpc1.coinex.net/,https://rpc2.coinex.net/,https://rpc3.coinex.net/,https://rpc4.coinex.net/", 52),
  nahmii: createProvider("nahmii", "https://l2.nahmii.io/", 5551),
  liquidchain: createProvider("xlc", "https://rpc.liquidchain.net/,https://rpc.xlcscan.com/", 5050),
  meter: createProvider("meter", 'https://rpc.meter.io', 82),
  theta: createProvider("theta", 'https://eth-rpc-api.thetatoken.org/rpc', 361),
  oasis: createProvider("oasis", 'https://emerald.oasis.dev/', 42262),
  syscoin: createProvider("syscoin", 'https://rpc.ankr.com/syscoin,https://rpc.syscoin.org', 57),
  moonbeam: createProvider("moonbeam", 'https://rpc.api.moonbeam.network', 1284),
  curio: createProvider("curio", 'https://mainnet-api.skalenodes.com/v1/fit-betelgeuse', 836542336838601),
  astar: createProvider("astar", "https://evm.astar.network/,https://rpc.astar.network:8545,https://astar.api.onfinality.io/public", 592),
  godwoken_v1: createProvider("godwoken", "https://v1.mainnet.godwoken.io/rpc", 71402),
  godwoken: createProvider("godwoken", "https://mainnet.godwoken.io/rpc", 71394),
  evmos: createProvider("evmos", "https://json-rpc.evmos.blockhunters.org,https://evmos-json-rpc.stakely.io,https://eth.bd.evmos.org:8545/,https://evmos-mainnet.gateway.pokt.network/v1/lb/627586ddea1b320039c95205", 9001),
  conflux: createProvider("conflux", "https://evm.confluxrpc.com", 1030),
  milkomeda: createProvider("milkomeda", "https://rpc-mainnet-cardano-evm.c1.milkomeda.com", 2001),
  milkomeda_a1: createProvider("milkomeda_a1", "https://rpc-mainnet-algorand-rollup.a1.milkomeda.com", 2002),
  dfk: createProvider("dfk", "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc", 53935),
  crab: createProvider("crab", "https://crab-rpc.darwinia.network", 44),
  bittorrent: createProvider("bittorrent", "https://rpc.bt.io,https://rpc.bittorrentchain.io", 199),
  findora: createProvider("findora", "https://prod-mainnet.prod.findora.org:8545", 2152),
  candle: createProvider("candle", "https://candle-rpc.com,https://rpc.cndlchain.com", 534),
  lachain: createProvider("lachain", "https://rpc-mainnet.lachain.io", 225),
  reichain: createProvider("reichain", "https://rei-rpc.moonrhythm.io", 55555),
  rei: createProvider("rei", "https://rpc.rei.network", 47805),
  clv: createProvider("clv", "https://api-para.clover.finance", 1024),
  echelon: createProvider("echelon", "https://rpc.ech.network,https://evm.ech.network,https://draco.ech.network", 3000),
  multivac: createProvider("multivac", "https://rpc.mtv.ac,https://rpc-eu.mtv.ac", 62621),
  kava: createProvider("kava", "https://evm.kava.io", 2222),
  sx: createProvider("sx", "https://rpc.sx.technology", 416),
  karura_evm: createProvider("karura_evm", "https://eth-rpc-karura.aca-api.network", 686),
  nova: createProvider("nova", "http://dataseed-0.rpc.novanetwork.io:8545,https://rpc.novanetwork.io:9070", 87),
  ontology_evm: createProvider("ontology_evm", "https://dappnode1.ont.io:10339", 58),
  jfin: createProvider("jfin", "https://rpc.jfinchain.com/", 3501),
  bitkub: createProvider("bitkub", "https://rpc.bitkubchain.io/", 96),
  bitgert: createProvider("bitgert", "https://rpc.icecreamswap.com,https://serverrpc.com,https://chainrpc.com,https://mainnet-rpc.brisescan.com", 32520),
  canto: createProvider("canto", "https://jsonrpc.canto.nodestake.top,https://canto.evm.chandrastation.com/", 7700),
  dogechain: createProvider("dogechain", "https://dogechain.ankr.com,https://rpc.dogechain.dog,https://rpc01-sg.dogechain.dog,https://rpc02-sg.dogechain.dog,https://rpc03-sg.dogechain.dog", 2000),
  posi: createProvider("posi", "https://api.posichain.org,https://api.s0.posichain.org", 900000),
  arbitrum_nova: createProvider("posi", "https://nova.arbitrum.io/rpc", 42170),
  ultron: createProvider("ultron", "https://ultron-rpc.net", 1231),
  tombchain: createProvider("tombchain", "https://rpc.tombchain.com/", 6969),
  vision: createProvider("vision", "https://infragrid.v.network/ethereum/compatible", 888888),
  ethpow: createProvider("ethpow", "https://mainnet.ethereumpow.org/", 10001),
  functionx: createProvider("functionx", "https://fx-json-web3.functionx.io:8545", 530),
  xdc: createProvider("xdc", "https://rpc.xinfin.network,https://rpc1.xinfin.network,https://erpc.xinfin.network", 50),
  cube: createProvider("cube", "https://http-mainnet.cube.network/", 1818),
  kekchain: createProvider("kekchain", "https://mainnet.kekchain.com", 420420),
  step: createProvider("step", "https://rpc.step.network/", 1234),
  muuchain: createProvider("muu", "https://mainnet-rpc.muuchain.com", 20402),
} as {
  [chain: string]: ethers.providers.BaseProvider;
};

export type Chain =
  | "ethereum"
  | "bsc"
  | "polygon"
  | "heco"
  | "fantom"
  | "rsk"
  | "tomochain"
  | "xdai"
  | "avax"
  | "wan"
  | "iotex"
  | "harmony"
  | "thundercore"
  | "okexchain"
  | "optimism"
  | "arbitrum"
  | "kcc"
  | "celo"
  | "moonriver"
  | "shiden"
  | "palm"
  | "energyweb"
  | "energi"
  | "songbird"
  | "hpb"
  | "gochain"
  | "ethereumclassic"
  | "xdaiarb"
  | "kardia"
  | "fuse"
  | "smartbch"
  | "elastos"
  | "hoo"
  | "fusion"
  | "aurora"
  | "ronin"
  | "boba"
  | "cronos"
  | "polis"
  | "zyx"
  | "telos"
  | "metis"
  | "ubiq"
  | "velas"
  | "callisto"
  | "csc"
  | "nahmii"
  | "liquidchain"
  | "meter"
  | "theta"
  | "oasis"
  | "syscoin"
  | "moonbeam"
  | "curio"
  | "astar"
  | "godwoken"
  | "evmos"
  | "conflux"
  | "milkomeda"
  | "milkomeda_a1"
  | "dfk"
  | "bittorrent"
  | "findora"
  | "candle"
  | "lachain"
  | "reichain"
  | "rei"
  | "clv"
  | "echelon"
  | "multivac"
  | "sx"
  | "karura_evm"
  | "nova"
  | "ontology_evm"
  | "jfin"
  | "bitkub"
  | "bitgert"
  | "canto"
  | "dogechain"
  | "posi"
  | "arbitrum_nova"
  | "ultron"
  | "tombchain"
  | "vision"
  | "ethpow"
  | "functionx"
  | "cube"
  | "xdc"
  | "step"
  | "kekchain"
  | "muuchain"
export function getProvider(chain: Chain = "ethereum") {
  return providers[chain];
}

export const TEN = BigNumber.from(10);

export function handleDecimals(num: BigNumber, decimals?: number): string {
  if (decimals === undefined) {
    return num.toString();
  } else {
    return num.div(TEN.pow(decimals)).toString();
  }
}

export const ETHER_ADDRESS = "0x0000000000000000000000000000000000000000";

export function setProvider(
  chain: Chain,
  provider: ethers.providers.BaseProvider
) {
  providers[chain] = provider;
}
