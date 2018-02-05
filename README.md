# Artificially solve all kinds of multidimensional data.

**AI-Matrix.html** is an sample web application using this library which allows you to use the matrices basic functions. <br />

Below are very basic example uses without phase shifting, or solving continued functions in data. <br />

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
     //Can add subtract value it dose not matter.
  
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

Not only can stuff be dimensional inside each other we also have expanding horizontal dimensions. It is funny that positional number systems count the same way (Not by chance). <br />

We call these geometric sequence. The same is true with quantities in counting. We count by one to the tens column then the tens is times ten then we have hundreds times ten to thousands. <br />

Binary is 2, 4, 8, 16 as it doubles. Note the data can be an mix of geometric sequences. Also the matrix uses the decode matrix as the sequence matrix then the sequence matrix to decode in reverse. <br />

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

# Solve as seq:

Solves an set of numbers as Sums to the next number as Summation inside Summation as each pow is another dimension added up by the last dimension geometrically any number of times.

To the programmer this means Basically an loop adding up values, or an loop inside an loop adding up increment values any number of loops inside one another. It allows the break down combinations of any mix of Circles, curves, gravity, quadratics, polynomials, and even wave function combinations.

# Solve as geo:

Solve things that multiply by two per value, or by three, or both sets are existent in the data.
Cell growth, Base number conversion. Binary digits are in multiples of twos, and Decimal is in multiples of 10 per value.
Basically Number patterns rather then Curves. Also chemical cell growth.

# Solve as Geo, and Seq:

Solves data as both set types.

# Accuracy notes.

## seq:

Any set of data solved as powers will only solve properly if it is plus one number higher than the number of sumitations inside one another, or largest power in an given set. Basically X to the power of 7 will only solve properly as 8 numbers as there are 7 sum-able multiplies. The set can be an combination of any powers lower than 7 multiplied, or divided by any size, and you will only need 8 numbers to solve to the last multiply in the set. You can go higher than 8 numbers, but all that will happen is that the numbers in the set higher up will cancel out when the last sum to the last multiple is calculated.

## geo:

The same concept as Powers except we are going "number" to the power of X. The largest number to the power of X will be plus one to number of results needed. You can go higher than, but all that will happen is that the numbers in the set higher up will cancel out till 0 when the last multiple to the last sum is calculated in reverse.

## gen:

This solves both backwards, and forwards in the set. Thus links the result to an intercepting central matrix of both matrices. The Highest sequence dimension plus Highest Geo dimension in the set plus one is the required number of results to solve the set properly. You can go higher than the required set of numbers, and still solve the set as the rest of the numbers to the center of the set cancel out to 0.

## Suffers from epsilon error.

Computers can not do perfect float arithmetic thus we end up with data that should be 0 in alignment, but are at the value of EPSILON.

As of version 6 this has been fixed. Thus Float values are also epsilon corrected if the FL64 library is loaded on the same page as the AI matrix. The values are converted to fractions with an dynamic constraint to stop at error range.
