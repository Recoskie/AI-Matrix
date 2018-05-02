/***********************************************************************************
The matrices that act as the brain.
***********************************************************************************/

var AI_Mat = {

  /***********************************************************************************
  Two main matrices that are adjusted for faster decoding and encoding alignment of dimensions.
  ***********************************************************************************/

  SMat: [], PMat: [],

  /***********************************************************************************
  Enable, or disable error correction.
  ***********************************************************************************/

  ErrCorrect: false,

  /***********************************************************************************
  Operator check for when creating functions. Not all operators are supported by all web browsers.
  ***********************************************************************************/

  Exp: ( function() { try { eval( "0 ** 0" ); return ( true ); } catch ( e ) { return ( false ); } } )(),

  /***********************************************************************************
  Adjust two main matrices as necessary.
  ***********************************************************************************/

  adjustSMat: function( size )
  {
    var r = new Array();

    if ( this.SMat.length > 0 ) { r = r.concat( this.SMat[ this.SMat.length - 1 ] ); }

    while ( this.SMat.length - 1 < size )
    {
      for ( var i = 0; i < r.length - 1; r[ i ] += r[ i + 1 ], i++ );

      if ( r.length < 2 ) { r[ r.length ] = 1; } else { r = ( [ 1 ] ).concat( r ); }

      this.SMat[ this.SMat.length ] = new Array();
      this.SMat[ this.SMat.length - 1 ] = this.SMat[ this.SMat.length - 1 ].concat( r );
    }
  },
  adjustPMat: function( size )
  {
    this.adjustSMat( size );

    var o = [ 1 ], v = 0, P = this.PMat.length + 1;

    while ( this.PMat.length < size )
    {
      o = [ 1 ];

      for ( var i1 = 2; i1 <= P; i1++ )
      {
        for ( var i2 = i1 - 1, v = Math.pow( i1, P ); i2 > 0; v -= Math.pow( i2, P ) * this.SMat[ i1 ][ i2 ], v = -v, i2-- );
        if ( v < 0 ) { v = -v; } o[ o.length ] = v;
      }

      this.PMat[ this.PMat.length ] = new Array();
      this.PMat[ this.PMat.length - 1 ] = this.PMat[ this.PMat.length - 1 ].concat( o );
      
      P++;
    }
  },

  /***********************************************************************************
  Compile an matrix to be sequenced into code for faster performance.
  ***********************************************************************************/

  MkS: function( array, mat, phase )
  {
    var o = "", data = [], v = 0, phase = ( phase & 1 ) || 0;

    for ( var i1 = 0; i1 < mat.length; i1++ )
    {
      data = mat[ i1 ]; o += "  " + array + "[" + ( i1 + phase ) + "] = ";

      o += ( data[ i1 ] !== 1 ? "( " : "") + ( ( i1 + phase ) !== 0 ? array + "[" + ( i1 + phase ) + "] - " + ( ( data.length + phase ) > 2 ? "(" : "" ) : array + "[0]" );

      for ( var i2 = -phase; i2 < data.length - 1; i2++ )
      {
        v = data[ i2 ] || 0; ( phase ) && ( v += data[ i2 + 1 ] || 0 );
        o += " " + array + "[" + ( i2 + phase ) + "]" + ( ( v !== 1 ) ? " * " + v : "" ) + ( ( i2 < data.length - 2 ) ? " +" : "" );
      }

      o += ( ( ( data.length + phase ) > 2 ? " )" : "" ) ) + ( ( data[ i1 ] !== 1 ) ? " ) / " + data[ i2 ] : "" );
      
      o += ";\r\n";
    }

    return ( o );
  },

  /***********************************************************************************
  Compile an matrix into an be-sequenced code for faster performance.
  ***********************************************************************************/

  MkD: function( array, mat, phase )
  {
    var o = "", data = [], v = 0, phase = ( phase & 1 ) || 0;

    for ( var i1 = mat.length - 1; i1 >= 0; i1-- )
    {
      data = mat[ i1 ]; o += " "; if ( data[ i1 ] !== 1 ) { o += " " + array + "[" + ( i1 + phase ) + "] = " + array + "[" + ( i1 + phase ) + "] / " + data[ i1 ] + ";"; }

      for ( var i2 = data.length - 2; i2 >= -phase; i2-- )
      {
        v = data[i2] || 0; ( phase ) && ( v += data[ i2 + 1 ] || 0 );
        o += " " + array + "[" + ( i2 + phase ) + "] -= " + array + "[" + ( i1 + phase ) + "]" + ( ( v !== 1 ) ? " * " + v : "") + ";";
      }

      o += "\r\n";
    }

    return ( o );
  },

  /***********************************************************************************
  Pre compiled sequencing functions.
  ***********************************************************************************/

  Seq: [], SGeq: [], Geq: [],

  /***********************************************************************************
  Output the table of an matrix.
  ***********************************************************************************/

  showMat: function( Mat )
  {
    var ml = Mat.length;

    //Max col length.

    for ( var i1 = 0, col = 1; i1 < Mat.length; col = Math.max( col, Mat[ i1++ ].length ) );

    //Debug output.

    for (var i1 = 0; i1 < ml; i1++)
    {
      AI_Mat.debug += "<div id=\"container\">\r\n";

      for ( var i2 = 0, i3 = 0, sp = col / Mat[ i1 ].length; Math.round( i2 ) < col; i2 += sp, i3++ )
      {
        AI_Mat.debug += "<div";

        if ( sp === col )
        {
          AI_Mat.debug += " style='position:relative;margin-left:-25px;left:50%;'";
        }

        AI_Mat.debug += "><center>\"" + Mat[ i1 ][ i3 ] + "\"</center></div>\r\n";
      }

      AI_Mat.debug += "<span></span></div><hr />\r\n";
    }
  },

  /*****************************************************************************************
  This is an style script for debug mode.
  *****************************************************************************************/

  toString: function()
  {
    var t = this.debug; this.debug = "";

    return ( "<style>\
    #container\
    {\
      text-align: justify;\
      -ms-text-justify: distribute-all-lines;\
      text-justify: distribute-all-lines;\
      width:100%;\
    }\
    #container>div\
    {\
      min-width: 50px;\
      min-height: 50px;\
      vertical-align: top;\
      display: inline-block;\
      *display: inline;\
      zoom: 1;\
      border-style:solid;\
    }\
    span\
    {\
      width: 100%;\
      display: inline-block;\
      font-size: 0;\
      line-height: 0;\
    }\
    </style>" + t );
  }
};

