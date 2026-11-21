# VinylVault

## 1. How to Run

Requirements:
- Node.js
- npm
- Web browser

Steps:
1. Open the project folder in a terminal.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the localhost link in your browser.

## 2. Component Structure

```text
App.jsx
|
|-- Header
|
|-- CatalogPage
|     |-- AlbumCard
|
|-- AlbumDetailPage
|
|-- CheckoutPage
|
|-- CartDrawer
```

### State

- App stores the cart and whether the cart is open.
- CatalogPage stores the selected genre.
- CheckoutPage stores the form information and confirmation.
- CartDrawer displays the cart items and total.

### Routes

- `/` - Shows all albums and genre filters.
- `/album/:albumId` - Shows album details.
- `/checkout` - Shows the checkout form.

