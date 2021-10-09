const Engineer = require('../lib/Engineer');

test("Engineer is creatable with a name, id, email, role, and github", () => {
    let testEngineer = new Engineer("Test", 100, "testEngineer@email.com", "testGithub");

    expect(testEngineer.name).toEqual(expect.any(String));
    expect(testEngineer.name).toEqual("Test");

    expect(testEngineer.id).toEqual(expect.any(Number));
    expect(testEngineer.email).toEqual(expect.any(String));
    expect(testEngineer.role).toEqual("Engineer");
    expect(testEngineer.github).toEqual(expect.any(String));
    expect(testEngineer.github).toEqual("testGithub");
});