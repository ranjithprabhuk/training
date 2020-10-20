const titleElement: HTMLElement = document.getElementById('title');

if(titleElement) {
  titleElement.innerHTML = 'Hey I am learning typescript';
  titleElement.onclick = () => {
    console.log('clicked');
  }
};

interface IFormElement extends HTMLElement {
  value: string;
}

const getValue = (): void => {
  const inputElement: HTMLInputElement = document.getElementById('input-name') as HTMLInputElement;

  if (inputElement) {
    console.log('value', inputElement.value);
  }
};

