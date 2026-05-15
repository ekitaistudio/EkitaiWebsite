/* 所有作品資料，新增作品只需在此新增一筆物件 */
const WORKS = [

  /* ── 動態視覺 ── */
  {
    id: 'paper-planes',
    name: 'Paper Planes 50大酒吧頒獎典禮',
    client: 'Paper Planes',
    category: 'motion',
    categoryLabel: '動態視覺',
    tags: ['視覺設計', '視覺統籌'],
    description: '這次很榮幸為 PaperPlane酒吧頒獎典禮設計活動視覺\n 為了呈現調酒文化的經典，大量使用了Collage Art和Disco元素，有如身在60年代的美式派對\n 一場屬於調酒師的盛宴怎麼能錯過呢！',
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
    description: '伊奇泰計畫的靈感源自日文中「液體」一詞，此計畫將探討當代議題－「液態社會」，因資訊洪流所形成的動盪與脆弱，從社會結構到個人價值觀，人際關係到情感的聯結，在這巨浪中被沖刷，界限漸趨模糊，成為當今社會彼此之間的象徵，藉此作品透過互動裝置和聲響創作，使觀賞者成為液態社會的一部分，體現出當代社會中那份隨時流動、易變的關係網絡。通過多層次畫面的交錯，呈現液態社會中個人與群體之間模糊的界限及不斷塑的身份認同。展區內以多聲道方式佈局實驗性聲響，營造立體化與多層次的聽覺體驗。觀眾的駐足與停留將通過互動與數據捕捉影響畫面變化，象徵個體在當代社會中的流動性與影響力，讓觀眾成為液態社會的參與者。\n\n 以一台主控電腦控制整體系統，搭配4台樹莓派和4台平板，共同呈現12個播放端畫面的大型互動展示設置。主控電腦安裝在外部機箱中，負責運行Unity控制端程式、處理OpenCV即時人數偵測，並提供Local NTP Server服務，確保所有播放端能夠同步運作。在硬體配置上，4台樹莓派各自連接2個螢幕，透過HDMI輸出影像和音訊，共控制8個螢幕，這些螢幕採用混合直立和橫放的擺設方式，全部朝向同一觀看方向，並使用螢幕內建的喇叭播放聲音。4台平板則固定在對應螢幕旁邊，同樣使用內建喇叭播放聲音。所有設備都以本地區域網路連接，確保穩定的資料傳輸。在軟體系統方面，Unity控制端程式扮演核心角色，負責管理NTP時間同步、12個播放端的同步播放控制、即時人數偵測資訊處理、互動效果觸發。每個播放端都運行獨立的Unity程式，處理NTP時間同步、影片播放和音訊輸出。其中兩個螢幕具備特殊的互動功能，能根據OpenCV偵測到的人數在特定時間觸發不同的互動效果。',
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
    client: '台東縣政府',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['新媒體藝術', '互動裝置', '體驗設計'],
    description: '與金曲歌手蘇瓦那合作歌唱四格拍貼裝置，讓大家在歌唱中，不僅能夠即時拍下專屬回憶，帶回獨特的照片紀念，還夠能體驗原住民歌曲的魅力！',
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
    client: 'De sidere 7.1 x 洋薊計画',
    category: 'install',
    categoryLabel: '互動與藝術裝置',
    tags: ['新媒體藝術', '互動裝置'],
    description: '與De sidere 7.1和洋薊計画合作熱感應貼紙抽獎機，把每個抽獎時刻都變成值得收藏的潮流小物，透過即時列印的迷因貼紙，無論是否中獎，人人都能擁有專屬紀念。',
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
