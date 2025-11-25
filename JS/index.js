document.addEventListener('DOMContentLoaded', function() {
    const t = 'Hello, World';
    const s = '풀스택 개발자 김주영입니다.';
    let ti = 0;
    let si = 0;
    const te = document.getElementById('typing-title');
    const se = document.getElementById('typing-subtitle');
    
    const tc = document.createElement('span');
    tc.className = 'typing-cursor';
    const sc = document.createElement('span');
    sc.className = 'typing-cursor';
    
    te.appendChild(tc);

    function typeTitle() {
        if (ti < t.length) {
            te.insertBefore(
                document.createTextNode(t.charAt(ti)), 
                tc
            );
            ti++;
            setTimeout(typeTitle, 150);
        } else {
            te.removeChild(tc);
            se.appendChild(sc);
            setTimeout(typeSubtitle, 500);
        }
    }

    function typeSubtitle() {
        if (si < s.length) {
            se.insertBefore(
                document.createTextNode(s.charAt(si)),
                sc
            );
            si++;
            setTimeout(typeSubtitle, 100);
        } else {
            se.removeChild(sc);
            
        }
    }
    
    const words = [
    "Hello World!", "프론트는 재미없어", "민기는 놀라워", "알고리즘", "엄",
    "우우우 쌀쌀쌀", "특검", "내가 디떨이라니"
    ];

    function spawnText() {
    const greetingSection = document.getElementsByClassName("greeting")[0];
    if (!greetingSection) return;
    
    const el = document.createElement("div");
    el.className = "float-text";
    
    el.innerText = words[Math.floor(Math.random() * words.length)];
    
    const headerH = 64; 
    const minY = headerH + (window.innerHeight * 0.3); 
    const maxY = window.innerHeight * 0.7; 
    const randomY = Math.random() * (maxY - minY) + minY;
    
    el.style.top = `${randomY}px`;
    el.style.right = '0';
    
    const dura = 5 + Math.random() * 5;
    el.style.animationDuration = `${dura}s`;
    
    greetingSection.appendChild(el);
    
    el.addEventListener('animationend', () => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
    }

    setInterval(spawnText, 1000);
    typeTitle();
});
