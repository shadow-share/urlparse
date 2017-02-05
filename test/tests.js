QUnit.test("urlparse test", function(assert) {
    // check exists
    assert.ok(typeof urlparse === 'function', 'check urlparse reference');

    // new parse result
    var rst = urlparse('https://www.github.com/path/to/index.html?query=test&param=true#footer');

    // check parse result
    assert.ok(rst.scheme === 'https', 'parse scheme');
    assert.ok(rst.netloc === 'www.github.com', 'parse netloc');
    assert.ok(rst.path === '/path/to/index.html', 'parse path');
    assert.ok(rst.query === 'query=test&param=true', 'parse query');
    assert.ok(rst.fragment === 'footer', 'parse fragment');
});
