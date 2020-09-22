const fight = () => {
  let monster = prompt("What monster are you fighting?");
  alert(monster);
  let hero = prompt("What is the name of your hero?");
  alert(hero);
  let monsterhealth = 50;
  let heroHealth = 50;

  while (true) {
    let heroDamage = Math.round(Math.random() * 20);
    let monsterDamge = Math.round(Math.random() * 20);
    if (heroDamage === 1 || heroDamage === 2 || heroDamage === 0) {
      heroHealth += -5;
      alert(`critical failure. ${hero} has ${heroHealth} left`);
    } else if (heroDamage >= 3 && heroDamage <= 10) {
      monsterhealth -= 0;
      alert(`Miss! ${monster} has ${monsterhealth} left`);
    } else if (heroDamage >= 11 && heroDamage <= 18) {
      monsterhealth -= 10;
      alert(`Hit! ${monster} has ${monsterhealth} left`);
    } else if (heroDamage === 19 || heroDamage === 20) {
      monsterhealth -= 20;
      alert(`Critical Hit! m${monster} has ${monsterhealth} left`);
    }

    if (monsterhealth <= 0) break;
    if (heroHealth <= 0) break;

    if (monsterDamge === 1 || monsterDamge === 2 || monsterDamge === 0) {
      monsterhealth += -5;
      alert(`critical failure. ${monster} has ${monsterhealth} left`);
    } else if (monsterDamge >= 3 && monsterDamge <= 10) {
      heroHealth -= 0;
      alert(`Miss! ${hero} has ${heroHealth} left`);
    } else if (monsterDamge >= 11 && monsterDamge <= 18) {
      heroHealth -= 10;
      alert(`Hit! ${hero} has ${heroHealth} left`);
    } else if (monsterDamge === 19 || monsterDamge === 20) {
      heroHealth -= 20;
      alert(`Critical Hit! m${hero} has ${heroHealth} left`);
    }
    if (monsterhealth <= 0) break;
    if (heroHealth <= 0) break;
  }
  if (monsterhealth <= 0) {
    alert(`${monster} lost to ${hero}.`);
  } else if (heroHealth <= 0) {
    alert(`${monster} lost to ${hero}.`);
  } else {
    alert("The both the hero and the monster lost");
  }
};

fight();
