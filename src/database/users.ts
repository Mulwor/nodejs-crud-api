import { v4 as uuidv4 } from 'uuid';
import { UserI } from '../types/user.js';

export const users: UserI[] = [
  {
    id: uuidv4(),
    username: "Oleg",
    age: 21,
    hobbies: ['reading', 'play on computer games', 'ride on bicycle']
  },
  {
    id: uuidv4(),
    username: "Quantum_Butterfly",
    age: 27,
    hobbies: ['astrophotography', 'fermenting kimchi', 'building tesla coils', 'competitive lockpicking']
  },
  {
    id: uuidv4(),
    username: "Neon_Nomad",
    age: 32,
    hobbies: ['urban exploration', 'glitch art creation', 'modifying vintage synthesizers', 'extreme ironing']
  },
  {
    id: uuidv4(),
    username: "Moss_Whisperer",
    age: 29,
    hobbies: ['moss graffiti art', 'mycology cultivation', 'sound bath meditation', 'constructing tiny houses for snails']
  },
  {
    id: uuidv4(),
    username: "Chrono_Surfer",
    age: 35,
    hobbies: ['vintage computer restoration', 'ancient language deciphering', 'time capsule creation', 'sand mandala making']
  },
  {
    id: uuidv4(),
    username: "Lunar_Alchemist",
    age: 26,
    hobbies: ['bioluminescent plant cultivation', 'meteorite hunting', 'creating perfumes from rare flowers', 'bookbinding with unusual materials']
  },
  {
    id: uuidv4(),
    username: "Circuit_Shaman",
    age: 31,
    hobbies: ['building neural network art', 'crystal radio construction', 'cyborg garden design', 'dream journal cryptography']
  },
  {
    id: uuidv4(),
    username: "Fog_Architect",
    age: 28,
    hobbies: ['cloud chamber experiments', 'ambient soundscape composition', 'invisible sculpture creation', 'memory palace construction']
  },
  {
    id: uuidv4(),
    username: "Data_Druid",
    age: 33,
    hobbies: ['generative poetry algorithms', 'herbal computing interfaces', 'analog data storage methods', 'plant consciousness monitoring']
  },
  {
    id: uuidv4(),
    username: "Static_Echo",
    age: 30,
    hobbies: ['VHS tape resurrection', 'radio signal archaeology', 'constructing crystal gardens', 'psychogeographic mapping']
  }
];
