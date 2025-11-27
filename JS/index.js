document.addEventListener('DOMContentLoaded', function() {
    const t = 'Hello, World';
    const s = '풀스택 개발자 김주영입니다.';
    let tIndex = 0;
    let sIndex = 0;
    const greetingTitle = document.getElementById('typing-title');
    const greetingSubtitle = document.getElementById('typing-subtitle');
    
    const tCursor = document.createElement('span');
    tCursor.className = 'typing-cursor';
    const sCursor = document.createElement('span');
    sCursor.className = 'typing-cursor';
    
    greetingTitle.appendChild(tCursor);

    function typeTitle() {
        if (tIndex < t.length) {
            greetingTitle.insertBefore(
                document.createTextNode(t.charAt(tIndex)), 
                tCursor
            );
            tIndex++;
            setTimeout(typeTitle, 150);
        } else {
            greetingTitle.removeChild(tCursor);
            greetingSubtitle.appendChild(sCursor);
            setTimeout(typeSubtitle, 200);
        }
    }

    function typeSubtitle() {
        if (sIndex < s.length) {
            greetingSubtitle.insertBefore(
                document.createTextNode(s.charAt(sIndex)),
                sCursor
            );
            sIndex++;
            setTimeout(typeSubtitle, 100);
        } else {
            greetingSubtitle.removeChild(sCursor);
            
        }
    }
    
    const word = [
    "Hello World!", "Juyoung Kim", "AnA",
    "SRIH 120th", "Frontend Developer", "Algolithms"
    ];

    function spawnText() {
    const greetingSection = document.getElementsByClassName("greeting")[0];
    if (!greetingSection) return;
    
    const wrap = document.createElement("div");
    wrap.className = "float-text";
    
    wrap.innerText = word[Math.floor(Math.random() * word.length)];
    
    const headerH = 64; 
    const minH = headerH + (window.innerHeight * 0.3); 
    const maxH = window.innerHeight * 0.7; 
    const randY = Math.random() * (maxH - minH) + minH;
    
    wrap.style.top = `${randY}px`;
    wrap.style.right = '0';
    
    const dura = 5 + Math.random() * 5;
    wrap.style.animationDuration = `${dura}s`;
    
    greetingSection.appendChild(wrap);
    
    wrap.addEventListener('animationend', () => {
      if (wrap.parentNode) {
        wrap.parentNode.removeChild(wrap);
      }
    });
    }

    let lastCreatedTime = 0;
    typeTitle()
    function loop(timestamp) {
        if (timestamp - lastCreatedTime > 1000) { 
            spawnText();
            lastCreatedTime = timestamp;
        }
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
});