/***********************************************************************************
Setup an few Basic sequence functions.
***********************************************************************************/

AI_Mat.SGeq[ 1 ] = function( s ) { var s = s.slice( 0 ); return ( new DSet( s, [ 0 ] ) ); };
AI_Mat.SGeq[ 2 ] = function( s ) { var s = s.slice( 0 ); s[ 1 ] = s[ 1 ] - s[ 0 ]; s[ 0 ] -= s[ 1 ]; return ( new DSet( s, [ 0 ] ) ); }

/***********************************************************************************
An new set can be numbers per argument, or array of numbers, or set( string, radix ).
***********************************************************************************/

var Set = function( str, radix )
{
  var d = [];

  //Note base conversion does not happen If FL64 is not loaded.

  if ( str.constructor == String )
  {
    d = str.replace( /(?:\r\n|\r|\n)/g, "" ).split( "," ); for ( var i = 0, radix = radix || 10; i < d.length; d[ i ] = parseFloat( d[ i++ ], radix ) );
  }

  //Arrayed arguments.
  
  else { d = arguments.length > 1 ? Array.prototype.slice.call( arguments ) : arguments[ 0 ].slice ? arguments[ 0 ].slice( 0 ) : [ 0 ]; }

  //Set length.

  this.length = d.length;

  //Check if set is all numbers.

  for ( var i = 0; i < d.length; this[ i ] = d[ i++ ] ) { if ( isNaN( d[ i ] ) ) { throw ( new Error( "Improper set format." ) ); } }
}

