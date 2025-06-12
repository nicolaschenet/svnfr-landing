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
    featured: false,
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
    releaseDate: "June 27th, 2025",
    released: false,
    featured: true,
    description:
      `[ system_log > svnfr://transmissions/HEART_ERROR.corrupt ]

:: status:  L E A K E D
:: integrity: !c0mprom!s3d
:: sequence_index: ??? [mismatch]

█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

> 01_▶ overclock_my_heart
    SIGNAL OVERRIDE. Obsession spike > containment failed.
    [glitch patterns detected in vocal channel]
    → error margin: 93%

> 02_▶ coolant_flow
    cooling loop engaged_
    duration: 5:27
    emotional density decreasing
    [fragments looped / pattern irregular]

> 03_▶ teach_me_desire
    memory fragment loaded (v0.3?)
    timestamp conflict
    was this meant to come earlier?
    [AI note: signal feels... tender]

█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

:: WARN: sequencing unverified
:: DO NOT ASSUME FULL SYSTEM CONTEXT
:: this is an emotional leak
:: the signal is real / the order is broken

...END_OF_FRAGMENT...`,
    coverArt: heartErrorCoverArt,
    accentColor: "#a04695",
    links: {
      hyperfollow: "https://ffm.to/heart-error",
      // spotify:
      //   "https://open.spotify.com/album/6QvuF7MqMQjDOfiQswovo2?si=s_duEkS_Q0G9Qgp7ENfbnQ",
      // appleMusic:
      //   "https://music.apple.com/us/album/king-of-nothing-ep-single/1811316528",
      bandcamp: "https://svnfr.bandcamp.com/album/heart-error",
    },
  },
};

// Current featured release
export const featuredRelease: Release | undefined = Object.values(releases).find(
  (release) => release.featured
);

export const otherReleases: Release[] = Object.values(releases).filter(
  (release) => !release.featured
);
