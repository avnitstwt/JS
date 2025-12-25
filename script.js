let coffee = {
    color:'dark',
    drink:function(){
        console.log('gutgutgo');
        
    }
}
let arabiaCoffee = Object.create(coffee)
console.log(arabiaCoffee.drink())