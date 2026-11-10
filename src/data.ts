export const TG = 'https://t.me/Sharofutdinov_Nodirjon'

export type Service = { title: string; short: string; price?: string }

// Xizmat qoʻshish/oʻzgartirish: shu roʻyxatni tahrirlang (price boʻlmasa "Narxini soʻrang" chiqadi)
export const services: Service[] = [
  { title: 'Avtosugʻurta', short: 'Avtosugʻurta', price: "160,000" },
  { title: 'Dovernost', short: 'Dovernost', price: "150,000" },
  { title: 'Litsenziya', short: 'Litsenziya', price: "500,000" },
  { title: 'Jarima balini oʻtkazish', short: 'Jarima balli', price: "130,000" },
  { title: 'Tonirovka ruxsatnomasi', short: 'Tonirovka', price: "3,300,000" },
  { title: 'Qayta jihoz ruxsatnomalari', short: 'Qayta jihoz', price: "350,000"},
  { title: 'Yagona darcha xizmatlari', short: 'Yagona darcha' },
]

// Kalit soʻzlar joyi: [x%, y%, burchak] — 0-element tepada markazda, qolganlari chap/oʻng navbat bilan
export const spots: [number, number, number][] = [
  [50, 8, 0],
  [17, 21, -3],
  [83, 21, 3],
  [13, 35, 2.5],
  [87, 35, -2.5],
  [18, 49, -2],
  [82, 49, 2],
]

export type Contact = { kind: 'tg' | 'ch' | 'doc' | 'tel' | 'ig'; label: string; value: string; href: string }

// Instagram: href ga havolani yozsangiz, avtomatik koʻrinadi
export const contacts: Contact[] = [
  { kind: 'tg', label: 'Telegram', value: '@Sharofutdinov_Nodirjon', href: TG },
  { kind: 'ch', label: 'Telegram kanal', value: 'Tezkor xizmatlar', href: 'https://t.me/tezkorxizmatlar24_7' },
  { kind: 'doc', label: 'Bajarilgan ishlar', value: 'Hujjatlar va natijalar kanali', href: 'https://t.me/Avtostraxovaniya' },
  { kind: 'tel', label: 'Telefon', value: '+998 99 892 65 76', href: 'tel:+998998926576' },
  { kind: 'ig', label: 'Instagram', value: '', href: '' },
]

export const fmt = (n: number | string) => n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ')
