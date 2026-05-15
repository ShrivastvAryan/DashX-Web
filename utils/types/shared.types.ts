export interface BanditData {
    address: string;
    invites: number;
    actionPoints: number;
    actionList: string[];
    totalPoints: number;
    invitePoints: number;
  }

  export const lifiSupportedChain = [
    {
      blockChain: "STRK",
      id: 10001,
      name: "Starknet",
      logo: "/assets/tokens/strk.svg",
    },
    {
      blockChain: "ETH",
      id: 1,
      name: "Ethereum",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum.svg",
    },
    {
      blockChain: "BSC",
      id: 56,
      name: "BSC",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bsc.svg",
    },
    {
      name: "Solana",
      logo: "/assets/tokens/sol.svg",
      blockChain: "SOL",
      id: 900,
      // 1151111081099710  // 900
   
  
    },
    {
      blockChain: "ARB",
      id: 42161,
      name: "Arbitrum",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/arbitrum.svg",
    },
    {
      blockChain: "BAS",
      id: 8453,
      name: "Base",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/base.svg",
    },
    {
      blockChain: "BLS",
      id: 81457,
      name: "Blast",
      logo: "/assets/tokens/blast.svg",
    },
    {
      blockChain: "AVA",
      id: 43114,
      name: "Avalanche",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/avalanche.svg",
    },
    {
      blockChain: "POL",
      id: 137,
      name: "Polygon",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/polygon.svg",
    },
    {
      blockChain: "SCL",
      id: 534352,
      name: "Scroll",
      logo: "/assets/tokens/scl.svg",
    },
    {
      blockChain: "OPT",
      id: 10,
      name: "Optimism",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/optimism.svg",
    },
    {
      blockChain: "LNA",
      id: 59144,
      name: "Linea",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/linea.svg",
    },
    {
      blockChain: "ERA",
      id: 324,
      name: "zkSync",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/zksync.svg",
    },
    {
      blockChain: "PZE",
      id: 1101,
      name: "Polygon zkEVM",
      logo: "/assets/tokens/pze.svg",
    },
    {
      blockChain: "DAI",
      id: 100,
      name: "Gnosis",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/gnosis.svg",
    },
    {
      blockChain: "FTM",
      id: 250,
      name: "Fantom",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fantom.svg",
    },
    {
      blockChain: "MOR",
      id: 1285,
      name: "Moonriver",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/moonriver.svg",
    },
    {
      blockChain: "MOO",
      id: 1284,
      name: "Moonbeam",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/moonbeam.svg",
    },
    {
      blockChain: "FUS",
      id: 122,
      name: "FUSE",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fuse.svg",
    },
    {
      blockChain: "BOB",
      id: 288,
      name: "Boba",
      logo: "/assets/tokens/bob.svg",
    },
    {
      blockChain: "MOD",
      id: 34443,
      name: "Mode",
      logo: "/assets/tokens/mod.svg",
    },
    {
      blockChain: "MAM",
      id: 1088,
      name: "Metis",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/metis.svg",
    },
    {
      blockChain: "LSK",
      id: 1135,
      name: "Lisk",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/lisk.svg",
    },
    {
      blockChain: "UNI",
      id: 130,
      name: "Unichain",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/unichain.svg",
    },
    {
      blockChain: "AUR",
      id: 1313161554,
      name: "Aurora",
      logo: "/assets/tokens/aur.svg",
    },
    {
      blockChain: "SEI",
      id: 1329,
      name: "Sei",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/sei.svg",
    },
    {
      blockChain: "IMX",
      id: 13371,
      name: "Immutable zkEVM",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/imx.svg",
    },
    {
      blockChain: "SON",
      id: 146,
      name: "Sonic",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/sonic.svg",
    },
    // {
    //   blockChain: "GRA",
    //   id: 1625,
    //   name: "Gravity",
    //   logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/gravity.svg",
    // },
    {
      blockChain: "TAI",
      id: 167000,
      name: "Taiko",
      logo: "/assets/tokens/tai.svg",
    },
    // {
    //   blockChain: "SOE",
    //   id: 1868,
    //   name: "Soneium",
    //   logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/soneium.svg",
    // },
    // {
    //   blockChain: "LNS",
    //   id: 232,
    //   name: "Lens",
    //   logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/lens.svg",
    // },
    {
      blockChain: "CRO",
      id: 25,
      name: "Cronos",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/cronos.svg",
    },
    {
      blockChain: "FRA",
      id: 252,
      name: "Fraxtal",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fraxtal.svg",
    },
    {
      blockChain: "ABS",
      id: 2741,
      name: "Abstract",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/abstract.svg",
    },
    {
      blockChain: "RSK",
      id: 30,
      name: "Rootstock",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/rootstock.svg",
    },
    {
      blockChain: "CEL",
      id: 42220,
      name: "Celo",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/celo.svg",
    },
    {
      blockChain: "WCC",
      id: 480,
      name: "World Chain",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/world.svg",
    },
    {
      blockChain: "MNT",
      id: 5000,
      name: "Mantle",
      logo: "/assets/tokens/mnt.svg",
    },
    {
      blockChain: "INK",
      id: 57073,
      name: "Ink",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ink.svg",
    },
    {
      blockChain: "BER",
      id: 80094,
      name: "Berachain",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bera.svg",
    },
    {
      blockChain: "KAI",
      id: 8217,
      name: "Kaia",
      logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/kaia.svg",
    },
  ];
  