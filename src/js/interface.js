$(document).ready(function () {
    var thermostat = new Thermostat();
    updateTemperature();

    $("#increaseTemperature").on('click', function () {
        thermostat.increaseTemperature();
        updateTemperature()
    });

    $("#decreaseTemperature").on('click', function () {
        thermostat.decreaseTemperature();
        updateTemperature()
    });

    $("#resetTemperature").on('click', function () {
        thermostat.resetTemperature();
        updateTemperature()
    });

    $("#ecoMode").on('click', function () {
        $("#powerSavingStatus").text("Eco");
        thermostat.powerSavingModeOn();

    });

    $("#normalMode").on('click', function () {
        $("#powerSavingStatus").text("Normal");
        thermostat.powerSavingModeOff();
    });



    function updateTemperature() {
        temperatureDependantColor();
        $('#thermostatTemperature').text(thermostat.temperature());
    }

    function temperatureDependantColor() {
        $('#thermostatTemperature').attr('class', thermostat.energyUsage());
    }


    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
        $('#outsideTemperature').text(data.main.temp);
    });




});