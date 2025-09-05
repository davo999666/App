import { cloudImages } from "../utils/images_clouds.js";

class CloudBase {
    constructor(x, y, word, image, width, height, gameWidth, gameHeight) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.word = word;
        this.image = image;
        this.originalWidth = width;
        this.originalHeight = height;

        // ✅ Only scale if screen is bigger than a threshold
        const minWidth = 768;   // phone/tablet breakpoint
        const minHeight = 500;

        let scaleX = 0.6;
        let scaleY = 0.6;

        if (gameWidth > minWidth) {
            scaleX = (gameWidth || 1280) / 1280;
        }
        if (gameHeight > minHeight) {
            scaleY = (gameHeight || 720) / 720;
        }

        this.width = Math.floor(width * scaleX);
        this.height = Math.floor(height * scaleY);

        this.centerX = this.x + this.width / 2;
        this.centerY = this.y + this.height / 2;
        this.speed = 0.2;
    }

    moveCloud(gameWidth) {
        this.y += this.speed;
        if (this.x + this.width > gameWidth) {
            this.x -= 1;
        } else if (this.x <= -5) {
            this.x += 1;
        }
    }

    collision(target) {
        if (this === target) return;
        const overlapX = this.x < target.x + target.width && this.x + this.width > target.x;
        const overlapY = this.y < target.y + target.height && this.y + this.height > target.y;
        const isColliding = overlapX && overlapY;
        if (isColliding) {
            const cloudCenterX = this.centerX;
            const cloudCenterY = this.centerY;
            const targetCenterX = target.centerX;
            const targetCenterY = target.centerY;
            if (cloudCenterX < targetCenterX) {
                this.x -= 3;
            } else {
                this.x += 3;
            }
            if (cloudCenterY < targetCenterY) {
                this.y += 1;
            } else {
                this.y -= 1;
            }
        }
    }

    changeSize(gameWidth, gameHeight) {
        // Define minimum sizes where scaling should stop
        const minWidth = 768;   // phone/tablet breakpoint
        const minHeight = 500;

        let scaleX = 0.6;
        let scaleY = 0.6;

        if (gameWidth > minWidth) {
            scaleX = (gameWidth || 1280) / 1280;
        }
        if (gameHeight > minHeight) {
            scaleY = (gameHeight || 720) / 720;
        }

        this.width = Math.floor(this.originalWidth * scaleX);
        this.height = Math.floor(this.originalHeight * scaleY);

        this.centerX = this.x + this.width / 2;
        this.centerY = this.y + this.height / 2;
    }
}

export class TinyCloud extends CloudBase {
    constructor(x, y, word, gameWidth, gameHeight) {
        super(x, y, word, cloudImages('tiny'), 70, 30, gameWidth, gameHeight);
        this.type = 'tiny';
    }
}

export class SmallCloud extends CloudBase {
    constructor(x, y, word, gameWidth, gameHeight) {
        super(x, y, word, cloudImages('small'), 80, 35, gameWidth, gameHeight);
        this.type = 'small';
    }
}

export class MediumCloud extends CloudBase {
    constructor(x, y, word, gameWidth, gameHeight) {
        super(x, y, word, cloudImages('medium'), 95, 40, gameWidth, gameHeight);
        this.type = 'medium';
    }
}

export class AverageCloud extends CloudBase {
    constructor(x, y, word, gameWidth, gameHeight) {
        super(x, y, word, cloudImages('average'), 130, 45, gameWidth, gameHeight);
        this.type = 'average';
    }
}

export class LargeCloud extends CloudBase {
    constructor(x, y, word, gameWidth, gameHeight) {
        super(x, y, word, cloudImages('large'), 150, 50, gameWidth, gameHeight);
        this.type = 'large';
    }
}

export class BigCloud extends CloudBase {
    constructor(x, y, word, gameWidth, gameHeight) {
        super(x, y, word, cloudImages('big'), 175, 55, gameWidth, gameHeight);
        this.type = 'big';
    }
}

export class HugeCloud extends CloudBase {
    constructor(x, y, word, gameWidth, gameHeight) {
        super(x, y, word, cloudImages('huge'), 200, 60, gameWidth, gameHeight);
        this.type = 'huge';
    }
}

export class GiganticCloud extends CloudBase {
    constructor(x, y, word, gameWidth, gameHeight) {
        super(x, y, word, cloudImages('gigantic'), 220, 65, gameWidth, gameHeight);
        this.type = 'gigantic';
    }
}
