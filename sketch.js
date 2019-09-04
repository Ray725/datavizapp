function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);

  let square_size = 55;

  // calculated to evenly space three squares
  let spacer = 200 - 0.75 * square_size;

  // multiply by 2 to make colorshift more noticeable
  let second_color = map(2 * second(), 0, 60, 0, 255);
  let minute_color = map(2 * minute(), 0, 60, 0, 255);
  let hour_color = map(2 * hour(), 0, 24, 0, 255);

  let second_height = map(second(), 0, 60, 0, 600 - square_size);
  let minute_height = map(minute(), 0, 60, 0, 600 - square_size);
  let hour_height = map(hour(), 0, 24, 0, 600 - square_size);

  // hour
  let hour_x = spacer;

  fill(50, 50, hour_color);
  rect(spacer, hour_height, square_size, square_size);
  line(hour_x, 0, hour_x, hour_height);
  line(hour_x + square_size, 0, hour_x + square_size, hour_height);

  // minute
  let minute_x = 2 * spacer + square_size;

  fill(50, 50, minute_color);
  rect(2 * spacer + square_size, minute_height, square_size, square_size);
  line(minute_x, 0, minute_x, minute_height);
  line(minute_x + square_size, 0, minute_x + square_size, minute_height);

  // second
  let second_x = 3 * spacer + 2 * square_size;

  fill(50, 50, second_color);
  rect(3 * spacer + 2 * square_size, second_height, square_size, square_size);
  line(second_x, 0, second_x, second_height);
  line(second_x + square_size, 0, second_x + square_size, second_height);
}
