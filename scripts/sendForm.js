const sendForm = () => {
    const buttonOpenModal = document.querySelector(".card-details__button_delivery");
    const cardDetailsTitle = document.querySelector(".card-details__title");
    const modalWindow = document.querySelector(".modal");
    const modalTitle = modalWindow.querySelector(".modal__title");
    const modalForm = modalWindow.querySelector("form");
    const modalCloseButton = modalWindow.querySelector(".modal__close");

    buttonOpenModal.addEventListener("click", () => {
        modalWindow.style.display = "flex";
        modalTitle.textContent = cardDetailsTitle.textContent;
    });

    modalCloseButton.addEventListener("click", () => {
        modalWindow.style.display = "none"
    });

    modalForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const labels = modalWindow.querySelectorAll(".modal__label");

        const sendMessage = {"Товар": `${cardDetailsTitle.textContent}`}

        labels.forEach(label => {
            const labelSpan = label.querySelector("span");
            const labelInput = label.querySelector("input")

            sendMessage[labelSpan.textContent] = labelInput.value;
        });

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {'Content-type': 'application/json; charset=UTF-8'},
        })
        .then(() => alert("Информация о заказе отправлена на сервер"))
        .then(() => {
            modalWindow.style.display = "none";
            labels.forEach((label) => {
              const labelInput = label.querySelector("input");
              labelInput.value = "";
            });
        });
    })
};

sendForm();
