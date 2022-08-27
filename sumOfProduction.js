function totalProduction(milk) {
    let sumOfMilk = 0;
    for (let i = 0; i < milk.length; i++){
        sumOfMilk += milk[i];
        if (i == 0) {
            console.log("The milk production for A is " + milk[0] +" per day")
        } else if (i == 1) {
            console.log("The milk production for B is " + milk[1] +" per day")
        }
        else if (i == 2) {
            console.log("The milk production for C is " + milk[2] +" per day")
        }
        else if (i == 3) {
            console.log("The milk production for D is " + milk[3] +" per day")
        }
        else if (i == 4) {
            console.log("The milk production for E is " + milk[4] +" per day")
        } else  {
            console.log("The milk production for F is " + milk[5] +" per day")
        }
       
        
    }
    console.log("The production for the day is " + sumOfMilk + " liters of milk per day")

}
totalProduction([124,24,18,19,100,281])
