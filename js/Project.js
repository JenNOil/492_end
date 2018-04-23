new p5()

let         create_room  = new Create()
let         create_b  = new Create()
var         ac    = new AC() 
var         vr    = new Visualisation ()

let         easycam1,
            easycam2

let         graphics1,
            graphics2,
            graphics3

let         getdata     = JSON.parse(localStorage.getItem('data'))
let         user        = JSON.parse(localStorage.getItem('user'))


let         date        = JSON.parse(localStorage.getItem('date')),
            roomname
            
let         diff        = new Array(),
            topval_r,
            topval_ac,
            plot

let         total = 0
            

let         colour_check 
            
let         toproom,
            d_date      = new Array()

let         room_over   = new Array()

let         getacvalue   = new Array()

let         c1          = color('#39BEFF'),
            c2          = color('#39BEFF'),
            c3          = color('#FFFFFF')
            
let         co          = new Array(),
            room_color  = new Array()

let         index       = 0


preload = () => {
    f1 = loadFont("font/Grand_Aventure.otf")
    f2 = loadFont("font/romzul sans.ttf ")
}


setup = () => {
    pixelDensity(1)
    var canvas = createCanvas(windowWidth,windowHeight)

    let w = windowWidth
    let h = windowHeight
    frameRate(1)

    graphics1 = createGraphics(w, h, WEBGL)
    graphics2 = createGraphics(w, h, WEBGL)

    easycam1 = new Dw.EasyCam(graphics1._renderer, {distance : 600})
    easycam2 = new Dw.EasyCam(graphics2._renderer, {distance : 3000})


    easycam1.setDistanceMin(10)
    easycam1.setDistanceMax(1200)

    easycam2.setDistanceMin(1000)
    easycam2.setDistanceMax(15000)
  
  
    easycam1.attachMouseListeners(this._renderer)
    easycam2.attachMouseListeners(this._renderer)


    easycam1.setViewport([0,0,w,h])
    easycam2.setViewport([0,0,w,h])

    initHUD()


    for(let i = 1; i < 35; i++){
      if (i<23){
          room_over[i-1]  = false
      }
      diff[i]   = 0
      room_color[i] = color('#FFFFFF')
    }

    room_color[0] = color('#FFFFFF')

    co [0]        = color('#FE5454')
    co [1]        = color('#FA9110')
    co [2]        = color('#FBF23D')
    co [3]        = color('#7DD396')
    co [4]        = color('#D790BC')

    vr.setvalue(getdata)
    vr.setcolour(getdata)

}


windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
  
    let w = windowWidth
    let h = windowHeight 
  
    // resize p5.RendererGL
    easycam1.renderer.resize(w, h)
    easycam2.renderer.resize(w, h)
  
    // set new graphics dim
    easycam1.graphics.width  = w
    easycam1.graphics.height = h
  
    easycam2.graphics.width  = w
    easycam2.graphics.height = h

    // set new viewport
    easycam1.setViewport([0, 0, w, h])
    easycam2.setViewport([0, 0, w, h])

}


draw = () => {

    handleSuperController([easycam1, easycam2])
    if(user === 'Anonymous'){
        drawScene11(easycam1)
    }else{
        drawScene12(easycam2) 
    }
    

    displayResult_P2D()
}


displayResult_P2D = () => {
    let vp1 = easycam1.getViewport()
    let vp2 = easycam2.getViewport()
    
  
    image(easycam1.graphics, vp1[0], vp1[1], vp1[2], vp1[3])
    image(easycam2.graphics, vp2[0], vp2[1], vp2[2], vp2[3])
}

