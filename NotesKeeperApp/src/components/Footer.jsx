import React from "react";

var date = new Date();
var year = date.getFullYear();

function Footer(){
   return (<footer><p>Copyright &copy;{year}</p></footer>)
}

export default Footer;