document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const btnVoltar = document.getElementById('voltar');
    const btnAvancar = document.getElementById('avancar');
    const selectVelocidade = document.getElementById('velocidade-audio');

    if (!player) return;

    btnVoltar.addEventListener('click', () => {
        player.currentTime = Math.max(0, player.currentTime - 15);
    });

    btnAvancar.addEventListener('click', () => {
        player.currentTime = Math.min(player.duration || 0, player.currentTime + 15);
    });

    selectVelocidade.addEventListener('change', (e) => {
        player.playbackRate = parseFloat(e.target.value);
    });
});