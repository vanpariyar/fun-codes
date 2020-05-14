const randNumGenerator = () => (Math.floor(Math.random() * 5) + 1) * 1000;
var i = 0;
function dynamicClick() {
  setTimeout(() => {
    document.querySelectorAll('button[data-control-name="people_connect"]')[i++].click();
    dynamicClick();  // set up the next tick
  }, randNumGenerator());
}
dynamicClick();      // start the first tick
