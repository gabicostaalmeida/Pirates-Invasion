class Canon{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h 
        this.a = a 
        this.canonImg = loadImage("../assets/canon.png")
        this.baseImg = loadImage("../assets/cannon_base.png")

    } 
    display(){
        //cano do canhão
        push() 
        imageMode(CENTER)
        image(this.canonImg,this.x,this.y,this.w,this.h)
        pop()

        //base do canhão
        image(this.baseImg,70,20,200,200)

    }
}