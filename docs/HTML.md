###1. `<form>` -- Form
* *type:* block-level  
* *content:*  flow content, palable content.
* *support:*  all browsers.
* *example:* 
```
<form action="">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name">
  <input type="submit" value="Save">
</form>
````

###2. `<section>` -- Section
* *type:* block-level 
* *content:* flow content, sectioning content, palable content. 
* *support:* all browsers.
* *example:*
```
section>
  <h1>Heading</h1>
  <p>Bunch of awesome content</p>
</section>
```

###3. `<ol>` -- Ordered List
* *type:* block-level
* *content:* Flow content, and if the <ol> element's children include at least one <li> element, palpable content.
* *support:* all browsers.
* *example:*
```
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```

###4. `<ul>` -- Unordered List
* *type:* block-level
* *content:* Flow Content
* *support:* all browsers.
* *example:*
```
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```
###5. `<aside>` -- Aside Content
* *type:* block-level
* *content:* Flow Content
* *support:* all browsers
* example:*
```
<article>
  <p>
    The Disney movie <em>The Little Mermaid</em> was
    first released to theatres in 1989.
  </p>
  <aside>
    The movie earned $87 million during its initial release.
  </aside>
  <p>
    More info about the movie...
  </p>
</article>
```
###6. `<div> -- Document Division 
* *type:* block-level
* *content:* Flow Content, Palable content.
* *support:* all browsers.
* *example:* 
```
<div>
  <p>Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!</p>
</div>
```

