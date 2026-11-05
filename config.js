var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',,
    // style: 'mapbox://styles/oryoruk/cmknfwbn1002z01qme2k2avdv',
    style: 'mapbox://styles/oryoruk/cmllrywbx002601qyg5749ogf',//copy

    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoib3J5b3J1ayIsImEiOiJjbXcyZ2xjOHQwMG50MnhxNjRlY2ozYTNkIn0.4K5DUGWEjj8eU0lBfwRNdg',
    showMarkers: false,
    // markerColor: '#3FB1CE',
    // projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    // insetOptions: {
    //     markerColor: 'orange'
    // },
    // insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Peak Human',
    subtitle: 'What We Can Learn from History’s Greatest Civilizations',
    byline: `<em>By</em> <strong>Johan Norberg</strong>`,
    footer: '©Libertarianism.org | A project of <strong>the Cato Institute</strong>',
    chapters: [
        {
            id: 'intro-id',
            alignment: 'center',
            hidden: false,
            title: 'Golden Ages',
            //image: './assets/athens.jpg',
            description: 'World history has seen several great civilizations that are considered golden ages—a period with a large number of innovations that revolutionized many areas in a short period of time. These civilizations include Athens, Rome, the Abbasid Caliphate, the Song Dynasty, Renaissance Italy, the Dutch Republic, and the Anglosphere. They shared many features, including openness, freedom to experiment and innovate, economic freedom through property rights and trade, peace, and rule of law. Despite shared features, each also left a distinctive legacy—from the development of democracy in Athens to the translation project in the Abbasid period. These were not golden ages for everyone, especially women and enslaved persons, but they remain valuable to study when considering the drivers of civilizational progress. ' ,
            location: {
                center:[71.66077, 30.87874],
                zoom: 2.30,
                pitch: 9.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinAnimation: true,
            callback: '',
            legend: [],
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Athens – Birthplace of Democracy',
            subtitle: 'Democrats, Dreamers and Other Deviants',
            image: './assets/Athens.png',
            description: 'Ancient Athens was the cradle of democracy and free speech. The city-state granted all free men the right to speak openly and to vote in the assembly. This, in turn, fostered a deeper respect for freedom than in other cities. The Athenian statesman Pericles explained that “just as our political life is free and open, so is our day-to-day life in relation with each other. We do not get into a state with our next-door neighbor if he enjoys himself in his own way.” Athenians, he added, are “free and tolerant in our private lives.”' +
               '<br><br>Athenians were also traders, constantly on the lookout for new ideas and methods from a thousand other Greek city-states and from other civilizations. Together, free speech and <a href="https://www.libertarianism.org/columns/ancient-greeces-legacy-liberty-economic-freedom-athens" target="_blank">free trade</a> turned Athens into the first culture to openly celebrate intellectual innovation. For the first time, philosophers stated explicitly that it was acceptable to see the world in new ways and to reach conclusions no one else had reached before. As this spirit of curiosity permeated Athenian society, it produced extraordinary advances across many fields, making Athens a pioneer in everything from ceramics and architecture to theater and historical inquiry.',

            location: {
                center: [21.75735, 38.53923],
                zoom: 6.95,
                pitch: 47.53,
                bearing: 27.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinAnimation: false,
            callback: '',
            mapTitle: 'Athens in 431 BC',   // shown in the box at bottom right
            legend: [
                {
                    layer: 'Athenian territory',
                    color: '#b84747'
                },
                {
                    layer: 'Delian League',
                    color: '#6e51d6'
                }

            ],
            onChapterEnter: [
                {
                    layer: 'athens-delian',
                    opacity: 1,
                    duration: 1000
                }
                ,
                {
                    layer: 'athens-431-labels',
                    opacity: 1,
                    duration: 1000
                }
                ,
                {
                    layer: 'athens-431-region-labels',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'athens-delian',
                    opacity: 0,
                    duration: 100
                },{
                    layer: 'athens-431-labels',
                    opacity: 0,
                    duration: 100
                },{
                    layer: 'athens-431-region-labels',
                    opacity: 0,
                    duration: 100
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Rome',
            subtitle: 'Melting Pot of Marble',
            image: './assets/Rome.png',
            description: 'What have the Romans ever done for us? Quite a lot. They gave us the ideas of a “<a href="https://www.libertarianism.org/topics/republicanism-classical" target="_blank">republic</a>” and a “senate,” Roman law, the urban grid, enduring architectural styles, concrete and aqueducts, the Christian Church, our Latin alphabet, and languages such as French, Italian, Spanish, Portuguese, and Romanian. The Romans may not have been the most innovative people themselves, but by integrating the entire Mediterranean and much of Europe through the Pax Romana – via trade, roads, and law – they enabled ideas and technologies to travel rapidly from one end of the empire to the other.' +
                '<br><br>The Romans were brutal conquerors, but their success rested in part on being tolerant ones. They integrated conquered peoples and extended rights to them, allowing the empire to draw on a broader pool of talent and knowledge, and thereby grow stronger. Rome’s true superpower was not its legions, but its unusual willingness to abandon its own customs in favor of superior practices from elsewhere. The organization of the legions, for example, was inherited from the Etruscans, while Roman swords, spears, shields, and armor were inspired by the Spanish, Samnites, Sabines, and Gauls, respectively. ',
            location: {
                center: [36.52125, 36.80454],
                zoom: 3.84,
                pitch: 23.50,
                bearing: 10.40,
                speed: 1,
                curve: 1
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            mapTitle: 'Rome in 117',   // shown in the box at bottom right
            legend: [],
            onChapterEnter: [
                ...["rome-117-region-labels", "rome-117-labels", "rome-117"].map(layer => ({
                    layer: layer,
                    opacity: 1,
                    duration: 1000
                }))
            ],
            onChapterExit: [
                ...["rome-117-region-labels", "rome-117-labels", "rome-117"].map(layer => ({
                    layer: layer,
                    opacity: 0,
                    duration: 100
                }))
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Abbasid Caliphate',
            subtitle: 'At the Crossroads of the Universe',
            image: './assets/The Abbasid Caliphate.png',
            description: 'The Abbasids integrated a vast Arab empire, stretching from North Africa to Central Asia, through free trade and Islamic law. They built their capital in Baghdad as a perfect circle, in honor of the Caliph’s favorite geometrician, Euclid. Known as the City of Peace, Baghdad thrived as a hub of trade and commerce. Unlike in Athens and Rome, business was not seen as a necessary evil carried out by enslaved persons or foreigners, but as a dignified profession, which encouraged entrepreneurship and wealth creation. ' +
                '<br><br>Baghdad was also a city of learning, welcoming philosophers and scientists of all faiths and backgrounds. To draw on knowledge from across the world, the caliphs sponsored a vast <a href="https://www.libertarianism.org/podcasts/portraits-liberty/liberal-ideas-ibn-rushd" target="_blank">translation movement</a>, and scholars traveled far and wide to locate texts that could be rendered into Arabic. In doing so, they preserved much of the Greek intellectual heritage that might otherwise have been lost. We need look no further than the letter A to see our debt to this civilization: Arabic numerals, algebra, algorithm, arithmetic, average.' +
                '<br><br>As Adam Smith put it, while Europe was still suffering through the dark ages, the tolerance of the early caliphs “revived the curiosity of mankind.” ',
            location: {
                center: [20.39556, 36.30052],
                zoom: 4.02,
                pitch: 22,
                bearing: 23.20,
                speed: 1,
                curve: 1
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            mapTitle: 'The Abbasid Caliphate, 9th century',   // shown in the box at bottom right
            legend: [],
            onChapterEnter: [
                ...["abbasid-caliphate","abbasid-9thcen-labels","abbasid-9thcen-region-labels"].map(layer => ({
                    layer: layer,
                    opacity: 1,
                    duration: 1000
                }))
            ],
            onChapterExit: [
                ...["abbasid-caliphate","abbasid-9thcen-labels","abbasid-9thcen-region-labels"].map(layer => ({
                    layer: layer,
                    opacity: 0,
                    duration: 100
                }))
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Song China',
            subtitle: 'On the Threshold of Modernity',
            image: './assets/Song China.png',
            description: 'In 1764, Voltaire wrote that the Chinese, “when we were unable even to read, knew everything essentially useful of which we boast at the present day.” While somewhat exaggerated, China was indeed far more innovative than Europe a thousand years ago, already employing technologies such as paper, gunpowder, printing, and the magnetic compass. Under the Song dynasty in particular, China became the world’s leading technological and economic power. Intellectually, Song China was deeply shaped by <a href="https://www.libertarianism.org/media/free-thoughts/rituals-freedom-libertarian-themes-early-confucianism" target="_blank">Confucianism</a>, developing neo-Confucianism into a state-supported ideology rather than a single, enforced orthodoxy. ' +
                '<br><br>Song emperors placed the military under civilian control and pursued policies that encouraged trade, mobility, and urbanization, thereby expanding the tax base. Farmers were granted property rights, which allowed them to experiment with new techniques and transform former luxuries such as rice and tea into mass consumer goods. Population growth and expanding cities followed, spurring manufacturing and technological progress. China’s vast production of iron and steel, along with innovative water- and pedal-powered textile machinery, would not be matched in Europe until the eighteenth century. Some economic historians have even suggested that China came close to an industrial revolution more than half a millennium before Britain. ',
            location: {
                center: [122.79477, 26.75312],
                zoom: 5.08,
                pitch: 0,
                bearing: 16.46,
                speed: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            mapTitle: 'Song China, early 12th century',   // shown in the box at bottom right
            legend: [],
            onChapterEnter: [
                ...["songchina-early12c","songchina-early12c-labels","songchina-early12c-region-labels"].map(layer => ({
                    layer: layer,
                    opacity: 1,
                    duration: 1000
                }))
            ],
            onChapterExit: [
                ...["songchina-early12c","songchina-early12c-labels","songchina-early12c-region-labels"].map(layer => ({
                    layer: layer,
                    opacity: 0,
                    duration: 100
                }))
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Renaissance Italy',
            subtitle: 'The Rebirth of Law, Literature and Libertas',
            image: './assets/Renaissance Italy.png',
            description: 'Large empires could foster progress under enlightened rulers – but they could also stifle it when they had despotic ones. Europe followed a different path, shaped by a patchwork of independent cities and principalities and by a division between church and state. Italian republics such as Florence, Venice, and Siena carved out autonomy between Pope and Emperor, and through the rediscovery of Roman law began to think in terms of individual rights, legal institutions, and adjudication rather than warfare. In these republics, humanists valued libertas for both the individual and the city. ' +
                '<br><br>Trade with the Arab world brought Italian city-states goods, books, and financial innovations, while Marco Polo’s tales of China’s immense wealth provided inspiration. Italians began to look back to ancient Greek and Roman art, architecture and literature for clues to similar success back home. With Arabic numerals, double-entry bookkeeping and banking, commerce evolved from buccaneering adventure into organized enterprise. The result was rising wealth, social mobility, and conspicuous investment in art, exemplified by figures such as Michelangelo and Leonardo da Vinci. It was, quite literally, a cultural Renaissance – a rebirth. ',
            location: {
                center:  [7.47376, 41.56590],
                zoom: 5.98,
                pitch: 32.49,
                bearing: 11.66
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            mapTitle: 'Italy in 1494',   // shown in the box at bottom right
            legend: [],
            onChapterEnter: [
                ...["italy-1494-asti","italy-1494-ferrara","italy-1494-florence","italy-1494-genoa","italy-1494-labels","italy-1494-lucca","italy-1494-mantua","italy-1494-milan","italy-1494-modena","italy-1494-montferrat","italy-1494-naples","italy-1494-papal-states","italy-1494-saluzzo","italy-1494-sardinia","italy-1494-savoy","italy-1494-sicily","italy-1494-siena","italy-1494-venice","italy-1494-region-labels"].map(layer => ({
                    layer: layer,
                    opacity: 1,
                    duration: 1000
                }))
            ],
            onChapterExit: [
                ...["italy-1494-asti","italy-1494-ferrara","italy-1494-florence","italy-1494-genoa","italy-1494-labels","italy-1494-lucca","italy-1494-mantua","italy-1494-milan","italy-1494-modena","italy-1494-montferrat","italy-1494-naples","italy-1494-papal-states","italy-1494-saluzzo","italy-1494-sardinia","italy-1494-savoy","italy-1494-sicily","italy-1494-siena","italy-1494-venice","italy-1494-region-labels"].map(layer => ({
                    layer: layer,
                    opacity: 0,
                    duration: 100
                }))
            ]
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'The Dutch Republic',
            subtitle: 'Trade, Toleration and Other Treasures of the Shore',
            image: './assets/The Dutch Republic.png',
            description: 'In the sixteenth century, the Spanish Habsburgs dominated much of Europe and possessed vast American colonies. Many believed they were on the verge of creating a universal empire and coordinating repression across the continent. Instead, they were halted by an unlikely coalition of eccentric merchants and radical Calvinists in the Netherlands. ' +
                '<br><br>At first, the Dutch struggle for independence seemed hopeless. They had no monarch, no unified church, no powerful aristocracy, and no formidable army or navy. They scarcely even had land, much of which had to be reclaimed from the sea, all while facing the constant threat of catastrophic flooding. These conditions forced the Dutch to become relentlessly innovative and tolerant, opening their markets to trade and finance and their borders to migrants who brought new skills and ideas. ' +
                '<br><br>Incredibly, by the end of the Eighty Years’ War against Spain, the Dutch had built a strong, independent state and a military power of the first rank. Dutch merchants and financiers created the richest economy in history. Their commitment to <a href="https://www.libertarianism.org/topics/dutch-republic" target="_blank">religious freedom and press liberty</a>—and the relatively high degree of rights enjoyed by women, including contract and property rights—fueled a remarkable cultural flowering, with printing houses, scientists, and philosophers who helped ignite the <a href="https://www.libertarianism.org/topics/enlightenment" target="_blank">Enlightenment</a>, alongside artists of the caliber of Vermeer and Rembrandt. ',
            location: {
                center: [7.82763, 51.19322],
                zoom: 6.74,
                pitch: 20.50,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            mapTitle: 'The Dutch Republic, mid-17th century',   // shown in the box at bottom right
            legend: [],
            onChapterEnter: [
                ...["dutchrep-17thcen-region-labels", "dutchrep-17thcen-labels", "dutchrep-17thcen"].map(layer => ({
                    layer: layer,
                    opacity: 1,
                    duration: 1000
                }))
            ],
            onChapterExit: [
                ...["dutchrep-17thcen-region-labels", "dutchrep-17thcen-labels", "dutchrep-17thcen"].map(layer => ({
                    layer: layer,
                    opacity: 0,
                    duration: 100
                }))
            ]
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The Anglosphere',
            subtitle: 'Industry, Individualism and Impertinence',
            image: './assets/The Anglosphere.png',
            description: 'After the <a href="https://www.libertarianism.org/topics/glorious-revolution" target="_blank">Glorious Revolution of 1688</a> – when the English Parliament allied with the Dutch to depose its Stuart monarchy – Britain began to adopt many ideas long associated with the Dutch Republic, from the <a href="https://www.libertarianism.org/topics/rule-law" target="_blank">rule of law</a> and intellectual tolerance to free markets and bourgeois virtues. Implemented on a larger scale and at some distance from continental wars, these ideas created space for a vibrant Enlightenment culture and the <a href="https://www.libertarianism.org/media/around-web/introduction-industrial-revolution" target="_blank">Industrial Revolution</a>, which soon transformed economic life worldwide. ' +
                '<br><br>Britain’s American colonies were steeped in these principles, and when they rebelled in 1776, the United States emerged as the first nation explicitly founded on Enlightenment ideals and turned into a vast reservoir of liberty and entrepreneurial energy across the Atlantic. After the Second World War, with the support of its allies, the United States helped establish a world order that, for all its imperfections, rested on free trade, open communication, rules-based cooperation and national self-determination. ' +
                '<br><br>Together, this produced the first golden age that is truly global. Since 1820, global per-capita GDP has surged, the share of humanity living in extreme poverty has fallen from roughly eight in ten to fewer than one in ten, and life expectancy has risen from about thirty years to seventy-four. A golden age – if we can keep it. ',
            location: {
                center:  [0.72637, 29.32162],
                zoom: 2.51,
                pitch: 5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinAnimation: true,
            callback: '',
            mapTitle: 'The Anglosphere',   // shown in the box at bottom right
            legend: [],
            onChapterEnter: [
                {
                    layer: 'Anglosphere',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'Anglosphere-labels',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Anglosphere',
                    opacity: 0,
                    duration: 100
                },
                {
                    layer: 'Anglosphere-labels',
                    opacity: 0,
                    duration: 100
                }
            ]
        },
        // {
        //     id: 'outro-id',
        //     alignment: 'center',
        //     hidden: false,
        //     title: 'Book Link',
        //     image: './assets/PeakHuman_FC.jpg',
        //     description: 'Praise for the book\n' +
        //         '“Norberg deftly punctures popular misconceptions.…Could a history book be more timely?”\n' +
        //         '—The Economist\n' +
        //         '\n' +
        //         '“Johan Norberg offers a compelling and timely study of what drove history’s most influential civilisations.…The book comes with impeccable timing.…This is an entertaining and informative read for anyone\n' +
        //         'interested in the forces that shape how civilisations progress.”\n' +
        //         '—Financial Times' ,
        //     location: {
        //         center:[71.66077, 30.87874],
        //         zoom: 2.30,
        //         pitch: 9.5,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     spinAnimation: true,
        //     callback: '',
        //     legend: [],
        //     onChapterEnter: [
        //         // {
        //         //     layer: 'layer-name',
        //         //     opacity: 1,
        //         //     duration: 5000
        //         // }
        //     ],
        //     onChapterExit: [
        //         // {
        //         //     layer: 'layer-name',
        //         //     opacity: 0
        //         // }
        //     ]
        // },

    ]
};
