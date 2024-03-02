export const questionData = {
  "HTML Basics": [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyperlink",
        "HyperText Markup Language",
        "Hypertext Transfer Protocol",
        "HyperText Transfer Language",
      ],
      correctAnswer: "HyperText Markup Language",
    },
    {
      question: "Which HTML tag is used for creating a hyperlink?",
      options: ["<link>", "<a>", "<hyperlink>", "<url>"],
      correctAnswer: "<a>",
    },
    {
      question: "What is the correct HTML element for the largest heading?",
      options: ["<head>", "<h1>", "<heading>", "<header>"],
      correctAnswer: "<h1>",
    },
    {
      question:
        "Which HTML attribute specifies an alternate text for an image?",
      options: ["src", "alt", "title", "caption"],
      correctAnswer: "alt",
    },
    {
      question: "What is the HTML element for inserting a line break?",
      options: ["<nl>", "<break>", "<lb>", "<br>"],
      correctAnswer: "<br>",
    },
    {
      question: "Which tag is used to define an unordered list in HTML?",
      options: ["<list>", "<ul>", "<ol>", "<li>"],
      correctAnswer: "<ul>",
    },
    {
      question: "What is the correct HTML for inserting a background color?",
      options: [
        "<color>",
        "<background>",
        "<bgcolor>",
        'style="background-color"',
      ],
      correctAnswer: 'style="background-color"',
    },
    {
      question: "What does HTML use to define the structure of a webpage?",
      options: ["Tags", "Functions", "Methods", "Attributes"],
      correctAnswer: "Tags",
    },
    {
      question: "Which HTML tag is used for defining a paragraph?",
      options: ["<p>", "<para>", "<paragraph>", "<pg>"],
      correctAnswer: "<p>",
    },
    {
      question: "What is the purpose of the HTML <meta> tag?",
      options: [
        "To define metadata about an HTML document",
        "To create a hyperlink",
        "To define a paragraph",
        "To insert an image",
      ],
      correctAnswer: "To define metadata about an HTML document",
    },
  ],
  "CSS Fundamentals": [
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
      ],
      correctAnswer: "Cascading Style Sheets",
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["text-color", "color", "font-color", "text-style"],
      correctAnswer: "color",
    },
    {
      question: "How do you add a background color for all <h2> elements?",
      options: [
        "h2 {background-color: yellow;}",
        "h2 {bg-color: yellow;}",
        "h2 {color-background: yellow;}",
        "h2 {text-color: yellow;}",
      ],
      correctAnswer: "h2 {background-color: yellow;}",
    },
    {
      question:
        "Which CSS property is used to control the spacing between elements?",
      options: ["space", "gap", "margin", "padding"],
      correctAnswer: "margin",
    },
    {
      question: "How do you make a list that lists its items with squares?",
      options: [
        "list-type: square;",
        "list-style-type: square;",
        "list: square;",
        "list-format: square;",
      ],
      correctAnswer: "list-style-type: square;",
    },
    {
      question: "What property is used to change the font of an element?",
      options: ["font-style", "text-style", "font-family", "text-family"],
      correctAnswer: "font-family",
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-size", "font-style", "text-font"],
      correctAnswer: "font-size",
    },
    {
      question: "How do you display hyperlinks without an underline?",
      options: [
        "a {decoration: none;}",
        "a {text-decoration: none;}",
        "a {underline: none;}",
        "a {no-underline: true;}",
      ],
      correctAnswer: "a {text-decoration: none;}",
    },
    {
      question:
        "What is the correct CSS syntax for making all the <div> elements bold?",
      options: [
        "div {font-weight: bold;}",
        "div {text-weight: bold;}",
        "div {style: bold;}",
        "div {bold: true;}",
      ],
      correctAnswer: "div {font-weight: bold;}",
    },
    {
      question: 'How do you select an element with id "demo" in CSS?',
      options: ["#demo", ".demo", "*demo", "demo#"],
      correctAnswer: "#demo",
    },
  ],
  "Introduction to JavaScript": [
    {
      question: "What is JavaScript?",
      options: [
        "A programming language",
        "A markup language",
        "A style sheet language",
        "A database language",
      ],
      correctAnswer: "A programming language",
    },
    {
      question: "Who developed JavaScript?",
      options: ["Microsoft", "Google", "Netscape", "Apple"],
      correctAnswer: "Netscape",
    },
    {
      question: "What can JavaScript do?",
      options: [
        "Create interactive web elements",
        "Style web pages",
        "Perform server-side operations",
        "Manage databases",
      ],
      correctAnswer: "Create interactive web elements",
    },
    {
      question: "What is the syntax for commenting in JavaScript?",
      options: [
        "// This is a comment",
        "<!-- This is a comment -->",
        "# This is a comment",
        "/* This is a comment */",
      ],
      correctAnswer: "// This is a comment",
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "variable"],
      correctAnswer: "var",
    },
    {
      question: "What type of language is JavaScript?",
      options: [
        "Interpreted",
        "Compiled",
        "Both Interpreted and Compiled",
        "None of the above",
      ],
      correctAnswer: "Both Interpreted and Compiled",
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      options: ["//", "/*", "#", "--"],
      correctAnswer: "//",
    },
    {
      question: "Which function is used to output data in JavaScript?",
      options: ["print()", "output()", "console.log()", "display()"],
      correctAnswer: "console.log()",
    },
    {
      question: "What is the data type of 'null' in JavaScript?",
      options: ["Object", "String", "Number", "Null"],
      correctAnswer: "Object",
    },
    {
      question: "What is the output of 2 + '2' in JavaScript?",
      options: ["22", "4", "'22'", "NaN"],
      correctAnswer: "'22'",
    },
  ],
  "Responsive Web Design": [
    {
      question: "What is Responsive Web Design?",
      options: [
        "Designing websites with multiple colors",
        "Designing websites for mobile devices",
        "Designing websites that adapt to different screen sizes",
        "Designing websites with animation effects",
      ],
      correctAnswer: "Designing websites that adapt to different screen sizes",
    },
    {
      question: "Which CSS property is used to make a website responsive?",
      options: ["width", "margin", "float", "media queries"],
      correctAnswer: "media queries",
    },
    {
      question: "What is the purpose of a viewport meta tag in HTML?",
      options: [
        "To define the background color",
        "To set the font style",
        "To define the character encoding",
        "To control the layout on mobile browsers",
      ],
      correctAnswer: "To control the layout on mobile browsers",
    },
    {
      question:
        "Which unit is commonly used for specifying font sizes in Responsive Web Design?",
      options: ["Pixels (px)", "Centimeters (cm)", "Points (pt)", "Em (em)"],
      correctAnswer: "Pixels (px)",
    },
    {
      question: "What does CSS media queries allow you to do?",
      options: [
        "Change the font style",
        "Apply different styles based on device characteristics",
        "Insert images",
        "Create animations",
      ],
      correctAnswer: "Apply different styles based on device characteristics",
    },
    {
      question:
        "Which CSS property is used to hide elements on smaller screens in Responsive Web Design?",
      options: ["visibility", "display", "opacity", "hidden"],
      correctAnswer: "display",
    },
    {
      question:
        "What is the purpose of a grid system in Responsive Web Design?",
      options: [
        "To create animations",
        "To define the page layout",
        "To set the font size",
        "To add colors to the website",
      ],
      correctAnswer: "To define the page layout",
    },
    {
      question:
        "Which HTML tag is used to define the main content area in a Responsive Web Design?",
      options: ["<section>", "<main>", "<div>", "<article>"],
      correctAnswer: "<main>",
    },
    {
      question:
        "What is the CSS property used to make an element stick to the top of the viewport when scrolling?",
      options: [
        "position: fixed",
        "position: sticky",
        "position: absolute",
        "position: relative",
      ],
      correctAnswer: "position: sticky",
    },
    {
      question:
        "Which CSS technique is used to adjust the layout based on the width of the viewport?",
      options: ["Flexbox", "Grid", "Media Queries", "Floats"],
      correctAnswer: "Media Queries",
    },
  ],
  "CSS Flexbox and Grid": [
    {
      question: "What is Flexbox?",
      options: [
        "A CSS layout model",
        "A JavaScript framework",
        "A type of grid system",
        "A database language",
      ],
      correctAnswer: "A CSS layout model",
    },
    {
      question: "What is the main axis in Flexbox?",
      options: ["Vertical", "Horizontal", "Diagonal", "None of the above"],
      correctAnswer: "Horizontal",
    },
    {
      question:
        "Which property is used to align items in the main axis in Flexbox?",
      options: [
        "align-items",
        "justify-content",
        "align-content",
        "flex-direction",
      ],
      correctAnswer: "justify-content",
    },
    {
      question: "What does 'flex-wrap: nowrap' do in Flexbox?",
      options: [
        "Prevents items from wrapping to the next line",
        "Forces items to wrap to the next line",
        "Resets the flex container",
        "None of the above",
      ],
      correctAnswer: "Prevents items from wrapping to the next line",
    },
    {
      question: "Which property is used to create a grid layout in CSS?",
      options: [
        "grid-template",
        "flexbox",
        "grid-layout",
        "grid-template-columns",
      ],
      correctAnswer: "grid-template-columns",
    },
    {
      question: "What is the purpose of 'grid-gap' in CSS Grid?",
      options: [
        "To set the gap between grid items",
        "To specify the number of columns in the grid",
        "To align items within a grid cell",
        "To control the grid's height and width",
      ],
      correctAnswer: "To set the gap between grid items",
    },
    {
      question:
        "Which CSS property is used to specify the size of a grid column?",
      options: [
        "grid-size",
        "grid-column",
        "column-width",
        "grid-template-columns",
      ],
      correctAnswer: "grid-template-columns",
    },
    {
      question: "What does 'justify-self' do in CSS Grid?",
      options: [
        "Justifies the content of a grid item along the inline axis",
        "Aligns a grid item along the block axis",
        "Aligns a grid item along the inline axis",
        "Justifies the content of a grid item along the block axis",
      ],
      correctAnswer:
        "Justifies the content of a grid item along the inline axis",
    },
    {
      question:
        "Which CSS property is used to specify the start position of a grid item?",
      options: [
        "grid-column-start",
        "grid-start",
        "start-column",
        "grid-row-start",
      ],
      correctAnswer: "grid-column-start",
    },
    {
      question: "What is the purpose of 'align-content' in CSS Grid?",
      options: [
        "To align grid items along the block axis",
        "To align grid tracks within the grid container",
        "To justify grid items along the inline axis",
        "To control the alignment of the grid container within its parent container",
      ],
      correctAnswer: "To align grid tracks within the grid container",
    },
  ],
  "JavaScript Functions and Scope": [
    {
      question: "What is a function in JavaScript?",
      options: [
        "A variable",
        "A piece of code that performs a task",
        "An array",
        "A data type",
      ],
      correctAnswer: "A piece of code that performs a task",
    },
    {
      question: "How do you define a function in JavaScript?",
      options: [
        "Using the 'function' keyword followed by a name and parentheses",
        "Using the 'var' keyword followed by a name and parentheses",
        "Using the 'define' keyword followed by a name and parentheses",
        "Using the 'func' keyword followed by a name and parentheses",
      ],
      correctAnswer:
        "Using the 'function' keyword followed by a name and parentheses",
    },
    {
      question: "What is the purpose of the 'return' statement in a function?",
      options: [
        "To stop the execution of the function",
        "To return a value from the function",
        "To define the function's parameters",
        "To declare a variable",
      ],
      correctAnswer: "To return a value from the function",
    },
    {
      question: "What is a function scope in JavaScript?",
      options: [
        "The area where a function is defined",
        "The area where a variable is accessible",
        "The area where a function's parameters are declared",
        "The area where a function is called",
      ],
      correctAnswer: "The area where a variable is accessible",
    },
    {
      question: "What is a global scope in JavaScript?",
      options: [
        "The area where a function is defined",
        "The area where a variable is accessible",
        "The area where a function's parameters are declared",
        "The area where a function is called",
      ],
      correctAnswer: "The area where a variable is accessible",
    },
    {
      question: "What does 'hoisting' refer to in JavaScript?",
      options: [
        "The lifting of function declarations and variable declarations to the top of their containing scope",
        "The process of optimizing code for performance",
        "The conversion of data types",
        "The hiding of sensitive information",
      ],
      correctAnswer:
        "The lifting of function declarations and variable declarations to the top of their containing scope",
    },
    {
      question: "What is the purpose of 'block scope' in JavaScript?",
      options: [
        "To define a function",
        "To create a new scope for variables within curly braces",
        "To return a value from a function",
        "To declare a variable",
      ],
      correctAnswer: "To create a new scope for variables within curly braces",
    },
    {
      question:
        "What is the output of the following code?\n\nlet x = 10;\n\nfunction foo() {\n  console.log(x);\n  let x = 20;\n}\n\nfoo();",
      options: ["10", "20", "undefined", "ReferenceError"],
      correctAnswer: "ReferenceError",
    },
    {
      question: "What does 'lexical scope' mean in JavaScript?",
      options: [
        "The area where a function is defined",
        "The area where a variable is accessible",
        "The area where a function's parameters are declared",
        "The area where a function is called",
      ],
      correctAnswer: "The area where a function is defined",
    },
    {
      question: "What is closure in JavaScript?",
      options: [
        "The process of closing a function",
        "The combination of a function and the lexical environment within which that function was declared",
        "A function that takes another function as an argument",
        "A function that returns an object",
      ],
      correctAnswer:
        "The combination of a function and the lexical environment within which that function was declared",
    },
  ],
  "DOM Manipulation": [
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Dynamic Object Manipulation",
        "Data Object Method",
        "Digital Object Management",
      ],
      correctAnswer: "Document Object Model",
    },
    {
      question: "How do you select an element by its ID in JavaScript?",
      options: [
        "getElementById()",
        "querySelector()",
        "getElementsByClassName()",
        "selectElementById()",
      ],
      correctAnswer: "getElementById()",
    },
    {
      question: "Which method creates a new HTML element in JavaScript?",
      options: [
        "createElement()",
        "appendChild()",
        "createNode()",
        "addNode()",
      ],
      correctAnswer: "createElement()",
    },
    {
      question: "What does the 'innerHTML' property do?",
      options: [
        "Sets or returns the content of an HTML element",
        "Adds a new HTML element",
        "Removes an HTML element",
        "Selects an HTML element",
      ],
      correctAnswer: "Sets or returns the content of an HTML element",
    },
    {
      question: "What is event propagation?",
      options: [
        "The process of capturing and bubbling events through the DOM tree",
        "The process of triggering events",
        "The process of modifying event properties",
        "The process of handling events",
      ],
      correctAnswer:
        "The process of capturing and bubbling events through the DOM tree",
    },
    {
      question: "How do you remove an HTML element in JavaScript?",
      options: [
        "removeChild()",
        "deleteElement()",
        "removeElement()",
        "deleteChild()",
      ],
      correctAnswer: "removeChild()",
    },
    {
      question: "What is the role of 'addEventListener' in JavaScript?",
      options: [
        "Attaches an event handler to an element",
        "Creates a new HTML element",
        "Updates the content of an element",
        "Removes an element from the DOM",
      ],
      correctAnswer: "Attaches an event handler to an element",
    },
    {
      question: "How do you modify the CSS style of an element in JavaScript?",
      options: [
        "style.property = value",
        "modifyCSS()",
        "changeStyle()",
        "updateElementStyle()",
      ],
      correctAnswer: "style.property = value",
    },
    {
      question:
        "What method is used to insert an HTML element after another element?",
      options: [
        "insertAdjacentElement()",
        "appendElement()",
        "insertAfter()",
        "insertNext()",
      ],
      correctAnswer: "insertAdjacentElement()",
    },
    {
      question: "What is the purpose of 'parentNode' in JavaScript?",
      options: [
        "References the parent node of an element",
        "Creates a new HTML element",
        "Removes an element from the DOM",
        "Updates the content of an element",
      ],
      correctAnswer: "References the parent node of an element",
    },
  ],
  "CSS Preprocessors": [
    {
      question: "What is a CSS preprocessor?",
      options: [
        "Tool that extends the functionality of CSS",
        "Language for styling web pages",
        "Framework for responsive design",
        "Browser extension for CSS",
      ],
      correctAnswer: "Tool that extends the functionality of CSS",
    },
    {
      question:
        "Which CSS preprocessor uses indentation for nesting and does not require semicolons?",
      options: ["Sass", "Less", "Stylus", "PostCSS"],
      correctAnswer: "Sass",
    },
    {
      question: "What does 'SCSS' stand for?",
      options: [
        "Sassy Cascading Style Sheets",
        "Simple CSS",
        "Stylized CSS",
        "Structured Cascading Style Sheets",
      ],
      correctAnswer: "Sassy Cascading Style Sheets",
    },
    {
      question: "What is the purpose of a mixin in Sass?",
      options: [
        "Include common styles across multiple selectors",
        "Import external CSS files",
        "Define variables",
        "Generate random CSS values",
      ],
      correctAnswer: "Include common styles across multiple selectors",
    },
    {
      question: "Which CSS preprocessor supports variables?",
      options: ["Sass", "Less", "Stylus", "PostCSS"],
      correctAnswer: "Sass",
    },
    {
      question: "What is the primary benefit of using a CSS preprocessor?",
      options: [
        "Modularity and maintainability of CSS code",
        "Increased browser compatibility",
        "Faster page load times",
        "Enhanced security",
      ],
      correctAnswer: "Modularity and maintainability of CSS code",
    },
    {
      question: "How do you import a Sass partial file into another Sass file?",
      options: [
        "@import 'filename';",
        "#include 'filename';",
        "import 'filename';",
        "load 'filename';",
      ],
      correctAnswer: "@import 'filename';",
    },
    {
      question: "What does 'nesting' refer to in Sass?",
      options: [
        "CSS rule nesting within other rules",
        "Incorporating bird images into CSS",
        "Organizing CSS files hierarchically",
        "Grouping CSS properties together",
      ],
      correctAnswer: "CSS rule nesting within other rules",
    },
    {
      question:
        "What feature allows you to reuse styles across multiple selectors in Sass?",
      options: ["Mixin", "Function", "Variable", "Placeholder"],
      correctAnswer: "Mixin",
    },
    {
      question:
        "What tool is commonly used to compile Sass code into regular CSS?",
      options: ["Node-sass", "Sass Compiler", "Less Compiler", "Babel"],
      correctAnswer: "Node-sass",
    },
  ],
  "Introduction to React": [
    {
      question: "What is React?",
      options: [
        "A JavaScript library for building user interfaces",
        "A server-side framework",
        "A database management system",
        "A programming language",
      ],
      correctAnswer: "A JavaScript library for building user interfaces",
    },
    {
      question: "What is JSX?",
      options: [
        "A syntax extension for JavaScript",
        "A new version of HTML",
        "A CSS preprocessor",
        "A type of database",
      ],
      correctAnswer: "A syntax extension for JavaScript",
    },
    {
      question: "What is a component in React?",
      options: [
        "A reusable piece of UI",
        "A JavaScript function or class that returns JSX",
        "A folder containing React files",
        "A data storage unit",
      ],
      correctAnswer: "A reusable piece of UI",
    },
    {
      question: "How do you create a React component?",
      options: [
        "By writing a JavaScript function or class",
        "By using HTML tags",
        "By importing it from a library",
        "By using a CSS file",
      ],
      correctAnswer: "By writing a JavaScript function or class",
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A lightweight copy of the real DOM",
        "An online documentation platform",
        "A version control system",
        "A testing framework",
      ],
      correctAnswer: "A lightweight copy of the real DOM",
    },
    {
      question: "What are props in React?",
      options: [
        "Properties that are passed into a component",
        "Special keywords in JSX",
        "CSS styles applied to a component",
        "A type of HTML tag",
      ],
      correctAnswer: "Properties that are passed into a component",
    },
    {
      question: "What is the purpose of state in React?",
      options: [
        "To store data that affects a component's rendering",
        "To manage routing in a React application",
        "To handle asynchronous operations",
        "To define the structure of a component",
      ],
      correctAnswer: "To store data that affects a component's rendering",
    },
    {
      question: "How do you update the state of a component?",
      options: [
        "By using the setState() method",
        "By modifying it directly",
        "By re-rendering the component",
        "By using the updateState() function",
      ],
      correctAnswer: "By using the setState() method",
    },
    {
      question: "What is the root DOM node in a React application?",
      options: [
        "The top-level HTML element where React renders the component tree",
        "A special component that all other components are nested within",
        "The browser's document object",
        "A hidden element in the DOM",
      ],
      correctAnswer:
        "The top-level HTML element where React renders the component tree",
    },
    {
      question: "What is the purpose of the ReactDOM.render() method?",
      options: [
        "To render a React component into the DOM",
        "To update the state of a component",
        "To remove a component from the DOM",
        "To create a new component instance",
      ],
      correctAnswer: "To render a React component into the DOM",
    },
  ],
  "React Components and Props": [
    {
      question: "What are props in React?",
      options: [
        "Properties that are passed into a component",
        "Special keywords in JSX",
        "CSS styles applied to a component",
        "A type of HTML tag",
      ],
      correctAnswer: "Properties that are passed into a component",
    },
    {
      question: "How do you pass props to a component?",
      options: [
        "By adding attributes to the component tag",
        "By using the props() function",
        "By importing them from another file",
        "By using state",
      ],
      correctAnswer: "By adding attributes to the component tag",
    },
    {
      question: "Can you change the value of props inside a component?",
      options: [
        "No, props are immutable",
        "Yes, using the setState() method",
        "Yes, by directly modifying the props object",
        "Yes, using the updateProps() function",
      ],
      correctAnswer: "No, props are immutable",
    },
    {
      question: "What is the purpose of defaultProps in React?",
      options: [
        "To provide default values for props",
        "To define the structure of a component",
        "To handle events in a component",
        "To manage routing in a React application",
      ],
      correctAnswer: "To provide default values for props",
    },
    {
      question: "What is a functional component in React?",
      options: [
        "A component defined as a JavaScript function",
        "A component with a specific purpose",
        "A component that manages state",
        "A component created using a class",
      ],
      correctAnswer: "A component defined as a JavaScript function",
    },
    {
      question: "What is a class component in React?",
      options: [
        "A component created using ES6 classes",
        "A component with a specific style",
        "A component that renders HTML elements",
        "A component with predefined props",
      ],
      correctAnswer: "A component created using ES6 classes",
    },
    {
      question:
        "What is the purpose of the render() method in a class component?",
      options: [
        "To return JSX elements",
        "To define the component's behavior",
        "To handle events",
        "To update the component's state",
      ],
      correctAnswer: "To return JSX elements",
    },
    {
      question: "What is JSX?",
      options: [
        "A syntax extension for JavaScript",
        "A new version of HTML",
        "A CSS preprocessor",
        "A type of database",
      ],
      correctAnswer: "A syntax extension for JavaScript",
    },
    {
      question: "Can you use JavaScript expressions inside JSX?",
      options: [
        "Yes, by wrapping them in curly braces",
        "No, JSX does not support JavaScript",
        "Yes, by using special syntax",
        "Yes, by importing JavaScript files",
      ],
      correctAnswer: "Yes, by wrapping them in curly braces",
    },
    {
      question: "What is the purpose of the key attribute in React?",
      options: [
        "To uniquely identify elements in a list",
        "To style components",
        "To handle events",
        "To define default props",
      ],
      correctAnswer: "To uniquely identify elements in a list",
    },
  ],
};
