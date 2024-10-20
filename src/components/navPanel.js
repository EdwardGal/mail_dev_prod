export function renderNavPanel(templates, addTemplateCallback) {
  const navPanel = document.getElementById('nav-panel');
  navPanel.innerHTML = ''; // Очищаем панель навигации перед рендером

  templates.forEach((template) => {
    const templateButton = document.createElement('button');
    templateButton.textContent = `${template.name}`;
    templateButton.addEventListener('click', () => {
      addTemplateCallback(template);
    });
    navPanel.appendChild(templateButton);
  });
}
