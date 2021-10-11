import { Namer } from "@parcel/plugin";

export default new Namer({
  name({ bundle, logger }) {
    const filePath = bundle.getMainEntry()?.filePath;
    logger.info({ origin: "parcel-namer-js-min", message: `FilePath is: ${filePath}` });
    return null;
  },
});
