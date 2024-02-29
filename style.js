
var btn = document.querySelectorAll("button")
var inp = document.querySelector("input")
var delet = document.querySelector("#del")
var clock_1 = document.querySelector("h1")
var action_1 = document.querySelector("#m")
var action_2 = document.querySelector("#w")
var calc = document.querySelector("#calc")
var clock = document.querySelector("#clock")
var equal = document.querySelector("#equal")
var ac = document.querySelector("#ac")
var opa = document.querySelector(".opration")







setInterval(() => {
    var clock = new Date();
    var hours = clock.getHours();
    var min = clock.getMinutes();
    var sec = clock.getSeconds();
    var x = "AM";
    if (hours > 12) {
        x = "PM"
        hours -= 12
        if (hours < 10) {
            hours = "0" + hours
        }


    }
    if (min < 10)
        min = "0" + min
    if (sec < 10)
        sec = "0" + sec

    clock_1.innerHTML = hours + " : " + min + " : " + sec + " " + x
})
btn.forEach((a) => {

    a.addEventListener("click", () => {

        inp.value += a.value

    })

}
)

// console.log("sds" - "asda")
equal.addEventListener("click", () => {

    if (inp.value.length > 0) {
        inp.value = eval(inp.value)

    }

    if (inp.value[0] === NaN || inp.value[length - 1] === NaN) {

        inp.innerHTML = "Error"
    }

})
ac.addEventListener("click", () => {
    inp.value = ""
})


delet.addEventListener("click", () => {
    var x = inp.value.toString()
    let result = Number(x.slice(0, -1));

    inp.value = result

})