


const languages = [
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
frameworks = [
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
                 
const stackList = document.querySelector("LanguageList");
const frameworkList = document.querySelector("FrameworkList");

const LanguageList = document.createElement("ul");
const FrameworkList = document.createElement("ul");


languages.forEach(language => {
    const stackItem = document.createElement("li");
    stackItem.classList.add("stack-item");
    stackItem.innerHTML = `
        <img src="${language.image}" alt="${language.name}">
        ${language.name}
    `;
    stackItem.addEventListener('mouseover', () => {
        stackItem.classList.add('onhover');
    });
    stackItem.addEventListener('mouseleave', () => {
        stackItem.classList.remove('onhover');
    });
    LanguageList.appendChild(stackItem);
});
frameworks.forEach(framework => {
    const frameworkItem = document.createElement("li");
    frameworkItem.classList.add("stack-item");
    frameworkItem.innerHTML = `
        <img src="${framework.image}" alt="${framework.name}">
        ${framework.name}
    `;
    frameworkItem.addEventListener('mouseover', () => {
        frameworkItem.classList.add('onhover');
    });
    frameworkItem.addEventListener('mouseleave', () => {
        frameworkItem.classList.remove('onhover');
    });
    FrameworkList.appendChild(frameworkItem);
});

stackList.appendChild(LanguageList);
frameworkList.appendChild(FrameworkList);

const stackItems = document.querySelectorAll('.stack-item');

const aboutContent = document.querySelector('.about-content');



stackItems.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('show');
    }, index * 100); 
});
