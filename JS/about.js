


const langs = [
    {
        name: "Elixir",
        image: "./ASSETS/IMAGES/elixir.png"
    },
    {
        name: "Kotlin",
        image: "./ASSETS/IMAGES/kotlin.png"
    },
    {
        name: "C++",
        image: "./ASSETS/IMAGES/c++.png"
    },
    {
        name: "JavaScript",
        image: "./ASSETS/IMAGES/js.png"
    },
    {
        name: "TypeScript",
        image: "./ASSETS/IMAGES/ts.png"
    },
    {
        name: "Ruby",
        image: "./ASSETS/IMAGES/ruby.png"
    },
    {
        name: "Python",
        image: "./ASSETS/IMAGES/python.png"
    },
    {
        name: "C",
        image: "./ASSETS/IMAGES/c.svg"
    },
    {
        name: "C#",
        image: "./ASSETS/IMAGES/cs.svg"
    },
    {
        name: "Go",
        image: "./ASSETS/IMAGES/go.png"
    },
    {
        name: "Java",
        image: "./ASSETS/IMAGES/java.svg"
    }
];
const fws = [
    {
        name: "Spring Boot",
        image: "./ASSETS/IMAGES/springboot.webp"
    },
      {
        name: "Phoenix",
        image: "./ASSETS/IMAGES/phoenix.svg"
      },
      {
        name: "Flask",
        image: "./ASSETS/IMAGES/flask.png"
      },
      {
        name: "Svelte",
        image: "./ASSETS/IMAGES/svelte.png"
      },
      {
        name: "SvelteKit",
        image: "./ASSETS/IMAGES/svelte.png"
      },
      {
        name: "FastAPI",
        image: "./ASSETS/IMAGES/fastAPI.png"
      },
      {
        name: "Tailwind CSS",
        image: "./ASSETS/IMAGES/tailwind.png"
      },
      {
        name: "Nest.js",
        image: "./ASSETS/IMAGES/nest.png"
      },
      {
        name: "React",
        image: "./ASSETS/IMAGES/react.png"
      },
      {
        name: "Next.js",
        image: "./ASSETS/IMAGES/next.png"
      },
      {
        name: "SolidJS",
        image: "./ASSETS/IMAGES/solidJS.svg"
      },
      {
        name: "SolidStart",
        image: "./ASSETS/IMAGES/solidStart.png"
      },
      {
        name: "Qwik",
        image: "./ASSETS/IMAGES/qwik.png" 
      },
      {
        name: "QwikCity",
        image: "./ASSETS/IMAGES/qwik.png"
      }
    ]
             
    
const langList = document.querySelector("LanguageList");
const fwList = document.querySelector("FrameworkList");

const langUl = document.createElement("ul");
const fwUl = document.createElement("ul");


langs.forEach(lang => {
    const langItem = document.createElement("li");
    langItem.classList.add("stack-item");
    langItem.innerHTML = `
        <img src="${lang.image}" alt="${lang.name}">
        ${lang.name}
    `;
    langItem.addEventListener('mouseover', () => {
        langItem.classList.add('onhover');
    });
    langItem.addEventListener('mouseleave', () => {
        langItem.classList.remove('onhover');
    });
    langUl.appendChild(langItem);
});
fws.forEach(fw => {
    const fwItem = document.createElement("li");
    fwItem.classList.add("stack-item");
    fwItem.innerHTML = `
        <img src="${fw.image}" alt="${fw.name}">
        ${fw.name}
    `;
    fwUl.appendChild(fwItem);
});

langList.appendChild(langUl);
fwList.appendChild(fwUl);

const stkItems = document.querySelectorAll('.stack-item');

const aboutContainer = document.querySelector('.about-container');



let revealed = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !revealed) {
            revealed = true;

            stkItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 50);
            });

            observer.unobserve(aboutContainer); 
        }
    });
}, {
    threshold: 0.2  // 20%
});

observer.observe(aboutContainer);