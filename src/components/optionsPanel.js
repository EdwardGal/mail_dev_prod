export function renderOptionsPanel(
  selectedBlock,
  updateOptionCallback,
  removeBlockCallback,
  copyBlockCallback
) {
  const optionsPanel = document.getElementById("options-panel");
  optionsPanel.innerHTML = ""; // Очищаем панель опций

  if (!selectedBlock) {
    optionsPanel.innerHTML = "<p>Выберите блок для редактирования</p>";
    return;
  }

  const placeholders = {
    preheader: "Прехеадер",
    styles: "Стили",
    template_width: "Ширина шаблона (в пикселях)",
    background_url: "URL фонового изображения",
    logo_spacer: "Отступ для логотипа (в пикселях)",
    logo_link: "Ссылка на логотип",
    logo_url: "URL логотипа",
    logo_width: "Ширина логотипа (в пикселях)",
    title_width: "Ширина заголовка (в пикселях)",
    title_fz: "Размер шрифта заголовка (в пикселях)",
    title_fw: "Вес шрифта заголовка",
    title_lh: "Высота строки заголовка",
    title_ls: "Межбуквенное расстояние заголовка",
    title_color: "Цвет заголовка",
    title_area: "Текст заголовка",
    image_spacer: "Отступ для изображения (в пикселях)",
    image_link: "Ссылка для изображения",
  };

  // Функция для определения типа инпута
  const getInputType = (variableKey) => {
    const splitKey = variableKey.split("_");
    const suffix = splitKey[1] || splitKey[0]; // Используем всю строку, если подчеркивания нет
    return [
      "preheader",
      "styles",
      "url",
      "link",
      "color",
      "area",
      "lh",
      "ls",
    ].includes(suffix)
      ? "text"
      : "number";
  };

  // Функция для создания инпутов
  const createInput = (variableKey) => {
    const placeholder = placeholders[variableKey] || "Значение";

    const optionLabel = document.createElement("label");
    optionLabel.innerText = placeholder;

    const optionInput = document.createElement("input");
    optionInput.type = getInputType(variableKey);
    optionInput.placeholder = placeholder;

    // Событие для обновления переменной
    optionInput.addEventListener("input", (event) => {
      updateOptionCallback(variableKey, event.target.value);
    });

    optionsPanel.append(optionLabel, optionInput);
  };

  // Отображаем переменные блока как инпуты
  Object.keys(selectedBlock.variables).forEach((variableKey) => {
    createInput(variableKey);
  });

  // Функция для создания кнопок
  const createButton = (text, className, callback) => {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.add(className);
    button.addEventListener("click", callback);
    return button;
  };

  const buttonsBlock = document.createElement("div");
  buttonsBlock.className = "options-buttons"; // Добавляем класс для стилизации кнопок

  buttonsBlock.append(
    createButton("Копировать блок", "copy-button", () =>
      copyBlockCallback(selectedBlock)
    ),
    createButton("Удалить блок", "delete-button", () =>
      removeBlockCallback(selectedBlock.id)
    )
  );

  optionsPanel.appendChild(buttonsBlock);
}
