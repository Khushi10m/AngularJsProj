var app=angular.module("myMod",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/home",{templateUrl:'views/home.html',controller:'home-ctr', }).
    when("/about",{templateUrl:'views/about.html',controller:'about-ctr'  }).
    when("/gallery",{templateUrl:'views/gallery.html',controller:'gallery-ctr'    }).
    when("/syllabus",{templateUrl:'views/syllabus.html',controller:'syllabus-ctr'
    }).
    when("/contact",{templateUrl:'views/contact.html',controller:'contact-ctr'    }).
    when("/welcome",{templateUrl:'views/welcome.html',controller:'welcome-ctr'
    }).
    when("/directorNote",{templateUrl:'views/directorNote.html',controller:'directorNote-ctr' }).
    when("/teachers",{templateUrl:'views/teachers.html',controller:'teachers-ctr'
}).
      otherwise({redirectTo:'/home', templateUrl:'home.html'});
}]);


app.controller('home-ctr',function($scope){
 $scope.himg="https://khushi10m.github.io/mySchool/school%20(18).jpg"
 $scope.himg1="https://khushi10m.github.io/mySchool/school%20(6).jpg"
  $scope.himg2="https://khushi10m.github.io/mySchool/school%20(15).jpg" 
  $scope.himg3="https://khushi10m.github.io/mySchool/school%20(14).jpg" 
   $scope.himg4="https://khushi10m.github.io/mySchool/school%20(2).jpg"
   $scope.himg5="https://khushi10m.github.io/mySchool/school%20(14).jpg"
  $scope.himg6="https://khushi10m.github.io/mySchool/school%20(17).jpg" 
  $scope.himg7="im1.jpg"
  $scope.himg8="https://khushi10m.github.io/mySchool/school%20(13).jpg"
  $scope.himg9="im2.jpg"

});
// app.controller('about-ctr',function($scope){

// });
app.controller('gallery-ctr',function($scope){   

});
app.controller('syllabus-ctr',function($scope){
    $scope.syllabus=['Class Nursery','Class LKG','Class UKG','Class I','Class II','Class III','Class IV','Class V','Class VI']

});
// app.controller('contact-ctr',function($scope){

// });

app.controller('teachers-ctr',function($scope){
    $scope.teachers=[
        {SNo:1,name:'Mrs. Usha Devi',Qualification:'MA, D.LED',Designation:'Principal'},    
        {SNo:2,name:'Mr. Ajay Kumar',Qualification:'BCA,D.LEd',Designation:'Vice Principal'},
        {SNo:3,name:'Mrs. Renu Devi',Qualification:'MA, D.LED',Designation:'	PGT'},
        {SNo:4,name:'Miss. Priya Kumari',Qualification:'BSC, D.LED',Designation:'PGT'},
        {SNo:5,name:'Mr. Gautam Kumar',Qualification:'BE,B.Ed',Designation:'PGT'},
        {SNo:6,name:'Miss. Khushi Mehta',Qualification:'BE,B.Ed',Designation:'PGT'},
        {SNo:7,name:'Miss. Khushboo Kumari',Qualification:'MA, D.LED',Designation:'PGT'},
        {SNo:8,name:'Mr. Rajeev Kumar',Qualification:'MSC, D.LED',Designation:'PGT'},
        {SNo:9,name:'Mr. Ravi Yadav',Qualification:'BSC, B.Ed',Designation:'PGT'},
        {SNo:10,name:'Mr. Suraj Vishwakrma',Qualification:'MA, D.LED',Designation:'PGT'},
        {SNo:11,name:'Mrs. Komal Sharma',Qualification:'MSC, D.LED',Designation:'PGT'},
        {SNo:12,name:'Miss Soumya Kushwaha',Qualification:'BE,B.Ed',Designation:'PGT'},
        {SNo:13,name:'Mrs. Meera Sharma',Qualification:'MA, D.LED',Designation:'PGT'},
        {SNo:14,name:'Mrs. Sharika Sirvastav',Qualification:'MSC, D.LED',Designation:'PGT'},
    ]
    $scope.timg="im1.jpg";
});

app.controller('directorNote-ctr',function($scope){
    $scope.img="Director.jpg";
    $scope.img1="director2.jpg";
    $scope.img2="school%20(15).jpg";
    $scope.img3="im1.jpg";

});
app.controller('welcome-ctr',function($scope){
    $scope.wimg="school%20(4).jpg"

});

