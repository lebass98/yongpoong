// 폰트 키우기 토글 스위치 기능

class FontEnlargeControl {
  constructor() {
    this.storageKey = 'font-enlarge-preference';
    this.currentValue = 'off'; // 기본값: off (보통)
    
    this.init();
  }

  init() {
    // DOM이 로드될 때까지 대기
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupControls());
    } else {
      // DOM이 이미 로드된 경우 즉시 실행
      this.setupControls();
    }
  }

  setupControls() {
    // 토글 스위치 이벤트 리스너 설정
    const toggle = document.getElementById('font-enlarge-toggle');
    const label = document.getElementById('font-toggle-label');
    
    if (!toggle || !label) {
      console.warn('폰트 크기 조정 토글 스위치 또는 레이블을 찾을 수 없습니다.');
      return;
    }
    
    // 이벤트 리스너 추가
    toggle.addEventListener('change', (e) => {
      const value = e.target.checked ? 'on' : 'off';
      this.setEnlarge(value);
    });

    // 저장된 선호도 불러오기 (없으면 기본값 'off' 사용)
    const savedValue = localStorage.getItem(this.storageKey);
    if (savedValue && (savedValue === 'off' || savedValue === 'on')) {
      this.currentValue = savedValue;
      this.setEnlarge(savedValue);
      // 토글 스위치 상태 동기화
      toggle.checked = savedValue === 'on';
    } else {
      // 기본값 'off' 설정
      this.currentValue = 'off';
      this.setEnlarge('off');
      toggle.checked = false;
    }
  }

  setEnlarge(value) {
    this.currentValue = value;
    
    const toggle = document.getElementById('font-enlarge-toggle');
    const label = document.getElementById('font-toggle-label');
    
    // body 클래스 제거
    document.body.classList.remove('font-enlarge');
    
    // 활성화된 경우 클래스 추가
    if (value === 'on') {
      document.body.classList.add('font-enlarge');
      if (label) label.textContent = '큰글씨';
    } else {
      if (label) label.textContent = '보통글씨';
    }
    
    // 토글 스위치 상태 동기화
    if (toggle) {
      toggle.checked = value === 'on';
    }
    
    // 저장
    localStorage.setItem(this.storageKey, value);
    
    console.log('폰트 크기 조정:', value === 'on' ? '크게' : '보통', 'body classes:', document.body.className);
  }

  toggle() {
    const toggle = document.getElementById('font-enlarge-toggle');
    if (!toggle) return;
    
    const newValue = this.currentValue === 'on' ? 'off' : 'on';
    toggle.checked = newValue === 'on';
    this.setEnlarge(newValue);
  }
}

// 초기화
window.fontEnlargeControl = new FontEnlargeControl();
