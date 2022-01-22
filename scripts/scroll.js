const scrollFoo = () => {
    const headerLinks = document.querySelectorAll(".header-menu__item a");
    const linkDetails = document.querySelector(".card-details__link-characteristics");
    const allLinks = [...headerLinks, linkDetails];

    seamless.polyfill();

    allLinks.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();

            const id = element.getAttribute("href").substring(1);
            const section = document.getElementById(id);

            if (section) {
                seamless.elementScrollIntoView(section, {
                    behavior: "smooth",
                    block: "start"
                })
            } else {
                seamless.elementScrollIntoView(document.querySelector("#cross-sell"), {
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            }
        });
    });
};

scrollFoo();
