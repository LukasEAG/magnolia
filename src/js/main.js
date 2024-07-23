//area map pointer

const mapPoint = document.querySelectorAll('.point-on-map')
const mapsCardsBox = document.querySelector('.area__maps-big-cards')
const mobileMapsCard = document.querySelector('.area__maps-cards-mobile')
const areaBgImg = document.querySelector('.area__bg-img')

const cardContainer = document.createElement('div')

const dataObject = {
	church: {
		title: 'Kościół św. Aleksego',
		img: './dist/img/miniaturkaKosciol.jpeg',
		text: 'Parafia w Przedborzu została erygowana ok. 1270. Pierwotny kościół miał powstać ok 1275 r. , jako fundacja Bolesława Wstydliwego. Miała wówczas powstać nawa główna. Budynek został rozbudowany na polecenie Kazimierza Wielkiego w 1341 r., w tym samym okresie wzniesiono na polecenie króla zamek, który nie zachował się do dziś. Pożary w XVII w. spowodowały częściowe zniszczenie świątyni, z gotyckiej budowli zachowała się wieża i część murów. Pozostała część została odbudowana w latach 1640- 1695. Dobudowano wówczas dwie kaplice. Kolejne pożary doprowadziły do zniszczenia części wieży a w konsekwencji do jej obniżenia. W r. 1885 w czasie jednej z konserwacji obiektu dobudowano zakrystię.',
		list1: '',
		list2: '',
		list3: '',
		list4: '',
		list5: '',
		list6: '',
		adress1: 'Kościelna 1,',
		adress2: '97-570 Przedbórz',
		houersWeek: '0800 - 1600',
		houersSat: 'Zamknięte',
		houersSun: '1000-1400',
		webLink: 'https://www.parafiaprzedborz.info.pl/',
		webLinkName: 'Kościół św. Aleksego w Przedborzu ',
	},

	museum: {
		title: 'Muzeum Ludowe Ziemi Przedborskiej',
		img: './dist/img/miniaturkaMuzeum.jpg',
		text: 'Muzeum Ludowe Ziemi Przedborskiej założył nauczyciel Tadeusz Michalski, który do dziś chętnie oprowadza turystów z Polski i Świata. Muzeum mieści się w wyremontowanym XVII - wiecznym budynku dawnej karczmy przy ul. Kieleckiej. Jest jednym z najciekawszych w centralnej Polsce muzeów o charakterze mini-skansenu. Muzeum dotychczas zgromadziło ponad 9 tys. eksponatów, głównie etnograficznych i historycznych, do których należą między innymi:',
		list1: '<li>podwórze wiejskie z wystawą dawnych narzędzi,</li>',
		list2: '<li>kuźnia i warsztat bednarski,</li>',
		list3: '<li>izba ludowa w XIX-wiecznym stylu,</li>',
		list4: '<li>sala z wyrobami tkactwa przedborskiego,</li>',
		list5: '<li>zasłużeni dla Ziemi Przedborskiej,</li>',
		list6: '<li>oraz wiele innych ciekawych eksponatów.</li>',
		adress1: 'Kielecka 9,',
		adress2: '97-570 Przedbórz',
		houersWeek: '0800 - 1600',
		houersSat: '',
		houersSun: '',
		webLink: 'https://www.facebook.com/p/Muzeum-Ludowe-w-Przedborzu-100065057167948/',
		webLinkName: 'Muzeum Ludowe w Przedborzu Facebook',
	},
	lake: {
		title: 'Kąpielisko nad zalewem ',
		img: './dist/img/miniaturkaKapielisko.jpg',
		text: 'Dla mieszkańców Przedborza i okolic przygotowano miejsce idealne na wypoczynek. Zbiornik wodny zachęca do letniego spędzenia wolnego czasu poprzez liczne atrakcje dostępne na miejscu. Każdy znajdzie tu coś dla siebie. Każdego lata jest to popularne miejsce wśród rodzin z dziećmi, jak i zorganizowanych grup znajomych. Dla miłośników plażingu i kąpieli przygotowano strzeżone kąpielisko z mnóstwem miejsca do plażowania i atrakcjami takimi jak:',
		list1: '<li>zjeżdżalnię wodną,</li>',
		list2: '<li>plac zabaw dla dzieci,</li>',
		list3: '<li>boiska do piłki nożnej, koszykówki oraz siatkówki plażowej,</li>',
		list4: '<li>wypożyczalnie sprzętu wodnego,</li>',
		list5: '<li>zaplecze gastronomiczne,</li>',
		list6: '<li>miejsce na ognisko,</li>',
		adress1: 'Turystyczna,',
		adress2: '97-570 Przedbórz',
		houersWeek: '1100-1900',
		houersSat: '1100-1900',
		houersSun: '1100-1900',
		webLink: 'https://sk.gis.gov.pl/kapielisko/185',
		webLinkName: 'Serwis kąpieliskowy - zbornik w Przedborzu',
	},
	mountain: {
		title: 'Fajna ryba - 347 m n.p.m. ',
		img: './dist/img/miniaturkaGora.jpg',
		text: 'Fajna Ryba (347 m n.p.m.) jest najwyższym wzniesieniem Pasma Przedborskiego i najwyższym naturalnym wzgórzem województwa łódzkiego (wprawdzie leżąca pod Bełchatowem Góra Kamieńska ma o 39 m więcej, jednak jest wzgórzem sztucznym). W całym Paśmie Przedborsko-Małogoskim wyższa o 4 metry jest położona koło Małogoszcza Góra Sabianów. Nie prowadzi na nią jednak, przynajmniej na razie żaden szlak turystyczny. Wzgórze Fajnej Ryby jest bardzo malowniczo położone, niestety wierzchołek jest całkowicie zalesiony i nie oferuje żadnych widoków. W pobliżu wierzchołka Fajnej Ryby przebiegają żółty szlak turystyczny z Przedborza do Krasocina oraz zielony szlak turystyczny z Przedborza do Rączki. Od szlaku na szczyt jest 140 m, kierunek wskazuje strzałka',
		list1: '',
		list2: '',
		list3: '',
		list4: '',
		list5: '',
		list6: '',
		adress1: 'Turystyczna,',
		adress2: '97-570 Przedbórz',
		houersWeek: 'Całą dobe',
		houersSat: 'Całą dobe',
		houersSun: 'Całą dobe',
		webLink: 'https://kgs.info.pl/fajna-ryba',
		webLinkName: 'Korona Gór Świętokrzyskich - Fajna Ryba',
	},

    river: {
        title: 'Spływ kajakowy - Pilicą',
        img: './dist/img/splyw.jpg',
        text: 'Spływy kajakowe rzeką Pilicą w Przedborzu to niezapomniana przygoda, która łączy w sobie piękno przyrody, aktywny wypoczynek i odrobinę adrenaliny. Rzeka Pilica, będąca jedną z najdłuższych rzek w Polsce, przepływa przez malownicze tereny, oferując kajakarzom niezapomniane widoki i wrażenia. Trasa spływu jest różnorodna i pełna niespodzianek. Kajakarze mogą podziwiać liczne zakola, wyspy i piaszczyste plaże, które zachęcają do krótkich przerw i odpoczynku. Organizatorzy spływów oferują różne opcje tras, od kilkugodzinnych wycieczek po kilkudniowe wyprawy.',
        list1: '',
		list2: '',
		list3: '',
		list4: '',
		list5: '',
		list6: '',
		adress1: '',
		adress2: 'Przedbórz',
		houersWeek: 'Całą dobe',
		houersSat: 'Całą dobe',
		houersSun: 'Całą dobe',
		webLink: 'https://meandrypilicy.pl/oferta-splywy-kajakowe-lodzkie/splywy-kajakowe/przedborz-leg-reczynski',
		webLinkName: 'Spływy Kajakowe Przedbórz',

    }
}

