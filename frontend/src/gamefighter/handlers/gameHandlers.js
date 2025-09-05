import {BulletClass} from "../classes/bulletClass.js";

export const handleMouseMove = (event, gameRef, imgRef, setPositionX) => {
    const marginPercent = -0.08;
    if (!gameRef.current || !imgRef.current) return;
    const bounds = gameRef.current.getBoundingClientRect();
    const mouseX = event.clientX - bounds.left;

    const fighterWidth = imgRef.current.clientWidth;
    const margin = bounds.width * marginPercent;

    const clampedX = Math.max(
        margin + fighterWidth / 2,
        Math.min(mouseX, bounds.width - margin - fighterWidth / 2)
    );
    setPositionX(clampedX);
};

export const handleClick = (event, positionX, bulletY) => {
    event.preventDefault();
    return new BulletClass (positionX, bulletY );
};
