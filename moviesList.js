let listOfRandomMovieStuff = [
    "The Shawshank Redemption",

    "The Godfather",

    "The Godfather: Part II",

    "The Dark Knight",

    "12 Angry Men",

    'Schindler"s List',

    "Pulp Fiction",

    "The Lord of the Rings: The Return of the King",

    "Il buono, il brutto, il cattivo",

    "Fight Club",

    "The Lord of the Rings: The Fellowship of the Ring",

    "Forrest Gump",

    "Star Wars: Episode V - The Empire Strikes Back",

    "Inception",

    "The Lord of the Rings: The Two Towers",

    'One Flew Over the Cuckoo"s Nest',

    "Goodfellas",

    "The Matrix",

    "Shichinin no samurai",

    "Star Wars",

    "Cidade de Deus",

    "Se7en",

    "The Silence of the Lambs",

    'It"s a Wonderful Life',

    "La vita è bella",

    "The Usual Suspects",

    "Léon",

    "Saving Private Ryan",

    "Sen to Chihiro no kamikakushi",

    "American History X",

    'C"era una volta il West',

    "Interstellar",

    "Psycho",

    "The Green Mile",

    "Casablanca",

    "City Lights",

    "Intouchables",

    "Modern Times",

    "Raiders of the Lost Ark",

    "The Pianist",

    "The Departed",

    "Rear Window",

    "Terminator 2: Judgment Day",

    "Back to the Future",

    "Whiplash",

    "Gladiator",

    "The Prestige",

    "The Lion King",

    "Memento",

    "Apocalypse Now",

    "Alien",

    "The Great Dictator",

    "Sunset Blvd.",

    "Nuovo Cinema Paradiso",

    "Das Leben der Anderen",

    "Hotaru no haka",

    "Blade Runner 2049",

    "Paths of Glory",

    "Django Unchained",

    "The Shining",

    "WALL·E",

    "American Beauty",

    "The Dark Knight Rises",

    "Mononoke-hime",

    "Oldeuboi",

    "Aliens",

    "Witness for the Prosecution",

    "Once Upon a Time in America",

    "Das Boot",

    "Citizen Kane",

    "Dangal",

    "Vertigo",

    "North by Northwest",

    "Star Wars: Episode VI - Return of the Jedi",

    "Braveheart",

    "Reservoir Dogs",

    "M",

    "Requiem for a Dream",

    'Le fabuleux destin d"Amélie Poulain',

    "Taare Zameen Par",

    "A Clockwork Orange",

    "Kimi no na wa.",

    "Lawrence of Arabia",

    "Double Indemnity",

    "Amadeus",

    "Eternal Sunshine of the Spotless Mind",

    "Taxi Driver",

    "To Kill a Mockingbird",

    "Dunkirk",

    "Full Metal Jacket",

    "2001: A Space Odyssey",

    'Singin" in the Rain',

    "Toy Story 3",

    "Toy Story",

    "The Sting",

    "3 Idiots",

    "Ladri di biciclette",

    "Inglourious Basterds",

    "The Kid",

    "Snatch",

    "Monty Python and the Holy Grail",

    "Good Will Hunting",

    "Jagten",

    "Per qualche dollaro in più",

    "L.A. Confidential",

    "Scarface",

    "The Apartment",

    "Metropolis",

    "Jodaeiye Nader az Simin",

    "Rashômon",

    "Indiana Jones and the Last Crusade",

    "All About Eve",

    "Yôjinbô",

    "Babam ve Oglum",

    "Up",

    "Batman Begins",

    "Some Like It Hot",

    "The Treasure of the Sierra Madre",

    "Unforgiven",

    "Der Untergang",

    "Die Hard",

    "Raging Bull",

    "Heat",

    "The Third Man",

    "Bacheha-Ye aseman",

    "The Great Escape",

    "Ikiru",

    "Chinatown",

    "El laberinto del fauno",

    "Tonari no Totoro",

    "Incendies",

    "Ran",

    "The Gold Rush",

    "El secreto de sus ojos",

    "Inside Out",

    "Judgment at Nuremberg",

    "On the Waterfront",

    "Hauru no ugoku shiro",

    "The Bridge on the River Kwai",

    "Room",

    "Det sjunde inseglet",

    "Lock, Stock and Two Smoking Barrels",

    "Mr. Smith Goes to Washington",

    "Blade Runner",

    "Casino",

    "A Beautiful Mind",

    "The Elephant Man",

    "Smultronstället",

    "V for Vendetta",

    "The Wolf of Wall Street",

    "The General",

    "Warrior",

    "Trainspotting",

    "Dial M for Murder",

    "Gran Torino",

    "Sunrise: A Song of Two Humans",

    "Gone with the Wind",

    "Andrey Rublev",

    "The Deer Hunter",

    "Fargo",

    "The Sixth Sense",

    "The Thing",

    "No Country for Old Men",

    "The Big Lebowski",

    "Eskiya",

    "Finding Nemo",

    "Tôkyô monogatari",

    "There Will Be Blood",

    "Cool Hand Luke",

    "Rebecca",

    "Hacksaw Ridge",

    "La La Land",

    "Idi i smotri",

    "Kill Bill: Vol. 1",

    "Rang De Basanti",

    "How to Train Your Dragon",

    'La passion de Jeanne d"Arc',

    "Mary and Max",

    "Gone Girl",

    "Into the Wild",

    "Shutter Island",

    "Logan",

    "It Happened One Night",

    "Life of Brian",

    "Relatos salvajes",

    "A Wednesday",

    "Platoon",

    "Hotel Rwanda",

    "Le salaire de la peur",

    "Network",

    "Rush",

    "In the Name of the Father",

    "Stand by Me",

    "Persona",

    "Ben-Hur",

    "The Grand Budapest Hotel",

    "Les quatre cents coups",

    "Salinui chueok",

    "12 Years a Slave",

    "Mad Max: Fury Road",

    "Jurassic Park",

    "Spotlight",

    "Million Dollar Baby",

    "Stalker",

    "Butch Cassidy and the Sundance Kid",

    "Amores perros",

    "The Truman Show",

    'Hachi: A Dog"s Tale',

    "The Maltese Falcon",

    "Kaze no tani no Naushika",

    "The Princess Bride",

    "Before Sunrise",

    "Le notti di Cabiria",

    "Paper Moon",

    "Prisoners",

    "Harry Potter and the Deathly Hallows: Part 2",

    "The Grapes of Wrath",

    "Rocky",

    "Catch Me If You Can",

    "Touch of Evil",

    "Les diaboliques",

    "Gandhi",

    "Donnie Darko",

    "Munna Bhai M.B.B.S.",

    "Monsters, Inc.",

    "Star Wars: Episode VII - The Force Awakens",

    "Annie Hall",

    "The Terminator",

    "Barry Lyndon",

    "The Bourne Ultimatum",

    "The Wizard of Oz",

    "Groundhog Day",

    "La haine",

    "8½",

    "Jaws",

    "Twelve Monkeys",

    "The Best Years of Our Lives",

    "Mou gaan dou",

    "Paris, Texas",

    "The Help",

    "Faa yeung nin wa",

    "Sholay",

    "Beauty and the Beast",

    "La battaglia di Algeri",

    "Ah-ga-ssi",

    "Piscores of the Caribbean: The Curse of the Black Pearl",

    "PK",

    "Dog Day Afternoon",

    "Dead Poets Society",
  ];