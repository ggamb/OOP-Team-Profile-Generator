const Intern = require('../lib/Intern');

test("Intern is creatable with a name, id, email, role, and school", () => {
    let testIntern = new Intern("Test", 100, "testIntern@email.com", "Test School");

    expect(testIntern.name).toEqual(expect.any(String));
    expect(testIntern.name).toEqual("Test");

    expect(testIntern.id).toEqual(expect.any(Number));
    expect(testIntern.email).toEqual(expect.any(String));
    expect(testIntern.role).toEqual("Intern");
    expect(testIntern.school).toEqual(expect.any(String));
    expect(testIntern.school).toEqual("Test School");
});