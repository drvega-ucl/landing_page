document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel pre');
    const texts = ['🤖 AGI 🤖', '👾 QUANTUM COMPUTING 👾', '🧬 SCALABLE HEALTH 🧬', '🌴 GREENTECH 🌴','🌩 CLOUD COMPUTING 🌩', '💸 FINTECH 💸','🗡 EDGE COMPUTING 🗡','🌟 SUSTAINABILITY 🌟','🌉  SMART CITIES 🌉','🏎 AUTONOMOUS VEHICLES 🏎','🦾 ROBOTICS 🦾','👁 VR/AR 👁','🚀 SPACE 🚀','🐜 NANOTECHNOLOGY 🐜','🧑‍🔬 GENOMICS 🧑‍🔬','🧠 NEUROSCIENCE 🧠','ANYTHING...'];
    let index = 0;

    setInterval(() => {
        carousel.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 1500); // Change text every 2 seconds
});
