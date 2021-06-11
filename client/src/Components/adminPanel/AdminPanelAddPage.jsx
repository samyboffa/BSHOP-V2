import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addProducts } from "../../Redux/actions/products";
import Header from "../Header";
import "./AdminPanelAddPage.css";

export default function AdminPanelAddPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    // new inputs
    const [newName, setnewName] = useState();
    const [newRegion, setnewRegion] = useState();
    const [newPlatform, setnewPlatform] = useState();
    const [newCurrentPrice, setnewCurrentPrice] = useState();
    const [newOriginalPrice, setnewOriginalPrice] = useState();
    const [newImg, setnewImg] = useState();
    const [newType, setnewType] = useState();
    const [newDescription, setnewDescription] = useState();
    const [newValue, setnewValue] = useState();
    const [newStore, setnewStore] = useState();
    const [newCurrency, setnewCurrency] = useState();

    const [previewModeOn, setpreviewModeOn] = useState(false);
    const handleAddProduct = (e) => {
        e.preventDefault();
        dispatch(
            addProducts({
                name: newName,
                type: newType,
                region: newRegion,
                platform: newPlatform,
                store: newStore,
                value: newValue,
                currency: newCurrency,
                originalPrice: newOriginalPrice,
                currentPrice: newCurrentPrice,
                description: newDescription,
                img: newImg,
            })
        );
        history.push("/AdminPanel");
    };
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Header />

            <div className="AdmingcDetails">
                {" "}
                {previewModeOn ? null : (
                    <div className="adminOtherInputs">
                        <select
                            defaultValue={newType}
                            name="Type"
                            className="GCSELECTAdmin"
                            required={true}
                            onChange={(e) => setnewType(e.target.value)}
                        >
                            <option value=""> TYPE</option>

                            <option value="CG"> Gift Card</option>
                            <option value="SUB"> Subscription </option>
                            <option value="GAME"> Game</option>
                            <option value="GP"> Game Point</option>
                        </select>
                        <select
                            defaultValue={newCurrency}
                            name="Currency"
                            className="GCSELECTAdmin"
                            required={true}
                            onChange={(e) => setnewCurrency(e.target.value)}
                        >
                            <option value=""> Currency</option>
                            <option value="$"> US DOLLAR</option>
                            <option value="€"> EURO </option>
                            <option value="£"> UK POUND</option>
                        </select>
                        <input
                            defaultValue={newValue}
                            type="number"
                            placeholder="Product Value "
                            id="admintypeValuex"
                            className="AdminEditInput"
                            onChange={(e) => setnewValue(e.target.value)}
                        />
                        <input
                            defaultValue={newStore}
                            type="text"
                            placeholder="Product Store "
                            className="AdminEditInput"
                            required={true}
                            onChange={(e) => setnewStore(e.target.value)}
                        />
                        <textarea
                            defaultValue={newDescription}
                            type="text"
                            placeholder="Product Description "
                            className="AdminEditInput"
                            required={true}
                            onChange={(e) => setnewDescription(e.target.value)}
                        />
                    </div>
                )}
                <div className="AdmingcProduct">
                    <div className="AdminproductDetailImgDescription">
                        {previewModeOn ? (
                            <img
                                src={newImg}
                                className="AdminproductDetailsImg"
                                alt="img"
                            />
                        ) : (
                            <input
                                defaultValue={newImg}
                                type="text"
                                placeholder="Product Img URL "
                                className="AdminEditInput"
                                id="AdminInputImg"
                                required={true}
                                onChange={(e) => setnewImg(e.target.value)}
                            />
                        )}

                        <div className="AdminproductDetailsDescription">
                            {previewModeOn ? (
                                <h3 className="AdminproductDetailsDescriptionName">
                                    {" "}
                                    {newName}
                                </h3>
                            ) : (
                                <input
                                    required={true}
                                    defaultValue={newName}
                                    type="text"
                                    placeholder="Product Name "
                                    className="AdminEditInput"
                                    id="AdminEditInput"
                                    onChange={(e) => setnewName(e.target.value)}
                                />
                            )}

                            <h4 className="AdminproductDetailRegion">
                                Region :{" "}
                                {previewModeOn ? (
                                    newRegion
                                ) : (
                                    <input
                                        defaultValue={newRegion}
                                        required={true}
                                        type="text"
                                        placeholder="Product Region"
                                        className="AdminEditInput"
                                        onChange={(e) =>
                                            setnewRegion(e.target.value)
                                        }
                                    />
                                )}
                            </h4>
                            <h4 className="AdminproductDetailStore">
                                platform :
                                {previewModeOn ? (
                                    newPlatform
                                ) : (
                                    <input
                                        defaultValue={newPlatform}
                                        required={true}
                                        type="text"
                                        placeholder="Product Platform"
                                        className="AdminEditInput"
                                        onChange={(e) =>
                                            setnewPlatform(e.target.value)
                                        }
                                    />
                                )}
                            </h4>
                        </div>
                    </div>
                    <div className="AdminproductDetailPriceBuyBox">
                        <h1 className="AdminproductDetailPrice">
                            {previewModeOn ? (
                                newCurrentPrice
                            ) : (
                                <input
                                    defaultValue={newCurrentPrice}
                                    required={true}
                                    type="text"
                                    placeholder="Product Price"
                                    className="AdminEditInput"
                                    onChange={(e) =>
                                        setnewCurrentPrice(e.target.value)
                                    }
                                />
                            )}
                            DT
                        </h1>

                        <div className="AdminproductDetailOldPriceAndDiscount">
                            <h4 className="AdminproductDetailOldPrice">
                                {previewModeOn ? (
                                    newOriginalPrice
                                ) : (
                                    <input
                                        defaultValue={newOriginalPrice}
                                        type="text"
                                        required={true}
                                        placeholder="Product OriginalPrice"
                                        className="AdminEditInput"
                                        onChange={(e) =>
                                            setnewOriginalPrice(e.target.value)
                                        }
                                    />
                                )}
                                DT
                            </h4>
                            <h4 className="AdminproductDetailDiscount">
                                {previewModeOn
                                    ? Math.ceil(
                                          100 -
                                              (newCurrentPrice * 100) /
                                                  newOriginalPrice
                                      )
                                    : null}
                                % OFF
                            </h4>
                        </div>

                        <div className="AdminButtonsBoxEdit">
                            <button
                                type="submit"
                                required={true}
                                className="PreviewButtonAdmin confirmButtonsAdmin"
                                onClick={() =>
                                    previewModeOn
                                        ? setpreviewModeOn(false)
                                        : setpreviewModeOn(true)
                                }
                            >
                                {previewModeOn ? "CANCEL PREVIEW" : "PREVIEW"}
                            </button>
                        </div>
                        {previewModeOn ? (
                            <button
                                type="submit"
                                className="ConfirmButtonAdmin confirmButtonsAdmin"
                                onClick={handleAddProduct}
                            >
                                ADD PRODUCT
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        </form>
    );
}
