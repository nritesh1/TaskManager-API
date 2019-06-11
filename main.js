(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/nav/nav/nav.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_components/nav/nav/nav.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/nav/nav/nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/_components/nav/nav/nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\"[routerLink]=\"['/projects']\">Task Manager</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/tasks']\">Add Task</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/viewtask']\">View Task</a></li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/_components/nav/nav/nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_components/nav/nav/nav.component.ts ***!
  \******************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/_components/nav/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/_components/nav/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/_components/task/task.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_components/task/task.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    width: 350px;\r\n    display: inline;\r\n    margin-right: 5px;\r\n}\r\n.row{\r\n    margin-top: 5px;\r\n}\r\n.btn btn-primary\r\n{\r\npadding-right: 10px;\r\n}\r\n.error {\r\n    color: red;    \r\n    font-size: 12px;\r\n    font-style: italic;\r\n}\r\n.wrapper {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.modal-header {\r\n  background: #337ab7;\r\n}\r\n.modal-body {\r\n  height: 200px;\r\n  flex: 1;\r\n  overflow: auto; \r\n}"

/***/ }),

/***/ "./src/app/_components/task/task.component.html":
/*!******************************************************!*\
  !*** ./src/app/_components/task/task.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #taskForm=\"ngForm\" (ngSubmit)=\"submit(taskForm)\" name=\"ngform\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">{{title}}</div>\n        <div class=\"panel-body\">\n          \n          <div class=\"form-group\" [class.has-error]=\"taskName.touched && taskName.invalid\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"TaskName\" class=\"control-label\">Task: </label>\n              </div>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" placeholder=\"Enter Task Name\" class=\"form-control\" id=\"TaskName\" name=\"TaskName\" [(ngModel)]=\"taskData.TaskName\"\n                  required #taskName=\"ngModel\" minlength=\"10\">\n                  <div *ngIf=\"taskName.touched && taskName.invalid\">\n                    <span class=\"error\" *ngIf=\"taskName.errors?.required\">Name is required</span>\n                    <span class=\"error\" *ngIf=\"taskName.errors?.minlength\">Minimum length is\n                {{taskName.errors.minlength.requiredLength}} </span>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"showdate && priority.touched && priority.invalid\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"txtPriority\">Priority:</label> </div>\n              <div class=\"col-sm-8 \">\n                <input id=\"Priority\" [(ngModel)]=\"taskData.Priority\" name=\"Priority\" type=\"range\" min=\"0\"\n                  max=\"30\" class=\"form-control\" step=\"1\" required #priority=\"ngModel\">\n                  <div *ngIf=\"showdate && priority.touched && priority.invalid\">\n                    <span class=\"error\" *ngIf=\"priority.errors?.required\">Priority is required</span>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"parenTtask.touched && parenTtask.invalid\">\n            <div class=\"row \">\n              <div class=\"col-sm-3 \">\n                <label for=\"Parent_Task\">Parent Task:</label>\n              </div>\n              <div class=\"col-sm-8 \">\n                <input id=\"Parent_Task\" disabled placeholder=\"Select Parent Task\" type=\"text\" class=\"form-control\" name=\"Parent_Task\" [(ngModel)]=\"parenttask\"\n                  required #parenTtask=\"ngModel\">\n                  <button type=\"button\" style=\"width:85px;\" class=\"btn btn-info\" (click)=\"openModal(Parenttemplate)\"\n                    name=\"Search\">Search</button>\n\n                    <ng-template #Parenttemplate class=\"wrapper\">\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title pull-left \">Parent Tasks</h4>\n                        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\" name=\"Close\">      \n                        <span aria-hidden=\"true\">&times;</span></button>\n                      </div>\n                      <div class=\"modal-body\" >\n                        \n                        <!--<select ng-model=\"parentTaskList\" ng-app [(ngModel)]=\"parent_ID\" (change)=\"ontaskChange($event)\" class=\"form-control\" name=\"parentTaskList\">\n                      <option value=\"\" selected disabled hidden>Choose here</option>\n                     <option *ngFor = \"let parenttask of parenttasks\" value={{parenttask.Parent_ID}} >{{parenttask.Parent_Task}}</option>\n                     </select>-->\n\n                     <ngx-select-dropdown [config]=\"config\" [options]=\"parenttasks\" (change)=\"ontaskChange($event)\"\n            [(value)]=\"singleSelect\" [multiple]=\"false\" ></ngx-select-dropdown>\n                      </div>  \n                      <div class=\"modal-footer\" >\n                        <div class=\"pull-right\">\n                          <button (click)=\"modalRef.hide()\" class=\"btn btn-primary\">OK</button>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                    <!-- <div *ngIf=\"parenTtask.touched && parenTtask.invalid\">\n                      <span class=\"error\" *ngIf=\"parenTtask.errors?.required\">parenTtask is required</span>\n                    </div> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"showdate && startDate.touched && startDate.invalid  && endDate.touched && endDate.invalid\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"txtStartdate \">Start Date:</label>\n\n              </div>\n              <div class=\"col-sm-8\">\n                <input id=\"Start_Date\" class=\"form-control\" name=\"Start_Date\" type=\"date\" [ngModel]=\"taskData.Start_Date | date:'yyyy-MM-dd'\"\n                  required #startDate=\"ngModel\">\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\"  [class.has-error]=\"showdate && endDate.touched && endDate.invalid  && endDate.touched && endDate.invalid\">\n\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"txtenddate\">End Date:</label>\n\n              </div>\n              <div class=\"col-sm-8\">\n\n                <input id=\"End_Date\" type=\"date\" name=\"End_Date\" [ngModel]=\"taskData.End_Date | date:'yyyy-MM-dd'\"\n                  class=\"form-control\" required #endDate=\"ngModel\">\n                  <!-- <div *ngIf=\"showdate && startDate.touched && startDate.invalid && endDate.touched && endDate.invalid\">\n                    <span class=\"error\" *ngIf=\"showdate && startDate.errors?.required\">StartDate and EndDate is required</span>\n                  </div> -->\n              </div>\n            </div>\n\n          </div>\n          \n\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"pull-right\">\n            <button type=\"submit\" class=\"btn btn-md btn-primary\" style=\"width:85px;\" [disabled]=\"taskForm.invalid\">{{ SubmitBtnName}}</button>            &nbsp;\n            <button type=\"reset\" style=\"width:85px;\" class=\"btn btn-success\">Reset</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/_components/task/task.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_components/task/task.component.ts ***!
  \****************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/task.service */ "./src/app/_services/task.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskComponent = /** @class */ (function () {
    function TaskComponent(modalService, router, taskService, route) {
        this.modalService = modalService;
        this.router = router;
        this.taskService = taskService;
        this.route = route;
        this.title = 'Add Task';
        this.SubmitBtnName = 'Add Task';
        this.showdate = false;
        this.todate = new Date();
        this.tasks = [];
        this.taskData = { Task_ID: null, Parent_ID: null, TaskName: '', Start_Date: new Date(), End_Date: this.todate, Priority: 0, Status: '', ParentTask: null };
        this.parenttaskData = { Parent_ID: null, Parent_Task: '' };
        this.config = {
            displayKey: "Parent_Task",
            search: true //enables the search plugin to search in the list
        };
        this.singleSelect = [];
    } // {2}
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.edit(parseInt(id));
        }
        this.taskService.getparentTasks()
            .subscribe(function (response) {
            _this.parenttasks = response;
            console.log(response);
        });
        this.todate.setDate(this.todate.getDate() + 1);
    };
    TaskComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template); // {3}
    };
    TaskComponent.prototype.closeModal = function (template) {
        // this.userBodyTextname=template.elementRef.
        this.modalService.hide(1);
        //search(); 
    };
    TaskComponent.prototype.ontaskChange = function (event) {
        //console.log(event);
        this.parenttask = event.value[0].Parent_Task;
        this.parentid = event.value[0].Parent_ID;
        // console.log(Parent_IDtext);Parent_ID
        if (this.parenttask != '')
            this.showdate = true;
    };
    TaskComponent.prototype.submit = function (form) {
        var _this = this;
        var request = form.value;
        if (this.parentid != null) {
            request.Parent_ID = this.parentid.toString();
        }
        if (!this.isEdit) {
            this.taskService.addTask(request)
                .subscribe(function (response) {
                _this.tasks.push(response);
                confirm('Task Details Saved Successfully');
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
            });
        }
        else {
            request.Task_ID = this.taskId;
            this.taskService.addTask(request)
                .subscribe(function (task) {
                var tskIndex = _this.tasks.findIndex(function (tsk) { return tsk.Task_ID == _this.taskId; });
                if (tskIndex != -1) {
                    _this.tasks[tskIndex] = task;
                }
                confirm('Task Details Updated Successfully');
                _this.router.navigate(['/viewtask']);
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
                _this.isEdit = false;
            });
        }
    };
    TaskComponent.prototype.delete = function (id) {
        var _this = this;
        var isDelete = confirm('Do you wish to delete the Task?');
        if (isDelete) {
            this.taskService.deleteTask(id)
                .subscribe(function (response) {
                if (response) {
                    var projIndex = _this.tasks.findIndex(function (proj) { return proj.Task_ID == id; });
                    if (projIndex != -1) {
                        _this.tasks.splice(projIndex, 1);
                    }
                }
            });
        }
    };
    TaskComponent.prototype.edit = function (id) {
        var _this = this;
        this.title = 'Update Task';
        this.SubmitBtnName = 'Update';
        this.taskService.getTask(id)
            .subscribe(function (task) {
            _this.taskData.Parent_ID = task.Parent_ID;
            _this.taskData.TaskName = task.TaskName;
            _this.taskData.End_Date = task.End_Date;
            _this.taskData.Start_Date = task.Start_Date;
            _this.taskData.Priority = task.Priority;
            _this.taskData.ParentTask = task.ParentTask;
            _this.parenttask = task.ParentTask.Parent_Task;
            _this.parentid = task.ParentTask.Parent_ID;
            _this.isEdit = true;
            _this.taskId = id;
        });
    };
    TaskComponent.prototype.view = function (id) {
        this.router.navigate(['/tasks', id]);
    };
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/_components/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/_components/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/_components/viewtask/viewtask.component.css":
/*!*************************************************************!*\
  !*** ./src/app/_components/viewtask/viewtask.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    width: 350px;\r\n    display: inline;\r\n    margin-right: 5px;\r\n}\r\n.row{\r\n    margin-top: 5px;\r\n}\r\n.btn btn-primary\r\n{\r\npadding-right: 10px;\r\n}\r\n.error {\r\n    color: red;    \r\n    font-size: 12px;\r\n    font-style: italic;\r\n}\r\n.list-group .list-group-item{\r\n    width: 500px;\r\n}"

/***/ }),