drawScene11 = (cam) => {
    
    let v1 = cam.graphics
    let w = windowWidth
    let h = windowHeight

    let a = cam.getState()
    let euler = calculateEuler(a.rotation)


    v1.background('#333')
    roomname = 'N/A'
    
    for(let i=0;i<22;i++){
        console.log(vr.getcolour(i,index))
        if (vr.getcolour(i,index) > 0.05 && vr.getcolour(i,index) <= 0.1){
            room_color[i] = color('#005CFD')
        } 
        else if(vr.getcolour(i,index) > 0.11 && vr.getcolour(i,index) <= 0.4){
            room_color[i] = color('#FBFF00')
        }
        else if(vr.getcolour(i,index) > 0.41 && vr.getcolour(i,index) <= 0.7){
            room_color[i] = color('#FD9900')
        }
        else if(vr.getcolour(i,index) > 0.71){
            room_color[i] = color('#FD0B00')
        }
        else {
            room_color[i] = color('#FFFFFF')
        }
    }

    v1.translate(-550,-350,-100)

    let ratio = parseFloat(a.distance) * 0.002

    create_room.setdist(ratio)
     
    v1.push()
    //v1.perspective(60 * PI/180, w/h, 1, 5000)

    //---------------401------------------
    create_room.room(0,706,60,164,150,room_color[0],v1)
    over_room(0)
    //30
    diff[30] = ac.airc(860,79,10,25, 'y', v1, getdata[29], 30)
    //31
    diff[31] = ac.airc(860,123,10,25, 'y', v1, getdata[30], 31)
    //28
    diff[28] = ac.airc(860,167,10,25, 'y', v1, getdata[27], 28)

    //---------------402------------------
    create_room.room(1,870,60,164,150,room_color[1],v1)
    over_room(1)
    //1
    diff[1] = ac.airc(1024,79,10,25, 'y',v1, getdata[0], 1)

    //3
    diff[3] = ac.airc(1024,123,10,25, 'y',v1, getdata[2], 3)

    //5
    diff[5] = ac.airc(1024,167,10,25, 'y',v1, getdata[4], 5)

    //---------------406------------------
    create_room.room(5,624,260,410,100,room_color[5],v1)
    over_room(5)
    //9
    diff[9] = ac.airc(654,350,25,10, 'x',v1, getdata[8], 9)

    //7
    diff[7] = ac.airc(885,272,10,25, 'y',v1, getdata[6], 7)

    //---------------403------------------
    create_room.room(2,895,260,139,50,room_color[2],v1)
    over_room(2)
    //4
    diff[4] = ac.airc(952,300,25,10, 'x', v1, getdata[3], 4)

    //---------------404------------------
    create_room.room(3,920,310,114,50,room_color[3], v1)
    over_room(3)
    //2
    diff[2] = ac.airc(967,310,25,10, 'x',v1, getdata[1], 2)

    //---------------405------------------
    create_room.room(4,838,335,82,25,room_color[4],v1)
    over_room(4)
    //6
    diff[6] = ac.airc(866,350,25,10, 'x',v1, getdata[5], 6)

    //---------------407------------------
    create_room.room(6,788,360,82,50,room_color[6],v1)
    over_room(6)
    //11
    diff[11] = ac.airc(860,372,10,25, 'y', v1, getdata[10], 11)

    //---------------409------------------
    create_room.room(7,788,510,82,50,room_color[7],v1)
    over_room(7)
    //8
    diff[8] = ac.airc(860,522,10,25, 'y',v1, getdata[7], 8)

    //---------------410------------------
    create_room.room(8,706,535,82,25,room_color[8],v1)
    over_room(8)
    //10
    diff[10] = ac.airc(734,550,25,10, 'x',v1, getdata[9], 10)

    //---------------411------------------
    create_room.room(9,542,560,164,100,room_color[9],v1) // 411(LD)
    over_room(9)
    //15
    diff[15] = ac.airc(643,650,25,10, 'x',v1, getdata[14], 15)

    //13
    diff[13] = ac.airc(580,650,25,10, 'x',v1, getdata[12], 13)

    
    create_room.room(10,378,560,164,100,room_color[10],v1) // 411
    over_room(10)
    //17
    diff[17] = ac.airc(416,650,25,10, 'x', v1, getdata[16], 17)

    //12
    diff[12] = ac.airc(479,650,25,10, 'x', v1, getdata[11], 12)

    
    //---------------412------------------
    create_room.room(99,50,560,328,100,color(255),v1)
    create_room.room(11,264,560,114,100,room_color[11],v1) //7-11
    over_room(11)
    //20
    //diff[20] = ac.airc(331,650,25,10, 'x', v1, getdata[19], 20)

    //18
    diff[18] = ac.airc(285,650,25,10, 'x', v1, getdata[17], 18)

    
    create_room.room(12,157,610,107,50,room_color[12],v1) //??????
    over_room(12)
    //16
    diff[16] = ac.airc(194,650,25,10, 'x', v1, getdata[15], 16)

    
    create_room.room(13,50,610,107,50,room_color[13],v1) //A.tatsapong
    over_room(13)
    //14
    diff[14] = ac.airc(87,650,25,10, 'x',v1, getdata[13], 14)

    
    create_room.room(14,50,560,82,50,room_color[14],v1) //A.ken
    over_room(14)
    //34
    diff[34] = ac.airc(50,572,10,25, 'y',v1, getdata[33], 34)

  //---------------413------------------
    create_room.room(16,50,360,164,100,room_color[16],v1) //GRA
    over_room(16)
    //24
    diff[24] = ac.airc(50,376,10,25, 'y',v1, getdata[23], 24)

    //19
    diff[19] = ac.airc(50,417,10,25, 'y',v1, getdata[18], 19)
    
    create_room.room(15,50,460,164,100,room_color[15],v1) //???
    over_room(15)
    //21
    diff[21] = ac.airc(50,476,10,25, 'y',v1, getdata[20], 21)

    //23
    diff[23] = ac.airc(50,517,10,25, 'y',v1, getdata[22], 23)

    //---------------414------------------
    create_room.room(17,296,410,82,100,room_color[17],v1)
    over_room(17)
    //26
    diff[26] = ac.airc(368,447,10,25, 'y',v1, getdata[25], 26)

    //---------------415------------------
    create_room.room(18,214,260,164,100,room_color[18],v1) //LIL
    over_room(18)
    //29
    diff[29] = ac.airc(252,260,25,10, 'x',v1, getdata[28], 29)

    //25
    diff[25] = ac.airc(315,260,25,10, 'x',v1, getdata[24], 25)
    
    create_room.room(19,378,260,164,100,room_color[19],v1)//3rd
    over_room(19)
    //27
    diff[27] = ac.airc(416,260,25,10, 'x',v1, getdata[26], 27)

    //22
    diff[22] = ac.airc(479,260,25,10, 'x',v1, getdata[21], 22)

    //---------------422------------------
    create_room.room(21,542,60,164,100,room_color[21],v1)
    over_room(21)
    //33
    diff[33] = ac.airc(696,97,10,25, 'y',v1, getdata[32], 33)

    //---------------hr------------------
    create_room.room(20,542,160,82,50,room_color[20],v1)
    over_room(20)
    //32
    diff[32] = ac.airc(542,172,10,25, 'y',v1, getdata[31], 32)

    //---------------other------------------
    create_room.room(99,706,360,82,100,color(255),v1)
    create_room.room(99,788,410,82,50,color(255),v1)
    create_room.room(99,706,460,164,50,color(255),v1)
    create_room.floor(v1)
    create_room.bar(378,410,246,100,v1)
    

    v1.pop()

    ac.length_update()
    time = ac.gettime()
    index++
    displayHUD(cam)
}

