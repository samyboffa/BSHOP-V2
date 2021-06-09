import React, { useEffect, useRef } from "react";

export const Paypal = ({ amount }) => {
    const paypal = useRef();
    useEffect(() => {
        window.paypal
            .Buttons({
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
                    const order = await actions.order.capture();
                },
                onError: (err) => {},
            })
            .render(paypal.current);
    }, []);
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};
