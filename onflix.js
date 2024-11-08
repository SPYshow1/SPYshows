
let menus = document.getElementById("menu_bar")

let close = document.getElementById("close")

let menu = document.getElementById("menu")

// start arrow left and right

// start variables of movies

let gallery = document.querySelector(".movies_list")

let arrowright = document.getElementById('arrowright')

let arrowleft = document.getElementById('arrowleft')

// 
//
//
//
//
//

let gallery1 = document.querySelector(".movies_list1")

let arrowright1 = document.getElementById('arrowright1')

let arrowleft1 = document.getElementById('arrowleft1')


let gallery4 = document.querySelector(".movies_list4")

let arrowright4 = document.getElementById('arrowright4')

let arrowleft4 = document.getElementById('arrowleft4')


let gallery5 = document.querySelector(".movies_list5")

let arrowright5 = document.getElementById('arrowright5')

let arrowleft5 = document.getElementById('arrowleft5')


let gallery6 = document.querySelector(".movies_list6")

let arrowright6 = document.getElementById('arrowright6')

let arrowleft6 = document.getElementById('arrowleft6')

let gallery7 = document.querySelector(".movies_list7")

let arrowright7 = document.getElementById('arrowright7')

let arrowleft7 = document.getElementById('arrowleft7')


let gallery8 = document.querySelector(".movies_list8")

let arrowright8 = document.getElementById('arrowright8')

let arrowleft8 = document.getElementById('arrowleft8')

// start

function sting(page) {
  window.location.href = page;
}

function venom(page1) {
  window.location.href = page1;
}

function abigail(page2) {
  window.location.href = page2;
}

function listOFseries(page3) {
  window.location.href = page3;
}



// end

// end variables of movies

arrowright.addEventListener('click', () => {
  gallery.scrollTo({left: gallery.scrollLeft + 630, behavior:'smooth'})
})

arrowleft.addEventListener('click', () => {
  gallery.scrollTo({ left: gallery.scrollLeft - 630, behavior: 'smooth' })
})

//
//
//
//
//

arrowright1.addEventListener('click', () => {
  gallery1.scrollTo({ left: gallery1.scrollLeft + 330, behavior: 'smooth' })
})

arrowleft1.addEventListener('click', () => {
  gallery1.scrollTo({ left: gallery1.scrollLeft - 330, behavior: 'smooth' })
})

arrowright8.addEventListener('click', () => {
  gallery8.scrollTo({ left: gallery8.scrollLeft + 330, behavior: 'smooth' })
})

arrowleft8.addEventListener('click', () => {
  gallery8.scrollTo({ left: gallery8.scrollLeft - 330, behavior: 'smooth' })
})


arrowright4.addEventListener('click', () => {
  gallery4.scrollTo({ left: gallery4.scrollLeft + 970, behavior: 'smooth' })
})

arrowleft4.addEventListener('click', () => {
  gallery4.scrollTo({ left: gallery4.scrollLeft - 1000, behavior: 'smooth' })
})

// end arrow left and right


//
//
//
//
//

arrowright5.addEventListener('click', () => {
  gallery5.scrollTo({ left: gallery5.scrollLeft + 970, behavior: 'smooth' })
})

arrowleft5.addEventListener('click', () => {
  gallery5.scrollTo({ left: gallery5.scrollLeft - 1000, behavior: 'smooth' })
})


//
//
//
//
//

arrowright6.addEventListener('click', () => {
  gallery6.scrollTo({ left: gallery6.scrollLeft + 970, behavior: 'smooth' })
})

arrowleft6.addEventListener('click', () => {
  gallery6.scrollTo({ left: gallery6.scrollLeft - 1000, behavior: 'smooth' })
})


//
//
//
//
//

arrowright7.addEventListener('click', () => {
  gallery7.scrollTo({ left: gallery7.scrollLeft + 970, behavior: 'smooth' })
})

arrowleft7.addEventListener('click', () => {
  gallery7.scrollTo({ left: gallery7.scrollLeft - 1000, behavior: 'smooth' })
})

// end arrow left and right


menus.addEventListener("click", () => {
  menu.classList.remove("hide")
  menus.classList.add("hide")
  close.classList.remove("hide")
})

close.addEventListener("click", () => {
  menu.classList.add("hide")
  menus.classList.remove("hide")
  close.classList.add("hide")
})


