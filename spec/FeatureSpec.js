'use strict';
describe('Thermostat', function () {
    var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    })


    // ---------------------------------------------------- TEMPERATURE
   it('Default temperature is 20 degrees.', function () {
        expect(thermostat.temperature()).toBe(20);
    });

    it('increaseTemperature function increases temperature.', function () {
        expect(thermostat.temperature()).toBe(20);
        thermostat.increaseTemperature();
        expect(thermostat.temperature()).toBe(21);
    });

    it('decreaseTemperature function decrease temperature.', function () {
        expect(thermostat.temperature()).toBe(20);
        thermostat.decreaseTemperature();
        expect(thermostat.temperature()).toBe(19);
    });

    it('Temperature below minimum temperature throws error', function () {
        thermostat._temperature = 10;
        expect(thermostat.temperature()).toBe(10);
        expect(function(){ thermostat.decreaseTemperature()} ).toThrowError("Cannot go below 'Minimum Temperature'.");
    });

    // ---------------------------------------------------- MODES

    it("'Power Saving Mode' on by default.", function () {
        expect(thermostat._mode).toBeTruthy();
        expect(thermostat.powerMode()).toBeTruthy()
    })

    it("'powerSavingModeOn' turns power saving mode on", function () {
        expect(thermostat.powerMode()).toBeTruthy();
        thermostat.powerSavingModeOff();
        expect(thermostat.powerMode()).toBeFalsy();
        thermostat.powerSavingModeOn();
        expect(thermostat.powerMode()).toBeTruthy();
    })

    it("'powerSavingModeOff' turns power saving mode off", function () {
        expect(thermostat.powerMode()).toBeTruthy()
        thermostat.powerSavingModeOff();
        expect(thermostat.powerMode()).toBeFalsy();
    })

    it("'Power Saving Mode Max Temperature' is 25", function () {
        expect(thermostat._mode).toBeTruthy();
        thermostat._temperature = 24;
        thermostat.increaseTemperature();
        expect(thermostat.temperature()).toBe(25);
        expect(function(){ thermostat.increaseTemperature()} ).toThrowError("Cannot go above 'Maximum Temperature'.");
    })

    it("'Normal Mode Max Temperature' is 32", function () {
        thermostat._mode = false;
        expect(thermostat._mode).toBeFalsy();
        thermostat._temperature = 31;
        thermostat.increaseTemperature();
        expect(thermostat.temperature()).toBe(32);
        expect(function(){ thermostat.increaseTemperature()} ).toThrowError("Cannot go above 'Maximum Temperature'.");
    })

    // ---------------------------------------------------- RESET

    it("'reset function' resets temperature to default temperature.", function () {
        thermostat._temperature = 22;
        thermostat.resetTemperature();
        expect(thermostat.temperature()).toBe(20);
    })

    // ---------------------------------------------------- ENERGY USAGE

    it("17 degrees or lower, low-usage.", function () {
        thermostat._temperature = 17;
        expect(thermostat.energyUsage()).toBe('low-usage');
    })

    it("24 degrees or lower, medium-usage.", function () {
        thermostat._temperature = 24;
        expect(thermostat.energyUsage()).toBe('medium-usage');
    })

    it("25 degrees or above, high-usage.", function () {
        thermostat._temperature = 25;
        expect(thermostat.energyUsage()).toBe('high-usage');
    })
});

