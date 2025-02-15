// File: actor/DustActor.js

/**
 * Extend the basic Actor with some very simple modifications.
 * @extends {Actor}
 */
export class DustActor extends Actor {
    /**
     * Augment the basic actor data with additional dynamic data.
     */
    prepareData() {
      super.prepareData();
      const actorData = this.data;
      const data = actorData.data;
  
      // Perform modifications based on actor type
      if (actorData.type === 'character') this._prepareCharacterData(actorData);
      if (actorData.type === 'npc') this._prepareNpcData(actorData);
    }
  
    /**
     * Prepare Character type specific data.
     * @param {Object} actorData The actor data to prepare.
     */
    _prepareCharacterData(actorData) {
      const data = actorData.data;
  
      // Calculate derived attributes
      data.attributes.health.max = data.attributes.health.base + data.attributes.health.bonus;
      data.attributes.power.max = data.attributes.power.base + data.attributes.power.bonus;
  
      // Additional calculations or modifications can be added here
    }
  
    /**
     * Prepare NPC type specific data.
     * @param {Object} actorData The actor data to prepare.
     */
    _prepareNpcData(actorData) {
      const data = actorData.data;
  
      // Calculate derived attributes
      data.attributes.health.max = data.attributes.health.base * 2;
      data.attributes.power.max = data.attributes.power.base * 2;
  
      // Additional calculations or modifications can be added here
    }
  
    /**
     * Override the create method to include some custom behavior.
     * @param {Object} data The initial data with which to create the Actor.
     * @param {Object} options Additional options passed to the creation request.
     */
    static async create(data, options = {}) {
      // Custom behavior can be added here
      console.log("Creating a new actor with custom behavior");
  
      return super.create(data, options);
    }
  }
  