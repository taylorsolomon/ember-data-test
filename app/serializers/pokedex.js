import ApplicationSerializer from "./application";

export default class PokedexSerializer extends ApplicationSerializer {
  extractAttributes(modelClass, hash) {
    hash.pokemon_entries = hash.pokemon_entries.map(pk => ({
      id: pk.entry_number,
      ...pk.pokemon_species
    }));

    return super.extractAttributes(...arguments);
  }

  extractRelationship(modelName, hash) {
    if (modelName === "pokemon") {
      return {
        id: hash.entry_number,
        type: modelName
      };
    }

    return hash;
  }
}
