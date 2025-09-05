import {
    AverageCloud, BigCloud,
    GiganticCloud,
    HugeCloud,
    LargeCloud,
    MediumCloud,
    SmallCloud,
    TinyCloud
} from "../classes/cloudClass.js";

export function createCloud(x, y, word, gameWidth, gameHeight) {
    const len = word.length;
    if(len <= 2) return  new TinyCloud(x,y,word, gameWidth, gameHeight);
    if (len <= 4) return new SmallCloud(x, y, word, gameWidth, gameHeight);
    if (len <= 6) return new MediumCloud(x, y, word, gameWidth, gameHeight);
    if (len <= 8) return new AverageCloud(x, y, word, gameWidth, gameHeight);
    if (len <= 10) return new LargeCloud(x, y, word, gameWidth, gameHeight);
    if(len <= 12) return new BigCloud(x, y, word, gameWidth, gameHeight);
    if (len <= 14) return new HugeCloud(x, y, word, gameWidth, gameHeight);
    return new GiganticCloud(x, y, word, gameWidth, gameHeight);
}

export function rectCollision(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}
export function collisionBulClo(bullets, clouds) {
    for (let ci = 0; ci < clouds.length; ci++) {
        const cloud = clouds[ci];
        for (let bi = 0; bi < bullets.length; bi++) {
            const bullet = bullets[bi];
            const isColliding =
                bullet.x >= cloud.x &&
                bullet.x <= cloud.x + cloud.width &&
                bullet.y >= cloud.y &&
                bullet.y <= cloud.y + cloud.height;
            if (isColliding) {
                return { bullet, cloud };
            }
        }
    }
    return null;
}



