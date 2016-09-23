# A list of services to support

- placehold.it
  - http://placehold.it
  - width (int)
  - height (int)
  - text color (3 hex, 6 hex or css color name)
  - background color (3 hex, 6 hex or css color name)
  - text (string)
  - http://placehold.it/350x150 (width x height)
  - http://placehold.it/350 (height optional)
  - http://placehold.it/350?text=hello+world
  - http://placehold.it/350/ffffff/000000 (background/foreground)
- unsplash.it
  - http://unsplash.it
  - width (int)
  - height (int)
  - grayscale (boolean)
  - blur (boolean)
  - crop gravity (north, east, south, west, center)
  - https://unsplash.it/350/200 (width/height)
  - https://unsplash.it/g/350/200
  - https://unsplash.it/350/400?blur
  - https://unsplash.it/200/300/?gravity=east
- placekitten
  - http://placekitten.com
  - width (int)
  - height (int)
  - grayscale (boolean)
  - http://placekitten.com/200/300
  - http://placekitten.com/g/200/300
- LoremFlickr
  - http://loremflickr.com
  - width (int)
  - height (int)
  - grayscale (boolean)
  - keyword (string)
  - http://loremflickr.com/320/240
  - http://loremflickr.com/320/240/dog
  - http://loremflickr.com/g/320/240/paris (g, p, red, green, blue)
  - http://loremflickr.com/320/240/brazil,rio (or)
  - http://loremflickr.com/320/240/paris,girl/all (and)
  - http://loremflickr.com/g/320/240/paris,girl/all
  - http://loremflickr.com/320/240?random=1 (random query string to randomize it)
- LoremPixel
  - http://lorempixel.com
  - width (int)
  - height (int)
  - text (string)
  - category (abstract, animals, business, cats, city, food, nightlife, fashion, people, nature, sports, technics, transport)
  - http://lorempixel.com/400/200
  - http://lorempixel.com/g/400/200
  - http://lorempixel.com/400/200/sports
  - http://lorempixel.com/400/200/sports/Dummy-Text
- DummyImage
  - http://dummyimage.com
  - width (int)
  - height (int)
  - text color (3 hex, 6 hex or css color name)
  - background color (3 hex, 6 hex or css color name)
  - text (string)
  - format (gif(default), png, jpg)
  - https://dummyimage.com/600x400/000/fff (background/foreground) (height optional)
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
  - http://fakeimg.pl/300/
  - http://fakeimg.pl/250x100/
  - http://fakeimg.pl/250x100/ff0000/
  - http://fakeimg.pl/350x200/ff0000/000
  - http://fakeimg.pl/350x200/ff0000,128/000,255
  - http://fakeimg.pl/350x200/?text=Hello
  - http://fakeimg.pl/350x200/?text=World&font=lobster
- placeskull
  - http://placeskull.com
  - width (int)
  - height (int)
  - background color (6 hex)
  - skull id (int)
  - print dimensions (boolean)
  - placeskull.com/{width}/{height}/{color}/{img_id}/{print_dimensions}
  - You can set the fourth URL parameter to fetch a specific skull from the list below. default: random
  - The third URL parameter defines the imgage background color. It accepts six-digit hexadecimal color codes. default: "000000"
  - You can set the fifth URL parameter to print out image dimensions. default: "0"
- Pipsum.com
  - http://pipsum.com
  - width (int)
  - height (int)
  - http://pipsum.com/500x342.jpg

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
