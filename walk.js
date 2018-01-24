function walk(node) {
    node = node || document.body;
    if (node.nodeType == 3) {
        var words = ["I said 'Bounty pls' and it worked. Now I have a", "TAXI DRIVER gave me", "Bugcrowd gave me a", "Thanks to this one weird trick I was awarded a", "A rare species of frog helped me get a", "I found a content injection bug and was awarded a", "[REDACTED] awarded me a", "I gave back my", "2 + 2 ="];
        var rand = words[Math.floor(Math.random() * words.length)];
        node.nodeValue = node.nodeValue.split('Yay, I was awarded a').join(rand);
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
