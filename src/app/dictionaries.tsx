const dictionaries: any = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  sk: () => import("./dictionaries/sk.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (dictionaries.hasOwnProperty(locale)) {
      return dictionaries[locale]();
  } else {
      throw new Error(`Dictionary for locale '${locale}' not found.`);
  }
};

