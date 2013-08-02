
/**
 * Convert the given `nodes` to an Array, filtering
 * out text and comment nodes
 *
 * @api private
 * @param {NodeList} nodes
 * @return {Array}
 */
function array(nodes) {
  var arr = [];

  for (var i = 0, len = nodes.length; i < len; i++) {
    var type = nodes[i].nodeType;
    type !== 8 && type !== 3 && arr.push(nodes[i]);
  }

  return arr;
}

/**
 * Get an Array of descendants from `element`
 *
 * @api public
 * @param {HTMLElement} element
 * @param {Boolean} [direct]
 * @return {Array}
 */
exports = module.exports = function (element, direct) {
  var decendants = direct
    ? element.childNodes
    : element.getElementsByTagName('*');

  return array(decendants);
};
