'use strict';
const defaultTemperature = 20;
const minimumTemperature = 10;
const maximumTemperature = 32;
const powerSavingModeMaximumTemperature = 25;
const defaultMode = true;

function Thermostat(){
    this._mode = defaultMode;
    this._temperature = defaultTemperature;
}

Thermostat.prototype.temperature = function () {
    return this._temperature;
};

Thermostat.prototype.increaseTemperature = function () {
    this._maximumTemperature();
    this._temperature ++;
};

Thermostat.prototype.decreaseTemperature = function () {
    this._minimumTemperature();
    this._temperature --;
};

Thermostat.prototype.resetTemperature = function () {
    this._temperature = defaultTemperature;
};


Thermostat.prototype._minimumTemperature = function () {
    if(this._temperature <= minimumTemperature){throw new Error("Cannot go below 'Minimum Temperature'.")}
};

Thermostat.prototype._maximumTemperature= function () {
    if(this._mode){
        if(this._temperature >= powerSavingModeMaximumTemperature){
            throw new Error("Cannot go above 'Maximum Temperature'.")
        }
    } else {
        if(this._temperature >= maximumTemperature){throw new Error("Cannot go above 'Maximum Temperature'.")}
    }
};

Thermostat.prototype.powerMode = function () { return this._mode; };

Thermostat.prototype.powerSavingModeOn = function () { this._mode = true; };

Thermostat.prototype.powerSavingModeOff = function () { this._mode = false; };

Thermostat.prototype.energyUsage = function () {
    if(this._temperature < 18){
        return 'low-usage';
    } else if (this._temperature < 25) {
        return 'medium-usage';
    } else {
        return 'high-usage';
    }
};



