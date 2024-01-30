//triangle 
document.getElementById('triangleBtn').addEventListener('click', function () {

    const twoInputvalueSub = getElementByIdInputValueAndSideElementId('triangleFirstInput', 'triangleSecoundInput')

    const getElementById = getClickAbleItemName('triangle')

    const twoValueTtl = triangleRhombusPentagonTotal(getElementById, twoInputvalueSub)


    setTotalResualt('sideDisplay', twoValueTtl)
})

//Rhombus
document.getElementById('rhombusBtn').addEventListener('click', function () {

    const twoInputvalueSub = getElementByIdInputValueAndSideElementId('rhombusFirstInput', 'rhombusSecoundInput')

    const getElementById = getClickAbleItemName('rhombus')

    const twoValueTtl = triangleRhombusPentagonTotal(getElementById, twoInputvalueSub)

    setTotalResualt('sideDisplay', twoValueTtl)
})

//Pentagon
document.getElementById('pentagonBtn').addEventListener('click', function () {

    const twoInputvalueSub = getElementByIdInputValueAndSideElementId('pentagonFirstInput', 'pentagonSecoundInput')

    const getElementById = getClickAbleItemName('pentagon')

    const twoValueTtl = triangleRhombusPentagonTotal(getElementById, twoInputvalueSub)

    setTotalResualt('sideDisplay', twoValueTtl)
})










//Rectangle
document.getElementById('rectangleBtn').addEventListener('click', function () {


    let twoInputvalueSub = getElementByIdInputValueAndSideElementId('rectangleFirstInput', 'rectangleSecoundInput')

    let getElementById = getClickAbleItemName('rectangle')

    setTotalResualt('sideDisplay', getElementById + ' ' + twoInputvalueSub)

})

//Parallelogram
document.getElementById('parallelogramBtn').addEventListener('click', function () {



    let twoInputvalueSub = getElementByIdInputValueAndSideElementId('parallelogramFirstInput', 'parallelogramSecoundInput')

    let getElementById = getClickAbleItemName('parallelogram')

    setTotalResualt('sideDisplay', getElementById + ' ' + twoInputvalueSub)

})




