/*picture handling*/
const picture = {name: warden, value:"https://raw.githubusercontent.com/hihellothere1011/prisoners_dilemma/main/images/%E5%B0%88%E6%A1%88.png"}
const warden = document.getElementById("warden")

warden.style.picture = picture[warden]
//code



/*button handling */
const blacksheet = document.getElementById("blacksheet")
function disappear() {
    blacksheet.style.display= "none"
}
blacksheet.addEventListener("click", disappear)

//code


