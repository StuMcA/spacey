use sol;
db.dropDatabase();

db.solar_system.insertMany([

    solar_system = {
        planets: [

            {

                name: "Mercury",
                planet_intro: "Mercury, named for its incredibly speed of orbit around the sun, was once believed by ancient civilizations to be two different planets – one which appeared in the morning and another which appeared in the evening. The Sumerians were the first to document it as one, very swift planet around 3000BC.",
                position_from_sun: 1,
                image_url: [
                    "https://scitechdaily.com/images/Iridescent-Mercury.jpg",
                    "https://www.cronodon.com/images/mercury-1a.jpg",
                    "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/ma_1005_NID_Mercury_online3.jpg?itok=hjZo8tWi",
                    "https://i.pinimg.com/originals/6d/ff/c4/6dffc49314b7b1fcdd396b3b02f5ced9.jpg",
                    "https://cdn.britannica.com/75/145475-050-916827A9/Caloris-Basin-Mercury-spacecraft-Messenger-2008.jpg",
                ],
                latin_name: "Mercurius",
                sumerian_name: "Enki",
                orbit_distance_km: 57909227,
                orbit_distance_au: 0.387,
                equatorial_diameter_km: 4879,
                mass: "3.29 × 10^23kg (0.06 Earths)",
                moons: {
                    moon_list: [],
                    sig_moons: []
                },
                rings: 0,
                orbit_period_days: 88,
                surface_temperature_max_celcius: 427,
                surface_temperature_min_celcius: -173,
                facts: [

                    "Mercury has been known to humanity since ancient times and although its discovery date is unknown, the first mentions of the planet are believed to be around 3000 BC by the Sumerians who named it Enki",

                    "A year on Mercury is 88 days, yet a day there is 176 Earth days. Mercury is also nearly tidally locked to the Sun and over time this has slowed the rotation of the planet to almost match its orbit around the Sun.",

                    "Not only is Mercury the smallest planet, it is also shrinking. It is estimated that the planet is about 9 miles smaller than it was four billion years ago  because it’s iron core is cooling, which is making it solid, therefore reducing the planet’s volume.",

                    "Mercury is the smallest planet in the solar system with a diameter of 4879 km and is one of five planets that is visible to the naked eye. It is also one of the brighter planets in the sky and visible to the naked eye",

                    "Mercury is the second densest planet. Despite its small size, it is very dense because it is composed mainly of heavy metals and rock, the main characteristic of terrestrial planets.This means it also has the highest velocity of any planet",

                    "Mercury is named after the messenger of the Roman gods, who is also known as Hermes in Greek mythology.This is because of the speed in which Mercury orbits the Sun and with which the Roman deity delivers messages.",

                    "Modern astronomers didn’t consider that Mercury to be a planet at all until 1543 when Copernicus published his Sun-centered model of the Solar System, which put the Sun as the centre of the solar system.",

                    "The planet has just 38% of the gravity on Earth. This means that it isn’t able to hold the atmosphere it has and it instead gets blown away by solar winds. However those same solar winds are also bringing in new gases.",

                    "Mercury has no moons or rings because of it's low gravity and lack of consistent atmosphere. This is also theorized to be due to the gravity of the Sun pulling potential moons out of Mercury (and also Venus)'s orbit.",

                    "It was once believed that a planet called Vulcan existed between the orbit of Mercury and the Sun – however the existence of such a planet was never found. This is where the idea for the planet Vulcan in Star Trek comes from,",

                    "The orbit of Mercury is an ellipse rather than circular. It has the one of the most eccentric orbit in the solar system and the least circular of all of the planets, according to scientists and astronomers.",

                    "This is because Mercury has no atmosphere to regulate temperature and results in the most extreme temperature change of all the planets, ranging from -170°C(-280°F) during the night to 430°C(800°F) during the day.",

                    "Mercury does not experience any seasons. The axis of Mercury has the smallest tilt of all other planets, and this results in a lack of seasons on its surface. The only real variant in temperature occurs between day and night",

                    "Mercury is the only planet which doesn’t rotate exactly once every year, instead rotating three times for every two orbits of the Sun. This is because it is nearly tidally locked to the Sun and turns very slowly relative to its size.",

                    "Mercury is only the second hottest planet. It's nearest neighbor, though farther from the Sun than it, actually experiences higher temperatures because Mercury lacks an atmosphere and loses heat very easily.",

                    "The orbit of Mercury was important in proving Albert Einstein’s theory of General Relativity as cosmic proof of relativity in action, due to its orbit, speed and more complex mathematical truths displayed via its orbit.",
                ]
            },

            {

                name: "Venus",
                planet_intro: "Venus is sometimes called Earth’s sister planet. This is because their size is very similar (there is only a 638 km different in diameter) and Venus has around 81% of Earth’s mass. They are also similarly located with Venus being the closest planet to Earth. Both planets also have a central core, a molten mantle and a crust.",
                position_from_sun: 2,
                image_url: [
                    "https://earthsky.org/upl/2019/09/Venus-dayside.png",
                    "https://cdn.mos.cms.futurecdn.net/kaPwBjHiUKax8syodHNPmF.jpg",
                    "https://static.scientificamerican.com/sciam/cache/file/F7E0BB0E-3F76-4AF5-92AC0951C2976728_source.jpg?w=590&h=800&7D4AE32D-D3D4-4689-A81E895E9A173CC2",
                    "https://solarsystem.nasa.gov/internal_resources/4319/",
                    "https://thesuffolkjournal.com/wp-content/uploads/2020/09/Venus-900x900.png",
                ],
                latin_name: "Venus",
                sumerian_name: "Inanna",
                orbit_distance_km: 108209475,
                orbit_distance_au: 0.732,
                equatorial_diameter_km: 12104,
                mass: "4.87 × 10^24kg (0.82 Earths)",
                moons: {
                    moon_list: [],
                    sig_moons: []
                },
                rings: 0,
                orbit_distance_km: 108209475,
                orbit_distance_au: 0.73,
                orbit_period_days: 225,
                surface_temperature_max_celcius: 462,
                surface_temperature_min_celcius: 462,
                facts: [

                    "Venus is the second brightest natural object in the sky. The planet has an apparent magnitude of -3.8 to -4.6, which makes it visible on a bright, clear day. The Moon is the only other natural object that is brighter.",

                    "Venus is sometimes referred to as the 'morning star' and 'evening star'. When the orbit of Jupiter overtakes Earth’s orbit, it changes from being visible at sunrise to sunset. Some cultures believed Venus to be two planets.",

                    "Different cultures noticed Venus changing sides in the sky at certain points in the year and assumed they were two planets. They were known as Phosphorus and Hesperus by the Greeks, and Lucifer and Vesper by the Romans.",

                    "One day on Venus is longer than one year. Due to the slow rotation on its axis, it takes 243 Earth-days to complete one rotation. The orbit of the planet takes 225 of our days – making a year on Venus shorter on day on Earth",

                    "Venus is named after the Roman goddess of love and beauty. This may be, in part, due the brightness of the planet and may date back to the Babylonians in 1581 who referred to Venus as 'bright queen of the sky' due to its luminance.",

                    "In spite of Venus being known as the sister planet to our planet, it is also considered one of the most hostile planets for life, partially due to an incredibly hot surface and poisonous gases in the atmosphere.",

                    "Venus has no moons nor rings but often has a shimmer effect due to its incredibly dense, thick atmosphere. The reasons for the lack of moons are unknown but suspected to be the gravity of the Sun pulling small objects out of Venus's orbit",

                    "Billions of years ago, the climate of Venus may been similar to that of ours and scientists believe that Venus once possessed large amounts of water or oceans. However this water boiled off long ago and is no longer present.",

                    "Most other planets rotate counter-clockwise on their axis. However Venus, like Uranus, rotates clockwise (retrograde rotation) and may have been caused by a collision with an asteroid which changed its rotational path.",

                    "Venus is the hottest planet in the solar system and it doesn’t tilt on its axis which means there are no seasons either. The atmosphere is a dense 96.5% carbon dioxide which traps heat and caused the greenhouse effect.",

                    "The temperature on Venus doesn’t vary much between the night and day, remaining very high constantly. This is due to the slow movement of the solar winds across the surface of the planet, which is unusual in our solar system",

                    "The estimated age of the Venusian surface is around 300-400 million years old. By comparison, the surface of our home is about 100 million years old. For this reason, Venus is sometimes called a potential, tragic, future for our planet",

                    "The atmospheric pressure of Venus is 92 times stronger than our planet. This means that any small asteroids entering the atmosphere of Venus are crushed by the immense pressure, which is why there are no small surface craters on the planet.",

                    "Venus has a very weak magnetic field. This surprised scientists, who expected Venus to have a magnetic field similar in strength to our planet. One possible reason for this is that Venus has no solid inner core, or that its core is not cooling.",

                    "Venus is the only planet in the Solar System to be named after a female figure and is often associated with beauty due to its brightness and light. It is also often contrasted with Mars, who is often associated with masculinity",
                ]
            },

            {

                name: "Earth",
                planet_intro: "Our home, the only known planet capable of supporting life. From here, we gaze upon the cosmos in wonder, eager to explore, to discover, to learn. Human beings are now on the cusp of being able to leave Earth for life on other planets but our home is still one of the most interesting planets in the solar system.",
                position_from_sun: 3,
                image_url: [
                    "https://www.thoughtco.com/thmb/Whrni3pbKfnTfZyz2rzQEVS-jVc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Earth_Eastern_Hemisphere-56a8cda43df78cf772a0cc74.jpg",
                    "https://i2.wp.com/kashmirobserver.net/wp-content/uploads/2020/07/earth.jpg?fit=800%2C772&ssl=1",
                    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F97%2FThe_Earth_seen_from_Apollo_17.jpg%2F1200px-The_Earth_seen_from_Apollo_17.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEarth&tbnid=BUbNaZxy9NyhgM&vet=12ahUKEwjwls60xYfwAhWP0OAKHSuzDBIQMygCegUIARCPAg..i&docid=88gjCNbYu3-8ZM&w=1200&h=1201&itg=1&q=images%20of%20the%20planet%20earth&ved=2ahUKEwjwls60xYfwAhWP0OAKHSuzDBIQMygCegUIARCPAg",
                    "https://i.ytimg.com/vi/xncLubEj50k/maxresdefault.jpg",
                    "https://c.tadst.com/gfx/1200x630/international-earth-year.jpg?1",
                ],
                latin_name: "Terra",
                sumerian_name: "Ki",
                orbit_distance_km: 149598262,
                orbit_distance_au: 1,
                equatorial_diameter_km: 12756,
                mass: "5.97 × 10^24kg",
                moons: {
                    moon_list: [
                        "Luna"
                    ],
                    sig_moons: [
                        {
                            name: "Luna",
                            position: 1,
                            image_url: [
                                "https://cdn.mos.cms.futurecdn.net/SYNFvhA5XoBB6L6ScwzWk4-1200-80.jpg",
                                "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2001/07/view_of_the_moon_seen_apollo_17/9215843-5-eng-GB/View_of_the_Moon_seen_Apollo_17_pillars.jpg",
                                "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201311/20131107111722-0_0_0.jpg?itok=S7lx1m2D"
                            ],
                            orbit_distance_km: 384400,
                            equatorial_diameter_km: 3475,
                            mass: "7.35 × 10^22 kg (0.01 Earths)",
                            orbit_period_in_days: 27.3,
                            surface_temperature_max_celcius: 127,
                            surface_temperature_min_celcius: -272,
                            facts: [

                                "The Moon is Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits. At 3475 km, the Moon's diameter is over one fourth that of the Earth's. In relation to its own size, no other planet has a moon as large.",

                                "The Moon is made of rock and metal (not cheese), just like the Earth and the other rocky planets(Mercury, Venus and Mars).The crust, the Moon's outer shell, is covered by lunar soil, also called regolith: a blanket of fine rock particles, varying between three and 20 metres (10–65 feet) deep.",

                                "Today, astronomers know that the Moon is slowly moving away from the Earth. But at the rate it is traveling, about 1.5 inches (4 cm) per year, it will be a long time before the two part ways.",

                            ]
                        }
                    ],

                },
                rings: 0,
                orbit_period_days: 365.24,
                surface_temperature_max_celcius: 58,
                surface_temperature_min_celcius: -88,
                facts: [

                    "For 2000 years ancient astronomers believed that Earth was static and celestial bodies traveled around it. In 1543, Copernicus published his model of the Solar System which put the Sun at the centre of our solar system.",

                    "Earth is the only planet not named for a mythological god or goddess. The other seven planets in the solar system were named after Roman gods or goddesses. Earth's name comes from the Old English and means ground or land.",

                    "Earth is the most dense planet in the solar system. The density of Earth differs in each part of the planet. The core, for example, is denser than the crust but the average density of the planet is around 5.52 grams per cubic cm.",

                    "The gravity between Earth and its Moon causes the tides. This effect on the Moon means it is tidally locked to Earth with its rotation period is the same as its orbit time so it always presents the same face to Earth.",

                    "The rotation of the Earth is gradually slowing down. The deceleration of the Earths rotation approximately 17 milliseconds per hundred year. In around 140 million years this will lengthen our days from 24 to 25 hours.",

                    "Earths atmosphere is composed of 78% nitrogen, 21% oxygen, and trace amounts of other gases including argon and carbon dixoide. This unique combination of atmospheric gases is only found on Earth.",

                    "The large amount of oxygen on Earth comes from its plant life’s consumption of carbon dioxide during photosynthesis. Other planets have higher levels of carbon in their atmospheres (or no atmosphere at all).",

                    "Earth has a very powerful magnetic field. This field protects the planet from the effects of solar winds and is believed to be a result of the nickel-iron core of the planet combined with its rapid rotation.",

                    "Earth has an Ozone Layer which protects it from harmful solar radiation. This shell is a special type of oxygen that absorbs most of the Sun’s powerful UV rays. This is of huge benefit to life on the planet.",

                    "70% of the Earths surface is covered by water, the remainder consists of continents and islands which together have many lakes and other sources of water. Earth is however not the most water dense object in our solar system.",

                    "The first life on Earth developed in the oceans through a process called abiogenesis or biopoiesis. This is a natural, albeit highly complex process in which life grows from non-living matter like simple organic compounds.",

                    "Earths water was initially trapped within the planet. Over time the water was brought to the surface by the planet’s volcanic activity. Even today there is a similar volume of water underground to the volume in the polar caps.",

                    "Earth has relatively few visible impact craters compared with other solid bodies in our solar system. This is because Earth is highly geologically active and has processes like tectonics and erosion that reshape its surface.",

                    "The highest point found on Earth is Mount Everest which reaches a height of 8.8 km. The lowest point on Earth is called Challenger Deep and at 10.9 km below sea level, it is further than the peak of Mount Everest.",

                ]
            },

            {

                name: "Mars",
                planet_intro: "Mars, also known as the Red Planet, is the first planet that humans might live on beyond our Earth and the only planet other than Earth that human machines have survived landing on and have explored. From myths and legends to sci-fi speculation to future possible home, Mars has always fascinated humans.",
                position_from_sun: 4,
                image_url: [
                    "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f775f2683bae528aec3c1ca%2F0x0.jpg",
                    "https://www.universetoday.com/wp-content/uploads/2011/12/mars-viking-zoom.jpg",
                    "https://c.files.bbci.co.uk/10F74/production/_114829496_mars.jpg",
                    "https://www.nhm.ac.uk/content/dam/nhmwww/discover/planet-mars/mars-factfile-red-planet-full-width.jpg",
                    "https://scitechdaily.com/images/Olympus-Mons-Mars-scaled.jpg",
                ],
                latin_name: "Mars",
                sumerian_name: "Gugulanna",
                orbit_distance_km: 227943824,
                orbit_distance_au: 1.38,
                equatorial_diameter_km: 6792,
                mass: "6.39 × 10^23 kg (0.11 Earths)",
                moons: {
                    moon_list: [
                        "Phobos",
                        "Deimos"
                    ],
                    sig_moons: [
                        {
                            name: "Phobos",
                            position: 1,
                            image_url: [
                                "https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg",
                                "https://lh3.googleusercontent.com/proxy/XoCwPbhFezreWcC2dnMRpypLZm1pGGbxydevbzIeeHPrUNHnKOhOO6oy3Y919Mg6aAJuhch52Pl-nK6Z1D1SQRt31sPEG5Nklx_O0SDnEsnhTSvcANc",
                                "https://cdn.mos.cms.futurecdn.net/aZD75EMbNzuSGSeTFFh7mL.jpg"
                            ],
            
                            orbit_distance_km: 9377,
                            equatorial_diameter_km: 22.533,
                            mass: "1.0659×1016kg (1.78477 nEarths)",
                            orbit_period_in_days: 0.318,
                            surface_temperature_max_celcius: -4,
                            surface_temperature_min_celcius: -112,
                            facts: [

                                "Phobos is one of the least reflective bodies in the Solar System, with an albedo of just 0.071. Surface temperatures range from about −4 °C (25 °F) on the sunlit side to −112 °C (−170 °F) on the shadowed side.",

                                "Phobos is named after the Greek god Phobos, a son of Ares (Mars) and Aphrodite (Venus) and twin brother of Deimos. Phobos was the god and personification of fear and panic and the root of the word phobia.",

                                "Phobos is heavily cratered.[28] The most prominent of these is the crater, Stickney, a large impact crater some 9 km (5.6 mi) in diameter, taking up a substantial proportion of the moon's surface area. The impact that created Stickney must have nearly shattered Phobos and have led to theories that Phobos may be hollow (due to the impact forcing the interior of the moon to be forced out) or in a state of extremely gradual collapse.",
                            ]
                        },
                        {
                            name: "Deimos",
                            position: 2,
                            image_url: [
                                "https://apod.nasa.gov/apod/image/0903/deimos_hirise.jpg",
                                "https://cdn.britannica.com/95/76195-050-06005F96/Deimos-outer-moons-distance-orbiter-Mars-Viking-October-1977.jpg",
                                "https://upload.wikimedia.org/wikipedia/commons/8/8d/Deimos-MRO.jpg",
                            ],
                            orbit_distance_km: 23460,
                            equatorial_diameter_km: 12.4,
                            mass: "1.4762×1015 kg (0.247179 nEarths)",
                            orbit_period_in_days: 1.25,
                            surface_temperature_max_celcius: -4,
                            surface_temperature_min_celcius: -112,
                            facts: [

                                "It is named after Deimos, the Ancient Greek god and personification of dread and terror, and who is also a son of Ares and Aphrodite and the twin brother of Phobos.",

                                "Deimos is possibly an asteroid that was perturbed by Jupiter into an orbit that allowed it to be captured by Mars, though this hypothesis is still controversial and disputed.",

                                "Deimos's orbit is slowly getting larger, because it is far enough away from Mars and because of tidal acceleration. It is expected to eventually escape Mars's gravity.",

                            ]
                        }
                    ],
                },
                rings: 0,
                orbit_period_days: 686.98,
                surface_temperature_max_celcius: -5,
                surface_temperature_min_celcius: -87,
                facts: [

                    "Mars and Earth have approximately the same landmass. Even though Mars has only 15% of Earths volume and 10% of the Earths mass, around two thirds of the Earth's surface is covered in water as opposed to Mars which has very little water present.",

                    "Mars is home to the tallest mountain in the solar system. Olympus Mons, a shield volcano, is 21km high and 600km in diameter. Evidence from volcanic lava flows is so recent scientists believe it could still be active.",

                    "As of September 2014 there have been 40 missions to Mars including the Curiosity missions (2012 onwards), the MAVEN mission (2014) and the NASA’s InSight robotic lander mission (2016).",

                    "Mars has the largest dust storms in the solar system. They can last for months and cover the entire planet.The seasons are extreme because its elliptical(oval- shaped) orbital path around the Sun is more elongated than most other planets in the solar system.",

                    "At the closest point to the Sun, Mar's southern hemisphere has a short hot summer, while the north endures a brief cold winter. At its farthest point, the north hemisphere leans to the Sun, causing a long mild summer, while the south endures a lengthy cold winter.",

                    "Pieces of Mars have fallen to Earth. Scientists have found tiny traces of Mars atmosphere within meteorites that crashed landing on Earth. This allowed scientists to begin studying Mars prior to launching space missions.",

                    "Mars takes its name from the Roman god of war. The ancient Greeks called the planet Ares, after their god of war; the Romans then did likewise, associating the planet’s blood- red colour with their own god of war.",
                    
                    "Interestingly, many ancient cultures focused on Mars colour, to China’s astronomers it was ‘the fire star’, whilst Egyptian priests called on ‘Her Desher’ or ‘the red one’.The red colour Mars is known for is due to rock and dust covering its surface being rich in iron.",

                    "There are signs of liquid water on Mars. The first signs of trickling water are dark stripes or stains on crater wall and cliffs seen in satellite images. Due to Mars atmosphere this water would have to be salty to prevent it from freezing or vaporizing.",

                    "One day Mars will have a ring. In the next 20-40 million years Mars largest moon Phobos will be torn apart by gravitational forces leading to the creation of a ring that could last up to 100 million years.",

                    "Sunsets on Mars are blue and often very bright. During the day the sky is pinkish-red and somewhat dull. This is the opposite of the Earths skies and due to its atmosphere reacting with the white light of the Sun.",

                    "It's thought that Mars's core is predominantly made up of iron, but also nickel and sulphur. The core is about half the size of the planet itself and may be entirely liquid, or have a solid iron centre and a liquid exterior.",

                    "The deepest canyon on Mars is Valles Marineris at 7 kilometres. Earths Grand Canyon is only 1.8 kilometres deep. Valles Marineris was mostly formed by tectonic processes and would experience fundamentally different pressure to the surface.",

                    "Mars thin atmosphere makes for extreme temperature differences on the planet. When the Sun's energy enters the atmosphere, it is not equally dispersed and easily escapes back out into space, which make extreme variation likely.",

                    "Mars has an elliptical orbit, meaning it is egg or oval-shaped as opposed to circular like Earth's orbit. This means that throughout its year, Mars distance from the Sun ranges between around 206 million and 249 million kilometres. ",

                    "Mars has a large, dark patch on its surface, known as the Syrtis Major Planum. It reaches around 1,500 kilometres north from the equator and is around 1,000 kilometres in width. The dark colour is due to its primarily basalt rock composition.",
                ],
            },

            {
                name: "Jupiter",
                planet_intro: "Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. One spacecraft — NASA's Juno orbiter — is currently exploring this giant world.",
                position_from_sun: 5,
                image_url: [
                    "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
                    "https://cdn.mos.cms.futurecdn.net/iEv6pmS4gfbefs5JbwHWiJ.png",
                    "https://scitechdaily.com/images/Planet-Jupiter.jpg",
                    "https://www.pnas.org/content/pnas/117/29/16716/F1.large.jpg",
                    "https://cdn.britannica.com/84/4284-050-16C7E8C2/Photograph-Jupiter-range-Voyager-1-cloud-bands-February-1-1979.jpg",
                ],
                latin_name: "Iuppiter",
                sumerian_name: "Enlil",
                orbit_distance_km: 778340821,
                orbit_distance_au: 5.20,
                equatorial_diameter_km: 142984,
                mass: "1.90 × 10^27kg (318 Earths)",
                moons: {
                    moon_list: [
                        "Metis",
                        "Adrastea",
                        "Amalthea",
                        "Thebe",
                        "Io",
                        "Europa",
                        "Ganymede",
                        "Callisto",
                        "Themisto",
                        "Leda",
                        "Ersa",
                        "Pandia",
                        "Himalia",
                        "Lysithea",
                        "Elara",
                        "Dia",
                        "Carpo",
                        "Valetudo",
                        "Euporie",
                        "Eupheme",
                        "S/2003 J 1",
                        "S/2010 J 2",
                        "Helike",
                        "S/2003 J 16",
                        "S/2003 J 2",
                        "Euanthe",
                        "S/2017 J 7",
                        "Hermippe",
                        "Praxidike",
                        "Thyone",
                        "Thelxinoe",
                        "S/2017 J 3",
                        "Ananke",
                        "Mneme",
                        "S/2016 J 1",
                        "Orthosie",
                        "Harpalyke",
                        "Iocaste",
                        "S/2017 J 9",
                        "S/2003 J 12",
                        "S/2003 J 4",
                        "Erinome",
                        "Aitne",
                        "Herse",
                        "Taygete",
                        "S/2017 J 2",
                        "S/2017 J 6",
                        "Eukelade",
                        "Carme",
                        "S/2003 J 19",
                        "Isonoe",
                        "S/2003 J 10",
                        "Autonoe",
                        "Philophrosyne",
                        "Cyllene",
                        "Pasithee",
                        "S/2010 J 1",
                        "Pasiphae",
                        "Sponde",
                        "S/2017 J 8",
                        "Eurydome",
                        "S/2017 J 5",
                        "Kalyke",
                        "Hegemone",
                        "Kale",
                        "Kallichore",
                        "S/2011 J 1",
                        "S/2017 J 1",
                        "Chaldene",
                        "Arche",
                        "Eirene",
                        "Kore",
                        "S/2011 J 2",
                        "S/2003 J 9",
                        "Megaclite",
                        "Aoede",
                        "S/2003 J 23",
                        "Callirrhoe",
                        "Sinope",
                    ],
                    sig_moons: [
                        {
                            name: "Io",
                            position: 5,
                            image_url: [
                                "https://cdn.mos.cms.futurecdn.net/f8FkN4Z2kXwUxmF5DQQgqc.jpg",
                                "https://solarsystem.nasa.gov/system/stellar_items/image_files/14_feature_1600x900_io.jpg",
                                "https://lh3.googleusercontent.com/proxy/rn-zc2-hxx7uC45oKOabXtaAXug32mT40iVRwIq0CP3PRWLPD7gKDr6gEI5n2mu01LTFPXjbrtockvPFgeM1t8o3jD6nZU44VoBt9jXNpuyTqg"
                            ],
                            orbit_distance_km: 422000,
                            equatorial_diameter_km: 3643.2,
                            mass: "(8.931938±0.000018) × 1022kg (0.015 Earths)",
                            orbit_period_in_days: 1.77,
                            surface_temperature_max_celcius: 1200,
                            surface_temperature_min_celcius: -130,
                            facts: [

                                "Io was discovered in 1610 by Galileo Galilei and was named after the mythological character Io, a priestess of Hera who became one of Zeus's lovers. Features on Io are named after characters and places from the Io myth, as well as deities of fire, volcanoes, the Sun, and thunder from various myths, and characters and places from Dante's Inferno: names appropriate to the volcanic nature of the surface.",

                                "Unlike most moons in the outer Solar System, which are mostly composed of water ice, Io is primarily composed of silicate rock surrounding a molten iron or iron sulfide core. Most of Io's surface is composed of extensive plains with a frosty coating of sulfur and sulfur dioxide.",

                                "Io has the hottest surface of any planetary body in our solar system, due to a mix of extreme radiation, volcanic activity and unique atmosphere make-up which includes a large plasma torus thanks to the influence of Jupiter.Since the surface was first seen up close by Voyager 1, the International Astronomical Union has approved 225 names for Io's volcanoes, mountains, plateaus, and large albedo features.",

                            ]
                        },

                        {
                            name: "Europa",
                            position: 6,
                            image_url: [
                                "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/05/new_evidence_of_watery_plumes_on_jupiter_s_moon_europa/22008941-1-eng-GB/New_evidence_of_watery_plumes_on_Jupiter_s_moon_Europa_pillars.jpg",
                                "https://cbsnews1.cbsistatic.com/hub/i/2015/07/06/4c4c3b65-afc4-4899-acfb-b977f96bf85a/blood-redscarsandveinsoneuropa.jpg",
                                "https://upload.wikimedia.org/wikipedia/commons/e/e4/Europa-moon-with-margins.jpg"
                            ],
                            orbit_distance_km: 671000,
                            equatorial_diameter_km: 1569,
                            mass: "(4.799844±0.000013) × 1022kg (0.008 Earths)",
                            orbit_period_in_days: 3.551181,
                            surface_temperature_max_celcius: -160,
                            surface_temperature_min_celcius: -220,
                            facts: [

                                "Europa or Jupiter II, is the smallest of the four Galilean moons orbiting Jupiter, and the sixth-closest to the planet of all the 79 known moons of Jupiter. It is also the sixth-largest moon in the Solar System. Europa was discovered in 1610 by Galileo Galilei and was named after Europa, the Phoenician mother of King Minos of Crete and lover of Zeus (the Greek equivalent of the Roman god Jupiter).",

                                "Slightly smaller than Earth's Moon, Europa is primarily made of silicate rock and has a water-ice crust and probably an iron–nickel core. It has a very thin atmosphere, composed primarily of oxygen. Its surface is striated by cracks and streaks, but craters are relatively few. In addition to Earth-bound telescope observations, Europa has been examined by a succession of space-probe flybys, the first occurring in the early 1970s.",

                                "Europa has the smoothest surface of any known solid object in the Solar System. The apparent youth and smoothness of the surface have led to the hypothesis that a water ocean exists beneath the surface, which could conceivably harbor extraterrestrial life.",

                            ]
                        },

                        {
                            name: "Ganymede",
                            position: 7,
                            image_url: [
                                "https://scx2.b-cdn.net/gfx/news/2015/8-jupitersmoon.jpg",
                                "https://upload.wikimedia.org/wikipedia/commons/f/f2/Ganymede_g1_true-edit1.jpg",
                                "https://solarsystem.nasa.gov/system/content_pages/main_images/445_PIA00716.jpg"
                            ],
                            orbit_distance_km: 1070400,
                            equatorial_diameter_km: 2631.2,
                            mass: "1.4819×1023 kg (0.025 Earths)",
                            orbit_period_in_days: 7.3,
                            surface_temperature_max_celcius: -183,
                            surface_temperature_min_celcius: -113,
                            facts: [

                                "Ganymede is a satellite of Jupiter (Jupiter III) and is the largest and most massive of the Solar System's moons. The ninth-largest object in the Solar System, it is the largest without a substantial atmosphere. Possessing a metallic core, it has the lowest moment of inertia factor of any solid body in the Solar System and is the only moon known to have a magnetic field.",

                                "Its surface is composed of two main types of terrain. Dark regions, saturated with impact craters and dated to four billion years ago, cover about a third of it. Lighter regions, crosscut by extensive grooves and ridges and only slightly less ancient, cover the remainder. The cause of the light terrain's disrupted geology is not fully known, but was likely the result of tectonic activity due to tidal heating.",

                                "Ganymede is composed of approximately equal amounts of silicate rock and water.It is a fully differentiated body with an iron- rich, liquid core, and an internal ocean that may contain more water than all of Earth's oceans combined."

                            ]
                        },

                        {
                            name: "Callisto",
                            position: 8,
                            image_url: [
                                "https://i.pinimg.com/originals/66/22/b0/6622b05975668d468e8cffa5fcc35115.jpg",
                                "https://static.wikia.nocookie.net/marvelcomicsfanon/images/1/13/Telos.jpg/revision/latest?cb=20190816151817",
                                "https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg",

                            ],
                            orbit_distance_km: 1883000,
                            equatorial_diameter_km: 2400,
                            mass: "(1.075938±0.000137) × 1023kg (0.018 Earths)",
                            orbit_period_in_days: 16.68902,
                            surface_temperature_max_celcius: -22.15,
                            surface_temperature_min_celcius: -108.15,
                            facts: [

                                "Callisto is about 4.5 billion years old, about the same age as Jupiter. It is the most heavily cratered object in the solar system, according to NASA. There is hardly any geologic activity on its surface. The surface has not changed much since initial impacts molded its surface 4 billion years ago.",

                                "If Callisto is habitable — and how it formed that way — are among the outstanding questions that the JUICE mission will start studying. JUICE is slated to launch toward Jupiter in 2022 and work at the planet for at least three years, between 2030 and 2033.",

                                "The likely presence of an ocean within Callisto leaves open the possibility that it could harbor life. However, conditions are thought to be less favorable than on nearby Europa.[23] Various space probes from Pioneers 10 and 11 to Galileo and Cassini have studied Callisto. Because of its low radiation levels, Callisto has long been considered the most suitable place for a human base for future exploration of the Jovian system.",
                            ]
                        }
                    ]
                },
                rings: 4,
                orbit_period_days: 4333,
                surface_temperature_max_celcius: -108,
                surface_temperature_min_celcius: -161,
                facts: [

                    "Jupiter is the fourth brightest object in the solar system. Only the Sun, Moon and Venus are brighter. It is one of five planets visible to the naked eye from Earth and is more visible at different points in the year.",

                     "Jupiter is named after the father of the Roman gods. To the Greeks, it represented Zeus. The Mesopotamians saw Jupiter as the god Marduk and patron of the city of Babylon. Germanic tribes saw Jupiter as Donar, or Thor.",

                    "Jupiter has the shortest day of all the planets. It turns on its axis once every 9 hours and 55 minutes. The rapid rotation flattens the planet slightly, giving it an oblate shape and causing its equator to bulge slightly.",

                    "Jupiter orbits the Sun once every 11.8 of Earths years. From our point of view on our home planet, it appears to move slowly and deliberately in the sky, taking months to move from one constellation to another.",

                    "Jupiter has unique cloud features. The upper atmosphere of Jupiter is divided into cloud belts and zones, partially due to its enormous size. They are made primarily of ammonia crystals, sulfur, and mixtures of the two compounds.",

                    "The Great Red Spot is a huge storm on Jupiter. It has raged for at least 350 years. It is so large that three of Earths could fit inside it. The energy generated by the storm is estimated to be more than humanity has used in the last 2000 years.",

                    "Jupiter's interior is made of rock, metal, and hydrogen compounds. Below its massive atmosphere (which is made primarily of hydrogen), there are layers of compressed hydrogen gas, liquid metallic hydrogen, and a core of ice, rock, and metals.",

                    "Jupiter's moons are sometimes called the Jovian satellites, the largest of these are Ganymeade, Callisto, Io and Europa. Ganymeade measures 5268 km across which makes it, despite being a moon, larger than some other planets in our solar system.",

                    "Jupiter has a thin ring system composed mainly of dust particles ejected during impacts from incoming comets and asteroids. It begins 92000 kilometres above Jupiter and stretches out to more than 225000 km from the planet.",

                    "9 spacecraft have visited Jupiter. Pioneer 10 and 11, Voyager 1 and 2, Galileo, Cassini, Ulysses, Juno, and New Horizons missions. Other future missions may focus on the Jovian moons Europa, Ganymede, and Callisto, and their subsurface oceans.",

                    "Jupiter is sometimes considered a failed star. If Jupiter had become 80 times more massive, nuclear fusion would have occurred in its core. Had that happened, it would have become a star instead of a planet.",

                    "Jupiter does not experience seasons like other planets such as Earth and Mars. This is because the axis is only tilted by 3.13 degrees. As such, temperatures are very predictable across the surface of Jupiter.",

                    "Jupiter (due to its size) is the only planet that has a center of mass with the Sun that lies outside the volume of the Sun, though by only 7% of the Sun’s radius. Technically, Jupiter orbits the surface of the sun, not the Sun's centre.",

                    "A lot like the Sun, Jupiter is mostly composed of hydrogen and helium. Jupiter contains the largest ocean in the solar system, an ocean of liquid hydrogen. Jupiter have liquid metallic hydrogen in its centre due to extreme pressure.",

                    "Jupiter actually experiences the most intense auroras in the solar system. Jupiter has an additional source for its auroras beyond solar winds, charged particles thrown into space by its orbiting moon Io, which is famous for its many large volcanoes.",

                ],
            },

            {
                name: "Saturn",
                planet_intro: "Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.",
                position_from_sun: 6,
                image_url: [
                    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
                    "https://i.pinimg.com/originals/aa/2f/78/aa2f78effbe107f23b6e5a3aebd4d563.jpg",
                    "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg",
                    "https://i.pinimg.com/originals/f1/a4/22/f1a42242dbe3d614dc7f252198c3eee0.jpg",
                    "https://i.pinimg.com/originals/55/d2/e0/55d2e0b23e378116cf04ea2ebe19f63f.jpg",
                ],
                latin_name: "Saturnus",
                sumerian_name: "Ninurta",
                orbit_distance_km: 1426666422,
                orbit_distance_au: 9.58,
                equatorial_diameter_km: 120536,
                mass: "5.68 × 10^26 kg (95 Earths)",
                moons: {
                    moon_list: [
                        "S/2009 S 1",
                        "Pan",
                        "Daphnis",
                        "Atlas",
                        "Prometheus",
                        "Pandora",
                        "Epimetheus",
                        "Janus",
                        "Aegaeon",
                        "Mimas",
                        "Methone",
                        "Anthe",
                        "Pallene",
                        "Enceladus",
                        "Tethys",
                        "Telesto",
                        "Calypso",
                        "Dione",
                        "Helene",
                        "Polydeuces",
                        "Rhea",
                        "Titan",
                        "Hyperion",
                        "Iapetus",
                        "Kiviuq",
                        "Ijiraq",
                        "Phoebe",
                        "Paaliaq",
                        "Skathi",
                        "S/2004 S 37",
                        "S/2007 S 2",
                        "Albiorix",
                        "Bebhionn",
                        "S/2004 S 29",
                        "Skoll",
                        "S/2004 S 31",
                        "Erriapus",
                        "Tarqeq",
                        "Siarnaq",
                        "Tarvos",
                        "Hyrrokkin",
                        "Greip",
                        "Mundilfari",
                        "S/2004 S 13",
                        "S/2006 S 1",
                        "S/2007 S 3",
                        "Suttungr",
                        "S/2004 S 20",
                        "Jarnsaxa",
                        "Narvi",
                        "Bergelmir",
                        "Hati",
                        "S/2004 S 17",
                        "S/2004 S 12",
                        "S/2004 S 27",
                        "Farbauti",
                        "Thrymr",
                        "Bestla",
                        "S/2004 S 7",
                        "Aegir",
                        "S/2004 S 30",
                        "S/2004 S 22",
                        "S/2004 S 25",
                        "S/2004 S 32",
                        "S/2004 S 23",
                        "S/2006 S 3",
                        "S/2004 S 35",
                        "Kari",
                        "S/2004 S 28",
                        "Loge",
                        "S/2004 S 38",
                        "Fenrir",
                        "Ymir",
                        "Surtur",
                        "S/2004 S 33",
                        "S/2004 S 24",
                        "S/2004 S 21",
                        "S/2004 S 39",
                        "S/2004 S 36",
                        "Fornjot",
                        "S/2004 S 34",
                        "S/2004 S 26",
                    ],
                    sig_moons: [
                        {
                            name: "Mimas",
                            position: 10,
                            image_url: [
                                "https://cdn.mos.cms.futurecdn.net/WiawvKiNw9xCjC8BWLmay6.jpg",
                                "https://lh3.googleusercontent.com/proxy/bxSt_VeT-q0qQxjzGCOIiTEu3COIdQbV67P3OyeFA7qRKOL28l3uUBdHxidTb_TDMlfjsvnhYkFl3t7IG3wpgnJDHNpG9E2sx4Zxa25ZQtDh4-xs",
                                "https://static.wikia.nocookie.net/planet-archives/images/3/3e/Mimas.jpg/revision/latest?cb=20200704181732",
                            ],
                            orbit_distance_km: 186000,
                            equatorial_diameter_km: 396.4,
                            mass: "(3.7493±0.0031) × 1019kg (6.3×10−6 Earths)",
                            orbit_period_in_days: 0.942,
                            surface_temperature_max_celcius: -181.15,
                            surface_temperature_min_celcius: -200,
                            facts: [

                                "Mimas, also designated Saturn I, is a moon of Saturn which was discovered in 1789 by William Herschel. It is named after Mimas, a son of Gaia in Greek mythology.",

                                "Mimas's most distinctive feature is a giant impact crater 130 km (81 mi) across, named Herschel after the discoverer of Mimas. Herschel's diameter is almost a third of Mimas's own diameter; its walls are approximately 5 km (3 mi) high, parts of its floor measure 10 km (6 mi) deep, and its central peak rises 6 km (4 mi) above the crater floor. If there were a crater of an equivalent scale on Earth (in relative size) it would be over 4,000 km (2,500 mi) in diameter, wider than Australia. The impact that made this crater must have nearly shattered Mimas: fractures can be seen on the opposite side of Mimas that may have been created by shock waves from the impact travelling through Mimas's core.",

                                "When seen from certain angles, Mimas resembles the Death Star, a fictional space station and superweapon known from the 1977 film Star Wars. Herschel resembles the concave disc of the Death Star's superlaser. This is coincidental, as the film was made nearly three years before Mimas was resolved well enough to see the crater.",
                            ]
                        },
                        {
                            name: "Enceladus",
                            position: 14,
                            image_url: [
                                "https://upload.wikimedia.org/wikipedia/commons/8/83/PIA17202_-_Approaching_Enceladus.jpg",
                                "https://solarsystem.nasa.gov/system/content_pages/main_images/486_PIA11133.jpg",
                                "https://www.universetoday.com/wp-content/uploads/2014/12/enceladusstripes_cassini_big-e1445285714763.jpg"
                            ],
                            orbit_distance_km: 147909,
                            equatorial_diameter_km: 252.1,
                            mass: "(1.08022±0.00101) × 1020kg (1.8×10−5 Earths)",
                            orbit_period_in_days: 1.4,
                            surface_temperature_max_celcius: -128,
                            surface_temperature_min_celcius: -240,
                            facts: [

                                "Enceladus is the sixth-largest moon of Saturn. It is about 500 kilometers (310 mi) in diameter, about a tenth of that of Saturn's largest moon, Titan. Enceladus is mostly covered by fresh, clean ice, making it one of the most reflective bodies of the Solar System.",

                                "The geyser observations, along with the finding of escaping internal heat and very few (if any) impact craters in the south polar region, show that Enceladus is currently geologically active. On June 27, 2018, scientists reported the detection of complex macromolecular organics on Enceladus's jet plumes, as sampled by the Cassini orbiter. These indicate potential hydrothermal activity on the moon driving complex chemistry.",

                                "Enceladus is named after the giant Enceladus of Greek mythology. The name, like the names of each of the first seven satellites of Saturn to be discovered, was suggested by William Herschel's son John Herschel in his 1847 publication Results of Astronomical Observations made at the Cape of Good Hope. He chose these names because Saturn, known in Greek mythology as Cronus, was the leader of the Titans.",
                            ]
                        },
                        {
                            name: "Tethys",
                            position: 15,
                            image_url: [
                                "https://www.universetoday.com/wp-content/uploads/2012/04/tethys-4-14-12-melanthius.jpg",
                                "https://www.geo.fu-berlin.de/geol/fachrichtungen/planet/press/archiv2015/cassini_tethys1/bild_orbit214_color-mosaic/orbit214_color-mosaic_546.png",
                                "https://lh3.googleusercontent.com/proxy/uFTMScttTGUxz7ICf6GV3UIRCdFI_CHM-F_eCWDM1Q93QJvtcK4l7Hc7-y_Iv3zbqaSPggeS2phVbmC1Y7Q1tYkV5aks_XNJBc9J4i5ihA7Yi0yO4qEC"
                            ],
                            orbit_distance_km: 295000,
                            equatorial_diameter_km: 1062,
                            mass: "6.17 × 1020kg (0.000103 Earth mass)",
                            orbit_period_in_days: 1.9,
                            surface_temperature_max_celcius: -147,
                            surface_temperature_min_celcius: -196,
                            facts: [

                                "Tethys, or Saturn III, is a mid-sized moon of Saturn about 1,060 km (660 mi) across. It was discovered by G. D. Cassini in 1684 and is named after the titan Tethys of Greek mythology.",

                                "Tethys has a low density of 0.98 g/cm3, the lowest of all the major moons in the Solar System, indicating that it is made of water ice with just a small fraction of rock. This is confirmed by the spectroscopy of its surface, which identified water ice as the dominant surface material. A small amount of an unidentified dark material is present as well. The surface of Tethys is very bright, being the second-brightest of the moons of Saturn after Enceladus, and neutral in color.",

                                "Tethys has been approached by several space probes including Pioneer 11 (1979), Voyager 1 (1980), Voyager 2 (1981), and multiple times by Cassini between 2004 and 2017.",
                            ]
                        },
                        {
                            name: "Dione",
                            position: 18,
                            image_url: [
                                "https://cdn.britannica.com/74/145074-050-4D9110AA/Dione-image-moons-Saturn-spacecraft-Cassini-July-24-2006.jpg",
                                "https://upload.wikimedia.org/wikipedia/commons/d/d0/Dione_in_natural_light_%28cropped%29.jpg",
                                "https://cdn.britannica.com/20/3920-050-1D493D3F/moon-Dione-Saturn-distance-Voyager-1-NASA-November-10-1980.jpg",
                            ],
                            orbit_distance_km: 377400,
                            equatorial_diameter_km: 1122.8,
                            mass: "(1.095452±0.000168) × 1021kg (1.834×10−4 Earths)",
                            orbit_period_in_days: 2.6,
                            surface_temperature_max_celcius: -162,
                            surface_temperature_min_celcius: -186,
                            facts: [

                                "Dione (/daɪˈoʊni/) is a moon of Saturn. It was discovered by Italian astronomer Giovanni Domenico Cassini in 1684. It is named after the Titaness Dione of Greek mythology. It is also designated Saturn IV.",

                                "At 1122 km (697 mi) in diameter, Dione is the 15th largest moon in the Solar System, and is more massive than all known moons smaller than itself combined. About two thirds of Dione's mass is water ice, and the remaining is a dense core, probably silicate rock.",

                                "Giovanni Domenico Cassini named the four moons he discovered (Tethys, Dione, Rhea and Iapetus) Sidera Lodoicea ('the stars of Louis') to honor king Louis XIV. Cassini found Dione in 1684 using a large aerial telescope he set up on the grounds of the Paris Observatory. The satellites of Saturn were not named until 1847, when William Herschel's son John Herschel published Results of Astronomical Observations made at the Cape of Good Hope, suggesting that the names of the Titans (sisters and brothers of Cronus) be used.",
                            ]
                        },
                        {
                            name: "Rhea",
                            position: 21,
                            image_url: [
                                "https://upload.wikimedia.org/wikipedia/commons/4/41/Rhea_%28moon%29.jpg",
                                "https://lh3.googleusercontent.com/proxy/X-2oz6cPPzS6ndNkDI3VsSmR8kkcSix9aPS6ZRe-QqIvYqAj9nOelnwZUxJy8KF5D20PdtxJ-1ZfCG6hh50i4A-i1QEr6DJ1y3uF5otGhaZS0js8",
                                "https://solarsystem.nasa.gov/system/content_pages/main_images/805_PIA12648.jpg",

                            ],
                            orbit_distance_km: 527068,
                            equatorial_diameter_km: 1527.6,
                            mass: "(2.306518±0.000353) × 1021kg (~3.9×10−4 Earths)",
                            orbit_period_in_days: 4.5,
                            surface_temperature_max_celcius: -174,
                            surface_temperature_min_celcius: -220,
                            facts: [

                                "Rhea is the second-largest moon of Saturn and the ninth-largest moon in the Solar System. It is the second smallest body in the Solar System for which precise measurements have confirmed a shape consistent with hydrostatic equilibrium, after dwarf planet Ceres. It was discovered in 1672 by Giovanni Domenico Cassini.",

                                "Rhea is named after the Titan Rhea of Greek mythology, the 'mother of the gods' and wife of Kronos, the Greek counterpart of the god Saturn. It is also designated Saturn V (being the fifth major moon going outward from the planet, after Mimas, Enceladus, Tethys, and Dione).",

                                "On March 6, 2008, NASA announced that Rhea may have a tenuous ring system. This would mark the first discovery of rings around a moon. The rings' existence was inferred by observed changes in the flow of electrons trapped by Saturn's magnetic field as Cassini passed by Rhea. Dust and debris could extend out to Rhea's Hill sphere, but were thought to be denser nearer the moon, with three narrow rings of higher density",

                            ]
                        },
                        {
                            name: "Titan",
                            position: 22,
                            image_url: [
                                "https://mk0astronomynow9oh6g.kinstacdn.com/wp-content/uploads/2015/12/PIA20016.jpg",
                                "https://www.universetoday.com/wp-content/uploads/2016/04/titan_large.jpg",
                                "https://media.tegna-media.com/assets/WQAD/images/d6c14552-b85f-4c85-875f-65331a327f61/d6c14552-b85f-4c85-875f-65331a327f61_750x422.jpg"
                            ],
                            orbit_distance_km: 1400000000,
                            equatorial_diameter_km: 5149.5,
                            mass: "(1.3452±0.0002) × 1023kg (0.0225 Earths)",
                            orbit_period_in_days: 16,
                            surface_temperature_max_celcius: -179.6,
                            surface_temperature_min_celcius: -185.6,
                            facts: [

                                "Titan is the largest moon of Saturn and the second-largest natural satellite in the Solar System. It is the only moon known to have a dense atmosphere, and the only known body in space, other than Earth, where clear evidence of stable bodies of surface liquid has been found.",

                                "Titan is one of seven gravitationally rounded moons in orbit around Saturn, and the second most distant from Saturn of those seven. Frequently described as a planet-like moon, Titan is 50% larger (in diameter) than Earth's Moon and 80% more massive. It is the second-largest moon in the Solar System after Jupiter's moon Ganymede, and is larger than the planet Mercury, but only 40% as massive.",

                                "The atmosphere of Titan is largely nitrogen; minor components lead to the formation of methane and ethane clouds and heavy organonitrogen haze. The climate—including wind and rain—creates surface features similar to those of Earth, such as dunes, rivers, lakes, seas (probably of liquid methane and ethane), and deltas, and is dominated by seasonal weather patterns as on Earth. With its liquids (both surface and subsurface) and robust nitrogen atmosphere, Titan's methane cycle bears a striking similarity to Earth's water cycle, albeit at the much lower temperature of about 94 K (−179.2 °C; −290.5 °F)",

                            ]
                        },
                        {
                            name: "Iapetus",
                            position: 24,
                            image_url: [
                                "https://upload.wikimedia.org/wikipedia/commons/c/c9/Iapetus_as_seen_by_the_Cassini_probe_-_20071008.jpg",
                                "https://astronomy.com/~/media/DE89D2749359491BAEA168DDB386F6B4.jpg",
                                "https://i.imgur.com/EZeEUrc.jpg"
                            ],
                            orbit_distance_km: 3561300,
                            equatorial_diameter_km: 1469,
                            mass: "(1.805635±0.000375) × 1021kg (0.1155 Earths)",
                            orbit_period_in_days: 79,
                            surface_temperature_max_celcius: -143.333,
                            surface_temperature_min_celcius: -173.333,
                            facts: [

                                "Iapetus is the third-largest natural satellite of Saturn, eleventh-largest in the Solar System, and the largest body in the Solar System known not to be in hydrostatic equilibrium. Discoveries by the Cassini mission in 2007 revealed several unusual features, such as a massive equatorial ridge running three-quarters of the way around the moon.",

                                "apetus is named after the Titan Iapetus from Greek mythology. The name was suggested by John Herschel (son of William Herschel, discoverer of Mimas and Enceladus) in his 1847 publication Results of Astronomical Observations made at the Cape of Good Hope, in which he advocated naming the moons of Saturn after the Titans, brothers and sisters of the Titan Cronus (whom the Romans equated with their god Saturn).",

                                "The orbit of Iapetus is somewhat unusual. Although it is Saturn's third-largest moon, it orbits much farther from Saturn than the next closest major moon, Titan. It has also the most inclined orbital plane of the regular satellites; only the irregular outer satellites like Phoebe have more inclined orbits. Because of this distant, inclined orbit, Iapetus is the only large moon from which the rings of Saturn would be clearly visible; from the other inner moons, the rings would be edge-on and difficult to see.",
                            ]
                        },
                    ]
                },
                rings: 7,
                orbit_period_days: 10756,
                surface_temperature_max_celcius: -122,
                surface_temperature_min_celcius: -185,
                facts: [

                    "Saturn is the most distant planet that can be seen with the naked eye, though this is difficult. It is the fifth brightest object in the solar system and is also easily studied through binoculars or a small telescope.",

                    "Saturn was known to the ancients, including the Babylonians and Far Eastern observers. It is named for the Roman god Saturnus, and was known to the Greeks as Cronus. It was often designed as chasing Jupiter in the sky.",

                    "Saturn is the flattest planet. It's polar diameter is 90% of its equatorial diameter, this is due to its low density and fast rotation.Saturn turns on its axis once every 10 hours and 34 minutes giving it the second, shortest day of any of the solar system’s planets.",

                    "Saturn orbits the Sun once every 29.4 Earth years. Its slow movement against the backdrop of stars earned it the nickname of “Lubadsagush” from the ancient Assyrians. The name means “oldest of the old” and added to the myths of it chasing Jupiter.",

                    "Saturn’s upper atmosphere is divided into bands of clouds. The top layers are mostly ammonia ice. Below them, the clouds are largely water ice. Below are layers of cold hydrogen and sulfur ice mixtures.",

                    "The region around its north pole has a hexagonal-shaped pattern of clouds. Scientists think this may be a wave pattern in the upper clouds.The planet also has a vortex over its south pole that resembles a hurricane-like storm.",

                    "Saturn is made mostly of hydrogen. It exists in layers that get denser farther into the planet. Eventually, deep inside, the hydrogen becomes metallic. At the core lies a very hot interior with possibly unique metals present.",

                    "Saturn has the most extensive rings in the solar system. The Saturnian rings are made mostly of chunks of ice and small amounts of carbonaceous dust.The rings stretch out more than 120, 700 km from the planet, but are amazingly thin: only about 20 meters thick.",

                    "Saturn has 150 orbiting objects, between moons and smaller moonlets. All are frozen worlds. The largest moons are Titan and Rhea which both appears to have an ocean below their frozen surfaces.",

                    "Titan is a moon with a nitrogen-rich atmosphere, composed mostly of water ice and rock. Its frozen surface has lakes of liquid methane and landscapes covered with frozen nitrogen. Planetary scientists consider Titan to be a possible harbour for life.",

                    "Four spacecraft have visited Saturn. Pioneer 11, Voyager 1 and 2, and the Cassini-Huygens mission have all studied the planet. Cassini orbited Saturn from July 2004 until September 2017, sending back a wealth of data about the planet, its moons, and rings.",

                    "Saturn has more moons than any other planet. 20 new moons were discovered in 2019 bring the total to 82, 3 more than Jupiter. Many of these moons are still awaitng official naming and go instead by object designation codes (e.g. S/2004 S 30).",

                    "Galileo Galilei was the first to see Saturn's rings in 1610, although from his telescope the rings looked more like handles or arms. In 1655, Dutch astronomer Christiaan Huygens, who had a more powerful telescope, proposed that Saturn had a thin, flat ring.",

                    "Though scientists have identified many moons, Saturn has other small moons constantly being created and destroyed. It's gravity snatches passing asteroids or alters their path, as well as causes collisions or drags objects down to its surface",

                    "As the most massive planet in the solar system after Jupiter, the pull of Saturn's gravity has helped shape the fate of our solar system. It may have helped violently hurl Neptune and Uranus outward.",

                ],
            },

            {

                name: "Uranus",
                planet_intro: "Uranus is known as the “sideways planet” because it rotates on its side. Uranus was discovered in 1781 by William Herschel and does not appear to have been known to ancient civilizations. Uranus was the first planet found using a telescope. Uranus is an Ice Giant planet and nearly four times larger than Earth.",
                position_from_sun: 7,
                image_url: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg",
                    "https://data.whicdn.com/images/331818858/original.jpg?t=1561112500",
                    "https://miro.medium.com/max/960/1*F04NVRyBDRuLwPkD0rBN9w.jpeg",
                    "https://i.natgeofe.com/n/c1ee2a2c-b6c8-44ad-8e29-413a49732225/42912.jpg",
                    "https://www.universetoday.com/wp-content/uploads/2014/11/4_179.jpg",
                ],
                latin_name: "Uranus",
                sumerian_name: null,
                orbit_distance_km: 2870658186,
                orbit_distance_au: 19.22,
                equatorial_diameter_km: 51118,
                mass: "8.68 × 10^25 kg (15 Earths)",
                moons: {
                    moon_list: [
                        "Cordelia",
                        "Ophelia",
                        "Bianca",
                        "Cressida",
                        "Desdemona",
                        "Juliet",
                        "Portia",
                        "Rosalind",
                        "Cupid",
                        "Belinda",
                        "Perdita",
                        "Puck",
                        "Mab",
                        "Miranda",
                        "Ariel",
                        "Umbriel",
                        "Titania",
                        "Oberon",
                        "Francisco",
                        "Caliban",
                        "Stephano",
                        "Trinculo",
                        "Sycorax",
                        "Margaret",
                        "Prospero",
                        "Setebos",
                        "Ferdinand",
                    ],
                    sig_moons: [
                        {
                            name: "Miranda",
                            position: 14,
                            image_url: [
                                "https://upload.wikimedia.org/wikipedia/commons/e/e1/PIA18185_Miranda%27s_Icy_Face.jpg",
                                "https://cdn.britannica.com/32/78232-050-8CCA6A1E/innermost-moons-Miranda-Uranus-mosaic-images-Voyager-Jan-24-1986.jpg",
                                "https://www.nasa.gov/sites/default/files/images/173645main_image_feature_796_ys_full.jpg"
                            ],
                            orbit_distance_km: 129900,
                            equatorial_diameter_km: 471.6,
                            mass: "(6.4±0.3) × 1019kg",
                            orbit_period_in_days: 1.4,
                            surface_temperature_max_celcius: -189.15,
                            surface_temperature_min_celcius: null,
                            facts: [

                                "Miranda, also designated Uranus V, is the smallest and innermost of Uranus's five round satellites. It was discovered by Gerard Kuiper on 16 February 1948 at McDonald Observatory in Texas, and named after Miranda from William Shakespeare's play The Tempest. Like the other large moons of Uranus, Miranda orbits close to its planet's equatorial plane. Because Uranus orbits the Sun on its side, Miranda's orbit is perpendicular to the ecliptic and shares Uranus' extreme seasonal cycle.",

                                "At just 470 km in diameter, Miranda is one of the smallest closely observed objects in the Solar System that might be in hydrostatic equilibrium (spherical under its own gravity). The only close-up images of Miranda are from the Voyager 2 probe, which made observations of Miranda during its Uranus flyby in January 1986. During the flyby, Miranda's southern hemisphere pointed towards the Sun, so only that part was studied.",

                                "While crater counts suggest that the majority of Miranda's surface is old, with a similar geological history to the other Uranian satellites, few of those craters are particularly large, indicating that most must have formed after a major resurfacing event in its distant past. Craters on Miranda also appear to possess softened edges, which could be the result either of ejecta or of cryovolcanism. The temperature at Miranda's south pole is roughly 85K, a temperature at which pure water ice adopts the properties of rock.",

                            ]
                        },
                        {
                            name: "Ariel",
                            position: 15,
                            image_url: [
                                "https://i.pinimg.com/originals/73/5b/94/735b941e8f2fb269a87642b317c845de.jpg",
                                "https://solarsystem.nasa.gov/system/content_pages/main_images/220_PIA00041.jpg",
                                "https://upload.wikimedia.org/wikipedia/commons/5/59/Ariel_%28moon%29.jpg"
                            ],
                            orbit_distance_km: 190000,
                            equatorial_diameter_km: 1157.8,
                            mass: "(1.251±0.021) × 1021kg",
                            orbit_period_in_days: 3.33,
                            surface_temperature_max_celcius: -190.15,
                            surface_temperature_min_celcius: null,
                            facts: [

                                "Ariel is the fourth-largest of the 27 known moons of Uranus. Ariel orbits and rotates in the equatorial plane of Uranus, which is almost perpendicular to the orbit of Uranus and so has an extreme seasonal cycle. It was discovered in October 1851 by William Lassell and named for a character in two different pieces of literature, Alexander Pope's The Rape of the Lock and Shakespeare's The Tempest.",

                                "Among Uranus's five major moons, Ariel is the second closest to the planet, orbiting at the distance of about 190,000 km.[f] Its orbit has a small eccentricity and is inclined very little relative to the equator of Uranus. Its orbital period is around 2.5 Earth days, coincident with its rotational period. This means that one side of the moon always faces the planet; a condition known as tidal lock.",

                                "Except for water, the only other compound identified on the surface of Ariel by infrared spectroscopy is carbon dioxide (CO2), which is concentrated mainly on its trailing hemisphere. Ariel shows the strongest spectroscopic evidence for CO2 of any Uranian satellite. The origin of the carbon dioxide is not completely clear. It might be produced locally from carbonates or organic materials under the influence of the energetic charged particles coming from Uranus's magnetosphere or solar ultraviolet radiation.",

                            ]
                        },
                        {
                            name: "Umbriel",
                            position: 16,
                            image_url: [
                                "https://sos.noaa.gov/ftp_mirror/astronomy/uranus_moons/umbriel/media/thumbnail_big.jpg",
                                "https://i.pinimg.com/originals/f2/a2/90/f2a2900a77e7540488199ca55cf5e9e3.jpg",
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Umbriel.png/768px-Umbriel.png"
                            ],
                            orbit_distance_km: 266000,
                            equatorial_diameter_km: 1169.4,
                            mass: "(1.275±0.028) × 1021kg",
                            orbit_period_in_days: 4.125,
                            surface_temperature_max_celcius: -188.15,
                            surface_temperature_min_celcius: null,
                            facts: [

                                "Umbriel is a moon of Uranus discovered on October 24, 1851, by William Lassell. It was discovered at the same time as Ariel and named after a character in Alexander Pope's poem The Rape of the Lock. Umbriel consists mainly of ice with a substantial fraction of rock, and may be differentiated into a rocky core and an icy mantle. The surface is the darkest among Uranian moons, and appears to have been shaped primarily by impacts. However, the presence of canyons suggests early endogenic processes, and the moon may have undergone an early endogenically driven resurfacing event that obliterated its older surface.",

                                "Covered by numerous impact craters reaching 210 km (130 mi) in diameter, Umbriel is the second most heavily cratered satellite of Uranus after Oberon. The most prominent surface feature is a ring of bright material on the floor of Wunda crater. This moon, like all moons of Uranus, probably formed from an accretion disk that surrounded the planet just after its formation.",

                                "Umbriel may be differentiated into a rocky core surrounded by an icy mantle. If this is the case, the radius of the core (317 km) is about 54% of the radius of the moon, and its mass is around 40% of the moon's mass—the parameters are dictated by the moon's composition. The pressure in the center of Umbriel is about 0.24 GPa (2.4 kbar). The current state of the icy mantle is unclear, although the existence of a subsurface ocean is considered unlikely.",
                            ]
                        },
                        {
                            name: "Titania",
                            position: 17,
                            image_url: [
                                "https://solarsystem.nasa.gov/system/content_pages/main_images/292_PIA00036.jpg",
                                "https://www.universetoday.com/wp-content/uploads/2010/02/Titania.jpg",
                                "https://sos.noaa.gov/ftp_mirror/astronomy/uranus_moons/titania/media/thumbnail_big.jpg"
                            ],
                            orbit_distance_km: 435840,
                            equatorial_diameter_km: 1576.8,
                            mass: "(3.400±0.061)×1021 kg",
                            orbit_period_in_days: 8.708333,
                            surface_temperature_max_celcius: -184.15,
                            surface_temperature_min_celcius: -213.15,
                            facts: [

                                "Titania, also designated Uranus III, is the largest of the moons of Uranus and the eighth largest moon in the Solar System at a diameter of 1,578 kilometres (981 mi). Discovered by William Herschel in 1787, Titania is named after the queen of the fairies in Shakespeare's A Midsummer Night's Dream. Its orbit lies inside Uranus's magnetosphere.",

                                "Titania was discovered by William Herschel on January 11, 1787, the same day he discovered Uranus's second largest moon, Oberon. He later reported the discoveries of four more satellites, although they were subsequently revealed as spurious. For nearly fifty years following their discovery, Titania and Oberon would not be observed by any instrument other than William Herschel's, although the moon can be seen from Earth with a present-day high-end amateur telescope",

                                "Titania's orbit lies completely inside the Uranian magnetosphere. This is important, because the trailing hemispheres of satellites orbiting inside a magnetosphere are struck by magnetospheric plasma, which co-rotates with the planet. This bombardment may lead to the darkening of the trailing hemispheres, which is actually observed for all Uranian moons except Oberon (see below).",
                            ]
                        },
                        {
                            name: "Oberon",
                            position: 18,
                            image_url: [
                                "https://www.universetoday.com/wp-content/uploads/2010/02/Oberon_USGS1.jpg",
                                "https://www.universetoday.com/wp-content/uploads/2010/02/Umbriel_usgsx2.jpg",
                                "https://sos.noaa.gov/ftp_mirror/astronomy/uranus_moons/oberon/media/thumbnail_big.jpg"
                            ],
                            orbit_distance_km: 584000,
                            equatorial_diameter_km: 1522.8,
                            mass: "(3.076±0.087)×1021 kg",
                            orbit_period_in_days: 13,
                            surface_temperature_max_celcius: -193.15,
                            surface_temperature_min_celcius: -203.15,
                            facts: [

                                "Oberon, also designated Uranus IV, is the outermost major moon of the planet Uranus. It is the second-largest and second most massive of the Uranian moons, and the ninth most massive moon in the Solar System. Discovered by William Herschel in 1787, Oberon is named after the mythical king of the fairies who appears as a character in Shakespeare's A Midsummer Night's Dream.",

                                "Oberon orbits Uranus at a distance of about 584,000 km, being the farthest from the planet among its five major moons. Oberon's orbit has a small orbital eccentricity and inclination relative to the equator of Uranus.[4] Its orbital period is around 13.5 days, coincident with its rotational period. In other words, Oberon is a synchronous satellite, tidally locked, with one face always pointing toward the planet. Oberon spends a significant part of its orbit outside the Uranian magnetosphere. As a result, its surface is directly struck by the solar wind",

                                "Discovered in 1787, little was known about this moon until Voyager 2 passed it during its flyby of Uranus in January 1986. Its orbit lies partially outside Uranus's magnetosphere and this effects viewing via telescope or traditional means.",
                            ]
                        }
                    ]
                },
                rings: 13,
                orbit_period_days: 30687,
                surface_temperature_max_celcius: -153,
                surface_temperature_min_celcius: -224,
                facts: [

                    "Uranus was officially discovered by Sir William Herschel in 1781. It is too dim to have been seen by the ancients.At first Herschel thought it was a comet, but several years later it was confirmed as a planet.",

                    "Uranus turns on its axis once every 17 hours, 14 minutes. The planet rotates in a retrograde direction, opposite to the way Earth and most other planets turn. Venus is the only other planet that spins this way.",

                    "Uranus makes one trip around the Sun every 84 Earth years. During some parts of its orbit one or the other of its poles point directly at the Sun and get about 42 years of direct sunlight.The rest of the time they are in darkness.",

                    "Like the other gas giants, it has a hydrogen upper layer, which has helium mixed in. Below that is an icy “mantle, which surrounds a rock and ice core. The upper atmosphere is made of water, ammonia and the methane ice crystals that give the planet its pale blue colour.",

                    "Uranus hits the coldest temperatures of any planet. With minimum atmospheric temperature of -224°C Uranus is nthe coldest planet in the solar system. While Neptune doesn’t get as cold as Uranus it is on average colder.",

                    "Uranus has two sets of very thin dark coloured rings, probably formed when one or more of Uranus’s moons were broken up in an impact.The first rings were discovered in 1977 with the two outer rings being discovered by the Hubble Space Telescope between 2003 and 2005.",

                    "Uranus’ moons are named after characters created by William Shakespeare and Alexander Pope. These include Oberon, Titania and Miranda. The most interesting Uranian moon is Miranda; it has ice canyons, terraces, and other strange- looking surface areas.",

                    "Only one spacecraft has flown by Uranus. In 1986, the Voyager 2 spacecraft swept past the planet at a distance of 81500 km. It returned the first close-up images of the planet, its moons, and rings.",

                    "The axial tilt of Uranus is a staggering 99 degrees. In other words, the planet is rotating on its side. All the planets look a bit like spinning top as they go around the Sun, but Uranus looks more like a ball rolling in a circular pattern.",

                    "With a mean density of 0.687 g/cm3, Saturn’s body is actually less dense than water (1 g/cm³). This means that the planet would float in a pool, provided it were roughly 60,000 km wide.Uranus has the second-lowest density of any planet in the Solar System.",

                    "Sir William Herschel tried to have Uranus (as his discovery) named “Georgian Sidus” after King George III.The name Uranus was suggested by astronomer Johann Bode. The name comes from the ancient Greek deity Ouranos.",

                    "At magnitude 5.3, Uranus is barely within the brightness scale that a human eye can perceive. Unfortunately, you’d need to make sure that the night sky was extremely dark (i.e. no light pollution) and would have to know exactly where to look.",

                    "The possibility of sending the Cassini spacecraft from Saturn to Uranus was evaluated during a mission extension planning phase in 2009. However, this never came to be as it would have taken about twenty years to get to the Uranian system after departing Saturn.",

                    "There's still much more to learn about Uranus's tempests. Scientists suggest that perhaps these vortices are rooted deeper in the atmosphere, like the storms of Jupiter. But to know for sure, researchers would need a closer look.",

                    "Like Saturn, Jupiter, and Neptune, Uranus is a big ball of gas, often called a jovian or gas giant world. Uranus owes its vibrant blue-green hues not from unusual oceans but from an upper atmosphere flush with methane, which absorbs the sun's red light.",

                ],
            },

            {
                name: "Neptune",
                planet_intro: "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus in many ways, from temperature to gases present. It's made of a thick soup of water, ammonia, and methane over an Earth-sized solid center",
                position_from_sun: 8,
                image_url: [
                    "https://media.wired.com/photos/5d04045bde1abfe4e801d054/4:3/w_1600,h_1200,c_limit/Science-Neptune-FA-PIA01492_orig.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
                    "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F648792456%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D4587%26cropY1%3D173%26cropY2%3D2755",
                    "https://static.wikia.nocookie.net/spore/images/1/15/Neptune.png/revision/latest?cb=20090222230615",
                    "https://scitechdaily.com/images/Neptune-Planet-Illustration.jpg",
                ],
                latin_name: "Neptunus",
                sumerian_name: null,
                orbit_distance_km: 4498396441,
                orbit_distance_au: 30.10,
                equatorial_diameter_km: 49528,
                mass: "1.02 × 10^26 kg (17 Earths)",
                moons: {
                    moon_list: [
                        "Naiad",
                        "Thalassa",
                        "Despina",
                        "Galatea",
                        "Larissa",
                        "Hippocamp",
                        "Proteus",
                        "Triton",
                        "Nereid",
                        "Halimede",
                        "Sao",
                        "Laomedeia",
                        "Psamathe",
                        "Neso",
                    ],
                    sig_moons: [
                        {
                            name: "Triton",
                            position: 8,
                            image_url: [
                                "https://cdn.mos.cms.futurecdn.net/fxdQJeaQN5WCBJzWBeUzqR.jpg",
                                "https://www.thefactsite.com/wp-content/uploads/2019/10/triton-facts.jpg",
                                "https://lh3.googleusercontent.com/proxy/XCnbZ8qks7YrGeC78zl1ZL78trXQiFQgBkcN98PMQc8Nsb_2R7J_eHaET4jA5sw1nNjBFbVTBbi0elDzNrtqimzq0lcqBzXvMYwKiykFNQ22jGvsTxk"
                            ],
                            orbit_distance_km: 354800,
                            equatorial_diameter_km: 2706.8,
                            mass: "(3.076±0.087)×1021 kg",
                            orbit_period_in_days: 5.875,
                            surface_temperature_max_celcius: null,
                            surface_temperature_min_celcius: -235.2,
                            facts: [

                                "Triton is the largest natural satellite of the planet Neptune, and the first Neptunian moon to be discovered. The discovery was made on October 10, 1846, by English astronomer William Lassell. It is the only large moon in the Solar System with a retrograde orbit, an orbit in the direction opposite to its planet's rotation.",

                                "Triton is one of the few moons in the Solar System known to be geologically active (the others being Jupiter's Io and Europa, and Saturn's Enceladus and Titan). As a consequence, its surface is relatively young, with few obvious impact craters.",

                                "Triton is named after the Greek sea god Triton, the son of Poseidon (the Greek god corresponding to the Roman Neptune). The name was first proposed by Camille Flammarion in his 1880 book Astronomie Populaire and was officially adopted many decades later. Until the discovery of the second moon Nereid in 1949, Triton was commonly referred to as 'the satellite of Neptune'. Lassell did not name his own discovery; he later successfully suggested the name Hyperion, previously chosen by John Herschel, for the eighth moon of Saturn when he discovered it.",
                            ]
                        },
                        {
                            name: "Nereid",
                            position: 9,
                            image_url: [
                                "https://i0.wp.com/www.astronomylovers.com/wp-content/uploads/2020/05/nereid.jpg?fit=915%2C610&ssl=1",
                                "https://alchetron.com/cdn/nereid-moon-b0865733-0957-4aba-9a35-ca89160e525-resize-750.jpeg",
                                "https://ak.picdn.net/shutterstock/videos/1018915744/thumb/1.jpg"
                            ],
                            orbit_distance_km: 5513400,
                            equatorial_diameter_km: 340,
                            mass: "3.1×1019",
                            orbit_period_in_days: 360,
                            surface_temperature_max_celcius: -223.15,
                            surface_temperature_min_celcius: null,
                            facts: [

                                "Nereid was discovered on 1 May 1949 by Gerard P. Kuiper on photographic plates taken with the 82-inch telescope at the McDonald Observatory. He proposed the name in the report of his discovery. It is named after the Nereids, sea-nymphs of Greek mythology and attendants of the god Neptune. It was the second and last moon of Neptune to be discovered before the arrival of Voyager 2 (not counting a single observation of an occultation by Larissa in 1981).",

                                "Spectrally, Nereid appears neutral in colour and water ice has been detected on its surface. Its spectrum appears to be intermediate between Uranus's moons Titania and Umbriel, which suggests that Nereid's surface is composed of a mixture of water ice and some spectrally neutral material. The spectrum is markedly different from minor planets of the outer solar system, centaurs Pholus, Chiron and Chariklo, suggesting that Nereid formed around Neptune rather than being a captured body.",

                                "Nereid's orbit is the most eccentric in the solar system. Its distance to Neptune ranges from about 1,353,600 kilometers (841,100 miles) to 9,623,700 kilometers (5,980,200 miles).",
                            ]
                        }
                    ]
                },
                rings: 6,
                orbit_period_days: 60190,
                surface_temperature_max_celcius: -201,
                surface_temperature_min_celcius: -218,
                facts: [

                    "Neptune was not known to the ancients. It is not visible to the naked eye and was first observed in 1846. Its position was determined using mathematical predictions. It was named after the Roman god of the sea for its colour.",

                    "Neptune has 6 faint rings. However, one of the rings was only discovered very recently by Voyager 2 and there is debate in the scientic community regarding if the 6th ring is in fact a ring that seperates and rejoins on occaion",

                    "Neptune spins on its axis very rapidly. Its equatorial clouds take 16 hours to make one rotation. This is because Neptune is not a solid body but is instead another gas giant, though considerably smaller than its neighbours.",

                    "Despite being smaller than Uranus, Neptune has a greater mass. Below its heavy atmosphere, Uranus is made of layers of hydrogen, helium, and methane gases. They enclose a layer of water, ammonia and methane ice. The inner core of the planet is made of rock.",

                    "The atmosphere of Neptune is made of hydrogen and helium, with some methane. The methane, much like on Uranus absorbs red light, which makes the planet appear a lovely calm blue. High, thin clouds drift in the upper atmosphere.",

                    "Neptune has a very active climate. Large storms whirl through its upper atmosphere, and high- speed winds track around the planet at up 600 meters per second.One of the largest storms ever seen was recorded in 1989. It was called the Great Dark Spot.",

                    "The Great Dark Spot in the southern atmosphere of Neptune is an incredibly large rotating storm system with winds of up to 1,500 miles per hour, the strongest winds recorded on any planet.",

                    "Neptune has 14 moons. The most interesting moon is Triton, a frozen world that is spewing nitrogen ice and dust particles out from below its surface. It was likely captured by the gravitational pull of Neptune.",

                    "Only one spacecraft has flown by Neptune. In 1989, the Voyager 2 spacecraft swept past the planet.It returned the first close- up images of the Neptune system.The NASA/ ESA Hubble Space Telescope has also studied Mercury, as have a number of ground - based telescopes.",

                    "Data from the Voyager 2 spacecraft also showed that the Great Dark Spot varied significantly in size during their brief pass of the planet. When Neptune was viewed by the Hubble Space telescope in 1994 the Great Dark Spot had vanished.",

                    "Neptune has an incredibly thick atmosphere comprised of 74% hydrogen, 25% helium and approximately 1% methane. Its atmosphere also contains icy clouds and the fastest winds recorded in the solar system.",

                    "Neptune’s atmosphere is subdivided into the lower troposphere and the stratosphere with the tropopause being the boundary between the two. In the lower troposphere temperatures decrease with altitude however they increase with altitude in the stratosphere.",
                    
                    "Hydrocarbons form hazes of smog that appear in the entire upper atmosphere of Neptune and hydrocarbon snowflakes that form in Neptune’s atmosphere melt before they reach its surface due to the high pressure.",

                    "Like the other outer planets, Neptune possesses a ring system, though its rings are very faint. They are most likely made up of ice particles and grains of dust with a carbon-based substance coating them.",

                ],
            },

            {
                name: "Pluto",
                planet_intro: "Pluto, originally considered the ninth planet, was classified as a dwarf planet. The icy body and its five moons orbit the sun far out in the Kuiper Belt, a shadowy zone beyond the orbit of Neptune thought to be populated by hundreds of thousands of rocky, icy bodies. Debate about Pluto being considered as a planet rages on to this day.",
                position_from_sun: 9,
                image_url: [
                    "https://cms.qz.com/wp-content/uploads/2016/11/pluto-poster.jpg?quality=75&strip=all&w=1200&h=900&crop=1",
                    "https://cdn.mos.cms.futurecdn.net/jGqBq44gCE3CogJTXAnwjT.jpg",
                    "https://i.pinimg.com/originals/09/38/35/0938352d9a2bdb296f092dd7cda93851.jpg",
                    "https://cdn.vox-cdn.com/thumbor/Sf3U7g3bz1MmEOlLvRX--Ko61jI=/0x0:1180x766/1200x800/filters:focal(442x79:630x267)/cdn.vox-cdn.com/uploads/chorus_image/image/51865475/nh_pluto_crop.jpg.0.png",
                    "https://astrologynewsservice.com/wp-content/uploads/2015/07/pluto-illo.jpg",
                ],
                latin_name: "Pluto",
                sumerian_name: null,
                orbit_distance_km: 7375936441,
                orbit_distance_au: 49.305,
                equatorial_diameter_km: 2372,
                mass: "12.5 x 1021kg (0.0021 x Earth's)",
                moons: {
                    moon_list: [
                        "Charon",
                        "Styx",
                        "Nix",
                        "Kerberos",
                        "Hydra",
                    ],
                    sig_moons: [
                        {
                            name: "Charon",
                            position: 1,
                            image_url: [
                                "https://solarsystem.nasa.gov/system/content_pages/main_images/538_PIA19968.jpg",
                                "https://cdn.mos.cms.futurecdn.net/9v3Jyf9Zd24LZo4xKkwYe6.jpg",
                                "https://img.etimg.com/thumb/width-640,height-480,imgsize-60269,resizemode-1,msid-49194064/news/science/nasa-captures-plutos-moon-charon-in-stunning-detail.jpg"
                            ],
                            orbit_distance_km: 17536,
                            equatorial_diameter_km: 1212,
                            mass: "(1.586±0.015) × 1021kg (2.66×10−4 Earths)",
                            orbit_period_in_days: 6.387,
                            surface_temperature_max_celcius: -213,
                            surface_temperature_min_celcius: -240,
                            facts: [

                                "With half the diameter and one eighth the mass of Pluto, Charon is a very large moon in comparison to its parent body. Its gravitational influence is such that the barycenter of the Plutonian system lies outside Pluto. This has led to the argument that Pluto–Charon is sometimes considered a double dwarf planet.",

                                "Charon and Pluto orbit each other every 6.387 days. The two objects are gravitationally locked to one another, so each keeps the same face towards the other. This is a case of mutual tidal locking, as compared to that of the Earth and the Moon, where the Moon always shows the same face to Earth, but not vice versa.",

                                "The New Horizons spacecraft is the only probe that has visited the Pluto system. It approached Charon to within 27,000 km (17,000 mi) in 2015. In a released photo by New Horizons, an unusual surface feature has captivated and baffled the scientist team of the mission. The image reveals a mountain rising out of a depression, described as 'a large mountain sitting in a moat'.",
                            ]
                        }
                    ]
                },
                rings: 0,
                orbit_period_days: 90560,
                surface_temperature_max_celcius: -223,
                surface_temperature_min_celcius: -233,
                facts: [

                    "Discovered in 1930, Pluto is the second closest dwarf planet to the Sun and was at one point classified as the ninth planet. Pluto is the largest dwarf planet but only the second most massive, with Eris being the most massive.",

                    "Pluto is named after the Roman god of the underworld. This was proposed by Venetia Burney an eleven year old schoolgirl from Oxford, England. All of Pluto's moons are given names connected to the underworld or death as well.",

                    "Pluto was reclassified from a planet to a dwarf planet in 2006. This is when the IAU formalised the definition of a planet as “(a) orbit around the Sun, (b) sufficient mass to assume a nearly round shape, and(c) has cleared the neighbourhood around its orbit.",

                    "Pluto was discovered on February 18th, 1930 by the Lowell Observatory. For the 76 years between Pluto being discovered and the time it was reclassified as a dwarf planet it completed under a third of its orbit around the Sun.",

                    "Pluto has five known moons. The moons are Charon (discovered in 1978), Hydra and Nix (both discovered in 2005), Kerberos originally P4 (discovered 2011) and Styx originally P5(discovered 2012) official designations S/2011(134340)1 and  S/2012(134340)1",

                    "Pluto is one third water. This is in the form of water ice which is more than 3 times as much water as in all the Earth’s oceans, the remaining two thirds are rock. Pluto’s surface is covered with ices.",

                    "Pluto is smaller than a number of moons. These are Ganymede, Titan, Callisto, Io, Europa, Triton, and the Earth’s moon. While it is now confirmed that Pluto is the largest dwarf planet for around 10 years it was thought that this was Eris.",

                    "Pluto has a eccentric and inclined orbit. This takes it between 4.4 and 7.3 billion km from the Sun meaning Pluto is periodically closer to the Sun than Neptune. This is one of the most irregular orbits of any planet in our solar system",

                    "Pluto has been visited by one spacecraft. The New Horizons spacecraft, which was launched in 2006, flew by Pluto on the 14th of July 2015. New Horizons is now on its way to the Kuiper Belt to explore even more distant objects.",

                    "Pluto’s location was predicted by Percival Lowell in 1915. The prediction came from deviations he initially observed in 1905 in the orbits of Uranus and Neptune. Much like those planets, Pluto does not appear to have been known to ancient cultures",

                    "Pluto sometimes has an atmosphere. When Pluto elliptical orbit takes it closer to the Sun, its surface ice thaws and forms a thin atmosphere primarily of nitrogen which slowly escapes the planet.",
                    
                    "Pluto also has a methane haze that overs about 161 kilometres above the surface. The methane is dissociated by sunlight into hydrocarbons that fall to the surface and coat the ice with a dark covering.",

                    "In 2006, Pluto was reclassified as a dwarf planet, a change widely thought of as a demotion. The question of Pluto's planet status has attracted controversy and stirred debate in the scientific community, and among the general public, since then.", 
                    
                    "In 2017, a science group (including members of the New Horizon mission) proposed a new definition of planethood based on 'round objects in space smaller than stars,' which would make the number of planets in our solar system expand from 8 to roughly 100.",

                    "Observations of Pluto's surface by the New Horizons spacecraft revealed a variety of surface features, including mountains that reach as high as 11,000 feet (3,500 meters), comparable to the Rocky Mountains on Earth.", 
                    
                    "While methane and nitrogen ice cover much of the surface of Pluto, these materials are not strong enough to support such enormous peaks as appaer on Pluto, so scientists suspect that the mountains are formed on a bedrock of water ice.",

                    "Pluto's surface is also covered in an abundance of methane ice but New Horizons scientists have observed significant differences in the way the ice reflects light across the dwarf planet's surface.",
                    
                    "The dwarf planet also possesses ice ridge terrain that appears to look like a snakeskin; astronomers spotted similar features to Earth's penitentes, or erosion-formed features on mountainous terrain.",

                    "Another distinct feature on Pluto's surface is a large heart-shaped region known unofficially as Tombaugh Regio (after Clyde Tombaugh; regio is Latin for region). Other variations in the composition of surface materials have been identified within it."

                ],
            },

        ],
        sun: {
            name: "Sun",
            star_intro: "The Sun, Solis, Ud, the primary source of light, heat and energy in our solar system. The Sun is located in the center of the Solar System. It is a nearly perfect sphere of hot plasma, essentially, a hot ball of glowing gases. It is the most important source of energy for life on Earth (and possibly on other planets or moons too...?).",
            image_url: [
                "https://www.extremetech.com/wp-content/uploads/2020/01/NASA-Sun.jpg",
                "https://cdn.cnn.com/cnnnext/dam/assets/150216005531-vo-nasa-solar-dynamics-observatory-5-years-00011523.jpg",
                "https://apod.nasa.gov/apod/image/1907/SpotlessSunIss_Colacurcio_2048.jpg",
                "https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/ts-space-sun-and-solar-viewing-facts-versus-fiction.jpg?itok=gaBs6QMS",
                "https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg",
            ],
            latin_name: "Solis",
            sumerian_name: "Ud",
            equatorial_diameter_km: 1391016,
            mass: "1.4 x 1029 kg + 3.0 x 1032 kg",
            surface_temperature_max_celcius: 100000,
            surface_temperature_min_celcius: 5504.85,
            internal_temperature_celcius: 14999982.222,
            facts: [

                "The Sun accounts for 99.86% of the mass in the solar system. It has a mass of around 330,000 times that of Earth. It is three quarters hydrogen and most of its remaining mass is helium..",

                "Over one million Earth’s could fit inside the Sun.If you were to fill a hollow Sun with spherical Earths, somewhere around 960, 000 would fit inside.However, if you squashed those Earths to ensure there was no wasted space then you could fit 1, 300, 000 Earths inside the Sun.The surface area of the Sun is 11, 990 times that of Earth.",

                "The size of the Sun compared to the largest known stars (red giants) is not very big. However, if compared to the most common type of star in the universe, the red dwarf, the Sun is quite a bit larger. Thus, the Sun is not the biggest type of star in the universe, but it is definitely larger than most.",

                "As far as the Sun’s mass compared to other bodies found in our solar system, the Sun is easily the most massive. The Sun alone contains 99.8% of the total mass in the Solar System. In terms of size, the Sun has a diameter of roughly 1.4 million kilometers(870, 000 miles).To put this in perspective, this is almost 110 times the diameter of the Earth.What this means is that about one million Earth’s could fit inside the Sun.",

                "One day the Sun will consume the Earth. The Sun will continue to burn for about 130 million years after it burns through all of its hydrogen, instead burning helium. During this time it will expand to such a size that it will engulf Mercury and Venus. When it reaches this point, it will have become a red giant star. The most probable fate of the planet is absorption by the Sun in about 7.5 billion years, after the star has entered the later red giant phase and expanded beyond the planet's current orbit.",

                "The Sun is halfway through its life. At 4.5 billion years old, the Sun has burned off around half of its hydrogen stores and has enough left to continue burning hydrogen for another 5 billion years. Currently the Sun is a yellow dwarf star.",

                "The Sun will eventually be about the size of Earth. Once the Sun has completed its red giant phase, it will collapse.It’s huge mass will be retained, but it will have a volume similar to that of Earth.When that happens, it will be known as a white dwarf.",

                "The Sun is what is known as a main sequence star; that is, a sphere composed primarily of the two gases hydrogen and helium such that certain conditions are met. The first condition is that it must have a mass falling within a certain range. The energy created by the Sun’s core is nuclear fusion. This huge amount of energy is produced when four hydrogen nuclei are combined into one helium nucleus.",

                "The Sun is almost a perfect sphere. Considering the sheer size of the Sun, there is only a 10 km difference in its polar and equatorial diameters – this makes it the closest thing to a perfect sphere observed in nature.",

                "The Sun is travelling at 220 km per second.It is around 24, 000 - 26, 000 light - years from the galactic centre and it takes the Sun approximately 225 - 250 million years to complete one orbit of the centre of the Milky Way.",

                "It takes eight minutes for light reach Earth from the Sun.The average distance from the Sun to the Earth is about 150 million km.Light travels at 300, 000 km per second so dividing one by the other gives you 500 seconds – eight minutes and twenty seconds.This energy can reach Earth in mere minutes, but it takes millions of years to travel from the Sun’s core to its surface.",

                "The distance between Earth and Sun changes.This is because the Earth travels on a elliptical orbit path around the Sun.The distance between the two ranges from 147 to 152 million km.This distance between them is one Astronomical Unit(AU).",

                "Temperatures inside the Sun can reach 15 million degrees Celsius.Energy is generated through nuclear fusion in the Sun’s core – this is when hydrogen converts to helium – and because objects generally expand, the Sun would explode like an enormous bomb if it wasn’t for it’s tremendous gravitational pull.",

                "The Sun generates solar winds. These are ejections of plasma (extremely hot charged particles) that originate in the layer of the Sun know as the corona and they can travel through the solar system at up to 450 km per second. The Aurora Borealis and Aurora Australis are caused by the interaction of solar winds with Earth’s atmosphere.",

                "The Sun has a powerful magnetic field. When magnetic energy is released by the Sun during magnetic storms, solar flares occur which we see on Earth as sunspots. Sunspots are dark areas on the Sun’s surface caused by magnetic variations. The reason they appear dark is due to their temperature being much lower than surrounding areas."

            ]
        },
        asteroid_belt: [],
        kuiper_belt: [],
        satellites: [],
        planetoids: [],
        anomalies: [],
    }
])
