import { City } from '../types';

export const CITIES: City[] = [
  { name: 'Tokyo', country: 'Japan', latitude: 35.6895, longitude: 139.6917 },
  { name: 'New York', country: 'USA', latitude: 40.7128, longitude: -74.0060 },
  { name: 'London', country: 'UK', latitude: 51.5074, longitude: -0.1278 },
  { name: 'Paris', country: 'France', latitude: 48.8566, longitude: 2.3522 },
  { name: 'Cairo', country: 'Egypt', latitude: 30.0444, longitude: 31.2357 },
  { name: 'Beijing', country: 'China', latitude: 39.9042, longitude: 116.4074 },
  { name: 'Moscow', country: 'Russia', latitude: 55.7558, longitude: 37.6173 },
  { name: 'Rio de Janeiro', country: 'Brazil', latitude: -22.9068, longitude: -43.1729 },
  { name: 'Sydney', country: 'Australia', latitude: -33.8688, longitude: 151.2093 },
  { name: 'Rome', country: 'Italy', latitude: 41.9028, longitude: 12.4964 },
  { name: 'New Delhi', country: 'India', latitude: 28.6139, longitude: 77.2090 },
  { name: 'Mexico City', country: 'Mexico', latitude: 19.4326, longitude: -99.1332 },
  { name: 'Buenos Aires', country: 'Argentina', latitude: -34.6037, longitude: -58.3816 },
  { name: 'Lagos', country: 'Nigeria', latitude: 6.5244, longitude: 3.3792 },
  { name: 'Istanbul', country: 'Turkey', latitude: 41.0082, longitude: 28.9784 },
  { name: 'Seoul', country: 'South Korea', latitude: 37.5665, longitude: 126.9780 },
  { name: 'Jakarta', country: 'Indonesia', latitude: -6.2088, longitude: 106.8456 },
  { name: 'Berlin', country: 'Germany', latitude: 52.5200, longitude: 13.4050 },
  { name: 'Madrid', country: 'Spain', latitude: 40.4168, longitude: -3.7038 },
  { name: 'Bangkok', country: 'Thailand', latitude: 13.7563, longitude: 100.5018 },
  { name: 'Nairobi', country: 'Kenya', latitude: -1.2921, longitude: 36.8219 },
  { name: 'Lima', country: 'Peru', latitude: -12.0464, longitude: -77.0428 },
  { name: 'Singapore', country: 'Singapore', latitude: 1.3521, longitude: 103.8198 },
  { name: 'Reykjavik', country: 'Iceland', latitude: 64.1466, longitude: -21.9426 },
  { name: 'Manaus', country: 'Brazil', latitude: -3.1190, longitude: -60.0217 },
  { name: 'Dubai', country: 'UAE', latitude: 25.276987, longitude: 55.296249 },
  { name: 'Cape Town', country: 'South Africa', latitude: -33.9249, longitude: 18.4241 },
  { name: 'Vancouver', country: 'Canada', latitude: 49.2827, longitude: -123.1207 },
  { name: 'Oslo', country: 'Norway', latitude: 59.9139, longitude: 10.7522 },
  { name: 'Mumbai', country: 'India', latitude: 19.0760, longitude: 72.8777 },
  // Added 50 new cities
  { name: 'Port Vila', country: 'Vanuatu', latitude: -17.7333, longitude: 168.3167 },
  { name: 'Suva', country: 'Fiji', latitude: -18.1333, longitude: 178.4333 },
  { name: 'Apia', country: 'Samoa', latitude: -13.8333, longitude: -171.7667 },
  { name: 'Nuku\'alofa', country: 'Tonga', latitude: -21.1333, longitude: -175.2000 },
  { name: 'Funafuti', country: 'Tuvalu', latitude: -8.5167, longitude: 179.2167 },
  { name: 'Majuro', country: 'Marshall Islands', latitude: 7.1000, longitude: 171.3833 },
  { name: 'Palikir', country: 'Micronesia', latitude: 6.9178, longitude: 158.1853 },
  { name: 'Honiara', country: 'Solomon Islands', latitude: -9.4333, longitude: 159.9500 },
  { name: 'Port Moresby', country: 'Papua New Guinea', latitude: -9.4789, longitude: 147.1494 },
  { name: 'Wellington', country: 'New Zealand', latitude: -41.2865, longitude: 174.7762 },
  { name: 'Hagåtña', country: 'Guam', latitude: 13.4731, longitude: 144.7497 },
  { name: 'Papeete', country: 'French Polynesia', latitude: -17.5350, longitude: -149.5696 },
  { name: 'Longyearbyen', country: 'Svalbard, Norway', latitude: 78.2232, longitude: 15.6267 },
  { name: 'Ushuaia', country: 'Argentina', latitude: -54.8019, longitude: -68.3030 },
  { name: 'Yakutsk', country: 'Russia', latitude: 62.0354, longitude: 129.6750 },
  { name: 'Arica', country: 'Chile', latitude: -18.4783, longitude: -70.3219 },
  { name: 'Mawsynram', country: 'India', latitude: 25.2970, longitude: 91.5826 },
  { name: 'Nuuk', country: 'Greenland', latitude: 64.1836, longitude: -51.7216 },
  { name: 'Stanley', country: 'Falkland Islands', latitude: -51.7000, longitude: -57.8500 },
  { name: 'Lhasa', country: 'China', latitude: 29.6500, longitude: 91.1167 }, // Tibet
  { name: 'Ulaanbaatar', country: 'Mongolia', latitude: 47.9189, longitude: 106.9172 },
  { name: 'Uyuni', country: 'Bolivia', latitude: -20.4632, longitude: -66.8250 },
  { name: 'Dakar', country: 'Senegal', latitude: 14.7167, longitude: -17.4677 },
  { name: 'Accra', country: 'Ghana', latitude: 5.6037, longitude: -0.1870 },
  { name: 'Addis Ababa', country: 'Ethiopia', latitude: 9.0054, longitude: 38.7578 },
  { name: 'Antananarivo', country: 'Madagascar', latitude: -18.8792, longitude: 47.5079 },
  { name: 'Windhoek', country: 'Namibia', latitude: -22.5594, longitude: 17.0832 },
  { name: 'Algiers', country: 'Algeria', latitude: 36.7754, longitude: 3.0586 },
  { name: 'Khartoum', country: 'Sudan', latitude: 15.5007, longitude: 32.5599 },
  { name: 'Freetown', country: 'Sierra Leone', latitude: 8.4844, longitude: -13.2344 },
  { name: 'Tashkent', country: 'Uzbekistan', latitude: 41.2995, longitude: 69.2401 },
  { name: 'Kathmandu', country: 'Nepal', latitude: 27.7172, longitude: 85.3240 },
  { name: 'Colombo', country: 'Sri Lanka', latitude: 6.9271, longitude: 79.8612 },
  { name: 'Pyongyang', country: 'North Korea', latitude: 39.0392, longitude: 125.7625 },
  { name: 'Thimphu', country: 'Bhutan', latitude: 27.4728, longitude: 89.6390 },
  { name: 'Bishkek', country: 'Kyrgyzstan', latitude: 42.8746, longitude: 74.5698 },
  { name: 'Bandar Seri Begawan', country: 'Brunei', latitude: 4.9031, longitude: 114.9398 },
  { name: 'Male', country: 'Maldives', latitude: 4.1755, longitude: 73.5093 },
  { name: 'Chișinău', country: 'Moldova', latitude: 47.0105, longitude: 28.8638 },
  { name: 'Minsk', country: 'Belarus', latitude: 53.9045, longitude: 27.5615 },
  { name: 'Tirana', country: 'Albania', latitude: 41.3275, longitude: 19.8187 }, // Corrected longitude for Tirana
  { name: 'Sarajevo', country: 'Bosnia and Herzegovina', latitude: 43.8563, longitude: 18.4131 },
  { name: 'Skopje', country: 'North Macedonia', latitude: 41.9981, longitude: 21.4254 },
  { name: 'Podgorica', country: 'Montenegro', latitude: 42.4304, longitude: 19.2594 },
  { name: 'Ljubljana', country: 'Slovenia', latitude: 46.0569, longitude: 14.5058 },
  { name: 'Zagreb', country: 'Croatia', latitude: 45.8150, longitude: 15.9819 },
  { name: 'Bratislava', country: 'Slovakia', latitude: 48.1486, longitude: 17.1077 },
  { name: 'Vilnius', country: 'Lithuania', latitude: 54.6872, longitude: 25.2797 },
  { name: 'Riga', country: 'Latvia', latitude: 56.9496, longitude: 24.1052 },
  { name: 'Tallinn', country: 'Estonia', latitude: 59.4370, longitude: 24.7536 },
  { name: 'Helsinki', country: 'Finland', latitude: 60.1699, longitude: 24.9384 },
  { name: 'Copenhagen', country: 'Denmark', latitude: 55.6761, longitude: 12.5683 },
  { name: 'Amsterdam', country: 'Netherlands', latitude: 52.3676, longitude: 4.9041 },
  { name: 'Brussels', country: 'Belgium', latitude: 50.8503, longitude: 4.3517 },
  { name: 'Luxembourg City', country: 'Luxembourg', latitude: 49.8153, longitude: 6.1296 },
  { name: 'Dublin', country: 'Ireland', latitude: 53.3498, longitude: -6.2603 },
  { name: 'Lisbon', country: 'Portugal', latitude: 38.7223, longitude: -9.1393 },
  { name: 'Bern', country: 'Switzerland', latitude: 46.9480, longitude: 7.4474 },
  { name: 'Vienna', country: 'Austria', latitude: 48.2082, longitude: 16.3738 },
  { name: 'Prague', country: 'Czech Republic', latitude: 50.0755, longitude: 14.4378 },
  { name: 'Warsaw', country: 'Poland', latitude: 52.2297, longitude: 21.0122 },
  { name: 'Budapest', country: 'Hungary', latitude: 47.4979, longitude: 19.0402 },
  { name: 'Bucharest', country: 'Romania', latitude: 44.4268, longitude: 26.1025 },
  { name: 'Sofia', country: 'Bulgaria', latitude: 42.6977, longitude: 23.3219 },
  { name: 'Athens', country: 'Greece', latitude: 37.9838, longitude: 23.7275 },
  { name: 'Nicosia', country: 'Cyprus', latitude: 35.1856, longitude: 33.3823 },
  { name: 'Valletta', country: 'Malta', latitude: 35.8989, longitude: 14.5146 },
  { name: 'Saint Petersburg', country: 'Russia', latitude: 59.9343, longitude: 30.3351 }, // 面積の広い国家の首都以外 (ロシア)
  { name: 'Shanghai', country: 'China', latitude: 31.2304, longitude: 121.4737 }, // 面積の広い国家の首都以外 (中国)
  { name: 'Toronto', country: 'Canada', latitude: 43.6532, longitude: -79.3832 }, // 面積の広い国家の首都以外 (カナダ)
  { name: 'Lahore', country: 'Pakistan', latitude: 31.5497, longitude: 74.3436 }, // 面積の広い国家の首都以外 (パキスタン)
  { name: 'Kano', country: 'Nigeria', latitude: 12.0000, longitude: 8.5167 }, // 面積の広い国家の首都以外 (ナイジェリア)
  { name: 'Belo Horizonte', country: 'Brazil', latitude: -19.9223, longitude: -43.9450 }, // 面積の広い国家の首都以外 (ブラジル)
  { name: 'Perth', country: 'Australia', latitude: -31.9505, longitude: 115.8605 }, // 面積の広い国家の首都以外 (オーストラリア)
  { name: 'Houston', country: 'USA', latitude: 29.7604, longitude: -95.3698 }, // 面積の広い国家の首都以外 (アメリカ合衆国)
  { name: 'Marseille', country: 'France', latitude: 43.2965, longitude: 5.3698 }, // 面積の広い国家の首都以外 (フランス)
  { name: 'Nagoya', country: 'Japan', latitude: 35.1815, longitude: 136.9065 }, // 面積の広い国家の首都以外 (日本)
  { name: 'Honolulu', country: 'USA', latitude: 21.3099, longitude: -157.8583 }, // 離島 (ハワイ)
  { name: 'Santa Cruz de Tenerife', country: 'Spain', latitude: 28.4636, longitude: -16.2518 }, // 離島 (カナリア諸島)
  { name: 'Réunion', country: 'France', latitude: -21.1151, longitude: 55.5364 }, // 離島 (レユニオン)
  { name: 'Hobart', country: 'Australia', latitude: -42.8821, longitude: 147.3272 }, // 離島 (タスマニア島)
  { name: 'Galway', country: 'Ireland', latitude: 53.2734, longitude: -9.0568 }, // 気候的に特色のある小都市 (アイルランドの西海岸)
  { name: 'Tórshavn', country: 'Faroe Islands', latitude: 62.0000, longitude: -6.7833 }, // 離島・特色ある気候 (フェロー諸島)
  { name: 'Kiruna', country: 'Sweden', latitude: 67.8557, longitude: 20.2251 }, // 気候的に特色のある小都市 (北極圏)
  { name: 'Timbuktu', country: 'Mali', latitude: 16.7666, longitude: -3.0024 }, // 気候的に特色のある小都市 (サハラ砂漠の縁)
  { name: 'Aswan', country: 'Egypt', latitude: 24.0889, longitude: 32.8998 }, // 気候的に特色のある小都市 (乾燥地帯)
  { name: 'Cairns', country: 'Australia', latitude: -16.9206, longitude: 145.7722 }, // 気候的に特色のある小都市 (熱帯)
  // Continued from previous additions (Adding 150 new cities)
  // --- 面積の広い国家の首都以外の都市 (Major Non-Capital Cities in Large Countries) ---
  { name: 'Guadalajara', country: 'Mexico', latitude: 20.6597, longitude: -103.3496 }, // メキシコ第2の都市
  { name: 'Recife', country: 'Brazil', latitude: -8.0539, longitude: -34.8819 }, // ブラジルの北東部
  { name: 'Novosibirsk', country: 'Russia', latitude: 55.0084, longitude: 82.9357 }, // シベリア最大の都市
  { name: 'Kolkata', country: 'India', latitude: 22.5726, longitude: 88.3639 }, // インドの主要都市
  { name: 'Chengdu', country: 'China', latitude: 30.6667, longitude: 104.0667 }, // 中国内陸部の主要都市
  { name: 'Montreal', country: 'Canada', latitude: 45.5017, longitude: -73.5673 }, // カナダの主要都市
  { name: 'Philadelphia', country: 'USA', latitude: 39.9526, longitude: -75.1652 }, // アメリカの歴史的な大都市
  { name: 'Durban', country: 'South Africa', latitude: -29.8587, longitude: 31.0218 }, // 南アフリカの主要港湾都市
  { name: 'Adelaide', country: 'Australia', latitude: -34.9285, longitude: 138.6007 }, // オーストラリア南部の州都
  { name: 'Karachi', country: 'Pakistan', latitude: 24.8608, longitude: 67.0104 }, // パキスタンの最大都市
  { name: 'Giza', country: 'Egypt', latitude: 30.0131, longitude: 31.2100 }, // エジプトの主要都市（カイロ近郊）
  { name: 'Hamburg', country: 'Germany', latitude: 53.5511, longitude: 9.9937 }, // ドイツの主要港湾都市
  { name: 'Milan', country: 'Italy', latitude: 45.4642, longitude: 9.1900 }, // イタリアの主要経済都市
  { name: 'Porto', country: 'Portugal', latitude: 41.1579, longitude: -8.6291 }, // ポルトガル第2の都市
  { name: 'Izmir', country: 'Turkey', latitude: 38.4192, longitude: 27.1287 }, // トルコの主要都市
  { name: 'Busan', country: 'South Korea', latitude: 35.1796, longitude: 129.0756 }, // 韓国第2の都市
  { name: 'Surabaya', country: 'Indonesia', latitude: -7.2575, longitude: 112.7521 }, // インドネシア第2の都市
  { name: 'Marrakech', country: 'Morocco', latitude: 31.6295, longitude: -7.9811 }, // モロッコの主要都市
  { name: 'Iskenderun', country: 'Turkey', latitude: 36.5861, longitude: 36.1653 }, // トルコの港湾都市
  { name: 'Hyderabad', country: 'India', latitude: 17.3850, longitude: 78.4867 }, // インドのハイテク都市
  { name: 'Chongqing', country: 'China', latitude: 29.5630, longitude: 106.5505 }, // 中国の巨大都市
  { name: 'San Francisco', country: 'USA', latitude: 37.7749, longitude: -122.4194 }, // アメリカ西海岸の主要都市
  { name: 'Sapporo', country: 'Japan', latitude: 43.0621, longitude: 141.3544 }, // 日本の主要都市（北海道）

  // --- 気候的に特色のある小都市 (Cities with Distinctive Climates) ---
  { name: 'Tiksi', country: 'Russia', latitude: 71.6212, longitude: 128.8851 }, // 北極海の港（極寒地）
  { name: 'Iquitos', country: 'Peru', latitude: -3.7491, longitude: -73.2538 }, // アマゾン川上流の都市（熱帯雨林）
  { name: 'Oymyakon', country: 'Russia', latitude: 63.4646, longitude: 142.7844 }, // 世界で最も寒い恒久的な居住地（極寒）
  { name: 'El Azizia', country: 'Libya', latitude: 32.5300, longitude: 13.0100 }, // 過去に世界最高気温を記録（猛暑・乾燥）
  { name: 'Cherrapunji', country: 'India', latitude: 25.3050, longitude: 91.7100 }, // 世界有数の多雨地帯（多雨）
  { name: 'Dome C', country: 'Antarctica', latitude: -75.1000, longitude: 123.3500 }, // 南極大陸の高地基地（極寒）- 国は南極条約に基づき無しとする
  { name: 'In Salah', country: 'Algeria', latitude: 27.1932, longitude: 2.4800 }, // サハラ砂漠のオアシス都市（猛暑・乾燥）
  { name: 'Barrow (Utqiagvik)', country: 'USA', latitude: 71.2906, longitude: -156.7886 }, // アメリカ最北端（極寒）
  { name: 'Eilat', country: 'Israel', latitude: 29.5577, longitude: 34.9519 }, // 砂漠地帯のリゾート（乾燥・温暖）
  { name: 'Puerto Williams', country: 'Chile', latitude: -54.9333, longitude: -67.6167 }, // 世界最南端の町（亜寒帯）
  { name: 'Moose Factory', country: 'Canada', latitude: 51.2667, longitude: -80.6000 }, // カナダ北部の集落（寒帯）
  { name: 'Coober Pedy', country: 'Australia', latitude: -29.0100, longitude: 134.7550 }, // 地下住居で知られる砂漠の町（乾燥）
  { name: 'La Rinconada', country: 'Peru', latitude: -14.6333, longitude: -69.4167 }, // 世界で最も高い場所にある恒久的な居住地（高山）
  { name: 'Aden', country: 'Yemen', latitude: 12.8000, longitude: 45.0333 }, // 灼熱の港湾都市（高温）

  // --- 離島・孤立した場所の都市 (Cities on Islands/Remote Locations) ---
  { name: 'Auckland', country: 'New Zealand', latitude: -36.8485, longitude: 174.7633 }, // ニュージーランド最大の都市
  { name: 'Cebu City', country: 'Philippines', latitude: 10.3157, longitude: 123.8854 }, // フィリピンの主要離島
  { name: 'George Town', country: 'Malaysia', latitude: 5.4141, longitude: 100.3288 }, // ペナン島
  { name: 'San Juan', country: 'Puerto Rico', latitude: 18.4655, longitude: -66.1057 }, // プエルトリコ
  { name: 'Kingston', country: 'Jamaica', latitude: 17.9975, longitude: -76.7936 }, // ジャマイカ
  { name: 'Havana', country: 'Cuba', latitude: 23.1136, longitude: -82.3666 }, // キューバ
  { name: 'Port Louis', country: 'Mauritius', latitude: -20.1650, longitude: 57.4989 }, // モーリシャス
  { name: 'Saint-Denis', country: 'France', latitude: -20.8823, longitude: 55.4504 }, // レユニオン島の主要都市
  { name: 'Victoria', country: 'Seychelles', latitude: -4.6235, longitude: 55.4542 }, // セイシェル
  { name: 'Pago Pago', country: 'American Samoa', latitude: -14.2763, longitude: -170.6901 }, // アメリカ領サモア
  { name: 'Alofi', country: 'Niue', latitude: -19.0558, longitude: -169.9142 }, // ニウエ
  { name: 'Adamstown', country: 'Pitcairn Islands', latitude: -25.0667, longitude: -130.1000 }, // ピトケアン諸島（世界最小の首都の一つ）
  { name: 'King Edward Point', country: 'South Georgia', latitude: -54.2833, longitude: -36.5000 }, // 南ジョージア
  { name: 'Stanley', country: 'Falkland Islands', latitude: -51.7000, longitude: -57.8500 }, // フォークランド諸島
  { name: 'Punta Arenas', country: 'Chile', latitude: -53.1667, longitude: -70.9333 }, // チリ南端、マゼラン海峡
  { name: 'Port Stanley', country: 'Falkland Islands', latitude: -51.7000, longitude: -57.8500 }, // フォークランド諸島（再掲だが正確にはこの都市名で追加）
  { name: 'Kodiak', country: 'USA', latitude: 57.7900, longitude: -152.3900 }, // アラスカの離島
  { name: 'Easter Island (Hanga Roa)', country: 'Chile', latitude: -27.1400, longitude: -109.4300 }, // イースター島

  // --- 世界の多様な首都・主要都市 (Diverse Capitals and Major Cities) ---
  { name: 'Dhaka', country: 'Bangladesh', latitude: 23.8103, longitude: 90.4125 }, // バングラデシュ
  { name: 'Kinshasa', country: 'DR Congo', latitude: -4.4419, longitude: 15.2663 }, // コンゴ民主共和国
  { name: 'Luanda', country: 'Angola', latitude: -8.8383, longitude: 13.2344 }, // アンゴラ
  { name: 'Riyadh', country: 'Saudi Arabia', latitude: 24.7136, longitude: 46.6753 }, // サウジアラビア
  { name: 'Baghdad', country: 'Iraq', latitude: 33.3152, longitude: 44.3661 }, // イラク
  { name: 'Damascus', country: 'Syria', latitude: 33.5132, longitude: 36.2913 }, // シリア
  { name: 'Amman', country: 'Jordan', latitude: 31.9454, longitude: 35.9284 }, // ヨルダン
  { name: 'Beirut', country: 'Lebanon', latitude: 33.8938, longitude: 35.5018 }, // レバノン
  { name: 'Kuwait City', country: 'Kuwait', latitude: 29.3759, longitude: 47.9774 }, // クウェート
  { name: 'Doha', country: 'Qatar', latitude: 25.2854, longitude: 51.5310 }, // カタール
  { name: 'Manama', country: 'Bahrain', latitude: 26.2285, longitude: 50.5860 }, // バーレーン
  { name: 'Abu Dhabi', country: 'UAE', latitude: 24.4539, longitude: 54.3773 }, // アラブ首長国連邦
  { name: 'Muscat', country: 'Oman', latitude: 23.6100, longitude: 58.5400 }, // オマーン
  { name: 'Baku', country: 'Azerbaijan', latitude: 40.4093, longitude: 49.8671 }, // アゼルバイジャン
  { name: 'Tbilisi', country: 'Georgia', latitude: 41.7151, longitude: 44.8271 }, // ジョージア
  { name: 'Yerevan', country: 'Armenia', latitude: 40.1872, longitude: 44.5152 }, // アルメニア
  { name: 'Astana', country: 'Kazakhstan', latitude: 51.1694, longitude: 71.4491 }, // カザフスタン
  { name: 'Ashgabat', country: 'Turkmenistan', latitude: 37.9601, longitude: 58.3260 }, // トルクメニスタン
  { name: 'Dushanbe', country: 'Tajikistan', latitude: 38.5600, longitude: 68.7700 }, // タジキスタン
  { name: 'Urumqi', country: 'China', latitude: 43.8234, longitude: 87.6177 }, // 中国（新疆ウイグル自治区）
  { name: 'Vientiane', country: 'Laos', latitude: 17.9757, longitude: 102.6331 }, // ラオス
  { name: 'Phnom Penh', country: 'Cambodia', latitude: 11.5564, longitude: 104.9282 }, // カンボジア
  { name: 'Yangon', country: 'Myanmar', latitude: 16.8402, longitude: 96.1735 }, // ミャンマーの最大都市
  { name: 'Hanoi', country: 'Vietnam', latitude: 21.0285, longitude: 105.8542 }, // ベトナム
  { name: 'Kuala Lumpur', country: 'Malaysia', latitude: 3.1390, longitude: 101.6869 }, // マレーシア
  { name: 'Manila', country: 'Philippines', latitude: 14.5995, longitude: 120.9842 }, // フィリピン
  { name: 'Taipei', country: 'Taiwan', latitude: 25.0330, longitude: 121.5654 }, // 台湾
  { name: 'Brasília', country: 'Brazil', latitude: -15.7801, longitude: -47.9292 }, // ブラジル（計画都市）
  { name: 'Santiago', country: 'Chile', latitude: -33.4489, longitude: -70.6693 }, // チリ
  { name: 'Quito', country: 'Ecuador', latitude: -0.1807, longitude: -78.4678 }, // エクアドル（高地）
  { name: 'Bogotá', country: 'Colombia', latitude: 4.7110, longitude: -74.0721 }, // コロンビア
  { name: 'Caracas', country: 'Venezuela', latitude: 10.4880, longitude: -66.8792 }, // ベネズエラ
  { name: 'Santo Domingo', country: 'Dominican Republic', latitude: 18.4861, longitude: -69.9388 }, // ドミニカ共和国
  { name: 'San Juan', country: 'Puerto Rico', latitude: 18.4655, longitude: -66.1057 }, // プエルトリコ
  { name: 'Panama City', country: 'Panama', latitude: 8.9824, longitude: -79.5199 }, // パナマ
  { name: 'San Jose', country: 'Costa Rica', latitude: 9.9281, longitude: -84.0907 }, // コスタリカ
  { name: 'Guatemala City', country: 'Guatemala', latitude: 14.6349, longitude: -90.5069 }, // グアテマラ
  { name: 'Tegucigalpa', country: 'Honduras', latitude: 14.0818, longitude: -87.2068 }, // ホンジュラス
  { name: 'San Salvador', country: 'El Salvador', latitude: 13.6929, longitude: -89.2182 }, // エルサルバドル
  { name: 'Managua', country: 'Nicaragua', latitude: 12.1364, longitude: -86.2520 }, // ニカラグア
  { name: 'Belmopan', country: 'Belize', latitude: 17.2510, longitude: -88.7668 }, // ベリーズ
  { name: 'Port-au-Prince', country: 'Haiti', latitude: 18.5900, longitude: -72.3075 }, // ハイチ
  { name: 'Kingston', country: 'Jamaica', latitude: 17.9975, longitude: -76.7936 }, // ジャマイカ
  { name: 'Port of Spain', country: 'Trinidad and Tobago', latitude: 10.6667, longitude: -61.5167 }, // トリニダード・トバゴ
  { name: 'Georgetown', country: 'Guyana', latitude: 6.8013, longitude: -58.1551 }, // ガイアナ
  { name: 'Paramaribo', country: 'Suriname', latitude: 5.8520, longitude: -55.2038 }, // スリナム
  { name: 'Cayenne', country: 'French Guiana', latitude: 4.9372, longitude: -52.3323 }, // フランス領ギアナ
  { name: 'Oslo', country: 'Norway', latitude: 59.9139, longitude: 10.7522 }, // ノルウェー
  { name: 'Stockholm', country: 'Sweden', latitude: 59.3293, longitude: 18.0686 }, // スウェーデン
  { name: 'Helsinki', country: 'Finland', latitude: 60.1699, longitude: 24.9384 }, // フィンランド
  { name: 'Copenhagen', country: 'Denmark', latitude: 55.6761, longitude: 12.5683 }, // デンマーク
  { name: 'Reykjavik', country: 'Iceland', latitude: 64.1466, longitude: -21.9426 }, // アイスランド
  { name: 'Edinburgh', country: 'UK', latitude: 55.9533, longitude: -3.1883 }, // イギリス（スコットランド）
  { name: 'Cardiff', country: 'UK', latitude: 51.4816, longitude: -3.1791 }, // イギリス（ウェールズ）
  { name: 'Belfast', country: 'UK', latitude: 54.5973, longitude: -5.9301 }, // イギリス（北アイルランド）
  { name: 'Marseille', country: 'France', latitude: 43.2965, longitude: 5.3698 }, // フランス
  { name: 'Munich', country: 'Germany', latitude: 48.1351, longitude: 11.5820 }, // ドイツ
  { name: 'Barcelona', country: 'Spain', latitude: 41.3851, longitude: 2.1734 }, // スペイン
  { name: 'Naples', country: 'Italy', latitude: 40.8518, longitude: 14.2681 }, // イタリア
  { name: 'Krakow', country: 'Poland', latitude: 50.0647, longitude: 19.9450 }, // ポーランド
  { name: 'Kyiv', country: 'Ukraine', latitude: 50.4501, longitude: 30.5234 }, // ウクライナ
  { name: 'Minsk', country: 'Belarus', latitude: 53.9045, longitude: 27.5615 }, // ベラルーシ
  { name: 'Saint Petersburg', country: 'Russia', latitude: 59.9343, longitude: 30.3351 }, // ロシア
  { name: 'Yekaterinburg', country: 'Russia', latitude: 56.8389, longitude: 60.6057 }, // ロシア（ウラル）
  { name: 'Vladivostok', country: 'Russia', latitude: 43.1167, longitude: 131.8833 }, // ロシア（極東）
  { name: 'Addis Ababa', country: 'Ethiopia', latitude: 9.0054, longitude: 38.7578 }, // エチオピア
  { name: 'Casablanca', country: 'Morocco', latitude: 33.5731, longitude: -7.5898 }, // モロッコ
  { name: 'Tunis', country: 'Tunisia', latitude: 36.8065, longitude: 10.1815 }, // チュニジア
  { name: 'Tripoli', country: 'Libya', latitude: 32.8872, longitude: 13.1901 }, // リビア
  { name: 'Juba', country: 'South Sudan', latitude: 4.8500, longitude: 31.6000 }, // 南スーダン
  { name: 'Khartoum', country: 'Sudan', latitude: 15.5007, longitude: 32.5599 }, // スーダン
  { name: 'Mogadishu', country: 'Somalia', latitude: 2.0371, longitude: 45.3438 }, // ソマリア
  { name: 'Dar es Salaam', country: 'Tanzania', latitude: -6.7924, longitude: 39.2083 }, // タンザニア
  { name: 'Lusaka', country: 'Zambia', latitude: -15.4167, longitude: 28.2833 }, // ザンビア
  { name: 'Harare', country: 'Zimbabwe', latitude: -17.8252, longitude: 31.0335 }, // ジンバブエ
  { name: 'Maputo', country: 'Mozambique', latitude: -25.9653, longitude: 32.5833 }, // モザンビーク
  { name: 'Gaborone', country: 'Botswana', latitude: -24.6581, longitude: 25.9088 }, // ボツワナ
  { name: 'Antananarivo', country: 'Madagascar', latitude: -18.8792, longitude: 47.5079 }, // マダガスカル
  { name: 'Yamoussoukro', country: 'Cote d\'Ivoire', latitude: 6.8286, longitude: -5.2861 }, // コートジボワール
  { name: 'Abuja', country: 'Nigeria', latitude: 9.0765, longitude: 7.3986 }, // ナイジェリアの首都
  { name: 'Accra', country: 'Ghana', latitude: 5.6037, longitude: -0.1870 }, // ガーナ
  { name: 'Dakar', country: 'Senegal', latitude: 14.7167, longitude: -17.4677 }, // セネガル
  { name: 'Algiers', country: 'Algeria', latitude: 36.7754, longitude: 3.0586 }, // アルジェリア
  { name: 'Yaoundé', country: 'Cameroon', latitude: 3.8480, longitude: 11.5021 }, // カメルーン
  { name: 'Libreville', country: 'Gabon', latitude: 0.3900, longitude: 9.4500 }, // ガボン
  { name: 'Brazzaville', country: 'Republic of the Congo', latitude: -4.2667, longitude: 15.2833 }, // コンゴ共和国
  { name: 'Malabo', country: 'Equatorial Guinea', latitude: 3.7500, longitude: 8.7833 }, // 赤道ギニア
  { name: 'Praia', country: 'Cabo Verde', latitude: 14.9216, longitude: -23.5085 }, // カーボベルデ
  { name: 'Nouakchott', country: 'Mauritania', latitude: 18.0858, longitude: -15.9785 }, // モーリタニア
  { name: 'Bamako', country: 'Mali', latitude: 12.6392, longitude: -8.0029 }, // マリ
  { name: 'Ouagadougou', country: 'Burkina Faso', latitude: 12.3714, longitude: -1.5197 }, // ブルキナファソ
  { name: 'Niamey', country: 'Niger', latitude: 13.5167, longitude: 2.1167 }, // ニジェール
  { name: 'N\'Djamena', country: 'Chad', latitude: 12.1000, longitude: 15.0333 }, // チャド
  { name: 'Bangui', country: 'Central African Republic', latitude: 4.3610, longitude: 18.5583 }, // 中央アフリカ共和国
  { name: 'Djibouti (City)', country: 'Djibouti', latitude: 11.5888, longitude: 43.1450 }, // ジブチ
  { name: 'Asmara', country: 'Eritrea', latitude: 15.3381, longitude: 38.9317 }, // エリトリア
  { name: 'Sana\'a', country: 'Yemen', latitude: 15.3547, longitude: 44.2067 }, // イエメン
  { name: 'Kabul', country: 'Afghanistan', latitude: 34.5553, longitude: 69.2075 }, // アフガニスタン
  { name: 'Belem', country: 'Brazil', latitude: -1.4558, longitude: -48.5033 }, // ブラジル（アマゾン河口）
  { name: 'Valparaíso', country: 'Chile', latitude: -33.0472, longitude: -71.6120 }, // チリ（主要港湾都市）
  { name: 'Cali', country: 'Colombia', latitude: 3.4516, longitude: -76.5320 }, // コロンビア
  { name: 'Guayaquil', country: 'Ecuador', latitude: -2.2038, longitude: -79.9079 }, // エクアドル（最大都市）
  { name: 'Mendoza', country: 'Argentina', latitude: -32.8895, longitude: -68.8458 }, // アルゼンチン（ワイン産地）
  { name: 'Rosario', country: 'Argentina', latitude: -32.9468, longitude: -60.6393 }, // アルゼンチン第3の都市
  { name: 'Cordoba', country: 'Argentina', latitude: -31.4201, longitude: -64.1888 }, // アルゼンチン第2の都市
  { name: 'Monterrey', country: 'Mexico', latitude: 25.6866, longitude: -100.3161 }, // メキシコ（北部）
  { name: 'Tijuana', country: 'Mexico', latitude: 32.5149, longitude: -117.0382 }, // メキシコ（国境都市）
  { name: 'Ciudad Juárez', country: 'Mexico', latitude: 31.7388, longitude: -106.4851 }, // メキシコ（国境都市）
  { name: 'Denpasar', country: 'Indonesia', latitude: -8.6556, longitude: 115.2229 }, // インドネシア（バリ島）
  { name: 'Haikou', country: 'China', latitude: 20.0400, longitude: 110.3300 }, // 中国（海南島）
  { name: 'Fukuoka', country: 'Japan', latitude: 33.5904, longitude: 130.4017 }, // 日本（九州）
  { name: 'Osaka', country: 'Japan', latitude: 34.6937, longitude: 135.5023 }, // 日本（関西）
  { name: 'Sendai', country: 'Japan', latitude: 38.2682, longitude: 140.8694 }, // 日本（東北）
  { name: 'Busan', country: 'South Korea', latitude: 35.1796, longitude: 129.0756 }, // 韓国（再掲だが重要）
  { name: 'Daegu', country: 'South Korea', latitude: 35.8722, longitude: 128.6025 }, // 韓国
  { name: 'Hồ Chí Minh City', country: 'Vietnam', latitude: 10.8231, longitude: 106.6297 }, // ベトナム（旧サイゴン）
  { name: 'Chiang Mai', country: 'Thailand', latitude: 18.7061, longitude: 98.9959 }, // タイ（北部）
  { name: 'Phuket', country: 'Thailand', latitude: 7.8804, longitude: 98.3923 }, // タイ（離島）
  { name: 'Mandalay', country: 'Myanmar', latitude: 21.9583, longitude: 96.0889 }, // ミャンマー
  { name: 'Kandy', country: 'Sri Lanka', latitude: 7.2906, longitude: 80.6337 }, // スリランカ
  { name: 'Chittagong', country: 'Bangladesh', latitude: 22.3475, longitude: 91.8123 }, // バングラデシュ
  { name: 'Kathmandu', country: 'Nepal', latitude: 27.7172, longitude: 85.3240 }, // ネパール
  { name: 'Lhasa', country: 'China', latitude: 29.6500, longitude: 91.1167 }, // 中国（チベット）
  { name: 'Alma-Ata (Almaty)', country: 'Kazakhstan', latitude: 43.2389, longitude: 76.8897 }, // カザフスタン（旧首都）
  { name: 'Samarkand', country: 'Uzbekistan', latitude: 39.6542, longitude: 66.9597 }, // ウズベキスタン（歴史的な都市）
  { name: 'Isfahan', country: 'Iran', latitude: 32.6546, longitude: 51.6680 }, // イラン
  { name: 'Tabriz', country: 'Iran', latitude: 38.0800, longitude: 46.2950 }, // イラン
  { name: 'Erbil', country: 'Iraq', latitude: 36.1911, longitude: 44.0093 }, // イラク（クルディスタン）
  { name: 'Aleppo', country: 'Syria', latitude: 36.2021, longitude: 37.1309 }, // シリア
  { name: 'Gaza City', country: 'Palestine', latitude: 31.5000, longitude: 34.4667 }, // パレスチナ
  { name: 'Jerusalem', country: 'Israel', latitude: 31.7683, longitude: 35.2137 }, // イスラエル（複雑な政治的背景を持つ都市）
  { name: 'Tel Aviv', country: 'Israel', latitude: 32.0853, longitude: 34.7818 }, // イスラエル（経済・文化の中心）
  { name: 'Jeddah', country: 'Saudi Arabia', latitude: 21.4858, longitude: 39.1925 }, // サウジアラビア
  { name: 'Mecca', country: 'Saudi Arabia', latitude: 21.4225, longitude: 39.8262 }, // サウジアラビア（イスラム教の聖地）
  { name: 'Beirut', country: 'Lebanon', latitude: 33.8938, longitude: 35.5018 }, // レバノン
  { name: 'Ankara', country: 'Turkey', latitude: 39.9334, longitude: 32.8597 }, // トルコの首都
  { name: 'Antalya', country: 'Turkey', latitude: 36.8969, longitude: 30.7132 }, // トルコ（地中海リゾート）
  { name: 'Auckland', country: 'New Zealand', latitude: -36.8485, longitude: 174.7633 }, // ニュージーランド
  { name: 'Christchurch', country: 'New Zealand', latitude: -43.5321, longitude: 172.6362 }, // ニュージーランド（南島）
  { name: 'Port Moresby', country: 'Papua New Guinea', latitude: -9.4789, longitude: 147.1494 }, // パプアニューギニア
  { name: 'Papeete', country: 'French Polynesia', latitude: -17.5350, longitude: -149.5696 }, // フランス領ポリネシア
  { name: 'Honolulu', country: 'USA', latitude: 21.3099, longitude: -157.8583 }, // アメリカ（ハワイ）
  { name: 'Juneau', country: 'USA', latitude: 58.3019, longitude: -134.4197 }, // アメリカ（アラスカ州都）
  { name: 'Sitka', country: 'USA', latitude: 57.0531, longitude: -135.3300 }, // アメリカ（アラスカの離島）
  { name: 'Nome', country: 'USA', latitude: 64.5011, longitude: -165.4064 }, // アメリカ（アラスカ西部）
  { name: 'Iqaluit', country: 'Canada', latitude: 63.7480, longitude: -68.5185 }, // カナダ（ヌナブト準州）
  { name: 'Yellowknife', country: 'Canada', latitude: 62.4539, longitude: -114.3718 }, // カナダ（北西準州）
  { name: 'Gander', country: 'Canada', latitude: 48.9567, longitude: -54.6067 }, // カナダ（ニューファンドランド）
  { name: 'Saskatoon', country: 'Canada', latitude: 52.1333, longitude: -106.6833 }, // カナダ（サスカチュワン州）
  { name: 'Chihuahua', country: 'Mexico', latitude: 28.6333, longitude: -106.0833 }, // メキシコ
  { name: 'La Paz', country: 'Bolivia', latitude: -16.5000, longitude: -68.1500 }, // ボリビア（行政府所在地）
  { name: 'Sucre', country: 'Bolivia', latitude: -19.0333, longitude: -65.2627 }, // ボリビア（憲法上の首都）
  { name: 'Cuzco', country: 'Peru', latitude: -13.5320, longitude: -71.9675 }, // ペルー（歴史的な都市）
  { name: 'Antofagasta', country: 'Chile', latitude: -23.6405, longitude: -70.3946 }, // チリ（北部）
  { name: 'Montevideo', country: 'Uruguay', latitude: -34.9011, longitude: -56.1645 }, // ウルグアイ
  { name: 'Asunción', country: 'Paraguay', latitude: -25.2637, longitude: -57.5759 }, // パラグアイ
  { name: 'Funchal', country: 'Portugal', latitude: 32.6667, longitude: -16.9333 }, // ポルトガル（マデイラ島）
  { name: 'Palermo', country: 'Italy', latitude: 38.1157, longitude: 13.3615 }, // イタリア（シチリア島）
  { name: 'Heraklion', country: 'Greece', latitude: 35.3387, longitude: 25.1442 }, // ギリシャ（クレタ島）
  { name: 'Rhodes', country: 'Greece', latitude: 36.4428, longitude: 28.2208 }, // ギリシャ（ロードス島）
  { name: 'Mytilene', country: 'Greece', latitude: 39.1067, longitude: 26.5558 }, // ギリシャ（レスボス島）
  { name: 'Santorini (Thira)', country: 'Greece', latitude: 36.4167, longitude: 25.4333 }, // ギリシャ（サントリーニ島）
  { name: 'Gibraltar', country: 'UK', latitude: 36.1408, longitude: -5.3536 }, // イギリス海外領土
  { name: 'Minsk', country: 'Belarus', latitude: 53.9045, longitude: 27.5615 }, // ベラルーシ
  { name: 'Kyiv', country: 'Ukraine', latitude: 50.4501, longitude: 30.5234 }, // ウクライナ
  { name: 'Odessa', country: 'Ukraine', latitude: 46.4775, longitude: 30.7326 }, // ウクライナ（黒海）
  { name: 'Saint Helier', country: 'Jersey', latitude: 49.1850, longitude: -2.1055 }, // ジャージー島
  { name: 'George Town', country: 'Cayman Islands', latitude: 19.2889, longitude: -81.3855 }, // ケイマン諸島
  { name: 'Hamilton', country: 'Bermuda', latitude: 32.2952, longitude: -64.7828 }, // バミューダ
  { name: 'Nassau', country: 'Bahamas', latitude: 25.0477, longitude: -77.3554 }, // バハマ
  { name: 'Bridgetown', country: 'Barbados', latitude: 13.1132, longitude: -59.5983 }, // バルバドス
  { name: 'Castries', country: 'Saint Lucia', latitude: 14.0116, longitude: -60.9856 }, // セントルシア
  { name: 'Roseau', country: 'Dominica', latitude: 15.3000, longitude: -61.3833 }, // ドミニカ国
  { name: 'St. George\'s', country: 'Grenada', latitude: 12.0563, longitude: -61.7486 }, // グレナダ
  { name: 'Basseterre', country: 'Saint Kitts and Nevis', latitude: 17.2920, longitude: -62.7350 }, // セントクリストファー・ネーヴィス
  { name: 'Port Vila', country: 'Vanuatu', latitude: -17.7333, longitude: 168.3167 }, // バヌアツ
  { name: 'Suva', country: 'Fiji', latitude: -18.1333, longitude: 178.4333 }, // フィジー
  { name: 'Apia', country: 'Samoa', latitude: -13.8333, longitude: -171.7667 }, // サモア
  { name: 'Nuku\'alofa', country: 'Tonga', latitude: -21.1333, longitude: -175.2000 }, // トンガ
  { name: 'Tarawa', country: 'Kiribati', latitude: 1.4428, longitude: 172.9262 }, // キリバス
  { name: 'Palau (Ngerulmud)', country: 'Palau', latitude: 7.5000, longitude: 134.6250 }, // パラオの首都（行政の中心地）
  { name: 'Saipan', country: 'USA', latitude: 15.1904, longitude: 145.7610 }, // 北マリアナ諸島
    // --- インドネシア (Indonesia) ---
  { name: 'Medan', country: 'Indonesia', latitude: 3.5700, longitude: 98.6800 },
  { name: 'Palembang', country: 'Indonesia', latitude: -2.9900, longitude: 104.7600 },
  { name: 'Makassar', country: 'Indonesia', latitude: -5.1300, longitude: 119.4200 },

  // --- 南アフリカ (South Africa) ---
  { name: 'Johannesburg', country: 'South Africa', latitude: -26.1500, longitude: 28.2300 },
  { name: 'Pretoria', country: 'South Africa', latitude: -25.7400, longitude: 28.1800 },
  { name: 'Bloemfontein', country: 'South Africa', latitude: -29.1000, longitude: 26.3000 },

  // --- パキスタン (Pakistan) ---
  { name: 'Islamabad', country: 'Pakistan', latitude: 33.7380, longitude: 73.0845 },
  { name: 'Quetta', country: 'Pakistan', latitude: 30.1958, longitude: 67.0172 },
  { name: 'Gilgit', country: 'Pakistan', latitude: 35.9208, longitude: 74.3083 },

  // --- コンゴ民主共和国 (DR Congo) ---
  { name: 'Lubumbashi', country: 'DR Congo', latitude: -11.6700, longitude: 27.4700 },
  { name: 'Goma', country: 'DR Congo', latitude: -1.6794, longitude: 29.2336 },
  { name: 'Kisangani', country: 'DR Congo', latitude: 0.5167, longitude: 25.2000 },

  // --- イラン (Iran) ---
  { name: 'Tehran', country: 'Iran', latitude: 35.6961, longitude: 51.4231 },
  { name: 'Bandar Abbas', country: 'Iran', latitude: 27.2167, longitude: 56.3667 },
  { name: 'Rasht', country: 'Iran', latitude: 37.2744, longitude: 49.5889 },

  // --- 日本 (Japan) ---
  { name: 'Kanazawa', country: 'Japan', latitude: 36.5611, longitude: 136.6565 },
  { name: 'Niigata', country: 'Japan', latitude: 37.9161, longitude: 139.0364 },
  { name: 'Kagoshima', country: 'Japan', latitude: 31.5966, longitude: 130.5571 },
  { name: 'Naha', country: 'Japan', latitude: 26.2123, longitude: 127.6792 },
  { name: 'Asahikawa', country: 'Japan', latitude: 43.7600, longitude: 142.3700 },
  { name: 'Kochi', country: 'Japan', latitude: 33.5589, longitude: 133.5314 },
  { name: 'Hiroshima', country: 'Japan', latitude: 34.4000, longitude: 132.4700 },
  { name: 'Okayama', country: 'Japan', latitude: 34.6500, longitude: 133.9167 },
  { name: 'Nagano', country: 'Japan', latitude: 36.6600, longitude: 138.1900 },
  { name: 'Aomori', country: 'Japan', latitude: 40.8200, longitude: 140.7700 },

  // --- アメリカ合衆国 (USA) ---
  { name: 'Chicago', country: 'USA', latitude: 41.8680, longitude: -87.6650 },
  { name: 'Los Angeles', country: 'USA', latitude: 34.0500, longitude: -118.2500 },
  { name: 'Miami', country: 'USA', latitude: 25.7752, longitude: -80.2086 },
  { name: 'Seattle', country: 'USA', latitude: 47.6100, longitude: -122.3300 },
  { name: 'Denver', country: 'USA', latitude: 39.7449, longitude: -104.9645 },
  { name: 'Phoenix', country: 'USA', latitude: 33.4300, longitude: -112.0200 },
  { name: 'Atlanta', country: 'USA', latitude: 33.7920, longitude: -84.3360 },
  { name: 'Boston', country: 'USA', latitude: 42.3736, longitude: -71.0861 },
  { name: 'New Orleans', country: 'USA', latitude: 29.9819, longitude: -90.0963 },
  { name: 'Minneapolis', country: 'USA', latitude: 44.9820, longitude: -93.2560 },

  // --- カナダ (Canada) ---
  { name: 'Calgary', country: 'Canada', latitude: 51.0478, longitude: -114.0690 },
  { name: 'Edmonton', country: 'Canada', latitude: 53.5250, longitude: -113.5150 },
  { name: 'Winnipeg', country: 'Canada', latitude: 49.8954, longitude: -97.1385 },
  { name:　'Ottawa', country: 'Canada', latitude: 45.4100, longitude: -75.7100 },
  { name: 'Halifax', country: 'Canada', latitude: 44.6500, longitude: -63.6000 },

  // --- オーストラリア (Australia) ---
  { name: 'Melbourne', country: 'Australia', latitude: -37.8136, longitude: 144.9631 },
  { name: 'Brisbane', country: 'Australia', latitude: -27.5000, longitude: 153.0000 },
  { name: 'Darwin', country: 'Australia', latitude: -12.4643, longitude: 130.8459 },
  { name: 'Alice Springs', country: 'Australia', latitude: -23.6994, longitude: 133.8800 },
  { name: 'Canberra', country: 'Australia', latitude: -35.3081, longitude: 149.1244 },
  { name: 'McMurdo Station', country: 'Antarctica', latitude: -77.8463, longitude: 166.6683 },
  { name: 'Portland', country: 'USA', latitude: 45.5152, longitude: -122.6784 },
{ name: 'Austin', country: 'USA', latitude: 30.2672, longitude: -97.7431 },
{ name: 'Anchorage', country: 'USA', latitude: 61.2181, longitude: -149.9003 },
{ name: 'New Orleans', country: 'USA', latitude: 29.9511, longitude: -90.0715 },
{ name: 'Ottawa', country: 'Canada', latitude: 45.4215, longitude: -75.6972 },
{ name: 'Quebec City', country: 'Canada', latitude: 46.8139, longitude: -71.2082 },
{ name: 'Halifax', country: 'Canada', latitude: 44.6488, longitude: -63.5752 },
{ name: 'Winnipeg', country: 'Canada', latitude: 49.8951, longitude: -97.1384 },
  { name: 'Edinburgh of the Seven Seas', country: 'Tristan da Cunha', latitude: -37.0675, longitude: -12.3116 },
  { name: 'Hagåtña', country: 'Guam', latitude: 13.4731, longitude: 144.7497 } // グアム
];