drawScene12 = (cam) => {
    let v2 = cam.graphics
    v2.background('#333')
    let a = new campus()
    a.drawcampus(['106','00','00'],c3,v2)

}

  
/*drawScene2 = () => {

    graphics2.background('#AD0')



    //visualise part

    vr.update_visual(diff)
    //gv1.textSize(20)
    let sd 
    if( room_over[0]==true||room_over[1]==true||room_over[2]==true||room_over[3]==true||room_over[4]==true||room_over[5]==true||room_over[6]==true||room_over[7]==true||room_over[8]==true||
        room_over[9]==true||room_over[10]==true||room_over[11]==true||room_over[12]==true||room_over[13]==true||room_over[14]==true||room_over[15]==true||room_over[16]==true||room_over[17]==true||
        room_over[18]==true||room_over[19]==true||room_over[20]==true||room_over[21]==true){
    
            graphics2.text("Room : " + roomname, 10, 80)
            let space = 0
            graphics2.line(10,100,10,600)
            graphics2.line(10,100,280,100)
            graphics2.noStroke()
  
            graphics2.fill(color('#FFFF64'),100)
            graphics2.rect(10,100,90,500)
            graphics2.fill(color('#FF9D40'),100)
            graphics2.rect(100,100,90,500)
            graphics2.fill(color('#FF4740'),100)
            graphics2.rect(190,100,90,500)
            graphics2.stroke(color('#000000'))
            let j = 0

            for(let i = 0; i < plot.length-1; i++){
                graphics2.strokeWeight(3)
                graphics2.textSize(15)

                graphics2.stroke('#000000')
                graphics2.line(10+plot[i],100+space,10+plot[i+1],100+(space+1))
  
                if((i-4)%54 == 0){
                    graphics2.stroke('#9900FA')
                    graphics2.textSize(10)
                    graphics2.fill(0)
                    graphics2.text(d_date[j],210, 95+(space))
                    graphics2.line(10,100+space,280,100+(space))
                    graphics2.stroke('#000000')
                    j++
                }
                space++
            }

            graphics2.fill('#100C7C')
            graphics2.text(plot[plot.length-1]/0.04 + "kW", 20+(plot[plot.length-1]), 100+(space))
            graphics2.strokeWeight(1)
    } 
    else{
        graphics2.text("TOP Eletricity using room", 20, 70)
        graphics2.line(54,90,54,340)
        graphics2.line(54,340,305,340)
        graphics2.line(54,430,54,650)
        graphics2.line(54,650,305,650)
        graphics2.text("Top Eletricity using A/C", 20, 405)
        toproom = vr.gettoproom()
        topval_r = vr.gettoproomvalue()
        topac = vr.gettopac()
        topval_ac = vr.gettopacvalue()
        for(let i = 0;i<5;i++){
            graphics2.textSize(15)
            //TOP_ROOM
            graphics2.fill(co[i])
            graphics2.rect(29+(i*50),340,40,-(topval_r[i]/2))
            graphics2.fill(0)
            graphics2.text("Room", 2, 360)
            graphics2.text(toproom[i],29+(i*50), 360)
            sd = nf(topval_r[i], 3, 1)
            graphics2.text(sd, 29+(i*50), 330-(topval_r[i]/1.9))
      
            //TOP_AC
            graphics2.fill(co[i])
            graphics2.rect(29+(i*50),650,40,-(topval_ac[i]/1.5))
            graphics2.fill(0)
            graphics2.text("A/C", 10, 680)
            graphics2.text(topac[i], 29+(i*50), 680)
            sd = nf(topval_ac[i], 3, 1)
            graphics2.text(sd, 29+(i*50), 650-(topval_ac[i]/1.5))
        }
    }}*/


