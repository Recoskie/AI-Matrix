# Artificially solve all kinds of multidimensional data.

**AI-Matrix.html** is an sample web application using this library which allows you to use the matrices basic functions. <br />

Below are very basic example uses without phase shifting, solving continued functions in data, or fractaling. <br />

<a href="https://github.com/Recoskie/AI-Matrix#basic-library-use-and-reference">Skip to Reference, and use.</a>

* Analyze multidimensional sequence data. See example bellow. <br />

```javascript
//Random dimensional values.

var r1 = Math.random() * 10, r2 = Math.random() * 10, r3 = Math.random() * 10;

//Calculate some random dimensional data.

function Dimensional_data( x )
{
  //The output.
  
  var out = 0;

  //First dimension.
  
  for( var i1 = 0; i1 < x; i1++ )
  {
     //Can add subtract value it does not matter.
  
     out += r1;
  
    //Second dimension iterate proportionally to first dimension.
    //Note it does not matter what we iterate till it can even be 7 times the first dimension.
    
    for( var i2 = 0; i2 < i1; i2++ )
    {
      //Angie does not matter what operation this is.
      //Note We can even add together the number of the current first dimension times PI.
      //All that does is build another dimension through adding making the third dimensions the fourth dimension.
      
      out += r2;
      
      //The third dimension.
      
      for( var i3 = 0; i3 < i2; i3++ )
      {
        //why not make the third dimension subtract.
        
        out -= r3;
      }
    }
  }
  return( out );
}

//Double64 number Epsilon Error correction.

AI_Mat.ErrCorrect = true;

//Create random dimensional data.

for( var i = 0, d = []; i < 7; d[ i ] = Dimensional_data( ( i++ ) + 1 ) );

//Create an new set using the AI matrix Set type.

var s = new Set( d );

//Display set of data.

alert( s + "" );

/*---------------------------------------------------------
My random three dimensional data is as follows.
-----------------------------------------------------------
X0 = 5.55582670474409
X1 = 11.25513255148574
X2 = 10.20096199304021
X3 = -4.50364051777721
X4 = -39.7556305281513
X5 = -102.4519635852667
X6 = -199.4895952363082
---------------------------------------------------------*/

//Sequence each dimension.

var d = s.seq();

//Compile to an function.

var My_func = d.getFunc();

//Display the function.

alert( My_func );

/*---------------------------------------------------------
My function that calculates and produces the same data is.
-----------------------------------------------------------
function( x )
{
  var o = 911/1639+5;
  o += x * ( 9728 / 12519 + 6 );
  o += x ** 2 * 10265 / 143087;
  o -= x ** 3 * ( 7940 / 53113 + 1 );
  return( o );
}
---------------------------------------------------------*/
```

