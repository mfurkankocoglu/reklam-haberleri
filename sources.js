const RSS_FEEDS = [

  // ─── YouTube Haberleri ──────────────────────────────────────
  {
    rssUrl: 'https://www.youtube.com/feeds/videos.xml?user=MarketingTurkiye1',
    source: 'Marketing Türkiye',
    sourceName: 'Marketing Türkiye YouTube',
    category: 'youtube'
  },
  {
    rssUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC0PloqGF69KBBbLBTvsyrag',
    source: 'Campaign Türkiye',
    sourceName: 'Campaign Türkiye YouTube',
    category: 'youtube'
  },
  {
    rssUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCJ5UyIAa5nEGksjcdp43Ixw',
    source: 'Google Ads',
    sourceName: 'Google Ads YouTube',
    category: 'youtube'
  },
  {
    rssUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCnYu7GAR8YRWQ3NWdj9umdQ',
    source: 'Cannes Lions',
    sourceName: 'Cannes Lions YouTube',
    category: 'youtube'
  },

  // ─── Haberler ───────────────────────────────────────────────
  {
    rssUrl: 'https://www.marketingturkiye.com.tr/feed/',
    source: 'Marketing Türkiye',
    sourceName: 'Marketing Türkiye',
    category: 'news'
  },
  {
    rssUrl: 'https://www.campaigntr.com/feed/',
    source: 'Campaign Türkiye',
    sourceName: 'Campaign Türkiye',
    category: 'news'
  },
  {
    rssUrl: 'https://news.google.com/rss/search?q=site:bigumigu.com&hl=tr&gl=TR&ceid=TR:tr',
    fallback: 'https://bigumigu.com/feed/',
    source: 'Bigumigu',
    sourceName: 'Bigumigu',
    category: 'news',
    stripSuffix: true
  },
  // Ad Age kendi RSS ucu 403 donuyor -> once Google News, yedek olarak site feed'i
  {
    rssUrl: 'https://news.google.com/rss/search?q=site:adage.com+advertising&hl=en-US&gl=US&ceid=US:en',
    fallback: 'https://adage.com/rss-feed/?section_id=301',
    source: 'Ad Age',
    sourceName: 'Ad Age',
    category: 'news',
    stripSuffix: true
  },
  // Pazarlamasyon /feed/ ucu 500 donuyor
  {
    rssUrl: 'https://news.google.com/rss/search?q=site:pazarlamasyon.com&hl=tr&gl=TR&ceid=TR:tr',
    fallback: 'https://pazarlamasyon.com/feed/',
    source: 'Pazarlamasyon',
    sourceName: 'Pazarlamasyon',
    category: 'news',
    stripSuffix: true
  },
  // The Drum'un kendi feed adresleri 404 donuyor
  {
    rssUrl: 'https://news.google.com/rss/search?q=site:thedrum.com+creative&hl=en-US&gl=US&ceid=US:en',
    fallback: 'https://www.thedrum.com/feeds/rss/creative',
    source: 'The Drum',
    sourceName: 'The Drum',
    category: 'news',
    stripSuffix: true
  },

  // ─── X/Twitter ──────────────────────────────────────────────
  // X (Twitter) RSS destegi sunmuyor; Nitter ornekleri kullanilir.
  {
    rssUrl: 'https://nitter.meowing.monster/GoogleAds/rss',
    fallback: 'https://nitter.jaydenha.uk/GoogleAds/rss',
    source: '@GoogleAds',
    sourceName: 'Google Ads X',
    category: 'twitter'
  },
  {
    rssUrl: 'https://nitter.meowing.monster/campaigntr/rss',
    fallback: 'https://nitter.jaydenha.uk/campaigntr/rss',
    source: '@campaigntr',
    sourceName: 'Campaign Türkiye X',
    category: 'twitter'
  },
  {
    rssUrl: 'https://nitter.meowing.monster/Ogilvy/rss',
    fallback: 'https://nitter.jaydenha.uk/Ogilvy/rss',
    source: '@Ogilvy',
    sourceName: 'Ogilvy X',
    category: 'twitter'
  }
];