/*drawScene3 = () => {
    time = ac.gettime()
    
    graphics3.background('#333')
    graphics3.textFont(f1)
    graphics3.textSize(50)
    graphics3.text("EnergiS", 40, 40)
    graphics3.textFont(f2)
    graphics3.textSize(20)
    graphics3.text("The Energy Usage Visualization System.", 10, 70)
    graphics3.textSize(30)
    graphics3.text(time, 80, 100)
    graphics3.text(date, 35, 130)

}*/


over_room = (id) =>  {

    room_over[id] = create_room.getover_r(id)
    if(room_over[id]){
        getacvalue = vr.gettotal(id,ac.getlength())
        total = getacvalue[0]+getacvalue[1]+getacvalue[2]
        roomname = vr.getroom(id)
    }
    
}

handleSuperController = (cameralist) => {

  if(keyIsPressed && key === ' '){
    
    var delay = 150
    var active  = undefined
    var focused = undefined
    
    // find active or focused camera which controls the others
    for(var i in cameralist){
      var cam = cameralist[i]
      if(cam.mouse.isPressed){
        active = cam
        break
      }
      if(cam.mouse.insideViewport(mouseX, mouseY)){
        focused = cam
      }
    }
    // no active camera, try focused
    active = active || focused
    
    
    // apply state to all other cameras
    if(active) {
      var state = active.getState()
      console.log(state.rotation)
      for(var i in cameralist){
        var cam = cameralist[i]
        if(cam != active){
          cam.setState(state, delay)
        }
      }
    }
  }
}


