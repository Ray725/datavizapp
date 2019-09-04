function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);

  let square_size = 55;

  // calculated to evenly space three squares
  let spacer = 200 - 0.75 * square_size;

  let second_color = map(2 * second(), 0, 60, 0, 255);
  let minute_color = map(2 * minute(), 0, 60, 0, 255);
  let hour_color = map(2 * hour(), 0, 24, 0, 255);

  let second_height = map(second(), 0, 60, 0, 600 - square_size);
  let minute_height = map(minute(), 0, 60, 0, 600 - square_size);
  let hour_height = map(hour(), 0, 24, 0, 600 - square_size);

  // hour
  fill(50, 50, hour_color);
  rect(spacer, hour_height, square_size, square_size);

  // minute
  fill(50, 50, minute_color);
  rect(2 * spacer + square_size, minute_height, square_size, square_size);

  // second
  fill(50, 50, second_color);
  rect(3 * spacer + 2 * square_size, second_height, square_size, square_size);
}
