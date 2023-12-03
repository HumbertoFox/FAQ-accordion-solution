# Frontend Mentor - FAQ accordion solution

Esta é uma solução para o [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). 
Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Layout do projeto em tela de Desktop/Notebook/Tablet/Mobile.


<div align="center">

![Visualização do design para o desafio de codificação FAQ accordion](./src/assets/images/design/desktop-design.jpg)

![Visualização do design para o desafio de codificação FAQ accordion](./src/assets/images/design/active-states.jpg)

![Visualização do design para o desafio de codificação FAQ accordion](./src/assets/images/design/mobile-design.jpg)

</div>

## Bem-vindo! 👋

### O que aprendi

Mais uma prática bem-sucedida com o HTML, CSS e Js! show 😎

```css
.ul-questions li p {
    display: none;
    font-size: 16px;
    font-weight: 400;
    color: var(--Grayish-purple);
    line-height: 24px;
    padding-bottom: 25px;
}

.ul-questions li p.visibled {
    display: block;
}

.ul-questions li h2 span {
    display: none;
}

.ul-questions li:nth-child(4) h2.active span {
    display: inline-block;
}
```

```Js
const selectLiTagh = document.querySelectorAll(".ul-questions li h2");

selectLiTagh.forEach((liQuestion) => {
    liQuestion.addEventListener("click", () => {
        
        const liQuestionsActive = document.querySelector(".active");

        liQuestionsActive.classList.remove("active");
        liQuestionsActive.nextElementSibling.classList.remove("visibled");

        liQuestion.classList.add("active");
        liQuestion.nextElementSibling.classList.add("visibled");
    });
});
```

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Caixa flexível
- Js

## Desenvolvido em:

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
</div>
