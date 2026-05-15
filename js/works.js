/* 所有作品資料，新增作品只需在此新增一筆物件 */
const WORKS = [

  /* ── 動態視覺 ── */
  {
    id: 'paper-planes',
    name: 'Paper Planes',
    client: '50大酒吧頒獎典禮',
    category: 'motion',
    categoryLabel: '動態視覺',
    tags: ['視覺設計', '視覺統籌'],
    description: '',
    images: [],
    ph: { a: '#1c1520', b: '#2d1f35' }
  },
  {
    id: 'gucci',
    name: 'GUCCI 秋冬秀',
    client: 'GUCCI',
    category: 'motion',
    categoryLabel: '動態視覺',
    tags: ['現場視覺'],
    description: '',
    images: [],
    ph: { a: '#1a1510', b: '#2e2215' }
  },
  {
    id: 'mitsubishi-lancer',
    name: 'LANCER IO 光影秀',
    client: 'MITSUBISHI',
    category: 'motion',
    categoryLabel: '動態視覺',
    tags: ['現場視覺', '光雕投影'],
    description: '',
    images: [],
    ph: { a: '#101a20', b: '#15262e' }
  },
  {
    id: 'fashion-warriors',
    name: 'Fashion Warriors — Rise of the Orient',
    client: 'Fashion Warriors',
    category: 'motion',
    categoryLabel: '動態視覺',
    tags: ['視覺設計'],
    description: '',
    images: [],
    ph: { a: '#1a1010', b: '#2e1515' }
  },
  {
    id: 'wang-jiusi',
    name: '王九思 × 法國巴黎瘋馬秀',
    client: 'Wang Jiu-Si',
    category: 'motion',
    categoryLabel: '動態視覺',
    tags: ['藝術合作'],
    description: '',
    images: [],
    ph: { a: '#1a1820', b: '#252035' }
  },
  {
    id: 'singleton',
    name: '蘇格登全感空間環景品酩',
    client: 'Singleton',
    category: 'motion',
    categoryLabel: '動態視覺',
    tags: ['視覺設計', '環境投影'],
    description: '',
    images: [],
    ph: { a: '#101a15', b: '#15261c' }
  },

  /* ── 互動與藝術裝置 ── */
  {
    id: 'ekitai-project',
    name: '伊奇泰計劃',
    client: 'EKITAI',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['互動裝置', '數位藝術'],
    description: '',
    images: [],
    ph: { a: '#101520', b: '#152030' }
  },
  {
    id: 'fallenbuilding',
    name: 'Fallenbuilding 墜落建設',
    client: '臺北藝穗節',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['互動裝置'],
    description: '',
    images: [],
    ph: { a: '#1a1010', b: '#2a1818' }
  },
  {
    id: 'mens-biore',
    name: '戰繩挑戰賽',
    client: "Men's Biore",
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['品牌活動', '互動體驗'],
    description: '',
    images: [],
    ph: { a: '#101820', b: '#18242e' }
  },
  {
    id: 'twm-digital',
    name: '科技 × 藝術 數位生活館',
    client: '台灣大哥大三創',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['新媒體藝術', '互動裝置', '體驗設計'],
    description: '台灣大哥大三創數位生活館互動裝置製作，數位音像與微觀城市。',
    images: [],
    ph: { a: '#101520', b: '#1a2535' }
  },
  {
    id: 'curel',
    name: '20珂學肌膚知識特展',
    client: '珂潤',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['品牌活動', '互動體驗'],
    description: '',
    images: [],
    ph: { a: '#1a1815', b: '#2a2520' }
  },
  {
    id: 'estee-lauder',
    name: '數位拉霸機',
    client: '雅詩蘭黛',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['品牌活動', '互動體驗'],
    description: '',
    images: [],
    ph: { a: '#201a15', b: '#352818' }
  },
  {
    id: 'mosaic-wall',
    name: '互動馬賽克牆',
    client: '品牌活動',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['體驗設計', '互動拍貼'],
    description: '',
    images: [],
    ph: { a: '#151520', b: '#202030' }
  },
  {
    id: 'yuanyin-exhibition',
    name: '原音聚會所 — 台東原住民音樂人特展',
    client: '台東縣政府',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['視覺設計', '互動裝置'],
    description: '主視覺設計由台東7族原住民的圖騰發想，展區數位典藏互動裝置、數位黑膠結帳機，帶給民眾獨特的觀展體驗。',
    images: [],
    ph: { a: '#101a12', b: '#182818' }
  },
  {
    id: 'yuanyin-event',
    name: '原音聚會所 — 推播活動',
    client: '金曲歌手蘇瓦那',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['新媒體藝術', '互動裝置', '體驗設計'],
    description: '與金曲歌手蘇瓦那合作歌唱四格拍貼裝置，留下觀眾歌唱時的美好身影！',
    images: [],
    ph: { a: '#15101a', b: '#221828' }
  },
  {
    id: 'gq-festival',
    name: '熱感應貼紙抽獎機',
    client: 'GQ 潮流祭 × Desidere',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['新媒體藝術', '互動裝置'],
    description: '與品牌 Desidere 合作熱感應貼紙抽獎機，迷因貼紙、折價券、大獎，獎落誰家呢？',
    images: [],
    ph: { a: '#1a1510', b: '#282015' }
  },
  {
    id: 'taiwan-lantern',
    name: '烏日燈會互動音樂盒',
    client: '台灣燈會',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['新媒體藝術', '互動裝置'],
    description: '按鈕音樂盒裝置，以台灣各地景點為出發，象徵高鐵能帶著民眾暢遊台灣。',
    images: [],
    ph: { a: '#10181a', b: '#182428' }
  },
  {
    id: 'eva-air',
    name: '長榮數位通關',
    client: '長榮航空',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['互動裝置', '體驗設計'],
    description: '透過專屬數位體驗再現登機流程，為顧客打造獨一無二的體驗。',
    images: [],
    ph: { a: '#101a1a', b: '#162828' }
  },
  {
    id: 'lion-travel',
    name: '百人點擊遊戲',
    client: '雄獅旅遊',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['互動遊戲', '多屏連線'],
    description: '',
    images: [],
    ph: { a: '#1a1010', b: '#261818' }
  },
  {
    id: 'nctu-circle',
    name: '圓裝置',
    client: '交通大學',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['新媒體藝術'],
    description: '',
    images: [],
    ph: { a: '#151520', b: '#1e1e30' }
  },

  /* ── 互動式網頁 ── */
  {
    id: 'uniwater',
    name: 'UNIwater',
    client: 'UNI Water',
    category: 'web',
    categoryLabel: '互動式網頁',
    tags: ['手機互動網頁'],
    description: 'UniWater 與藝術家、音樂人合作，打造趣味性的性向測驗，活化品牌形象。',
    images: [],
    ph: { a: '#101820', b: '#182535' }
  },
  {
    id: 'haochi',
    name: '好初漫報',
    client: '好初早餐',
    category: 'web',
    categoryLabel: '互動式網頁',
    tags: ['網頁製作'],
    description: '將商品擬人化，利用 3D 造型與互動式網站塑造品牌定位。',
    images: [],
    ph: { a: '#1a1510', b: '#281f14' }
  },
  {
    id: 'bense-music',
    name: '本色音樂',
    client: '本色音樂',
    category: 'web',
    categoryLabel: '互動式網頁',
    tags: ['網頁製作'],
    description: '為客戶打造特色網站，強化品牌形象。',
    images: [],
    ph: { a: '#15101a', b: '#201528' }
  }
];