const cardBody = body => {
	return `
                                <div class="area__card-title">
                                    <img src="${body.img}" alt="">
                                    <h3>${body.title}</h3>

                                </div>
                                <p>${body.text}
                                <ul>
                                    ${body.list1}
                                    ${body.list2} 
                                    ${body.list3}
                                    ${body.list4}
                                    ${body.list5}
                                    ${body.list6}       
                                </ul>
                                </p>
                                <div class="area__card-big-info-box">
                                    <div class="area__card-adress">

                                        <a href=""><i class="ti ti-map-2"></i> <span>${body.adress1} </span>
                                            <span>${body.adress2}</span></a>

                                    </div>
                                    <div class="area__card-open-hours">
                                        <i class="ti ti-clock-hour-10"></i>
                                        <span>Pon - Pt: ${body.houersWeek} /</span>
                                        <span>Sob: ${body.houersSat} /</span>
                                        <span>Nd: ${body.houersSun}</span>
                                    </div>
                                    <div class="area__card-link">

                                        <a target="_blank"
                                            href="${body.webLink}">
                                            <i class="ti ti-link"></i><span>${body.webLinkName}</span></a>
                                    </div>
                            `
}

const createCard = value => {
	setTimeout(function () {
		cardContainer.className = 'area__maps-big-card'
		cardContainer.innerHTML = cardBody(value)

        if(window.innerWidth > 992) {

            mapsCardsBox.appendChild(cardContainer)
            mapsCardsBox.classList.add('show')
        } else {
            mobileMapsCard.appendChild(cardContainer)
            mobileMapsCard.classList.add('show')
            areaBgImg.classList.add('opacity')

        }
	}, 400)
}

