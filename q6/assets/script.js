const element = document.querySelector(".btn");
// const element_1 = document.querySelector("#validation");
let element_1 = [];
let nameVal = [];
for (let i = 0; i < 4; i++) {
  element_1.push(document.querySelector(`#validation_${i + 1}`));

  // console.log(element_1);
  element.addEventListener("click", validation);
  function validation() {
    nameVal.push(document.querySelector(`.name_${i + 1}`).value);
    if (nameVal[i + 1] === null || nameVal[i + 1] === "") {
      element_1[i + 1].classList.remove("hidden");
      // document.getElementsByClassName("errorMessage").style.visibility =
      //   "visible";
      // document.getElementsByClassName("errorMessage").innerHTML =
      //   "Please Fill out this field";
      // return false;
    } else {
      element_1[i + 1].classList.add("hidden");
      // return true;
    }
  }
}
