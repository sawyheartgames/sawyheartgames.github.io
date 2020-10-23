import "angular";
//import "../footer/footer.def.js"; //footer
import homepage from "./homepage.dir.js";

angular.module("root", [])
    .directive("siteRoot", homepage);