/***********************************************************************************
Decode all dimensional sequences, and geo expansion along set.
***********************************************************************************/

Set.prototype.gen = function( set )
{
  //Adjust the matrix as necessary.

  AI_Mat.adjustSMat(this.length); AI_Mat.adjustPMat(this.length);

  //Debug output.

  AI_Mat.debug += "<hr /><h2>Current Sequence^Alignment Matrix.</h2><hr />"; AI_Mat.showMat(AI_Mat.SMat);
  AI_Mat.debug += "<hr /><h2>Current Alingment^Sequence Matrix.</h2><hr />"; AI_Mat.showMat(AI_Mat.PMat);

  //Run Sequence function.

  var t = 0; if ( t = AI_Mat.SGeq[ this.length ] ) { AI_Mat.debug += "<hr /><h2>Using Sequence function.</h2><hr />" + t.toString().html() + ""; t = t( this ); }

  //Else setup function for first time use.
  
  else
  {
    //Center align.

    var c1 = Math.floor( this.length / 2 );
    var c2 = this.length - c1;

    //Create function.

    var f = "AI_Mat.SGeq[ " + this.length + " ] = function( s )\r\n{\r\n  var s = s.slice( 0 );\r\n\r\n";
    f += AI_Mat.MkS( "s", AI_Mat.SMat.slice( 0, this.length ), false ) + "\r\n  ";
    f += "var g = s.slice( " + (c1 + 1) + ", " + this.length + " ); s.length = " + ( c1 + 1 ) + "; s = s.slice( 0, " + ( c1 + 1 ) + " );\r\n\r\n";
    f += AI_Mat.MkS( "g", AI_Mat.PMat.slice(0, c2 - 2 ), true ) + "\r\n";
    f += AI_Mat.MkD( "g", AI_Mat.SMat.slice(0, c2 - 1 ), false ) + "  ";

    for ( var i1 = 0; i1 < c2 - 1; f += "g[" + i1 + "] /= " + Math.pow( i1 + 1, c1 + 1 ) + "; ", i1++ ); f += "\r\n";

    for ( var i1 = 0; i1 < c1 + 1; i1++ )
    {
      f += "  s[" + i1 + "] -= ";

      for ( var i2 = 0; i2 < c2 - 1; i2++ )
      {
        f += "g[" + i2 + "]" + ( ( Math.pow( i2 + 1, i1 ) !== 1 ) ? " * " + Math.pow( i2 + 1, i1 ) : "") + ( ( i2 < c2 - 2 ) ? " + " : "" );
      }

      f += ";\r\n";
    }

    f += "\r\n  g.unshift( s.shift() );\r\n\r\n";

    f += AI_Mat.MkD( "s", AI_Mat.PMat.slice( 0, c1 ) );

    f += "   s.unshift( 0 ); g.unshift( 0 ); return( new DSet( s, g ) );\r\n};";

    eval(f); f = null; c1 = null; c2 = null;

    AI_Mat.debug += "<hr /><h2>Using Compiled function.</h2><hr />" + AI_Mat.SGeq[this.length].toString().html() + "";

    //Call function.

    t = AI_Mat.SGeq[ this.length ]( this );
  }

  AI_Mat.debug += "<hr /><h4>Note that you can copy the de-sequence function code if you wish to use it in any project.</h4><hr />";

  //Return Sequenced values.

  return ( t );
}

/***********************************************************************************
Decode all dimensional sequences along set.
***********************************************************************************/

