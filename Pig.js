class Pig extends BaseClass {
    constructor(x,y) {
        super(x,y, 50,50);

        this.image = loadImage("assets/enemy.png");
        this.visibility = 255;
        this.startTime = millis();
        this.scored = false;
    }

    display() {
        let pos = this.body.position;

        if(millis() - this.startTime < 1000) {
            push();
            imageMode(CENTER);
            image(this.image, pos.x,pos.y, 40,40);
            pop();

            return;
        }

        if(this.body.speed < 5) {
            push();
            imageMode(CENTER);
            image(this.image, pos.x,pos.y, 40,40);
            pop();
        } else {
            World.remove(world, this.body);

            push();
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            imageMode(CENTER);
            image(this.image, pos.x,pos.y, 40,40);
            pop();
        }
    }

    score() {
        if(this.visibility < 0 && this.visibility > -1005 && !this.scored) {
            score++;
            pigShotSound.play();
            this.scored = true
        }
    }
}