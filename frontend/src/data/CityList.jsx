

const cities = [
    {
        "City": "Kabul",
        "Country": "Afghanistan",
        "Lat": 34.5553,
        "Lon": 69.2075
    },
    {
        "City": "Tirana",
        "Country": "Albania",
        "Lat": 41.3275,
        "Lon": 19.8187
    },
    {
        "City": "Algiers",
        "Country": "Algeria",
        "Lat": 36.7372,
        "Lon": 3.0877
    },
    {
        "City": "Andorra la Vella",
        "Country": "Andorra",
        "Lat": 42.5063,
        "Lon": 1.5218
    },
    {
        "City": "Luanda",
        "Country": "Angola",
        "Lat": -8.8391,
        "Lon": 13.2894
    },

    {
        "City": "Buenos Aires",
        "Country": "Argentina",
        "Lat": -34.6037,
        "Lon": -58.3816
    },
    {
        "City": "Yerevan",
        "Country": "Armenia",
        "Lat": 40.1792,
        "Lon": 44.4991
    },
    {
        "City": "Canberra",
        "Country": "Australia",
        "Lat": -35.282,
        "Lon": 149.1286
    },
    {
        "City": "Vienna",
        "Country": "Austria",
        "Lat": 48.2082,
        "Lon": 16.3738
    },

    {
        "City": "Baku",
        "Country": "Azerbaijan",
        "Lat": 40.4093,
        "Lon": 49.8671
    },
    {
        "City": "Nassau",
        "Country": "Bahamas",
        "Lat": 25.0343,
        "Lon": -77.3963
    },
    {
        "City": "Manama",
        "Country": "Bahrain",
        "Lat": 26.1921,
        "Lon": 50.5354
    },
    {
        "City": "Dhaka",
        "Country": "Bangladesh",
        "Lat": 23.8103,
        "Lon": 90.4125
    },
    {
        "City": "Bridgetown",
        "Country": "Barbados",
        "Lat": 13.1132,
        "Lon": -59.5988
    },
    {
        "City": "Minsk",
        "Country": "Belarus",
        "Lat": 53.9045,
        "Lon": 27.5615
    },
    {
        "City": "Brussels",
        "Country": "Belgium",
        "Lat": 50.8503,
        "Lon": 4.3517
    },
    {
        "City": "Belmopan",
        "Country": "Belize",
        "Lat": 17.2510,
        "Lon": -88.7590
    },
    {
        "City": "Porto-Novo",
        "Country": "Benin",
        "Lat": 6.4963,
        "Lon": 2.6036
    },
    {
        "City": "Thimphu",
        "Country": "Bhutan",
        "Lat": 27.4728,
        "Lon": 89.639
    },

    {
        "City": "Sucre",
        "Country": "Bolivia",
        "Lat": -19.0196,
        "Lon": -65.2619
    },
    {
        "City": "Sarajevo",
        "Country": "Bosnia and Herzegovina",
        "Lat": 43.8563,
        "Lon": 18.4131
    },
    {
        "City": "Gaborone",
        "Country": "Botswana",
        "Lat": -24.6282,
        "Lon": 25.9231
    },
    {
        "City": "Brasília",
        "Country": "Brazil",
        "Lat": -15.8267,
        "Lon": -47.9218
    },
    {
        "City": "Bandar Seri Begawan",
        "Country": "Brunei",
        "Lat": 4.9031,
        "Lon": 114.9403
    },
    {
        "City": "Sofia",
        "Country": "Bulgaria",
        "Lat": 42.6977,
        "Lon": 23.3219
    },
    {
        "City": "Ouagadougou",
        "Country": "Burkina Faso",
        "Lat": 12.3714,
        "Lon": -1.5197
    },
    {
        "City": "Bujumbura",
        "Country": "Burundi",
        "Lat": -3.3614,
        "Lon": 29.3599
    },
    {
        "City": "Phnom Penh",
        "Country": "Cambodia",
        "Lat": 11.5564,
        "Lon": 104.9282
    },
    {
        "City": "Yaoundé",
        "Country": "Cameroon",
        "Lat": 3.848,
        "Lon": 11.5021
    },

    {
        "City": "Ottawa",
        "Country": "Canada",
        "Lat": 45.4215,
        "Lon": -75.6919
    },

    {
        "City": "Bangui",
        "Country": "Central African Republic",
        "Lat": 4.3947,
        "Lon": 18.5582
    },
    {
        "City": "N'Djamena",
        "Country": "Chad",
        "Lat": 12.1348,
        "Lon": 15.0557
    },
    {
        "City": "Santiago",
        "Country": "Chile",
        "Lat": -33.4489,
        "Lon": -70.6693
    },
    {
        "City": "Beijing",
        "Country": "China",
        "Lat": 39.9042,
        "Lon": 116.4074
    },
    {
        "City": "Bogotá",
        "Country": "Colombia",
        "Lat": 4.7109,
        "Lon": -74.0721
    },

    {
        "City": "Brazzaville",
        "Country": "Congo",
        "Lat": -4.2634,
        "Lon": 15.2429
    },
    {
        "City": "Kinshasa",
        "Country": "Congo (Democratic Republic)",
        "Lat": -4.4419,
        "Lon": 15.2663
    },
    {
        "City": "San José",
        "Country": "Costa Rica",
        "Lat": 9.9281,
        "Lon": -84.0907
    },

    {
        "City": "Yamoussoukro",
        "Country": "Côte d'Ivoire",
        "Lat": 6.8274,
        "Lon": -5.2893
    },
    {
        "City": "Zagreb",
        "Country": "Croatia",
        "Lat": 45.8150,
        "Lon": 15.9819
    },
    {
        "City": "Havana",
        "Country": "Cuba",
        "Lat": 23.1136,
        "Lon": -82.3666
    },
    {
        "City": "Nicosia",
        "Country": "Cyprus",
        "Lat": 35.1856,
        "Lon": 33.3823
    },
    {
        "City": "Prague",
        "Country": "Czech Republic",
        "Lat": 50.0755,
        "Lon": 14.4378
    },
    {
        "City": "Copenhagen",
        "Country": "Denmark",
        "Lat": 55.6761,
        "Lon": 12.5683
    },
    {
        "City": "Djibouti",
        "Country": "Djibouti",
        "Lat": 11.589,
        "Lon": 43.145
    },
    {
        "City": "Roseau",
        "Country": "Dominica",
        "Lat": 15.301,
        "Lon": -61.388
    },
    {
        "City": "Santo Domingo",
        "Country": "Dominican Republic",
        "Lat": 18.4861,
        "Lon": -69.9312
    },
    {
        "City": "Dili",
        "Country": "East Timor",
        "Lat": -8.5586,
        "Lon": 125.5781
    },

    {
        "City": "Quito",
        "Country": "Ecuador",
        "Lat": -0.1807,
        "Lon": -78.4678
    },
    {
        "City": "Cairo",
        "Country": "Egypt",
        "Lat": 30.0444,
        "Lon": 31.2357
    },
    {
        "City": "San Salvador",
        "Country": "El Salvador",
        "Lat": 13.6938,
        "Lon": -89.2182
    },
    {
        "City": "Malabo",
        "Country": "Equatorial Guinea",
        "Lat": 3.7504,
        "Lon": 8.7371
    },
    {
        "City": "Asmara",
        "Country": "Eritrea",
        "Lat": 15.3229,
        "Lon": 38.9250
    },
    {
        "City": "Tallinn",
        "Country": "Estonia",
        "Lat": 59.4370,
        "Lon": 24.7536
    },
    {
        "City": "Mbabane",
        "Country": "Eswatini",
        "Lat": -26.3054,
        "Lon": 31.1367
    },
    {
        "City": "Addis Ababa",
        "Country": "Ethiopia",
        "Lat": 9.0086,
        "Lon": 38.7613
    },

    {
        "City": "Suva",
        "Country": "Fiji",
        "Lat": -18.1248,
        "Lon": 178.4501
    },
    {
        "City": "Helsinki",
        "Country": "Finland",
        "Lat": 60.1695,
        "Lon": 24.9354
    },

    {
        "City": "Paris",
        "Country": "France",
        "Lat": 48.8566,
        "Lon": 2.3522
    },
    {
        "City": "Libreville",
        "Country": "Gabon",
        "Lat": 0.3922,
        "Lon": 9.4536
    },
    {
        "City": "Banjul",
        "Country": "Gambia",
        "Lat": 13.4550,
        "Lon": -16.5790
    },
    {
        "City": "Tbilisi",
        "Country": "Georgia",
        "Lat": 41.7151,
        "Lon": 44.8271
    },
    {
        "City": "Berlin",
        "Country": "Germany",
        "Lat": 52.5200,
        "Lon": 13.4050
    },
    {
        "City": "Accra",
        "Country": "Ghana",
        "Lat": 5.6037,
        "Lon": -0.1870
    },
    {
        "City": "Athens",
        "Country": "Greece",
        "Lat": 37.9838,
        "Lon": 23.7275
    },

    {
        "City": "Guatemala City",
        "Country": "Guatemala",
        "Lat": 14.6349,
        "Lon": -90.5069
    },
    {
        "City": "Conakry",
        "Country": "Guinea",
        "Lat": 9.6412,
        "Lon": -13.5784
    },

    {
        "City": "Bissau",
        "Country": "Guinea-Bissau",
        "Lat": 11.8640,
        "Lon": -15.5984
    },
    {
        "City": "Georgetown",
        "Country": "Guyana",
        "Lat": 6.8013,
        "Lon": -58.1551
    },
    {
        "City": "Port-au-Prince",
        "Country": "Haiti",
        "Lat": 18.5944,
        "Lon": -72.3074
    },
    {
        "City": "Tegucigalpa",
        "Country": "Honduras",
        "Lat": 14.0723,
        "Lon": -87.1921
    },
    {
        "City": "Budapest",
        "Country": "Hungary",
        "Lat": 47.4979,
        "Lon": 19.0402
    },
    {
        "City": "Reykjavík",
        "Country": "Iceland",
        "Lat": 64.1466,
        "Lon": -21.9426
    },
    {
        "City": "New Delhi",
        "Country": "India",
        "Lat": 28.6139,
        "Lon": 77.2090
    },
    {
        "City": "Jakarta",
        "Country": "Indonesia",
        "Lat": -6.2088,
        "Lon": 106.8456
    },
    {
        "City": "Tehran",
        "Country": "Iran",
        "Lat": 35.6892,
        "Lon": 51.3890
    },
    {
        "City": "Baghdad",
        "Country": "Iraq",
        "Lat": 33.3152,
        "Lon": 44.3661
    },

    {
        "City": "Dublin",
        "Country": "Ireland",
        "Lat": 53.3498,
        "Lon": -6.2603
    },
    {
        "City": "Jerusalem",
        "Country": "Palestine",
        "Lat": 31.7683,
        "Lon": 35.2137
    },
    {
        "City": "Rome",
        "Country": "Italy",
        "Lat": 41.9028,
        "Lon": 12.4964
    },
    {
        "City": "Kingston",
        "Country": "Jamaica",
        "Lat": 17.9712,
        "Lon": -76.7926
    },
    {
        "City": "Tokyo",
        "Country": "Japan",
        "Lat": 35.6895,
        "Lon": 139.6917
    },
    {
        "City": "Amman",
        "Country": "Jordan",
        "Lat": 31.9454,
        "Lon": 35.9284
    },
    {
        "City": "Nur-Sultan",
        "Country": "Kazakhstan",
        "Lat": 51.1605,
        "Lon": 71.4704
    },
    {
        "City": "Nairobi",
        "Country": "Kenya",
        "Lat": -1.2864,
        "Lon": 36.8172
    },

    {
        "City": "Pristina",
        "Country": "Kosovo",
        "Lat": 42.6629,
        "Lon": 21.1655
    },

    {
        "City": "Kuwait City",
        "Country": "Kuwait",
        "Lat": 29.3759,
        "Lon": 47.9774
    },
    {
        "City": "Bishkek",
        "Country": "Kyrgyzstan",
        "Lat": 42.8746,
        "Lon": 74.5698
    },
    {
        "City": "Vientiane",
        "Country": "Laos",
        "Lat": 17.9757,
        "Lon": 102.6331
    },
    {
        "City": "Riga",
        "Country": "Latvia",
        "Lat": 56.9496,
        "Lon": 24.1052
    },
    {
        "City": "Beirut",
        "Country": "Lebanon",
        "Lat": 33.8938,
        "Lon": 35.5018
    },
    {
        "City": "Maseru",
        "Country": "Lesotho",
        "Lat": -29.3142,
        "Lon": 27.4830
    },
    {
        "City": "Monrovia",
        "Country": "Liberia",
        "Lat": 6.2907,
        "Lon": -10.7605
    },
    {
        "City": "Tripoli",
        "Country": "Libya",
        "Lat": 32.8872,
        "Lon": 13.1913
    },
    {
        "City": "Vaduz",
        "Country": "Liechtenstein",
        "Lat": 47.1410,
        "Lon": 9.5209
    },
    {
        "City": "Vilnius",
        "Country": "Lithuania",
        "Lat": 54.6872,
        "Lon": 25.2797
    },

    {
        "City": "Luxembourg",
        "Country": "Luxembourg",
        "Lat": 49.6116,
        "Lon": 6.1319
    },
    {
        "City": "Skopje",
        "Country": "North Macedonia",
        "Lat": 42.0032,
        "Lon": 21.4539
    },
    {
        "City": "Antananarivo",
        "Country": "Madagascar",
        "Lat": -18.8792,
        "Lon": 47.5079
    },
    {
        "City": "Lilongwe",
        "Country": "Malawi",
        "Lat": -13.9626,
        "Lon": 33.7741
    },
    {
        "City": "Kuala Lumpur",
        "Country": "Malaysia",
        "Lat": 3.139,
        "Lon": 101.6869
    },
    {
        "City": "Malé",
        "Country": "Maldives",
        "Lat": 4.1755,
        "Lon": 73.5093
    },
    {
        "City": "Bamako",
        "Country": "Mali",
        "Lat": 12.6392,
        "Lon": -8.0029
    },
    {
        "City": "Valletta",
        "Country": "Malta",
        "Lat": 35.8989,
        "Lon": 14.5146
    },

    {
        "City": "Nouakchott",
        "Country": "Mauritania",
        "Lat": 18.0735,
        "Lon": -15.9582
    },

    {
        "City": "Port Louis",
        "Country": "Mauritius",
        "Lat": -20.1654,
        "Lon": 57.4896
    },
    {
        "City": "Mexico City",
        "Country": "Mexico",
        "Lat": 19.4326,
        "Lon": -99.1332
    },

    {
        "City": "Chisinau",
        "Country": "Moldova",
        "Lat": 47.0105,
        "Lon": 28.8638
    },
    {
        "City": "Monaco",
        "Country": "Monaco",
        "Lat": 43.7384,
        "Lon": 7.4246
    },
    {
        "City": "Ulaanbaatar",
        "Country": "Mongolia",
        "Lat": 47.8864,
        "Lon": 106.9057
    },
    {
        "City": "Podgorica",
        "Country": "Montenegro",
        "Lat": 42.4304,
        "Lon": 19.2594
    },
    {
        "City": "Rabat",
        "Country": "Morocco",
        "Lat": 34.0209,
        "Lon": -6.8415
    },
    {
        "City": "Maputo",
        "Country": "Mozambique",
        "Lat": -25.9653,
        "Lon": 32.5892
    },
    {
        "City": "Naypyidaw",
        "Country": "Myanmar",
        "Lat": 19.7633,
        "Lon": 96.0785
    },

    {
        "City": "Windhoek",
        "Country": "Namibia",
        "Lat": -22.5597,
        "Lon": 17.0832
    },
    {
        "City": "Yaren",
        "Country": "Nauru",
        "Lat": -0.5477,
        "Lon": 166.9209
    },
    {
        "City": "Kathmandu",
        "Country": "Nepal",
        "Lat": 27.7172,
        "Lon": 85.324
    },
    {
        "City": "Amsterdam",
        "Country": "Netherlands",
        "Lat": 52.3676,
        "Lon": 4.9041
    },
    {
        "City": "Wellington",
        "Country": "New Zealand",
        "Lat": -41.2865,
        "Lon": 174.7762
    },
    {
        "City": "Managua",
        "Country": "Nicaragua",
        "Lat": 12.114,
        "Lon": -86.2362
    },
    {
        "City": "Niamey",
        "Country": "Niger",
        "Lat": 13.5127,
        "Lon": 2.1126
    },
    {
        "City": "Abuja",
        "Country": "Nigeria",
        "Lat": 9.0579,
        "Lon": 7.4951
    },
    {
        "City": "Pyongyang",
        "Country": "North Korea",
        "Lat": 39.0392,
        "Lon": 125.7625
    },
    {
        "City": "Oslo",
        "Country": "Norway",
        "Lat": 59.9139,
        "Lon": 10.7522
    },

    {
      "City": "Muscat",
      "Country": "Oman",
      "Lat": 23.6105,
      "Lon": 58.5922
  }
  ,
  {
      "City": "Islamabad",
      "Country": "Pakistan",
      "Lat": 33.6844,
      "Lon": 73.0479
  }
  ,
  {
      "City": "Ngerulmud",
      "Country": "Palau",
      "Lat": 7.5005,
      "Lon": 134.6248
  }

  ,
  {
      "City": "Panama City",
      "Country": "Panama",
      "Lat": 8.9824,
      "Lon": -79.5199
  }

  ,
  {
      "City": "Port Moresby",
      "Country": "Papua New Guinea",
      "Lat": -9.478,
      "Lon": 147.149
  }

  ,
  {
      "City": "Asunción",
      "Country": "Paraguay",
      "Lat": -25.2637,
      "Lon": -57.5759
  }

  ,
  {
      "City": "Lima",
      "Country": "Peru",
      "Lat": -12.0464,
      "Lon": -77.0428
  }

  ,
  {
      "City": "Manila",
      "Country": "Philippines",
      "Lat": 14.5995,
      "Lon": 120.9842
  }

  ,
  {
      "City": "Warsaw",
      "Country": "Poland",
      "Lat": 52.2297,
      "Lon": 21.0122
  }

  ,
  {
      "City": "Lisbon",
      "Country": "Portugal",
      "Lat": 38.7223,
      "Lon": -9.1393
  },


  {
      "City": "Doha",
      "Country": "Qatar",
      "Lat": 25.2769,
      "Lon": 51.5201
  }

  ,
  {
      "City": "Bucharest",
      "Country": "Romania",
      "Lat": 44.4268,
      "Lon": 26.1025
  }

  ,
  {
      "City": "Moscow",
      "Country": "Russia",
      "Lat": 55.7558,
      "Lon": 37.6176
  }

  ,
  {
      "City": "Kigali",
      "Country": "Rwanda",
      "Lat": -1.9441,
      "Lon": 30.0619
  },


  {
      "City": "Riyadh",
      "Country": "Saudi Arabia",
      "Lat": 24.7136,
      "Lon": 46.6753
  },

  {
      "City": "Dakar",
      "Country": "Senegal",
      "Lat": 14.6928,
      "Lon": -17.4467
  }

  ,
  {
      "City": "Belgrade",
      "Country": "Serbia",
      "Lat": 44.7866,
      "Lon": 20.4489
  }

  ,

  {
      "City": "Freetown",
      "Country": "Sierra Leone",
      "Lat": 8.484,
      "Lon": -13.2284
  }

  ,
  {
      "City": "Singapore",
      "Country": "Singapore",
      "Lat": 1.3521,
      "Lon": 103.8198
  }

  ,
  {
      "City": "Bratislava",
      "Country": "Slovakia",
      "Lat": 48.1486,
      "Lon": 17.1077
  }
  // Latitude: 48.1486° N
  // Longitude: 17.1077° E
,
  {
      "City": "Ljubljana",
      "Country": "Slovenia",
      "Lat": 46.0569,
      "Lon": 14.5058
  }
  // Latitude: 46.0569° N
  // Longitude: 14.5058° E
  ,

  {
      "City": "Mogadishu",
      "Country": "Somalia",
      "Lat": 2.0469,
      "Lon": 45.3182
  },
  // Latitude: 2.0469° N
  // Longitude: 45.3182° E

  {
    "City": "Pretoria",
    "Country": "South Africa",
    "Lat": -25.7469,
    "Lon": 28.1879
}
// Latitude: 25.7469° S
// Longitude: 28.1879° E
,
{
    "City": "Bloemfontein",
    "Country": "South Africa",
    "Lat": -29.0852,
    "Lon": 26.1596
}
// Latitude: 29.0852° S
// Longitude: 26.1596° E
,
{
    "City": "Cape Town",
    "Country": "South Africa",
    "Lat": -33.9249,
    "Lon": 18.4241
}
// Latitude: 33.9249° S
// Longitude: 18.4241° E
,
{
    "City": "Seoul",
    "Country": "South Korea",
    "Lat": 37.5665,
    "Lon": 126.978
}
// Latitude: 37.5665° N
// Longitude: 126.978° E
,
{
    "City": "Juba",
    "Country": "South Sudan",
    "Lat": 4.8594,
    "Lon": 31.5712
}
// Latitude: 4.8594° N
// Longitude: 31.5712° E
,
{
    "City": "Madrid",
    "Country": "Spain",
    "Lat": 40.4168,
    "Lon": -3.7038
}
// Latitude: 40.4168° N
// Longitude: 3.7038° W
,
{
    "City": "Kotte",
    "Country": "Sri Lanka",
    "Lat": 6.9271,
    "Lon": 79.8612
}
// Latitude: 6.9271° N
// Longitude: 79.8612° E
,
{
    "City": "Khartoum",
    "Country": "Sudan",
    "Lat": 15.5007,
    "Lon": 32.5599
}
// Latitude: 15.5007° N
// Longitude: 32.5599° E
,
{
    "City": "Paramaribo",
    "Country": "Suriname",
    "Lat": 5.852,
    "Lon": -55.2038
}
// Latitude: 5.852° N
// Longitude: 55.2038° W
,
{
    "City": "Stockholm",
    "Country": "Sweden",
    "Lat": 59.3293,
    "Lon": 18.0686
}
// Latitude: 59.3293° N
// Longitude: 18.0686° E
,
{
    "City": "Bern",
    "Country": "Switzerland",
    "Lat": 46.948,
    "Lon": 7.4474
},
// Latitude: 46.948° N
// Longitude: 7.4474° E

{
  "City": "Damascus",
  "Country": "Syria",
  "Lat": 33.5138,
  "Lon": 36.2765
},
{
  "City": "Taipei",
  "Country": "Taiwan",
  "Lat": 25.0330,
  "Lon": 121.5654
},
{
  "City": "Dushanbe",
  "Country": "Tajikistan",
  "Lat": 38.5737,
  "Lon": 68.7738
},
{
  "City": "Dodoma",
  "Country": "Tanzania",
  "Lat": -6.1630,
  "Lon": 35.7516
},
{
  "City": "Bangkok",
  "Country": "Thailand",
  "Lat": 13.7563,
  "Lon": 100.5018
},
{
  "City": "Lomé",
  "Country": "Togo",
  "Lat": 6.1750,
  "Lon": 1.2314
},

{
  "City": "Tunis",
  "Country": "Tunisia",
  "Lat": 36.8065,
  "Lon": 10.1815
},
{
  "City": "Ankara",
  "Country": "Turkey",
  "Lat": 39.9334,
  "Lon": 32.8597
},

    {
      "City": "Ashgabat",
      "Country": "Turkmenistan",
      "Lat": 37.9601,
      "Lon": 58.3261
  },

  {
      "City": "Kampala",
      "Country": "Uganda",
      "Lat": 0.3476,
      "Lon": 32.5825
  },
  {
      "City": "Kiev",
      "Country": "Ukraine",
      "Lat": 50.4501,
      "Lon": 30.5234
  },
  {
      "City": "Abu Dhabi",
      "Country": "United Arab Emirates",
      "Lat": 24.4539,
      "Lon": 54.3773
  },
  {
      "City": "London",
      "Country": "United Kingdom",
      "Lat": 51.5074,
      "Lon": -0.1278
  },
  {
      "City": "Washington, D.C.",
      "Country": "USA",
      "Lat": 38.8951,
      "Lon": -77.0364
  },
  {
      "City": "Montevideo",
      "Country": "Uruguay",
      "Lat": -34.9011,
      "Lon": -56.1645
  },
  {
      "City": "Tashkent",
      "Country": "Uzbekistan",
      "Lat": 41.2995,
      "Lon": 69.2401
  },

  {
      "City": "Vatican City",
      "Country": "Vatican City",
      "Lat": 41.9029,
      "Lon": 12.4534
  }

    ,{
      "City": "Caracas",
      "Country": "Venezuela",
      "Lat": 10.4806,
      "Lon": -66.9036
  },
  {
      "City": "Hanoi",
      "Country": "Vietnam",
      "Lat": 21.0285,
      "Lon": 105.8542
  },
  {
      "City": "Sana'a",
      "Country": "Yemen",
      "Lat": 15.3694,
      "Lon": 44.1910
  },
  {
      "City": "Lusaka",
      "Country": "Zambia",
      "Lat": -15.4167,
      "Lon": 28.2833
  },
  {
      "City": "Harare",
      "Country": "Zimbabwe",
      "Lat": -17.8252,
      "Lon": 31.0335
  },
  {
    "City": "Brazzaville",
    "Country": "Congo",
    "Lat": -4.2634,
    "Lon": 15.2429
},
{
    "City": "Kinshasa",
    "Country": "Congo (Democratic Republic)",
    "Lat": -4.4419,
    "Lon": 15.2663
},
{
        "City": "Prague",
        "Country": "Czech Republic",
        "Lat": 50.0755,
        "Lon": 14.4378
    },
    {
        "City": "Nuuk",
        "Country": "Greenland",
        "Lat": 64.1836,
        "Lon": -51.7214
    },
    {
        "City": "Washington",
        "Country": "USA",
        "Lat": 38.9072,
        "Lon": -77.0369
    },
    {
        "City": "San Juan",
        "Country": "Puerto Rico",
        "Lat": 18.4655,
        "Lon": -66.1057
    },
    {
        "City": "Paramaribo",
        "Country": "Suriname",
        "Lat": 5.852,
        "Lon": -55.2038
    },
    {
        "City": "Georgetown",
        "Country": "Guyana",
        "Lat": 6.8013,
        "Lon": -58.1551
    },
    {
        "City": "Cayenne",
        "Country": "French Guiana",
        "Lat": 4.922,
        "Lon": -52.3233
    },
    {
        "City": "Kinshasa",
        "Country": "Democratic Republic of the Congo",
        "Lat": -4.4419,
        "Lon": 15.2663
    },
    {
        "City": "Port of Spain",
        "Country": "Trinidad and Tobago",
        "Lat": 10.6549,
        "Lon": -61.5019
    },
    {
        "City": "El Aaiún",
        "Country": "Western Sahara",
        "Lat": 27.1536,
        "Lon": -13.2033
    },
    {
        "City": "Yamoussoukro",
        "Country": "Côte d'Ivoire",
        "Lat": 6.827,
        "Lon": -5.2893
    },
    {
        "City": "Nouméa",
        "Country": "New Caledonia",
        "Lat": -22.2758,
        "Lon": 166.458
    },
    {
        "City": "Honiara",
        "Country": "Solomon Islands",
        "Lat": -9.4456,
        "Lon": 159.9729
    },
    {
        "City": "Port Vila",
        "Country": "Vanuatu",
        "Lat": -17.7333,
        "Lon": 168.3273
    }
  ];
  

  export default cities;
