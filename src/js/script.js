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