// File: module/rollDialogs.js

export async function openCustomRollDialog() {
    new Dialog({
      title: game.i18n.localize("dust1e.roll.dialog.title"),
      content: await renderTemplate("systems/dust1e/templates/dialogs/custom-roll-dialog.html"),
      buttons: {
        roll: {
          label: game.i18n.localize("dust1e.roll.dialog.roll"),
          callback: html => {
            const dice = parseInt(html.find("#roll-dice").val());
            const keepRoll = html.find("#keep-roll").val();
            const rollFormula = `${dice}d8+${modifier}`;
            const roll = new Roll(rollFormula).roll();
            
            let keptRolls;
            if (keepRoll === "highest") {
              keptRolls = roll.terms[0].results.sort((a, b) => b.result - a.result).slice(0, dice);
            } else {
              keptRolls = roll.terms[0].results.sort((a, b) => a.result - b.result).slice(0, dice);
            }
  
            const keptTotal = keptRolls.reduce((sum, r) => sum + r.result, 0) + modifier;
            roll.total = keptTotal;
            roll.toMessage();
          }
        },
        cancel: {
          label: game.i18n.localize("dust1e.roll.dialog.cancel"),
          callback: () => console.log("Roll cancelled")
        }
      }
    }).render(true);
  }
  