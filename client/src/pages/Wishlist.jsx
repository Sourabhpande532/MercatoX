import { useWishlist } from "../context/WishlistContext";
import { Profile } from "./Profile";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  // console.log(wishlist);

  return (
    <div className='container'>
      <h2>WishList page</h2>
    </div>
  );
};
export { Wishlist };
