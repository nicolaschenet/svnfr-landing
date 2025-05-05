// Music releases data
import kingOfNothingCoverArt from "../images/king-of-nothing-cover-art.png";

export const releases = {
  kingOfNothing: {
    title: "King of Nothing — EP",
    releaseDate: "May 5th, 2025",
    released: true,
    description:
      '"King of Nothing" is the emotional core of SINGVLARITY — a cinematic collapse rendered in slow synthwave. Glitchy textures, haunted melodies, and aching loops. A love letter delivered after the end of the world.',
    coverArt: kingOfNothingCoverArt,
    links: {
      hyperfollow: "https://distrokid.com/hyperfollow/svnfr/king-of-nothing-ep",
      spotify:
        "https://open.spotify.com/album/6QvuF7MqMQjDOfiQswovo2?si=s_duEkS_Q0G9Qgp7ENfbnQ",
      appleMusic:
        "https://music.apple.com/us/album/king-of-nothing-ep-single/1811316528",
      bandcamp: "https://svnfr.bandcamp.com/album/king-of-nothing-ep",
    },
  },
};

// Current featured release
export const featuredRelease = releases.kingOfNothing;
