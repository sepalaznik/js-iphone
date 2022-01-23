const tabsFoo = () => {
    const tabs = document.querySelectorAll(".card-detail__change");
    const tabTitle = document.querySelector(".card-details__title");
    const tabPrice = document.querySelector(".card-details__price");
    const tabMemory = document.querySelector(".description__memory");
    const tabMemoryCh = document.querySelector(".description__memory_ch");
    const tabImage = document.querySelector(".card__image_item");
    const pageTitle = document.querySelector("title");

    const tabsOptions = [
        {
            name: "Graphite",
            memory: 128,
            price: 99990,
            imageUrl: "img/iPhone-graphite.webp"
        }, {
            name: "Silver",
            memory: 256,
            price: 89990,
            imageUrl: "img/iPhone-silver.webp"
        }, {
            name: "Sierra Blue",
            memory: 512,
            price: 105990,
            imageUrl: "img/iPhone-sierra_blue.webp"
        }
    ];

    const changeTabsContent = (index) => {
        tabTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory} GB ${tabsOptions[index].name}`;
        tabPrice.textContent = `${tabsOptions[index].price} ₽`;
        tabMemory.textContent = `Встроенная память (ROM) ${tabsOptions[index].memory} ГБ`;
        tabMemoryCh.innerHTML = `<p>Встроенная память (Гб)</p><p>${tabsOptions[index].memory}</p>`;

        tabImage.setAttribute("src", tabsOptions[index].imageUrl);

        pageTitle.textContent = `iPhone 13 Pro ${tabsOptions[index].name}`
    };

    const changeActiveTab = (clickedTabIndex) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove("active");

            if (index === clickedTabIndex) {
                tab.classList.add("active")
            };
        });
        changeTabsContent(clickedTabIndex);
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            changeActiveTab(index)
        });
    });

    changeTabsContent(0);
};

tabsFoo();
