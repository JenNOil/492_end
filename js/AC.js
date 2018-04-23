class AC {

	constructor() {
    this.length    = 1

  	this.diff 	   = 	0
    this.past 		 = 	[]
    this.ratio 	   = 	0.00392
    this.current 	 = 	[]

    this.time

	  this.line 	   = 	new Array()
    this.list 	   = 	new Array()
    


  }

  airc(px, py, sx, sy, a, canvas, data, id){
      let rect = new Create() 
      let colour
      let check_ac = this.checkair(px, py, a)
      
      if(id === 20) {colour = color('#1907F0')}
      else { 
        let check_colour = this.update(data, id)
        colour = check_ac == true ? color('#FAEE03') : color((check_colour /this.ratio),0,0)
      }
      rect.c_rect(px, py, sx, sy, 'y', colour, canvas)

      return this.diff

  	}


  checkair( x, y, a ){
  		
  		let width1 = 0, height1 = 0
  		if(a === 'y'){
    		width1 = 10
  			height1 = 25
  		}
  		else if (a === 'x'){
    		width1 = 25
    		height1 = 10
  		}

  		if (mouseX >= x && mouseX <= x+width1 && 
      		mouseY >= y && mouseY <= y+height1){
      		return true    
      		}
  		else{ return false }
	}

  update(_data, _id){     
    if((_id != 19) && (_data[this.length] != null)){
          //current
            let temp1 = _data[this.length].split('/')
            this.current[_id] = temp1[1]

          //past
            let temp2 = _data[this.length-1].split('/')
            this.past[_id] = temp2[1]

            //if (this.length === 0){this.past[_id] = this.current[_id]}
            //date
            if(_id === 1 ){this.time = temp1[0]}

            this.diff = this.current[_id] - this.past[_id]

            //this.past[_id] = this.current[_id]
      }else{
            this.diff = 0
      }

    	  return this.diff
    }


    length_update(){
      this.length+=1
    }

    getlength(){
      return this.length
    }

    
   	gettime(){
    	return this.time
   	}

}