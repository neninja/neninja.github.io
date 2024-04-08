document.addEventListener('alpine:init', () => {
  Alpine.data('nav', () => ({
    show: false,
    init() {
      if (document.getElementById('hello-banner').offsetHeight === 0) {
        this.show = true;
      }
    },
    handleScroll() {
      this.show = window.scrollY >= document.getElementById('hello-banner').offsetHeight
    }
  }));
})

document.addEventListener('alpine:init', () => {
  Alpine.data('home', () => ({
    face: 'neutral',
    init() {

    },
    eyeballtracking(event) {
      const face = document.getElementById('face-container');
      if (event.clientY < 100) {
        this.face = 'above';
      } else if (event.clientY > face.clientHeight * 1.2) {
        this.face = 'below';
      } else {
        this.face = 'neutral';
      }

      document.querySelectorAll('#hello-banner .eyes').forEach((eye) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(event.clientX - eyeCenterX, event.clientY - eyeCenterY);
        const angleX = Math.sin(angle) * 8;
        const angleY = Math.cos(angle) * 8;

        eye.style.transform = `translate(${angleX}px, ${angleY}px)`;
      });
    }
  }));
})
