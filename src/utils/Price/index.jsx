export default function FormatPrice(number) {
    const krone = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "NOK",
    });

    return krone.format(number);
};