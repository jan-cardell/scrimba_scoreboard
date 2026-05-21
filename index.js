let home = document.getElementById("home_score")
let home_count = 0
let guest = document.getElementById("guest_score")
let guest_count = 0

function home_1() {
    home_count += 1
    home.innerText = home_count
    highlight_winner()
}

function home_2() {
    home_count += 2
    home.innerText = home_count
    highlight_winner()
}

function home_3() {
    home_count += 3
    home.innerText = home_count
    highlight_winner()
}

function guest_1() {
    guest_count += 1
    guest.innerText = guest_count
    highlight_winner()
}

function guest_2() {
    guest_count += 2
    guest.innerText = guest_count
    highlight_winner()
}

function guest_3() {
    guest_count += 3
    guest.innerText = guest_count
    highlight_winner()
}

function reset_score() {
    guest_count = 0
    home_count = 0
    guest.innerText = guest_count
    home.innerText = home_count
    home.style.border = ""
    guest.style.border = ""
}

function highlight_winner() {
    if (home_count > guest_count) {
        home.style.border = "2px solid #F94F6D"
        guest.style.border = ""
    } else if (guest_count > home_count) {
        guest.style.border = "2px solid #F94F6D"
        home.style.border = ""
    } else {
        home.style.border = ""
        guest.style.border = ""
    }
}