/***/ "./src/app/_components/viewtask/viewtask.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/viewtask/viewtask.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #viewtaskForm=\"ngForm\" (ngSubmit)=\"submit(viewtaskForm)\" name=\"ngform\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">View Task</div>\n        <div class=\"panel-body\">\n          <div class=\"form-group\">\n            <div class=\"row\" style=\"padding-bottom: 15px;  border-bottom: 1px dashed blue;\">\n              <div class=\"col-sm-6\">\n                <label for=\"\">Task: </label> &nbsp;\n                <input type=\"text\" style=\"margin-bottom: 5px;\"\n                (input)=\"onTaskChange($event.target.value)\" class=\"form-control\">\n                <label for=\"\">Priority From: </label> &nbsp;\n                <input type=\"number\" style=\"width:100px;\"\n                (input)=\"onPriorityFromChange($event.target.value)\"  class=\"form-control\">\n                <label for=\"\">Priority To: </label> &nbsp;\n                <input type=\"number\" style=\"width:103px;\"\n                (input)=\"onPriorityToChange($event.target.value)\"  class=\"form-control\">\n              </div>\n              <div class=\"col-sm-6\">\n                <label for=\"\">Parent Task: </label> &nbsp;\n                <input type=\"text\" style=\"width:305px; margin-bottom: 5px;\"\n                (input)=\"onParentTaskChange($event.target.value)\"  class=\"form-control\">\n                <label for=\"\">Start Date: </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <input type=\"date\" style=\"width:110px;\" \n                (input)=\"onStartDateChange($event.target.value)\" class=\"form-control\">\n                <label for=\"\">End Date: </label> &nbsp;\n                <input type=\"date\" style=\"width:110px;\" \n                (input)=\"onEndDateChange($event.target.value)\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-sm-12\" *ngFor=\"let tsk of filteredTasks\">\n              <div class=\"row\">\n                <div class=\"col-sm-2 pull-left\" > Task</div>\n                <div class=\"col-sm-2 pull-left\" style=\"margin-left: 5px;\"> Parent</div>\n                <div class=\"col-sm-1 pull-left\"> Priority</div>\n                <div class=\"col-sm-2 pull-left\"> Start</div>\n                <div class=\"col-sm-2 pull-left\"> End</div>\n                <div class=\"pull-left\"></div>\n              </div>\n              <div class=\"row\" >\n                <div class=\"col-sm-2 pull-left\" style=\"background-color:lightgray; height: 50px; \"> {{tsk.TaskName}}</div>\n                <div class=\"col-sm-2 pull-left\" style=\"background-color:lightgray; height: 50px;margin-left: 5px;\"> {{tsk.ParentTask?.Parent_Task}}</div>\n                <div class=\"col-sm-1 pull-left\"> {{tsk.Priority}}</div>\n                <div class=\"col-sm-2 pull-left\"> {{tsk.Start_Date | date:'yyyy-MM-dd'}}</div>\n                <div class=\"col-sm-2 pull-left\"> {{tsk.End_Date | date:'yyyy-MM-dd'}}</div>\n                <div class=\"pull-left\">\n                  <button *ngIf=\"tsk.Status != 'Completed'\" (click)=\"view(tsk.Task_ID)\" class=\"btn btn-primary btn-md\" style=\"width:80px;\" name=\"Edit\" id=\"Edit\">  Edit </button> &nbsp;\n                  <button *ngIf=\"tsk.Status != 'Completed'\" (click)=\"delete(tsk.Task_ID)\" class=\"btn btn-primary btn-md\" style=\"width:80px;\" name=\"Delete\" id=\"Delete\">  End Task </button></div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/_components/viewtask/viewtask.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_components/viewtask/viewtask.component.ts ***!
  \************************************************************/
