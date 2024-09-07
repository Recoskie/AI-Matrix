---
layout: default
image:
  path: https://repository-images.githubusercontent.com/24019736/faa49a00-65ec-11ea-8fae-da9b8ce0e7d1
---

<html>
<body onload="setup();">
  <script src="https://gist.github.com/Recoskie/de34fad9c803c670795ba85d721008c8.js"></script>
  <style type="text/css">
    <!--
    .gist-data { background-color: inherit !important; }
    p { margin:0.809em 0; line-height:1.618em; color: #f0e7d5 !important; }
    body .gist .gist-meta { color: #ffffff; background: #373737; }
    tr, td { width: 100vw !important; border-left: 0px !important; border-right: 0px !important; border-top: 0px !important; }
    table, tr, td { background: transparent !important; color: #f0e7d5 !important; }
    .cmd:target
    {
      display: block;
      height: 4rem; margin-top: -4rem;
      visibility: hidden;
    }
    -->
  </style>
  <script>
    function setup()
    {
      //Change all links to open in new tab.

      var n = document.getElementsByTagName("a"); for(var i = 0; i < n.length; i++) { n[i].setAttribute("target", "_blank"); }

      //Create indexed contents section.
      
      var n = document.getElementsByTagName("h1"), o = "<h1>Indexed contents</h1><table><tr><td>Introduction: <a href='#i0'>Link</a></td></tr>";
      
      for(var i = 1; i < n.length; i++)
      {
        o += "<tr><td>" + n[i].innerHTML + ": <a href='#i"+i+"'>Link</a></td></tr>";
        
        var a = document.createElement("a"); a.id = "i" + i + ""; a.classList.add("cmd"); n[i].parentNode.insertBefore(a,n[i]);
      }
      
      var n = document.getElementsByTagName("article")[0]; n.innerHTML = o + "</table><a id='i0' class='cmd'></a><h1>Introduction</h1>" + n.innerHTML;

      //Override gist styles with default page theme.

      var o = "", r = document.styleSheets[0].rules; for(var i1 = 0;i1 < r.length;i1++){ for(var i2 = 0, s = r[i1].cssText.split(";"); i2 < s.length-1; i2++ ){o += s[i2] + " !important;";} o += s[i2] + "\r\n"; }

      var style=document.createElement("style"); style.innerHTML = o; document.head.appendChild(style);
    }
  </script>
</body>
</html>