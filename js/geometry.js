function setTotalResualt(sideDisplayId, total){
    const display = document.getElementById(sideDisplayId)
    display.innerText = total ;
}



//ellipse
document.getElementById('ellipseBtn').addEventListener('click', function () {

    const total = ellipseRhombusPentagonTotal('ellipse','ellipseFirstInput','ellipseSecoundInput', 0.5)
  
    setTotalResualt('sideDisplay', total)
  
})


//Rhombus
document.getElementById('rhombusBtn').addEventListener('click', function () {
    const total = ellipseRhombusPentagonTotal('rhombus','rhombusFirstInput','rhombusSecoundInput', 0.5)
   

    setTotalResualt('sideDisplay', total)


})

//Pentagon
document.getElementById('pentagonBtn').addEventListener('click', function () {


    const total = ellipseRhombusPentagonTotal('pentagon','pentagonFirstInput','pentagonSecoundInput', 0.5)
 

    setTotalResualt('sideDisplay', total)

})





