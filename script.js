let player = document.querySelector("#player")

player.setAttribute("data-coordinates", JSON.stringify({
	x: 45,
	y: 20,
}))
player.setAttribute("style", `left:${45}%; bottom:${20}%; width:5rem; height:5rem; position:absolute; z-index: 3;`)

function onKeyDown(event) {
	let coordinates = JSON.parse(player.getAttribute("data-coordinates"))

	if (event.key == "d") {
		coordinates.x = coordinates.x + 1
	}

	if (event.key == "a") {
		coordinates.x = coordinates.x - 1
	}

	if (event.key == "w") {
		coordinates.y = coordinates.y + 1
	}

	if (event.key == "s") {
		coordinates.y = coordinates.y - 1
	}

	player.setAttribute("style", `left:${coordinates.x}%; bottom:${coordinates.y}%; width:5rem; height:5rem; position:absolute; z-index: 3;`)
	player.setAttribute("data-coordinates", JSON.stringify(coordinates))
}

document.addEventListener("keydown", onKeyDown)
