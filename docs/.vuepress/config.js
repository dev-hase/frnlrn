module.exports = {
  title: 'frnlrn.de',
  description: 'Wiki für Fahranfänger',

  extend: '@vuepress/theme-default',

    locales: {
      "/": {
        lang: "de-DE"
      }
    },

  head: [
    ['link', { rel: 'icon', href: '/img/icon-512x512.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#8cce82' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icon-192x192.png' }],
    ['link', { rel: 'mask-icon', href: '/img/icon-512x512.png', color: '#8cce82' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "Inhalte wurden geändert",
          buttonText: "nachladen..."
        }
      }
    ]
  ],

  themeConfig: {
  
  	displayAllHeaders: true,
  	logo: '/img/logo.png',
  	nav: [
        { text: 'Wiki', link: '/wiki.html' },

    ],
    sidebar: [
        {
            title: 'Rahmenlehrplan',
            children: [
                ['/lektion01/', 'Lektion 01'],
                ['/lektion02/', 'Lektion 02'],
                ['/lektion03/', 'Lektion 03'],
                ['/lektion04/', 'Lektion 04'],
                ['/lektion05/', 'Lektion 05'],
                ['/lektion06/', 'Lektion 06'],
                ['/lektion07/', 'Lektion 07'],
                ['/lektion08/', 'Lektion 08'],
                ['/lektion09/', 'Lektion 09'],
                ['/lektion10/', 'Lektion 10'],
                ['/lektion11/', 'Lektion 11'],
                ['/lektion12/', 'Lektion 12'],
            ]
        },
                  

    ],

  }
 }
