let myRobot = {

    name: 'Verter',
    healthValue: 100,
    attack: 25 

}

let {health} = myRobot
//console.log(myRobot)

for (let x in myRobot){
    //console.log(`the ${x} value of myBot is ${myRobot[x]}` )
}

class Bot{

    constructor(name){
        this.name = name
        console.log(name)
    }
}

let phil = new Bot('Philip')
