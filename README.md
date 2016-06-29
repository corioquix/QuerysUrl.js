# QuerysUrl.js
Script for querystring values the href (URL) of the current page.

### How to use ?
Include the querysUrl file
```html
  <script src="js/querysUrl.js"></script>
```

Get the query strings values of href

```js
  //the href return:
  // http://example.com/?id=123&name=Gaby&age=32
  
  //call querysUrl
  
  querysUrl.get(function(e){
    console.log(e); // [id: "123", name: "Gaby", age: "32"]
    //OR
    console.log(e.name); // Gaby
  });
```
