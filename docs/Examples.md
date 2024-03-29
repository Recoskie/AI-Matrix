---
layout: default
image:
  path: https://repository-images.githubusercontent.com/24019736/faa49a00-65ec-11ea-8fae-da9b8ce0e7d1
---

<html>
<body onload="setup();">
  <style type="text/css">
    <!--
    input[type=button]
    {
      width: 100%;
      height: 48px;
      clear: both;
    }
    
    textarea.c
    {
      resize: none;
      width: 100%;
      max-height: 40%;
      float: left;
    }

    textarea.o 
    {
      resize: none;
      width: 100%;
      max-height: 20%;
      float: left;
    }

    .cmd:target
    {
      display: block;
      height: 4rem; margin-top: -4rem;
      visibility: hidden;
    }
    -->
  </style>
  <script src="../AI-Mat.js" type="text/javascript"></script>
  <script type="text/javascript">
    var head = document.getElementsByTagName("head")[0], FL64 = document.createElement("script");

    FL64.type = "text/javascript"; FL64.src = "https://recoskie.github.io/Fl64/FL64.js";

    var output = "", loaded = false;

    function setup()
    {
      var list = document.getElementsByTagName("code");

      var html = "", lines = 0, spaces = 0;

      for (var i1 = 0; i1 < list.length; i1++) {
        html = list[i1].innerHTML;

        var t = html.split("\n"); lines = t.length - 1; spaces = html.search(/\S|$/) - 1;

        for (var i2 = 0, html = ""; i2 < lines; i2++) { html += t[i2].slice(spaces, t[i2].length) + "\n"; }

        lines = list[i1].getAttribute("rows") || lines;

        list[i1].innerHTML = "<textarea class=\"c\" rows=\"" + lines + "\" id=\"e" + i1 + "\">" + html + "</textarea></textarea><textarea class=\"o\" rows=\"" + ( ( lines > 16 ) ? 16 : lines ) + "\" id=\"e" + i1 + "o\" readonly>Console output.</textarea><input type=\"button\" onclick=\"runExamp('e" + i1 + "');\" value=\"Run code.\" />";
      }
    }

    function runExamp(id)
    {
      var code = document.getElementById(id).value; output = "";

      try { eval(code); } catch (e) { console.log(e.toString()); }

      document.getElementById(id + "o").value = output;
    }

    console.log = function (msg) { output += msg + "\r\n"; }


    FL64.onload = function () { loaded = true; alert("FL64 is now loaded on this page."); };

    FL64.onerror = function () { alert("Error Unable to load FL 64..."); };

    function loadFL64() { if (!loaded) { head.appendChild(FL64); } else { alert("FL64 is already loaded on this page."); } }
  </script>

  <h1>Indexed contents</h1>

  <table>
    <tr><td>Introduction: <a href="#intro">Link</a></td></tr>
    <tr><td>Creating A set: <a href="#sets">Link</a></td></tr>
    <tr><td>Manipulating A set: <a href="#msets">Link</a></td></tr>
    <tr><td>Solving sequences: <a href="#seq">Link</a></td></tr>
    <tr><td>Error Correction: <a href="#er">Link</a></td></tr>
    <tr><td>FL64 operations: <a href="#FL64">Link</a></td></tr>
    <tr><td>Advanced: <a href="#Advanced">Link</a></td></tr>
  </table>

  <a id="intro" class="cmd"></a><h1>Introduction</h1>

  No matter how complex of a calculation or steps you write to output a result, the results can all be reduced back to what it takes to reproduce the measurements or results without knowing the steps.
  
  <br /><br />
  
  Anything we measure can be reduced back into math calculations or functions. Our brain typically does this sort of thing without us even realizing it.
  
  <br /><br />
  
  Our brain recalls these patterns and sequences from memory, allowing us to build thoughts, ideas, and brain function.
  
  <br /><br />
  
  Reality itself follows the same principles known as the law of <a href="https://www.opencollege.info/law-of-cause-and-effect/" target="_blank">cause and effect</a>.
  
  <br /><br />
  
  Everything reverses to simplicity that forums complexity in cause and effect sequentially known as <a href="https://youtu.be/16W7c0mb-rE" target="_blank">emergence</a>.
  
  <br /><br />
  
  All examples on this page can be modified, so you can change the examples to see the effects.

  <br /><br />

  <a id="sets" class="cmd"></a><h1>Creating A set</h1>

  <br />

  1. Sets are used to setup a set of data you wish to analyze.<br />
  2. There are three ways to create a set.<br />
  3. Sets can also be dynamically created by algorithms. By dynamically creating an array of values.

  <br /><br />

  <h3>Method one</h3>

  <br />

  The preferred method. Use it when possible.

  <br />

  <code>
    //Method one. Creating a set.

    var My_set = new set( 10, 20, 30 );

    console.log( My_set );
  </code>

  <br /><br />

  <h3>Method Two</h3>

  <br />

  Use this method when getting input from a text box, or text file.

  <br />

  <code>
    //Method two. Creating a set.

    var text = "77, 160, 911";

    var My_set = new set( text );

    console.log( My_set );
  </code>

  <br /><br />

  If a invalid input is used. You can use try and catch to warn the user of invalid input.

  <br />

  <code>
    //Method two. Creating a set.

    var text = "10, 20, Z, 30";

    var My_set;

    try { var My_set = new set( text ); }
    catch( e ){ console.log("Bad Input!"); }

    console.log( My_set );
  </code>

  <br /><br />

  If you remove "Z" then there will be no error.

  <br /><br />

  <h3>Dynamically creating data, and sets</h3>

  <br />

  Assuming we have an variable called "o", and we set it 7. Thus then we chose to add 7 by 5 ten times.

  <br />

  <code>
    //Method three. Creating a set.

    var o = 7;

    var values = [];

    for( var i = 0; i < 10; i++)
    {
      o += 5;
      values[i] = o;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );
  </code>

  <br /><br />

  You can skip the explanation of the code if you already understand it.

  <br />

  <h4>
    As long as variable "i" is less than ten the loop runs the same code in the braces (you can change 10 to a larger number).<br />
    Variable "i" is added by one each time the loop starts over. Thus variable "o" is added by 5 each time.<br />
    Thus variable "i" selects "values[i]" which element. Then set it to the current value of variable "o" as "values[i] = o;". As variable "o" adds by 5.
  </h4>

  You can change this code however you like. It is important that you understand the basics as this will be used a lot to demonstrate different types of sets and data.

  <br /><br />

  <a id="msets" class="cmd"></a><h1>Manipulating sets</h1>

  <br />

  A set can be manipulated and indexed the same as an array. More will be added to this section soon. Including examples.

  <br />

  <code>
    //Changing an element.

    var My_set = new set( 10, 20, 30 );

    My_set[1] = 60;

    console.log( My_set );
  </code>

  <br /><br />

  In this example we basically set the second element to 60. Remember array elements start at index 0. So element one is 0 and element two is 1.

  <br /><br />

  <h2>A set also has a length</h2>

  <br />

  The same as array. Thus you can loop from start to end. You can also get creative, and write algorithms that manipulate elements.

  <br />

  <code>
    //Looping through each element in a set.

    var My_set = new set( 10, 20, 30 );

    for( var i = 0; i < My_set.length; i++ )
    {
      console.log(My_set[i]);
    }
  </code>

  <br /><br />

  <h2>Array methods and operations</h2>

  <br />

  Sets also support all of the array methods, and operations. So you can use methods like <h4 style="display:inline-block;">sort()</h4>, <h4 style="display:inline-block;">map()</h4>, <h4 style="display:inline-block;">push()</h4>, <h4 style="display:inline-block;">pop()</h4>, even <h4 style="display:inline-block;">reverse()</h4>.<br />

  <code>
    //Using array methods.

    var My_set = new set( 10, 20, 30 );

    My_set = My_set.reverse();

    console.log(My_set);
  </code>

  <br /><br />

  In this example I use the array <h4 style="display:inline-block;">reverse()</h4> method. However you can change this to what ever you like.<br />

  You can also go to w3 which will list the array methods and also give you examples: <a href="https://www.w3schools.com/js/js_array_methods.asp" target="_blank">Link</a>.
  
  <br /><br />

  <a id="seq" class="cmd"></a><h1>Solving sequences</h1>
  
  <br />

  The main sequence method is <h4 style="display:inline-block;">gensp()</h4>. However the full quantum matrix does not need to be used for sequencing a kind of multi-dimensional set.

  <br /><br />

  <table border="1px">
    <tr><td>Type</td><td>Stationary.</td><td>Rotation.</td></tr>
    <tr><td>Sequential(top half).</td><td>seq();</td><td>seqsp();</td></tr>
    <tr><td>Geometric(bottom half).</td><td>geo();</td><td>geosp();</td></tr>
    <tr><td>Complete.</td><td>gen();</td><td>gensp();</td></tr>
  </table>

  <br />

  <div style="background-color:gray"><br /><br />If you are interested in the forum and shape of the matrix and how it works see document Matrix structure: <a href="https://recoskie.github.io/AI-Matrix/docs/Matrix%20Structure.html" target="_blank">Link</a>.<br /><br /><br /></div>

  <br />

  The basic set Method <h4 style="display:inline-block">seq();</h4> is the most vital sequencing function.

  <br />

  <code>
    //Method one. Sequencing a set.

    var o = 7;

    var values = [];

    for( var i = 0; i < 10; i++)
    {
      o += 5;
      values[i] = o;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.seq();

    console.log( My_seq );
  </code>

  <br /><br />

  First we output the set to the console window. As we did before in creating the set. Then we output the seq operation to the console.<br />
  Which outputs a math calculation that calculates the numbers in our set (7+X*5).<br />
  You can change the starting value 7 to what ever you like. Thus the amount added by in the loop.
  
  <br /><br />

  <h2>Creating and running a function from a analyzed set</h2>

  <code>
    //Creating and running a function.

    var o = 7;

    var values = [];

    for( var i = 0; i < 10; i++)
    {
      o += 5;
      values[i] = o;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.seq();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <br /><br />

  In order to get a usable function we call the method <h4 style="display:inline-block;">getFunc()</h4> on our sequenced variable.<br />
  We then can give our new function each "x" and it should give us the same results. As you can see we are iterating 20 times as long as x is less than 20.<br />
  Remember these examples are completely interactive. Thus you can change anything you like in them.<br />

  <br />

  <h2>2-Dimensional set</h2>

  <code>
    //2-Dimensional set.

    var o = 7;

    var values = [];

    for( var i1 = 0; i1 < 10; i1++)
    {
      o += 5;

      for( var i2 = 0; i2 < i1; i2++ ){ o += 76; }

      values[i1] = o;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.seq();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <br /><br />

  So now we are adding 76 more in the second-dimension. Using a loop inside a loop.

  <br /><br />

  If you change "var o = 7;" to "var o = 0;".<br />
  Then change "o += 5;" to "o += 1;".<br />
  Then change "o += 76;" to "o += 2;"

  <br /><br />

  You will create a set that goes as follows 0,1,4,9,16,25,36,49,64,81,100. Which is x squared.

  <br /><br />

  Basically you can create any 2-dimensional set and convert back to a math function.

  <br /><br />

  <h2>3-dimensional set</h2>

  <code>
    //3-Dimensional set.

    var o = 7;

    var values = [];

    for( var i1 = 0; i1 < 10; i1++)
    {
      o += 5;

      for( var i2 = 0; i2 < i1; i2++ )
      {
        o += 76;

        for( var i3 = 0; i3 < i2; i3++ ) { o += 21; }
      }

      values[i1] = o;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.seq();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <!--End Example #11-->

  <br /><br />

  So now we are adding 21 more in the third-dimension.

  <br /><br />

  If you change "var o = 7;" to "var o = 0;".<br />
  Then change "o += 5;" to "o += 1;".<br />
  Then change "o += 76;" to "o += 6;".<br />
  Then change "o += 21;" to "o += 6;".

  <br /><br />

  You will create a set that goes as follows 0,1,8,27,64,125,216,343,512,729,1000. Which is x cubed.

  <br /><br />

  Basically you can create any 3-dimensional set and convert back to a math function.

  <br /><br />

  <h2>4-dimensional set</h2>

  <code>
    //4-Dimensional set.

    var o = 7;

    var values = [];

    for( var i1 = 0; i1 < 10; i1++)
    {
      o += 5;

      for( var i2 = 0; i2 < i1; i2++ )
      {
        o += 76;

        for( var i3 = 0; i3 < i2; i3++ )
        {
          o += 21;

          for( var i4 = 0; i4 < i3; i4++ ) { o += 711; }
        }
      }

      values[i1] = o;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.seq();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <!--End Example #12-->

  <br /><br />

  So now we are adding 711 more in the fourth-dimension.

  <br /><br />

  If you change "var o = 7;" to "var o = 0;".<br />
  Then change "o += 5;" to "o += 1;".<br />
  Then change "o += 76;" to "o += 14;".<br />
  Then change "o += 21;" to "o += 36;".<br />
  Then change "o += 21;" to "o += 24;".

  <br /><br />

  You will create a set that goes as follows 0,1,16,81,256,625,1296,2401,4096,6561,10000. Which is x to the power of 4.

  <br /><br />

  Basically you can create any 4-dimensional set and convert back to a math function.

  <br /><br />

  <h2>7-dimensional data randomized</h2>
  
  <br />

  I do not like using the word Random. As random is not rally random.

  <br /><br />

  There is no end in how high of dimension you can go using this analysis tool.

  <br />

  <code>
    //Random 7-Dimensional set.

    var o = Math.round(Math.random() * 1000);
    var d1 = Math.round(Math.random() * 1000);
    var d2 = Math.round(Math.random() * 1000);
    var d3 = Math.round(Math.random() * 1000);
    var d4 = Math.round(Math.random() * 1000);
    var d5 = Math.round(Math.random() * 1000);
    var d6 = Math.round(Math.random() * 1000);
    var d7 = Math.round(Math.random() * 1000);

    var values = [];

    for( var i1 = 0; i1 < 10; i1++)
    {
      o += d1;

      for( var i2 = 0; i2 < i1; i2++ )
      {
        o += d2;

        for( var i3 = 0; i3 < i2; i3++ )
        {
          o += d3;

          for( var i4 = 0; i4 < i3; i4++ )
          {
            o += d4;

            for( var i5 = 0; i5 < i4; i5++ )
            {
              o += d5;

              for( var i6 = 0; i6 < i5; i6++ )
              {
                o += d6;

                for( var i7 = 0; i7 < i6; i7++ )
                {
                  o += d7;
                }
              }
            }
          }
        }
      }

      values[i1] = o;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.seq();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <br /><br />

  This time we try our best to confuse it. However no matter how many random sets we throw at it each time we run the code. They all line up using the sequence method.<br />
  Basically this AI matrix is a fractal, of all dimensions unified. For example if you ware given a set of random values.<br />
  You can actually sequence all values in all dimensions into a formula instantly back to what it was a result of.

  <br /><br />

  There is only one small limitation to the quantum matrix.<br />
  The set we are sequencing is 10 values in length.

  <br /><br />

  If you change "i1 < 10" to "i1 < 7".

  <br /><br />

  You then will end up with a set of 7 numbers in length.<br />
  Thus 7 values can only line up 6-dimensions in the quantum matrix.<br />
  Meaning the 7th-dimension is invisible without the 8th value to line it up in the matrix.

  <br /><br />

  Thus if you decease the set size to 3 in length. Then you can only line up till the second-dimension in the matrix.<br />
  You also know for certain that the data was solved if you have fewer to the power of dimensions than you did numbers.

  <br /><br />

  <h1>Fibonacci</h1>

  <br />
  
  In this example we create the Fibonacci, and solve it.<br />
  However to do this the matrix has to be rotated backwards, and forwards on both sides.<br />
  In order to do this you only have to call the method <h4 style="display:inline-block">seqsp()</h4>.

  <br />

  <code>
    //Fibonacci seq.

    var o1 = 0, o2 = 1;

    var values = [];

    for( var i = 0; i < 10; i++)
    {
      o2 = o1 + ( o1 = o2 );

      values[i] = o1;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.seqsp();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <br /><br />

  <h2>Multiple Fibonacci sequences</h2>

  <br />

  You can actually add together as many Fibonacci sequences together as you like, and calculate all using only one Fibonacci sequence.

  <br />

  <code>
    //Multiple Fibonacci seq.

    var o1 = 98, o2 = 11;
    var o3 = 7, o4 = -393;
    var o5 = 99, o6 = 72;

    var values = [];

    for( var i = 0; i < 10; i++)
    {
      o2 = o1 + ( o1 = o2 );
      o4 = o3 + ( o3 = o4 );
      o6 = o5 + ( o5 = o6 );

      values[i] = o1 + o4 + o6;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.seqsp();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <br /><br />

  <h2>7-Dimensional data plus multiple Fibonacci</h2>

  <code>
    //Random 7-Dimensional set. Plus Multiple random Fibonacci.

    var o = Math.round(Math.random() * 1000);
    var d1 = Math.round(Math.random() * 1000);
    var d2 = Math.round(Math.random() * 1000);
    var d3 = Math.round(Math.random() * 1000);
    var d4 = Math.round(Math.random() * 1000);
    var d5 = Math.round(Math.random() * 1000);
    var d6 = Math.round(Math.random() * 1000);
    var d7 = Math.round(Math.random() * 1000);

    var o1 = Math.round(Math.random() * 1000), o2 = Math.round(Math.random() * 1000);
    var o3 = Math.round(Math.random() * 1000), o4 = Math.round(Math.random() * 1000);
    var o5 = Math.round(Math.random() * 1000), o6 = Math.round(Math.random() * 1000);

    var values = [];

    for( var i1 = 0; i1 < 12; i1++)
    {
      o2 = o1 + ( o1 = o2 );
      o4 = o3 + ( o3 = o4 );
      o6 = o5 + ( o5 = o6 );

      o += d1;

      for( var i2 = 0; i2 < i1; i2++ )
      {
        o += d2;

        for( var i3 = 0; i3 < i2; i3++ )
        {
          o += d3;

          for( var i4 = 0; i4 < i3; i4++ )
          {
            o += d4;

            for( var i5 = 0; i5 < i4; i5++ )
            {
              o += d5;

              for( var i6 = 0; i6 < i5; i6++ )
              {
                o += d6;

                for( var i7 = 0; i7 < i6; i7++ )
                {
                  o += d7;
                }
              }
            }
          }
        }
      }

      values[i1] = o + o1 + o4 + o6;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.seqsp();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>
  
  <br /><br />

  After seeing how perfectly it solves all things in the set you are probably wondering why I did not include the matrix rotation in the main <h4 style="display:inline-block;">seq()</h4> function.<br />
  The reason why I separated them is that it takes two more values in a set to line the set up using the rotation.<br />
  So say we have 8 numbers to analyze. The data is 7-Dimensional. We have just enough data to line up all 7-Dimensional using <h4 style="display:inline-block;">seq()</h4>.<br />
  So lets say it is mixed with a Fibonacci sequence and we need to rotate the matrix to solve it. Then 8 numbers are not enough to solve all 7-dimensions mixed with the Fibonacci sequence.<br />
  We need two more numbers for the rotated version of the matrix. So for 7-dimensional data mixed with Fibonacci. We need a minimum of 8+2=10 numbers in a set to solve everything in alignment in the matrix.<br />
  So if you change "i1 < 12" to say "i1 < 9". This will make the set 9 in length. Thus you will only be able to line up till 6th-dimension using <h4 style="display:inline-block;">seqsp()</h4>.
  
  <br />

  <a id="geo" class="cmd"></a><h1>Geometric sequences</h1>

  <br />
  
  Flipping the matrix upside down allows you to solve all geometric sequences. To do this you call the <h4 style="display:inline-block;">geo()</h4> function.

  <br />

  <code>
    //Geometric sequence.

    var o = Math.round(Math.random()*1000);

    var g1 = Math.round(Math.random()*1000);
    var g2 = Math.round(Math.random()*1000);
    var g3 = Math.round(Math.random()*1000);

    var values = [];

    for( var i = 0; i < 12; i++)
    {
      g1 = g1 * 2;
      g2 = g2 * 3;
      g3 = g3 * 4;

      values[i] = o + g1 + g2 + g3;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.geo();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <br /><br />

  Geometric sequences are for things that are multiplying per value. It allows you to solve all things multiplying per value in multiple dimensions.<br />
  It is also limited to the max set of numbers in the set that can be aligned per dimension. In order to line up a 10-dimensional value you need a minimum of 11 values in a set. Basically the same as the <h4 style="display:inline-block;">seq()</h4> method.

  <br /><br />

  <h2>Geo Sequence Plus Fibonacci</h2>

  <br />

  In order to solve the Fibonacci sequence mixed with the geometric sequences you have to rotate the matrix while it's upside down. To do this just use the method <h4 style="display:inline-block;">geosp()</h4>.

  <br />

  <code>
    //Geometric sequence Plus multiple Fibonacci.

    var o = Math.round(Math.random()*1000);

    var g1 = Math.round(Math.random()*1000);
    var g2 = Math.round(Math.random()*1000);
    var g3 = Math.round(Math.random()*1000);

    var o1 = Math.round(Math.random() * 1000), o2 = Math.round(Math.random() * 1000);
    var o3 = Math.round(Math.random() * 1000), o4 = Math.round(Math.random() * 1000);
    var o5 = Math.round(Math.random() * 1000), o6 = Math.round(Math.random() * 1000);

    var values = [];

    for( var i = 0; i < 12; i++)
    {
      o2 = o1 + ( o1 = o2 );
      o4 = o3 + ( o3 = o4 );
      o6 = o5 + ( o5 = o6 );

      g1 = g1 * 2;
      g2 = g2 * 3;
      g3 = g3 * 4;

      values[i] = o + g1 + g2 + g3 + o1 + o3 + o5;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.geosp();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <br /><br />

  The highest geometric dimension is 4 in this example so you need a minimum of 5 values to line it up.<br />
  Thus with rotating the matrix for the Fibonacci sequence you actually need 5+2=7 values in the set at minimum.<br />
  This is why method <h4 style="display:inline-block;">geo()</h4>, and <h4 style="display:inline-block;">geosp()</h4> are also separated.
  
  <br /><br />

  <h1>Solve All Patterns</h1>

  <br />
  
  Every sequencing method has it's place and possible use. However there is one sequencing method that solves all patterns <h4 style="display:inline-block;">gen();</h4>.

  <code>
    //Sequence everything.

    var o = Math.round(Math.random()*1000);

    var g1 = Math.round(Math.random()*1000);
    var g2 = Math.round(Math.random()*1000);
    var g3 = Math.round(Math.random()*1000);

    var d1 = Math.round(Math.random() * 1000);
    var d2 = Math.round(Math.random() * 1000);
    var d3 = Math.round(Math.random() * 1000);
    var d4 = Math.round(Math.random() * 1000);
    var d5 = Math.round(Math.random() * 1000);
    var d6 = Math.round(Math.random() * 1000);
    var d7 = Math.round(Math.random() * 1000);

    var values = [];

    for( var i1 = 0; i1 < 15; i1++)
    {
      g1 = g1 * 2;
      g2 = g2 * 3;
      g3 = g3 * 4;

      o += d1;

      for( var i2 = 0; i2 < i1; i2++ )
      {
        o += d2;

        for( var i3 = 0; i3 < i2; i3++ )
        {
          o += d3;

          for( var i4 = 0; i4 < i3; i4++ )
          {
            o += d4;

            for( var i5 = 0; i5 < i4; i5++ )
            {
              o += d5;

              for( var i6 = 0; i6 < i5; i6++ )
              {
                o += d6;

                for( var i7 = 0; i7 < i6; i7++ )
                {
                  o += d7;
                }
              }
            }
          }
        }
      }

      values[i1] = o + g1 + g2 + g3;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.gen();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <br /><br />

  <h4>The only time you will want to use this method is when you know the data is going to be all over the place and you want a reliable method that solves all patterns.</h4>

  <br />

  In order for this method to work. It splits the matrix between upside down, and right side up.<br />
  This means if the highest dimensional sequence in a set is 7, and the highest geometric sequence is 3-dimensional like in the example.<br />
  You will need 7+7=14 numbers from the set at minim to solve the 7-dimensional sequence. Even though the geometric only needs three-dimensions in alignment.<br />
  This means your sets must be twice as long than highest dimension. Weather it be geo, or sequential to line up dimensions properly.

  <br /><br />

  <a id="all" class="cmd"></a><h2>Solve All Patterns plus multiple Fibonacci sequences</h2>

  <br />
  
  The final solve method encompassing all patterns in existence <h4 style="display:inline-block;">gensp();</h4>.
  This solves both geo, sequential dimensional values, and Fibonacci sequences.

  <br />

  <code>
    //Sequence everything. Plus multiple Fibonacci sequences.

    var o = Math.round(Math.random() * 1000);

    var g1 = Math.round(Math.random() * 1000);
    var g2 = Math.round(Math.random() * 1000);
    var g3 = Math.round(Math.random() * 1000);

    var o1 = Math.round(Math.random() * 1000), o2 = Math.round(Math.random() * 1000);
    var o3 = Math.round(Math.random() * 1000), o4 = Math.round(Math.random() * 1000);
    var o5 = Math.round(Math.random() * 1000), o6 = Math.round(Math.random() * 1000);
    var o7 = Math.round(Math.random() * 1000), o8 = Math.round(Math.random() * 1000);
    var o9 = Math.round(Math.random() * 1000), o10 = Math.round(Math.random() * 1000);

    var d1 = Math.round(Math.random() * 1000);
    var d2 = Math.round(Math.random() * 1000);
    var d3 = Math.round(Math.random() * 1000);
    var d4 = Math.round(Math.random() * 1000);
    var d5 = Math.round(Math.random() * 1000);
    var d6 = Math.round(Math.random() * 1000);
    var d7 = Math.round(Math.random() * 1000);

    var values = [];

    for( var i1 = 0; i1 < 16; i1++)
    {
      o2 = o1 + ( o1 = o2 );
      o4 = o3 + ( o3 = o4 );
      o6 = o5 + ( o5 = o6 );
      o8 = o7 + ( o7 = o8 );
      o10 = o9 + ( o9 = o10 );

      g1 = g1 * 2;
      g2 = g2 * 3;
      g3 = g3 * 4;

      o += d1;

      for( var i2 = 0; i2 < i1; i2++ )
      {
        o += d2;

        for( var i3 = 0; i3 < i2; i3++ )
        {
          o += d3;

          for( var i4 = 0; i4 < i3; i4++ )
          {
            o += d4;

            for( var i5 = 0; i5 < i4; i5++ )
            {
              o += d5;

              for( var i6 = 0; i6 < i5; i6++ )
              {
                o += d6;

                for( var i7 = 0; i7 < i6; i7++ )
                {
                  o += d7;
                }
              }
            }
          }
        }
      }

      values[i1] = o + g1 + g2 + g3 + o1 + o3 + o5 + o7 + o9;
    }

    //Create the set using the values.

    var My_set = new set( values );

    console.log( My_set );

    //Sequence the set.

    var My_seq = My_set.gensp();

    console.log( My_seq );

    //Get the function of a analyzed set.

    var My_func = My_seq.getFunc();

    console.log( My_func );

    //Calculate values using the function.

    for( var x = 0; x < 20; x++)
    {
      console.log( My_func( x ) );
    }
  </code>

  <br /><br />

  The highest dimensional sequence is 7. Thus the heights dimensional geometric sequence is 3. Just like the regular <h4 style="display:inline-block;">gen();</h4> you need a minim of 7+7=14 values to equally line up the dimensions across the set.<br />
  Plus an additional 14+2=16, because of the rotation. Although that is the minimum amount of values needed to line up the produced set.<br />
  You can make the set longer than 16 values. It will still solve out to the same function. In many cases you are not going to know the minim number of values to line the set up.<br />
  This method takes the most values in order for it to make sense of the data. In majority of cases all things are sequential in nature, so <h4 style="display:inline-block;">seq();</h4> is good enough for 90% of things. Thus it requires 48% less data to make sense of the data.<br />
  I am not going to pretend I know what you want to analyze. Or if you are planing on making it analyze all things. Thus make a super AI, or bot.

  <br /><br />

  <a id="er" class="cmd"></a><h1>Error Correction</h1>

  <br />

  In all of the sequencing examples. You have probably noticed how values are 0.00000000001 off. This is because floating point numbers have a accuracy limit.

  <br /><br />

  See the following on floating point values: <a href="https://docs.python.org/2/tutorial/floatingpoint.html" target="_blank">link.</a>

  <br /><br />

  The more operations you do with floating point numbers the higher the error is. Since the quantum matrix in the tool only lines up values and does a single calculation.<br />
  The errors then are extremely small. If the errors annoy you. You can actually filter them out. There are a few different types of error correction you can use that are built into the matrix.

  <br /><br />

  In order to do real dynamic error correction the Floating point number library (FL64) has to be loaded on this page.

  What is FL64: <a href="https://github.com/Recoskie/Fl64">link</a>

  <br /><br />

  <input style="width:224px;height:68px;" type="button" value="Load FL64" onclick="loadFL64();" />

  <br /><br />

  With the FL64 library loaded It will error correct the floating point values directly.<br />
  Without the FL64 library loaded. The values outside EPSILON (Relative 2^-53) will be removed.

  <br /><br />

  <h2>The following code Enables error correction</h2>

  <code>
    //Enable error correction.

    AI_Mat.ErrCorrect = true;

    alert("Error correction Is now Enabled.");
  </code>

  <br /><br />

  <h2>The Following code will disable error correction</h2>

  <code>
    //Disable error correction.

    AI_Mat.ErrCorrect = false;

    alert("Error correction Is now disabled.");
  </code>

  <br /><br />

  Thus by running the sequence examples again you will see the big difference it makes.

  click the link to go to a earlier sequence example: <a href="#all">Link</a>.

  <br /><br />

  Running the examples over again will give you better results now. Especially if you loaded FL64.

  <br /><br />

  <a id="FL64" class="cmd"></a><h1>FL64 set/array operations</h1>

  <br />

  In order to run the code in these examples you must load the FL64 library into this page.

  What is FL64: <a href="https://github.com/Recoskie/Fl64">link</a>.

  <br /><br />

  <input style="width:224px;height:68px;" type="button" value="Load FL64" onclick="loadFL64();" />.

  <br /><br />

  All Of the FL64 operations can be used with all numbers in a set rather than one value at a time.

  In the example bellow we call the method <h4 style="display:inline-block;">getFract</h4> on a single floating point value.

  Then we do the same operation with a set. Except the operation then applies to all values in the set.

  <br />

  <code>
    //Convert one floating point value to a floating point number.

    var My_float = 13.02415.getFract();

    console.log( My_float.toString() );

    //Now lets do the same operation with a set.

    var My_set = new set( 7.11, 3.14, 0.1414, 1.6080 ).getFract();

    console.log( My_set );
  </code>

  <br /><br />

  As you can see we have the fraction of our single floating point value then the operation applied to a set.

  <br /><br />

  You do not have to call the methods on creation of a set, or number. You can septate operations into multiple lines.

  <br />

  <code>
    //Convert one floating point value to a floating point number.

    var My_float = 13.02415;

    My_float = My_float.bits();

    console.log( My_float.toString() );

    //Now convert the floating point value to binary.

    My_float = My_float.getFract();

    console.log( My_float );

    //Now lets do the same operation with a set.

    var My_set = new set( 7.11, 3.14, 0.1414, 1.6080 );

    My_set = My_set.bits();

    console.log( My_set.toString() );

    My_set = My_set.getFract();

    console.log( My_set );
  </code>

  <br /><br />

  As you can see the first two lines is the single floating point value converted to it's binary representation then to a fraction. Then the next two outputs are the same operations applied to the set.

  <br /><br />

  All operations in the FL64 library can be applied to a single floating point value, or to a set of values in a set, or array.

  <br /><br />

  <a id="Advanced" class="cmd"></a><h1>Advanced</h1>

  <br />

  Although all of this is the basics. Thus I have only touched the surface of what you can do with these tools.

  <br /><br />

  There is so much more you can do with these new methods, and operations. That I have created, and already played around with.

  <br /><br />

  Although the AI Q-matrix is the ultimate high speed pattern solving matrix, for all patterns that can ever be arithmetically created, or measured in nature.

  <br /><br />

  It also operates as a problem solving matrix. As you can substitute data with variables, and solve the data as a set again in a feed back loop.

  <br /><br />

  You can also combine the sequence method in splices over a set. In the feed back loop. Thus it can also solve problems, or observe results.

  <br /><br />

  As long as you have a data base, for it. You don't have to worry about it hitting a limit in growth.

  <br /><br />

  So from the developer point of view. You could build a super AI, or bot. That rally does solve problems, and learns dynamically, and with observation.

  <br /><br />

  An intelligence system that no one has ever seen the likes of before.

  <br /><br />

  <h2>However in general use</h2>

  <br />

  You can program systems that take in information and analyze it. Such things can be image processing. Making sense of graphs.

  <br /><br />

  You don't need to build a full fledged intelligence system, for such tasks.

  <br /><br />

  Or can use it to solve individual problems you set up in sets with substitution.

  <br /><br />

  You can also set it up with basic parameters and have it write the best solution.

  <br /><br />

  It all depends on what you want to do.
</body>
</html>