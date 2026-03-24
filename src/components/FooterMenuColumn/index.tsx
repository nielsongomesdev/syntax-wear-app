import { Link } from "@tanstack/react-router";
import type { FooterMenu } from "../../constants/footer-menus";

interface FooterMenuColumnProps {
  menu: FooterMenu;
}

export const FooterMenuColumn = ({ menu }: FooterMenuColumnProps) => {
  const { title, items, categorySlug } = menu;

  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          {categorySlug ? (
            <Link
              to="/products/category/$category"
              params={{ category: categorySlug }}
              className="font-bold text-white text-xl hover:text-footer-hover transition-colors"
            >
              {title}
            </Link>
          ) : (
            <p className="font-bold text-white text-xl">{title}</p>
          )}
        </li>

        {items.map((item) => (
          <li key={item}>
            {categorySlug ? (
              <Link
                to="/products/category/$category"
                params={{ category: categorySlug }}
                className="text-gray-light hover:text-white transition-colors text-xl"
              >
                {item}
              </Link>
            ) : (
              <span className="text-gray-light text-xl">{item}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};