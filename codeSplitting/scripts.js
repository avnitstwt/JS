const btn = document.querySelector('button')

btn.addEventListener('click', async function(){
    console.log('hello');
    
    let heavyFunction = await import("./heavy.js")
    heavyFunction.veryHeavy()
})