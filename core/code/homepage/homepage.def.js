import "angular";
import homepage from "./homepage.dir.js";

angular.module("root", [])
    .directive("siteRoot", homepage);
