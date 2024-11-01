'use strict'

let shapeCounter = 0;

const colorMap = {
    "Blue": "#09f",
    "Green": "#9f0",
    "Orange": "#f90",
    "Pink": "#f09",
    "Purple": "#90f"
};

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    toast.style.position = 'fixed';
    toast.style.bottom = '5%';
    toast.style.left = '38%';
    toast.style.zIndex = '1000';

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
}

class Shape {
    constructor(id, name, colour) {
        this._id = id;
        this._name = name;
        this._colour = colour;
    }

    get id() {
        return this._id;
    }
    
    get name() {
        return this._name;
    }
    
    get colour() {
        return this._colour;
    }
    
    getInfo() {
        return `Unit ${this.id}: ${this.colour.toLowerCase()} ${this.name.toLowerCase()}`;
    }
}

const shapes = [];

function createShape() {
    const shapeSelect = document.getElementById('shapeSelect').value;
    const colorSelect = document.getElementById('colorSelect').value;

    if (shapeSelect === "Shape" || colorSelect === "Color") {
        showToast("Please select a valid shape and color!");
        return;
    }
        
    const shape = new Shape(shapeCounter++, shapeSelect, colorSelect);
      
    shapes.push(shape);
    
    if (shapes.length > 24) { 
        showToast("The grid is full!");
        return;
    }

    const shapeDiv = document.createElement('div');
    shapeDiv.classList.add('shape', shape.name.toLowerCase());
    shapeDiv.style.backgroundColor = colorMap[shape.colour];
    shapeDiv.onclick = () => {
        document.getElementById('info').innerText = shape.getInfo();
    };

    const grid = document.getElementById('shapeGrid');
    grid.appendChild(shapeDiv);
}
