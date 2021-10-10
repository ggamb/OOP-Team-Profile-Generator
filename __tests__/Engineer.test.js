const Engineer = require('../lib/Engineer');

test("Engineer is creatable with name, id, email, role, and github properties", () => {
    let testEngineer = new Engineer("Test", 100, "testEngineer@email.com", "testGithub");

    expect(testEngineer.name).toEqual(expect.any(String));
    expect(testEngineer.name).toEqual("Test");

    expect(testEngineer.id).toEqual(expect.any(Number));
    expect(testEngineer.email).toEqual(expect.any(String));
    expect(testEngineer.role).toEqual("Engineer");
    expect(testEngineer.github).toEqual(expect.any(String));
    expect(testEngineer.github).toEqual("testGithub");
});

test("Engineer getter functions work as intended", () => {
    let testEngineer = new Engineer("Test", 100, "engineer@email.com", "github");

    expect(testEngineer.getName()).toEqual(expect.any(String));
    expect(testEngineer.getName()).toEqual("Test");

    expect(testEngineer.getID()).toEqual(expect.any(Number));
    expect(testEngineer.getID()).toEqual(100);

    expect(testEngineer.getEmail()).toEqual(expect.any(String));
    expect(testEngineer.getEmail()).toEqual("engineer@email.com");

    expect(testEngineer.getGithub()).toEqual("github");

    expect(testEngineer.getRole()).toEqual("Engineer");
});