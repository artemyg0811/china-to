// Сокращенная запись нахождения одного элемента
export function find(selector) {
    return document.querySelector(selector)
}
//========================================================================================================================================================

// Сокращенная запись нахождения нескольких элементов
export function findAll(selectors) {
    return document.querySelectorAll(selectors)
}
//========================================================================================================================================================

// Удаляет у всех элементов items класс itemClass
export function removeAllClasses(items, itemClass) {
    if (typeof items == "string") {
        items = document.querySelectorAll(items)
    }

    for (let i = 0; i < items.length; i++) {
        if (typeof(itemClass) === 'object') {
            items[i].classList.remove(...itemClass)
        }
        else {
            items[i].classList.remove(itemClass)
        }
    }
}
//========================================================================================================================================================

// Удаляет у элемента item класс itemClass
export function removeClass(item, itemClass) {
    if (typeof item == "string") {
        item = document.querySelectorAll(item)
    }

    item.classList.remove(itemClass)
}
//========================================================================================================================================================

// Заблокировать/разблокировать скролл у body
// export function bodyLock(con) {
//     if (con === true) {
//         document.body.classList.add("_lock")
//     } else if (con === false) {
//         document.body.classList.remove("_lock")
//     } else if (con === undefined) {
//         document.body.classList.toggle("_lock")
//     } else {
//         console.error("Неопределенный аргумент у функции bodyLock()")
//     }
// }
//========================================================================================================================================================

// Получаем все соседние элементы
export function getSiblings(elem) {
    var siblings = []
    var sibling = elem
    while (sibling.previousSibling) {
        sibling = sibling.previousSibling
        sibling.nodeType == 1 && siblings.push(sibling)
    }

    sibling = elem
    while (sibling.nextSibling) {
        sibling = sibling.nextSibling
        sibling.nodeType == 1 && siblings.push(sibling)
    }

    return siblings
}
//========================================================================================================================================================


// Возвращает рандомное целое число
export function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max) + 1
    return Math.floor(Math.random() * (max - min)) + min
}
//========================================================================================================================================================


// Проверка поддержки webp, добавление класса webp или no-webp тегу body
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image()

        webP.onload = webP.onerror = function () {
            callback(webP.height == 2)
        }

        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }

    testWebP(function (support) {
        let className = support === true ? "webp" : "no-webp"
        document.body.classList.add(className)
    })
}
//========================================================================================================================================================

// Аккордеон
// data-acc-toggle - кнопка при клике по которой показывается/скрывается тело аккордеона
// data-acc-body - тело аккордеона
// data-acc-hidden-sibling - аккордеоны будут скрываться при выборе других аккордеонов. !Атрибут указывается у контейнера (acc-list), в котором находятся аккордеоны
// data-acc-open="<acc-id>" - указывать у элемента, при клике по которому будет открываться указанный аккордеон (в паре обязательно использовать data-acc-id)
// data-acc-id="<acc-id>" - указывать у аккордеона, если планируется использовать data-acc-open. А так, необязательно
acc()
export function acc() {
    window.addEventListener("click", accDo)
    
    function accDo(e) {
        const dataAccOpen = e.target.getAttribute('data-acc-open')

        if (e.target.getAttribute('data-acc-toggle') || e.target.closest('[data-acc-toggle]') || (dataAccOpen != null || e.target.closest('[data-acc-open]'))) {
            const accToggle = dataAccOpen != null ? document.querySelector(`[data-acc-id=${dataAccOpen}] [data-acc-toggle]`) : e.target
            const accContainer = !accToggle.closest("[data-acc-body]") ? accToggle.parentElement.parentElement : accToggle.closest("[data-acc-body]")
            const accElem = accToggle.parentElement
            const accBody = accToggle.nextElementSibling
        
            if (accBody.style.maxHeight) {
                accBody.style.maxHeight = null
                accElem.classList.remove("is-show")
            } else {
                const adjacentElems = getSiblings(accElem)
                const accHiddenSibling = accContainer.dataset.accHiddenSibling
    
                accElem.classList.add("is-show")
    
                if (accHiddenSibling != undefined && accHiddenSibling != 'false') {
    
                    for (let i = 0; i < adjacentElems.length; i++) {
                        const elem = adjacentElems[i]
                        const elemHeader = elem.querySelector("[data-acc-toggle]")
                        const elemBody = elem.querySelector("[data-acc-body]")
    
                        elem.classList.remove("is-show")
                        elemHeader.classList.remove("is-show")
                        elemBody.style.maxHeight = null
                    }
                }
    
                accBody.style.maxHeight = accBody.scrollHeight + "px"
                accContainer.style.maxHeight = parseInt(accContainer.scrollHeight) + accBody.scrollHeight + "px"
            }
        }
    }
}
//========================================================================================================================================================

// Табы
tabs()
function tabs() {
    const tabElems = document.querySelectorAll('[data-tab]')

    for (let i = 0; i < tabElems.length; i++) {
        const tab = tabElems[i];
        const btnElems = tab.querySelectorAll('[data-tab-btn]')
        const allCards = tab.querySelectorAll('[data-tab-card]')
    
        for (let i = 0; i < btnElems.length; i++) {
            const btn = btnElems[i];

            btn.addEventListener('click', e => {
                const btnData = btn.dataset.tabBtn
                const cardElems = tab.querySelectorAll(`[data-tab-card=${btnData}]`)

                removeAllClasses(btnElems, 'is-active')
                removeAllClasses(allCards, '_show')

                btn.classList.add('is-active')
                // tabRoller()

                if (btnData === 'all') {
                    for (let i = 0; i < allCards.length; i++) {
                        const card = allCards[i];
                        
                        card.classList.add('_show')
                    }
                }
                else {
                    for (let i = 0; i < cardElems.length; i++) {
                        const card = cardElems[i];
                        
                        card.classList.add('_show')
                    }
                }
            })
        }
    }

    // window.addEventListener('resize', e => {
    //     tabRoller()
    // })
}
//========================================================================================================================================================


// Вспомогательные модули блокировки прокрутки и резкого сдвига
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 100) => {
	if (document.documentElement.classList.contains('_lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}

// Разблокировать скролл
export let bodyUnlock = (delay = 100) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove("_lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}

// Заблокировать скролл
export let bodyLock = (delay = 100) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.documentElement.classList.add("_lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}