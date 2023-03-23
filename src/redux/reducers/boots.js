const initialState={
    category:'All',
    boots:[{name:"Nike Air Force",description:'Rich patent leather and dazzling colors come together in a way only Nike and UNDEFEATED could. From the orange Swoosh to the nearly-neon pink toe—no 2 panels are alike. An orange and red woven tongue label serves as a nod to an early UNDEFEATED release, while the printed sockliner provides a hidden detail. With kicks like this on your feet, how can you not steal the show?',size:[38,39,43,44],color:['red','blue'],money:160,img:"Boots_1",category:'Women'},
        {name:"Nike Air Max Goaterra 2.0",description:'Keep it rugged in the Nike Air Max Goaterra 2.0. Constructed with perfectly shined premium leather, it\'s got a finish that\'s designed to help you stay dry. Sturdy and street-ready, this boot can be dressed up or dressed down depending on the mood. The ultra-padded collar and Air cushioning in the heel make it comfortable.',size:[38,39,40,41,42,43,44],color:['red','blue','green'],money:140,img:"Boots_2",category:'Women'},
        {name:"Nike Air Max 90",description:'Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.',size:[38,39,40,41,42,43,44],color:['red','blue','green'],money:130,img:"Boots_3",category:'Man'},
        {name:"Nike Air Max Pulse",description:'Keeping it real, the Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line. Its textile-wrapped midsole and vacuum-sealed accents keep ‘em looking fresh and clean, while colors inspired by the London music scene give your look the edge. Point-loaded Air cushioning—revamped from the incredibly plush Air Max 270—delivers better bounce, helping you push past your limits.',size:[38,39,40,41,42,43,44],color:['red','blue','green'],money:150,img:"Boots_4",category:'Man'},
        {name:"Air Jordan 2 Retro Low",description:'Wear a shoe with over 30 years of legacy that remains fresh to this day. Making its debut in 1986, the AJ2 was the cool younger sibling of its famous predecessor—a sleeker and more pared-down version of the iconic AJ1. With premium leather and an Air-Sole unit underfoot, this throwback serves the ultimate combo of wearability and style.',size:[38,39,40,41,42,43,44],color:['red','blue','green'],money:150,img:"Boots_5",category:'Women'},
        {name:"Nike Dunk High Retro",description:'Recognizing the Dunk\'s roots as the top-ranking college team sneaker, the "Be True To Your School" pack looks to the original ad campaign for inspiration. Colors represent top-flight universities, while design details serve throwback hoops flair. And that crisp leather has the perfect amount of sheen to make \'em a hands-down win. So lace up and show off that varsity spirit with color combos that nod to your fave team. Ya game?',size:[38,39,40,41,42,43,44],color:['red','blue','green'],money:125,img:"Boots_6",category:'Man'},
        {name:"Nike Air VaporMax Plus",description:'The Nike Air VaporMax Plus looks to the past and propels you into the future. Nodding to the 1998 Air Max Plus with its floating cage, padded upper and heel logo, it adds revolutionary VaporMax Air technology to ramp up the comfort and create a modern look.',size:[38,39,40,41,42,43,44],color:['red','blue','green'],money:210,img:"Boots_7",category:'Child'},
        {name:"Nike Dunk Mid",description:'Created for the hardwood but taken to the streets, the \'80s b-ball icon returns with classic, stone-washed canvas in a durable design. Channeling vintage style back onto the streets, its padded, mid-cut collar lets you take your game anywhere—in comfort.',size:[38,39,40,41,42,43,44],color:['red','blue','green'],money:115,img:"Boots_8",category:'Child'},
    ]
}


const boots=(state=initialState,action)=>{

    switch (action.type) {

        case"CHANGE_CATEGORY":
        return {
            ...state,
            category:action.payload
        }
        default:
            return state
    }
}

export default boots;