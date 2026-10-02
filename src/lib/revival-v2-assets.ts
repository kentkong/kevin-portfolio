/** Production image paths for Revival V2 (high-resolution originals only). */
export const revivalV2Assets = {
  masters: {
    tank: "/projects/revival/masters/01-tank-colour-decals.png",
    wheels: "/projects/revival/masters/02-wheels-tyres.png",
    exhaust: "/projects/revival/masters/03-exhaust.png",
    accessories: "/projects/revival/masters/04-accessories.png",
  },
  reference: {
    originalBonneville: "/projects/revival/reference/r001-original-bonneville.png",
    tankComponentLibrary: "/projects/revival/reference/tank-component-library.png",
  },
  /** Pass 2 — supplied before/after composite (not yet in repo; add when available). */
  beforeAfter: "/projects/revival/v2/before-after-scrambler.png",
} as const;
