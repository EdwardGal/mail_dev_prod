export function renderMailEditor(blocks, selectBlockCallback) {
  const mailEditor = document.getElementById("mail-editor");
  mailEditor.innerHTML = ""; // Очищаем редактор

  blocks.forEach((block) => {
    let blockContent = block.content;

    // Заменяем переменные в шаблоне на значения из block.variables
    Object.keys(block.variables).forEach((variableKey) => {
      const regex = new RegExp(`{{${variableKey}}}`, "g");
      blockContent = blockContent.replace(regex, block.variables[variableKey]);
    });

    const blockElement = document.createElement("div");
    blockElement.classList.add("block");
    blockElement.innerHTML = blockContent;

    // Добавляем обработчик клика для выбора блока
    blockElement.addEventListener("click", (event) => {
      // Убираем подсветку с других блоков
      document.querySelectorAll(".block").forEach((el) => el.classList.remove("_active"));

      // Добавляем подсветку к выбранному блоку
      blockElement.classList.add("_active");

      // Вызываем callback для обработки выбора блока
      selectBlockCallback(block.id);

      // Предотвращаем всплытие события, чтобы не сработал обработчик на контейнере
      event.stopPropagation();
    });

    mailEditor.appendChild(blockElement);
  });

  // Добавляем обработчик клика на mailEditor для снятия активного класса
  mailEditor.addEventListener("click", (event) => {
    // Проверяем, был ли клик вне активного блока
    if (!event.target.classList.contains("block")) {
      document.querySelectorAll(".block").forEach((el) => el.classList.remove("_active"));
    }
  });
}
