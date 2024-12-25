let Notfication = document.querySelector(".Notfication");
let MainBox = document.querySelector(".MainBox");
let AddBar = document.querySelector(".AddBar");
let Form = document.querySelector(".Form");
let NameInput = document.querySelector("#Name");
let DiscriptionInput = document.querySelector("#Discription");
let FormBtn = document.querySelector("#Form-btn");
localStorage.setItem("MainArray", {});
/////////////
AddBar.addEventListener("click", () => {
  Form.style.display = "block";
});
FormBtn.addEventListener("click", async () => {
  inputArray = new MakeArrayForToDoList(
    NameInput.value,
    DiscriptionInput.value
  );
  localStorage.MainArray += JSON.stringify(inputArray);
  console.log(JSON.parse(localStorage.getItem("MainArray")));

  Form.style.display = "none";
});
class MakeArrayForToDoList {
  constructor() {
    this.name = ArrayDetails[0];
    this.Discription = ArrayDetails[1];
  }
}
