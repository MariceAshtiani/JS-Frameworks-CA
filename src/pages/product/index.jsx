import { useContext, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";

import ApiHook from "../../hooks/apiFetch";
import Loader from "../../components/ui/Loader";
import { ShoppingCartContext } from "../../components/Context";
import Price from "../../components/ui/Products/Price";
import Review from "../../components/ui/Products/Reviews";
import Rating from "../../components/ui/Products/Reviews/Rating";
import ModalStyles, { imageModalStyle } from "../../styles/ModalStyles";
import BasicButton, { AdvancedBtn, SmallBtn } from "../../components/ui/Buttons/styled";
import StyledProduct from "./styled";
Modal.setAppElement("#root");


export default function ProductPage() {
    const GlobalState = useContext(ShoppingCartContext);
    const dispatch = GlobalState.dispatch;

    let { id } = useParams();
    const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
    const { data, isLoading, isError } = ApiHook(url);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    if (isLoading || !data) {
        return <Loader />;
    }
    if (isError) {
        return <div>Error displaying product</div>;
    }

    data.quantity = 1;

    function addToCart() {
        dispatch({ type: "Add", payload: data});
        setIsModalOpen(true);
    }

    return (
        <>
        <HelmetProvider>
            <Helmet>
                <title>TrendCart | Product</title>
            </Helmet>
        </HelmetProvider>
        <StyledProduct>
            <Modal isOpen={isModalOpen} style={ModalStyles}>
                <h2>{data.title} added to cart!</h2>
                <div className="btn-wrapper">
                    <Link to="/">
                        <BasicButton onClick={() => setIsModalOpen(false)}>
                            Continue shopping
                        </BasicButton>
                    </Link>
                    <Link to="/Cart">
                        <AdvancedBtn
                        className="btn-secondary"
                        text="View Cart"
                        onClick={() => setIsModalOpen(false)}>
                            View shopping cart
                        </AdvancedBtn>
                    </Link>
                </div>
            </Modal>
            <Modal isOpen={isImageModalOpen} style={imageModalStyle}>
                <div  className="modalImage">
                    <img src={data.imageUrl}></img>
                </div>
                <SmallBtn onClick={() => setIsImageModalOpen(false)}>Close</SmallBtn>
            </Modal>
            <div className="container">
                <section className="mainContainer">
                    <div className="img-wrapper"
                    onClick={() => setIsImageModalOpen(true)}>
                        <img src={data.imageUrl}></img>
                    </div>
                    <div className="productInfo">
                        <h1>{data.title}</h1>
                        {data.rating > 0 && (
                            <div className="rating">
                                <Rating rating={data.rating} />
                                <span>({data.reviews.length})</span>
                            </div>
                        )}
                        <div className="tags">
                            {data.tags && data.tags.map((tag, index) => {
                                return <p key={index}># {tag}</p>;
                            })}
                        </div>
                        <Price
                        price={data.price}
                        discountedPrice={data.discountedPrice}
                        className="productPrice"
                        />
                        <p>{data.description}</p>
                        <BasicButton onClick={addToCart}>Add to cart</BasicButton>
                    </div>
                </section>
                <section className="reviews">
                    {data.reviews && data.reviews.length > 0 && <h2>User Reviews</h2>}
                    {data.reviews && data.reviews.map((review) => {
                        return <Review review={review} key={review.id} />;
                    })}
                </section>
            </div>
        </StyledProduct>
        </>
    );
};