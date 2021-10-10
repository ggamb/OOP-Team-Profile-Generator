const Employee = require('../lib/Employee');

test("Employee is creatable with name, id, email, and role properties", () => {
    let testEmployee = new Employee("Test", 100, "testEmployee@email.com");

    expect(testEmployee.name).toEqual(expect.any(String));
    expect(testEmployee.name).toEqual("Test");

    expect(testEmployee.id).toEqual(expect.any(Number));
    expect(testEmployee.email).toEqual(expect.any(String));
    expect(testEmployee.role).toEqual("Employee");
});

test("Employee getter functions work as intended", () => {
    let testEmployee = new Employee("Test", 100, "testEmployee@email.com");

    expect(testEmployee.getName()).toEqual(expect.any(String));
    expect(testEmployee.getName()).toEqual("Test");

    expect(testEmployee.getID()).toEqual(expect.any(Number));
    expect(testEmployee.getID()).toEqual(100);

    expect(testEmployee.getEmail()).toEqual(expect.any(String));
    expect(testEmployee.getEmail()).toEqual("testEmployee@email.com");

    expect(testEmployee.getRole()).toEqual("Employee");
});