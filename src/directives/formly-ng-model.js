//import angular from 'angular-fix';

export default formlyNgModel;

/**
 * @ngdoc directive
 * @name formlyNgModel
 * @restrict A
 */
// @ngInject
function formlyNgModel(formlyConfig, formlyUtil){
  return {
    restrict: 'A',
    require: 'ngModel',
    link: modelLink
  };

  function modelLink(scope, el, attrs, ngModelCtrl){
    if(scope.options.noFormControl){
      return;
    }

    // Have to retrieve the controller this way instead of using require because it will not error this way.
    var formlyFieldController = el.controller('formlyField');
    formlyFieldController.addFormControl(ngModelCtrl);
  }
}