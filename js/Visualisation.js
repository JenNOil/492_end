class Visualisation{
	constructor(){

  	this.diff

    this.energy 		= new Array()
    this.room 			= new Array()

    for(let i = 0; i<22; i++){
            this.room[i] = 0
    }

    this.eletricroom 	= new Array()
    this.eletricvalue 	= new Array()

    this.topfive_r 		= new Array()
    this.topfive_ac 	= new Array()

  	this.check_r 		= new Array()
    this.check_ac 		= new Array()

    this.value_room = new Array()

    this.num_value
    this.colour_room
    

  	this.x				= 0

  	this.plotroom 			= new Array()
  	for(let i=0;i<22;i++){
  		this.plotroom[i] 	= new Array()
  	}

  	this.room_name 		= [	"401"/*1*/, "402"/*2*/, "403"/*3*/, "404"/*4*/, "405"/*5*/,
                         			"406"/*6*/, "407"/*7*/, "409"/*8*/, "410"/*9*/, "411(LD)"/*10*/,
                         			"411"/*11*/, "412(4th)"/*12*/, "412(1)"/*13*/, "412(2)"/*14*/, "412(N)"/*15*/,
                         			"413"/*16*/, "413(GRA)"/*17*/, "414"/*18*/, "415(LIL)"/*19*/, "415(3rd)"/*20*/,
                         			"SIPA/*21*/", "422"/*22*/]
    this.roomtop 			= new Array()

	}
  
  setvalue(_diff){
    let data = []
      for (let i = 0; i < _diff.length; i++) {
          if(i===19){continue}
            data[i] = []
          for (let j = 0;_diff[i][j] != null; j++) {
              let temp = _diff[i][j].split('/')
              data[i][j] = parseFloat(temp[1])
          }
      }
    this.diff = data
  }
  setcolour(data){
    let data_col = []
    
    for(let i = 0; i < data.length; i++){
      if(i == 19){
          continue
      }
      data_col[i] = []
        for(let j = 1; data[i][j] != null; j++ ){
          let tmp1 = data[i][j-1].split('/')
          let tmp2 = data[i][j].split('/')
          data_col[i][j-1] = tmp2[1] - tmp1[1]
          data_col[i][j] = 0
        }
    }

    this.colour_room = data_col
  }
  getcolour(id,index){
    if(index < 55){
          if(id == 0){
            return this.colour_room[30][index]+this.colour_room[29][index]+this.colour_room[27][index]
          }
          else if(id == 1){
            return this.colour_room[0][index]+this.colour_room[2][index]+this.colour_room[4][index]

          }
          else if(id == 2){
            return this.colour_room[3][index]           
          }
          else if(id == 3){
            return this.colour_room[2][index]           
          }
          else if(id == 4){
            return this.colour_room[5][index]
          }
          else if(id == 5){
            return this.colour_room[6][index]+ this.colour_room[8][index]
            
          }
          else if(id == 6){
            return this.colour_room[10][index]
          }
          else if(id == 7){
            return this.colour_room[7][index]
          }
          else if(id == 8){
            return this.colour_room[9][index]
          }
          else if(id == 9){
            return this.colour_room[12][index]+this.colour_room[14][index]
          }
          else if(id == 10){
            return this.colour_room[11][index]+this.colour_room[16][index]
          }
          else if(id == 11){
            return this.colour_room[17][index]//+this.colour_room[19][index]
          }
          else if(id == 12){
            return this.colour_room[15][index]
          }
          else if(id == 13){
            return this.colour_room[13][index]
          }
          else if(id == 14){
           return this.colour_room[33][index]
          }
          else if(id == 15){
            return this.colour_room[20][index]+this.colour_room[22][index]
          }
          else if(id == 16){
            return this.colour_room[18][index]+ this.colour_room[23][index]
          }
          else if(id == 17){
            return this.colour_room[25][index]
          }
          else if(id == 18){
            return this.colour_room[24][index]+this.colour_room[28][index]
          }
          else if(id == 19){
            return this.colour_room[21][index]+this.colour_room[26][index]
          }
          else if(id == 20){
            return this.colour_room[31][index]
          }
          else if(id == 21){
            return this.colour_room[32][index]
          }

      }else{
          return 0
      }
  }

	update_visual(_diff){
    	this.diff = _diff
    	this.eletricvalue = _diff
    	this.matching()
    	this.increasing()
    	this.comparing()
    	this.checking()
  	}


  	checking(){
    	for(let k=0; k<5; k++){
      		this.roomtop[k] = this.room_name[this.check_r[k]];  
    	}
  	}

  	comparing(){
      	for(let i = 0;i<5;i++){
        	this.topfive_r[i] 	= this.room [i]
        	this.check_r[i] 	= i
        	this.topfive_ac[i] 	= this.energy[i+1]
        	this.check_ac[i] 	= i+1
      	}

      	for(let j = 5; j < ac.length; j++){
        	if(j < this.room.length){
        		if(this.room[j] >= this.topfive_r[0]){
          			this.topfive_r[4] 	= this.topfive_r[3]
         			this.topfive_r[3] 	= this.topfive_r[2]
         			this.topfive_r[2] 	= this.topfive_r[1]
          			this.topfive_r[1] 	= this.topfive_r[0]
          			this.topfive_r[0] 	= this.room[j]
          			this.check_r[4] 	= this.check_r[3]
          			this.check_r[3] 	= this.check_r[2]
          			this.check_r[2] 	= this.check_r[1]
          			this.check_r[1] 	= this.check_r[0]
          			this.check_r[0] 	= j
        		}
        		else if (this.room[j] 	>= this.topfive_r[1]){
          			this.topfive_r[4] 	= this.topfive_r[3]
          			this.topfive_r[3] 	= this.topfive_r[2]
          			this.topfive_r[2] 	= this.topfive_r[1]
          			this.topfive_r[1] 	= this.room[j]
          			this.check_r[4] 	= this.check_r[3]
          			this.check_r[3] 	= this.check_r[2]
          			this.check_r[2] 	= this.check_r[1]
          			this.check_r[1] 	= j
        		}
        		else if (this.room[j] 	>= this.topfive_r[2]){
          			this.topfive_r[4] 	= this.topfive_r[3]
          			this.topfive_r[3] 	= this.topfive_r[2]
          			this.topfive_r[2] 	= this.room[j]
          			this.check_r[4] 	= this.check_r[3]
          			this.check_r[3] 	= this.check_r[2]
          			this.check_r[2] 	= j
        		}
        		else if (this.room[j] 	>= this.topfive_r[3]){
          			this.topfive_r[4] 	= this.topfive_r[3]
          			this.topfive_r[3] 	= this.room[j]
          			this.check_r[4] 	= this.check_r[3]
          			this.check_r[3] 	= j
        		}
        		else if (this.room[j] 	>= this.topfive_r[4]){
          			this.topfive_r[4] 	= this.room[j]
          			this.check_r[4] 	= j
        		}
    		}
       
       		if(this.energy[j] >= this.topfive_ac[0]){
          		this.topfive_ac[4] 	= this.topfive_ac[3]
          		this.topfive_ac[3] 	= this.topfive_ac[2]
          		this.topfive_ac[2] 	= this.topfive_ac[1]
          		this.topfive_ac[1] 	= this.topfive_ac[0]
          		this.topfive_ac[0] 	= this.energy[j]
          		this.check_ac[4] 	= this.check_ac[3]
          		this.check_ac[3] 	= this.check_ac[2]
          		this.check_ac[2] 	= this.check_ac[1]
          		this.check_ac[1] 	= this.check_ac[0]
          		this.check_ac[0] 	= j
        	}
        	else if (this.energy[j] >= this.topfive_ac[1]){
          		this.topfive_ac[4] 	= this.topfive_ac[3]
          		this.topfive_ac[3] 	= this.topfive_ac[2]
          		this.topfive_ac[2] 	= this.topfive_ac[1]
          		this.topfive_ac[1] 	= this.energy[j]
          		this.check_ac[4] 	= this.check_ac[3]
          		this.check_ac[3] 	= this.check_ac[2]
          		this.check_ac[2] 	= this.check_ac[1]
          		this.check_ac[1] 	= j
        	}
        	else if (this.energy[j] >= this.topfive_ac[2]){
          		this.topfive_ac[4] 	= this.topfive_ac[3]
          		this.topfive_ac[3] 	= this.topfive_ac[2]
          		this.topfive_ac[2] 	= this.energy[j]
          		this.check_ac[4] 	= this.check_ac[3]
          		this.check_ac[3] 	= this.check_ac[2]
         		this.check_ac[2] 	= j
        	}
        	else if (this.energy[j] >= this.topfive_ac[3]){
          		this.topfive_ac[4] 	= this.topfive_ac[3]
          		this.topfive_ac[3] 	= this.energy[j]
          		this.check_ac[4] 	= this.check_ac[3]
          		this.check_ac[3] 	= j
        	}
        	else if (this.energy[j] >= this.topfive_ac[4]){
          		this.topfive_ac[4] 	= this.energy[j]
          		this.check_ac[4] 	= j
        	}
       
      	}
  	}

  	increasing(){
    	for(let i=1; i< this.diff.length; i++){
      		this.energy[i] += this.diff[i]
    	}
  	}

  	matching(){
    
    	this.room[0]  = this.room[0]+this.diff[31]+this.diff[30]+this.diff[28] 	 //401  
    	this.room[1]  = this.room[1]+this.diff[1]+this.diff[3]+this.diff[5]      //402  
    	this.room[2]  = this.room[2]+this.diff[4]                      			     //403
    	this.room[3]  = this.room[3]+this.diff[2]                      			     //404
    	this.room[4]  = this.room[4]+this.diff[6]                      			     //405
    	this.room[5]  = this.room[5]+this.diff[7]+this.diff[9]              		 //406
    	this.room[6]  = this.room[6]+this.diff[11]                   			       //407
    	this.room[7]  = this.room[7]+this.diff[8]                      			     //409
    	this.room[8]  = this.room[8]+this.diff[10]                     			     //410
    	this.room[9]  = this.room[9]+this.diff[13]+this.diff[15]            		 //411LD
    	this.room[10] = this.room[10]+this.diff[12]+this.diff[17]           	   //411
    	this.room[11] = this.room[11]+this.diff[18]+this.diff[20]           	   //412(4th)
    	this.room[12] = this.room[12]+this.diff[16]                    			     //412(1)
    	this.room[13] = this.room[13]+this.diff[14]                    			     //412(2)
    	this.room[14] = this.room[14]+this.diff[34]                    			     //412(N)
    	this.room[15] = this.room[15]+this.diff[21]+this.diff[23]           	   //413
    	this.room[16] = this.room[16]+this.diff[19]+this.diff[24]           	   //413(GRA)
    	this.room[17] = this.room[17]+this.diff[26]                    			     //414
    	this.room[18] = this.room[18]+this.diff[25]+this.diff[29]           	   //415(LIL)
    	this.room[19] = this.room[19]+this.diff[22]+this.diff[27]           	   //415(3rd)
    	this.room[20] = this.room[20]+this.diff[32]                   			     //SIPA
    	this.room[21] = this.room[21]+this.diff[33]                   			     //422 
    
    
    	this.eletricroom[0]  = this.eletricvalue[31]+this.eletricvalue[30]+this.eletricvalue[28]   	//401  
    	this.eletricroom[1]  = this.eletricvalue[1]+this.eletricvalue[3]+this.eletricvalue[5]      	//402  
    	this.eletricroom[2]  = this.eletricvalue[4]                                      			//403
    	this.eletricroom[3]  = this.eletricvalue[2]                                      			//404
    	this.eletricroom[4]  = this.eletricvalue[6]                                      			//405
    	this.eletricroom[5]  = this.eletricvalue[7]+this.eletricvalue[9]                      		//406
    	this.eletricroom[6]  = this.eletricvalue[11]                                    				//407
    	this.eletricroom[7]  = this.eletricvalue[8]                                      			//409
    	this.eletricroom[8]  = this.eletricvalue[10]                                     			//410
    	this.eletricroom[9]  = this.eletricvalue[13]+this.eletricvalue[15]                    		//411LD
    	this.eletricroom[10] = this.eletricvalue[12]+this.eletricvalue[17]                  		//411
    	this.eletricroom[11] = this.eletricvalue[18]+this.eletricvalue[20]                  		//412(4th)
    	this.eletricroom[12] = this.eletricvalue[16]                                  				//412(1)
    	this.eletricroom[13] = this.eletricvalue[14]                                   				//412(2)
    	this.eletricroom[14] = this.eletricvalue[34]                                   				//412(N)
    	this.eletricroom[15] = this.eletricvalue[21]+this.eletricvalue[23]                  		//413
    	this.eletricroom[16] = this.eletricvalue[19]+this.eletricvalue[24]                  		//413(GRA)
    	this.eletricroom[17] = this.eletricvalue[26]                                   				//414
    	this.eletricroom[18] = this.eletricvalue[25]+this.eletricvalue[29]                  		//415(LIL)
    	this.eletricroom[19] = this.eletricvalue[22]+this.eletricvalue[27]                  		//415(3rd)
    	this.eletricroom[20] = this.eletricvalue[32]                                  				//SIPA
    	this.eletricroom[21] = this.eletricvalue[33]                                  				//422    
    
  	}

    gettotal(id , index){
      let tmp = []
      if(index < 55){
          if(id == 0){
            tmp[0] = this.diff[30][index]
            tmp[1] = this.diff[29][index]
            tmp[2] = this.diff[27][index]
          }
          else if(id == 1){
            tmp[0] = this.diff[0][index]
            tmp[1] = this.diff[2][index]
            tmp[2] = this.diff[4][index]

          }
          else if(id == 2){
            tmp[0] = this.diff[3][index]
            tmp[1] = 0
            tmp[2] = 0            
          }
          else if(id == 3){
            tmp[0] = this.diff[2][index]
            tmp[1] = 0
            tmp[2] = 0            
          }
          else if(id == 4){
            tmp[0] = this.diff[5][index]
            tmp[1] = 0
            tmp[2] = 0
          }
          else if(id == 5){
            tmp[0] = this.diff[6][index]
            tmp[1] = this.diff[8][index]
            tmp[2] = 0
            
          }
          else if(id == 6){
            tmp[0] = this.diff[10][index]
            tmp[1] = 0
            tmp[2] = 0
          }
          else if(id == 7){
            tmp[0] = this.diff[7][index]
            tmp[1] = 0
            tmp[2] = 0
          }
          else if(id == 8){
            tmp[0] = this.diff[9][index]
            tmp[1] = 0
            tmp[2] = 0
          }
          else if(id == 9){
            tmp[0] = this.diff[12][index]
            tmp[1] = this.diff[14][index]
            tmp[2] = 0
          }
          else if(id == 10){
            tmp[0] = this.diff[11][index]
            tmp[1] = this.diff[16][index]
            tmp[2] = 0
          }
          else if(id == 11){
            tmp[0] = this.diff[17][index]
            tmp[1] = this.diff[19][index]
            tmp[2] = 0
          }
          else if(id == 12){
            tmp[0] = this.diff[15][index]
            tmp[1] = 0
            tmp[2] = 0
          }
          else if(id == 13){
            tmp[0] = this.diff[13][index]
            tmp[1] = 0
            tmp[2] = 0
          }
          else if(id == 14){
            tmp[0] = this.diff[33][index]
            tmp[1] = 0
            tmp[2] = 0
          }
          else if(id == 15){
            tmp[0] = this.diff[20][index]
            tmp[1] = this.diff[22][index]
            tmp[2] = 0
          }
          else if(id == 16){
            tmp[0] = this.diff[18][index]
            tmp[1] = this.diff[23][index]
            tmp[2] = 0
          }
          else if(id == 17){
            tmp[0] = this.diff[25][index]
            tmp[1] = 0
            tmp[2] = 0
          }
          else if(id == 18){
            tmp[0] = this.diff[24][index]
            tmp[1] = this.diff[28][index]
            tmp[2] = 0
          }
          else if(id == 19){
            tmp[0] = this.diff[21][index]
            tmp[1] = this.diff[26][index]
            tmp[2] = 0
          }
          else if(id == 20){
            tmp[0] = this.diff[31][index]
            tmp[1] = 0
            tmp[2] = 0
          }
          else if(id == 21){
            tmp[0] = this.diff[32][index]
            tmp[1] = 0
            tmp[2] = 0
          }

      }else{
          tmp[0] = 0
          tmp[1] = 0
          tmp[2] = 0
        }
      return  tmp
    }

  	gettoproomvalue(){ 
    	return this.topfive_r;
  	}

  	gettoproom(){
    	return this.roomtop;
  	}

  	gettopacvalue(){ 
    	return this.topfive_ac;
  	}

  	gettopac(){
    	return this.check_ac;
  	}

  	getplot(id){
  		return this.plotroom[id];
  	}

  	getplot(){
  		return this.plotroom;
  	}

  	getroom(id){
  		return this.room_name[id];
  	}

}