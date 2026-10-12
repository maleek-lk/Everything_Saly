# Everything Saly website

A mobile-first static storefront built with vanilla HTML, CSS and JavaScript.

## Files
- `index.html`: page structure and editable content areas
- `style.css`: layout, responsive styling and colour palette
- `script.js`: WhatsApp settings, product catalogue, filters and product modal

## Publish using GitHub Pages
1. Upload these three files to the repository root.
2. Keep the existing product images in the `assets/` folder.
3. In GitHub, open **Settings → Pages** and deploy from the `main` branch and `/ (root)` if Pages is not already enabled.
4. Open the published page and test every image and WhatsApp button.

## Before publishing
- Confirm that the brand should appear as **Everything Saly**.
- Confirm `SITE_SETTINGS.whatsappNumber` in `script.js`. It is currently set to `2348152470146` based on the supplied business profile.
- Check that every filename in `PRODUCTS` matches the case-sensitive filename in the repository. GitHub Pages paths are case-sensitive.
- Product prices are not invented; visitors are asked to request price and availability through WhatsApp.
- The screenshot shows `online_store_background.webp`, but this design uses CSS backgrounds. The image can be incorporated later if desired.
