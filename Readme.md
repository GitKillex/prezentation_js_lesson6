<h1 align = 'center'>Dom</h1>

## Dom - Document Object Model Structured Representation Of HTML Documents Allows JavaScript To Access HTML Elements And Styles To Manipulates Them.

<h1 align = 'center'>Создание Даты Объекта</h1>

## Метод `querySelector()` позволяет получить элемент страницы по произвольному селектору CSS. С полученным элементом можно будет производить различные манипуляции: менять его текст, атрибуты, CSS стили и так далее.

## `querySelectorAll()` - это document метод, который возвращает коллекцию ( NodeList ) всех найденных элементов на странице, соответствующие указанному селектору или группе селекторов. Если поиск не увенчался успехом возвращается пустой NodeList 

<h1 align = 'center'>Array Methods</h1>

## `innerHTML` - Это свойство предоставляет простой способ полностью заменить содержимое элемента. Например, все содержимое элемента body может быть удалено:

<h1 align = 'center'>HTML Events</h1>

## An HTML event can be something the browser does, or something a user does. Here are some examples of HTML events:
+ An HTML web page has finished loading
+ An HTML input field was changed
+ An HTML button was clicked

_Свойство `onclick` возвращает обработчик события click на текущем элементе._

<h1 align = 'center'>createElement()</h1>

## The JavaScript `document.createElement()` method allows you to create and return a new element (an empty Element node) with the specified tag name.

1. createElement(elementName): Creates an html element whose tag is passed as a parameter. Returns the created element
```javascript
    let btn = document.createElement('button')
    btn.innerHTML = 'myButton'
    document.body.appendChild(btn)
```

# Methods of `createElement()`

```html
    <body>
        <div id='myDTV' style='padding:16px; background:lightgray;'>
            <h3>ADD 'paragraph' in a Div Element</h3>
        </div>
        <script>
            let paragraph1 = document.createElement('p')
            paragraph1.innerHTML = 'This is a paragraph.'

            let paragraph2 = document.createElement('p')
            paragraph2.innerHTML = 'This is a paragraph 2.'

            // Append to another element

            const addElements = document.getElementById('myDTV')
            addElements.appendChild(paragraph1)
            addElements.appendChild(paragraph2)
        </script>
    </body>
```

### The `createElement()` method creates an element node.

<h1 align = 'center'>HTML DOM Element `</h1>

## The `appendChild()` method appends a node (element) as the last child of an element.`appendChild()` adds a node to the end of the list of children of the specified parent node. If the given child element is a reference to an existing node in the document, then the `appendChild()`. function moves it from its current position to the new position

## To create a paragraph with a text.
+ Create a paragraph element
+ Create a text node
+ Append the text node to the paragraph
+ Append the paragraph to the document.

```javascript
    // Create a p element:
    const para = document.createElement("p");
    // Create a text node:
    const node = document.createTextNode("This is a paragraph.");
    // Append text node to the p element:
    para.appendChild(node);
    // Append the p element to the body:
    document.getElementById("myDIV").appendChild(para);
```

<h1 align = 'center'>classlist()</h1>

<h2 align = 'center' style = 'color:red'>ClassList is a getter. The object it returns has several methods:</h2>

***add( String [,String] )***
**Adds the specified classes to the element**
***remove( String [,String] )***
**Removes the specified classes from the element**
***toggle(String[, Boolean])***
**If the element has no class, it adds it, otherwise it removes it. When**
**false is passed as the second parameter, it removes the specified**
**class, and if true, it adds it.**
**If the second parameter is undefined or a variable with**
**`typeof == 'undefined'`, the behavior is the same as passing only the**
**first parameter when calling**




<h1 align = 'center'>THANK YOU FOR READING!!!</h1># prezentation_js_lesson6
