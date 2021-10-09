const Employee = require('../lib/Employee');

test("Employee is creatable with a name, id, email, and role", () => {
    let testEmployee = new Employee("Test", 100, "testEmployee@email.com");

    expect(testEmployee.name).toEqual(expect.any(String));
    expect(testEmployee.name).toEqual("Test");

    expect(testEmployee.id).toEqual(expect.any(Number));
    expect(testEmployee.email).toEqual(expect.any(String));
    expect(testEmployee.role).toEqual("Employee");
});