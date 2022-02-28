import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PROD = [
  {
    id: 'p1',
    price: 6,
    title: 'dd',
    description: 'dd'
  },
  {
    id: 'p2',
    price: 9,
    title: 'dd',
    description: 'dd'
  },
  {
    id: 'p3',
    price: 7,
    title: 'dd',
    description: 'dd'
  },
  {
    id: 'p4',
    price: 4,
    title: 'dd',
    description: 'dd'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PROD.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}

      </ul>
    </section>
  );
};

export default Products;
