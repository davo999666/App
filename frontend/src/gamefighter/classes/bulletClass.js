import bulletImage from '../assets/images/bullet/bullet.png';

export class BulletClass {
    constructor(x, y) {
        this.x = x
        this.y = y;
        this.image = bulletImage;
        this.speed = 10;



    }

    moveBullet() {
        this.y -= this.speed;
    }
}