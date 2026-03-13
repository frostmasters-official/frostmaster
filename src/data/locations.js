// Specific data for each location to ensure uniqueness
const locationDetails = {
  Eranakulam: {
    gandhipuram: {
      name: "Gandhipuram",
      landmarks: "Cross Cut Road, Town Bus Stand, Power House, 100 Feet Road",
      relevance:
        "As the commercial heart of Eranakulam, Gandhipuram is busy and demands fast service. We cover all streets near the central bus terminal and commercial complexes.",
      metaSuffix: "near Cross Cut Road & Bus Stand",
    },
    "rs-puram": {
      name: "RS Puram",
      landmarks: "DB Road, Cowley Brown Road, Brookefields Mall, TV Samy Road",
      relevance:
        "Serving the upscale residents of RS Puram. We specialize in premium appliance care for the villas and apartments in this prestigious neighborhood.",
      metaSuffix: "DB Road & TV Samy Road",
    },
    peelamedu: {
      name: "Peelamedu",
      landmarks: "PSG Tech, Avinashi Road, Fun Republic Mall, Nava India",
      relevance:
        "Home to educational institutions and IT parts. We provide student-friendly and rapid repair services across Peelamedu and Avinashi Road.",
      metaSuffix: "near PSG & Fun Mall",
    },
    "saibaba-colony": {
      name: "Saibaba Colony",
      landmarks: "NSR Road, Ganga Hospital, Bharati Park, Alagesan Road",
      relevance:
        "A purely residential haven. Our technicians are stationed near NSR Road to attend to family households quickly.",
      metaSuffix: "NSR Road & Bharati Park",
    },
    singanallur: {
      name: "Singanallur",
      landmarks: "Singanallur Bus Stand, Boat House, Trichy Road, SIHS Colony",
      relevance:
        "Covering the vast residential areas around the Singanallur lake and bus stand. We are the trusted local experts here.",
      metaSuffix: "near Bus Stand & Trichy Road",
    },
    ukkadam: {
      name: "Ukkadam",
      landmarks:
        "Ukkadam Bus Stand, Fish Market, Sungam Bypass, Oppanakara Street",
      relevance:
        "In the busy trade center of Ukkadam, we provide robust repair solutions for both shops and homes nearby.",
      metaSuffix: "near Bus Stand & Market",
    },
    "town-hall": {
      name: "Town Hall",
      landmarks:
        "Big Bazaar Street, Oppanakara Street, Manikoondu, Railway Station",
      relevance:
        "The historic center of the city. We navigate the busy streets of Town Hall to bring expert service to your doorstep.",
      metaSuffix: "Big Bazaar St & Manikoondu",
    },
    saravanampatti: {
      name: "Saravanampatti",
      landmarks: "KCT Tech Park, CHIL SEZ, Sathy Road, Prozone Mall",
      relevance:
        "For the IT hub of Eranakulam, we offer modern appliance services matching the fast-paced lifestyle of Saravanampatti residents.",
      metaSuffix: "near KCT & Sathy Road",
    },
    kalapatti: {
      name: "Kalapatti",
      landmarks: "Kalapatti Main Road, Sharp Nagar, Airport Road",
      relevance:
        "Serving the rapidly growing residential layous of Kalapatti. Fast response times for the new apartment complexes.",
      metaSuffix: "Kalapatti Main Road",
    },
    thudiyalur: {
      name: "Thudiyalur",
      landmarks: "Mettupalayam Road, Vadamadurai, Thudiyalur Bus Stop",
      relevance:
        "Covering the northern corridor. We are the top choice for washing machine and AC repairs in Thudiyalur.",
      metaSuffix: "Mettupalayam Road",
    },
    kovaipudur: {
      name: "Kovaipudur",
      landmarks: "CS Academy, Palakkad Main Road, 'Little Ooty' areas",
      relevance:
        "Known as Little Ooty, Kovaipudur's pleasant weather still needs working appliances. We service this entire township.",
      metaSuffix: "near CS Academy",
    },
    sundarapuram: {
      name: "Sundarapuram",
      landmarks: "Pollachi Road, Eachanari Temple, SIDCO",
      relevance:
        "Serving the industrial and residential mix of Sundarapuram. We are experts in handling rough-use appliances.",
      metaSuffix: "Pollachi Road & SIDCO",
    },
    podanur: {
      name: "Podanur",
      landmarks: "Podanur Junction, Railway Station, Nanjundapuram",
      relevance:
        "One of the oldest railway hubs. We provide reliable service to the railway colony and surrounding areas.",
      metaSuffix: "near Railway Station",
    },
    kuniyamuthur: {
      name: "Kuniyamuthur",
      landmarks: "Palakkad Road, Krishna College, Sugunapuram",
      relevance:
        "A major residential hub on Palakkad Road. We ensure Kuniyamuthur residents get same-day repairs.",
      metaSuffix: "Palakkad Road",
    },
    vadavalli: {
      name: "Vadavalli",
      landmarks: "Marudamalai Road, Mullai Nagar, Bharathiar University",
      relevance:
        "At the foothills of Marudamalai, Vadavalli homes rely on us for keeping their geysers and fridges running.",
      metaSuffix: "Marudamalai Road",
    },
    ganapathy: {
      name: "Ganapathy",
      landmarks: "Sathy Road, Textool Bridge, Gandhipuram Extension",
      relevance:
        "A densely populated area where we have a high technician density. Quickest response for Ganapathy residents.",
      metaSuffix: "Sathy Road",
    },
    "hope-college": {
      name: "Hope College",
      landmarks: "Avinashi Road, Tidal Park, Peelamedu",
      relevance:
        "Serving the IT professionals living around Hope College and Tidal Park. Evening and weekend slots available.",
      metaSuffix: "near Tidal Park",
    },
    "race-course": {
      name: "Race Course",
      landmarks: "Race Course Road, Thomas Park, Government Arts College",
      relevance:
        "Premium service for the elite residential circle of Race Course. We ensure silence and cleanliness in our work.",
      metaSuffix: "Race Course Road",
    },
    "avinashi-road": {
      name: "Avinashi Road",
      landmarks: "KMCH, Airport, CIT, Hopes",
      relevance:
        "Covering the lifeline of Eranakulam. From Uppilipalayam to the Airport, we are just a drive away.",
      metaSuffix: "KMCH & Airport",
    },
    ondipudur: {
      name: "Ondipudur",
      landmarks: "Trichy Road, Olr Railway Bridge, Pattanam",
      relevance:
        "Serving the eastern manufacturing and residential belt of Ondipudur.",
      metaSuffix: "Trichy Road",
    },
    neelambur: {
      name: "Neelambur",
      landmarks: "L&T Bypass, Kathir College, Salem Road",
      relevance:
        "Even on the outskirts like Neelambur, our mobile service units ensure you are not left stranded.",
      metaSuffix: "Salem Road Bypass",
    },
    kurichi: {
      name: "Kurichi",
      landmarks: "Pollachi Road, Podanur Main Road, SIDCO Estate",
      relevance:
        "Servicing the Kurichi housing unit and surrounding industrial colonies.",
      metaSuffix: "Pollachi Road",
    },
    malumichampatti: {
      name: "Malumichampatti",
      landmarks: "Pollachi Main Road, Hindusthan College",
      relevance:
        "Expanding our reach to Malumichampatti to serve the college hostels and homes.",
      metaSuffix: "Pollachi Road",
    },
    madukkarai: {
      name: "Madukkarai",
      landmarks: "ACC Cement Works, Palakkad Road, Quarry",
      relevance:
        "Providing rugged and reliable service in the industrial town of Madukkarai.",
      metaSuffix: "near ACC",
    },
    annur: {
      name: "Annur",
      landmarks: "Sathy Road, Annur Bus Stand",
      relevance:
        "Our most northern service point. We cover Annur town and nearby villages.",
      metaSuffix: "Sathy Road",
    },
    bilichi: {
      name: "Bilichi",
      landmarks: "Bilichi Main Road, Sathy Road",
      relevance:
        "We provide washing machine, AC and fridge repair across Bilichi and surrounding localities.",
      metaSuffix: "Sathy Road",
    },
    bommanampalayam: {
      name: "Bommanampalayam",
      landmarks: "Pollachi Road, Bommanampalayam",
      relevance:
        "Serving Bommanampalayam with same-day appliance repair and doorstep service.",
      metaSuffix: "Pollachi Road",
    },
    chokkampudur: {
      name: "Chokkampudur",
      landmarks: "Chokkampudur, Trichy Road",
      relevance:
        "Residents of Chokkampudur rely on us for AC, washing machine and fridge repair at their doorstep.",
      metaSuffix: "Trichy Road",
    },
    cherannagar: {
      name: "Cherannagar",
      landmarks: "Cherannagar, Avinashi Road",
      relevance:
        "We cover Cherannagar with expert appliance service for all major brands.",
      metaSuffix: "Avinashi Road",
    },
    chettipalayam: {
      name: "Chettipalayam",
      landmarks: "Chettipalayam, Palakkad Road",
      relevance:
        "Doorstep washing machine, AC and fridge repair in Chettipalayam and nearby areas.",
      metaSuffix: "Palakkad Road",
    },
    chinnavedampatti: {
      name: "Chinnavedampatti",
      landmarks: "Chinnavedampatti, Mettupalayam Road",
      relevance:
        "Serving Chinnavedampatti with reliable home appliance repair and same-day service.",
      metaSuffix: "Mettupalayam Road",
    },
    edayarpalayam: {
      name: "Edayarpalayam",
      landmarks: "Edayarpalayam, Sathy Road",
      relevance:
        "Our technicians serve Edayarpalayam for washing machine, fridge and AC repairs.",
      metaSuffix: "Sathy Road",
    },
    ettimadai: {
      name: "Ettimadai",
      landmarks: "Ettimadai, Palakkad Road, Amrita University",
      relevance:
        "We extend our service to Ettimadai and the educational corridor with prompt repairs.",
      metaSuffix: "Palakkad Road",
    },
    "gandhi-park": {
      name: "Gandhi Park",
      landmarks: "Gandhi Park, Town Hall, Big Bazaar Street",
      relevance:
        "Central Eranakulam service at Gandhi Park area for all appliance repairs.",
      metaSuffix: "Town Hall",
    },
    "gandhimaa-nagar": {
      name: "Gandhimaa Nagar",
      landmarks: "Gandhimaa Nagar, Avinashi Road",
      relevance:
        "Gandhimaa Nagar residents get same-day washing machine, AC and fridge service from us.",
      metaSuffix: "Avinashi Road",
    },
    ganesapuram: {
      name: "Ganesapuram",
      landmarks: "Ganesapuram, Pollachi Road",
      relevance:
        "We provide doorstep appliance repair across Ganesapuram and adjoining areas.",
      metaSuffix: "Pollachi Road",
    },
    "gn-mills": {
      name: "GN Mills",
      landmarks: "GN Mills, Sivananda Colony",
      relevance:
        "Serving GN Mills and surrounding colonies with expert AC, washing machine and fridge repair.",
      metaSuffix: "GN Mills area",
    },
    gudalur: {
      name: "Gudalur",
      landmarks: "Gudalur, Mettupalayam Road",
      relevance:
        "We cover Gudalur with mobile service units for home appliance repair.",
      metaSuffix: "Mettupalayam Road",
    },
    idigarai: {
      name: "Idigarai",
      landmarks: "Idigarai, Pollachi Road",
      relevance:
        "Idigarai gets our same-day appliance service for washing machine, AC and fridge.",
      metaSuffix: "Pollachi Road",
    },
    "iob-colony": {
      name: "IOB Colony",
      landmarks: "IOB Colony, RS Puram",
      relevance:
        "IOB Colony and nearby areas are served by our local technicians for all appliance repairs.",
      metaSuffix: "RS Puram area",
    },
    kalampalayam: {
      name: "Kalampalayam",
      landmarks: "Kalampalayam, Pollachi Road",
      relevance:
        "We provide washing machine, AC and fridge repair in Kalampalayam and surrounding localities.",
      metaSuffix: "Pollachi Road",
    },
    kanuvai: {
      name: "Kanuvai",
      landmarks: "Kanuvai, Sathy Road",
      relevance:
        "Kanuvai residents can book same-day appliance repair with Frost Masters.",
      metaSuffix: "Sathy Road",
    },
    karumbukadai: {
      name: "Karumbukadai",
      landmarks: "Karumbukadai, Palakkad Road",
      relevance:
        "Serving Karumbukadai with doorstep AC, washing machine and fridge repair.",
      metaSuffix: "Palakkad Road",
    },
    kavundampalayam: {
      name: "Kavundampalayam",
      landmarks: "Kavundampalayam, Mettupalayam Road",
      relevance:
        "Kavundampalayam is covered by our expert technicians for all home appliance repairs.",
      metaSuffix: "Mettupalayam Road",
    },
    keeranatham: {
      name: "Keeranatham",
      landmarks: "Keeranatham, Sathy Road, IT Park",
      relevance:
        "IT corridor at Keeranatham gets our professional appliance service and same-day repair.",
      metaSuffix: "Sathy Road",
    },
    kurumbapalayam: {
      name: "Kurumbapalayam",
      landmarks: "Kurumbapalayam, Pollachi Road",
      relevance:
        "We serve Kurumbapalayam with washing machine, fridge and AC repair at your doorstep.",
      metaSuffix: "Pollachi Road",
    },
    "lawley-road": {
      name: "Lawley Road",
      landmarks: "Lawley Road, RS Puram, DB Road",
      relevance:
        "Lawley Road and RS Puram extension get premium appliance service from our team.",
      metaSuffix: "Lawley Road",
    },
    madampatti: {
      name: "Madampatti",
      landmarks: "Madampatti, Sathy Road",
      relevance:
        "Madampatti residents trust us for AC, washing machine and fridge repair and maintenance.",
      metaSuffix: "Sathy Road",
    },
    maniakarampalayam: {
      name: "Maniakarampalayam",
      landmarks: "Maniakarampalayam, Pollachi Road",
      relevance:
        "We cover Maniakarampalayam with same-day doorstep appliance repair.",
      metaSuffix: "Pollachi Road",
    },
    nanjundapuram: {
      name: "Nanjundapuram",
      landmarks: "Nanjundapuram, Podanur Road",
      relevance:
        "Nanjundapuram and Podanur area get our reliable washing machine, AC and fridge service.",
      metaSuffix: "Podanur Road",
    },
    "navavoor-pirivu": {
      name: "Navavoor Pirivu",
      landmarks: "Navavoor Pirivu, Mettupalayam Road",
      relevance:
        "We extend service to Navavoor Pirivu for all home appliance repairs.",
      metaSuffix: "Mettupalayam Road",
    },
    neelikonampalayam: {
      name: "Neelikonampalayam",
      landmarks: "Neelikonampalayam, Pollachi Road",
      relevance:
        "Neelikonampalayam is served by our mobile technicians for appliance repair.",
      metaSuffix: "Pollachi Road",
    },
    "nggo-colony": {
      name: "NGGO Colony",
      landmarks: "NGGO Colony, Gandhipuram",
      relevance:
        "NGGO Colony and Gandhipuram vicinity get our expert AC, washing machine and fridge service.",
      metaSuffix: "Gandhipuram area",
    },
    nilambur: {
      name: "Nilambur",
      landmarks: "Nilambur, Salem Road",
      relevance:
        "We serve Nilambur and Salem Road corridor with doorstep appliance repair.",
      metaSuffix: "Salem Road",
    },
    onapalayam: {
      name: "Onapalayam",
      landmarks: "Onapalayam, Avinashi Road",
      relevance:
        "Onapalayam residents get same-day washing machine, AC and fridge repair from Frost Masters.",
      metaSuffix: "Avinashi Road",
    },
    othakkalmandapam: {
      name: "Othakkalmandapam",
      landmarks: "Othakkalmandapam, Trichy Road",
      relevance:
        "We cover Othakkalmandapam with professional appliance repair for all brands.",
      metaSuffix: "Trichy Road",
    },
    pappampatti: {
      name: "Pappampatti",
      landmarks: "Pappampatti, Mettupalayam Road",
      relevance:
        "Pappampatti is in our service network for AC, washing machine and fridge repair.",
      metaSuffix: "Mettupalayam Road",
    },
    pappanaickenpalayam: {
      name: "Pappanaickenpalayam",
      landmarks: "Pappanaickenpalayam, Avinashi Road",
      relevance:
        "We serve Pappanaickenpalayam with doorstep appliance repair and genuine parts.",
      metaSuffix: "Avinashi Road",
    },
    pannimadai: {
      name: "Pannimadai",
      landmarks: "Pannimadai, Sathy Road",
      relevance:
        "Pannimadai residents can call us for same-day washing machine, AC and fridge service.",
      metaSuffix: "Sathy Road",
    },
    perur: {
      name: "Perur",
      landmarks: "Perur, Marudamalai Road",
      relevance:
        "Perur and Marudamalai Road areas get our reliable appliance repair service.",
      metaSuffix: "Marudamalai Road",
    },
    periyanaickenpalayam: {
      name: "Periyanaickenpalayam",
      landmarks: "Periyanaickenpalayam, Mettupalayam Road",
      relevance:
        "We cover Periyanaickenpalayam with expert technicians for all home appliance repairs.",
      metaSuffix: "Mettupalayam Road",
    },
    "press-colony": {
      name: "Press Colony",
      landmarks: "Press Colony, Gandhipuram",
      relevance:
        "Press Colony and nearby localities get our washing machine, AC and fridge repair service.",
      metaSuffix: "Gandhipuram area",
    },
    "pt-staff-quarters": {
      name: "PT Staff Quarters",
      landmarks: "PT Staff Quarters, RS Puram",
      relevance:
        "We serve PT Staff Quarters and RS Puram with same-day appliance repair.",
      metaSuffix: "RS Puram area",
    },
    puliyakulam: {
      name: "Puliyakulam",
      landmarks: "Puliyakulam, Avinashi Road",
      relevance:
        "Puliyakulam residents trust Frost Masters for AC, washing machine and fridge repair.",
      metaSuffix: "Avinashi Road",
    },
    rakkipalayam: {
      name: "Rakkipalayam",
      landmarks: "Rakkipalayam, Pollachi Road",
      relevance:
        "We provide doorstep appliance repair in Rakkipalayam and surrounding areas.",
      metaSuffix: "Pollachi Road",
    },
    ramnagar: {
      name: "Ramnagar",
      landmarks: "Ramnagar, Trichy Road",
      relevance:
        "Ramnagar gets our expert washing machine, AC and fridge service at your doorstep.",
      metaSuffix: "Trichy Road",
    },
    ramanathapuram: {
      name: "Ramanathapuram",
      landmarks: "Ramanathapuram, Avinashi Road",
      relevance:
        "Serving Ramanathapuram with same-day appliance repair for all major brands.",
      metaSuffix: "Avinashi Road",
    },
    narasimhanaickenpalayam: {
      name: "Narasimhanaickenpalayam",
      landmarks: "Narasimhanaickenpalayam, Mettupalayam Road",
      relevance:
        "We cover Narasimhanaickenpalayam with mobile service for appliance repairs.",
      metaSuffix: "Mettupalayam Road",
    },
    narasipuram: {
      name: "Narasipuram",
      landmarks: "Narasipuram, Pollachi Road",
      relevance:
        "Narasipuram residents get our reliable AC, washing machine and fridge repair service.",
      metaSuffix: "Pollachi Road",
    },
    rathinapuri: {
      name: "Rathinapuri",
      landmarks: "Rathinapuri, Trichy Road",
      relevance:
        "Rathinapuri is in our service area with expert technicians for all appliance repairs.",
      metaSuffix: "Trichy Road",
    },
    sanganoor: {
      name: "Sanganoor",
      landmarks: "Sanganoor, Avinashi Road",
      relevance:
        "We serve Sanganoor with doorstep washing machine, AC and fridge repair.",
      metaSuffix: "Avinashi Road",
    },
    selvapuram: {
      name: "Selvapuram",
      landmarks: "Selvapuram, Palakkad Road",
      relevance:
        "Selvapuram gets our same-day appliance repair and genuine spare parts.",
      metaSuffix: "Palakkad Road",
    },
    siddhapudur: {
      name: "Siddhapudur",
      landmarks: "Siddhapudur, Gandhipuram",
      relevance:
        "Siddhapudur and Gandhipuram area get our professional appliance service.",
      metaSuffix: "Gandhipuram area",
    },
    somayampalayam: {
      name: "Somayampalayam",
      landmarks: "Somayampalayam, Pollachi Road",
      relevance:
        "We cover Somayampalayam with AC, washing machine and fridge repair at home.",
      metaSuffix: "Pollachi Road",
    },
    sowripalayam: {
      name: "Sowripalayam",
      landmarks: "Sowripalayam, Avinashi Road",
      relevance:
        "Sowripalayam residents can book our technicians for same-day appliance repair.",
      metaSuffix: "Avinashi Road",
    },
    tatabad: {
      name: "Tatabad",
      landmarks: "Tatabad, Gandhipuram Extension",
      relevance:
        "Tatabad and Gandhipuram extension get our expert washing machine, AC and fridge service.",
      metaSuffix: "Gandhipuram area",
    },
    telungupalayam: {
      name: "Telungupalayam",
      landmarks: "Telungupalayam, Sathy Road",
      relevance:
        "We serve Telungupalayam with doorstep appliance repair for all major brands.",
      metaSuffix: "Sathy Road",
    },
    "thadagam-road": {
      name: "Thadagam Road",
      landmarks: "Thadagam Road, Marudamalai",
      relevance:
        "Thadagam Road and Marudamalai foothills get our reliable appliance repair service.",
      metaSuffix: "Thadagam Road",
    },
    thoppampatti: {
      name: "Thoppampatti",
      landmarks: "Thoppampatti, Mettupalayam Road",
      relevance:
        "Thoppampatti is covered by our mobile service units for AC, washing machine and fridge repair.",
      metaSuffix: "Mettupalayam Road",
    },
    thondamuthur: {
      name: "Thondamuthur",
      landmarks: "Thondamuthur, Sathy Road",
      relevance:
        "We provide same-day appliance repair in Thondamuthur and nearby areas.",
      metaSuffix: "Sathy Road",
    },
    titipalayam: {
      name: "Titipalayam",
      landmarks: "Titipalayam, Avinashi Road",
      relevance:
        "Titipalayam residents get our expert washing machine, AC and fridge service.",
      metaSuffix: "Avinashi Road",
    },
    "tvs-nagar": {
      name: "TVS Nagar",
      landmarks: "TVS Nagar, RS Puram",
      relevance:
        "TVS Nagar and RS Puram get our professional appliance repair and maintenance.",
      metaSuffix: "RS Puram area",
    },
    uppilipalayam: {
      name: "Uppilipalayam",
      landmarks: "Uppilipalayam, Avinashi Road",
      relevance:
        "Uppilipalayam is on the Avinashi Road corridor we serve with same-day repairs.",
      metaSuffix: "Avinashi Road",
    },
    vadamadurai: {
      name: "Vadamadurai",
      landmarks: "Vadamadurai, Mettupalayam Road, Thudiyalur",
      relevance:
        "Vadamadurai and Thudiyalur corridor get our doorstep washing machine, AC and fridge service.",
      metaSuffix: "Mettupalayam Road",
    },
    vedapatti: {
      name: "Vedapatti",
      landmarks: "Vedapatti, Sathy Road",
      relevance:
        "We serve Vedapatti with expert appliance repair for LG, Samsung, Whirlpool and all brands.",
      metaSuffix: "Sathy Road",
    },
    veerakeralam: {
      name: "Veerakeralam",
      landmarks: "Veerakeralam, Marudamalai Road",
      relevance:
        "Veerakeralam residents get our same-day AC, washing machine and fridge repair service.",
      metaSuffix: "Marudamalai Road",
    },
    veerapandi: {
      name: "Veerapandi",
      landmarks: "Veerapandi, Palakkad Road",
      relevance:
        "We cover Veerapandi with mobile technicians for all home appliance repairs.",
      metaSuffix: "Palakkad Road",
    },
    velandipalayam: {
      name: "Velandipalayam",
      landmarks: "Velandipalayam, Sathy Road",
      relevance:
        "Velandipalayam is in our service network for doorstep appliance repair.",
      metaSuffix: "Sathy Road",
    },
    vellalore: {
      name: "Vellalore",
      landmarks: "Vellalore, Trichy Road",
      relevance:
        "We serve Vellalore with washing machine, AC and fridge repair at your doorstep.",
      metaSuffix: "Trichy Road",
    },
    vilankurichi: {
      name: "Vilankurichi",
      landmarks: "Vilankurichi, Sathy Road",
      relevance:
        "Vilankurichi gets our expert technicians for same-day appliance repair.",
      metaSuffix: "Sathy Road",
    },
    viswasapuram: {
      name: "Viswasapuram",
      landmarks: "Viswasapuram, Avinashi Road",
      relevance:
        "We cover Viswasapuram with reliable AC, washing machine and fridge service.",
      metaSuffix: "Avinashi Road",
    },
    "karunya-nagar": {
      name: "Karunya Nagar",
      landmarks: "Karunya Nagar, Karunya University Road",
      relevance:
        "Karunya Nagar and university area get our professional appliance repair service.",
      metaSuffix: "Karunya Road",
    },
  },
  Eranakulam: {
    "t-nagar": {
      name: "T Nagar",
      landmarks: "Pondy Bazaar, Ranganathan Street, Panagal Park, Usman Road",
      relevance:
        "In Eranakulam's shopping hub, we provide lightning fast service to match the speed of T Nagar.",
      metaSuffix: "Pondy Bazaar",
    },
    "anna-nagar": {
      name: "Anna Nagar",
      landmarks: "Anna Arch, Tower Park, Shanthi Colony, Roundtana",
      relevance:
        "Premium repairs for the planned avenues of Anna Nagar East and West.",
      metaSuffix: "Tower Park & Shanthi Colony",
    },
    velachery: {
      name: "Velachery",
      landmarks: "Phoenix Marketcity, Vijaya Nagar Bus Stand, 100 Feet Road",
      relevance:
        "As the new center of Eranakulam, Velachery residents trust us for handling their modern appliances.",
      metaSuffix: "Phoenix Mall area",
    },
    adyar: {
      name: "Adyar",
      landmarks: "LB Road, Adyar Depot, Besant Nagar Beach Road",
      relevance:
        "Serving the green and serene neighborhoods of Adyar with eco-friendly repair practices.",
      metaSuffix: "LB Road & Depot",
    },
    "besant-nagar": {
      name: "Besant Nagar",
      landmarks: "Elliot's Beach, church, 2nd Avenue",
      relevance:
        "Coastal humidity can harm appliances. We are experts in preventing rust/corrosion in Besant Nagar homes.",
      metaSuffix: "near Elliot's Beach",
    },
    thiruvanmiyur: {
      name: "Thiruvanmiyur",
      landmarks: "Tidel Park, RTO Office, ECR Start",
      relevance:
        "Gateway to ECR. We serve the IT corridor professionals living in Thiruvanmiyur.",
      metaSuffix: "near Tidel Park",
    },
    omr: {
      name: "OMR",
      landmarks: "IT Expressway, SRP Tools, Navalur",
      relevance:
        "Dedicated team for the OMR IT corridor, available late evenings and weekends.",
      metaSuffix: "IT Expressway",
    },
    sholinganallur: {
      name: "Sholinganallur",
      landmarks: "Sholinganallur Junction, Elcot SEZ, Infosys",
      relevance:
        "The heart of OMR. We are the preferred service partner for many gated communities in Sholinganallur.",
      metaSuffix: "near Elcot SEZ",
    },
    perungudi: {
      name: "Perungudi",
      landmarks: "World Trade Center, RMZ, OMR",
      relevance:
        "Fast doorstep service for apartments in the Perungudi lake area.",
      metaSuffix: "OMR & WTC",
    },
    medavakkam: {
      name: "Medavakkam",
      landmarks: "Medavakkam Junction, Perumbakkam Road",
      relevance:
        "Crowded and busy, Medavakkam needs a service that is punctual. That's us.",
      metaSuffix: "Medavakkam Junction",
    },
    tambaram: {
      name: "Tambaram",
      landmarks: "Tambaram Railway Station, MCC, Mudichur Road",
      relevance:
        "Covering West and East Tambaram. The gateway to Eranakulam gets our priority service.",
      metaSuffix: "Railway Station area",
    },
    chromepet: {
      name: "Chromepet",
      landmarks: "MIT Bridge, GST Road, Chromepet Bus Stand",
      relevance:
        "Serving the busy GST Road stretch of Chromepet with rapid AC and fridge repairs.",
      metaSuffix: "GST Road",
    },
    pallavaram: {
      name: "Pallavaram",
      landmarks: "Airport, Friday Market, GST Road",
      relevance:
        "Quick response for Pallavaram residents living near the airport and hill areas.",
      metaSuffix: "near Airport",
    },
    porur: {
      name: "Porur",
      landmarks: "Porur DLF, Ramachandra Hospital, Mount Poonamallee Road",
      relevance:
        "Servicing the IT and medical hub of Porur. We handle all major appliance brands.",
      metaSuffix: "near DLF & Ramachandra",
    },
    vadapalani: {
      name: "Vadapalani",
      landmarks: "Vadapalani Temple, Forum Mall, Arcot Road",
      relevance:
        "In the cinema hub of Eranakulam, we ensure your entertainment and comfort appliances work perfectly.",
      metaSuffix: "Forum Mall area",
    },
    "ashok-nagar": {
      name: "Ashok Nagar",
      landmarks: "Ashok Pillar, 1st Avenue, Udhayam Theatre",
      relevance:
        "Grid-planned Ashok Nagar deserves organized service. We provide just that.",
      metaSuffix: "Ashok Pillar",
    },
    "kk-nagar": {
      name: "KK Nagar",
      landmarks: "Sivan Park, PSBB, PT Rajan Salai",
      relevance:
        "A wide layout residential area where our mobile vans patrol daily for quick fixes.",
      metaSuffix: "near Sivan Park",
    },
    saidapet: {
      name: "Saidapet",
      landmarks: "Saidapet Court, Panagal Building, Anna Salai",
      relevance:
        "Connecting the city. We serve Saidapet's busy streets with efficiency.",
      metaSuffix: "Anna Salai",
    },
    guindy: {
      name: "Guindy",
      landmarks: "Guindy Race Course, Industrial Estate, Kathipara",
      relevance:
        "Industrial or residential, Guindy relies on us for heavy-duty repairs.",
      metaSuffix: "near Kathipara",
    },
    nungambakkam: {
      name: "Nungambakkam",
      landmarks: "Valluvar Kottam, Sterling Road, Haddows Road",
      relevance:
        "Elite service for the heart of the city. We respect the privacy and time of Nungambakkam residents.",
      metaSuffix: "Valluvar Kottam",
    },
    egmore: {
      name: "Egmore",
      landmarks: "Egmore Station, Museum, Pantheon Road",
      relevance: "Serving the historic and commercial mix of Egmore.",
      metaSuffix: "near Station",
    },
    triplicane: {
      name: "Triplicane",
      landmarks: "Parthasarathy Temple, Marina Beach, Bells Road",
      relevance:
        "Navigating the narrow streets of Triplicane to bring modern service to traditional homes.",
      metaSuffix: "Temple area",
    },
    mylapore: {
      name: "Mylapore",
      landmarks: "Kapaleeshwarar Temple, Luz Corner, Kutchery Road",
      relevance:
        "The cultural soul of Eranakulam. We provide respectful and trusted service in Mylapore.",
      metaSuffix: "Temple area & Luz",
    },
    royapettah: {
      name: "Royapettah",
      landmarks: "Express Avenue, Clock Tower, Lloyds Road",
      relevance:
        "Central and accessible. We are the go-to for Royapettah apartments.",
      metaSuffix: "near Express Avenue",
    },
    alwarpet: {
      name: "Alwarpet",
      landmarks: "TTK Road, CP Ramaswamy Road, Crowne Plaza",
      relevance: "Upscale service for the upscale locale of Alwarpet.",
      metaSuffix: "TTK Road",
    },
    kodambakkam: {
      name: "Kodambakkam",
      landmarks: "Liberty Bridge, Power House, Arcot Road",
      relevance:
        "The cinematic center. We keep the ACs running cool in Kodambakkam.",
      metaSuffix: "Power House area",
    },
    ambattur: {
      name: "Ambattur",
      landmarks: "Ambattur OT, Industrial Estate, TI Cycles",
      relevance:
        "Covering the vast industrial and residential expanse of Ambattur.",
      metaSuffix: "Industrial Estate",
    },
    avadi: {
      name: "Avadi",
      landmarks: "HVF, Avadi Bus Stand, Checkpost",
      relevance:
        "Far west but not out of reach. We serve the defence and residential colonies of Avadi.",
      metaSuffix: "near HVF",
    },
    mogappair: {
      name: "Mogappair",
      landmarks: "Mogappair West/East, Spartan School, MMM Hospital",
      relevance:
        "A booming residential area. We are the household name for repairs in Mogappair.",
      metaSuffix: "East & West",
    },
    poonamallee: {
      name: "Poonamallee",
      landmarks: "Poonamallee Bus Terminus, Trunk Road, Saveetha",
      relevance:
        "The western gateway. We cover Poonamallee town and highway areas.",
      metaSuffix: "Trunk Road",
    },
    nanganallur: {
      name: "Nanganallur",
      landmarks: "Nanganallur Main Road, GST Road, Sastri Nagar",
      relevance:
        "Nanganallur residents get same-day washing machine, AC and fridge repair from our local technicians.",
      metaSuffix: "GST Road",
    },
    adambakkam: {
      name: "Adambakkam",
      landmarks: "Adambakkam Metro, GST Road, Lake View Road",
      relevance:
        "Serving Adambakkam and GST Road corridor with doorstep appliance repair for all brands.",
      metaSuffix: "GST Road",
    },
    pallikaranai: {
      name: "Pallikaranai",
      landmarks: "Pallikaranai Marsh, OMR, 200 Feet Road",
      relevance:
        "Pallikaranai and OMR stretch get our expert AC, washing machine and fridge service.",
      metaSuffix: "OMR",
    },
    thoraipakkam: {
      name: "Thoraipakkam",
      landmarks: "Thoraipakkam Junction, OMR, DLF IT Park",
      relevance:
        "IT hub at Thoraipakkam. We offer same-day appliance repair for OMR professionals.",
      metaSuffix: "OMR",
    },
    navalur: {
      name: "Navalur",
      landmarks: "Navalur OMR, L&T, Hiranandani",
      relevance:
        "Navalur gated communities and OMR residents trust us for washing machine, AC and fridge repair.",
      metaSuffix: "OMR",
    },
    perumbakkam: {
      name: "Perumbakkam",
      landmarks: "Perumbakkam Road, Medavakkam Link Road",
      relevance:
        "Perumbakkam and southern suburbs get our doorstep appliance repair and genuine parts.",
      metaSuffix: "Perumbakkam Road",
    },
    "st-thomas-mount": {
      name: "St Thomas Mount",
      landmarks: "St Thomas Mount Metro, GST Road, Mount Road",
      relevance:
        "Serving St Thomas Mount and GST Road with quick AC, washing machine and fridge service.",
      metaSuffix: "GST Road",
    },
    alandur: {
      name: "Alandur",
      landmarks: "Alandur Metro, Airport Road, GST Road",
      relevance:
        "Alandur and airport corridor get our reliable appliance repair and same-day service.",
      metaSuffix: "Airport Road",
    },
    teynampet: {
      name: "Teynampet",
      landmarks: "Anna Salai, Nandanam, Greenways Road",
      relevance:
        "Central Eranakulam at Teynampet. We serve corporate and residential areas with expert repairs.",
      metaSuffix: "Anna Salai",
    },
    koyambedu: {
      name: "Koyambedu",
      landmarks: "Koyambedu Bus Stand, CMBT, Wholesale Market",
      relevance:
        "Koyambedu and CMBT area get our washing machine, AC and fridge repair at doorstep.",
      metaSuffix: "CMBT",
    },
    virugambakkam: {
      name: "Virugambakkam",
      landmarks: "Virugambakkam, Arcot Road, Poonamallee High Road",
      relevance:
        "Virugambakkam residents rely on us for same-day appliance repair and maintenance.",
      metaSuffix: "Arcot Road",
    },
    valasaravakkam: {
      name: "Valasaravakkam",
      landmarks: "Valasaravakkam, Arcot Road, Karambakkam",
      relevance:
        "We cover Valasaravakkam with expert AC, washing machine and fridge service.",
      metaSuffix: "Arcot Road",
    },
    madipakkam: {
      name: "Madipakkam",
      landmarks: "Madipakkam Junction, Medavakkam Road, 100 Feet Road",
      relevance:
        "Madipakkam and nearby localities get our doorstep appliance repair for all major brands.",
      metaSuffix: "Medavakkam Road",
    },
    ullagaram: {
      name: "Ullagaram",
      landmarks: "Ullagaram, Medavakkam, 100 Feet Road",
      relevance:
        "Ullagaram residents get our professional washing machine, AC and fridge repair service.",
      metaSuffix: "100 Feet Road",
    },
    puzhuthivakkam: {
      name: "Puzhuthivakkam",
      landmarks: "Puzhuthivakkam, Madipakkam, Medavakkam Road",
      relevance:
        "We serve Puzhuthivakkam with same-day appliance repair and genuine spare parts.",
      metaSuffix: "Medavakkam Road",
    },
    karapakkam: {
      name: "Karapakkam",
      landmarks: "Karapakkam OMR, Sholinganallur",
      relevance:
        "Karapakkam and OMR get our expert technicians for AC, washing machine and fridge repair.",
      metaSuffix: "OMR",
    },
    neelankarai: {
      name: "Neelankarai",
      landmarks: "Neelankarai, ECR, East Coast Road",
      relevance:
        "ECR at Neelankarai. We provide appliance repair for coastal Eranakulam residents.",
      metaSuffix: "ECR",
    },
    kelambakkam: {
      name: "Kelambakkam",
      landmarks: "Kelambakkam OMR, SIPCOT, IT Corridor",
      relevance:
        "Kelambakkam and southern OMR get our same-day washing machine, AC and fridge service.",
      metaSuffix: "OMR",
    },
    semmenchery: {
      name: "Semmenchery",
      landmarks: "Semmenchery, OMR, Sholinganallur",
      relevance:
        "Semmenchery and OMR localities get our doorstep appliance repair.",
      metaSuffix: "OMR",
    },
    ramapuram: {
      name: "Ramapuram",
      landmarks: "Ramapuram, Mount Poonamallee Road, Porur",
      relevance:
        "Ramapuram residents get our expert AC, washing machine and fridge repair service.",
      metaSuffix: "Mount Road",
    },
    manapakkam: {
      name: "Manapakkam",
      landmarks: "Manapakkam, Porur, Eranakulam Bypass",
      relevance:
        "We cover Manapakkam and Porur corridor with same-day appliance repair.",
      metaSuffix: "Porur",
    },
    aminjikarai: {
      name: "Aminjikarai",
      landmarks: "Aminjikarai, Poonamallee High Road, Purasawalkam",
      relevance:
        "Aminjikarai and central-west Eranakulam get our professional appliance service.",
      metaSuffix: "Poonamallee High Road",
    },
    purasawalkam: {
      name: "Purasawalkam",
      landmarks: "Purasawalkam, Poonamallee High Road, Kellys",
      relevance:
        "Purasawalkam residents trust Frost Masters for washing machine, AC and fridge repair.",
      metaSuffix: "Poonamallee High Road",
    },
    kilpauk: {
      name: "Kilpauk",
      landmarks: "Kilpauk, Poonamallee High Road, New Avadi Road",
      relevance:
        "Kilpauk and surrounding areas get our same-day doorstep appliance repair.",
      metaSuffix: "Poonamallee High Road",
    },
    chetpet: {
      name: "Chetpet",
      landmarks: "Chetpet, RK Salai, Nungambakkam",
      relevance:
        "Chetpet and RK Salai corridor get our expert AC, washing machine and fridge service.",
      metaSuffix: "RK Salai",
    },
    mandaveli: {
      name: "Mandaveli",
      landmarks: "Mandaveli, LB Road, RK Salai",
      relevance:
        "Mandaveli residents get our professional appliance repair and maintenance.",
      metaSuffix: "LB Road",
    },
    "ra-puram": {
      name: "RA Puram",
      landmarks: "RA Puram, Eldams Road, Teynampet",
      relevance:
        "RA Puram and Adyar link get our reliable washing machine, AC and fridge service.",
      metaSuffix: "Eldams Road",
    },
    "west-mambalam": {
      name: "West Mambalam",
      landmarks: "West Mambalam, Arcot Road, Lake Area",
      relevance:
        "West Mambalam residents rely on us for same-day appliance repair at doorstep.",
      metaSuffix: "Arcot Road",
    },
    arumbakkam: {
      name: "Arumbakkam",
      landmarks: "Arumbakkam, Poonamallee High Road, Anna Nagar West",
      relevance:
        "Arumbakkam and Anna Nagar West get our expert technicians for all appliance repairs.",
      metaSuffix: "Poonamallee High Road",
    },
    thirumangalam: {
      name: "Thirumangalam",
      landmarks: "Thirumangalam, Anna Nagar, Koyambedu",
      relevance:
        "Thirumangalam and Anna Nagar corridor get our doorstep washing machine, AC and fridge service.",
      metaSuffix: "Anna Nagar",
    },
    villivakkam: {
      name: "Villivakkam",
      landmarks: "Villivakkam, Ambattur Road, Red Hills Road",
      relevance:
        "Villivakkam residents get our same-day appliance repair for all major brands.",
      metaSuffix: "Ambattur Road",
    },
    madhavaram: {
      name: "Madhavaram",
      landmarks: "Madhavaram, Red Hills, Eranakulam Bypass",
      relevance:
        "Madhavaram and northern Eranakulam get our reliable AC, washing machine and fridge service.",
      metaSuffix: "Red Hills",
    },
    maduravoyal: {
      name: "Maduravoyal",
      landmarks: "Maduravoyal, Eranakulam Bypass, Poonamallee",
      relevance:
        "Maduravoyal and bypass corridor get our doorstep appliance repair.",
      metaSuffix: "Eranakulam Bypass",
    },
    saligramam: {
      name: "Saligramam",
      landmarks: "Saligramam, Arcot Road, Virugambakkam",
      relevance:
        "Saligramam residents trust us for washing machine, AC and fridge repair and maintenance.",
      metaSuffix: "Arcot Road",
    },
    mugalivakkam: {
      name: "Mugalivakkam",
      landmarks: "Mugalivakkam, Porur, Mount Road",
      relevance:
        "Mugalivakkam and Porur area get our professional appliance repair service.",
      metaSuffix: "Porur",
    },
    injambakkam: {
      name: "Injambakkam",
      landmarks: "Injambakkam, ECR, East Coast Road",
      relevance:
        "ECR at Injambakkam. We serve coastal Eranakulam with same-day appliance repair.",
      metaSuffix: "ECR",
    },
    gopalapuram: {
      name: "Gopalapuram",
      landmarks: "Gopalapuram, Cathedral Road, Nungambakkam",
      relevance:
        "Gopalapuram and Cathedral Road get our elite appliance repair and maintenance.",
      metaSuffix: "Cathedral Road",
    },
    "red-hills": {
      name: "Red Hills",
      landmarks: "Red Hills, Eranakulam Bypass, Lake",
      relevance:
        "Red Hills and northern suburbs get our washing machine, AC and fridge service.",
      metaSuffix: "Red Hills",
    },
    kolapakkam: {
      name: "Kolapakkam",
      landmarks: "Kolapakkam OMR, Sholinganallur",
      relevance: "Kolapakkam and OMR get our expert doorstep appliance repair.",
      metaSuffix: "OMR",
    },
  },
};

