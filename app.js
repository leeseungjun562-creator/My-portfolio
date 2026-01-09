// 모든 내비게이션 링크를 선택
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 이동 막기

        // 클릭한 메뉴의 목적지 id 확인 (#about 등)
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // 해당 위치로 부드럽게 이동
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});