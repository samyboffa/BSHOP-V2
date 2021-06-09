import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getSingleProduct } from "../../Redux/actions/products";
import Header from "../Header";
import { Loading } from "../Loading";
import "./AdminGiftCardDetail.css";
import { updateProducts } from "../../Redux/actions/products";
import { useHistory } from "react-router";

export default function AdminGiftCardDetail({ match }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const productUpdated = useSelector(
        (state) => state.productsReducer.productUpdated
    );
    useEffect(() => {
        dispatch(getSingleProduct(match.params.id));
    }, [productUpdated]);

    const product = useSelector((state) => state.productsReducer.singleProduct);

    const [editModeOn, seteditModeOn] = useState(false);
    const [previewModeOn, setpreviewModeOn] = useState(false);
    const [deleteModeOn, setdeleteModeOn] = useState(false);

    // new inputs
    const [newName, setnewName] = useState();
    const [newRegion, setnewRegion] = useState();
    const [newPlatform, setnewPlatform] = useState();
    const [newCurrentPrice, setnewCurrentPrice] = useState();
    const [newOriginalPrice, setnewOriginalPrice] = useState();
    const [newImg, setnewImg] = useState();
    //initial Values
    useEffect(() => {
        setnewName(product.name);
        setnewOriginalPrice(product.originalPrice);
        setnewPlatform(product.platform);
        setnewRegion(product.region);
        setnewCurrentPrice(product.currentPrice);
        setnewImg(product.img);
        // eslint-disable-next-line
    }, [product]);

    //function
    const handleUpdate = () => {
        dispatch(
            updateProducts({
                id: product._id,
                newName: newName,
                newRegion: newRegion,
                newPlatform: newPlatform,
                newImg: newImg,
                newOriginalPrice: newOriginalPrice,
                newCurrentPrice: newCurrentPrice,
            })
        );
        setpreviewModeOn(false);
        seteditModeOn(false);
    };
    const handleDelete = () => {
        dispatch(deleteProducts({ id: product._id }));
        history.push("/AdminPanel");
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Header />
            {!product || !product.region ? (
                <Loading />
            ) : (
                <div className="AdmingcDetails">
                    {deleteModeOn ? (
                        <div className="confirmdeleteBox">
                            <h1 className="AdminWarningDelete">
                                This Product Will Be Permanently Deleted From
                                The Data Base
                            </h1>
                            <button
                                className="ConfirmdeleteButtonAdmin confirmButtonsAdmin"
                                onClick={handleDelete}
                            >
                                DELETE
                            </button>
                            <button
                                className="CanceldeleteButtonAdmin confirmButtonsAdmin"
                                onClick={() => {
                                    deleteModeOn
                                        ? setdeleteModeOn(false)
                                        : setdeleteModeOn(true);
                                }}
                            >
                                CANCEL
                            </button>
                        </div>
                    ) : null}
                    {previewModeOn ? (
                        <h3 className="PreviewModeOn">Preview Mode </h3>
                    ) : null}{" "}
                    <div className="AdmingcProduct">
                        <div className="AdminproductDetailImgDescription">
                            {editModeOn ? (
                                <input
                                    type="text"
                                    placeholder="Product Img URL "
                                    className="AdminEditInput"
                                    id="AdminInputImg"
                                    defaultValue={product.img}
                                    onChange={(e) => setnewImg(e.target.value)}
                                />
                            ) : (
                                <img
                                    src={previewModeOn ? newImg : product.img}
                                    className="AdminproductDetailsImg"
                                    alt="image"
                                />
                            )}

                            <div className="AdminproductDetailsDescription">
                                {editModeOn ? (
                                    <input
                                        type="text"
                                        placeholder="Product Name "
                                        className="AdminEditInput"
                                        id="AdminEditInput"
                                        defaultValue={product.name}
                                        onChange={(e) =>
                                            setnewName(e.target.value)
                                        }
                                    />
                                ) : (
                                    <h3 className="AdminproductDetailsDescriptionName">
                                        {" "}
                                        {previewModeOn ? newName : product.name}
                                    </h3>
                                )}

                                <h4 className="AdminproductDetailRegion">
                                    Region :{" "}
                                    {editModeOn ? (
                                        <input
                                            type="text"
                                            placeholder="Product Region"
                                            className="AdminEditInput"
                                            defaultValue={product.region}
                                            onChange={(e) =>
                                                setnewRegion(e.target.value)
                                            }
                                        />
                                    ) : (
                                        product.region.split(" ")[0]
                                    )}{" "}
                                </h4>
                                <h4 className="AdminproductDetailStore">
                                    platform :
                                    {editModeOn ? (
                                        <input
                                            type="text"
                                            placeholder="Product Platform"
                                            className="AdminEditInput"
                                            defaultValue={product.platform}
                                            onChange={(e) =>
                                                setnewPlatform(e.target.value)
                                            }
                                        />
                                    ) : previewModeOn ? (
                                        newPlatform
                                    ) : (
                                        product.platform
                                    )}
                                </h4>
                            </div>
                        </div>
                        <div className="AdminproductDetailPriceBuyBox">
                            <h1 className="AdminproductDetailPrice">
                                {editModeOn ? (
                                    <input
                                        type="text"
                                        placeholder="Product Price"
                                        className="AdminEditInput"
                                        defaultValue={product.currentPrice}
                                        onChange={(e) =>
                                            setnewCurrentPrice(e.target.value)
                                        }
                                    />
                                ) : previewModeOn ? (
                                    newCurrentPrice
                                ) : (
                                    product.currentPrice
                                )}{" "}
                                DT
                            </h1>
                            <div className="AdminproductDetailOldPriceAndDiscount">
                                <h4 className="AdminproductDetailOldPrice">
                                    {" "}
                                    {editModeOn ? (
                                        <input
                                            type="text"
                                            placeholder="Product OriginalPrice"
                                            className="AdminEditInput"
                                            defaultValue={product.originalPrice}
                                            onChange={(e) =>
                                                setnewOriginalPrice(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    ) : previewModeOn ? (
                                        newOriginalPrice
                                    ) : (
                                        product.originalPrice
                                    )}{" "}
                                    DT
                                </h4>
                                <h4 className="AdminproductDetailDiscount">
                                    {previewModeOn
                                        ? Math.ceil(
                                              100 -
                                                  (newCurrentPrice * 100) /
                                                      newOriginalPrice
                                          )
                                        : Math.ceil(
                                              100 -
                                                  (product.currentPrice * 100) /
                                                      product.originalPrice
                                          )}
                                    % OFF
                                </h4>
                            </div>
                            <button
                                className="AdminproductDetailBuyBox"
                                onClick={() => {
                                    editModeOn
                                        ? seteditModeOn(false)
                                        : seteditModeOn(true);
                                    setpreviewModeOn(false);
                                }}
                            >
                                {editModeOn ? "CANCEL" : "EDIT"}
                            </button>
                            {!editModeOn ? (
                                <div className="AdminButtonsBoxEdit">
                                    <button
                                        type="submit"
                                        className="deleteButtonAdmin confirmButtonsAdmin"
                                        onClick={() => {
                                            deleteModeOn
                                                ? setdeleteModeOn(false)
                                                : setdeleteModeOn(true);
                                        }}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            ) : null}
                            {editModeOn ? (
                                <div className="AdminButtonsBoxEdit">
                                    <button
                                        type="submit"
                                        className="PreviewButtonAdmin confirmButtonsAdmin"
                                        onClick={() => {
                                            previewModeOn
                                                ? setpreviewModeOn(false)
                                                : setpreviewModeOn(true);
                                            seteditModeOn(false);
                                        }}
                                    >
                                        {previewModeOn
                                            ? "CANCEL PREVIEW"
                                            : "PREVIEW"}
                                    </button>
                                </div>
                            ) : null}
                            {previewModeOn ? (
                                <button
                                    type="submit"
                                    className="ConfirmButtonAdmin confirmButtonsAdmin"
                                    onClick={handleUpdate}
                                >
                                    SAVE CHANGES
                                </button>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
}
