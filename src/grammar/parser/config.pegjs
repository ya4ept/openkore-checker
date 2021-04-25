{
	const config = require("@/grammar/key/config.js");
	const cfg = new config();
}

config = lines
lines = line*
line = comment / block / keyvalue / eol / . (!eol .)*

keyvalue = a:$key whitespace? match? whitespace? b:$value? eol? {
	return {
		type: "key",
		key: a,
		value: b,
		location: location(),
		isKeyValid: cfg.check_key(a),
		isValueValid: cfg.check_value(a, b)
	}
}

block = a:$key whitespace '{' eol comment* b:block_keyvalue* '}' eol? {
	let values = [];
	b.forEach((element) => {
		values.push({
			key: element.key,
			value: element.value,
			isKeyValid: cfg.check_block_key(a, element.key),
			isValueValid: cfg.check_block_keyvalue(a, element.key, element.value)
		});
	});
	return {
		type: "block",
		key: a,
		value: values,
		location: location(),
		isKeyValid: cfg.check_block(a)
	}
}

block_keyvalue = whitespace* a:$key whitespace? match? whitespace? b:$value? eol? comment* eol? {
	return {
		key: a,
		value: b
	}
}

comment = whitespace* "#"+ comment_text eol? {
	return {
		type: "comment",
	}
}

comment_text = . (!eol .)*

key = [a-z0-9_]i+

value = [a-z0-9!-~]i+

match = [<>]

whitespace = [' '\t]

eol = '\n' / '\r' '\n'?