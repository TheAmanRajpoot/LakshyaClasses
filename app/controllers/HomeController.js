lakshyaApp.controller('HomeController', function($scope, $rootScope, $state){
    // alert('Hii')
    $scope.goToContact = function(){
    //    var myData = 'test';
       $state.go('Header.Contact', {myData:'test'});
    }


    $scope.testData = [
        {
            id: 1,
            title: 'Online Courses',
            icon: 'icon-agenda-1'
        },
        {
            id: 2,
            title: 'Amazing Teachers',
            icon: 'icon-assistance'
        },
        {
            id: 3,
            title: 'Great Support',
            icon: 'icon-telephone-3'
        }
    ];

    $scope.myData = [
        {
            id:1,
            title: 'Business School',
            detail: 'Cras vitae turpis lacinia, lacinia la cus non, fermentum nisi.',
            icon: 'icon-id-card'
        },
        {
            id:2,
            title: 'Marketing',
            detail: 'Lacinia, lacinia la cus non, fermen tum nisi.',
            icon: 'icon-worldwide'
        },
        {
            id:3,
            title: 'Photography',
            detail: 'Cras vitae turpis lacinia, lacinia la cus non, fermentum nisi.',
            icon: 'icon-map'
        },
        {
            id:4,
            title: 'Social Media',
            detail: 'Cras vitae turpis lacinia, lacinia la cus non, fermentum nisi.',
            icon: 'icon-like'
        },
        {
            id:5,
            title: 'Development',
            detail: 'Lacinia, lacinia la cus non, fermen tum nisi.',
            icon: 'icon-responsive'
        },
        {
            id:6,
            title: 'Design',
            detail: 'Cras vitae turpis lacinia, lacinia la cus non, fermentum nisi.',
            icon: 'icon-message'
        }
    ];

    $scope.detailData = [
        {
            title: 'Great teachers',
            detail: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam'+
            'nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam'+
            'nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.',
            name: 'Maria Smith,',
            type: 'Student',
            image: 'assets/img/bg-img/t1.jpg'
        },
        {
            title: 'Easy and user friendly courses',
            detail: 'Retiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit.',
            name: 'Shawn Gaines,',
            type: 'Student',
            image: 'assets/img/bg-img/t2.jpg'
        },
        {
            title: 'I just love the courses here',
            detail: 'Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit.',
            name: 'Ross Cooper,',
            type: 'Student',
            image: 'assets/img/bg-img/t3.jpg'
        },
        {
            title: 'One good academy',
            detail: 'Vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit.',
            name: 'James Williams,',
            type: 'Student',
            image: 'assets/img/bg-img/t4.jpg'
        }
    ];

    $scope.courseData = [
        {
            title: 'Business for begginers',
            name: 'Simon Smith',
            date: 'March 18, 2018',
            detail: 'Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod.',
            image: 'assets/img/bg-img/pc-1.jpg'
        },
        {
            title: 'Advanced HTML5',
            name: 'Simon Smith',
            date: 'March 18, 2018',
            detail: 'Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod.',
            image: 'assets/img/bg-img/pc-2.jpg'
        },
        {
            title: 'Marketing 101',
            name: 'Simon Smith',
            date: 'March 18, 2018',
            detail: 'Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod.',
            image: 'assets/img/bg-img/pc-3.jpg'
        },
        {
            title: 'Business for begginers',
            name: 'Simon Smith',
            date: 'March 18, 2018',
            detail: 'Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod.',
            image: 'assets/img/bg-img/pc-4.jpg'
        }
    ];
})