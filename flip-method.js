   public revertIndex(geometry) {
      var positions = geometry.index.array;
      for (var i = 0, il = positions.length; i < il; i += 3) {
         var temp = positions[i];
         positions[i] = positions[i + 1];
         positions[i + 1] = temp;
      }
      geometry.index.needsUpdate = true;
   }