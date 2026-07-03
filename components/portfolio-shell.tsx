"use client";

import { useState } from "react";
import { Nav } from "@/components/nav";
import { CommandPalette } from "@/components/command-palette";
import { Terminal } from "@/components/terminal";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <main id="main">{children}</main>
      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        onOpenTerminal={() => setTerminalOpen(true)}
      />
      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <BackToTop />
    </>
  );
}
