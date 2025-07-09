export function displayDropDown({ wrapper, title, list = [], action }) {
    //Creating elements
    const container = document.createElement('div');
    container.classList.add('container');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title');
    titleContainer.textContent = title;
    container.appendChild(titleContainer);

    const dropDownList = document.createElement('ul');

    //Creating the list items
    for (let item of list) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        dropDownList.appendChild(listItem);
        listItem.addEventListener('click', action);
    }

    //Adding elements
    container.appendChild(titleContainer);
    wrapper.appendChild(container);

    //Hover logic
    container.addEventListener('mouseenter', () => {
        console.log('append');
        container.appendChild(dropDownList);
    });

    container.addEventListener('mouseleave', () => {
        container.removeChild(dropDownList);
    });
}