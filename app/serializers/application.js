import { underscore } from '@ember/string';
import DS from 'ember-data';

const { JSONSerializer } = DS;

export default class ApplicationSerializer extends JSONSerializer {

  keyForAttribute(attr) {
    // API uses underscores for plural things
    return underscore(attr);
  }

  keyForRelationship(key) {
    return underscore(key);
  }

}
