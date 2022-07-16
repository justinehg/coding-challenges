// Create a method to see whether the string is ALL CAPS.
String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }