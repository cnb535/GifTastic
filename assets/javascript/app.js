const topics = ["Bob's Burgers", "Family Guy", "New Girl", "Blackish", "Broad City", "Saturday Night Live", "Insecure", "Napoleon Dynamite", "22 Jump Street", "Mean Girls"];

for (let i = 0; i < topics.length; i++) {
	const topicBtn = $("<button>");

	topicBtn.addClass("btn btn-primary");

	topicBtn.attr("title",topics[i]);

	topicBtn.text(topics[i]);

	$("#btns").append(topicBtn);
}

const APIKey = "u6mBkPzGeHf1sNS42hLwSYkGRQ2PY04c";

$("button").on("click", function() {
	
	const title = $(this).attr("title");

	console.log(title);

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

				gifImage.attr("src", results[i].images.fixed_height.url);

				gifDiv.append(r);
				gifDiv.append(gifImage);

				$("#selection").prepend(gifDiv);
			}
		}
	});
});