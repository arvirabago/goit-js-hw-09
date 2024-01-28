import '../css/common.css';

const body = document.body;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.disabled = true;

const randomBodyColorGenerator = {
  DELAY: 1000,
  intervalID: null,

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  startInterval() {
    this.intervalID = setInterval(() => {
      body.style.backgroundColor = this.getRandomHexColor();
    }, this.DELAY);
  },

  stopInterval() {
    clearInterval(this.intervalID);
  },

  toggleButtons() {
    startBtn.disabled = !startBtn.disabled;
    stopBtn.disabled = !stopBtn.disabled;
  },

  start() {
    startBtn.addEventListener('click', () => {
      this.startInterval();
      this.toggleButtons();
    });

    stopBtn.addEventListener('click', () => {
      this.stopInterval();
      this.toggleButtons();
    });
  },
};

randomBodyColorGenerator.start();
