﻿function parseCount(number) {
    let parseNumber = Number.parseFloat(number);
    if (isNaN(parseNumber)) {
        throw new Error("Невалидное значение");
    }
    return parseNumber;    
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }

}

class Triangle {

    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c; 
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = (this.a + this.b + this.c)/2;
        return Number.parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }


}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}
