class campus{
	constructor() { 
		this.create_b 			= new Create()
    }

    drawcampus(location, color, canvas){
    	if(location[0] === '101' || location[0] === '100'){ //Humanities
   			if(location[1] === '01' || location[1] === '00'){
   				create_b.building(-7000,350,-9000,1050,200,200, color, canvas)
			    create_b.building(-7000,350,-9400,750,200,200, color, canvas) 
    		}
    		if(location[1] === '02' || location[1] === '00'){
    			//swit L
			    create_b.building(-8000,350,-9000,450,200,650, color, canvas) 
			    create_b.building(-8250,350,-9000,250,200,350, color, canvas)
    		}
    		if(location[1] === '03' || location[1] === '00'){
    			//lshape
			    create_b.building(-7700,350,-9950,650,200,250, color, canvas)
			    create_b.building(-8000,350,-9950,300,200,750, color, canvas)
			    create_b.building(-9600,350,-9500,750,200,250, color, canvas)
			    create_b.building(-8850,350,-9000,250,200,750, color, canvas)
			    create_b.building(-10900,350,-9700,650,200,250, color, canvas)
    		}
    		if(location[1] === '04' || location[1] === '00'){
    			//big t   
			    create_b.building(-12000,350,-11000,400,200,850, color, canvas)
			    create_b.building(-11600,350,-11200,100,200,350, color, canvas)
    		}
    		if(location[1] === '05' || location[1] === '00'){
    			//left t     
			    create_b.building(-11000,350,-11000,400,200,250, color, canvas)
			    create_b.building(-10500,350,-11000,1050,200,250, color, canvas)
    		}
    		if(location[1] === '06' || location[1] === '00'){
    			//up 
			    create_b.building(-12000,350,-12000,650,200,250, color, canvas)                  
			    create_b.building(-12000,350,-12500,650,200,250, color, canvas)
    		}
    		if(location[1] === '07' || location[1] === '00'){
    			//line down    
			    create_b.building(-10500,350,-12000,250,200,650, color, canvas) 
			    create_b.building(-11000,350,-12000,250,200,650, color, canvas) 
    		}
    		if(location[1] === '08' || location[1] === '00'){
    			//up up   
			    create_b.building(-10000,350,-13000,450,200,250, color, canvas)    
			    create_b.building(-10000,350,-13500,450,200,250, color, canvas)
			    create_b.building(-8000,350,-11500,600,200,500, color, canvas)
			    create_b.building(-8800,350,-11000,1050,200,250, color, canvas)
    		}
    		if(location[1] === '09' || location[1] === '00'){
    			//left big T
			    create_b.building(-13500,350,-12500,700,200,700, color, canvas)
			    create_b.building(-13300,350,-13200,350,200,150, color, canvas) 
    		}
    	}

    	if(location[0] === '102' || location[0] === '100'){//Education
    		if(location[1] === '01' || location[1] === '00'){
    			//[28.EDUCATION FACULTY]
			    create_b.building(3250,350,2800,650,250,150, color, canvas)
			    create_b.building(3250,350,3000,800,250,200, color, canvas)
    		}	
    	}

    	if(location[0] === '103' || location[0] === '100'){//Fine Art
    		if(location[1] === '01' || location[1] === '00'){
    			//[30.FINE ARTS FACULTY]
				create_b.building(6000,350,3500,550,250,350, color, canvas)  
				create_b.building(5900,350,3200,100,250,50, color, canvas)
				create_b.building(5900,350,3500,100,250,50, color, canvas) 
    		}
    	}

    	if(location[0] === '104' || location[0] === '100'){//Social-Sci
    		if(location[1] === '01' || location[1] === '00'){
    			//h shape
			    create_b.building(-8000,350,-7350,200,200,950, color, canvas) 
			    create_b.building(-6500,350,-7350,200,200,950, color, canvas) 
			    create_b.building(-7200,350,-7800,200,200,550, color, canvas) 
			    create_b.building(-7800,350,-7850,1300,200,200, color, canvas)
    		}
    		if(location[1] === '02' || location[1] === '00'){
    			// down h 
			    create_b.building(-7800,350,-6800,1200,200,250, color, canvas)
			    create_b.building(-7300,350,-6650,200,200,150, color, canvas)
			    create_b.building(-8000,350,-6200,350,200,350, color, canvas)
    		}
    	}

    	if(location[0] === '105' || location[0] === '100'){//Science
    		if(location[1] === '01' || location[1] === '00'){
    			//h shape
			    create_b.building(-550,350,-8200,700,200,100, color, canvas) 
			    create_b.building(-300,350,-7900,120,200,450, color, canvas) 
			    create_b.building(-550,350,-7800,850,200,100, color, canvas) 
			    create_b.building(650,350,-7800,350,200,950, color, canvas) 
			    create_b.building(550,350,-8200,850,200,250, color, canvas)
			    create_b.building(-1800,350,-7850,350,200,300, color, canvas)  
			    
			    //quad
			    create_b.building(-2700,350,-7850,750,200,200, color, canvas) 
    		}
    		if(location[1] === '02' || location[1] === '00'){
    			//h shape 19
			    create_b.building(-3000,350,-8850,900,200,100, color, canvas) 
			    create_b.building(-2400,350,-8550,150,200,300, color, canvas) 
			    create_b.building(-2700,350,-8450,600,200,100, color, canvas)
			    create_b.building(-2700,350,-8950,150,200,300, color, canvas)
			      
			    //quad
			    create_b.building(-2300,350,-9150,200,200,200, color, canvas)  
			    create_b.building(-1500,350,-9150,750,200,200, color, canvas) 
			    create_b.building(-780,350,-9150,250,200,750, color, canvas)
			    create_b.building(-2200,350,-9850,750,200,200, color, canvas) 
    		}
    	}

    	if(location[0] === '106' || location[0] === '100'){//Engineering
    		if(location[1] === '01' || location[1] === '00'){
    			//1.1
    			create_b.building(-1900,350,200,350,200,200, color, canvas) 
    		}
    		if(location[1] === '02' || location[1] === '00'){
    			//1.2
			    create_b.building(-1850,350,650,100,200,100, color, canvas) 
			    create_b.building(-1700,350,650,350,200,100, color, canvas) 
			    create_b.building(-1700,350,850,150,200,200, color, canvas)
    		}
    		if(location[1] === '03' || location[1] === '00'){
    			//1.3
  				create_b.building(-1500,350,1350,150,200,300, color, canvas) 
    		}
    		if(location[1] === '04' || location[1] === '00'){
    			//1.4
  				create_b.building(-1850,350,1350,250,200,100, color, canvas) 
    		}
    		if(location[1] === '05' || location[1] === '00'){
    			 //1.5
  				create_b.building(-1500,350,1550,150,200,150, color, canvas) 
    		}
    		if(location[1] === '06' || location[1] === '00'){
    			 //1.6
  				create_b.building(-1500,350,1700,150,200,70, color, canvas)
    		}
    		if(location[1] === '07' || location[1] === '00'){
    			//1.7
  				create_b.building(-1650,350,1710,100,200,110, color, canvas)
    		}
    		if(location[1] === '08' || location[1] === '00'){
    			//2.1
  				create_b.building(-1100,350,200,350,200,100, color, canvas)
    		}
    		if(location[1] === '09' || location[1] === '00'){
    			//2.2
				create_b.building(-1200,350,500,50,200,300, color, canvas)
				create_b.building(-1100,350,500,700,200,300, color, canvas) 
				create_b.building(-1250,350,700,1000,200,200, color, canvas)
    		}
    		if(location[1] === '10' || location[1] === '00'){
    			//2.3
  				create_b.building(-1150,350,1350,600,200,300, color, canvas)
    		}
    		if(location[1] === '11' || location[1] === '00'){
    			 //2.4
  				create_b.building(-1250,350,1550,500,200,200, color, canvas) 
    		}
    		if(location[1] === '12' || location[1] === '00'){
    			//2.5
  				create_b.building(-1250,350,1800,500,200,100, color, canvas)
    		}
    		if(location[1] === '13' || location[1] === '00'){
    			//2.6
  				create_b.building(-1250,350,2050,500,200,100, color, canvas)
    		}
    		if(location[1] === '14' || location[1] === '00'){
    			//2.8
  				create_b.building(-1450,350,2350,500,200,200, color, canvas) 
    		}
    		if(location[1] === '15' || location[1] === '00'){
    			 //3.1
 				create_b.building(-100,350,300,350,200,400, color, canvas) 
    		}
    		if(location[1] === '16' || location[1] === '00'){
    			//3.2
  				create_b.building(-100,350,600,250,200,200, color, canvas) 
    		}
    		if(location[1] === '17' || location[1] === '00'){
    			//3.3
  				create_b.building(-50,350,900,250,200,200, color, canvas)
    		}
    		if(location[1] === '18' || location[1] === '00'){
    			//3.4
  				create_b.building(-100,350,1200,250,200,200, color, canvas) 
    		}
    		if(location[1] === '19' || location[1] === '00'){
    			//3.5
  				create_b.building(-100,350,1500,350,200,200, color, canvas) 
    		}
    		if(location[1] === '20' || location[1] === '00'){
    			//3.6
  				create_b.building(-100,350,1800,350,200,200, color, canvas) 
    		}
    		if(location[1] === '21' || location[1] === '00'){
    			//3.7
 				create_b.building(-100,350,2100,350,200,200, color, canvas) 
    		}
    		if(location[1] === '22' || location[1] === '00'){
    			//4.1
				create_b.building(500,350,350,350,200,100, color, canvas)   
				create_b.building(700,350,450,350,200,100, color, canvas) 
    		}
    		if(location[1] === '23' || location[1] === '00'){
    			//30 years
    			if(location[2] === '01' || location[2] === '00'){
    				//f1
				    create_b.building(500,350,1300,250,50,600, color, canvas)
				    create_b.building(750,350,1300,350,50,500, color, canvas) 
    			}
    			if(location[2] === '02' || location[2] === '00'){
    				//f2
				    create_b.building(500,350,1300,250,100,600, color, canvas) 
				    create_b.building(750,350,1300,350,100,500, color, canvas)
    			}
    			if(location[2] === '03' || location[2] === '00'){
    				//f3
				    create_b.building(500,350,1300,250,150,600, color, canvas) 
				    create_b.building(750,350,1300,350,150,500, color, canvas) 
    			}
    			if(location[2] === '04' || location[2] === '00'){
    				//f4
				    create_b.building(500,350,1300,250,200,600, color, canvas)
				    create_b.building(750,350,1300,350,200,500, color, canvas)
    			}
    			if(location[2] === '05' || location[2] === '00'){
    				//f5
				    create_b.building(500,350,1300,250,250,600, color, canvas) 
				    create_b.building(750,350,1300,350,250,500, color, canvas) 
    			}
    			if(location[2] === '06' || location[2] === '00'){
    				//f6
				    create_b.building(500,350,1300,250,300,600, color, canvas) 
				    create_b.building(750,350,1300,350,300,500, color, canvas) 
    			}
    			if(location[2] === '07' || location[2] === '00'){
    				//f7
				    create_b.building(500,350,1300,250,350,600, color, canvas) 
				    create_b.building(750,350,1300,350,350,500, color, canvas) 
    			}
    			if(location[2] === '08' || location[2] === '00'){
    				//f8
				    create_b.building(500,350,1300,250,400,600, color, canvas)
				    create_b.building(750,350,1300,350,400,500, color, canvas)
    			}
    		}
    		if(location[1] === '24' || location[1] === '00'){
    			//4.3
    			create_b.building(500,350,1800,350,350,350, color, canvas)
    		}
    	}

    	if(location[0] === '107' || location[0] === '100'){//Medicine
    	}

    	if(location[0] === '108' || location[0] === '100'){//Agriculture
    		if(location[1] === '01' || location[1] === '00'){
    			//33.1
			    create_b.building(7150,350,1950,650,250,200, color, canvas)
			    create_b.building(8000,350,2150,150,250,400, color, canvas)
			    create_b.building(7300,350,2050,700,250,100, color, canvas) 
			    create_b.building(7150,350,2150,450,250,100, color, canvas) 
			    create_b.building(7300,350,2450,850,250,300, color, canvas) 
			    create_b.building(8150,350,2450,500,250,250, color, canvas)
			    create_b.building(7300,350,2700,500,250,250, color, canvas)
    		}
    		if(location[1] === '02' || location[1] === '00'){
    			//33.2
			    create_b.building(8600,350,1950,450,250,150, color, canvas)
			    create_b.building(8900,350,2350,150,250,400, color, canvas) 
			    create_b.building(9050,350,2200,150,250,100, color, canvas) 
    		}
    		if(location[1] === '03' || location[1] === '00'){
    			//33.3
			    create_b.building(9700,350,1950,650,250,450, color, canvas)  
			    create_b.building(9300,350,2450,250,250,650, color, canvas)   
			    create_b.building(9600,350,2450,650,250,250, color, canvas)  
			    create_b.building(8900,350,2650,950,250,200, color, canvas)
			               
			    create_b.building(8900,350,3500,200,250,850, color, canvas)
			    create_b.building(8700,350,3450,200,250,650, color, canvas)
			    create_b.building(8500,350,3300,200,250,450, color, canvas)
			    create_b.building(8900,350,3700,950,250,200, color, canvas)
			         
			    create_b.building(9650,350,2900,200,250,250, color, canvas)
			          
			    create_b.building(9650,350,3500,200,250,250, color, canvas)
    		}
    		if(location[1] === '04' || location[1] === '00'){
    			//33.4
			    create_b.building(7500,350,3500,950,250,200, color, canvas)
			    create_b.building(7500,350,3800,150,250,300, color, canvas)
			    create_b.building(8300,350,3800,150,250,300, color, canvas)
    		}
    	}

    	if(location[0] === '109' || location[0] === '100'){//Dentistry
    	}
    	if(location[0] === '110' || location[0] === '100'){//Pharmacy
    	}
    	if(location[0] === '111' || location[0] === '100'){//AMS
    	}

    	if(location[0] === '112' || location[0] === '100'){//Nursing
    	}

    	if(location[0] === '113' || location[0] === '100'){//Agro-Industry
    	}

    	if(location[0] === '114' || location[0] === '100'){//Veterinary
    	}

    	if(location[0] === '115' || location[0] === '100'){//BA
    		if(location[1] === '01' || location[1] === '00'){
    			//[29.BUSINUESS FACULTY]   
			    create_b.building(5280,350,1700,200,250,50, color, canvas)
			    create_b.building(5150,350,2350,400,250,650, color, canvas)
			    create_b.building(5280,350,2400,200,250,50, color, canvas)
    		}
    	}

    	if(location[0] === '116' || location[0] === '100'){//Economics
    		if(location[1] === '01' || location[1] === '00'){
    			//quad
			    create_b.building(-6200,350,-6100,350,200,350, color, canvas) 
			    create_b.building(-4800,350,-6100,350,200,350, color, canvas) 
			    
			    // t between
			    create_b.building(-5600,350,-6250,450,200,200, color, canvas)
			    create_b.building(-5550,350,-6450,250,200,100, color, canvas)
			    create_b.building(-5350,350,-5950,250,200,100, color, canvas) 
			    create_b.building(-6200,350,-5750,1700,200,200, color, canvas)
			    
			    //quad
			    create_b.building(-6400,350,-4700,650,200,650, color, canvas)   
			    create_b.building(-5900,350,-4500,750,200,200, color, canvas)  
			    create_b.building(-6650,350,-4700,250,200,1050, color, canvas)
    		}
    	}

    	if(location[0] === '117' || location[0] === '100'){//Architecture
    		if(location[1] === '01' || location[1] === '00'){
    			//[14.ARCHITECTURE] 
			    create_b.building(-5900,350,-950,1250,200,250, color, canvas) 
			    create_b.building(-6700,350,-200,1350,200,400, color, canvas)
			    create_b.building(-6100,350,600,1350,200,800, color, canvas)
			    create_b.building(-6700,350,1100,1250,200,250, color, canvas) 
			    create_b.building(-5450,350,1450,250,200,600, color, canvas)
			    create_b.building(-5200,350,1450,1100,200,250, color, canvas)
			    
			    //quad
			    create_b.building(-3800,350,1450,200,200,200, color, canvas) 
			    create_b.building(-3400,350,1450,200,200,200, color, canvas) 
			    create_b.building(-3000,350,1450,200,200,200, color, canvas) 
			    create_b.building(-3800,350,1050,200,200,200, color, canvas)  
			    create_b.building(-3000,350,1050,200,200,200, color, canvas)  
			    create_b.building(-3000,350,650,200,200,200, color, canvas)  
			    create_b.building(-3400,350,650,200,200,200, color, canvas) 
			    create_b.building(-2700,350,50,200,200,200, color, canvas)
    		}
    	}

    	if(location[0] === '118' || location[0] === '100'){//Mass Com	
    	}

    	if(location[0] === '119' || location[0] === '100'){//Pol-Sci
    	}

    	if(location[0] === '120' || location[0] === '100'){//Law
    		if(location[1] === '01' || location[1] === '00'){
				create_b.building(-9000,350,-7500,650,200,650, color, canvas)  
			    create_b.building(-8700,350,-7350,200,200,150, color, canvas)
    		}
    	}

    	if(location[0] === '121' || location[0] === '100'){//CAMT
    	}

    	if(location[0] === '150' || location[0] === '100'){//Men dorm
    		if(location[1] === '01' || location[1] === '00'){
    			//[A1.MEN DORMS] 
			    create_b.building(-700,350,-1350,450,200,100, color, canvas)
			    create_b.building(-500,350,-1150,120,200,200, color, canvas)
			    create_b.building(-700,350,-1050,450,200,100, color, canvas)
    		}
    		if(location[1] === '02' || location[1] === '00'){

    		}
    		if(location[1] === '03' || location[1] === '00'){
    			//[A3.MEN DORMS]
			    create_b.building(800,350,-1650,450,200,100, color, canvas)
			    create_b.building(1000,350,-1350,120,200,300, color, canvas)
			    create_b.building(800,350,-1250,450,200,100, color, canvas)
    		}
    		if(location[1] === '04' || location[1] === '00'){
    			//[A4.MEN DORMS]     
			    create_b.building(800,350,-1000,450,200,100, color, canvas)
			    create_b.building(1000,350,-700,120,200,300, color, canvas) 
			    create_b.building(800,350,-600,450,200,100, color, canvas)
    		}
    		if(location[1] === '05' || location[1] === '00'){
				//[A5.MEN DORMS]
			    create_b.building(50,350,-1350,450,200,100, color, canvas)
			    create_b.building(250,350,-1150,120,200,200, color, canvas)
			    create_b.building(50,350,-1050,450,200,100, color, canvas)
    		}
    		if(location[1] === '06' || location[1] === '00'){
				//[A6. MEN DORMS]
			    create_b.building(0,350,-750,450,200,120, color, canvas)
			    create_b.building(200,350,-550,100,200,200, color, canvas) 
			    create_b.building(0,350,-430,450,200,120, color, canvas)
    		}
    		if(location[1] === '07' || location[1] === '00'){
    			 //[A7.MALE DORMS]                       
			    create_b.building(-5900,350,-3000,1650,200,350, color, canvas)           
			    create_b.building(-5500,350,-2250,350,200,750, color, canvas) 
    		}
    	}

    	if(location[0] === '160' || location[0] === '100'){//Women dorm
    		if(location[1] === '01' || location[1] === '00'){
			    //[B1. WOMEN DORMS]    
			    create_b.building(3450,350,-2250,500,200,100, color, canvas) 
			    create_b.building(3650,350,-1950,120,200,300, color, canvas)
			    create_b.building(3450,350,-1850,500,200,100, color, canvas)
    		}
    		if(location[1] === '02' || location[1] === '00'){
    			 //[B2. WOMEN DORMS]  
			    create_b.building(1150,350,-3500,250,200,850, color, canvas)
			    create_b.building(1400,350,-4000,500,200,200, color, canvas)
			    create_b.building(1900,350,-3500,250,200,850, color, canvas)
			    create_b.building(2150,350,-4000,500,200,200, color, canvas) 
			    create_b.building(2650,350,-3500,250,200,850, color, canvas)
    		}
    		if(location[1] === '03' || location[1] === '00'){
    			//[B3. WOMEN DORMS]
    			create_b.building(150,350,-4050,400,200,400, color, canvas)  
    		}
    		if(location[1] === '04' || location[1] === '00'){
    			//[B4. WOMEN DORMS]
			    create_b.building(1550,350,-1850,600,200,100, color, canvas) 
			    create_b.building(1650,350,-1550,150,200,300, color, canvas) 
			    create_b.building(1550,350,-1450,600,200,100, color, canvas) 
    		}
    		if(location[1] === '05' || location[1] === '00'){
    			//[B5. WOMEN DORMS]
			    create_b.building(2700,350,-1650,600,200,100, color, canvas)
			    create_b.building(2900,350,-1350,150,200,300, color, canvas)
			    create_b.building(2700,350,-1250,600,200,100, color, canvas)
    		}
    		if(location[1] === '06' || location[1] === '00'){
    			//[B6. WOMEN DORMS]
			    create_b.building(1550,350,-1200,600,200,100, color, canvas) 
			    create_b.building(1650,350,-900,120,200,300, color, canvas) 
			    create_b.building(1550,350,-800,600,200,100, color, canvas)  
    		}
    		if(location[1] === '07' || location[1] === '00'){
    			//[B7. WOMEN DORMS]
			    create_b.building(2700,350,-2250,500,200,100, color, canvas) 
			    create_b.building(2900,350,-1950,120,200,300, color, canvas) 
			    create_b.building(2700,350,-1850,500,200,100, color, canvas)
    		}
    		if(location[1] === '08' || location[1] === '00'){
    			//[B8. WOMEN DORMS]
			    create_b.building(3450,350,-1650,500,200,100, color, canvas)
			    create_b.building(3600,350,-1350,150,200,300, color, canvas) 
			    create_b.building(3450,350,-1250,500,200,100, color, canvas)
    		}
    		if(location[1] === '09' || location[1] === '00'){
    			//[B9. WOMEN DORMS // pink dorms]
			    create_b.building(7500,350,-4850,300,200,950, color, canvas)      
			    create_b.building(7800,350,-5550,700,200,250, color, canvas)  
			    create_b.building(8800,350,-5550,600,200,250, color, canvas) 
			    create_b.building(9200,350,-4550,300,200,750, color, canvas)
			    create_b.building(8500,350,-4550,700,200,250, color, canvas)
			       
			    //small quad // pink dorms
			    create_b.building(8500,350,-4850,400,200,400, color, canvas)  
			    create_b.building(8800,350,-3450,300,200,750, color, canvas)
			    
			    //quad 1/2 // pink dorms
			    create_b.building(10500,350,-4650,400,200,400, color, canvas)  
			    create_b.building(11000,350,-4650,400,200,400, color, canvas)  
			    create_b.building(11000,350,-5250,400,200,400, color, canvas)  
			    create_b.building(11500,350,-5250,400,200,400, color, canvas)  
			    create_b.building(11500,350,-5850,250,200,600, color, canvas) 
    		}
    	}

    	if(location[0] === '180' || location[0] === '100'){//SCHOOL
    		//[27.SATIT SCHOOL]
    		if(location[1] === '01' || location[1] === '00'){
    			//27.1.1
			    create_b.building(1300,350,350,400,250,100, color, canvas)
    		}
    		if(location[1] === '02' || location[1] === '00'){
    			//27.1.2 
			    create_b.building(1450,350,450,150,250,50, color, canvas)
			    create_b.building(1350,350,800,450,250,350, color, canvas)
    		}
    		if(location[1] === '03' || location[1] === '00'){
    			//27.1.3
			    create_b.building(1300,350,1150,100,250,200, color, canvas)
			    create_b.building(1300,350,1100,500,250,80, color, canvas)
			    create_b.building(1700,350,1150,100,250,200, color, canvas)
    		}
    		if(location[1] === '04' || location[1] === '00'){
    			//27.1.4
			    create_b.building(1350,350,1500,100,250,250, color, canvas)
			    create_b.building(1470,350,1400,400,250,110, color, canvas)
			    create_b.building(1470,350,1500,400,250,110, color, canvas)
    		}
    		if(location[1] === '05' || location[1] === '00'){
    			//27.1.5
			    create_b.building(1350,350,1650,350,250,70, color, canvas)
			    create_b.building(1700,350,1800,200,250,250, color, canvas)
    		}
    		if(location[1] === '06' || location[1] === '00'){
    			//27.1.6
			    create_b.building(1450,350,1950,250,250,70, color, canvas)
			    create_b.building(1700,350,2130,200,250,250, color, canvas)       
			    create_b.building(1250,350,2200,250,200,140, color, canvas)
			    create_b.building(1450,350,2400,250,200,140, color, canvas)
    		}
    		if(location[1] === '07' || location[1] === '00'){
    			//27.1.7          
			    create_b.building(1800,350,2600,250,200,350, color, canvas)
			    create_b.building(1900,350,2750,80,200,150, color, canvas)
			    create_b.building(1780,350,3000,270,200,250, color, canvas)
			    create_b.building(1750,350,2950,30,200,100, color, canvas)
    		}
    		if(location[1] === '08' || location[1] === '00'){
    			//27.2.2         
			    create_b.building(2150,350,200,750,250,300, color, canvas)
    		}
    		if(location[1] === '09' || location[1] === '00'){
    			//27.2.3          
			    create_b.building(2300,350,400,350,250,50, color, canvas)
			    create_b.building(2250,350,600,600,250,200, color, canvas)
			    create_b.building(2300,350,650,350,250,50, color, canvas)
    		}
    		if(location[1] === '10' || location[1] === '00'){
    			//27.2.4
			    create_b.building(2150,350,950,750,250,200, color, canvas)
    		}
    		if(location[1] === '11' || location[1] === '00'){
    			//27.2.5
			    create_b.building(2150,350,1700,450,250,350, color, canvas)
    		}
    		if(location[1] === '12' || location[1] === '00'){
    			//27.2.6
			    create_b.building(2150,350,2750,700,250,250, color, canvas)
			    create_b.building(2600,350,3100,250,250,350, color, canvas)
    		}
    		if(location[1] === '13' || location[1] === '00'){
    			//27.3.1   
			    create_b.building(3300,350,350,400,250,150, color, canvas)
			    create_b.building(3300,350,600,650,250,250, color, canvas)
    		}
    		if(location[1] === '14' || location[1] === '00'){
    			//27.3.2     
			    create_b.building(3300,350,1150,750,250,450, color, canvas)
    		}
    		if(location[1] === '15' || location[1] === '00'){
    			//27.3.3
			    create_b.building(3300,350,1800,750,250,450, color, canvas)
    		}
    		if(location[1] === '16' || location[1] === '00'){
    			//27.3.4
			    create_b.building(3300,350,2400,700,250,400, color, canvas)
    		}
    	}

    	if(location[0] === '199' || location[0] === '100'){//special
    		if(location[1] === '01' || location[1] === '00'){ 
    			//[17. UNIVERSIRT LIBIRARY]
    			
    			//long
			    create_b.building(-1000,350,-3550,200,200,750, color, canvas) 
			    create_b.building(-1000,350,-4300,450,200,450, color, canvas)  
			       
			    //big quad
			    create_b.building(-2500,350,-4450,850,200,450, color, canvas) 
			    create_b.building(-2300,350,-4000,850,200,450, color, canvas)  
    		}
    		if(location[1] === '02' || location[1] === '00'){
    			//[18. REGISTER OFFICE]
			    create_b.building(-2700,350,-5550,700,200,250, color, canvas)     
			    create_b.building(-2700,350,-5950,500,200,500, color, canvas) 
			    create_b.building(-1700,350,-5950,700,200,250, color, canvas)    
			    create_b.building(-1500,350,-6200,500,200,450, color, canvas)   
			    create_b.building(-800,350,-6250,750,200,250, color, canvas)   
			    create_b.building(-800,350,-5900,650,200,250, color, canvas) 
    		}
    		if(location[1] === '03' || location[1] === '00'){
    			//[9. ITSC]
			    create_b.building(-3500,350,-9550,650,200,650, color, canvas)  
			    create_b.building(-4500,350,-9550,650,200,650, color, canvas) 
			            
			    //lshape
			    create_b.building(-4450,350,-7950,1050,200,250, color, canvas) 
			    create_b.building(-3400,350,-7950,250,200,1250, color, canvas)
			    create_b.building(-3750,350,-8650,350,200,250, color, canvas) 
			    create_b.building(-4950,350,-8450,250,200,250, color, canvas) 
			    create_b.building(-5200,350,-8450,250,200,550, color, canvas) 
    		}
    		if(location[1] === '04' || location[1] === '00'){
    			//[31.GRADUATE SCHOOL]
			    //31.1
			    create_b.building(5950,350,2000,600,250,150, color, canvas)      
			    create_b.building(6400,350,2250,350,250,350, color, canvas) 
			    create_b.building(6500,350,2450,250,250,200, color, canvas) 

			    //31.2       
			    create_b.building(5850,350,2450,550,250,150, color, canvas) 
			      
			    //31.3
			    create_b.building(5950,350,2950,550,250,350, color, canvas)
			    create_b.building(5950,350,3000,100,250,50, color, canvas) 
			    create_b.building(6400,350,3000,100,250,50, color, canvas) 
			    
			    //31.4
			    create_b.building(6600,350,3000,150,250,400, color, canvas)
    		}
    		if(location[1] === '05' || location[1] === '00'){
    			//[D. SWIMMING POOL]
			    create_b.building(3330,350,-900,150,200,50, color, canvas)
			    create_b.building(3100,350,-350,380,200,550, color, canvas)
			    create_b.building(3200,350,-300,150,200,50, color, canvas)
    		}	
    	}


    }






}