const Manager = require('../lib/Manager');

test("Manager is creatable with a name, id, email, role, and office number", () => {
    let testManager = new Manager("Test", 100, "testManager@email.com", 60);

    expect(testManager.name).toEqual(expect.any(String));
    expect(testManager.name).toEqual("Test");

    expect(testManager.id).toEqual(expect.any(Number));
    expect(testManager.email).toEqual(expect.any(String));
    expect(testManager.role).toEqual(expect.any(String));
    expect(testManager.officeNum).toEqual(expect.any(Number));
    expect(testManager.officeNum).toEqual(60);
});

test("Manager getter functions work as intended", () => {
    let testManager = new Manager("Test", 100, "testManager@email.com", 60);

    expect(testManager.getName()).toEqual("Test");

    expect(testManager.getID()).toEqual(100);
    expect(testManager.getEmail()).toEqual("testManager@email.com");

    expect(testManager.getRole()).toEqual("Manager");


    expect(testManager.getOfficeNum()).toEqual(60);
});