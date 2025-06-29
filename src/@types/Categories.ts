export const categories = ["ALL", "OUTER", "TOP", "BOTTOM", "ACC"] as const;
export type Categories = typeof categories[number];