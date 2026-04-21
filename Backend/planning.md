
// apis for my code 

 flow 
 # user  creates a room = 
   
     Room-info [
       game-setting :  {

        gun-attributes : off ,
        esports-mode : on ,
        default look : on , 
        character skill : on, 
        limited ammo : yes , 
        gun : all , 
        grenade : yes ,
        map : bermuda , 
        game-type : squad 
        },
     
        money : {
            entry-fee: 500, 
            winning amount : 10000
        },  
        
        roomInfo : {
            status : not-started  , pending , completed,
            roomId : 
            roomPass: 
            roomName
        },



    ]
        
    


// Ai update on my raw code 

{
  title: "Squad Match #1",

  gameSettings: {
    gunAttributes: false,
    esportsMode: true,
    defaultLook: true,
    characterSkill: true,
    limitedAmmo: true,
    gun: "all",
    grenade: true,
    map: "bermuda",
    gameType: "squad"
  },

  entryFee: 500,
  prizePool: 10000,

  maxPlayers: 20,
  players: [],

  room: {
    roomId: "",
    roomPass: "",
  },

  status: "OPEN", 
  // OPEN → FULL → LIVE → COMPLETED

  createdBy: "userId123",

  createdAt: new Date(),
  updatedAt: new Date()
}



//authentication 


Oauth - google 
Oauth - facebook 


user - oauth - server( check if user exist -> yes ? just create and give new token : create user and save in db and create new token and send to user)


Day-2 (April 20)

1. Google Oauth login backend 
2. creating features
  -- join room 
  -- checking if i can use socket io anywhere to give real time notification to the match creator 




// basic flow 

