export interface FooterMenu {
  title: string;
  categorySlug: string | null;
  items: string[];
}

export const footerMenus: FooterMenu[] = [
  {
    title: "Teclados",
    categorySlug: "teclados",
    items: ["Mecânicos", "Compactos", "Sem fio", "RGB"],
  },
  {
    title: "Mouses",
    categorySlug: "mouses",
    items: ["Ergonômicos", "Sem fio", "Alta precisão", "Produtividade"],
  },
  {
    title: "Monitores",
    categorySlug: "monitores",
    items: ["Ultrawide", "4K", "Alta taxa", "Color Accuracy"],
  },
  {
    title: "Áudio",
    categorySlug: "audio",
    items: ["Headsets", "Microfones", "Speakers", "Noise Cancelling"],
  },
  {
    title: "Setups",
    categorySlug: null,
    items: ["Home Office", "Minimalista"],
  },
];