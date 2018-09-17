export const productFields = [
  {
    id: "name",
    title: "Pavadinimas",
    component: "input",
    type: "text"
  },
  {
    id: "category",
    title: "Kategorija",
    component: "select"
  },
  {
    id: "price",
    title: "Kaina",
    component: "input",
    type: "number"
  },
  {
    id: "count",
    title: "Kiekis",
    component: "input",
    type: "number"
  },
  {
    id: "description",
    title: "Aprašymas",
    component: "textarea"
  }
];

export const categoryFields = [
  {
    id:"name",
    title: "Pavadinimas",
    component: "input",
    type: "text"
  }
];

export const orderFields = {
  allIds: [0, 1],
  byId: {
    0: { name: "Mažėjančia data" },
    1: { name: "Didėjančia data" }
  }
};