# A list of services to support

- placehold.it
  - http://placehold.it
  - width (int)
  - height (int)
  - text color (3 hex, 6 hex or css color name)
  - background color (3 hex, 6 hex or css color name)
  - text (string)
- unsplash.it
  - http://unsplash.it
  - width (int)
  - height (int)
  - grayscale (boolean)
  - blur (boolean)
  - crop gravity (north, east, south, west, center)
- placekitten
  - http://placekitten.com
  - width (int)
  - height (int)
  - grayscale (boolean)
- LoremFlickr
  - http://loremflickr.com
  - width (int)
  - height (int)
  - grayscale (boolean)
  - keyword (string)
- LoremPixel
  - http://lorempixel.com
  - width (int)
  - height (int)
  - text (string)
  - category (abstract, animals, business, cats, city, food, nightlife, fashion, people, nature, sports, technics, transport)
- DummyImage
  - http://dummyimage.com
  - width (int)
  - height (int)
  - text color (3 hex, 6 hex or css color name)
  - background color (3 hex, 6 hex or css color name)
  - text (string)
  - format (gif(default), png, jpg)
- Fake Images Please
  - http://fakeimg.pl
  - width (int)
  - height (int)
  - text color (3 hex, 6 hex or css color names)
  - text alpha color (int 0-255)
  - background color (3 hex, 6 hex or css color names)
  - background alpha color (int 0-255)
  - text (string)
  - font (lobster, bebas, museo)
- placeskull
  - http://placeskull.com
  - width (int)
  - height (int)
  - background color (6 hex)
  - skull id (int)
  - print dimensions (boolean)
- Pipsum.com
  - http://pipsum.com
  - width (int)
  - height (int)

# Extension command features
 - Recently generated urls
 - Start with service list alphabetical, and move the last used service to the top of the list when it's used
 - Whenever filling in values, always save the last used value and use it as the default next time it's used.
  - Not sure if this needs to be global or local scope to each individual service. Maybe a consistent default "width" for example for all services makes sense.
  - If going with global scope, need to consider some services that support 3 color hex and some that only support 6 color hex. Might need to automatically convert 3 color hex codes to 6 color hex codes when necessary per service.

# Service popularity
  - This is based off of Google Trends
  - The lesser popular services don't have any data in Google Trends
  1. LoremPixel
  2. placekitten
  3. placehold.it
  4. DummyImage
  5. LoremFlickr
  6. Unsplash.it
  7. Fake Images Please
  8. placeskull
  9. Pipsum
