import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const prono = ["el", "la", "los", "tu"];
const nom = ["vecino", "familiar", "padre", "serie"];
const adj = ["favorita", "alto", "guapo", "bajito"];
const ext = [".com", ".es", ".org", ".wiki"];

window.onload = function () {
  for (let p of prono) {
    for (let n of nom) {
      for (let a of adj) {
        for (let e of ext) {
          console.log(p + n + a + e);
        }
      }
    }
  }
};
