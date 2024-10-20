export let addedBlocks = [];

// Функция для добавления нового блока с уникальным id
export function addBlock(block) {
  block.id = generateId();
  addedBlocks.push(block);
}

// Функция для обновления блока по его id
export function updateBlock(blockId, updatedBlock) {
  addedBlocks = addedBlocks.map(block => block.id === blockId ? updatedBlock : block);
}

// Функция для удаления блока по его id
export function removeBlock(blockId) {
  addedBlocks = addedBlocks.filter(block => block.id !== blockId);
}

// Генерация уникального id
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
