import {Blueprint} from './blueprint.module';

export class BlueprintsService {
  // private blueprints = [
  //   'Blueprint 1',
  //   'Blueprint 2',
  //   'Blueprint 3',
  //   'Blueprint 4',
  //   'Blueprint 5',
  //   'Blueprint 6',
  //   'Blueprint 7',
  //   'Blueprint 8',
  //   'Blueprint 9',
  //   'Blueprint 10'
  // ];
  private blueprints: Blueprint[];

  private savedBlueprints = [];

  pagedBps: Blueprint[];

  setBlueprints(blueprints: Blueprint[]) {
    this.blueprints = blueprints;
  }

  getBlueprints() {
    return this.blueprints;
  }

  setSavedBlueprints(blueprint: string) {
    let bpExists = false;
    let bpIndex = 0;

    this.savedBlueprints.forEach(
      (bp: string, index: number) => {
        if (bp === blueprint) {
          bpExists = true;
          bpIndex = index;
        }
      }
    );

    if (bpExists) {
      this.savedBlueprints.splice(bpIndex, 1);
    } else {
      this.savedBlueprints.push(blueprint);
    }
  }

  getSavedBlueprints() {
    if (this.savedBlueprints[0] !== undefined) {
      return this.savedBlueprints.slice();
    } else {
      return ['You haven\'t saved any items yet.'];
    }
  }

}