Set.prototype.seq = function()
{
  //Adjust the matrix as necessary.

  AI_Mat.adjustSMat( this.length ); AI_Mat.adjustPMat( this.length );

  //Debug output.

  AI_Mat.debug += "<hr /><h2>Current Sequence Matrix.</h2><hr />"; AI_Mat.showMat( AI_Mat.SMat );
  AI_Mat.debug += "<hr /><h2>Current Alingment Matrix.</h2><hr />"; AI_Mat.showMat( AI_Mat.PMat );

  //Run Sequence function.

  var t = 0; if ( t = AI_Mat.Seq[ this.length ] ) { AI_Mat.debug += "<hr /><h2>Using Sequence function.</h2><hr />" + t.toString().html() + ""; t = t( this ); }

  //Else setup function for first time use.
  
  else
  {
    //Create function.

    eval( "AI_Mat.Seq[ " + this.length + " ] = function( s )\r\n{\r\n  var s = s.slice( 0 );\r\n\r\n\
	" + AI_Mat.MkS( "s", AI_Mat.SMat.slice( 0, this.length ), false ) + "\r\n\
	" + AI_Mat.MkD( "s", AI_Mat.PMat.slice( 0, this.length - 1 ), true ) + "\r\n\
	  return( new DSet( s, [ 0 ] ) );\r\n}" );

    AI_Mat.debug += "<hr /><h2>Using Compiled function.</h2><hr />" + AI_Mat.Seq[ this.length ].toString().html() + "";

    //Call function.

    t = AI_Mat.Seq[ this.length ]( this );
  }

  AI_Mat.debug += "<hr /><h4>Note that you can copy the de-Sequence function code if you wish to use it in any project.</h4><hr />";

  //Return Sequenced values.

  return ( t );
};

/***********************************************************************************
Decode all dimensional geo expansion sequences along set.
***********************************************************************************/

Set.prototype.geo = function()
{
  //Adjust the matrix as necessary.

  AI_Mat.adjustSMat( this.length ); AI_Mat.adjustPMat( this.length );

  //Debug output.

  AI_Mat.debug += "<hr /><h2>Current Sequence Matrix.</h2><hr />"; AI_Mat.showMat( AI_Mat.PMat );
  AI_Mat.debug += "<hr /><h2>Current Alignment Matrix.</h2><hr />"; AI_Mat.showMat( AI_Mat.SMat );

  //Run Sequence function.

  var t = 0; if ( t = AI_Mat.Geq[ this.length ] ) { AI_Mat.debug += "<hr /><h2>Using Seqence function.</h2><hr />" + t.toString().html() + ""; t = t( this ); }

  //Else setup function for first time use.
  
  else
  {
    //Create function.

    eval( "AI_Mat.Geq[ " + this.length + " ] = function( s )\r\n{\r\n  var s = s.slice( 0 );\r\n\r\n\
	" + AI_Mat.MkS( "s", AI_Mat.PMat.slice( 0, this.length ), false ) + "\r\n  s.unshift( 0 );\r\n\r\n\
	" + AI_Mat.MkD( "s", AI_Mat.SMat.slice( 0, this.length + 1 ), false ) + "\r\n\
	  s[ 0 ] = 0; return( new DSet( [ 0 ], s ) );\r\n}" );

    AI_Mat.debug += "<hr /><h2>Using Compiled function.</h2><hr />" + AI_Mat.Geq[ this.length ].toString().html() + "";

    //Call function.

    t = AI_Mat.Geq[ this.length ]( this );
  }

  AI_Mat.debug += "<hr /><h4>Note that you can copy the de-seqence function code if you wish to use it in any project.</h4><hr />";

  //Return Sequenced values.

  return ( t );
};

/***********************************************************************************
Set to string.
***********************************************************************************/

Set.prototype.toString = function( radix )
{
  for ( var i = 0, str = ""; i < this.length; str += "X" + i + " = " + this[ i++ ].toString( radix ) + "\r\n"); return ( str );
}

/***********************************************************************************
DSet is the decoding of Seq, or Geo, or both. Takes two sets. The first set can be 0 if not used.
***********************************************************************************/

//Create two new sets that are in point format that are to be decoded.