/*! exports provided: ViewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskComponent", function() { return ViewtaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/task.service */ "./src/app/_services/task.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent(modalService, router, taskService, location) {
        this.modalService = modalService;
        this.router = router;
        this.taskService = taskService;
        this.location = location;
        this.fTask = "";
        this.fParentTask = "";
        this.fPriotityFrom = 0;
        this.fPriorityTo = 99999999;
        this.fStartDate = null;
        this.fEndDate = null;
        this.tasks = [];
        this.filteredTasks = [];
        this.taskData = { Task_ID: null, Parent_ID: null, TaskName: '', Start_Date: null, End_Date: null, Priority: null, Status: '', ParentTask: null };
        this.parenttaskData = { Parent_ID: null, Parent_Task: '' };
    } // {2}
    ViewtaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getparentTasks()
            .subscribe(function (response) {
            _this.parenttasks = response;
            console.log(response);
        });
        this.taskService.getTasks()
            .subscribe(function (response) {
            _this.tasks = response;
            _this.filteredTasks = _this.tasks;
            console.log(response);
        });
    };
    ViewtaskComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template); // {3}
    };
    ViewtaskComponent.prototype.closeModal = function (template) {
        // this.userBodyTextname=template.elementRef.
        this.modalService.hide(1);
        //search();
    };
    ViewtaskComponent.prototype.updateFilter = function () {
        var _this = this;
        this.filteredTasks = this.tasks.filter(function (x) {
            return (x.TaskName == '' || x.TaskName.indexOf(_this.fTask) > -1)
                &&
                    ((x.ParentTask.Parent_Task == '')
                        || (x.ParentTask.Parent_Task.indexOf(_this.fParentTask) > -1))
                &&
                    (x.Priority >= _this.fPriotityFrom)
                &&
                    (x.Priority <= _this.fPriorityTo)
                &&
                    (_this.fStartDate == null || x.Start_Date >= _this.fStartDate)
                &&
                    (_this.fEndDate == null || x.End_Date <= _this.fEndDate);
        });
    };
    ViewtaskComponent.prototype.onTaskChange = function (searchValue) {
        this.fTask = searchValue;
        this.updateFilter();
    };
    ViewtaskComponent.prototype.onPriorityFromChange = function (searchValue) {
        this.fPriotityFrom = searchValue;
        this.updateFilter();
    };
    ViewtaskComponent.prototype.onPriorityToChange = function (searchValue) {
        this.fPriorityTo = searchValue;
        this.updateFilter();
    };
    ViewtaskComponent.prototype.onParentTaskChange = function (searchValue) {
        this.fParentTask = searchValue;
        this.updateFilter();
    };
    ViewtaskComponent.prototype.onStartDateChange = function (searchValue) {
        this.fStartDate = searchValue;
        this.updateFilter();
    };
    ViewtaskComponent.prototype.onEndDateChange = function (searchValue) {
        this.fEndDate = searchValue;
        this.updateFilter();
    };
    ViewtaskComponent.prototype.submit = function (form) {
        var _this = this;
        var request = form.value;
        request.Parent_ID = this.parentid.toString();
        if (!this.isEdit) {
            this.taskService.addTask(request)
                .subscribe(function (response) {
                _this.tasks.push(response);
                console.log(response);
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
            });
        }
        else {
            this.taskService.updateTask(this.taskId, request)
                .subscribe(function (task) {
                var tskIndex = _this.tasks.findIndex(function (tsk) { return tsk.Task_ID == _this.taskId; });
                if (tskIndex != -1) {
                    _this.tasks[tskIndex] = task;
                }
                confirm('Task Details Updated Successfully');
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
                _this.isEdit = false;
            });
        }
    };
    ViewtaskComponent.prototype.delete = function (id) {
        var _this = this;
        var isDelete = confirm('Do you wish to End the Task?');
        if (isDelete) {
            this.taskService.deleteTask(id)
                .subscribe(function (task) {
                var tskIndex = _this.tasks.findIndex(function (tsk) { return tsk.Task_ID == _this.taskId; });
                if (tskIndex != -1) {
                    _this.tasks[tskIndex] = task;
                }
                confirm('Task has been Completed Successfully');
                location.reload();
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                // form.reset();
                _this.isEdit = false;
            });
        }
    };
    ViewtaskComponent.prototype.edit = function (id) {
        var _this = this;
        this.taskService.getTask(id)
            .subscribe(function (task) {
            _this.taskData.Parent_ID = task.Parent_ID;
            _this.taskData.TaskName = task.TaskName;
            _this.taskData.End_Date = task.End_Date;
            _this.taskData.Start_Date = task.Start_Date;
            _this.taskData.Priority = task.Priority;
            _this.taskData.ParentTask = task.ParentTask;
            _this.isEdit = true;
            _this.taskId = id;
        });
    };
    ViewtaskComponent.prototype.view = function (id) {
        this.router.navigate(['/tasks', id]);
    };
    ViewtaskComponent.prototype.sort = function (param) {
        var _this = this;
        if (param == 'StartDate') {
            this.taskService.getTasks()
                .subscribe(function (response) {
                _this.tasks = response.sort(function (a, b) {
                    return new Date(b.Start_Date) - new Date(a.Start_Date);
                });
            });
        }
        if (param == 'EndDate') {
            this.taskService.getTasks()
                .subscribe(function (response) {
                _this.tasks = response.sort(function (a, b) {
                    return new Date(b.End_Date) - new Date(a.End_Date);
                });
            });
        }
        if (param == 'Priority') {
            this.taskService.getTasks()
                .subscribe(function (response) {
                _this.tasks = response.sort(function (a, b) { return a.Priority.toString().localeCompare(b.Priority.toString(), undefined, { numeric: true }); });
            });
        }
    };
    ViewtaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.component.html */ "./src/app/_components/viewtask/viewtask.component.html"),
            styles: [__webpack_require__(/*! ./viewtask.component.css */ "./src/app/_components/viewtask/viewtask.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ViewtaskComponent);
    return ViewtaskComponent;
}());



