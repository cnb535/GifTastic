const topics = ["Bob's Burgers", "Family Guy", "New Girl", "Blackish", "Broad City", "Saturday Night Live", "Insecure", "Napoleon Dynamite", "22 Jump Street", "Mean Girls"];

for (let i = 0; i < topics.length; i++) {
	const topicBtn = $("<button class='title'>");

	topicBtn.addClass("btn btn-primary");

	topicBtn.attr("title",topics[i]);

	topicBtn.text(topics[i]);

	$("#btns").append(topicBtn);
}

const APIKey = "u6mBkPzGeHf1sNS42hLwSYkGRQ2PY04c";

function searchTitle(title) {

}

$(".title").on("click", function() {
	
	const title = $(this).attr("title");

	const queryURL = "http://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=" + APIKey + "&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response) {
		const results = response.data;

		for (let i = 0; i < results.length; i++) {
			if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
				const gifDiv = $("<div class='item'>");

				const rating = results[i].rating;

				const r = $("<p>").text("Rating: " + rating);

				const gifImage = $("<img>");
				
				gifImage.attr({
					"src":results[i].images.fixed_height_still.url, 
					"data-still":results[i].images.fixed_height_still.url, 
					"data-animate":results[i].images.fixed_height.url,
					"data-state":"still",
					"class":"gif"
				});

				gifDiv.append(gifImage);
				gifDiv.append(r);

				$("#selection").prepend(gifDiv);
			}
		}
	});
});

// $(".gif").on("click", function() {
// 	alert("Hi!");
	// const state = $(this).attr("data-state");

	// if (state === "still") {
	// 	$(this).attr("src", $(this).attr("data-animate"));
	// 	$(this).attr("data-state", "animate");
	// } else {
	// 	$(this).attr("src", $(this).attr("data-still"));
	// 	$(this).attr("data-state", "still");
	// }
// });


$("#search-title").on("click", function(event) {

	event.preventDefault();

	const inputTitle = $("#title-input").val().trim();

	searchTitle(inputTitle);
});