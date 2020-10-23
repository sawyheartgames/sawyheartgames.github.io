import "./homepage-tpl.html";
import "../../style/homepage/homepage.scss";
import "../../images/header.gif"; //TODO TO DELETE
import "../../images/favicon.ico"; //TODO TO DELETE
import "../../images/pulvs.gif"; //TODO TO DELETE
import "../../images/contacts/instagram.png"; //TODO TO DELETE
import "../../images/contacts/twitter.png"; //TODO TO DELETE
import "../../images/projects-images/sit-down-please.gif"; //TODO TO DELETE

export default(function() {
    return {
        templateUrl: "/templates/homepage-tpl.html",
        controller: ["$scope", "$window", "$document", function($scope, $window) {
            $scope.projects = [{
                name: "Sit Down, Please!",
                path: "/images/sit-down-please.gif"
            }];

            $scope.openPage = function(url) {
                $window.open(url);
            }
        }]
    }
});