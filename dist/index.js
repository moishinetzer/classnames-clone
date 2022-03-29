"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.total = void 0;
//List of LangCodes and Languages that use Right to Left Text
const rtlLanguageList = {
    ar: "Arabic",
    arc: "Aramaic",
    dv: "Divehi",
    fa: "Persian",
    ha: "Hausa",
    he: "Hebrew",
    khw: "Khowar",
    ks: "Kashmiri",
    ku: "Kurdish",
    ps: "Pashto",
    ur: "Urdu",
    yi: "Yiddish",
};
const isRTL = (langCode) => rtlLanguageList.hasOwnProperty(langCode);
const listRTLLangCodes = () => Object.keys(rtlLanguageList);
const listRTLLanguages = () => Object.values(rtlLanguageList);
const listRTLLangCodesAndCountries = () => rtlLanguageList;
exports.total = {
    isRTL: isRTL,
    listRTLLangCodes: listRTLLangCodes,
    listRTLLanguages: listRTLLanguages,
    listRTLLangCodesAndCountries: listRTLLangCodesAndCountries,
};
//# sourceMappingURL=index.js.map