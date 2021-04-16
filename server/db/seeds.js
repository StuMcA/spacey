use Sol;
db.dropDatabase();

db.planets.insertMany([
    {
        name: "Mercury",
        position_from_sun: 1,
        latin_name: "Mercurius",
        sumerian_name: "Enki",
        orbit_distance_km: 57909227,
        orbit_distance_au: 0.387,
        equatorial_diameter_km: 4879,
        mass: "3.29 × 10^23 kg (0.06 Earths)",
        number_of_moons: 0,
        moon_names: {
            first: null,
        },
        orbit_period_days: 88,
        surface_temperature_max_celcius: 427,
        surface_temperature_min_celcius: -173,
        facts: {
            first: "Mercury has been known to humanity since ancient times and although its discovery date is unknown, the first mentions of the planet are believed to be around 3000 BC by the Sumerians.",
            second: "A year in Mercury is 88 days, yet a Mercury day is 176 Earth days.Mercury is nearly tidally locked to the Sun – also known as a gravitational lock – and over time this has slowed the rotation of the planet to almost match its orbit around the Sun.",
            third: "Mercury orbits so quickly around the Sun that early civilizations believed it was actually two different stars – one which appeared in the morning and another which appeared in the evening.",
            fourth: "Mercury is the smallest planet in the solar system with a diameter of 4, 879 km and is one of five planets that is visible to the naked eye.",
            fifth: "After the Earth, Mercury is the second densest planet.Despite its small size, Mercury is very dense because it is composed mainly of heavy metals and rock – the main characteristic of terrestrial planets.",
            sixth: "Mercury is named after the messenger of the Roman gods, who is also known as Hermes in Greek mythology.This is because of the speed in which Mercury orbits the Sun and the speed with which Mercury the Roman deity was able to deliver messages.",
            seventh: "Astronomers didn’t realize that Mercury was a planet until 1543 when Copernicus published his Sun- centered model of the Solar System – putting the Sun as the centre of the solar system rather than the previously believed centre, the Earth.",
            eighth: "The planet has just 38% of the gravity on Earth.This means that Mercury isn’t able to hold the atmosphere it has and it instead gets blown away by solar winds.However those same solar winds are also bringing in new gases, radioactive decay and dust from micrometeorites – replenishing the atmosphere.", ninth: "Mercury has no moons or rings because of its low gravity and lack of atmosphere.",
            tenth: "It was once believed that a planet called Vulcan existed between the orbit of Mercury and the Sun – however the existence of such a planet was never found.",
            eleventh: "The orbit of Mercury is an ellipse rather than circular.It has the most eccentric orbit in the solar system and the least circular of all of the planets, according to scientists and astronomers.",
            twelfth: "Mercury is only the second hottest planet.Venus, though farther from the Sun than Mercury, actually experiences higher temperatures.This is because Mercury has no atmosphere to regulate temperature and results in the most extreme temperature change of all the planets – ranging from - 170°C(-280°F) during the night to 430°C(800°F) during the day.",
            thirteenth: "Mercury does not experience any seasons.The axis of Mercury has the smallest tilt of all other planets, and this results in a lack of seasons on its surface.",
            fourteenth: "Mercury is the only planet which doesn’t rotate exactly once every year – instead rotating three times for every two orbits of the Sun.This is because it is nearly tidally locked to the Sun.",
            fifteenth: "The orbit of Mercury was important in proving Albert Einstein’s theory of General Relativity.",

        },
    
    },

]);