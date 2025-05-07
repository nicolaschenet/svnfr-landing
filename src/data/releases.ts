// Music releases data
import kingOfNothingCoverArt from "../images/king-of-nothing-cover-art.png";
import heartErrorCoverArt from "../images/heart-error-cover-art.png";

export interface Release {
  title: string;
  releaseDate: string;
  released: boolean;
  featured: boolean;
  description: string;
  coverArt: ImageMetadata; // Using any to accommodate the image import type
  accentColor: string;
  links?: {
    hyperfollow?: string;
    spotify?: string;
    appleMusic?: string;
    bandcamp?: string;
  };
}

export interface ReleasesCollection {
  [key: string]: Release;
}

export const releases: ReleasesCollection = {
  kingOfNothing: {
    title: "King of Nothing — EP",
    releaseDate: "May 5th, 2025",
    released: true,
    featured: true,
    description:
      '"King of Nothing" is the emotional core of SINGVLARITY — a cinematic collapse rendered in slow synthwave. Glitchy textures, haunted melodies, and aching loops. A love letter delivered after the end of the world.',
    coverArt: kingOfNothingCoverArt,
    accentColor: "#e84c83", // Vibrant pink that complements the cover art
    links: {
      hyperfollow: "https://distrokid.com/hyperfollow/svnfr/king-of-nothing-ep",
      spotify:
        "https://open.spotify.com/album/6QvuF7MqMQjDOfiQswovo2?si=s_duEkS_Q0G9Qgp7ENfbnQ",
      appleMusic:
        "https://music.apple.com/us/album/king-of-nothing-ep-single/1811316528",
      bandcamp: "https://svnfr.bandcamp.com/album/king-of-nothing-ep",
    },
  },
  heartError: {
    title: "Heart Error — EP",
    releaseDate: "June 14th, 2025",
    released: false,
    featured: false,
    description:
      `Following the emotional ruin of king_of_nothing,
HEART ERROR transmits from deeper inside the system — a glitchwave EP unraveling what came before the fall.

It begins with overclock_my_heart — obsessive, high-voltage love rendered in distortion.

Then slips into coolant_flow, a quiet attempt to stabilize — ambient, cold, broken.

And finally, teach_me_desire (acoustic memory) emerges like a lost echo — fragile, human, no longer part of the code.

This is not the beginning.
This is the part where everything starts to break.`,
    coverArt: heartErrorCoverArt,
    accentColor: "#ffffff",
    // links: {
    //   hyperfollow: "https://distrokid.com/hyperfollow/svnfr/king-of-nothing-ep",
    //   spotify:
    //     "https://open.spotify.com/album/6QvuF7MqMQjDOfiQswovo2?si=s_duEkS_Q0G9Qgp7ENfbnQ",
    //   appleMusic:
    //     "https://music.apple.com/us/album/king-of-nothing-ep-single/1811316528",
    //   bandcamp: "https://svnfr.bandcamp.com/album/king-of-nothing-ep",
    // },
  },
};

// Current featured release
export const featuredRelease: Release | undefined = Object.values(releases).find(
  (release) => release.featured
);

export const otherReleases: Release[] = Object.values(releases).filter(
  (release) => !release.featured
);
