exports.multiplier = function (nombre1, op, nombre2) {
    if (op != "*")
        return ("pas une multiplication");
    else
        return (nombre1 * nombre2);

}

exports.diviser = function (nombre1, op, nombre2) {
    if (op != "/")
        return ("pas une division");
    else
        return (nombre1 / nombre2);

}

exports.soustraire = function (nombre1, op, nombre2) {
    if (op != "-")
        return ("pas une soustraction");
    else
        return (nombre1 - nombre2);

}

exports.additionner = function (nombre1, op, nombre2) {
    if (op != "+")
        return ("pas une addition");
    else
        return (nombre1 + nombre2);

}

