// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (M03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test('Testing calculate function with several sets of inputs', function (assert) {
    assert.equal(calculateEmi(45678,12,10), 4822.78, 'Tested with two relatively small positive numbers');
    assert.throws(function () {calculateEmi(-16789,-5,-6); }, /Value shouldn't be 0 or negative value!/, 'Passing in netagive value correctly raises an Error');    
    assert.throws(function () {calculateEmi(null,null,null); }, /Value shouldn't be 0 or negative value!/, 'Passing in null correctly raises an Error');
    assert.throws(function () {calculateEmi("Test","5","dd"); }, /Value should be a number!/, 'Passing in a string correctly raises an Error');    
});








