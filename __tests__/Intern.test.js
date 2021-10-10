const Intern = require('../lib/Intern');

test("Intern is creatable with name, id, email, role, and school properties", () => {
    let testIntern = new Intern("Test", 100, "testIntern@email.com", "Test School");

    expect(testIntern.name).toEqual(expect.any(String));
    expect(testIntern.name).toEqual("Test");

    expect(testIntern.id).toEqual(expect.any(Number));
    expect(testIntern.email).toEqual(expect.any(String));
    expect(testIntern.role).toEqual("Intern");
    expect(testIntern.school).toEqual(expect.any(String));
    expect(testIntern.school).toEqual("Test School");
});

test("Intern getters work as intended", () => {
    let testIntern = new Intern("Test", 100, "testIntern@email.com", "Test School");

    expect(testIntern.getName()).toEqual("Test");
    expect(testIntern.getID()).toEqual(100);
    expect(testIntern.getEmail()).toEqual("testIntern@email.com");
    expect(testIntern.getRole()).toEqual("Intern");
    expect(testIntern.getSchool()).toEqual("Test School");
});