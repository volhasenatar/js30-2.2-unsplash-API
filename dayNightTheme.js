function dayNightTheme() {
  let date = new Date();
  let hour = date.getHours();

  if (hour >= 5 && hour < 17) {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  } else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
}

export default dayNightTheme;
