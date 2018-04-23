class Create {

			constructor() {
          this.over_r = new Array()
          this.dist = 1
  			}

  			checkroom(id, _px, _py, _sx, _sy){
  				if (mouseX >= (_px*this.dist) && mouseX <= ((_px+_sx)*this.dist) && 
      				mouseY >= (_py*this.dist) && mouseY <= ((_py+_sy)*this.dist)) {
  					return true
	 			}
  			    return false
  			}

    		c_rect(px, py, sx, sy, ceiling, c, canvas){
      			let l=0,h=0
      			if(ceiling == 'y'){ l = 70, h = 10}
      			else if(ceiling == 'n') {l = 0, h = 100}
      			else if (ceiling == 'f') {l=0, h=40}
      			   //back
      			   this.simple_r(px, py, l, sx, 0, h, c, canvas)
      			   //front
      			   this.simple_r(px, py+sy, l, sx, 0, h, c, canvas)
      			   //right
      			   this.simple_r(px+sx, py, l, 0, sy, h, c, canvas)
      			   if (ceiling != 'f'){ 
        			   //left
        			     this.simple_r(px, py, l, 0, sy, h, c, canvas)
        			   //floor
        			     this.simple_r(px, py, l, sx, sy, 0, c, canvas)
      			   }
      			   if(ceiling == 'y'){
        			   //ceiling
        			     this.simple_r(px, py, l+h, sx, sy, 0, c, canvas)
      			   }
    		}



        room(id,_px,_py,_sx,_sy,_colour,canvas){
				    let col = this.checkroom(id, _px, _py, _sx,_sy)
				    let colour

				    if(col){
      			   	colour = color('#00FFC1')
                this.over_r[id] = true
    			  }
    			  else{
                colour = _colour
                this.over_r[id] = false
            }
    			  this.c_rect(_px, _py, _sx, _sy,'n',colour,canvas)

			}

        setdist (distance) { this.dist = distance}
    
    		getover_r (_id) {return this.over_r[_id]} 
}

Create.prototype.building = (xx,yy,zz,sx,sy,sz,c,canvas) =>{
    canvas.fill(color(255,0,0))
    push()

          canvas.beginShape()
              canvas.vertex(xx,yy,zz)
              canvas.vertex(xx+sx,yy,zz)
              canvas.vertex(xx+sx,yy,zz-sz)
              canvas.vertex(xx,yy,zz-sz)
              canvas.vertex(xx,yy,zz)
              canvas.vertex(xx,yy-sy,zz)
              canvas.vertex(xx+sx,yy-sy,zz)
              canvas.vertex(xx+sx,yy,zz)
              canvas.vertex(xx+sx,yy,zz-sz)
              canvas.vertex(xx+sx,yy-sy,zz-sz)
              canvas.vertex(xx+sx,yy-sy,zz)
              canvas.vertex(xx+sx,yy-sy,zz-sz)
              canvas.vertex(xx,yy-sy,zz-sz)
              canvas.vertex(xx,yy-sy,zz)
              canvas.vertex(xx,yy,zz)
              canvas.vertex(xx,yy,zz-sz)
              canvas.vertex(xx,yy-sy,zz-sz)
              canvas.vertex(xx,yy-sy,zz)
          canvas.endShape(CLOSE)

    pop()

}

Create.prototype.simple_r = (xx,yy,zz ,sx,sy,sz,c,canvas) =>{
      push()
            canvas.fill(c)
            //strokeJoin(ROUND)
            canvas.beginShape()
            canvas.vertex(xx,yy,zz)
            if(sx != 0 && sy != 0){
                canvas.vertex(xx+sx,yy,zz)
                canvas.vertex(xx+sx,yy+sy,zz+sz)
                canvas.vertex(xx,yy+sy,zz+sz) 
            }else{
                canvas.vertex(xx+sx,yy+sy,zz)
                canvas.vertex(xx+sx,yy+sy,zz+sz)
                canvas.vertex(xx,yy,zz+sz) 
            }
           canvas.endShape(CLOSE)
      pop()
}

Create.prototype.c_rectb = (xx, yy, sx, sy, c, canvas) =>{
        push()
            canvas.fill(c)
            canvas.translate(0,0,30);
            canvas.rect(xx,yy-10,sx+10,10)
            canvas.rect(xx+sx,yy,10,sy)
            canvas.rect(xx,yy+sy,sx+10,10)
        pop()
}


Create.prototype.bar = (xx,yy,sx,sy,canvas) => {
          push()
                 Create.prototype.c_rect( xx, yy, sx, sy, 'f',color(255), canvas)
                 Create.prototype.c_rectb( xx, yy, sx, sy,color(137,71,21), canvas)
                 canvas.fill(255,0,0)
                 canvas.translate(xx+sx/2+2,yy-3,38)
                 canvas.box(sx+4,2,2)
                 canvas.translate(-(xx+sx/2+2),-(yy-3),-38)
                 canvas.translate(xx+sx+3,yy+sy/2,38)
                 canvas.box(2,sy+4,2)
                 canvas.translate(-(xx+sx+3),-(yy+sy/2),-38)
                 canvas.translate(xx+sx/2+2,yy+sy+3,38)
                 canvas.box(sx+4,2,2)
                 canvas.translate(-(xx+sx/2+2),-(yy+sy+3),-38)
          pop()

          push()
            for(let i=0; i<16; i++){
                 Create.prototype.chair_b(xx+4+(i*16),yy-20,canvas)
                 Create.prototype.chair_b(xx+4+(i*16),yy+sy+20,canvas)
                 if (i<8){
                     Create.prototype.chair_b(xx+sx+20,yy-4+(i*16),canvas)
                 }
            }
          pop()
}


Create.prototype.chair_b = (xx, yy, canvas) =>{
    push()
              canvas.fill(color(137,71,21))
              canvas.translate(xx,yy,23)
              canvas.box(8,8,2)
              canvas.translate(-3,+3,-12)
              canvas.box(2,2,22)
              canvas.translate(0,-6,0)
              canvas.box(2,2,22)
              canvas.translate(6,0,0)
              canvas.box(2,2,22)
              canvas.translate(0,6,0)
              canvas.box(2,2,22)
              canvas.translate(-3,-3,-11)
              canvas.translate(-xx,-yy)

    pop()
}

Create.prototype.floor = (canvas) =>{
      push()
            canvas.fill(0)
            canvas.rect(542,210,82,150)
            canvas.rect(624,160,82,100)
            canvas.rect(706,210,328,50)
            canvas.rect(214,360,492,50)
            canvas.rect(214,410,82,100)
            canvas.rect(214,410,82,100)
            canvas.rect(214,510,492,50)
            canvas.rect(624,410,82,100)
            canvas.rect(706,510,82,25)
      pop()
}

