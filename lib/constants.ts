/**
 * The base URL for the KukuConnect Farm Management System (FMS) Order App.
 * Orders, payments, inventory, and fulfillment are strictly handled by the FMS.
 */
export const ORDER_APP_URL =
    process.env.NEXT_PUBLIC_ORDER_URL || "https://app.kukuconnect.co.ke/order";

/**
 * Returns a deep link to the FMS order app for a specific product.
 * @param productId The ID of the product to pre-select.
 */
export function getOrderUrl(productId?: string): string {
    if (!productId) return ORDER_APP_URL;
    return `${ORDER_APP_URL}?product=${encodeURIComponent(productId)}`;
}
