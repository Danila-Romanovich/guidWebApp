'strict'

document.addEventListener("DOMContentLoaded", () => {


    

        // Формируйте URL-запрос с полученными параметрами
        const baseUrl = 'http://localhost:8080/api/objects';

        fetch(baseUrl)
            .then(response => response.json())
            .then(questions => {
                console.log(questions);
            })
            .catch(error => console.error('Ошибка:', error));
    

})