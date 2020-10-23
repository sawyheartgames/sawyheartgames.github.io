import "./homepage-tpl.html";
import "../../style/homepage/homepage.scss";
import "../../images/header.gif"; //TO BE DELETED
import "../../images/favicon.ico"; //TO BE DELETED
import "../../images/pulvs.gif"; //TO BE DELETED
import "../../images/contacts/instagram.png"; //TO BE DELETED
import "../../images/contacts/twitter.png"; //TO BE DELETED
import "../../images/projects-images/sit-down-please.gif"; //TO BE DELETED

export default(function() {
    return {
        templateUrl: "/templates/homepage-tpl.html",
        controller: ["$scope", "$window", "$document", function($scope, $window) {
            $scope.projects = [{
                name: "Sit Down, Please",
                path: "/images/sit-down-please.gif"
            }];

            $scope.openPage = function(url) {
                $window.open(url);
            }
        }]
    }
});