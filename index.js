<script>
const RED = "RED";
const BLUE = "BLUE";
const YELLOW = "YELLOW";
const GREEN = "GREEN";
var simon = {
	sendColor: function(color) {
		if (!simon.sequence.length) {
			simon.nextSequence();
		} else {
			if (color === simon.sequence[simon.step]) {} else {
				alert("WRONG!!");
				simon.sequence = [];
				simon.step = 0;
			}
		}
		console.log("NEW COLOR: " + color);
	},
	sequence: [],
	colors: [RED, BLUE, YELLOW, GREEN],
	step: 0,
	nextSequence: function() {
		var nextColor = simon.colors[Math.floor(Math.random() simon.colors.length)];
		simon.sequence.push(nextColor);
		console.log("the sequence", simon.sequence);
	}
};
$(document).ready(function() {
	$("#red").click(function() {
		simon.sendColor(RED)
	});
	$("#blue").click(function() {
		simon.sendColor(BLUE)
	});
	$("#yellow").click(function() {
		simon.sendColor(YELLOW)
	});
	$("#green").click(function() {
		simon.sendColor(GREEN)
	});
})
</script>