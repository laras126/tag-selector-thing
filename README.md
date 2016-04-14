# Tag Selector Thing

Use this small jQuery plugin to add a tag selecting UI to your static HTML page and to navigate to another static HTML page based on your selections. To use it:

### Step 1: Add the HTML

Paste this HTML where you would like the Tag Selector to go:

    <form class="tag-selector" id="tagForm" action="">

      <h4>Select a spirit</h4>
      <div class="tag-set" id="set1">
        <div class="tag" data-link="rum">Rum</div>
        <div class="tag" data-link="gin">Gin</div>
        <div class="tag" data-link="rye">Rye</div>
      </div>

      <h4>Select a glass</h4>
      <div class="tag-set" id="set2">
        <div class="tag" data-link="rocks">Rocks</div>
        <div class="tag" data-link="coupe">Coupe</div>
        <div class="tag" data-link="collins">Collins</div>
      </div>

      <input type="submit" value="Submit">

    </form>


### Step 2: Add Your Content and Links

Change the content between the content in the tags to your desired tag names e.g. if you are searching restaurant cusines, change "Rum" to "Italian".

Then, and **this is incredibly important**, change the text in the `data-link` attribute to an **ALL LOWERCASE** AND **NO SPACES** word indicating that tag name. For the above example, it would be `data-link="italian"`.


### Step 3: Add the JavaScript

Create a file called `script.js` in the same directory as your `index.html`. Paste this into your `script.js` file:

    $(document).ready(function() {

      $('.tag-set').each(function() {
        $(this).find('.tag').click(function() {

          $(this).parent('.tag-set')
            .find('.tag')
            .removeClass('selected');
          $(this).addClass('selected');

          var set1Selection = $('#set1').find('.selected').attr('data-link'),
              set2Selection = $('#set2').find('.selected').attr('data-link');

          var $tagForm = $('#tagForm'),
              $tag1 = $('#tag1'),
              $tag2 = $('#tag2');

          $tagForm.attr('action', set1Selection + '-' + set2Selection + '.html');

        });
      });

    });


Next, add this code right above the closing `<body>` tag.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="script.js"></script>

Nice!

### Step 4: Add the CSS

Paste this into your primary CSS file (if you are in one of my classes, it is `main.css` in your `css` folder).

    .tag-set {
      border: 1px solid #ccc;
      max-width: 400px;
      margin: 0 auto;
    }

    .tag {
      border-radius: 5px;
      background-color: #124055;
      color: white;
      padding: 1rem 1.5rem;
      display: inline-block;
      margin: 1rem;
    }

    .selected {
      background-color: #AF3236;
    }


You can then style these as you wish! The `.tag` class corresponds to each tag, the `.tag-set` class to each set of tags, and the `.selected` class to the selected tag. Doh!

### Step 5: Create Your Other Files

Create files corresponding to the names in the `data-link` attributes of each tag. This is also **incredibly important**.

In the example, if I am searching for a drink with the `data-link`s "rum" and "coupe", my file for that result will be `rum-coupe.html`. The HTML files in my project might look like this:

    project-folder
      index.html
      rum-coupe.html
      gin-collins.html
      rye-rocks.html
      rum-rocks.html

... etc.

If you aren't sure what the name of your file should be, you can check out [the demo on CodePen](http://codepen.io/laras126/pen/MyVvZg).

### Step 6: Smile!

You did it! I hope!



