export default function recordToProduct(record) {
  return {
    id: record.id,
    nid: record.fields.nid,
    name: record.fields.name,
    description: record.fields.description,
    category: record.fields.category,
    isFeatured:
      record.fields.isFeatured === undefined ? false : record.fields.isFeatured,
    price: record.fields.price ? record.fields.price.toFixed(2) : 0,
    imageUrl: record.fields.imageUrl
  };
}
