type Shape = "triangle" | "circle" | "rectangle";

type Color = "red" | "green" | "blue";

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public shape: Shape = "triangle",
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((x, y) => x - y);
    
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("Sides must be greater then zero.")
    }

    if (sides[2] >= sides[1] + sides[0]) {
      throw new Error("Longest side should be smaller then sum of tho others sides.")
    }
  }

  getArea(): number {
    let s: number = (this.a + this.b + this.c) / 2
    return Math.round(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100
  }
}

export class Circle implements Figure {
  constructor(
    public shape: Shape = "circle",
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error("Radius must be greater then zero.")
    }
  }

  getArea(): number {
    return Math.round(Math.PI * this.radius ** 2 * 100) / 100
  }
}

export class Rectangle implements Figure {
  constructor(
    public shape: Shape = "rectangle",
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error("Sides must be greater then zero.")
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
