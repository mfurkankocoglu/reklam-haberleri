/**
 * ========================================
 *  HABER KAYNAKLARI (RSS Feed Sources)
 * ========================================
 *
 * Yeni kaynak eklemek için:
 *   1. RSS_FEEDS dizisine yeni bir obje ekleyin
 *   2. category alanini 'youtube', 'news' veya 'twitter' olarak ayarlayin
 *   3. rssUrl alianina gecerli RSS feed adresini girin
 *
 * Kaynak URL formatlari:
 *   YouTube : https://www.youtube.com/feeds/videos.xml?channel_id=UC...
 *             https://www.youtube.com/feeds/videos.xml?user=KULLANICI
 *   Haber   : Standart WordPress/blog RSS (ornegin /feed/ ya da /rss/)
 *   Twitter : Ucuncu parti servislerden alinir (rss.app, feedbin, vb.)
 *             Twitter'in kendi RSS destegi bulunmamaktadir.
 */

const RSS_FEEDS = [

  // ─── YouTube Haberleri ──────────────────────────────────────
  {
    rssUrl: 'https://www.youtube.com/feeds/videos.xml?user=MarketingTurkiye1',
    source: 'Marketing Türkiye',
    sourceName: 'Marketing Türkiye YouTube',
    category: 'youtube',
    color: { bg: '#fee2e2', text: '#b91c1c', label: 'YouTube' }
  },
  {
    rssUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCampaignTrChannelId',
    source: 'Campaign Türkiye',
    sourceName: 'Campaign Türkiye YouTube',
    category: 'youtube',
    color: { bg: '#fce7f3', text: '#be185d', label: 'YouTube' }
  },
  {
    rssUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCGoogleAdsChannelId',
    source: 'Google Ads',
    sourceName: 'Google Ads YouTube',
    category: 'youtube',
    color: { bg: '#dcfce7', text: '#15803d', label: 'YouTube' }
  },
  {
    rssUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCtXg8d_uFk_8n8bQ9tC2PQA',
    source: 'Cannes Lions',
    sourceName: 'Cannes Lions YouTube',
    category: 'youtube',
    color: { bg: '#fef9c3', text: '#a16207', label: 'YouTube' }
  },

  // ─── Haberler ───────────────────────────────────────────────
  {
    rssUrl: 'https://www.marketingturkiye.com.tr/feed/',
    source: 'Marketing Türkiye',
    sourceName: 'Marketing Türkiye',
    category: 'news',
    color: { bg: '#dbeafe', text: '#1d4ed8', label: 'Haberler' }
  },
  {
    rssUrl: 'https://www.campaigntr.com/feed/',
    source: 'Campaign Türkiye',
    sourceName: 'Campaign Türkiye',
    category: 'news',
    color: { bg: '#fae8ff', text: '#a21caf', label: 'Haberler' }
  },
  {
    rssUrl: 'https://adage.com/news/',
    source: 'Ad Age',
    sourceName: 'Ad Age',
    category: 'news',
    color: { bg: '#fef3c7', text: '#b45309', label: 'Haberler' }
  },
  {
    rssUrl: 'https://bigumigu.com/feed/',
    source: 'Bigumigu',
    sourceName: 'Bigumigu',
    category: 'news',
    color: { bg: '#d1fae5', text: '#065f46', label: 'Haberler' }
  },
  {
    rssUrl: 'https://pazarlamasyon.com/feed/',
    source: 'Pazarlamasyon',
    sourceName: 'Pazarlamasyon',
    category: 'news',
    color: { bg: '#ede9fe', text: '#5b21b6', label: 'Haberler' }
  },
  {
    rssUrl: 'https://www.thedrum.com/feeds/rss/creative',
    source: 'The Drum',
    sourceName: 'The Drum',
    category: 'news',
    color: { bg: '#ffe4e6', text: '#be123c', label: 'Haberler' }
  },

  // ─── X/Twitter ──────────────────────────────────────────────
  // Twitter RSS feedleri icin ucuncu parti servis kullanin:
  //   rss.app  -> https://rss.app/rss-feed/twitter-rss-feed
  //   feedbin  -> https://feedbin.com/
  //   nitter   -> https://nitter.net/KULLANICI/rss
  {
    rssUrl: 'https://politepaul.com/fd/WDA2AqIzEyoK.xml',
    source: '@wearesocial',
    sourceName: 'We Are Social X',
    category: 'twitter',
    color: { bg: '#e0e7ff', text: '#4338ca', label: 'X/Twitter' }
  },
  {
    rssUrl: 'https://politepaul.com/fd/KVvJg2ikgh8h.xml',
    source: '@BrandingTR_',
    sourceName: 'Branding Türkiye X',
    category: 'twitter',
    color: { bg: '#f3e8ff', text: '#7c3aed', label: 'X/Twitter' }
  }
];
