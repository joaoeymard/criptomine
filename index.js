const crypto = require("crypto");
const sha256 = (str) => crypto.createHmac("sha256", str).digest("hex");

const previusBloco =
  "5e6f246df54a2b48ca21cd56c7aeba4da5630de195797df9806ddba3e0b02ee9";
const bloco = "abec";
let nunce = 0;
let candidato = "";

while (true) {
  nunce++;
  candidato = sha256(previusBloco + bloco + nunce);

  if (/^[0]{6}/.test(candidato)) console.log(`nonce: ${nunce} | ${candidato}`);
}
