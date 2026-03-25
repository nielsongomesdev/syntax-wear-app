import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "../../../components/ProductList";
import { getProducts } from "@/services/productService";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Product } from "../../../interfaces/product";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Produtos - TechStation" }],
  }),
});

function RouteComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const hasFetchedInitialProducts = useRef(false);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const response = await getProducts({ page });

      setProducts((prev) => [...prev, ...response.data]);

      if (response.data.length < response.limit) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [hasMore, loading, page]);

  useEffect(() => {
    if (hasFetchedInitialProducts.current) return;
    hasFetchedInitialProducts.current = true;

    loadMore();
  }, [loadMore]);

  return (
    <section className="container pt-44 md:pt-54 pb-10 md:px-10 mb-10 flex flex-col items-center justify-center text-black">
      <h1 className=" text-3xl text-center mb-3">Lista de produtos</h1>

      <h2 className="text-center mb-10 p-4">
        Equipamentos de alta performance para elevar o nível do seu setup.
      </h2>

      {products.length === 0 ? (
        <p className="text-center">Nenhum produto encontrado.</p>
      ) : (
        <>
          <ProductList products={products} />
          {hasMore && (
            <button
              className="bg-[#212A2F] py-3.5 px-7 rounded-xl cursor-pointer mx-auto text-white disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={loadMore}
              disabled={loading}
            >
              {loading ? "Carregando..." : "Carregar mais"}
            </button>
          )}
        </>
      )}
    </section>
  );
}
