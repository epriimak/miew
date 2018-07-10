import Colorer from './Colorer';

/**
 * Coloring algorithm based on residue type.
 *
 * @see ResidueType
 *
 * @exports ResidueTypeColorer
 * @constructor
 */
class ResidueTypeColorer extends Colorer {
  static id = 'RT';

  constructor(opts) {
    super(opts);
  }

  getAtomColor(atom, complex) {
    return this.getResidueColor(atom._residue, complex);
  }

  getResidueColor(residue, _complex) {
    return this.palette.getResidueColor(residue._type._name);
  }
}

ResidueTypeColorer.prototype.id = 'RT';
ResidueTypeColorer.prototype.name = 'Residue Type';
ResidueTypeColorer.prototype.shortName = 'Residue';

export default ResidueTypeColorer;
