// 글씨 크기 조절 기능 JavaScript 예제

class FontSizeControl {
  constructor() {
    this.currentSize = 'normal';
    this.sizeClasses = ['small', 'normal', 'large', 'xlarge', 'xxlarge'];
    this.storageKey = 'font-size-preference';
    
    this.init();
  }

  init() {
    // 저장된 선호도 불러오기
    const savedSize = localStorage.getItem(this.storageKey);
    if (savedSize && this.sizeClasses.includes(savedSize)) {
      this.setFontSize(savedSize);
    }

    // 버튼 이벤트 리스너 설정
    const buttons = document.querySelectorAll('.btn-font-size');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const size = e.target.dataset.size || e.target.closest('.btn-font-size')?.dataset.size;
        if (size) {
          this.setFontSize(size);
        }
      });
    });
  }

  setFontSize(size) {
    if (!this.sizeClasses.includes(size)) return;

    // body 클래스 제거
    document.body.classList.remove(...this.sizeClasses.map(s => `font-${s}`));
    
    // 새 클래스 추가
    document.body.classList.add(`font-${size}`);
    
    // 버튼 활성 상태 업데이트
    document.querySelectorAll('.btn-font-size').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.size === size) {
        btn.classList.add('active');
      }
    });

    // 저장
    this.currentSize = size;
    localStorage.setItem(this.storageKey, size);
  }

  increase() {
    const currentIndex = this.sizeClasses.indexOf(this.currentSize);
    if (currentIndex < this.sizeClasses.length - 1) {
      this.setFontSize(this.sizeClasses[currentIndex + 1]);
    }
  }

  decrease() {
    const currentIndex = this.sizeClasses.indexOf(this.currentSize);
    if (currentIndex > 0) {
      this.setFontSize(this.sizeClasses[currentIndex - 1]);
    }
  }

  reset() {
    this.setFontSize('normal');
  }
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  window.fontSizeControl = new FontSizeControl();
});
