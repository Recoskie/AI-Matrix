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
    p {  margin:1.5em 0; line-height:3em; color: #f0e7d5 !important; }
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
      var n = document.getElementsByTagName("a"); for(var i = 0; i < n.length; i++) { n[i].setAttribute("target", "_blank"); }
      
      var n = document.getElementsByTagName("h1"), o = "<h1>Indexed contents</h1><table>";
      
      for(var i = 1; i < n.length; i++)
      {
        o += "<tr><td>" + n[i].innerHTML + ": <a href='#i"+i+"'>Link</a></td></tr>"; n[i].id = "i" + i + "";
      }
      
      var n = document.getElementsByTagName("article")[0]; n.innerHTML = o + "</table>" + n.innerHTML;
    }
  </script>
</body>
</html>