//Exercise3
const artist = {
        name: "Van Gogh",
        portfolio: [
          {
            title: "Portrait",
            url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
          },
          {
            title: "Sky",
            url: "Sky.jpg"
          }
        ]
      };

      artist.portfolio.forEach(
        p => addCard(`${artist.name} - ${p.title}`, `<img src="${p.url}" alt="${p.title}" width="200"/>`)
      );