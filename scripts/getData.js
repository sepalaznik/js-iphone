const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Ошибка связи с сервером! Попробуйте ещё раз.')
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error.message);
        })
        .finally(() => {
            console.log('Обработка данных завершена.');
        })
};
    
getData();
