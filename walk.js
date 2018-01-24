function walk(node) {
    node = node || document.body;
    if (node.nodeType == 3) {
        var words = ["I said 'Bounty pls' and it worked. Now I have a", "TAXI DRIVER gave me a", "Bugcrowd gave me a", "Thanks to this one weird trick I was awarded a", "A rare species of frog helped me get a", "I found a content injection bug and was awarded a", "[REDACTED] awarded me a", "I gave back my", "2 + 2 =", "Due to this 0day I still hold I got a", "I sold my 0day on the black market and still got a"];
	var hashtags = ["bountypls", "TAXIDRIVER", "help", "contentinjection||GTFO", "togetherwememeharder"]
        var rand_words = words[Math.floor(Math.random() * words.length)];
	var rand_hashtags = hashtags[Math.floor(Math.random() * hashtags.length)];
        node.nodeValue = node.nodeValue.split('Yay, I was awarded a').join(rand_words);
	node.nodeValue = node.nodeValue.split('togetherwehitharder').join(rand_hashtags);
    } else {
        var nodes = node.childNodes;
        if (nodes) {
            var i = nodes.length;
            while (i--) walk(nodes[i]);
        }
    }
}

walk();
// Or we could just take the lift.
