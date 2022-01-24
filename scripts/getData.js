const getData = () => {
    const list = document.querySelector(".cross-sell__list");
    const buttonAdd = document.querySelector(".cross-sell__add");

    let stack = 4;
    let count = 1;

    const render = (data) => {
        list.innerHTML = "";

        data.forEach((item) => {
            list.insertAdjacentHTML("beforeend", `
                <li>
                    <article class="cross-sell__item">
                        <img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
                        <h3 class="cross-sell__title">${item.name}</h3>
                        <p class="cross-sell__price">${item.price} ₽</p>
                        <button type="button" class="button button_buy cross-sell__button">Купить</button>
                    </article>
                </li>
            `);
        });
    };

    const sliceArray = (data, index) => {
        return data.slice(0, index);
    };

    const changeData = (data) => {
        const newStack = stack * count;

        if (data.length > newStack) {
            count++;
        } else {
            buttonAdd.style.display = "none";
        }

        render(sliceArray(data, newStack));
    };

    const getNewGoods = () => {
        fetch("https://js-iphone-promo-default-rtdb.firebaseio.com/db.json")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Ошибка связи с сервером! Попробуйте ещё раз.");
                }
            })
            .then((data) => {
                changeData(data);
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    buttonAdd.addEventListener("click", getNewGoods);

    getNewGoods();
};

getData();
