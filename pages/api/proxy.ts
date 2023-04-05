import handleRequest from "../../src/handle-request";

export const config = {
  runtime: "edge", // this is a pre-requisite
  // https://vercel.com/docs/concepts/edge-network/regions
  regions: ["cle1", "iad1", "pdx1", "sfo1"],
};

export default handleRequest;
