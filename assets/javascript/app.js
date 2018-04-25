const topics = ["Bob's Burgers", "Family Guy", "New Girl", "Blackish", "Broad City", "Saturday Night Live", "Insecure", "Napoleon Dynamite", "22 Jump Street", "The Heat"];

for (let i = 0; i < topics.length; i++) {
	const topicBtn = $("<button>");

	topicBtn.addClass("btn btn-primary");

	topicBtn.attr("title",topics[i]);

	topicBtn.text(topics[i]);

	$("#btns").append(topicBtn);
};