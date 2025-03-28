import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { celoAlfajores } from "viem/chains";

const config = getDefaultConfig({
  appName: "Alpha",
  projectId: "",
  chains: [celoAlfajores],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default config;
