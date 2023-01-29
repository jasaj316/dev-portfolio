//import images
import StoryMaker from '@/assets/img/storymaker.jpg';
import Flag from '@/assets/img/flag.jpg';
import TypeAhead from '@/assets/img/typeAhead.jpg';
import Pong from '@/assets/img/pong.jpg';

const cardData: { title: string, subtitle: string, src: string, alt: string, link: string, linkText: string }[] = [
  // src HAS to be unique
  {
    title: "Pong vs AI in VanillaJS and Canvas",
    subtitle: "As a challenge, I made pong in Canvas with VanillaJS, and programmed an AI enemy. Use the arrow keys to move.",
    src: Pong,
    alt: "Pong made with html canvas and vanillaJS",
    link: "https://jasaj316.github.io/pong/",
    linkText: "Click here to play!"
  }, {
    title: "'Guess The Flag' Game with Map API",
    subtitle: "Choose a point on the map and see if you can correctly guess the country! Created for a school project.",
    src: Flag,
    alt: "Click on a map to guess where a flag comes from",
    link: "https://jasaj316.github.io/GuessFlag/",
    linkText: "Click here to play!"
  }, {
    title: "See N' Say Storymaker",
    subtitle: "Create custom sentences! Based on the original See 'N Say Story Maker. Created for a school project.",
    src: StoryMaker,
    alt: "A site that fully uses bootstrap classes + carousel",
    link: "https://jasaj316.github.io/See-N-Say-Story-Maker/",
    linkText: "Click here for the demo!"
  }, {
    title: "Dynamic Search Filter in VanillaJS",
    subtitle: "Pong vs AI in VanillaJS and Canvas",
    src: TypeAhead,
    alt: "List of cities and states, filtered using a search box",
    link: "",
    linkText: ""
  }

];
export default cardData;