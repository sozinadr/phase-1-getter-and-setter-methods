// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * this.diameter;
    }
    get area() {
        return Math.PI * (this.radius * this.radius);
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    set circumference(diameter) {
        this.diameter = diameter / Math.PI;
        this.radius = this.diameter / 2;
    }
    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI);
    }
}