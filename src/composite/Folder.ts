import Unit from "./Unit";

export default class Folder extends Unit {
  private units: Array<Unit> = [];
  constructor(name: string) {
    super(name);
  }

  getSize(): number {
    return this.units.reduce((acc, v) => {
      return acc + v.getSize();
    }, 0);
  }

  add(unit: Unit): void {
    this.units.push(unit);
  }

  private createUnit(unit: Unit, dom: Element): HTMLDivElement {
    const domUnit = document.createElement("div");
    domUnit.classList.add("unit");
    domUnit.innerHTML = `
    <div>
        <span>${unit.getName()}</span>
        <span>(${unit.getSize()})</span>
    </div>`;

    dom.append(domUnit);
    return domUnit;
  }

  list(dom: Element) {
    const domUnit = this.createUnit(this, dom);
    const bFolder = this instanceof Folder;

    if (bFolder) {
      domUnit.classList.add("folder");
      this.units.forEach((v) => {
        if (v instanceof Folder) {
          v.list(domUnit);
        } else {
          this.createUnit(v, domUnit);
        }
      });
    }
  }
}
