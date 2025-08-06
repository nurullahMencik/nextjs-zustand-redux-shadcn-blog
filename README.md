Next.js (app router) ile SSR ve client-side fetch içeren blog sitesi. React state yönetimi için Zustand ve Redux Toolkit kullanıldı. Modern React hook’ları, API entegrasyonu ve ortam değişkenleri pratiği yapıldı. Teknolojiler: Next.js 15, React, Zustand, Redux Toolkit, TypeScript, Tailwind CSS. Amaç: SSR, client fetch ve state management öğrenmek için yaptığım çalışma.

````
├── app/                  # Next.js uygulama dizini (App Router)
│   ├── (auth)/           # Kimlik doğrulama ile ilgili sayfalar ve bileşenler
│   │   ├── login/        # Giriş sayfası
│   │   └── register/     # Kayıt sayfası
│   ├── (home)/           # Ana sayfa
│   ├── (routes)/         # Route grupları
│   │   ├── blog/         # Blog ile ilgili sayfalar
│   │   │   ├── [slug]/   # Dinamik blog yazı sayfası
│   │   │   └── page.tsx
│   │   ├── about/        # Hakkımızda sayfası
│   │   ├── contact/      # İletişim sayfası
│   │   └── layout.tsx    # Rotalar için paylaşılan layout
│   ├── api/              # API rotaları
│   │   ├── blog/         # Blog API endpointleri
│   │   └── ...           # Diğer API endpointleri
│   ├── components/       # Genel tekrar kullanılabilir UI bileşenleri
│   │   ├── layout/       # Sayfa düzeni ile ilgili bileşenler (footer, header)
│   │   │   ├── footer.tsx
│   │   │   └── header.tsx
│   │   └── ui/           # Temel UI bileşenleri (button, input vb.)
│   ├── globals.css       # Global stil dosyası
│   ├── layout.tsx        # Ana uygulama düzeni
│   └── not-found.tsx     # 404 hata sayfası
├── public/               # Statik dosyalar (resimler, ikonlar vb.)
│   └── favicon.ico
├── lib/                  # Yardımcı fonksiyonlar, kütüphaneler
├── node_modules/         # Yüklü NPM paketleri
├── redux/                # Redux store ve ilgili dosyalar (slices, store config)
├── types/                # TypeScript tip tanımları
├── zustand/              # Zustand state yönetimi ile ilgili dosyalar
├── .env.local            # Yerel ortam değişkenleri
├── .gitignore            # Git tarafından yoksayılacak dosyalar
├── next.config.mjs       # Next.js yapılandırma dosyası
├── package.json          # Proje bağımlılıkları ve scriptleri
├── tsconfig.json         # TypeScript yapılandırma dosyası
├── README.md             # Bu dosya
└── ...                   # Diğer yapılandırma dosyaları````
