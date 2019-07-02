import { PossibleValues } from './possible-values';
import { Sensitivity } from './sensitivity';

export class Manage {
  id: string | number;
  keyName: string;
  description: string;
  type: string;
  sensitivity: Sensitivity;
  possibleValues: PossibleValues[];
}

export class ManageModel extends Manage {
  constructor(data) {
    super();
    this.id = data.id;
    this.keyName = data.key_name;
    this.type = data.type;
    this.description = data.description;
    this.sensitivity = data.sensitivity;
    this.possibleValues = data.possible_values;
  }
}
