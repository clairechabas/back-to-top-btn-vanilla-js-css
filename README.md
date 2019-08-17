# A simple back-to-top button in vanilla JS and CSS

No need for jQuery or any library every single time we need to add a bit of functionality to a website or app. Here we'll see how to create a simple back-to-top button using just CSS and Javascript.

Basically we want :

**1) To display a button when the user starts scrolling the page**. Here the questions we needs answers are : how to we know the user is scrolling ? and how can we do something when he does ?

- **How to know the user is scrolling** : [window.scrollY](https://developer.mozilla.org/fr/docs/Web/API/Window/scrollY) gives us the number of pixels that the document is currently scrolled vertically. It's equal to 0 if we're on top and any other positive number if we're scrolling.
- **How can we do something when the user is scrolling** : by listening to the "scroll" event on the window using [window.addEventListener("scroll", callback)](https://developer.mozilla.org/fr/docs/Web/Events/scroll).

**2) To add functionality to this button so that we can detect when the user clicks on it so we can bring him/her back to the top of the page.** Here we'll simply listen the to click event and use the callback linked to it to bring the user back to the top of the page using [window.scrollTo(0, 0)](https://developer.mozilla.org/fr/docs/Web/API/Window/scrollTo), where the parameters of scrollTo are the positions on the x and y axis respectively.

**3) To remove the button when the user is at the top of the page.** Here a question we might have would be : how can we remove a DOM element in Javascript ? I tried using the element.remove() function but came out short with it so I fell back on the simplest solution I found : using the **display** CSS style.
