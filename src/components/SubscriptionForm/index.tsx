export const SubscriptionForm = () => {
  return (
    <form className="flex flex-col">
      <label htmlFor="newsletter">
        Fique por dentro das novidades de hardware e ofertas exclusivas.
      </label>
      <input
        type="email"
        id="newsletter"
        name="newsletter"
        placeholder="email@email.com"
        className="rounded-[30px] bg-white py-3 px-5 placeholder-border-alt text-black"
      />
    </form>
  );
};
