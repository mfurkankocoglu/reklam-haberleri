# Reklam Gündemi

Reklamcılık haber akışı uygulaması. RSS kaynaklarından haberleri toplar, kategori bazlı filtreler, modal ile önizleme yapar ve YouTube linklerini açar.

## Özellikler

- Kategori sekmeleri (Tümü / YouTube / Haberler / X/Twitter / Kaydedilenler)
- Kronolojik sıralama
- Arama filtresi
- Kaydetme özelliği (localStorage)
- Kaydedilmeyen ve 15 günden eski haberler otomatik gizlenir (YouTube hariç)
- Kaydedilenler süresi dolsa bile gösterilir
- Modal önizleme + "Linki Kopyala" + "Devamını Oku"
- Kaynak durumu paneli
- Kademeli render (haberler geldikçe gösterilir)

## Dosyalar

- `index.html` - Ana uygulama (UI, fetch mantığı, parser, modal)
- `sources.js` - RSS kaynak tanımları

## Kaynak Yapısı (sources.js)

Yeni kaynak eklemek için `RSS_FEEDS` dizisine obje ekleyin:

```js
{
  rssUrl: 'https://...',      // Birincil RSS adresi
  fallback: '...',          // (opsiyonel) Yedek adres (string veya dizi)
  maxItems: 30,             // (opsiyonel) Maksimum haber sayısı
  source: 'Kısa Ad',        // Kartta gösterilen kısa ad
  sourceName: 'Tam Ad',     // Kart ve modalda gösterilen tam ad
  category: 'news',         // 'youtube' | 'news' | 'twitter'
  stripSuffix: true         // (opsiyonel) Google News için "- Yayıncı" ekini temizler
}
```

**URL formatları:**
- YouTube: `https://www.youtube.com/feeds/videos.xml?channel_id=UC...` veya `?user=KULLANICI`
- Haber: Standart WordPress/blog RSS (`/feed/`, `/rss/`)
- X/Twitter: Nitter örnekleri (X'in kendi RSS desteği yoktur)

**Not:** Bazı sitelerin RSS'u yavaş veya engelli olabilir. Birincil olarak Google News arama RSS'i, yedek olarak site feed'i kullanılabilir.

## Çekme Mantığı (index.html)

### Proxy Stratejisi

Ortama göre farklı proxy zincirleri kullanılır:

- **file://** (dosyadan açma): `r.jina.ai`, `allorigins`, `codetabs`, `corsproxy.io`, `proxy.corsfix.com`
- **github.io** (GitHub Pages): `allorigins.win/raw`, `codetabs`, `corsproxy.io`, `r.jina.ai` öncelikli
- **Diğer http(s)**: `r.jina.ai`, `allorigins`, `codetabs`, `corsproxy.io`, `proxy.corsfix.com`

### Sıra

- **YouTube**: Önce XML proxy → JSON API
- **Diğer kaynaklar**: Önce JSON API → XML proxy

### Zaman ve Filtre

- `REQUEST_TIMEOUT`: 8000ms
- `FEED_DEADLINE`: 15000ms
- `MAX_AGE_DAYS`: 15 gün
- YouTube videoları 15 günlük filtreden muaf tutulur
- Kaydedilenler her zaman gösterilir

### Önemli Notlar

- `file://` modunda tarayıcı `Origin: null` gönderir
- Bazı proxy'ler GitHub Pages origin'ini engelleyebilir
- CORS hatalı/ACAO'suz yanıtlar `TypeError` olarak yakalanır ve yeniden denenir
- Google News linkleri tarayıcıda yayıncıya yönlendirilir

## Kullanım

### Lokal
Dosyayı doğrudan açabilirsiniz (`file://`). Daha stabil sonuç için:
```bash
python -m http.server 8000
# http://localhost:8000
```

### GitHub Pages
Dosyaları repo'ya yükleyin, Pages üzerinden yayınlayın.
