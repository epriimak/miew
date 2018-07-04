

import Colorer from './Colorer';

class ConformationColorer extends Colorer {
  constructor(opts) {
    super(opts);
  }

  getAtomColor(atom, _complex) {
    return this.palette.getChainColor(String.fromCharCode(atom._location));
  }

  getResidueColor(_residue, _complex) {
    return this.palette.defaultResidueColor;
  }
}

ConformationColorer.id = 'CF';
ConformationColorer.prototype.id = 'CF';
ConformationColorer.prototype.name = 'Conformation';
ConformationColorer.prototype.shortName = 'Conformation';

export default ConformationColorer;
