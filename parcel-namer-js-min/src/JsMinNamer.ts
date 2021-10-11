import { Namer } from "@parcel/plugin";
import path from "path";

export default new Namer({
  name({ bundle }) {
    if (bundle.type === "js") {
      const filePath = bundle.getMainEntry()?.filePath;
      if (filePath) {
        let baseNameWithoutExtension = path.basename(filePath, path.extname(filePath));
        // See: https://parceljs.org/plugin-system/namer/#content-hashing
        if (!bundle.needsStableName) {
          baseNameWithoutExtension += "." + bundle.hashReference;
        }
        return `${baseNameWithoutExtension}.min.js`;
      }
    }
    // Returning null means parcel will keep the name of non-js bundles the same.
    return null;
  },
});
