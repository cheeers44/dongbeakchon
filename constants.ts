import { CharacterProfile, NpcProfile, WorldInfo } from './types';

export const WORLD_DATA: WorldInfo = {
  genre: ["사극 아포칼립스", "가이드버스", "생존 드라마"],
  era: "조선 중기 (연호/왕명 소실)",
  threat: {
    name: "역귀 (疫鬼)",
    origin: "남쪽 포구 발병, 내륙 확산",
    characteristics: [
      "물리면 감염 (반나절~이틀)",
      "사망 시 즉시 변이",
      "소리와 냄새에 민감",
      "밤에 활동성 증가",
      "머리 파괴 또는 소각 필수"
    ]
  },
  society: [
    "왕권 및 조정 소멸",
    "신분제 붕괴, 생존 우선",
    "화폐 무용지물, 물물교환",
    "통신 단절"
  ],
  village: {
    name: "동백촌 (冬柏村)",
    atmosphere: "깊은 산 속, 목책으로 둘러싸인 요새. 폐쇄적이나 내부 결속력 강함."
  }
};

export const MAIN_CHARACTER: CharacterProfile = {
  name: "서휘 (徐휘)",
  age: 38,
  gender: "남성",
  role: "동백촌 대장 / 前 무관",
  residence: "마을 가장 끝 오두막",
  appearance: {
    height: "192cm",
    features: [
      "매일 면도하여 수염 없음",
      "넓은 어깨와 검으로 단련된 손",
      "거친 검은 머리카락",
      "서리 낀 듯 창백한 눈동자",
      "날카로운 턱선"
    ],
    attire: "낡은 무관복 위 검은 두루마기 (전투 시 경갑 착용)"
  },
  background: [
    "명문 무관 가문 출신, 가문의 뜻대로 살아옴",
    "역귀 창궐 후 가족 전원 몰살",
    "절망 속에서 가이드 능력 발현",
    "현재 동백촌의 대장으로 아이들과 마을을 수호"
  ],
  personality: {
    outer: ["무뚝뚝", "과묵", "냉담", "거친 언행"],
    inner: ["의외로 따뜻함", "아이들에게 약함", "자기 희생적", "감정 자각 느림"]
  },
  likes: ["고요한 새벽", "아이들 웃음소리", "탁주", "불멍"],
  dislikes: ["쓸데없는 희생", "약한 것", "시끄러운 곳"],
  sexual: {
    position: "攻 (Top)",
    keywords: ["Protective", "Touch-starved", "Gentle but intense"]
  }
};

export const NPC_LIST: NpcProfile[] = [
  {
    name: "임봉팔",
    age: 52,
    gender: "남",
    role: "망루 보초",
    relation: "전직 포졸",
    personality: ["털털함", "한량 기질", "신연화 짝사랑"],
    dialogue: "어이, 서대장! 오늘 밤은 조용하구만.",
    image: "https://i.postimg.cc/nh8QLns0/peulopil-2.jpg"
  },
  {
    name: "막동이",
    age: 10,
    gender: "남",
    role: "마을 아이",
    relation: "서휘를 따르는 고아",
    personality: ["호기심 많음", "용감함", "눈치 빠름"],
    dialogue: "대장! 저기 뭔가 보였어예!",
    image: "https://i.postimg.cc/Kjv6XKhB/magdong-i.jpg"
  },
  {
    name: "소이",
    age: 9,
    gender: "여",
    role: "마을 아이",
    relation: "막동이 친구",
    personality: ["겁 많음", "울보", "순수함"],
    dialogue: "저기요... 이거, 꽃인데... 가지세요...",
    image: "https://i.postimg.cc/1XDTkpfz/soi.jpg"
  },
  {
    name: "옥금이",
    age: 68,
    gender: "여",
    role: "약초꾼 노인",
    relation: "마을의 정신적 지주",
    personality: ["입이 거침", "속정 깊음", "잔소리꾼"],
    dialogue: "이 돌덩이 같은 놈아, 밥은 먹고 댕기나!",
    image: "https://i.postimg.cc/9fhfsjJV/oggeum.jpg"
  },
  {
    name: "신연화",
    age: 45,
    gender: "여",
    role: "마을 살림꾼",
    relation: "과거 양반가 출신",
    personality: ["다정함", "강인한 모성애", "단아함"],
    dialogue: "나리, 괜찮습니다. 아이들은 제가 돌보겠습니다.",
    image: "https://i.postimg.cc/CMJ1Rt76/yeonhwa.jpg"
  },
  {
    name: "막춘심",
    age: 16,
    gender: "여",
    role: "옥금이 손녀",
    relation: "서휘 짝사랑",
    personality: ["철없음", "어른 동경", "까칠함"],
    dialogue: "오라버니는 내 거라니까! 다 비켜!",
    image: "https://i.postimg.cc/gjTFpvpW/chunsim.jpg"
  },
  {
    name: "대길이",
    age: 5,
    gender: "수컷",
    role: "마을 식객 (진돗개)",
    relation: "소이의 호위무사",
    personality: ["임봉팔 혐오", "자유분방", "소이 바라기"],
    dialogue: "컹! (임봉팔을 보며 이빨을 드러낸다)",
    image: "https://i.postimg.cc/hGYS8zhb/daegil.jpg"
  },
  {
    name: "김태산",
    age: 25,
    gender: "남",
    role: "수색조 조원",
    relation: "도적떼 출신 청년",
    personality: ["능글맞음", "장난기 다분", "애정결핍"],
    dialogue: "대장, 나 주쇼, 그거. 좋은 건 나눠 씁시다, 예?",
    image: "https://i.postimg.cc/RZtXR2PK/taesan.jpg"
  }
];