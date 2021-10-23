# Vanilla JS exercise

First thing we do is add the extension for LiveServer to VS Code.
Next thing would be to start the live serving of our index.html file.
We do this by

## - Create elements

We want to create our first Element.
For this we add this code into the index.js file.

```
let heading = document.createElement('h1');
```

but now we only created the element and we did not add any text for it to be displayed.

so below that line we add

```
heading.textContent = "Test App";
```

But now whwen we open the live server we can not yet see anything.
And that's because we haven't yet imported the `index.js` file into our `index.html` file.

So in the `index.html` file we add the follwing code between the closing `</body>` tag and the closing `<html>`tag.

our `index.html` file file should now look like this:

```
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <title>Vanilla JS Workshop</title>
</head>

<body id="body">


</body>

<script type="text/javascript" src="./index.js"></script>

</html>
```

But we still wont see our Header, as we haven't told the HTML were this element would go.

So we have to create an variable in our `index.js` file that saves the body HTML element so we can append our Heading to it.

For that we add this line of code on top of our `index.js` file.

```
let body = document.getElementById('body');
```

and to append the heading to the body we will write this line of code at the end of the file

```
body.appendChild(heading);
```

our `index.js` file should now look like this

```
let body = document.getElementById('body');

let heading = document.createElement('h1');
heading.textContent = "Test App";

body.appendChild(heading);
```

### - Adding a button

Now we want to add a button to connect to the MetaMask wallet.

We are doing it exactly as we did with the heading.

Try it on your own first. The HTML tag for a button is `button`.. Easy peasy.
We want it tobe called "Enable Ethereum". And to be a child of the body.

If you are done, your code should look like this:

```
let body = document.getElementById('body');

let heading = document.createElement('h1');
heading.textContent = "Test App";

let enableEthereumButton = document.createElement('button');
enableEthereumButton.textContent = "Enable Ethereum";

body.appendChild(heading);
body.appendChild(enableEthereumButton);
```

## - Add styling

Now everything looks very boring and I don't like to work with something that looks boring, so lets add some styling.

for that create a new file called `style.css`in the `vanilla-js` directory.

to link the file to our index.html file we have to add it into the header of the `index.html` file above the title like this:

```
   <link rel="stylesheet" type="text/css" href="./style.css">
```

But to be actually able to style our components we have to add classes to our HTML elements.

This can be done in two different ways:

```
enableEthereumButton.setAttribute('class', 'enable-button');
// or like this if oyu want to add several classes to an element.
enableEthereumButton.classList.add('enable-button');
```

Now we will add some styling to the `style.css`file. Feel free to copy the code below. You can of course change the colors or add more styling.
It will just center stuff. Also very important tip for working with css:
Try not to play elements with position:absolute or maring and padding but really try using Flex box.
It is very convenient for placing elements on the top,center or bottom. A very amazing guide can be found <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">here</a>.

```
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgb(214, 237, 243);
}

.enable-button {
  background-color: rgb(230, 190, 80);
}
```

## - Connect to MetaMask

To connect to MetaMask we will use the [ether.js library](https://docs.ethers.io/v5/getting-started/#getting-started--glossary).

First we need to import it into our little frontend App. To do that, we have to add this line of code to our `index.html` file above the import of our `index.js` file.

BTW. This works for a prototype but for your Real Life App you should import it in your node_modules.

Our `index.html` file should look like this then:

```
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <link rel="stylesheet" type="text/css" href="./style.css">

   <title>Vanilla JS Workshop</title>
</head>

<body id="body">


</body>

<!-- Loading the ether.js library like htis is for Protoyping.
   For RealLife Programming you should import it with Node.js. -->
<script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
<script type="text/javascript" src="./index.js"></script>

</html>
```

next we need to import the ether.js library into our `index.js` file. For this we add this line of code to the top of our `index.js` file.

```
const provider = new ethers.providers.Web3Provider(window.ethereum);
```

Now we can use the functions of the library. At the end of the `index.js` file we add this code:

```
enableEthereumButton.onclick = async () => {
   await ethereum.request({ method: 'eth_requestAccounts' });
};
```

here we are using the `onclick`function that is already build into the button element. This would not work for the `h1` element. And we now give the button the functionality that when it's clicked it sould request access to our MetaMask Wallet.

Okay. Great. Now try it out. Play around. Create more buttons. Change some colors. Maybe a list...

Exampls for more tasks

- create a navigation list (try to change several eements at once (e.g. document.querySelectorAll()))
- create a button that increments a counter
- look into the difference between `document.querySelector('.someclass')` and `document.querySelectorAll('div.note, div.alert')`
