function calc() {
  let userGrowth = +heightInput.value;
  if (userGrowth > 3) {
    userGrowth = userGrowth / 100;
  }

  let userWeight = +massaInput.value;

  if (userWeight > 200) {
    userWeight = userWeight / 100;
  }

  let massIndex = userWeight / userGrowth ** 2;
  massIndex = Math.round(massIndex * 100) / 100;
  resultPlace.innerHTML = massIndex;
  let infoMassIndex = massIndex;
  if (massIndex <= 16) {
    infoMassIndex = ` дефицит массы тела `;
  } else if (massIndex <= 18.5) {
    infoMassIndex = ` недостаточный  дефицит массы тела `;
  } else if (massIndex <= 25) {
    infoMassIndex = `в вашем весе НОРМА `;
  } else if (massIndex <= 30) {
    infoMassIndex = `избыточная масса тела -Предожирение `;
  } else if (massIndex <= 35) {
    infoMassIndex = `ожирение первой степени `;
  } else if (massIndex <= 40) {
    infoMassIndex = `ожирение второй степени `;
  } else {
    infoMassIndex = `ожирение третей степени `;
  }
  resultItogo.innerHTML = infoMassIndex;
}
