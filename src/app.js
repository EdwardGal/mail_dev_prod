import "./styles/main.scss";
import { renderNavPanel } from './components/navPanel.js';
import { renderMailEditor } from './components/mailEditor.js';
import { renderOptionsPanel } from './components/optionsPanel.js';
import { templates } from './data/templates.js';
import { addedBlocks, addBlock, updateBlock, removeBlock } from './data/blocks.js';
import { extractVariables } from './components/utils.js';

let selectedBlockId = null;

// Функция для динамического создания панелей
function createPanels() {
  const app = document.getElementById('app');

  // Создаем панель навигации
  const navPanel = document.createElement('div');
  navPanel.id = 'nav-panel';
  navPanel.classList.add('nav-panel');
  
  // Создаем почтовый редактор
  const mailEditor = document.createElement('div');
  mailEditor.id = 'mail-editor';
  mailEditor.classList.add('mail-editor');

  // Создаем панель опций
  const optionsPanel = document.createElement('div');
  optionsPanel.id = 'options-panel';
  optionsPanel.classList.add('options-panel');

  // Добавляем все панели в основной контейнер
  app.append(navPanel,mailEditor,optionsPanel);
}

// Добавление нового блока в редактор
function addTemplate(template) {
  const variables = extractVariables(template.content);

  // Создаем новый блок с переменными по умолчанию
  const newBlock = {
    ...template,
    variables: variables.reduce((acc, variable) => {
      acc[variable] = `${variable}`;
      return acc;
    }, {})
  };

  addBlock(newBlock);
  renderMailEditor(addedBlocks, selectBlock); // Обновляем редактор
}

// Выбор блока для редактирования
function selectBlock(blockId) {
  selectedBlockId = blockId;
  const selectedBlock = addedBlocks.find(block => block.id === selectedBlockId);
  renderOptionsPanel(selectedBlock, updateSelectedBlockOption, removeSelectedBlock, copyBlock); // Обновляем панель опций
}

// Удаление блока
function removeSelectedBlock(blockId) {
  removeBlock(blockId);
  selectedBlockId = null; // Сбрасываем выбранный блок
  renderMailEditor(addedBlocks, selectBlock); // Обновляем почтовый редактор
  renderOptionsPanel(null, updateSelectedBlockOption, removeSelectedBlock, copyBlock); // Сбрасываем панель опций
}

// Копирование блока
function copyBlock(block) {
  const newBlock = { 
    ...block, 
    id: generateId(), // Новый уникальный id
    variables: JSON.parse(JSON.stringify(block.variables)) // Глубокое копирование переменных
  }; 
  
  addBlock(newBlock); // Добавляем новый блок
  renderMailEditor(addedBlocks, selectBlock); // Обновляем редактор
}

// Обновление параметров блока
function updateSelectedBlockOption(variableKey, value) {
  const selectedBlock = addedBlocks.find(block => block.id === selectedBlockId);
  if (selectedBlock) {
    selectedBlock.variables[variableKey] = value;
    updateBlock(selectedBlockId, selectedBlock); // Обновляем блок в массиве
    renderMailEditor(addedBlocks, selectBlock); // Обновляем редактор
  }
}

// Генерация уникального id
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Инициализация приложения
function init() {
  createPanels(); // Динамическое создание панелей
  renderNavPanel(templates, addTemplate); // Рендерим панель навигации
  renderMailEditor(addedBlocks, selectBlock); // Рендерим редактор
  renderOptionsPanel(null, updateSelectedBlockOption, removeSelectedBlock, copyBlock); // Изначально нет выбранного блока
}

init(); // Запуск приложения