mapPoint.forEach(point => {
	point.addEventListener('click', () => {

        if (window.innerWidth > 992) {

            mapsCardsBox.classList.remove('show')
        } else {
            mobileMapsCard.classList.remove('show')
            areaBgImg.classList.remove('opacity')
        }
		cardContainer.remove()
		mapsCardsBox.scrollTop = 0

		for ([key, value] of Object.entries(dataObject)) {
			if (point.value === key) {
				createCard(value)
			}
		}
	})
})

// rooms gallery

const body = document.querySelector('body')
const gallery = document.querySelector('.rooms__gallery-zoom')
const galleryBox = document.querySelector('.rooms__gallery-zoom-box')
const openGalleryBtns = document.querySelectorAll('[data-btn-open-gallery]')
const galleryBtn = document.querySelectorAll('[data-gallery-button]')
const closeGalleryBtn = document.querySelector('[data-btn-close-gallery]')
const galleryNextBtn = document.querySelector('[data-gallery-button="next"]')
const galleryList = document.createElement('div')

const galleryObject = {
	room1: {
		img1: './dist/img/room2:6One.jpg',
		img2: './dist/img/room2:6Two.jpg',
		img3: './dist/img/room2:6Three.jpg',
	},
	room2: {
		img1: './dist/img/room2:3One.jpg',
		img2: './dist/img/room2:3Two.jpg',
		img3: './dist/img/room2:3Three.jpg',
	},
	room3: {
		img1: './dist/img/room2:3OneR.jpg',
		img2: './dist/img/room2:3TwoR.jpg',
		img3: '',
	},
	room4: {
		img1: './dist/img/room2One.jpg',
		img2: './dist/img/room2Two.jpg',
		img3: './dist/img/room2Three.jpg',
	},
	bath: {
		img1: './dist/img/bathOne.jpg',
		img2: './dist/img/bathTwo.jpg',
		img3: '',
	},
	kitchen: {
		img1: './dist/img/kitchenOne.jpg',
		img2: './dist/img/kitchenTwo.jpg',
		img3: './dist/img/kitchenThree.jpg',
	},
	porch: {
		img1: './dist/img/porchOne.jpg',
		img2: './dist/img/porchTwo.jpg',
		img3: '',
	},
}

const galleryBody = gallery => {
	return ` <img class="rooms__gallery-slide" src="${gallery.img1}" alt="">
             <img class="rooms__gallery-slide" data-active src="${gallery.img2}" alt="">
            <img class="rooms__gallery-slide " src="${gallery.img3}" alt="">`
}

const createGallery = value => {
	galleryList.classList.add('rooms__gallery-zoom-list')
	galleryList.dataset.gallerySlides = true
	galleryList.innerHTML = galleryBody(value)
	galleryBox.insertBefore(galleryList, galleryNextBtn)
}

openGalleryBtns.forEach(button => {
	button.addEventListener('click', () => {
		gallery.classList.add('show')
		body.style.overflowY = 'hidden'

		for ([key, value] of Object.entries(galleryObject)) {
			if (button.value === key) {
				createGallery(value)
			}
		}
	})
})

closeGalleryBtn.addEventListener('click', () => {
	gallery.classList.remove('show')
	body.style.overflowY = 'visible'
})

galleryBtn.forEach(button => {
	button.addEventListener('click', () => {
		const offset = button.dataset.carouselButton === 'next' ? 1 : -1
		const slides = button.closest('[data-gallery]').querySelector('[data-gallery-slides]')

		const activeSlide = slides.querySelector('[data-active]')
		let newIndex = [...slides.children].indexOf(activeSlide) + offset
		if (newIndex < 0) newIndex = slides.children.length - 1
		if (newIndex >= slides.children.length) newIndex = 0

		slides.children[newIndex].dataset.active = true
		delete activeSlide.dataset.active
	})
})

// mobile menu

const burgerBtn = document.querySelector('[data-burger-btn]')
const closeMobileBtn = document.querySelector('[data-mobile-close-btn]')
const mobileMenu = document.querySelector('[data-mobile-menu]')
const mobileMenuItems = document.querySelectorAll('.nav__mobile-menu-item')

burgerBtn.addEventListener('click', () => {
	mobileMenu.classList.add('show')
	body.style.overflowY = 'hidden'
})

closeMobileBtn.addEventListener('click', () => {
	mobileMenu.classList.remove('show')
	body.style.overflowY = 'visible'
})

mobileMenuItems.forEach(button => {
	button.addEventListener('click', () => {
		mobileMenu.classList.remove('show')
		body.style.overflowY = 'visible'
	})
})
