{
  description = "Flake to develop the Colony docs using nix(OS)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
  }: {
    devShell.x86_64-linux = with nixpkgs.legacyPackages.x86_64-linux;
      mkShell {
        buildInputs = [nodejs_20 pnpm_8 zsh];
        shellHook = "exec zsh";
      };
  };
}
