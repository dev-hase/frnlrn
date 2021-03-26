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
    nextLinks: false,
    prevLinks: false,
  	displayAllHeaders: true,
  	logo: '/img/logo.png',
  	nav: [
        { text: 'Wiki', link: '/wiki.html' },

    ],
    sidebar: [
        {
            title: 'Rahmenlehrplan',
            children: [
                ['/lektion01/', 'Persönliche Voraussetzungen'],
                ['/lektion02/', 'Risikofaktor Mensch'],
                ['/lektion03/', 'Rechtliche Rahmenbedingungen'],
                ['/lektion04/', 'Straßenverkehrssystem und seine Nutzung'],
                ['/lektion05/', 'Vorfahrt und Verkehrsregelungen'],
                ['/lektion06/', 'Verkehrszeichen und Verkehrseinrichtungen sowie Bahnübergänge'],
                ['/lektion07/', 'Andere Teilnehmer im Straßenverkehr'],
                ['/lektion08/', 'Geschwindigkeit, Abstand und umweltschonende Fahrweise'],
                ['/lektion09/', 'Verkehrsverhalten bei Fahrmanövern, Verkehrsbeobachtung'],
                ['/lektion10/', 'Ruhender Verkehr'],
                ['/lektion11/', 'Verhalten in besonderen Situationen, Folgen von Verstößen gegen Verkehrsvorschriften'],
                ['/lektion12/', 'Lebenslanges Lernen'],
            ]
        },
                  

    ],

  }
 }
