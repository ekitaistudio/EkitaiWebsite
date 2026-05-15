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
    images: [
      'images/works/paper-planes/cover.jpg',
      'images/works/paper-planes/1.jpg',
      'images/works/paper-planes/2.jpg',
    ],
    ph: { a: '#1c1520', b: '#2d1f35' }
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
    images: [
      'images/works/ekitai-project/cover.jpg',
      'images/works/ekitai-project/1.jpg',
      'images/works/ekitai-project/2.jpg',
    ],
    ph: { a: '#101520', b: '#152030' }
  },
  {
    id: 'yuanyin-exhibition',
    name: '原音聚會所 — 台東原住民音樂人特展',
    client: '台東縣政府',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['視覺設計', '互動裝置'],
    description: '主視覺設計由台東7族原住民的圖騰發想，展區數位典藏互動裝置、數位黑膠結帳機，帶給民眾獨特的觀展體驗。',
    images: [
      'images/works/yuanyin-exhibition/cover.jpg',
      'images/works/yuanyin-exhibition/1.jpg',
      'images/works/yuanyin-exhibition/2.jpg',
      'images/works/yuanyin-exhibition/3.jpg',
    ],
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
    images: [
      'images/works/yuanyin-event/cover.png',
      'images/works/yuanyin-event/1.jpg',
      'images/works/yuanyin-event/2.jpg',
    ],
    ph: { a: '#15101a', b: '#221828' }
  },
  {
    id: 'gq-festival',
    name: '熱感應貼紙抽獎機',
    client: 'GQ 潮流祭 × De sidere 7.1 x 洋薊計画',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['新媒體藝術', '互動裝置'],
    description: '與品牌 De sidere 7.1 合作熱感應貼紙抽獎機，迷因貼紙、折價券、大獎，獎落誰家呢？',
    images: [
      'images/works/gq-festival/cover.png',
      'images/works/gq-festival/1.png',
      'images/works/gq-festival/2.jpg',
      'images/works/gq-festival/3.png',
    ],
    ph: { a: '#1a1510', b: '#282015' }
  },
  

  /* ── 互動式網頁 ── */
  {
    id: 'haochi',
    name: '好初漫報',
    client: '好初早餐',
    category: 'web',
    categoryLabel: '互動式網頁',
    tags: ['網頁製作'],
    description: '將商品擬人化，利用 3D 造型與互動式網站塑造品牌定位。',
    images: [
      'images/works/haochi/cover.png',
      'images/works/haochi/1.png',
      'images/works/haochi/2.png',
    ],
    ph: { a: '#1a1510', b: '#281f14' }
  },
];
