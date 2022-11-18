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
  <script type="text/javascript">
    var output = "";

    function setup()
    {
      var list = document.getElementsByTagName("code");

      var html = "", lines = 0, spaces = 0;

      for (var i1 = 0; i1 < list.length; i1++)
      {
        html = list[i1].innerHTML;

        var t = html.split("\n"); lines = t.length - 1; spaces = html.search(/\S|$/) - 1;

        for (var i2 = 0, html = ""; i2 < lines; i2++) { html += t[i2].slice(spaces, t[i2].length) + "\n"; }

        lines = list[i1].getAttribute("rows") || lines;

        list[i1].innerHTML = "<textarea class=\"c\" rows=\"" + lines + "\" id=\"e" + i1 + "\">" + html + "</textarea></textarea><textarea class=\"o\" rows=\"" + ( ( lines > 16 ) ? 16 : lines ) + "\" id=\"e" + i1 + "o\" readonly>Console output.</textarea><input type=\"button\" onclick=\"runExamp('e" + i1 + "');\" value=\"Run code.\" />";
      }
    }

    function runExamp(id)
    {
      var code = document.getElementById(id).value;

      try { eval(code); } catch (e) { console.log(e.toString()); }

      document.getElementById(id + "o").value = output; output = "";
    }

    console.log = function (msg) { output += msg + "\r\n"; }
  </script>

  <h1>Indexed contents.</h1>

  <table>
    <tr><td>The basic algorithm: <a href="#basic">Link</a></td></tr>
    <tr><td>Decoding dimensional iteration: <a href="#decoding">Link</a></td></tr>
    <tr><td>The complete matrix: <a href="#geometry">Link</a></td></tr>
  </table>

  <h3>Note that this is a big simplification of the Q-matrix.</h3>

  <h3>Note that all examples on this page can be modified, so you can change the examples to see the effects.</h3> 

  <a id="basic" class="cmd"></a><h1>Solving a Dimensional Set.</h1>

  Lets start with a one dimensional set, and show how it builds, and solves. Starting from here will help you see how it works.

  <br /><br />

  A one dimensional set basically is counting by one per number, or by two per number.

  <br /><br />

  So lets build a one dimensional set that is 7 more per number.

  <br /><br />

  <code>
    var data = [];

    var end = 8;

    var start = 1;

    var per1 = 7;

    for (var i1 = 0; i1 < end; i1++)
    {
      data[i1] = start;

      for (var i2 = 0; i2 < i1; i2++)
      {
        data[i1] += per1;
      }
    }

    console.log(data);
  </code>

  <br /><br />

  This simple little code creates a set with the starting value of 1. Which you can change to anything by changing <h3>var start = 1;</h3> from 1 to any number you wish.

  <br /><br />

  The second loop adds per 7 more to each value. Which you can change to anything you like by changing <h3>var per1 = 7;</h3> from 7 to any number you like.

  <br /><br />

  Now you can pick and choose any numbers you like to create the one dimensional set.

  <br /><br />

  Lastly the <h3>var end = 8;</h3> can be changed to a bigger number than 8. If you want to make the set longer.

  <br /><br />

  The starting amount is always the first digit in the set. This is before we calculate the difference between the numbers.

  <br /><br />

  The starting amount is very important as you could start anywhere. What ever you set the starting value to will be the first number in the set.

  <br /><br />

  In the case of the example I gave you. We ended up with the following set starting with 1, and adding by per 7.

  <br /><br />

  1,8,15,22,29,36,43,50

  <br /><br />

  The starting amount is 1. This solves what the starting amount is.

  <br /><br />

  Then all you have to do is subtract the next number by the previous number.
  
  <br /><br />
  
  The next number after 1 is 8 so 8-1=7.
  
  <br /><br />

  You then move to the next number in the set which is 8. The number after 8 is 15. So 15-8=7.

  <br /><br />
  
  You do this with all numbers in the set. To solve the first dimension. As it solves the difference between the numbers per iteration.

  <br /><br />

  8-1=7<br />
  15-8=7<br />
  22-15=7<br />
  29-22=7<br />
  36-29=7<br />
  43-36=7<br />
  50-43=7

  <br /><br />

  This gives us how much is added per number. The difference is the same across all numbers making a set of 7,7,7,7,7,7,7 with a one dimensional set.

  <br /><br />

  Subtracting the set of 7,7,7,7,7,7,7 the same way will give a set of 0,0,0,0,0,0. Which means there is nothing left in the set per number.

  <h1>Solving a 2 dimensional set.</h1>

  So in the previous example it is quite easy to see that subtracting the next number into the previous number finds the first dimension per added amount.

  <br /><br />

  So I will show you what happens when you add in another dimension.

  <br /><br />

  <code>
    var data = [];

    var end = 8;

    var start = 0;

    var per1 = 1;

    var per2 = 2;

    for( var i1 = 0; i1 < end; i1++ )
    {
      data[i1] = start;

      for( var i2 = 0; i2 < i1; i2++ )
      {
        data[i1] += per1;

        for( var i3 = 0; i3 < i2; i3++ )
        {
          data[i1] += per2;
        }
      }
    }

    console.log(data);
  </code>

  <br /><br />

  In this example we create a square using a 2D set. Which is the calculation X<sup>2</sup>.

  <br /><br />

  Our set is 0,1,4,9,16,25,36,49.

  So the first number in the set is 0. Which means the starting value is 0. <h3>var start = 0;</h3>

  Subtracting the values into each other gives us.

  <br /><br />

  1-0=1<br />
  4-1=3<br />
  9-4=5<br />
  16-9=7<br />
  25-16=9<br />
  36-25=11<br />
  49-36=13

  <br /><br />

  This gives us the set 1,3,5,7,9,11,13. The first result will be the first dimension which is 1. <h3>var per1 = 1;</h3>

  Subtracting the numbers 1,3,5,7,9,11,13. Going next number by previous number again.

  <br /><br />

  3-1=2<br />
  5-3=2<br />
  7-5=2<br />
  9-7=2<br />
  11-9=2<br />
  13-11=2

  <br /><br />

  This solves the difference in the second dimension. Which is 2 more. <h3>var per2 = 2;</h3> Doing the subtraction of 2,2,2,2,2,2 gives us 0,0,0,0,0 things left.

  <br /><br />

  The first number in each subtraction is what the dimensional value is per iteration.

  <br /><br />

  Also the starting value is very important as you could start anywhere in the square sequence set. For example you could start at <h3>var start=16;</h3> with <h3>var per1=9;</h3> and <h3>var per2=2;</h3>

  This continues the pattern from 16 onward as 16,25,36,49,64,81,100,121. So the starting amount is then 16. Thus you can solve each iteration by subtracting the next number into previous and writing down the first number each time till left with 0.

  <br /><br />

  You can do the math your self and change per1, and per2 to what ever you like.

  <br /><br />

  The first number without any subtraction will be the starting value.<br />
  The first number after the subtraction of all numbers will be per1.<br />
  The first number after the subtraction of all numbers again will be per2.<br />
  The first number after the subtraction of all numbers again would be per3. Except we end up with 0,0,0,0,0 things left.

  <br /><br />

  You loose one number with each subtraction into all numbers, because there is no next digit to subtract the last digit into in the set.
  
  <br /><br />
  
  So to solve a 5 dimensional pattern per iteration requires at least 6 numbers in a set including the starting value.

  <h1>5 Dimensional set with subtraction.</h1>

  So now you know you can solve how much is added per dimension with each subtraction into all numbers.

  <br /><br />

  With the first number being the difference. After each subtraction into all numbers.

  <br /><br />

  In this code. I will make it that you can create any 5D set you like. At the end of the code. Each number is subtract into the previous.

  <br /><br />

  <code>
    var data = [];

    var end = 8;

    var start = 7;

    var per1 = 3;

    var per2 = 1;

    var per3 = -9;

    var per4 = 12;

    var per5 = 13;

    for( var i1 = 0; i1 < end; i1++ )
    {
      data[i1] = start;

      for( var i2 = 0; i2 < i1; i2++ )
      {
        data[i1] += per1;

        for( var i3 = 0; i3 < i2; i3++ )
        {
          data[i1] += per2;

          for( var i4 = 0; i4 < i3; i4++ )
          {
            data[i1] += per3;

            for( var i5 = 0; i5 < i4; i5++ )
            {
              data[i1] += per4;

              for( var i6 = 0; i6 < i5; i6++ )
              {
                data[i1] += per5;
              }
            }
          }
        }
      }
    }

    console.log(data);

    var s1 = data[0], s2 = data[1], s3 = data[2], s4 = data[3], s5 = data[4], s6 = data[5], s7 = data[6], s8 = data[7];

    //The starting value.

    console.log( [s1,s2,s3,s4,s5,s6,s7,s8] );

    //Subtract next number to previous number.

    s1 = s2 - s1; s2 = s3 - s2; s3 = s4 - s3; s4 = s5 - s4; s5 = s6 - s5; s6 = s7 - s6; s7 = s8 - s7;

    //The First dimension.

    console.log( [s1,s2,s3,s4,s5,s6,s7] );

    //Subtract next number to previous number.

    s1 = s2 - s1; s2 = s3 - s2; s3 = s4 - s3; s4 = s5 - s4; s5 = s6 - s5; s6 = s7 - s6;

    //The second dimension.

    console.log( [s1,s2,s3,s4,s5,s6] );

    //Subtract next number to previous number.

    s1 = s2 - s1; s2 = s3 - s2; s3 = s4 - s3; s4 = s5 - s4; s5 = s6 - s5;

    //The third dimension.

    console.log( [s1,s2,s3,s4,s5] );

    //Subtract next number to previous number.

    s1 = s2 - s1; s2 = s3 - s2; s3 = s4 - s3; s4 = s5 - s4;

    //The fourth dimension.

    console.log( [s1,s2,s3,s4] );

    //Subtract next number to previous number.

    s1 = s2 - s1; s2 = s3 - s2; s3 = s4 - s3;

    //The fifth dimension.

    console.log( [s1,s2,s3] );

    //Subtract next number to previous number.

    s1 = s2 - s1; s2 = s3 - s2;

    //The sixth dimension.

    console.log( [s1,s2] );

    //Subtract next number to previous number.

    s1 = s2 - s1;

    //The sixth dimension.

    console.log( [s1] );
  </code>

  <br /><br />

  With each subtraction the first number is what each per dimension is. We also loose one number each time. You can change each per amount to what ever you like. Or you can do the math your self.

  <h1>Faster way of subtracting.</h1>

  Instead of subtracting the next number to the previous number. We can instead add up the number of subtraction to calculate each value per row.

  <br /><br />

  <img src="figs/fig1.jpg" />

  <br /><br />

  <code>
    var data = [];

    var end = 8;

    var start = 7;

    var per1 = 3;

    var per2 = 1;

    var per3 = -9;

    var per4 = 12;

    var per5 = 13;

    for( var i1 = 0; i1 < end; i1++ )
    {
      data[i1] = start;

      for( var i2 = 0; i2 < i1; i2++ )
      {
        data[i1] += per1;

        for( var i3 = 0; i3 < i2; i3++ )
        {
          data[i1] += per2;

          for( var i4 = 0; i4 < i3; i4++ )
          {
            data[i1] += per3;

            for( var i5 = 0; i5 < i4; i5++ )
            {
              data[i1] += per4;

              for( var i6 = 0; i6 < i5; i6++ )
              {
                data[i1] += per5;
              }
            }
          }
        }
      }
    }

    console.log(data);

    var s1 = data[0], s2 = data[1], s3 = data[2], s4 = data[3], s5 = data[4], s6 = data[5], s7 = data[6], s8 = data[7];

    //Each per value relative to number of subtraction.

    var o = [];
    o[0] = s1 * 1;
    o[1] = s2 - (o[0] * 1);
    o[2] = s3 - (o[0] * 1 + o[1] * 2);
    o[3] = s4 - (o[0] * 1 + o[1] * 3 + o[2] * 3);
    o[4] = s5 - (o[0] * 1 + o[1] * 4 + o[2] * 6 + o[3] * 4);
    o[5] = s6 - (o[0] * 1 + o[1] * 5 + o[2] * 10 + o[3] * 10 + o[4] * 5);
    o[6] = s7 - (o[0] * 1 + o[1] * 6 + o[2] * 15 + o[3] * 20 + o[4] * 15 + o[5] * 6);
    o[7] = s8 - (o[0] * 1 + o[1] * 7 + o[2] * 21 + o[3] * 35 + o[4] * 35 + o[5] * 21 + o[6] * 7);

    console.log("Decoded per Value = " + o + "");
  </code>

  <br /><br />

  This makes solving the starting value for each iteration much faster. Since we are calculating what the first number is relative to number of subtraction. Solving each per value for each dimension.

  <a id="decoding" class="cmd"></a><h1>Solving sets to math functions.</h1>

  You can calculate any mathematical dimensional shape, or combination as follows using per amount in iteration.

  <br /><br />

  <table style="text-align:center;" border="1">
    <tr><td>Calculation.</td><td>start</td><td>per1</td><td>per2</td><td>per3</td><td>per4</td><td>per5</td><td>Result.</td></tr>
    <tr><td>x</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0,1,2,3,4,5,6,7</td></tr>
    <tr><td>x<sup>2</sup></td><td>0</td><td>1</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0,1,4,9,16,25,36,49</td></tr>
    <tr><td>x<sup>3</sup></td><td>0</td><td>1</td><td>6</td><td>6</td><td>0</td><td>0</td><td>0,1,8,27,64,125,216,343</td></tr>
    <tr><td>x<sup>4</sup></td><td>0</td><td>1</td><td>14</td><td>36</td><td>24</td><td>0</td><td>0,1,16,81,256,625,1296,2401</td></tr>
    <tr><td>x<sup>5</sup></td><td>0</td><td>1</td><td>30</td><td>150</td><td>240</td><td>120</td><td>0,1,32,243,1024,3125,7776,16807</td></tr>
    <tr><td colspan="8"><h2>Added.</h2></td></tr>
    <tr><td>x<sup>2</sup>+x<sup>5</sup></td><td>0</td><td>1+1=2</td><td>30+2=32</td><td>150</td><td>240</td><td>120</td><td>0,2,36,252,1040,3150,7812,16856</td></tr>
    <tr><td>x+x<sup>2</sup>+x<sup>3</sup>+x<sup>4</sup>+x<sup>5</sup></td><td>0+0+0+0+0=0</td><td>1+1+1+1+1=5</td><td>0+2+6+14+30=52</td><td>0+0+6+36+150=192</td><td>0+0+0+24+240=264</td><td>0+0+0+0+120=120</td><td>0,5,62,363,1364,3905,9330,19607</td></tr>
    <tr><td colspan="8"><h2>Multiplying.</h2></td></tr>
    <tr><td>x<sup>3</sup>*7</td><td>0*7=0</td><td>1*7=7</td><td>6*7=42</td><td>6*7=42</td><td>0*7=0</td><td>0*7=0</td><td>0,7,56,189,448,875,1512,2401</td></tr>
  </table>

  <br />

  If you want to get more complex you can multiply the square, and cube. Then add them together.

  <br /><br />

  <table style="text-align:center;" border="1">
    <tr><td>Calculation.</td><td>start</td><td>per1</td><td>per2</td><td>per3</td><td>per4</td><td>per5</td><td>Result.</td></tr>
    <tr><td>x<sup>2</sup>*12</td><td>0*12=0</td><td>1*12=12</td><td>2*12=24</td><td>0*12=0</td><td>0*12=0</td><td>0*12=0</td><td>0,12,48,108,192,300,432,588</td></tr>
    <tr><td>x<sup>3</sup>*2</td><td>0*2=0</td><td>1*2=2</td><td>6*2=12</td><td>6*2=12</td><td>0*2=0</td><td>0*2=0</td><td>0,2,16,54,128,250,432,686</td></tr>
    <tr><td colspan="8"><h2>Added.</h2></td></tr>
    <tr><td>x<sup>2</sup>*12+x<sup>3</sup>*2</td><td>0+0=0</td><td>12+2=14</td><td>24+12=36</td><td>0+12=12</td><td>0+0=0</td><td>0+0=0</td><td>0,14,64,162,320,550,864,1274</td></tr>
  </table>

  <br />

  Try each of them if you like. Or even combine and make up your own combinations.

  <br /><br />

  The same way you mix these together. Is the same way you reverse them back into a math calculation.

  <br /><br />

  <code>
    var data = [];

    var end = 8;

    var start = 0;

    var per1 = 1;

    var per2 = 30;

    var per3 = 150;

    var per4 = 240;

    var per5 = 120;

    for( var i1 = 0; i1 < end; i1++ )
    {
      data[i1] = start;

      for( var i2 = 0; i2 < i1; i2++ )
      {
        data[i1] += per1;

        for( var i3 = 0; i3 < i2; i3++ )
        {
          data[i1] += per2;

          for( var i4 = 0; i4 < i3; i4++ )
          {
            data[i1] += per3;

            for( var i5 = 0; i5 < i4; i5++ )
            {
              data[i1] += per4;

              for( var i6 = 0; i6 < i5; i6++ )
              {
                data[i1] += per5;
              }
            }
          }
        }
      }
    }

    console.log(data);

    var s1 = data[0], s2 = data[1], s3 = data[2], s4 = data[3], s5 = data[4], s6 = data[5], s7 = data[6], s8 = data[7];

    //Each per value relative to number of subtraction.

    var o = [];
    o[0] = s1 * 1;
    o[1] = s2 - (o[0] * 1);
    o[2] = s3 - (o[0] * 1 + o[1] * 2);
    o[3] = s4 - (o[0] * 1 + o[1] * 3 + o[2] * 3);
    o[4] = s5 - (o[0] * 1 + o[1] * 4 + o[2] * 6 + o[3] * 4);
    o[5] = s6 - (o[0] * 1 + o[1] * 5 + o[2] * 10 + o[3] * 10 + o[4] * 5);
    o[6] = s7 - (o[0] * 1 + o[1] * 6 + o[2] * 15 + o[3] * 20 + o[4] * 15 + o[5] * 6);
    o[7] = s8 - (o[0] * 1 + o[1] * 7 + o[2] * 21 + o[3] * 35 + o[4] * 35 + o[5] * 21 + o[6] * 7);

    console.log("Decoded per Value = " + o + "");
  </code>

  <br /><br />

  So here is how we translate a set to a math function after we subtract the numbers and solve each per iteration. Each to the power of. Up to 5 solves out as.

  <br /><br />

  <table style="text-align:center;" border="1">
    <tr><td>Calculation.</td><td>start</td><td>per1</td><td>per2</td><td>per3</td><td>per4</td><td>per5</td><td>Result.</td></tr>
    <tr><td>x</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0,1,2,3,4,5,6,7</td></tr>
    <tr><td>x<sup>2</sup></td><td>0</td><td>1</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0,1,4,9,16,25,36,49</td></tr>
    <tr><td>x<sup>3</sup></td><td>0</td><td>1</td><td>6</td><td>6</td><td>0</td><td>0</td><td>0,1,8,27,64,125,216,343</td></tr>
    <tr><td>x<sup>4</sup></td><td>0</td><td>1</td><td>14</td><td>36</td><td>24</td><td>0</td><td>0,1,16,81,256,625,1296,2401</td></tr>
    <tr><td>x<sup>5</sup></td><td>0</td><td>1</td><td>30</td><td>150</td><td>240</td><td>120</td><td>0,1,32,243,1024,3125,7776,16807</td></tr>
  </table>

  <br />

  As previously seen you can add each of these together per value to create any calculation you wish by adding all the per values together.

  <br /><br />

  In order to change each per value back into a math calculation. You start with the last per value. You divide the last value by 120 which is what it should be if it is x<sup>5</sup>.

  <br /><br />

  If it divides to 2. That means it is exactly x<sup>5</sup>*2. Which means you have to multiply each per value for x<sup>5</sup> by 2 doing.

  <br /><br />

  <table style="text-align:center;" border="1">
    <tr><td>Calculation.</td><td>start</td><td>per1</td><td>per2</td><td>per3</td><td>per4</td><td>per5</td></tr>
    <tr><td>x<sup>5</sup>*2</td><td>0*2=0</td><td>1*2=2</td><td>30*2=60</td><td>150*2=300</td><td>240*2=480</td><td>120*2=240</td></tr>
  </table>

  <br />

  You then subtract each of your per values by *2 of x<sup>5</sup>. This then de-mixes the fifth dimensional calculation from each per value iteration.

  <br /><br />

  You repeat this process to de-mix every calculation combination of each per value. Giving you what the size of each to the power of is.

  <br /><br />

  Lets take the following mixed calculation for example.

  <br /><br />

  <table style="text-align:center;" border="1">
    <tr><td>Calculation.</td><td>start</td><td>per1</td><td>per2</td><td>per3</td><td>per4</td><td>per5</td><td>Result.</td></tr>
    <tr><td>x<sup>2</sup>*12</td><td>0*12=0</td><td>1*12=12</td><td>2*12=24</td><td>0*12=0</td><td>0*12=0</td><td>0*12=0</td><td>0,12,48,108,192,300,432,588</td></tr>
    <tr><td>x<sup>3</sup>*2</td><td>0*2=0</td><td>1*2=2</td><td>6*2=12</td><td>6*2=12</td><td>0*2=0</td><td>0*2=0</td><td>0,2,16,54,128,250,432,686</td></tr>
    <tr><td colspan="8"><h2>Added.</h2></td></tr>
    <tr><td>x<sup>2</sup>*12+x<sup>3</sup>*2</td><td>0+0=0</td><td>12+2=14</td><td>24+12=36</td><td>0+12=12</td><td>0+0=0</td><td>0+0=0</td><td>0,14,64,162,320,550,864,1274</td></tr>
  </table>

  <br />

  In this example we multiply and mix the square and cube together as 0,14,36,12,0,0.

  <br /><br />

  This gives us the set 0,14,64,162,320,550,864,1274.

  <br /><br />

  By subtracting the values 0,14,64,162,320,550,864,1274. We can find each per value giving us 0,14,36,12,0,0.

  <br /><br />

  Dividing 0 by 120 is 0. Meaning multiplying x<sup>5</sup>*0 is 0*0=0,1*0=0,30*0=0,150*0=0,240*0=0,120*0=0. Does nothing.

  <br /><br />

  Dividing 0 by 24 is 0. Meaning multiplying x<sup>4</sup>*0 is 0*0=0,1*0=0,14*0=0,36*0=0,24*0=0,0*0=0. Does nothing.

  <br /><br />

  Dividing 12 by 6 is 2. Meaning multiplying x<sup>3</sup>*2 is 0*2=0,1*2=2,6*2=12,6*2=12,0*0=0,0*0=0.

  <br /><br />

  We subtract 0,2,12,12,0,0 which is x<sup>3</sup>*2, from our per values 0,14,36,12,0,0. Making our current per values 0,12,24,0,0,0.

  <br /><br />

  Current per values are now 0,12,24,0,0,0.

  <br /><br />

  Dividing 24 by 2 is 12. Meaning multiplying x<sup>2</sup>*12 is 0*12=0,1*12=12,12*2=24,0*0=0,0*0=0,0*0=0.

  <br /><br />

  We subtract 0,12,24,0,0,0 which is x<sup>2</sup>*12, from our current per values 0,12,24,0,0,0. Making 0,0,0,0,0,0.

  <br /><br />

  Working backwards like this lets us de-mix any calculation combination in much the same way as we can create such a calculation by mixing per values together.

  <br /><br />

  In this new example code. We multiply by the power of by each d value. You can change each <h3>var d1 = 4;</h3> to <h3>var d5 = 1;</h3>. To any value you like.

  <br /><br />

  Thus you should see it de-mixes each to the power of perfectly. It also does not matter which position you start in the set per value.

  <code>
    var data = [];

    var end = 8;

    var start = 3;

    var d1 = 4;

    var d2 = 1;

    var d3 = 1;

    var d4 = 3;

    var d5 = 1;

    for( var i1 = 0; i1 < end; i1++ )
    {
      data[i1] = start + i1*d1 + Math.pow(i1,2)*d2 + Math.pow(i1,3)*d3 + Math.pow(i1,4)*d4 + Math.pow(i1,5)*d5;
    }

    console.log(data);

    var s1 = data[0], s2 = data[1], s3 = data[2], s4 = data[3], s5 = data[4], s6 = data[5], s7 = data[6], s8 = data[7];

    //Each per value relative to number of subtraction.

    var o = [];
    o[0] = s1 * 1;
    o[1] = s2 - (o[0] * 1);
    o[2] = s3 - (o[0] * 1 + o[1] * 2);
    o[3] = s4 - (o[0] * 1 + o[1] * 3 + o[2] * 3);
    o[4] = s5 - (o[0] * 1 + o[1] * 4 + o[2] * 6 + o[3] * 4);
    o[5] = s6 - (o[0] * 1 + o[1] * 5 + o[2] * 10 + o[3] * 10 + o[4] * 5);
    o[6] = s7 - (o[0] * 1 + o[1] * 6 + o[2] * 15 + o[3] * 20 + o[4] * 15 + o[5] * 6);
    o[7] = s8 - (o[0] * 1 + o[1] * 7 + o[2] * 21 + o[3] * 35 + o[4] * 35 + o[5] * 21 + o[6] * 7);

    console.log("Decoded per Value = " + o + "");

    //Now decode each value.

    var t6 = o[5] / 120; o[5] -= t6 * 120; o[4] -= t6 * 240; o[3] -= t6 * 150; o[2] -= t6 * 30; o[1] -= t6 * 1;
    var t5 = o[4] / 24; o[4] -= t5 * 24; o[3] -= t5 * 36; o[2] -= t5 * 14; o[1] -= t5 * 1;
    var t4 = o[3] / 6; o[3] -= t4 * 6; o[2] -= t4 * 6; o[1] -= t4 * 1;
    var t3 = o[2] / 2; o[2] -= t3 * 2; o[1] -= t3 * 1;
    var t2 = o[1] / 1; o[1] -= t2 * 1;
    var t1 = o[0] / 1;

    console.log("Decoded values = " + [t1,t2,t3,t4,t5,t6] + "");
  </code>

  <br /><br />

  Now this function will transform a set of numbers into what it took to produce the numbers. What you multiply each power by will be what gets decoded up to 5.

  <br /><br />

  Basically doing a faster forum of subtracting next numbers minus previous.

  <br /><br />

  <img src="figs\fig2.jpg" />

  <br /><br />

  If you add the number together you create the next row. For example by adding the next number together in row 1,3,3,1 doing 1+3=4, 3+3=6, 3+1=4. Creates the row 1,4,6,4,1.

  <br /><br />

  You can build the subtraction pattern as big as you like to as high in dimension. Thus the decoder at the end to match each iteration to the power of in dimension.

  <br /><br />

  However it is important to remember a few things. You loose one number each time you subtract each next value to previous values. You need enough numbers in the set to be able to find the last per value iteration.

  <br /><br />

  At the bottom we basically are taking each of these.

  <br /><br />

  <table style="text-align:center;" border="1">
    <tr><td>Calculation.</td><td>start</td><td>per1</td><td>per2</td><td>per3</td><td>per4</td><td>per5</td><td>Result.</td></tr>
    <tr><td>x</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0,1,2,3,4,5,6,7</td></tr>
    <tr><td>x<sup>2</sup></td><td>0</td><td>1</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0,1,4,9,16,25,36,49</td></tr>
    <tr><td>x<sup>3</sup></td><td>0</td><td>1</td><td>6</td><td>6</td><td>0</td><td>0</td><td>0,1,8,27,64,125,216,343</td></tr>
    <tr><td>x<sup>4</sup></td><td>0</td><td>1</td><td>14</td><td>36</td><td>24</td><td>0</td><td>0,1,16,81,256,625,1296,2401</td></tr>
    <tr><td>x<sup>5</sup></td><td>0</td><td>1</td><td>30</td><td>150</td><td>240</td><td>120</td><td>0,1,32,243,1024,3125,7776,16807</td></tr>
  </table>

  <br /><br />

  Thus de-mixing each one as we divide by the last value and work our way backwards decoding each to the power of in the set.

  <br /><br />

  You can expand this table to the power of 50 if liked. If you wish to solve each per iteration up to 50. You would also need sets that are 51 numbers in length including the starting value.

  <h1>Upside down.</h1>

  When we take everything and flip it upside down we then solve everything exponentially.

  <br /><br />

  Instead of solving everything sequentially as.

  <br /><br />

  <table style="text-align:center;" border="1">
    <tr><td>Calculation.</td><td>Result.</td></tr>
    <tr><td>x^1</td><td>0,1,2,3,4,5,6,7</td></tr>
    <tr><td>x^2</td><td>0,1,4,9,16,25,36,49</td></tr>
    <tr><td>x^3</td><td>0,1,8,27,64,125,216,343</td></tr>
    <tr><td>x^4</td><td>0,1,16,81,256,625,1296,2401</td></tr>
    <tr><td>x^5</td><td>0,1,32,243,1024,3125,7776,16807</td></tr>
  </table>

  <br />

  We can solve things exponentially as.

  <br /><br />

  <table style="text-align:center;" border="1">
    <tr><td>Calculation.</td><td>Result.</td></tr>
    <tr><td>1^x</td><td>1,1,1,1,1,1,1,1</td></tr>
    <tr><td>2^x</td><td>2,4,8,16,32,64,128,256</td></tr>
    <tr><td>3^x</td><td>3,9,27,81,243,729,2187,6561</td></tr>
    <tr><td>4^x</td><td>4,16,64,256,1024,4096,16384,65536</td></tr>
    <tr><td>5^x</td><td>5,25,125,625,3125,15625,78125,390625</td></tr>
  </table>

  <br />

  AS you can see with 2^x we are doubling per value. And with 3^x we are tripling. And so on. This forum of solving things is useful, for the growth, and expansion of things. The expansion and branching of nodes. The spread of bacteria, or viruses. The rate at which a person grows.

  <br /><br />

  <code>
    var data = [];

    var end = 8;

    var start = 0;

    var d1 = 1;

    var d2 = 0;

    var d3 = 0;

    var d4 = 7;

    var d5 = 0;

    for( var i1 = 1; i1 <= end; i1++ )
    {
      data[i1-1] = start + Math.pow(1,i1)*d1 + Math.pow(2,i1)*d2 + Math.pow(3,i1)*d3 + Math.pow(4,i1)*d4 + Math.pow(5,i1)*d5;
    }

    console.log(data);

    var s1 = data[0], s2 = data[1], s3 = data[2], s4 = data[3], s5 = data[4], s6 = data[5], s7 = data[6], s8 = data[7];

    //Each per value relative to number of subtraction.

    var o = [];

    o[0] = s1;
    o[1] = ( s2 - ( o[0] * 1 ) ) / 2;
    o[2] = ( s3 - ( o[0] * 1 + o[1] * 6 ) ) / 6;
    o[3] = ( s4 - ( o[0] * 1 + o[1] * 14 + o[2] * 36 ) ) / 24;
    o[4] = ( s5 - ( o[0] * 1 + o[1] * 30 + o[2] * 150 + o[3] * 240 ) ) / 120;

    console.log("Decoded per Value = " + o + "");

    //Now decode each value.

    var t5 = o[4] / 1; o[4] -= t5 * 1; o[3] -= t5 * 5; o[2] -= t5 * 10; o[1] -= t5 * 10; o[0] -= t5 * 5;
    var t4 = o[3] / 1; o[3] -= t4 * 1; o[2] -= t4 * 4; o[1] -= t4 * 6; o[0] -= t4 * 4;
    var t3 = o[2] / 1; o[2] -= t3 * 1; o[1] -= t3 * 3; o[0] -= t3 * 3;
    var t2 = o[1] / 1; o[1] -= t2 * 1; o[0] -= t2 * 2;
    var t1 = o[0] / 1; o[0] -= t1 * 1;

    console.log("Decoded values = " + [t1,t2,t3,t4,t5] + "");
  </code>

  <br /><br />

  This will de-mix any tripling, or doubling combinational pattern there is in the set. Even if you start in the middle of the set It will de-mix all combinations in the set to what they are.
  
  <br /><br />
  
  We just basically switch the numbers that was used to decode the per iteration of each to the power of. Then use the subtraction pattern as the decoder.

  <a id="geometry" class="cmd"></a><h1>Matrix structure.</h1>

  We can create tow matrices that are opposite to each other. They are a triangle fractal known as Sierpinski triangle. Stored numerically dimensionally as pascals triangle to do the transformation.

  <br /><br />

  <img src="figs\fig2.jpg" />

  <br /><br />

  See <a href="https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle" target="_blank">Sierpinski triangle</a>. Also see <a href="https://youtu.be/d0Exnv8Ym7s" target="_blank">NOVA Fractals The Hidden Dimension</a>. These are good places to start if you do not understand what Fractals are.

  <br /><br />

  The two matrices then can be combined as the following infinite fractal pattern. Solving both exponentially and sequentially in as high of dimension you wish to go. Equally across the set. In perfect equilibrium.

  <br /><br />

  <img src="figs/fig3.jpg" />

  <br /><br />

  Additionally if you take circles and connect them in a point space. You then can create the same pattern. See <a href="https://youtu.be/vJi3_znm7ZE" target="_blank">Quantum Gravity Research: E8</a>. Which clearly explains a point space is, higher dimensional math, and also, <a href="https://youtu.be/w0ztlIAYTCU" target="_blank">Quantum Gravity Research: Reality</a>.

  <br /><br />

  Starting with circles. You can create a pattern of overlapping circles. The points can all be connected together to forum the tetrahedron in higher dimensions.

  <br /><br />

  <img img src="figs/fig4.jpg" />

  <br /><br />

  This is called the flower of life pattern. It is a much more fun way of creating the point space. Also see the <a href="http://www.ascensionnow.co.uk/star-tetrahedron-merkaba.html" target="_blank">Star tetrahedron</a>. Which is a fun page.

  <br /><br />

  Lastly if we rotate the two matrices in opposite directions. We end up with a double serial in the center. This solves the Fibonacci sequence. This completes the all encompassing totality of all things.

  <br /><br />

  Which brings us to the final forum of all things as merkaba.
  
  <br /><br />
  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/cR0pe4eDzSk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>.

  <br /><br />

  As a point space it is more closely like this. Multidimensionality.

  <br /><br />

  <iframe src="https://player.vimeo.com/video/177192957" width="640" height="361" frameborder="0"></iframe>
</body>
</html>