/***/ }),

/***/ "./src/app/_services/task.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/task.service.ts ***!
  \*******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        // private apiUrl: string = 'http://localhost/WebAPIService/api/tasks';
        this.apiUrl = 'http://localhost:57022/api/tasks';
    }
    TaskService.prototype.addTask = function (request) {
        return this.http.post(this.apiUrl, request);
    };
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.apiUrl);
    };
    TaskService.prototype.getparentTasks = function () {
        return this.http.get(this.apiUrl + "/GetParentTasks");
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.get(this.apiUrl + '/DeleteTaskData/' + id);
    };
    TaskService.prototype.getTask = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    TaskService.prototype.updateTask = function (id, request) {
        return this.http.put(this.apiUrl + '/' + id, request);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TaskManager-SPA';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_nav_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/nav/nav/nav.component */ "./src/app/_components/nav/nav/nav.component.ts");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/task/task.component */ "./src/app/_components/task/task.component.ts");
/* harmony import */ var _components_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/viewtask/viewtask.component */ "./src/app/_components/viewtask/viewtask.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ag-grid-angular/main */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: _components_task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"] },
    { path: 'tasks', component: _components_task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"] },
    { path: 'tasks/:id', component: _components_task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"] },
    { path: 'viewtask', component: _components_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_8__["ViewtaskComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_nav_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _components_task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"],
                _components_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_8__["ViewtaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
                ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_13__["AgGridModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_14__["SelectDropDownModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\Capsule\TaskManager-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