calculateEuler = (input) =>
    {
        //console.log(input)
        let value = []
        let qw = parseFloat(input[0])
        let qx = parseFloat(input[1])
        let qy = parseFloat(input[2])
        let qz = parseFloat(input[3])

        let qw2 = qw*qw
        let qx2 = qx*qx
        let qy2 = qy*qy
        let qz2 = qz*qz
        let test= qx*qy + qz*qw

        // Y = value[0]
        // Z = value[1]
        // X = value[2]

        if (test > 0.499) {
            value[1] = 360/Math.PI*Math.atan2(qx,qw)
            value[2] = 90
            value[0] = 0
            return value
        }

        if (test < -0.499) {
            value[1] = -360/Math.PI*Math.atan2(qx,qw)
            value[2] = -90
            value[0] = 0
            return value
        }

        let h = Math.atan2(2*qy*qw-2*qx*qz,1-2*qy2-2*qz2)
        let a = Math.asin(2*qx*qy+2*qz*qw)
        let b = Math.atan2(2*qx*qw-2*qy*qz,1-2*qx2-2*qz2)
        value[1] = Math.round(h*180/Math.PI)
        value[2] = Math.round(a*180/Math.PI)
        value[0] = Math.round(b*180/Math.PI)

        return value
    }

initHUD = () =>{
  let hleft  = select('#hud-left')
  let hright = select('#hud-right')

  createElement('li', "DATE : "  ).parent(hleft)
  createElement('li', "TIME : "   ).parent(hleft)

  createElement('li', "Room : "   ).parent(hleft).attribute('gap', '')
  createElement('li', "AC : "     ).parent(hleft)
  createElement('li', "AC : "   ).parent(hleft)
  createElement('li', "AC : "   ).parent(hleft)
  createElement('li', "TOTAL : "   ).parent(hleft)

  createElement('li', 'stuff'       ).parent(hright).class('')
  createElement('li', 'stuff'       ).parent(hright).class('')

  createElement('li', 'stuff'       ).parent(hright).class('orange').attribute('gap', '')
  createElement('li', 'stuff'       ).parent(hright).class('orange')
  createElement('li', 'stuff'       ).parent(hright).class('orange')
  createElement('li', 'stuff'       ).parent(hright).class('orange')
  createElement('li', 'stuff'       ).parent(hright).class('orange')
}

displayHUD = (cam) =>{
  cam.beginHUD();
  {
    let state = cam.getState()
    
    // update list
    let ul = select('#hud-right')
    ul.elt.children[0].innerHTML = date
    ul.elt.children[1].innerHTML = time
    ul.elt.children[2].innerHTML = roomname
    ul.elt.children[3].innerHTML = getacvalue[0] 
    ul.elt.children[4].innerHTML = getacvalue[1] 
    ul.elt.children[5].innerHTML = getacvalue[2] 
    ul.elt.children[6].innerHTML = total 
    
  }

  cam.endHUD();
}