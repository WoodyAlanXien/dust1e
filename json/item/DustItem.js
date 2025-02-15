// File: item/DustItem.js

/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class DustItem extends Item {
    /**
     * Augment the basic item data with additional dynamic data.
     */
    prepareData() {
      super.prepareData();
      const itemData = this.data;
      const data = itemData.data;
  
      // Perform modifications based on item type
      if (itemData.type === 'weapon') this._prepareWeaponData(itemData);
      if (itemData.type === 'armor') this._prepareArmorData(itemData);
      if (itemData.type === 'ability') this._prepareArmorData(itemData);
      if (itemData.type === 'archetype') this._prepareArmorData(itemData);
      if (itemData.type === 'discipline') this._prepareArmorData(itemData);
      if (itemData.type === 'speciality') this._prepareArmorData(itemData);
      if (itemData.type === 'feature') this._prepareArmorData(itemData);
      if (itemData.type === 'quirk') this._prepareArmorData(itemData);
      if (itemData.type === 'drive') this._prepareArmorData(itemData);
      if (itemData.type === 'origin') this._prepareArmorData(itemData);
      if (itemData.type === 'objective') this._prepareArmorData(itemData);
    }
  
    /**
     * Prepare Weapon type specific data.
     * @param {Object} itemData The item data to prepare.
     */
    _prepareWeaponData(itemData) {
      const data = itemData.data;
  
      // Calculate derived attributes
      data.attributes.damage.total = data.attributes.damage.base + data.attributes.damage.bonus;
      
      // Additional calculations or modifications can be added here
    }
  
    /**
     * Prepare Armor type specific data.
     * @param {Object} itemData The item data to prepare.
     */
    _prepareArmorData(itemData) {
      const data = itemData.data;
  
      // Calculate derived attributes
      data.attributes.defense.total = data.attributes.defense.base + data.attributes.defense.bonus;
      
      // Additional calculations or modifications can be added here
    }

    /**
     * Prepare Ability type specific data.
     * @param {Object} itemData The item data to prepare.
     */
    _prepareAbilityData(itemData) {
        const data = itemData.data;
    
        // Calculate derived attributes
        data.attributes.aetherCost.total = data.attributes.aetherCost.base + data.attributes.aetherCost.bonus;
        
        // Additional calculations or modifications can be added here
      }
  
/**
   * Override the create method to include some custom behavior.
   * @param {Object} data The initial data with which to create the Item.
   * @param {Object} options Additional options passed to the creation request.
   */
static async create(data, options = {}) {
    // Custom behavior can be added here
    console.log("Creating a new item with custom behavior");

    return super.create(data, options);
  }}