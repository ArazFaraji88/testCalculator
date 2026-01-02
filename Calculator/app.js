function addNumber() {
  let input1 = Number(
    document.getElementsByClassName("wrapper__input")[0].value
  );
  let input2 = Number(
    document.getElementsByClassName("wrapper__input2")[0].value
  );

  document.getElementsByClassName("wrapper__p-output+")[0].textContent =
    input1 + input2;
}
function minusNumber() {
  let input3 = Number(
    document.getElementsByClassName("wrapper__input3")[0].value
  );
  let input4 = Number(
    document.getElementsByClassName("wrapper__input4")[0].value
  );

  document.getElementsByClassName("wrapper__p-output-")[0].textContent =
    input3 - input4;
}
function MultiplyNumber() {
  let input5 = Number(
    document.getElementsByClassName("wrapper__input5")[0].value
  );
  let input6 = Number(
    document.getElementsByClassName("wrapper__input6")[0].value
  );

  document.getElementsByClassName("wrapper__p-output*")[0].textContent =
    input5 * input6;
}
function divideNumber() {
  let input7 = Number(
    document.getElementsByClassName("wrapper__input7")[0].value
  );
  let input8 = Number(
    document.getElementsByClassName("wrapper__input8")[0].value
  );

  document.getElementsByClassName("wrapper__p-output/")[0].textContent =
    input7 / input8;
}
