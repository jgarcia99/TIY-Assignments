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
* *content:* Flow content, and if the `<ol>` element's children include at least one <li> element, palpable content.
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
###6. `<div>` -- Document Division 
* *type:* block-level
* *content:* Flow Content, Palable content.
* *support:* all browsers.
* *example:* 
```
<div>
  <p>Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!</p>
</div>
```
###7. `<pre>` -- Preformatted Text
* *type:*  block-level
* *content:* Flow Content, Palable Content.
* *support:* all browsers.
* *example:*
```
<pre>
body {
  color:red;
}
</pre>
```
###8. `<dd>` -- Definition Description
* *type:* block-level
* *content:* None
* *support:* all browsers.
* *example:*
```
<dl>
  <dt>Firefox</dt>
  <dd>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.</dd>

  <!-- other terms and definitions -->
</dl>
```
###9. `<figcaption>` -- Figure Caption
* *type:* block-level
* *content:* None
* *support:* all browsers
* *example:* 
```
<!-- Figure with figcaption -->
<figure>
	<img src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png" alt="An awesome picture">	
	<figcaption>Caption for the awesome picture</figcaption>
</figure>
<p></p>
```
###10. `<article>` -- Article Content
* *type:* block-level
* *content:* Flow content, sectioning content, palable content. 
* *support:* all browsers
* *example:*
```
<article>
  <h4>A really awesome article</h4>
  <p>Lots of awesome text.</p>
</article>
```
###11. `<address>` -- Contact Information
* *type:* block-level
* *content:* Flow content, palable content
* *support:* all browsers
* *example:* 
```
<address>
    You can contact author at <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br>
    If you see any bugs, please <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br>
    You may also want to visit us:<br>
    Mozilla Foundation<br>
    1981 Landings Drive<br>
    Building K<br>
    Mountain View, CA 94043-0801<br>
    USA
  </address>
  ```
  
###12. `<audio>` -- Audio Player
  * *type:* block-level
  * *content:* Flow content, phrasing content, embedded content. If it has a controls attribute: interactive content and palpable content.
  * *support:* all browsers
  * *example:* 
  ```
  <!-- Simple audio playback -->
<audio src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" autoplay>
  Your browser does not support the <code>audio</code> element.
</audio>
```
###13. `<blockquote>` -- Long ("block") quotation
* *type:* block-level
* *content:* Flow content, sectioning root, palpable content
* *support:* all browsers 
* *example:* 
```
<blockquote cite="http://developer.mozilla.org">
  <p>This is a quotation taken from the Mozilla Developer Center.</p>
</blockquote>
```
###14. `<canvas>` -- Drawing Canvas
* *type:* block-level
* *content:* Flow content, phrasing content, embedded content, palpable content
* *support:* all browsers
* *example:* 
```
<canvas id="canvas" width="300" height="300">
  Sorry, your browser doesn't support the &lt;canvas&gt; element.
</canvas>
```
###15. `<fieldset>` -- Fieldset Label
* *type:* block-level
* *content:* Flow content, sectioning root, listed, form-associated element, palpable content.
* *support:* all browsers
* *example:*
```
<form action="test.php" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio"> <label for="radio">Click me</label>
  </fieldset>
</form>
```
###16. `<noscript>` -- Content to use if scripting is not supported or turned off
* *type:* block-level
* *content:* Metadata content, flow content, phrasing content
* *support:* all browsers
* *example:* 
```
<noscript>
  <!-- anchor linking to external file -->
  <a href="http://www.mozilla.com/">External Link</a>
</noscript>
<p>Rocks!</p>
```
###17. `<table>` -- Table
* *type:* block-level
* *content:* Flow Content
* *support:* all browsers
* *example:*
```
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```
###18. `<output>` -- Form output
* *type:* block-level
* *content:* Flow content, phrasing content, listed, labelable, resettable  form-associated element, palpable content.
* *support:* all browsers
* *example:*
```
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
</form>
```
###19. `<tfoot>` -- Table Footer
* *type:* block-level
* *content:* none
* *support:* all browsers
* *example:*
```
<p>Table with thead, tfoot, and tbody</p>
<table>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
</table>
```
###20. `<hr>` -- Horizontal rule (dividing line).
* *type:* block level
* *content:* Flow content
* *support:* all browsers
* *example:*
```
<p>This is the first paragraph of text. This is the first paragraph of text.
  This is the first paragraph of text. This is the first paragraph of text.</p>

<hr>

<p>This is second paragraph of text. This is second paragraph of text.
  This is second paragraph of text. This is second paragraph of text.</p>
  ```

