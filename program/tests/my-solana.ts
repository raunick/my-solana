import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { MySolana } from "../target/types/my_solana";

describe("my-solana", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MySolana as Program<MySolana>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
