const menus = [
  {
    title: "Teclados",
    items: ["Mecânicos", "Compactos", "Sem fio", "Low Profile"],
  },
  {
    title: "Mouses",
    items: ["Ergonômicos", "Sem fio", "Alta precisão", "Produtividade"],
  },
  {
    title: "Monitores",
    items: ["Ultrawide", "4K", "Alta taxa", "Color Accuracy"],
  },
  {
    title: "Áudio",
    items: ["Headsets", "Microfones", "Speakers", "Noise Cancelling"],
  },
  {
    title: "Setups Completos",
    items: ["Home Office", "Dev Station", "Creator Desk", "Minimalista"],
  },
];

export const MenuItems = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      {menus.map(({ title, items }) => (
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="font-normal text-surface-alt text-xl">{title}</p>
            </li>
            {items.map((item) => (
              <li key={item}>
                <a
                  className="font-medium hover:text-text-tertiary transition-colors text-xl"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
