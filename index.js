const batteryLevel = require('battery-level');
const isCharging = require('is-charging');

isCharging().then(result => {
	console.log(result);
	//=> true
});

batteryLevel().then(level => {
	console.log(level);	
});


var powerInfo = require('node-power-info');
powerInfo.getChargeStatus(function(batteryStats) {
  // statuses is an array containing an element for every installed battery
  batteryStats.forEach(function(stats) {
    // stats.powerLevel is the power level in percent
    // stats.chargeStatus is either 'charging', 'discharging', 'full', or 'unknown'
    console.log(stats.powerLevel + '%, currently ' + stats.chargeStatus);
  });
});
