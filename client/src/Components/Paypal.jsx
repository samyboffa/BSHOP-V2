import React, { useEffect, useRef } from "react";

export const Paypal = ({ amount }) => {
    const paypal = useRef();
    useEffect(() => {
        window.paypal
            .Buttons({
                // eslint-disable-next-line
                createOrder: (data, actions, error) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "table",
                                amount: {
                                    value: amount,
                                    currency: "USD",
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    // eslint-disable-next-line
                    const order = await actions.order.capture();
                },
                onError: (err) => {},
            })
            .render(paypal.current);
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};
