export const handleFullScreen = (backgroundRef) => {
    const gameContainer = backgroundRef.current;
    if (!gameContainer) return;
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (gameContainer.requestFullscreen) {
            gameContainer.requestFullscreen();
        }else if (gameContainer.webkitRequestFullscreen) {
            gameContainer.webkitRequestFullscreen(); // Safari
        } else if (gameContainer.msRequestFullscreen) {
            gameContainer.msRequestFullscreen(); // IE11
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen(); // Safari
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen(); // IE11
        }
    }
};