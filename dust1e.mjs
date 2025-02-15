// File: module/dust1e.mjs

import { registerHandlebarsHelpers } from './json/helpers/registerHandlebarsHelpers.js';
import { preloadTemplates } from './templates/preloadTemplates.js';
import { DustActor } from './json/actor/DustActor.js';
import { DustItem } from './json/item/DustItem.js';

Hooks.once('init', async function() {
  console.log('Dust | Initializing DUST System');

  // Assign custom classes and constants
  CONFIG.Actor.documentClass = DustActor;
  CONFIG.Item.documentClass = DustItem;

  // Register custom handlebars helpers
  registerHandlebarsHelpers();

  // Preload Handlebars templates
  await preloadTemplates();

  // Register custom system settings
  game.settings.register('dust1e', 'mySetting', {
    name: 'My Custom Setting',
    hint: 'A description of what this setting does.',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true,
  });

  // Define custom actor and item types
  CONFIG.Actor.collection.defaultValues = {
    "type": ["character", "npc", "monster"]
  };
  CONFIG.Item.collection.defaultValues = {
    "type": ["weapon", "armor", "spell"]
  };
});

// File: module/rollDialogs.js

export function openCustomRollDialog() {
    new Dialog({
      title: "Custom Roll",
      content: "<p>Select your options:</p>",
      buttons: {
        roll: {
          label: "Roll",
          callback: () => console.log("Custom roll executed!")
        }
      }
    }).render(true);
  }  

  // File: module/lighting.js

export function setupDynamicLighting() {
    console.log("Setting up dynamic lighting...");
  // Add code for dynamic lighting setup
  }
  
  // File: module/inventory.js

export function manageInventory() {
    console.log("Managing inventory...");
    // Add code for advanced inventory management
  }
  
  
Hooks.once('ready', async function() {
  // Code to run when the system is ready
  console.log('Dust | System is ready');
});
