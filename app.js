const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // 50px 이상 스크롤 되면 그림자 추가
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.transition = '0.3s';
    } else {
        // 맨 위로 올라가면 다시 깔끔하게
        header.style.boxShadow = 'none';
    }
});