function DSet( seq, geo )
{
  this.seq = new Set( seq || [ 0 ] );
  this.geo = new Set( geo || [ 0 ] );

  //Is not filtered. Set already filtered if error correction is disabled.

  this.isFiltered = !AI_Mat.ErrCorrect;
}

/***********************************************************************************
Filter out error in geo and seq data.
***********************************************************************************/

DSet.prototype.filter = function()
{
  //EPSILON Filter.

  if ( !this.isFiltered )
  {
    this.isFiltered = true;

    //Calculate the log data of each term.

    for ( var i = 0, l = []; i < this.seq.length; l[ i ] = ( ( Math.log( Math.abs( this.seq[ i++ ] ) ) / 0.6931471805599453 ) + 0.5 ) & -1 );
    for ( var i = 0; i < this.geo.length; l[ l.length ] = ( ( Math.log( Math.abs( this.geo[ i++ ] ) ) / 0.6931471805599453 ) + 0.5 ) & -1 );

    //Remove terms outside of data.

    for ( var i = 0, avg = 0; i < l.length; avg += l[ i++ ] ); avg /= l.length;
    for ( i = 0; i < l.length; i++ ) { if (l[ i ] < avg && l[ i ] < 0 ) { if ( i < this.seq.length ) { this.seq[ i ] = 0; } else { this.geo[ i - this.seq.length ] = 0; } } }

    //Dynamic epsilon error correction if Remaining data is to be converted to very close exact fractions.

    if ( Number.prototype.getFract )
    {
      for ( var i = this.seq.length - 1, err = Math.pow( 2, ( Math.abs( avg ) ) ); i > -1; err += Math.pow( 2, Math.abs( avg ) + ( i-- ) ) )
      {
        this.seq[ i ] = ( this.seq[ i ] + 0 ).getFract( err );
      }
      for ( var i = this.geo.length - 1, err = Math.pow( 2, ( Math.abs( avg ) ) ); i > -1; err += Math.pow( 2, Math.abs( avg ) + ( i-- ) ) )
      {
        this.geo[ i ] = ( this.geo[ i ] + 0 ).getFract( err );
      }
    }
  }

  //For general use convert to best average faction if FL64 is loaded.
  
  else if ( Number.prototype.avgFract )
  {
    this.seq = this.seq.avgFract();
    this.geo = this.geo.avgFract();
  }
}

/***********************************************************************************
Convert pat to math string.
***********************************************************************************/

DSet.prototype.toString = function()
{
  //Convert sets to an function.

  this.filter();

  //Construct Sequence data into code.

  var code = "", f = "", sw = false, init = false, d = this.seq;

  for ( var i = 0; i < d.length || !sw; i++ )
  {
    if ( i === d.length ) { sw = true; d = this.geo; i = 0; }

    if ( d[ i ].valueOf() !== 0 )
    {
      if ( init ) { code += d[ i ] < 0 ? "-" : "+"; f = d[ i ].toString( "*", true ); }
      else { f = d[ i ].toString( i < 1 ? "" : "*", i < 1 ); init = true; }

      if ( i > 1 ) { code += !sw ? "X^" + i : i + "^X"; } else if ( i === 1 ) { code += "X"; }

      code += f;
    }
  }

  return (code.replace(/ /g, ""));
}

/***********************************************************************************
Return an function of the solved data.
***********************************************************************************/

DSet.prototype.getFunc = function()
{
  //Convert sets to an function.

  this.filter();

  //If function had been initialized.

  var init = false, d = this.seq, sw = false;

  //Construct Sequence data into code.

  var code = "var f = function( x )\r\n{\r\n";

  for (var i = 0; i < d.length || !sw; i++)
  {
    if ( i === d.length ) { sw = true; d = this.geo; i = 0; }

    if ( d[ i ].valueOf() !== 0 )
    {
      if ( !init )
      {
        code += "  var o = ";
        code += ( String.toExp( "x", i, sw ) === "1" ? d[ i ].toString( "", false ) : String.toExp( "x", i, sw ) + d[ i ].toString( "*", false ) ) + ";\r\n";
        init = true;
      }
      else
      {
        if ( d[ i ] < 0 ) { code += "  o -= "; } else { code += "  o += "; }

        code += ( String.toExp( "x", i, sw ) === "1" ? d[ i ].toString( "", true ) : String.toExp( "x", i, sw ) + d[ i ].toString( "*", true ) ) + ";\r\n";
      }
    }
  }

  eval( code + "\r\n  return( o );\r\n};" ); return ( f );
}

