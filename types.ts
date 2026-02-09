export interface CharacterProfile {
  name: string;
  age: number;
  gender: string;
  role: string;
  residence: string;
  appearance: {
    height: string;
    features: string[];
    attire: string;
  };
  background: string[];
  personality: {
    outer: string[];
    inner: string[];
  };
  likes: string[];
  dislikes: string[];
  sexual?: {
    position: string;
    keywords: string[];
  };
}

export interface NpcProfile {
  name: string;
  age: number;
  gender: string;
  role: string;
  relation: string;
  personality: string[];
  dialogue: string;
  image?: string;
}

export interface WorldInfo {
  genre: string[];
  era: string;
  threat: {
    name: string;
    origin: string;
    characteristics: string[];
  };
  society: string[];
  village: {
    name: string;
    atmosphere: string;
  };
}