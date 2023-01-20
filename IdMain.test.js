/**
 * @jest-environment jsdom
 */
const JSDOM = require("jsdom");
import { getValue } from "./IdMain.js";

describe("getValue", () => {
  beforeEach(() => {
    const dom = new JSDOM(`
    <div class="container">
    <h3>Fill up the form</h3>
    <div class="input">
      <label> Name </label>
      <input type="text" id="Uname" placeholder="enter name" />
      <label> Position </label>
      <input type="text" id="Uposition" placeholder="enter position" />
      <label> Email </label>
      <input type="text" id="Uemail" placeholder="enter email" />
      <label> Phone Number </label>
      <input type="number" id="Upnum" placeholder="enter number" />
      <button type="submit" id="create">Create</button>
    </div>
    <div id="result">
      <h4>ID card</h4>
      <div class="content">
        <p id="name">Name:</p>
        <p id="position">Position:</p>
        <p id="email">Email:</p>
        <p id="phonenumber">#:</p>
      </div>
    </div>
  </div>
    `);
    global.document = dom.window.document;
  });

  it("should display the user's input in uppercase", () => {
    const create = document.getElementById("create");
    create.addEventListener("DOMContentLoaded", getValue);
    create.click();

    const name = document.getElementById("name");
    const position = document.getElementById("position");
    const email = document.getElementById("email");
    const phonenumber = document.getElementById("phonenumber");

    expect(name.innerHTML).toBe("Name: JOHN DOE");
    expect(position.innerHTML).toBe("Position: DEVELOPER");
    expect(email.innerHTML).toBe("Email: JOHNDOE@EMAIL.COM");
    expect(phonenumber.innerHTML).toBe("#: 123-456-7890");
  });

  it("should make the result div visible", () => {
    const create = document.getElementById("create");
    create.addEventListener("DOMContentLoaded", getValue);
    create.click();

    const result = document.getElementById("result");
    expect(result.style.visibility).toBe("visible");
  });
});
// const getValue = require("./IdMain.js");

// test("test uppercase", () => {
//   expect(getValue());
// });
