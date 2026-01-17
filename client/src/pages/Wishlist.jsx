import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  console.log(wishlist);

  return (
    <div className='container'>
      <h2>WishList page</h2>
    </div>
  );
};
export { Wishlist };