// Helper function to generate full content
function generateLocationData() {
  const allLocations = {};

  for (const city in locationDetails) {
    allLocations[city] = {};
    for (const slug in locationDetails[city]) {
      const details = locationDetails[city][slug];
      const cityName = city.charAt(0).toUpperCase() + city.slice(1);

      allLocations[city][slug] = {
        name: details.name,
        title: `Best AC, Washing Machine & Fridge Repair in ${details.name}, ${cityName}`,
        metaDescription: `Top-rated Air Conditioner (AC), Washing Machine, Refrigerator, Microwave & Geyser repair in ${details.name}, ${cityName}. Expert LG, Samsung, Whirlpool service.`,
        h1: `Expert Home Appliance Repair Service in ${details.name}, ${cityName}`,
        slug: slug,
        content: {
          intro: `Residents of **${details.name}** trust Frost Masters for all their home appliance needs. We are your one-stop solution for **Air Conditioner (AC) service**, **Washing Machine repair**, **Refrigerator (Fridge) troubleshooting**, **Microwave Oven fixing**, and **Geyser/Water Heater service**. ${details.relevance} Whether you have a **Samsung top-load washing machine**, an **LG double-door fridge**, or a **Voltas split AC**, our skilled technicians in ${cityName} are equipped to handle all major brands. We bring professional **appliance repair services** directly to your doorstep in ${details.name}, ensuring your home runs smoothly.`,

          benefits: [
            `**Multi-Brand Expertise:** We specialize in repairing **LG, Samsung, Whirlpool, IFB, Godrej, Panasonic, and Daikin** appliances.`,
            `**Local ${details.name} Technicians:** Our expert mechanics are stationed near **${details.landmarks}**, ensuring rapid response times for **AC repair** and **fridge service** in ${details.name}.`,
            "**Comprehensive Care:** From **AC gas filling** and **PCB repair** to **washing machine drum replacement** and **fridge compressor fixing**, we do it all.",
            "**Transparent & Fair:** Get upfront pricing for **microwave repair** or **geyser service** before we start. No hidden charges.",
            "**Warranty on Service:** Enjoy peace of mind with our warranty on **spare parts and service labor**.",
          ],

          localRelevance: `We are proud to be the leading **appliance service centre in ${details.name}**. Our team actively serves all streets around **${details.landmarks}**. We understand the urgency when your **AC stops cooling** or your **fridge breaks down** in the heat. That's why our mobile service units patrol ${details.name} daily, ready to perform **urgent appliance repairs** at your home. No need to haul your heavy machines to a shop; we fix them right where they are.`,

          trustSignals: `Frost Masters is the most recommended name for **washing machine and fridge repair in ${cityName}**. Our technicians are background-verified, uniformed, and trained to handle the latest inverter technology in Air Conditioners and Refrigerators.`,
        },
        services: [
          "Air Conditioner (AC) Repair, Installation & Gas Filling",
          "Washing Machine Repair (Front Load, Top Load & Semi-Automatic)",
          "Refrigerator / Fridge Repair (Single, Double & Multi-Door)",
          "Microwave Oven Repair (Convection, Grill & Solo)",
          "Geyser & Water Heater Repair (Instant & Storage)",
        ],
        faq: [
          // General & Service Area
          {
            question: `Do you provide home appliance service in all areas of ${details.name}?`,
            answer: `Yes, we cover the entire **${details.name}** locality. Whether you live near **${details.landmarks.split(",")[0]}** or **${details.landmarks.split(",")[1] || "nearby streets"}**, our technicians can reach your doorstep quickly.`,
          },
          {
            question: "How can I book a service appointment?",
            answer: `Booking is simple. You can call us directly at **${city === "Eranakulam" ? "6282450300 (Eranakulam)" : "6282450300 (Eranakulam)"}** or use the 'Book Online' button on our website to schedule a visit at your convenience.`,
          },
          {
            question: "Are your technicians background verified and safe?",
            answer:
              "Absolutely. Safety is our priority. All Frost Masters technicians are background-checked, trained professionals, and wear company IDs/uniforms for your peace of mind.",
          },
          {
            question: `Do you offer weekend or holiday service in ${details.name}?`,
            answer: `Yes, appliances don't take holidays! We work **7 days a week**, including Sundays and public holidays, to ensure you are never stranded with a broken machine.`,
          },

          // Air Conditioner (AC) Specific
          {
            question: "What types of AC services do you offer?",
            answer: `We provide end-to-end AC solutions: **AC Repair**, **Gas Filling** (R32, R410A, R22), **Split & Window AC Installation/Uninstallation**, and **Deep Jet Cleaning (Wet Service)**.`,
          },
          {
            question:
              "My AC is running but not cooling. What could be the issue?",
            answer:
              "This is a common issue often caused by **gas leakage**, a dirty filter, or a faulty compressor. Our technicians in ${cityName} can diagnose and fix this on the spot.",
          },
          {
            question:
              "What is the difference between Dry Service and Wet Service?",
            answer:
              "Dry service involves basic filter and blower cleaning. **Wet Service (Jet Cleaning)** uses high-pressure water to deep clean the cooling coils and condenser, improving efficiency and cooling.",
          },

          // Washing Machine Specific
          {
            question: `Do you repair both Front Load and Top Load Washing Machines in ${details.name}?`,
            answer: `Yes, we specialize in repairing all types: **Front Load**, **Top Load**, and **Semi-Automatic** washing machines of all major brands like LG, Samsung, Bosch, and IFB.`,
          },
          {
            question:
              "My washing machine is making a loud noise during the spin cycle.",
            answer:
              "Loud noise usually indicates a problem with the **bearings**, **drum**, or **shocker**. We recommend booking a technician immediately to prevent further damage.",
          },
          {
            question:
              "Do you fix motherboard (PCB) issues in washing machines?",
            answer:
              "Yes, our experts can repair or replace faulty **PCBs (Circuit Boards)**, prevalent in modern inverter washing machines.",
          },

          // Refrigerator (Fridge) Specific
          {
            question: `My fridge is not cooling, but the light is on. Can you fix it in ${details.name}?`,
            answer: `Yes, this typically points to a **compressor start relay issue** or **gas leakage**. Our team near ${details.landmarks.split(",")[0]} carries the necessary parts to fix this immediately.`,
          },
          {
            question:
              "Do you service Side-by-Side and Double Door Refrigerators?",
            answer:
              "We are experts in handling high-end **Double Door**, **Triple Door**, and **Side-by-Side** refrigerators from brands like Samsung, LG, and Whirlpool.",
          },
          {
            question: "Do you provide gas refilling for old refrigerators?",
            answer:
              "Yes, we use high-quality, manufacturer-recommended refrigerant gas for all fridge models to ensure optimal cooling and longevity.",
          },

          // Microwave & Geyser
          {
            question: "My microwave oven is running but not heating the food.",
            answer:
              "This is often due to a faulty **Magnetron** or **HV Capacitor**. We can replace these genuine parts at your home to get your microwave working again.",
          },
          {
            question: "Do you clean and service electric geysers?",
            answer: `Yes, we handle **Geyser element replacement**, **thermostat repair**, and **tank cleaning** for water heaters in hard water areas like ${cityName}.`,
          },

          // Pricing, Warranty & Payments
          {
            question: "What are your visiting/inspection charges?",
            answer:
              "We have a nominal inspection charge to cover our technician's travel and time. This amount is **waived off** if you proceed with the repair service.",
          },
          {
            question: "Do you provide a warranty on repairs and spare parts?",
            answer:
              "Yes! We offer a **30-day service warranty** and a **3-6 month warranty on spare parts**, depending on the component replaced.",
          },
          {
            question: `How fast can you reach ${details.landmarks.split(",")[0]} for an emergency?`,
            answer: `We prioritize emergency requests. Since we have local technicians in **${details.name}**, we can typically reach you within **90 minutes**.`,
          },
          {
            question: "What payment methods do you accept?",
            answer:
              "We accept **Cash**, **UPI** (GPay, PhonePe), and **Online Transfers** after the job is completed to your satisfaction.",
          },
          {
            question: "Are there any hidden costs?",
            answer:
              "No. We believe in transparency. Our technician will provide a **detailed estimate** after inspection, and work begins only after your approval.",
          },
        ],
        keywords: [
          `AC repair ${details.name}`,
          `AC repair ${details.name} ${cityName}`,
          `AC service near me ${details.name}`,
          `AC gas filling ${details.name}`,
          `Washing machine repair ${details.name}`,
          `Washing machine service ${details.name}`,
          `Washing machine service center ${details.name} ${cityName}`,
          `Fridge repair ${details.name}`,
          `Refrigerator repair ${details.name}`,
          `Fridge repair near ${details.landmarks.split(",")[0]}`,
          `Microwave oven repair ${details.name}`,
          `Geyser repair ${details.name}`,
          `Water heater service ${details.name}`,
          `Geyser service ${cityName}`,
          `Appliance repair ${details.name}`,
          `Home appliance repair ${cityName}`,
          `LG washing machine repair ${details.name}`,
          `Samsung fridge service ${details.name}`,
          `Whirlpool service center ${details.name}`,
          `Same day AC repair ${details.name}`,
          `Washing machine repair near me ${cityName}`,
          `Best AC repair ${details.name}`,
          `Appliance service center ${cityName}`,
          `Dishwasher repair ${details.name}`,
          `Chimney cleaning ${details.name}`,
        ],
        // Short list for meta keywords tag (comma-separated)
        metaKeywords: `AC repair ${details.name}, washing machine service ${details.name}, fridge repair ${details.name}, appliance repair ${cityName}, geyser repair ${details.name}, microwave repair ${details.name}, service center ${details.name}`,
      };
    }
  }
  return allLocations;
}

export const locations = generateLocationData();

/** Area slugs per city for sitemap generation (next-sitemap.config.js). */
export const areaSlugsByCity = Object.fromEntries(
  Object.entries(locations).map(([city, areas]) => [city, Object.keys(areas)]),
);
