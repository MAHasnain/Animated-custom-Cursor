let main = document.querySelector (".main") 
let crsr = document.querySelector (".cursor")
let crsr2 = document.querySelector (".cursor2")

main.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})

// main.addEventListener("mousemove", function (dets) {
//     crsr2.style.left = dets.x + "px"
//     crsr2.style.top =  dets.y + "px"
// })
