document.addEventListener("DOMContentLoaded", () => {
    const examples = [
        "Hospedagem de Sites e Aplicações Web",
        "Ambientes de Teste e Desenvolvimento",
        "Armazenamento e Backup",
        "Data Centers Virtuais"
    ];

    const examplesList = document.getElementById("iaas-examples");

    examples.forEach(example => {
        const listItem = document.createElement("li");
        listItem.textContent = example;
        examplesList.appendChild(listItem);
    });
});
