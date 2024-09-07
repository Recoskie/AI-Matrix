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
    body .gist .gist-data .pl-s .pl-s1 { color: #a5c261 !important; }
    body .gist .gist-meta { color: #ffffff; background: #373737; }
    body .gist .gist-meta a { color: #ffffff; }
    table, tr, td { background: transparent !important; color: #f0e7d5 !important; }
    td { text-align: left; padding: 5px 10px; border-bottom: 1px solid #434343 !important; }
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
      
      var n = document.getElementsByTagName("h1"), o = "<h1>Indexed contents</h1><table><tr><td>Introduction: <a href='#i0'>Link</a></td></tr>";
      
      for(var i = 1; i < n.length; i++)
      {
        o += "<tr><td>" + n[i].innerHTML + ": <a href='#i"+i+"'>Link</a></td></tr>";
        
        var a = document.createElement("a"); a.id = "i" + i + ""; a.classList.add("cmd"); n[i].parentNode.insertBefore(a,n[i]);
      }
      
      var n = document.getElementsByTagName("article")[0]; n.innerHTML = o + "</table><a id='i0' class='cmd'></a><h1>Introduction</h1>" + n.innerHTML;
    }
  </script>
</body>
</html>