Also the Matrix can be used to improve performance of functions that use loops to calculate results into simple calculations.
For more information on what types of things this applies to see section [Solve as seq.](#solve-as-seq)

* Analyze multidimensional geometric data. <br />

Not only can stuff be dimensional inside each other we also have expanding horizontal dimensions. <br />

The matrix uses the decode matrix as the sequence matrix then the sequence matrix to decode. In reverse. <br />

```javascript
//Random dimensional values.

var r1 = Math.random() * 10, r2 = Math.random() * 10, r3 = Math.random() * 10;

//Calculate some random dimensional data.

function Dimensional_data( x )
{
  //First horizontal dimension.
  //Random dimensional value, plus random dimensional value.
  
  var d1 = r1;

  for( var i1 = 0; i1 < x; i1++ )
  {  
     d1 += d1;
  }

  //Second horizontal dimension.
  //Random dimensional value, plus random value, plus random value.

  var d2 = r2;
  
  for( var i1 = 0; i1 < x; i1++ )
  {  
     d2 += d2 + d2;
  }

  //Third horizontal dimension.
  //Random dimensional value, plus random value, plus random value, plus random value.

  var d3 = r3;
  
  for( var i1 = 0; i1 < x; i1++ )
  {  
     d3 += d3 + d3 + d3;
  }

  //Mix dimensions.

  return( d1 + d3 + d2 );
}

//Double64 number Epsilon Error correction.

AI_Mat.ErrCorrect = true;

//Create random dimensional data.

for( var i = 0, d = []; i < 7; d[i] = Dimensional_data( ( i++ ) + 1 ) );

//Create an new set using the AI matrix Set type.

var s = new Set( d );

//Display set of data.

alert( s + "" );

/*---------------------------------------------------------
My random dimensional data is as follows.
-----------------------------------------------------------
X0 = 59.1382464275191
X1 = 210.6470138800445
X2 = 770.992716524155
X3 = 2881.43000209669
X4 = 10942.58772236329
X5 = 42069.9346433353
X6 = 163276.4510588926
---------------------------------------------------------*/

//Sequence each dimension.

var d = s.geo();

//Compile to an function.

var My_func = d.getFunc();

//Display the function.

alert( My_func );

/*---------------------------------------------------------
My function that calculates and produces the same data is.
-----------------------------------------------------------
function( x )
{
  var o = 2 ** x * ( 4078 / 7685 + 1 );
  o += 3 ** x * ( 1117 / 1879 + 6 );
  o += 4 ** x * ( 179 / 2439 + 9 );
  return( o );
}
---------------------------------------------------------*/
```

For more information on what types of things this applies to see section [Solve as geo.](#solve-as-geo)

# Basic library use, and reference.

There are four methods for loading data. For fractional base number conversion the <a href="https://github.com/Recoskie/Fl64">FL64 libaray</a> needs to be loaded.

```Javascript
//Method one. Creating an set

var s = new Set( 10, 20, 30 );

//Method two. Data generated from an algorithm or from file.

var data = [ 10, 20, 30 ];

s = new Set( data );

//Method three. Text input data.
//Text can have line brakes and fractional numbers.

var str = "10,20,30";

s = null;

try
{
  s = new Set( str );
}
catch( e )
{
  alert( e ); //The error output is "Improper set format" if there are values other than numbers.
}

//Numbers do not have to be in decimal if FL64 library is loaded for fraction base conversion. 
//If FL64 is not loaded on the same page "Improper set format" will be returned.

str = "1010.1,1011.01,1100.11";

s = null;

try
{
  s = new Set( str, 2 ); //Base 2 fractional numbers.
}
catch( e )
{
  alert( e ); //The error output is "Improper set format" if FL64 is not loaded, or there are values other than base 2 numbers.
}
```

### When displaying an set of data the array index and value is shown in any message output function.

```Javascript
//Create an basic set.

var s = new Set( 10, 20, 30 );

//Dispaly the set.

alert( s );

/*---------------------------------------------------------
Output.
-----------------------------------------------------------
X0 = 10
X1 = 20
X2 = 30
---------------------------------------------------------*/
```

### Sets are the same as arrays.

```Javascript
//Create an basic set.

var s = new Set( 10, 20, 30 );

//Display the set array length.

alert( s.length ); //outputs 3.

//Add array element one to element two.

s[ 0 ] += s[ 1 ];

//Iterate through array and add by iterated value.

for( var i = 0; i < s.length; i++ ) { s[ i ] += i; }

//Display output.

alert( s );

/*---------------------------------------------------------
Output is as follows.
-----------------------------------------------------------
X0 = 30
X1 = 21
X2 = 32
---------------------------------------------------------*/
```

### Sets also suport Array methods: reverse(), splice(), shift(), unshift(), push(), pop().

If FL64 is loaded all float number binary operations and error correction, and fraction conversion functions are then applied to array. This allows Sets to use all FL64 operations.

<a href="https://github.com/Recoskie/Fl64">FL64 library Main page and Reference.</a>

<a href="https://github.com/Recoskie/Fl64#vectorarray-based-operations">FL64 library Set/Array implementation.</a>

```Javascript
//Create an basic set.

var s = new Set( 10, 20.5, 30.2 );

//Convert all number in set to their exact binary representation in the computers memory.

s = s.bits();

//Display output.

alert( s );

/*---------------------------------------------------------
Output is as follows.
-----------------------------------------------------------
X0 = 0100000000100100000000000000000000000000000000000000000000000000
X1 = 0100000000110100100000000000000000000000000000000000000000000000
X2 = 0100000000111110001100110011001100110011001100110011001100110011
---------------------------------------------------------*/

//Manipulate mantissa bits in element one.

s[ 0 ].mantissa += Math.pow(2,32);

//Add value by one.

s[ 0 ] += 1;

//Display output.

alert( s );

/*---------------------------------------------------------
Output is as follows.
-----------------------------------------------------------
X0 = 11.00000762939453
X1 = 0100000000110100100000000000000000000000000000000000000000000000
X2 = 0100000000111110001100110011001100110011001100110011001100110011
---------------------------------------------------------*/

//Convert second value to fraction.

s[ 1 ] = s[ 1 ].getFract();

//Display output.

alert( s );

/*---------------------------------------------------------
Output is as follows.
-----------------------------------------------------------
X0 = 11.00000762939453
X1 = 1÷2+20
X2 = 0100000000111110001100110011001100110011001100110011001100110011
---------------------------------------------------------*/

//Convert all values in set to fraction.

s = s.getFract();

//Display output.

alert( s );

/*---------------------------------------------------------
Output is as follows.
-----------------------------------------------------------
X0 = 1÷131072+11
X1 = 1÷2+20
X2 = 1÷5+30
---------------------------------------------------------*/

//Xor all 64 bit's of double precision numbers by element one.

s = s.bitXor( s[ 0 ] + 0 );

//Display output.

alert( s );

/*---------------------------------------------------------
Output is as follows.
-----------------------------------------------------------
X0 = 0000000000000000000000000000000000000000000000000000000000000000
X1 = 0000000000010010100000000000000100000000000000000000000000000000
X2 = 0000000000011000001100110011001000110011001100110011001100110011
---------------------------------------------------------*/

//Show as numbers.

s = s.valueOf();

//Display output.

alert( s );

/*---------------------------------------------------------
Output is as follows.
-----------------------------------------------------------
X0 = 0
X1 = 2.57274377089474e-308
X2 = 3.36542208899635e-308
---------------------------------------------------------*/
```

### Decoding data.

Sets have three functions "seq, geo, gen".
In which we multidimensionally solve as sequences, or as geometric data, or both.
If you already have an idea of the type of data you are analyzing then you can solve as "geo", or "seq" otherwise "generic".

```Javascript
var s = new Set( 0, -899.857142857143, -13167.42857142857, -49732.7142857143,
  -52989.7142857143, 290003.571428571, 1898645.142857143, 6871669, 19337225.14285714,
  46635599.5714286 );

/*---------------------------------------------------------
Error correction is set false by default.
---------------------------------------------------------*/

AI_Mat.ErrCorrect = true;

/*---------------------------------------------------------
Seq, and Geo Sequence Data.
---------------------------------------------------------*/

var Data = s.gen();

/*---------------------------------------------------------
Displaying the data results in an ASCII math string of the sequence data.
---------------------------------------------------------*/

alert( Data );

/*---------------------------------------------------------
Output.
-----------------------------------------------------------
X^2*797017/5579118-X^4*911+X^7*11
---------------------------------------------------------*/

/*---------------------------------------------------------
You can make an function of the Data, or use array of functions. Depending on what you are building.
---------------------------------------------------------*/

var My_func1 = Data.getFunc();

/*---------------------------------------------------------
You can display the function as string and pass values to it.
---------------------------------------------------------*/

alert( "My function\r\n" + My_func1 + "\r\nPass value 9 = " + My_func1( 9 ) + "" );

//The data contains an set called "seq" containing the value of each dimensional sequence.

alert( Data.seq );

/*---------------------------------------------------------
Output.
-----------------------------------------------------------
X0 = 0
X1 = 0
X2 = 797017÷5579118
X3 = 0
X4 = -911
X5 = 0
X6 = 0
X7 = 11
X8 = 0
X9 = 0
---------------------------------------------------------*/

//The data contains an set called "geo" containing the value of each expanding dimensional sequence.

alert( Data.geo );

/*---------------------------------------------------------
Output.
-----------------------------------------------------------
X0 = 0
X1 = 0
X2 = 0
X3 = 0
X4 = 0
X5 = 0
X6 = 0
X7 = 0
X8 = 0
X9 = 0
---------------------------------------------------------*/

//The sets can also be solved again resulting in an function that produces the dimensions for the sequence.

var Data2 = Data.seq.gen();
var Data3 = Data.geo.gen();

alert( Data2 );
alert( Data3 );

//You can branch it out as many times as you like. You can fractal data if you like.
//Do not forget the sets in data also support all FL64 operations.
```

Also see other examples like Solve as <a href="https://github.com/Recoskie/AI-Matrix#artificially-solve-all-kinds-of-multidimensional-data">Seq, or Geo</a> at the beginning.

# AI Matrix Debug Script.
  >
  > The AI matrix debug script is the same as the regular script. <br /><br />
  > However the matrix has an **AI_Mat.debug** value that is written to after every operation. <br /><br />
  > To Display the Debug output simply call **AI_Mat.toString()**. <br /><br />
  > Another method is to just add AI_Mat to string as **var out = AI_Mat + "";**. <br /><br />
  > The non debug version of the AI matrix will give back no debug data, but you can also call the same **AI_Mat.toString()** function between both without error, for compatibility. <br /><br />
  > The debug data is in HTML format, so you will want to write it to the innerHTML of an DIV element, or use document.write. <br /><br />
  > Note that as soon as the debug data is added to an string, or toString is used the debug data resets. <br />
  >
# Types of data.

### Solve as seq:
  > Solves an set of numbers as Sums to the next number as Summation inside Summation as each pow is another dimension added up by the last dimension geometrically any number of times.
  >
  > To the programmer this means Basically an loop adding up values, or an loop inside an loop adding up increment values any number of loops inside one another. It allows the break down combinations of any mix of Circles, curves, gravity, quadratics, polynomials, and even wave function combinations.
  >
### Solve as geo:
  >  
  > Solve things that multiply by two per value, or by three, or both sets are existent in the data.
  > Formation of cells and expanded growth, or crystal formation.
  > Base number conversion. Binary digits are in multiples of twos, and Decimal is in multiples of ten per value.
  > Positional Number patterns.
  >
### Solve as Geo, and Seq:
  >
  > Solves data as both set types.
  >
# Accuracy.

### seq:
  >
  > Any set of data solved as powers will only solve properly if it is plus one number higher than the number of sumitations inside one another, or largest power in an given set. Basically X to the power of 7 will only solve properly as 8 numbers as there are 7 sum-able multiplies. The set can be an combination of any powers lower than 7 multiplied, or divided by any size, and you will only need 8 numbers to solve to the last multiply in the set. You can go higher than 8 numbers, but all that will happen is that the numbers in the set higher up will cancel out when the last sum to the last multiple is calculated.
  >
### geo:
  >
  > The same concept as Powers except we are going "number" to the power of X. The largest number to the power of X will be plus one to number of results needed. You can go higher than, but all that will happen is that the numbers in the set higher up will cancel out till 0 when the last multiple to the last sum is calculated in reverse.
  >
### gen:
  >
  > This solves both backwards, and forwards in the set. Thus links the result to an intercepting central matrix of both matrices. The Highest sequence dimension plus Highest Geo dimension in the set plus one is the required number of results to solve the set properly. You can go higher than the required set of numbers, and still solve the set as the rest of the numbers to the center of the set cancel out to 0.
  >
### Suffers from epsilon error.
  >
  > Computers can not do perfect float arithmetic thus we end up with data that should be 0 in alignment, but are at the value of EPSILON.
  >
  > As of version 6 this has been fixed. Thus Float values are also epsilon corrected if the FL64 library is loaded on the same page as the AI matrix. The values are converted to fractions with an dynamic constraint to stop at error range.
