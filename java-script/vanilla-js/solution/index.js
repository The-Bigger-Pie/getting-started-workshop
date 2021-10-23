const provider = new ethers.providers.Web3Provider(window.ethereum);

let body = document.getElementById('body');

let heading = document.createElement('h1');
heading.classList.add('heading');
heading.textContent = "Test App";

let enableEthereumButton = document.createElement('button');
enableEthereumButton.setAttribute('class', 'enable-button');
enableEthereumButton.setAttribute('id', 'enable-button');
enableEthereumButton.textContent = "Enable Ethereum";

body.appendChild(heading);
body.appendChild(enableEthereumButton);


enableEthereumButton.onclick = async () => {
   await ethereum.request({ method: 'eth_requestAccounts' });
};






