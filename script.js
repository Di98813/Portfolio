// 1. 3D Tilt Effect: Makes the card follow the mouse movement
const card = document.querySelector('.portfolio-card');

document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset card position when mouse leaves
document.addEventListener('mouseleave', () => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Clear transition when mouse enters so it feels snappy
document.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

// 2. Skill Items Staggered Animation
const skills = document.querySelectorAll('.skill-item');

window.addEventListener('load', () => {
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, 200 * index); // Staggered delay: 200ms, 400ms, 600ms...
    });
});

// 3. Simple Click Feedback for Buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.95)';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1.02)';
    });
});