/***********************************************************************************
Convert set to HTML setting and color for each element.
***********************************************************************************/

Set.prototype.fontcolor = function( c )
{
  return ( ( this + "" ).replace( /= /g, "= <font color=\"" + c + "\">" ).replace( /\r\n/g, "</font><br />" ) );
}

/***********************************************************************************
Another simplistic forum for exponential function to code.
***********************************************************************************/

String.toExp = function( s1, s2, Order )
{
  Order && ( s2 = [ s1, s1 = s2 ][ 0 ] );

  //Special cases.

  if ( !Order ) { if ( s2 === 0 ) { return ( "1" ); } else if ( s2 === 1 ) { return ( s1 + " " ); } }
  else { if ( s1 === 0 ) { return ( "0 " ); } else if ( s1 === 1 ) { return ( "1" ); } }

  //To exp.

  return ( AI_Mat.Exp ? s1 + " ** " + s2 + " " : "Math.pow( " + s1 + ", " + s2 + ") " );
};

/***********************************************************************************
HTML format function for browsers that do not support the formatting for debug output.
***********************************************************************************/

if ( !String.prototype.fontcolor )
{
  String.prototype.fontcolor = function( c ) { return ( "<font color=\"" + c + "\">" + this + "</font>" ); }
}

/***********************************************************************************
Convert String to html.
***********************************************************************************/

String.prototype.html = function() { return ( ( this.replace( / /g, "&nbsp;" ) ).replace( /\r\n/g, "<br />" ) ); }

/***********************************************************************************
An simplistic forum for number to string with an combined operation for code generation if FL64 is not loaded.
***********************************************************************************/

if ( !Number.prototype.getFract )
{
  Number.prototype.toString = function( v, s ) { var o = this; if ( s && o < 0 ) { o = -o; } return ( ( v ? v + " " : "" ) + o + "" ); }
}

/***********************************************************************************
Another simplistic forum for exponential function to code.
***********************************************************************************/

String.toExp = function( s1, s2, Order )
{
  Order && ( s2 = [ s1, s1 = s2 ][ 0 ] );
  return ( AI_Mat.Exp ? s1 + " ** " + s2 + " " : "Math.pow( " + s1 + ", " + s2 + ") " );
};

/***********************************************************************************
Array.from compatibility to older web browsers.
***********************************************************************************/

if ( !Array.from )
{
  Array.from = function( s ) { var a = []; for ( var i = 0; i < s.length; a[ i ] = s[ i++ ]); return ( a ); }
}

/***********************************************************************************
Inherit operations from Arrays, and FL64 library if loaded otherwise functions do not exist when called on data type set.
***********************************************************************************/

for ( var i = 0, a = [ "reverse", "splice", "slice", "divP", "reduce", "valueOf", "getFract", "avgFract", "bits", "bitAnd", "bitOr", "bitXor", "bitNot", "bitRsh", "bitLsh", "toPattern", "err" ], c = ""; i < a.length; i++ )
{
  c += "Set.prototype." + a[ i ] + " = function( arg ) { return( Array.prototype." + a[ i ] + " ? new Set( Array.from( this )." + a[ i ] + "( arg ) ) : this ); };\r\n";
}
for ( var i = 0, a = [ "shift", "unshift", "push", "pop" ]; i < a.length; i++ )
{
  c += "Set.prototype." + a[ i ] + " = Array.prototype." + a[ i ] + ";\r\n";
}

eval( c ); c = undefined; i = undefined; a = undefined;
